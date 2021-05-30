import './Habits.css'
import HabitList from './HabitList'

import React, { useState } from 'react'


const Habits = (props) => {

    return (
        <React.Fragment>

            <HabitList items={props.habits} />

        </React.Fragment>
    );
}

export default Habits;