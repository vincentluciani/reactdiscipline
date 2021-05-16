import React, { useState } from 'react'
import styles from './NewHabitForm.module.css'
import SuperButton from '../Buttons/SuperButton'
import WeekDayPicker from '../DateRelated/WeekDayPicker'

const NewHabitForm = (props) => {

    const [enteredTitle, setEnteredTitle] = useState('');
    const [isValid, setIsValid] = useState(true);

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
    }

    const submitHandler = (event) => {
        event.preventDefault(); // To prevent the page to reload

        const habitData = {
            title: enteredTitle,
            progress: 0,
            date: new Date()
        }

        if (enteredTitle.trim().length === 0) {
            setIsValid(false);
            return;
        }
        props.onSaveMyItem(habitData);
        setEnteredTitle('');
        setIsValid(true);

    }

    let className = 'form';
    if (!isValid) {
        className += ' invalid';
    }

    return (
        <form onSubmit={submitHandler}>
            <div className={styles[className]} >
                <label htmlFor="title">Title :</label><br />
                <input id="title" type="text" value={enteredTitle} onChange={titleChangeHandler} />
                <br /><br />
                <WeekDayPicker></WeekDayPicker>
            </div>
            <div>
                <SuperButton type="submit" invalid={!isValid}>Add New Habit</SuperButton>

            </div>
        </form>
    )
}

// <label htmlFor="date">Date</label>
//                 <input id="date" type="date" value={enteredDate} onChange={dateChangeHandler} />
// <input id="progress" type="number" value={enteredProgress} min={0} step={1} max={100} onChange={progressChangeHandler} />
export default NewHabitForm