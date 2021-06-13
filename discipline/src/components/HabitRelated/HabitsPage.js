

import NewHabit from './NewHabit';
import MyChart from '../Charts/Chart'
import Habits from './Habits'
import React, { useState, useEffect, useCallback } from 'react'
import HabitChart from './HabitChart'
import Filter from '../Filters/Filter'
import MainPage from '../Wrappers/MainPage'


const habits_data = [{ 'id': 1, 'date': new Date(2021, 4, 30), 'title': 'sleep well', 'progress': 66 },
{ 'id': 2, 'date': new Date(2020, 4, 28), 'title': 'eat well', 'progress': 10 }];

const HabitsPage = () => {

    const [habits, setHabits] = useState([]);
    const [filterText, setFilterText] = useState('');
    const [filteredItems, setFilteredItems] = useState(habits);
    const [loadingStatus, setLoadingStatus] = useState('INIT');
    const [fetchingError, setFetchingError] = useState(null);

    const fetchHabitsHandler = useCallback(async () => {
        if (loadingStatus === 'INIT') {
            setLoadingStatus('LOADING');
            setFetchingError(null);
            try {
                const response = await fetch("http://127.0.0.1:5000/get-habits?user=1");

                if (!response.ok) {
                    throw new Error('Error while fetching Habits data');
                }

                const data = await response.json();

                setHabits(data);
                setLoadingStatus('LOADED');

            } catch (error) {
                setFetchingError(error.message);
                setLoadingStatus('ERROR');
            }
        }
    }, []);

    useEffect(() => {
        fetchHabitsHandler();
    }, [fetchHabitsHandler]);

    useEffect(() => {
        setFilters();
    }, [filterText, habits]);

    const onNewItemHandler = habit => {
        setHabits((previousHabits) => { return [habit, ...previousHabits] });
    }

    const reactOnSelectedFilter = textChosen => {
        setFilterText(textChosen);
        console.log("filter chosen:" + textChosen)
    }

    const setFilters = () => {
        setFilteredItems(
            habits.filter(
                habit => {
                    if (filterText.length > 0) {
                        return (habit.title.indexOf(filterText) >= 0)
                    }
                    else {
                        return true;
                    }
                }
            )
        );
    }

    return (
        <React.Fragment>

            <MainPage>
                <Filter setFilterText={reactOnSelectedFilter} />
                <NewHabit onNewItem={onNewItemHandler} />
                {(loadingStatus !== 'LOADING') && <Habits habits={filteredItems} />}
                {(loadingStatus === 'LOADING') && <p>Loading ...</p>}
                {(loadingStatus !== 'LOADING') && fetchingError && <p>Error encountered when loading ...</p>}
            </MainPage>


        </React.Fragment>
    );
}

export default HabitsPage;

/*
            <div>
                <MyChart />
                <HabitChart habits={filteredItems} />
            </div>

*/
