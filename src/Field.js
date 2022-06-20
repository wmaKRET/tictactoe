import React from "react"

export default function Field(props){
    const styles = {
        backgroundColor: !props.isMarked 
                            ? '#AAAAAA'
                            : props.isWinner
                                ? '#70ec65'
                                : '#e4e4e4'
    }

    return (
        <div 
            className="game__field"
            style={styles}
            onClick={props.markField}
        >
            <h2>{props.value}</h2>
        </div>
    )
}