import React, {Component} from 'react';
import facebook from '../media/facebook.png';
import twitt from '../media/twitter.png';
import inst from '../media/instagram.png'

export default class Social extends Component {
    render(){
        return(
            <div className="socials">
                <div className="social">
                    <img src={`${facebook}`} alt=""/>
                </div>
                <div className="social">
                    <img src={`${twitt}`} alt=""/>
                </div>
                <div className="social">
                    <img src={`${inst}`} alt=""/>
                </div>
            </div>
        )
    }
}
