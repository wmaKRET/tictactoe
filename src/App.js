import React from "react"
import Field from "./Field"
import "./App.css"

function App() {
  const [fields, setFields] = React.useState(newFields())
  const [mark, setMark] = React.useState('X')

  function createNewField(){
    return {
      id: Math.floor(Math.random() * Date.now()),
      value: "",
      isMarked: false
    }
  }

  function newFields(){
    return new Array(9).fill().map(item => createNewField())
  }

  function markField(id){
    setFields(prevFields => prevFields.map(field => {
      return id !== field.id 
        ? field 
        : {...field, value: mark, isMarked: true}
    }))
  }

  const fieldElements = fields.map(field => (
    <Field 
      key={field.id}
      value={field.value}
      isMarked={field.isMarked}
      markField={() => markField(field.id)}
    />
  ))

  return (
    <main className="container">
      <div className="header">
        <h1>Tic Tac Toe</h1>
        <div className="header__menu">
          <button>Restart</button>
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
