import React, {StrictMode, useContext} from 'react'
import { createRoot } from 'react-dom/client'
import App from './src/App.jsx'
import './src/index.css'
import {PageProvider, usePageContext} from './src/PageContext.jsx'
import About from "./src/About.jsx";

function Main(){
    const {value} = usePageContext()
    return (
        <div>
            {value === "home" && <App />}
            {value === "about" && <About />}
            {value === "projects" && <h1>Projects</h1>}
        </div>
    )
}

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <PageProvider>
            <Main />
        </PageProvider>
    </StrictMode>
)
