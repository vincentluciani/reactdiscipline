import React, { useState, useEffect } from 'react'

const AuthenticationContext = React.createContext({
    isLoggedIn: false,
    onLogin: (email, password) => { },
    onLogout: () => { }
})

export default AuthenticationContext

export const AuthenticationContextProvider = (props) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(
        () => {
            const storedIsLoggedIn = localStorage.getItem('isLoggedIn');

            if (storedIsLoggedIn === '1') {
                setIsLoggedIn(true);

            }
        },
        []
    );


    const logoutHandler = () => {
        localStorage.setItem('isLoggedIn', '0');
        setIsLoggedIn(false);
    }

    const loginHandler = () => {
        localStorage.setItem('isLoggedIn', '1');
        setIsLoggedIn(true);
    }

    return <AuthenticationContext.Provider value={{
        isLoggedIn: isLoggedIn,
        onLogin: loginHandler,
        onLogout: logoutHandler
    }}>
        {props.children}
    </AuthenticationContext.Provider>
}