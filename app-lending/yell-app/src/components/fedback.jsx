import React, {Component} from 'react';

export default class Feedback extends Component{
    render(){
        return(
            <div className="feedback">
                <div className="feed__block">
                    <div className="title__feed">Suscribe to our Newsletter
                    <div className="feed__text">Subscibe to our newsletter and get 30% off free downloads mockups</div>
                    </div>
                    <div className="feedback__inputs">
                        <input className="feed__input" type="text" id="email" placeholder="enter your email"/>
                        <input type="submit" className="feed__btn" id="send" value="SUBSCRIBE"/>
                    </div>
                </div>
            </div>
        )
    }
}