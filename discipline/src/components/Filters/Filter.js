import React from 'react'
import HorizontalBar from '../Wrappers/HorizontalBar'

const Filter = (props) => {
    const filterChangeHandler = event => {
        props.setFilterText(event.target.value);
    }
    return (
        <HorizontalBar>
            <label htmlFor="filter">Filter : </label><input id="filter" type="text" onChange={filterChangeHandler} />
        </HorizontalBar>
    );
}

export default Filter;