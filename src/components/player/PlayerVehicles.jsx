import React, {Component} from 'react';
import PlayerVehicleCard from './PlayerVehicleCard';

export default class PlayerVehicles extends Component {
    constructor(props) {
        super(props)

        this.state = {
            playerVehiclesStatistics: this.props.playerVehiclesStatistics,
            vehicles: this.props.vehicels
        }
    }
    render() {
        return(
            <div className='player-vehicles'>
                {this.state.playerVehicles.map(playerVehicleStatistics => <PlayerVehicleCard playerVehicleStatistics={playerVehicleStatistics} vehicle={this.state.vehicles}/>)}
            </div>
        )
    }
}