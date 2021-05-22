import React from 'react';
import './Tabs.css';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import './Modules.css';
import { BsQuestionCircle } from 'react-icons/bs';

function UKHowUCASOnClick() {
    window.open('https://projectaccess.org/how-ucas-apply-works')
}

const UKHowUCASButton = () => {
    return (
        <button onClick = {UKHowUCASOnClick} className = 'module-button'>
            <BsQuestionCircle size = '3em' color = 'rgb(0, 0, 0)'/>
            <h6> How UCAS application works </h6>
        </button>
    )
}

export const ApplyCard = () => {
    return (
        <div className = 'modules-card'>
            <h4 style = {{fontWeight: 'bold'}} > Applying to University </h4>
            <Tabs>
                <TabList>
                    <Tab className = 'react-tabs__module-tab' selectedClassName = 'react-tabs__module-tab--selected'>
                        Applying to the UK
                    </Tab>
                    <Tab className = 'react-tabs__module-tab' selectedClassName = 'react-tabs__module-tab--selected'>
                        Applying to the US
                    </Tab>
                    <Tab className = 'react-tabs__module-tab' selectedClassName = 'react-tabs__module-tab--selected'>
                        Postgraduate Studies
                    </Tab>
                </TabList>
                <TabPanel>
                    <div style = {{width: '76.5vw'}}>
                        <h4 style = {{fontWeight: 'bold'}} > Applying to the UK </h4>
                        <div className = 'contents'>
                            <h5 style = {{fontWeight: 'bold'}} > 1. How to Get In: Introduction </h5>
                            <div className = 'nested-module-grid'>
                                <UKHowUCASButton />
                            </div>
                        </div>
                    </div>
                </TabPanel>
                <TabPanel>
                    <div style = {{width: '76.5vw'}}>
                        <h4 style = {{fontWeight: 'bold'}} > Applying to the US </h4>
                        <div className = 'contents'>
                            <h5 style = {{fontWeight: 'bold'}} > 1. How to Get In: Introduction </h5>
                            <div className = 'nested-module-grid'>
                                
                            </div>
                        </div>
                    </div>
                </TabPanel>
                <TabPanel>
                    <div style = {{width: '76.5vw'}}>
                        <h4 style = {{fontWeight: 'bold'}} > Postgraduate Studies </h4>
                        <div className = 'contents'>
                            <h5 style = {{fontWeight: 'bold'}} > 1. How to Get In: Introduction </h5>
                            <div className = 'nested-module-grid'>
                                
                            </div>
                        </div>
                    </div>
                </TabPanel>
            </Tabs>
        </div>
    )
}
