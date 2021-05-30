import LoginForm from './LoginForm'
import React, { useState } from 'react'
import Box from '../Wrappers/Box'
import MainPage from '../Wrappers/MainPage'

const Login = (props) => {

    return (<MainPage><Box><LoginForm /></Box></MainPage>);
}

export default Login