import React, {Component} from 'react'

export default class ServiceOffer extends Component {
    constructor(props){
        super(props)
        this.state = {
            title: ['offer1', 'offer2', 'offer3'],
            text: [
                '  display block height width background-color position: absolute.',
                'background-color position: absolute v background-color position: absolute.',
                'display block height width 3 display block height width.'
            ]
        }
    }
    render(){
        return(
            <div className="offer__main">
                <div className="offer__img"></div>
                <div className="offer__info">
                    <div className="offer__title">Offer</div>
                    <div className="offer__more">it's offer to be best in market place</div>
                </div>
                </div>
        )
    }
}
