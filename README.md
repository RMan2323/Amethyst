# JavaScript
Doesn't need to end with semicolons but a good practice

### Arrow Functions

`export const export_name = fn_name((params) => ({obj_def}))`

`export const export_name = fn_name((params) => {code and return})`

# Node

`npm init -y`

`.gitignore` should have:
* `node_modules`
* `.env`

Inside `package.json`, we can define our own scripts to run such as `dev` and run them using `npm run dev`

# Backend
`nodemon` helps in restarting server as soon as any changes are saved

It is only required in deveopment and hence it is a `devDependency`

# Frontend
`cd frontend` and then `npm create vite@latest .` to initialize vite in current folder

Run `npm i`

Run chakra UI installation and wrap the App with Chakra Provider

`npm run dev` to run frontend

`npm i react-router-dom` and wrap App with `BrowserRouter` to use components coming from react router dom

`npm i zustand` for storing state globally

### Basic Frontend Folder Structure
```
frontend/
├── node_modules/           # Project dependencies
├── public/                 # Static files (index.html, images etc.)
└── src/                    # Source code
    ├── components/         # Reusable UI components
    |   └── globals.css     # Themes
    │   └── Navbar.jsx      # Navigation bar component
    ├── pages/              # Page components
    │   ├── CreatePage.jsx  # Page for creating content
    │   └── HomePage.jsx    # Homepage component
    ├── App.jsx             # Root app component
    └── main.jsx            # Application entry point
```