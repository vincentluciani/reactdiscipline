import React, { useState } from 'react'
import styles from './NewHabitForm.module.css'
import SuperButton from '../Buttons/SuperButton'
import WeekDayPicker from '../DateRelated/WeekDayPicker'

const NewHabitForm = (props) => {

    let initialTitle = '';
    let intialSchedule = {};
    let initialDate = new Date();
    let initialDailyOccurence = 1;
    let initialProgress = 0;

    if (props.editMode === true && props.habit) {
        initialTitle = props.habit.title;
        intialSchedule = props.habit.schedule;
        initialDate = props.habit.date;
        initialDailyOccurence = props.habit.dailyOccurence;
        initialProgress = props.habit.progress;
    }

    const [enteredTitle, setEnteredTitle] = useState(initialTitle);
    const [isValid, setIsValid] = useState(true);
    const [schedule, setSchedule] = useState(intialSchedule);
    const [dailyOccurence, setDailyOccurence] = useState(initialDailyOccurence);
    const [date, setDate] = useState(initialDate);
    const [progress, setProgress] = useState(initialProgress);

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
    }

    const dailyOccurenceChangeHandler = (event) => {
        setDailyOccurence(event.target.value);
    }

    const scheduleChangeHandler = (onSchedule) => {
        if (onSchedule) {
            console.log("schedule" + onSchedule.toString())
            setSchedule(onSchedule);
        }
    }


    const submitHandler = (event) => {
        event.preventDefault(); // To prevent the page to reload

        const habitData = {
            "title": enteredTitle,
            "schedule": schedule,
            "date": date,
            "dailyOccurence": dailyOccurence,
            "progress": progress
        }

        if (enteredTitle.trim().length === 0) {
            setIsValid(false);
            return;
        }
        props.onSaveMyItem(habitData);
        setEnteredTitle('');
        setIsValid(true);
        setSchedule({});
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
                <label htmlFor="dailyOccurence">Daily Occurences ( target ) :</label><br />
                <input id="dailyOccurence" type="number" value={dailyOccurence} min={1} step={1} max={100} onChange={dailyOccurenceChangeHandler} />
                <br /><br />
                <label>Schedule :</label><br />
                <WeekDayPicker onSchedule={scheduleChangeHandler}></WeekDayPicker>
            </div>
            <div>
                <SuperButton type="submit" invalid={!isValid}>Submit</SuperButton>
            </div>
        </form>
    )
}

// <label htmlFor="date">Date</label>
//                 <input id="date" type="date" value={enteredDate} onChange={dateChangeHandler} />
export default NewHabitForm