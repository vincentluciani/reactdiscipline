import logo from './logo.svg';
import './App.css';
import Habit from './components/Habit';
import MyChart from './components/Chart'

function App() {
  const habits = [{ 'date': new Date(2021, 4, 30), 'title': 'sleep well', 'details': 'try to sleep well', 'progress': 66 },
  { 'date': new Date(2021, 4, 28), 'title': 'eat well', 'details': 'try to eat well', 'progress': 10 }]

  return (
    <div className="App">

      <Habit date={habits[0].date} title={habits[0].title} details={habits[0].details} progress={habits[0].progress} />
      <Habit date={habits[1].date} title={habits[1].title} details={habits[1].details} progress={habits[1].progress} />

      <div>
        <MyChart />
      </div>
    </div>
  );
}

export default App;
