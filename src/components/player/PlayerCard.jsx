import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CalcWn8Color from '../../util/CalcWn8Color';
import CalcWrColor from '../../util/CalcWrColor';
import './playerCard.css';

export default class PlayerCard extends Component {
    constructor(props) {
        super(props);

        // this.state = {
        //     darkTheme: this.props.darkTheme,
        //     gameMode: "all",
        //     nickname: this.props.nickname,
        //     clanTag: this.props.clanTag,
        //     averageWn8: this.props.averageWn8,
        //     recentWn8: this.props.recentWn8,
        //     averageWinRate: this.props.averageWinRate,
        //     recentWinRate: this.props.recentWinRate,
        //     globalRating: this.props.globalRating
        // }

        this.state = {
            darkTheme: this.props.darkTheme,
            nickname: "test player",
            clanTag: "aclan",
            averageWn8: 1500,
            recentWn8: 2000,
            averageWinRate: 50.4,
            recentWinRate: 53.6,
            globalRating: 7500
        }
    }

    render() {
        let averageWn8Style = {
            "background-color": CalcWn8Color(this.state.averageWn8),
            "color": this.state.averageWn8 >= 0 & this.state.averageWn8 <= 700 || this.state.averageWn8 >= 1800 & this.state.averageWn8 <= 2000 ? 'white' : 'black'
        }

        let recentWn8Style = {
            "background-color": CalcWn8Color(this.state.recentWn8),
            "color": this.state.recentWn8 >= 0 & this.state.recentWn8 <= 700 || this.state.recentWn8 >= 1800 & this.state.recentWn8 <= 2000 ? 'white' : 'black'
        }

        let averageWinRateStyle = {
            "background-color": CalcWrColor(this.state.averageWinRate),
            "color": this.state.averageWinRate >= 56 & this.state.averageWinRate <= 64 || this.state.averageWinRate >= 0 & this.state.averageWinRate <= 43 ? 'white' : 'black'
        }

        let recentWinRateStyle = {
            "background-color": CalcWrColor(this.state.recentWinRate),
            "color": this.state.recentWinRate >= 56 & this.state.recentWinRate <= 64 || this.state.recentWinRate >= 0 & this.state.recentWinRate <= 43 ? 'white' : 'black'
        }

        return (
            <div className={this.state.darkTheme === true ? 'player-card dark-theme' : 'player-card light-theme'}>
                <div className="player-title">
                    <div className="player-clan-tag">
                        {Object.keys(this.state.clanTag).length !== 0 ?
                            <Link to="clan">
                                {'[' + this.state.clanTag + ']'}
                            </Link>
                            :
                            ''
                        }
                    </div>
                    <div className="player-nickname">
                        {this.state.nickname}
                    </div>
                    <div className='player-online-status'>
                        Online/Offline
                    </div>
                </div>
                <div className='player-details-overview'>
                    <div className='player-average-wn8' style={averageWn8Style}>
                        {this.state.averageWn8}
                    </div>
                    <div className='player-recent-wn8' style={recentWn8Style}>
                        {this.state.recentWn8}
                    </div>
                    <div className='player-global-rating'>
                        {this.state.globalRating}
                    </div>
                    <div className='player-average-win-rate' style={averageWinRateStyle}>
                        {this.state.averageWinRate}
                    </div>
                    <div className='player-recent-win-rate' style={recentWinRateStyle}>
                        {this.state.recentWinRate}
                    </div>
                </div>
                <div className='player-graphs'>

                </div>
                <div className='player-vehicles'>

                </div>
            </div>
        )
    }
}