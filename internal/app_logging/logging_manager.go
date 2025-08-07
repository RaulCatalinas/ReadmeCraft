package app_logging

import (
	"fmt"
	"io"
	"os"
	"path/filepath"
	"sync"
	"time"

	"github.com/RaulCatalinas/ReadmeCraft/internal/constants"
	"github.com/RaulCatalinas/ReadmeCraft/internal/types"
)

type loggingManager struct{}

func NewLoggingManagerGenerator() *loggingManager {
	return &loggingManager{}
}

type LoggerInstance struct {
	mu        sync.Mutex
	logBuffer []string
	writers   []io.Writer
}

var (
	instance *LoggerInstance
	once     sync.Once
)

var logPath string

func GetLogger() *LoggerInstance {
	once.Do(func() {
		userConfigDir, err := os.UserConfigDir()

		if err != nil {
			fmt.Fprintf(
				os.Stderr,
				"error when getting user config directory: %v\n",
				err,
			)

			return
		}

		appConfigDir := filepath.Join(userConfigDir, constants.APP_CONFIG_DIR)

		logDir := filepath.Join(appConfigDir, "Logs")

		logPath = filepath.Join(logDir, "app.log")

		instance = &LoggerInstance{
			logBuffer: make([]string, 0, 1000),
			writers:   []io.Writer{},
		}

		if err := os.MkdirAll(filepath.Dir(logPath), 0755); err != nil {
			fmt.Fprintf(os.Stderr, "error when creating the log directory: %v\n", err)
		}
	})

	return instance
}

func (l *LoggerInstance) SaveLogs() error {
	l.mu.Lock()
	defer l.mu.Unlock()

	if len(l.logBuffer) == 0 {
		return nil
	}

	if err := os.MkdirAll(filepath.Dir(logPath), 0755); err != nil {
		return fmt.Errorf("failed to create log directory: %v", err)
	}

	file, err := os.OpenFile(logPath, os.O_CREATE|os.O_WRONLY|os.O_APPEND, 0644)

	if err != nil {
		return fmt.Errorf("log file could not be opened: %v", err)
	}

	defer file.Close()

	for _, logEntry := range l.logBuffer {
		if _, err := file.WriteString(logEntry); err != nil {
			return fmt.Errorf("error writing logs to file: %v", err)
		}
	}

	l.logBuffer = make([]string, 0, 1000)

	return nil
}

func (l *LoggerInstance) log(level types.LogLevel, message string) {
	l.mu.Lock()
	defer l.mu.Unlock()

	timestamp := time.Now().Format("2006-01-02 15:04:05")
	logStr := fmt.Sprintf("%s - %s: %s\n", timestamp, level, message)

	l.logBuffer = append(l.logBuffer, logStr)

	for _, writer := range l.writers {
		writer.Write([]byte(logStr))
	}

	if level == types.LOG_LEVEL_FATAL {
		l.SaveLogs()
		os.Exit(1)
	}
}

func (loggingManager *loggingManager) WriteLog(level types.LogLevel, message string) {
	logger := GetLogger()

	logger.log(level, message)
}
