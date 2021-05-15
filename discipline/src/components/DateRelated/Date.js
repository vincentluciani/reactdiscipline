import './Date.css'
import React from 'react'
const Date = (props) => {

    const year = props.date.getFullYear();
    const month = props.date.toLocaleString('en-US', { month: 'long' });
    const day = props.date.toLocaleString('en-US', { day: '2-digit' });

    return (
        <React.Fragment>
            <div>{year}</div>
            <div>{month}</div>
            <div>{day}</div>
        </React.Fragment>
    );
}

export default Date;
