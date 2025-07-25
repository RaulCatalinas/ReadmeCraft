# ReadmeCraft 🛠️

> **Craft beautiful README.md files effortlessly with an intuitive desktop application**

ReadmeCraft is a powerful, cross-platform desktop application built with Go and Wails that helps developers create comprehensive and professional README.md files for their projects. No more staring at blank files or wondering what sections to include!

## ✨ Features

### 🎯 **Smart Template System**

- Pre-built templates for different project types (Web Apps, CLI Tools, Libraries, APIs)
- Customizable templates with intelligent field suggestions
- Save and reuse your favorite templates

### 🔄 **Real-time Preview**

- Live markdown preview as you type
- Split-pane interface for seamless editing experience
- Syntax highlighting for code blocks

### 🤖 **Intelligent Auto-detection**

- Automatically detects project information from `package.json`, `go.mod`, `requirements.txt`, etc.
- Extracts Git repository information
- Suggests relevant badges and shields

### 🎨 **Rich Content Support**

- Badge generator with popular services integration
- Table of contents auto-generation
- Image and GIF insertion with drag & drop
- Code snippet formatting

### ✅ **Quality Assurance**

- Built-in README best practices checker
- Link validation
- Markdown syntax verification
- Completeness scoring

## 📦 Installation

### Download Pre-built Binaries

Download the latest release for your platform:

- **Windows**: [ReadmeCraft-windows-amd64.exe](https://github.com/yourusername/readmecraft/releases/latest)
- **macOS**: [ReadmeCraft-darwin-amd64.dmg](https://github.com/yourusername/readmecraft/releases/latest)
- **Linux**: [ReadmeCraft-linux-amd64.AppImage](https://github.com/yourusername/readmecraft/releases/latest)

### Build from Source

```bash
# Clone the repository
git clone https://github.com/yourusername/readmecraft.git
cd readmecraft

# Install dependencies
go mod tidy

# Install Wails CLI (if not already installed)
go install github.com/wailsapp/wails/v2/cmd/wails@latest

# Build the application
wails build
```

### Requirements

- **Go**: 1.24.2 or higher
- **Node.js**: 16 or higher (for frontend dependencies)
- **Wails**: v2.x

## 🚀 Quick Start

1. **Launch ReadmeCraft** from your applications menu or command line
2. **Choose a template** that matches your project type
3. **Fill in the guided form** with your project details
4. **Preview in real-time** as your README takes shape
5. **Export or save** your polished README.md file

## 🎛️ Usage

### Creating Your First README

1. Click **"New Project"** or use `Ctrl/Cmd + N`
2. Select from available templates:

   - 🌐 **Web Application**
   - 🔧 **CLI Tool**
   - 📚 **Library/Package**
   - 🔌 **API/Backend Service**
   - 📱 **Mobile App**
   - 🎮 **Game**
   - 📝 **Documentation**

3. Fill in the project information through the intuitive form interface
4. Watch the real-time preview update as you type
5. Use the **Quality Checker** to ensure your README follows best practices
6. Export to your project directory

### Advanced Features

#### Auto-detection

ReadmeCraft can automatically populate fields by analyzing your project:

```bash
# Open ReadmeCraft in your project directory
readmecraft /path/to/your/project
```

#### Custom Templates

Create and save your own templates:

1. Go to **Settings** → **Templates**
2. Create a new template or modify existing ones
3. Use template variables like `{{project_name}}`, `{{description}}`, etc.

#### Batch Processing

Generate READMEs for multiple projects:

```bash
readmecraft --batch /path/to/projects/directory
```

## 🏗️ Project Structure

```
readmecraft/
├── app/                    # Wails application logic
│   ├── app.go             # Main application struct
│   └── context.go         # Application context
├── build/                 # Build configurations and assets
├── frontend/              # React/TypeScript frontend
│   ├── src/
│   │   ├── components/    # React components
│   │   ├── templates/     # README templates
│   │   └── utils/         # Utility functions
│   └── public/            # Static assets
├── internal/              # Internal Go packages
│   ├── generator/         # README generation logic
│   ├── parser/            # Project file parsers
│   └── templates/         # Template management
├── assets/                # Application assets
└── wails.json            # Wails configuration
```

## 🤝 Contributing

We welcome contributions! Here's how you can help:

### Development Setup

1. **Fork and clone** the repository
2. **Install dependencies**:
   ```bash
   go mod tidy
   cd frontend && npm install
   ```
3. **Run in development mode**:
   ```bash
   wails dev
   ```

### Contribution Guidelines

- 🐛 **Bug Reports**: Use the issue template and include detailed reproduction steps
- ✨ **Feature Requests**: Describe the use case and expected behavior
- 🔧 **Code Contributions**: Follow our coding standards and include tests
- 📚 **Documentation**: Help improve our docs and examples

### Code Style

- Go code follows `gofmt` and `golint` standards
- Frontend uses ESLint and Prettier configurations
- Commit messages follow [Conventional Commits](https://conventionalcommits.org)

## 📋 Roadmap

### Version 1.1 (Next Release)

- [ ] GitHub integration for automatic repository detection
- [ ] More template options (Docker, Kubernetes, etc.)
- [ ] Multi-language support (Spanish, French, German)
- [ ] Plugin system for custom generators

### Version 1.2 (Future)

- [ ] Team collaboration features
- [ ] Cloud sync for templates and preferences
- [ ] AI-powered content suggestions
- [ ] Integration with popular documentation tools

## 🐛 Known Issues

- **Windows**: Antivirus software may flag the executable (false positive)
- **macOS**: First launch may require manual approval in Security Settings
- **Linux**: AppImage requires `fuse` to be installed

See our [Issues page](https://github.com/yourusername/readmecraft/issues) for the complete list.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **[Wails](https://wails.io)** - For the amazing Go + Web framework
- **[Go](https://golang.org)** - For the robust backend language
- **[React](https://reactjs.org)** - For the responsive frontend
- **Community contributors** - Thank you for your valuable feedback and contributions!

## 📞 Support

- 📧 **Email**: support@readmecraft.dev
- 💬 **Discord**: [Join our community](https://discord.gg/readmecraft)
- 🐦 **Twitter**: [@ReadmeCraft](https://twitter.com/readmecraft)
- 📖 **Documentation**: [docs.readmecraft.dev](https://docs.readmecraft.dev)

---

<div align="center">

**Made with ❤️ by developers, for developers**

[⭐ Star this repo](https://github.com/yourusername/readmecraft) | [🐛 Report Bug](https://github.com/yourusername/readmecraft/issues) | [💡 Request Feature](https://github.com/yourusername/readmecraft/issues)

</div>
