import React from 'react';
import './Tabs.css';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import './Modules.css';
import { AiOutlinePicture } from 'react-icons/ai';
import { GiMagnifyingGlass, GiGreekTemple, GiGlobe, GiKeyring, GiBookmarklet } from 'react-icons/gi';

function UKExploreOnClick() {
    window.open('https://projectaccess.org/exploring-your-favourite-subject')
}

const UKExploreButton = () => {
    return (
        <button onClick = {UKExploreOnClick} className = 'module-button'>
            <GiMagnifyingGlass size = '3em' color = 'rgb(0, 0, 0)'/>
            <h6> UK - Exploring your favourite subject </h6>
        </button>
    )
}

function UKBiggerPictureOnClick() {
    window.open('https://projectaccess.org/bigger-picture-of-choosing-your-course')
}

const UKBiggerPictureButton = () => {
    return (
        <button onClick = {UKBiggerPictureOnClick} className = 'module-button'>
            <AiOutlinePicture size = '3em' color = 'rgb(0, 0, 0)'/>
            <h6> UK - Bigger picture of choosing your course </h6>
        </button>
    )
}

function UKFieldOnClick() {
    window.open('https://projectaccess.org/field-specific-information')
}

const UKFieldButton = () => {
    return (
        <button onClick = {UKFieldOnClick} className = 'module-button'>
            <GiGreekTemple size = '3em' color = 'rgb(0, 0, 0)'/>
            <h6> UK - Field specific information </h6>
        </button>
    )
}

function AbroadReasonsOnClick() {
    window.open('http://www.internationalstudent.com/study-abroad/guide/ten-benefits-to-studying-abroad/')
}

const AbroadReasonsButton = () => {
    return (
        <button onClick = {AbroadReasonsOnClick} className = 'module-button'>
            <GiGlobe size = '3em' color = 'rgb(0, 0, 0)'/>
            <h6> Top 10 reasons to study abroad </h6>
        </button>
    )
}

function USChooseOnClick() {
    window.open('https://www.youtube.com/watch?v=SV7pCQCmWE0')
}

const USChooseButton = () => {
    return (
        <button onClick = {USChooseOnClick} className = 'module-button'>
            <GiKeyring size = '3em' color = 'rgb(0, 0, 0)'/>
            <h6> US - Choosing the Right University </h6>
        </button>
    )
}

function BrownProfileOnClick() {
    window.open('https://projectaccess.org/brown-university-profile')
}

const BrownProfileButton = () => {
    return (
        <button onClick = {BrownProfileOnClick} className = 'module-button'>
            {/* <GiKeyring size = '3em' color = 'rgb(0, 0, 0)'/> */}
            <h6> Brown profile </h6>
        </button>
    )
}

function CambridgeProfileOnClick() {
    window.open('https://projectaccess.org/curriculum/cambridge-university-profile')
}

const CambridgeProfileButton = () => {
    return (
        <button onClick = {CambridgeProfileOnClick} className = 'module-button'>
            {/* <GiKeyring size = '3em' color = 'rgb(0, 0, 0)'/> */}
            <h6> Cambridge profile </h6>
        </button>
    )
}

function DurhamProfileOnClick() {
    window.open('https://projectaccess.org/s/Studying-in-the-UK-Durham-kpnw.pdf')
}

const DurhamProfileButton = () => {
    return (
        <button onClick = {DurhamProfileOnClick} className = 'module-button'>
            {/* <GiKeyring size = '3em' color = 'rgb(0, 0, 0)'/> */}
            <h6> Durham profile </h6>
        </button>
    )
}

function HarvardProfileOnClick() {
    window.open('https://projectaccess.org/harvard-university-profile')
}

const HarvardProfileButton = () => {
    return (
        <button onClick = {HarvardProfileOnClick} className = 'module-button'>
            {/* <GiKeyring size = '3em' color = 'rgb(0, 0, 0)'/> */}
            <h6> Harvard profile </h6>
        </button>
    )
}

function LSEProfileOnClick() {
    window.open('https://projectaccess.org/s/LSE-profile.pdf')
}

const LSEProfileButton = () => {
    return (
        <button onClick = {LSEProfileOnClick} className = 'module-button'>
            {/* <GiKeyring size = '3em' color = 'rgb(0, 0, 0)'/> */}
            <h6> LSE profile </h6>
        </button>
    )
}

function ColumbiaProfileOnClick() {
    window.open('https://projectaccess.org/columbia-university-profile')
}

