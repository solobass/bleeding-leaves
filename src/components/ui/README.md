# UI Components

This folder contains all shadcn/ui components and custom UI components for the Bleeding Leaves website.

## Structure

```
src/components/
├── ui/                    # shadcn/ui components
│   ├── button.tsx        # Button component
│   └── README.md         # This file
├── custom/               # Custom components
│   └── README.md         # Custom components documentation
└── README.md             # Main components documentation
```

## Adding New Components

### From shadcn/ui:
```bash
npx shadcn@latest add [component-name]
```

### From 21st.dev:
```bash
npx shadcn@latest add "https://21st.dev/r/[author]/[component-name]"
```

### Custom Components:
Place custom components in `src/components/custom/` with proper documentation.

## Usage

Import components using the `@/` alias:
```jsx
import { Button } from "@/components/ui/button";
import { CustomComponent } from "@/components/custom/CustomComponent";
``` 