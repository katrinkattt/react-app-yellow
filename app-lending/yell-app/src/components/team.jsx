import React, {Component} from 'react';
import team1 from '../media/team1.png';
import team2 from '../media/team2.png';
import team3 from '../media/team3.png';
import team4 from '../media/team4.png';

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
                'NILLA DOE',
                'MARTA SMITH',
                'MICHAEL DOE',
                'TISA TRUMP'
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
                <div className="title_container">Our command</div>
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
