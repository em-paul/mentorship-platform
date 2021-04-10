import React from 'react';
import './App.css';

// adapted from KaterinaLupacheva/react-progress-bar
// Copyright (c) 2020 Katsiaryna Lupachova

const ProgressBar = (props) => {
    const barStyle = {
      height: '3vh',
      width: '20vw',
      backgroundColor: "rgb(222, 222, 222)",
      borderRadius: 50,
      margin: 50
    }
  
    const fillStyle = {
      height: '100%',
      width: `${props.progress}%`,
      backgroundColor: props.color,
      borderRadius: 'inherit',
      textAlign: 'right'
    }
  
    const percentageStyle = {
      padding: '.5vw',
      color: 'white',
      fontWeight: 'bold'
    }
  
    return (
      <div className = 'progressbar'>
        <h6 style = {{fontWeight: 'bold'}}  /* style = {{display: 'inline-block', padding: '2vw'}} */> {props.program} </h6>
        <div style={barStyle}>
            <div style={fillStyle}>
                <span style={percentageStyle}>{`${props.progress}%`}</span>
            </div>
        </div>
      </div>
      
    );
};

export default ProgressBar;
