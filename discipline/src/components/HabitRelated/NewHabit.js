import NewHabitForm from './NewHabitForm'
import React, { useState } from 'react'
import Box from '../Wrappers/Box'
import { BsFillPlusCircleFill } from 'react-icons/bs';
import { IconContext } from "react-icons";
import styles from './NewHabit.module.css';
import SuperButton from '../Buttons/SuperButton'

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

    return (<React.Fragment>
        { habitDisplay && <Box>< NewHabitForm onSaveMyItem={onSaveMyItemHandler} /><SuperButton onClick={hideForm}>Hide</SuperButton></Box>}

        { !habitDisplay &&
            <Box onClick={showForm} className={styles['new-habit-box']}><h2>New Item</h2><IconContext.Provider value={{ color: "#3e98c7", "size": "6em" }}><div> <BsFillPlusCircleFill /></div></IconContext.Provider></Box>}
    </React.Fragment>
    );
}

export default NewHabit