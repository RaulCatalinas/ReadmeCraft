package main

import (
	"embed"
	"fmt"
	"net/http"
	"os"
	"strings"

	"github.com/wailsapp/wails/v2"
	"github.com/wailsapp/wails/v2/pkg/options"
	"github.com/wailsapp/wails/v2/pkg/options/assetserver"

	appLogging "github.com/RaulCatalinas/ReadmeCraft/internal/app_logging"
	"github.com/RaulCatalinas/ReadmeCraft/internal/types"
	userPreferences "github.com/RaulCatalinas/ReadmeCraft/internal/user_preferences"
	"github.com/RaulCatalinas/ReadmeCraft/internal/utils"
)

//go:embed all:frontend/dist
var assets embed.FS

//go:embed build/appicon.png
var icon []byte

type FileLoader struct {
	http.Handler
}

func NewFileLoader() *FileLoader {
	return &FileLoader{}
}

func (h *FileLoader) ServeHTTP(res http.ResponseWriter, req *http.Request) {
	var err error
	requestedFilename := strings.TrimPrefix(req.URL.Path, "/")
	println("Requesting file:", requestedFilename)
	fileData, err := os.ReadFile(requestedFilename)
	if err != nil {
		res.WriteHeader(http.StatusBadRequest)
		res.Write([]byte(fmt.Sprintf("Could not load file %s", requestedFilename)))
	}

	res.Write(fileData)
}

func main() {
	// Create an instance of the app structure
	app := NewApp()

	// Create application with options
	err := wails.Run(&options.App{
		Title:         "ReadmeCraft",
		Width:         1200,
		Height:        700,
		DisableResize: true,
		AssetServer: &assetserver.Options{
			Assets:  assets,
			Handler: NewFileLoader(),
		},
		OnStartup:  app.startup,
		OnShutdown: app.shutdown,
		Bind: []interface{}{
			app,
			userPreferences.NewUserPreferencesGenerator(),
			appLogging.NewLoggingManagerGenerator(),
			utils.NewUtilsGenerator(),
		},
		EnumBind: []interface{}{
			types.AllUserPreferences,
			types.AllLogLevels,
		},
	})

	if err != nil {
		println("Error:", err.Error())
	}
}
