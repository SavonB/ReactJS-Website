/* returns a div with a search bar and button*/
import React from 'react'
import './DescriptionSearch.css'

const DescriptionSearch = (props) => {
    return (
        <div>
            <input placeholder={props.defaultInputText} />
            <button>{props.defaultButtonText}</button>

        </div>
        )
}

export default DescriptionSearch;