import React from "react";

import ReactDOM, {createRoot} from "react-dom/client";
import Head_Block from "./components/Head/Head_Block"

import 'bootstrap/dist/css/bootstrap.min.css'



if (document.getElementById('root')) {
    
    const root = createRoot(document.getElementById("root"));

    root.render(
        <React.StrictMode>
       
              <header>
              {<Head_Block />}
              </header>
               
        </React.StrictMode>
    )
}
