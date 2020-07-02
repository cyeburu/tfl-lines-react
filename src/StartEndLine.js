import React, { useState, useEffect } from "react"

function StartEndLine(props) {
    const [location, setLocation] = useState({})

    useEffect(() => {
        fetch(`https://api.tfl.gov.uk/Line/${props.line}/Route`)
            .then(res => res.json())
            .then(data => {
                setLocation(data)
            })

    }, [props.line])
    return (
        <div >
            {location.routeSections ? <div className="routeContainer">
                <ul className="rightUl">
                    <li >Start of Line</li>
                    <li className="content">{location.routeSections[0].originationName}</li>
                </ul>
                <ul className="leftUl" >
                    <li>End of Line</li>
                    <li className="content">{location.routeSections[0].destinationName}</li>
                </ul>
            </div>
                : null}
        </div>
    )
}

export default StartEndLine;