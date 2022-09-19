import React from 'react';
import './tankpage.css'
import axios from 'axios';
import Loading from '../basics/loading'
// import arrow from './arrow.svg'

const Page = (props) => (
    <main id="page">
        <div className="tankNav">
            {props.nations.map(nation => <Nation key={nation} loadTanks={props.loadTanks} nation={nation} />)}
        </div>
        <div className="nationRow">
            {props.tanks !== [] ? <TankList selectTank={props.selectTank} tanks={props.tanks} /> : console.log(props.tanks)}
            <TankView tank={props.selectedTank} />
        </div>
    </main>
);

const Nation = (props) => (
    <div onClick={props.loadTanks} className="nationTab">
        {props.nation}
    </div>
);

const TankList = (props) => (
    <div className="tankList">
        <div className="tankListNav">
            <div className="tankListNavButton">
                <Arrow />
                <p className="tankNavOption">Premium</p>
            </div>
            <div className="tankListNavButton">
                <Arrow />
                <p className="tankNavOption">Name</p>
            </div>
            <div className="tankListNavButton">
                <Arrow />
                <p className="tankNavOption">Something</p>
            </div>
            <div className="tankListNavButton">
                <Arrow />
                <p className="tankNavOption">Tier</p>
            </div>
        </div>
        {props.loading === true ?

            <Loading />

            :

            <div className="listBox">
                {props.finishLoading}
                {props.tanks
                    .sort(function (a, b) { return a.tier - b.tier })
                    .map(tank => <Tank selectTank={props.selectTank} key={tank.name} tank={tank} />)
                }
            </div>

        }
    </div>
);

const Arrow = () => (
    <svg
        className="arrow"
        width="240pt"
        height="240pt"
        viewBox="0 0 240 240">
        <defs />
        <path id="shape0" transform="translate(7.72170533083677, 81.8957345971564)" /*fill="#000000"*/ fillRule="evenodd" /*stroke="#000000"*/ strokeWidth="14" strokeLinecap="round" strokeLinejoin="round" d="M0 1.45579L113.053 115.008L224.702 0C224.702 0 149.801 0.485265 0 1.45579Z" />
    </svg>
);

const TankView = (props) => (
    <div className="tankView">
        {props.tank.name}
        <div className="tankArmor">
            {}
        </div>
    </div>
);

const Tank = (props) => (
    <div onClick={function () { props.selectTank(props.tank) }} className="tank">
        {props.tank.is_premium === true ?
            <img className="premiumTankIcon" alt={props.tank.name} src={props.tank.images.big_icon} />
            :
            <img className="tankIcon" alt={props.tank.name} src={props.tank.images.big_icon} />
        }
        <p className="tankName">{props.tank.name}</p>
    </div>
);

class TankPage extends React.Component {

    state = {
        nations: [],
        tanks: [],
        selectedTank: {},
        loading: false
    }

    componentWillMount = () => {
        axios.get(
            `https://api.worldoftanks.com/wot/encyclopedia/vehicles/?application_id=da67d6dbc1f23b9e54688febe7d5da56&fields=description%2C+is_gift%2C+is_premium%2C+is_wheeled%2C+prices_xp%2C+price_credit%2C+short_name%2C+name%2C+nation%2C+type%2C+tier%2C+tank_id%2C+price_gold%2C+default_profile%2C+crew%2C+images.big_icon`
            )
            .then(wotTanksListResult => {
                let tankList = wotTanksListResult.data.data
                axios.post('/api/tanks', tankList).then(result => {console.log(result)})
            })
        axios.get(
            'https://api.worldoftanks.com/wot/encyclopedia/info/?application_id=da67d6dbc1f23b9e54688febe7d5da56&fields=vehicle_nations'
        ).then(data => {
            if (data.status !== 200) {
                alert('error fetching nation data')
            } else {
                this.setState({
                    nations: Object.values(data.data.data.vehicle_nations)
                })
            }
        })
    }

    loadTanks = (event) => {
        event.preventDefault();
        this.setState({
            loading: true
        })
        let nation = event.target.innerHTML
        this.findNationTanks(nation)
    }

    findNationTanks = (nation) => {
        if (nation === 'U.S.A.') {
            nation = 'usa'
        } else if (nation === 'U.S.S.R.') {
            nation = 'ussr'
        } else if (nation === 'U.K.') {
            nation = 'uk'
        } else if (nation === 'Czechoslovakia') {
            nation = 'czech'
        }
        axios.get(
            `https://api.worldoftanks.com/wot/encyclopedia/vehicles/?application_id=da67d6dbc1f23b9e54688febe7d5da56&nation=${nation}`
        ).then(data => {
            if (data.status !== 200) {
                alert('error fetching tanks list by nation')
            } else {
                this.setState({
                    tanks: Object.values(data.data.data),
                    //     .filter(tank => tank.is_premium === false),
                    // premiumTanks: Object.values(data.data.data)
                    //     .filter(tank => tank.is_premium === true)
                })
            }
        })
    }

    finishLoading = () => {
        this.setState({
            loading: false
        })
    }

    selectTank = (tank) => {
        axios.get(
            `https://api.worldoftanks.com/wot/encyclopedia/vehicleprofile/?application_id=da67d6dbc1f23b9e54688febe7d5da56&tank_id=${tank.tank_id}`
        ).then(data => { console.log(data) })
        this.setState({
            selectedTank: tank
        })
    }

    render() {
        return (
            <Page
                findNationTanks={this.findNationTanks}
                nations={this.state.nations}
                premiumTanks={this.state.premiumTanks}
                tanks={this.state.tanks}
                selectedTank={this.state.selectedTank}
                selectTank={this.selectTank}
                loading={this.state.loading}
                loadTanks={this.loadTanks}
                finishLoading={this.finishLoading}
            />
        )
    }

}

export default TankPage