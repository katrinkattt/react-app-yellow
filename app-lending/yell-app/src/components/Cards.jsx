import React, {Component} from 'react';


import bg from '../index.css';
import bg1 from '../media/bg1.png';
import bg3 from '../media/bg3.png';
import bg4 from '../media/bg4.png';
import bg5 from '../media/bg5.png';
import replace from '../media/replace_image.png';

var block__2 = document.getElementById("card__2");
var divBlock2Content = document.createElement("div");
divBlock2Content.className = "text__card2";
var txt2B = document.getElementsByClassName("text__card2");
txt2B.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem"
function Bl2(block__2){
    return(
        <div className="text__card2">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
        </div>
    )
}

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
            <div className="container container__fit">
                <div className="second__c">
                    <div className="title_container">Cards</div>
                    <div className=" title2__">Choice favorite color and looking</div>
                    <div className="cards__b">
                        <div id="big-block">
                            {
                                this.state.colors.map((color, id) =>
                                    <div className="small-block" id={"card__"+id}
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
Bl2()
