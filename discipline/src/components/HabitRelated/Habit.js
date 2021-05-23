
import Date from '../DateRelated/Date.js'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import Box from '../Wrappers/Box.js'
import React, { useState } from 'react'
import styles from './Habit.module.css'
import ModalWindow from '../Wrappers/ModalWindow';
import NewHabitForm from '../HabitRelated/NewHabitForm';
import SuperButton from '../Buttons/SuperButton'

const Habit = (props) => {

    //const [habitTitle, setTitle] = useState(props.title);

    // const clickHandler = () => {
    //     setTitle('updated');
    // }
    // <Date date={props.date} />

    const [isModalVisible, setIsModalVisible] = useState(false);

    const editHabit = () => {
        setIsModalVisible(true);
    }

    const hideEditModal = () => {
        setIsModalVisible(null);
    }

    let scheduleDisplay;
    if (props.schedule) {
        let listOfDays = [];
        for (let key in props.schedule) {
            listOfDays.push(key);
        }
        scheduleDisplay = listOfDays.map((key) => <li>{key}</li>);
    }
    return (
        <React.Fragment>
            { isModalVisible && <ModalWindow onConfirm={hideEditModal}>hello</ModalWindow>}
            <Box className={styles['habit']} onClick={editHabit}>
                <div>
                    <h2>{props.title}</h2>
                </div>
                <div style={{ width: 100, height: 100 }}>
                    <CircularProgressbar value={props.progress} text={`${props.progress}%`} />
                </div>
                <div>
                    <br />Schedule :<br />
                    <ul className={styles['elementList']}>{scheduleDisplay}</ul>
                </div>
                <div>
                    Daily Occurence (target) :<br />
                    {props.dailyOccurence}
                </div>
                <SuperButton onClick={editHabit}>Edit</SuperButton>
            </Box >
        </React.Fragment>);

}

export default Habit;

