import NewHabitForm from './NewHabitForm'

const NewHabit = (props) => {

    const onSaveMyItemHandler = (onSaveMyItem) => {
        const newHabitData = {
            ...onSaveMyItem,
            id: Math.random().toString()
        }
        props.onNewItem(newHabitData);
    }

    return (
        <div>
            < NewHabitForm onSaveMyItem={onSaveMyItemHandler} />
        </div>)
}

export default NewHabit