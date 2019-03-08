import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';

const positions = [
    'Attacking Midfield',
    'Central Midfield',
    'Centre-Back',
    'Centre-Forward',
    'Defensive Midfield',
    'Keeper',
    'Left Midfield',
    'Left Wing',
    'Left-Back',
    'Right-Back'
];

export const NONE_VALUE = "none";

export default class PlayersFilter extends Component {
    constructor(props){
        super(props)

        this.state = {
            name: '',
            position: NONE_VALUE,
            age: ''
        }
        this.onChangeName = this.onChangeName.bind(this)
        this.onChangePosition = this.onChangePosition.bind(this)
        this.onChangeAge = this.onChangeAge.bind(this)

        this.onClickFilter = this.onClickFilter.bind(this)
    }

    onChangeName(e){
        this.setState({
            name: e.target.value
        })
    }

    onChangePosition(e){
        this.setState({
            position: e.target.value
        })
    }

    onChangeAge(e){
        this.setState({
            age: e.target.value
        })
    }

    onClickFilter(){
        let filters = Object.assign({},this.state);
        
        this.setState({
            name: '',
            position: NONE_VALUE,
            age: ''
        })     
        this.props.onFilter(filters);
    }

    render(){
        return(
        <React.Fragment>
            <TextField
            className="input-name"
            margin="dense"
            variant="outlined"
            type="text" 
            pattern = "[A-Za-z]"
            placeholder="Player Name" 
            name="name" 
            value={this.state.name}
            onChange = {this.onChangeName}
            />

            <Select 
                className="select"
                margin="dense"
                variant="outlined"
                name="position" 
                onChange={this.onChangePosition}
                value={this.state.position} 
            >
            <MenuItem value={NONE_VALUE}>Select a Position</MenuItem>
            { positions.map((pos, idx) => {
               return (
                    <MenuItem id={idx} value={pos} key={pos}>
                        {pos}
                    </MenuItem>
               ); 
            }) } 
            </Select>

            <TextField
            className="input-age"
            margin="dense"
            variant="outlined"
            type="number" 
            placeholder="Age" 
            name="age" 
            min={18} 
            max={40} 
            value={this.state.age}
            onChange={this.onChangeAge}
            />

            <Button 
            className="button"
            onClick={this.onClickFilter} 
            variant="outlined" 
            color="primary"> 
            Search
            </Button>
        </React.Fragment>
        )
    }
    
}