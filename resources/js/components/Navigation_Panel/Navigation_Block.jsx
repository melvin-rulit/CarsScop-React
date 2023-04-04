import React, {Component} from "react";
import List_menu_navigation from './list_menu_block'
import Dop_right_instrument_block from './dop_right_instruments'
import Dop_right_instrument_block_2 from './dop_right_instruments_2'
import Dop_right_instrument_block_3 from './dop_right_instruments_3'

export default class navigation_Block extends Component {

    render() {
        return (

                <div className={'section'}>

                    <div className={'logotip_block'}>
                        <div>Cars CHOP</div>
                    </div>

                    <div className={'list_menu_navigation'}>
                        {<List_menu_navigation />}
                    </div>

                    <div className={'fg'}>
                        {<Dop_right_instrument_block />}
                    </div>

                    <div>
                        {<Dop_right_instrument_block_2 />}
                    </div>

                    <div>
                        {<Dop_right_instrument_block_3 />}
                    </div>

                </div>

        )
    }
}
