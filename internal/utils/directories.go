package utils

import (
	"fmt"
	"os"
	"path/filepath"

	"github.com/skratchdot/open-golang/open"

	appLogging "github.com/RaulCatalinas/ReadmeCraft/internal/app_logging"
	"github.com/RaulCatalinas/ReadmeCraft/internal/constants"
	"github.com/RaulCatalinas/ReadmeCraft/internal/types"
)

var loggerManagerGenerator = appLogging.NewLoggingManagerGenerator()

type utilsGenerator struct{}

func NewUtilsGenerator() *utilsGenerator {
	return &utilsGenerator{}
}

func CreateDirectoryIfNotExist(name string) bool {
	err := os.Mkdir(name, os.ModeDir)

	if os.IsExist(err) {
		loggerManagerGenerator.WriteLog(
			types.LOG_LEVEL_INFO,
			fmt.Sprintf(
				"Directory %s already exists, skipping creation",
				name,
			),
		)

		return true
	}

	if err != nil {
		loggerManagerGenerator.WriteLog(
			types.LOG_LEVEL_ERROR,
			fmt.Sprintf("Failed to create directory %s: %s", name, err.Error()),
		)

		return false
	}

	loggerManagerGenerator.WriteLog(
		types.LOG_LEVEL_INFO,
		fmt.Sprintf("Directory %s created successfully", name),
	)

	return true
}

func (utg *utilsGenerator) OpenLogDirectory() {
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

	openDirectoryErr := open.Run(filepath.Join(appConfigDir, "Logs"))

	if openDirectoryErr != nil {
		loggerManagerGenerator.WriteLog(
			types.LOG_LEVEL_ERROR,
			fmt.Sprintf(
				"Error attempting to open the logs directory: %s",
				openDirectoryErr.Error(),
			),
		)
	}
}
