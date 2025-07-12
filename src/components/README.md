# Components

This folder contains all React components for the Bleeding Leaves website.

## Folder Structure

```
src/components/
├── ui/                    # shadcn/ui components
│   ├── button.tsx        # Button component
│   └── README.md         # UI components documentation
├── custom/               # Custom components
│   └── README.md         # Custom components documentation
└── README.md             # This file
```

## Quick Start

### Adding a new shadcn/ui component:
```bash
npx shadcn@latest add button
```

### Adding a component from 21st.dev:
```bash
npx shadcn@latest add "https://21st.dev/r/author/component-name"
```

### Creating a custom component:
1. Create the component in `src/components/custom/`
2. Follow the naming convention (PascalCase)
3. Add proper documentation
4. Import using `@/components/custom/ComponentName`

## Import Examples

```jsx
// shadcn/ui components
import { Button } from "@/components/ui/button";

// Custom components
import { AnimatedBackground } from "@/components/custom/AnimatedBackground";
```

## Best Practices

- Keep components focused and single-purpose
- Use TypeScript for better type safety
- Include proper documentation
- Follow consistent naming conventions
- Test components when possible 