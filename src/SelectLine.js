import React, { useState } from "react"
import StartEndLine from "./StartEndLine"

const SelectLine = (props) => {

    const [line, setLine] = useState("")

    function onChangeHandler(event) {
        setLine(event.target.value)
    }
    return (
        <div>
            <select onChange={onChangeHandler} className="selectLine">
                <option>Choose a Line</option>
                {props.modeLine.map((line, index) => {
                    return (
                        <option key={index}>{line.name}</option>
                    )
                })}
            </select>
            {line ? < StartEndLine line={line} /> : null}
        </div>
    )
}
export default SelectLine;