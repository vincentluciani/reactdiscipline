import './Habits.css'
import Habit from './Habit'
import Filter from './Filter'
import React, { useState } from 'react'

const Habits = (props) => {

    const [displayYear, setYearChosen] = useState('')

    const filteredItems = props.habits.filter(
        habit => {
            if (displayYear.length > 0) {
                return habit.date.getFullYear().toString() === displayYear
            }
            else {
                return true;
            }
        }
    );

    const reactOnSelectedDate = yearChosen => {
        setYearChosen(yearChosen);
        console.log("date selected:" + yearChosen)
    }
    return (
        <div>
            <Filter setDate={reactOnSelectedDate} />
            {filteredItems.map(habit => <Habit key={habit.id} date={habit.date} title={habit.title} details={habit.details} progress={habit.progress} />)}
        </div>
    );
}

export default Habits;