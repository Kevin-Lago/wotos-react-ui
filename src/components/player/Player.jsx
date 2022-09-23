import React, { Component } from 'react';
import axios from 'axios';
import PlayerCard from './PlayerCard';
import PlayerStatistics from './PlayerStatistics';
import PlayerVehicles from './PlayerVehicleCard';
import Loading from '../basics/loading';

export default class Player extends Component {
    constructor(props) {
        super(props)

        this.state = {
            darkTheme: this.props.darkTheme,
            accountId: this.props.accountId,
            gameMode: "",
            player: this.props.player,
            userData: {},
            expectedStats: {},
            Nations: {
                battles: {

                },
                stats: {

                }
            },
            Types: { battles: {}, stats: {} },
            Tiers: { battles: {}, stats: {} }
        }
    }

    componentDidMount() {
        // find player favorite tank
    }

    componentWillUnmount() {
        this.setState({
            mounted: false
        })
    }

    render() {
        return (
            <main id="player" className={this.state.darkTheme === true ? 'dark-theme' : 'bright-theme'}>
                {
                    Object.values(this.state.player.playerStatistics).length === 0
                        ?
                        <div className={this.state.darkTheme === true ? 'player-card dark-theme' : 'player-card light-theme'}><Loading /></div>
                        :
                        <PlayerCard darkTheme={this.state.darkTheme} playerDetails={this.state.player.playerDetails} />
                }
                {
                    Object.values(this.state.player.playerStatistics).length === 0
                        ?
                        <div className={this.state.darkTheme === true ? 'player-statistics dark-theme' : 'player-statistics light-theme'}><Loading /></div>
                        :
                        <PlayerStatistics darkTheme={this.state.darkTheme} playerStatistics={this.state.player.playerStatistics} />
                }
                {
                    Object.values(this.state.player.playerStatistics).length === 0
                        ?
                        <div className={this.state.darkTheme === true ? 'player-vehicles dark-theme' : 'player-vehicles light-theme'}><Loading /></div>
                        :
                        <PlayerVehicles darkTheme={this.state.darkTheme} playerVehicleStatistics={this.state.player.playerVehicleStatistics} />
                }
                {/* <PlayerCard darkTheme={this.state.darkTheme} playerStatistics={this.state.playerStatistics}/> */}
                {/* <Header
                    darkTheme={this.state.darkTheme}
                    sortGraphsByCategory={this.state.sortGraphsByCategory}
                    userData={this.state.userData}
                    Nations={this.state.Nations}
                    Tiers={this.state.Tiers}
                    Types={this.state.Types}
                />
                <Footer
                    darkTheme={this.state.darkTheme}
                    sortTanksByCategory={this.state.sortTanksByCategory}
                    userData={this.state.userData}
                /> */}
            </main>
        )
    }
};
