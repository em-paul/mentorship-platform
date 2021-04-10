import React from 'react';
import './MenteeProfile.css';
import { GiGraduateCap, GiMoneyStack, GiConversation, GiFullFolder } from 'react-icons/gi';
import { FaHandshake } from 'react-icons/fa';

function ApplyingToCollegeOnClick() {
    alert('Applying to College Button Clicked')
}

const ApplyingToCollegeButton = () => {
    return (
        <button onClick = {ApplyingToCollegeOnClick} className = 'resource-button'>
            <GiGraduateCap size = '3em' color = 'rgb(0, 0, 0)'/>
            <h5> Applying to College </h5>
        </button>
    )
}

function FinancialAidOnClick() {
    alert('Financial Aid Button Clicked')
}

const FinancialAidButton = () => {
    return (
        <button onClick = {FinancialAidOnClick} className = 'resource-button'>
            <GiMoneyStack size = '3em' color = 'rgb(0, 0, 0)'/>
            <h5> Financial Aid </h5>
        </button>
    )
}

function CommunityDiscussionsOnClick() {
    alert('Community Discussions Button Clicked')
}

const CommunityDiscussionsButton = () => {
    return (
        <button onClick = {CommunityDiscussionsOnClick} className = 'resource-button'>
            <GiConversation size = '3em' color = 'rgb(0, 0, 0)'/>
            <h5> Community Discussions </h5>
        </button>
    )
}

function SampleDocumentsOnClick() {
    alert('Sample Documents Button Clicked')
}

const SampleDocumentsButton = () => {
    return (
        <button onClick = {SampleDocumentsOnClick} className = 'resource-button'>
            <GiFullFolder size = '3em' color = 'rgb(0, 0, 0)'/>
            <h5> Sample Documents </h5>
        </button>
    )
}

function InterviewPrepOnClick() {
    alert('Interview Prep Button Clicked')
}

const InterviewPrepButton = () => {
    return (
        <button onClick = {InterviewPrepOnClick} className = 'resource-button'>
            <FaHandshake size = '3em' color = 'rgb(0, 0, 0)'/>
            <h5> Interview Prep </h5>
        </button>
    )
}

export const Resources = (props) => {
    return (
        <div className = 'resources'>
            <h4 style = {{fontWeight: 'bold'}} > Here are some resources for you! </h4>
            {/* <p>
                Applying to college can be challenging, so we have created learning modules to support your
                college application journey!
            </p> */}
            <div className = 'resource-grid'>
                <ApplyingToCollegeButton />
                <FinancialAidButton />
                <CommunityDiscussionsButton />
                <SampleDocumentsButton />
                <InterviewPrepButton />
            </div>
        </div>
    )
}
