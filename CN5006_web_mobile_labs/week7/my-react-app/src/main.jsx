import { StrictMode } from "react"
import { createRoot } from 'react-dom/client'
import './index.css'

import welcome from './app.jsx'

createRoot(document.getElementById('root')).render(
    <StrictMode>

        {/*<App/>*/}
        <welcome name="Tom"/>
    </StrictMode>
)