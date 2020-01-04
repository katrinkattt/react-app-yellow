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
