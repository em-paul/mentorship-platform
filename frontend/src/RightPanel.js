import React from 'react';
import {Panel, PanelGroup} from 'rsuite';
import CompactCalendar from './CompactCalendar';
import './App.css';
import Event from './Event'
import Calendar from 'react-calendar';

function RightPanel() {
    return(
        // <PanelGroup>
        //     <Panel header = "Upcoming Events">
                
        //     </Panel>
        //     <Panel header = "Calendar View">
        //         <CompactCalendar />
        //     </Panel>
        // </PanelGroup>

        <div className = "RightPanel">
            <h4 style = {{fontWeight: 'bold'}} > Upcoming Events </h4>
            <Event month = 'DEC' day = '11' description = 'Mentor Meeting with Michael Powel'/>
            <Event month = 'DEC' day = '20' description = 'Mentor Meeting with Michael Powel'/>
            <Event month = 'JAN' day = '21' description = 'Mentor Meeting with Michael Powel'/>
            <h4 style = {{fontWeight: 'bold'}} > Calendar View </h4>
            <div className = 'CalendarPlaceholder'>
                {/* <h3> Calendar Placeholder</h3> */}
                {/* <Calendar /> */}
            </div>
        </div>
    );
}

export default RightPanel;