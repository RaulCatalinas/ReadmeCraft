package types

type LogLevel string

const (
	LOG_LEVEL_DEBUG   LogLevel = "DEBUG"
	LOG_LEVEL_INFO    LogLevel = "INFO"
	LOG_LEVEL_WARNING LogLevel = "WARNING"
	LOG_LEVEL_ERROR   LogLevel = "ERROR"
	LOG_LEVEL_FATAL   LogLevel = "FATAL"
)

var AllLogLevels = []struct {
	Value  LogLevel
	TSName string
}{
	{LOG_LEVEL_DEBUG, "DEBUG"},
	{LOG_LEVEL_INFO, "INFO"},
	{LOG_LEVEL_WARNING, "WARNING"},
	{LOG_LEVEL_ERROR, "ERROR"},
	{LOG_LEVEL_FATAL, "FATAL"},
}
