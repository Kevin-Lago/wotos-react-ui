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
            player: {
                playerDetails: {
                    nickname: "test player",
                    clanTag: "aclan",
                    averageWn8: 1500,
                    recentWn8: 2000
                },
                playerStatistics: { "1004866884": { "all": [{ "playerStatisticsSnapshotId": 187, "accountId": 1004866884, "gameMode": "all", "createDate": "2022-09-08T19:53:47.391+0000", "totalBattles": 16812, "survivedBattles": 4854, "killDeathRatio": 1.4106, "hitMissRatio": 0.687508, "winLossRatio": 0.53551, "totalAverageWn8": 1592.67, "averageExperience": 631.925, "averageDamage": 1241.53, "averageKills": 1.00333, "averageDamageReceived": 970.054, "averageShots": 9.47538, "averageStunAssistedDamage": 9.37372, "averageCapturePoints": 0.935998, "averageDroppedCapturePoints": 0.551213, "averageSpotting": 1.32602 }], "clan": [{ "playerStatisticsSnapshotId": 188, "accountId": 1004866884, "gameMode": "clan", "createDate": "2022-09-08T19:53:48.776+0000", "totalBattles": 143, "survivedBattles": 63, "killDeathRatio": 1.3375, "hitMissRatio": 0.786448, "winLossRatio": 0.601399, "totalAverageWn8": 1513.89, "averageExperience": 733.196, "averageDamage": 1761.42, "averageKills": 0.748252, "averageDamageReceived": 1644.17, "averageShots": 6.81119, "averageStunAssistedDamage": 0.0, "averageCapturePoints": 0.713287, "averageDroppedCapturePoints": 0.601399, "averageSpotting": 1.18182 }, { "playerStatisticsSnapshotId": 189, "accountId": 1004866884, "gameMode": "clan", "createDate": "2022-09-08T19:53:49.111+0000", "totalBattles": 143, "survivedBattles": 63, "killDeathRatio": 1.3375, "hitMissRatio": 0.786448, "winLossRatio": 0.601399, "totalAverageWn8": 1513.89, "averageExperience": 733.196, "averageDamage": 1761.42, "averageKills": 0.748252, "averageDamageReceived": 1644.17, "averageShots": 6.81119, "averageStunAssistedDamage": 0.0, "averageCapturePoints": 0.713287, "averageDroppedCapturePoints": 0.601399, "averageSpotting": 1.18182 }], "stronghold_defense": [], "company": [{ "playerStatisticsSnapshotId": 190, "accountId": 1004866884, "gameMode": "company", "createDate": "2022-09-08T19:53:50.350+0000", "totalBattles": 15, "survivedBattles": 4, "killDeathRatio": 0.636364, "hitMissRatio": 0.777778, "winLossRatio": 0.6, "totalAverageWn8": 0.0, "averageExperience": 491.533, "averageDamage": 1005.33, "averageKills": 0.466667, "averageDamageReceived": 834.8, "averageShots": 5.4, "averageStunAssistedDamage": 0.0, "averageCapturePoints": 0.0, "averageDroppedCapturePoints": 0.0, "averageSpotting": 0.6 }, { "playerStatisticsSnapshotId": 191, "accountId": 1004866884, "gameMode": "company", "createDate": "2022-09-08T19:53:50.767+0000", "totalBattles": 15, "survivedBattles": 4, "killDeathRatio": 0.636364, "hitMissRatio": 0.777778, "winLossRatio": 0.6, "totalAverageWn8": 0.0, "averageExperience": 491.533, "averageDamage": 1005.33, "averageKills": 0.466667, "averageDamageReceived": 834.8, "averageShots": 5.4, "averageStunAssistedDamage": 0.0, "averageCapturePoints": 0.0, "averageDroppedCapturePoints": 0.0, "averageSpotting": 0.6 }], "team": [{ "playerStatisticsSnapshotId": 192, "accountId": 1004866884, "gameMode": "team", "createDate": "2022-09-08T19:53:51.167+0000", "totalBattles": 12, "survivedBattles": 7, "killDeathRatio": 2.2, "hitMissRatio": 0.755814, "winLossRatio": 0.666667, "totalAverageWn8": 0.0, "averageExperience": 745.75, "averageDamage": 1042.83, "averageKills": 0.916667, "averageDamageReceived": 935.25, "averageShots": 7.16667, "averageStunAssistedDamage": 0.0, "averageCapturePoints": 2.16667, "averageDroppedCapturePoints": 6.25, "averageSpotting": 1.41667 }, { "playerStatisticsSnapshotId": 193, "accountId": 1004866884, "gameMode": "team", "createDate": "2022-09-08T19:53:51.595+0000", "totalBattles": 12, "survivedBattles": 7, "killDeathRatio": 2.2, "hitMissRatio": 0.755814, "winLossRatio": 0.666667, "totalAverageWn8": 0.0, "averageExperience": 745.75, "averageDamage": 1042.83, "averageKills": 0.916667, "averageDamageReceived": 935.25, "averageShots": 7.16667, "averageStunAssistedDamage": 0.0, "averageCapturePoints": 2.16667, "averageDroppedCapturePoints": 6.25, "averageSpotting": 1.41667 }], "stronghold_skirmish": [{ "playerStatisticsSnapshotId": 194, "accountId": 1004866884, "gameMode": "stronghold_skirmish", "createDate": "2022-09-08T19:53:51.975+0000", "totalBattles": 175, "survivedBattles": 90, "killDeathRatio": 1.70588, "hitMissRatio": 0.703704, "winLossRatio": 0.668571, "totalAverageWn8": 1437.12, "averageExperience": 524.24, "averageDamage": 893.234, "averageKills": 0.828571, "averageDamageReceived": 658.383, "averageShots": 7.56, "averageStunAssistedDamage": 0.0, "averageCapturePoints": 2.46857, "averageDroppedCapturePoints": 1.25143, "averageSpotting": 0.977143 }, { "playerStatisticsSnapshotId": 195, "accountId": 1004866884, "gameMode": "stronghold_skirmish", "createDate": "2022-09-08T19:53:52.247+0000", "totalBattles": 175, "survivedBattles": 90, "killDeathRatio": 1.70588, "hitMissRatio": 0.703704, "winLossRatio": 0.668571, "totalAverageWn8": 1437.12, "averageExperience": 524.24, "averageDamage": 893.234, "averageKills": 0.828571, "averageDamageReceived": 658.383, "averageShots": 7.56, "averageStunAssistedDamage": 0.0, "averageCapturePoints": 2.46857, "averageDroppedCapturePoints": 1.25143, "averageSpotting": 0.977143 }], "regular_team": [] } },
                playerVehicleStatistics: {
                    "1004866884":
                    {
                        "7681":
                        {
                            "all":
                                [],
                            "clan":
                                [],
                            "stronghold_defense":
                                [],
                            "company":
                                [],
                            "team":
                                [],
                            "stronghold_skirmish":
                                [],
                            "regular_team":
                                []
                        },
                        "7169":
                        {
                            "all":
                                [
                                    {
                                        "vehicleStatisticsSnapshotId": 34,
                                        "accountId": 1004866884,
                                        "vehicleId": 7169,
                                        "gameMode": "all",
                                        "createDate": "2022-09-07T16:35:17.073+0000",
                                        "totalBattles": 25,
                                        "survivedBattles": 2,
                                        "killDeathRatio": 0.782609,
                                        "hitMissRatio": 0.811538,
                                        "winLossRatio": 0.4,
                                        "averageWn8": 1953.65,
                                        "averageExperience": 681.2,
                                        "averageDamage": 2479.56,
                                        "averageKills": 0.72,
                                        "averageDamageReceived": 2317.4,
                                        "averageShots": 10.4,
                                        "averageStunAssistedDamage": 0.0,
                                        "averageCapturePoints": 0.0,
                                        "averageDroppedCapturePoints": 0.0,
                                        "averageSpotting": 1.56
                                    }
                                ],
                            "clan":
                                [],
                            "stronghold_defense":
                                [],
                            "company":
                                [],
                            "team":
                                [],
                            "stronghold_skirmish":
                                [],
                            "regular_team":
                                []
                        },
                        "5633":
                        {
                            "all":
                                [
                                    {
                                        "vehicleStatisticsSnapshotId": 150,
                                        "accountId": 1004866884,
                                        "vehicleId": 5633,
                                        "gameMode": "all",
                                        "createDate": "2022-09-07T16:35:18.855+0000",
                                        "totalBattles": 14,
                                        "survivedBattles": 6,
                                        "killDeathRatio": 1.625,
                                        "hitMissRatio": 0.197183,
                                        "winLossRatio": 0.571429,
                                        "averageWn8": 1108.03,
                                        "averageExperience": 640.143,
                                        "averageDamage": 705.071,
                                        "averageKills": 0.928571,
                                        "averageDamageReceived": 180.714,
                                        "averageShots": 10.1429,
                                        "averageStunAssistedDamage": 361.357,
                                        "averageCapturePoints": 0.0,
                                        "averageDroppedCapturePoints": 1.92857,
                                        "averageSpotting": 0.0714286
                                    }
                                ],
                            "clan":
                                [],
                            "stronghold_defense":
                                [],
                            "company":
                                [],
                            "team":
                                [],
                            "stronghold_skirmish":
                                [],
                            "regular_team":
                                []
                        },
                        "6657":
                        {
                            "all":
                                [
                                    {
                                        "vehicleStatisticsSnapshotId": 161,
                                        "accountId": 1004866884,
                                        "vehicleId": 6657,
                                        "gameMode": "all",
                                        "createDate": "2022-09-07T16:35:19.026+0000",
                                        "totalBattles": 99,
                                        "survivedBattles": 42,
                                        "killDeathRatio": 2.70175,
                                        "hitMissRatio": 0.741617,
                                        "winLossRatio": 0.616162,
                                        "averageWn8": 3087.76,
                                        "averageExperience": 796.091,
                                        "averageDamage": 1349.62,
                                        "averageKills": 1.55556,
                                        "averageDamageReceived": 868.586,
                                        "averageShots": 15.3636,
                                        "averageStunAssistedDamage": 0.0,
                                        "averageCapturePoints": 1.87879,
                                        "averageDroppedCapturePoints": 1.27273,
                                        "averageSpotting": 1.64646
                                    }
                                ],
                            "clan":
                                [],
                            "stronghold_defense":
                                [],
                            "company":
                                [],
                            "team":
                                [],
                            "stronghold_skirmish":
                                [],
                            "regular_team":
                                []
                        },
                        "19457":
                        {
                            "all":
                                [
                                    {
                                        "vehicleStatisticsSnapshotId": 64,
                                        "accountId": 1004866884,
                                        "vehicleId": 19457,
                                        "gameMode": "all",
                                        "createDate": "2022-09-07T16:35:17.625+0000",
                                        "totalBattles": 17,
                                        "survivedBattles": 3,
                                        "killDeathRatio": 1.71429,
                                        "hitMissRatio": 0.701571,
                                        "winLossRatio": 0.352941,
                                        "averageWn8": 2454.33,
                                        "averageExperience": 726.235,
                                        "averageDamage": 1036.65,
                                        "averageKills": 1.41176,
                                        "averageDamageReceived": 838.647,
                                        "averageShots": 11.2353,
                                        "averageStunAssistedDamage": 0.0,
                                        "averageCapturePoints": 0.0,
                                        "averageDroppedCapturePoints": 0.0,
                                        "averageSpotting": 2.23529
                                    }
                                ],
                            "clan":
                                [],
                            "stronghold_defense":
                                [],
                            "company":
                                [],
                            "team":
                                [],
                            "stronghold_skirmish":
                                [],
                            "regular_team":
                                []
                        },
                        "8193":
                        {
                            "all":
                                [
                                    {
                                        "vehicleStatisticsSnapshotId": 105,
                                        "accountId": 1004866884,
                                        "vehicleId": 8193,
                                        "gameMode": "all",
                                        "createDate": "2022-09-07T16:35:18.270+0000",
                                        "totalBattles": 294,
                                        "survivedBattles": 110,
                                        "killDeathRatio": 1.8587,
                                        "hitMissRatio": 0.783535,
                                        "winLossRatio": 0.591837,
                                        "averageWn8": 2235.28,
                                        "averageExperience": 760.408,
                                        "averageDamage": 2353.74,
                                        "averageKills": 1.16327,
                                        "averageDamageReceived": 1244.2,
                                        "averageShots": 5.90816,
                                        "averageStunAssistedDamage": 0.0,
                                        "averageCapturePoints": 1.35374,
                                        "averageDroppedCapturePoints": 1.27891,
                                        "averageSpotting": 0.734694
                                    }
                                ],
                            "clan":
                                [],
                            "stronghold_defense":
                                [],
                            "company":
                                [],
                            "team":
                                [],
                            "stronghold_skirmish":
                                [],
                            "regular_team":
                                []
                        },
                        "9217":
                        {
                            "all":
                                [
                                    {
                                        "vehicleStatisticsSnapshotId": 144,
                                        "accountId": 1004866884,
                                        "vehicleId": 9217,
                                        "gameMode": "all",
                                        "createDate": "2022-09-07T16:35:18.785+0000",
                                        "totalBattles": 372,
                                        "survivedBattles": 135,
                                        "killDeathRatio": 2.07173,
                                        "hitMissRatio": 0.797008,
                                        "winLossRatio": 0.556452,
                                        "averageWn8": 2349.87,
                                        "averageExperience": 786.035,
                                        "averageDamage": 1698.44,
                                        "averageKills": 1.31989,
                                        "averageDamageReceived": 1271.91,
                                        "averageShots": 9.16398,
                                        "averageStunAssistedDamage": 0.0,
                                        "averageCapturePoints": 1.85484,
                                        "averageDroppedCapturePoints": 0.438172,
                                        "averageSpotting": 1.41935
                                    }
                                ],
                            "clan":
                                [],
                            "stronghold_defense":
                                [],
                            "company":
                                [],
                            "team":
                                [],
                            "stronghold_skirmish":
                                [
                                    {
                                        "vehicleStatisticsSnapshotId": 145,
                                        "accountId": 1004866884,
                                        "vehicleId": 9217,
                                        "gameMode": "stronghold_skirmish",
                                        "createDate": "2022-09-07T16:35:18.795+0000",
                                        "totalBattles": 14,
                                        "survivedBattles": 8,
                                        "killDeathRatio": 2.16667,
                                        "hitMissRatio": 0.75,
                                        "winLossRatio": 0.642857,
                                        "averageWn8": 1465.4,
                                        "averageExperience": 533.071,
                                        "averageDamage": 1271.57,
                                        "averageKills": 0.928571,
                                        "averageDamageReceived": 1040.0,
                                        "averageShots": 7.71429,
                                        "averageStunAssistedDamage": 0.0,
                                        "averageCapturePoints": 5.78571,
                                        "averageDroppedCapturePoints": 0.571429,
                                        "averageSpotting": 0.357143
                                    }
                                ],
                            "regular_team":
                                []
                        },
                        "5121":
                        {
                            "all":
                                [],
                            "clan":
                                [],
                            "stronghold_defense":
                                [],
                            "company":
                                [],
                            "team":
                                [],
                            "stronghold_skirmish":
                                [],
                            "regular_team":
                                []
                        },
                        "3585":
                        {
                            "all":
                                [
                                    {
                                        "vehicleStatisticsSnapshotId": 70,
                                        "accountId": 1004866884,
                                        "vehicleId": 3585,
                                        "gameMode": "all",
                                        "createDate": "2022-09-07T16:35:17.715+0000",
                                        "totalBattles": 161,
                                        "survivedBattles": 46,
                                        "killDeathRatio": 1.57391,
                                        "hitMissRatio": 0.724382,
                                        "winLossRatio": 0.583851,
                                        "averageWn8": 2032.77,
                                        "averageExperience": 499.919,
                                        "averageDamage": 986.391,
                                        "averageKills": 1.12422,
                                        "averageDamageReceived": 476.516,
                                        "averageShots": 7.03106,
                                        "averageStunAssistedDamage": 0.0,
                                        "averageCapturePoints": 2.09317,
                                        "averageDroppedCapturePoints": 0.310559,
                                        "averageSpotting": 0.944099
                                    }
                                ],
                            "clan":
                                [],
                            "stronghold_defense":
                                [],
                            "company":
                                [],
                            "team":
                                [],
                            "stronghold_skirmish":
                                [],
                            "regular_team":
                                []
                        },
                        "4609":
                        {
                            "all":
                                [
                                    {
                                        "vehicleStatisticsSnapshotId": 118,
                                        "accountId": 1004866884,
                                        "vehicleId": 4609,
                                        "gameMode": "all",
                                        "createDate": "2022-09-07T16:35:18.449+0000",
                                        "totalBattles": 18,
                                        "survivedBattles": 2,
                                        "killDeathRatio": 0.6875,
                                        "hitMissRatio": 0.554455,
                                        "winLossRatio": 0.388889,
                                        "averageWn8": 530.371,
                                        "averageExperience": 175.0,
                                        "averageDamage": 141.056,
                                        "averageKills": 0.611111,
                                        "averageDamageReceived": 165.778,
                                        "averageShots": 16.8333,
                                        "averageStunAssistedDamage": 0.0,
                                        "averageCapturePoints": 1.5,
                                        "averageDroppedCapturePoints": 0.0,
                                        "averageSpotting": 1.11111
                                    }
                                ],
                            "clan":
                                [],
                            "stronghold_defense":
                                [],
                            "company":
                                [],
                            "team":
                                [],
                            "stronghold_skirmish":
                                [],
                            "regular_team":
                                []
                        },
                        "20481":
                        {
                            "all":
                                [],
                            "clan":
                                [],
                            "stronghold_defense":
                                [],
                            "company":
                                [],
                            "team":
                                [],
                            "stronghold_skirmish":
                                [],
                            "regular_team":
                                []
                        },
                        "16385":
                        {
                            "all":
                                [],
                            "clan":
                                [],
                            "stronghold_defense":
                                [],
                            "company":
                                [],
                            "team":
                                [],
                            "stronghold_skirmish":
                                [],
                            "regular_team":
                                []
                        },
                        "16897":
                        {
                            "all":
                                [
                                    {
                                        "vehicleStatisticsSnapshotId": 71,
                                        "accountId": 1004866884,
                                        "vehicleId": 16897,
                                        "gameMode": "all",
                                        "createDate": "2022-09-07T16:35:17.729+0000",
                                        "totalBattles": 43,
                                        "survivedBattles": 11,
                                        "killDeathRatio": 1.65625,
                                        "hitMissRatio": 0.741784,
                                        "winLossRatio": 0.395349,
                                        "averageWn8": 1873.97,
                                        "averageExperience": 681.767,
                                        "averageDamage": 2107.65,
                                        "averageKills": 1.23256,
                                        "averageDamageReceived": 1711.56,
                                        "averageShots": 14.8605,
                                        "averageStunAssistedDamage": 0.0,
                                        "averageCapturePoints": 0.0,
                                        "averageDroppedCapturePoints": 0.0,
                                        "averageSpotting": 1.62791
                                    }
                                ],
                            "clan":
                                [],
                            "stronghold_defense":
                                [],
                            "company":
                                [],
                            "team":
                                [],
                            "stronghold_skirmish":
                                [],
                            "regular_team":
                                []
                        },
                        "22017":
                        {
                            "all":
                                [],
                            "clan":
                                [],
                            "stronghold_defense":
                                [],
                            "company":
                                [],
                            "team":
                                [],
                            "stronghold_skirmish":
                                [],
                            "regular_team":
                                []
                        },
                        "21505":
                        {
                            "all":
                                [
                                    {
                                        "vehicleStatisticsSnapshotId": 59,
                                        "accountId": 1004866884,
                                        "vehicleId": 21505,
                                        "gameMode": "all",
                                        "createDate": "2022-09-07T16:35:17.530+0000",
                                        "totalBattles": 62,
                                        "survivedBattles": 17,
                                        "killDeathRatio": 1.31111,
                                        "hitMissRatio": 0.709722,
                                        "winLossRatio": 0.5,
                                        "averageWn8": 2325.29,
                                        "averageExperience": 961.952,
                                        "averageDamage": 2359.19,
                                        "averageKills": 0.951613,
                                        "averageDamageReceived": 1611.05,
                                        "averageShots": 11.6129,
                                        "averageStunAssistedDamage": 0.0,
                                        "averageCapturePoints": 0.0,
                                        "averageDroppedCapturePoints": 1.32258,
                                        "averageSpotting": 1.58065
                                    }
                                ],
                            "clan":
                                [],
                            "stronghold_defense":
                                [],
                            "company":
                                [],
                            "team":
                                [],
                            "stronghold_skirmish":
                                [],
                            "regular_team":
                                []
                        },
                        "60929":
                        {
                            "all":
                                [],
                            "clan":
                                [],
                            "stronghold_defense":
                                [],
                            "company":
                                [],
                            "team":
                                [],
                            "stronghold_skirmish":
                                [],
                            "regular_team":
                                []
                        },
                        "59905":
                        {
                            "all":
                                [
                                    {
                                        "vehicleStatisticsSnapshotId": 91,
                                        "accountId": 1004866884,
                                        "vehicleId": 59905,
                                        "gameMode": "all",
                                        "createDate": "2022-09-07T16:35:18.072+0000",
                                        "totalBattles": 48,
                                        "survivedBattles": 16,
                                        "killDeathRatio": 1.53125,
                                        "hitMissRatio": 0.716606,
                                        "winLossRatio": 0.604167,
                                        "averageWn8": 2276.93,
                                        "averageExperience": 961.604,
                                        "averageDamage": 1395.75,
                                        "averageKills": 1.02083,
                                        "averageDamageReceived": 1161.92,
                                        "averageShots": 11.5417,
                                        "averageStunAssistedDamage": 0.0,
                                        "averageCapturePoints": 1.16667,
                                        "averageDroppedCapturePoints": 1.625,
                                        "averageSpotting": 1.60417
                                    }
                                ],
                            "clan":
                                [],
                            "stronghold_defense":
                                [],
                            "company":
                                [],
                            "team":
                                [],
                            "stronghold_skirmish":
                                [],
                            "regular_team":
                                []
                        },
                        "48641":
                        {
                            "all":
                                [
                                    {
                                        "vehicleStatisticsSnapshotId": 102,
                                        "accountId": 1004866884,
                                        "vehicleId": 48641,
                                        "gameMode": "all",
                                        "createDate": "2022-09-07T16:35:18.230+0000",
                                        "totalBattles": 38,
                                        "survivedBattles": 9,
                                        "killDeathRatio": 1.24138,
                                        "hitMissRatio": 0.82392,
                                        "winLossRatio": 0.578947,
                                        "averageWn8": 2258.31,
                                        "averageExperience": 916.105,
                                        "averageDamage": 1878.45,
                                        "averageKills": 0.947368,
                                        "averageDamageReceived": 1306.66,
                                        "averageShots": 7.92105,
                                        "averageStunAssistedDamage": 0.0,
                                        "averageCapturePoints": 0.0,
                                        "averageDroppedCapturePoints": 0.157895,
                                        "averageSpotting": 1.28947
                                    }
                                ],
                            "clan":
                                [],
                            "stronghold_defense":
                                [],
                            "company":
                                [],
                            "team":
                                [],
                            "stronghold_skirmish":
                                [],
                            "regular_team":
                                []
                        },
                        "45057":
                        {
                            "all":
                                [
                                    {
                                        "vehicleStatisticsSnapshotId": 179,
                                        "accountId": 1004866884,
                                        "vehicleId": 45057,
                                        "gameMode": "all",
                                        "createDate": "2022-09-07T16:35:19.300+0000",
                                        "totalBattles": 304,
                                        "survivedBattles": 123,
                                        "killDeathRatio": 2.61878,
                                        "hitMissRatio": 0.693855,
                                        "winLossRatio": 0.585526,
                                        "averageWn8": 2651.54,
                                        "averageExperience": 879.836,
                                        "averageDamage": 2064.14,
                                        "averageKills": 1.55921,
                                        "averageDamageReceived": 872.743,
                                        "averageShots": 8.83224,
                                        "averageStunAssistedDamage": 0.0,
                                        "averageCapturePoints": 0.180921,
                                        "averageDroppedCapturePoints": 0.779605,
                                        "averageSpotting": 0.516447
                                    }
                                ],
                            "clan":
                                [],
                            "stronghold_defense":
                                [],
                            "company":
                                [],
                            "team":
                                [],
                            "stronghold_skirmish":
                                [],
                            "regular_team":
                                []
                        },
                        "2561":
                        {
                            "all":
                                [
                                    {
                                        "vehicleStatisticsSnapshotId": 109,
                                        "accountId": 1004866884,
                                        "vehicleId": 2561,
                                        "gameMode": "all",
                                        "createDate": "2022-09-07T16:35:18.320+0000",
                                        "totalBattles": 136,
                                        "survivedBattles": 36,
                                        "killDeathRatio": 1.73,
                                        "hitMissRatio": 0.759358,
                                        "winLossRatio": 0.588235,
                                        "averageWn8": 2461.82,
                                        "averageExperience": 778.331,
                                        "averageDamage": 989.831,
                                        "averageKills": 1.27206,
                                        "averageDamageReceived": 621.434,
                                        "averageShots": 11.0,
                                        "averageStunAssistedDamage": 0.0,
                                        "averageCapturePoints": 0.477941,
                                        "averageDroppedCapturePoints": 0.617647,
                                        "averageSpotting": 1.58824
                                    }
                                ],
                            "clan":
                                [],
                            "stronghold_defense":
                                [],
                            "company":
                                [],
                            "team":
                                [],
                            "stronghold_skirmish":
                                [],
                            "regular_team":
                                []
                        },
                        "3073":
                        {
                            "all":
                                [],
                            "clan":
                                [],
                            "stronghold_defense":
                                [],
                            "company":
                                [],
                            "team":
                                [],
                            "stronghold_skirmish":
                                [],
                            "regular_team":
                                []
                        },
                        "2049":
                        {
                            "all":
                                [],
                            "clan":
                                [],
                            "stronghold_defense":
                                [],
                            "company":
                                [],
                            "team":
                                [],
                            "stronghold_skirmish":
                                [],
                            "regular_team":
                                []
                        },
                        "1537":
                        {
                            "all":
                                [
                                    {
                                        "vehicleStatisticsSnapshotId": 87,
                                        "accountId": 1004866884,
                                        "vehicleId": 1537,
                                        "gameMode": "all",
                                        "createDate": "2022-09-07T16:35:18.006+0000",
                                        "totalBattles": 17,
                                        "survivedBattles": 3,
                                        "killDeathRatio": 0.857143,
                                        "hitMissRatio": 0.629214,
                                        "winLossRatio": 0.470588,
                                        "averageWn8": 1067.03,
                                        "averageExperience": 299.882,
                                        "averageDamage": 346.941,
                                        "averageKills": 0.705882,
                                        "averageDamageReceived": 315.471,
                                        "averageShots": 10.4706,
                                        "averageStunAssistedDamage": 0.0,
                                        "averageCapturePoints": 3.64706,
                                        "averageDroppedCapturePoints": 0.0588235,
                                        "averageSpotting": 1.58824
                                    }
                                ],
                            "clan":
                                [],
                            "stronghold_defense":
                                [],
                            "company":
                                [],
                            "team":
                                [],
                            "stronghold_skirmish":
                                [],
                            "regular_team":
                                []
                        },
                        "513":
                        {
                            "all":
                                [
                                    {
                                        "vehicleStatisticsSnapshotId": 90,
                                        "accountId": 1004866884,
                                        "vehicleId": 513,
                                        "gameMode": "all",
                                        "createDate": "2022-09-07T16:35:18.054+0000",
                                        "totalBattles": 181,
                                        "survivedBattles": 62,
                                        "killDeathRatio": 1.91597,
                                        "hitMissRatio": 0.756863,
                                        "winLossRatio": 0.530387,
                                        "averageWn8": 2253.0,
                                        "averageExperience": 629.359,
                                        "averageDamage": 1308.9,
                                        "averageKills": 1.25967,
                                        "averageDamageReceived": 1041.41,
                                        "averageShots": 7.0442,
                                        "averageStunAssistedDamage": 0.0,
                                        "averageCapturePoints": 0.458564,
                                        "averageDroppedCapturePoints": 1.22652,
                                        "averageSpotting": 1.1768
                                    }
                                ],
                            "clan":
                                [],
                            "stronghold_defense":
                                [],
                            "company":
                                [],
                            "team":
                                [],
                            "stronghold_skirmish":
                                [],
                            "regular_team":
                                []
                        },
                        "1":
                        {
                            "all":
                                [
                                    {
                                        "vehicleStatisticsSnapshotId": 159,
                                        "accountId": 1004866884,
                                        "vehicleId": 1,
                                        "gameMode": "all",
                                        "createDate": "2022-09-07T16:35:18.977+0000",
                                        "totalBattles": 82,
                                        "survivedBattles": 20,
                                        "killDeathRatio": 1.58065,
                                        "hitMissRatio": 0.69155,
                                        "winLossRatio": 0.548781,
                                        "averageWn8": 2158.32,
                                        "averageExperience": 434.89,
                                        "averageDamage": 609.341,
                                        "averageKills": 1.19512,
                                        "averageDamageReceived": 405.646,
                                        "averageShots": 14.8659,
                                        "averageStunAssistedDamage": 0.0,
                                        "averageCapturePoints": 0.353659,
                                        "averageDroppedCapturePoints": 2.17073,
                                        "averageSpotting": 1.56098
                                    }
                                ],
                            "clan":
                                [],
                            "stronghold_defense":
                                [],
                            "company":
                                [],
                            "team":
                                [],
                            "stronghold_skirmish":
                                [],
                            "regular_team":
                                []
                        },
                        "10241":
                        {
                            "all":
                                [
                                    {
                                        "vehicleStatisticsSnapshotId": 14,
                                        "accountId": 1004866884,
                                        "vehicleId": 10241,
                                        "gameMode": "all",
                                        "createDate": "2022-09-07T16:35:16.729+0000",
                                        "totalBattles": 32,
                                        "survivedBattles": 10,
                                        "killDeathRatio": 1.31818,
                                        "hitMissRatio": 0.696486,
                                        "winLossRatio": 0.625,
                                        "averageWn8": 1974.32,
                                        "averageExperience": 883.531,
                                        "averageDamage": 1272.0,
                                        "averageKills": 0.90625,
                                        "averageDamageReceived": 737.719,
                                        "averageShots": 9.78125,
                                        "averageStunAssistedDamage": 0.0,
                                        "averageCapturePoints": 0.0,
                                        "averageDroppedCapturePoints": 0.03125,
                                        "averageSpotting": 1.1875
                                    }
                                ],
                            "clan":
                                [],
                            "stronghold_defense":
                                [],
                            "company":
                                [],
                            "team":
                                [],
                            "stronghold_skirmish":
                                [],
                            "regular_team":
                                []
                        },
                        "11265":
                        {
                            "all":
                                [
                                    {
                                        "vehicleStatisticsSnapshotId": 100,
                                        "accountId": 1004866884,
                                        "vehicleId": 11265,
                                        "gameMode": "all",
                                        "createDate": "2022-09-07T16:35:18.199+0000",
                                        "totalBattles": 61,
                                        "survivedBattles": 21,
                                        "killDeathRatio": 1.625,
                                        "hitMissRatio": 0.701717,
                                        "winLossRatio": 0.590164,
                                        "averageWn8": 1442.48,
                                        "averageExperience": 646.016,
                                        "averageDamage": 755.393,
                                        "averageKills": 1.06557,
                                        "averageDamageReceived": 696.262,
                                        "averageShots": 7.63934,
                                        "averageStunAssistedDamage": 0.0,
                                        "averageCapturePoints": 3.81967,
                                        "averageDroppedCapturePoints": 0.0,
                                        "averageSpotting": 0.803279
                                    }
                                ],
                            "clan":
                                [],
                            "stronghold_defense":
                                [],
                            "company":
                                [],
                            "team":
                                [],
                            "stronghold_skirmish":
                                [],
                            "regular_team":
                                []
                        },
                        "11777":
                        {
                            "all":
                                [
                                    {
                                        "vehicleStatisticsSnapshotId": 46,
                                        "accountId": 1004866884,
                                        "vehicleId": 11777,
                                        "gameMode": "all",
                                        "createDate": "2022-09-07T16:35:17.304+0000",
                                        "totalBattles": 35,
                                        "survivedBattles": 10,
                                        "killDeathRatio": 1.72,
                                        "hitMissRatio": 0.740845,
                                        "winLossRatio": 0.571429,
                                        "averageWn8": 1525.68,
                                        "averageExperience": 582.486,
                                        "averageDamage": 621.171,
                                        "averageKills": 1.22857,
                                        "averageDamageReceived": 548.143,
                                        "averageShots": 10.1429,
                                        "averageStunAssistedDamage": 0.0,
                                        "averageCapturePoints": 1.54286,
                                        "averageDroppedCapturePoints": 0.457143,
                                        "averageSpotting": 0.8
                                    }
                                ],
                            "clan":
                                [],
                            "stronghold_defense":
                                [],
                            "company":
                                [],
                            "team":
                                [],
                            "stronghold_skirmish":
                                [],
                            "regular_team":
                                []
                        },
                        "13313":
                        {
                            "all":
                                [],
                            "clan":
                                [],
                            "stronghold_defense":
                                [],
                            "company":
                                [],
                            "team":
                                [],
                            "stronghold_skirmish":
                                [],
                            "regular_team":
                                []
                        },
                        "14865":
                        {
                            "all":
                                [
                                    {
                                        "vehicleStatisticsSnapshotId": 54,
                                        "accountId": 1004866884,
                                        "vehicleId": 14865,
                                        "gameMode": "all",
                                        "createDate": "2022-09-07T16:35:17.424+0000",
                                        "totalBattles": 265,
                                        "survivedBattles": 66,
                                        "killDeathRatio": 1.42211,
                                        "hitMissRatio": 0.769769,
                                        "winLossRatio": 0.524528,
                                        "averageWn8": 1750.11,
                                        "averageExperience": 815.691,
                                        "averageDamage": 1765.47,
                                        "averageKills": 1.06792,
                                        "averageDamageReceived": 1458.53,
                                        "averageShots": 9.16226,
                                        "averageStunAssistedDamage": 0.0,
                                        "averageCapturePoints": 0.358491,
                                        "averageDroppedCapturePoints": 0.0867925,
                                        "averageSpotting": 1.62264
                                    }
                                ],
                            "clan":
                                [],
                            "stronghold_defense":
                                [],
                            "company":
                                [],
                            "team":
                                [],
                            "stronghold_skirmish":
                                [],
                            "regular_team":
                                []
                        },
                        "63505":
                        {
                            "all":
                                [],
                            "clan":
                                [],
                            "stronghold_defense":
                                [],
                            "company":
                                [],
                            "team":
                                [],
                            "stronghold_skirmish":
                                [],
                            "regular_team":
                                []
                        },
                        "47633":
                        {
                            "all":
                                [],
                            "clan":
                                [],
                            "stronghold_defense":
                                [],
                            "company":
                                [],
                            "team":
                                [],
                            "stronghold_skirmish":
                                [],
                            "regular_team":
                                []
                        },
                        "50193":
                        {
                            "all":
                                [],
                            "clan":
                                [],
                            "stronghold_defense":
                                [],
                            "company":
                                [],
                            "team":
                                [],
                            "stronghold_skirmish":
                                [],
                            "regular_team":
                                []
                        },
                        "60433":
                        {
                            "all":
                                [],
                            "clan":
                                [],
                            "stronghold_defense":
                                [],
                            "company":
                                [],
                            "team":
                                [],
                            "stronghold_skirmish":
                                [],
                            "regular_team":
                                []
                        },
                        "16401":
                        {
                            "all":
                                [
                                    {
                                        "vehicleStatisticsSnapshotId": 80,
                                        "accountId": 1004866884,
                                        "vehicleId": 16401,
                                        "gameMode": "all",
                                        "createDate": "2022-09-07T16:35:17.885+0000",
                                        "totalBattles": 28,
                                        "survivedBattles": 11,
                                        "killDeathRatio": 1.94118,
                                        "hitMissRatio": 0.583333,
                                        "winLossRatio": 0.571429,
                                        "averageWn8": 1611.97,
                                        "averageExperience": 773.107,
                                        "averageDamage": 1757.57,
                                        "averageKills": 1.17857,
                                        "averageDamageReceived": 1332.43,
                                        "averageShots": 9.42857,
                                        "averageStunAssistedDamage": 0.0,
                                        "averageCapturePoints": 0.285714,
                                        "averageDroppedCapturePoints": 0.0,
                                        "averageSpotting": 0.428571
                                    }
                                ],
                            "clan":
                                [],
                            "stronghold_defense":
                                [],
                            "company":
                                [],
                            "team":
                                [],
                            "stronghold_skirmish":
                                [],
                            "regular_team":
                                []
                        },
                        "3089":
                        {
                            "all":
                                [],
                            "clan":
                                [],
                            "stronghold_defense":
                                [],
                            "company":
                                [],
                            "team":
                                [],
                            "stronghold_skirmish":
                                [],
                            "regular_team":
                                []
                        },
                        "4113":
                        {
                            "all":
                                [
                                    {
                                        "vehicleStatisticsSnapshotId": 79,
                                        "accountId": 1004866884,
                                        "vehicleId": 4113,
                                        "gameMode": "all",
                                        "createDate": "2022-09-07T16:35:17.858+0000",
                                        "totalBattles": 96,
                                        "survivedBattles": 28,
                                        "killDeathRatio": 1.77941,
                                        "hitMissRatio": 0.735885,
                                        "winLossRatio": 0.541667,
                                        "averageWn8": 1964.81,
                                        "averageExperience": 833.25,
                                        "averageDamage": 1020.15,
                                        "averageKills": 1.26042,
                                        "averageDamageReceived": 988.427,
                                        "averageShots": 16.6042,
                                        "averageStunAssistedDamage": 0.0,
                                        "averageCapturePoints": 1.82292,
                                        "averageDroppedCapturePoints": 1.52083,
                                        "averageSpotting": 1.41667
                                    }
                                ],
                            "clan":
                                [],
                            "stronghold_defense":
                                [],
                            "company":
                                [],
                            "team":
                                [],
                            "stronghold_skirmish":
                                [],
                            "regular_team":
                                []
                        },
                        "3601":
                        {
                            "all":
                                [
                                    {
                                        "vehicleStatisticsSnapshotId": 114,
                                        "accountId": 1004866884,
                                        "vehicleId": 3601,
                                        "gameMode": "all",
                                        "createDate": "2022-09-07T16:35:18.388+0000",
                                        "totalBattles": 13,
                                        "survivedBattles": 3,
                                        "killDeathRatio": 0.5,
                                        "hitMissRatio": 0.416667,
                                        "winLossRatio": 0.538462,
                                        "averageWn8": 230.89,
                                        "averageExperience": 124.615,
                                        "averageDamage": 95.0,
                                        "averageKills": 0.384615,
                                        "averageDamageReceived": 105.462,
                                        "averageShots": 4.61538,
                                        "averageStunAssistedDamage": 0.0,
                                        "averageCapturePoints": 6.84615,
                                        "averageDroppedCapturePoints": 0.0,
                                        "averageSpotting": 0.538462
                                    }
                                ],
                            "clan":
                                [],
                            "stronghold_defense":
                                [],
                            "company":
                                [],
                            "team":
                                [],
                            "stronghold_skirmish":
                                [],
                            "regular_team":
                                []
                        },
                        "13841":
                        {
                            "all":
                                [
                                    {
                                        "vehicleStatisticsSnapshotId": 24,
                                        "accountId": 1004866884,
                                        "vehicleId": 13841,
                                        "gameMode": "all",
                                        "createDate": "2022-09-07T16:35:16.923+0000",
                                        "totalBattles": 202,
                                        "survivedBattles": 58,
                                        "killDeathRatio": 1.34028,
                                        "hitMissRatio": 0.712605,
                                        "winLossRatio": 0.564356,
                                        "averageWn8": 1957.26,
                                        "averageExperience": 790.787,
                                        "averageDamage": 1328.38,
                                        "averageKills": 0.955446,
                                        "averageDamageReceived": 1127.33,
                                        "averageShots": 11.7822,
                                        "averageStunAssistedDamage": 0.0,
                                        "averageCapturePoints": 2.18317,
                                        "averageDroppedCapturePoints": 0.183168,
                                        "averageSpotting": 1.52475
                                    }
                                ],
                            "clan":
                                [],
                            "stronghold_defense":
                                [],
                            "company":
                                [],
                            "team":
                                [],
                            "stronghold_skirmish":
                                [],
                            "regular_team":
                                []
                        },
                        "2065":
                        {
                            "all":
                                [],
                            "clan":
                                [],
                            "stronghold_defense":
                                [],
                            "company":
                                [],
                            "team":
                                [],
                            "stronghold_skirmish":
                                [],
                            "regular_team":
                                []
                        },
                        "529":
                        {
                            "all":
                                [
                                    {
                                        "vehicleStatisticsSnapshotId": 68,
                                        "accountId": 1004866884,
                                        "vehicleId": 529,
                                        "gameMode": "all",
                                        "createDate": "2022-09-07T16:35:17.682+0000",
                                        "totalBattles": 245,
                                        "survivedBattles": 86,
                                        "killDeathRatio": 1.1761,
                                        "hitMissRatio": 0.763909,
                                        "winLossRatio": 0.477551,
                                        "averageWn8": 1109.51,
                                        "averageExperience": 440.343,
                                        "averageDamage": 901.669,
                                        "averageKills": 0.763265,
                                        "averageDamageReceived": 1165.13,
                                        "averageShots": 8.43674,
                                        "averageStunAssistedDamage": 0.0,
                                        "averageCapturePoints": 2.61224,
                                        "averageDroppedCapturePoints": 0.171429,
                                        "averageSpotting": 0.873469
                                    }
                                ],
                            "clan":
                                [],
                            "stronghold_defense":
                                [],
                            "company":
                                [],
                            "team":
                                [],
                            "stronghold_skirmish":
                                [],
                            "regular_team":
                                []
                        },
                        "5137":
                        {
                            "all":
                                [
                                    {
                                        "vehicleStatisticsSnapshotId": 101,
                                        "accountId": 1004866884,
                                        "vehicleId": 5137,
                                        "gameMode": "all",
                                        "createDate": "2022-09-07T16:35:18.217+0000",
                                        "totalBattles": 413,
                                        "survivedBattles": 144,
                                        "killDeathRatio": 1.31599,
                                        "hitMissRatio": 0.799659,
                                        "winLossRatio": 0.510896,
                                        "averageWn8": 1615.33,
                                        "averageExperience": 578.69,
                                        "averageDamage": 1349.22,
                                        "averageKills": 0.857143,
                                        "averageDamageReceived": 1298.72,
                                        "averageShots": 8.53269,
                                        "averageStunAssistedDamage": 0.0,
                                        "averageCapturePoints": 1.33898,
                                        "averageDroppedCapturePoints": 0.164649,
                                        "averageSpotting": 0.891041
                                    }
                                ],
                            "clan":
                                [],
                            "stronghold_defense":
                                [],
                            "company":
                                [],
                            "team":
                                [],
                            "stronghold_skirmish":
                                [],
                            "regular_team":
                                []
                        },
                        "13329":
                        {
                            "all":
                                [],
                            "clan":
                                [],
                            "stronghold_defense":
                                [],
                            "company":
                                [],
                            "team":
                                [],
                            "stronghold_skirmish":
                                [],
                            "regular_team":
                                []
                        },
                        "11281":
                        {
                            "all":
                                [
                                    {
                                        "vehicleStatisticsSnapshotId": 65,
                                        "accountId": 1004866884,
                                        "vehicleId": 11281,
                                        "gameMode": "all",
                                        "createDate": "2022-09-07T16:35:17.645+0000",
                                        "totalBattles": 12,
                                        "survivedBattles": 2,
                                        "killDeathRatio": 0.9,
                                        "hitMissRatio": 0.622642,
                                        "winLossRatio": 0.5,
                                        "averageWn8": 840.924,
                                        "averageExperience": 355.667,
                                        "averageDamage": 356.0,
                                        "averageKills": 0.75,
                                        "averageDamageReceived": 225.0,
                                        "averageShots": 8.83333,
                                        "averageStunAssistedDamage": 0.0,
                                        "averageCapturePoints": 0.0,
                                        "averageDroppedCapturePoints": 0.0,
                                        "averageSpotting": 0.583333
                                    }
                                ],
                            "clan":
                                [],
                            "stronghold_defense":
                                [],
                            "company":
                                [],
                            "team":
                                [],
                            "stronghold_skirmish":
                                [],
                            "regular_team":
                                []
                        },
                        "12817":
                        {
                            "all":
                                [
                                    {
                                        "vehicleStatisticsSnapshotId": 97,
                                        "accountId": 1004866884,
                                        "vehicleId": 12817,
                                        "gameMode": "all",
                                        "createDate": "2022-09-07T16:35:18.163+0000",
                                        "totalBattles": 15,
                                        "survivedBattles": 4,
                                        "killDeathRatio": 0.727273,
                                        "hitMissRatio": 0.433735,
                                        "winLossRatio": 0.4,
                                        "averageWn8": 156.342,
                                        "averageExperience": 182.267,
                                        "averageDamage": 87.0667,
                                        "averageKills": 0.533333,
                                        "averageDamageReceived": 141.667,
                                        "averageShots": 38.7333,
                                        "averageStunAssistedDamage": 0.0,
                                        "averageCapturePoints": 1.26667,
                                        "averageDroppedCapturePoints": 0.0,
                                        "averageSpotting": 0.8
                                    }
                                ],
                            "clan":
                                [],
                            "stronghold_defense":
                                [],
                            "company":
                                [],
                            "team":
                                [],
                            "stronghold_skirmish":
                                [],
                            "regular_team":
                                []
                        },
                        "11793":
                        {
                            "all":
                                [
                                    {
                                        "vehicleStatisticsSnapshotId": 172,
                                        "accountId": 1004866884,
                                        "vehicleId": 11793,
                                        "gameMode": "all",
                                        "createDate": "2022-09-07T16:35:19.206+0000",
                                        "totalBattles": 54,
                                        "survivedBattles": 16,
                                        "killDeathRatio": 1.31579,
                                        "hitMissRatio": 0.669271,
                                        "winLossRatio": 0.555556,
                                        "averageWn8": 1161.31,
                                        "averageExperience": 424.352,
                                        "averageDamage": 675.463,
                                        "averageKills": 0.925926,
                                        "averageDamageReceived": 495.074,
                                        "averageShots": 7.11111,
                                        "averageStunAssistedDamage": 0.0,
                                        "averageCapturePoints": 1.09259,
                                        "averageDroppedCapturePoints": 0.962963,
                                        "averageSpotting": 0.240741
                                    }
                                ],
                            "clan":
                                [],
                            "stronghold_defense":
                                [],
                            "company":
                                [],
                            "team":
                                [],
                            "stronghold_skirmish":
                                [],
                            "regular_team":
                                []
                        },
                        "6161":
                        {
                            "all":
                                [
                                    {
                                        "vehicleStatisticsSnapshotId": 52,
                                        "accountId": 1004866884,
                                        "vehicleId": 6161,
                                        "gameMode": "all",
                                        "createDate": "2022-09-07T16:35:17.399+0000",
                                        "totalBattles": 146,
                                        "survivedBattles": 18,
                                        "killDeathRatio": 0.671875,
                                        "hitMissRatio": 0.586314,
                                        "winLossRatio": 0.445205,
                                        "averageWn8": 770.988,
                                        "averageExperience": 274.623,
                                        "averageDamage": 238.062,
                                        "averageKills": 0.589041,
                                        "averageDamageReceived": 314.445,
                                        "averageShots": 19.9178,
                                        "averageStunAssistedDamage": 0.0,
                                        "averageCapturePoints": 0.952055,
                                        "averageDroppedCapturePoints": 0.157534,
                                        "averageSpotting": 2.23973
                                    }
                                ],
                            "clan":
                                [],
                            "stronghold_defense":
                                [],
                            "company":
                                [],
                            "team":
                                [],
                            "stronghold_skirmish":
                                [],
                            "regular_team":
                                []
                        },
                        "8209":
                        {
                            "all":
                                [
                                    {
                                        "vehicleStatisticsSnapshotId": 72,
                                        "accountId": 1004866884,
                                        "vehicleId": 8209,
                                        "gameMode": "all",
                                        "createDate": "2022-09-07T16:35:17.743+0000",
                                        "totalBattles": 138,
                                        "survivedBattles": 14,
                                        "killDeathRatio": 0.596774,
                                        "hitMissRatio": 0.531144,
                                        "winLossRatio": 0.42029,
                                        "averageWn8": 312.515,
                                        "averageExperience": 208.217,
                                        "averageDamage": 148.529,
                                        "averageKills": 0.536232,
                                        "averageDamageReceived": 326.928,
                                        "averageShots": 6.39855,
                                        "averageStunAssistedDamage": 0.0,
                                        "averageCapturePoints": 1.97101,
                                        "averageDroppedCapturePoints": 0.0724638,
                                        "averageSpotting": 2.39855
                                    }
                                ],
                            "clan":
                                [],
                            "stronghold_defense":
                                [],
                            "company":
                                [],
                            "team":
                                [],
                            "stronghold_skirmish":
                                [],
                            "regular_team":
                                []
                        },
                        "6673":
                        {
                            "all":
                                [],
                            "clan":
                                [],
                            "stronghold_defense":
                                [],
                            "company":
                                [],
                            "team":
                                [],
                            "stronghold_skirmish":
                                [],
                            "regular_team":
                                []
                        },
                        "9745":
                        {
                            "all":
                                [
                                    {
                                        "vehicleStatisticsSnapshotId": 116,
                                        "accountId": 1004866884,
                                        "vehicleId": 9745,
                                        "gameMode": "all",
                                        "createDate": "2022-09-07T16:35:18.419+0000",
                                        "totalBattles": 411,
                                        "survivedBattles": 154,
                                        "killDeathRatio": 1.49027,
                                        "hitMissRatio": 0.80624,
                                        "winLossRatio": 0.545012,
                                        "averageWn8": 1819.97,
                                        "averageExperience": 726.674,
                                        "averageDamage": 1741.21,
                                        "averageKills": 0.931874,
                                        "averageDamageReceived": 1495.12,
                                        "averageShots": 8.89051,
                                        "averageStunAssistedDamage": 0.0,
                                        "averageCapturePoints": 0.547445,
                                        "averageDroppedCapturePoints": 0.892944,
                                        "averageSpotting": 0.963504
                                    }
                                ],
                            "clan":
                                [],
                            "stronghold_defense":
                                [],
                            "company":
                                [],
                            "team":
                                [],
                            "stronghold_skirmish":
                                [],
                            "regular_team":
                                []
                        },
                        "5153":
                        {
                            "all":
                                [
                                    {
                                        "vehicleStatisticsSnapshotId": 50,
                                        "accountId": 1004866884,
                                        "vehicleId": 5153,
                                        "gameMode": "all",
                                        "createDate": "2022-09-07T16:35:17.361+0000",
                                        "totalBattles": 40,
                                        "survivedBattles": 8,
                                        "killDeathRatio": 0.375,
                                        "hitMissRatio": 0.522158,
                                        "winLossRatio": 0.5,
                                        "averageWn8": 192.259,
                                        "averageExperience": 210.075,
                                        "averageDamage": 85.85,
                                        "averageKills": 0.3,
                                        "averageDamageReceived": 298.65,
                                        "averageShots": 12.975,
                                        "averageStunAssistedDamage": 0.0,
                                        "averageCapturePoints": 1.6,
                                        "averageDroppedCapturePoints": 0.0,
                                        "averageSpotting": 1.85
                                    }
                                ],
                            "clan":
                                [],
                            "stronghold_defense":
                                [],
                            "company":
                                [],
                            "team":
                                [],
                            "stronghold_skirmish":
                                [],
                            "regular_team":
                                []
                        },
                        "7713":
                        {
                            "all":
                                [
                                    {
                                        "vehicleStatisticsSnapshotId": 106,
                                        "accountId": 1004866884,
                                        "vehicleId": 7713,
                                        "gameMode": "all",
                                        "createDate": "2022-09-07T16:35:18.280+0000",
                                        "totalBattles": 47,
                                        "survivedBattles": 9,
                                        "killDeathRatio": 1.21053,
                                        "hitMissRatio": 0.70442,
                                        "winLossRatio": 0.510638,
                                        "averageWn8": 1073.53,
                                        "averageExperience": 278.447,
                                        "averageDamage": 415.319,
                                        "averageKills": 0.978723,
                                        "averageDamageReceived": 243.362,
                                        "averageShots": 7.70213,
                                        "averageStunAssistedDamage": 0.0,
                                        "averageCapturePoints": 0.851064,
                                        "averageDroppedCapturePoints": 0.0638298,
                                        "averageSpotting": 0.829787
                                    }
                                ],
                            "clan":
                                [],
                            "stronghold_defense":
                                [],
                            "company":
                                [],
                            "team":
                                [],
                            "stronghold_skirmish":
                                [],
                            "regular_team":
                                []
                        },
                        "7201":
                        {
                            "all":
                                [],
                            "clan":
                                [],
                            "stronghold_defense":
                                [],
                            "company":
                                [],
                            "team":
                                [],
                            "stronghold_skirmish":
                                [],
                            "regular_team":
                                []
                        },
                        "11297":
                        {
                            "all":
                                [],
                            "clan":
                                [],
                            "stronghold_defense":
                                [],
                            "company":
                                [],
                            "team":
                                [],
                            "stronghold_skirmish":
                                [],
                            "regular_team":
                                []
                        },
                        "9761":
                        {
                            "all":
                                [
                                    {
                                        "vehicleStatisticsSnapshotId": 169,
                                        "accountId": 1004866884,
                                        "vehicleId": 9761,
                                        "gameMode": "all",
                                        "createDate": "2022-09-07T16:35:19.156+0000",
                                        "totalBattles": 21,
                                        "survivedBattles": 2,
                                        "killDeathRatio": 0.421053,
                                        "hitMissRatio": 0.586207,
                                        "winLossRatio": 0.52381,
                                        "averageWn8": 987.734,
                                        "averageExperience": 413.333,
                                        "averageDamage": 304.048,
                                        "averageKills": 0.380952,
                                        "averageDamageReceived": 444.81,
                                        "averageShots": 6.90476,
                                        "averageStunAssistedDamage": 0.0,
                                        "averageCapturePoints": 0.52381,
                                        "averageDroppedCapturePoints": 1.42857,
                                        "averageSpotting": 2.09524
                                    }
                                ],
                            "clan":
                                [],
                            "stronghold_defense":
                                [],
                            "company":
                                [],
                            "team":
                                [],
                            "stronghold_skirmish":
                                [],
                            "regular_team":
                                []
                        },
                        "4641":
                        {
                            "all":
                                [
                                    {
                                        "vehicleStatisticsSnapshotId": 41,
                                        "accountId": 1004866884,
                                        "vehicleId": 4641,
                                        "gameMode": "all",
                                        "createDate": "2022-09-07T16:35:17.188+0000",
                                        "totalBattles": 83,
                                        "survivedBattles": 23,
                                        "killDeathRatio": 0.616667,
                                        "hitMissRatio": 0.312977,
                                        "winLossRatio": 0.457831,
                                        "averageWn8": 572.516,
                                        "averageExperience": 138.831,
                                        "averageDamage": 216.819,
                                        "averageKills": 0.445783,
                                        "averageDamageReceived": 114.795,
                                        "averageShots": 4.73494,
                                        "averageStunAssistedDamage": 0.0,
                                        "averageCapturePoints": 0.0,
                                        "averageDroppedCapturePoints": 2.21687,
                                        "averageSpotting": 0.0963855
                                    }
                                ],
                            "clan":
                                [],
                            "stronghold_defense":
                                [],
                            "company":
                                [],
                            "team":
                                [],
                            "stronghold_skirmish":
                                [],
                            "regular_team":
                                []
                        },
                        "4129":
                        {
                            "all":
                                [
                                    {
                                        "vehicleStatisticsSnapshotId": 166,
                                        "accountId": 1004866884,
                                        "vehicleId": 4129,
                                        "gameMode": "all",
                                        "createDate": "2022-09-07T16:35:19.121+0000",
                                        "totalBattles": 44,
                                        "survivedBattles": 23,
                                        "killDeathRatio": 2.57143,
                                        "hitMissRatio": 0.324723,
                                        "winLossRatio": 0.636364,
                                        "averageWn8": 1106.02,
                                        "averageExperience": 544.977,
                                        "averageDamage": 586.114,
                                        "averageKills": 1.22727,
                                        "averageDamageReceived": 112.614,
                                        "averageShots": 6.15909,
                                        "averageStunAssistedDamage": 0.0,
                                        "averageCapturePoints": 0.0,
                                        "averageDroppedCapturePoints": 0.977273,
                                        "averageSpotting": 0.0909091
                                    }
                                ],
                            "clan":
                                [],
                            "stronghold_defense":
                                [],
                            "company":
                                [],
                            "team":
                                [],
                            "stronghold_skirmish":
                                [],
                            "regular_team":
                                []
                        },
                        "1057":
                        {
                            "all":
                                [
                                    {
                                        "vehicleStatisticsSnapshotId": 154,
                                        "accountId": 1004866884,
                                        "vehicleId": 1057,
                                        "gameMode": "all",
                                        "createDate": "2022-09-07T16:35:18.910+0000",
                                        "totalBattles": 58,
                                        "survivedBattles": 12,
                                        "killDeathRatio": 1.58696,
                                        "hitMissRatio": 0.577428,
                                        "winLossRatio": 0.568965,
                                        "averageWn8": 1685.57,
                                        "averageExperience": 403.414,
                                        "averageDamage": 559.431,
                                        "averageKills": 1.25862,
                                        "averageDamageReceived": 421.741,
                                        "averageShots": 6.56897,
                                        "averageStunAssistedDamage": 0.0,
                                        "averageCapturePoints": 0.0,
                                        "averageDroppedCapturePoints": 0.327586,
                                        "averageSpotting": 1.13793
                                    }
                                ],
                            "clan":
                                [],
                            "stronghold_defense":
                                [],
                            "company":
                                [],
                            "team":
                                [],
                            "stronghold_skirmish":
                                [],
                            "regular_team":
                                []
                        },
                        "1569":
                        {
                            "all":
                                [],
                            "clan":
                                [],
                            "stronghold_defense":
                                [],
                            "company":
                                [],
                            "team":
                                [],
                            "stronghold_skirmish":
                                [],
                            "regular_team":
                                []
                        },
                        "2081":
                        {
                            "all":
                                [
                                    {
                                        "vehicleStatisticsSnapshotId": 174,
                                        "accountId": 1004866884,
                                        "vehicleId": 2081,
                                        "gameMode": "all",
                                        "createDate": "2022-09-07T16:35:19.227+0000",
                                        "totalBattles": 26,
                                        "survivedBattles": 6,
                                        "killDeathRatio": 1.05,
                                        "hitMissRatio": 0.266129,
                                        "winLossRatio": 0.346154,
                                        "averageWn8": 802.441,
                                        "averageExperience": 118.192,
                                        "averageDamage": 173.615,
                                        "averageKills": 0.807692,
                                        "averageDamageReceived": 91.2308,
                                        "averageShots": 9.53846,
                                        "averageStunAssistedDamage": 0.0,
                                        "averageCapturePoints": 3.11538,
                                        "averageDroppedCapturePoints": 5.73077,
                                        "averageSpotting": 0.0769231
                                    }
                                ],
                            "clan":
                                [],
                            "stronghold_defense":
                                [],
                            "company":
                                [],
                            "team":
                                [],
                            "stronghold_skirmish":
                                [],
                            "regular_team":
                                []
                        },
                        "3105":
                        {
                            "all":
                                [],
                            "clan":
                                [],
                            "stronghold_defense":
                                [],
                            "company":
                                [],
                            "team":
                                [],
                            "stronghold_skirmish":
                                [],
                            "regular_team":
                                []
                        },
                        "6177":
                        {
                            "all":
                                [
                                    {
                                        "vehicleStatisticsSnapshotId": 81,
                                        "accountId": 1004866884,
                                        "vehicleId": 6177,
                                        "gameMode": "all",
                                        "createDate": "2022-09-07T16:35:17.898+0000",
                                        "totalBattles": 30,
                                        "survivedBattles": 7,
                                        "killDeathRatio": 1.65217,
                                        "hitMissRatio": 0.664032,
                                        "winLossRatio": 0.4,
                                        "averageWn8": 848.417,
                                        "averageExperience": 214.2,
                                        "averageDamage": 211.633,
                                        "averageKills": 1.26667,
                                        "averageDamageReceived": 106.3,
                                        "averageShots": 8.43333,
                                        "averageStunAssistedDamage": 0.0,
                                        "averageCapturePoints": 4.96667,
                                        "averageDroppedCapturePoints": 0.0,
                                        "averageSpotting": 0.966667
                                    }
                                ],
                            "clan":
                                [],
                            "stronghold_defense":
                                [],
                            "company":
                                [],
                            "team":
                                [],
                            "stronghold_skirmish":
                                [],
                            "regular_team":
                                []
                        },
                        "5665":
                        {
                            "all":
                                [],
                            "clan":
                                [],
                            "stronghold_defense":
                                [],
                            "company":
                                [],
                            "team":
                                [],
                            "stronghold_skirmish":
                                [],
                            "regular_team":
                                []
                        },
                        "16417":
                        {
                            "all":
                                [
                                    {
                                        "vehicleStatisticsSnapshotId": 130,
                                        "accountId": 1004866884,
                                        "vehicleId": 16417,
                                        "gameMode": "all",
                                        "createDate": "2022-09-07T16:35:18.601+0000",
                                        "totalBattles": 83,
                                        "survivedBattles": 29,
                                        "killDeathRatio": 1.48148,
                                        "hitMissRatio": 0.331884,
                                        "winLossRatio": 0.53012,
                                        "averageWn8": 1540.49,
                                        "averageExperience": 534.952,
                                        "averageDamage": 821.024,
                                        "averageKills": 0.963855,
                                        "averageDamageReceived": 188.819,
                                        "averageShots": 8.31325,
                                        "averageStunAssistedDamage": 0.0,
                                        "averageCapturePoints": 0.0,
                                        "averageDroppedCapturePoints": 0.855422,
                                        "averageSpotting": 0.0963855
                                    }
                                ],
                            "clan":
                                [],
                            "stronghold_defense":
                                [],
                            "company":
                                [],
                            "team":
                                [],
                            "stronghold_skirmish":
                                [],
                            "regular_team":
                                []
                        },
                        "13345":
                        {
                            "all":
                                [
                                    {
                                        "vehicleStatisticsSnapshotId": 147,
                                        "accountId": 1004866884,
                                        "vehicleId": 13345,
                                        "gameMode": "all",
                                        "createDate": "2022-09-07T16:35:18.822+0000",
                                        "totalBattles": 76,
                                        "survivedBattles": 28,
                                        "killDeathRatio": 1.33333,
                                        "hitMissRatio": 0.705759,
                                        "winLossRatio": 0.513158,
                                        "averageWn8": 1754.75,
                                        "averageExperience": 789.987,
                                        "averageDamage": 1333.38,
                                        "averageKills": 0.842105,
                                        "averageDamageReceived": 1267.86,
                                        "averageShots": 12.5658,
                                        "averageStunAssistedDamage": 0.0,
                                        "averageCapturePoints": 0.0,
                                        "averageDroppedCapturePoints": 0.0,
                                        "averageSpotting": 1.09211
                                    }
                                ],
                            "clan":
                                [],
                            "stronghold_defense":
                                [],
                            "company":
                                [],
                            "team":
                                [],
                            "stronghold_skirmish":
                                [],
                            "regular_team":
                                []
                        },
                        "33":
                        {
                            "all":
                                [
                                    {
                                        "vehicleStatisticsSnapshotId": 84,
                                        "accountId": 1004866884,
                                        "vehicleId": 33,
                                        "gameMode": "all",
                                        "createDate": "2022-09-07T16:35:17.957+0000",
                                        "totalBattles": 75,
                                        "survivedBattles": 22,
                                        "killDeathRatio": 1.26415,
                                        "hitMissRatio": 0.712644,
                                        "winLossRatio": 0.466667,
                                        "averageWn8": 908.064,
                                        "averageExperience": 440.787,
                                        "averageDamage": 472.987,
                                        "averageKills": 0.893333,
                                        "averageDamageReceived": 562.467,
                                        "averageShots": 11.6,
                                        "averageStunAssistedDamage": 0.0,
                                        "averageCapturePoints": 3.49333,
                                        "averageDroppedCapturePoints": 0.0933333,
                                        "averageSpotting": 1.09333
                                    }
                                ],
                            "clan":
                                [],
                            "stronghold_defense":
                                [],
                            "company":
                                [],
                            "team":
                                [],
                            "stronghold_skirmish":
                                [],
                            "regular_team":
                                []
                        },
                        "545":
                        {
                            "all":
                                [
                                    {
                                        "vehicleStatisticsSnapshotId": 148,
                                        "accountId": 1004866884,
                                        "vehicleId": 545,
                                        "gameMode": "all",
                                        "createDate": "2022-09-07T16:35:18.833+0000",
                                        "totalBattles": 14,
                                        "survivedBattles": 1,
                                        "killDeathRatio": 1.07692,
                                        "hitMissRatio": 0.304079,
                                        "winLossRatio": 0.5,
                                        "averageWn8": 736.062,
                                        "averageExperience": 289.357,
                                        "averageDamage": 134.571,
                                        "averageKills": 1.0,
                                        "averageDamageReceived": 110.786,
                                        "averageShots": 57.7857,
                                        "averageStunAssistedDamage": 0.0,
                                        "averageCapturePoints": 1.0,
                                        "averageDroppedCapturePoints": 0.0,
                                        "averageSpotting": 0.928571
                                    }
                                ],
                            "clan":
                                [],
                            "stronghold_defense":
                                [],
                            "company":
                                [],
                            "team":
                                [],
                            "stronghold_skirmish":
                                [],
                            "regular_team":
                                []
                        },
                        "4657":
                        {
                            "all":
                                [
                                    {
                                        "vehicleStatisticsSnapshotId": 53,
                                        "accountId": 1004866884,
                                        "vehicleId": 4657,
                                        "gameMode": "all",
                                        "createDate": "2022-09-07T16:35:17.411+0000",
                                        "totalBattles": 107,
                                        "survivedBattles": 15,
                                        "killDeathRatio": 0.967391,
                                        "hitMissRatio": 0.64777,
                                        "winLossRatio": 0.448598,
                                        "averageWn8": 1176.45,
                                        "averageExperience": 331.084,
                                        "averageDamage": 437.14,
                                        "averageKills": 0.831776,
                                        "averageDamageReceived": 422.963,
                                        "averageShots": 12.3645,
                                        "averageStunAssistedDamage": 0.0,
                                        "averageCapturePoints": 1.28037,
                                        "averageDroppedCapturePoints": 0.485981,
                                        "averageSpotting": 1.17757
                                    }
                                ],
                            "clan":
                                [],
                            "stronghold_defense":
                                [],
                            "company":
                                [],
                            "team":
                                [],
                            "stronghold_skirmish":
                                [],
                            "regular_team":
                                []
                        },
                        "4145":
                        {
                            "all":
                                [
                                    {
                                        "vehicleStatisticsSnapshotId": 17,
                                        "accountId": 1004866884,
                                        "vehicleId": 4145,
                                        "gameMode": "all",
                                        "createDate": "2022-09-07T16:35:16.774+0000",
                                        "totalBattles": 238,
                                        "survivedBattles": 58,
                                        "killDeathRatio": 1.39444,
                                        "hitMissRatio": 0.74349,
                                        "winLossRatio": 0.504202,
                                        "averageWn8": 1982.57,
                                        "averageExperience": 642.307,
                                        "averageDamage": 2136.95,
                                        "averageKills": 1.05462,
                                        "averageDamageReceived": 1768.08,
                                        "averageShots": 9.68067,
                                        "averageStunAssistedDamage": 0.0,
                                        "averageCapturePoints": 0.0,
                                        "averageDroppedCapturePoints": 0.840336,
                                        "averageSpotting": 1.34874
                                    }
                                ],
                            "clan":
                                [],
                            "stronghold_defense":
                                [],
                            "company":
                                [],
                            "team":
                                [],
                            "stronghold_skirmish":
                                [],
                            "regular_team":
                                []
                        },
                        "3633":
                        {
                            "all":
                                [
                                    {
                                        "vehicleStatisticsSnapshotId": 142,
                                        "accountId": 1004866884,
                                        "vehicleId": 3633,
                                        "gameMode": "all",
                                        "createDate": "2022-09-07T16:35:18.756+0000",
                                        "totalBattles": 117,
                                        "survivedBattles": 34,
                                        "killDeathRatio": 1.42169,
                                        "hitMissRatio": 0.648268,
                                        "winLossRatio": 0.504274,
                                        "averageWn8": 1546.3,
                                        "averageExperience": 607.325,
                                        "averageDamage": 1108.56,
                                        "averageKills": 1.00855,
                                        "averageDamageReceived": 1128.29,
                                        "averageShots": 7.89744,
                                        "averageStunAssistedDamage": 0.0,
                                        "averageCapturePoints": 0.555556,
                                        "averageDroppedCapturePoints": 0.025641,
                                        "averageSpotting": 1.15385
                                    }
                                ],
                            "clan":
                                [],
                            "stronghold_defense":
                                [],
                            "company":
                                [],
                            "team":
                                [],
                            "stronghold_skirmish":
                                [],
                            "regular_team":
                                []
                        },
                        "6705":
                        {
                            "all":
                                [],
                            "clan":
                                [],
                            "stronghold_defense":
                                [],
                            "company":
                                [],
                            "team":
                                [],
                            "stronghold_skirmish":
                                [],
                            "regular_team":
                                []
                        },
                        "7217":
                        {
                            "all":
                                [
                                    {
                                        "vehicleStatisticsSnapshotId": 58,
                                        "accountId": 1004866884,
                                        "vehicleId": 7217,
                                        "gameMode": "all",
                                        "createDate": "2022-09-07T16:35:17.480+0000",
                                        "totalBattles": 36,
                                        "survivedBattles": 9,
                                        "killDeathRatio": 1.44444,
                                        "hitMissRatio": 0.533582,
                                        "winLossRatio": 0.416667,
                                        "averageWn8": 986.162,
                                        "averageExperience": 373.944,
                                        "averageDamage": 478.167,
                                        "averageKills": 1.08333,
                                        "averageDamageReceived": 359.389,
                                        "averageShots": 7.44444,
                                        "averageStunAssistedDamage": 0.0,
                                        "averageCapturePoints": 0.194444,
                                        "averageDroppedCapturePoints": 0.0,
                                        "averageSpotting": 0.416667
                                    }
                                ],
                            "clan":
                                [],
                            "stronghold_defense":
                                [],
                            "company":
                                [],
                            "team":
                                [],
                            "stronghold_skirmish":
                                [],
                            "regular_team":
                                []
                        },
                        "2097":
                        {
                            "all":
                                [
                                    {
                                        "vehicleStatisticsSnapshotId": 8,
                                        "accountId": 1004866884,
                                        "vehicleId": 2097,
                                        "gameMode": "all",
                                        "createDate": "2022-09-07T16:35:16.603+0000",
                                        "totalBattles": 96,
                                        "survivedBattles": 18,
                                        "killDeathRatio": 1.24359,
                                        "hitMissRatio": 0.787629,
                                        "winLossRatio": 0.614583,
                                        "averageWn8": 2160.66,
                                        "averageExperience": 934.573,
                                        "averageDamage": 1950.49,
                                        "averageKills": 1.01042,
                                        "averageDamageReceived": 1748.58,
                                        "averageShots": 10.1042,
                                        "averageStunAssistedDamage": 0.0,
                                        "averageCapturePoints": 0.354167,
                                        "averageDroppedCapturePoints": 0.135417,
                                        "averageSpotting": 2.01042
                                    }
                                ],
                            "clan":
                                [],
                            "stronghold_defense":
                                [],
                            "company":
                                [],
                            "team":
                                [],
                            "stronghold_skirmish":
                                [],
                            "regular_team":
                                []
                        },
                        "3121":
                        {
                            "all":
                                [
                                    {
                                        "vehicleStatisticsSnapshotId": 19,
                                        "accountId": 1004866884,
                                        "vehicleId": 3121,
                                        "gameMode": "all",
                                        "createDate": "2022-09-07T16:35:16.803+0000",
                                        "totalBattles": 13,
                                        "survivedBattles": 0,
                                        "killDeathRatio": 0.384615,
                                        "hitMissRatio": 0.548387,
                                        "winLossRatio": 0.461538,
                                        "averageWn8": 679.4,
                                        "averageExperience": 256.769,
                                        "averageDamage": 229.538,
                                        "averageKills": 0.384615,
                                        "averageDamageReceived": 326.154,
                                        "averageShots": 9.53846,
                                        "averageStunAssistedDamage": 0.0,
                                        "averageCapturePoints": 0.0,
                                        "averageDroppedCapturePoints": 0.0,
                                        "averageSpotting": 1.46154
                                    }
                                ],
                            "clan":
                                [],
                            "stronghold_defense":
                                [],
                            "company":
                                [],
                            "team":
                                [],
                            "stronghold_skirmish":
                                [],
                            "regular_team":
                                []
                        },
                        "7729":
                        {
                            "all":
                                [
                                    {
                                        "vehicleStatisticsSnapshotId": 43,
                                        "accountId": 1004866884,
                                        "vehicleId": 7729,
                                        "gameMode": "all",
                                        "createDate": "2022-09-07T16:35:17.216+0000",
                                        "totalBattles": 20,
                                        "survivedBattles": 8,
                                        "killDeathRatio": 2.33333,
                                        "hitMissRatio": 0.641026,
                                        "winLossRatio": 0.6,
                                        "averageWn8": 2383.82,
                                        "averageExperience": 838.55,
                                        "averageDamage": 1397.6,
                                        "averageKills": 1.4,
                                        "averageDamageReceived": 627.0,
                                        "averageShots": 11.7,
                                        "averageStunAssistedDamage": 0.0,
                                        "averageCapturePoints": 0.0,
                                        "averageDroppedCapturePoints": 0.0,
                                        "averageSpotting": 0.8
                                    }
                                ],
                            "clan":
                                [],
                            "stronghold_defense":
                                [],
                            "company":
                                [],
                            "team":
                                [],
                            "stronghold_skirmish":
                                [],
                            "regular_team":
                                []
                        },
                        "64049":
                        {
                            "all":
                                [
                                    {
                                        "vehicleStatisticsSnapshotId": 56,
                                        "accountId": 1004866884,
                                        "vehicleId": 64049,
                                        "gameMode": "all",
                                        "createDate": "2022-09-07T16:35:17.455+0000",
                                        "totalBattles": 1309,
                                        "survivedBattles": 415,
                                        "killDeathRatio": 1.69687,
                                        "hitMissRatio": 0.754872,
                                        "winLossRatio": 0.532468,
                                        "averageWn8": 2036.43,
                                        "averageExperience": 785.791,
                                        "averageDamage": 1485.93,
                                        "averageKills": 1.1589,
                                        "averageDamageReceived": 1125.94,
                                        "averageShots": 7.99694,
                                        "averageStunAssistedDamage": 0.0,
                                        "averageCapturePoints": 0.872422,
                                        "averageDroppedCapturePoints": 0.499618,
                                        "averageSpotting": 1.4217
                                    }
                                ],
                            "clan":
                                [],
                            "stronghold_defense":
                                [],
                            "company":
                                [],
                            "team":
                                [],
                            "stronghold_skirmish":
                                [
                                    {
                                        "vehicleStatisticsSnapshotId": 57,
                                        "accountId": 1004866884,
                                        "vehicleId": 64049,
                                        "gameMode": "stronghold_skirmish",
                                        "createDate": "2022-09-07T16:35:17.468+0000",
                                        "totalBattles": 11,
                                        "survivedBattles": 9,
                                        "killDeathRatio": 4.5,
                                        "hitMissRatio": 0.757576,
                                        "winLossRatio": 0.818182,
                                        "averageWn8": 1414.34,
                                        "averageExperience": 805.455,
                                        "averageDamage": 1171.64,
                                        "averageKills": 0.818182,
                                        "averageDamageReceived": 521.091,
                                        "averageShots": 6.0,
                                        "averageStunAssistedDamage": 0.0,
                                        "averageCapturePoints": 0.0,
                                        "averageDroppedCapturePoints": 7.09091,
                                        "averageSpotting": 0.545455
                                    }
                                ],
                            "regular_team":
                                []
                        },
                        "5681":
                        {
                            "all":
                                [
                                    {
                                        "vehicleStatisticsSnapshotId": 67,
                                        "accountId": 1004866884,
                                        "vehicleId": 5681,
                                        "gameMode": "all",
                                        "createDate": "2022-09-07T16:35:17.670+0000",
                                        "totalBattles": 151,
                                        "survivedBattles": 38,
                                        "killDeathRatio": 0.955752,
                                        "hitMissRatio": 0.697288,
                                        "winLossRatio": 0.549669,
                                        "averageWn8": 1750.67,
                                        "averageExperience": 780.417,
                                        "averageDamage": 1086.99,
                                        "averageKills": 0.715232,
                                        "averageDamageReceived": 1141.35,
                                        "averageShots": 7.56954,
                                        "averageStunAssistedDamage": 0.0,
                                        "averageCapturePoints": 0.834437,
                                        "averageDroppedCapturePoints": 0.635762,
                                        "averageSpotting": 3.42384
                                    }
                                ],
                            "clan":
                                [],
                            "stronghold_defense":
                                [],
                            "company":
                                [],
                            "team":
                                [],
                            "stronghold_skirmish":
                                [],
                            "regular_team":
                                []
                        },
                        "5169":
                        {
                            "all":
                                [
                                    {
                                        "vehicleStatisticsSnapshotId": 165,
                                        "accountId": 1004866884,
                                        "vehicleId": 5169,
                                        "gameMode": "all",
                                        "createDate": "2022-09-07T16:35:19.095+0000",
                                        "totalBattles": 64,
                                        "survivedBattles": 10,
                                        "killDeathRatio": 0.87037,
                                        "hitMissRatio": 0.58194,
                                        "winLossRatio": 0.484375,
                                        "averageWn8": 1001.85,
                                        "averageExperience": 489.547,
                                        "averageDamage": 544.5,
                                        "averageKills": 0.734375,
                                        "averageDamageReceived": 708.609,
                                        "averageShots": 9.34375,
                                        "averageStunAssistedDamage": 0.0,
                                        "averageCapturePoints": 0.609375,
                                        "averageDroppedCapturePoints": 0.0,
                                        "averageSpotting": 1.1875
                                    }
                                ],
                            "clan":
                                [],
                            "stronghold_defense":
                                [],
                            "company":
                                [],
                            "team":
                                [],
                            "stronghold_skirmish":
                                [],
                            "regular_team":
                                []
                        },
                        "6193":
                        {
                            "all":
                                [],
                            "clan":
                                [],
                            "stronghold_defense":
                                [],
                            "company":
                                [],
                            "team":
                                [],
                            "stronghold_skirmish":
                                [],
                            "regular_team":
                                []
                        },
                        "5697":
                        {
                            "all":
                                [],
                            "clan":
                                [],
                            "stronghold_defense":
                                [],
                            "company":
                                [],
                            "team":
                                [],
                            "stronghold_skirmish":
                                [],
                            "regular_team":
                                []
                        },
                        "4673":
                        {
                            "all":
                                [
                                    {
                                        "vehicleStatisticsSnapshotId": 20,
                                        "accountId": 1004866884,
                                        "vehicleId": 4673,
                                        "gameMode": "all",
                                        "createDate": "2022-09-07T16:35:16.823+0000",
                                        "totalBattles": 37,
                                        "survivedBattles": 19,
                                        "killDeathRatio": 1.44444,
                                        "hitMissRatio": 0.280769,
                                        "winLossRatio": 0.540541,
                                        "averageWn8": 822.093,
                                        "averageExperience": 373.541,
                                        "averageDamage": 630.757,
                                        "averageKills": 0.702703,
                                        "averageDamageReceived": 140.108,
                                        "averageShots": 7.02703,
                                        "averageStunAssistedDamage": 219.541,
                                        "averageCapturePoints": 0.0,
                                        "averageDroppedCapturePoints": 0.0,
                                        "averageSpotting": 0.027027
                                    }
                                ],
                            "clan":
                                [],
                            "stronghold_defense":
                                [],
                            "company":
                                [],
                            "team":
                                [],
                            "stronghold_skirmish":
                                [],
                            "regular_team":
                                []
                        },
                        "3649":
                        {
                            "all":
                                [],
                            "clan":
                                [],
                            "stronghold_defense":
                                [],
                            "company":
                                [],
                            "team":
                                [],
                            "stronghold_skirmish":
                                [],
                            "regular_team":
                                []
                        },
                        "8257":
                        {
                            "all":
                                [],
                            "clan":
                                [],
                            "stronghold_defense":
                                [],
                            "company":
                                [],
                            "team":
                                [],
                            "stronghold_skirmish":
                                [],
                            "regular_team":
                                []
                        },
                        "5185":
                        {
                            "all":
                                [
                                    {
                                        "vehicleStatisticsSnapshotId": 125,
                                        "accountId": 1004866884,
                                        "vehicleId": 5185,
                                        "gameMode": "all",
                                        "createDate": "2022-09-07T16:35:18.540+0000",
                                        "totalBattles": 102,
                                        "survivedBattles": 17,
                                        "killDeathRatio": 0.6,
                                        "hitMissRatio": 0.67471,
                                        "winLossRatio": 0.539216,
                                        "averageWn8": 1327.76,
                                        "averageExperience": 580.059,
                                        "averageDamage": 654.686,
                                        "averageKills": 0.5,
                                        "averageDamageReceived": 856.912,
                                        "averageShots": 10.9706,
                                        "averageStunAssistedDamage": 0.0,
                                        "averageCapturePoints": 0.754902,
                                        "averageDroppedCapturePoints": 0.0,
                                        "averageSpotting": 2.30392
                                    }
                                ],
                            "clan":
                                [],
                            "stronghold_defense":
                                [],
                            "company":
                                [],
                            "team":
                                [],
                            "stronghold_skirmish":
                                [],
                            "regular_team":
                                []
                        },
                        "17473":
                        {
                            "all":
                                [
                                    {
                                        "vehicleStatisticsSnapshotId": 5,
                                        "accountId": 1004866884,
                                        "vehicleId": 17473,
                                        "gameMode": "all",
                                        "createDate": "2022-09-07T16:35:16.539+0000",
                                        "totalBattles": 144,
                                        "survivedBattles": 19,
                                        "killDeathRatio": 0.888,
                                        "hitMissRatio": 0.700265,
                                        "winLossRatio": 0.513889,
                                        "averageWn8": 1866.02,
                                        "averageExperience": 587.924,
                                        "averageDamage": 933.597,
                                        "averageKills": 0.770833,
                                        "averageDamageReceived": 961.778,
                                        "averageShots": 10.4722,
                                        "averageStunAssistedDamage": 0.0,
                                        "averageCapturePoints": 0.236111,
                                        "averageDroppedCapturePoints": 0.138889,
                                        "averageSpotting": 3.20139
                                    }
                                ],
                            "clan":
                                [],
                            "stronghold_defense":
                                [],
                            "company":
                                [],
                            "team":
                                [],
                            "stronghold_skirmish":
                                [],
                            "regular_team":
                                []
                        },
                        "3137":
                        {
                            "all":
                                [
                                    {
                                        "vehicleStatisticsSnapshotId": 33,
                                        "accountId": 1004866884,
                                        "vehicleId": 3137,
                                        "gameMode": "all",
                                        "createDate": "2022-09-07T16:35:17.060+0000",
                                        "totalBattles": 53,
                                        "survivedBattles": 10,
                                        "killDeathRatio": 1.46512,
                                        "hitMissRatio": 0.67515,
                                        "winLossRatio": 0.490566,
                                        "averageWn8": 2154.48,
                                        "averageExperience": 869.076,
                                        "averageDamage": 1766.21,
                                        "averageKills": 1.18868,
                                        "averageDamageReceived": 1291.19,
                                        "averageShots": 12.6038,
                                        "averageStunAssistedDamage": 0.0,
                                        "averageCapturePoints": 0.0,
                                        "averageDroppedCapturePoints": 0.54717,
                                        "averageSpotting": 0.867925
                                    }
                                ],
                            "clan":
                                [],
                            "stronghold_defense":
                                [],
                            "company":
                                [],
                            "team":
                                [],
                            "stronghold_skirmish":
                                [],
                            "regular_team":
                                []
                        },
                        "2625":
                        {
                            "all":
                                [
                                    {
                                        "vehicleStatisticsSnapshotId": 156,
                                        "accountId": 1004866884,
                                        "vehicleId": 2625,
                                        "gameMode": "all",
                                        "createDate": "2022-09-07T16:35:18.937+0000",
                                        "totalBattles": 97,
                                        "survivedBattles": 26,
                                        "killDeathRatio": 1.11268,
                                        "hitMissRatio": 0.672131,
                                        "winLossRatio": 0.556701,
                                        "averageWn8": 1593.37,
                                        "averageExperience": 503.021,
                                        "averageDamage": 834.68,
                                        "averageKills": 0.814433,
                                        "averageDamageReceived": 721.928,
                                        "averageShots": 6.91753,
                                        "averageStunAssistedDamage": 0.0,
                                        "averageCapturePoints": 0.216495,
                                        "averageDroppedCapturePoints": 0.0,
                                        "averageSpotting": 1.53608
                                    }
                                ],
                            "clan":
                                [],
                            "stronghold_defense":
                                [],
                            "company":
                                [],
                            "team":
                                [],
                            "stronghold_skirmish":
                                [],
                            "regular_team":
                                []
                        },
                        "6721":
                        {
                            "all":
                                [
                                    {
                                        "vehicleStatisticsSnapshotId": 60,
                                        "accountId": 1004866884,
                                        "vehicleId": 6721,
                                        "gameMode": "all",
                                        "createDate": "2022-09-07T16:35:17.549+0000",
                                        "totalBattles": 23,
                                        "survivedBattles": 7,
                                        "killDeathRatio": 1.375,
                                        "hitMissRatio": 0.684685,
                                        "winLossRatio": 0.608696,
                                        "averageWn8": 818.977,
                                        "averageExperience": 415.174,
                                        "averageDamage": 395.087,
                                        "averageKills": 0.956522,
                                        "averageDamageReceived": 519.87,
                                        "averageShots": 9.65217,
                                        "averageStunAssistedDamage": 0.0,
                                        "averageCapturePoints": 1.08696,
                                        "averageDroppedCapturePoints": 0.0,
                                        "averageSpotting": 1.08696
                                    }
                                ],
                            "clan":
                                [],
                            "stronghold_defense":
                                [],
                            "company":
                                [],
                            "team":
                                [],
                            "stronghold_skirmish":
                                [],
                            "regular_team":
                                []
                        },
                        "7745":
                        {
                            "all":
                                [],
                            "clan":
                                [],
                            "stronghold_defense":
                                [],
                            "company":
                                [],
                            "team":
                                [],
                            "stronghold_skirmish":
                                [],
                            "regular_team":
                                []
                        },
                        "16449":
                        {
                            "all":
                                [],
                            "clan":
                                [],
                            "stronghold_defense":
                                [],
                            "company":
                                [],
                            "team":
                                [],
                            "stronghold_skirmish":
                                [],
                            "regular_team":
                                []
                        },
                        "9793":
                        {
                            "all":
                                [
                                    {
                                        "vehicleStatisticsSnapshotId": 152,
                                        "accountId": 1004866884,
                                        "vehicleId": 9793,
                                        "gameMode": "all",
                                        "createDate": "2022-09-07T16:35:18.884+0000",
                                        "totalBattles": 14,
                                        "survivedBattles": 5,
                                        "killDeathRatio": 2.44444,
                                        "hitMissRatio": 0.617284,
                                        "winLossRatio": 0.571429,
                                        "averageWn8": 1393.77,
                                        "averageExperience": 435.071,
                                        "averageDamage": 421.286,
                                        "averageKills": 1.57143,
                                        "averageDamageReceived": 230.786,
                                        "averageShots": 5.78571,
                                        "averageStunAssistedDamage": 0.0,
                                        "averageCapturePoints": 0.714286,
                                        "averageDroppedCapturePoints": 0.0,
                                        "averageSpotting": 0.571429
                                    }
                                ],
                            "clan":
                                [],
                            "stronghold_defense":
                                [],
                            "company":
                                [],
                            "team":
                                [],
                            "stronghold_skirmish":
                                [],
                            "regular_team":
                                []
                        },
                        "7761":
                        {
                            "all":
                                [],
                            "clan":
                                [],
                            "stronghold_defense":
                                [],
                            "company":
                                [],
                            "team":
                                [],
                            "stronghold_skirmish":
                                [],
                            "regular_team":
                                []
                        },
                        "8785":
                        {
                            "all":
                                [
                                    {
                                        "vehicleStatisticsSnapshotId": 11,
                                        "accountId": 1004866884,
                                        "vehicleId": 8785,
                                        "gameMode": "all",
                                        "createDate": "2022-09-07T16:35:16.677+0000",
                                        "totalBattles": 19,
                                        "survivedBattles": 5,
                                        "killDeathRatio": 1.21429,
                                        "hitMissRatio": 0.608466,
                                        "winLossRatio": 0.578947,
                                        "averageWn8": 1746.38,
                                        "averageExperience": 591.684,
                                        "averageDamage": 649.895,
                                        "averageKills": 0.894737,
                                        "averageDamageReceived": 481.158,
                                        "averageShots": 19.8947,
                                        "averageStunAssistedDamage": 0.0,
                                        "averageCapturePoints": 0.157895,
                                        "averageDroppedCapturePoints": 0.0,
                                        "averageSpotting": 1.26316
                                    }
                                ],
                            "clan":
                                [],
                            "stronghold_defense":
                                [],
                            "company":
                                [],
                            "team":
                                [],
                            "stronghold_skirmish":
                                [],
                            "regular_team":
                                []
                        },
                        "14417":
                        {
                            "all":
                                [
                                    {
                                        "vehicleStatisticsSnapshotId": 153,
                                        "accountId": 1004866884,
                                        "vehicleId": 14417,
                                        "gameMode": "all",
                                        "createDate": "2022-09-07T16:35:18.899+0000",
                                        "totalBattles": 19,
                                        "survivedBattles": 3,
                                        "killDeathRatio": 1.5625,
                                        "hitMissRatio": 0.672566,
                                        "winLossRatio": 0.526316,
                                        "averageWn8": 1992.48,
                                        "averageExperience": 717.632,
                                        "averageDamage": 948.211,
                                        "averageKills": 1.31579,
                                        "averageDamageReceived": 705.737,
                                        "averageShots": 11.8947,
                                        "averageStunAssistedDamage": 0.0,
                                        "averageCapturePoints": 0.0,
                                        "averageDroppedCapturePoints": 0.0,
                                        "averageSpotting": 0.789474
                                    }
                                ],
                            "clan":
                                [],
                            "stronghold_defense":
                                [],
                            "company":
                                [],
                            "team":
                                [],
                            "stronghold_skirmish":
                                [],
                            "regular_team":
                                []
                        },
                        "10833":
                        {
                            "all":
                                [],
                            "clan":
                                [],
                            "stronghold_defense":
                                [],
                            "company":
                                [],
                            "team":
                                [],
                            "stronghold_skirmish":
                                [],
                            "regular_team":
                                []
                        },
                        "8273":
                        {
                            "all":
                                [],
                            "clan":
                                [],
                            "stronghold_defense":
                                [],
                            "company":
                                [],
                            "team":
                                [],
                            "stronghold_skirmish":
                                [],
                            "regular_team":
                                []
                        },
                        "2129":
                        {
                            "all":
                                [
                                    {
                                        "vehicleStatisticsSnapshotId": 132,
                                        "accountId": 1004866884,
                                        "vehicleId": 2129,
                                        "gameMode": "all",
                                        "createDate": "2022-09-07T16:35:18.623+0000",
                                        "totalBattles": 49,
                                        "survivedBattles": 9,
                                        "killDeathRatio": 1.0,
                                        "hitMissRatio": 0.649123,
                                        "winLossRatio": 0.530612,
                                        "averageWn8": 1057.44,
                                        "averageExperience": 308.245,
                                        "averageDamage": 357.204,
                                        "averageKills": 0.816327,
                                        "averageDamageReceived": 428.082,
                                        "averageShots": 12.7959,
                                        "averageStunAssistedDamage": 0.0,
                                        "averageCapturePoints": 0.653061,
                                        "averageDroppedCapturePoints": 0.163265,
                                        "averageSpotting": 1.7551
                                    }
                                ],
                            "clan":
                                [],
                            "stronghold_defense":
                                [],
                            "company":
                                [],
                            "team":
                                [],
                            "stronghold_skirmish":
                                [],
                            "regular_team":
                                []
                        },
                        "1617":
                        {
                            "all":
                                [],
                            "clan":
                                [],
                            "stronghold_defense":
                                [],
                            "company":
                                [],
                            "team":
                                [],
                            "stronghold_skirmish":
                                [],
                            "regular_team":
                                []
                        },
                        "1105":
                        {
                            "all":
                                [
                                    {
                                        "vehicleStatisticsSnapshotId": 133,
                                        "accountId": 1004866884,
                                        "vehicleId": 1105,
                                        "gameMode": "all",
                                        "createDate": "2022-09-07T16:35:18.636+0000",
                                        "totalBattles": 54,
                                        "survivedBattles": 10,
                                        "killDeathRatio": 1.18182,
                                        "hitMissRatio": 0.659236,
                                        "winLossRatio": 0.574074,
                                        "averageWn8": 1339.95,
                                        "averageExperience": 606.37,
                                        "averageDamage": 622.982,
                                        "averageKills": 0.962963,
                                        "averageDamageReceived": 674.593,
                                        "averageShots": 11.6296,
                                        "averageStunAssistedDamage": 0.0,
                                        "averageCapturePoints": 0.0,
                                        "averageDroppedCapturePoints": 0.0,
                                        "averageSpotting": 1.88889
                                    }
                                ],
                            "clan":
                                [],
                            "stronghold_defense":
                                [],
                            "company":
                                [],
                            "team":
                                [],
                            "stronghold_skirmish":
                                [
                                    {
                                        "vehicleStatisticsSnapshotId": 134,
                                        "accountId": 1004866884,
                                        "vehicleId": 1105,
                                        "gameMode": "stronghold_skirmish",
                                        "createDate": "2022-09-07T16:35:18.645+0000",
                                        "totalBattles": 41,
                                        "survivedBattles": 23,
                                        "killDeathRatio": 1.72222,
                                        "hitMissRatio": 0.700297,
                                        "winLossRatio": 0.780488,
                                        "averageWn8": 1213.46,
                                        "averageExperience": 438.073,
                                        "averageDamage": 580.585,
                                        "averageKills": 0.756098,
                                        "averageDamageReceived": 451.293,
                                        "averageShots": 8.21951,
                                        "averageStunAssistedDamage": 0.0,
                                        "averageCapturePoints": 3.36585,
                                        "averageDroppedCapturePoints": 0.292683,
                                        "averageSpotting": 1.21951
                                    }
                                ],
                            "regular_team":
                                []
                        },
                        "81":
                        {
                            "all":
                                [],
                            "clan":
                                [],
                            "stronghold_defense":
                                [],
                            "company":
                                [],
                            "team":
                                [],
                            "stronghold_skirmish":
                                [],
                            "regular_team":
                                []
                        },
                        "4689":
                        {
                            "all":
                                [
                                    {
                                        "vehicleStatisticsSnapshotId": 131,
                                        "accountId": 1004866884,
                                        "vehicleId": 4689,
                                        "gameMode": "all",
                                        "createDate": "2022-09-07T16:35:18.611+0000",
                                        "totalBattles": 26,
                                        "survivedBattles": 7,
                                        "killDeathRatio": 1.0,
                                        "hitMissRatio": 0.638686,
                                        "winLossRatio": 0.5,
                                        "averageWn8": 985.678,
                                        "averageExperience": 528.692,
                                        "averageDamage": 633.846,
                                        "averageKills": 0.730769,
                                        "averageDamageReceived": 843.038,
                                        "averageShots": 10.5385,
                                        "averageStunAssistedDamage": 0.0,
                                        "averageCapturePoints": 0.0,
                                        "averageDroppedCapturePoints": 0.0,
                                        "averageSpotting": 0.269231
                                    }
                                ],
                            "clan":
                                [],
                            "stronghold_defense":
                                [],
                            "company":
                                [],
                            "team":
                                [],
                            "stronghold_skirmish":
                                [],
                            "regular_team":
                                []
                        },
                        "2145":
                        {
                            "all":
                                [],
                            "clan":
                                [],
                            "stronghold_defense":
                                [],
                            "company":
                                [],
                            "team":
                                [],
                            "stronghold_skirmish":
                                [],
                            "regular_team":
                                []
                        },
                        "1121":
                        {
                            "all":
                                [
                                    {
                                        "vehicleStatisticsSnapshotId": 49,
                                        "accountId": 1004866884,
                                        "vehicleId": 1121,
                                        "gameMode": "all",
                                        "createDate": "2022-09-07T16:35:17.344+0000",
                                        "totalBattles": 84,
                                        "survivedBattles": 16,
                                        "killDeathRatio": 1.08824,
                                        "hitMissRatio": 0.619647,
                                        "winLossRatio": 0.369048,
                                        "averageWn8": 987.719,
                                        "averageExperience": 506.786,
                                        "averageDamage": 764.262,
                                        "averageKills": 0.880952,
                                        "averageDamageReceived": 1146.74,
                                        "averageShots": 14.1786,
                                        "averageStunAssistedDamage": 0.0,
                                        "averageCapturePoints": 0.785714,
                                        "averageDroppedCapturePoints": 0.0357143,
                                        "averageSpotting": 0.52381
                                    }
                                ],
                            "clan":
                                [],
                            "stronghold_defense":
                                [],
                            "company":
                                [],
                            "team":
                                [],
                            "stronghold_skirmish":
                                [],
                            "regular_team":
                                []
                        },
                        "4705":
                        {
                            "all":
                                [],
                            "clan":
                                [],
                            "stronghold_defense":
                                [],
                            "company":
                                [],
                            "team":
                                [],
                            "stronghold_skirmish":
                                [],
                            "regular_team":
                                []
                        },
                        "3681":
                        {
                            "all":
                                [
                                    {
                                        "vehicleStatisticsSnapshotId": 127,
                                        "accountId": 1004866884,
                                        "vehicleId": 3681,
                                        "gameMode": "all",
                                        "createDate": "2022-09-07T16:35:18.565+0000",
                                        "totalBattles": 11,
                                        "survivedBattles": 3,
                                        "killDeathRatio": 1.375,
                                        "hitMissRatio": 0.751773,
                                        "winLossRatio": 0.363636,
                                        "averageWn8": 1318.58,
                                        "averageExperience": 731.727,
                                        "averageDamage": 1865.73,
                                        "averageKills": 1.0,
                                        "averageDamageReceived": 1908.27,
                                        "averageShots": 12.8182,
                                        "averageStunAssistedDamage": 0.0,
                                        "averageCapturePoints": 0.0,
                                        "averageDroppedCapturePoints": 0.0,
                                        "averageSpotting": 1.0
                                    }
                                ],
                            "clan":
                                [],
                            "stronghold_defense":
                                [],
                            "company":
                                [],
                            "team":
                                [],
                            "stronghold_skirmish":
                                [],
                            "regular_team":
                                []
                        },
                        "1633":
                        {
                            "all":
                                [],
                            "clan":
                                [],
                            "stronghold_defense":
                                [],
                            "company":
                                [],
                            "team":
                                [],
                            "stronghold_skirmish":
                                [],
                            "regular_team":
                                []
                        },
                        "2657":
                        {
                            "all":
                                [
                                    {
                                        "vehicleStatisticsSnapshotId": 112,
                                        "accountId": 1004866884,
                                        "vehicleId": 2657,
                                        "gameMode": "all",
                                        "createDate": "2022-09-07T16:35:18.369+0000",
                                        "totalBattles": 127,
                                        "survivedBattles": 33,
                                        "killDeathRatio": 1.45745,
                                        "hitMissRatio": 0.695373,
                                        "winLossRatio": 0.527559,
                                        "averageWn8": 2035.9,
                                        "averageExperience": 679.134,
                                        "averageDamage": 1358.69,
                                        "averageKills": 1.07874,
                                        "averageDamageReceived": 1339.12,
                                        "averageShots": 12.252,
                                        "averageStunAssistedDamage": 0.0,
                                        "averageCapturePoints": 0.409449,
                                        "averageDroppedCapturePoints": 0.015748,
                                        "averageSpotting": 1.22047
                                    }
                                ],
                            "clan":
                                [],
                            "stronghold_defense":
                                [],
                            "company":
                                [],
                            "team":
                                [],
                            "stronghold_skirmish":
                                [],
                            "regular_team":
                                []
                        },
                        "5729":
                        {
                            "all":
                                [],
                            "clan":
                                [],
                            "stronghold_defense":
                                [],
                            "company":
                                [],
                            "team":
                                [],
                            "stronghold_skirmish":
                                [],
                            "regular_team":
                                []
                        },
                        "1137":
                        {
                            "all":
                                [
                                    {
                                        "vehicleStatisticsSnapshotId": 75,
                                        "accountId": 1004866884,
                                        "vehicleId": 1137,
                                        "gameMode": "all",
                                        "createDate": "2022-09-07T16:35:17.786+0000",
                                        "totalBattles": 14,
                                        "survivedBattles": 5,
                                        "killDeathRatio": 1.44444,
                                        "hitMissRatio": 0.695238,
                                        "winLossRatio": 0.571429,
                                        "averageWn8": 3006.71,
                                        "averageExperience": 674.571,
                                        "averageDamage": 897.071,
                                        "averageKills": 0.928571,
                                        "averageDamageReceived": 474.643,
                                        "averageShots": 15.0,
                                        "averageStunAssistedDamage": 0.0,
                                        "averageCapturePoints": 0.0,
                                        "averageDroppedCapturePoints": 3.07143,
                                        "averageSpotting": 1.21429
                                    }
                                ],
                            "clan":
                                [],
                            "stronghold_defense":
                                [],
                            "company":
                                [],
                            "team":
                                [],
                            "stronghold_skirmish":
                                [],
                            "regular_team":
                                []
                        },
                        "625":
                        {
                            "all":
                                [],
                            "clan":
                                [],
                            "stronghold_defense":
                                [],
                            "company":
                                [],
                            "team":
                                [],
                            "stronghold_skirmish":
                                [],
                            "regular_team":
                                []
                        },
                        "3697":
                        {
                            "all":
                                [
                                    {
                                        "vehicleStatisticsSnapshotId": 111,
                                        "accountId": 1004866884,
                                        "vehicleId": 3697,
                                        "gameMode": "all",
                                        "createDate": "2022-09-07T16:35:18.342+0000",
                                        "totalBattles": 13,
                                        "survivedBattles": 4,
                                        "killDeathRatio": 1.33333,
                                        "hitMissRatio": 0.69863,
                                        "winLossRatio": 0.461538,
                                        "averageWn8": 1823.46,
                                        "averageExperience": 819.615,
                                        "averageDamage": 1434.46,
                                        "averageKills": 0.923077,
                                        "averageDamageReceived": 1126.54,
                                        "averageShots": 11.2308,
                                        "averageStunAssistedDamage": 0.0,
                                        "averageCapturePoints": 0.0,
                                        "averageDroppedCapturePoints": 0.0,
                                        "averageSpotting": 0.846154
                                    }
                                ],
                            "clan":
                                [],
                            "stronghold_defense":
                                [],
                            "company":
                                [],
                            "team":
                                [],
                            "stronghold_skirmish":
                                [],
                            "regular_team":
                                []
                        },
                        "113":
                        {
                            "all":
                                [],
                            "clan":
                                [],
                            "stronghold_defense":
                                [],
                            "company":
                                [],
                            "team":
                                [],
                            "stronghold_skirmish":
                                [],
                            "regular_team":
                                []
                        },
                        "4225":
                        {
                            "all":
                                [
                                    {
                                        "vehicleStatisticsSnapshotId": 55,
                                        "accountId": 1004866884,
                                        "vehicleId": 4225,
                                        "gameMode": "all",
                                        "createDate": "2022-09-07T16:35:17.442+0000",
                                        "totalBattles": 67,
                                        "survivedBattles": 24,
                                        "killDeathRatio": 1.62791,
                                        "hitMissRatio": 0.702572,
                                        "winLossRatio": 0.552239,
                                        "averageWn8": 1703.32,
                                        "averageExperience": 716.194,
                                        "averageDamage": 1407.12,
                                        "averageKills": 1.04478,
                                        "averageDamageReceived": 793.896,
                                        "averageShots": 9.28358,
                                        "averageStunAssistedDamage": 0.0,
                                        "averageCapturePoints": 0.0,
                                        "averageDroppedCapturePoints": 0.238806,
                                        "averageSpotting": 0.567164
                                    }
                                ],
                            "clan":
                                [],
                            "stronghold_defense":
                                [],
                            "company":
                                [],
                            "team":
                                [],
                            "stronghold_skirmish":
                                [],
                            "regular_team":
                                []
                        },
                        "3713":
                        {
                            "all":
                                [
                                    {
                                        "vehicleStatisticsSnapshotId": 3,
                                        "accountId": 1004866884,
                                        "vehicleId": 3713,
                                        "gameMode": "all",
                                        "createDate": "2022-09-07T16:35:16.489+0000",
                                        "totalBattles": 55,
                                        "survivedBattles": 9,
                                        "killDeathRatio": 0.652174,
                                        "hitMissRatio": 0.59587,
                                        "winLossRatio": 0.454545,
                                        "averageWn8": 877.078,
                                        "averageExperience": 388.109,
                                        "averageDamage": 606.582,
                                        "averageKills": 0.545455,
                                        "averageDamageReceived": 520.418,
                                        "averageShots": 6.16364,
                                        "averageStunAssistedDamage": 0.0,
                                        "averageCapturePoints": 0.927273,
                                        "averageDroppedCapturePoints": 0.0181818,
                                        "averageSpotting": 0.254545
                                    }
                                ],
                            "clan":
                                [],
                            "stronghold_defense":
                                [],
                            "company":
                                [],
                            "team":
                                [],
                            "stronghold_skirmish":
                                [],
                            "regular_team":
                                []
                        },
                        "52865":
                        {
                            "all":
                                [
                                    {
                                        "vehicleStatisticsSnapshotId": 7,
                                        "accountId": 1004866884,
                                        "vehicleId": 52865,
                                        "gameMode": "all",
                                        "createDate": "2022-09-07T16:35:16.585+0000",
                                        "totalBattles": 44,
                                        "survivedBattles": 17,
                                        "killDeathRatio": 1.7037,
                                        "hitMissRatio": 0.786813,
                                        "winLossRatio": 0.613636,
                                        "averageWn8": 2416.76,
                                        "averageExperience": 935.136,
                                        "averageDamage": 1919.32,
                                        "averageKills": 1.04545,
                                        "averageDamageReceived": 1223.57,
                                        "averageShots": 10.3409,
                                        "averageStunAssistedDamage": 0.0,
                                        "averageCapturePoints": 1.36364,
                                        "averageDroppedCapturePoints": 0.704545,
                                        "averageSpotting": 1.22727
                                    }
                                ],
                            "clan":
                                [],
                            "stronghold_defense":
                                [],
                            "company":
                                [],
                            "team":
                                [],
                            "stronghold_skirmish":
                                [],
                            "regular_team":
                                []
                        },
                        "1153":
                        {
                            "all":
                                [
                                    {
                                        "vehicleStatisticsSnapshotId": 32,
                                        "accountId": 1004866884,
                                        "vehicleId": 1153,
                                        "gameMode": "all",
                                        "createDate": "2022-09-07T16:35:17.025+0000",
                                        "totalBattles": 20,
                                        "survivedBattles": 2,
                                        "killDeathRatio": 0.944444,
                                        "hitMissRatio": 0.602484,
                                        "winLossRatio": 0.5,
                                        "averageWn8": 1590.21,
                                        "averageExperience": 389.3,
                                        "averageDamage": 541.5,
                                        "averageKills": 0.85,
                                        "averageDamageReceived": 414.65,
                                        "averageShots": 8.05,
                                        "averageStunAssistedDamage": 0.0,
                                        "averageCapturePoints": 0.0,
                                        "averageDroppedCapturePoints": 2.2,
                                        "averageSpotting": 0.95
                                    }
                                ],
                            "clan":
                                [],
                            "stronghold_defense":
                                [],
                            "company":
                                [],
                            "team":
                                [],
                            "stronghold_skirmish":
                                [],
                            "regular_team":
                                []
                        },
                        "1665":
                        {
                            "all":
                                [
                                    {
                                        "vehicleStatisticsSnapshotId": 45,
                                        "accountId": 1004866884,
                                        "vehicleId": 1665,
                                        "gameMode": "all",
                                        "createDate": "2022-09-07T16:35:17.281+0000",
                                        "totalBattles": 64,
                                        "survivedBattles": 15,
                                        "killDeathRatio": 1.20408,
                                        "hitMissRatio": 0.71875,
                                        "winLossRatio": 0.5,
                                        "averageWn8": 2038.51,
                                        "averageExperience": 782.672,
                                        "averageDamage": 1193.19,
                                        "averageKills": 0.921875,
                                        "averageDamageReceived": 977.688,
                                        "averageShots": 9.0,
                                        "averageStunAssistedDamage": 0.0,
                                        "averageCapturePoints": 1.5625,
                                        "averageDroppedCapturePoints": 0.046875,
                                        "averageSpotting": 2.10938
                                    }
                                ],
                            "clan":
                                [],
                            "stronghold_defense":
                                [],
                            "company":
                                [],
                            "team":
                                [],
                            "stronghold_skirmish":
                                [],
                            "regular_team":
                                []
                        },
                        "2705":
                        {
                            "all":
                                [
                                    {
                                        "vehicleStatisticsSnapshotId": 30,
                                        "accountId": 1004866884,
                                        "vehicleId": 2705,
                                        "gameMode": "all",
                                        "createDate": "2022-09-07T16:35:17.000+0000",
                                        "totalBattles": 92,
                                        "survivedBattles": 23,
                                        "killDeathRatio": 1.46377,
                                        "hitMissRatio": 0.722679,
                                        "winLossRatio": 0.586957,
                                        "averageWn8": 2042.04,
                                        "averageExperience": 645.913,
                                        "averageDamage": 1342.33,
                                        "averageKills": 1.09783,
                                        "averageDamageReceived": 1077.78,
                                        "averageShots": 9.25,
                                        "averageStunAssistedDamage": 0.0,
                                        "averageCapturePoints": 0.586957,
                                        "averageDroppedCapturePoints": 0.0,
                                        "averageSpotting": 1.1087
                                    }
                                ],
                            "clan":
                                [],
                            "stronghold_defense":
                                [],
                            "company":
                                [],
                            "team":
                                [],
                            "stronghold_skirmish":
                                [],
                            "regular_team":
                                []
                        },
                        "3217":
                        {
                            "all":
                                [
                                    {
                                        "vehicleStatisticsSnapshotId": 78,
                                        "accountId": 1004866884,
                                        "vehicleId": 3217,
                                        "gameMode": "all",
                                        "createDate": "2022-09-07T16:35:17.833+0000",
                                        "totalBattles": 66,
                                        "survivedBattles": 16,
                                        "killDeathRatio": 1.26,
                                        "hitMissRatio": 0.742424,
                                        "winLossRatio": 0.515152,
                                        "averageWn8": 1824.81,
                                        "averageExperience": 837.455,
                                        "averageDamage": 1868.67,
                                        "averageKills": 0.954545,
                                        "averageDamageReceived": 1810.5,
                                        "averageShots": 8.0,
                                        "averageStunAssistedDamage": 0.0,
                                        "averageCapturePoints": 0.454545,
                                        "averageDroppedCapturePoints": 0.530303,
                                        "averageSpotting": 0.848485
                                    }
                                ],
                            "clan":
                                [],
                            "stronghold_defense":
                                [],
                            "company":
                                [],
                            "team":
                                [],
                            "stronghold_skirmish":
                                [],
                            "regular_team":
                                []
                        },
                        "2193":
                        {
                            "all":
                                [
                                    {
                                        "vehicleStatisticsSnapshotId": 98,
                                        "accountId": 1004866884,
                                        "vehicleId": 2193,
                                        "gameMode": "all",
                                        "createDate": "2022-09-07T16:35:18.174+0000",
                                        "totalBattles": 40,
                                        "survivedBattles": 8,
                                        "killDeathRatio": 1.0,
                                        "hitMissRatio": 0.56213,
                                        "winLossRatio": 0.575,
                                        "averageWn8": 1221.89,
                                        "averageExperience": 326.8,
                                        "averageDamage": 442.75,
                                        "averageKills": 0.8,
                                        "averageDamageReceived": 419.1,
                                        "averageShots": 8.45,
                                        "averageStunAssistedDamage": 0.0,
                                        "averageCapturePoints": 0.375,
                                        "averageDroppedCapturePoints": 0.8,
                                        "averageSpotting": 0.8
                                    }
                                ],
                            "clan":
                                [],
                            "stronghold_defense":
                                [],
                            "company":
                                [],
                            "team":
                                [],
                            "stronghold_skirmish":
                                [],
                            "regular_team":
                                []
                        },
                        "3729":
                        {
                            "all":
                                [],
                            "clan":
                                [],
                            "stronghold_defense":
                                [],
                            "company":
                                [],
                            "team":
                                [],
                            "stronghold_skirmish":
                                [],
                            "regular_team":
                                []
                        },
                        "1681":
                        {
                            "all":
                                [],
                            "clan":
                                [],
                            "stronghold_defense":
                                [],
                            "company":
                                [],
                            "team":
                                [],
                            "stronghold_skirmish":
                                [],
                            "regular_team":
                                []
                        },
                        "1697":
                        {
                            "all":
                                [
                                    {
                                        "vehicleStatisticsSnapshotId": 16,
                                        "accountId": 1004866884,
                                        "vehicleId": 1697,
                                        "gameMode": "all",
                                        "createDate": "2022-09-07T16:35:16.758+0000",
                                        "totalBattles": 51,
                                        "survivedBattles": 15,
                                        "killDeathRatio": 2.05556,
                                        "hitMissRatio": 0.658385,
                                        "winLossRatio": 0.666667,
                                        "averageWn8": 2438.59,
                                        "averageExperience": 543.431,
                                        "averageDamage": 988.608,
                                        "averageKills": 1.45098,
                                        "averageDamageReceived": 649.706,
                                        "averageShots": 9.47059,
                                        "averageStunAssistedDamage": 0.0,
                                        "averageCapturePoints": 0.0,
                                        "averageDroppedCapturePoints": 0.0,
                                        "averageSpotting": 1.54902
                                    }
                                ],
                            "clan":
                                [],
                            "stronghold_defense":
                                [],
                            "company":
                                [],
                            "team":
                                [],
                            "stronghold_skirmish":
                                [],
                            "regular_team":
                                []
                        },
                        "51361":
                        {
                            "all":
                                [
                                    {
                                        "vehicleStatisticsSnapshotId": 61,
                                        "accountId": 1004866884,
                                        "vehicleId": 51361,
                                        "gameMode": "all",
                                        "createDate": "2022-09-07T16:35:17.565+0000",
                                        "totalBattles": 16,
                                        "survivedBattles": 7,
                                        "killDeathRatio": 2.22222,
                                        "hitMissRatio": 0.755869,
                                        "winLossRatio": 0.75,
                                        "averageWn8": 2239.6,
                                        "averageExperience": 1111.0,
                                        "averageDamage": 1681.12,
                                        "averageKills": 1.25,
                                        "averageDamageReceived": 1259.12,
                                        "averageShots": 13.3125,
                                        "averageStunAssistedDamage": 0.0,
                                        "averageCapturePoints": 0.0,
                                        "averageDroppedCapturePoints": 0.0,
                                        "averageSpotting": 1.625
                                    }
                                ],
                            "clan":
                                [],
                            "stronghold_defense":
                                [],
                            "company":
                                [],
                            "team":
                                [],
                            "stronghold_skirmish":
                                [],
                            "regular_team":
                                []
                        },
                        "2209":
                        {
                            "all":
                                [
                                    {
                                        "vehicleStatisticsSnapshotId": 110,
                                        "accountId": 1004866884,
                                        "vehicleId": 2209,
                                        "gameMode": "all",
                                        "createDate": "2022-09-07T16:35:18.331+0000",
                                        "totalBattles": 47,
                                        "survivedBattles": 12,
                                        "killDeathRatio": 1.28571,
                                        "hitMissRatio": 0.768501,
                                        "winLossRatio": 0.531915,
                                        "averageWn8": 2332.66,
                                        "averageExperience": 897.638,
                                        "averageDamage": 1588.09,
                                        "averageKills": 0.957447,
                                        "averageDamageReceived": 1270.49,
                                        "averageShots": 11.2128,
                                        "averageStunAssistedDamage": 0.0,
                                        "averageCapturePoints": 0.0,
                                        "averageDroppedCapturePoints": 1.29787,
                                        "averageSpotting": 1.53191
                                    }
                                ],
                            "clan":
                                [],
                            "stronghold_defense":
                                [],
                            "company":
                                [],
                            "team":
                                [],
                            "stronghold_skirmish":
                                [],
                            "regular_team":
                                []
                        },
                        "1185":
                        {
                            "all":
                                [],
                            "clan":
                                [],
                            "stronghold_defense":
                                [],
                            "company":
                                [],
                            "team":
                                [],
                            "stronghold_skirmish":
                                [],
                            "regular_team":
                                []
                        },
                        "6913":
                        {
                            "all":
                                [
                                    {
                                        "vehicleStatisticsSnapshotId": 35,
                                        "accountId": 1004866884,
                                        "vehicleId": 6913,
                                        "gameMode": "all",
                                        "createDate": "2022-09-07T16:35:17.093+0000",
                                        "totalBattles": 48,
                                        "survivedBattles": 5,
                                        "killDeathRatio": 1.27907,
                                        "hitMissRatio": 0.683849,
                                        "winLossRatio": 0.5625,
                                        "averageWn8": 1237.42,
                                        "averageExperience": 296.292,
                                        "averageDamage": 417.042,
                                        "averageKills": 1.14583,
                                        "averageDamageReceived": 242.479,
                                        "averageShots": 6.0625,
                                        "averageStunAssistedDamage": 0.0,
                                        "averageCapturePoints": 0.0,
                                        "averageDroppedCapturePoints": 1.9375,
                                        "averageSpotting": 1.0
                                    }
                                ],
                            "clan":
                                [],
                            "stronghold_defense":
                                [],
                            "company":
                                [],
                            "team":
                                [],
                            "stronghold_skirmish":
                                [],
                            "regular_team":
                                []
                        },
                        "5377":
                        {
                            "all":
                                [
                                    {
                                        "vehicleStatisticsSnapshotId": 18,
                                        "accountId": 1004866884,
                                        "vehicleId": 5377,
                                        "gameMode": "all",
                                        "createDate": "2022-09-07T16:35:16.789+0000",
                                        "totalBattles": 176,
                                        "survivedBattles": 63,
                                        "killDeathRatio": 2.06195,
                                        "hitMissRatio": 0.797558,
                                        "winLossRatio": 0.607955,
                                        "averageWn8": 2698.81,
                                        "averageExperience": 761.989,
                                        "averageDamage": 1813.38,
                                        "averageKills": 1.32386,
                                        "averageDamageReceived": 1262.0,
                                        "averageShots": 8.84091,
                                        "averageStunAssistedDamage": 0.0,
                                        "averageCapturePoints": 0.482955,
                                        "averageDroppedCapturePoints": 0.863636,
                                        "averageSpotting": 1.13068
                                    }
                                ],
                            "clan":
                                [],
                            "stronghold_defense":
                                [],
                            "company":
                                [],
                            "team":
                                [],
                            "stronghold_skirmish":
                                [],
                            "regular_team":
                                []
                        },
                        "7425":
                        {
                            "all":
                                [
                                    {
                                        "vehicleStatisticsSnapshotId": 89,
                                        "accountId": 1004866884,
                                        "vehicleId": 7425,
                                        "gameMode": "all",
                                        "createDate": "2022-09-07T16:35:18.034+0000",
                                        "totalBattles": 222,
                                        "survivedBattles": 73,
                                        "killDeathRatio": 1.95302,
                                        "hitMissRatio": 0.760538,
                                        "winLossRatio": 0.536036,
                                        "averageWn8": 2081.32,
                                        "averageExperience": 743.099,
                                        "averageDamage": 1730.93,
                                        "averageKills": 1.31081,
                                        "averageDamageReceived": 813.734,
                                        "averageShots": 5.02252,
                                        "averageStunAssistedDamage": 0.0,
                                        "averageCapturePoints": 1.26577,
                                        "averageDroppedCapturePoints": 0.0585586,
                                        "averageSpotting": 0.59009
                                    }
                                ],
                            "clan":
                                [],
                            "stronghold_defense":
                                [],
                            "company":
                                [],
                            "team":
                                [],
                            "stronghold_skirmish":
                                [],
                            "regular_team":
                                []
                        },
                        "7937":
                        {
                            "all":
                                [
                                    {
                                        "vehicleStatisticsSnapshotId": 140,
                                        "accountId": 1004866884,
                                        "vehicleId": 7937,
                                        "gameMode": "all",
                                        "createDate": "2022-09-07T16:35:18.734+0000",
                                        "totalBattles": 254,
                                        "survivedBattles": 83,
                                        "killDeathRatio": 1.89474,
                                        "hitMissRatio": 0.725855,
                                        "winLossRatio": 0.527559,
                                        "averageWn8": 2299.86,
                                        "averageExperience": 667.713,
                                        "averageDamage": 1773.87,
                                        "averageKills": 1.27559,
                                        "averageDamageReceived": 1413.42,
                                        "averageShots": 11.8622,
                                        "averageStunAssistedDamage": 0.0,
                                        "averageCapturePoints": 0.011811,
                                        "averageDroppedCapturePoints": 0.799213,
                                        "averageSpotting": 1.79528
                                    }
                                ],
                            "clan":
                                [],
                            "stronghold_defense":
                                [],
                            "company":
                                [],
                            "team":
                                [],
                            "stronghold_skirmish":
                                [],
                            "regular_team":
                                []
                        },
                        "6401":
                        {
                            "all":
                                [
                                    {
                                        "vehicleStatisticsSnapshotId": 124,
                                        "accountId": 1004866884,
                                        "vehicleId": 6401,
                                        "gameMode": "all",
                                        "createDate": "2022-09-07T16:35:18.517+0000",
                                        "totalBattles": 26,
                                        "survivedBattles": 8,
                                        "killDeathRatio": 1.11111,
                                        "hitMissRatio": 0.597561,
                                        "winLossRatio": 0.538462,
                                        "averageWn8": 575.88,
                                        "averageExperience": 210.923,
                                        "averageDamage": 203.423,
                                        "averageKills": 0.769231,
                                        "averageDamageReceived": 125.385,
                                        "averageShots": 6.30769,
                                        "averageStunAssistedDamage": 0.0,
                                        "averageCapturePoints": 7.34615,
                                        "averageDroppedCapturePoints": 0.0769231,
                                        "averageSpotting": 0.807692
                                    }
                                ],
                            "clan":
                                [],
                            "stronghold_defense":
                                [],
                            "company":
                                [],
                            "team":
                                [],
                            "stronghold_skirmish":
                                [],
                            "regular_team":
                                []
                        },
                        "5889":
                        {
                            "all":
                                [
                                    {
                                        "vehicleStatisticsSnapshotId": 149,
                                        "accountId": 1004866884,
                                        "vehicleId": 5889,
                                        "gameMode": "all",
                                        "createDate": "2022-09-07T16:35:18.844+0000",
                                        "totalBattles": 68,
                                        "survivedBattles": 22,
                                        "killDeathRatio": 1.78261,
                                        "hitMissRatio": 0.711504,
                                        "winLossRatio": 0.588235,
                                        "averageWn8": 2112.06,
                                        "averageExperience": 832.691,
                                        "averageDamage": 1342.81,
                                        "averageKills": 1.20588,
                                        "averageDamageReceived": 1161.75,
                                        "averageShots": 8.30882,
                                        "averageStunAssistedDamage": 0.0,
                                        "averageCapturePoints": 3.26471,
                                        "averageDroppedCapturePoints": 0.0,
                                        "averageSpotting": 1.07353
                                    }
                                ],
                            "clan":
                                [],
                            "stronghold_defense":
                                [],
                            "company":
                                [],
                            "team":
                                [],
                            "stronghold_skirmish":
                                [],
                            "regular_team":
                                []
                        },
                        "4865":
                        {
                            "all":
                                [],
                            "clan":
                                [],
                            "stronghold_defense":
                                [],
                            "company":
                                [],
                            "team":
                                [],
                            "stronghold_skirmish":
                                [],
                            "regular_team":
                                []
                        },
                        "4353":
                        {
                            "all":
                                [
                                    {
                                        "vehicleStatisticsSnapshotId": 83,
                                        "accountId": 1004866884,
                                        "vehicleId": 4353,
                                        "gameMode": "all",
                                        "createDate": "2022-09-07T16:35:17.935+0000",
                                        "totalBattles": 168,
                                        "survivedBattles": 66,
                                        "killDeathRatio": 2.09804,
                                        "hitMissRatio": 0.719775,
                                        "winLossRatio": 0.684524,
                                        "averageWn8": 2515.68,
                                        "averageExperience": 748.006,
                                        "averageDamage": 1342.46,
                                        "averageKills": 1.27381,
                                        "averageDamageReceived": 1075.95,
                                        "averageShots": 11.619,
                                        "averageStunAssistedDamage": 0.0,
                                        "averageCapturePoints": 0.625,
                                        "averageDroppedCapturePoints": 1.20238,
                                        "averageSpotting": 1.7381
                                    }
                                ],
                            "clan":
                                [],
                            "stronghold_defense":
                                [],
                            "company":
                                [],
                            "team":
                                [],
                            "stronghold_skirmish":
                                [],
                            "regular_team":
                                []
                        },
                        "19713":
                        {
                            "all":
                                [
                                    {
                                        "vehicleStatisticsSnapshotId": 4,
                                        "accountId": 1004866884,
                                        "vehicleId": 19713,
                                        "gameMode": "all",
                                        "createDate": "2022-09-07T16:35:16.508+0000",
                                        "totalBattles": 176,
                                        "survivedBattles": 60,
                                        "killDeathRatio": 1.61207,
                                        "hitMissRatio": 0.754167,
                                        "winLossRatio": 0.488636,
                                        "averageWn8": 1978.1,
                                        "averageExperience": 614.943,
                                        "averageDamage": 1842.78,
                                        "averageKills": 1.0625,
                                        "averageDamageReceived": 1632.51,
                                        "averageShots": 9.54545,
                                        "averageStunAssistedDamage": 0.0,
                                        "averageCapturePoints": 0.414773,
                                        "averageDroppedCapturePoints": 0.920455,
                                        "averageSpotting": 1.05682
                                    }
                                ],
                            "clan":
                                [],
                            "stronghold_defense":
                                [],
                            "company":
                                [],
                            "team":
                                [],
                            "stronghold_skirmish":
                                [],
                            "regular_team":
                                []
                        },
                        "16641":
                        {
                            "all":
                                [
                                    {
                                        "vehicleStatisticsSnapshotId": 93,
                                        "accountId": 1004866884,
                                        "vehicleId": 16641,
                                        "gameMode": "all",
                                        "createDate": "2022-09-07T16:35:18.111+0000",
                                        "totalBattles": 29,
                                        "survivedBattles": 7,
                                        "killDeathRatio": 1.31818,
                                        "hitMissRatio": 0.649351,
                                        "winLossRatio": 0.586207,
                                        "averageWn8": 2660.81,
                                        "averageExperience": 679.172,
                                        "averageDamage": 692.621,
                                        "averageKills": 1.0,
                                        "averageDamageReceived": 626.379,
                                        "averageShots": 13.2759,
                                        "averageStunAssistedDamage": 0.0,
                                        "averageCapturePoints": 1.58621,
                                        "averageDroppedCapturePoints": 3.44828,
                                        "averageSpotting": 2.13793
                                    }
                                ],
                            "clan":
                                [],
                            "stronghold_defense":
                                [],
                            "company":
                                [],
                            "team":
                                [],
                            "stronghold_skirmish":
                                [],
                            "regular_team":
                                []
                        },
                        "9473":
                        {
                            "all":
                                [],
                            "clan":
                                [],
                            "stronghold_defense":
                                [],
                            "company":
                                [],
                            "team":
                                [],
                            "stronghold_skirmish":
                                [],
                            "regular_team":
                                []
                        },
                        "44289":
                        {
                            "all":
                                [],
                            "clan":
                                [],
                            "stronghold_defense":
                                [],
                            "company":
                                [],
                            "team":
                                [],
                            "stronghold_skirmish":
                                [],
                            "regular_team":
                                []
                        },
                        "58113":
                        {
                            "all":
                                [],
                            "clan":
                                [],
                            "stronghold_defense":
                                [],
                            "company":
                                [],
                            "team":
                                [],
                            "stronghold_skirmish":
                                [],
                            "regular_team":
                                []
                        },
                        "56577":
                        {
                            "all":
                                [],
                            "clan":
                                [],
                            "stronghold_defense":
                                [],
                            "company":
                                [],
                            "team":
                                [],
                            "stronghold_skirmish":
                                [],
                            "regular_team":
                                []
                        },
                        "3329":
                        {
                            "all":
                                [],
                            "clan":
                                [],
                            "stronghold_defense":
                                [],
                            "company":
                                [],
                            "team":
                                [],
                            "stronghold_skirmish":
                                [],
                            "regular_team":
                                []
                        },
                        "2305":
                        {
                            "all":
                                [
                                    {
                                        "vehicleStatisticsSnapshotId": 62,
                                        "accountId": 1004866884,
                                        "vehicleId": 2305,
                                        "gameMode": "all",
                                        "createDate": "2022-09-07T16:35:17.593+0000",
                                        "totalBattles": 140,
                                        "survivedBattles": 55,
                                        "killDeathRatio": 1.87059,
                                        "hitMissRatio": 0.739726,
                                        "winLossRatio": 0.592857,
                                        "averageWn8": 1923.38,
                                        "averageExperience": 603.929,
                                        "averageDamage": 1172.91,
                                        "averageKills": 1.13571,
                                        "averageDamageReceived": 685.586,
                                        "averageShots": 5.21429,
                                        "averageStunAssistedDamage": 0.0,
                                        "averageCapturePoints": 0.964286,
                                        "averageDroppedCapturePoints": 0.442857,
                                        "averageSpotting": 0.542857
                                    }
                                ],
                            "clan":
                                [],
                            "stronghold_defense":
                                [],
                            "company":
                                [],
                            "team":
                                [],
                            "stronghold_skirmish":
                                [],
                            "regular_team":
                                []
                        },
                        "257":
                        {
                            "all":
                                [
                                    {
                                        "vehicleStatisticsSnapshotId": 104,
                                        "accountId": 1004866884,
                                        "vehicleId": 257,
                                        "gameMode": "all",
                                        "createDate": "2022-09-07T16:35:18.255+0000",
                                        "totalBattles": 152,
                                        "survivedBattles": 30,
                                        "killDeathRatio": 1.27049,
                                        "hitMissRatio": 0.749744,
                                        "winLossRatio": 0.480263,
                                        "averageWn8": 1334.14,
                                        "averageExperience": 307.816,
                                        "averageDamage": 553.322,
                                        "averageKills": 1.01974,
                                        "averageDamageReceived": 307.934,
                                        "averageShots": 6.41447,
                                        "averageStunAssistedDamage": 0.0,
                                        "averageCapturePoints": 1.05921,
                                        "averageDroppedCapturePoints": 0.0526316,
                                        "averageSpotting": 0.881579
                                    }
                                ],
                            "clan":
                                [],
                            "stronghold_defense":
                                [],
                            "company":
                                [],
                            "team":
                                [],
                            "stronghold_skirmish":
                                [],
                            "regular_team":
                                []
                        },
                        "9985":
                        {
                            "all":
                                [],
                            "clan":
                                [],
                            "stronghold_defense":
                                [],
                            "company":
                                [],
                            "team":
                                [],
                            "stronghold_skirmish":
                                [],
                            "regular_team":
                                []
                        },
                        "11009":
                        {
                            "all":
                                [
                                    {
                                        "vehicleStatisticsSnapshotId": 85,
                                        "accountId": 1004866884,
                                        "vehicleId": 11009,
                                        "gameMode": "all",
                                        "createDate": "2022-09-07T16:35:17.976+0000",
                                        "totalBattles": 113,
                                        "survivedBattles": 37,
                                        "killDeathRatio": 1.31579,
                                        "hitMissRatio": 0.762637,
                                        "winLossRatio": 0.530973,
                                        "averageWn8": 1678.01,
                                        "averageExperience": 626.274,
                                        "averageDamage": 1307.93,
                                        "averageKills": 0.884956,
                                        "averageDamageReceived": 1363.8,
                                        "averageShots": 8.0531,
                                        "averageStunAssistedDamage": 0.0,
                                        "averageCapturePoints": 2.0885,
                                        "averageDroppedCapturePoints": 0.221239,
                                        "averageSpotting": 0.849558
                                    }
                                ],
                            "clan":
                                [],
                            "stronghold_defense":
                                [],
                            "company":
                                [],
                            "team":
                                [],
                            "stronghold_skirmish":
                                [],
                            "regular_team":
                                []
                        },
                        "12545":
                        {
                            "all":
                                [],
                            "clan":
                                [],
                            "stronghold_defense":
                                [],
                            "company":
                                [],
                            "team":
                                [],
                            "stronghold_skirmish":
                                [],
                            "regular_team":
                                []
                        },
                        "11521":
                        {
                            "all":
                                [
                                    {
                                        "vehicleStatisticsSnapshotId": 146,
                                        "accountId": 1004866884,
                                        "vehicleId": 11521,
                                        "gameMode": "all",
                                        "createDate": "2022-09-07T16:35:18.811+0000",
                                        "totalBattles": 159,
                                        "survivedBattles": 33,
                                        "killDeathRatio": 1.21429,
                                        "hitMissRatio": 0.73311,
                                        "winLossRatio": 0.597484,
                                        "averageWn8": 2033.66,
                                        "averageExperience": 704.031,
                                        "averageDamage": 1826.38,
                                        "averageKills": 0.962264,
                                        "averageDamageReceived": 1662.6,
                                        "averageShots": 9.40252,
                                        "averageStunAssistedDamage": 0.0,
                                        "averageCapturePoints": 0.698113,
                                        "averageDroppedCapturePoints": 0.132075,
                                        "averageSpotting": 1.49057
                                    }
                                ],
                            "clan":
                                [],
                            "stronghold_defense":
                                [],
                            "company":
                                [],
                            "team":
                                [],
                            "stronghold_skirmish":
                                [],
                            "regular_team":
                                []
                        },
                        "16657":
                        {
                            "all":
                                [
                                    {
                                        "vehicleStatisticsSnapshotId": 73,
                                        "accountId": 1004866884,
                                        "vehicleId": 16657,
                                        "gameMode": "all",
                                        "createDate": "2022-09-07T16:35:17.756+0000",
                                        "totalBattles": 58,
                                        "survivedBattles": 22,
                                        "killDeathRatio": 1.80556,
                                        "hitMissRatio": 0.643836,
                                        "winLossRatio": 0.551724,
                                        "averageWn8": 1630.94,
                                        "averageExperience": 773.069,
                                        "averageDamage": 1569.9,
                                        "averageKills": 1.12069,
                                        "averageDamageReceived": 860.207,
                                        "averageShots": 7.55172,
                                        "averageStunAssistedDamage": 0.0,
                                        "averageCapturePoints": 0.931035,
                                        "averageDroppedCapturePoints": 0.224138,
                                        "averageSpotting": 0.310345
                                    }
                                ],
                            "clan":
                                [],
                            "stronghold_defense":
                                [],
                            "company":
                                [],
                            "team":
                                [],
                            "stronghold_skirmish":
                                [],
                            "regular_team":
                                []
                        },
                        "11025":
                        {
                            "all":
                                [
                                    {
                                        "vehicleStatisticsSnapshotId": 37,
                                        "accountId": 1004866884,
                                        "vehicleId": 11025,
                                        "gameMode": "all",
                                        "createDate": "2022-09-07T16:35:17.132+0000",
                                        "totalBattles": 43,
                                        "survivedBattles": 20,
                                        "killDeathRatio": 1.34783,
                                        "hitMissRatio": 0.580745,
                                        "winLossRatio": 0.674419,
                                        "averageWn8": 1442.89,
                                        "averageExperience": 712.628,
                                        "averageDamage": 1014.51,
                                        "averageKills": 0.72093,
                                        "averageDamageReceived": 625.442,
                                        "averageShots": 7.48837,
                                        "averageStunAssistedDamage": 0.0,
                                        "averageCapturePoints": 0.0,
                                        "averageDroppedCapturePoints": 0.0,
                                        "averageSpotting": 0.325581
                                    }
                                ],
                            "clan":
                                [],
                            "stronghold_defense":
                                [],
                            "company":
                                [],
                            "team":
                                [],
                            "stronghold_skirmish":
                                [],
                            "regular_team":
                                []
                        },
                        "4881":
                        {
                            "all":
                                [
                                    {
                                        "vehicleStatisticsSnapshotId": 31,
                                        "accountId": 1004866884,
                                        "vehicleId": 4881,
                                        "gameMode": "all",
                                        "createDate": "2022-09-07T16:35:17.011+0000",
                                        "totalBattles": 23,
                                        "survivedBattles": 4,
                                        "killDeathRatio": 0.421053,
                                        "hitMissRatio": 0.497804,
                                        "winLossRatio": 0.565217,
                                        "averageWn8": 155.901,
                                        "averageExperience": 173.913,
                                        "averageDamage": 83.5217,
                                        "averageKills": 0.347826,
                                        "averageDamageReceived": 210.043,
                                        "averageShots": 29.6957,
                                        "averageStunAssistedDamage": 0.0,
                                        "averageCapturePoints": 2.3913,
                                        "averageDroppedCapturePoints": 0.0,
                                        "averageSpotting": 1.43478
                                    }
                                ],
                            "clan":
                                [],
                            "stronghold_defense":
                                [],
                            "company":
                                [],
                            "team":
                                [],
                            "stronghold_skirmish":
                                [],
                            "regular_team":
                                []
                        },
                        "4369":
                        {
                            "all":
                                [
                                    {
                                        "vehicleStatisticsSnapshotId": 141,
                                        "accountId": 1004866884,
                                        "vehicleId": 4369,
                                        "gameMode": "all",
                                        "createDate": "2022-09-07T16:35:18.746+0000",
                                        "totalBattles": 40,
                                        "survivedBattles": 3,
                                        "killDeathRatio": 0.189189,
                                        "hitMissRatio": 0.577689,
                                        "winLossRatio": 0.475,
                                        "averageWn8": 91.8364,
                                        "averageExperience": 166.275,
                                        "averageDamage": 92.75,
                                        "averageKills": 0.175,
                                        "averageDamageReceived": 329.975,
                                        "averageShots": 6.275,
                                        "averageStunAssistedDamage": 0.0,
                                        "averageCapturePoints": 0.0,
                                        "averageDroppedCapturePoints": 0.95,
                                        "averageSpotting": 1.65
                                    }
                                ],
                            "clan":
                                [],
                            "stronghold_defense":
                                [],
                            "company":
                                [],
                            "team":
                                [],
                            "stronghold_skirmish":
                                [],
                            "regular_team":
                                []
                        },
                        "60689":
                        {
                            "all":
                                [],
                            "clan":
                                [],
                            "stronghold_defense":
                                [],
                            "company":
                                [],
                            "team":
                                [],
                            "stronghold_skirmish":
                                [],
                            "regular_team":
                                []
                        },
                        "64273":
                        {
                            "all":
                                [],
                            "clan":
                                [],
                            "stronghold_defense":
                                [],
                            "company":
                                [],
                            "team":
                                [],
                            "stronghold_skirmish":
                                [],
                            "regular_team":
                                []
                        },
                        "18193":
                        {
                            "all":
                                [
                                    {
                                        "vehicleStatisticsSnapshotId": 96,
                                        "accountId": 1004866884,
                                        "vehicleId": 18193,
                                        "gameMode": "all",
                                        "createDate": "2022-09-07T16:35:18.150+0000",
                                        "totalBattles": 442,
                                        "survivedBattles": 115,
                                        "killDeathRatio": 1.3945,
                                        "hitMissRatio": 0.68871,
                                        "winLossRatio": 0.522624,
                                        "averageWn8": 1342.16,
                                        "averageExperience": 336.964,
                                        "averageDamage": 461.848,
                                        "averageKills": 1.03167,
                                        "averageDamageReceived": 398.224,
                                        "averageShots": 5.61086,
                                        "averageStunAssistedDamage": 0.0,
                                        "averageCapturePoints": 1.34389,
                                        "averageDroppedCapturePoints": 0.319005,
                                        "averageSpotting": 1.43665
                                    }
                                ],
                            "clan":
                                [],
                            "stronghold_defense":
                                [],
                            "company":
                                [],
                            "team":
                                [],
                            "stronghold_skirmish":
                                [],
                            "regular_team":
                                []
                        },
                        "46353":
                        {
                            "all":
                                [],
                            "clan":
                                [],
                            "stronghold_defense":
                                [],
                            "company":
                                [],
                            "team":
                                [],
                            "stronghold_skirmish":
                                [],
                            "regular_team":
                                []
                        },
                        "46865":
                        {
                            "all":
                                [
                                    {
                                        "vehicleStatisticsSnapshotId": 103,
                                        "accountId": 1004866884,
                                        "vehicleId": 46865,
                                        "gameMode": "all",
                                        "createDate": "2022-09-07T16:35:18.243+0000",
                                        "totalBattles": 71,
                                        "survivedBattles": 20,
                                        "killDeathRatio": 1.23529,
                                        "hitMissRatio": 0.727524,
                                        "winLossRatio": 0.591549,
                                        "averageWn8": 2202.59,
                                        "averageExperience": 948.648,
                                        "averageDamage": 1660.94,
                                        "averageKills": 0.887324,
                                        "averageDamageReceived": 1336.86,
                                        "averageShots": 10.1831,
                                        "averageStunAssistedDamage": 0.0,
                                        "averageCapturePoints": 0.0,
                                        "averageDroppedCapturePoints": 1.46479,
                                        "averageSpotting": 1.71831
                                    }
                                ],
                            "clan":
                                [],
                            "stronghold_defense":
                                [],
                            "company":
                                [],
                            "team":
                                [],
                            "stronghold_skirmish":
                                [],
                            "regular_team":
                                []
                        },
                        "16145":
                        {
                            "all":
                                [
                                    {
                                        "vehicleStatisticsSnapshotId": 66,
                                        "accountId": 1004866884,
                                        "vehicleId": 16145,
                                        "gameMode": "all",
                                        "createDate": "2022-09-07T16:35:17.658+0000",
                                        "totalBattles": 12,
                                        "survivedBattles": 1,
                                        "killDeathRatio": 0.363636,
                                        "hitMissRatio": 0.506494,
                                        "winLossRatio": 0.333333,
                                        "averageWn8": 437.692,
                                        "averageExperience": 292.417,
                                        "averageDamage": 318.667,
                                        "averageKills": 0.333333,
                                        "averageDamageReceived": 320.833,
                                        "averageShots": 6.41667,
                                        "averageStunAssistedDamage": 0.0,
                                        "averageCapturePoints": 0.0,
                                        "averageDroppedCapturePoints": 0.0,
                                        "averageSpotting": 1.25
                                    }
                                ],
                            "clan":
                                [],
                            "stronghold_defense":
                                [],
                            "company":
                                [],
                            "team":
                                [],
                            "stronghold_skirmish":
                                [],
                            "regular_team":
                                []
                        },
                        "3345":
                        {
                            "all":
                                [
                                    {
                                        "vehicleStatisticsSnapshotId": 10,
                                        "accountId": 1004866884,
                                        "vehicleId": 3345,
                                        "gameMode": "all",
                                        "createDate": "2022-09-07T16:35:16.664+0000",
                                        "totalBattles": 35,
                                        "survivedBattles": 6,
                                        "killDeathRatio": 0.37931,
                                        "hitMissRatio": 0.403134,
                                        "winLossRatio": 0.428571,
                                        "averageWn8": 174.885,
                                        "averageExperience": 168.457,
                                        "averageDamage": 115.457,
                                        "averageKills": 0.314286,
                                        "averageDamageReceived": 204.629,
                                        "averageShots": 20.0571,
                                        "averageStunAssistedDamage": 0.0,
                                        "averageCapturePoints": 3.54286,
                                        "averageDroppedCapturePoints": 0.0571429,
                                        "averageSpotting": 0.971429
                                    }
                                ],
                            "clan":
                                [],
                            "stronghold_defense":
                                [],
                            "company":
                                [],
                            "team":
                                [],
                            "stronghold_skirmish":
                                [],
                            "regular_team":
                                []
                        },
                        "2833":
                        {
                            "all":
                                [
                                    {
                                        "vehicleStatisticsSnapshotId": 82,
                                        "accountId": 1004866884,
                                        "vehicleId": 2833,
                                        "gameMode": "all",
                                        "createDate": "2022-09-07T16:35:17.914+0000",
                                        "totalBattles": 12,
                                        "survivedBattles": 1,
                                        "killDeathRatio": 0.272727,
                                        "hitMissRatio": 0.289474,
                                        "winLossRatio": 0.416667,
                                        "averageWn8": 167.563,
                                        "averageExperience": 108.583,
                                        "averageDamage": 120.167,
                                        "averageKills": 0.25,
                                        "averageDamageReceived": 110.0,
                                        "averageShots": 3.16667,
                                        "averageStunAssistedDamage": 0.0,
                                        "averageCapturePoints": 0.0,
                                        "averageDroppedCapturePoints": 0.0,
                                        "averageSpotting": 0.0
                                    }
                                ],
                            "clan":
                                [],
                            "stronghold_defense":
                                [],
                            "company":
                                [],
                            "team":
                                [],
                            "stronghold_skirmish":
                                [],
                            "regular_team":
                                []
                        },
                        "14609":
                        {
                            "all":
                                [
                                    {
                                        "vehicleStatisticsSnapshotId": 94,
                                        "accountId": 1004866884,
                                        "vehicleId": 14609,
                                        "gameMode": "all",
                                        "createDate": "2022-09-07T16:35:18.130+0000",
                                        "totalBattles": 659,
                                        "survivedBattles": 214,
                                        "killDeathRatio": 1.90112,
                                        "hitMissRatio": 0.75367,
                                        "winLossRatio": 0.528073,
                                        "averageWn8": 2075.73,
                                        "averageExperience": 646.747,
                                        "averageDamage": 2168.5,
                                        "averageKills": 1.28376,
                                        "averageDamageReceived": 1620.39,
                                        "averageShots": 11.1624,
                                        "averageStunAssistedDamage": 0.0,
                                        "averageCapturePoints": 0.355083,
                                        "averageDroppedCapturePoints": 0.872534,
                                        "averageSpotting": 1.44006
                                    }
                                ],
                            "clan":
                                [
                                    {
                                        "vehicleStatisticsSnapshotId": 95,
                                        "accountId": 1004866884,
                                        "vehicleId": 14609,
                                        "gameMode": "clan",
                                        "createDate": "2022-09-07T16:35:18.138+0000",
                                        "totalBattles": 33,
                                        "survivedBattles": 14,
                                        "killDeathRatio": 1.10526,
                                        "hitMissRatio": 0.758491,
                                        "winLossRatio": 0.757576,
                                        "averageWn8": 1114.49,
                                        "averageExperience": 822.667,
                                        "averageDamage": 1415.21,
                                        "averageKills": 0.636364,
                                        "averageDamageReceived": 1454.7,
                                        "averageShots": 8.0303,
                                        "averageStunAssistedDamage": 0.0,
                                        "averageCapturePoints": 0.0,
                                        "averageDroppedCapturePoints": 1.0303,
                                        "averageSpotting": 1.78788
                                    }
                                ],
                            "stronghold_defense":
                                [],
                            "company":
                                [],
                            "team":
                                [],
                            "stronghold_skirmish":
                                [],
                            "regular_team":
                                []
                        },
                        "14097":
                        {
                            "all":
                                [
                                    {
                                        "vehicleStatisticsSnapshotId": 122,
                                        "accountId": 1004866884,
                                        "vehicleId": 14097,
                                        "gameMode": "all",
                                        "createDate": "2022-09-07T16:35:18.493+0000",
                                        "totalBattles": 76,
                                        "survivedBattles": 12,
                                        "killDeathRatio": 1.0,
                                        "hitMissRatio": 0.724047,
                                        "winLossRatio": 0.460526,
                                        "averageWn8": 1063.63,
                                        "averageExperience": 519.539,
                                        "averageDamage": 585.171,
                                        "averageKills": 0.842105,
                                        "averageDamageReceived": 661.092,
                                        "averageShots": 10.0132,
                                        "averageStunAssistedDamage": 0.0,
                                        "averageCapturePoints": 3.5,
                                        "averageDroppedCapturePoints": 0.315789,
                                        "averageSpotting": 1.18421
                                    }
                                ],
                            "clan":
                                [],
                            "stronghold_defense":
                                [],
                            "company":
                                [],
                            "team":
                                [],
                            "stronghold_skirmish":
                                [],
                            "regular_team":
                                []
                        },
                        "2321":
                        {
                            "all":
                                [
                                    {
                                        "vehicleStatisticsSnapshotId": 13,
                                        "accountId": 1004866884,
                                        "vehicleId": 2321,
                                        "gameMode": "all",
                                        "createDate": "2022-09-07T16:35:16.714+0000",
                                        "totalBattles": 226,
                                        "survivedBattles": 77,
                                        "killDeathRatio": 1.63758,
                                        "hitMissRatio": 0.755272,
                                        "winLossRatio": 0.486726,
                                        "averageWn8": 1344.43,
                                        "averageExperience": 397.133,
                                        "averageDamage": 709.296,
                                        "averageKills": 1.07965,
                                        "averageDamageReceived": 680.084,
                                        "averageShots": 7.97345,
                                        "averageStunAssistedDamage": 0.0,
                                        "averageCapturePoints": 1.96018,
                                        "averageDroppedCapturePoints": 0.0,
                                        "averageSpotting": 1.17699
                                    }
                                ],
                            "clan":
                                [],
                            "stronghold_defense":
                                [],
                            "company":
                                [],
                            "team":
                                [],
                            "stronghold_skirmish":
                                [],
                            "regular_team":
                                []
                        },
                        "785":
                        {
                            "all":
                                [],
                            "clan":
                                [],
                            "stronghold_defense":
                                [],
                            "company":
                                [],
                            "team":
                                [],
                            "stronghold_skirmish":
                                [],
                            "regular_team":
                                []
                        },
                        "1809":
                        {
                            "all":
                                [
                                    {
                                        "vehicleStatisticsSnapshotId": 176,
                                        "accountId": 1004866884,
                                        "vehicleId": 1809,
                                        "gameMode": "all",
                                        "createDate": "2022-09-07T16:35:19.251+0000",
                                        "totalBattles": 11,
                                        "survivedBattles": 3,
                                        "killDeathRatio": 1.125,
                                        "hitMissRatio": 0.6,
                                        "winLossRatio": 0.272727,
                                        "averageWn8": 473.028,
                                        "averageExperience": 290.545,
                                        "averageDamage": 252.636,
                                        "averageKills": 0.818182,
                                        "averageDamageReceived": 238.636,
                                        "averageShots": 4.09091,
                                        "averageStunAssistedDamage": 0.0,
                                        "averageCapturePoints": 0.0,
                                        "averageDroppedCapturePoints": 0.0,
                                        "averageSpotting": 1.18182
                                    }
                                ],
                            "clan":
                                [],
                            "stronghold_defense":
                                [],
                            "company":
                                [],
                            "team":
                                [],
                            "stronghold_skirmish":
                                [],
                            "regular_team":
                                []
                        },
                        "5905":
                        {
                            "all":
                                [],
                            "clan":
                                [],
                            "stronghold_defense":
                                [],
                            "company":
                                [],
                            "team":
                                [],
                            "stronghold_skirmish":
                                [],
                            "regular_team":
                                []
                        },
                        "12561":
                        {
                            "all":
                                [
                                    {
                                        "vehicleStatisticsSnapshotId": 88,
                                        "accountId": 1004866884,
                                        "vehicleId": 12561,
                                        "gameMode": "all",
                                        "createDate": "2022-09-07T16:35:18.020+0000",
                                        "totalBattles": 26,
                                        "survivedBattles": 4,
                                        "killDeathRatio": 0.681818,
                                        "hitMissRatio": 0.448902,
                                        "winLossRatio": 0.423077,
                                        "averageWn8": 306.434,
                                        "averageExperience": 193.538,
                                        "averageDamage": 109.385,
                                        "averageKills": 0.576923,
                                        "averageDamageReceived": 202.346,
                                        "averageShots": 80.5385,
                                        "averageStunAssistedDamage": 0.0,
                                        "averageCapturePoints": 0.0,
                                        "averageDroppedCapturePoints": 0.192308,
                                        "averageSpotting": 1.42308
                                    }
                                ],
                            "clan":
                                [],
                            "stronghold_defense":
                                [],
                            "company":
                                [],
                            "team":
                                [],
                            "stronghold_skirmish":
                                [],
                            "regular_team":
                                []
                        },
                        "9489":
                        {
                            "all":
                                [
                                    {
                                        "vehicleStatisticsSnapshotId": 76,
                                        "accountId": 1004866884,
                                        "vehicleId": 9489,
                                        "gameMode": "all",
                                        "createDate": "2022-09-07T16:35:17.815+0000",
                                        "totalBattles": 337,
                                        "survivedBattles": 137,
                                        "killDeathRatio": 1.835,
                                        "hitMissRatio": 0.827704,
                                        "winLossRatio": 0.575668,
                                        "averageWn8": 2177.88,
                                        "averageExperience": 776.285,
                                        "averageDamage": 2366.65,
                                        "averageKills": 1.08902,
                                        "averageDamageReceived": 2117.42,
                                        "averageShots": 6.94065,
                                        "averageStunAssistedDamage": 0.0,
                                        "averageCapturePoints": 1.37389,
                                        "averageDroppedCapturePoints": 0.821958,
                                        "averageSpotting": 0.857567
                                    }
                                ],
                            "clan":
                                [
                                    {
                                        "vehicleStatisticsSnapshotId": 77,
                                        "accountId": 1004866884,
                                        "vehicleId": 9489,
                                        "gameMode": "clan",
                                        "createDate": "2022-09-07T16:35:17.822+0000",
                                        "totalBattles": 76,
                                        "survivedBattles": 40,
                                        "killDeathRatio": 1.80556,
                                        "hitMissRatio": 0.833698,
                                        "winLossRatio": 0.631579,
                                        "averageWn8": 1913.3,
                                        "averageExperience": 814.066,
                                        "averageDamage": 2171.36,
                                        "averageKills": 0.855263,
                                        "averageDamageReceived": 1919.63,
                                        "averageShots": 6.01316,
                                        "averageStunAssistedDamage": 0.0,
                                        "averageCapturePoints": 1.13158,
                                        "averageDroppedCapturePoints": 0.684211,
                                        "averageSpotting": 0.921053
                                    }
                                ],
                            "stronghold_defense":
                                [],
                            "company":
                                [],
                            "team":
                                [],
                            "stronghold_skirmish":
                                [],
                            "regular_team":
                                []
                        },
                        "6417":
                        {
                            "all":
                                [
                                    {
                                        "vehicleStatisticsSnapshotId": 155,
                                        "accountId": 1004866884,
                                        "vehicleId": 6417,
                                        "gameMode": "all",
                                        "createDate": "2022-09-07T16:35:18.926+0000",
                                        "totalBattles": 46,
                                        "survivedBattles": 6,
                                        "killDeathRatio": 0.95,
                                        "hitMissRatio": 0.610738,
                                        "winLossRatio": 0.565217,
                                        "averageWn8": 900.784,
                                        "averageExperience": 394.826,
                                        "averageDamage": 316.63,
                                        "averageKills": 0.826087,
                                        "averageDamageReceived": 422.283,
                                        "averageShots": 6.47826,
                                        "averageStunAssistedDamage": 0.0,
                                        "averageCapturePoints": 0.717391,
                                        "averageDroppedCapturePoints": 0.0,
                                        "averageSpotting": 1.80435
                                    }
                                ],
                            "clan":
                                [],
                            "stronghold_defense":
                                [],
                            "company":
                                [],
                            "team":
                                [],
                            "stronghold_skirmish":
                                [],
                            "regular_team":
                                []
                        },
                        "7969":
                        {
                            "all":
                                [
                                    {
                                        "vehicleStatisticsSnapshotId": 36,
                                        "accountId": 1004866884,
                                        "vehicleId": 7969,
                                        "gameMode": "all",
                                        "createDate": "2022-09-07T16:35:17.112+0000",
                                        "totalBattles": 161,
                                        "survivedBattles": 69,
                                        "killDeathRatio": 1.63043,
                                        "hitMissRatio": 0.389773,
                                        "winLossRatio": 0.546584,
                                        "averageWn8": 1546.27,
                                        "averageExperience": 576.217,
                                        "averageDamage": 1063.09,
                                        "averageKills": 0.931677,
                                        "averageDamageReceived": 202.925,
                                        "averageShots": 5.46584,
                                        "averageStunAssistedDamage": 0.0,
                                        "averageCapturePoints": 0.0869565,
                                        "averageDroppedCapturePoints": 0.341615,
                                        "averageSpotting": 0.0621118
                                    }
                                ],
                            "clan":
                                [],
                            "stronghold_defense":
                                [],
                            "company":
                                [],
                            "team":
                                [],
                            "stronghold_skirmish":
                                [],
                            "regular_team":
                                []
                        },
                        "1825":
                        {
                            "all":
                                [
                                    {
                                        "vehicleStatisticsSnapshotId": 39,
                                        "accountId": 1004866884,
                                        "vehicleId": 1825,
                                        "gameMode": "all",
                                        "createDate": "2022-09-07T16:35:17.164+0000",
                                        "totalBattles": 25,
                                        "survivedBattles": 4,
                                        "killDeathRatio": 0.714286,
                                        "hitMissRatio": 0.361323,
                                        "winLossRatio": 0.36,
                                        "averageWn8": 238.278,
                                        "averageExperience": 171.96,
                                        "averageDamage": 105.08,
                                        "averageKills": 0.6,
                                        "averageDamageReceived": 141.72,
                                        "averageShots": 15.72,
                                        "averageStunAssistedDamage": 0.0,
                                        "averageCapturePoints": 4.32,
                                        "averageDroppedCapturePoints": 0.0,
                                        "averageSpotting": 1.4
                                    }
                                ],
                            "clan":
                                [],
                            "stronghold_defense":
                                [],
                            "company":
                                [],
                            "team":
                                [],
                            "stronghold_skirmish":
                                [],
                            "regular_team":
                                []
                        },
                        "3873":
                        {
                            "all":
                                [
                                    {
                                        "vehicleStatisticsSnapshotId": 115,
                                        "accountId": 1004866884,
                                        "vehicleId": 3873,
                                        "gameMode": "all",
                                        "createDate": "2022-09-07T16:35:18.404+0000",
                                        "totalBattles": 90,
                                        "survivedBattles": 33,
                                        "killDeathRatio": 1.75439,
                                        "hitMissRatio": 0.727873,
                                        "winLossRatio": 0.588889,
                                        "averageWn8": 1745.76,
                                        "averageExperience": 789.878,
                                        "averageDamage": 1213.19,
                                        "averageKills": 1.11111,
                                        "averageDamageReceived": 1026.81,
                                        "averageShots": 8.41111,
                                        "averageStunAssistedDamage": 0.0,
                                        "averageCapturePoints": 0.533333,
                                        "averageDroppedCapturePoints": 0.855556,
                                        "averageSpotting": 0.944444
                                    }
                                ],
                            "clan":
                                [],
                            "stronghold_defense":
                                [],
                            "company":
                                [],
                            "team":
                                [],
                            "stronghold_skirmish":
                                [],
                            "regular_team":
                                []
                        },
                        "7457":
                        {
                            "all":
                                [
                                    {
                                        "vehicleStatisticsSnapshotId": 12,
                                        "accountId": 1004866884,
                                        "vehicleId": 7457,
                                        "gameMode": "all",
                                        "createDate": "2022-09-07T16:35:16.699+0000",
                                        "totalBattles": 233,
                                        "survivedBattles": 106,
                                        "killDeathRatio": 1.66142,
                                        "hitMissRatio": 0.352636,
                                        "winLossRatio": 0.562232,
                                        "averageWn8": 1768.56,
                                        "averageExperience": 592.386,
                                        "averageDamage": 1386.59,
                                        "averageKills": 0.905579,
                                        "averageDamageReceived": 227.373,
                                        "averageShots": 4.96567,
                                        "averageStunAssistedDamage": 42.2918,
                                        "averageCapturePoints": 0.480687,
                                        "averageDroppedCapturePoints": 0.626609,
                                        "averageSpotting": 0.0429185
                                    }
                                ],
                            "clan":
                                [],
                            "stronghold_defense":
                                [],
                            "company":
                                [],
                            "team":
                                [],
                            "stronghold_skirmish":
                                [],
                            "regular_team":
                                []
                        },
                        "6945":
                        {
                            "all":
                                [
                                    {
                                        "vehicleStatisticsSnapshotId": 151,
                                        "accountId": 1004866884,
                                        "vehicleId": 6945,
                                        "gameMode": "all",
                                        "createDate": "2022-09-07T16:35:18.873+0000",
                                        "totalBattles": 49,
                                        "survivedBattles": 13,
                                        "killDeathRatio": 1.30556,
                                        "hitMissRatio": 0.652336,
                                        "winLossRatio": 0.530612,
                                        "averageWn8": 1459.9,
                                        "averageExperience": 518.857,
                                        "averageDamage": 593.143,
                                        "averageKills": 0.959184,
                                        "averageDamageReceived": 312.571,
                                        "averageShots": 10.9184,
                                        "averageStunAssistedDamage": 0.0,
                                        "averageCapturePoints": 2.26531,
                                        "averageDroppedCapturePoints": 0.734694,
                                        "averageSpotting": 0.877551
                                    }
                                ],
                            "clan":
                                [],
                            "stronghold_defense":
                                [],
                            "company":
                                [],
                            "team":
                                [],
                            "stronghold_skirmish":
                                [],
                            "regular_team":
                                []
                        },
                        "15137":
                        {
                            "all":
                                [
                                    {
                                        "vehicleStatisticsSnapshotId": 15,
                                        "accountId": 1004866884,
                                        "vehicleId": 15137,
                                        "gameMode": "all",
                                        "createDate": "2022-09-07T16:35:16.744+0000",
                                        "totalBattles": 52,
                                        "survivedBattles": 7,
                                        "killDeathRatio": 1.4,
                                        "hitMissRatio": 0.688245,
                                        "winLossRatio": 0.634615,
                                        "averageWn8": 2820.04,
                                        "averageExperience": 711.327,
                                        "averageDamage": 691.462,
                                        "averageKills": 1.21154,
                                        "averageDamageReceived": 569.481,
                                        "averageShots": 11.2885,
                                        "averageStunAssistedDamage": 0.0,
                                        "averageCapturePoints": 0.0,
                                        "averageDroppedCapturePoints": 2.90385,
                                        "averageSpotting": 2.73077
                                    }
                                ],
                            "clan":
                                [],
                            "stronghold_defense":
                                [],
                            "company":
                                [],
                            "team":
                                [],
                            "stronghold_skirmish":
                                [],
                            "regular_team":
                                []
                        },
                        "14625":
                        {
                            "all":
                                [
                                    {
                                        "vehicleStatisticsSnapshotId": 113,
                                        "accountId": 1004866884,
                                        "vehicleId": 14625,
                                        "gameMode": "all",
                                        "createDate": "2022-09-07T16:35:18.378+0000",
                                        "totalBattles": 82,
                                        "survivedBattles": 25,
                                        "killDeathRatio": 1.19298,
                                        "hitMissRatio": 0.691787,
                                        "winLossRatio": 0.585366,
                                        "averageWn8": 1927.33,
                                        "averageExperience": 763.329,
                                        "averageDamage": 1416.94,
                                        "averageKills": 0.829268,
                                        "averageDamageReceived": 1183.85,
                                        "averageShots": 12.622,
                                        "averageStunAssistedDamage": 0.0,
                                        "averageCapturePoints": 0.890244,
                                        "averageDroppedCapturePoints": 1.10976,
                                        "averageSpotting": 1.09756
                                    }
                                ],
                            "clan":
                                [],
                            "stronghold_defense":
                                [],
                            "company":
                                [],
                            "team":
                                [],
                            "stronghold_skirmish":
                                [],
                            "regular_team":
                                []
                        },
                        "11553":
                        {
                            "all":
                                [
                                    {
                                        "vehicleStatisticsSnapshotId": 167,
                                        "accountId": 1004866884,
                                        "vehicleId": 11553,
                                        "gameMode": "all",
                                        "createDate": "2022-09-07T16:35:19.137+0000",
                                        "totalBattles": 56,
                                        "survivedBattles": 11,
                                        "killDeathRatio": 1.37778,
                                        "hitMissRatio": 0.748571,
                                        "winLossRatio": 0.5,
                                        "averageWn8": 1481.13,
                                        "averageExperience": 466.179,
                                        "averageDamage": 738.179,
                                        "averageKills": 1.10714,
                                        "averageDamageReceived": 504.893,
                                        "averageShots": 9.375,
                                        "averageStunAssistedDamage": 0.0,
                                        "averageCapturePoints": 1.32143,
                                        "averageDroppedCapturePoints": 1.875,
                                        "averageSpotting": 1.30357
                                    }
                                ],
                            "clan":
                                [],
                            "stronghold_defense":
                                [],
                            "company":
                                [],
                            "team":
                                [],
                            "stronghold_skirmish":
                                [
                                    {
                                        "vehicleStatisticsSnapshotId": 168,
                                        "accountId": 1004866884,
                                        "vehicleId": 11553,
                                        "gameMode": "stronghold_skirmish",
                                        "createDate": "2022-09-07T16:35:19.148+0000",
                                        "totalBattles": 44,
                                        "survivedBattles": 23,
                                        "killDeathRatio": 1.85714,
                                        "hitMissRatio": 0.676692,
                                        "winLossRatio": 0.704545,
                                        "averageWn8": 1256.81,
                                        "averageExperience": 511.795,
                                        "averageDamage": 665.5,
                                        "averageKills": 0.886364,
                                        "averageDamageReceived": 381.591,
                                        "averageShots": 6.04545,
                                        "averageStunAssistedDamage": 0.0,
                                        "averageCapturePoints": 0.0,
                                        "averageDroppedCapturePoints": 0.795455,
                                        "averageSpotting": 0.636364
                                    }
                                ],
                            "regular_team":
                                []
                        },
                        "15649":
                        {
                            "all":
                                [
                                    {
                                        "vehicleStatisticsSnapshotId": 99,
                                        "accountId": 1004866884,
                                        "vehicleId": 15649,
                                        "gameMode": "all",
                                        "createDate": "2022-09-07T16:35:18.186+0000",
                                        "totalBattles": 112,
                                        "survivedBattles": 18,
                                        "killDeathRatio": 1.32979,
                                        "hitMissRatio": 0.678571,
                                        "winLossRatio": 0.607143,
                                        "averageWn8": 2384.15,
                                        "averageExperience": 712.857,
                                        "averageDamage": 928.027,
                                        "averageKills": 1.11607,
                                        "averageDamageReceived": 784.786,
                                        "averageShots": 12.75,
                                        "averageStunAssistedDamage": 0.0,
                                        "averageCapturePoints": 0.321429,
                                        "averageDroppedCapturePoints": 0.0892857,
                                        "averageSpotting": 2.60714
                                    }
                                ],
                            "clan":
                                [],
                            "stronghold_defense":
                                [],
                            "company":
                                [],
                            "team":
                                [],
                            "stronghold_skirmish":
                                [],
                            "regular_team":
                                []
                        },
                        "11041":
                        {
                            "all":
                                [
                                    {
                                        "vehicleStatisticsSnapshotId": 92,
                                        "accountId": 1004866884,
                                        "vehicleId": 11041,
                                        "gameMode": "all",
                                        "createDate": "2022-09-07T16:35:18.083+0000",
                                        "totalBattles": 53,
                                        "survivedBattles": 19,
                                        "killDeathRatio": 1.73529,
                                        "hitMissRatio": 0.652459,
                                        "winLossRatio": 0.603774,
                                        "averageWn8": 2010.1,
                                        "averageExperience": 661.208,
                                        "averageDamage": 1241.55,
                                        "averageKills": 1.11321,
                                        "averageDamageReceived": 652.359,
                                        "averageShots": 11.5094,
                                        "averageStunAssistedDamage": 0.0,
                                        "averageCapturePoints": 0.226415,
                                        "averageDroppedCapturePoints": 0.0,
                                        "averageSpotting": 0.698113
                                    }
                                ],
                            "clan":
                                [],
                            "stronghold_defense":
                                [],
                            "company":
                                [],
                            "team":
                                [],
                            "stronghold_skirmish":
                                [],
                            "regular_team":
                                []
                        },
                        "9505":
                        {
                            "all":
                                [],
                            "clan":
                                [],
                            "stronghold_defense":
                                [],
                            "company":
                                [],
                            "team":
                                [],
                            "stronghold_skirmish":
                                [],
                            "regular_team":
                                []
                        },
                        "8993":
                        {
                            "all":
                                [
                                    {
                                        "vehicleStatisticsSnapshotId": 173,
                                        "accountId": 1004866884,
                                        "vehicleId": 8993,
                                        "gameMode": "all",
                                        "createDate": "2022-09-07T16:35:19.216+0000",
                                        "totalBattles": 31,
                                        "survivedBattles": 13,
                                        "killDeathRatio": 2.55556,
                                        "hitMissRatio": 0.663415,
                                        "winLossRatio": 0.677419,
                                        "averageWn8": 3123.56,
                                        "averageExperience": 1077.03,
                                        "averageDamage": 2315.74,
                                        "averageKills": 1.48387,
                                        "averageDamageReceived": 1432.16,
                                        "averageShots": 13.2258,
                                        "averageStunAssistedDamage": 0.0,
                                        "averageCapturePoints": 0.225806,
                                        "averageDroppedCapturePoints": 1.12903,
                                        "averageSpotting": 1.80645
                                    }
                                ],
                            "clan":
                                [],
                            "stronghold_defense":
                                [],
                            "company":
                                [],
                            "team":
                                [],
                            "stronghold_skirmish":
                                [],
                            "regular_team":
                                []
                        },
                        "10017":
                        {
                            "all":
                                [
                                    {
                                        "vehicleStatisticsSnapshotId": 121,
                                        "accountId": 1004866884,
                                        "vehicleId": 10017,
                                        "gameMode": "all",
                                        "createDate": "2022-09-07T16:35:18.482+0000",
                                        "totalBattles": 46,
                                        "survivedBattles": 10,
                                        "killDeathRatio": 0.972222,
                                        "hitMissRatio": 0.575714,
                                        "winLossRatio": 0.543478,
                                        "averageWn8": 1263.63,
                                        "averageExperience": 598.283,
                                        "averageDamage": 668.739,
                                        "averageKills": 0.76087,
                                        "averageDamageReceived": 674.913,
                                        "averageShots": 15.2174,
                                        "averageStunAssistedDamage": 0.0,
                                        "averageCapturePoints": 0.0,
                                        "averageDroppedCapturePoints": 0.0434783,
                                        "averageSpotting": 0.73913
                                    }
                                ],
                            "clan":
                                [],
                            "stronghold_defense":
                                [],
                            "company":
                                [],
                            "team":
                                [],
                            "stronghold_skirmish":
                                [],
                            "regular_team":
                                []
                        },
                        "4385":
                        {
                            "all":
                                [
                                    {
                                        "vehicleStatisticsSnapshotId": 21,
                                        "accountId": 1004866884,
                                        "vehicleId": 4385,
                                        "gameMode": "all",
                                        "createDate": "2022-09-07T16:35:16.840+0000",
                                        "totalBattles": 76,
                                        "survivedBattles": 26,
                                        "killDeathRatio": 1.62,
                                        "hitMissRatio": 0.719298,
                                        "winLossRatio": 0.526316,
                                        "averageWn8": 2065.52,
                                        "averageExperience": 700.658,
                                        "averageDamage": 1522.21,
                                        "averageKills": 1.06579,
                                        "averageDamageReceived": 1330.36,
                                        "averageShots": 11.25,
                                        "averageStunAssistedDamage": 0.0,
                                        "averageCapturePoints": 1.15789,
                                        "averageDroppedCapturePoints": 0.934211,
                                        "averageSpotting": 1.22368
                                    }
                                ],
                            "clan":
                                [],
                            "stronghold_defense":
                                [],
                            "company":
                                [],
                            "team":
                                [],
                            "stronghold_skirmish":
                                [],
                            "regular_team":
                                []
                        },
                        "6433":
                        {
                            "all":
                                [
                                    {
                                        "vehicleStatisticsSnapshotId": 107,
                                        "accountId": 1004866884,
                                        "vehicleId": 6433,
                                        "gameMode": "all",
                                        "createDate": "2022-09-07T16:35:18.295+0000",
                                        "totalBattles": 12,
                                        "survivedBattles": 0,
                                        "killDeathRatio": 1.16667,
                                        "hitMissRatio": 0.782609,
                                        "winLossRatio": 0.666667,
                                        "averageWn8": 901.502,
                                        "averageExperience": 273.75,
                                        "averageDamage": 230.417,
                                        "averageKills": 1.16667,
                                        "averageDamageReceived": 160.0,
                                        "averageShots": 5.75,
                                        "averageStunAssistedDamage": 0.0,
                                        "averageCapturePoints": 0.0,
                                        "averageDroppedCapturePoints": 0.0,
                                        "averageSpotting": 1.0
                                    }
                                ],
                            "clan":
                                [],
                            "stronghold_defense":
                                [],
                            "company":
                                [],
                            "team":
                                [],
                            "stronghold_skirmish":
                                [],
                            "regular_team":
                                []
                        },
                        "5409":
                        {
                            "all":
                                [
                                    {
                                        "vehicleStatisticsSnapshotId": 86,
                                        "accountId": 1004866884,
                                        "vehicleId": 5409,
                                        "gameMode": "all",
                                        "createDate": "2022-09-07T16:35:17.988+0000",
                                        "totalBattles": 16,
                                        "survivedBattles": 1,
                                        "killDeathRatio": 0.733333,
                                        "hitMissRatio": 0.619718,
                                        "winLossRatio": 0.375,
                                        "averageWn8": 1269.31,
                                        "averageExperience": 389.062,
                                        "averageDamage": 390.25,
                                        "averageKills": 0.6875,
                                        "averageDamageReceived": 394.938,
                                        "averageShots": 8.875,
                                        "averageStunAssistedDamage": 0.0,
                                        "averageCapturePoints": 0.0,
                                        "averageDroppedCapturePoints": 0.0,
                                        "averageSpotting": 1.3125
                                    }
                                ],
                            "clan":
                                [],
                            "stronghold_defense":
                                [],
                            "company":
                                [],
                            "team":
                                [],
                            "stronghold_skirmish":
                                [],
                            "regular_team":
                                []
                        },
                        "5921":
                        {
                            "all":
                                [
                                    {
                                        "vehicleStatisticsSnapshotId": 160,
                                        "accountId": 1004866884,
                                        "vehicleId": 5921,
                                        "gameMode": "all",
                                        "createDate": "2022-09-07T16:35:19.003+0000",
                                        "totalBattles": 39,
                                        "survivedBattles": 10,
                                        "killDeathRatio": 1.13793,
                                        "hitMissRatio": 0.710027,
                                        "winLossRatio": 0.512821,
                                        "averageWn8": 1528.62,
                                        "averageExperience": 790.359,
                                        "averageDamage": 1120.82,
                                        "averageKills": 0.846154,
                                        "averageDamageReceived": 1248.59,
                                        "averageShots": 9.46154,
                                        "averageStunAssistedDamage": 0.0,
                                        "averageCapturePoints": 0.205128,
                                        "averageDroppedCapturePoints": 0.0,
                                        "averageSpotting": 1.89744
                                    }
                                ],
                            "clan":
                                [],
                            "stronghold_defense":
                                [],
                            "company":
                                [],
                            "team":
                                [],
                            "stronghold_skirmish":
                                [],
                            "regular_team":
                                []
                        },
                        "4897":
                        {
                            "all":
                                [
                                    {
                                        "vehicleStatisticsSnapshotId": 51,
                                        "accountId": 1004866884,
                                        "vehicleId": 4897,
                                        "gameMode": "all",
                                        "createDate": "2022-09-07T16:35:17.384+0000",
                                        "totalBattles": 35,
                                        "survivedBattles": 5,
                                        "killDeathRatio": 0.333333,
                                        "hitMissRatio": 0.46875,
                                        "winLossRatio": 0.542857,
                                        "averageWn8": 126.017,
                                        "averageExperience": 132.286,
                                        "averageDamage": 33.6857,
                                        "averageKills": 0.285714,
                                        "averageDamageReceived": 198.8,
                                        "averageShots": 5.48571,
                                        "averageStunAssistedDamage": 0.0,
                                        "averageCapturePoints": 4.2,
                                        "averageDroppedCapturePoints": 0.0,
                                        "averageSpotting": 1.11429
                                    }
                                ],
                            "clan":
                                [],
                            "stronghold_defense":
                                [],
                            "company":
                                [],
                            "team":
                                [],
                            "stronghold_skirmish":
                                [],
                            "regular_team":
                                []
                        },
                        "16161":
                        {
                            "all":
                                [
                                    {
                                        "vehicleStatisticsSnapshotId": 22,
                                        "accountId": 1004866884,
                                        "vehicleId": 16161,
                                        "gameMode": "all",
                                        "createDate": "2022-09-07T16:35:16.855+0000",
                                        "totalBattles": 177,
                                        "survivedBattles": 65,
                                        "killDeathRatio": 0.866071,
                                        "hitMissRatio": 0.295149,
                                        "winLossRatio": 0.468927,
                                        "averageWn8": 1142.57,
                                        "averageExperience": 609.373,
                                        "averageDamage": 1271.48,
                                        "averageKills": 0.548023,
                                        "averageDamageReceived": 307.062,
                                        "averageShots": 9.66667,
                                        "averageStunAssistedDamage": 760.057,
                                        "averageCapturePoints": 0.039548,
                                        "averageDroppedCapturePoints": 0.293785,
                                        "averageSpotting": 0.0734463
                                    }
                                ],
                            "clan":
                                [],
                            "stronghold_defense":
                                [],
                            "company":
                                [],
                            "team":
                                [],
                            "stronghold_skirmish":
                                [],
                            "regular_team":
                                []
                        },
                        "16673":
                        {
                            "all":
                                [
                                    {
                                        "vehicleStatisticsSnapshotId": 26,
                                        "accountId": 1004866884,
                                        "vehicleId": 16673,
                                        "gameMode": "all",
                                        "createDate": "2022-09-07T16:35:16.954+0000",
                                        "totalBattles": 35,
                                        "survivedBattles": 1,
                                        "killDeathRatio": 0.470588,
                                        "hitMissRatio": 0.659639,
                                        "winLossRatio": 0.428571,
                                        "averageWn8": 1430.94,
                                        "averageExperience": 535.6,
                                        "averageDamage": 579.2,
                                        "averageKills": 0.457143,
                                        "averageDamageReceived": 675.343,
                                        "averageShots": 9.48571,
                                        "averageStunAssistedDamage": 0.0,
                                        "averageCapturePoints": 0.0,
                                        "averageDroppedCapturePoints": 0.0,
                                        "averageSpotting": 2.17143
                                    }
                                ],
                            "clan":
                                [],
                            "stronghold_defense":
                                [],
                            "company":
                                [],
                            "team":
                                [],
                            "stronghold_skirmish":
                                [],
                            "regular_team":
                                []
                        },
                        "55073":
                        {
                            "all":
                                [],
                            "clan":
                                [],
                            "stronghold_defense":
                                [],
                            "company":
                                [],
                            "team":
                                [],
                            "stronghold_skirmish":
                                [],
                            "regular_team":
                                []
                        },
                        "61729":
                        {
                            "all":
                                [],
                            "clan":
                                [],
                            "stronghold_defense":
                                [],
                            "company":
                                [],
                            "team":
                                [],
                            "stronghold_skirmish":
                                [],
                            "regular_team":
                                []
                        },
                        "19745":
                        {
                            "all":
                                [
                                    {
                                        "vehicleStatisticsSnapshotId": 163,
                                        "accountId": 1004866884,
                                        "vehicleId": 19745,
                                        "gameMode": "all",
                                        "createDate": "2022-09-07T16:35:19.056+0000",
                                        "totalBattles": 28,
                                        "survivedBattles": 6,
                                        "killDeathRatio": 1.09091,
                                        "hitMissRatio": 0.711111,
                                        "winLossRatio": 0.428571,
                                        "averageWn8": 2015.06,
                                        "averageExperience": 735.107,
                                        "averageDamage": 866.071,
                                        "averageKills": 0.857143,
                                        "averageDamageReceived": 783.964,
                                        "averageShots": 11.25,
                                        "averageStunAssistedDamage": 0.0,
                                        "averageCapturePoints": 0.0,
                                        "averageDroppedCapturePoints": 0.0,
                                        "averageSpotting": 4.32143
                                    }
                                ],
                            "clan":
                                [],
                            "stronghold_defense":
                                [],
                            "company":
                                [],
                            "team":
                                [],
                            "stronghold_skirmish":
                                [],
                            "regular_team":
                                []
                        },
                        "1313":
                        {
                            "all":
                                [
                                    {
                                        "vehicleStatisticsSnapshotId": 28,
                                        "accountId": 1004866884,
                                        "vehicleId": 1313,
                                        "gameMode": "all",
                                        "createDate": "2022-09-07T16:35:16.978+0000",
                                        "totalBattles": 18,
                                        "survivedBattles": 3,
                                        "killDeathRatio": 1.26667,
                                        "hitMissRatio": 0.580292,
                                        "winLossRatio": 0.5,
                                        "averageWn8": 1320.63,
                                        "averageExperience": 569.333,
                                        "averageDamage": 635.556,
                                        "averageKills": 1.05556,
                                        "averageDamageReceived": 706.0,
                                        "averageShots": 15.2222,
                                        "averageStunAssistedDamage": 0.0,
                                        "averageCapturePoints": 0.0,
                                        "averageDroppedCapturePoints": 0.0,
                                        "averageSpotting": 1.22222
                                    }
                                ],
                            "clan":
                                [],
                            "stronghold_defense":
                                [],
                            "company":
                                [],
                            "team":
                                [],
                            "stronghold_skirmish":
                                [],
                            "regular_team":
                                []
                        },
                        "289":
                        {
                            "all":
                                [
                                    {
                                        "vehicleStatisticsSnapshotId": 117,
                                        "accountId": 1004866884,
                                        "vehicleId": 289,
                                        "gameMode": "all",
                                        "createDate": "2022-09-07T16:35:18.435+0000",
                                        "totalBattles": 36,
                                        "survivedBattles": 4,
                                        "killDeathRatio": 0.40625,
                                        "hitMissRatio": 0.495575,
                                        "winLossRatio": 0.5,
                                        "averageWn8": 166.817,
                                        "averageExperience": 158.472,
                                        "averageDamage": 79.0,
                                        "averageKills": 0.361111,
                                        "averageDamageReceived": 226.194,
                                        "averageShots": 6.27778,
                                        "averageStunAssistedDamage": 0.0,
                                        "averageCapturePoints": 3.25,
                                        "averageDroppedCapturePoints": 0.0,
                                        "averageSpotting": 1.47222
                                    }
                                ],
                            "clan":
                                [],
                            "stronghold_defense":
                                [],
                            "company":
                                [],
                            "team":
                                [],
                            "stronghold_skirmish":
                                [],
                            "regular_team":
                                []
                        },
                        "3377":
                        {
                            "all":
                                [
                                    {
                                        "vehicleStatisticsSnapshotId": 126,
                                        "accountId": 1004866884,
                                        "vehicleId": 3377,
                                        "gameMode": "all",
                                        "createDate": "2022-09-07T16:35:18.552+0000",
                                        "totalBattles": 166,
                                        "survivedBattles": 27,
                                        "killDeathRatio": 0.71223,
                                        "hitMissRatio": 0.656667,
                                        "winLossRatio": 0.493976,
                                        "averageWn8": 1310.79,
                                        "averageExperience": 703.102,
                                        "averageDamage": 622.886,
                                        "averageKills": 0.596386,
                                        "averageDamageReceived": 775.175,
                                        "averageShots": 7.22892,
                                        "averageStunAssistedDamage": 0.0,
                                        "averageCapturePoints": 1.3253,
                                        "averageDroppedCapturePoints": 0.759036,
                                        "averageSpotting": 3.01807
                                    }
                                ],
                            "clan":
                                [],
                            "stronghold_defense":
                                [],
                            "company":
                                [],
                            "team":
                                [],
                            "stronghold_skirmish":
                                [],
                            "regular_team":
                                []
                        },
                        "6449":
                        {
                            "all":
                                [],
                            "clan":
                                [],
                            "stronghold_defense":
                                [],
                            "company":
                                [],
                            "team":
                                [],
                            "stronghold_skirmish":
                                [],
                            "regular_team":
                                []
                        },
                        "6961":
                        {
                            "all":
                                [],
                            "clan":
                                [],
                            "stronghold_defense":
                                [],
                            "company":
                                [],
                            "team":
                                [],
                            "stronghold_skirmish":
                                [],
                            "regular_team":
                                []
                        },
                        "7473":
                        {
                            "all":
                                [
                                    {
                                        "vehicleStatisticsSnapshotId": 162,
                                        "accountId": 1004866884,
                                        "vehicleId": 7473,
                                        "gameMode": "all",
                                        "createDate": "2022-09-07T16:35:19.040+0000",
                                        "totalBattles": 44,
                                        "survivedBattles": 13,
                                        "killDeathRatio": 1.83871,
                                        "hitMissRatio": 0.628362,
                                        "winLossRatio": 0.545455,
                                        "averageWn8": 1880.7,
                                        "averageExperience": 590.977,
                                        "averageDamage": 904.636,
                                        "averageKills": 1.29545,
                                        "averageDamageReceived": 453.023,
                                        "averageShots": 9.29545,
                                        "averageStunAssistedDamage": 0.0,
                                        "averageCapturePoints": 0.0,
                                        "averageDroppedCapturePoints": 0.159091,
                                        "averageSpotting": 0.840909
                                    }
                                ],
                            "clan":
                                [],
                            "stronghold_defense":
                                [],
                            "company":
                                [],
                            "team":
                                [],
                            "stronghold_skirmish":
                                [],
                            "regular_team":
                                []
                        },
                        "64817":
                        {
                            "all":
                                [
                                    {
                                        "vehicleStatisticsSnapshotId": 177,
                                        "accountId": 1004866884,
                                        "vehicleId": 64817,
                                        "gameMode": "all",
                                        "createDate": "2022-09-07T16:35:19.263+0000",
                                        "totalBattles": 18,
                                        "survivedBattles": 2,
                                        "killDeathRatio": 1.4375,
                                        "hitMissRatio": 0.773333,
                                        "winLossRatio": 0.444444,
                                        "averageWn8": 3711.31,
                                        "averageExperience": 821.667,
                                        "averageDamage": 1129.94,
                                        "averageKills": 1.27778,
                                        "averageDamageReceived": 617.056,
                                        "averageShots": 16.6667,
                                        "averageStunAssistedDamage": 0.0,
                                        "averageCapturePoints": 0.0,
                                        "averageDroppedCapturePoints": 1.66667,
                                        "averageSpotting": 3.44444
                                    }
                                ],
                            "clan":
                                [],
                            "stronghold_defense":
                                [],
                            "company":
                                [],
                            "team":
                                [],
                            "stronghold_skirmish":
                                [],
                            "regular_team":
                                []
                        },
                        "2353":
                        {
                            "all":
                                [],
                            "clan":
                                [],
                            "stronghold_defense":
                                [],
                            "company":
                                [],
                            "team":
                                [],
                            "stronghold_skirmish":
                                [],
                            "regular_team":
                                []
                        },
                        "2865":
                        {
                            "all":
                                [
                                    {
                                        "vehicleStatisticsSnapshotId": 139,
                                        "accountId": 1004866884,
                                        "vehicleId": 2865,
                                        "gameMode": "all",
                                        "createDate": "2022-09-07T16:35:18.721+0000",
                                        "totalBattles": 83,
                                        "survivedBattles": 29,
                                        "killDeathRatio": 1.35185,
                                        "hitMissRatio": 0.735786,
                                        "winLossRatio": 0.542169,
                                        "averageWn8": 1869.17,
                                        "averageExperience": 727.373,
                                        "averageDamage": 1524.81,
                                        "averageKills": 0.879518,
                                        "averageDamageReceived": 1372.02,
                                        "averageShots": 10.8072,
                                        "averageStunAssistedDamage": 0.0,
                                        "averageCapturePoints": 0.493976,
                                        "averageDroppedCapturePoints": 0.0,
                                        "averageSpotting": 0.963855
                                    }
                                ],
                            "clan":
                                [],
                            "stronghold_defense":
                                [],
                            "company":
                                [],
                            "team":
                                [],
                            "stronghold_skirmish":
                                [],
                            "regular_team":
                                []
                        },
                        "1841":
                        {
                            "all":
                                [
                                    {
                                        "vehicleStatisticsSnapshotId": 137,
                                        "accountId": 1004866884,
                                        "vehicleId": 1841,
                                        "gameMode": "all",
                                        "createDate": "2022-09-07T16:35:18.686+0000",
                                        "totalBattles": 349,
                                        "survivedBattles": 92,
                                        "killDeathRatio": 1.42802,
                                        "hitMissRatio": 0.769231,
                                        "winLossRatio": 0.524355,
                                        "averageWn8": 2003.64,
                                        "averageExperience": 784.622,
                                        "averageDamage": 1679.25,
                                        "averageKills": 1.05158,
                                        "averageDamageReceived": 1455.87,
                                        "averageShots": 9.57307,
                                        "averageStunAssistedDamage": 0.0,
                                        "averageCapturePoints": 1.05158,
                                        "averageDroppedCapturePoints": 1.3553,
                                        "averageSpotting": 1.46705
                                    }
                                ],
                            "clan":
                                [],
                            "stronghold_defense":
                                [],
                            "company":
                                [],
                            "team":
                                [],
                            "stronghold_skirmish":
                                [],
                            "regular_team":
                                []
                        },
                        "3889":
                        {
                            "all":
                                [
                                    {
                                        "vehicleStatisticsSnapshotId": 128,
                                        "accountId": 1004866884,
                                        "vehicleId": 3889,
                                        "gameMode": "all",
                                        "createDate": "2022-09-07T16:35:18.581+0000",
                                        "totalBattles": 381,
                                        "survivedBattles": 80,
                                        "killDeathRatio": 0.906977,
                                        "hitMissRatio": 0.660156,
                                        "winLossRatio": 0.56168,
                                        "averageWn8": 1934.14,
                                        "averageExperience": 718.585,
                                        "averageDamage": 970.113,
                                        "averageKills": 0.716535,
                                        "averageDamageReceived": 962.304,
                                        "averageShots": 8.73491,
                                        "averageStunAssistedDamage": 0.0,
                                        "averageCapturePoints": 1.09449,
                                        "averageDroppedCapturePoints": 0.44357,
                                        "averageSpotting": 3.13386
                                    }
                                ],
                            "clan":
                                [],
                            "stronghold_defense":
                                [],
                            "company":
                                [],
                            "team":
                                [],
                            "stronghold_skirmish":
                                [
                                    {
                                        "vehicleStatisticsSnapshotId": 129,
                                        "accountId": 1004866884,
                                        "vehicleId": 3889,
                                        "gameMode": "stronghold_skirmish",
                                        "createDate": "2022-09-07T16:35:18.592+0000",
                                        "totalBattles": 12,
                                        "survivedBattles": 5,
                                        "killDeathRatio": 1.14286,
                                        "hitMissRatio": 0.666667,
                                        "winLossRatio": 0.583333,
                                        "averageWn8": 1426.55,
                                        "averageExperience": 473.5,
                                        "averageDamage": 760.667,
                                        "averageKills": 0.666667,
                                        "averageDamageReceived": 679.083,
                                        "averageShots": 8.25,
                                        "averageStunAssistedDamage": 0.0,
                                        "averageCapturePoints": 0.0,
                                        "averageDroppedCapturePoints": 0.0,
                                        "averageSpotting": 2.75
                                    }
                                ],
                            "regular_team":
                                []
                        },
                        "4401":
                        {
                            "all":
                                [
                                    {
                                        "vehicleStatisticsSnapshotId": 42,
                                        "accountId": 1004866884,
                                        "vehicleId": 4401,
                                        "gameMode": "all",
                                        "createDate": "2022-09-07T16:35:17.199+0000",
                                        "totalBattles": 11,
                                        "survivedBattles": 4,
                                        "killDeathRatio": 1.28571,
                                        "hitMissRatio": 0.656,
                                        "winLossRatio": 0.363636,
                                        "averageWn8": 895.291,
                                        "averageExperience": 218.455,
                                        "averageDamage": 281.818,
                                        "averageKills": 0.818182,
                                        "averageDamageReceived": 166.182,
                                        "averageShots": 11.3636,
                                        "averageStunAssistedDamage": 0.0,
                                        "averageCapturePoints": 1.36364,
                                        "averageDroppedCapturePoints": 0.0,
                                        "averageSpotting": 0.363636
                                    }
                                ],
                            "clan":
                                [],
                            "stronghold_defense":
                                [],
                            "company":
                                [],
                            "team":
                                [],
                            "stronghold_skirmish":
                                [],
                            "regular_team":
                                []
                        },
                        "4913":
                        {
                            "all":
                                [
                                    {
                                        "vehicleStatisticsSnapshotId": 143,
                                        "accountId": 1004866884,
                                        "vehicleId": 4913,
                                        "gameMode": "all",
                                        "createDate": "2022-09-07T16:35:18.771+0000",
                                        "totalBattles": 86,
                                        "survivedBattles": 12,
                                        "killDeathRatio": 0.418919,
                                        "hitMissRatio": 0.711968,
                                        "winLossRatio": 0.569767,
                                        "averageWn8": 594.156,
                                        "averageExperience": 535.977,
                                        "averageDamage": 247.302,
                                        "averageKills": 0.360465,
                                        "averageDamageReceived": 521.442,
                                        "averageShots": 5.73256,
                                        "averageStunAssistedDamage": 0.0,
                                        "averageCapturePoints": 1.90698,
                                        "averageDroppedCapturePoints": 0.0,
                                        "averageSpotting": 2.54651
                                    }
                                ],
                            "clan":
                                [],
                            "stronghold_defense":
                                [],
                            "company":
                                [],
                            "team":
                                [],
                            "stronghold_skirmish":
                                [],
                            "regular_team":
                                []
                        },
                        "1329":
                        {
                            "all":
                                [],
                            "clan":
                                [],
                            "stronghold_defense":
                                [],
                            "company":
                                [],
                            "team":
                                [],
                            "stronghold_skirmish":
                                [],
                            "regular_team":
                                []
                        },
                        "817":
                        {
                            "all":
                                [
                                    {
                                        "vehicleStatisticsSnapshotId": 135,
                                        "accountId": 1004866884,
                                        "vehicleId": 817,
                                        "gameMode": "all",
                                        "createDate": "2022-09-07T16:35:18.669+0000",
                                        "totalBattles": 237,
                                        "survivedBattles": 78,
                                        "killDeathRatio": 1.74843,
                                        "hitMissRatio": 0.749315,
                                        "winLossRatio": 0.590717,
                                        "averageWn8": 2238.33,
                                        "averageExperience": 886.654,
                                        "averageDamage": 1563.99,
                                        "averageKills": 1.173,
                                        "averageDamageReceived": 1358.07,
                                        "averageShots": 9.24051,
                                        "averageStunAssistedDamage": 0.0,
                                        "averageCapturePoints": 0.662447,
                                        "averageDroppedCapturePoints": 0.451477,
                                        "averageSpotting": 1.54008
                                    }
                                ],
                            "clan":
                                [],
                            "stronghold_defense":
                                [],
                            "company":
                                [],
                            "team":
                                [],
                            "stronghold_skirmish":
                                [
                                    {
                                        "vehicleStatisticsSnapshotId": 136,
                                        "accountId": 1004866884,
                                        "vehicleId": 817,
                                        "gameMode": "stronghold_skirmish",
                                        "createDate": "2022-09-07T16:35:18.679+0000",
                                        "totalBattles": 12,
                                        "survivedBattles": 5,
                                        "killDeathRatio": 1.71429,
                                        "hitMissRatio": 0.827957,
                                        "winLossRatio": 0.5,
                                        "averageWn8": 1346.77,
                                        "averageExperience": 686.083,
                                        "averageDamage": 1236.42,
                                        "averageKills": 1.0,
                                        "averageDamageReceived": 1208.25,
                                        "averageShots": 7.75,
                                        "averageStunAssistedDamage": 0.0,
                                        "averageCapturePoints": 10.0,
                                        "averageDroppedCapturePoints": 0.0,
                                        "averageSpotting": 0.25
                                    }
                                ],
                            "regular_team":
                                []
                        },
                        "5953":
                        {
                            "all":
                                [
                                    {
                                        "vehicleStatisticsSnapshotId": 123,
                                        "accountId": 1004866884,
                                        "vehicleId": 5953,
                                        "gameMode": "all",
                                        "createDate": "2022-09-07T16:35:18.506+0000",
                                        "totalBattles": 20,
                                        "survivedBattles": 6,
                                        "killDeathRatio": 0.285714,
                                        "hitMissRatio": 0.652542,
                                        "winLossRatio": 0.4,
                                        "averageWn8": 153.947,
                                        "averageExperience": 163.2,
                                        "averageDamage": 99.65,
                                        "averageKills": 0.2,
                                        "averageDamageReceived": 178.55,
                                        "averageShots": 5.9,
                                        "averageStunAssistedDamage": 0.0,
                                        "averageCapturePoints": 0.05,
                                        "averageDroppedCapturePoints": 0.0,
                                        "averageSpotting": 1.0
                                    }
                                ],
                            "clan":
                                [],
                            "stronghold_defense":
                                [],
                            "company":
                                [],
                            "team":
                                [],
                            "stronghold_skirmish":
                                [],
                            "regular_team":
                                []
                        },
                        "1345":
                        {
                            "all":
                                [],
                            "clan":
                                [],
                            "stronghold_defense":
                                [],
                            "company":
                                [],
                            "team":
                                [],
                            "stronghold_skirmish":
                                [],
                            "regular_team":
                                []
                        },
                        "60225":
                        {
                            "all":
                                [],
                            "clan":
                                [],
                            "stronghold_defense":
                                [],
                            "company":
                                [],
                            "team":
                                [],
                            "stronghold_skirmish":
                                [],
                            "regular_team":
                                []
                        },
                        "63809":
                        {
                            "all":
                                [],
                            "clan":
                                [],
                            "stronghold_defense":
                                [],
                            "company":
                                [],
                            "team":
                                [],
                            "stronghold_skirmish":
                                [],
                            "regular_team":
                                []
                        },
                        "833":
                        {
                            "all":
                                [],
                            "clan":
                                [],
                            "stronghold_defense":
                                [],
                            "company":
                                [],
                            "team":
                                [],
                            "stronghold_skirmish":
                                [],
                            "regular_team":
                                []
                        },
                        "321":
                        {
                            "all":
                                [],
                            "clan":
                                [],
                            "stronghold_defense":
                                [],
                            "company":
                                [],
                            "team":
                                [],
                            "stronghold_skirmish":
                                [],
                            "regular_team":
                                []
                        },
                        "2881":
                        {
                            "all":
                                [
                                    {
                                        "vehicleStatisticsSnapshotId": 44,
                                        "accountId": 1004866884,
                                        "vehicleId": 2881,
                                        "gameMode": "all",
                                        "createDate": "2022-09-07T16:35:17.264+0000",
                                        "totalBattles": 67,
                                        "survivedBattles": 16,
                                        "killDeathRatio": 0.411765,
                                        "hitMissRatio": 0.638235,
                                        "winLossRatio": 0.522388,
                                        "averageWn8": 357.278,
                                        "averageExperience": 187.418,
                                        "averageDamage": 113.761,
                                        "averageKills": 0.313433,
                                        "averageDamageReceived": 234.194,
                                        "averageShots": 5.07463,
                                        "averageStunAssistedDamage": 0.0,
                                        "averageCapturePoints": 2.61194,
                                        "averageDroppedCapturePoints": 0.0,
                                        "averageSpotting": 0.537313
                                    }
                                ],
                            "clan":
                                [],
                            "stronghold_defense":
                                [],
                            "company":
                                [],
                            "team":
                                [],
                            "stronghold_skirmish":
                                [],
                            "regular_team":
                                []
                        },
                        "3905":
                        {
                            "all":
                                [],
                            "clan":
                                [],
                            "stronghold_defense":
                                [],
                            "company":
                                [],
                            "team":
                                [],
                            "stronghold_skirmish":
                                [],
                            "regular_team":
                                []
                        },
                        "4929":
                        {
                            "all":
                                [
                                    {
                                        "vehicleStatisticsSnapshotId": 180,
                                        "accountId": 1004866884,
                                        "vehicleId": 4929,
                                        "gameMode": "all",
                                        "createDate": "2022-09-07T16:35:19.311+0000",
                                        "totalBattles": 146,
                                        "survivedBattles": 37,
                                        "killDeathRatio": 1.07339,
                                        "hitMissRatio": 0.704246,
                                        "winLossRatio": 0.472603,
                                        "averageWn8": 1652.23,
                                        "averageExperience": 546.63,
                                        "averageDamage": 1028.64,
                                        "averageKills": 0.80137,
                                        "averageDamageReceived": 969.678,
                                        "averageShots": 9.35616,
                                        "averageStunAssistedDamage": 0.0,
                                        "averageCapturePoints": 0.424658,
                                        "averageDroppedCapturePoints": 0.876712,
                                        "averageSpotting": 2.19178
                                    }
                                ],
                            "clan":
                                [],
                            "stronghold_defense":
                                [],
                            "company":
                                [],
                            "team":
                                [],
                            "stronghold_skirmish":
                                [
                                    {
                                        "vehicleStatisticsSnapshotId": 181,
                                        "accountId": 1004866884,
                                        "vehicleId": 4929,
                                        "gameMode": "stronghold_skirmish",
                                        "createDate": "2022-09-07T16:35:19.322+0000",
                                        "totalBattles": 21,
                                        "survivedBattles": 10,
                                        "killDeathRatio": 1.27273,
                                        "hitMissRatio": 0.677083,
                                        "winLossRatio": 0.619048,
                                        "averageWn8": 1712.87,
                                        "averageExperience": 540.667,
                                        "averageDamage": 1070.38,
                                        "averageKills": 0.666667,
                                        "averageDamageReceived": 823.238,
                                        "averageShots": 9.14286,
                                        "averageStunAssistedDamage": 0.0,
                                        "averageCapturePoints": 3.52381,
                                        "averageDroppedCapturePoints": 2.09524,
                                        "averageSpotting": 1.57143
                                    }
                                ],
                            "regular_team":
                                []
                        },
                        "10049":
                        {
                            "all":
                                [
                                    {
                                        "vehicleStatisticsSnapshotId": 47,
                                        "accountId": 1004866884,
                                        "vehicleId": 10049,
                                        "gameMode": "all",
                                        "createDate": "2022-09-07T16:35:17.316+0000",
                                        "totalBattles": 14,
                                        "survivedBattles": 6,
                                        "killDeathRatio": 2.25,
                                        "hitMissRatio": 0.522472,
                                        "winLossRatio": 0.571429,
                                        "averageWn8": 2032.05,
                                        "averageExperience": 539.857,
                                        "averageDamage": 856.5,
                                        "averageKills": 1.28571,
                                        "averageDamageReceived": 354.286,
                                        "averageShots": 12.7143,
                                        "averageStunAssistedDamage": 0.0,
                                        "averageCapturePoints": 0.0,
                                        "averageDroppedCapturePoints": 0.0,
                                        "averageSpotting": 0.357143
                                    }
                                ],
                            "clan":
                                [],
                            "stronghold_defense":
                                [],
                            "company":
                                [],
                            "team":
                                [],
                            "stronghold_skirmish":
                                [],
                            "regular_team":
                                []
                        },
                        "6977":
                        {
                            "all":
                                [
                                    {
                                        "vehicleStatisticsSnapshotId": 164,
                                        "accountId": 1004866884,
                                        "vehicleId": 6977,
                                        "gameMode": "all",
                                        "createDate": "2022-09-07T16:35:19.074+0000",
                                        "totalBattles": 62,
                                        "survivedBattles": 24,
                                        "killDeathRatio": 1.52632,
                                        "hitMissRatio": 0.744461,
                                        "winLossRatio": 0.612903,
                                        "averageWn8": 2084.89,
                                        "averageExperience": 809.21,
                                        "averageDamage": 1297.84,
                                        "averageKills": 0.935484,
                                        "averageDamageReceived": 1136.1,
                                        "averageShots": 10.9194,
                                        "averageStunAssistedDamage": 0.0,
                                        "averageCapturePoints": 1.03226,
                                        "averageDroppedCapturePoints": 0.193548,
                                        "averageSpotting": 1.27419
                                    }
                                ],
                            "clan":
                                [],
                            "stronghold_defense":
                                [],
                            "company":
                                [],
                            "team":
                                [],
                            "stronghold_skirmish":
                                [],
                            "regular_team":
                                []
                        },
                        "6465":
                        {
                            "all":
                                [
                                    {
                                        "vehicleStatisticsSnapshotId": 175,
                                        "accountId": 1004866884,
                                        "vehicleId": 6465,
                                        "gameMode": "all",
                                        "createDate": "2022-09-07T16:35:19.240+0000",
                                        "totalBattles": 242,
                                        "survivedBattles": 32,
                                        "killDeathRatio": 0.471429,
                                        "hitMissRatio": 0.676974,
                                        "winLossRatio": 0.512397,
                                        "averageWn8": 1113.83,
                                        "averageExperience": 423.202,
                                        "averageDamage": 448.946,
                                        "averageKills": 0.409091,
                                        "averageDamageReceived": 552.682,
                                        "averageShots": 7.48347,
                                        "averageStunAssistedDamage": 0.0,
                                        "averageCapturePoints": 0.892562,
                                        "averageDroppedCapturePoints": 0.0,
                                        "averageSpotting": 2.18182
                                    }
                                ],
                            "clan":
                                [],
                            "stronghold_defense":
                                [],
                            "company":
                                [],
                            "team":
                                [],
                            "stronghold_skirmish":
                                [],
                            "regular_team":
                                []
                        },
                        "14145":
                        {
                            "all":
                                [
                                    {
                                        "vehicleStatisticsSnapshotId": 119,
                                        "accountId": 1004866884,
                                        "vehicleId": 14145,
                                        "gameMode": "all",
                                        "createDate": "2022-09-07T16:35:18.460+0000",
                                        "totalBattles": 149,
                                        "survivedBattles": 29,
                                        "killDeathRatio": 0.85,
                                        "hitMissRatio": 0.651701,
                                        "winLossRatio": 0.530201,
                                        "averageWn8": 1987.71,
                                        "averageExperience": 434.497,
                                        "averageDamage": 510.497,
                                        "averageKills": 0.684564,
                                        "averageDamageReceived": 358.074,
                                        "averageShots": 4.93289,
                                        "averageStunAssistedDamage": 0.0,
                                        "averageCapturePoints": 0.248322,
                                        "averageDroppedCapturePoints": 0.711409,
                                        "averageSpotting": 2.14094
                                    }
                                ],
                            "clan":
                                [],
                            "stronghold_defense":
                                [],
                            "company":
                                [],
                            "team":
                                [],
                            "stronghold_skirmish":
                                [],
                            "regular_team":
                                []
                        },
                        "4945":
                        {
                            "all":
                                [],
                            "clan":
                                [],
                            "stronghold_defense":
                                [],
                            "company":
                                [],
                            "team":
                                [],
                            "stronghold_skirmish":
                                [],
                            "regular_team":
                                []
                        },
                        "6993":
                        {
                            "all":
                                [],
                            "clan":
                                [],
                            "stronghold_defense":
                                [],
                            "company":
                                [],
                            "team":
                                [],
                            "stronghold_skirmish":
                                [],
                            "regular_team":
                                []
                        },
                        "7505":
                        {
                            "all":
                                [],
                            "clan":
                                [],
                            "stronghold_defense":
                                [],
                            "company":
                                [],
                            "team":
                                [],
                            "stronghold_skirmish":
                                [],
                            "regular_team":
                                []
                        },
                        "8017":
                        {
                            "all":
                                [],
                            "clan":
                                [],
                            "stronghold_defense":
                                [],
                            "company":
                                [],
                            "team":
                                [],
                            "stronghold_skirmish":
                                [],
                            "regular_team":
                                []
                        },
                        "14673":
                        {
                            "all":
                                [
                                    {
                                        "vehicleStatisticsSnapshotId": 6,
                                        "accountId": 1004866884,
                                        "vehicleId": 14673,
                                        "gameMode": "all",
                                        "createDate": "2022-09-07T16:35:16.556+0000",
                                        "totalBattles": 67,
                                        "survivedBattles": 20,
                                        "killDeathRatio": 1.91489,
                                        "hitMissRatio": 0.697368,
                                        "winLossRatio": 0.567164,
                                        "averageWn8": 2369.12,
                                        "averageExperience": 861.358,
                                        "averageDamage": 1711.7,
                                        "averageKills": 1.34328,
                                        "averageDamageReceived": 892.746,
                                        "averageShots": 10.209,
                                        "averageStunAssistedDamage": 0.0,
                                        "averageCapturePoints": 0.104478,
                                        "averageDroppedCapturePoints": 0.492537,
                                        "averageSpotting": 0.850746
                                    }
                                ],
                            "clan":
                                [],
                            "stronghold_defense":
                                [],
                            "company":
                                [],
                            "team":
                                [],
                            "stronghold_skirmish":
                                [],
                            "regular_team":
                                []
                        },
                        "14161":
                        {
                            "all":
                                [
                                    {
                                        "vehicleStatisticsSnapshotId": 171,
                                        "accountId": 1004866884,
                                        "vehicleId": 14161,
                                        "gameMode": "all",
                                        "createDate": "2022-09-07T16:35:19.187+0000",
                                        "totalBattles": 12,
                                        "survivedBattles": 5,
                                        "killDeathRatio": 3.28571,
                                        "hitMissRatio": 0.689815,
                                        "winLossRatio": 0.583333,
                                        "averageWn8": 2465.62,
                                        "averageExperience": 958.167,
                                        "averageDamage": 1403.0,
                                        "averageKills": 1.91667,
                                        "averageDamageReceived": 828.5,
                                        "averageShots": 18.0,
                                        "averageStunAssistedDamage": 0.0,
                                        "averageCapturePoints": 2.83333,
                                        "averageDroppedCapturePoints": 0.0,
                                        "averageSpotting": 1.16667
                                    }
                                ],
                            "clan":
                                [],
                            "stronghold_defense":
                                [],
                            "company":
                                [],
                            "team":
                                [],
                            "stronghold_skirmish":
                                [],
                            "regular_team":
                                []
                        },
                        "9553":
                        {
                            "all":
                                [],
                            "clan":
                                [],
                            "stronghold_defense":
                                [],
                            "company":
                                [],
                            "team":
                                [],
                            "stronghold_skirmish":
                                [],
                            "regular_team":
                                []
                        },
                        "2385":
                        {
                            "all":
                                [],
                            "clan":
                                [],
                            "stronghold_defense":
                                [],
                            "company":
                                [],
                            "team":
                                [],
                            "stronghold_skirmish":
                                [],
                            "regular_team":
                                []
                        },
                        "849":
                        {
                            "all":
                                [
                                    {
                                        "vehicleStatisticsSnapshotId": 38,
                                        "accountId": 1004866884,
                                        "vehicleId": 849,
                                        "gameMode": "all",
                                        "createDate": "2022-09-07T16:35:17.145+0000",
                                        "totalBattles": 13,
                                        "survivedBattles": 5,
                                        "killDeathRatio": 0.875,
                                        "hitMissRatio": 0.64497,
                                        "winLossRatio": 0.538462,
                                        "averageWn8": 689.768,
                                        "averageExperience": 394.538,
                                        "averageDamage": 268.769,
                                        "averageKills": 0.538462,
                                        "averageDamageReceived": 285.231,
                                        "averageShots": 13.0,
                                        "averageStunAssistedDamage": 0.0,
                                        "averageCapturePoints": 0.230769,
                                        "averageDroppedCapturePoints": 3.46154,
                                        "averageSpotting": 0.692308
                                    }
                                ],
                            "clan":
                                [],
                            "stronghold_defense":
                                [],
                            "company":
                                [],
                            "team":
                                [],
                            "stronghold_skirmish":
                                [],
                            "regular_team":
                                []
                        },
                        "2897":
                        {
                            "all":
                                [
                                    {
                                        "vehicleStatisticsSnapshotId": 48,
                                        "accountId": 1004866884,
                                        "vehicleId": 2897,
                                        "gameMode": "all",
                                        "createDate": "2022-09-07T16:35:17.329+0000",
                                        "totalBattles": 35,
                                        "survivedBattles": 9,
                                        "killDeathRatio": 1.19231,
                                        "hitMissRatio": 0.719136,
                                        "winLossRatio": 0.457143,
                                        "averageWn8": 1435.41,
                                        "averageExperience": 433.886,
                                        "averageDamage": 667.171,
                                        "averageKills": 0.885714,
                                        "averageDamageReceived": 588.771,
                                        "averageShots": 9.25714,
                                        "averageStunAssistedDamage": 0.0,
                                        "averageCapturePoints": 5.2,
                                        "averageDroppedCapturePoints": 0.0,
                                        "averageSpotting": 1.0
                                    }
                                ],
                            "clan":
                                [],
                            "stronghold_defense":
                                [],
                            "company":
                                [],
                            "team":
                                [],
                            "stronghold_skirmish":
                                [],
                            "regular_team":
                                []
                        },
                        "6481":
                        {
                            "all":
                                [
                                    {
                                        "vehicleStatisticsSnapshotId": 120,
                                        "accountId": 1004866884,
                                        "vehicleId": 6481,
                                        "gameMode": "all",
                                        "createDate": "2022-09-07T16:35:18.471+0000",
                                        "totalBattles": 42,
                                        "survivedBattles": 12,
                                        "killDeathRatio": 1.23333,
                                        "hitMissRatio": 0.563325,
                                        "winLossRatio": 0.595238,
                                        "averageWn8": 1260.57,
                                        "averageExperience": 307.238,
                                        "averageDamage": 281.667,
                                        "averageKills": 0.880952,
                                        "averageDamageReceived": 292.286,
                                        "averageShots": 18.0476,
                                        "averageStunAssistedDamage": 0.0,
                                        "averageCapturePoints": 4.19048,
                                        "averageDroppedCapturePoints": 0.0,
                                        "averageSpotting": 2.2619
                                    }
                                ],
                            "clan":
                                [],
                            "stronghold_defense":
                                [],
                            "company":
                                [],
                            "team":
                                [],
                            "stronghold_skirmish":
                                [],
                            "regular_team":
                                []
                        },
                        "5457":
                        {
                            "all":
                                [
                                    {
                                        "vehicleStatisticsSnapshotId": 158,
                                        "accountId": 1004866884,
                                        "vehicleId": 5457,
                                        "gameMode": "all",
                                        "createDate": "2022-09-07T16:35:18.963+0000",
                                        "totalBattles": 101,
                                        "survivedBattles": 15,
                                        "killDeathRatio": 0.976744,
                                        "hitMissRatio": 0.72452,
                                        "winLossRatio": 0.564356,
                                        "averageWn8": 1594.87,
                                        "averageExperience": 614.842,
                                        "averageDamage": 925.99,
                                        "averageKills": 0.831683,
                                        "averageDamageReceived": 1063.18,
                                        "averageShots": 13.4059,
                                        "averageStunAssistedDamage": 0.0,
                                        "averageCapturePoints": 0.306931,
                                        "averageDroppedCapturePoints": 0.267327,
                                        "averageSpotting": 1.70297
                                    }
                                ],
                            "clan":
                                [],
                            "stronghold_defense":
                                [],
                            "company":
                                [],
                            "team":
                                [],
                            "stronghold_skirmish":
                                [],
                            "regular_team":
                                []
                        },
                        "3409":
                        {
                            "all":
                                [],
                            "clan":
                                [],
                            "stronghold_defense":
                                [],
                            "company":
                                [],
                            "team":
                                [],
                            "stronghold_skirmish":
                                [],
                            "regular_team":
                                []
                        },
                        "2913":
                        {
                            "all":
                                [
                                    {
                                        "vehicleStatisticsSnapshotId": 27,
                                        "accountId": 1004866884,
                                        "vehicleId": 2913,
                                        "gameMode": "all",
                                        "createDate": "2022-09-07T16:35:16.967+0000",
                                        "totalBattles": 33,
                                        "survivedBattles": 8,
                                        "killDeathRatio": 1.56,
                                        "hitMissRatio": 0.650463,
                                        "winLossRatio": 0.606061,
                                        "averageWn8": 1824.81,
                                        "averageExperience": 533.818,
                                        "averageDamage": 402.697,
                                        "averageKills": 1.18182,
                                        "averageDamageReceived": 297.091,
                                        "averageShots": 13.0909,
                                        "averageStunAssistedDamage": 0.0,
                                        "averageCapturePoints": 7.0,
                                        "averageDroppedCapturePoints": 0.0,
                                        "averageSpotting": 2.0
                                    }
                                ],
                            "clan":
                                [],
                            "stronghold_defense":
                                [],
                            "company":
                                [],
                            "team":
                                [],
                            "stronghold_skirmish":
                                [],
                            "regular_team":
                                []
                        },
                        "5473":
                        {
                            "all":
                                [
                                    {
                                        "vehicleStatisticsSnapshotId": 9,
                                        "accountId": 1004866884,
                                        "vehicleId": 5473,
                                        "gameMode": "all",
                                        "createDate": "2022-09-07T16:35:16.632+0000",
                                        "totalBattles": 21,
                                        "survivedBattles": 7,
                                        "killDeathRatio": 2.0,
                                        "hitMissRatio": 0.6875,
                                        "winLossRatio": 0.428571,
                                        "averageWn8": 2001.97,
                                        "averageExperience": 710.524,
                                        "averageDamage": 1062.52,
                                        "averageKills": 1.33333,
                                        "averageDamageReceived": 927.19,
                                        "averageShots": 4.57143,
                                        "averageStunAssistedDamage": 0.0,
                                        "averageCapturePoints": 2.28571,
                                        "averageDroppedCapturePoints": 0.0,
                                        "averageSpotting": 0.904762
                                    }
                                ],
                            "clan":
                                [],
                            "stronghold_defense":
                                [],
                            "company":
                                [],
                            "team":
                                [],
                            "stronghold_skirmish":
                                [],
                            "regular_team":
                                []
                        },
                        "2401":
                        {
                            "all":
                                [],
                            "clan":
                                [],
                            "stronghold_defense":
                                [],
                            "company":
                                [],
                            "team":
                                [],
                            "stronghold_skirmish":
                                [],
                            "regular_team":
                                []
                        },
                        "1377":
                        {
                            "all":
                                [
                                    {
                                        "vehicleStatisticsSnapshotId": 23,
                                        "accountId": 1004866884,
                                        "vehicleId": 1377,
                                        "gameMode": "all",
                                        "createDate": "2022-09-07T16:35:16.871+0000",
                                        "totalBattles": 34,
                                        "survivedBattles": 6,
                                        "killDeathRatio": 1.42857,
                                        "hitMissRatio": 0.67147,
                                        "winLossRatio": 0.411765,
                                        "averageWn8": 1665.94,
                                        "averageExperience": 391.529,
                                        "averageDamage": 541.412,
                                        "averageKills": 1.17647,
                                        "averageDamageReceived": 407.382,
                                        "averageShots": 10.2059,
                                        "averageStunAssistedDamage": 0.0,
                                        "averageCapturePoints": 1.0,
                                        "averageDroppedCapturePoints": 2.35294,
                                        "averageSpotting": 0.764706
                                    }
                                ],
                            "clan":
                                [],
                            "stronghold_defense":
                                [],
                            "company":
                                [],
                            "team":
                                [],
                            "stronghold_skirmish":
                                [],
                            "regular_team":
                                []
                        },
                        "51553":
                        {
                            "all":
                                [
                                    {
                                        "vehicleStatisticsSnapshotId": 157,
                                        "accountId": 1004866884,
                                        "vehicleId": 51553,
                                        "gameMode": "all",
                                        "createDate": "2022-09-07T16:35:18.949+0000",
                                        "totalBattles": 24,
                                        "survivedBattles": 5,
                                        "killDeathRatio": 1.31579,
                                        "hitMissRatio": 0.583658,
                                        "winLossRatio": 0.458333,
                                        "averageWn8": 1468.91,
                                        "averageExperience": 503.542,
                                        "averageDamage": 538.417,
                                        "averageKills": 1.04167,
                                        "averageDamageReceived": 401.083,
                                        "averageShots": 10.7083,
                                        "averageStunAssistedDamage": 0.0,
                                        "averageCapturePoints": 0.0,
                                        "averageDroppedCapturePoints": 0.791667,
                                        "averageSpotting": 0.541667
                                    }
                                ],
                            "clan":
                                [],
                            "stronghold_defense":
                                [],
                            "company":
                                [],
                            "team":
                                [],
                            "stronghold_skirmish":
                                [],
                            "regular_team":
                                []
                        },
                        "1889":
                        {
                            "all":
                                [
                                    {
                                        "vehicleStatisticsSnapshotId": 170,
                                        "accountId": 1004866884,
                                        "vehicleId": 1889,
                                        "gameMode": "all",
                                        "createDate": "2022-09-07T16:35:19.174+0000",
                                        "totalBattles": 29,
                                        "survivedBattles": 6,
                                        "killDeathRatio": 1.73913,
                                        "hitMissRatio": 0.660422,
                                        "winLossRatio": 0.413793,
                                        "averageWn8": 1825.59,
                                        "averageExperience": 521.69,
                                        "averageDamage": 826.897,
                                        "averageKills": 1.37931,
                                        "averageDamageReceived": 704.276,
                                        "averageShots": 14.7241,
                                        "averageStunAssistedDamage": 0.0,
                                        "averageCapturePoints": 0.0,
                                        "averageDroppedCapturePoints": 0.689655,
                                        "averageSpotting": 1.10345
                                    }
                                ],
                            "clan":
                                [],
                            "stronghold_defense":
                                [],
                            "company":
                                [],
                            "team":
                                [],
                            "stronghold_skirmish":
                                [],
                            "regular_team":
                                []
                        },
                        "1393":
                        {
                            "all":
                                [
                                    {
                                        "vehicleStatisticsSnapshotId": 40,
                                        "accountId": 1004866884,
                                        "vehicleId": 1393,
                                        "gameMode": "all",
                                        "createDate": "2022-09-07T16:35:17.175+0000",
                                        "totalBattles": 24,
                                        "survivedBattles": 6,
                                        "killDeathRatio": 1.61111,
                                        "hitMissRatio": 0.687379,
                                        "winLossRatio": 0.541667,
                                        "averageWn8": 2732.13,
                                        "averageExperience": 945.083,
                                        "averageDamage": 1173.71,
                                        "averageKills": 1.20833,
                                        "averageDamageReceived": 799.0,
                                        "averageShots": 21.4583,
                                        "averageStunAssistedDamage": 0.0,
                                        "averageCapturePoints": 0.0,
                                        "averageDroppedCapturePoints": 0.0,
                                        "averageSpotting": 1.79167
                                    }
                                ],
                            "clan":
                                [],
                            "stronghold_defense":
                                [],
                            "company":
                                [],
                            "team":
                                [],
                            "stronghold_skirmish":
                                [],
                            "regular_team":
                                []
                        },
                        "881":
                        {
                            "all":
                                [],
                            "clan":
                                [],
                            "stronghold_defense":
                                [],
                            "company":
                                [],
                            "team":
                                [],
                            "stronghold_skirmish":
                                [],
                            "regular_team":
                                []
                        },
                        "4481":
                        {
                            "all":
                                [
                                    {
                                        "vehicleStatisticsSnapshotId": 69,
                                        "accountId": 1004866884,
                                        "vehicleId": 4481,
                                        "gameMode": "all",
                                        "createDate": "2022-09-07T16:35:17.702+0000",
                                        "totalBattles": 19,
                                        "survivedBattles": 9,
                                        "killDeathRatio": 3.1,
                                        "hitMissRatio": 0.642361,
                                        "winLossRatio": 0.631579,
                                        "averageWn8": 2650.92,
                                        "averageExperience": 993.053,
                                        "averageDamage": 2428.79,
                                        "averageKills": 1.63158,
                                        "averageDamageReceived": 1053.05,
                                        "averageShots": 15.1579,
                                        "averageStunAssistedDamage": 0.0,
                                        "averageCapturePoints": 0.842105,
                                        "averageDroppedCapturePoints": 0.0,
                                        "averageSpotting": 0.578947
                                    }
                                ],
                            "clan":
                                [],
                            "stronghold_defense":
                                [],
                            "company":
                                [],
                            "team":
                                [],
                            "stronghold_skirmish":
                                [],
                            "regular_team":
                                []
                        },
                        "52097":
                        {
                            "all":
                                [],
                            "clan":
                                [],
                            "stronghold_defense":
                                [],
                            "company":
                                [],
                            "team":
                                [],
                            "stronghold_skirmish":
                                [],
                            "regular_team":
                                []
                        },
                        "1409":
                        {
                            "all":
                                [
                                    {
                                        "vehicleStatisticsSnapshotId": 63,
                                        "accountId": 1004866884,
                                        "vehicleId": 1409,
                                        "gameMode": "all",
                                        "createDate": "2022-09-07T16:35:17.613+0000",
                                        "totalBattles": 20,
                                        "survivedBattles": 4,
                                        "killDeathRatio": 0.9375,
                                        "hitMissRatio": 0.663158,
                                        "winLossRatio": 0.55,
                                        "averageWn8": 1424.88,
                                        "averageExperience": 443.0,
                                        "averageDamage": 761.0,
                                        "averageKills": 0.75,
                                        "averageDamageReceived": 699.7,
                                        "averageShots": 9.5,
                                        "averageStunAssistedDamage": 0.0,
                                        "averageCapturePoints": 0.0,
                                        "averageDroppedCapturePoints": 0.0,
                                        "averageSpotting": 0.85
                                    }
                                ],
                            "clan":
                                [],
                            "stronghold_defense":
                                [],
                            "company":
                                [],
                            "team":
                                [],
                            "stronghold_skirmish":
                                [],
                            "regular_team":
                                []
                        },
                        "3457":
                        {
                            "all":
                                [
                                    {
                                        "vehicleStatisticsSnapshotId": 108,
                                        "accountId": 1004866884,
                                        "vehicleId": 3457,
                                        "gameMode": "all",
                                        "createDate": "2022-09-07T16:35:18.309+0000",
                                        "totalBattles": 15,
                                        "survivedBattles": 5,
                                        "killDeathRatio": 1.1,
                                        "hitMissRatio": 0.626667,
                                        "winLossRatio": 0.6,
                                        "averageWn8": 1348.56,
                                        "averageExperience": 484.4,
                                        "averageDamage": 508.533,
                                        "averageKills": 0.733333,
                                        "averageDamageReceived": 263.8,
                                        "averageShots": 5.0,
                                        "averageStunAssistedDamage": 0.0,
                                        "averageCapturePoints": 0.0,
                                        "averageDroppedCapturePoints": 0.0,
                                        "averageSpotting": 1.0
                                    }
                                ],
                            "clan":
                                [],
                            "stronghold_defense":
                                [],
                            "company":
                                [],
                            "team":
                                [],
                            "stronghold_skirmish":
                                [],
                            "regular_team":
                                []
                        },
                        "3969":
                        {
                            "all":
                                [
                                    {
                                        "vehicleStatisticsSnapshotId": 138,
                                        "accountId": 1004866884,
                                        "vehicleId": 3969,
                                        "gameMode": "all",
                                        "createDate": "2022-09-07T16:35:18.695+0000",
                                        "totalBattles": 84,
                                        "survivedBattles": 31,
                                        "killDeathRatio": 1.79245,
                                        "hitMissRatio": 0.690698,
                                        "winLossRatio": 0.595238,
                                        "averageWn8": 2054.44,
                                        "averageExperience": 606.976,
                                        "averageDamage": 1190.05,
                                        "averageKills": 1.13095,
                                        "averageDamageReceived": 654.381,
                                        "averageShots": 10.2381,
                                        "averageStunAssistedDamage": 0.0,
                                        "averageCapturePoints": 1.19048,
                                        "averageDroppedCapturePoints": 1.39286,
                                        "averageSpotting": 0.464286
                                    }
                                ],
                            "clan":
                                [],
                            "stronghold_defense":
                                [],
                            "company":
                                [],
                            "team":
                                [],
                            "stronghold_skirmish":
                                [],
                            "regular_team":
                                []
                        },
                        "2945":
                        {
                            "all":
                                [],
                            "clan":
                                [],
                            "stronghold_defense":
                                [],
                            "company":
                                [],
                            "team":
                                [],
                            "stronghold_skirmish":
                                [],
                            "regular_team":
                                []
                        },
                        "897":
                        {
                            "all":
                                [],
                            "clan":
                                [],
                            "stronghold_defense":
                                [],
                            "company":
                                [],
                            "team":
                                [],
                            "stronghold_skirmish":
                                [],
                            "regular_team":
                                []
                        },
                        "52609":
                        {
                            "all":
                                [],
                            "clan":
                                [],
                            "stronghold_defense":
                                [],
                            "company":
                                [],
                            "team":
                                [],
                            "stronghold_skirmish":
                                [],
                            "regular_team":
                                []
                        },
                        "4993":
                        {
                            "all":
                                [
                                    {
                                        "vehicleStatisticsSnapshotId": 178,
                                        "accountId": 1004866884,
                                        "vehicleId": 4993,
                                        "gameMode": "all",
                                        "createDate": "2022-09-07T16:35:19.284+0000",
                                        "totalBattles": 61,
                                        "survivedBattles": 16,
                                        "killDeathRatio": 1.22222,
                                        "hitMissRatio": 0.714524,
                                        "winLossRatio": 0.47541,
                                        "averageWn8": 2019.45,
                                        "averageExperience": 877.902,
                                        "averageDamage": 1588.1,
                                        "averageKills": 0.901639,
                                        "averageDamageReceived": 1297.84,
                                        "averageShots": 9.81967,
                                        "averageStunAssistedDamage": 0.0,
                                        "averageCapturePoints": 0.0,
                                        "averageDroppedCapturePoints": 0.0,
                                        "averageSpotting": 1.37705
                                    }
                                ],
                            "clan":
                                [],
                            "stronghold_defense":
                                [],
                            "company":
                                [],
                            "team":
                                [],
                            "stronghold_skirmish":
                                [],
                            "regular_team":
                                []
                        },
                        "2961":
                        {
                            "all":
                                [
                                    {
                                        "vehicleStatisticsSnapshotId": 1,
                                        "accountId": 1004866884,
                                        "vehicleId": 2961,
                                        "gameMode": "all",
                                        "createDate": "2022-09-07T16:35:16.435+0000",
                                        "totalBattles": 22,
                                        "survivedBattles": 6,
                                        "killDeathRatio": 1.5,
                                        "hitMissRatio": 0.762931,
                                        "winLossRatio": 0.454545,
                                        "averageWn8": 2433.16,
                                        "averageExperience": 956.682,
                                        "averageDamage": 1875.5,
                                        "averageKills": 1.09091,
                                        "averageDamageReceived": 1298.59,
                                        "averageShots": 10.5455,
                                        "averageStunAssistedDamage": 0.0,
                                        "averageCapturePoints": 0.0,
                                        "averageDroppedCapturePoints": 0.0,
                                        "averageSpotting": 1.31818
                                    }
                                ],
                            "clan":
                                [],
                            "stronghold_defense":
                                [],
                            "company":
                                [],
                            "team":
                                [],
                            "stronghold_skirmish":
                                [],
                            "regular_team":
                                []
                        },
                        "913":
                        {
                            "all":
                                [],
                            "clan":
                                [],
                            "stronghold_defense":
                                [],
                            "company":
                                [],
                            "team":
                                [],
                            "stronghold_skirmish":
                                [],
                            "regular_team":
                                []
                        },
                        "2449":
                        {
                            "all":
                                [
                                    {
                                        "vehicleStatisticsSnapshotId": 74,
                                        "accountId": 1004866884,
                                        "vehicleId": 2449,
                                        "gameMode": "all",
                                        "createDate": "2022-09-07T16:35:17.772+0000",
                                        "totalBattles": 51,
                                        "survivedBattles": 10,
                                        "killDeathRatio": 0.878049,
                                        "hitMissRatio": 0.633252,
                                        "winLossRatio": 0.54902,
                                        "averageWn8": 1261.87,
                                        "averageExperience": 419.667,
                                        "averageDamage": 668.255,
                                        "averageKills": 0.705882,
                                        "averageDamageReceived": 660.176,
                                        "averageShots": 8.01961,
                                        "averageStunAssistedDamage": 0.0,
                                        "averageCapturePoints": 0.0392157,
                                        "averageDroppedCapturePoints": 0.0,
                                        "averageSpotting": 0.745098
                                    }
                                ],
                            "clan":
                                [],
                            "stronghold_defense":
                                [],
                            "company":
                                [],
                            "team":
                                [],
                            "stronghold_skirmish":
                                [],
                            "regular_team":
                                []
                        },
                        "1937":
                        {
                            "all":
                                [],
                            "clan":
                                [],
                            "stronghold_defense":
                                [],
                            "company":
                                [],
                            "team":
                                [],
                            "stronghold_skirmish":
                                [],
                            "regular_team":
                                []
                        },
                        "1953":
                        {
                            "all":
                                [
                                    {
                                        "vehicleStatisticsSnapshotId": 2,
                                        "accountId": 1004866884,
                                        "vehicleId": 1953,
                                        "gameMode": "all",
                                        "createDate": "2022-09-07T16:35:16.468+0000",
                                        "totalBattles": 14,
                                        "survivedBattles": 5,
                                        "killDeathRatio": 2.77778,
                                        "hitMissRatio": 0.710843,
                                        "winLossRatio": 0.571429,
                                        "averageWn8": 3478.45,
                                        "averageExperience": 1028.07,
                                        "averageDamage": 1489.86,
                                        "averageKills": 1.78571,
                                        "averageDamageReceived": 886.286,
                                        "averageShots": 11.8571,
                                        "averageStunAssistedDamage": 0.0,
                                        "averageCapturePoints": 1.28571,
                                        "averageDroppedCapturePoints": 0.857143,
                                        "averageSpotting": 2.28571
                                    }
                                ],
                            "clan":
                                [],
                            "stronghold_defense":
                                [],
                            "company":
                                [],
                            "team":
                                [],
                            "stronghold_skirmish":
                                [],
                            "regular_team":
                                []
                        },
                        "1441":
                        {
                            "all":
                                [
                                    {
                                        "vehicleStatisticsSnapshotId": 29,
                                        "accountId": 1004866884,
                                        "vehicleId": 1441,
                                        "gameMode": "all",
                                        "createDate": "2022-09-07T16:35:16.990+0000",
                                        "totalBattles": 17,
                                        "survivedBattles": 8,
                                        "killDeathRatio": 2.55556,
                                        "hitMissRatio": 0.676768,
                                        "winLossRatio": 0.705882,
                                        "averageWn8": 1831.45,
                                        "averageExperience": 452.765,
                                        "averageDamage": 526.235,
                                        "averageKills": 1.35294,
                                        "averageDamageReceived": 384.706,
                                        "averageShots": 11.6471,
                                        "averageStunAssistedDamage": 0.0,
                                        "averageCapturePoints": 0.0,
                                        "averageDroppedCapturePoints": 0.0,
                                        "averageSpotting": 1.29412
                                    }
                                ],
                            "clan":
                                [],
                            "stronghold_defense":
                                [],
                            "company":
                                [],
                            "team":
                                [],
                            "stronghold_skirmish":
                                [],
                            "regular_team":
                                []
                        },
                        "2465":
                        {
                            "all":
                                [
                                    {
                                        "vehicleStatisticsSnapshotId": 25,
                                        "accountId": 1004866884,
                                        "vehicleId": 2465,
                                        "gameMode": "all",
                                        "createDate": "2022-09-07T16:35:16.938+0000",
                                        "totalBattles": 74,
                                        "survivedBattles": 32,
                                        "killDeathRatio": 3.28571,
                                        "hitMissRatio": 0.767191,
                                        "winLossRatio": 0.554054,
                                        "averageWn8": 3196.81,
                                        "averageExperience": 1061.84,
                                        "averageDamage": 2532.82,
                                        "averageKills": 1.86486,
                                        "averageDamageReceived": 1310.61,
                                        "averageShots": 13.7568,
                                        "averageStunAssistedDamage": 0.0,
                                        "averageCapturePoints": 0.148649,
                                        "averageDroppedCapturePoints": 3.10811,
                                        "averageSpotting": 1.27027
                                    }
                                ],
                            "clan":
                                [],
                            "stronghold_defense":
                                [],
                            "company":
                                [],
                            "team":
                                [],
                            "stronghold_skirmish":
                                [],
                            "regular_team":
                                []
                        },
                        "929":
                        {
                            "all":
                                [],
                            "clan":
                                [],
                            "stronghold_defense":
                                [],
                            "company":
                                [],
                            "team":
                                [],
                            "stronghold_skirmish":
                                [],
                            "regular_team":
                                []
                        }
                    }
                }
            },
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
        // console.log(this.state)
        // this.getPlayerStatistics();
        // this.getPlayerVehicleStatistics();
    }

    componentWillUnmount() {
        this.setState({
            mounted: false
        })
    }

    getPlayerStatistics() {
        axios.get(
            `http://localhost:8081/api/stats/players?accountIds=${this.state.accountId}`
        ).then(result => {
            this.setState({
                playerStatistics: result.data
            })
        }).error(error => {
            console.log(error)
        })
    }

    getPlayerVehicleStatistics() {
        axios.get(
            `http://localhost:8081/api/stats/vehicles?accountIds=${this.state.accountId}&vehicleIds`
        ).then(result => {
            this.setState({
                vehicleStatistics: result.data
            })
        }).error(error => {
            console.log(error)
        })
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
