import NewHabitForm from './NewHabitForm'
import React, { useState } from 'react'

const NewHabit = (props) => {

    const onSaveMyItemHandler = (onSaveMyItem) => {
        const newHabitData = {
            ...onSaveMyItem,
            id: Math.random().toString()
        }
        props.onNewItem(newHabitData);
    }

    const [habitDisplay, setHabitDisplay] = useState(false);

    const showForm = () => {
        setHabitDisplay(true);
    }

    const hideForm = () => {
        setHabitDisplay(false);
    }

    return (<div>
        { habitDisplay && < NewHabitForm onSaveMyItem={onSaveMyItemHandler} />}
        { habitDisplay && <div onClick={hideForm}>Cancel</div>}
        { !habitDisplay && <div onClick={showForm}>New Item</div>}
    </div>
    );
}

export default NewHabit