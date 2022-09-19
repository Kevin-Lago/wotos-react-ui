import React, { Component } from 'react';
import Fox from '../../assets/icons/website/Fox';
import './home.css'

export default class Home extends Component {
    constructor(props) {
        super(props)

        this.state = {
            darkTheme: this.props.darkTheme
        }
    }

    render() {
        return (
            <main id="home" className={this.state.darkTheme === true ? "dark-theme" : "bright-theme"}>
                <div 
                    // className='home-intro'
                    className={this.state.darkTheme === true ? "home-intro dark-theme" : "home-intro bright-theme"}
                >
                    <h1>Welcome!</h1>
                    <p>
                        This webapp was created to quickly determine the play style of a player!
                    </p>
                    <p>
                        To quickly sort through tanks and compare their stats
                    </p>
                    <p>
                        And to search for and compare clans
                    </p>
                    <Fox darkTheme={this.state.darkTheme}/>
                </div>
            </main>
        )
    }

}
