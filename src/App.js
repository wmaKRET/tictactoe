import React from "react"
import Field from "./Field"
import "./App.css"

function App() {
  const [fields, setFields] = React.useState(newFields())
  const [mark, setMark] = React.useState('X')
  const [gameOver, setGameOver] = React.useState(false)
  const [moves, setMoves] = React.useState(0)

  React.useEffect(() => {
    if (moves > 4) {
      const threeMarksInRow = isThereAWinner()
      if (threeMarksInRow) setGameOver(true)
      const allMarked = fields.every(field => field.isMarked)
      if (allMarked) setGameOver(true)
    }
  }, [fields])

  function createNewField(){
    return {
      id: Math.floor(Math.random() * Date.now()),
      value: "",
      isMarked: false,
      isWinner: false
    }
  }

  function newFields(){
    return new Array(9).fill().map(item => createNewField())
  }

  function markField(id){
    if (gameOver) return
    const selectedField = fields.filter(field => field.id === id)
    if (selectedField[0].isMarked) return
    setFields(prevFields => prevFields.map(field => {
      return id !== field.id 
        ? field 
        : field.isMarked
            ? field
            : {...field, value: mark, isMarked: true}
    }))
    nextMark()
    setMoves(prevMoves => prevMoves + 1)
  }

  function nextMark(){
    setMark(prevMark => prevMark === 'X' ? 'O' : 'X')
  }

  function restartGame(){
    setFields(newFields())
    setMark('X')
    setGameOver(false)
    setMoves(0)
  }

  function isThereAWinner(){
    const firstRow = fields[1].isMarked &&
    (fields[0].value === fields[1].value && fields[2].value === fields[1].value)
    if (firstRow) {
        fields[0].isWinner = true 
        fields[1].isWinner = true 
        fields[2].isWinner = true
    }
    const secondRow = fields[4].isMarked &&
    (fields[3].value === fields[4].value && fields[5].value === fields[4].value) 
    if (secondRow) {
        fields[3].isWinner = true 
        fields[4].isWinner = true 
        fields[5].isWinner = true
    }
    const thirdRow = fields[7].isMarked &&
    (fields[6].value === fields[7].value && fields[8].value === fields[7].value)
    if (thirdRow) {
        fields[6].isWinner = true 
        fields[7].isWinner = true 
        fields[8].isWinner = true
    }
    const firstColumn = fields[3].isMarked &&
    (fields[0].value === fields[3].value && fields[6].value === fields[3].value)
    if (firstColumn) {
        fields[0].isWinner = true 
        fields[3].isWinner = true 
        fields[6].isWinner = true
    }
    const secondColumn = fields[4].isMarked &&
    (fields[1].value === fields[4].value && fields[7].value === fields[4].value)
    if (secondColumn) {
        fields[1].isWinner = true 
        fields[4].isWinner = true 
        fields[7].isWinner = true
    }
    const thirdColumn = fields[5].isMarked &&
    (fields[2].value === fields[5].value && fields[8].value === fields[5].value)
    if (thirdColumn) {
        fields[2].isWinner = true 
        fields[5].isWinner = true 
        fields[8].isWinner = true
    }
    const topLeftDiagonal = fields[4].isMarked &&
    (fields[0].value === fields[4].value && fields[8].value === fields[4].value)
    if (topLeftDiagonal) {
        fields[0].isWinner = true 
        fields[4].isWinner = true 
        fields[8].isWinner = true
    }
    const bottomLeftDiagonal = fields[4].isMarked &&
    (fields[6].value === fields[4].value && fields[2].value === fields[4].value)
    if (bottomLeftDiagonal) {
        fields[2].isWinner = true 
        fields[4].isWinner = true 
        fields[6].isWinner = true
    }
    return firstRow || secondRow || thirdRow || firstColumn || 
            secondColumn || thirdColumn || topLeftDiagonal || bottomLeftDiagonal
}

  const fieldElements = fields.map(field => (
    <Field 
      key={field.id}
      value={field.value}
      isMarked={field.isMarked}
      isWinner={field.isWinner}
      markField={() => markField(field.id)}
    />
  ))

  const styles = {
    backgroundColor: gameOver ? '#70ec65' : '#c26161'
  }

  return (
    <main className="container">
      <div className="header">
        <h1>Tic Tac Toe</h1>
        <div className="header__menu">
          <button 
            style={styles}
            onClick={restartGame}
          >
            {gameOver ? 'New game' : 'Restart'}
          </button>
          <div className="header__menu-next-mark">
            <h2>{mark}</h2>
          </div>
        </div>
      </div>
      <div className="game">
        {fieldElements}     
      </div>
    </main>
  )
}

export default App
