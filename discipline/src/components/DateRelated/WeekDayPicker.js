import './Date.css'
import React, { useState } from 'react'
import styles from './WeekDayPicker.module.css'

const WeekDayPicker = (props) => {


    const [schedule, setSchedule] = useState({});

    const mondayChangeHandler = (event) => {
        const scheduleObject = { ...schedule, "monday": event.target.value }
        setSchedule(scheduleObject)
        props.onSchedule(scheduleObject);
    }

    const tuesdayChangeHandler = (event) => {
        const scheduleObject = { ...schedule, "tuesday": event.target.value }
        setSchedule(scheduleObject)
        props.onSchedule(scheduleObject);
    }

    const wednesdayChangeHandler = (event) => {
        const scheduleObject = { ...schedule, "wednesday": event.target.value }
        setSchedule(scheduleObject)
        props.onSchedule(scheduleObject);
    }

    const thursdayChangeHandler = (event) => {
        const scheduleObject = { ...schedule, "thursday": event.target.value }
        setSchedule(scheduleObject)
        props.onSchedule(scheduleObject);
    }

    const fridayChangeHandler = (event) => {
        const scheduleObject = { ...schedule, "friday": event.target.value }
        setSchedule(scheduleObject)
        props.onSchedule(scheduleObject);
    }

    const saturdayChangeHandler = (event) => {
        const scheduleObject = { ...schedule, "saturday": event.target.value }
        setSchedule(scheduleObject)
        props.onSchedule(scheduleObject);
    }

    const sundayChangeHandler = (event) => {
        const scheduleObject = { ...schedule, "sunday": event.target.value }
        setSchedule(scheduleObject)
        props.onSchedule(scheduleObject);
    }

    return (
        <React.Fragment>
            <div className={styles['day-labels']}>
                <label htmlFor="monday" >Monday</label>
                <input type="checkbox" id="monday" name="monday" onChange={mondayChangeHandler} /><br />
                <label htmlFor="monday" >Tuesday</label>
                <input type="checkbox" id="tuesday" name="tuesday" onChange={tuesdayChangeHandler} /><br />
                <label htmlFor="monday" >Wednesday</label>
                <input type="checkbox" id="wednesday" name="wednesday" onChange={wednesdayChangeHandler} /><br />
                <label htmlFor="monday" >Thursday</label>
                <input type="checkbox" id="thursday" name="thursday" onChange={thursdayChangeHandler} /><br />
                <label htmlFor="monday" >Friday</label>
                <input type="checkbox" id="friday" name="friday" onChange={fridayChangeHandler} /><br />
                <label htmlFor="monday" >Saturday</label>
                <input type="checkbox" id="saturday" name="saturday" onChange={saturdayChangeHandler} /><br />
                <label htmlFor="monday" >Sunday</label>
                <input type="checkbox" id="sunday" name="sunday" onChange={sundayChangeHandler} /><br />
            </div>
        </React.Fragment>
    );
}

export default WeekDayPicker;