import React, {Component} from "react";
import "./head_block.scss"

import Block_1_Head from './block_one'
import Block_2_Head from './block_two'


export default class Head_Block extends Component {

    render() {
        return (

            <div className={'head_section'}>

                <div className={'left_dop_menu'}>
                    <Block_1_Head/>
                </div>

                <div className={'dop_right_menu'}>
                    <Block_2_Head/>
                </div>

            </div>

        )
    }
}
