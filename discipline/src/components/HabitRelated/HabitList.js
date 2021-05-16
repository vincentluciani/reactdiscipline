import React from 'react';
import Habit from './Habit'

const HabitList = props => {
    let habitContent = <p>No Habit Found</p>;

    if (props.items.length > 0) {
        habitContent = props.items.map(habit => <Habit key={habit.id} date={habit.date} title={habit.title} details={habit.details} progress={habit.progress} schedule={habit.schedule} dailyOccurence={habit.dailyOccurence} />);
    }

    return (<React.Fragment>{habitContent}</React.Fragment>);
}

export default HabitList;