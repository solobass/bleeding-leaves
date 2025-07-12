# Custom Components

This folder contains custom components specifically created for the Bleeding Leaves website.

## Structure

```
src/components/custom/
├── README.md              # This file
├── ComponentName.jsx      # Custom component files
└── ComponentName.test.jsx # Component tests (if needed)
```

## Naming Convention

- Use PascalCase for component names
- Use `.jsx` extension for React components
- Include a descriptive name that indicates the component's purpose

## Example Custom Component

```jsx
// src/components/custom/AnimatedBackground.jsx
import React from 'react';

export function AnimatedBackground({ children, className = "" }) {
  return (
    <div className={`animated-bg ${className}`}>
      {children}
    </div>
  );
}
```

## Usage

Import custom components in your pages:
```jsx
import { AnimatedBackground } from "@/components/custom/AnimatedBackground";
``` 