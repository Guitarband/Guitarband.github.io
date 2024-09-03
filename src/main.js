import React, {StrictMode, useContext} from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {PageProvider, usePageContext} from './PageContext.jsx'

function Main(){
    const {value} = usePageContext()
    return (
        <div>
            {value === "home" && <App />}
            {value === "about" && <h1>About</h1>}
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
