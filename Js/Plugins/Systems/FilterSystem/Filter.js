oFilter = {
    data: [],
    waterSurEntityTimerangeArr: [],
    equipList: [],
    equipOpenList: [],
    currentSystem: '1', //1滤池 2反冲洗
    filterSystem: {
        "name": "Filter",
        "cameraPosition": [106.0729491919085, 29.869662455555446, 103.36300332780507],
        "cameraHeadingPitchRoll": [203.63, -55, 360.00]
    },
    timeInputRange: false,
    systemCameraControler: null,
    orientationArr: [],
    cameraPositions: [{
            "cameraPosition": [106.0729491919085, 29.869662455555446, 103.36300332780507],
            "cameraHeadingPitchRoll": [203.63, -55, 360.00]
        },
        {
            "cameraPosition": [106.07222238891694, 29.86903886638482, 97.92210687438153],
            "cameraHeadingPitchRoll": [90, -63, 360.00]
        },
        {
            "cameraPosition": [106.0726450733634, 29.86949870157501, 97.27886347663686],
            "cameraHeadingPitchRoll": [180, -63, 360.00]
        }
    ],
    currentSight: {
        "cameraPosition": [106.0729491919085, 29.869662455555446, 103.36300332780507],
        "cameraHeadingPitchRoll": [203.63, -55, 360.00]
    },
    flyPositions1: [
        [106.0729491919085, 29.86966245555545, 103.36300332946894],
        [106.07290921091307, 29.869349437552867, 32.73735407641562],
        [106.07274147465169, 29.869267097117508, 25.682205872399646],
        [106.07274147465169, 29.869267097117508, 25.682205872399646],
        [106.07274147465169, 29.869167592125042, 24.309133673778767],
        [106.07274147465169, 29.869167592125042, 24.309133673778767],
        [106.07274147465169, 29.869067592125042, 24.309133673778767],
        [106.07274147465169, 29.869067592125042, 24.309133673778767],
        [106.07261094517794, 29.869067592125042, 25.42696816560827],
        [106.07261094517794, 29.869067592125042, 25.42696816560827],
        [106.07252580935871, 29.869067592125042, 25.520937427847578],
        [106.07252580935871, 29.869067592125042, 25.520937427847578],
        [106.07252580935871, 29.869201020183667, 25.614906689288173],
        [106.07252580935871, 29.869201020183667, 25.614906689288173],
        [106.07248347959471, 29.869242078945717, 25.495749963652273],
        [106.07248347959471, 29.869242078945717, 25.495749963652273]
    ],
    flyPositions2: [
        [106.07222238891694, 29.86903886638482, 97.92210687438153],
        [106.0724507747509, 29.86899618454739, 32.663895563411614],
        [106.0724507747509, 29.86899618454739, 32.663895563411614],
        [106.07251511225004, 29.869071639147194, 32.66389556287559],
        [106.07265249450754, 29.869071639147194, 21.10392128684539],
        [106.07265249450754, 29.869071639147194, 21.10392128684539],
        [106.07265249450754, 29.869071639147194, 30.10392128684539],
        [106.07265249450754, 29.86918376390496, 30.10392128684539], //
        [106.07265249450754, 29.86918376390496, 30.10392128684539],

        [106.07248999479758, 29.869249828963707, 35.17657230495195],
        [106.07248999479758, 29.869249828963707, 35.17657230495195],
        [106.07248999479758, 29.869163137483994, 35.17657230495195],
        [106.07248999479758, 29.869163137483994, 35.17657230495195],
        [106.07248999479758, 29.86907480064842, 35.17657230495195],
        [106.07258998445113, 29.86907480064842, 35.17657230495195],
        [106.07258998445113, 29.86907480064842, 35.17657230495195],
        [106.07263513319933, 29.869166994509154, 30.418540951049078],
        [106.07263513319933, 29.869166994509154, 30.418540951049078],
        [106.07263513319933, 29.86921629593853, 30.418540951049078],
        [106.07284177721873, 29.86921629593853, 30.418540951049078]
    ],
    flyPositions3: [
        [106.0726450733634, 29.86949870157501, 97.27886347663686],
        [106.07248999479758, 29.869249828963707, 35.17657230495195],
        [106.07248999479758, 29.869249828963707, 35.17657230495195],
        [106.07248999479758, 29.869163137483994, 35.17657230495195],
        [106.07248999479758, 29.869163137483994, 35.17657230495195],
        [106.07248999479758, 29.86907480064842, 35.17657230495195],
        [106.07258998445113, 29.86907480064842, 35.17657230495195],
        [106.07258998445113, 29.86907480064842, 35.17657230495195],
        [106.07258998445113, 29.869203137483994, 35.17657230495195],
        [106.07258998445113, 29.869203137483994, 35.17657230495195]
    ],
    audio: {
        play: function() {
            var audio = document.getElementById("audio_player");
            if (audio) {
                var rangeInput = document.getElementById("systemFlyTimeLine");
                var currentT = audio.duration * rangeInput.value / 100;
                if (!isNaN(currentT)) {
                    audio.currentTime = currentT;
                }
                audio.play()
            }
        },
        pause: function() {
            var audio = document.getElementById("audio_player");
            if (audio) {
                audio.pause()
            }
        }
    },
    dataLabelList: [{
            "title": "滤池1#液位计",
            "state": "手动",
            "bimID": "05020056-反冲洗泵房液位计1#",
            "type": "data",
            "data": [{
                "text": "液位",
                "value": function() {
                    var value = '--';
                    oFilter.data.map(function(item) {
                        if (item.opcid == 'yqlc1lcyw') {
                            value = parseFloat(item.opcvalue).toFixed(2);
                        }
                    })
                    return value;
                },
                "unit": "cm"
            }],
            "position": [106.0728670022, 29.8691250966, 14],
            "orientation": [180, -30, 5],
            "labelID": "Filter-label-1",
            "pid": "04",
            "system": "Filter"
        },
        {
            "title": "滤池2#液位计",
            "state": "手动",
            "bimID": "05020058-反冲洗泵房液位计2#",
            "type": "data",
            "data": [{
                "text": "液位",
                "value": function() {
                    var value = '--';
                    oFilter.data.map(function(item) {
                        if (item.opcid == 'yqlc2lcyw') {
                            value = parseFloat(item.opcvalue).toFixed(2);
                        }
                    })
                    return value;
                },
                "unit": "cm"
            }],
            "position": [106.0727776478, 29.8691250966, 14],
            "orientation": [180, -30, 5],
            "labelID": "Filter-label-2",
            "pid": "04",
            "system": "Filter"
        },
        {
            "title": "滤池3#液位计",
            "state": "手动",
            "type": "data",
            "bimID": "05020060-反冲洗泵房液位计3#",
            "data": [{
                "text": "液位",
                "value": function() {
                    var value = '--';
                    oFilter.data.map(function(item) {
                        if (item.opcid == 'yqlc3lcyw') {
                            value = parseFloat(item.opcvalue).toFixed(2);
                        }
                    })
                    return value;
                },
                "unit": "cm"
            }],
            "position": [106.0726859766, 29.8691250966, 14],
            "orientation": [180, -30, 5],
            "labelID": "Filter-label-3",
            "pid": "04",
            "system": "Filter"
        },
        {
            "title": "滤池4#液位计",
            "state": "手动",
            "bimID": "05020062-反冲洗泵房液位计4#",
            "type": "data",
            "data": [{
                "text": "液位",
                "value": function() {
                    var value = '--';
                    oFilter.data.map(function(item) {
                        if (item.opcid == 'yqlc4lcyw') {
                            value = parseFloat(item.opcvalue).toFixed(2);
                        }
                    })
                    return value;
                },
                "unit": "cm"
            }],
            "position": [106.0725977214, 29.8691250966, 14],
            "orientation": [180, -30, 5],
            "labelID": "Filter-label-4",
            "pid": "04",
            "system": "Filter"
        },
        {
            "title": "滤池8#液位计",
            "state": "手动",
            "bimID": "05020057-反冲洗泵房液位计8#",
            "type": "data",
            "data": [{
                "text": "液位",
                "value": function() {
                    var value = '--';
                    oFilter.data.map(function(item) {
                        if (item.opcid == 'eqlc4lcyw') {
                            value = parseFloat(item.opcvalue).toFixed(2);
                        }
                    })
                    return value;
                },
                "unit": "cm"
            }],
            "position": [106.0728670022, 29.8690208969, 14],
            "orientation": [0, -30, 5],
            "labelID": "Filter-label-5",
            "pid": "04",
            "system": "Filter"
        },
        {
            "title": "滤池7#液位计",
            "state": "手动",
            "bimID": "05020059-反冲洗泵房液位计7#",
            "type": "data",
            "data": [{
                "text": "液位",
                "value": function() {
                    var value = '--';
                    oFilter.data.map(function(item) {
                        if (item.opcid == 'eqlc3lcyw') {
                            value = parseFloat(item.opcvalue).toFixed(2);
                        }
                    })
                    return value;
                },
                "unit": "cm"
            }],
            "position": [106.0727776478, 29.8690208969, 14],
            "orientation": [0, -30, 5],
            "labelID": "Filter-label-6",
            "pid": "04",
            "system": "Filter"
        },
        {
            "title": "滤池6#液位计",
            "state": "手动",
            "type": "data",
            "bimID": "05020061-反冲洗泵房液位计6#",
            "data": [{
                "text": "液位",
                "value": function() {
                    var value = '--';
                    oFilter.data.map(function(item) {
                        if (item.opcid == 'eqlc2lcyw') {
                            value = parseFloat(item.opcvalue).toFixed(2);
                        }
                    })
                    return value;
                },
                "unit": "cm"
            }],
            "position": [106.0726859766, 29.8690208969, 14],
            "orientation": [0, -30, 5],
            "labelID": "Filter-label-7",
            "pid": "04",
            "system": "Filter"
        },
        {
            "title": "滤池5#液位计",
            "state": "手动",
            "bimID": "05020011-反冲洗泵房液位计5#",
            "type": "data",
            "data": [{
                "text": "液位",
                "value": function() {
                    var value = '--';
                    oFilter.data.map(function(item) {
                        if (item.opcid == 'eqlc1lcyw') {
                            value = parseFloat(item.opcvalue).toFixed(2);
                        }
                    })
                    return value;
                },
                "unit": "cm"
            }],
            "position": [106.0725977214, 29.8690208969, 14],
            "orientation": [0, -30, 5],
            "labelID": "Filter-label-8",
            "pid": "04",
            "system": "Filter"
        },
        {
            "title": "鼓风机1#",
            "state": "手动",
            "bimID": "05020002-1号反冲洗风机",
            "type": "data",
            "data": [{
                    "text": "流量",
                    "value": function() {
                        var value = '--';
                        oFilter.data.map(function(item) {
                            if (item.opcid == 'yqfjll') {
                                value = parseFloat(item.opcvalue).toFixed(2);
                            }
                        })
                        return value;
                    },
                    "unit": "Nm³/h"
                },
                {
                    "text": "频率",
                    "value": function() {
                        var value = '--';
                        oFilter.data.map(function(item) {
                            if (item.opcid == 'yqlc1gfjpl') {
                                value = parseFloat(item.opcvalue).toFixed(2);
                            }
                        })
                        return value;
                    },
                    "unit": "Hz"
                },
                {
                    "text": "电流",
                    "value": function() {
                        var value = '--';
                        oFilter.data.map(function(item) {
                            if (item.opcid == 'yqlc1gfjdl') {
                                value = parseFloat(item.opcvalue).toFixed(2);
                            }
                        })
                        return value;
                    },
                    "unit": "A"
                },
            ],
            "position": [106.0724939431, 29.8690073962, 14],
            "orientation": [0, -30, 5],
            "labelID": "Filter-label-9",
            "pid": "04",
            "system": "Filter"
        },
        {
            "title": "鼓风机2#",
            "state": "手动",
            "bimID": "05020010-2号反冲洗风机",
            "type": "data",
            "data": [{
                    "text": "流量",
                    "value": function() {
                        var value = '--';
                        oFilter.data.map(function(item) {
                            if (item.opcid == 'eqfjll') {
                                value = parseFloat(item.opcvalue).toFixed(2);
                            }
                        })
                        return value;
                    },
                    "unit": "Nm³/h"
                },
                {
                    "text": "频率",
                    "value": function() {
                        var value = '--';
                        oFilter.data.map(function(item) {
                            if (item.opcid == 'eqlc1gfjpl') {
                                value = parseFloat(item.opcvalue).toFixed(2);
                            }
                        })
                        return value;
                    },
                    "unit": "Hz"
                },
                {
                    "text": "电流",
                    "value": function() {
                        var value = '--';
                        oFilter.data.map(function(item) {
                            if (item.opcid == 'eqlc1gfjdl') {
                                value = parseFloat(item.opcvalue).toFixed(2);
                            }
                        })
                        return value;
                    },
                    "unit": "A"
                },
            ],
            "position": [106.0724939431, 29.8689816417, 14],
            "orientation": [0, -30, 5],
            "labelID": "Filter-label-10",
            "pid": "04",
            "system": "Filter"
        },
        {
            "title": "反冲洗水泵1#",
            "state": "手动",
            "bimID": "05020007-1号反冲洗水泵机组水泵（机组）",
            "type": "data",
            "data": [{
                    "text": "频率",
                    "value": function() {
                        var value = '--';
                        oFilter.data.map(function(item) {
                            if (item.opcid == 'yqlc1fcxsbpl') {
                                value = parseFloat(item.opcvalue).toFixed(2);
                            }
                        })
                        return value;
                    },
                    "unit": "Hz"
                },
                {
                    "text": "电流",
                    "value": function() {
                        var value = '--';
                        oFilter.data.map(function(item) {
                            if (item.opcid == 'yqlc1fcxsbdl') {
                                value = parseFloat(item.opcvalue).toFixed(2);
                            }
                        })
                        return value;
                    },
                    "unit": "A"
                },
            ],
            "position": [106.0724939431, 29.8691906068, 12.5],
            "orientation": [0, -30, 5],
            "labelID": "Filter-label-11",
            "pid": "04",
            "system": "Filter"
        },
        {
            "title": "反冲洗水泵2#",
            "state": "手动",
            "bimID": "05020018-2号反冲洗水泵机组水泵（机组）",
            "type": "data",
            "data": [{
                    "text": "频率",
                    "value": function() {
                        var value = '--';
                        oFilter.data.map(function(item) {
                            if (item.opcid == 'yqlc2fcxsbpl') {
                                value = parseFloat(item.opcvalue).toFixed(2);
                            }
                        })
                        return value;
                    },
                    "unit": "Hz"
                },
                {
                    "text": "电流",
                    "value": function() {
                        var value = '--';
                        oFilter.data.map(function(item) {
                            if (item.opcid == 'yqlc2fcxsbdl') {
                                value = parseFloat(item.opcvalue).toFixed(2);
                            }
                        })
                        return value;
                    },
                    "unit": "A"
                },
            ],
            "position": [106.0724939431, 29.8691604303, 12.5],
            "orientation": [0, -30, 5],
            "labelID": "Filter-label-12",
            "pid": "04",
            "system": "Filter"
        },
        {
            "title": "反冲洗水泵3#",
            "state": "手动",
            "bimID": "05020068-3号反冲洗水泵机组水泵（机组）",
            "type": "data",
            "data": [{
                    "text": "频率",
                    "value": function() {
                        var value = '--';
                        oFilter.data.map(function(item) {
                            if (item.opcid == 'yqlc3fcxsbpl') {
                                value = parseFloat(item.opcvalue).toFixed(2);
                            }
                        })
                        return value;
                    },
                    "unit": "Hz"
                },
                {
                    "text": "电流",
                    "value": function() {
                        var value = '--';
                        oFilter.data.map(function(item) {
                            if (item.opcid == 'yqlc3fcxsbdl') {
                                value = parseFloat(item.opcvalue).toFixed(2);
                            }
                        })
                        return value
                    },
                    "unit": "A"
                },
            ],
            "position": [106.0724939431, 29.8691300309, 12.5],
            "orientation": [0, -30, 5],
            "labelID": "Filter-label-13",
            "pid": "04",
            "system": "Filter"
        },
    ],
    textLabelList: [{
            "name": "待滤水进入管道",
            "id": "filter-01-01",
            "position": [106.0729318941, 29.8692966548, 12.5]
        },
        {
            "name": "去清水池管道",
            "id": "filter-01-02",
            "position": [106.0723545887, 29.8692827006, 12.5]
        },
        {
            "name": "鼓风机1#",
            "id": "filter-02-01",
            "position": [106.0725129262, 29.8690069511, 14.5]
        },
        {
            "name": "鼓风机2#",
            "id": "filter-02-02",
            "position": [106.0725129262, 29.8689844638, 14.5]
        },
        {
            "name": "鼓风机管道",
            "id": "filter-02-03",
            "position": [106.0725315112, 29.8690180329, 16]
        },
        {
            "name": "鼓风机管道",
            "id": "filter-02-04",
            "position": [106.0726929294, 29.8691017808, 15]
        },
        {
            "name": "气冲管道出口",
            "id": "filter-02-05",
            "position": [106.0726891188, 29.8691159224, 13.2]
        },
        {
            "name": "气冲管道阀门",
            "id": "filter-02-06",
            "position": [106.0726929294, 29.8691017808, 13.5]
        },
        {
            "name": "水质监测设备",
            "id": "filter-02-07",
            "position": [106.0724768028, 29.8692451751, 13.5]
        },
        {
            "name": "反冲洗水泵1#",
            "id": "filter-03-01",
            "position": [106.0725089262, 29.8691923476, 12.5]
        },
        {
            "name": "反冲洗水泵2#",
            "id": "filter-03-02",
            "position": [106.0725089262, 29.8691575100, 12.5]
        },
        {
            "name": "反冲洗水泵3#",
            "id": "filter-03-03",
            "position": [106.0725089262, 29.8691307463, 12.5]
        },
        {
            "name": "反冲洗管道",
            "id": "filter-03-04",
            "position": [106.0724984696, 29.8690655390, 12]
        },
        {
            "name": "水冲管道出口",
            "id": "filter-03-05",
            "position": [106.0726891188, 29.8691159224, 11.8]
        },

        {
            "name": "水冲管道阀门",
            "id": "filter-03-06",
            "position": [106.0726858299, 29.8690968380, 12.8]
        },
        {
            "name": "水冲管道阀门",
            "id": "filter-03-07",
            "position": [106.0726858299, 29.8690543254, 12.8]
        },
    ],
    createFlowLine: function() {
        function addFlow(type, points, deg, show, color) {
            if (type == 'polygon') {
                var positions = Cesium.Cartesian3.fromDegreesArray(points)
                var p3 = oDefault.viewer.entities.add({
                    show: show,
                    polygon: {
                        hierarchy: {
                            positions: positions
                        },
                        height: 12,
                        stRotation: Cesium.Math.toRadians(deg),
                        material: new Cesium.PolylineTrailLinkMaterialPropertyV(color, 1000)
                    }
                })
                oDefault.waterFlowArrowArr.push(p3);
            }
            if (type == 'wall') {
                var positions = Cesium.Cartesian3.fromDegreesArray(points)
                var p3 = oDefault.viewer.entities.add({
                    show: show,
                    polygon: {
                        hierarchy: {
                            positions: positions
                        },
                        height: 12,
                        stRotation: Cesium.Math.toRadians(deg),
                        material: new Cesium.PolylineTrailLinkMaterialPropertyV(color, 1000)
                    }
                })
                oDefault.waterFlowArrowArr.push(p3);
            }
        }
        if (!oDefault.viewer) {
            return
        }
        oDefault.waterFlowArrowArr = [];
        if (oFilter.currentSystem == '1') {
            //1
            var positions = Cesium.Cartesian3.fromDegreesArray([
                106.0729607834, 29.8693028208,
                106.0729607834, 29.8692764381,
                106.0729770980, 29.8692764381,
                106.0729770980, 29.8693028208
            ]);
            var p3 = oDefault.viewer.entities.add({
                // show: false,
                polygon: {
                    hierarchy: {
                        positions: positions
                    },
                    height: 9.5,
                    stRotation: Cesium.Math.toRadians(180),
                    material: new Cesium.PolylineTrailLinkMaterialPropertyV(Cesium.Color.WHITE, 1000)
                }
            })
            oDefault.waterFlowArrowArr.push(p3);

            //2
            var positions = Cesium.Cartesian3.fromDegreesArray([
                106.0729607834, 29.8691028208,
                106.0729636856, 29.8690764381,
                106.0729770980, 29.8690764381,
                106.0729783792, 29.8691028208
            ]);
            var p3 = oDefault.viewer.entities.add({
                // show: false,
                polygon: {
                    hierarchy: {
                        positions: positions
                    },
                    height: 9.5,
                    stRotation: Cesium.Math.toRadians(180),
                    material: new Cesium.PolylineTrailLinkMaterialPropertyV(Cesium.Color.WHITE, 1000)
                }
            })
            oDefault.waterFlowArrowArr.push(p3);

            //3
            var positions = Cesium.Cartesian3.fromDegreesArray([
                106.0728653537, 29.8692721604,
                106.0728401602, 29.8692721604,
                106.0728401602, 29.8692597660,
                106.0728653537, 29.8692597660
            ]);
            var p3 = oDefault.viewer.entities.add({
                // show: false,
                polygon: {
                    hierarchy: {
                        positions: positions
                    },
                    height: 9.5,
                    stRotation: Cesium.Math.toRadians(-90),
                    material: new Cesium.PolylineTrailLinkMaterialPropertyV(Cesium.Color.WHITE, 1000)
                }
            })
            oDefault.waterFlowArrowArr.push(p3);

            //4
            var positions = Cesium.Cartesian3.fromDegreesArrayHeights(
                [
                    106.0727574425, 29.8692554695, 14.5,
                    106.0727574425, 29.8692504948, 14.5,
                ]);
            var w1 = oDefault.viewer.entities.add({
                wall: {
                    positions: positions,
                    minimumHeights: [13.5, 13.5],
                    stRotation: Cesium.Math.toRadians(90),
                    material: new Cesium.PolylineTrailLinkMaterialPropertyV(Cesium.Color.WHITE, 1000)
                }
            })
            oDefault.waterFlowArrowArr.push(w1);

            //5
            var positions = Cesium.Cartesian3.fromDegreesArray([
                106.0726828649, 29.8692355537,
                106.0726828649, 29.8692228679,
                106.0726885565, 29.8692228679,
                106.0726885565, 29.8692355537,
            ])
            var p3 = oDefault.viewer.entities.add({
                // show: false,
                polygon: {
                    hierarchy: {
                        positions: positions
                    },
                    height: 14.5,
                    stRotation: Cesium.Math.toRadians(180),
                    material: new Cesium.PolylineTrailLinkMaterialPropertyV(Cesium.Color.WHITE, 1000)
                }
            })
            oDefault.waterFlowArrowArr.push(p3);


            //6
            var positions = Cesium.Cartesian3.fromDegreesArray([
                106.0726423187, 29.8692236178,
                106.0726423187, 29.8692120150,
                106.0726489506, 29.8692120150,
                106.0726489506, 29.8692236178
            ])
            var p3 = oDefault.viewer.entities.add({
                // show: false,
                polygon: {
                    hierarchy: {
                        positions: positions
                    },
                    height: 14.5,
                    stRotation: Cesium.Math.toRadians(180),
                    material: new Cesium.PolylineTrailLinkMaterialPropertyV(Cesium.Color.WHITE, 1000)
                }
            })
            oDefault.waterFlowArrowArr.push(p3);

            //7
            var positions = Cesium.Cartesian3.fromDegreesArray([
                106.0727243187, 29.8692236178,
                106.0727243187, 29.8692120150,
                106.0727309506, 29.8692120150,
                106.0727309506, 29.8692236178
            ])
            var p3 = oDefault.viewer.entities.add({
                // show: false,
                polygon: {
                    hierarchy: {
                        positions: positions
                    },
                    height: 14.5,
                    stRotation: Cesium.Math.toRadians(180),
                    material: new Cesium.PolylineTrailLinkMaterialPropertyV(Cesium.Color.WHITE, 1000)
                }
            })
            oDefault.waterFlowArrowArr.push(p3);

            //8
            // var positions = Cesium.Cartesian3.fromDegreesArray([
            // 	106.0726878211, 29.8691251295,
            // 	106.0726878211, 29.8691055567,
            // 	106.0726961589, 29.8691055567,
            // 	106.0726961589, 29.8691251295
            // ])
            // var p3 = oDefault.viewer.entities.add({
            // 	show: false,
            // 	polygon: {
            // 		hierarchy: {
            // 			positions: positions
            // 		},
            // 		height: 12.5,
            // 		stRotation: Cesium.Math.toRadians(180),
            // 		material: new Cesium.PolylineTrailLinkMaterialPropertyV(Cesium.Color.WHITE, 1000)
            // 	}
            // })
            // oDefault.waterFlowArrowArr.push(p3);

            // //9
            // var positions = Cesium.Cartesian3.fromDegreesArray([
            // 	106.0726807944, 29.8691008003,
            // 	106.0726744809, 29.8691008003,
            // 	106.0726744809, 29.8690973661,
            // 	106.0726807944, 29.8690973661
            // ])
            // var p3 = oDefault.viewer.entities.add({
            // 	show: false,
            // 	polygon: {
            // 		hierarchy: {
            // 			positions: positions
            // 		},
            // 		height: 11.2,
            // 		stRotation: Cesium.Math.toRadians(-90),
            // 		material: new Cesium.PolylineTrailLinkMaterialPropertyV(Cesium.Color.WHITE, 1000)
            // 	}
            // })
            // oDefault.waterFlowArrowArr.push(p3);

            // //10
            var positions = Cesium.Cartesian3.fromDegreesArrayHeights(
                [
                    106.0726657066, 29.8690956013, 11.5,
                    106.0726657066, 29.8690909200, 11.5,
                ]);
            var w1 = oDefault.viewer.entities.add({
                wall: {
                    positions: positions,
                    minimumHeights: [10.5, 10.5],
                    material: new Cesium.PolylineTrailLinkMaterialProperty(Cesium.Color.WHITE, 1000)
                }
            })
            oDefault.waterFlowArrowArr.push(w1);

            //11
            var positions = Cesium.Cartesian3.fromDegreesArray([
                106.0726586787, 29.8690844984,
                106.0726480064, 29.8690844984,
                106.0726480064, 29.8690801950,
                106.0726586787, 29.8690801950
            ])
            var p3 = oDefault.viewer.entities.add({
                // show: false,
                polygon: {
                    hierarchy: {
                        positions: positions
                    },
                    height: 10,
                    stRotation: Cesium.Math.toRadians(-90),
                    material: new Cesium.PolylineTrailLinkMaterialPropertyV(Cesium.Color.WHITE, 1000)
                }
            })
            oDefault.waterFlowArrowArr.push(p3);

            //12
            var positions = Cesium.Cartesian3.fromDegreesArray([
                106.0726186787, 29.8690844984,
                106.0726080064, 29.8690844984,
                106.0726080064, 29.8690801950,
                106.0726186787, 29.8690801950
            ])
            var p3 = oDefault.viewer.entities.add({
                // show: false,
                polygon: {
                    hierarchy: {
                        positions: positions
                    },
                    height: 10,
                    stRotation: Cesium.Math.toRadians(-90),
                    material: new Cesium.PolylineTrailLinkMaterialPropertyV(Cesium.Color.WHITE, 1000)
                }
            })
            oDefault.waterFlowArrowArr.push(p3);

            //13
            var positions = Cesium.Cartesian3.fromDegreesArray([
                106.0725786787, 29.8690844984,
                106.0725680064, 29.8690944984,
                106.0725680064, 29.8690901950,
                106.0725786787, 29.8690801950
            ])
            var p3 = oDefault.viewer.entities.add({
                // show: false,
                polygon: {
                    hierarchy: {
                        positions: positions
                    },
                    height: 10,
                    stRotation: Cesium.Math.toRadians(-45),
                    material: new Cesium.PolylineTrailLinkMaterialPropertyV(Cesium.Color.WHITE, 1000)
                }
            })
            oDefault.waterFlowArrowArr.push(p3);

            //14
            var positions = Cesium.Cartesian3.fromDegreesArray([
                106.0725611616, 29.8691004031,
                106.0725506596, 29.8691004031,
                106.0725506596, 29.8690953458,
                106.0725611616, 29.8690953458
            ])
            var p3 = oDefault.viewer.entities.add({
                // show: false,
                polygon: {
                    hierarchy: {
                        positions: positions
                    },
                    height: 10,
                    stRotation: Cesium.Math.toRadians(-90),
                    material: new Cesium.PolylineTrailLinkMaterialPropertyV(Cesium.Color.WHITE, 1000)
                }
            })
            oDefault.waterFlowArrowArr.push(p3);

            //15
            var positions = Cesium.Cartesian3.fromDegreesArray([
                106.0725411616, 29.8691004031,
                106.0725306596, 29.8691004031,
                106.0725306596, 29.8690953458,
                106.0725411616, 29.8690953458
            ])
            var p3 = oDefault.viewer.entities.add({
                // show: false,
                polygon: {
                    hierarchy: {
                        positions: positions
                    },
                    height: 10,
                    stRotation: Cesium.Math.toRadians(-90),
                    material: new Cesium.PolylineTrailLinkMaterialPropertyV(Cesium.Color.WHITE, 1000)
                }
            })
            oDefault.waterFlowArrowArr.push(p3);

            //16
            var positions = Cesium.Cartesian3.fromDegreesArray([
                106.0725303217, 29.8691399973,
                106.0725303217, 29.8691553588,
                106.0725257531, 29.8691553588,
                106.0725257531, 29.8691399973
            ])
            var p3 = oDefault.viewer.entities.add({
                // show: false,
                polygon: {
                    hierarchy: {
                        positions: positions
                    },
                    height: 10,
                    stRotation: Cesium.Math.toRadians(0),
                    material: new Cesium.PolylineTrailLinkMaterialPropertyV(Cesium.Color.WHITE, 1000)
                }
            })
            oDefault.waterFlowArrowArr.push(p3);

            //17
            var positions = Cesium.Cartesian3.fromDegreesArray([
                106.0725057756, 29.8692254973,
                106.0724929374, 29.8692254973,
                106.0724929374, 29.8692203868,
                106.0725057756, 29.8692203868
            ])
            var p3 = oDefault.viewer.entities.add({
                // show: false,
                polygon: {
                    hierarchy: {
                        positions: positions
                    },
                    height: 10,
                    stRotation: Cesium.Math.toRadians(-90),
                    material: new Cesium.PolylineTrailLinkMaterialPropertyV(Cesium.Color.WHITE, 1000)
                }
            })
            oDefault.waterFlowArrowArr.push(p3);

            //18
            var positions = Cesium.Cartesian3.fromDegreesArray([
                106.0724853664, 29.8692252588,
                106.0724853664, 29.8692380087,
                106.0724770003, 29.8692380087,
                106.0724770003, 29.8692252588
            ])
            var p3 = oDefault.viewer.entities.add({
                // show: false,
                polygon: {
                    hierarchy: {
                        positions: positions
                    },
                    height: 10,
                    stRotation: Cesium.Math.toRadians(0),
                    material: new Cesium.PolylineTrailLinkMaterialPropertyV(Cesium.Color.WHITE, 1000)
                }
            })
            oDefault.waterFlowArrowArr.push(p3);

            //19
            var positions = Cesium.Cartesian3.fromDegreesArray([
                106.0724327924, 29.8692809552,
                106.0724136763, 29.8692809552,
                106.0724136763, 29.8692726184,
                106.0724327924, 29.8692726184
            ])
            var p3 = oDefault.viewer.entities.add({
                // show: false,
                polygon: {
                    hierarchy: {
                        positions: positions
                    },
                    height: 10,
                    stRotation: Cesium.Math.toRadians(-90),
                    material: new Cesium.PolylineTrailLinkMaterialPropertyV(Cesium.Color.WHITE, 1000)
                }
            })
            oDefault.waterFlowArrowArr.push(p3);

            // //20
            var positions = Cesium.Cartesian3.fromDegreesArrayHeights(
                [
                    106.0726635565, 29.8691728290, 13.5,
                    106.0726635565, 29.8691756671, 13.5,
                ]);
            var w1 = oDefault.viewer.entities.add({
                wall: {
                    positions: positions,
                    minimumHeights: [12.5, 12.5],
                    material: new Cesium.PolylineTrailLinkMaterialProperty(Cesium.Color.CYAN, 1000)
                }
            })
            oDefault.waterFlowArrowArr.push(w1);

            // //21
            var positions = Cesium.Cartesian3.fromDegreesArrayHeights(
                [
                    106.0726635565, 29.8691528290, 13.5,
                    106.0726635565, 29.8691556671, 13.5,
                ]);
            var w1 = oDefault.viewer.entities.add({
                wall: {
                    positions: positions,
                    minimumHeights: [12.5, 12.5],
                    material: new Cesium.PolylineTrailLinkMaterialProperty(Cesium.Color.CYAN, 1000)
                }
            })
            oDefault.waterFlowArrowArr.push(w1);

            //22
            var positions = Cesium.Cartesian3.fromDegreesArray([
                106.0726782212, 29.86910124928,
                106.0726680189, 29.86910124928,
                106.0726680189, 29.86909807672,
                106.0726782212, 29.86909807672
            ])
            var p3 = oDefault.viewer.entities.add({
                // show: false,
                polygon: {
                    hierarchy: {
                        positions: positions
                    },
                    height: 11,
                    stRotation: Cesium.Math.toRadians(-90),
                    material: new Cesium.PolylineTrailLinkMaterialPropertyV(Cesium.Color.WHITE, 1000)
                }
            })
            oDefault.waterFlowArrowArr.push(p3);

            console.log(oDefault.waterFlowArrowArr)
        }
        if (oFilter.currentSystem == '2') {
            //1
            var positions = Cesium.Cartesian3.fromDegreesArray([
                106.0725208663, 29.8689732834,
                106.0725303758, 29.8689732834,
                106.0725303758, 29.8689780209,
                106.0725208663, 29.8689780209
            ])
            var p3 = oDefault.viewer.entities.add({
                // show: false,
                polygon: {
                    hierarchy: {
                        positions: positions
                    },
                    height: 12,
                    stRotation: Cesium.Math.toRadians(90),
                    material: new Cesium.PolylineTrailLinkMaterialPropertyV(Cesium.Color.WHITE, 1000)
                }
            })
            oDefault.waterFlowArrowArr.push(p3);

            //2
            var positions = Cesium.Cartesian3.fromDegreesArray([
                106.0725208663, 29.8690086289,
                106.0725303758, 29.8690086289,
                106.0725303758, 29.8690136786,
                106.0725208663, 29.8690136786
            ])
            var p3 = oDefault.viewer.entities.add({
                // show: false,
                polygon: {
                    hierarchy: {
                        positions: positions
                    },
                    height: 12,
                    stRotation: Cesium.Math.toRadians(90),
                    material: new Cesium.PolylineTrailLinkMaterialPropertyV(Cesium.Color.WHITE, 1000)
                }
            })
            oDefault.waterFlowArrowArr.push(p3);

            //3
            var positions = Cesium.Cartesian3.fromDegreesArray([
                106.0725280306, 29.8689880074,
                106.0725280306, 29.8690007967,
                106.0725228530, 29.8690007967,
                106.0725228530, 29.8689880074
            ])
            var p3 = oDefault.viewer.entities.add({
                // show: false,
                polygon: {
                    hierarchy: {
                        positions: positions
                    },
                    height: 14.5,
                    stRotation: Cesium.Math.toRadians(0),
                    material: new Cesium.PolylineTrailLinkMaterialPropertyV(Cesium.Color.WHITE, 1000)
                }
            })
            oDefault.waterFlowArrowArr.push(p3);

            //4
            var positions = Cesium.Cartesian3.fromDegreesArray([
                106.0725360318, 29.8690481614,
                106.0725454457, 29.8690481614,
                106.0725454457, 29.8690530632,
                106.0725360318, 29.8690530632
            ])
            var p3 = oDefault.viewer.entities.add({
                // show: false,
                polygon: {
                    hierarchy: {
                        positions: positions
                    },
                    height: 14.5,
                    stRotation: Cesium.Math.toRadians(90),
                    material: new Cesium.PolylineTrailLinkMaterialPropertyV(Cesium.Color.WHITE, 1000)
                }
            })
            oDefault.waterFlowArrowArr.push(p3);

            //5
            var positions = Cesium.Cartesian3.fromDegreesArray([
                106.0725552412, 29.8690703212,
                106.0725552412, 29.8690800552,
                106.0725502981, 29.8690800552,
                106.0725502981, 29.8690703212
            ])
            var p3 = oDefault.viewer.entities.add({
                // show: false,
                polygon: {
                    hierarchy: {
                        positions: positions
                    },
                    height: 14.5,
                    stRotation: Cesium.Math.toRadians(0),
                    material: new Cesium.PolylineTrailLinkMaterialPropertyV(Cesium.Color.WHITE, 1000)
                }
            })
            oDefault.waterFlowArrowArr.push(p3);

            //6
            var positions = Cesium.Cartesian3.fromDegreesArray([
                106.0726160318, 29.8690481614,
                106.0726254457, 29.8690481614,
                106.0726254457, 29.8690530632,
                106.0726160318, 29.8690530632
            ])
            var p3 = oDefault.viewer.entities.add({
                // show: false,
                polygon: {
                    hierarchy: {
                        positions: positions
                    },
                    height: 14.5,
                    stRotation: Cesium.Math.toRadians(90),
                    material: new Cesium.PolylineTrailLinkMaterialPropertyV(Cesium.Color.WHITE, 1000)
                }
            })
            oDefault.waterFlowArrowArr.push(p3);

            //7
            var positions = Cesium.Cartesian3.fromDegreesArray([
                106.0726160318, 29.8690951614,
                106.0726254457, 29.8690951614,
                106.0726254457, 29.8691000632,
                106.0726160318, 29.8691000632
            ])
            var p3 = oDefault.viewer.entities.add({
                // show: false,
                polygon: {
                    hierarchy: {
                        positions: positions
                    },
                    height: 14.5,
                    stRotation: Cesium.Math.toRadians(90),
                    material: new Cesium.PolylineTrailLinkMaterialPropertyV(Cesium.Color.WHITE, 1000)
                }
            })
            oDefault.waterFlowArrowArr.push(p3);

            //8
            var positions = Cesium.Cartesian3.fromDegreesArray([
                106.0726960318, 29.8690481614,
                106.0727054457, 29.8690481614,
                106.0727054457, 29.8690530632,
                106.0726960318, 29.8690530632
            ])
            var p3 = oDefault.viewer.entities.add({
                // show: false,
                polygon: {
                    hierarchy: {
                        positions: positions
                    },
                    height: 14.5,
                    stRotation: Cesium.Math.toRadians(90),
                    material: new Cesium.PolylineTrailLinkMaterialPropertyV(Cesium.Color.WHITE, 1000)
                }
            })
            oDefault.waterFlowArrowArr.push(p3);

            //9
            var positions = Cesium.Cartesian3.fromDegreesArray([
                106.0726960318, 29.8690951614,
                106.0727054457, 29.8690951614,
                106.0727054457, 29.8691000632,
                106.0726960318, 29.8691000632
            ])
            var p3 = oDefault.viewer.entities.add({
                // show: false,
                polygon: {
                    hierarchy: {
                        positions: positions
                    },
                    height: 14.5,
                    stRotation: Cesium.Math.toRadians(90),
                    material: new Cesium.PolylineTrailLinkMaterialPropertyV(Cesium.Color.WHITE, 1000)
                }
            })
            oDefault.waterFlowArrowArr.push(p3);

            //10
            var positions = Cesium.Cartesian3.fromDegreesArray([
                106.0727960318, 29.8690481614,
                106.0728054457, 29.8690481614,
                106.0728054457, 29.8690530632,
                106.0727960318, 29.8690530632
            ])
            var p3 = oDefault.viewer.entities.add({
                // show: false,
                polygon: {
                    hierarchy: {
                        positions: positions
                    },
                    height: 14.5,
                    stRotation: Cesium.Math.toRadians(90),
                    material: new Cesium.PolylineTrailLinkMaterialPropertyV(Cesium.Color.WHITE, 1000)
                }
            })
            oDefault.waterFlowArrowArr.push(p3);

            //11
            var positions = Cesium.Cartesian3.fromDegreesArray([
                106.0727960318, 29.8690951614,
                106.0728054457, 29.8690951614,
                106.0728054457, 29.8691000632,
                106.0727960318, 29.8691000632
            ])
            var p3 = oDefault.viewer.entities.add({
                // show: false,
                polygon: {
                    hierarchy: {
                        positions: positions
                    },
                    height: 14.5,
                    stRotation: Cesium.Math.toRadians(90),
                    material: new Cesium.PolylineTrailLinkMaterialPropertyV(Cesium.Color.WHITE, 1000)
                }
            })
            oDefault.waterFlowArrowArr.push(p3);

            //12
            var positions = Cesium.Cartesian3.fromDegreesArray([
                106.0725981311, 29.8691363667,
                106.0725981311, 29.8691464323,
                106.0725931586, 29.8691464323,
                106.0725931586, 29.8691363667
            ])
            var p3 = oDefault.viewer.entities.add({
                // show: false,
                polygon: {
                    hierarchy: {
                        positions: positions
                    },
                    height: 12,
                    stRotation: Cesium.Math.toRadians(0),
                    material: new Cesium.PolylineTrailLinkMaterialPropertyV(Cesium.Color.WHITE, 1000)
                }
            })
            oDefault.waterFlowArrowArr.push(p3);

            //13
            var positions = Cesium.Cartesian3.fromDegreesArray([
                106.0725981311, 29.8690063667,
                106.0725981311, 29.8690164323,
                106.0725931586, 29.8690164323,
                106.0725931586, 29.8690063667
            ])
            var p3 = oDefault.viewer.entities.add({
                // show: false,
                polygon: {
                    hierarchy: {
                        positions: positions
                    },
                    height: 12,
                    stRotation: Cesium.Math.toRadians(180),
                    material: new Cesium.PolylineTrailLinkMaterialPropertyV(Cesium.Color.WHITE, 1000)
                }
            })
            oDefault.waterFlowArrowArr.push(p3);

            //14
            var positions = Cesium.Cartesian3.fromDegreesArray([
                106.0726881311, 29.8691363667,
                106.0726881311, 29.8691464323,
                106.0726831586, 29.8691464323,
                106.0726831586, 29.8691363667
            ])
            var p3 = oDefault.viewer.entities.add({
                // show: false,
                polygon: {
                    hierarchy: {
                        positions: positions
                    },
                    height: 12,
                    stRotation: Cesium.Math.toRadians(0),
                    material: new Cesium.PolylineTrailLinkMaterialPropertyV(Cesium.Color.WHITE, 1000)
                }
            })
            oDefault.waterFlowArrowArr.push(p3);

            //15
            var positions = Cesium.Cartesian3.fromDegreesArray([
                106.0726891311, 29.8690063667,
                106.0726891311, 29.8690164323,
                106.0726841586, 29.8690164323,
                106.0726841586, 29.8690063667
            ])
            var p3 = oDefault.viewer.entities.add({
                // show: false,
                polygon: {
                    hierarchy: {
                        positions: positions
                    },
                    height: 12,
                    stRotation: Cesium.Math.toRadians(180),
                    material: new Cesium.PolylineTrailLinkMaterialPropertyV(Cesium.Color.WHITE, 1000)
                }
            })
            oDefault.waterFlowArrowArr.push(p3);


            //16
            var positions = Cesium.Cartesian3.fromDegreesArray([
                106.0727801311, 29.8691363667,
                106.0727801311, 29.8691464323,
                106.0727751586, 29.8691464323,
                106.0727751586, 29.8691363667
            ])
            var p3 = oDefault.viewer.entities.add({
                // show: false,
                polygon: {
                    hierarchy: {
                        positions: positions
                    },
                    height: 12,
                    stRotation: Cesium.Math.toRadians(0),
                    material: new Cesium.PolylineTrailLinkMaterialPropertyV(Cesium.Color.WHITE, 1000)
                }
            })
            oDefault.waterFlowArrowArr.push(p3);

            //17
            var positions = Cesium.Cartesian3.fromDegreesArray([
                106.0727801311, 29.8690063667,
                106.0727801311, 29.8690164323,
                106.0727751586, 29.8690164323,
                106.0727751586, 29.8690063667
            ])
            var p3 = oDefault.viewer.entities.add({
                // show: false,
                polygon: {
                    hierarchy: {
                        positions: positions
                    },
                    height: 12,
                    stRotation: Cesium.Math.toRadians(180),
                    material: new Cesium.PolylineTrailLinkMaterialPropertyV(Cesium.Color.WHITE, 1000)
                }
            })
            oDefault.waterFlowArrowArr.push(p3);

            //18
            var positions = Cesium.Cartesian3.fromDegreesArray([
                106.0728701311, 29.8691363667,
                106.0728701311, 29.8691464323,
                106.0728651586, 29.8691464323,
                106.0728651586, 29.8691363667
            ])
            var p3 = oDefault.viewer.entities.add({
                // show: false,
                polygon: {
                    hierarchy: {
                        positions: positions
                    },
                    height: 12,
                    stRotation: Cesium.Math.toRadians(0),
                    material: new Cesium.PolylineTrailLinkMaterialPropertyV(Cesium.Color.WHITE, 1000)
                }
            })
            oDefault.waterFlowArrowArr.push(p3);

            //19
            var positions = Cesium.Cartesian3.fromDegreesArray([
                106.0728701311, 29.8690063667,
                106.0728701311, 29.8690164323,
                106.0728651586, 29.8690164323,
                106.0728651586, 29.8690063667
            ])
            var p3 = oDefault.viewer.entities.add({
                // show: false,
                polygon: {
                    hierarchy: {
                        positions: positions
                    },
                    height: 12,
                    stRotation: Cesium.Math.toRadians(180),
                    material: new Cesium.PolylineTrailLinkMaterialPropertyV(Cesium.Color.WHITE, 1000)
                }
            })
            oDefault.waterFlowArrowArr.push(p3);

            //20
            var positions = Cesium.Cartesian3.fromDegreesArrayHeights(
                [
                    106.0726905289, 29.8691039483, 13,
                    106.0726954369, 29.8691039483, 13,
                ]);
            var w3 = oDefault.viewer.entities.add({
                wall: {
                    positions: positions,
                    minimumHeights: [12, 12],
                    stRotation: Cesium.Math.toRadians(90),
                    material: new Cesium.PolylineTrailLinkMaterialProperty(Cesium.Color.WHITE, 1000)
                }
            })
            oDefault.waterFlowArrowArr.push(w3);

            //21
            var positions = Cesium.Cartesian3.fromDegreesArray([
                106.0726833994, 29.8691040818,
                106.0726833994, 29.8691151503,
                106.0726786835, 29.8691151503,
                106.0726786835, 29.8691040818
            ])
            var p3 = oDefault.viewer.entities.add({
                // show: false,
                polygon: {
                    hierarchy: {
                        positions: positions
                    },
                    height: 12,
                    stRotation: Cesium.Math.toRadians(0),
                    material: new Cesium.PolylineTrailLinkMaterialPropertyV(Cesium.Color.WHITE, 1000)
                }
            })
            oDefault.waterFlowArrowArr.push(p3);

            //1
            var positions = Cesium.Cartesian3.fromDegreesArray([
                106.0725266911, 29.8691982017,
                106.0725165081, 29.8691982017,
                106.0725165081, 29.8691928212,
                106.0725266911, 29.8691928212
            ])
            var p3 = oDefault.viewer.entities.add({
                // show: false,
                polygon: {
                    hierarchy: {
                        positions: positions
                    },
                    height: 11.5,
                    stRotation: Cesium.Math.toRadians(-90),
                    material: new Cesium.PolylineTrailLinkMaterialPropertyV(Cesium.Color.CHARTREUSE, 1000)
                }
            })
            oDefault.waterFlowArrowArr.push(p3);
            //2
            var positions = Cesium.Cartesian3.fromDegreesArray([
                106.0725266911, 29.8691662017,
                106.0725165081, 29.8691662017,
                106.0725165081, 29.8691608212,
                106.0725266911, 29.8691608212
            ])
            var p3 = oDefault.viewer.entities.add({
                // show: false,
                polygon: {
                    hierarchy: {
                        positions: positions
                    },
                    height: 11.5,
                    stRotation: Cesium.Math.toRadians(-90),
                    material: new Cesium.PolylineTrailLinkMaterialPropertyV(Cesium.Color.CHARTREUSE, 1000)
                }
            })
            oDefault.waterFlowArrowArr.push(p3);
            //3
            var positions = Cesium.Cartesian3.fromDegreesArray([
                106.0725266911, 29.8691362017,
                106.0725165081, 29.8691362017,
                106.0725165081, 29.8691308212,
                106.0725266911, 29.8691308212
            ])
            var p3 = oDefault.viewer.entities.add({
                // show: false,
                polygon: {
                    hierarchy: {
                        positions: positions
                    },
                    height: 11.5,
                    stRotation: Cesium.Math.toRadians(-90),
                    material: new Cesium.PolylineTrailLinkMaterialPropertyV(Cesium.Color.CHARTREUSE, 1000)
                }
            })
            oDefault.waterFlowArrowArr.push(p3);
            //4
            var positions = Cesium.Cartesian3.fromDegreesArray([
                106.0724751808, 29.8691008144,
                106.0724751808, 29.8690920055,
                106.0724824901, 29.8690920055,
                106.0724824901, 29.8691008144
            ])
            var p3 = oDefault.viewer.entities.add({
                // show: false,
                polygon: {
                    hierarchy: {
                        positions: positions
                    },
                    height: 11.5,
                    stRotation: Cesium.Math.toRadians(180),
                    material: new Cesium.PolylineTrailLinkMaterialPropertyV(Cesium.Color.CHARTREUSE, 1000)
                }
            })
            oDefault.waterFlowArrowArr.push(p3);
            //5
            var positions = Cesium.Cartesian3.fromDegreesArray([
                106.0725193998, 29.8690636081,
                106.0725324671, 29.8690636081,
                106.0725324671, 29.8690686081,
                106.0725193998, 29.8690686081
            ])
            var p3 = oDefault.viewer.entities.add({
                // show: false,
                polygon: {
                    hierarchy: {
                        positions: positions
                    },
                    height: 11.5,
                    stRotation: Cesium.Math.toRadians(90),
                    material: new Cesium.PolylineTrailLinkMaterialPropertyV(Cesium.Color.CHARTREUSE, 1000)
                }
            })
            oDefault.waterFlowArrowArr.push(p3);
            //6
            var positions = Cesium.Cartesian3.fromDegreesArray([
                106.0726193998, 29.8690636081,
                106.0726324671, 29.8690636081,
                106.0726324671, 29.8690686081,
                106.0726193998, 29.8690686081
            ])
            var p3 = oDefault.viewer.entities.add({
                // show: false,
                polygon: {
                    hierarchy: {
                        positions: positions
                    },
                    height: 11.5,
                    stRotation: Cesium.Math.toRadians(90),
                    material: new Cesium.PolylineTrailLinkMaterialPropertyV(Cesium.Color.CHARTREUSE, 1000)
                }
            })
            oDefault.waterFlowArrowArr.push(p3);
            //7
            var positions = Cesium.Cartesian3.fromDegreesArray([
                106.0727193998, 29.8690636081,
                106.0727324671, 29.8690636081,
                106.0727324671, 29.8690686081,
                106.0727193998, 29.8690686081
            ])
            var p3 = oDefault.viewer.entities.add({
                // show: false,
                polygon: {
                    hierarchy: {
                        positions: positions
                    },
                    height: 11.5,
                    stRotation: Cesium.Math.toRadians(90),
                    material: new Cesium.PolylineTrailLinkMaterialPropertyV(Cesium.Color.CHARTREUSE, 1000)
                }
            })
            oDefault.waterFlowArrowArr.push(p3);
            //8
            var positions = Cesium.Cartesian3.fromDegreesArray([
                106.0728193998, 29.8690636081,
                106.0728324671, 29.8690636081,
                106.0728324671, 29.8690686081,
                106.0728193998, 29.8690686081
            ])
            var p3 = oDefault.viewer.entities.add({
                // show: false,
                polygon: {
                    hierarchy: {
                        positions: positions
                    },
                    height: 11.5,
                    stRotation: Cesium.Math.toRadians(90),
                    material: new Cesium.PolylineTrailLinkMaterialPropertyV(Cesium.Color.CHARTREUSE, 1000)
                }
            })
            oDefault.waterFlowArrowArr.push(p3);

            //9
            var positions = Cesium.Cartesian3.fromDegreesArray([
                106.0726064727, 29.8690855421,
                106.0726064727, 29.8690954827,
                106.0726006104, 29.8690954827,
                106.0726006104, 29.8690855421
            ])
            var p3 = oDefault.viewer.entities.add({
                // show: false,
                polygon: {
                    hierarchy: {
                        positions: positions
                    },
                    height: 11.5,
                    stRotation: Cesium.Math.toRadians(0),
                    material: new Cesium.PolylineTrailLinkMaterialPropertyV(Cesium.Color.CHARTREUSE, 1000)
                }
            })
            oDefault.waterFlowArrowArr.push(p3);

            //10
            var positions = Cesium.Cartesian3.fromDegreesArray([
                106.0726064727, 29.8690525421,
                106.0726064727, 29.8690624827,
                106.0726006104, 29.8690624827,
                106.0726006104, 29.8690525421
            ])
            var p3 = oDefault.viewer.entities.add({
                // show: false,
                polygon: {
                    hierarchy: {
                        positions: positions
                    },
                    height: 11.5,
                    stRotation: Cesium.Math.toRadians(180),
                    material: new Cesium.PolylineTrailLinkMaterialPropertyV(Cesium.Color.CHARTREUSE, 1000)
                }
            })
            oDefault.waterFlowArrowArr.push(p3);
            //11
            var positions = Cesium.Cartesian3.fromDegreesArray([
                106.0726964727, 29.8690855421,
                106.0726964727, 29.8690954827,
                106.0726906104, 29.8690954827,
                106.0726906104, 29.8690855421
            ])
            var p3 = oDefault.viewer.entities.add({
                // show: false,
                polygon: {
                    hierarchy: {
                        positions: positions
                    },
                    height: 11.5,
                    stRotation: Cesium.Math.toRadians(0),
                    material: new Cesium.PolylineTrailLinkMaterialPropertyV(Cesium.Color.CHARTREUSE, 1000)
                }
            })
            oDefault.waterFlowArrowArr.push(p3);

            //12
            var positions = Cesium.Cartesian3.fromDegreesArray([
                106.0726964727, 29.8690525421,
                106.0726964727, 29.8690624827,
                106.0726906104, 29.8690624827,
                106.0726906104, 29.8690525421
            ])
            var p3 = oDefault.viewer.entities.add({
                // show: false,
                polygon: {
                    hierarchy: {
                        positions: positions
                    },
                    height: 11.5,
                    stRotation: Cesium.Math.toRadians(180),
                    material: new Cesium.PolylineTrailLinkMaterialPropertyV(Cesium.Color.CHARTREUSE, 1000)
                }
            })
            oDefault.waterFlowArrowArr.push(p3);
            //13
            var positions = Cesium.Cartesian3.fromDegreesArray([
                106.0727864727, 29.8690855421,
                106.0727864727, 29.8690954827,
                106.0727806104, 29.8690954827,
                106.0727806104, 29.8690855421
            ])
            var p3 = oDefault.viewer.entities.add({
                // show: false,
                polygon: {
                    hierarchy: {
                        positions: positions
                    },
                    height: 11.5,
                    stRotation: Cesium.Math.toRadians(0),
                    material: new Cesium.PolylineTrailLinkMaterialPropertyV(Cesium.Color.CHARTREUSE, 1000)
                }
            })
            oDefault.waterFlowArrowArr.push(p3);

            //14
            var positions = Cesium.Cartesian3.fromDegreesArray([
                106.0727864727, 29.8690525421,
                106.0727864727, 29.8690624827,
                106.0727806104, 29.8690624827,
                106.0727806104, 29.8690525421
            ])
            var p3 = oDefault.viewer.entities.add({
                // show: false,
                polygon: {
                    hierarchy: {
                        positions: positions
                    },
                    height: 11.5,
                    stRotation: Cesium.Math.toRadians(180),
                    material: new Cesium.PolylineTrailLinkMaterialPropertyV(Cesium.Color.CHARTREUSE, 1000)
                }
            })
            oDefault.waterFlowArrowArr.push(p3);
            //15
            var positions = Cesium.Cartesian3.fromDegreesArray([
                106.0728764727, 29.8690855421,
                106.0728764727, 29.8690954827,
                106.0728706104, 29.8690954827,
                106.0728706104, 29.8690855421
            ])
            var p3 = oDefault.viewer.entities.add({
                // show: false,
                polygon: {
                    hierarchy: {
                        positions: positions
                    },
                    height: 11.5,
                    stRotation: Cesium.Math.toRadians(0),
                    material: new Cesium.PolylineTrailLinkMaterialPropertyV(Cesium.Color.CHARTREUSE, 1000)
                }
            })
            oDefault.waterFlowArrowArr.push(p3);

            //16
            var positions = Cesium.Cartesian3.fromDegreesArray([
                106.0728764727, 29.8690525421,
                106.0728764727, 29.8690624827,
                106.0728706104, 29.8690624827,
                106.0728706104, 29.8690525421
            ])
            var p3 = oDefault.viewer.entities.add({
                // show: false,
                polygon: {
                    hierarchy: {
                        positions: positions
                    },
                    height: 11.5,
                    stRotation: Cesium.Math.toRadians(180),
                    material: new Cesium.PolylineTrailLinkMaterialPropertyV(Cesium.Color.CHARTREUSE, 1000)
                }
            })
            oDefault.waterFlowArrowArr.push(p3);

            //17
            var positions = Cesium.Cartesian3.fromDegreesArray([
                106.0726064727, 29.8691255421,
                106.0726064727, 29.8691354827,
                106.0726006104, 29.8691354827,
                106.0726006104, 29.8691255421
            ])
            var p3 = oDefault.viewer.entities.add({
                // show: false,
                polygon: {
                    hierarchy: {
                        positions: positions
                    },
                    height: 11.5,
                    stRotation: Cesium.Math.toRadians(0),
                    material: new Cesium.PolylineTrailLinkMaterialPropertyV(Cesium.Color.CHARTREUSE, 1000)
                }
            })
            oDefault.waterFlowArrowArr.push(p3);

            //18
            var positions = Cesium.Cartesian3.fromDegreesArray([
                106.0726064727, 29.8690125421,
                106.0726064727, 29.8690224827,
                106.0726006104, 29.8690224827,
                106.0726006104, 29.8690125421
            ])
            var p3 = oDefault.viewer.entities.add({
                // show: false,
                polygon: {
                    hierarchy: {
                        positions: positions
                    },
                    height: 11.5,
                    stRotation: Cesium.Math.toRadians(180),
                    material: new Cesium.PolylineTrailLinkMaterialPropertyV(Cesium.Color.CHARTREUSE, 1000)
                }
            })
            oDefault.waterFlowArrowArr.push(p3);

            //19
            var positions = Cesium.Cartesian3.fromDegreesArray([
                106.0726964727, 29.8691255421,
                106.0726964727, 29.8691354827,
                106.0726906104, 29.8691354827,
                106.0726906104, 29.8691255421
            ])
            var p3 = oDefault.viewer.entities.add({
                // show: false,
                polygon: {
                    hierarchy: {
                        positions: positions
                    },
                    height: 11.5,
                    stRotation: Cesium.Math.toRadians(0),
                    material: new Cesium.PolylineTrailLinkMaterialPropertyV(Cesium.Color.CHARTREUSE, 1000)
                }
            })
            oDefault.waterFlowArrowArr.push(p3);

            //20
            var positions = Cesium.Cartesian3.fromDegreesArray([
                106.0726964727, 29.8690125421,
                106.0726964727, 29.8690224827,
                106.0726906104, 29.8690224827,
                106.0726906104, 29.8690125421
            ])
            var p3 = oDefault.viewer.entities.add({
                // show: false,
                polygon: {
                    hierarchy: {
                        positions: positions
                    },
                    height: 11.5,
                    stRotation: Cesium.Math.toRadians(180),
                    material: new Cesium.PolylineTrailLinkMaterialPropertyV(Cesium.Color.CHARTREUSE, 1000)
                }
            })
            oDefault.waterFlowArrowArr.push(p3);
            //21
            var positions = Cesium.Cartesian3.fromDegreesArray([
                106.0727864727, 29.8691255421,
                106.0727864727, 29.8691354827,
                106.0727806104, 29.8691354827,
                106.0727806104, 29.8691255421
            ])
            var p3 = oDefault.viewer.entities.add({
                // show: false,
                polygon: {
                    hierarchy: {
                        positions: positions
                    },
                    height: 11.5,
                    stRotation: Cesium.Math.toRadians(0),
                    material: new Cesium.PolylineTrailLinkMaterialPropertyV(Cesium.Color.CHARTREUSE, 1000)
                }
            })
            oDefault.waterFlowArrowArr.push(p3);

            //22
            var positions = Cesium.Cartesian3.fromDegreesArray([
                106.0727864727, 29.8690125421,
                106.0727864727, 29.8690224827,
                106.0727806104, 29.8690224827,
                106.0727806104, 29.8690125421
            ])
            var p3 = oDefault.viewer.entities.add({
                // show: false,
                polygon: {
                    hierarchy: {
                        positions: positions
                    },
                    height: 11.5,
                    stRotation: Cesium.Math.toRadians(180),
                    material: new Cesium.PolylineTrailLinkMaterialPropertyV(Cesium.Color.CHARTREUSE, 1000)
                }
            })
            oDefault.waterFlowArrowArr.push(p3);
            //23
            var positions = Cesium.Cartesian3.fromDegreesArray([
                106.0728764727, 29.8691255421,
                106.0728764727, 29.8691354827,
                106.0728706104, 29.8691354827,
                106.0728706104, 29.8691255421
            ])
            var p3 = oDefault.viewer.entities.add({
                // show: false,
                polygon: {
                    hierarchy: {
                        positions: positions
                    },
                    height: 11.5,
                    stRotation: Cesium.Math.toRadians(0),
                    material: new Cesium.PolylineTrailLinkMaterialPropertyV(Cesium.Color.CHARTREUSE, 1000)
                }
            })
            oDefault.waterFlowArrowArr.push(p3);

            //24
            var positions = Cesium.Cartesian3.fromDegreesArray([
                106.0728764727, 29.8690125421,
                106.0728764727, 29.8690224827,
                106.0728706104, 29.8690224827,
                106.0728706104, 29.8690125421
            ])
            var p3 = oDefault.viewer.entities.add({
                // show: false,
                polygon: {
                    hierarchy: {
                        positions: positions
                    },
                    height: 11.5,
                    stRotation: Cesium.Math.toRadians(180),
                    material: new Cesium.PolylineTrailLinkMaterialPropertyV(Cesium.Color.CHARTREUSE, 1000)
                }
            })
            oDefault.waterFlowArrowArr.push(p3);

            //25
            var positions = Cesium.Cartesian3.fromDegreesArray([
                106.0726886968, 29.8692044879,
                106.0726886968, 29.8692171833,
                106.0726842974, 29.8692171833,
                106.0726842974, 29.8692044879
            ])
            var p3 = oDefault.viewer.entities.add({
                // show: false,
                polygon: {
                    hierarchy: {
                        positions: positions
                    },
                    height: 12,
                    stRotation: Cesium.Math.toRadians(0),
                    material: new Cesium.PolylineTrailLinkMaterialPropertyV(Cesium.Color.CHARTREUSE, 1000)
                }
            })
            oDefault.waterFlowArrowArr.push(p3);

            //26
            var positions = Cesium.Cartesian3.fromDegreesArray([
                106.0727170246, 29.8692219052,
                106.0727273804, 29.8692219052,
                106.0727273804, 29.8692249358,
                106.0727170246, 29.8692249358
            ])
            var p3 = oDefault.viewer.entities.add({
                // show: false,
                polygon: {
                    hierarchy: {
                        positions: positions
                    },
                    height: 11,
                    stRotation: Cesium.Math.toRadians(90),
                    material: new Cesium.PolylineTrailLinkMaterialPropertyV(Cesium.Color.CHARTREUSE, 1000)
                }
            })
            oDefault.waterFlowArrowArr.push(p3);

            //26
            var positions = Cesium.Cartesian3.fromDegreesArray([
                106.0728570246, 29.8692219052,
                106.0728673804, 29.8692219052,
                106.0728673804, 29.8692249358,
                106.0728570246, 29.8692249358
            ])
            var p3 = oDefault.viewer.entities.add({
                // show: false,
                polygon: {
                    hierarchy: {
                        positions: positions
                    },
                    height: 11,
                    stRotation: Cesium.Math.toRadians(90),
                    material: new Cesium.PolylineTrailLinkMaterialPropertyV(Cesium.Color.CHARTREUSE, 1000)
                }
            })
            oDefault.waterFlowArrowArr.push(p3);

            console.log(oDefault.waterFlowArrowArr);

        }
        if (oFilter.currentSystem == '3') {

        }
    },
    createTextLabels: function() {
        if (!oDefault.viewer) {
            return
        }
        var viewer = oDefault.viewer;
        var data = oFilter.textLabelList;
        data.forEach(function(item) {
            var trackPop = undefined;
            var label = document.createElement('div');
            oDefault.textLabelSigns.push(label)
            label.setAttribute('id', item.id);
            label.setAttribute('class', 'label-info');
            // label.style.display='block';
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
            var winpos = viewer.scene.cartesianToCanvasCoordinates(cartesian3);
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
        if (oFilter.currentSystem == '1') {
            $('#filter-01-01').css('display', 'block');
            $('#filter-01-02').css('display', 'block');
        }
        if (oFilter.currentSystem == '2') {
            $('#filter-02-01').css('display', 'block');
            $('#filter-02-02').css('display', 'block');
            $('#filter-03-01').css('display', 'block');
            $('#filter-03-02').css('display', 'block');
            $('#filter-03-03').css('display', 'block');
        }
    },
    createDataLabels: function() {
        var viewer = oDefault.viewer;
        if (viewer) {
            var labelData = oFilter.dataLabelList;
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
        oFilter.loadData();
        oFilter.startDataRoll();
    },
    loadData: function() {
        var viewer = oDefault.viewer;
        oFilter.data = oDefault.realTimeData;
        var labelData = oFilter.dataLabelList;
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
        oFilter.setEquipState();
    },
    setEquipState: function() {
        oFilter.equipList = ["05020117-5号反冲洗水泵机组气动碟阀", "05020118-5号反冲洗泵出水止回阀", "05020116-5号反冲洗水泵机组手动蝶阀",
            "05020115-4号反冲洗水泵机组手动蝶阀",
            '05020114-4号反冲洗泵出水止回阀', '05020113-4号反冲洗水泵机组气动碟阀', '05020121-6号反冲洗泵出水止回阀', '05020120-6号反冲洗水泵机组气动碟阀',
            '05020119-6号反冲洗水泵机组手动蝶阀', '05020105-3号反冲洗泵出水止回阀', '05020103-3号反冲洗水泵机组手动蝶阀', '05020104-3号反冲洗水泵机组气动碟阀',
            '05020100-2号反冲洗水泵机组手动蝶阀', '05020102-2号反冲洗泵出水止回阀', '05020101-2号反冲洗水泵机组气动碟阀', '05020125-8号反冲洗水泵机组手动蝶阀',
            '05020126-8号反冲洗水泵机组气动碟阀', '05020127-8号反冲洗泵出水止回阀', '05020123-7号反冲洗水泵机组气动碟阀', '05020122-7号反冲洗水泵机组手动蝶阀',
            '05020124-7号反冲洗泵出水止回阀', '05020098-1号反冲洗水泵机组手动蝶阀', '05020099-1号反冲洗泵出水止回阀', '05020097-1号反冲洗水泵机组气动碟阀'
        ]
    },
    createFlyPanel: function() {
        oDefault.flyData.isStarted = false;
        oDefault.flyData.isPaused = false;
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
            oFilter.startDataRoll();
        }
        controlDiv2.onclick = function() {
                controlDiv2.className = 'data-roll-control-div active';
                controlDiv1.className = 'data-roll-control-div';
                oFilter.stopDataRoll();
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
            oFilter.audio.pause();
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
                    oFilter.removeCameraEvents();
                    oFilter.startFly();
                    oFilter.audio.play();
                } else {

                    oFilter.removeCameraEvents();
                    oFilter.restartFly();
                    oFilter.audio.play();
                }
            } else {
                btnPlay.className = 'system-fly-btn system-play';
                oFilter.pauseFly();
                oFilter.restoreCameraEvents();
                oFilter.audio.pause();
            }
        }

        var btnForward = document.createElement('div');
        systemFlyPanelBtnGroup.appendChild(btnForward);
        btnForward.setAttribute('id', 'btnForward');
        btnForward.className = 'system-fly-btn system-forward';
        btnForward.onclick = function() {
            oFilter.audio.pause();
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
            oFilter.dataLabelList.map(function(item) {
                $('#' + item.labelID).css('display', 'none')
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
        if (oFilter.currentSystem == '1') {
            audio.src = "./Audios/lvchiguolv.mp3";
        }
        if (oFilter.currentSystem == '2') {
            audio.src = "./Audios/lvchifanchongxi.mp3";
        }
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
            // 
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
    showFilterSystem: function() {
        if (!oDefault.configData) {
            return
        }
        //禁用工具栏
        $('#i-n-menuimg').css('pointer-events', 'none')
        $('#i-n-layers').css('pointer-events', 'none')
            //
        oDefault.currentSystem = 'Filter';
        oDefault.layerList.forEach(function(layer) {
                layer.layer.show = false;
            })
            //视角
        var initialPosition = Cesium.Cartesian3.fromDegrees(oFilter.currentSight.cameraPosition[0],
            oFilter.currentSight.cameraPosition[1], oFilter.currentSight.cameraPosition[2]);
        var initialOrientation = new Cesium.HeadingPitchRoll.fromDegrees(oFilter.currentSight.cameraHeadingPitchRoll[
            0], oFilter.currentSight.cameraHeadingPitchRoll[1], oFilter.currentSight.cameraHeadingPitchRoll[2]);
        oDefault.viewer.scene.camera.setView({
            destination: initialPosition,
            orientation: initialOrientation,
            endTransform: Cesium.Matrix4.IDENTITY
        });
        oDefault.tilesetList.forEach(function(tileset) {
            if (tileset.type == 'tujian') {
                if (tileset.id == 'tujian-05') {
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
                if (tileset.id == 'jidian-05') {
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
            var showList = ['13020009-滤池系统到清水池管道', '13020009-滤池系统到清水池管道1#', '13020047-沉淀池与滤池间管网', '13020038-反冲洗泵房进水管',
                '13020049-1号一期二期滤池隔断阀'
            ];
            var hideList = ['05010059-反冲洗泵房梁', '05010001-反冲洗泵房顶部', '05010019-反冲洗泵房顶棚1#', '05010023-反冲洗泵房顶棚2#',
                '05010040-反冲刺泵房钢支撑2#', '05010051-反冲洗泵房表面层2#', '05010041-反冲洗泵房穿孔板2#', '05010035-反冲洗泵房水面3#',
                '05010018-反冲刺泵房钢支撑1#', '05020020-进水分配井进水池水面2#', '05010037-反冲洗泵房水面1#', '05010036-反冲洗泵房水面2#',
                '05010058-反冲洗泵房输水池盖', '05010021-反冲洗泵房暗槽水面', '05010062-反冲洗泵房暗槽水面', '05010002-反冲洗泵房滤后池玻璃2#',
                '05010045-反冲洗泵房滤后水面2#', '05010038-反冲洗泵房水面5#', '05010039-反冲洗泵房水面6#', '05010033-反冲洗泵房水面7#', '05010009-反冲洗泵房水面8#',
                '05010034-反冲洗泵房水面4#', '05010061-反冲洗泵房输出水面'
            ];
            var alphaList = ['05010060-反冲洗泵房中厅穿孔板', '05010057-反冲洗泵房暗槽', '05010011-反冲洗泵房底板', ]
            if (oFilter.currentSystem == '2') {
                hideList.push('05010048-反冲洗泵房进水池1#')
            }
            var content = tile.content;
            var featuresLength = content.featuresLength;
            var url = tile.tileset.url;
            if (url.indexOf('tujian/05') >= 0) {
                for (var i = 0; i < featuresLength; i += 1) {
                    var feature = content.getFeature(i);
                    var name = feature.getProperty('name');
                    if (hideList.indexOf(name) >= 0) {
                        feature.show = false;
                    } else {
                        feature.show = true;
                    }
                    if (alphaList.indexOf(name) >= 0) {
                        feature.color = Cesium.Color.WHITE.withAlpha(0.2);
                    } else {
                        feature.color = Cesium.Color.WHITE
                    }
                }
            }
            if (url.indexOf('jidian/05') >= 0) {
                for (var i = 0; i < featuresLength; i += 1) {
                    var feature = content.getFeature(i);
                    var name = feature.getProperty('name');
                    if (hideList.indexOf(name) >= 0) {
                        feature.show = false;
                    } else {
                        feature.show = true;
                    }
                    if (alphaList.indexOf(name) >= 0) {
                        feature.color = Cesium.Color.WHITE.withAlpha(0.2);
                    } else {
                        feature.color = Cesium.Color.WHITE
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
        oFilter.initFilterSystem();
    },
    pauseFly: function() {

        //暂停时间
        oFilter.restoreCameraEvents();
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
        oFilter.startFly();
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
        oFilter.startDataRoll();
        //显示水流箭头
        oDefault.waterFlowArrowArr.map(function(item) {
                item.show = true;
            })
            //恢复模型位置
        oDefault.tilesetList.map(function(item) {
                if (item.id == 'jidian-05') {
                    item.tilesetList.map(function(tile) {
                        tile.tileset.modelMatrix = tile.matrix;
                    })
                }
            })
            //飞行结束 恢复事件 清除数据及面板
        oFilter.restoreCameraEvents();
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
        oFilter.createFlyPanel();
        oDefault.flyData.pauseData.currentTime = null;
        oDefault.flyData.pauseData.cameraOrientation = [];
        oDefault.flyData.pauseData.cameraPosition = [];
        //设置角度
        var initialPosition = Cesium.Cartesian3.fromDegrees(oFilter.currentSight.cameraPosition[0],
            oFilter.currentSight.cameraPosition[1], oFilter.currentSight.cameraPosition[2]);
        var initialOrientation = new Cesium.HeadingPitchRoll.fromDegrees(oFilter.currentSight.cameraHeadingPitchRoll[
            0], oFilter.currentSight.cameraHeadingPitchRoll[1], oFilter.currentSight.cameraHeadingPitchRoll[2]);
        oDefault.viewer.scene.camera.setView({
            destination: initialPosition,
            orientation: initialOrientation,
            endTransform: Cesium.Matrix4.IDENTITY
        });
        oFilter.audio.pause();
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
        oFilter.stopDataRoll();
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
        oFilter.createWaterSur();
        if (oFilter.currentSystem == '1') {
            oDefault.waterSurEntityArr.map(function(item) {
                item.entity.show = false;
            })
        }
        if (oFilter.currentSystem == '2') {
            oDefault.waterSurEntityArr.map(function(item) {
                if (item.name == 'filter-watersur-3-1') {
                    item.entity.show = false;
                }
            })
        }
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
        if (oFilter.currentSystem == '1') {
            if (oFilter.flyPositions1.length > 0) {
                for (var i = 0; i < oFilter.flyPositions1.length; i++) {
                    var x = oFilter.flyPositions1[i][0];
                    var y = oFilter.flyPositions1[i][1];
                    var z = oFilter.flyPositions1[i][2];
                    position.push({
                        x: x,
                        y: y,
                        z: z
                    });
                }
            } else {
                return;
            }
        }
        if (oFilter.currentSystem == '2') {
            if (oFilter.flyPositions2.length > 0) {
                for (var i = 0; i < oFilter.flyPositions2.length; i++) {
                    var x = oFilter.flyPositions2[i][0];
                    var y = oFilter.flyPositions2[i][1];
                    var z = oFilter.flyPositions2[i][2];
                    position.push({
                        x: x,
                        y: y,
                        z: z
                    });
                }
            } else {
                return;
            }
        }
        if (oFilter.currentSystem == '3') {
            if (oFilter.flyPositions3.length > 0) {
                for (var i = 0; i < oFilter.flyPositions3.length; i++) {
                    var x = oFilter.flyPositions3[i][0];
                    var y = oFilter.flyPositions3[i][1];
                    var z = oFilter.flyPositions3[i][2];
                    position.push({
                        x: x,
                        y: y,
                        z: z
                    });
                }
            } else {
                return;
            }
        }

        //寻找要素（卷闸门等）方法
        function targetFeatureList(data, targetname) {
            var featureList = [];

            function findFeatures(target) {
                if (target.content) {
                    if (target.content.featuresLength > 0 && target.content._features) {
                        target.content._features.forEach(feature => {
                            if (feature.getProperty('name').indexOf(targetname) >= 0) {
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
                if (oFilter.currentSystem == '1') {
                    if (i == 0) {
                        var time = Cesium.JulianDate.addSeconds(start, i, new Cesium.JulianDate());
                        var _position = Cesium.Cartesian3.fromDegrees(position[i].x, position[i].y, position[i].z);
                        property.addSample(time, _position);
                    }
                    if (i == 1) {
                        addStep('distance', 60, 0.15);
                    }
                    if (i == 2) {
                        addStep('distance', 60, 0.15);
                    }
                    if (i == 3) {
                        addStep('seconds', 3, 0.15);
                    }
                    if (i == 4) {
                        addStep('distance', 20, 0.15);
                    }
                    if (i == 5) {
                        addStep('seconds', 5, 0.15);
                    }
                    if (i == 6) {
                        addStep('distance', 20, 0.15);
                    }
                    if (i == 7) {
                        addStep('seconds', 5, 0.15);
                    }
                    if (i == 8) {
                        addStep('distance', 20, 0.15);
                    }
                    if (i == 9) {
                        addStep('seconds', 2, 0.15);
                    }
                    if (i == 10) {
                        addStep('distance', 20, 0.15);
                    }
                    if (i == 11) {
                        addStep('seconds', 2, 0.15);
                    }
                    if (i == 12) {
                        addStep('distance', 40, 0.15);
                    }
                    if (i == 13) {
                        addStep('seconds', 5, 0.15);
                    }
                    if (i == 14) {
                        addStep('distance', 15, 0.15);
                    }
                    if (i == 15) {
                        addStep('seconds', 2, 0.15);
                    }
                    if (i == 16) {
                        addStep('distance', 15, 0.15);
                    }
                }
                if (oFilter.currentSystem == '2') {
                    if (i == 0) {
                        var time = Cesium.JulianDate.addSeconds(start, i, new Cesium.JulianDate());
                        var _position = Cesium.Cartesian3.fromDegrees(position[i].x, position[i].y, position[i].z);
                        property.addSample(time, _position);
                    }
                    if (i == 1) {
                        addStep('distance', 20, 0.15);
                    }
                    if (i == 2) {
                        addStep('seconds', 2, 0.15);
                    }
                    if (i == 3) {
                        addStep('distance', 40, 0.15);
                    }
                    if (i == 4) {
                        addStep('distance', 40, 0.15);
                    }
                    if (i == 5) {
                        addStep('seconds', 4, 0.15);
                    }
                    if (i == 6) {
                        addStep('seconds', 2, 0.15);
                    }
                    if (i == 7) {
                        addStep('seconds', 2, 0.15);
                    }
                    if (i == 8) {
                        addStep('seconds', 3, 0.15);
                    }
                    if (i == 9) {
                        addStep('seconds', 2, 0.15);
                    }
                    if (i == 10) { //
                        addStep('seconds', 3, 0.15);
                    }
                    if (i == 11) {
                        addStep('seconds', 3, 0.15);
                    }
                    if (i == 12) {
                        addStep('seconds', 0.5, 0.15);
                    }
                    if (i == 13) {
                        addStep('seconds', 1, 0.15);
                    }
                    if (i == 14) {
                        addStep('seconds', 3, 0.15);
                    }
                    if (i == 15) {
                        addStep('seconds', 3, 0.15);
                    }
                    if (i == 16) {
                        addStep('seconds', 3, 0.15);
                    }
                    if (i == 17) {
                        addStep('seconds', 6, 0.15);
                    }
                    if (i == 18) {
                        addStep('seconds', 2, 0.15);
                    }
                    if (i == 19) {
                        addStep('seconds', 6, 0.15);
                    }
                }
            }
            return property;
        }
        var start = Cesium.JulianDate.fromDate(new Date(2018, 3, 15, 16));
        var stop = Cesium.JulianDate.addSeconds(start, 52, new Cesium.JulianDate());
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
        var showTime;
        if (oFilter.currentSystem == '1') {
            console.log('1')
            showTime = timesArr[2].secondsOfDay + 0.15 + 5 * 0.15
            console.log(timesArr[2].secondsOfDay)
        } else if (oFilter.currentSystem == '2') {
            console.log('2')
            showTime = timesArr[16].secondsOfDay
            console.log(timesArr[16].secondsOfDay)
        }
        oFilter.waterSurEntityTimerangeArr = [{
                name: 'filter-watersur-1',
                timeRange: timesArr[1].secondsOfDay + 0.15
            },
            {
                name: 'filter-watersur-2',
                timeRange: timesArr[2].secondsOfDay + 0.15
            },
            {
                name: 'filter-watersur-3-1',
                timeRange: showTime
            },
            {
                name: 'filter-watersur-4',
                timeRange: timesArr[6].secondsOfDay
            },
            {
                name: 'filter-watersur-5',
                timeRange: timesArr[6].secondsOfDay + 3 * 0.15
            },
            {
                name: 'filter-watersur-6',
                timeRange: timesArr[10].secondsOfDay
            },
            {
                name: 'filter-watersur-8',
                timeRange: timesArr[2].secondsOfDay + 0.15 + 4 * 0.15
            },
        ];
        console.log(oFilter.waterSurEntityTimerangeArr)
        if (oFilter.currentSystem == '1') {
            oFilter.orientationArr = [{
                    start: timesArr[0].secondsOfDay,
                    stop: timesArr[2].secondsOfDay,
                    orientation: {
                        heading: 206.57,
                        pitch: -55.79,
                        range: 0.1
                    }
                },
                {
                    start: timesArr[2].secondsOfDay,
                    stop: timesArr[4].secondsOfDay,
                    orientation: {
                        heading: 230.57,
                        pitch: -55.79,
                        range: 0.1
                    }
                },
                {
                    start: timesArr[4].secondsOfDay,
                    stop: timesArr[5].secondsOfDay,
                    orientation: {
                        heading: 300.57,
                        pitch: -55.79,
                        range: 0.1
                    }
                },
                {
                    start: timesArr[5].secondsOfDay,
                    stop: timesArr[6].secondsOfDay,
                    orientation: {
                        heading: 230.57,
                        pitch: -55.79,
                        range: 0.1
                    }
                },
                {
                    start: timesArr[6].secondsOfDay,
                    stop: timesArr[8].secondsOfDay,
                    orientation: {
                        heading: 300.57,
                        pitch: -55.79,
                        range: 0.1
                    }
                },
                {
                    start: timesArr[8].secondsOfDay,
                    stop: timesArr[10].secondsOfDay,
                    orientation: {
                        heading: 300.57,
                        pitch: -70.79,
                        range: 0.1
                    }
                },
                {
                    start: timesArr[10].secondsOfDay,
                    stop: timesArr[11].secondsOfDay,
                    orientation: {
                        heading: 360.57,
                        pitch: -70.79,
                        range: 0.1
                    }
                },
                {
                    start: timesArr[11].secondsOfDay,
                    stop: timesArr[15].secondsOfDay,
                    orientation: {
                        heading: 330.57,
                        pitch: -70.79,
                        range: 0.1
                    }
                },
            ];
        }
        if (oFilter.currentSystem == '2') {
            oFilter.orientationArr = [{
                    start: timesArr[0].secondsOfDay,
                    stop: timesArr[4].secondsOfDay,
                    orientation: {
                        heading: 90.57,
                        pitch: -63.79,
                        range: 0.1
                    }
                },
                {
                    start: timesArr[4].secondsOfDay,
                    stop: timesArr[5].secondsOfDay,
                    orientation: {
                        heading: 70.57,
                        pitch: -63.79,
                        range: 0.1
                    }
                },
                {
                    start: timesArr[5].secondsOfDay,
                    stop: timesArr[7].secondsOfDay,
                    orientation: {
                        heading: 90.57,
                        pitch: -63.79,
                        range: 0.1
                    }
                },
                {
                    start: timesArr[7].secondsOfDay,
                    stop: timesArr[9].secondsOfDay,
                    orientation: {
                        heading: 120.57,
                        pitch: -63.79,
                        range: 0.1
                    }
                },
                {
                    start: timesArr[9].secondsOfDay,
                    stop: timesArr[11].secondsOfDay,
                    orientation: {
                        heading: 180.57,
                        pitch: -63.79,
                        range: 0.1
                    }
                },
                {
                    start: timesArr[11].secondsOfDay,
                    stop: timesArr[16].secondsOfDay,
                    orientation: {
                        heading: 90.57,
                        pitch: -63.79,
                        range: 0.1
                    }
                },
                {
                    start: timesArr[16].secondsOfDay,
                    stop: timesArr[17].secondsOfDay,
                    orientation: {
                        heading: 120.57,
                        pitch: -63.79,
                        range: 0.1
                    }
                },
            ];
        }
        var sight;
        if (oFilter.currentSystem == '1') {
            sight = new Cesium.Cartesian3(0.5, 1, 1.6)
        }
        if (oFilter.currentSystem == '2') {
            sight = new Cesium.Cartesian3(-1, 0, 2)
        }

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
            viewFrom: sight
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
            oFilter.waterSurEntityTimerangeArr.map(function(arr) {
                if (arr.name == item.name) {
                    timeRange = arr.timeRange
                }
            })
            if (parseInt(timeRange * 100) < parseInt(currentTime.secondsOfDay * 100)) {
                item.entity.show = true;
            }
        })

        //注册进度条点击事件
        rangeInput.onmousedown = function() {
            oFilter.timeInputRange = true;
            oFilter.createWaterSur();
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
                    oFilter.waterSurEntityTimerangeArr.map(function(arr) {
                        if (arr.name == item.name) {
                            timeRange = arr.timeRange
                        }
                    })
                    if (parseInt(timeRange * 100) < parseInt(currentTime.secondsOfDay * 100)) {
                        item.entity.show = true;
                    }
                })
                //位置
            if (oDefault.flyData.isStarted && !oDefault.flyData.isPaused) {
                var percent = rangeInput.value / 100;
                var addsec = (timeArr[timeArr.length - 1].secondsOfDay - timeArr[0].secondsOfDay) * percent;
                var currentTime = Cesium.JulianDate.addSeconds(start, addsec, new Cesium.JulianDate());
                oDefault.viewer.clockViewModel.currentTime = currentTime;
                oFilter.timeInputRange = false;
                // 方向			
                var cTime = oDefault.viewer.clockViewModel.currentTime;
                oFilter.orientationArr.forEach(function(item) {
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
                    oFilter.audio.play();
                }
            } else {
                oFilter.startFly();
                oDefault.viewer.clock.shouldAnimate = false;
                var percent = rangeInput.value / 100;
                var addsec = (timeArr[timeArr.length - 1].secondsOfDay - timeArr[0].secondsOfDay) * percent;
                var currentTime = Cesium.JulianDate.addSeconds(start, addsec, new Cesium.JulianDate());
                oDefault.viewer.clockViewModel.currentTime = currentTime;
                oFilter.timeInputRange = false;
                var cTime = oDefault.viewer.clockViewModel.currentTime;
                oFilter.orientationArr.forEach(function(item) {
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
                oFilter.pauseFly();
            }
        }


        //label显示标志
        var showMark = [];
        var a = oDefault.configData.tilesets.chejian.tujian;
        for (var i = 0; i < a.length; i++) {
            showMark.push(true);
        }
        //datalabel显示标志
        var dataShowMark = [];
        for (var i = 0; i < oFilter.dataLabelList.length; i++) {
            dataShowMark.push(true);
        }
        //转向标志
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

        function applyGravity1(p, dt) {
            var position = p.position;
            Cesium.Cartesian3.normalize(position, gravityScratch);
            Cesium.Cartesian3.multiplyByScalar(
                gravityScratch,
                10 * dt,
                gravityScratch
            );
            p.velocity = Cesium.Cartesian3.add(
                p.velocity,
                gravityScratch,
                p.velocity
            );
        }
        var snowGravityScratch = new Cesium.Cartesian3();
        var snowUpdate = function(particle, dt) {
            snowGravityScratch = Cesium.Cartesian3.normalize(particle.position, snowGravityScratch);
            snowGravityScratch = Cesium.Cartesian3.multiplyByScalar(snowGravityScratch,
                Cesium.Math.randomBetween(30.0, 300.0),
                snowGravityScratch);
            particle.velocity = Cesium.Cartesian3.add(particle.velocity, snowGravityScratch, particle.velocity);
        };

        var viewModel2 = {
            emissionRate: 2500.0,
            gravity: -10.0,
            minimumParticleLife: 0.8,
            maximumParticleLife: 0.8,
            minimumSpeed: 0.5,
            maximumSpeed: 0.5,
            startScale: 4.0,
            endScale: 3.0,
            particleSize: 1.5,
        };
        var gravityScratch = new Cesium.Cartesian3();

        function applyGravity2(p, dt) {
            var position = p.position;
            Cesium.Cartesian3.normalize(position, gravityScratch);
            Cesium.Cartesian3.multiplyByScalar(
                gravityScratch,
                0.8,
                gravityScratch
            );
            p.velocity = Cesium.Cartesian3.add(
                p.velocity,
                gravityScratch,
                p.velocity
            );
        }
        //注册clock ontick事件
        var viewer = oDefault.viewer
        var coor1 = Cesium.Cartesian3.fromDegrees(106.0733180897, 29.8692887324, 8)
        var coor2 = Cesium.Cartesian3.fromDegrees(106.0733180897, 29.8692887324, 12)
        var coor = [coor2.x - coor1.x, coor2.y - coor1.y, coor2.z - coor1.z];
        var i1 = 0;
        var i2 = 0;
        var i3 = 0;
        var i4 = 0;
        var i5 = 0;
        var i6 = 0;
        var i7 = 0;
        var i8 = 0;
        var translation1 = Cesium.Matrix4.fromTranslation(new Cesium.Cartesian3(coor[0] / 400, coor[1] /
            400,
            coor[2] / 400))
        var translation2 = Cesium.Matrix4.fromTranslation(new Cesium.Cartesian3(coor[0] / 400, coor[1] /
            400,
            coor[2] / 400))
        var translation3 = Cesium.Matrix4.fromTranslation(new Cesium.Cartesian3(coor[0] / 300, coor[1] /
            300,
            coor[2] / 300))
        var translation4 = Cesium.Matrix4.fromTranslation(new Cesium.Cartesian3(coor[0] / 100, coor[1] /
            100,
            coor[2] / 100))
        var translation5 = Cesium.Matrix4.fromTranslation(new Cesium.Cartesian3(coor[0] / 400, coor[1] /
            400,
            coor[2] / 400))
        var translation6 = Cesium.Matrix4.fromTranslation(new Cesium.Cartesian3(coor[0] / 400, coor[1] /
            400,
            coor[2] / 400))
        var translation7 = Cesium.Matrix4.fromTranslation(new Cesium.Cartesian3(coor[0] / 400, coor[1] /
            400,
            coor[2] / 400))
        var translation8 = Cesium.Matrix4.fromTranslation(new Cesium.Cartesian3(coor[0] / 400, coor[1] /
            400,
            coor[2] / 400))

        //
        var featureList = [];
        oDefault.clockTickEvent = function() {
            if (entityFly.position) {
                var currentPosition = entityFly.position.getValue(oDefault.viewer.clock.currentTime);
                var ellipsoid = oDefault.viewer.scene.globe.ellipsoid;
                if (!currentPosition) {
                    //结束飞行
                    oFilter.stopFly(); //清除音频
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
                        oFilter.stopFly();
                    }
                    //进度条和时间更新
                    if (!oFilter.timeInputRange) {
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
                    //水流方向显示
                    var a = oDefault.viewer.clock.currentTime.secondsOfDay.toFixed(2);

                    if (oFilter.currentSystem == '1') {
                        ctime = timesArr[0].secondsOfDay;
                        begin = (ctime + 0.1).toFixed(2);
                        if (a == begin) {
                            oDefault.waterFlowArrowArr[0].show = true;
                            oDefault.waterFlowArrowArr[1].show = true;
                            oDefault.waterFlowArrowArr[2].show = true;
                        }

                        ctime = timesArr[1].secondsOfDay;
                        begin = (ctime + 0.15).toFixed(2);
                        var clock1 = undefined;
                        if (a == begin && !clock1) {
                            oDefault.waterFlowArrowArr[3].show = true;
                            oDefault.waterSurEntityArr.map(function(item) {
                                if (item.name == 'filter-watersur-1') {
                                    item.entity.show = true;
                                    var clock1 = setInterval(function() {
                                        if (i1 > 40) {
                                            clearInterval(clock1);
                                        }
                                        Cesium.Matrix4.multiply(item.entity.modelMatrix, translation1, item.entity.modelMatrix);
                                        i1++;
                                    }, 100)
                                }
                            })
                        }

                        ctime = timesArr[2].secondsOfDay;
                        begin = (ctime).toFixed(2);
                        if (a == begin) {
                            oDefault.tilesetList.map(function(item) {
                                if (item.id == 'jidian-05') {
                                    var viewer = oDefault.viewer;
                                    var primitive3 = item.tilesetList[2].tileset;
                                    var j = 0;
                                    var clock30 = setInterval(function() {
                                        if (j > 50) {
                                            clearInterval(clock30);
                                        }
                                        var translation = Cesium.Matrix4.fromTranslation(new Cesium.Cartesian3(coor[0] / 400, coor[1] /
                                            400,
                                            coor[2] / 400))
                                        Cesium.Matrix4.multiply(primitive3.modelMatrix, translation, primitive3.modelMatrix);
                                        j++;
                                    }, 100)
                                }
                            })
                        }

                        var clock2 = undefined;
                        var clock3 = undefined;
                        var clock8 = undefined;
                        ctime = timesArr[2].secondsOfDay;
                        begin = (ctime + 0.15).toFixed(2);
                        if (a == begin && !clock2 && !clock3) {
                            oDefault.waterFlowArrowArr[4].show = true;
                            setTimeout(function() {
                                oDefault.waterSurEntityArr.map(function(item) {
                                    if (item.name == 'filter-watersur-2') {
                                        item.entity.show = true;
                                        clock2 = setInterval(function() {
                                            if (i2 > 40) {
                                                clearInterval(clock2);
                                            }
                                            Cesium.Matrix4.multiply(item.entity.modelMatrix, translation2, item.entity.modelMatrix);
                                            i2++;
                                        }, 100)
                                    }
                                })
                            }, 500)

                            oDefault.waterFlowArrowArr[4].show = true;
                            setTimeout(function() {
                                oDefault.waterFlowArrowArr[5].show = true;
                                oDefault.waterFlowArrowArr[6].show = true;
                                var scene = viewer.scene;
                                var color = [68, 177, 255, 150];
                                var ellipsoid = viewer.scene.globe.ellipsoid;
                                var position = Cesium.Cartesian3.fromDegrees(106.0726480563, 29.8692139606, 14.3, ellipsoid)
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
                                        emitter: new Cesium.CircleEmitter(0.2),
                                        modelMatrix: new Cesium.Matrix4.fromTranslation(position),
                                        updateCallback: applyGravity,
                                    })
                                );
                                var mat = Cesium.Transforms.eastNorthUpToFixedFrame(position);
                                var deg = 90
                                var rotationX = Cesium.Matrix4.fromRotationTranslation(Cesium.Matrix3.fromRotationX(Cesium.Math.toRadians(
                                    deg)));
                                Cesium.Matrix4.multiply(mat, rotationX, mat);
                                particleSystem.modelMatrix = mat;
                                oDefault.waterParticleArr.push({
                                    pid: 'tujian-08',
                                    entity: particleSystem,
                                    name: 'particle-1'
                                })
                            }, 2000)

                            // setTimeout(function() {
                            // 	oDefault.waterSurEntityArr.map(function(item) {
                            // 		if (item.name == 'filter-watersur-8') {
                            // 			item.entity.show = true;
                            // 		}
                            // 	})
                            // }, 4000)

                            // setTimeout(function() {
                            // 	oDefault.waterSurEntityArr.map(function(item) {
                            // 		if (item.name == 'filter-watersur-3-1') {
                            // 			item.entity.show = true;
                            // 			clock3 = setInterval(function() {
                            // 				if (i3 > 30) {
                            // 					clearInterval(clock3);
                            // 				}
                            // 				Cesium.Matrix4.multiply(item.entity.modelMatrix, translation3, item.entity.modelMatrix);
                            // 				i3++;
                            // 			}, 100)
                            // 		}
                            // 	})
                            // }, 5000)

                            setTimeout(function() {
                                oDefault.waterFlowArrowArr[18].show = true;
                                oDefault.waterFlowArrowArr[17].show = true;
                            }, 7000)
                        }


                        ctime = timesArr[2].secondsOfDay;
                        begin = (ctime + 0.75).toFixed(2);
                        if (a == begin && !clock2 && !clock3) {
                            setTimeout(function() {
                                oDefault.waterSurEntityArr.map(function(item) {
                                    if (item.name == 'filter-watersur-8') {
                                        item.entity.show = true;
                                    }
                                })
                            }, 0)

                            setTimeout(function() {
                                oDefault.waterSurEntityArr.map(function(item) {
                                    if (item.name == 'filter-watersur-3-1') {
                                        item.entity.show = true;
                                        clock3 = setInterval(function() {
                                            if (i3 > 30) {
                                                clearInterval(clock3);
                                            }
                                            Cesium.Matrix4.multiply(item.entity.modelMatrix, translation3, item.entity.modelMatrix);
                                            i3++;
                                        }, 100)
                                    }
                                })
                            }, 1000)
                        }

                        ctime = timesArr[4].secondsOfDay;
                        begin = (ctime - 0.3).toFixed(2);
                        if (a == begin) {}

                        ctime = timesArr[5].secondsOfDay;
                        begin = (ctime).toFixed(2);
                        if (a == begin) {
                            // oDefault.waterFlowArrowArr[7].show = true;
                            oDefault.waterParticleArr.map(function(item) {
                                oDefault.viewer.scene.primitives.remove(item.entity)
                            })
                            oDefault.waterParticleArr = [];
                        }

                        var clock4 = undefined;
                        var clock5 = undefined;
                        ctime = timesArr[6].secondsOfDay;
                        begin = (ctime).toFixed(2);
                        if (a == begin && !clock4 && !clock5) {

                            oDefault.waterFlowArrowArr[19].show = true;
                            setTimeout(function() {
                                oDefault.waterSurEntityArr.map(function(item) {
                                    if (item.name == 'filter-watersur-4') {
                                        item.entity.show = true;
                                        clock4 = setInterval(function() {
                                            if (i4 > 45) {
                                                clearInterval(clock4);
                                            }
                                            Cesium.Matrix4.multiply(item.entity.modelMatrix, translation4, item.entity.modelMatrix);
                                            i4++;
                                        }, 100)
                                    }
                                })
                            }, 500)

                            setTimeout(function() {
                                var viewModel = {
                                    emissionRate: 500.0,
                                    gravity: -10.0,
                                    minimumParticleLife: 2.2,
                                    maximumParticleLife: 2.2,
                                    minimumSpeed: 2.0,
                                    maximumSpeed: 3.0,
                                    startScale: 6.0,
                                    endScale: 1.0,
                                    particleSize: 0.5,
                                };
                                var scene = viewer.scene;
                                var color = [68, 177, 255, 150];
                                var ellipsoid = viewer.scene.globe.ellipsoid;
                                var color1 = new Cesium.Color.fromBytes(color[0], color[1], color[2], 50);
                                var color2 = new Cesium.Color.fromBytes(color[0], color[1], color[2], 0);
                                var deg = 90
                                var rotationX = Cesium.Matrix4.fromRotationTranslation(Cesium.Matrix3.fromRotationX(Cesium.Math.toRadians(
                                    deg)));
                                //1
                                var position1 = Cesium.Cartesian3.fromDegrees(106.0726437034, 29.8690972882, 11.7, ellipsoid)
                                var particleSystem1 = scene.primitives.add(
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
                                        emitter: new Cesium.CircleEmitter(0.2),
                                        modelMatrix: new Cesium.Matrix4.fromTranslation(position),
                                        updateCallback: applyGravity,
                                    })
                                );
                                var mat1 = Cesium.Transforms.eastNorthUpToFixedFrame(position1);
                                Cesium.Matrix4.multiply(mat1, rotationX, mat1);
                                particleSystem1.modelMatrix = mat1;
                                oDefault.waterParticleArr.push({
                                        pid: 'tujian-08',
                                        entity: particleSystem1,
                                        name: 'particle-1'
                                    })
                                    //2
                                var position2 = Cesium.Cartesian3.fromDegrees(106.0726477996, 29.8690972882, 11.7, ellipsoid)
                                var particleSystem2 = scene.primitives.add(
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
                                        emitter: new Cesium.CircleEmitter(0.2),
                                        modelMatrix: new Cesium.Matrix4.fromTranslation(position2),
                                        updateCallback: applyGravity,
                                    })
                                );
                                var mat2 = Cesium.Transforms.eastNorthUpToFixedFrame(position2);
                                Cesium.Matrix4.multiply(mat2, rotationX, mat2);
                                particleSystem2.modelMatrix = mat2;
                                oDefault.waterParticleArr.push({
                                        pid: 'tujian-08',
                                        entity: particleSystem2,
                                        name: 'particle-2'
                                    })
                                    //3
                                var position3 = Cesium.Cartesian3.fromDegrees(106.0726517996, 29.8690972882, 11.7, ellipsoid)
                                var particleSystem3 = scene.primitives.add(
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
                                        emitter: new Cesium.CircleEmitter(0.2),
                                        modelMatrix: new Cesium.Matrix4.fromTranslation(position3),
                                        updateCallback: applyGravity,
                                    })
                                );
                                var mat3 = Cesium.Transforms.eastNorthUpToFixedFrame(position3);
                                Cesium.Matrix4.multiply(mat3, rotationX, mat3);
                                particleSystem3.modelMatrix = mat3;
                                oDefault.waterParticleArr.push({
                                        pid: 'tujian-08',
                                        entity: particleSystem3,
                                        name: 'particle-3'
                                    })
                                    //4
                                var position4 = Cesium.Cartesian3.fromDegrees(106.0726557996, 29.8690972882, 11.7, ellipsoid)
                                var particleSystem4 = scene.primitives.add(
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
                                        emitter: new Cesium.CircleEmitter(0.2),
                                        modelMatrix: new Cesium.Matrix4.fromTranslation(position4),
                                        updateCallback: applyGravity,
                                    })
                                );
                                var mat4 = Cesium.Transforms.eastNorthUpToFixedFrame(position4);
                                Cesium.Matrix4.multiply(mat4, rotationX, mat4);
                                particleSystem4.modelMatrix = mat4;
                                oDefault.waterParticleArr.push({
                                        pid: 'tujian-08',
                                        entity: particleSystem4,
                                        name: 'particle-4'
                                    })
                                    //5
                                var position5 = Cesium.Cartesian3.fromDegrees(106.0726597996, 29.8690972882, 11.7, ellipsoid)
                                var particleSystem5 = scene.primitives.add(
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
                                        emitter: new Cesium.CircleEmitter(0.2),
                                        modelMatrix: new Cesium.Matrix4.fromTranslation(position5),
                                        updateCallback: applyGravity,
                                    })
                                );
                                var mat5 = Cesium.Transforms.eastNorthUpToFixedFrame(position5);
                                Cesium.Matrix4.multiply(mat5, rotationX, mat5);
                                particleSystem5.modelMatrix = mat5;
                                oDefault.waterParticleArr.push({
                                    pid: 'tujian-08',
                                    entity: particleSystem5,
                                    name: 'particle-5'
                                })
                                oDefault.waterFlowArrowArr[7].show = true;

                                oDefault.waterSurEntityArr.map(function(item) {
                                    if (item.name == 'filter-watersur-5') {
                                        item.entity.show = true;
                                        clock5 = setInterval(function() {
                                            if (i5 > 35) {
                                                clearInterval(clock5);
                                            }
                                            Cesium.Matrix4.multiply(item.entity.modelMatrix, translation5, item.entity.modelMatrix);
                                            i5++;
                                        }, 100)
                                    }
                                })
                            }, 3000)
                        }


                        ctime = timesArr[7].secondsOfDay;
                        begin = (ctime).toFixed(2);
                        if (a == begin) {
                            oDefault.waterFlowArrowArr[8].show = true;
                            oDefault.waterFlowArrowArr[9].show = true;
                            oDefault.waterFlowArrowArr[10].show = true;
                            oDefault.waterFlowArrowArr[11].show = true;
                        }

                        ctime = timesArr[7].secondsOfDay;
                        begin = (ctime + 0.15).toFixed(2);
                        if (a == begin) {
                            oDefault.waterParticleArr.map(function(item) {
                                oDefault.viewer.scene.primitives.remove(item.entity)
                            })
                            oDefault.waterParticleArr = [];
                        }

                        var clock6 = undefined
                        ctime = timesArr[10].secondsOfDay;
                        begin = (ctime).toFixed(2);
                        if (a == begin) {
                            oDefault.waterFlowArrowArr[13].show = true;
                            oDefault.waterSurEntityArr.map(function(item) {
                                if (item.name == 'filter-watersur-6') {
                                    item.entity.show = true;
                                    clock6 = setInterval(function() {
                                        if (i6 > 35) {
                                            clearInterval(clock6);
                                        }
                                        Cesium.Matrix4.multiply(item.entity.modelMatrix, translation6, item.entity.modelMatrix);
                                        i6++;
                                    }, 100)
                                }
                            })
                        }

                        ctime = timesArr[12].secondsOfDay;
                        begin = (ctime).toFixed(2);
                        if (a == begin) {
                            oDefault.waterFlowArrowArr[14].show = true;
                            oDefault.waterFlowArrowArr[15].show = true;
                            $('#filter-02-07').css('display', 'block');
                            setTimeout(function() {
                                $('#filter-02-07').css('display', 'none');
                            }, 5000)
                        }
                        ctime = timesArr[14].secondsOfDay;
                        begin = (ctime).toFixed(2);
                        if (a == begin) {
                            oDefault.waterFlowArrowArr[16].show = true;
                        }

                        // turn1
                        ctime = timesArr[2].secondsOfDay;
                        begin = (ctime).toFixed(2);
                        end = (ctime + 0.05).toFixed(2);
                        if (a >= begin && a <= end && turn1) {
                            turn1 = false;
                            if (oDefault.viewer.clock.multiplier > 0) {
                                swerve(200, 3, -55, 10);
                            } else {
                                swerve(230, -3, -55, 10);
                            }
                        } else if (a < begin || a > end) {
                            turn1 = true;
                        }

                        // turn2
                        ctime = timesArr[4].secondsOfDay;
                        begin = (ctime).toFixed(2);
                        end = (ctime + 0.05).toFixed(2);
                        if (a >= begin && a <= end && turn2) {
                            turn2 = false;
                            if (oDefault.viewer.clock.multiplier > 0) {
                                swerve(230, 7, -55, 10);
                            } else {
                                swerve(300, -7, -55, 10);
                            }
                        } else if (a < begin || a > end) {
                            turn2 = true;
                        }

                        // turn3
                        ctime = timesArr[5].secondsOfDay;
                        begin = (ctime - 0.05).toFixed(2);
                        end = (ctime).toFixed(2);
                        if (a >= begin && a <= end && turn3) {
                            turn3 = false;
                            if (oDefault.viewer.clock.multiplier > 0) {
                                swerve(300, -7, -55, 10);
                            } else {
                                swerve(230, 7, -55, 10);
                            }
                        } else if (a < begin || a > end) {
                            turn3 = true;
                        }

                        // turn4
                        ctime = timesArr[6].secondsOfDay;
                        begin = (ctime - 0.05).toFixed(2);
                        end = (ctime).toFixed(2);
                        if (a >= begin && a <= end && turn4) {
                            turn4 = false;
                            if (oDefault.viewer.clock.multiplier > 0) {
                                swerve(230, 7, -55, 10);
                            } else {
                                swerve(300, -7, -55, 10);
                            }
                        } else if (a < begin || a > end) {
                            turn4 = true;
                        }

                        // turn5
                        ctime = timesArr[8].secondsOfDay;
                        begin = (ctime).toFixed(2);
                        end = (ctime + 0.05).toFixed(2);
                        if (a >= begin && a <= end && turn5) {
                            turn5 = false;
                            if (oDefault.viewer.clock.multiplier > 0) {
                                swerveV(300, -3, -55, 5);
                            } else {
                                swerve(300, 3, -70, 5);
                            }
                        } else if (a < begin || a > end) {
                            turn5 = true;
                        }

                        // turn6
                        ctime = timesArr[10].secondsOfDay;
                        begin = (ctime).toFixed(2);
                        end = (ctime + 0.05).toFixed(2);
                        if (a >= begin && a <= end && turn6) {
                            turn6 = false;
                            if (oDefault.viewer.clock.multiplier > 0) {
                                swerve(300, 6, -70, 10);
                            } else {
                                swerve(360, -6, -70, 10);
                            }
                        } else if (a < begin || a > end) {
                            turn6 = true;
                        }

                        // turn7
                        ctime = timesArr[12].secondsOfDay;
                        begin = (ctime).toFixed(2);
                        end = (ctime + 0.05).toFixed(2);
                        if (a >= begin && a <= end && turn7) {
                            turn7 = false;
                            if (oDefault.viewer.clock.multiplier > 0) {
                                swerve(360, -3, -70, 10);
                            } else {
                                swerve(330, 3, -70, 10);
                            }
                        } else if (a < begin || a > end) {
                            turn7 = true;
                        }
                    }
                    if (oFilter.currentSystem == '2') {
                        ctime = timesArr[1].secondsOfDay;
                        begin = (ctime - 0.3).toFixed(2);
                        if (a == begin) {

                            $('#filter-02-03').css('display', 'block');
                            setTimeout(function() {
                                $('#filter-02-03').css('display', 'none');
                            }, 5000)
                            $('#filter-02-04').css('display', 'block');
                            setTimeout(function() {
                                $('#filter-02-04').css('display', 'none');
                            }, 5000)
                            oDefault.waterFlowArrowArr[0].show = true;
                            oDefault.waterFlowArrowArr[1].show = true;
                            oDefault.waterFlowArrowArr[2].show = true;
                        }

                        ctime = timesArr[2].secondsOfDay;
                        begin = (ctime).toFixed(2);
                        if (a == begin) {
                            oDefault.waterFlowArrowArr[3].show = true;
                            oDefault.waterFlowArrowArr[4].show = true;
                        }

                        ctime = timesArr[3].secondsOfDay;
                        begin = (ctime).toFixed(2);
                        if (a == begin) {
                            // oDefault.waterFlowArrowArr[5].show = true;
                            oDefault.waterFlowArrowArr[6].show = true;
                            // oDefault.waterFlowArrowArr[7].show = true;
                            // oDefault.waterFlowArrowArr[8].show = true;
                            // oDefault.waterFlowArrowArr[9].show = true;
                            // oDefault.waterFlowArrowArr[10].show = true;
                        }

                        ctime = timesArr[4].secondsOfDay;
                        begin = (ctime).toFixed(2);
                        if (a == begin) {
                            $('#filter-02-04').css('display', 'block');
                            setTimeout(function() {
                                $('#filter-02-04').css('display', 'none');
                            }, 5000)
                            $('#filter-02-06').css('display', 'block');
                            setTimeout(function() {
                                $('#filter-02-06').css('display', 'none');
                            }, 5000)

                            oDefault.waterFlowArrowArr[19].show = true;
                            oDefault.waterFlowArrowArr[20].show = true;

                            oDefault.equipStateEvent = function(tile) {
                                var content = tile.content;
                                var featuresLength = content.featuresLength;
                                var url = tile.tileset.url;
                                if (url.indexOf('jidian/05') >= 0) {
                                    for (var i = 0; i < featuresLength; i += 1) {
                                        var feature = content.getFeature(i);
                                        var name = feature.getProperty('name');
                                        if (name == '05020104-3号反冲洗水泵机组气动碟阀') {
                                            feature.color = Cesium.Color.fromCssColorString("rgba(179, 88, 70, 1)")
                                        }
                                    }
                                }
                            }
                            oDefault.tilesetList.map(function(item) {
                                if (item.id == 'jidian-05') {
                                    if (item.tileset) {
                                        item.tileset.tileVisible.addEventListener(oDefault.equipStateEvent)
                                    }
                                    if (item.tilesetList) {
                                        item.tilesetList.map(function(tile) {
                                            tile.tileset.tileVisible.addEventListener(oDefault.equipStateEvent)
                                        })
                                    }
                                }
                            })
                        }

                        ctime = timesArr[5].secondsOfDay;
                        begin = (ctime).toFixed(2);
                        if (a == begin) {
                            oFilter.createEquipStateEvent();
                        }

                        ctime = timesArr[6].secondsOfDay;
                        begin = (ctime + 0.15).toFixed(2);
                        if (a == begin) {
                            var color = [68, 177, 255, 150];
                            var ellipsoid = viewer.scene.globe.ellipsoid;
                            var position1 = Cesium.Cartesian3.fromDegrees(106.0727131800, 29.8691358828, 12.3, ellipsoid)
                            var color1 = new Cesium.Color.fromBytes(color[0], color[1], color[2], 150);
                            var color2 = new Cesium.Color.fromBytes(color[0], color[1], color[2], 0);
                            var particleSystem1 = viewer.scene.primitives.add(
                                new Cesium.ParticleSystem({
                                    image: "./Images/water.png",
                                    startColor: color1,
                                    endColor: color2,
                                    startScale: viewModel2.startScale,
                                    endScale: viewModel2.endScale,
                                    minimumParticleLife: viewModel2.minimumParticleLife,
                                    maximumParticleLife: viewModel2.maximumParticleLife,
                                    minimumSpeed: viewModel2.minimumSpeed,
                                    maximumSpeed: viewModel2.maximumSpeed,
                                    imageSize: new Cesium.Cartesian2(
                                        viewModel2.particleSize,
                                        viewModel2.particleSize
                                    ),
                                    emissionRate: viewModel2.emissionRate,
                                    lifetime: 0.5,
                                    emitter: new Cesium.CircleEmitter(1.5),
                                    modelMatrix: new Cesium.Matrix4.fromTranslation(position1),
                                    updateCallback: applyGravity2,
                                })
                            );
                            oDefault.waterParticleArr.push({
                                pid: 'tujian-08',
                                entity: particleSystem1,
                                name: 'particle-10-1'
                            })
                            var position2 = Cesium.Cartesian3.fromDegrees(106.0727131800, 29.8691551284, 12.3, ellipsoid)
                            var particleSystem2 = viewer.scene.primitives.add(
                                new Cesium.ParticleSystem({
                                    image: "./Images/water.png",
                                    startColor: color1,
                                    endColor: color2,
                                    startScale: viewModel2.startScale,
                                    endScale: viewModel2.endScale,
                                    minimumParticleLife: viewModel2.minimumParticleLife,
                                    maximumParticleLife: viewModel2.maximumParticleLife,
                                    minimumSpeed: viewModel2.minimumSpeed,
                                    maximumSpeed: viewModel2.maximumSpeed,
                                    imageSize: new Cesium.Cartesian2(
                                        viewModel2.particleSize,
                                        viewModel2.particleSize
                                    ),
                                    emissionRate: viewModel2.emissionRate,
                                    lifetime: 0.5,
                                    emitter: new Cesium.CircleEmitter(1.5),
                                    modelMatrix: new Cesium.Matrix4.fromTranslation(position2),
                                    updateCallback: applyGravity2,
                                })
                            );
                            oDefault.waterParticleArr.push({
                                    pid: 'tujian-08',
                                    entity: particleSystem2,
                                    name: 'particle-10-2'
                                })
                                //
                            var position3 = Cesium.Cartesian3.fromDegrees(106.0727131800, 29.8691754439, 12.3, ellipsoid)
                            var particleSystem3 = viewer.scene.primitives.add(
                                new Cesium.ParticleSystem({
                                    image: "./Images/water.png",
                                    startColor: color1,
                                    endColor: color2,
                                    startScale: viewModel2.startScale,
                                    endScale: viewModel2.endScale,
                                    minimumParticleLife: viewModel2.minimumParticleLife,
                                    maximumParticleLife: viewModel2.maximumParticleLife,
                                    minimumSpeed: viewModel2.minimumSpeed,
                                    maximumSpeed: viewModel2.maximumSpeed,
                                    imageSize: new Cesium.Cartesian2(
                                        viewModel2.particleSize,
                                        viewModel2.particleSize
                                    ),
                                    emissionRate: viewModel2.emissionRate,
                                    lifetime: 0.5,
                                    emitter: new Cesium.CircleEmitter(1.5),
                                    modelMatrix: new Cesium.Matrix4.fromTranslation(position3),
                                    updateCallback: applyGravity2,
                                })
                            );
                            oDefault.waterParticleArr.push({
                                    pid: 'tujian-08',
                                    entity: particleSystem3,
                                    name: 'particle-10-3'
                                })
                                //
                            var position4 = Cesium.Cartesian3.fromDegrees(106.0727131800, 29.8691954439, 12.3, ellipsoid)
                            var particleSystem4 = viewer.scene.primitives.add(
                                new Cesium.ParticleSystem({
                                    image: "./Images/water.png",
                                    startColor: color1,
                                    endColor: color2,
                                    startScale: viewModel2.startScale,
                                    endScale: viewModel2.endScale,
                                    minimumParticleLife: viewModel2.minimumParticleLife,
                                    maximumParticleLife: viewModel2.maximumParticleLife,
                                    minimumSpeed: viewModel2.minimumSpeed,
                                    maximumSpeed: viewModel2.maximumSpeed,
                                    imageSize: new Cesium.Cartesian2(
                                        viewModel2.particleSize,
                                        viewModel2.particleSize
                                    ),
                                    emissionRate: viewModel2.emissionRate,
                                    lifetime: 0.5,
                                    emitter: new Cesium.CircleEmitter(1.5),
                                    modelMatrix: new Cesium.Matrix4.fromTranslation(position4),
                                    updateCallback: applyGravity2,
                                })
                            );
                            oDefault.waterParticleArr.push({
                                pid: 'tujian-08',
                                entity: particleSystem4,
                                name: 'particle-10-4'
                            })
                        }


                        ctime = timesArr[7].secondsOfDay;
                        begin = (ctime).toFixed(2);
                        if (a == begin) {
                            $('#filter-02-05').css('display', 'block');
                            setTimeout(function() {
                                $('#filter-02-05').css('display', 'none');
                            }, 5000)
                            oDefault.waterFlowArrowArr[13].show = true;
                        }

                        ctime = timesArr[9].secondsOfDay;
                        begin = (ctime).toFixed(2);
                        if (a == begin) {
                            oDefault.waterParticleArr.map(function(item) {
                                oDefault.viewer.scene.primitives.remove(item.entity)
                            })
                            oDefault.waterParticleArr = []
                        }

                        // turn1
                        ctime = timesArr[4].secondsOfDay;
                        begin = (ctime).toFixed(2);
                        end = (ctime + 0.05).toFixed(2);
                        if (a >= begin && a <= end && turn1) {
                            turn1 = false;
                            if (oDefault.viewer.clock.multiplier > 0) {
                                swerve(90, -2, -63, 10);
                            } else {
                                swerve(70, 2, -63, 10);
                            }
                        } else if (a < begin || a > end) {
                            turn1 = true;
                        }

                        // turn2
                        ctime = timesArr[5].secondsOfDay;
                        begin = (ctime - 0.05).toFixed(2);
                        end = (ctime).toFixed(2);
                        if (a >= begin && a <= end && turn2) {
                            turn2 = false;
                            if (oDefault.viewer.clock.multiplier > 0) {
                                swerve(70, 2, -63, 10);
                            } else {
                                swerve(90, -2, -63, 10);
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
                                swerve(90, 3, -63, 10);
                            } else {
                                swerve(120, -3, -63, 10);
                            }
                        } else if (a < begin || a > end) {
                            turn3 = true;
                        }

                        // turn4
                        ctime = timesArr[9].secondsOfDay;
                        begin = (ctime).toFixed(2);
                        end = (ctime + 0.05).toFixed(2);
                        if (a >= begin && a <= end && turn4) {
                            turn4 = false;
                            if (oDefault.viewer.clock.multiplier > 0) {
                                swerve(120, 6, -63, 10);
                            } else {
                                swerve(180, -6, -63, 10);
                            }
                        } else if (a < begin || a > end) {
                            turn4 = true;
                        }

                        ctime = timesArr[9].secondsOfDay;
                        begin = (ctime).toFixed(2);
                        if (a == begin) {
                            oDefault.waterFlowArrowArr.map(function(item, index) {
                                if (index <= 18) {
                                    item.show = false;
                                }
                            })
                            oDefault.waterFlowArrowArr[23].show = true;
                            oDefault.waterFlowArrowArr[22].show = true;
                            oDefault.waterFlowArrowArr[21].show = true;
                            oDefault.waterFlowArrowArr[24].show = true;
                            oDefault.waterFlowArrowArr[25].show = true;
                        }

                        // turn5
                        ctime = timesArr[11].secondsOfDay;
                        begin = (ctime).toFixed(2);
                        end = (ctime + 0.05).toFixed(2);
                        if (a >= begin && a <= end && turn5) {
                            turn5 = false;
                            if (oDefault.viewer.clock.multiplier > 0) {
                                swerve(180, -9, -63, 10);
                            } else {
                                swerve(90, 9, -63, 10);
                            }
                        } else if (a < begin || a > end) {
                            turn5 = true;
                        }

                        ctime = timesArr[13].secondsOfDay;
                        begin = (ctime).toFixed(2);
                        if (a == begin) {
                            oDefault.waterFlowArrowArr[26].show = true;
                            // oDefault.waterFlowArrowArr[27].show = true;
                            // oDefault.waterFlowArrowArr[28].show = true;
                            // oDefault.waterFlowArrowArr[29].show = true;
                            // oDefault.waterFlowArrowArr[30].show = true;
                            oDefault.waterFlowArrowArr[31].show = true;
                            // oDefault.waterFlowArrowArr[32].show = true;
                            // oDefault.waterFlowArrowArr[33].show = true;
                            // oDefault.waterFlowArrowArr[34].show = true;
                            // oDefault.waterFlowArrowArr[35].show = true;
                            // oDefault.waterFlowArrowArr[36].show = true;
                            // oDefault.waterFlowArrowArr[37].show = true;
                            // oDefault.waterFlowArrowArr[38].show = true;
                            // oDefault.waterFlowArrowArr[39].show = true;
                            // oDefault.waterFlowArrowArr[40].show = true;

                        }

                        ctime = timesArr[14].secondsOfDay;
                        begin = (ctime).toFixed(2);
                        if (a == begin) {
                            $('#filter-03-06').css('display', 'block');
                            setTimeout(function() {
                                    $('#filter-03-06').css('display', 'none');
                                }, 5000)
                                // $('#filter-03-07').css('display', 'block');
                                // setTimeout(function() {
                                // 	$('#filter-03-07').css('display', 'none');
                                // }, 5000)

                            oDefault.equipStateEvent = function(tile) {
                                var content = tile.content;
                                var featuresLength = content.featuresLength;
                                var url = tile.tileset.url;
                                if (url.indexOf('jidian/05') >= 0) {
                                    for (var i = 0; i < featuresLength; i += 1) {
                                        var feature = content.getFeature(i);
                                        var name = feature.getProperty('name');
                                        if (name == '05020105-3号反冲洗泵出水止回阀') {
                                            feature.color = Cesium.Color.fromCssColorString("rgba(179, 88, 70, 1)")
                                        }
                                    }
                                }
                            }
                            oDefault.tilesetList.map(function(item) {
                                if (item.id == 'jidian-05') {
                                    if (item.tileset) {
                                        item.tileset.tileVisible.addEventListener(oDefault.equipStateEvent)
                                    }
                                    if (item.tilesetList) {
                                        item.tilesetList.map(function(tile) {
                                            tile.tileset.tileVisible.addEventListener(oDefault.equipStateEvent)
                                        })
                                    }
                                }
                            })
                        }

                        ctime = timesArr[15].secondsOfDay;
                        begin = (ctime).toFixed(2);
                        if (a == begin) {
                            oFilter.createEquipStateEvent();
                        }

                        ctime = timesArr[16].secondsOfDay;
                        begin = (ctime).toFixed(2);
                        if (a == begin) {
                            oDefault.waterFlowArrowArr[41].show = true;
                            oDefault.waterFlowArrowArr[42].show = true;
                            oDefault.waterFlowArrowArr[43].show = true;
                            oDefault.waterFlowArrowArr[44].show = true;
                            $('#filter-03-05').css('display', 'block');
                            setTimeout(function() {
                                $('#filter-03-05').css('display', 'none');
                            }, 5000)

                            oDefault.waterSurEntityArr.map(function(item) {
                                if (item.name == 'filter-watersur-3-1') {
                                    item.entity.show = true;
                                }
                            })
                        }

                        ctime = timesArr[16].secondsOfDay;
                        begin = (ctime + 0.3).toFixed(2);
                        if (a == begin) {
                            oDefault.waterFlowArrowArr[45].show = true;
                            oDefault.tilesetList.map(function(item) {
                                if (item.id == 'jidian-05') {
                                    var viewer = oDefault.viewer;
                                    var primitive3 = item.tilesetList[1].tileset;
                                    var j = 0;
                                    var clock30 = setInterval(function() {
                                        if (j > 50) {
                                            clearInterval(clock30);
                                        }
                                        var translation = Cesium.Matrix4.fromTranslation(new Cesium.Cartesian3(coor[0] / 300, coor[1] /
                                            300,
                                            coor[2] / 300))
                                        Cesium.Matrix4.multiply(primitive3.modelMatrix, translation, primitive3.modelMatrix);
                                        j++;
                                    }, 100)
                                }
                            })
                        }


                        // turn6
                        ctime = timesArr[16].secondsOfDay;
                        begin = (ctime).toFixed(2);
                        end = (ctime + 0.05).toFixed(2);
                        if (a >= begin && a <= end && turn6) {
                            turn6 = false;
                            if (oDefault.viewer.clock.multiplier > 0) {
                                swerve(90, 3, -63, 10);
                            } else {
                                swerve(120, -3, -63, 10);
                            }
                        } else if (a < begin || a > end) {
                            turn6 = true;
                        }

                        // turn7
                        ctime = timesArr[16].secondsOfDay;
                        begin = (ctime + 0.3).toFixed(2);
                        end = (ctime + 0.35).toFixed(2);
                        if (a >= begin && a <= end && turn7) {
                            turn7 = false;
                            if (oDefault.viewer.clock.multiplier > 0) {
                                swerve(120, -6, -63, 10);
                            } else {
                                swerve(60, 6, -63, 10);
                            }
                        } else if (a < begin || a > end) {
                            turn7 = true;
                        }

                        // turn8
                        ctime = timesArr[17].secondsOfDay;
                        begin = (ctime - 0.05).toFixed(2);
                        end = (ctime).toFixed(2);
                        if (a >= begin && a <= end && turn8) {
                            turn8 = false;
                            if (oDefault.viewer.clock.multiplier > 0) {
                                swerve(60, 3, -63, 10);
                            } else {
                                swerve(90, -3, -63, 10);
                            }
                        } else if (a < begin || a > end) {
                            turn8 = true;
                        }

                        ctime = timesArr[17].secondsOfDay;
                        begin = (ctime).toFixed(2);
                        if (a == begin) {
                            oDefault.waterFlowArrowArr[46].show = true;
                            oDefault.waterFlowArrowArr[47].show = true;


                        }
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
        var item = {
            "pid": "tujian-05",
            "type": "rectangle",
            "points": [
                106.0729140204, 29.8692424135, 13.8,
                106.0727488969, 29.8692424135, 13.8,
                106.0727488969, 29.8692630587, 13.8,
                106.0727162602, 29.8692630587, 13.8,
                106.0727162602, 29.8692424135, 13.8,
                106.0725540610, 29.8692424135, 13.8,
                106.0725540610, 29.8692328525, 13.8,
                106.0729140204, 29.8692328525, 13.8,
            ],
            "color": [68, 177, 255, 150],
        }
        var color = new Cesium.Color.fromBytes(item.color[0], item.color[1], item.color[2], item.color[3]);
        if (item.type == 'rectangle') {
            var waterPrimitive = new Cesium.Primitive({
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
                name: 'filter-watersur-1'
            })
        }

        var item = {
            "pid": "tujian-05",
            "type": "rectangle",
            "points": [
                106.0729140204, 29.8692328525, 13.8,
                106.0725540610, 29.8692328525, 13.8,
                106.0725540610, 29.8692180276, 13.8,
                106.0729140204, 29.8692180276, 13.8,
            ],
            "color": [68, 177, 255, 150],
        }
        var color = new Cesium.Color.fromBytes(item.color[0], item.color[1], item.color[2], item.color[3]);
        if (item.type == 'rectangle') {
            var waterPrimitive = new Cesium.Primitive({
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
                name: 'filter-watersur-2'
            })
        }

        var item = {
            "pid": "tujian-05",
            "type": "rectangle",
            "points": [
                // 106.0729140204, 29.8692159740, 12.7,
                // 106.0725540610, 29.8692159740, 12.7,
                // 106.0725540610, 29.8691120082, 12.7,
                // 106.0729140204, 29.8691120082, 12.7

                106.0726388086, 29.8692169522, 12.7,
                106.0726388086, 29.8691141519, 12.7,
                106.0727297583, 29.8691141519, 12.7,
                106.0727297583, 29.8692169522, 12.7,
            ],
            "color": [68, 177, 255, 150],
        }
        var color = new Cesium.Color.fromBytes(item.color[0], item.color[1], item.color[2], item.color[3]);
        if (item.type == 'rectangle') {
            var waterPrimitive = new Cesium.Primitive({
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
                name: 'filter-watersur-3-1'
            })
        }

        var item = {
            "pid": "tujian-05",
            "type": "rectangle",
            "points": [
                106.0725550086, 29.8692169522, 12.7,
                106.0725550086, 29.8691141519, 12.7,
                106.0726358086, 29.8691141519, 12.7,
                106.0726358086, 29.8692169522, 12.7,
            ],
            "color": [68, 177, 255, 150],
        }
        var color = new Cesium.Color.fromBytes(item.color[0], item.color[1], item.color[2], item.color[3]);
        if (item.type == 'rectangle') {
            var waterPrimitive = new Cesium.Primitive({
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
                name: 'filter-watersur-3-2'
            })
        }

        var item = {
            "pid": "tujian-05",
            "type": "rectangle",
            "points": [
                106.0727307583, 29.8692169522, 12.7,
                106.0727307583, 29.8691141519, 12.7,
                106.0729107583, 29.8691141519, 12.7,
                106.0729107583, 29.8692169522, 12.7,
            ],
            "color": [68, 177, 255, 150],
        }
        var color = new Cesium.Color.fromBytes(item.color[0], item.color[1], item.color[2], item.color[3]);
        if (item.type == 'rectangle') {
            var waterPrimitive = new Cesium.Primitive({
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
                name: 'filter-watersur-3-3'
            })
        }

        var item = {
            "pid": "tujian-05",
            "type": "rectangle",
            "points": [
                106.0726651756, 29.8691138827, 10,
                106.0726197822, 29.8691138827, 10,
                106.0726197822, 29.8690972327, 10,
                106.0726651756, 29.8690972327, 10
            ],
            "color": [68, 177, 255, 150],
        }
        var color = new Cesium.Color.fromBytes(item.color[0], item.color[1], item.color[2], item.color[3]);
        if (item.type == 'rectangle') {
            var waterPrimitive = new Cesium.Primitive({
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
                name: 'filter-watersur-4'
            })
        }

        var item = {
            "pid": "tujian-05",
            "type": "rectangle",
            "points": [
                106.0729133379, 29.8691198824, 9.5,
                106.0725518604, 29.8691198824, 9.5,
                106.0725518604, 29.8690399116, 9.5,
                106.0729133379, 29.8690399116, 9.5,
            ],
            "color": [68, 177, 255, 150],
        }
        var color = new Cesium.Color.fromBytes(item.color[0], item.color[1], item.color[2], item.color[3]);
        if (item.type == 'rectangle') {
            var waterPrimitive = new Cesium.Primitive({
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
                name: 'filter-watersur-5'
            })
        }

        var item = {
            "pid": "tujian-05",
            "type": "rectangle",
            "points": [
                106.0725398771, 29.8690875018, 11,
                106.0725398771, 29.8692428645, 11,
                106.0724609541, 29.8692428645, 11,
                106.0724609541, 29.8692158804, 11,
                106.0725190647, 29.8692158804, 11,
                106.0725190647, 29.8690875018, 11,
            ],
            "color": [68, 177, 255, 150],
        }
        var color = new Cesium.Color.fromBytes(item.color[0], item.color[1], item.color[2], item.color[3]);
        if (item.type == 'rectangle') {
            var waterPrimitive = new Cesium.Primitive({
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
                name: 'filter-watersur-6'
            })
        }

        var item = {
            "pid": "tujian-05",
            "type": "rectangle",
            "points": [
                106.0729139447, 29.8690354352, 14,
                106.0725395196, 29.8690354352, 14,
                106.0725395196, 29.8689249790, 14,
                106.0729139447, 29.8689249790, 14,
            ],
            "color": [68, 177, 255, 150],
        }
        var color = new Cesium.Color.fromBytes(item.color[0], item.color[1], item.color[2], item.color[3]);
        if (item.type == 'rectangle') {
            var waterPrimitive = new Cesium.Primitive({
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
                name: 'filter-watersur-7'
            })
        }

        var item = {
            "pid": "tujian-05",
            "type": "rectangle",
            "points": [
                106.0726439118, 29.8692164038, 13.5,
                106.0726439118, 29.8691105278, 13.5,
                106.0726500235, 29.8691105278, 13.5,
                106.0726500235, 29.8692164038, 13.5
            ],
            "color": [68, 177, 255, 150],
        }
        var color = new Cesium.Color.fromBytes(item.color[0], item.color[1], item.color[2], item.color[3]);
        if (item.type == 'rectangle') {
            var waterPrimitive = new Cesium.Primitive({
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
                name: 'filter-watersur-8'
            })
        }

    },
    createTab: function() {
        var tabDiv = document.createElement('div');
        tabDiv.className = 'system-shift-tab';
        tabDiv.setAttribute('id', 'tab')
        var body = document.getElementById('body');
        body.appendChild(tabDiv);

        var tabDivChild1 = document.createElement('div');
        tabDivChild1.className = 'system-shift-tab-child tab-active';
        tabDivChild1.innerText = '正常过滤';
        tabDiv.appendChild(tabDivChild1);

        var tabDivChild2 = document.createElement('div');
        tabDivChild2.className = 'system-shift-tab-child';
        tabDivChild2.innerText = '反冲洗';
        tabDiv.appendChild(tabDivChild2);

        if (oFilter.currentSystem == '1') {
            tabDivChild1.className = 'system-shift-tab-child tab-active';
            tabDivChild2.className = 'system-shift-tab-child';
        }
        if (oFilter.currentSystem == '2') {
            tabDivChild1.className = 'system-shift-tab-child';
            tabDivChild2.className = 'system-shift-tab-child tab-active';
        }


        tabDivChild1.onclick = function() {
            oDefault.clearAll();
            oFilter.currentSystem = '1';
            oFilter.currentSight = oFilter.cameraPositions[0];
            oFilter.showFilterSystem();
        }
        tabDivChild2.onclick = function() {
            oDefault.clearAll();
            oFilter.currentSystem = '2';
            oFilter.currentSight = oFilter.cameraPositions[1];
            oFilter.showFilterSystem();
        }

    },
    createEquipStateEvent: function() {
        oDefault.equipStateEvent = function(tile) {
            var content = tile.content;
            var featuresLength = content.featuresLength;
            var url = tile.tileset.url;
            if (url.indexOf('jidian/05') >= 0) {
                for (var i = 0; i < featuresLength; i += 1) {
                    var feature = content.getFeature(i);
                    var name = feature.getProperty('name');
                    if (oFilter.equipList.indexOf(name) >= 0) {
                        feature.color = Cesium.Color.fromCssColorString("rgba(66, 129, 169, 1)")
                    }
                }
            }
        }
        oDefault.tilesetList.map(function(item) {
            if (item.id == 'jidian-05') {
                if (item.tileset) {
                    item.tileset.tileVisible.addEventListener(oDefault.equipStateEvent)
                }
                if (item.tilesetList) {
                    item.tilesetList.map(function(tile) {
                        tile.tileset.tileVisible.addEventListener(oDefault.equipStateEvent)
                    })
                }
            }
        })

    },
    initFilterSystem: function() {
        oDefault.currentSystem = 'Filter';
        oFilter.createFlowLine();
        oFilter.createWaterSur();
        oFilter.createTextLabels();
        oFilter.createFlyPanel();
        oFilter.createTab();
        // oFilter.createDataLabels();
        oFilter.createEquipStateEvent();
    }
}