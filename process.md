# Process Flow Documentation

## 1. Architecture

The project follows a standard **Vite + React** architecture, chosen for its performance, modularity, and scalability.

-   **`src/`**: The core source code directory.
    -   **`components/`**: Contains reusable UI components (e.g., `Navbar`, `Projects`, `Techstack`). This separation ensures that components are isolated and easily maintainable.
    -   **`App.jsx`**: The main application component that orchestrates the layout and routing.
    -   **`main.jsx`**: The entry point that mounts the React application to the DOM.
-   **`public/`**: Contains static files that don't need processing by Webpack/Vite (e.g., `favicon`, `manifest.json`).
-   **Root Configuration Files**: `vite.config.js`, `tailwind.config.js`, `package.json` are kept at the root for easy access to project-wide settings.

This structure allows for a clear separation of concerns: **Logic (JS/JSX)**, **Styles (CSS/Tailwind)**, and **Configuration** are distinct, making the codebase easier to navigate and extend.

## 2. AI Usage


I utilized AI agents to accelerate development, debug issues, and optimize performance. Key prompts included:

1.  **"Fix Navbar Navigation"**: To debug and resolve issues where navigation links were not scrolling to the correct sections.
    *   *Prompt *: "The 'Projects' and 'Publications' links in the Navbar are unresponsive. Fix the scroll handler to ensure they scroll to the correct section IDs."
2.  **"Mobile Performance Optimization"**: To address low mobile performance scores.
    *   *Prompt *: "Analyze the codebase and implement optimizations to reach a score of 90+. Focus on code splitting and reducing main thread blocking."



## 3. Challenges


### **Challenge: Mobile Performance Bottleneck**
**The Bug/Issue:**
The initial mobile performance score on Lighthouse was significantly low . The main thread was being blocked for too long, causing a poor user experience on lower-end devices. The "Time to Interactive" (TTI) and "Total Blocking Time" (TBT) metrics were high due to large JavaScript bundles and expensive CSS effects.

**The Fix:**
I implemented a multi-faceted optimization strategy:

1.  **Code Splitting & Lazy Loading**:
    I identified that the entire application was being loaded in a single bundle. I introduced `React.lazy` and `Suspense` to split the code by routes/components.
   
2.  **CSS Performance (Backdrop Filter)**:
    I discovered that the `backdrop-filter: blur()` effect was extremely resource-intensive on mobile GPUs. I implemented a conditional check to disable this effect on mobile devices, significantly improving rendering performance without compromising the core visual identity.

**Result:**
These changes reduced the initial load time and improved the interactivity metrics, moving the performance score towards the target of 90+.
