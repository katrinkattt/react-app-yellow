import React, {Component} from 'react';


import bg from '../index.css';
import bg1 from '../media/bg1.png';
import bg3 from '../media/bg3.png';
import bg4 from '../media/bg4.png';
import bg5 from '../media/bg5.png';
import replace from '../media/replace_image.png';



export default class Cards extends Component{
    constructor(props){
        super(props)
        this.state = {
            curColor: '#fcd708',
            colors: [
                bg1,
                bg,
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
                                    style={{background:`url(${color}) no-repeat `}}
                                >
                                </div>
                                )
                            }
                            
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
