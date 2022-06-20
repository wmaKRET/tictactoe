import React from "react"

export default function Field(props){
    return (
        <div 
            className="game__field"
            onClick={props.markField}
        >
            <h2>{props.value}</h2>
        </div>
    )
}