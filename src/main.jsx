import React, {StrictMode, useContext} from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {PageProvider} from './PageContext.jsx'

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <PageProvider>
            <App />
        </PageProvider>
    </StrictMode>
)
