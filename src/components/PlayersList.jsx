import React from 'react'
import Player from './Player'

const PlayersList = (props) => (
            <table>
                <thead> 
                 <th>Player</th>
                 <th>Position</th>
                 <th>Team</th>
                 <th>Age</th>
                </thead> 
        
                <tbody>
                    <tr>
                        <td>
                         {
                            props.player.map((player, idx) => (
                                <Player
                                key={idx}
                                name={player.name}
                                />)
                            )
                        }  
                        </td>
                        <td>
                        {
                            props.player.map((player, idx) => (
                                <Player
                                key={idx}
                                position= {player.position}
                                />)
                            )
                        }  
                        </td> 
                        <td>
                        {
                            props.player.map((player, idx) => (
                                <Player
                                key={idx}
                                team={player.nationality}
                                />)
                            )
                        }  
                        </td>
                        <td>
                        {
                            props.player.map((player, idx) => (
                                <Player
                                key={idx}
                                age={player.dateOfBirth}
                                />)
                            )
                        }  
                        </td> 
                    </tr> 
                </tbody> 
            </table>
        )

export default PlayersList


