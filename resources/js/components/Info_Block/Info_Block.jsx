import React, {Component} from "react";
import Block_3_info from "./block_3"
// import Block_3_info from "./Tblock_3"
import "./info_block.scss"


export default class Info_Block extends Component {

    render() {
        return (

            <div className={'section_2'}>
                {/*<h2>*/}
                {/*    Авто из США*/}
                {/*    без посредников*/}
                {/*</h2>*/}

                {/*<h5>*/}
                {/*    Оставь номер телефона – мы свяжемся с тобой через несколько */}
                {/*    минут, подробно расскажем как можно сэкономить на покупке */}
                {/*    автомобиля из США и подберем подходящие варианты*/}
                {/*</h5>*/}

                <div className={'info_block'}>
                    <h2>
                        Cars from USA without intermediaries
                    </h2>

                    <div className={'info_block'}>
                        <h5>
                            Leave your phone number - we will contact you in a
                            few minutes,
                            tell you
                            in detail how you can save on buying a car from the
                            USA and find
                            suitable
                        </h5>

                        <div className={'input_info_block'}>

                            {<Block_3_info/>}

                        </div>

                    </div>


                </div>


            </div>


        )
    }
}
