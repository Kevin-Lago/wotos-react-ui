import React, { Component } from 'react';
import PlayerVehicleCard from './PlayerVehicleCard';

export default class PlayerVehicles extends Component {
    constructor(props) {
        super(props)

        this.state = {
            playerVehiclesStatistics: this.props.playerVehiclesStatistics,
            vehicles: this.props.vehicels
        }
    }

    sortTanksByCategory = (event) => {
        event.preventDefault();
        let sort = event.target.id;
        if (sort === 'name' || 'nation' || 'type') {
            if (this.state.sorted !== sort + "up") {
                let sortedList = this.state.userData.tanks.sort((a, b) => {
                    if (a[sort] < b[sort])
                        return -1;
                    if (a[sort] > b[sort])
                        return 1;
                    return 0;
                })
                this.setState({
                    sorted: sort + "up",
                    userData: {
                        ...this.state.userData,
                        tanks: sortedList
                    }
                })
            } else {
                let reverseSortedList = this.state.userData.tanks.sort((a, b) => {
                    if (b[sort] < a[sort])
                        return -1;
                    if (b[sort] > a[sort])
                        return 1;
                    return 0;
                })
                this.setState({
                    sorted: sort + "down",
                    userData: {
                        ...this.state.userData,
                        tanks: reverseSortedList
                    }
                })
            }
        } else {
            let sortedList = this.state.userData.tanks.sort((a, b) => {
                console.log(a, b)
                return b[sort] - a[sort];
            })
            console.log(sortedList)
            this.setState({
                sorted: sort + "up",
                userData: {
                    ...this.state.userData,
                    tanks: sortedList
                }
            })
        }
    }

    render() {
        return (
            <div className='player-vehicles'>
                {this.state.playerVehicles.map(playerVehicleStatistics =>
                    <PlayerVehicleCard playerVehicleStatistics={playerVehicleStatistics} vehicle={this.state.vehicles.entries(playerVehicleStatistics.key())} />
                )}
            </div>
        )
    }
}