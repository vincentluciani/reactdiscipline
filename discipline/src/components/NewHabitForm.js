import React, { useState } from 'react'

const NewHabitForm = (props) => {

    const [enteredTitle, setEnteredTitle] = useState();
    const [enteredProgress, setEnteredProgress] = useState();
    const [enteredDate, setEnteredDate] = useState();

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
            progress: enteredProgress,
            date: enteredDate
        }
        props.onSaveMyItem(habitData);

        setEnteredTitle('');
        setEnteredProgress('');
        setEnteredDate('');

    }

    return (
        <form onSubmit={submitHandler}>
            <div>
                <label>Title</label>
                <input type="text" value={enteredTitle} onChange={titleChangeHandler} />
                <label>Progress</label>
                <input type="number" value={enteredProgress} min={0} step={1} max={100} onChange={progressChangeHandler} />
                <label>Date</label>
                <input type="date" value={enteredDate} onChange={dateChangeHandler} />
            </div>
            <div>
                <button type="submit">Add New Habit</button>
            </div>
        </form>
    )
}

export default NewHabitForm