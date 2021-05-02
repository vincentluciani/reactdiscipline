import './Habit.css'
import Date from './Date.js'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import Box from './Box.js'

function Habit(props) {
    const percentage = props.progress;

    return (<Box className="habit">
        <Date date={props.date} />
        <div>
            <h2>{props.title}</h2>
            <div>{props.details}</div>
        </div>
        <div style={{ width: 100, height: 100 }}>
            <CircularProgressbar value={percentage} text={`${percentage}%`} />
        </div>
    </Box>);
}

export default Habit;

