import React from "react";

import ReactDOM, { createRoot } from "react-dom/client";
import Head_Block from "./components/Head/Head_Block";
import Navigation_Panel from "./components/Navigation_Panel/Navigation_Block";
import Carusel_Block from "./components/Carusel/Carusel_Block"
import Info_Block from "./components/Info_Block/Info_Block"
import Content_Block from "./components/Content/Content_Block"
import "bootstrap/dist/css/bootstrap.min.css";

if (document.getElementById("root")) {
    const root = createRoot(document.getElementById("root"));

    root.render(
        <React.StrictMode>
            <header>{<Head_Block />}</header>
            <nav>{<Navigation_Panel />}</nav>
            <section>{<Carusel_Block />}</section>
            <div>{<Info_Block />}</div>
            <div>{<Content_Block />}</div>
        </React.StrictMode>
    );
}
