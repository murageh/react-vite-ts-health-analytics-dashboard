# Access Afya Health Analytics Dashboard

This project is a React-based health analytics dashboard designed for Access Afya, a healthcare provider focused on
delivering quality, affordable primary care in urbanizing areas. The dashboard provides insights into key operational
metrics, incidents, staff performance, and trends over time.

> **Note:** This project is part of the Access Afya Health Analytics Dashboard (Proof of Concept), which is a full-stack
> web application that provides insights into key metrics and performance indicators for Access Afya health facilities.
> The backend code for the dashboard example is available [here](https://github.com/murageh/express-graphql-ts-server).

## Features

* **Key Metrics:** Displays important operational metrics at a glance.
* **Incident List:** Shows a list of reported incidents with patient details and incident type.
* **Line Charts:** Visualizes trends for footfall, patient satisfaction, and revenue.
* **Staff Performance Table:** Presents a table of staff members with their efficiency, NPS, and reported issues.
* **Light/Dark Mode Toggle:** Allows users to switch between light and dark themes. (Currently disabled)
* **Filtering and Sorting:** Enables users to filter and sort data in the incident list and staff table.
* **Responsive Design:** Adapts to various screen sizes for optimal viewing. (Optimized for medium-large screens)

## Technologies Used

* **Frontend:**
    * React
    * TypeScript
    * Vite
    * Tailwind CSS
    * Apollo Client
    * Chart.js
* **Backend:**
    * Node.js
    * TypeScript
    * GraphQL
    * TypeORM
    * SQLite/PostgreSQL

## Getting Started

1. **Clone the repository:**
   ```bash
   git clone https://github.com/murageh/react-vite-ts-health-analytics-dashboard.git
    cd react-vite-ts-health-analytics-dashboard
    ```
2. Install dependencies:
    ```bash
    npm install
    ```
3. Start the development server:
    ```bash
    npm run dev
    ```
4. (Optional) Seed the database:
    ```bash
    npm run seed // Make sure to have the backend running and properly configured before running this command.
    ```
5. Open [http://localhost:3000](http://localhost:5173) in your browser.

## Project Structure

- `src`: Contains the frontend React code.
    - `components`: Holds reusable React components.
    - `generated`: Contains the generated GraphQL types.
    - `assets`: Contains images and other static assets.
    - `layouts`: Contains layout components.
    - `pages`: Contains the main application pages.
    - `App.tsx`: The main application component.
    - `main.tsx`: The entry point for the React application.
    - `react-app-env.d.ts`: TypeScript declaration file for React.
    - `index.css`: Global CSS styles.
    - `App.css`: Component-specific CSS styles.
- `vite.config.ts`: Vite configuration file.
- `tsconfig.json`: TypeScript configuration file.
- `eslint.config.js`: ESLint configuration file.
- `codegen.ts`: Code generation script.
- `tailwind.config.js`: Tailwind CSS configuration file.
- `package.json`: Project package file.

## Code Generation

This project uses GraphQL Code Generator to generate TypeScript types from the GraphQL schema. To regenerate the types:

```bash
  npm run generate
```

## Contributing

Contributions are welcome! Please feel free to submit issues and pull requests.

## License

This project is licensed under the MIT License.

# TLDR; Original (React + Vite + TS) README.md

## The original README.md file is below.

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```
