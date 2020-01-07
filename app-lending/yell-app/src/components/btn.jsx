import React, {Component} from 'react';

export default function Btn(props) {
    return(
        <div className="btn__main">
            <a href="#files" className="btn__main">
                <span className="text__btn">{props.title}</span>
            </a>
        </div>
    )
}

