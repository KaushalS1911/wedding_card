import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from "react-router-dom";
import PolotnoEditorProvider from './pages/editor/PolotnoEditorProvider.jsx';
import { FiberProvider } from 'its-fine';

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <FiberProvider>
            <App />
            <PolotnoEditorProvider />
        </FiberProvider>
    </BrowserRouter>
)