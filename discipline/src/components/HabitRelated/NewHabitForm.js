import React, { useState } from 'react'
import styles from './NewHabitForm.module.css'
import SuperButton from '../Buttons/SuperButton'
import Box from '../Wrappers/Box'

const NewHabitForm = (props) => {

    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredProgress, setEnteredProgress] = useState(0);
    const [enteredDate, setEnteredDate] = useState(new Date(1973, 1, 1));
    const [isValid, setIsValid] = useState(true);

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
    }

    const progressChangeHandler = (event) => {
        setEnteredProgress(event.target.value);
    }

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
    }

    const submitHandler = (event) => {
        event.preventDefault(); // To prevent the page to reload

        const habitData = {
            title: enteredTitle,
            progress: +enteredProgress,
            date: new Date(enteredDate)
        }

        if (enteredTitle.trim().length === 0) {
            setIsValid(false);
            return;
        }
        props.onSaveMyItem(habitData);
        setEnteredTitle('');
        setEnteredProgress('');
        setEnteredDate('');
        setIsValid(true);

    }

    let className = 'form';
    if (!isValid) {
        className += ' invalid';
    }

    return (
        <Box>
            <form onSubmit={submitHandler}>
                <div className={styles[className]} >
                    <label htmlFor="title">Title</label>
                    <input id="title" type="text" value={enteredTitle} onChange={titleChangeHandler} />
                    <label htmlFor="progress">Progress</label>
                    <input id="progress" type="number" value={enteredProgress} min={0} step={1} max={100} onChange={progressChangeHandler} />
                    <label htmlFor="date">Date</label>
                    <input id="date" type="date" value={enteredDate} onChange={dateChangeHandler} />
                </div>
                <div>
                    <SuperButton type="submit" invalid={!isValid}>Add New Habit</SuperButton>

                </div>
            </form>
        </Box>
    )
}

//
export default NewHabitForm