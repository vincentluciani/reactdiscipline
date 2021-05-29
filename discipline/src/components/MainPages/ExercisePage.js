

import NewHabit from '../HabitRelated/NewHabit';
import MyChart from '../Charts/Chart'
import Habits from '../HabitRelated/Habits'
import React, { useState } from 'react'
import HabitChart from '../HabitRelated/HabitChart'
import Filter from '../Filters/Filter'
import MainPage from '../Wrappers/MainPage'


const habits_data = [{ 'id': 1, 'date': new Date(2021, 4, 30), 'title': 'sleep well', 'progress': 66 },
{ 'id': 2, 'date': new Date(2020, 4, 28), 'title': 'eat well', 'progress': 10 }];

const HabitsPage = () => {

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
        <React.Fragment>
            <Filter setFilterText={reactOnSelectedFilter} />
            <MainPage>
                <NewHabit onNewItem={onNewItemHandler} />
                <Habits habits={filteredItems} />
            </MainPage>
            <div>
                <MyChart />
                <HabitChart habits={filteredItems} />
            </div>

        </React.Fragment>
    );
}

export default HabitsPage;
