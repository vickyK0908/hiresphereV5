# HireSphere — React Job Listing App

## How to Run
```bash
npm install
npm start
```

## How to Build (Deploy)
```bash
npm run build
```
Upload the generated `/build` folder to:
- **Netlify**: Drag-and-drop the /build folder at netlify.com/drop
- **Vercel**: `npx vercel --prod` in the project folder
- **GitHub Pages**: Use `gh-pages` package with homepage in package.json

---

## Professor Criteria — Where Each is Satisfied

| Criteria | File(s) | Detail |
|---|---|---|
| **React JSX** | All `.js` files | Every component returns JSX (HTML-like syntax inside JS) |
| **React Components — Component API** | `Navbar.js`, `Home.js`, `BrowseJobs.js` | Functional Components using Component API |
| **React Components — Constructors** | `JobCard.js` | Class Component with `constructor(props)` and `super(props)` |
| **React Dataflow — State** | `JobCard.js`, `Home.js`, `BrowseJobs.js` | `this.state` in class; `useState` in functional components |
| **React Dataflow — Props** | `BrowseJobs.js` → `JobCard.js` | Job data passed as props from parent to child |
| **React Dataflow — Props Validation** | `JobCard.js` | `PropTypes.string.isRequired`, `PropTypes.arrayOf` defined |
| **Styling in React** | All `.css` files | External CSS imported, `className`, inline `style={{}}`, CSS Variables |
| **Hooks** | `Navbar.js`, `Home.js`, `BrowseJobs.js` | `useState`, `useEffect`, `useLocation` |
| **Routing** | `App.js`, `Navbar.js` | `BrowserRouter`, `Routes`, `Route`, `Link`, `useLocation` |
| **Deploying React Applications** | `package.json` | `npm run build` script; deploy via Netlify/Vercel/GitHub Pages |
