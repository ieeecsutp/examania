# Modern Landing Page

A scalable and maintainable landing page built with modern web technologies and best practices.

## 🚀 Tech Stack

### Core Technologies

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with Container Queries and Cascade Layers
- **JavaScript (ES6+)** - Native ES Modules, no framework dependencies

### Build Tools

- **PostCSS** - CSS processing and optimization
  - `postcss-import` - Import CSS files
  - `postcss-nesting` - Native CSS nesting support
  - `autoprefixer` - Automatic vendor prefixing
  - `cssnano` - CSS minification for production

### Code Quality

- **ESLint** - JavaScript linting and code quality
- **Prettier** - Opinionated code formatting
- **Husky** - Git hooks automation
- **lint-staged** - Run linters on staged files only

## 📐 Architecture & Methodology

### CSS Architecture: ITCSS + BEM

This project uses **ITCSS** (Inverted Triangle CSS) combined with **BEM** (Block Element Modifier) for scalable and maintainable CSS.

#### ITCSS Layers (specificity increases from top to bottom):

- 01-settings/ → Design tokens (CSS Custom Properties)
- 02-generic/ → Resets and normalize
- 03-elements/ → Bare HTML elements
- 04-objects/ → Layout patterns (OOCSS)
- 05-components/ → UI components (BEM)
- 06-utilities/ → Single-purpose helpers

#### BEM Naming Convention

```
/* Block */
.c-button { }

/* Element */
.c-button__icon { }

/* Modifier */
.c-button--primary { }
.c-button--lg { }
```

**Prefixes:**

- `o-` → Objects (layout patterns)
- `c-` → Components (UI elements)
- `u-` → Utilities (helpers)

### Modern CSS Features

- **CSS Cascade Layers** (`@layer`) - Explicit cascade control
- **Container Queries** - Component-based responsive design
- **CSS Custom Properties** - Design tokens for theming
- **CSS Nesting** - Improved readability and maintainability
- **Logical Properties** - Internationalization-ready layouts

### JavaScript Architecture

- **ES Modules** - Native module system
- **Class-based Components** - Organized component structure
- **Separation of Concerns** - Utilities and business logic separated

## 📁 Project Structure

```
landing-page/
├── assets/
│ ├── css/
│ │ ├── main.css (compiled - not tracked)
│ │ └── styles/
│ │ ├── 01-settings/
│ │ │ ├── \_tokens.css
│ │ │ └── \_index.css
│ │ ├── 02-generic/
│ │ │ ├── \_reset.css
│ │ │ └── \_index.css
│ │ ├── 03-elements/
│ │ │ ├── \_typography.css
│ │ │ ├── \_forms.css
│ │ │ └── \_index.css
│ │ ├── 04-objects/
│ │ │ ├── \_container.css
│ │ │ ├── \_layout.css
│ │ │ └── \_index.css
│ │ ├── 05-components/
│ │ │ ├── \_button.css
│ │ │ ├── \_card.css
│ │ │ ├── \_hero.css
│ │ │ ├── \_navigation.css
│ │ │ └── \_index.css
│ │ ├── 06-utilities/
│ │ │ ├── \_spacing.css
│ │ │ ├── \_display.css
│ │ │ └── \_index.css
│ │ └── main.css
│ ├── js/
│ │ ├── main.js
│ │ └── modules/
│ │ ├── navigation.js
│ │ └── utils.js
│ └── images/
├── .husky/
├── index.html
├── package.json
├── postcss.config.js
├── eslint.config.js
├── .prettierrc
├── .gitignore
└── README.md
```

## 🛠️ Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- Git

### Installation

1. Clone the repository:

```
git clone https://github.com/ieeecsutp/examania
cd examania
```

2. Install dependencies:

```
npm run prepare
```

### Development

Start the development server with CSS watch mode:

```
npm run dev
```

Access the site at:

- Live Server: `http://127.0.0.1:5500`
- npx serve: `http://localhost:3000`

### Production Build

Build optimized CSS for production:

```
npm run build
```

This generates minified CSS in `assets/css/main.css`.

## 🔍 Code Quality

### Linting

Check for errors

```
npm run lint
```

Fix auto-fixable issues

```
npm run lint:fix
```

### Formatting

Format all files

```
npm run format
```

Check formatting

```
npm run format:check
```

## 📦 Browser Support

- Chrome/Edge (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Browsers with >1% market share
