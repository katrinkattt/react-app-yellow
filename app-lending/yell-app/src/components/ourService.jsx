import React, {Component} from 'react';
import ServiceOffer from './serviceOffer';

export default class OurService extends Component {
    render(){
        return(
            <div className="container">
                <div className="second__c">
                    <div className="title_container">Our Services</div>
                    <div className=" title2__">Use the colspan and rowspan attribute to let the content span over multiple columns or rows.</div>
                    <div id="big-block">
                        <div className="serv__b"><ServiceOffer /></div>
                        <div className="serv__b"><ServiceOffer /></div>
                        <div className="serv__b"><ServiceOffer /></div>
                        <div className="serv__b"><ServiceOffer /></div>
                        <div className="serv__b"><ServiceOffer /></div>
                        <div className="serv__b"><ServiceOffer /></div>
                    </div>
                </div>
            </div>
        )
    }
}
