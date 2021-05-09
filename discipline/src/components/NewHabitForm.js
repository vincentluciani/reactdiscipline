import React, { useState } from 'react'
import './NewHabitForm.css'
import SuperButton from './SuperButton'

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

    return (
        <form onSubmit={submitHandler}>
            <div className={`form ${!isValid && 'invalid'}`} >
                <label >Title</label>
                <input type="text" value={enteredTitle} onChange={titleChangeHandler} />
                <label>Progress</label>
                <input type="number" value={enteredProgress} min={0} step={1} max={100} onChange={progressChangeHandler} />
                <label>Date</label>
                <input type="date" value={enteredDate} onChange={dateChangeHandler} />
            </div>
            <div>
                <SuperButton type="submit" invalid={!isValid}>Add New Habit</SuperButton>

            </div>
        </form>
    )
}

//
export default NewHabitForm