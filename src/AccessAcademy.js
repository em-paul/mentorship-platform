import React from 'react';
import './Tabs.css';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import './Modules.css';
import { ChooseCard } from './ChoosePath';
import { ApplyCard } from './ApplyUni';
import { GoCard } from './GoUni';

export const AccessAcademy = () => {
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
