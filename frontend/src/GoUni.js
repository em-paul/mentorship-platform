import React from 'react';
import './Tabs.css';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import './Modules.css';

export const GoCard = () => {
    return (
        <div className = 'modules-card'>
            <h4 style = {{fontWeight: 'bold'}} > Going to University </h4>
            <div style = {{display: 'inline'}} >
                Look through 
                <a href = 'https://projectaccess.org/going-to-university'> this page </a> 
                for insights on life at various different universities in the UK and US!
            </div>
        </div>
    )
}
