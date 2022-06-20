import React from "react"

export default function Field(props){
    return (
        <div className="game__field">
            <h2>{props.value}</h2>
        </div>
    )
}