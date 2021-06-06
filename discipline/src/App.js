import './App.css';
import ExercisePage from './components/HabitRelated/HabitsPage';
import Header from './components/HeaderFooter/Header';
import React, { useContext } from 'react';
import Login from './components/Authentication/Login'
import AuthenticationContext from './components/Context/authentication-context'


const App = () => {

  const context = useContext(AuthenticationContext);

  return (
    <React.Fragment>
      <Header />
      {context.isLoggedIn && <ExercisePage />}
      {!context.isLoggedIn && <Login />}
    </React.Fragment>
  );
}

export default App;
