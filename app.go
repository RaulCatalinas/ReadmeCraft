package main

import (
	"context"
	"fmt"
	"os"

	"github.com/wailsapp/wails/v2/pkg/runtime"

	userPreferences "github.com/RaulCatalinas/ReadmeCraft/internal/user_preferences"
)

// App struct
type App struct {
	ctx context.Context
}

// NewApp creates a new App application struct
func NewApp() *App {
	return &App{}
}

// startup is called at application startup
func (a *App) startup(ctx context.Context) {
	// Perform your setup here
	a.ctx = ctx

	userPreferences.InitPreferences()
}

// domReady is called after front-end resources have been loaded
func (a App) domReady(ctx context.Context) {
	// Add your action here
}

// beforeClose is called when the application is about to quit,
// either by clicking the window close button or calling runtime.Quit.
// Returning true will cause the application to continue, false will continue shutdown as normal.
func (a *App) beforeClose(ctx context.Context) (prevent bool) {
	return false
}

// shutdown is called at application termination
func (a *App) shutdown(ctx context.Context) {
	// Perform your teardown here

	userPreferences.SavePreferences()
}

func (a *App) SaveFile(content string) {
	filePath, err := runtime.SaveFileDialog(
		a.ctx,
		runtime.SaveDialogOptions{
			Title:           "Save File",
			DefaultFilename: "README.md",
			Filters: []runtime.FileFilter{
				{
					DisplayName: "Markdown Files",
					Pattern:     "*.md",
				},
			},
		},
	)

	if err != nil {
		fmt.Printf("Error saving file: %v\n", err)

		return
	}

	if filePath == "" {
		fmt.Println("Save operation cancelled.")
		return
	}

	err = os.WriteFile(filePath, []byte(content), 0644)

	if err != nil {
		fmt.Printf("Error saving file: %v\n", err)

		return
	}

	fmt.Printf("File saved successfully to %s\n", filePath)
}
