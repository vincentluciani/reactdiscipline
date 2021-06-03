import React, { useEffect, useState } from 'react'
import styles from './LoginForm.module.css'
import SuperButton from '../Buttons/SuperButton'


const emailReducer = (state, action) => {
    return { value: '', isValid: false };
}
const NewHabitForm = (props) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isValid, setIsValid] = useState(false);

    // const [emailState, emailTrigger] = useReducer(emailReducer,{
    //     value: '',
    //     isValid: false   
    // })
    const emailChangeHandler = (event) => {
        setEmail(event.target.value);
    }

    const passwordChangeHandler = (event) => {
        setPassword(event.target.value);
    }

    useEffect(() => {
        // Each time you enter a key, you start the counter from scratch and wait for 500ms
        // so the validation will complete only when you stop typing during 500ms
        const timer = setTimeout(
            () => {
                console.log("checking for validity");
                setIsValid(email.includes('@') && password.trim().length > 6);
            },
            1000
        );
        return () => {
            console.log('cleanup');
            clearTimeout(timer)
                ;
        };
    }, [email, password]);

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