import React, {Component} from 'react';
import team1 from '../media/team1.png';
import team2 from '../media/team2.png';
import team3 from '../media/team3.png';
import team4 from '../media/team4.png';

export default class Command extends Component {
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
                    <div className="person"></div>
                </div>
            </div>
        )
    }
}
