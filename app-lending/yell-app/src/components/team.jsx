import React, {Component} from 'react';
import team1 from '../media/team4.png';
import team4 from '../media/team1.png';
import team2 from '../media/team2.png';
import team3 from '../media/team3.png';

export default class Team extends Component {
    constructor(props){
        super(props)
        this.teamstate = {
            img:[
                team1,
                team2,
                team3,
                team4
            ],
            name:[
                'nilla doe',
                'marta smith',
                'michael doe',
                'tisa trump'
            ],
            position:[
                'creative desinger',
                'finance support',
                'owner consulting',
                'finance support'
            ],
            telefon:[
                '+4 72 286547 88',
                '+4 72 659855 66',
                '+4 75 973214 55',
                '+4 72 866456 45'
            ]
        }
    }
    render(){
        return(
            <div className="container">
                <div className="title_container title__team">Our command</div>
                <div className="title2__ title__team2 ">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et</div>

                <div className="command__main">
                    {
                        this.teamstate.img.map((png, id) =>
                        <div className="person">
                            <div className="team__img"
                                key= {id}
                                style={{background:`url(${png}) no-repeat`}}
                            ></div>
                            <div className="team__name">{this.teamstate.name[id]}</div>
                            <div className="team__position">{this.teamstate.position[id]}</div>
                            <div className="team__telefon">{this.teamstate.telefon[id]}</div>
                        </div>
                        )
                    }
                </div>
            </div>
        )
    }
}
