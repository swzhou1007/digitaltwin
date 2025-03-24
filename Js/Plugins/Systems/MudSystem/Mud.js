oMud = {
    data: [],
    waterSurEntityTimerangeArr: [],
    currentSystem: false,
    mudSystem: {
        "name": "Mud",
        "cameraPosition": [106.07283636443235, 29.869583307680518, 115.50051002485527],
        "cameraHeadingPitchRoll": [90.05, -71.67, 360.00]
    },
    timeInputRange: false,
    systemCameraControler: null,
    orientationArr: [],
    flyPositions: [
        [106.07307904377836, 29.86911382589741, 45.191578245702864],
        [106.07311602741008, 29.86917954063363, 12.211172944488048],
        [106.07311602741008, 29.86917954063363, 12.211172944488048],
        [106.07309497370115, 29.869142678726615, 21.219702421855086],
        [106.07315943247147, 29.869142678726615, 21.219702421855086],
        [106.07322517160594, 29.869159473453053, 12.072408073425198],
        [106.07322517160594, 29.869159473453053, 12.072408073425198],
        [106.07322517160594, 29.869159473453053, 21.219702421855086],
        [106.07322517160594, 29.869379753680885, 21.219702421855086],
        [106.07322517160594, 29.869379753680885, 30.219702421855086],
        [106.07322517160594, 29.869379753680885, 30.219702421855086],
        [106.07329095772822, 29.86941110233292, 20.428173376582986],
        [106.07329095772822, 29.86941110233292, 20.428173376582986],
        [106.0733603094866, 29.869420083837426, 28.06404153818876],
        [106.0733603094866, 29.869420083837426, 28.06404153818876],
        [106.07330133847829, 29.869505014513322, 15.270951501005026],
        [106.07330133847829, 29.869505014513322, 15.270951501005026],
        [106.07335173857642, 29.86948946222653, 28.135720426290934],


        [106.07329345159101, 29.86976906672865, 19.918340525837078],
        [106.07329345159101, 29.86976906672865, 19.918340525837078],
        [106.07330060583273, 29.8698389265275, 21.349987047175215],
        [106.07330060583273, 29.8698389265275, 21.349987047175215],
        [106.073246174833, 29.869901721037728, 21.408468622212766],
        [106.073246174833, 29.869901721037728, 21.408468622212766]

    ],
    audio: {
        play: function() {
            var audio = document.getElementById("audio_player");
            var rangeInput = document.getElementById("systemFlyTimeLine");
            var currentT = audio.duration * rangeInput.value / 100;
            if (!isNaN(currentT)) {
                audio.currentTime = currentT;
            }
            audio.play()
        },
        pause: function() {
            var audio = document.getElementById("audio_player");
            audio.pause()
        }
    },
    dataLabelList: [{
            "title": "排泥池",
            "state": "",
            "type": "data",
            "data": [{
                    "text": "液位",
                    "value": function() {
                        var value = '--';
                        oMud.data.map(function(item) {
                            if (item.opcid == 'pncyw') {
                                value = parseFloat(item.opcvalue).toFixed(2);
                            }
                        })
                        return value;
                    },
                    "unit": "m"
                }

            ],
            "position": [106.0732162295, 29.8691862662, 12],
            "orientation": [90, -30, 5],
            "showUpTime": 85.4,
            "showUpCameraDistance": 13,
            "labelID": "Mud-label-1",
            "pid": "08",
            "system": "Mud"
        },
        {
            "title": "浓缩池",
            "state": "",
            "type": "data",
            "data": [{
                    "text": "液位",
                    "value": function() {
                        var value = '--';
                        oMud.data.map(function(item) {
                            if (item.opcid == 'nscyw') {
                                value = parseFloat(item.opcvalue).toFixed(2);
                            }
                        })
                        return value;
                    },
                    "unit": "m"
                }

            ],
            "position": [106.0731782669, 29.8694594788, 16],
            "orientation": [-90, -30, 5],
            "showUpTime": 85.4,
            "showUpCameraDistance": 13,
            "labelID": "Mud-label-2",
            "pid": "08",
            "system": "Mud"
        },
        {
            "title": "排泥池搅拌机1#",
            "state": "手动",
            "type": "data",
            "data": [{
                    "text": "状态",
                    "value": function() {
                        var value = '--';
                        oMud.data.map(function(item) {
                            if (item.opcid == 'pnc1jbqyxzs') {
                                if (item.opcvalue == '0') {
                                    value = '停止'
                                }
                                if (item.opcvalue == '1') {
                                    value = '运行'
                                }
                            }
                        })
                        return value;
                    },
                    "unit": ""
                },
                {
                    "text": "手动/自动",
                    "value": function() {
                        var value = '--';
                        oMud.data.map(function(item) {
                            if (item.opcid == 'pnc1jbqsdzd') {
                                if (item.opcvalue == '0') {
                                    value = '手动'
                                }
                                if (item.opcvalue == '1') {
                                    value = '自动'
                                }
                            }
                        })
                        return value;
                    },
                    "unit": ""
                },
            ],
            "position": [106.0732793289, 29.8691771489, 8],
            "orientation": [90, -30, 5],
            "showUpTime": 85.4,
            "showUpCameraDistance": 13,
            "labelID": "Mud-label-30",
            "pid": "08",
            "system": "Mud"
        },
        {
            "title": "排泥池搅拌机2#",
            "state": "手动",
            "type": "data",
            "data": [{
                    "text": "状态",
                    "value": function() {
                        var value = '--';
                        oMud.data.map(function(item) {
                            if (item.opcid == 'pnc2jbqyxzs') {
                                if (item.opcvalue == '0') {
                                    value = '停止'
                                }
                                if (item.opcvalue == '1') {
                                    value = '运行'
                                }
                            }
                        })
                        return value;
                    },
                    "unit": ""
                },
                {
                    "text": "手动/自动",
                    "value": function() {
                        var value = '--';
                        oMud.data.map(function(item) {
                            if (item.opcid == 'pnc2jbqsdzd') {
                                if (item.opcvalue == '0') {
                                    value = '手动'
                                }
                                if (item.opcvalue == '1') {
                                    value = '自动'
                                }
                            }
                        })
                        return value;
                    },
                    "unit": ""
                },
            ],
            "position": [106.0732793289, 29.8691946645, 8],
            "orientation": [90, -30, 5],
            "showUpTime": 85.4,
            "showUpCameraDistance": 13,
            "labelID": "Mud-label-22",
            "pid": "08",
            "system": "Mud"
        },
        {
            "title": "排泥池搅拌机3#",
            "state": "手动",
            "type": "data",
            "data": [{
                    "text": "状态",
                    "value": function() {
                        var value = '--';
                        oMud.data.map(function(item) {
                            if (item.opcid == 'pnc3jbqyxzs') {
                                if (item.opcvalue == '0') {
                                    value = '停止'
                                }
                                if (item.opcvalue == '1') {
                                    value = '运行'
                                }
                            }
                        })
                        return value;
                    },
                    "unit": ""
                },
                {
                    "text": "手动/自动",
                    "value": function() {
                        var value = '--';
                        oMud.data.map(function(item) {
                            if (item.opcid == 'pnc3jbqsdzd') {

                                if (item.opcvalue == '0') {
                                    value = '手动'
                                }
                                if (item.opcvalue == '1') {
                                    value = '自动'
                                }
                            }
                        })
                        return value;
                    },
                    "unit": ""
                },
            ],
            "position": [106.0731393669, 29.8691270652, 8],
            "orientation": [-90, -30, 5],
            "showUpTime": 85.4,
            "showUpCameraDistance": 13,
            "labelID": "Mud-label-29",
            "pid": "08",
            "system": "Mud"
        },
        {
            "title": "排泥池搅拌机4#",
            "state": "手动",
            "type": "data",
            "data": [{
                    "text": "状态",
                    "value": function() {
                        var value = '--';
                        oMud.data.map(function(item) {
                            if (item.opcid == 'pnc4jbqyxzs') {
                                if (item.opcvalue == '0') {
                                    value = '停止'
                                }
                                if (item.opcvalue == '1') {
                                    value = '运行'
                                }
                            }
                        })
                        return value;
                    },
                    "unit": ""
                },
                {
                    "text": "手动/自动",
                    "value": function() {
                        var value = '--';
                        oMud.data.map(function(item) {
                            if (item.opcid == 'pnc4jbqsdzd') {
                                if (item.opcvalue == '0') {
                                    value = '手动'
                                }
                                if (item.opcvalue == '1') {
                                    value = '自动'
                                }
                            }
                        })
                        return value;
                    },
                    "unit": ""
                },
            ],
            "position": [106.0731396909, 29.8692440267, 8],
            "orientation": [-90, -30, 5],
            "showUpTime": 85.4,
            "showUpCameraDistance": 13,
            "labelID": "Mud-label-28",
            "pid": "08",
            "system": "Mud"
        },
        {
            "title": "排泥池潜水泵1#",
            "state": "中控",
            "type": "data",
            "data": [{
                    "text": "状态",
                    "value": function() {
                        var value = '--';
                        oMud.data.map(function(item) {
                            if (item.opcid == 'pnc1qsbyxzs') {
                                if (item.opcvalue == '0') {
                                    value = '停止'
                                }
                                if (item.opcvalue == '1') {
                                    value = '运行'
                                }
                            }
                        })
                        return value;
                    },
                    "unit": ""
                },
                {
                    "text": "手动/联动",
                    "value": function() {
                        var value = '--';
                        oMud.data.map(function(item) {
                            if (item.opcid == 'pnc1qsbsdld') {
                                if (item.opcvalue == '0') {
                                    value = '手动'
                                }
                                if (item.opcvalue == '1') {
                                    value = '联动'
                                }
                            }
                        })
                        return value;
                    },
                    "unit": ""
                },
            ],
            "position": [106.0732766174, 29.8691341312, 8],
            "orientation": [90, -30, 5],
            "showUpTime": 85.4,
            "showUpCameraDistance": 13,
            "labelID": "Mud-label-23",
            "pid": "08",
            "system": "Mud"
        },
        {
            "title": "排泥池潜水泵4#",
            "state": "中控",
            "type": "data",
            "data": [{
                    "text": "状态",
                    "value": function() {
                        var value = '--';
                        oMud.data.map(function(item) {
                            if (item.opcid == 'pnc4qsbyxzs') {
                                if (item.opcvalue == '0') {
                                    value = '停止'
                                }
                                if (item.opcvalue == '1') {
                                    value = '运行'
                                }
                            }
                        })
                        return value;
                    },
                    "unit": ""
                },
                {
                    "text": "手动/联动",
                    "value": function() {
                        var value = '--';
                        oMud.data.map(function(item) {
                            if (item.opcid == 'pnc4qsbsdld') {
                                if (item.opcvalue == '0') {
                                    value = '手动'
                                }
                                if (item.opcvalue == '1') {
                                    value = '联动'
                                }
                            }
                        })
                        return value;
                    },
                    "unit": ""
                },
            ],
            "position": [106.0732775578, 29.8691256274, 8],
            "orientation": [90, -30, 5],
            "showUpTime": 85.4,
            "showUpCameraDistance": 13,
            "labelID": "Mud-label-24",
            "pid": "08",
            "system": "Mud"
        },
        {
            "title": "排泥池潜水泵3#",
            "state": "中控",
            "type": "data",
            "data": [{
                    "text": "状态",
                    "value": function() {
                        var value = '--';
                        oMud.data.map(function(item) {
                            if (item.opcid == 'pnc3qsbyxzs') {
                                if (item.opcvalue == '0') {
                                    value = '停止'
                                }
                                if (item.opcvalue == '1') {
                                    value = '运行'
                                }
                            }
                        })
                        return value;
                    },
                    "unit": ""
                },
                {
                    "text": "手动/联动",
                    "value": function() {
                        var value = '--';
                        oMud.data.map(function(item) {
                            if (item.opcid == 'pnc3qsbsdld') {
                                if (item.opcvalue == '0') {
                                    value = '手动'
                                }
                                if (item.opcvalue == '1') {
                                    value = '联动'
                                }
                            }
                        })
                        return value;
                    },
                    "unit": ""
                },
            ],
            "position": [106.0732756515, 29.8692439030, 8],
            "orientation": [90, -30, 5],
            "showUpTime": 85.4,
            "showUpCameraDistance": 13,
            "labelID": "Mud-label-25",
            "pid": "08",
            "system": "Mud"
        },
        {
            "title": "排泥池潜水泵2#",
            "state": "中控",
            "type": "data",
            "data": [{
                    "text": "状态",
                    "value": function() {
                        var value = '--';
                        oMud.data.map(function(item) {
                            if (item.opcid == 'pnc2qsbyxzs') {
                                if (item.opcvalue == '0') {
                                    value = '停止'
                                }
                                if (item.opcvalue == '1') {
                                    value = '运行'
                                }
                            }
                        })
                        return value;
                    },
                    "unit": ""
                },
                {
                    "text": "手动/联动",
                    "value": function() {
                        var value = '--';
                        oMud.data.map(function(item) {
                            if (item.opcid == 'pnc2qsbsdld') {
                                if (item.opcvalue == '0') {
                                    value = '手动'
                                }
                                if (item.opcvalue == '1') {
                                    value = '联动'
                                }
                            }
                        })
                        return value;
                    },
                    "unit": ""
                },
            ],
            "position": [106.0732759380, 29.8692357651, 8],
            "orientation": [90, -30, 5],
            "showUpTime": 85.4,
            "showUpCameraDistance": 13,
            "labelID": "Mud-label-26",
            "pid": "08",
            "system": "Mud"
        }
    ],
    textLabelList: [{
            "name": "排泥池",
            "id": "mud-01",
            "position": [106.0732111165, 29.8692125158, 12]
        },
        {
            "name": "浓缩池一期",
            "id": "mud-02",
            "position": [106.0731866628, 29.8694653944, 18.58]
        },
        {
            "name": "浓缩池二期",
            "id": "mud-03",
            "position": [106.0731771445, 29.8695755304, 18.58]
        },
        {
            "name": "储泥池",
            "id": "mud-04",
            "position": [106.0732854366, 29.8695253460, 18.58]
        },
        {
            "name": "脱泥机房",
            "id": "mud-05",
            "position": [106.0731988255, 29.8698734559, 12.98]
        },
        {
            "name": "污水进入管道",
            "id": "mud-0601",
            "position": [106.0730536003, 29.8691891217, 11]
        },
        {
            "name": "去浓缩池管道",
            "id": "mud-0602",
            "position": [106.0733425452, 29.8693552045, 11]
        },
        {
            "name": "去脱泥机房管道",
            "id": "mud-0603",
            "position": [106.0732927367, 29.8695641224, 10.5]
        },

        {
            "name": "搅拌机2",
            "id": "mud-06",
            "position": [106.0731374021, 29.8692422234, 12.98]
        },
        {
            "name": "搅拌机3",
            "id": "mud-07",
            "position": [106.0731390977, 29.8691263213, 12.98]
        },
        {
            "name": "搅拌机1",
            "id": "mud-08",
            "position": [106.0732794533, 29.8691948644, 8]
        },
        {
            "name": "搅拌机4",
            "id": "mud-09",
            "position": [106.0732796683, 29.8691769061, 8]
        },

        {
            "name": "提升泵3",
            "id": "mud-10",
            "position": [106.0732780014, 29.8692448160, 8]
        },
        {
            "name": "提升泵2",
            "id": "mud-11",
            "position": [106.0732789342, 29.8692361072, 8]
        },
        {
            "name": "提升泵1",
            "id": "mud-12",
            "position": [106.0732765875, 29.8691349120, 8]
        },
        {
            "name": "提升泵4",
            "id": "mud-13",
            "position": [106.0732780876, 29.8691266691, 8]
        },


        {
            "name": "离心脱水机",
            "id": "mud-14",
            "position": [106.0732287061, 29.8699401462, 14.5]
        },
        {
            "name": "离心脱水机",
            "id": "mud-15",
            "position": [106.0732287061, 29.8699201462, 14.5]
        },

        {
            "name": "水平螺旋输送机",
            "id": "mud-16",
            "position": [106.0732334109, 29.8699814372, 13.2]
        },

        {
            "name": "污泥切割机",
            "id": "mud-17",
            "position": [106.0732301010, 29.8698755139, 11.2]
        },
        {
            "name": "污泥切割机",
            "id": "mud-18",
            "position": [106.0732301010, 29.8698905139, 11.2]
        },

        {
            "name": "污泥螺杆泵",
            "id": "mud-19",
            "position": [106.0732201010, 29.8698695139, 10.8]
        },
        {
            "name": "污泥螺杆泵",
            "id": "mud-20",
            "position": [106.0732201010, 29.8698825139, 10.8]
        },
        {
            "name": "絮凝加药装置",
            "id": "mud-21",
            "position": [106.0732307974, 29.8698320578, 13.7]
        },


    ],
    createFlowLine: function() {
        //polygon
        oDefault.waterFlowArrowArr = [];

        var positions = Cesium.Cartesian3.fromDegreesArray(
            [
                106.0730607905, 29.8691909055, 106.073047905, 29.8691909055,
                106.073047905, 29.8691954907, 106.0730607905, 29.8691954907
            ]);
        if (!oDefault.viewer) {
            return
        }
        var p2 = oDefault.viewer.entities.add({
            polygon: {
                hierarchy: {
                    positions: positions
                },
                height: 10.2,
                stRotation: Cesium.Math.toRadians(90),
                material: new Cesium.PolylineTrailLinkMaterialPropertyV(Cesium.Color.WHITE, 1000)
            }
        })
        oDefault.waterFlowArrowArr.push(p2);

        var positions = Cesium.Cartesian3.fromDegreesArray(
            [
                106.0732143773, 29.8691528242,
                106.0732143773, 29.8691623316,
                106.0731870084, 29.8691623316,
                106.0731870084, 29.8691528242
            ]);
        var p6 = oDefault.viewer.entities.add({
            polygon: {
                hierarchy: {
                    positions: positions
                },
                height: 10.2,
                stRotation: Cesium.Math.toRadians(90),
                material: new Cesium.PolylineTrailLinkMaterialPropertyV(Cesium.Color.WHITE, 1000)
            }
        })
        oDefault.waterFlowArrowArr.push(p6);

        var positions = Cesium.Cartesian3.fromDegreesArray(
            [
                106.0732143773, 29.8692088242,
                106.0732143773, 29.8692183316,
                106.0731870084, 29.8692183316,
                106.0731870084, 29.8692088242
            ]);
        var p6 = oDefault.viewer.entities.add({
            polygon: {
                hierarchy: {
                    positions: positions
                },
                height: 10.2,
                stRotation: Cesium.Math.toRadians(90),
                material: new Cesium.PolylineTrailLinkMaterialPropertyV(Cesium.Color.WHITE, 1000)
            }
        })
        oDefault.waterFlowArrowArr.push(p6);

        var positions = Cesium.Cartesian3.fromDegreesArray(
            [
                106.0733307905, 29.8692509055, 106.073317905, 29.8692509055,
                106.073317905, 29.8692554907, 106.0733307905, 29.8692554907
            ]);
        var p6 = oDefault.viewer.entities.add({
            polygon: {
                hierarchy: {
                    positions: positions
                },
                height: 10.2,
                stRotation: Cesium.Math.toRadians(90),
                material: new Cesium.PolylineTrailLinkMaterialPropertyV(Cesium.Color.WHITE, 1000)
            }
        })
        oDefault.waterFlowArrowArr.push(p6);

        var positions = Cesium.Cartesian3.fromDegreesArray(
            [
                106.0733307905, 29.8691409055, 106.073317905, 29.8691409055,
                106.073317905, 29.8691454907, 106.0733307905, 29.8691454907
            ]);
        var p7 = oDefault.viewer.entities.add({
            polygon: {
                hierarchy: {
                    positions: positions
                },
                height: 10.2,
                stRotation: Cesium.Math.toRadians(90),
                material: new Cesium.PolylineTrailLinkMaterialPropertyV(Cesium.Color.WHITE, 1000)
            }
        })
        oDefault.waterFlowArrowArr.push(p7);

        var positions = Cesium.Cartesian3.fromDegreesArray([
            106.0733558155, 29.8691714907, 106.0733507905, 29.8691714907,
            106.0733507905, 29.8691909055, 106.0733558155, 29.8691909055
        ]);
        var p8 = oDefault.viewer.entities.add({
            polygon: {
                hierarchy: {
                    positions: positions
                },
                height: 10.5,
                material: new Cesium.PolylineTrailLinkMaterialPropertyV(Cesium.Color.WHITE, 1000)
            }
        })
        oDefault.waterFlowArrowArr.push(p8);

        var positions = Cesium.Cartesian3.fromDegreesArray([
            106.0733558155, 29.8693014907, 106.0733507905, 29.8693014907,
            106.0733507905, 29.8693209055, 106.0733558155, 29.8693209055
        ]);
        var p9 = oDefault.viewer.entities.add({
            polygon: {
                hierarchy: {
                    positions: positions
                },
                height: 10.5,
                material: new Cesium.PolylineTrailLinkMaterialPropertyV(Cesium.Color.WHITE, 1000)
            }
        })
        oDefault.waterFlowArrowArr.push(p9);

        var positions = Cesium.Cartesian3.fromDegreesArray(
            [
                106.0732007905, 29.8695279055, 106.073187905, 29.8695279055,
                106.073187905, 29.8695324907, 106.0732007905, 29.8695324907
            ]);
        var p10 = oDefault.viewer.entities.add({
            polygon: {
                hierarchy: {
                    positions: positions
                },
                height: 11,
                stRotation: Cesium.Math.toRadians(-90),
                material: new Cesium.PolylineTrailLinkMaterialPropertyV(Cesium.Color.WHITE, 1000)
            }
        })
        oDefault.waterFlowArrowArr.push(p10);

        var positions = Cesium.Cartesian3.fromDegreesArray(
            [
                106.0732688155, 29.8694514907, 106.0732637905, 29.8694514907,
                106.0732507905, 29.8694709055, 106.0732558155, 29.8694709055
            ]);
        var p11 = oDefault.viewer.entities.add({
            polygon: {
                hierarchy: {
                    positions: positions
                },
                height: 11,
                stRotation: Cesium.Math.toRadians(-30),
                material: new Cesium.PolylineTrailLinkMaterialPropertyV(Cesium.Color.WHITE, 1000)
            }
        })
        oDefault.waterFlowArrowArr.push(p11);

        var positions = Cesium.Cartesian3.fromDegreesArray(
            [
                106.0732551884, 29.8695123472,
                106.0732551884, 29.8695083472,
                106.0732279153, 29.8694945078,
                106.0732279153, 29.8694985078
            ]);
        var p12 = oDefault.viewer.entities.add({
            polygon: {
                hierarchy: {
                    positions: positions
                },
                height: 10.5,
                // outline:true,
                stRotation: Cesium.Math.toRadians(60),
                material: new Cesium.PolylineTrailLinkMaterialPropertyV(Cesium.Color.WHITE, 1000)
            }
        })

        oDefault.waterFlowArrowArr.push(p12);
        var positions = Cesium.Cartesian3.fromDegreesArray(
            [
                106.0732551884, 29.8695383472,
                106.0732551884, 29.8695343472,
                106.0732279153, 29.8695485078,
                106.0732279153, 29.8695525078
            ]);
        var p13 = oDefault.viewer.entities.add({
            polygon: {
                hierarchy: {
                    positions: positions
                },
                height: 10.5,
                // outline:true,
                stRotation: Cesium.Math.toRadians(120),
                material: new Cesium.PolylineTrailLinkMaterialPropertyV(Cesium.Color.WHITE, 1000)
            }
        })
        oDefault.waterFlowArrowArr.push(p13);

        var positions = Cesium.Cartesian3.fromDegreesArray([
            106.0733180866, 29.8696280620,
            106.0733180866, 29.8696074551,
            106.0733099577, 29.8696074551,
            106.0733099577, 29.8696280620
        ]);
        var p14 = oDefault.viewer.entities.add({
            polygon: {
                hierarchy: {
                    positions: positions
                },
                height: 10.5,
                material: new Cesium.PolylineTrailLinkMaterialPropertyV(Cesium.Color.WHITE, 1000)
            }
        })
        oDefault.waterFlowArrowArr.push(p14);

        var positions = Cesium.Cartesian3.fromDegreesArray([
            106.0733180866, 29.8697280620,
            106.0733180866, 29.8697074551,
            106.0733099577, 29.8697074551,
            106.0733099577, 29.8697280620
        ]);
        var p16 = oDefault.viewer.entities.add({
            polygon: {
                hierarchy: {
                    positions: positions
                },
                height: 10.5,
                material: new Cesium.PolylineTrailLinkMaterialPropertyV(Cesium.Color.WHITE, 1000)
            }
        })
        oDefault.waterFlowArrowArr.push(p16);

        var positions = Cesium.Cartesian3.fromDegreesArray([
            106.0733180866, 29.8698280620,
            106.0733180866, 29.8698074551,
            106.0733099577, 29.8698074551,
            106.0733099577, 29.8698280620
        ]);
        var p18 = oDefault.viewer.entities.add({
            polygon: {
                hierarchy: {
                    positions: positions
                },
                height: 10.5,
                material: new Cesium.PolylineTrailLinkMaterialPropertyV(Cesium.Color.WHITE, 1000)
            }
        })
        oDefault.waterFlowArrowArr.push(p18);

        var positions = Cesium.Cartesian3.fromDegreesArray([
            106.0732680866, 29.8698800620,
            106.0732680866, 29.8698764551,
            106.0732899577, 29.8698764551,
            106.0732899577, 29.8698800620
        ]);
        var p19 = oDefault.viewer.entities.add({
            polygon: {
                hierarchy: {
                    positions: positions
                },
                height: 10.5,
                stRotation: Cesium.Math.toRadians(-90),
                material: new Cesium.PolylineTrailLinkMaterialPropertyV(Cesium.Color.WHITE, 1000)
            }
        })
        oDefault.waterFlowArrowArr.push(p19);

        var positions = Cesium.Cartesian3.fromDegreesArray([
            106.0732628906, 29.8698472191,
            106.0732628906, 29.8698530677,
            106.0732582814, 29.8698530677,
            106.0732582814, 29.8698472191
        ]);
        var p19 = oDefault.viewer.entities.add({
            polygon: {
                hierarchy: {
                    positions: positions
                },
                height: 12,
                stRotation: Cesium.Math.toRadians(0),
                material: new Cesium.PolylineTrailLinkMaterialPropertyV(Cesium.Color.WHITE, 1000)
            }
        })
        oDefault.waterFlowArrowArr.push(p19);

        var positions = Cesium.Cartesian3.fromDegreesArray([
            106.0732488906, 29.8698972191,
            106.0732488906, 29.8699030677,
            106.0732442814, 29.8699030677,
            106.0732442814, 29.8698972191
        ]);
        var p19 = oDefault.viewer.entities.add({
            polygon: {
                hierarchy: {
                    positions: positions
                },
                height: 12,
                stRotation: Cesium.Math.toRadians(0),
                material: new Cesium.PolylineTrailLinkMaterialPropertyV(Cesium.Color.WHITE, 1000)
            }
        })
        oDefault.waterFlowArrowArr.push(p19);

        var positions = Cesium.Cartesian3.fromDegreesArray([
            106.0732381589, 29.8698132270,
            106.0732381589, 29.8698167261,
            106.0732525526, 29.8698167261,
            106.0732525526, 29.8698132270
        ]);
        var p19 = oDefault.viewer.entities.add({
            polygon: {
                hierarchy: {
                    positions: positions
                },
                height: 12,
                stRotation: Cesium.Math.toRadians(90),
                material: new Cesium.PolylineTrailLinkMaterialPropertyV(Cesium.Color.WHITE, 1000)
            }
        })
        oDefault.waterFlowArrowArr.push(p19);

        var positions = Cesium.Cartesian3.fromDegreesArray([
            106.0732281589, 29.8698752270,
            106.0732281589, 29.8698787261,
            106.0732425526, 29.8698787261,
            106.0732425526, 29.8698752270
        ]);
        var p19 = oDefault.viewer.entities.add({
            polygon: {
                hierarchy: {
                    positions: positions
                },
                height: 12,
                stRotation: Cesium.Math.toRadians(90),
                material: new Cesium.PolylineTrailLinkMaterialPropertyV(Cesium.Color.WHITE, 1000)
            }
        })
        oDefault.waterFlowArrowArr.push(p19);

        var positions = Cesium.Cartesian3.fromDegreesArray([
            106.0732381589, 29.8699272270,
            106.0732381589, 29.8699307261,
            106.0732525526, 29.8699307261,
            106.0732525526, 29.8699272270
        ]);
        var p19 = oDefault.viewer.entities.add({
            polygon: {
                hierarchy: {
                    positions: positions
                },
                height: 12,
                stRotation: Cesium.Math.toRadians(-90),
                material: new Cesium.PolylineTrailLinkMaterialPropertyV(Cesium.Color.WHITE, 1000)
            }
        })
        oDefault.waterFlowArrowArr.push(p19);

        var positions = Cesium.Cartesian3.fromDegreesArray([
            106.0732381589, 29.8699672270,
            106.0732381589, 29.8699807261,
            106.0732325526, 29.8699807261,
            106.0732325526, 29.8699672270
        ]);
        var p19 = oDefault.viewer.entities.add({
            polygon: {
                hierarchy: {
                    positions: positions
                },
                height: 13,
                stRotation: Cesium.Math.toRadians(0),
                material: new Cesium.PolylineTrailLinkMaterialPropertyV(Cesium.Color.WHITE, 1000)
            }
        })
        oDefault.waterFlowArrowArr.push(p19);




        //wall

        var positions = Cesium.Cartesian3.fromDegreesArrayHeights(
            [
                106.0731774883, 29.8695206668, 13.5,
                106.0731774883, 29.8695266668, 13.5
            ]);
        var w3 = oDefault.viewer.entities.add({
            wall: {
                positions: positions,
                minimumHeights: [12, 12],
                stRotation: Cesium.Math.toRadians(90),
                material: new Cesium.PolylineTrailLinkMaterialPropertyV(Cesium.Color.WHITE, 1000)
            }
        })
        oDefault.waterFlowArrowArr.push(w3);

        var positions = Cesium.Cartesian3.fromDegreesArrayHeights(
            [
                106.0732860742, 29.8692439425, 8.5,
                106.0732860742, 29.8692389785, 8.5
            ]);
        var w1 = oDefault.viewer.entities.add({
            wall: {
                positions: positions,
                minimumHeights: [7, 7],
                stRotation: Cesium.Math.toRadians(-90),
                material: new Cesium.PolylineTrailLinkMaterialPropertyV(Cesium.Color.WHITE, 1000)
            }
        })
        oDefault.waterFlowArrowArr.push(w1);

        var positions = Cesium.Cartesian3.fromDegreesArrayHeights(
            [
                106.0732860742, 29.8691335911, 8.5,
                106.0732860742, 29.8691273255, 8.5
            ]);
        var w2 = oDefault.viewer.entities.add({
            wall: {
                positions: positions,
                minimumHeights: [7, 7],
                stRotation: Cesium.Math.toRadians(-90),
                material: new Cesium.PolylineTrailLinkMaterialPropertyV(Cesium.Color.WHITE, 1000)
            }
        })
        oDefault.waterFlowArrowArr.push(w2);

        var positions = Cesium.Cartesian3.fromDegreesArrayHeights(
            [
                106.0731712877, 29.8700000439, 14,
                106.0731751799, 29.8700000439, 14
            ]);
        var w2 = oDefault.viewer.entities.add({
            wall: {
                positions: positions,
                minimumHeights: [13, 13],
                stRotation: Cesium.Math.toRadians(-90),
                material: new Cesium.PolylineTrailLinkMaterialProperty(Cesium.Color.WHITE, 1000)
            }
        })
        oDefault.waterFlowArrowArr.push(w2);

        // var positions = Cesium.Cartesian3.fromDegreesArray(
        // 	[
        // 		106.0732143773, 29.8691528242,
        // 		106.0732143773, 29.8691623316,
        // 		106.0731870084, 29.8691623316,
        // 		106.0731870084, 29.8691528242
        // 	]);
        // var p6 = oDefault.viewer.entities.add({
        // 	polygon: {
        // 		hierarchy: {
        // 			positions: positions
        // 		},
        // 		height: 10.2,
        // 		stRotation: Cesium.Math.toRadians(90),
        // 		material: new Cesium.PolylineTrailLinkMaterialPropertyV(Cesium.Color.WHITE, 1000)
        // 	}
        // })
        // oDefault.waterFlowArrowArr.push(p6);

        console.log(oDefault.waterFlowArrowArr)
    },
    createTextLabels: function() {
        if (!oDefault.viewer) {
            return
        }
        var viewer = oDefault.viewer;
        var data = oMud.textLabelList;
        data.forEach(function(item) {
            var trackPop = undefined;
            var label = document.createElement('div');
            oDefault.textLabelSigns.push(label)
            label.setAttribute('id', item.id);
            label.setAttribute('class', 'label-info');
            // label.style.display = 'block';
            var body = document.getElementById('body');
            body.appendChild(label);
            var labelPoint = document.createElement('div');
            labelPoint.className = 'label-point';
            var labelLine = document.createElement('div');
            labelLine.className = 'label-line';
            var labelContent = document.createElement('div');
            labelContent.className = 'label-content';
            label.appendChild(labelPoint);
            label.appendChild(labelLine);
            label.appendChild(labelContent);
            labelContent.innerHTML = item.name;
            var ellipsoid = viewer.scene.globe.ellipsoid;
            var cartesian3 = Cesium.Cartesian3.fromDegrees(item.position[0], item.position[1], item.position[2], ellipsoid)
            var winpos = viewer.scene.cartesianToCanvasCoordinates(cartesian3)
            trackPop = cartesian3;
            label.style.left = winpos.x + "px";
            label.style.top = winpos.y - 10 + "px";
            viewer.scene.postRender.addEventListener(function(e) {
                if (trackPop) {
                    var winpos = viewer.scene.cartesianToCanvasCoordinates(
                        trackPop
                    );
                    var label = document.getElementById(item.id);
                    if (label && winpos) {
                        // console.log(winpos)
                        label.style.left = winpos.x + "px";
                        label.style.top = winpos.y - 10 + "px";
                    }
                }
            })
        })
    },
    createDataLabels: function() {
        var viewer = oDefault.viewer;
        if (viewer) {
            var labelData = oMud.dataLabelList;
            var body = document.getElementById('body');
            labelData.forEach(function(item) {
                if (item.type == 'data') {
                    var label = document.createElement('div');
                    label.className = 'data-label';
                    label.setAttribute('id', item.labelID);
                    body.appendChild(label);
                    oDefault.dataLabelSigns.push(label);
                    var closeBtn = document.createElement('div');
                    closeBtn.className = 'data-label-closebtn';
                    closeBtn.onclick = function() {
                        $('#' + item.labelID).css('display', 'none');
                        oDefault.pointSigns.map(function(sign) {
                            if (sign.sign.id == item.labelID) {
                                sign.show = true;
                                sign.sign.show = true;
                                sign.sign.billboard.color = Cesium.Color.WHITE;
                            }
                        })
                    }
                    label.appendChild(closeBtn);
                    if (item.title != '') {
                        var labelTitle = document.createElement('div');
                        labelTitle.className = 'data-label-title';
                        label.appendChild(labelTitle);
                        labelTitle.innerHTML = item.title
                    }
                    var labelContent = document.createElement('div');
                    labelContent.className = 'data-label-content';
                    label.appendChild(labelContent);

                    for (var j = 0; j < item.data.length; j++) {
                        var contentRow = document.createElement('div');
                        labelContent.appendChild(contentRow);
                        contentRow.className = 'content-row';
                        var rowItem = document.createElement('div');
                        contentRow.appendChild(rowItem);
                        rowItem.className = 'content-row-item';
                        rowItem.innerText = item.data[j].text + ' : ';
                        var rowItem = document.createElement('div');
                        contentRow.appendChild(rowItem);
                        rowItem.className = 'content-row-item';
                        if (item.data[j].unit) {
                            rowItem.innerText = item.data[j].value() + item.data[j].unit;
                        } else {
                            rowItem.innerText = item.data[j].value()
                        }
                    }
                    // var labelBtnGroup = document.createElement('div');
                    // labelBtnGroup.className = 'data-label-btn-group';
                    // label.appendChild(labelBtnGroup);
                    // label.appendChild(labelBtnGroup);
                    // var btnDetail = document.createElement('div');
                    // btnDetail.className = 'data-label-btn';
                    // btnDetail.innerText = '设备详情';
                    // var btnRepair = document.createElement('div');
                    // btnRepair.className = 'data-label-btn';
                    // btnRepair.innerText = '报修';
                    // labelBtnGroup.appendChild(btnDetail);
                    // labelBtnGroup.appendChild(btnRepair);
                    // btnDetail.onclick = function() {
                    // 	var strUrl = Global.siteName + "Equipment/Detail/Detail.html"
                    // 	Global.dialogOpen({
                    // 		id: "Detail",
                    // 		title: '设备台账详情',
                    // 		url: strUrl,
                    // 		width: '100%',
                    // 		height: '100%',
                    // 		btn: null,
                    // 		callBack: function(iframeId) {
                    // 			// Global.getDialog().frames[iframeId].oEdit.onSaveEditClick();
                    // 		}
                    // 	});
                    // }
                    // btnRepair.onclick = function() {
                    // 	var strUrl = Global.siteName + "Equipment/Repair/Repair.html"
                    // 	Global.dialogOpen({
                    // 		id: "Repair",
                    // 		title: '设备报修',
                    // 		url: strUrl,
                    // 		width: '100%',
                    // 		height: '100%',
                    // 		btn: null,
                    // 		callBack: function(iframeId) {
                    // 			// Global.getDialog().frames[iframeId].oEdit.onSaveEditClick();
                    // 		}
                    // 	});
                    // }

                    var ellipsoid = viewer.scene.globe.ellipsoid;
                    var cartesian3 = Cesium.Cartesian3.fromDegrees(item.position[0], item.position[1], item.position[2],
                        ellipsoid);
                    var winpos = viewer.scene.cartesianToCanvasCoordinates(cartesian3);
                    if (winpos) {
                        var xOffset = label.getBoundingClientRect().width / 2
                        var yOffset = label.getBoundingClientRect().height
                        label.style.left = winpos.x - xOffset + "px";
                        label.style.top = winpos.y - yOffset + "px";
                    }
                    var trackPop = cartesian3;
                    var cameraPosition;

                    //billboard
                    var sign = viewer.entities.add({
                        id: item.labelID,
                        name: item.name,
                        sign: true,
                        position: Cesium.Cartesian3.fromDegrees(item.position[0], item.position[1], item.position[2]),
                        billboard: {
                            verticalOrigin: Cesium.VerticalOrigin.BOTTOM,
                            image: './Images/标签1.png',
                        }
                    });
                    oDefault.pointSigns.push({
                        sign: sign,
                        show: true,
                        id: item.labelID,
                        pid: item.pid,
                        system: item.system,
                        orientation: item.orientation
                    });
                    sign.show = true;
                    viewer.scene.postRender.addEventListener(function(e) {
                        cameraPosition = oDefault.viewer.camera.position;
                        if (trackPop) {
                            var winpos = viewer.scene.cartesianToCanvasCoordinates(
                                trackPop
                            );
                            var xOffset = label.getBoundingClientRect().width / 2
                            var yOffset = label.getBoundingClientRect().height + 10
                            if (winpos) {
                                label.style.left = winpos.x - xOffset + "px";
                                label.style.top = winpos.y - yOffset + "px";
                            }

                        }
                    })
                }
                if (item.type == 'video') {
                    var label = document.createElement('div');
                    label.className = 'data-label';
                    label.style.padding = 0;
                    label.setAttribute('id', item.labelID);
                    body.appendChild(label);
                    var closeBtn = document.createElement('div');
                    closeBtn.className = 'data-label-closebtn';
                    closeBtn.onclick = function() {
                        $('#' + item.labelID).css('display', 'none');
                        oDefault.pointSigns.map(function(sign) {
                            if (sign.sign.id == item.labelID) {
                                sign.show = true;
                                sign.sign.show = true;
                                sign.sign.billboard.color = Cesium.Color.WHITE;
                            }
                        })
                    }
                    label.appendChild(closeBtn);
                    var videoIframe = document.createElement('iframe');
                    videoIframe.className = 'video-inframe'
                    videoIframe.src = './Video/Video.html'
                    label.appendChild(videoIframe);

                    var ellipsoid = viewer.scene.globe.ellipsoid;
                    var cartesian3 = Cesium.Cartesian3.fromDegrees(item.position[0], item.position[1], item.position[2],
                        ellipsoid);
                    var winpos = viewer.scene.cartesianToCanvasCoordinates(cartesian3);
                    if (winpos) {
                        var xOffset = label.getBoundingClientRect().width / 2
                        var yOffset = label.getBoundingClientRect().height
                        label.style.left = winpos.x - xOffset + "px";
                        label.style.top = winpos.y - yOffset + "px";
                    }
                    var trackPop = cartesian3;
                    var cameraPosition;

                    //billboard
                    var sign = viewer.entities.add({
                        id: item.labelID,
                        name: item.name,
                        sign: true,
                        position: Cesium.Cartesian3.fromDegrees(item.position[0], item.position[1], item.position[2]),
                        billboard: {
                            verticalOrigin: Cesium.VerticalOrigin.BOTTOM,
                            image: './Images/视频1.png',
                        }
                    });
                    oDefault.pointSigns.push({
                        sign: sign,
                        show: true,
                        id: item.labelID,
                        pid: item.pid,
                        system: item.system,
                        orientation: item.orientation
                    });
                    sign.show = false;
                    viewer.scene.postRender.addEventListener(function(e) {
                        cameraPosition = oDefault.viewer.camera.position;
                        if (trackPop) {
                            var winpos = viewer.scene.cartesianToCanvasCoordinates(
                                trackPop
                            );
                            var xOffset = label.getBoundingClientRect().width / 2
                            var yOffset = label.getBoundingClientRect().height
                            if (winpos) {
                                label.style.left = winpos.x - xOffset + "px";
                                label.style.top = winpos.y - yOffset + "px";
                            }

                        }
                    })
                }
            })
        }
        oMud.loadData();
        oMud.startDataRoll();
    },
    loadData: function() {
        var viewer = oDefault.viewer;
        oMud.data = oDefault.realTimeData;
        var labelData = oMud.dataLabelList;
        var body = document.getElementById('body');
        labelData.forEach(function(item) {
            if (item.type == 'data') {
                var label = document.getElementById(item.labelID);
                var target;
                if (label && label.childNodes) {
                    for (var i = 0; i < label.childNodes.length; i++) {
                        if (label.childNodes[i].className == 'data-label-content') {
                            target = label.childNodes[i];
                        }
                    }
                    target.innerHTML = '';
                    for (var j = 0; j < item.data.length; j++) {
                        var contentRow = document.createElement('div');
                        target.appendChild(contentRow);
                        contentRow.className = 'content-row';
                        var rowItem = document.createElement('div');
                        contentRow.appendChild(rowItem);
                        rowItem.className = 'content-row-item';
                        rowItem.innerText = item.data[j].text + ' : ';
                        var rowItem = document.createElement('div');
                        contentRow.appendChild(rowItem);
                        rowItem.className = 'content-row-item';
                        if (item.data[j].unit) {
                            rowItem.innerText = item.data[j].value() + item.data[j].unit;
                        } else {
                            rowItem.innerText = item.data[j].value()
                        }
                    }
                }

            }
        })

    },
    createFlyPanel: function() {

        oDefault.flyData.isStarted = false;
        oDefault.flyData.isFlying = false;
        //
        var dataRollControl = document.createElement('div');
        dataRollControl.setAttribute('id', 'dataRollControl');
        dataRollControl.className = 'data-roll-control';
        document.getElementById('body').appendChild(dataRollControl);
        var controlDiv1 = document.createElement('div');
        controlDiv1.setAttribute('id', 'zidong');
        controlDiv1.innerText = '自动'
        controlDiv1.className = 'data-roll-control-div active';
        dataRollControl.appendChild(controlDiv1);
        var controlDiv2 = document.createElement('div');
        controlDiv2.setAttribute('id', 'shoudong');
        controlDiv2.innerText = '手动'
        controlDiv2.className = 'data-roll-control-div';
        dataRollControl.appendChild(controlDiv2);
        controlDiv1.onclick = function() {
            controlDiv1.className = 'data-roll-control-div active';
            controlDiv2.className = 'data-roll-control-div';
            oMud.startDataRoll();
        }
        controlDiv2.onclick = function() {
                controlDiv2.className = 'data-roll-control-div active';
                controlDiv1.className = 'data-roll-control-div';
                oMud.stopDataRoll();
            }
            //面板隐藏
        var systemFlyPanelHide = document.createElement('div');
        systemFlyPanelHide.setAttribute('id', 'systemFlyPanelHide');
        systemFlyPanelHide.className = 'system-fly-panel-hide';
        document.getElementById('body').appendChild(systemFlyPanelHide);
        //
        var systemFlyPanel = document.createElement('div');
        document.getElementById('body').appendChild(systemFlyPanel);
        systemFlyPanel.className = 'system-fly-panel';
        systemFlyPanel.setAttribute('id', 'systemFlyPanel')

        var systemFlyPanelBody = document.createElement('div');
        systemFlyPanel.appendChild(systemFlyPanelBody);
        systemFlyPanelBody.className = 'system-fly-pannel-body';

        var rateForward = document.createElement('div');
        systemFlyPanelBody.appendChild(rateForward);
        rateForward.setAttribute('id', 'rateForward');
        rateForward.className = 'system-fly-pannel-rateforward';

        var rateBackward = document.createElement('div');
        systemFlyPanelBody.appendChild(rateBackward);
        rateBackward.setAttribute('id', 'rateBackward');
        rateBackward.className = 'system-fly-pannel-ratebackward';

        var systemFlyPanelBtnGroup = document.createElement('div');
        systemFlyPanelBody.appendChild(systemFlyPanelBtnGroup);
        systemFlyPanelBtnGroup.className = 'system-fly-pannel-btngroup';

        var systemFlyPanelClose = document.createElement('div');
        systemFlyPanelBody.appendChild(systemFlyPanelClose);
        systemFlyPanelClose.className = 'system-fly-pannel-close';
        systemFlyPanelClose.onclick = function() {
            // systemFlyPanel.remove();
            systemFlyPanel.style.display = 'none';
            systemFlyPanelHide.style.display = 'block';
        }

        systemFlyPanelHide.onclick = function() {
            // systemFlyPanel.remove();
            systemFlyPanel.style.display = 'block';
            systemFlyPanelHide.style.display = 'none';
        }

        var btnBackward = document.createElement('div');
        systemFlyPanelBtnGroup.appendChild(btnBackward);
        btnBackward.setAttribute('id', 'btnBackward');
        btnBackward.className = 'system-fly-btn system-backward';
        btnBackward.onclick = function() {
            oMud.audio.pause();
            if (oDefault.viewer.clock.multiplier > 0) {
                oDefault.viewer.clock.multiplier = -0.15;
            } else {
                if (oDefault.viewer.clock.multiplier > -0.5) {
                    oDefault.viewer.clock.multiplier = oDefault.viewer.clock.multiplier * 2;
                } else {
                    oDefault.viewer.clock.multiplier = -0.15;
                }
            }
            var rate = oDefault.viewer.clock.multiplier / -0.15;
            document.getElementById('rateForward').innerHTML = '';
            if (rate == 1) {
                document.getElementById('rateBackward').innerHTML = '';
            } else {
                document.getElementById('rateBackward').innerHTML = 'x ' + rate;
            }
        }

        var btnPlay = document.createElement('div');
        btnPlay.id = "btnPlay";
        systemFlyPanelBtnGroup.appendChild(btnPlay);
        btnPlay.className = 'system-fly-btn system-play';
        btnPlay.onclick = function() {
            var audio = document.getElementById("audio_player");
            var rangeInput = document.getElementById('systemFlyTimeLine');
            if (btnPlay.className.indexOf('system-play') >= 0) {
                btnPlay.className = 'system-fly-btn system-pause';
                if (!oDefault.flyData.pauseData.currentTime) {
                    oMud.removeCameraEvents();
                    oMud.startFly();
                    oMud.audio.play();
                } else {
                    oMud.removeCameraEvents();
                    oMud.restartFly();
                    oMud.audio.play();
                }
            } else {
                btnPlay.className = 'system-fly-btn system-play';
                oMud.pauseFly();
                oMud.restoreCameraEvents();
                oMud.audio.pause();
            }
        }

        var btnForward = document.createElement('div');
        systemFlyPanelBtnGroup.appendChild(btnForward);
        btnForward.setAttribute('id', 'btnForward');
        btnForward.className = 'system-fly-btn system-forward';
        btnForward.onclick = function() {
            oMud.audio.pause();
            if (oDefault.viewer.clock.multiplier < 0) {
                oDefault.viewer.clock.multiplier = 0.15;
            } else {
                if (oDefault.viewer.clock.multiplier < 0.5) {
                    oDefault.viewer.clock.multiplier = oDefault.viewer.clock.multiplier * 2;
                } else {
                    oDefault.viewer.clock.multiplier = 0.15;
                }
            }
            var rate = oDefault.viewer.clock.multiplier / 0.15;
            document.getElementById('rateBackward').innerHTML = '';
            if (rate == 1) {
                document.getElementById('rateForward').innerHTML = '';
            } else {
                document.getElementById('rateForward').innerHTML = 'x ' + rate;
            }
        };

        var systemFlyPanelRange = document.createElement('div');
        systemFlyPanelBody.appendChild(systemFlyPanelRange);
        systemFlyPanelRange.className = 'system-fly-pannel-range';

        var startTime = document.createElement('div');
        systemFlyPanelRange.appendChild(startTime);
        startTime.setAttribute('id', 'startTime');
        startTime.innerHTML = '00:00'
        startTime.className = 'system-fly-pannel-time';

        var timeRange = document.createElement('input');
        systemFlyPanelRange.appendChild(timeRange);
        timeRange.setAttribute('type', 'range');
        timeRange.setAttribute('id', 'systemFlyTimeLine');
        timeRange.style.pointerEvents = 'none';
        timeRange.style.cursor = 'pointer';
        timeRange.max = 100;
        timeRange.min = 0;
        timeRange.value = 0;
        timeRange.step = 0.1;
        timeRange.className = 'system-fly-range';
        timeRange.onchange = function() {
            oMud.dataLabelList.map(function(item) {
                $('#' + item.id).css('display', 'none')
            })
        }

        var stopTime = document.createElement('div');
        systemFlyPanelRange.appendChild(stopTime);
        stopTime.setAttribute('id', 'stopTime');
        stopTime.innerHTML = '00:00';
        stopTime.className = 'system-fly-pannel-time';

        var audio = document.createElement('audio');
        document.getElementById('body').appendChild(audio);
        audio.style.display = 'none';
        audio.setAttribute('id', 'audio_player');
        audio.src = "./Audios/mud.mp3";
        audio.loop = false;
        setTimeout(function() {
            var duration = audio.duration;
            console.log('audio', duration);
            if (audio.readyState) {
                var min = parseInt(duration / 60);
                var sec = parseInt(duration % 60);
                if (min < 10) {
                    min = "0" + min;
                }
                if (sec < 10) {
                    sec = "0" + sec;
                }
                var time = min + ":" + sec;
                stopTime.innerHTML = '-' + time
            }
        }, 1500)
    },
    startDataRoll: function() {
        oDefault.pointSigns.map(function(item) {
            $('#' + item.id).hide()
        })
        var i = 0;
        oDefault.dataRollClock = setInterval(function() {
            if (i <= oDefault.pointSigns.length - 1) {
                if (i > 0) {
                    $('#' + oDefault.pointSigns[i - 1].id).hide()
                } else {
                    $('#' + oDefault.pointSigns[oDefault.pointSigns.length - 1].id).hide()
                }
                $('#' + oDefault.pointSigns[i].id).show()
            }
            if (i > oDefault.pointSigns.length - 1) {
                $('#' + oDefault.pointSigns[i - 1].id).hide()
                $('#' + oDefault.pointSigns[0].id).show()
                i = 0;
            }
            i++;
        }, 2000)
    },
    stopDataRoll: function() {
        clearInterval(oDefault.dataRollClock);
        // oDefault.pointSigns.map(function(item) {
        // 	$('#' + item.id).hide()
        // })
    },
    showMudSystem: function() {
        $('#mud-01').css('display', 'block');
        $('#mud-02').css('display', 'block');
        $('#mud-03').css('display', 'block');
        $('#mud-04').css('display', 'block');
        $('#mud-05').css('display', 'block');
        $('#mud-0601').css('display', 'block');
        //获取系统数据
        if (!oDefault.configData) {
            return
        }
        //禁用工具栏
        $('#i-n-menuimg').css('pointer-events', 'none')
        $('#i-n-layers').css('pointer-events', 'none')

        //		
        oDefault.currentSystem = 'Mud';
        oDefault.layerList.forEach(function(layer) {
                layer.layer.show = false;
            })
            //视角
        var initialPosition = Cesium.Cartesian3.fromDegrees(oMud.mudSystem.cameraPosition[0], oMud.mudSystem.cameraPosition[
            1], oMud.mudSystem.cameraPosition[2]);
        var initialOrientation = new Cesium.HeadingPitchRoll.fromDegrees(oMud.mudSystem.cameraHeadingPitchRoll[0], oMud.mudSystem
            .cameraHeadingPitchRoll[1], oMud.mudSystem.cameraHeadingPitchRoll[2]);
        oDefault.viewer.scene.camera.setView({
            destination: initialPosition,
            orientation: initialOrientation,
            endTransform: Cesium.Matrix4.IDENTITY
        });

        oDefault.tilesetList.forEach(function(tileset) {
            if (tileset.type == 'tujian') {
                if (tileset.id == 'tujian-08' || tileset.id == 'tujian-09' || tileset.id == 'tujian-10') {
                    if (tileset.tileset) {
                        tileset.tileset.show = true;
                    }
                    if (tileset.tilesetList) {
                        tileset.tilesetList.map(function(item) {
                            item.tileset.show = true;
                        })
                    }
                } else {
                    if (tileset.tileset) {
                        tileset.tileset.show = false;
                    }
                    if (tileset.tilesetList) {
                        tileset.tilesetList.map(function(item) {
                            item.tileset.show = false;
                        })
                    }
                }
            }
            if (tileset.type == 'jidian') {
                if (tileset.id == 'jidian-08' || tileset.id == 'jidian-09' || tileset.id == 'jidian-10') {
                    if (tileset.tileset) {
                        tileset.tileset.show = true;
                    }
                    if (tileset.tilesetList) {
                        tileset.tilesetList.map(function(item) {
                            item.tileset.show = true;
                        })
                    }
                } else {
                    if (tileset.tileset) {
                        tileset.tileset.show = false;
                    }
                    if (tileset.tilesetList) {
                        tileset.tilesetList.map(function(item) {
                            item.tileset.show = false;
                        })
                    }
                }
            }
            if (tileset.type == 'dimian') {
                tileset.tileset.show = false;
            }
            if (tileset.type == 'guanxian') {
                tileset.tileset.show = true;
            }
            if (tileset.type == 'qita') {
                tileset.tileset.show = false;
            }
        })

        oDefault.tileVisbleEvent = function(tile) {
            var showList = ['09020004-污泥浓缩池管道',
                '09020004-污泥浓缩池管道', '13020006-沉淀池污水管道1#'
            ];
            var hideList = ['08010008-回用水池顶', '08010015-回用水池结构', '08010007-回用水池水面', '08010012-回用水池井盖1#', '08010013-回用水池井盖2#',
                '08010014-回用水池进水池水', '08010011-回用水池底板', '08020013-回用水池机柜1#', '08020014-回用水池机柜2#', '08010010-回用水池穿孔板2#',
                '08010009-回用水池穿孔板1#', '08020008-回用水池方闸2#', '08020007-回用水池方闸1#', '08020011-回用水池提升泵3#', '08020012-回用水池提升泵4#',
                '08020009-回用水池提升泵1#', '08020010-回用水池提升泵2#', '08020006-回用水池搅拌机2#', '08020005-回用水池搅拌机1#', '08010005-排泥池顶',
                '08010002-排泥池井盖1#', '08010016-排泥池井盖2#', '08010017-排泥池井盖3#',
                '08010006-排泥池水面', '09010002-污泥浓缩池水面', '10010001-脱水机房顶部', '10010008-脱水机房结构',
                '10010010-脱水机房黄墙', '08010019-回用水池梁', '08020029-回用水池闸结构1#', '08020030-回用水池闸结构2#', '08020031-回用水池闸结构3#',
                '08020032-回用水池闸结构4#', '08010020-排泥池梁', '08020023-回用水池叶轮1#',
                '10010004-脱水机房玻璃', '10010012-脱水机房字体', '10010009-脱水机房卷闸门', '10010005-脱水机房窗框', '10010003-脱水机房百叶框',
                '10010024-脱水泥机房梁', '10010008-脱水机房结构1#', '10010025-脱水机房黄墙2#',
                '10010023-脱水机房窗框2#', '10010022-脱水机房玻璃2#', '10010010-脱水机房黄墙1#', '10010042-脱水机房裙摆4#', '10010033-脱水机房结构5#',
                '10010026-脱水机房黄墙3#', '10010034-脱水机房结构6#', '10010035-脱水机房结构7#',
                '10010032-脱水机房结构4#', '10010004-脱水机房玻璃1#', '10010005-脱水机房窗框1#', '10010039-脱水机房结构11#', '10010038-脱水机房结构10#',
                '10010030-脱水机房结构2#', '10010031-脱水机房结构3#', '10010037-脱水机房结构9#', '10010036-脱水机房结构8#', '10010027-脱水机房黄墙4#',
                '10010028-脱水机房黄墙5#', '10010002-脱水机房栏杆', '10020038-原水到脱水机房管道', '10010011-脱水机房百叶', '08020007-回用水池方闸结构1#',
                '08020008-回用水池2#手动闸阀', '08020025-回用水池液位计2#', '08020024-回用水池液位计1#', '08020022-6号潜水搅拌器（含控制）',
                '08020020-5号潜水搅拌器（含控制）', '08020041-回用水池1#蝶式缓闭止回阀', '08020051-进水分配井3#手动蝶阀', '08020050-进水分配井2#手动蝶阀',
                '08020049-进水分配井1#手动蝶阀', '08020052-进水分配井4#手动蝶阀', '08020042-回用水池2#蝶式缓闭止回阀', '08020043-回用水池3#蝶式缓闭止回阀',
                '08020044-回用水池4#蝶式缓闭止回阀', '09010002-污泥浓缩池水面1#', '09010005-污泥浓缩池水面2#', '09010006-污泥浓缩池水面3#',
                '10010046-脱水机房黄墙3#', '10010045-脱水机房顶', '10010047-脱水机房黄墙4#', '10010048-脱水机房黄墙2#', '07020128-送水泵房集水坑液位计',
                '07020094-出厂水1号流量计', '08020015-回收水池潜水泵控制柜', '08020001-排泥池控制柜1#', '10010011-脱水机房百叶1#', '10010043-脱水机房单扇门1#',
                '10010044-脱水机房单扇门2#', '10010041-脱水机房裙摆3#', '10010050-脱水机房百叶3#', '10010006-脱水机房裙摆1#', '10010040-脱水机房裙摆2#',
                '10010051-脱水机房百叶4#', '10010049脱水机房百叶2#'
            ];

            var content = tile.content;
            var featuresLength = content.featuresLength;
            var url = tile.tileset.url;
            if (url.indexOf('tujian/08') >= 0 || url.indexOf('tujian/09') >= 0 || url.indexOf('tujian/10') >= 0) {
                for (var i = 0; i < featuresLength; i += 1) {
                    var feature = content.getFeature(i);
                    var name = feature.getProperty('name');
                    if (hideList.indexOf(name) >= 0) {
                        feature.show = false;
                    } else {
                        feature.show = true;
                    }
                }
            }
            if (url.indexOf('jidian/08') >= 0 || url.indexOf('jidian/09') >= 0 || url.indexOf('jidian/10') >= 0) {
                for (var i = 0; i < featuresLength; i += 1) {
                    var feature = content.getFeature(i);
                    var name = feature.getProperty('name');
                    if (hideList.indexOf(name) >= 0) {
                        feature.show = false;
                    } else {
                        feature.show = true;
                    }
                }
            }
            if (url.indexOf('guanxian') >= 0) {
                for (var i = 0; i < featuresLength; i += 1) {
                    var feature = content.getFeature(i);
                    var name = feature.getProperty('name');
                    if (showList.indexOf(name) >= 0) {
                        feature.show = true;
                    } else {
                        feature.show = false;
                    }
                }
            }
        }
        oDefault.tilesetList.forEach(function(tileset) {
            if (tileset.tileset) {
                tileset.tileset.tileVisible.addEventListener(oDefault.tileVisbleEvent);
            }
            if (tileset.tilesetList) {
                tileset.tilesetList.map(function(item) {
                    item.tileset.tileVisible.addEventListener(oDefault.tileVisbleEvent);
                })
            }

        })

        oMud.initMudSystem();
    },
    pauseFly: function() {
        //暂停时间
        oMud.restoreCameraEvents();
        oDefault.clearFly();
        oDefault.flyData.isPaused = true;
        oDefault.flyData.pauseData.currentTime = oDefault.viewer.clockViewModel.currentTime.clone();
        if (document.getElementById('btnForward')) {
            document.getElementById('btnForward').style.pointerEvents = 'none';
        }
        if (document.getElementById('btnBackward')) {
            document.getElementById('btnBackward').style.pointerEvents = 'none';
        }
        //暂停视角
        var viewer = oDefault.viewer;
        var heading1 = Cesium.Math.toDegrees(viewer.camera.heading).toFixed(2);
        var pitch1 = Cesium.Math.toDegrees(viewer.camera.pitch).toFixed(2);
        var roll1 = Cesium.Math.toDegrees(viewer.camera.roll).toFixed(2);
        var position = viewer.scene.camera.position;
        if (position) {
            //世界坐标转地理坐标（弧度）
            var cartographic = viewer.scene.globe.ellipsoid.cartesianToCartographic(position);
            if (cartographic) {
                //海拔
                var height = viewer.scene.globe.getHeight(cartographic);
                //视角海拔高度
                var he = Math.sqrt(viewer.scene.camera.positionWC.x * viewer.scene.camera.positionWC.x + viewer.scene.camera.positionWC
                    .y * viewer.scene.camera.positionWC.y + viewer.scene.camera.positionWC.z * viewer.scene.camera.positionWC.z);
                var he2 = Math.sqrt(position.x * position.x + position.y * position.y + position.z *
                    position.z);
                //地理坐标（弧度）转经纬度坐标
                var point = [cartographic.longitude / Math.PI * 180, cartographic.latitude / Math.PI * 180];
                if (!height) {
                    height = 0;
                }
                if (!he) {
                    he = 0;
                }
                if (!he2) {
                    he2 = 0;
                }
                if (!point) {
                    point = [0, 0];
                }
                var lon1 = point[0];
                var lat1 = point[1];
                var height1 = cartographic.height;
            }
        }
        oDefault.flyData.pauseData.cameraPosition = [lon1, lat1, height1];
        oDefault.flyData.pauseData.cameraOrientation = [heading1, pitch1, roll1];
    },
    removeCameraEvents: function() {
        oDefault.systemCameraControler = oDefault.viewer.scene.screenSpaceCameraController;
        oDefault.viewer.cesiumWidget.screenSpaceEventHandler.removeInputAction(Cesium.ScreenSpaceEventType.LEFT_DOUBLE_CLICK);
        if (oDefault.systemCameraControler) {
            oDefault.systemCameraControler.enableZoom = false;
            oDefault.systemCameraControler.enableInputs = false;
            oDefault.systemCameraControler.enableTilt = false;
        }
        // if (oDefault.dragCameraEventHandler) {
        // 	oDefault.dragCameraEventHandler.removeInputAction(Cesium.ScreenSpaceEventType.MOUSE_MOVE);
        // 	oDefault.dragCameraEventHandler.removeInputAction(Cesium.ScreenSpaceEventType.LEFT_DOWN);
        // 	oDefault.dragCameraEventHandler.removeInputAction(Cesium.ScreenSpaceEventType.LEFT_UP);
        // }

    },
    restoreCameraEvents: function() {
        if (oDefault.systemCameraControler) {
            oDefault.systemCameraControler.enableZoom = true;
            oDefault.systemCameraControler.enableInputs = true;
            oDefault.systemCameraControler.enableTilt = true;
        }
        // if (oDefault.dragCameraEventHandler) {
        // 	oDefault.dragCameraEventHandler.setInputAction(oDefault.mouseMoveEvent, Cesium.ScreenSpaceEventType.MOUSE_MOVE);
        // 	oDefault.dragCameraEventHandler.setInputAction(oDefault.mouseLeftDownEvent, Cesium.ScreenSpaceEventType.LEFT_DOWN);
        // 	oDefault.dragCameraEventHandler.setInputAction(oDefault.mouseLeftUpEvent, Cesium.ScreenSpaceEventType.LEFT_UP);
        // }
    },
    restartFly: function() {
        //重新开始
        oMud.startFly();
        setTimeout(function() {
            //定位到暂停时间
            // oDefault.viewer.clockViewModel.currentTime = oDefault.flyData.pauseData.currentTime;
            //视角设置
            var hpRange = {};
            hpRange.heading = Cesium.Math.toRadians(oDefault.flyData.pauseData.cameraOrientation[0]);
            hpRange.pitch = Cesium.Math.toRadians(oDefault.flyData.pauseData.cameraOrientation[1]);
            hpRange.range = 0.1;
            var center = oDefault.viewer.trackedEntity.position.getValue(oDefault.viewer.clock.currentTime);
            if (center) oDefault.viewer.camera.lookAt(center, new Cesium.HeadingPitchRange(hpRange.heading, hpRange.pitch,
                hpRange.range));
        }, 100)

    },
    stopFly: function() {
        oMud.startDataRoll();
        oDefault.waterFlowArrowArr.map(function(item) {
            item.show = true;
        })
        oDefault.tilesetList.map(function(item) {
                if (item.id == 'jidian-08') {
                    item.tilesetList.map(function(tile) {
                        tile.tileset.modelMatrix = tile.matrix;
                    })
                }
                if (item.id == 'jidian-09') {
                    item.tilesetList.map(function(tile) {
                        tile.tileset.modelMatrix = tile.matrix;
                    })
                }
            })
            //飞行结束 恢复事件 清除数据及面板
        oMud.restoreCameraEvents();
        oDefault.clearFly();
        if (document.getElementById('systemFlyPanel')) {
            document.getElementById('systemFlyPanel').remove();
        }
        if (document.getElementById('systemFlyPanelHide')) {
            document.getElementById('systemFlyPanelHide').remove();
        }
        if (document.getElementById('dataRollControl')) {
            document.getElementById('dataRollControl').remove();
        }
        oMud.createFlyPanel();
        oDefault.flyData.pauseData.currentTime = null;
        oDefault.flyData.pauseData.cameraOrientation = [];
        oDefault.flyData.pauseData.cameraPosition = [];
        //设置角度
        var initialPosition = Cesium.Cartesian3.fromDegrees(106.07283636443235, 29.869583307680518, 115.50051002485527);
        var initialOrientation = new Cesium.HeadingPitchRoll.fromDegrees(90.05, -71.67, 360.00);
        oDefault.viewer.scene.camera.setView({
            destination: initialPosition,
            orientation: initialOrientation,
            endTransform: Cesium.Matrix4.IDENTITY
        });
        oMud.audio.pause();
    },
    getSpaceDistance: function(positions) {
        var distance = 0;
        for (var i = 0; i < positions.length - 1; i++) {
            var point1cartographic = Cesium.Cartographic.fromCartesian(positions[i]);
            var point2cartographic = Cesium.Cartographic.fromCartesian(positions[i + 1]);
            var geodesic = new Cesium.EllipsoidGeodesic();
            geodesic.setEndPoints(point1cartographic, point2cartographic);
            var s = geodesic.surfaceDistance;
            s = Math.sqrt(Math.pow(s, 2) + Math.pow(point2cartographic.height - point1cartographic.height, 2));
            distance = distance + s;
        }
        return distance.toFixed(2);
    },
    startFly: function() {
        //
        oMud.stopDataRoll();
        oDefault.pointSigns.map(function(item) {
                $('#' + item.id).hide()
            })
            //
        oDefault.flyData.isPaused = false;
        oDefault.flyData.isStarted = true;
        oDefault.flyData.isPaused = false;
        //隐藏水流方向
        oDefault.waterFlowArrowArr.map(function(item) {
                item.show = false;
            })
            //创建水面
        oMud.createWaterSur();
        oDefault.waterSurEntityArr.map(function(item) {
            item.entity.show = false;
        })
        if (document.getElementById('rateForward')) {
            document.getElementById('rateForward').innerHTML = '';
        }
        if (document.getElementById('rateBackward')) {
            document.getElementById('rateBackward').innerHTML = '';
        }
        if (document.getElementById('systemFlyTimeLine')) {
            document.getElementById('systemFlyTimeLine').style.pointerEvents = 'auto';
        }
        if (document.getElementById('btnForward')) {
            document.getElementById('btnForward').style.pointerEvents = 'auto';
        }
        if (document.getElementById('btnBackward')) {
            document.getElementById('btnBackward').style.pointerEvents = 'auto';
        }
        var position = [];
        if (oMud.flyPositions.length > 0) {
            for (var i = 0; i < oMud.flyPositions.length; i++) {
                var x = oMud.flyPositions[i][0];
                var y = oMud.flyPositions[i][1];
                var z = oMud.flyPositions[i][2];
                position.push({
                    x: x,
                    y: y,
                    z: z
                });
            }
        } else {
            return;
        }
        //寻找要素（卷闸门等）方法
        function targetFeatureList(data, targetname) {
            var featureList = [];

            function findFeatures(target) {
                if (target.content) {
                    if (target.content.featuresLength > 0 && target.content._features) {
                        target.content._features.forEach(feature => {
                            if (feature.getProperty('name') == targetname) {
                                featureList.push(feature);
                            }
                        })
                    }
                }
                if (target.children.length > 0) {
                    target.children.forEach(child => {
                        findFeatures(child);
                    })
                }
            }
            if (data.root) {
                var root = data.root;
            } else {
                console.log('no root exist');
                return;
            }
            findFeatures(root);
            return featureList;
        }
        //设置clock路径方法
        function computeCirclularFlight() {
            function addStep(type, num, mutiplier) {
                var position_a = new Cesium.Cartesian3(property._property._values[i * 3 - 3], property._property._values[i * 3 -
                    2], property._property._values[i * 3 - 1]);
                var _position = Cesium.Cartesian3.fromDegrees(position[i].x, position[i].y, position[i].z);
                var positions = [Cesium.Ellipsoid.WGS84.cartesianToCartographic(position_a), Cesium.Ellipsoid.WGS84.cartesianToCartographic(
                    _position)];
                var a = new Cesium.EllipsoidGeodesic(positions[0], positions[1]);
                var long = a.surfaceDistance;
                if (type == 'distance') {
                    var _time = long / num;
                }
                if (type == 'seconds') {
                    var _time = num * mutiplier;
                }
                var time = Cesium.JulianDate.addSeconds(property._property._times[i - 1], _time, new Cesium.JulianDate());
                property.addSample(time, _position);
            }
            var property = new Cesium.SampledPositionProperty();
            for (var i = 0; i < position.length; i++) {
                if (i == 0) {
                    var time = Cesium.JulianDate.addSeconds(start, i, new Cesium.JulianDate());
                    var _position = Cesium.Cartesian3.fromDegrees(position[i].x, position[i].y, position[i].z);
                    property.addSample(time, _position);
                }
                if (i == 1) {
                    addStep('distance', 10, 0.15);

                }
                if (i == 2) {
                    addStep('seconds', 4, 0.15);
                }
                if (i == 3) {
                    addStep('distance', 20, 0.15);
                }
                if (i == 4) {
                    addStep('distance', 20, 0.15);
                }
                if (i == 5) {
                    addStep('distance', 20, 0.15);
                }
                if (i == 6) {
                    addStep('seconds', 4, 0.15);
                }
                if (i == 7) {
                    addStep('seconds', 3, 0.15);
                }

                if (i == 8) {
                    addStep('distance', 50, 0.15);
                }
                if (i == 9) {
                    addStep('seconds', 2, 0.15);
                }
                if (i == 10) {
                    addStep('seconds', 4, 0.15);
                }
                if (i == 11) {
                    addStep('distance', 30, 0.15);
                }
                if (i == 12) {
                    addStep('seconds', 1, 0.15);
                }
                if (i == 13) {
                    addStep('distance', 50, 0.15);
                }
                if (i == 14) {
                    addStep('seconds', 2, 0.15);
                }
                if (i == 15) {
                    addStep('distance', 20, 0.15);
                }
                if (i == 16) {
                    addStep('seconds', 4, 0.15);
                }
                if (i == 17) {
                    addStep('distance', 50, 0.15);
                }
                if (i == 18) {
                    addStep('distance', 50, 0.15);
                }
                if (i == 19) {
                    addStep('seconds', 5, 0.15);
                }
                if (i == 20) {
                    addStep('distance', 30, 0.15);
                }
                if (i == 21) {
                    addStep('seconds', 6, 0.15);
                }
                if (i == 22) {
                    addStep('distance', 20, 0.15);
                }
                if (i == 23) {
                    addStep('seconds', 7, 0.15);
                }


            }
            return property;
        }
        var start = Cesium.JulianDate.fromDate(new Date(2018, 3, 15, 16));
        var stop = Cesium.JulianDate.addSeconds(start, 103 * 0.15, new Cesium.JulianDate());
        oDefault.viewer.clock.startTime = start.clone();
        oDefault.viewer.clock.stopTime = stop.clone();
        if (oDefault.flyData.pauseData.currentTime) {
            oDefault.viewer.clock.currentTime = oDefault.flyData.pauseData.currentTime;
        } else {
            oDefault.viewer.clock.currentTime = start.clone();
        }
        oDefault.viewer.clock.clockRange = Cesium.ClockRange.CLAMPED;
        oDefault.viewer.clock.multiplier = 0.15;
        oDefault.viewer.clock.canAnimate = false;
        oDefault.viewer.clock.shouldAnimate = true;
        var _position = computeCirclularFlight();
        //设置每段位置的朝向
        var timesArr = _position._property._times;
        oMud.waterSurEntityTimerangeArr = [{
                name: 'mud-watersur-1',
                timeRange: timesArr[2].secondsOfDay
            },
            {
                name: 'mud-watersur-2',
                timeRange: timesArr[1].secondsOfDay - 0.15
            },
            {
                name: 'mud-watersur-3-0',
                timeRange: timesArr[9].secondsOfDay + 0.1
            },
            {
                name: 'mud-watersur-3-1',
                timeRange: timesArr[9].secondsOfDay + 0.1
            },
            {
                name: 'mud-watersur-3-2',
                timeRange: timesArr[13].secondsOfDay
            }
        ];
        oMud.orientationArr = [{
                start: timesArr[0].secondsOfDay,
                stop: timesArr[3].secondsOfDay,
                orientation: {
                    heading: 63.57,
                    pitch: -60.79,
                    range: 0.1
                }
            },
            {
                start: timesArr[3].secondsOfDay,
                stop: timesArr[6].secondsOfDay,
                orientation: {
                    heading: 70.57,
                    pitch: -35.79,
                    range: 0.1
                }
            },
            {
                start: timesArr[6].secondsOfDay,
                stop: timesArr[7].secondsOfDay,
                orientation: {
                    heading: 130.57,
                    pitch: -35.79,
                    range: 0.1
                }
            },
            {
                start: timesArr[7].secondsOfDay,
                stop: timesArr[8].secondsOfDay,
                orientation: {
                    heading: 20.57,
                    pitch: -35.79,
                    range: 0.1
                }
            },
            {
                start: timesArr[8].secondsOfDay,
                stop: timesArr[9].secondsOfDay,
                orientation: {
                    heading: 340.57,
                    pitch: -35.79,
                    range: 0.1
                }
            },
            {
                start: timesArr[9].secondsOfDay,
                stop: timesArr[14].secondsOfDay,
                orientation: {
                    heading: 340.57,
                    pitch: -45.79,
                    range: 0.1
                }
            },
            {
                start: timesArr[14].secondsOfDay,
                stop: timesArr[21].secondsOfDay,
                orientation: {
                    heading: 340.57,
                    pitch: -35.79,
                    range: 0.1
                }
            },
        ];
        var entityFly = oDefault.viewer.entities.add({
            availability: new Cesium.TimeIntervalCollection([new Cesium.TimeInterval({
                start: start,
                stop: stop
            })]),
            position: _position,
            orientation: new Cesium.VelocityOrientationProperty(_position),
            point: {
                color: Cesium.Color.TRANSPARENT,
                outlineColor: Cesium.Color.TRANSPARENT,
                outlineWidth: 2,
                pixelSize: 20,
            },
            path: {
                resolution: 1,
                material: new Cesium.PolylineGlowMaterialProperty({
                    glowPower: 0.1,
                    color: Cesium.Color.YELLOW
                }),
                width: 0
            },
            viewFrom: new Cesium.Cartesian3(-1, -0.5, 2),
        });

        oDefault.viewer.trackedEntity = entityFly;

        //计算飞行时长
        var rangeInput = document.getElementById('systemFlyTimeLine');
        var startTime = document.getElementById('startTime');
        var stopTime = document.getElementById('stopTime');
        var duration = 0;
        var timeArr = _position._property._times;
        duration = (timeArr[timeArr.length - 1].secondsOfDay - timeArr[0].secondsOfDay) / oDefault.viewer.clock.multiplier;
        oDefault.waterSurEntityArr.map(function(item) {
                var percent = rangeInput.value / 100;
                var addsec = (timeArr[timeArr.length - 1].secondsOfDay - timeArr[0].secondsOfDay) * percent;
                var currentTime = Cesium.JulianDate.addSeconds(start, addsec, new Cesium.JulianDate());
                var timeRange
                oMud.waterSurEntityTimerangeArr.map(function(arr) {
                    if (arr.name == item.name) {
                        timeRange = arr.timeRange
                    }
                })
                if (parseInt(timeRange * 100) < parseInt(currentTime.secondsOfDay * 100)) {
                    item.entity.show = true;
                } else {
                    item.entity.show = false;
                }
            })
            //注册进度条点击事件
        rangeInput.onmousedown = function() {
            oMud.timeInputRange = true;
            oMud.createWaterSur();
            oDefault.waterSurEntityArr.map(function(item) {
                item.entity.show = false;
            })
        }
        rangeInput.onmouseup = function() {
            oDefault.waterParticleArr.map(function(item) {
                oDefault.viewer.scene.primitives.remove(item.entity)
            })
            oDefault.waterParticleArr = [];
            oDefault.waterSurEntityArr.map(function(item) {
                    var percent = rangeInput.value / 100;
                    var addsec = (timeArr[timeArr.length - 1].secondsOfDay - timeArr[0].secondsOfDay) * percent;
                    var currentTime = Cesium.JulianDate.addSeconds(start, addsec, new Cesium.JulianDate());
                    var timeRange
                    oMud.waterSurEntityTimerangeArr.map(function(arr) {
                        if (arr.name == item.name) {
                            timeRange = arr.timeRange
                        }
                    })
                    if (parseInt(timeRange * 100) < parseInt(currentTime.secondsOfDay * 100)) {
                        item.entity.show = true;
                    } else {
                        item.entity.show = false;
                    }
                })
                //位置
            if (oDefault.flyData.isStarted && !oDefault.flyData.isPaused) {
                var percent = rangeInput.value / 100;
                var addsec = (timeArr[timeArr.length - 1].secondsOfDay - timeArr[0].secondsOfDay) * percent;
                var currentTime = Cesium.JulianDate.addSeconds(start, addsec, new Cesium.JulianDate());
                oDefault.viewer.clockViewModel.currentTime = currentTime;
                oMud.timeInputRange = false;
                // 方向			
                var cTime = oDefault.viewer.clockViewModel.currentTime;
                oMud.orientationArr.forEach(function(item) {
                        if (cTime.secondsOfDay < item.stop && cTime.secondsOfDay >= item.start) {
                            var hpRange = {};
                            hpRange.heading = Cesium.Math.toRadians(item.orientation.heading);
                            hpRange.pitch = Cesium.Math.toRadians(item.orientation.pitch);
                            hpRange.range = item.orientation.range;
                            var center = entityFly.position.getValue(oDefault.viewer.clock.currentTime);
                            if (center) oDefault.viewer.camera.lookAt(center, new Cesium.HeadingPitchRange(hpRange.heading, hpRange.pitch,
                                hpRange.range));
                        }
                    })
                    //计算音频进度
                if (oDefault.viewer.clock.multiplier == 0.15) {
                    oMud.audio.play();
                }
            } else {
                oMud.startFly();
                oDefault.viewer.clock.shouldAnimate = false;
                var percent = rangeInput.value / 100;
                var addsec = (timeArr[timeArr.length - 1].secondsOfDay - timeArr[0].secondsOfDay) * percent;
                var currentTime = Cesium.JulianDate.addSeconds(start, addsec, new Cesium.JulianDate());
                oDefault.viewer.clockViewModel.currentTime = currentTime;
                oMud.timeInputRange = false;
                var cTime = oDefault.viewer.clockViewModel.currentTime;
                oMud.orientationArr.forEach(function(item) {
                    if (cTime.secondsOfDay < item.stop && cTime.secondsOfDay >= item.start) {
                        var hpRange = {};
                        hpRange.heading = Cesium.Math.toRadians(item.orientation.heading);
                        hpRange.pitch = Cesium.Math.toRadians(item.orientation.pitch);
                        hpRange.range = item.orientation.range;
                        var center = entityFly.position.getValue(oDefault.viewer.clock.currentTime);
                        if (center) oDefault.viewer.camera.lookAt(center, new Cesium.HeadingPitchRange(hpRange.heading, hpRange.pitch,
                            hpRange.range));
                    }
                })
                oMud.pauseFly();
            }
        }


        //label显示标志
        var showMark = [];
        var labelData = oDefault.configData.tilesets.chejian.tujian;
        for (var i = 0; i < labelData.length; i++) {
            showMark.push(true);
        }
        //datalabel显示标志
        var dataShowMark = [];
        for (var i = 0; i < oMud.dataLabelList.length; i++) {
            dataShowMark.push(true);
        }
        //转向标志
        var turn0 = true;
        var turn1 = true;
        var turn2 = true;
        var turn3 = true;
        var turn4 = true;
        var turn5 = true;
        var turn6 = true;
        var turn7 = true;
        var turn8 = true;
        var turn9 = true;
        var turn10 = true;
        var turn11 = true;
        var turn12 = true;
        var turn13 = true;
        // 转向方法
        var swerve = function(headingDeg, perDeg, pitch, times) {
            var i = 0;
            var deg = headingDeg;
            var a = 0.1;
            var aba = setInterval(function() {
                deg = perDeg + deg;
                var hpRange = {};
                hpRange.heading = Cesium.Math.toRadians(deg);
                hpRange.pitch = Cesium.Math.toRadians(pitch);
                hpRange.range = a;
                var center = entityFly.position.getValue(oDefault.viewer.clock.currentTime);
                if (center) oDefault.viewer.camera.lookAt(center, new Cesium.HeadingPitchRange(hpRange.heading, hpRange.pitch,
                    hpRange.range));
                i++
                if (i == times) {
                    clearInterval(aba);
                }
            }, 20)
        };
        var swerveV = function(headingDeg, perPitch, pitch, times) {
            var i = 0;
            var deg = headingDeg;
            var pitch = pitch;
            var a = 0.1;
            var aba = setInterval(function() {
                pitch = pitch + perPitch;
                var hpRange = {};
                hpRange.heading = Cesium.Math.toRadians(deg);
                hpRange.pitch = Cesium.Math.toRadians(pitch);
                hpRange.range = a;
                var center = entityFly.position.getValue(oDefault.viewer.clock.currentTime);
                if (center) oDefault.viewer.camera.lookAt(center, new Cesium.HeadingPitchRange(hpRange.heading, hpRange.pitch,
                    hpRange.range));
                i++
                if (i == times) {
                    clearInterval(aba);
                }
            }, 20)
        };
        var startT = oDefault.viewer.clock.startTime.secondsOfDay;
        var multiplier = oDefault.viewer.clock.multiplier;
        var audioPlayer = document.getElementById('audio_player');
        var ctime, begin, end;
        var timeline = document.getElementById('systemFlyTimeLine');

        //喷水
        var spray = true;
        var viewer = oDefault.viewer;
        var viewModel = {
            emissionRate: 3500.0,
            gravity: -10.0,
            minimumParticleLife: 2.2,
            maximumParticleLife: 2.2,
            minimumSpeed: 2.0,
            maximumSpeed: 3.0,
            startScale: 6.0,
            endScale: 1.0,
            particleSize: 0.5,
        };
        var gravityScratch = new Cesium.Cartesian3();

        function applyGravity(p, dt) {
            var position = p.position;
            Cesium.Cartesian3.normalize(position, gravityScratch);
            Cesium.Cartesian3.multiplyByScalar(
                gravityScratch,
                viewModel.gravity * dt,
                gravityScratch
            );
            p.velocity = Cesium.Cartesian3.add(
                p.velocity,
                gravityScratch,
                p.velocity
            );
        }
        //注册clock ontick事件
        oDefault.clockTickEvent = function() {
            if (entityFly.position) {
                var currentPosition = entityFly.position.getValue(oDefault.viewer.clock.currentTime);
                var ellipsoid = oDefault.viewer.scene.globe.ellipsoid;
                if (!currentPosition) {
                    //结束飞行
                    oMud.stopFly();
                    //清除音频
                    var audio = document.getElementById('audio_player');
                    if (audio) {
                        audio.remove();
                    }
                    //显示水面
                    oDefault.waterSurEntityArr.map(function(item) {
                        item.entity.show = true;
                    })
                } else {
                    //倒退完成结束飞行
                    if (oDefault.viewer.clock.multiplier < 0 && oDefault.viewer.clock.currentTime.secondsOfDay == oDefault.viewer.clock
                        .startTime.secondsOfDay) {
                        oMud.stopFly();
                    }
                    //进度条和时间更新
                    if (!oMud.timeInputRange) {
                        //startTime
                        var currentT = oDefault.viewer.clock.currentTime.secondsOfDay;
                        var value = (currentT - startT) / multiplier;
                        value = value / duration;
                        rangeInput.value = value * 100;
                        var time = duration * value;
                        time = time.toFixed(0);
                        var min = 0;
                        var sec = 0;
                        min = parseInt(time / 60);
                        sec = time % 60;
                        if (min < 10) {
                            min = "0" + min;
                        } else {
                            min = min + '';
                        }
                        if (sec < 10) {
                            sec = "0" + sec;
                        } else {
                            sec = sec + '';
                        }
                        time = min + ":" + sec;
                        startTime.innerHTML = time;
                        //stopTime
                        var timeRemain = duration * (1 - value)
                        timeRemain = timeRemain.toFixed(0);
                        var min = 0;
                        var sec = 0;
                        min = parseInt(timeRemain / 60);
                        sec = timeRemain % 60;
                        if (min < 10) {
                            min = "0" + min;
                        } else {
                            min = min + '';
                        }
                        if (sec < 10) {
                            sec = "0" + sec;
                        } else {
                            sec = sec + '';
                        }
                        timeRemain = min + ":" + sec;
                        stopTime.innerHTML = '-' + timeRemain;
                    }
                    //
                    var a = oDefault.viewer.clock.currentTime.secondsOfDay.toFixed(2);

                    ctime = timesArr[0].secondsOfDay;
                    begin = (ctime + 0.1).toFixed(2);
                    if (a == begin) {
                        $('#mud-06').css('display', 'block');
                        setTimeout(function() {
                            $('#mud-06').css('display', 'none');
                        }, 5000)
                        $('#mud-07').css('display', 'block');
                        setTimeout(function() {
                            $('#mud-07').css('display', 'none');
                        }, 5000)
                        oDefault.waterFlowArrowArr[0].show = true;
                        //
                    }

                    ctime = timesArr[1].secondsOfDay;
                    begin = (ctime - 0.15).toFixed(2);
                    end = (ctime).toFixed(2);
                    if (a >= begin && a <= end && spray) {
                        spray = false;
                        var scene = viewer.scene;
                        var color = [170, 85, 0, 140];
                        var ellipsoid = viewer.scene.globe.ellipsoid;
                        var position = Cesium.Cartesian3.fromDegrees(106.0731075518, 29.8691866062, 10, ellipsoid)
                        var color1 = new Cesium.Color.fromBytes(color[0], color[1], color[2], 50);
                        var color2 = new Cesium.Color.fromBytes(color[0], color[1], color[2], 0);
                        var particleSystem = scene.primitives.add(
                            new Cesium.ParticleSystem({
                                image: "./Images/water.png",
                                startColor: color1,
                                endColor: color2,
                                startScale: viewModel.startScale,
                                endScale: viewModel.endScale,
                                minimumParticleLife: viewModel.minimumParticleLife,
                                maximumParticleLife: viewModel.maximumParticleLife,
                                minimumSpeed: viewModel.minimumSpeed,
                                maximumSpeed: viewModel.maximumSpeed,
                                imageSize: new Cesium.Cartesian2(
                                    viewModel.particleSize,
                                    viewModel.particleSize
                                ),
                                emissionRate: viewModel.emissionRate,
                                lifetime: 16.0,
                                emitter: new Cesium.CircleEmitter(0.3),
                                modelMatrix: new Cesium.Matrix4.fromTranslation(position),
                                updateCallback: applyGravity,
                            })
                        );
                        var mat = Cesium.Transforms.eastNorthUpToFixedFrame(position);
                        var deg = 90
                        var rotationX = Cesium.Matrix4.fromRotationTranslation(Cesium.Matrix3.fromRotationY(Cesium.Math.toRadians(
                            deg)));
                        Cesium.Matrix4.multiply(mat, rotationX, mat);
                        particleSystem.modelMatrix = mat;
                        oDefault.waterParticleArr.push({
                            pid: 'tujian-08',
                            entity: particleSystem,
                            name: 'particle-2'
                        })
                        setTimeout(function() {
                            //水面
                            oDefault.waterSurEntityArr.map(function(item) {
                                if (item.name == 'mud-watersur-2') {
                                    item.entity.show = true;
                                    var primitive = item.entity;
                                    var viewer = oDefault.viewer
                                    setTimeout(function() {
                                        var coor1 = Cesium.Cartesian3.fromDegrees(106.0733180897, 29.8692887324, 8)
                                        var coor2 = Cesium.Cartesian3.fromDegrees(106.0733180897, 29.8692887324, 12)
                                        var coor = [coor2.x - coor1.x, coor2.y - coor1.y, coor2.z - coor1.z];

                                        var i = 0;
                                        var clock = setInterval(function() {
                                            if (i > 30) {
                                                clearInterval(clock);
                                            }
                                            var translation = Cesium.Matrix4.fromTranslation(new Cesium.Cartesian3(coor[0] / 250, coor[1] /
                                                250,
                                                coor[2] / 250))
                                            Cesium.Matrix4.multiply(primitive.modelMatrix, translation, primitive.modelMatrix);
                                            i++;
                                        }, 100)
                                    }, 1000)
                                }
                            })
                        }, 500)
                    }

                    ctime = timesArr[1].secondsOfDay;
                    begin = (ctime).toFixed(2);
                    if (a == begin) {
                        oDefault.tilesetList.map(function(item) {
                            if (item.id == 'jidian-08') {
                                var viewer = oDefault.viewer;
                                var coor1 = Cesium.Cartesian3.fromDegrees(106.0733180897, 29.8692887324, 8)
                                var coor2 = Cesium.Cartesian3.fromDegrees(106.0733180897, 29.8692887324, 12)
                                var coor = [coor2.x - coor1.x, coor2.y - coor1.y, coor2.z - coor1.z];

                                var primitive1 = item.tilesetList[18].tileset;
                                var i = 0;
                                var clock1 = setInterval(function() {
                                    if (i > 70) {
                                        clearInterval(clock1);
                                    }
                                    var translation = Cesium.Matrix4.fromTranslation(new Cesium.Cartesian3(coor[0] / 500, coor[1] /
                                        500, coor[2] / 500))
                                    Cesium.Matrix4.multiply(primitive1.modelMatrix, translation, primitive1.modelMatrix);
                                    i++;
                                }, 100)


                                var primitive2 = item.tilesetList[19].tileset;
                                var j = 0;
                                var clock2 = setInterval(function() {
                                    if (j > 70) {
                                        clearInterval(clock2);
                                    }
                                    var translation = Cesium.Matrix4.fromTranslation(new Cesium.Cartesian3(coor[0] / 500, coor[1] /
                                        500,
                                        coor[2] / 500))
                                    Cesium.Matrix4.multiply(primitive2.modelMatrix, translation, primitive2.modelMatrix);
                                    j++;
                                }, 100)


                                var tileset1 = item.tilesetList[14].tileset;
                                var center1 = tileset1.boundingSphere.center;
                                var mat1 = Cesium.Transforms.eastNorthUpToFixedFrame(center1);
                                var deg1 = 40
                                var clock3 = setInterval(function() {
                                    var rotationX = Cesium.Matrix4.fromRotationTranslation(Cesium.Matrix3.fromRotationZ(Cesium.Math.toRadians(
                                        deg1)));
                                    Cesium.Matrix4.multiply(mat1, rotationX, mat1);
                                    tileset1._root.transform = mat1;
                                }, 10)


                                var tileset2 = item.tilesetList[15].tileset;
                                var center2 = tileset2.boundingSphere.center;
                                var mat2 = Cesium.Transforms.eastNorthUpToFixedFrame(center2);
                                var deg2 = 40
                                var clock4 = setInterval(function() {
                                    var rotationX = Cesium.Matrix4.fromRotationTranslation(Cesium.Matrix3.fromRotationZ(Cesium.Math.toRadians(
                                        deg2)));
                                    Cesium.Matrix4.multiply(mat2, rotationX, mat2);
                                    tileset2._root.transform = mat2;
                                }, 10)

                                setTimeout(function() {
                                    clearInterval(clock3);
                                    clearInterval(clock4);
                                }, 7000)


                            }
                        })

                    }

                    ctime = timesArr[2].secondsOfDay;
                    begin = (ctime).toFixed(2);
                    if (a == begin) {
                        oDefault.waterSurEntityArr.map(function(item) {
                            if (item.name == 'mud-watersur-1') {
                                item.entity.show = true;
                                var primitive = item.entity;
                                var viewer = oDefault.viewer
                                setTimeout(function() {
                                    var coor1 = Cesium.Cartesian3.fromDegrees(106.0733180897, 29.8692887324, 8)
                                    var coor2 = Cesium.Cartesian3.fromDegrees(106.0733180897, 29.8692887324, 12)
                                    var coor = [coor2.x - coor1.x, coor2.y - coor1.y, coor2.z - coor1.z];
                                    var i = 0;
                                    var clock = setInterval(function() {
                                        if (i > 30) {
                                            clearInterval(clock);
                                        }
                                        var translation = Cesium.Matrix4.fromTranslation(new Cesium.Cartesian3(coor[0] / 350, coor[1] /
                                            350,
                                            coor[2] / 350))
                                        Cesium.Matrix4.multiply(primitive.modelMatrix, translation, primitive.modelMatrix);
                                        i++;
                                    }, 100)
                                }, 1000)
                            }
                        })
                    }

                    ctime = timesArr[3].secondsOfDay;
                    begin = (ctime + 0.1).toFixed(2);
                    if (a == begin) {
                        oDefault.waterParticleArr.map(function(item) {
                            oDefault.viewer.scene.primitives.remove(item.entity)
                        })
                        $('#mud-08').css('display', 'block');
                        setTimeout(function() {
                            $('#mud-08').css('display', 'none');
                        }, 5000)
                        $('#mud-09').css('display', 'block');
                        setTimeout(function() {
                            $('#mud-09').css('display', 'none');
                        }, 5000)
                        $('#mud-10').css('display', 'block');
                        setTimeout(function() {
                            $('#mud-10').css('display', 'none');
                        }, 5000)
                        $('#mud-11').css('display', 'block');
                        setTimeout(function() {
                            $('#mud-11').css('display', 'none');
                        }, 5000)
                        oDefault.waterFlowArrowArr[1].show = true;
                        oDefault.waterFlowArrowArr[2].show = true;
                    }
                    ctime = timesArr[5].secondsOfDay;
                    begin = (ctime + 0.1).toFixed(2);
                    if (a == begin) {
                        oDefault.waterFlowArrowArr[23].show = true;
                        oDefault.waterFlowArrowArr[22].show = true;
                    }

                    ctime = timesArr[6].secondsOfDay;
                    begin = (ctime).toFixed(2);
                    if (a == begin) {
                        $('#mud-12').css('display', 'block');
                        setTimeout(function() {
                            $('#mud-12').css('display', 'none');
                        }, 5000)
                        $('#mud-13').css('display', 'block');
                        setTimeout(function() {
                            $('#mud-13').css('display', 'none');
                        }, 5000)
                        oDefault.waterFlowArrowArr[3].show = true;
                        oDefault.waterFlowArrowArr[4].show = true;
                    }

                    ctime = timesArr[7].secondsOfDay;
                    begin = (ctime).toFixed(2);
                    if (a == begin) {
                        $('#mud-0602').css('display', 'block');
                        setTimeout(function() {
                            $('#mud-0602').css('display', 'none');
                        }, 5000)
                        oDefault.waterFlowArrowArr[5].show = true;
                        oDefault.waterFlowArrowArr[6].show = true;
                    }

                    ctime = timesArr[7].secondsOfDay;
                    begin = (ctime + 0.3).toFixed(2);
                    if (a == begin) {
                        oDefault.waterFlowArrowArr[8].show = true;
                        oDefault.waterFlowArrowArr[7].show = true;
                        oDefault.waterFlowArrowArr[21].show = true;
                    }



                    ctime = timesArr[9].secondsOfDay;
                    begin = (ctime + 0.1).toFixed(2);
                    if (a == begin) {

                        oDefault.tilesetList.map(function(item) {
                            if (item.id == 'jidian-09') {
                                var target = item.tilesetList[2].tileset
                                var viewer = oDefault.viewer;
                                var center = target.boundingSphere.center;
                                var mat = Cesium.Transforms.eastNorthUpToFixedFrame(center);
                                var deg = 5
                                var clock = setInterval(function() {
                                    var rotationX = Cesium.Matrix4.fromRotationTranslation(Cesium.Matrix3.fromRotationZ(Cesium.Math.toRadians(
                                        deg)));
                                    Cesium.Matrix4.multiply(mat, rotationX, mat);
                                    target._root.transform = mat;
                                }, 100)
                                setTimeout(function() {
                                    clearInterval(clock);
                                }, 5000)
                            }
                        })

                        oDefault.tilesetList.map(function(item) {
                            if (item.id == 'jidian-09') {
                                var target = item.tilesetList[1].tileset
                                var viewer = oDefault.viewer;
                                var center = target.boundingSphere.center;
                                var mat = Cesium.Transforms.eastNorthUpToFixedFrame(center);
                                var deg = 5
                                var clock1 = setInterval(function() {
                                    var rotationX = Cesium.Matrix4.fromRotationTranslation(Cesium.Matrix3.fromRotationZ(Cesium.Math.toRadians(
                                        deg)));
                                    Cesium.Matrix4.multiply(mat, rotationX, mat);
                                    target._root.transform = mat;
                                }, 100)
                                setTimeout(function() {
                                    clearInterval(clock1);
                                }, 5000)
                            }
                        })

                        $('#mud-02').css('display', 'block');
                        setTimeout(function() {
                            $('#mud-02').css('display', 'none');
                        }, 5000)
                        $('#mud-03').css('display', 'block');
                        setTimeout(function() {
                            $('#mud-03').css('display', 'none');
                        }, 5000)
                        oDefault.waterSurEntityArr.map(function(item) {
                            if (item.name == 'mud-watersur-3-0') {
                                item.entity.show = true;
                                var primitive = item.entity;
                                var viewer = oDefault.viewer
                                var coor1 = Cesium.Cartesian3.fromDegrees(106.0733180897, 29.8692887324, 8)
                                var coor2 = Cesium.Cartesian3.fromDegrees(106.0733180897, 29.8692887324, 12)
                                var coor = [coor2.x - coor1.x, coor2.y - coor1.y, coor2.z - coor1.z];
                                var i = 0;
                                var clock = setInterval(function() {
                                    if (i > 30) {
                                        clearInterval(clock);
                                    }
                                    var translation = Cesium.Matrix4.fromTranslation(new Cesium.Cartesian3(coor[0] / 250, coor[1] /
                                        250,
                                        coor[2] / 250))
                                    Cesium.Matrix4.multiply(primitive.modelMatrix, translation, primitive.modelMatrix);
                                    i++;
                                }, 100)
                            }
                        })
                        oDefault.waterSurEntityArr.map(function(item) {
                            if (item.name == 'mud-watersur-3-1') {
                                item.entity.show = true;
                                var primitive = item.entity;
                                var viewer = oDefault.viewer
                                var coor1 = Cesium.Cartesian3.fromDegrees(106.0733180897, 29.8692887324, 8)
                                var coor2 = Cesium.Cartesian3.fromDegrees(106.0733180897, 29.8692887324, 12)
                                var coor = [coor2.x - coor1.x, coor2.y - coor1.y, coor2.z - coor1.z];

                                var i = 0;
                                var clock = setInterval(function() {
                                    if (i > 30) {
                                        clearInterval(clock);
                                    }
                                    var translation = Cesium.Matrix4.fromTranslation(new Cesium.Cartesian3(coor[0] / 250, coor[1] /
                                        250,
                                        coor[2] / 250))
                                    Cesium.Matrix4.multiply(primitive.modelMatrix, translation, primitive.modelMatrix);
                                    i++;
                                }, 100)
                            }
                        })
                    }

                    ctime = timesArr[11].secondsOfDay;
                    begin = (ctime).toFixed(2);
                    if (a == begin) {

                        oDefault.waterFlowArrowArr[8].show = true;
                        oDefault.waterFlowArrowArr[9].show = true;
                        oDefault.waterFlowArrowArr[10].show = true;
                    }


                    ctime = timesArr[13].secondsOfDay;
                    begin = (ctime).toFixed(2);
                    if (a == begin) {
                        oDefault.waterSurEntityArr.map(function(item) {
                            if (item.name == 'mud-watersur-3-2') {
                                item.entity.show = true;
                                var primitive = item.entity;
                                var viewer = oDefault.viewer
                                var coor1 = Cesium.Cartesian3.fromDegrees(106.0733180897, 29.8692887324, 8)
                                var coor2 = Cesium.Cartesian3.fromDegrees(106.0733180897, 29.8692887324, 12)
                                var coor = [coor2.x - coor1.x, coor2.y - coor1.y, coor2.z - coor1.z];

                                var i = 0;
                                var clock = setInterval(function() {
                                    if (i > 30) {
                                        clearInterval(clock);
                                    }
                                    var translation = Cesium.Matrix4.fromTranslation(new Cesium.Cartesian3(coor[0] / 250, coor[1] /
                                        250,
                                        coor[2] / 250))
                                    Cesium.Matrix4.multiply(primitive.modelMatrix, translation, primitive.modelMatrix);
                                    i++;
                                }, 100)
                            }
                        })
                    }

                    ctime = timesArr[14].secondsOfDay;
                    begin = (ctime).toFixed(2);
                    if (a == begin) {
                        oDefault.waterFlowArrowArr[11].show = true;
                        oDefault.waterFlowArrowArr[12].show = true;
                        oDefault.waterFlowArrowArr[13].show = true;
                        oDefault.waterFlowArrowArr[14].show = true;
                    }

                    ctime = timesArr[17].secondsOfDay;
                    begin = (ctime + 0.6).toFixed(2);
                    if (a == begin) {
                        $('#mud-17').css('display', 'block');
                        setTimeout(function() {
                            $('#mud-17').css('display', 'none');
                        }, 5000)
                        $('#mud-18').css('display', 'block');
                        setTimeout(function() {
                            $('#mud-18').css('display', 'none');
                        }, 5000)
                        $('#mud-19').css('display', 'block');
                        setTimeout(function() {
                            $('#mud-19').css('display', 'none');
                        }, 5000)
                        $('#mud-20').css('display', 'block');
                        setTimeout(function() {
                            $('#mud-20').css('display', 'none');
                        }, 5000)
                        $('#mud-21').css('display', 'block');
                        setTimeout(function() {
                            $('#mud-21').css('display', 'none');
                        }, 5000)

                        oDefault.waterFlowArrowArr[15].show = true;
                        oDefault.waterFlowArrowArr[16].show = true;
                        oDefault.waterFlowArrowArr[17].show = true;
                        oDefault.waterFlowArrowArr[18].show = true;
                        oDefault.waterFlowArrowArr[19].show = true;
                    }

                    ctime = timesArr[19].secondsOfDay;
                    begin = (ctime).toFixed(2);
                    if (a == begin) {
                        $('#mud-14').css('display', 'block');
                        setTimeout(function() {
                            $('#mud-14').css('display', 'none');
                        }, 5000)
                        $('#mud-15').css('display', 'block');
                        setTimeout(function() {
                            $('#mud-15').css('display', 'none');
                        }, 5000)
                        $('#mud-16').css('display', 'block');
                        setTimeout(function() {
                            $('#mud-16').css('display', 'none');
                        }, 5000)

                        oDefault.waterFlowArrowArr[20].show = true;
                        oDefault.waterFlowArrowArr[24].show = true;
                    }

                    //转向

                    // turn10
                    ctime = timesArr[3].secondsOfDay;
                    begin = (ctime - 0.1).toFixed(2);
                    end = (ctime).toFixed(2);
                    if (a >= begin && a <= end && turn10) {
                        turn10 = false;
                        if (oDefault.viewer.clock.multiplier > 0) {
                            swerveV(63, 5, -60, 5);
                        } else {
                            swerve(63, -5, -35, 5);
                        }
                    } else if (a < begin || a > end) {
                        turn10 = true;
                    }

                    // turn1
                    ctime = timesArr[3].secondsOfDay;
                    begin = (ctime).toFixed(2);
                    end = (ctime + 0.1).toFixed(2);
                    if (a >= begin && a <= end && turn1) {
                        turn1 = false;
                        if (oDefault.viewer.clock.multiplier > 0) {
                            swerve(63, 1, -35, 7);
                        } else {
                            swerve(70, -1, -35, 7);
                        }
                    } else if (a < begin || a > end) {
                        turn1 = true;
                    }

                    // turn2
                    ctime = timesArr[6].secondsOfDay;
                    begin = (ctime - 0.15).toFixed(2);
                    end = (ctime).toFixed(2);
                    if (a >= begin && a <= end && turn2) {
                        turn2 = false;
                        if (oDefault.viewer.clock.multiplier > 0) {
                            swerve(70, 6, -35, 10);
                        } else {
                            swerve(140, -6, -35, 10);
                        }
                    } else if (a < begin || a > end) {
                        turn2 = true;
                    }

                    // turn3
                    ctime = timesArr[7].secondsOfDay;
                    begin = (ctime).toFixed(2);
                    end = (ctime + 0.05).toFixed(2);
                    if (a >= begin && a <= end && turn3) {
                        turn3 = false;
                        if (oDefault.viewer.clock.multiplier > 0) {
                            swerve(130, -11, -35, 10);
                        } else {
                            swerve(20, 11, -35, 10);
                        }
                    } else if (a < begin || a > end) {
                        turn3 = true;
                    }
                    // // turn4
                    ctime = timesArr[8].secondsOfDay;
                    begin = (ctime).toFixed(2);
                    end = (ctime + 0.1).toFixed(2);
                    if (a >= begin && a <= end && turn4) {
                        turn4 = false;
                        if (oDefault.viewer.clock.multiplier > 0) {
                            swerve(20, -4, -35, 10);
                        } else {
                            swerve(-20, 5, -35, 10);
                        }
                    } else if (a < begin || a > end) {
                        turn4 = true;
                    }
                    // // turn5
                    ctime = timesArr[9].secondsOfDay;
                    begin = (ctime).toFixed(2);
                    end = (ctime + 0.05).toFixed(2);
                    if (a >= begin && a <= end && turn5) {
                        turn5 = false;
                        if (oDefault.viewer.clock.multiplier > 0) {
                            swerveV(-20, -1, -35, 10);
                        } else {
                            swerveV(-20, 1, -45, 10);
                        }
                    } else if (a < begin || a > end) {
                        turn5 = true;
                    }
                    //turn6

                    ctime = timesArr[15].secondsOfDay;
                    begin = (ctime).toFixed(2);
                    end = (ctime + 0.05).toFixed(2);
                    if (a >= begin && a <= end && turn6) {
                        turn6 = false;
                        if (oDefault.viewer.clock.multiplier > 0) {
                            swerve(-20, -2, -45, 10);
                        } else {
                            swerve(-40, 2, -45, 10);
                        }
                    } else if (a < begin || a > end) {
                        turn6 = true;
                    }
                    //turn7
                    ctime = timesArr[15].secondsOfDay;
                    begin = (ctime + 0.05).toFixed(2);
                    end = (ctime + 0.1).toFixed(2);
                    if (a >= begin && a <= end && turn7) {
                        turn7 = false;
                        if (oDefault.viewer.clock.multiplier > 0) {
                            swerveV(-40, -1, -45, 10);
                        } else {
                            swerveV(-40, 1, -55, 10);
                        }
                    } else if (a < begin || a > end) {
                        turn7 = true;
                    }

                    //turn8
                    ctime = timesArr[16].secondsOfDay;
                    begin = (ctime).toFixed(2);
                    end = (ctime + 0.05).toFixed(2);
                    if (a >= begin && a <= end && turn8) {
                        turn8 = false;
                        if (oDefault.viewer.clock.multiplier > 0) {
                            swerveV(-40, 2, -55, 10);
                        } else {
                            swerveV(-40, -2, -35, 10);
                        }
                    } else if (a < begin || a > end) {
                        turn8 = true;
                    }

                    // // // turn9
                    ctime = timesArr[16].secondsOfDay;
                    begin = (ctime + 0.05).toFixed(2);
                    end = (ctime + 0.1).toFixed(2);
                    if (a >= begin && a <= end && turn9) {
                        turn9 = false;
                        if (oDefault.viewer.clock.multiplier > 0) {
                            swerve(-40, 2, -35, 10);
                        } else {
                            swerve(-20, -2, -35, 10);
                        }
                    } else if (a < begin || a > end) {
                        turn9 = true;
                    }
                }
            }
        }
        oDefault.viewer.clock.onTick.addEventListener(oDefault.clockTickEvent)
    },
    createWaterSur: function() {
        if (oDefault.waterSurEntityArr.length > 0) {
            oDefault.waterSurEntityArr.map(function(item) {
                oDefault.viewer.scene.primitives.remove(item.entity);
            })
            oDefault.waterSurEntityArr = [];
        }
        //排泥池水面
        var item = {
            "pid": "tujian-08",
            "type": "rectangle",
            "points": [
                106.0732841244, 29.8691169898, 8,
                106.0731323739, 29.8691169898, 8,
                106.0731323739, 29.8692522012, 8,
                106.0732841244, 29.8692522012, 8
            ],
            "color": [170, 85, 0, 140]
        }
        var color = new Cesium.Color.fromBytes(item.color[0], item.color[1], item.color[2], item.color[3]);
        if (item.type == 'rectangle') {
            var waterPrimitive = new Cesium.Primitive({
                show: true,
                allowPicking: false,
                geometryInstances: new Cesium.GeometryInstance({
                    geometry: new Cesium.PolygonGeometry({
                        polygonHierarchy: new Cesium.PolygonHierarchy(Cesium.Cartesian3.fromDegreesArrayHeights(item.points)),
                        perPositionHeight: true
                    })
                }),
                appearance: new Cesium.EllipsoidSurfaceAppearance({
                    material: new Cesium.Material({
                        fabric: {
                            type: 'Water',
                            uniforms: {
                                baseWaterColor: color,
                                normalMap: './Images/water.jpg',
                                frequency: 200.0,
                                animationSpeed: 0.02,
                                amplitude: 20.0
                            }
                        }
                    })
                })
            });
            oDefault.viewer.scene.primitives.add(waterPrimitive);
            oDefault.waterSurEntityArr.push({
                pid: item.pid,
                entity: waterPrimitive,
                name: 'mud-watersur-1'
            })
        }

        var item = {
            "pid": "tujian-08",
            "type": "rectangle",
            "points": [
                106.0731323739, 29.8691634792, 8,
                106.0731056988, 29.8691634792, 8,
                106.0731056988, 29.8692050964, 8,
                106.0731323739, 29.8692050964, 8,
            ],
            "color": [170, 85, 0, 140]
        }
        var color = new Cesium.Color.fromBytes(item.color[0], item.color[1], item.color[2], item.color[3]);
        if (item.type == 'rectangle') {
            var waterPrimitive = new Cesium.Primitive({
                show: true,
                allowPicking: false,
                geometryInstances: new Cesium.GeometryInstance({
                    geometry: new Cesium.PolygonGeometry({
                        polygonHierarchy: new Cesium.PolygonHierarchy(Cesium.Cartesian3.fromDegreesArrayHeights(item.points)),
                        perPositionHeight: true
                    })
                }),
                appearance: new Cesium.EllipsoidSurfaceAppearance({
                    material: new Cesium.Material({
                        fabric: {
                            type: 'Water',
                            uniforms: {
                                baseWaterColor: color,
                                normalMap: './Images/water.jpg',
                                frequency: 200.0,
                                animationSpeed: 0.02,
                                amplitude: 20.0
                            }
                        }
                    })
                })
            });
            oDefault.viewer.scene.primitives.add(waterPrimitive);
            oDefault.waterSurEntityArr.push({
                pid: item.pid,
                entity: waterPrimitive,
                name: 'mud-watersur-2'
            })
        }

        //浓缩池水面
        var itemArr = [{
                "pid": "tujian-09",
                "type": "circle",
                "center": [106.0731789863, 29.8694651007],
                "radius": 6,
                "height": 12.8,
                "color": [170, 85, 0, 140]
            },
            {
                "pid": "tujian-09",
                "type": "circle",
                "center": [106.0731795564, 29.8695822879],
                "radius": 6,
                "height": 12.8,
                "color": [170, 85, 0, 140]
            },
            {
                "pid": "tujian-09",
                "type": "circle",
                "center": [106.0732972354, 29.8695223089],
                "radius": 3.5,
                "height": 13,
                "color": [170, 85, 0, 140]
            },
        ]
        itemArr.map(function(item, index) {
            if (item.type == 'circle') {
                var center = item.center;
                var point = turf.point(center);
                var buffered = turf.buffer(point, item.radius, {
                    units: 'meters'
                });
                var points = [];
                buffered.geometry.coordinates[0].map(function(point) {
                    points.push(point[0])
                    points.push(point[1])
                    points.push(item.height)
                })
                var color = new Cesium.Color.fromBytes(item.color[0], item.color[1], item.color[2], item.color[3]);
                var waterPrimitive = new Cesium.Primitive({
                    show: true,
                    allowPicking: false,
                    geometryInstances: new Cesium.GeometryInstance({
                        geometry: new Cesium.PolygonGeometry({
                            polygonHierarchy: new Cesium.PolygonHierarchy(Cesium.Cartesian3.fromDegreesArrayHeights(points)),
                            perPositionHeight: true
                        })
                    }),
                    appearance: new Cesium.EllipsoidSurfaceAppearance({
                        material: new Cesium.Material({
                            fabric: {
                                type: 'Water',
                                uniforms: {
                                    baseWaterColor: color,
                                    normalMap: './Images/water.jpg',
                                    frequency: 200.0,
                                    animationSpeed: 0.02,
                                    amplitude: 20.0
                                }
                            }
                        })
                    })
                });
                oDefault.viewer.scene.primitives.add(waterPrimitive);
                oDefault.waterSurEntityArr.push({
                    pid: item.pid,
                    entity: waterPrimitive,
                    name: 'mud-watersur-3-' + index
                })
            }
        })

    },
    initMudSystem: function() {
        oDefault.currentSystem = 'Mud';
        oMud.createFlowLine();
        oMud.createTextLabels();
        oMud.createWaterSur();
        oMud.createFlyPanel();
        // oMud.createDataLabels();

    }

}