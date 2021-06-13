import React from 'react'
import styles from './Input.module.css'

const Form = (props) => {
    return (
        <div className={`${props.isValid === true ? styles['valid'] : ''}`}>
            <label htmlFor={props.id}>{props.label} :</label><br />
            <input
                id={props.id}
                type={props.type}
                value={props.value}
                onChange={props.onChange}
                onBlur={props.onBlur} />
        </div>
    )
}

export default Form