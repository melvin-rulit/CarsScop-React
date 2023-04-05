import React, { Component } from "react";
import "./navigation_panel.scss";

import List_menu_navigation from "./list_menu_block";


export default class navigation_Block extends Component {
    render() {
        return (
            <div className={"navigation_section"}>
                <div className={"logotip_block"}>
                    <div>Cars CHOP</div>
                </div>

                <div className={"list_menu_navigation"}>
                    {<List_menu_navigation />}
                </div>

                <div className={"dop_instrument_block"}>
                    <div className={"search"}>
                        <input placeholder={"find you car from USA"} />
                    </div>
                </div>

                <div className={"dop_instrument_block"}>
                    <div className={"cart"}>
                        <img src="images/Navigation Panel/shopping-cart.png" />
                    </div>

                </div>

                <div className={"dop_instrument_block"}>
                    <div className={"car"}>

                    </div>
                </div>

            </div>
        );
    }
}