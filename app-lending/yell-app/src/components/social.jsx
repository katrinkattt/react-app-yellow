import React, {Component} from 'react';
import facebook from '../media/facebook.png';
import twitt from '../media/twitter.png';
import inst from '../media/instagram.png'

export default class Social extends Component {
    render(){
        return(
            <div className="socials">
                <div className="social">
                    <a href="https://twitter.com/">
                        <img src={`${twitt}`} alt=""/>
                    </a>
                </div>
                <div className="social" >
                    <a href="https://www.facebook.com/">
                        <img src={`${facebook}`}  alt=""/></a>
                </div>
                <div className="social">
                    <a href="https://www.instagram.com/">
                        <img src={`${inst}`} alt=""/>
                    </a>
                </div>
            </div>
        )
    }
}
