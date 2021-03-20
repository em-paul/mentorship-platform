import React from 'react';
import './MenteeProfile.css';

function Stat(props) {
    return (
        <div className = 'Stat'>
            <h2 style = {{color: 'rgb(0,180,151)', fontWeight: 'bold'}} > {props.number} </h2>
            <h6 style = {{fontWeight: 'bold'}} > {props.description} </h6>
        </div>
    )
}

export default Stat;
