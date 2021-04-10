import React from 'react';
import './MenteeProfile.css';
import { IoPersonCircleSharp, IoChatbubbleOutline } from 'react-icons/io5';
import { RiContactsLine } from 'react-icons/ri';

const Property = (props) => {
    return (
        <div className = 'property'>
            <p style = {{color: 'rgb(14,14,181)', lineHeight: '1em', fontSize: '.9em'}} > {props.field} </p>
            <h6 style = {{fontWeight: 'bold', lineHeight: '1em'}} > {props.entry} </h6>
        </div>
    )
}

function ChatOnClick() {
    alert('Chat Button Clicked')
}

const ChatButton = () => {
    return (
        <div style = {{flexDirection: 'column', justifyContent: 'center', paddingLeft: '.75em', paddingRight: '.75em'}}>
            <button onClick = {ChatOnClick} className = 'mentor-button'>
                <IoChatbubbleOutline size = '1.4em' color = 'rgb(255, 255, 255)'/>
            </button>
            {/* <p style = {{fontSize: '.5em'}}> Chat </p> */}
        </div>
    )
}

function LearnMoreOnClick() {
    alert('Learn More Button Clicked')
}

const LearnMoreButton = () => {
    return (
        <div style = {{flexDirection: 'column', justifyContent: 'center', paddingLeft: '.75em', paddingRight: '.75em'}}>
            <button onClick = {LearnMoreOnClick} className = 'mentor-button'>
                <RiContactsLine size = '1.4em' color = 'rgb(255, 255, 255)'/>
            </button>
            {/* <p style = {{fontSize: '.5em'}}> Learn More </p> */}
        </div>
    )
}

const Mentor = (props) => {
    return (
        <div className = 'mentor'>
            <IoPersonCircleSharp size = '3.5em' paddingLeft = '.75em' paddingRight = '.75em'/>
            <Property field = 'Program' entry = 'US Program'/>
            <Property field = 'Name' entry = 'Sandy Smith'/>
            <Property field = 'University' entry = 'Yale University'/>
            <Property field = 'Major' entry = 'Finance'/>
            <ChatButton />
            <LearnMoreButton />
        </div>
    )
}

export const MyMentors = (props) => {
    return (
        <div className = 'my-mentors'>
            <div style = {{width: 'inherit*.8', display: 'inline-block', justifyContent: 'left', alignItems: 'start'}} >
                <h4 style = {{fontWeight: 'bold', paddingBottom: '.5em'}} > Learn more about your mentor(s) </h4>
                {/* <p>
                    Applying to college can be challenging, so we have created learning modules to support your
                    college application journey!
                </p> */}
            </div>
            <Mentor />
        </div>
    )
}

