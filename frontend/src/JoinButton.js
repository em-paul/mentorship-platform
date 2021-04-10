import React from 'react';
import './Event.css';
import { FaPhoneAlt } from 'react-icons/fa'

function OnClick() {
    alert('Join Call Button Clicked')
}

export const JoinButton = () => {
    return (
        <div>
            <button onClick = {OnClick} className = 'join-button'>
                <FaPhoneAlt size = '1.5em'/>
            </button>
            {/* <p style = {{fontSize: '.5em'}}> Join Now </p> */}
        </div>
    )
}

