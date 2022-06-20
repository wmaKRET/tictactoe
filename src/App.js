import React from "react"
import Field from "./Field"
import "./App.css"

function App() {
  return (
    <main className="container">
      <div className="header">
        <h1>Tic Tac Toe</h1>
        <div className="header__menu">
          <button>Restart</button>
          <div className="header__menu-next-mark">
            <h2>O</h2>
          </div>
        </div>
      </div>
      <div className="game">
        <Field />      
      </div>
    </main>
  )
}

export default App
