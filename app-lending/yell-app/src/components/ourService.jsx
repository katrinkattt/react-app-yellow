import React, {Component} from 'react';
// import ServiceOffer from './serviceOffer';
import icon11 from '../media/icon11.png';
import icon12 from '../media/icon12.png';
import icon13 from '../media/icon13.png';
import icon21 from '../media/icon21.png';
import icon22 from '../media/icon22.png';
import icon23 from '../media/icon23.png';

export default class OurService extends Component {
    constructor(props){
        super(props)
        this.servState = {
            img: [
                icon11,
                icon12,
                icon13,
                icon21,
                icon22,
                icon23
                
            ],
            title: ['offer1', 'offer2', 'offer3', 'offer4', 'offer5', 'offer6'],
            text: [
                '1 display block height width background-color position: absolute.',
                '2 background-color position: absolute v background-color position: absolute.',
                '3 display block height width  display block height width.',
                '4 display block height width background-color position: absolute.',
                '5 background-color position: absolute v background-color position: absolute.',
                '6 display block height width  display block height width.'
            ]
        }
    }


    render(){
        return(
            <div className="container">
                <div className="second__c">
                    <div className="title_container">Our Services</div>
                    <div className=" title2__">Use the colspan and rowspan attribute to let the content span over multiple columns or rows.</div>
                    <div id="big-block">
                            {
                               this.servState.img.map((png, id) =>
                                    this.servState.title.map((titl, id) =>
                                        this.servState.text.map((txt, inn) =>
                                        <div className="serv__b">
                                            <div className="offer__main">
                                                <div className="offer__img"
                                                    key={id}
                                                    style={{background:`url(${png}) no-repeat`}}
                                                ></div>
                                                <div className="offer__info" >
                                                    <div className="offer__title"> {titl}</div>
                                                    <div className="offer__more">{txt}</div>
                                                </div>
                                            </div>
                                        </div>
                                )))
                            }
                        </div>
                </div>
            </div>
        )
    }
}
