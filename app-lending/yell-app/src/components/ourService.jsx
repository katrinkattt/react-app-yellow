import React, {Component} from 'react';
// import ServiceOffer from './serviceOffer';

export default class OurService extends Component {
    constructor(props){
        super(props)
        this.servState = {
            img: [
                'workwork'
            ],
            title: ['offer1', 'offer2', 'offer3', 'offer4', 'offer5', 'offer6'],
            text: [
                '  display block height width background-color position: absolute.',
                'background-color position: absolute v background-color position: absolute.',
                'display block height width 3 display block height width.',
                '  display block height width background-color position: absolute.',
                'background-color position: absolute v background-color position: absolute.',
                'display block height width 3 display block height width.'
            ]
        }
    }
    // changeText(text){
    //     this.setState({
    //         curText: text
    //     })
    // }

    render(){
        return(
            <div className="container">
                <div className="second__c">
                    <div className="title_container">Our Services</div>
                    <div className=" title2__">Use the colspan and rowspan attribute to let the content span over multiple columns or rows.</div>
                    <div id="big-block">
                            {
                                this.servState.title.map((titl, id) =>
                                <div className="serv__b">
                                <div className="offer__main">
                                    <div className="offer__img"></div>
                                    <div className="offer__info" >
                                    <div className="offer__title"> {titl}</div>
                                        {
                                            this.servState.text.map((txt, id) =>
                                                <div className="offer__more">{txt}</div>
                                            )
                                        }
                                    </div>
                                </div>
                            </div>
                                )
                            }
                        </div>
                </div>
            </div>
        )
    }
}
