import './Date.css'
import React, { useState, useEffect } from 'react'
import styles from './WeekDayPicker.module.css'

const WeekDayPicker = (props) => {

    let initialSchedule = {};

    if (props.initialSchedule) {
        initialSchedule = props.initialSchedule;
    };


    const [schedule, setSchedule] = useState(initialSchedule);

    // React.useEffect(() => {
    //     if (props.initialSchedule) {
    //         setSchedule(props.schinitialScheduleedule);
    //     };
    // });

    useEffect(() => {
        setSchedule({});
    }, [props.initialSchedule == null]);

    const mondayChangeHandler = (event) => {
        const scheduleObject = { ...schedule, "monday": event.target.checked }
        setSchedule(scheduleObject)
        props.onSchedule(scheduleObject);
    }

    const tuesdayChangeHandler = (event) => {
        const scheduleObject = { ...schedule, "tuesday": event.target.checked }
        setSchedule(scheduleObject)
        props.onSchedule(scheduleObject);
    }

    const wednesdayChangeHandler = (event) => {
        const scheduleObject = { ...schedule, "wednesday": event.target.checked }
        setSchedule(scheduleObject)
        props.onSchedule(scheduleObject);
    }

    const thursdayChangeHandler = (event) => {
        const scheduleObject = { ...schedule, "thursday": event.target.checked }
        setSchedule(scheduleObject)
        props.onSchedule(scheduleObject);
    }

    const fridayChangeHandler = (event) => {
        const scheduleObject = { ...schedule, "friday": event.target.checked }
        setSchedule(scheduleObject)
        props.onSchedule(scheduleObject);
    }

    const saturdayChangeHandler = (event) => {
        const scheduleObject = { ...schedule, "saturday": event.target.checked }
        setSchedule(scheduleObject)
        props.onSchedule(scheduleObject);
    }

    const sundayChangeHandler = (event) => {
        const scheduleObject = { ...schedule, "sunday": event.target.checked }
        setSchedule(scheduleObject)
        props.onSchedule(scheduleObject);
    }

    return (
        <React.Fragment>
            <div className={styles['day-labels']}>
                <label htmlFor="monday" >Monday</label>
                <input type="checkbox" id="monday" name="monday" checked={schedule.monday} onChange={mondayChangeHandler} /><br />
                <label htmlFor="monday" >Tuesday</label>
                <input type="checkbox" id="tuesday" name="tuesday" checked={schedule.tuesday} onChange={tuesdayChangeHandler} /><br />
                <label htmlFor="monday" >Wednesday</label>
                <input type="checkbox" id="wednesday" name="wednesday" checked={schedule.wednesday} onChange={wednesdayChangeHandler} /><br />
                <label htmlFor="monday" >Thursday</label>
                <input type="checkbox" id="thursday" name="thursday" checked={schedule.thursday} onChange={thursdayChangeHandler} /><br />
                <label htmlFor="monday" >Friday</label>
                <input type="checkbox" id="friday" name="friday" checked={schedule.friday} onChange={fridayChangeHandler} /><br />
                <label htmlFor="monday" >Saturday</label>
                <input type="checkbox" id="saturday" name="saturday" checked={schedule.saturday} value={schedule.monday} onChange={saturdayChangeHandler} /><br />
                <label htmlFor="monday" >Sunday</label>
                <input type="checkbox" id="sunday" name="sunday" checked={schedule.sunday} onChange={sundayChangeHandler} /><br />
            </div>
        </React.Fragment>
    );
}

export default WeekDayPicker;