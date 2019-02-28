import React, { Component } from 'react';
import axios from 'axios'
import './App.css';
import PlayersList from './components/PlayersList'
import PlayersFilter from './components/PlayersFilter'

class App extends Component {
  constructor(props){
        super(props)
        
        this.state = {
            players: []
        }
        this.handlePlayers = this.handlePlayers.bind(this)
  }
  componentDidMount(){
      axios.get("https://football-players-b31f2.firebaseio.com/players.json").then(res => {
        this.setState({players : res.data})
        console.log(this.state.players)
      })
  }
  
  handlePlayers(e){
    e.preventDefault()
    let table = e.target,
    player = {
      name: table.name.value,
      position: table.position.value,
      nationality: table.nationality.value,
      age: table.dateOfBirth.value
    }
    this.setState({
            players: this.state.players.concat([player])
        })
  }
  

  render() {
    return (

      <React.Fragment>     
        <PlayersFilter />
        <PlayersList player = {this.state.players}/>
      </React.Fragment> 
    );
  }
}

export default App;
