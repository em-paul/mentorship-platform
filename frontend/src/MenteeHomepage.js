import React from 'react';
import { RightPanel } from "./RightPanel";
import { MenteeProfile } from './MenteeProfile';
import { MyMentors } from './MyMentors';
import { Resources } from './Resources';
import { ProgramApplications } from './ProgramApplications';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import styles from './mentee-homepage-tabs.css';

export const MenteeHomepage = () => {
    return (
        <div className = 'main-body'>
            <div style = {{width: '62vw', display: 'flex', flexDirection: 'column', 
            justifyContent: 'center', alignItems: 'center'}} >
                <Tabs>
                    <TabList>
                        <Tab > My Progress </Tab>
                        <Tab > Program Applications </Tab>
                        <Tab> Mentors </Tab>
                        <Tab> Resources </Tab>
                    </TabList>
                    <TabPanel>
                        <MenteeProfile name = 'Roberto Jimenez' pronouns = 'he/him/his' location = 'Huelva, Spain' />
                    </TabPanel>
                    <TabPanel>
                        <ProgramApplications />
                    </TabPanel>
                    <TabPanel>
                        <MyMentors />
                    </TabPanel>
                    <TabPanel>
                        <Resources />
                    </TabPanel>
                </Tabs>
            </div>
            <RightPanel />
        </div>
    )
}


