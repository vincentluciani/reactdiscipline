import './App.css';
import NewHabit from './components/NewHabit';
import MyChart from './components/Chart'
import Habits from './components/Habits'
import React, { useState } from 'react'

const habits_data = [{ 'date': new Date(2021, 4, 30), 'title': 'sleep well', 'progress': 66 },
{ 'date': new Date(2021, 4, 28), 'title': 'eat well', 'progress': 10 }];

const App = () => {

  const [habits, setHabits] = useState(habits_data);

  const onNewItemHandler = habit => {
    console.log(habit);
    setHabits((previousHabits) => { return [habit, ...previousHabits] });
  }
  return (
    <div className="App">
      <NewHabit onNewItem={onNewItemHandler} />
      <Habits habits={habits} />
      <div>
        <MyChart />
      </div>

    </div>
  );
}

export default App;
