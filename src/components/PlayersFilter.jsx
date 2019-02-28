import React from 'react'

const PlayersFilter = (props) => (
    <React.Fragment>
        <input type="text" placeholder="Player Name" name="name" />
        <select name="position" >
            <option value="" disabled selected>Select a Position</option>
            <option>Attacking Midfield</option>
            <option>Central Midfield</option>
            <option>Centre-Back</option>
            <option>Centre-Forward</option>
            <option>Defensive Midfield</option>
            <option>Keeper</option>
            <option>Left Midfield</option>
            <option>Left Wing</option>
            <option>Left-Back</option>
            <option>Right-Back</option>
        </select>
        <input type="number" placeholder="Age" name="age" min-value="18" max-value="40" />

        <input type="submit" className="button" value="Search" />
    </React.Fragment>
)

export default PlayersFilter