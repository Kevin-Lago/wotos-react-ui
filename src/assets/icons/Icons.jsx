import React, { Component } from 'react';
import ATSPGIcon from './tanktypes/ATSPGIcon';
import SPGIcon from './tanktypes/SPGIcon';
import LightTankIcon from './tanktypes/LightTankIcon';
import MediumTankIcon from './tanktypes/MediumTankIcon';
import HeavyTankIcon from './tanktypes/HeavyTankIcon';
import ROne from './tanktiers/ROne';
import RTwo from './tanktiers/RTwo';
import RThree from './tanktiers/RThree';
import RFour from './tanktiers/RFour';
import RFive from './tanktiers/RFive';
import RSix from './tanktiers/RSix';
import RSeven from './tanktiers/RSeven';
import REight from './tanktiers/REight';
import RNine from './tanktiers/RNine';
import RTen from './tanktiers/RTen';
import USA from './flags/USA';
import Poland from './flags/Poland';
import France from './flags/France';
import Japan from './flags/Japan';
import Sweden from './flags/Sweden';
import Czech from './flags/Czech';
import Italy from './flags/Italy';
import UK from './flags/UK';
import USSR from './flags/USSR';
import China from './flags/China';
import Germany from './flags/Germany';
import USAMoE from './MoE/USAMoE';
import PolandMoE from './MoE/PolandMoE';
import FranceMoE from './MoE/FranceMoE';
import JapanMoE from './MoE/JapanMoE';
import SwedenMoE from './MoE/SwedenMoE';
import CzechMoE from './MoE/CzechMoE';
import ItalyMoE from './MoE/ItalyMoE';
import UKMoE from './MoE/UKMoE';
import USSRMoE from './MoE/USSRMoE';
import ChinaMoE from './MoE/ChinaMoE';
import GermanyMoE from './MoE/GermanyMoE';
import MenuIcon from './website/MenuIcon';
import MoonIcon from './website/MoonIcon';
import DarkThemeIcon from './website/DarkThemeIcon';
import Fox from './website/Fox';

export default class Icons extends Component {
    // constructor(props) {
    //     super(props)

    //     this.state = {
    //         "1": 
    //     }
    // }

    render() {
        let icon = this.props.icon;
        let x = this.props.x !== undefined ? this.props.x : 1;
        let y = this.props.y !== undefined ? this.props.y : 1;
        if (icon === '1' || icon === 1) {
            return <ROne icon={icon} x={x - 7} y={y - 12} />;
        } else if (icon === '2' || icon === 2) {
            return <RTwo icon={icon} x={x - 12} y={y - 12} />
        } else if (icon === '3' || icon === 3) {
            return <RThree icon={icon} x={x - 17} y={y - 12} />
        } else if (icon === '4' || icon === 4) {
            return <RFour icon={icon} x={x - 18} y={y - 12} />
        } else if (icon === '5' || icon === 5) {
            return <RFive icon={icon} x={x - 14} y={y - 12} />
        } else if (icon === '6' || icon === 6) {
            return <RSix icon={icon} x={x - 18} y={y - 12}/>
        } else if (icon === '7' || icon === 7) {
            return <RSeven icon={icon} x={x - 24} y={y - 12} />
        } else if (icon === '8' || icon === 8) {
            return <REight icon={icon} x={x - 28} y={y - 12} />
        } else if (icon === '9' || icon === 9) {
            return <RNine icon={icon} x={x - 19} y={y - 12} />
        } else if (icon === '10' || icon === 10) {
            return <RTen icon={icon} x={x - 14} y={y - 12} />
        } else if (icon === 'SPG') {
            return <SPGIcon icon={icon} x={x - 10} y={y - 10} />
        } else if (icon === 'AT-SPG') {
            return <ATSPGIcon icon={icon} x={x - 10} y={y - 10} />
        } else if (icon === 'lightTank') {
            return <LightTankIcon icon={icon} x={x - 10} y={y - 10} />
        } else if (icon === 'mediumTank') {
            return <MediumTankIcon icon={icon} x={x - 10} y={y - 10} />
        } else if (icon === 'heavyTank') {
            return <HeavyTankIcon icon={icon} x={x - 10} y={y - 10} />
        } else if (icon === 'usa') {
            return <USA icon={icon} x={x - 20} y={y - 12} />
        } else if (icon === 'poland') {
            return <Poland icon={icon} x={x - 20} y={y - 12} />
        } else if (icon === 'france') {
            return <France icon={icon} x={x - 20} y={y - 12} />
        } else if (icon === 'japan') {
            return <Japan icon={icon} x={x - 20} y={y - 12} />
        } else if (icon === 'sweden') {
            return <Sweden icon={icon} x={x - 20} y={y - 12} />
        } else if (icon === 'czech') {
            return <Czech icon={icon} x={x - 20} y={y - 12} />
        } else if (icon === 'italy') {
            return <Italy icon={icon} x={x - 20} y={y - 12} />
        } else if (icon === 'uk') {
            return <UK icon={icon} x={x - 20} y={y - 12} />
        } else if (icon === 'ussr') {
            return <USSR icon={icon} x={x - 20} y={y - 12} />
        } else if (icon === 'china') {
            return <China icon={icon} x={x - 20} y={y - 12} />
        } else if (icon === 'germany') {
            return <Germany icon={icon} x={x - 20} y={y - 12} />
        } else if (icon === 'usaMoE') {
            return <USAMoE MoE={this.props.MoE} />
        } else if (icon === 'polandMoE') {
            return <PolandMoE MoE={this.props.MoE} />
        } else if (icon === 'franceMoE') {
            return <FranceMoE MoE={this.props.MoE} />
        } else if (icon === 'japanMoE') {
            return <JapanMoE MoE={this.props.MoE} />
        } else if (icon === 'swedenMoE') {
            return <SwedenMoE MoE={this.props.MoE} />
        } else if (icon === 'czechMoE') {
            return <CzechMoE MoE={this.props.MoE} />
        } else if (icon === 'italyMoE') {
            return <ItalyMoE MoE={this.props.MoE} />
        } else if (icon === 'ukMoE') {
            return <UKMoE MoE={this.props.MoE} />
        } else if (icon === 'ussrMoE') {
            return <USSRMoE MoE={this.props.MoE} />
        } else if (icon === 'chinaMoE') {
            return <ChinaMoE MoE={this.props.MoE} />
        } else if (icon === 'germanyMoE') {
            return <GermanyMoE MoE={this.props.MoE} />
        } else if (icon === 'menu-icon') {
            return <MenuIcon icon={icon} />
        } else if (icon === 'dark-theme-icon') {
            return <DarkThemeIcon icon={icon} />
        } else if (icon === 'fox') {
            return <Fox icon={icon} />
        } else if (icon === 'moon-icon') {
            return <MoonIcon icon={icon} />
        } else {
            return icon
        }
    }

};
