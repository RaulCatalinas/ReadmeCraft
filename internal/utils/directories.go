package utils

import (
	"fmt"
	"os"
)

func CreateDirectory(name string) bool {
	err := os.Mkdir(name, os.ModeDir)

	if err != nil {
		fmt.Printf("Error creating directory %s: %v\n", name, err)

		return false
	}

	fmt.Printf("Directory %s created successfully\n", name)

	return true
}
