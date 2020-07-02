import React, { useState, useEffect } from "react";
import SelectLine from "./SelectLine"

// https://stackoverflow.com/questions/53574614/multiple-calls-to-state-updater-from-usestate-in-component-causes-multiple-re-re

const SelectTravelMode = (props) => {
    const [modeName, setModeName] = useState("");
    const [modeLine, setModeLine] = useState([])

    function changeHandler(event) {
        setModeName(event.target.value)
    }
    useEffect(() => {
        if (modeName) {
            fetch(`https://api.tfl.gov.uk/Line/Mode/${modeName}`)
                .then(response => response.json())
                .then(data => {
                    setModeLine(data)
                })
        }
    }, [modeName]);

    return (
        <div>
            <select onChange={changeHandler}>
                <option>Choose a Mode of Transport</option>
                {props.transportMode.map((mode, index) => {
                    return <option key={index}>{mode.modeName}</option>
                })}
            </select>

            {modeLine.length >= 1 ? <SelectLine modeLine={modeLine} modeName={modeName} /> : null}

        </div>
    )
}

export default SelectTravelMode;