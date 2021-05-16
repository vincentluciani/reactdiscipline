
import Date from '../DateRelated/Date.js'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import Box from '../Wrappers/Box.js'
import React from 'react'
import styles from './Habit.module.css'
const Habit = (props) => {

    //const [habitTitle, setTitle] = useState(props.title);

    // const clickHandler = () => {
    //     setTitle('updated');
    // }
    // <Date date={props.date} />
    return (<Box className={styles['habit']}>
        <div>
            <h2>{props.title}</h2>
        </div>
        <div style={{ width: 100, height: 100 }}>
            <CircularProgressbar value={props.progress} text={`${props.progress}%`} />
        </div>
    </Box >);
}

export default Habit;

