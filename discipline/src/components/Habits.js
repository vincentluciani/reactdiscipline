import './Habits.css'
import Habit from './Habit'
import Filter from './Filter'

const Habits = (props) => {
    const reactOnSelectedDate = yearChosen => {
        console.log("date selected:" + yearChosen)
    }
    return (
        <div>
            <Filter setDate={reactOnSelectedDate} />
            {props.habits.map(habit => <Habit date={habit.date} title={habit.title} details={habit.details} progress={habit.progress} />)}
        </div>
    );
}

export default Habits;