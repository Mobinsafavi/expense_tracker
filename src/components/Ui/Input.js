import React from "react";
import styles from './Input.module.css'

const Input = (props) => {
    return <input type={props.type} className={`${styles.input_field} ${props.className}`} onChange={props.onChange} value={props.value}></input>
}

export default Input;