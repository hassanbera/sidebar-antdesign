# Sidebar Dashboard

A modern, responsive sidebar dashboard built with React and Ant Design. Features a collapsible navigation menu with theme toggle functionality and beautiful UI components.

## 🚀 Features

- **Responsive Sidebar Navigation** - Clean, collapsible sidebar with menu items
- **Theme Toggle** - Switch between light and dark themes seamlessly
- **Modern UI Components** - Built with Ant Design for professional appearance
- **Submenu Support** - Expandable menu sections with nested items
- **Fast Development** - Powered by Vite for lightning-fast hot reload

## 🛠️ Tech Stack

- **React 18.3.1** - Modern React with hooks
- **Ant Design 5.26.4** - Professional UI component library
- **Vite** - Next generation frontend tooling
- **CSS3** - Custom styling and responsive design

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/hassanbera/sidebar.git
cd sidebar
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 🎨 Components

### MenuList
- Navigation menu with icons and labels
- Submenu support for organizing related items
- Theme-aware styling

### ToggleThemeButton
- Interactive button to switch themes
- Visual feedback with different icons
- Positioned at the bottom of sidebar

### Logo
- Brand logo component
- Consistent styling across themes

## 🌗 Theme System

The application supports two themes:
- **Light Theme** - Clean blue sidebar with light backgrounds
- **Dark Theme** - Dark sidebar with matching header

Theme state is managed globally and affects:
- Sidebar appearance
- Header background
- Menu item styling
- Button states

## 📱 Layout Structure

```
Layout
├── Sider (Sidebar)
│   ├── Logo
│   ├── MenuList
│   └── ToggleThemeButton
└── Layout (Main Content Area)
    └── Header (with collapse button)
```

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📂 Project Structure

```
src/
├── components/
│   ├── Logo.jsx
│   ├── MenuList.jsx
│   └── ToggleThemeButton.jsx
├── App.jsx
├── App.css
├── index.css
└── main.jsx
```

## 🎯 Key Features Implemented

- **Collapsible Sidebar** - Toggle sidebar width with button
- **Menu Navigation** - Home, Activity, Progress, Payment, Settings
- **Submenu System** - Organized task management section
- **Responsive Design** - Works on various screen sizes
- **Theme Consistency** - Unified styling across all components

## 🚀 Future Enhancements

- Add routing for menu items
- Implement content areas for each menu section
- Add user authentication
- Include more theme options
- Add mobile-responsive breakpoints

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**Hassan Bera** - [GitHub](https://github.com/hassanbera)

---

Built with ❤️ using React and Ant Design
