import React from "react";

import ReactDOM, {createRoot} from "react-dom/client";
import Example from "./components/Example";

if (document.getElementById('root')) {
    
    const root = createRoot(document.getElementById("root"));

    root.render(
        <React.StrictMode>
       
                    {<Example/>}
               
        </React.StrictMode>
    )
}
