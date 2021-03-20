import React from 'react';
import './MenteeProfile.css';

function MyMentors(props) {
    return (
        <div className = 'MyMentors'>
            <div style = {{width: 'inherit*.8', display: 'inline-block', justifyContent: 'left', alignItems: 'start'}} >
                <h4 style = {{fontWeight: 'bold'}} > Learn more about your mentor(s) </h4>
                <p>
                    Applying to college can be challenging, so we have created learning modules to support your
                    college application journey!
                </p>
            </div>
            
        </div>
    )
}

export default MyMentors;
