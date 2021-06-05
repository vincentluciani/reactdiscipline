
import React, { useContext } from 'react'
import SuperButton from '../Buttons/SuperButton'
import AuthenticationContext from '../Context/authentication-context'

const Navigation = (props) => {

    const context = useContext(AuthenticationContext);

    const loginButtonClick = () => {
        props.loginAction(true);
    }
    const loginOffClick = () => {
        props.logoffAction(true);
    }

    return <React.Fragment>
        {!context.isLoggedIn && (<SuperButton onClick={loginButtonClick}>Login</SuperButton>)}
        {context.isLoggedIn && (<SuperButton onClick={loginOffClick}>Log off</SuperButton>)}
    </React.Fragment>
}

export default Navigation