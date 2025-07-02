# React Cursor FX
A React library for custom cursors with TypeScript support.  

## Notes
- Images for custom cursors must be a maximum of 128x128 pixels due to browser limitations.

## Installation
```bash
npm install react-cursor-fx
```

## Usage
```jsx
import { Cursor } from 'react-cursor-fx';

// Default cursor on body
<Cursor type="custom" size={30} imageUrl="/cursor.png" />

// Cursor on specific element with ref
const ref = useRef(null);
<Cursor type="pointer" targetElement={ref} />
<section ref={ref}>...</section>

// Cursor with CSS selector
<Cursor type="crosshair" targetElement=".my-class" />
```

## Props
- `type`: Cursor type (e.g., "default", "pointer", "crosshair", "custom").  

- `size`: Size in pixels (default: 20).  

- `imageUrl`: URL for custom cursor image.  

- `targetElement`: Ref or CSS selector for specific element.  
