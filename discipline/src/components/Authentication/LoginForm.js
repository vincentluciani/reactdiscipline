import React, { useEffect, useState, useReducer, useContext } from 'react'
import styles from './LoginForm.module.css'
import SuperButton from '../Buttons/SuperButton'
import AuthenticationContext from '../Context/authentication-context'
import Input from '../Forms/Input'

const emailReducer = (state, action) => {

    const isEmailStringValid = inputString => {
        if (!inputString.includes('@')) {
            return false;
        } else if (!inputString.includes('.')) {
            return false;
        } else {
            return true;
        }
    }
    if (action.type == 'NEW_VALUE') {
        /* action gets what was passed as trigger in the input */
        return { value: action.val, isValid: isEmailStringValid(action.val) }
    } else if (action.type == 'LOOSE_FOCUS') {
        /* state gets the value of the last state snapshot */
        return { value: state.value, isValid: isEmailStringValid(state.value) }
    }
    else {
        return { value: '', isValid: false };
    }

}

const passwordReducer = (state, action) => {
    if (action.type == 'NEW_VALUE') {
        /* action gets what was passed as trigger in the input */
        return { value: action.val, isValid: action.val.trim().length > 6 }
    } else if (action.type == 'LOOSE_FOCUS') {
        /* state gets the value of the last state snapshot */
        return { value: state.value, isValid: state.value.trim().length > 6 }
    }
    else {
        return { value: '', isValid: false };
    }

}

const NewHabitForm = (props) => {

    const [isLoginFormValid, setIsLoginFormValid] = useState(false);

    const [emailState, emailTrigger] = useReducer(emailReducer, {
        value: '',
        isValid: false
    });

    const [passwordState, passwordTrigger] = useReducer(passwordReducer, {
        value: '',
        isValid: false
    });


    const context = useContext(AuthenticationContext);

    const emailChangeHandler = (event) => {
        emailTrigger({ type: 'NEW_VALUE', val: event.target.value });
    }

    const emailValidateWhenLoosingFocus = () => {
        emailTrigger({ type: 'LOOSE_FOCUS' });
    }

    const passwordChangeHandler = event => {
        passwordTrigger({ type: 'NEW_VALUE', val: event.target.value });
    }

    const passwordValidateWhenLoosingFocus = () => {
        passwordTrigger({ type: 'LOOSE_FOCUS' });
    }

    const { isValid: emailIsValid } = emailState;
    const { isValid: passwordIsValid } = passwordState;

    useEffect(() => {
        /* Each time you enter a key, you start the counter from scratch and wait for 500ms
        so the validation will complete only when you stop typing during 500ms */
        const timer = setTimeout(
            () => {
                console.log("checking for validity");
                setIsLoginFormValid(emailIsValid && passwordIsValid);
            },
            1000
        );
        return () => {
            console.log('cleanup');
            clearTimeout(timer)
                ;
        };
    }, [emailIsValid, passwordIsValid]);

    const submitHandler = (event) => {
        event.preventDefault(); // To prevent the page to reload
        emailTrigger({ type: 'RESET' });
        passwordTrigger({ type: 'RESET' });
        context.onLogin(emailState.value, passwordState.value);
    }

    let className = 'form';
    if (!isLoginFormValid) {
        className += ' invalid';
    }
    // 
    return (
        <form onSubmit={submitHandler}>
            <div className={styles[className]} >
                <h2>Login</h2>
                <Input isValid={emailState.isValid}
                    label="E-mail"
                    id="email"
                    type="text"
                    value={emailState.value}
                    onChange={emailChangeHandler}
                    onBlur={emailValidateWhenLoosingFocus} />
                <br />
                <Input isValid={passwordState.isValid}
                    label="Password"
                    id="password"
                    type="password"
                    value={passwordState.value}
                    onChange={passwordChangeHandler}
                    onBlur={passwordValidateWhenLoosingFocus} />
                <br />
            </div>
            <div>
                <SuperButton type="submit" invalid={!isLoginFormValid}>Submit</SuperButton>
            </div>
        </form>
    )
}
export default NewHabitForm