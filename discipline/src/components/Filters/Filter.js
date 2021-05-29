import React from 'react'
import HorizontalBar from '../Wrappers/HorizontalBar'
import styles from './Filter.module.css'

const Filter = (props) => {
    const filterChangeHandler = event => {
        props.setFilterText(event.target.value);
    }
    return (
        <HorizontalBar className={styles['filter-bar']}>
            <label htmlFor="filter">Filter : </label><input id="filter" type="text" onChange={filterChangeHandler} />
        </HorizontalBar>
    );
}

export default Filter;