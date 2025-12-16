# Quick Start Guide: ROS 2 Robotics Module

## Getting Started

This guide will help you set up and run the ROS 2 Robotics Module website locally for development and testing.

### Prerequisites

- Node.js version 18 or higher
- npm or yarn package manager
- Git for version control
- Basic knowledge of command line tools

### Installation Steps

1. **Clone the repository** (if not already done):
   ```bash
   git clone https://github.com/abdul-qadir12324/physical-AI-humanoid-robotics-book1.git
   cd physical-AI-humanoid-robotics-book1
   ```

2. **Navigate to the project directory** and install dependencies:
   ```bash
   # If Docusaurus structure doesn't exist yet, create it:
   npx create-docusaurus@latest website classic
   cd website
   npm install
   ```

3. **Run the development server**:
   ```bash
   npm start
   ```

   This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Project Structure Overview

After setup, your project structure will look like:

```
website/
├── blog/           # Blog posts (optional)
├── docs/           # Documentation files (chapters will go here)
├── src/
│   ├── components/ # React components
│   ├── css/        # Custom CSS files
│   └── pages/      # Standalone pages
├── static/         # Static files (images, etc.)
├── docusaurus.config.js  # Configuration file
├── package.json
└── sidebars.js     # Sidebar configuration
```

### Adding Content

To add the ROS 2 content:

1. **Create the module directory** in `docs/`:
   ```bash
   mkdir docs/module-1-ros2-basics
   ```

2. **Add the chapters**:
   - Create `docs/module-1-ros2-basics/chapter-1-introduction-to-ros2.md`
   - Create `docs/module-1-ros2-basics/chapter-2-python-to-robot.md`
   - Create `docs/module-1-ros2-basics/chapter-3-robot-body-basics.md`

3. **Update the sidebar** in `sidebars.js` to include your new documentation.

### Building for Production

To build the website for deployment:

```bash
npm run build
```

This command generates static content into the `build` directory and can be served using any static content hosting service.

### Deployment

The website can be deployed to GitHub Pages by running:

```bash
GIT_USER=<your-github-username> npm run deploy
```

### Next Steps

1. Review the [Docusaurus documentation](https://docusaurus.io/docs) for more details
2. Start creating your ROS 2 content in the `docs/` directory
3. Customize the theme and styling as needed
4. Add navigation in `sidebars.js`