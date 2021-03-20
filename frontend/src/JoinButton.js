import React from 'react';
import './Event.css';
import { FaPhoneAlt } from 'react-icons/fa'

function OnClick() {
    alert('Join Call Button Clicked')
}

function JoinButton() {
    return (
        <button onClick = {OnClick} className = 'JoinButton'>
            <FaPhoneAlt size = '1.5em'/>
            {/* <p> Join Now </p> */}
        </button>
    )
}

export default JoinButton;
