import React, {Component} from 'react';

import city from '../media/city.jpg';
import orange from '../media/orange.jpg';
import sckotch from '../media/sckotch.jpg';
import workSpace from '../media/workSpace.jpg';
import workwork from '../media/workwork.jpg';
import cityPark from '../media/cityPark.jpg';

import bg1 from '../media/bg1.png';
import bg3 from '../media/bg3.png';
import bg4 from '../media/bg4.png';
import bg5 from '../media/bg5.png';
// import bg_hover from '../media/bg_hover'
import replace from '../media/replace_image.png';



export default class Cards extends Component{
    constructor(props){
        super(props)
        this.state = {
            curColor: 'white',
            colors: [
                bg1,
                orange,
                bg3,
                replace,
                bg4,
                bg5,
            ]
        }
    }

    render(){
        return(
            <div className="container">
                <div className="second__c">
                    <div className="title_container">Cards</div>
                    <div className=" title2__">Choice favorite color and looking</div>
                    <div className="cards__b">
                        <div id="big-block">
                            {
                                this.state.colors.map((color, id) =>
                                <div className="small-block"
                                    key={id}
                                    style={{background:`url(${color})`}}
                                >
                                </div>
                                )
                            }
                            {/* <div class="small-block orange">...</div>
                            <div class="small-block yell">...</div>
                            <div class="small-block blue">...</div>
                            <div class="small-block purple">...</div>
                            <div class="small-block">...</div>
                            <div class="small-block green">...</div> */}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
