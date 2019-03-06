import axios from 'axios'

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

export const getPlayers = () => {
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
            return parsedPlayers
          })
          
}
