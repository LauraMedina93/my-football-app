import React, { Component } from 'react';
import './App.css';
import axios from 'axios'
import FootballPlayers from './components/FootballPlayers'
import PlayersList from './components/PlayersList'
import PlayersFilter from './components/PlayersFilter'


class App extends Component {
  constructor(props){
        super(props)
        
        this.state = {
            players: [],
            filteredPlayers: [],
            isFiltered: false
        } 
        this.filterPlayers = this.filterPlayers.bind(this);
  }

componentDidMount() {
    axios.get("https://football-players-b31f2.firebaseio.com/players.json")
      .then(res => {
        let players = res.data;

        //Parsed players
        let parsedPlayers = players.map((player, idx) => {
          return {
            id: idx,
            name: player.name,
            position: player.position,
            age: getAge(player.dateOfBirth),
            nationality: player.nationality
          }
        });

        this.setState({
          players: parsedPlayers
        });
      })
}

filterPlayers(filters) {
    let filtered = this.state.players.filter((player) => {
      return (
        player.name.toUpperCase().includes(filters.name.toUpperCase()) && 
        player.age.toString() === filters.age || 
        player.position === filters.position);
    })

    this.setState({ 
      filteredPlayers: filtered,
      isFiltered: true
    });
}

render() {    
    return (
      <React.Fragment>   
        <FootballPlayers />
        <PlayersFilter 
        onFilter={this.filterPlayers} />
        <PlayersList players={this.state.isFiltered ? this.state.filteredPlayers : this.state.players} />
      </React.Fragment> 
    );
  }
}

export default App;

function getAge(dateString) {
  var today = new Date();
  var birthDate = new Date(dateString);
  var age = today.getFullYear() - birthDate.getFullYear();
  var m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
}