# ReadmeCraft 🛠️

> **Craft beautiful README.md files effortlessly with an intuitive desktop application**

ReadmeCraft is a powerful, cross-platform desktop application built with Go and Wails that helps developers create comprehensive and professional README.md files for their projects. No more staring at blank files or wondering what sections to include!

## ✨ Features

### 🎯 **Smart Template System**

- Pre-built templates for different project types (Web Apps, CLI Tools, Libraries, APIs, etc.)

### 🔄 **Real-time Preview**

- Live markdown preview as you type
- Split-pane interface for seamless editing experience

## 📦 Installation

### Download Pre-built Binaries

Download the latest release for your platform:

- **Windows**: [ReadmeCraft-windows](https://github.com/RaulCatalinas/ReadmeCraft/releases)
- **macOS**: [ReadmeCraft-darwin](https://github.com/RaulCatalinas/ReadmeCraft/releases)
- **Linux**: [ReadmeCraft-linux](https://github.com/RaulCatalinas/ReadmeCraft/releases)

### Build from Source

```bash
# Clone the repository
git clone https://github.com/yourusername/readmecraft.git
cd readmecraft

# Install Wails CLI (if not already installed)
go install github.com/wailsapp/wails/v2/cmd/wails@latest

# Build the application
wails build
```

### Requirements

- **Go**: 1.24.2 or higher
- **Node.js**: 22.14.x or higher (for frontend dependencies)
- **Wails**: v2.10.x

## 🚀 Quick Start

1. **Launch ReadmeCraft** from your applications menu
2. **Choose a template** that matches your project type
3. **Fill in the guided form** with your project details
4. **Preview in real-time** as your README takes shape
5. **Export or save** your polished README.md file

## 🎛️ Usage

### Creating Your First README

1. Select from available templates:

   - 🌐 **Web Application**
   - 🔧 **CLI Tool**
   - 📚 **Library**
   - 🔌 **API Service**
   - 📱 **Multiplatform App**

2. Fill in the project information through the intuitive form interface
3. Watch the real-time preview update as you type
4. Export to your project directory

## 🤝 Contributing

We welcome contributions! Here's how you can help:

### Development Setup

1. **Fork and clone** the repository
2. **Install dependencies**:
   ```bash
   cd frontend && bun install
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
- Frontend uses `ESLint` and `Prettier` configurations

## 📄 License

This project is licensed under the CC BY-NC-SA 4.0 License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **[Wails](https://wails.io)** - For the amazing Go + Web framework
- **[Go](https://golang.org)** - For the robust backend language
- **[React](https://reactjs.org)** - For the responsive frontend
- **Community contributors** - Thank you for your valuable feedback and contributions!

## 📞 Support

- **GitHub**: https://github.com/RaulCatalinas/ReadmeCraft/issues

---

<div align="center">

**Made with ❤️ by developers, for developers**

[⭐ Star this repo](https://github.com/yourusername/readmecraft) | [🐛 Report Bug](https://github.com/yourusername/readmecraft/issues) | [💡 Request Feature](https://github.com/yourusername/readmecraft/issues)

</div>
