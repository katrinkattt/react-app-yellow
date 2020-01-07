import React, {Component} from 'react';
import Btn from './btn';

export default class Skils extends Component {
    render(){
        return(
            <div className="container" id="skills">
                <div className="skils__main">
                    <div className="skils__about">
                        <div className=" title_container skils__title">Our skils</div>
                        <div className="title2__ skils__text">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
                        </div>
                        <div className="offers__skill">
                            <div className="skill__of">
                                <div className="skill__txt__btn">Ui/UX Desing
                                    <Btn title="84%"/>
                                </div>
                                <div className="skill__txt__btn">Web Desing
                                    <Btn title="94%"/>
                                </div>
                                <div className="skill__txt__btn">Web Deb
                                    <Btn title="98%"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="skils__foto"></div>
                </div>
            </div>
        )
    }
}

