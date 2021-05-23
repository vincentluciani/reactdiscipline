import './App.css';
import NewHabit from './components/HabitRelated/NewHabit';
import MyChart from './components/Charts/Chart'
import Habits from './components/HabitRelated/Habits'
import React, { useState } from 'react'
import HabitChart from './components/HabitRelated/HabitChart'
import Filter from './components/Filters/Filter'
import MainPage from './components/Wrappers/MainPage'


const habits_data = [{ 'id': 1, 'date': new Date(2021, 4, 30), 'title': 'sleep well', 'progress': 66 },
{ 'id': 2, 'date': new Date(2020, 4, 28), 'title': 'eat well', 'progress': 10 }];

const App = () => {

  const [habits, setHabits] = useState(habits_data);

  const onNewItemHandler = habit => {
    setHabits((previousHabits) => { return [habit, ...previousHabits] });
  }

  const reactOnSelectedFilter = textChosen => {
    setFilterText(textChosen);
    console.log("filter chosen:" + textChosen)
  }

  const [filterText, setFilterText] = useState('')

  const filteredItems = habits.filter(
    habit => {
      if (filterText.length > 0) {
        return (habit.title.indexOf(filterText) >= 0)
      }
      else {
        return true;
      }
    }
  );

  return (
    <div className="App">
      <Filter setFilterText={reactOnSelectedFilter} />
      <MainPage>
        <NewHabit onNewItem={onNewItemHandler} />
        <Habits habits={filteredItems} />
      </MainPage>
      <div>
        <MyChart />
        <HabitChart habits={filteredItems} />
      </div>

    </div>
  );
}

export default App;
