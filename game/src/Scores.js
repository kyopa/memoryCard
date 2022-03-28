import React from "react"

function Scores(props) {

    
    console.log(props)

    return(
        <div>
            <h2>best score: {props.bestScore}</h2>

            <h2>current score: {props.score}</h2>

        </div>
    )
}

export default Scores