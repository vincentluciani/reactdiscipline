import Habit from './Habit'

const HabitList = props => {
    let habitContent = <p>No Habit Found</p>;

    if (props.items.length > 0) {
        habitContent = props.items.map(habit => <li><Habit key={habit.id} date={habit.date} title={habit.title} details={habit.details} progress={habit.progress} /></li>);
    }

    return (<ul>{habitContent}</ul>);
}

export default HabitList;