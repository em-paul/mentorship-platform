import React from 'react';
import './MenteeProfile.css';
import { IoPersonCircleSharp } from 'react-icons/io5';
import { FaMapMarkerAlt } from 'react-icons/fa';
import ProgressBar from './ProgressBar';

const Stat = (props) => {
    return (
        <div className = 'stat'>
            <h2 style = {{color: 'rgb(0,180,151)', fontWeight: 'bold'}} > {props.number} </h2>
            <h6 style = {{fontWeight: 'bold'}} > {props.description} </h6>
        </div>
    )
}

export const MenteeProfile = (props) => {
    return (
        <div className = 'mentee-profile'>
            <div className = 'name-card'>
                <IoPersonCircleSharp size = '11em'/>
                <h5 style = {{fontWeight: 'bold'}} > {props.name} </h5>
                <h5 style = {{fontWeight: 'bold'}} > ({props.pronouns}) </h5>
                <div style = {{display: 'flex', FlexDirection: 'row', alignItems: 'baseline'}} >
                    <FaMapMarkerAlt size = '1.1em' color = 'rgb(239,66,0)'/>
                    <h5> {props.location} </h5>
                </div>
            </div>
            <div className = 'program-progress'>
                <h4 style = {{fontWeight: 'bold'}} > My Progress </h4>
                <ProgressBar program = 'UK Program' progress = {72} color = 'rgb(59, 140, 217)'/>
                <ProgressBar program = 'US Program' progress = {35} color = 'rgb(253, 169, 41)'/>
                <ProgressBar program = 'Prep Program' progress = {0} color = 'rgb(239, 66, 0)'/>
                <div className = 'statistics'>
                    <Stat number = {3} description = 'Applied Universities' />
                    <Stat number = {2} description = 'Applied Scholarships' />
                    <Stat number = {1} description = 'Accepted Universities' />
                    <Stat number = {0} description = 'Accepted Scholarships' />
                </div>
            </div>
        </div>
    )
}

