
// import { createRoot } from 'react-dom/client'
// import { BrowserRouter } from 'react-router-dom'
// import App from './App.jsx'
// import {Provider} from "react-redux"
// import store from './reduxstore/store.js'
// createRoot(document.getElementById('root')).render(
//     <provider store={store}>
//         <BrowserRouter>
        
//     <App />
//     </BrowserRouter>
//     </provider>

// )

import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import { Provider } from "react-redux"; // ✅ Ensure correct import
import store from "./reduxstore/store.js";

createRoot(document.getElementById("root")).render(
    <Provider store={store}>  {/* ✅ Capitalized Provider */}
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
);
