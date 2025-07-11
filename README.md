# tonic-savannah

A modern React application powered by [TanStack Router](https://tanstack.com/router), [TanStack Query](https://tanstack.com/query), [MUI](https://mui.com/), and [Vite](https://vitejs.dev/).

## 🚀 Getting Started

1. **Install dependencies:**

   ```bash
   npm install
   ```

2. **Start the development server:**

   ```bash
   npm run dev
   ```

   The app will be available at [http://localhost:3000](http://localhost:3000).

3. **Build for production:**
   ```bash
   npm run build
   ```

## 🧪 Testing

This project uses [Vitest](https://vitest.dev/):

```bash
npm run test
```

## 🎨 Styling

- Uses [MUI](https://mui.com/) for UI components.
- [Emotion](https://emotion.sh/docs/introduction) for CSS-in-JS styling.

## 🧹 Linting & Formatting

- [ESLint](https://eslint.org/) with [@tanstack/eslint-config](https://tanstack.com/config/latest/docs/eslint)
- [Prettier](https://prettier.io/) for code formatting

```bash
npm run lint      # Lint code
npm run format    # Format code
npm run check     # Format & fix lint issues
```

## 🗺️ Routing

- File-based routing with TanStack Router.
- Add new routes in `src/routes/`.
- The root layout is in `src/routes/__root.tsx` (uses `<Outlet />` for nested routes).

## 🔗 Navigation

Use the `Link` component from `@tanstack/react-router` for SPA navigation:

```tsx
import { Link } from "@tanstack/react-router";

<Link to="/about">About</Link>;
```

## 📦 Data Fetching

- Use [TanStack Query](https://tanstack.com/query) for data fetching and caching.
- You can also use route `loader` functions for preloading data.

<!-- ## 🗃️ State Management

- For global state, consider [TanStack Store](https://tanstack.com/store) or React context. -->

## 🛠️ Scripts

| Command          | Description              |
| ---------------- | ------------------------ |
| `npm run dev`    | Start dev server         |
| `npm run build`  | Build for production     |
| `npm run serve`  | Preview production build |
| `npm run test`   | Run tests                |
| `npm run lint`   | Lint code                |
| `npm run format` | Format code              |
| `npm run check`  | Format & fix lint issues |

## 📚 Learn More

- [TanStack Docs](https://tanstack.com)
- [MUI Docs](https://mui.com/)
- [Vite Docs](https://vitejs.dev/)

---

_This project was bootstrapped with TanStack Router and Vite. See `README_old.md` for legacy setup details._
