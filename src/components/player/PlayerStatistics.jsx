import React, { Component } from 'react';


export default class PlayerStatistics extends Component {
    constructor(props) {
        super(props)

        this.state = {
            playerStatistics: this.props.playerStatistics
        }
    }

    sortGraphsByCategory = (event) => {
        event.preventDefault();

        let category = event.target.id;
        let filteredList = {};

        if (category === '') {
            category = event.target.parentElement.id;
        }

        if (
            category === 'china' ||
            category === 'france' ||
            category === 'sweden' ||
            category === 'italy' ||
            category === 'usa' ||
            category === 'ussr' ||
            category === 'uk' ||
            category === 'japan' ||
            category === 'czech' ||
            category === 'germany' ||
            category === 'poland'
        ) {
            filteredList = this.state.userData.tanks.filter(tank => tank.nation === category);
        } else if (
            category === 'lightTank' ||
            category === 'mediumTank' ||
            category === 'heavyTank' ||
            category === 'SPG' ||
            category === 'AT-SPG'
        ) {
            filteredList = this.state.userData.tanks.filter(tank => tank.type === category);
        } else {
            filteredList = this.state.userData.tanks.filter(tank => tank.tier === Number(category));
        }

        let Nations = { battles: {}, stats: {} };
        let Types = { battles: {}, stats: {} };
        let Tiers = { battles: {}, stats: {} };

        filteredList.forEach(tank => {
            Nations.battles[tank.nation] = Nations.battles[tank.nation] === undefined ? Number([tank.battles]) : Number(Nations.battles[tank.nation]) + Number([tank.battles]);
            Nations.stats[tank.nation] = Nations.stats[tank.nation] === undefined ? [tank.wn8, 1] : [Nations.stats[tank.nation][0] + tank.wn8, Nations.stats[tank.nation][1] + 1];
            Types.battles[tank.type] = Types.battles[tank.type] === undefined ? Number([tank.battles]) : Number(Types.battles[tank.type]) + Number([tank.battles]);
            Types.stats[tank.type] = Types.stats[tank.type] === undefined ? [tank.wn8, 1] : [Types.stats[tank.type][0] + tank.wn8, Types.stats[tank.type][1] + 1];
            Tiers.battles[tank.tier] = Tiers.battles[tank.tier] === undefined ? Number([tank.battles]) : Number(Tiers.battles[tank.tier]) + Number([tank.battles]);
            Tiers.stats[tank.tier] = Tiers.stats[tank.tier] === undefined ? [tank.wn8, 1] : [Tiers.stats[tank.tier][0] + tank.wn8, Tiers.stats[tank.tier][1] + 1];
        })

        this.setState({
            Nations: Nations,
            Types: Types,
            Tiers: Tiers
        })
    }
    
    render() {
        return(
            <div className='player-statistics'>

            </div>
        )
    }
}