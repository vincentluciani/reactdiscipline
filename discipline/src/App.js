import './App.css';
import ExercisePage from './components/HabitRelated/HabitsPage';
import Header from './components/HeaderFooter/Header';
import { useState, useEffect } from 'react';
import Login from './components/Authentication/Login'

const App = () => {

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

  const loginHandler = (email, password) => {
    localStorage.setItem('isLoggedIn', '1');
    setIsLoggedIn(true);
  }

  const logOffHandler = () => {
    localStorage.setItem('isLoggedIn', '0');
    setIsLoggedIn(false);
  }

  return (
    <div className="App">
      <Header loginAction={loginHandler} logoffAction={logOffHandler} />
      {isLoggedIn && <ExercisePage />}
      {!isLoggedIn && <Login />}
    </div>
  );
}

export default App;
