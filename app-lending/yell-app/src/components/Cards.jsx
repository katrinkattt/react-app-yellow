import React, {Component} from 'react';
import city from '../media/city.jpg';
import orange from '../media/orange.jpg';
import sckotch from '../media/sckotch.jpg';
import city from '../media/city.jpg';
import workSpace from '../media/workSpace.jpg';
import workwork from '../media/workwork.jpg';
import cityPark from '../media/cityPark.jpg';



export default class Cards extends Component{
    constructor(props){
        super(props)
        this.state = {
            curColor: 'white',
            colors: [
                city,
                orange,
                sckotch,
                '#c9804f',
                '#4c4e43',
                '#c5ff07',
            ]
        }
    }
    changeColor(color){
        this.setState({
            curColor: color
        })
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
                                    style={<img src={color} className="foto__cards" />}
                                    onClick={ () => {this.changeColor(color)}}>
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
