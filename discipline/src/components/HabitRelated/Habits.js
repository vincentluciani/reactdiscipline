import './Habits.css'
import HabitList from './HabitList'
import Filter from '../Filters/Filter'
import React, { useState } from 'react'
import HabitChart from './HabitChart'

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
        <React.Fragment>
            <HabitChart habits={filteredItems} />
            <Filter setDate={reactOnSelectedDate} />
            <HabitList items={filteredItems} />
        </React.Fragment>
    );
}

export default Habits;