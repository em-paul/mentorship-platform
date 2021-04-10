import React from 'react';
import './Event.css';
import { JoinButton } from './JoinButton';

export const Event = (props) => {
    return (
        <div className = 'event'>
            <div className = 'date'>
                <h7 > {props.month} </h7>
                <h4 style = {{fontWeight: 'bold'}} > {props.day} </h4>
            </div>
            <div className = 'description'>
                <h6> {props.description} </h6>
            </div>
            <div className = 'JoinButton'>
                <JoinButton />
            </div>
        </div>
    )
}

