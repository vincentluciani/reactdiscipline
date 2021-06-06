
import React, { useContext } from 'react'
import SuperButton from '../Buttons/SuperButton'
import AuthenticationContext from '../Context/authentication-context'

const Navigation = (props) => {

    const context = useContext(AuthenticationContext);

    return <React.Fragment>
        {!context.isLoggedIn && (<SuperButton onClick={context.onLogin}>Login</SuperButton>)}
        {context.isLoggedIn && (<SuperButton onClick={context.onLogout}>Log off</SuperButton>)}
    </React.Fragment>
}

export default Navigation