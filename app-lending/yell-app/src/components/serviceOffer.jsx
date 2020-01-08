import React, {Component} from 'react';

export default function ServOffer(props){
    return(
    <div className="serv__b">
        <div className="offer__main">
            <div className="offer__img" style={{background:`url(${props.img}) no-repeat`}}
            ></div>
            <div className="offer__info" >
                <div className="offer__title"
                > {props.title}</div>
                <div className="offer__more"
                >{props.text}</div>
            </div>
        </div>
    </div>
    )
}