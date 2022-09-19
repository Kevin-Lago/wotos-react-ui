import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import HomeIcon from '../../assets/icons/website/HomeIcon';
import PlayerIcon from '../../assets/icons/website/PlayerIcon';
import ClanIcon from '../../assets/icons/website/ClanIcon';
import TankIcon from '../../assets/icons/website/TankIcon';

import './contentMenu.css';

export default class ContentMenu extends Component {
    constructor(props) {
        super(props)

        this.state = {
            darkTheme: this.props.darkTheme,
            toggleDarkTheme: this.props.toggleDarkTheme,
            changeContent: this.props.changeContent,
            searchValue: ''
        }
    }

    handleOnClick() {
        console.log("maybe do this instead")
    }

    render() {
        let buttonClass = this.state.darkTheme === true ? 'content-menu-button dark-theme-button' : 'content-menu-button bright-theme-button'

        return (
            <nav id="content-menu" className={this.state.darkTheme === true ? 'dark-theme' : 'bright-theme'}>
                <div id="content-menu-buttons-wrapper" className={this.state.darkTheme === true ? 'dark-theme' : 'bright-theme'}>
                    <Link className={buttonClass} to="/">
                        <HomeIcon darkTheme={this.state.darkTheme}/>
                    </Link>
                    <Link className={buttonClass} to="player">
                        <PlayerIcon darkTheme={this.state.darkTheme}/>
                    </Link>
                    <Link className={buttonClass} to="clan">
                        <ClanIcon darkTheme={this.state.darkTheme}/>
                    </Link>
                    <Link className={buttonClass} to="tankopedia">
                        <TankIcon darkTheme={this.state.darkTheme}/>
                    </Link>
                </div>
            </nav>
        )
    }

};
