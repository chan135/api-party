import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import './Poke.css'
import PokeUser from './PokeUser'

class Poke extends Component {
  state = {
    pokemon: ''
  }

  handleChange = (ev) => {
    const pokemon = ev.currentTarget.value
    this.setState({ pokemon })
  }

  handleSubmit = (ev) => {
    ev.preventDefault()
    this.props.history.push(`/poke/${this.state.pokemon}`)
  }

  render() {
    return (
      <div className="poke">
        <form onSubmit={this.handleSubmit}>
          <div>
            <input type="text"
              value={this.state.pokemon}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <button type="submit">Look up poke user</button>
          </div>
        </form>

        <Route exact path='/poke' render={() => (
          <h3>Please enter a pokemon</h3> 
        )} />
        <Route path='/poke/:pokemon' component={PokeUser} />
      </div>
    )
  }
}

export default Poke