import './Habit.css'
import Date from './Date.js'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import Box from './Box.js'
import React, { useState } from 'react'

const Habit = (props) => {

    const [title, setTitle] = useState(props.title);

    const clickHandler = () => {
        setTitle('updated');
    }

    return (<Box className="habit">
        <Date date={props.date} />
        <div>
            <h2>{title}</h2>
        </div>
        <div style={{ width: 100, height: 100 }}>
            <CircularProgressbar value={props.progress} text={`${props.progress}%`} />
        </div>
        <button onClick={clickHandler}>Change State</button>
    </Box >);
}

export default Habit;

