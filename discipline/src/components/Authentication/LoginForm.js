import React, { useEffect, useState } from 'react'
import styles from './LoginForm.module.css'
import SuperButton from '../Buttons/SuperButton'
import WeekDayPicker from '../DateRelated/WeekDayPicker'

const NewHabitForm = (props) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isValid, setIsValid] = useState(false);

    const emailChangeHandler = (event) => {
        setEmail(event.target.value);
    }

    const passwordChangeHandler = (event) => {
        setPassword(event.target.value);
    }

    useEffect(() => {
        setIsValid(email.includes('@') && password.trim().length > 6)
    }, [email, password])

    const submitHandler = (event) => {
        event.preventDefault(); // To prevent the page to reload
        setEmail('');
        setPassword('');

    }

    let className = 'form';
    if (!isValid) {
        className += ' invalid';
    }
    // 
    return (
        <form onSubmit={submitHandler}>
            <div className={styles[className]} >
                <h2>Login</h2>
                <label htmlFor="email">Email :</label><br />
                <input id="email" type="text" value={email} onChange={emailChangeHandler} />
                <br /><br />
                <label htmlFor="password">Password :</label><br />
                <input id="password" type="text" value={password} onChange={passwordChangeHandler} />
                <br /><br />
            </div>
            <div>
                <SuperButton type="submit" invalid={!isValid}>Submit</SuperButton>
            </div>
        </form>
    )
}

// <label htmlFor="date">Date</label>
//                 <input id="date" type="date" value={enteredDate} onChange={dateChangeHandler} />
export default NewHabitForm