import React, {Component} from 'react';

export default class Cards extends Component{
    render(){
        return(
            <div className="container">
                <div className="second__c">
                    <div className="title_container">Cards</div>
                    <div className=" title2__">Choice favorite color and looking</div>
                    <div className="cards__b">
                        <div id="big-block">
                            <div class="small-block orange">...</div>
                            <div class="small-block yell">...</div>
                            <div class="small-block blue">...</div>
                            <div class="small-block purple">...</div>
                            <div class="small-block">...</div>
                            <div class="small-block green">...</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
