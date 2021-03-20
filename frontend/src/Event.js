import React from 'react';
import './Event.css';
import JoinButton from './JoinButton';

// function Date(props) {
//     return (
//         <div className = 'Date'>
//             <h7> {props.month} </h7>
//             <h4> {props.day} </h4>
//         </div>
//     )
// }

function Event(props) {
    return (
        <div className = 'Event'>
            <div className = 'Date'>
                <h7 > {props.month} </h7>
                <h4 style = {{fontWeight: 'bold'}} > {props.day} </h4>
            </div>
            <div className = 'Description'>
                <h6> {props.description} </h6>
            </div>
            <div className = 'JoinButton'>
                <JoinButton />
            </div>
        </div>
    )
}

export default Event;
