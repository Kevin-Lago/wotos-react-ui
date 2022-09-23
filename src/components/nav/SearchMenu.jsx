import React, { Component } from 'react';
import './searchMenu.css';


export default class SearchMenu extends Component {
    constructor(props) {
        super(props);

        this.state = {
            searchValue: '',
            darkTheme: this.props.darkTheme,
            handleSearch: this.props.handleSearch,
            handleSearchInputChange: this.props.handleSearchInputChange
        }
    }

    componentDidMount() {
        document.getElementById('search-menu-input').focus();
    }

    render() {
        let buttonClass = this.state.darkTheme === true ? 'search-menu-button dark-theme-button' : 'search-menu-button bright-theme-button';
        let inputClass = this.state.darkTheme === true ? 'dark-theme-input' : 'bright-theme-input';

        return (
            <nav id="search-menu" className={this.state.darkTheme === true ? 'dark-theme' : 'bright-theme'}>
                <div id="search-menu-content-wrapper" className={this.state.darkTheme === true ? 'dark-theme' : 'bright-theme'}>
                    <div id="app-title">WoTos</div>
                    <input id="search-menu-input" className={inputClass} type="text" value={this.state.searchValue} onChange={this.handleSearchInputChange} placeholder='search for...' />
                    <button id="player-search-button" className={buttonClass} onClick={() => this.state.handleSearch(this.state.searchValue, "player")}>
                        player
                    </button>
                    <button id="clan-search-button" className={buttonClass} onClick={() => this.state.handleSearch(this.state.searchValue, "clan")}>
                        clan
                    </button>
                </div>
            </nav>
        )
    }
}