import React, {Component} from 'react';
import Menu from './menu';
import Btn from './btn';
import Social from './social';

export default class MainContainer extends Component {
    render(){
        return(
            <div className="main__container">
                <Menu />
                <div className="title__main">
                    <div className="home__line">
                        <div className="line__home"></div>
                        <p className="title__home">HOME</p>
                    </div>
                    <p>Creative agency </p>
                    <p className="second__title">Digital design</p>
                    </div>
                <Social />
                <Btn />
                <div className="grey__block">
                    <div className="main__img"></div>
                </div>
            </div>
        )
    }
}
