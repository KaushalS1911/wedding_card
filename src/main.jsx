import {createRoot} from 'react-dom/client'
import App from './App.jsx'
import {BrowserRouter} from "react-router-dom";
import OAuthSuccess from "./components/login/OAuthSuccess.jsx";

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        {/*<OAuthSuccess>*/}
            <App/>
        {/*</OAuthSuccess>*/}
    </BrowserRouter>
)