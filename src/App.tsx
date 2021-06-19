import React, { useState } from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import PokemonsList from "./components/PokemonsList"
import PokemonDetails from "./components/PokemonDetails"
import { Button } from "./components/ui"

import "./styles.scss"

export const App = () => {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route exact path="/">
            <PokemonsList />
          </Route>
          <Route path="/pokemon/:name">
            <PokemonDetails />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}
