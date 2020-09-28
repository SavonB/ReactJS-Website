import React from 'react'
import './Calories.css'

function Calories(props) {
    return (
        <div>

        <label>{props.label}</label>
        <select>
            <option>{props.ranges[0]}</option>
            <option>{props.ranges[1]}</option>
            <option>{props.ranges[2]}</option>
            <option>{props.ranges[3]}</option>
            <option>{props.ranges[4]}</option>
            </select>
            </div>
        )

}

export default Calories