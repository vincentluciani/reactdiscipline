import './Date.css'
import React from 'react'
const WeekDayPicker = (props) => {

    return (
        <React.Fragment>
            <div>
                <label for="monday">Monday</label>
                <input type="checkbox" id="monday" name="monday" />
            </div>
        </React.Fragment>
    );
}

export default WeekDayPicker;