# Bleeding Leaves - UI Component Guide

## 🎯 Quick Start

This guide helps you easily add and use UI components from shadcn/ui and 21st.dev.

## 📁 Folder Structure

```
src/components/
├── ui/                    # shadcn/ui components
│   ├── button.tsx        # Button component
│   └── README.md         # UI components documentation
├── custom/               # Custom components
│   └── README.md         # Custom components documentation
└── README.md             # Main components documentation
```

## 🚀 Adding Components

### From shadcn/ui Registry:
```bash
npx shadcn@latest add button
npx shadcn@latest add card
npx shadcn@latest add input
```

### From 21st.dev:
```bash
npx shadcn@latest add "https://21st.dev/r/author/component-name"
```

### Examples:
```bash
# Add a background component
npx shadcn@latest add "https://21st.dev/r/jatin-yadav05/etheral-shadow"

# Add an animated component
npx shadcn@latest add "https://21st.dev/r/author/animated-card"
```

## 📝 Usage Examples

### Import Components:
```jsx
// shadcn/ui components
import { Button } from "@/components/ui/button";

// 21st.dev components
import { Component } from "@/components/ui/component-name";

// Custom components
import { CustomComponent } from "@/components/custom/CustomComponent";
```

### Use in App.jsx:
```jsx
import './App.css';
import { Button } from "@/components/ui/button";
import { Component } from "@/components/ui/component-name";

function App() {
  return (
    <div className="site-root">
      {/* Your existing sections */}
      
      {/* New component section */}
      <section className="new-component-section">
        <Component />
        <Button>Click me</Button>
      </section>
    </div>
  );
}
```

## 🎨 Styling

- Components use Tailwind CSS classes
- Custom styling can be added via className prop
- Dark mode support is built-in
- Responsive design is included

## 🔧 Troubleshooting

### If components don't show:
1. Check browser console for errors
2. Verify import paths are correct
3. Ensure Tailwind CSS is working
4. Check if dependencies are installed

### If styling is broken:
1. Verify PostCSS configuration
2. Check Tailwind CSS setup
3. Ensure CSS imports are correct

## 📚 Resources

- [shadcn/ui Documentation](https://ui.shadcn.com/)
- [21st.dev Components](https://21st.dev/)
- [Tailwind CSS Documentation](https://tailwindcss.com/)

## 🎯 Next Steps

1. Browse [21st.dev](https://21st.dev/) for interesting components
2. Try adding components to different sections
3. Customize components to match your design
4. Create custom components in `src/components/custom/` 