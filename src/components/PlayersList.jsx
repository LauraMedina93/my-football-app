import React from 'react'

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
  

const PlayersList = (props) => (
            <Table>
                <TableHead> 
                    <TableRow>
                        <TableCell>Player</TableCell>
                        <TableCell>Position</TableCell>
                        <TableCell>Team</TableCell>
                        <TableCell>Age</TableCell>
                    </TableRow>
                </TableHead> 
                <TableBody>
                {
                    props.players.map((player, idx) => (
                        <TableRow key={idx}>
                            <TableCell>{player.name}</TableCell>
                            <TableCell>{player.position}</TableCell>
                            <TableCell>{player.nationality}</TableCell>
                            <TableCell>{player.age}</TableCell>
                        </TableRow>)
                    )
                }  
                </TableBody> 
            </Table>
        )
          


export default PlayersList