const ColumbiaProfileButton = () => {
    return (
        <button onClick = {ColumbiaProfileOnClick} className = 'module-button'>
            {/* <GiKeyring size = '3em' color = 'rgb(0, 0, 0)'/> */}
            <h6> Columbia profile </h6>
        </button>
    )
}

function OxfordProfileOnClick() {
    window.open('https://projectaccess.co/curriculum/oxford-university-profile')
}

const OxfordProfileButton = () => {
    return (
        <button onClick = {OxfordProfileOnClick} className = 'module-button'>
            {/* <GiKeyring size = '3em' color = 'rgb(0, 0, 0)'/> */}
            <h6> Oxford profile </h6>
        </button>
    )
}

function PrincetonProfileOnClick() {
    window.open('https://projectaccess.org/princeton-university-profile')
}

const PrincetonProfileButton = () => {
    return (
        <button onClick = {PrincetonProfileOnClick} className = 'module-button'>
            {/* <GiKeyring size = '3em' color = 'rgb(0, 0, 0)'/> */}
            <h6> Princeton profile </h6>
        </button>
    )
}

function UCLProfileOnClick() {
    window.open('https://projectaccess.org/curriculum/university-college-london-profile')
}

const UCLProfileButton = () => {
    return (
        <button onClick = {UCLProfileOnClick} className = 'module-button'>
            {/* <GiKeyring size = '3em' color = 'rgb(0, 0, 0)'/> */}
            <h6> UCL profile </h6>
        </button>
    )
}

function PennProfileOnClick() {
    window.open('https://projectaccess.org/university-of-pennsylvania-profile1')
}

const PennProfileButton = () => {
    return (
        <button onClick = {PennProfileOnClick} className = 'module-button'>
            {/* <GiKeyring size = '3em' color = 'rgb(0, 0, 0)'/> */}
            <h6> Penn profile </h6>
        </button>
    )
}

function StudyBetterOnClick() {
    window.open('https://projectaccess.org/s/learn-better-at-home.pdf')
}

const StudyBetterButton = () => {
    return (
        <button onClick = {StudyBetterOnClick} className = 'module-button'>
            <GiBookmarklet size = '3em' color = 'rgb(0, 0, 0)'/>
            <h6> Study Better at Home guide </h6>
        </button>
    )
}

const ChooseCard = () => {
    return (
        <div className = 'modules-card'>
            <h4 style = {{fontWeight: 'bold'}} > Choosing Your Academic Path </h4>
            <div className = 'contents'>
                <h5 style = {{fontWeight: 'bold'}} > 1. Choose Your Subject Area </h5>
                <div className = 'module-grid'>
                    <UKExploreButton />
                    <UKBiggerPictureButton />
                    <UKFieldButton />
                </div>
                <h5 style = {{fontWeight: 'bold', paddingTop: '1em'}} > 2. Choose Your University and City </h5>
                <div className = 'module-grid'>
                    <AbroadReasonsButton />
                    <USChooseButton />
                    <BrownProfileButton />
                    <CambridgeProfileButton />
                    <DurhamProfileButton />
                    <HarvardProfileButton />
                    <LSEProfileButton />
                    <ColumbiaProfileButton />
                    <OxfordProfileButton />
                    <PrincetonProfileButton />
                    <UCLProfileButton />
                    <PennProfileButton />
                </div>
                <h5 style = {{fontWeight: 'bold', paddingTop: '1em'}} > 3. Making the Most of High School </h5>
                <div className = 'module-grid'>
                    <StudyBetterButton />
                </div>
            </div>
        </div>
    )
}

const ApplyCard = () => {
    return (
        <div className = 'modules-card'>
            <h4 style = {{fontWeight: 'bold'}} > Applying to University </h4>
            
        </div>
    )
}

const GoCard = () => {
    return (
        <div className = 'modules-card'>
            <h4 style = {{fontWeight: 'bold'}} > Going to University </h4>
            
        </div>
    )
}

export const Modules = () => {
    return (
        <div>
            <Tabs>
                <TabList>
                    <Tab> Choosing Your Academic Path </Tab>
                    <Tab> Applying to University </Tab>
                    <Tab> Going to University </Tab>
                </TabList>
                {/* Choosing Your Academic Path */}
                <TabPanel>
                    <ChooseCard />
                </TabPanel>
                {/* Applying to University */}
                <TabPanel>
                    <ApplyCard />
                </TabPanel>
                {/* Going to University */}
                <TabPanel>
                    <GoCard />
                </TabPanel>
            </Tabs>
        </div>
    )
}
