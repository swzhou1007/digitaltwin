oSediment = {
    data: [],
    waterSurEntityTimerangeArr: [],
    currentSystem: false,
    timeInputRange: false,
    systemCameraControler: null,
    orientationArr: [],
    sedimentSystem: {
        "name": "Sediment",
        "cameraPosition": [106.07145997601137, 29.8709661991691, 143.99574998414704],
        "cameraHeadingPitchRoll": [125, -40, 360.00]
    },
    flyPositions: [
        [106.07145997601137, 29.8709661991691, 143.99574998414704],
        [106.0726147463676, 29.87065703647894, 32.89798408855526],
        [106.07280898028637, 29.870533046198975, 21.03825566905258],
        [106.07280898028637, 29.870533046198975, 21.03825566905258],
        [106.07278267990101, 29.87054726560277, 29.994688720315928],
        [106.07278267990101, 29.87054726560277, 29.994688720315928],
        [106.07278267990101, 29.870377832058526, 29.994688720315928],
        [106.07278267990101, 29.870377832058526, 29.994688720315928],
        [106.07289289895658, 29.86964957820228, 22.949087723719778],
        [106.07289289895658, 29.86964957820228, 22.949087723719778],
        [106.07289289895658, 29.869488321611886, 22.949087723719778],
        [106.07289289895658, 29.869488321611886, 22.949087723719778],
        [106.07279011020752, 29.869504407240406, 32.78062420485228],
        [106.07279011020752, 29.869504407240406, 32.78062420485228],
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
            "title": "一期源水",
            "state": "",
            "type": "data",
            "bimID": "",
            "data": [{
                    "text": "源水流量",
                    "value": function() {
                        var value = '--';
                        oSediment.data.map(function(item) {
                            if (item.opcid == 'yqysll') {
                                value = parseFloat(item.opcvalue).toFixed(2);
                            }
                        })
                        return value;
                    },
                    "unit": "m³/h"
                },
                {
                    "text": "源水浊度",
                    "value": function() {
                        var value = '--';
                        oSediment.data.map(function(item) {
                            if (item.opcid == 'yqyszd') {
                                value = parseFloat(item.opcvalue).toFixed(2);
                            }
                        })
                        return value;
                    },
                    "unit": "NTU"
                },
                {
                    "text": "源水PH",
                    "value": function() {
                        var value = '--';
                        oSediment.data.map(function(item) {
                            if (item.opcid == 'yqysph') {
                                value = parseFloat(item.opcvalue).toFixed(2);
                            }
                        })
                        return value;
                    },
                    "unit": ""
                }
            ],
            "position": [106.0725644149, 29.8706000869, 11.2],
            "orientation": [180, -30, 10],
            "showUpTime": 17,
            "showUpCameraDistance": 100,
            "labelID": "Sediment-label-2",
            "pid": "03",
            "system": "Sediment"
        },
        {
            "title": "二期源水",
            "state": "",
            "type": "data",
            "bimID": "",
            "data": [{
                    "text": "源水流量",
                    "value": function() {
                        var value = '--';
                        oSediment.data.map(function(item) {
                            if (item.opcid == 'eqysll') {
                                value = parseFloat(item.opcvalue).toFixed(2);
                            }
                        })
                        return value;
                    },
                    "unit": "m³/h"
                },
                {
                    "text": "源水浊度",
                    "value": function() {
                        var value = '--';
                        oSediment.data.map(function(item) {
                            if (item.opcid == 'eqyszd') {
                                value = parseFloat(item.opcvalue).toFixed(2);
                            }
                        })
                        return value;
                    },
                    "unit": "NTU"
                },
                {
                    "text": "源水PH",
                    "value": function() {
                        var value = '--';
                        oSediment.data.map(function(item) {
                            if (item.opcid == 'eqysph') {
                                value = parseFloat(item.opcvalue).toFixed(2);
                            }
                        })
                        return value;
                    },
                    "unit": ""
                }
            ],
            "position": [106.0728362922, 29.8706000869, 11.2],
            "orientation": [180, -30, 10],
            "showUpTime": 17,
            "showUpCameraDistance": 100,
            "labelID": "Sediment-label-3",
            "pid": "03",
            "system": ""
        },
        {
            "title": "一期滤前",
            "state": "",
            "type": "data",
            "bimID": "",
            "data": [{
                "text": "待滤浊度",
                "value": function() {
                    var value = '--';
                    oSediment.data.map(function(item) {
                        if (item.opcid == 'yqdlzd') {
                            value = parseFloat(item.opcvalue).toFixed(2);
                        }
                    })
                    return value;
                },
                "unit": "NTU"
            }],
            "position": [106.0725044149, 29.8694229409, 16.5],
            "orientation": [180, -30, 10],
            "showUpTime": 23,
            "showUpCameraDistance": 100,
            "labelID": "Sediment-label-4",
            "pid": "03",
            "system": ""
        },
        {
            "title": "二期滤前",
            "state": "",
            "type": "data",
            "bimID": "",
            "data": [{
                "text": "待滤浊度",
                "value": function() {
                    var value = '--';
                    oSediment.data.map(function(item) {
                        if (item.opcid == 'eqdlzd') {
                            value = parseFloat(item.opcvalue).toFixed(2);
                        }
                    })
                    return value;
                },
                "unit": "NTU"
            }],
            "position": [106.0728514090, 29.8694229409, 16.5],
            "orientation": [180, -30, 10],
            "showUpTime": 23,
            "showUpCameraDistance": 100,
            "labelID": "Sediment-label-5",
            "pid": "03",
            "system": ""
        },
    ],
    textLabelList: [{
            "name": "一期源水管道",
            "id": "sediment-01",
            "position": [106.0725681397, 29.8705319959, 13.3]
        },
        {
            "name": "二期源水管道",
            "id": "sediment-02",
            "position": [106.0728296903, 29.8705642626, 13.3]
        },
        {
            "name": "去滤池管道",
            "id": "sediment-03",
            "position": [106.0729521736, 29.8692525697, 13]
        },
    ],
    createFlowLine: function() {
        if (!oDefault.viewer) {
            return
        }
        oDefault.waterFlowArrowArr = [];
        //1
        var positions = Cesium.Cartesian3.fromDegreesArray([
            106.0728148448, 29.8705780689,
            106.0728148448, 29.8705683593,
            106.0728208448, 29.8705683593,
            106.0728208448, 29.8705780689
        ]);
        var p3 = oDefault.viewer.entities.add({
            // show: false,
            polygon: {
                hierarchy: {
                    positions: positions
                },
                height: 10.5,
                stRotation: Cesium.Math.toRadians(180),
                material: new Cesium.PolylineTrailLinkMaterialPropertyV(Cesium.Color.WHITE, 1000)
            }
        })
        oDefault.waterFlowArrowArr.push(p3);
        //2
        var positions = Cesium.Cartesian3.fromDegreesArray([
            106.0725472035, 29.8705612225,
            106.0725472035, 29.8705473030,
            106.0725532460, 29.8705473030,
            106.0725532460, 29.8705612225
        ]);
        var p3 = oDefault.viewer.entities.add({
            // show: false,
            polygon: {
                hierarchy: {
                    positions: positions
                },
                height: 10.5,
                stRotation: Cesium.Math.toRadians(180),
                material: new Cesium.PolylineTrailLinkMaterialPropertyV(Cesium.Color.WHITE, 1000)
            }
        })
        oDefault.waterFlowArrowArr.push(p3);

        //3
        var positions = Cesium.Cartesian3.fromDegreesArray([
            106.0728370505, 29.8705196639,
            106.0728450800, 29.8705196639,
            106.0728450800, 29.8705234438,
            106.0728370505, 29.8705234438
        ]);
        var p3 = oDefault.viewer.entities.add({
            // show: false,
            polygon: {
                hierarchy: {
                    positions: positions
                },
                height: 12.5,
                stRotation: Cesium.Math.toRadians(90),
                material: new Cesium.PolylineTrailLinkMaterialPropertyV(Cesium.Color.WHITE, 1000)
            }
        })
        oDefault.waterFlowArrowArr.push(p3);

        //4
        var positions = Cesium.Cartesian3.fromDegreesArray([
            106.0728260800, 29.8705234438,
            106.0728180505, 29.8705234438,
            106.0728180505, 29.8705196639,
            106.0728260800, 29.8705196639
        ]);
        var p3 = oDefault.viewer.entities.add({
            // show: false,
            polygon: {
                hierarchy: {
                    positions: positions
                },
                height: 12.5,
                stRotation: Cesium.Math.toRadians(-90),
                material: new Cesium.PolylineTrailLinkMaterialPropertyV(Cesium.Color.WHITE, 1000)
            }
        })
        oDefault.waterFlowArrowArr.push(p3);

        //5
        var positions = Cesium.Cartesian3.fromDegreesArray([
            106.0728600986, 29.8705176338,
            106.0728600986, 29.8705120036,
            106.0728656275, 29.8705120036,
            106.0728656275, 29.8705176338
        ]);
        var p3 = oDefault.viewer.entities.add({
            // show: false,
            polygon: {
                hierarchy: {
                    positions: positions
                },
                height: 14,
                stRotation: Cesium.Math.toRadians(180),
                material: new Cesium.PolylineTrailLinkMaterialPropertyV(Cesium.Color.WHITE, 1000)
            }
        })
        oDefault.waterFlowArrowArr.push(p3);

        //6
        var positions = Cesium.Cartesian3.fromDegreesArray([
            106.0727950986, 29.8705176338,
            106.0727950986, 29.8705120036,
            106.0728006275, 29.8705120036,
            106.0728006275, 29.8705176338
        ]);
        var p3 = oDefault.viewer.entities.add({
            // show: false,
            polygon: {
                hierarchy: {
                    positions: positions
                },
                height: 14.3,
                stRotation: Cesium.Math.toRadians(180),
                material: new Cesium.PolylineTrailLinkMaterialPropertyV(Cesium.Color.WHITE, 1000)
            }
        })
        oDefault.waterFlowArrowArr.push(p3);

        //7
        var positions = Cesium.Cartesian3.fromDegreesArray([
            106.0728126461, 29.8704511590,
            106.0728126461, 29.8704351696,
            106.0728205341, 29.8704351696,
            106.0728205341, 29.8704511590
        ]);
        var p3 = oDefault.viewer.entities.add({
            // show: false,
            polygon: {
                hierarchy: {
                    positions: positions
                },
                height: 15.5,
                stRotation: Cesium.Math.toRadians(180),
                material: new Cesium.PolylineTrailLinkMaterialPropertyV(Cesium.Color.WHITE, 1000)
            }
        })
        oDefault.waterFlowArrowArr.push(p3);
        //8
        var positions = Cesium.Cartesian3.fromDegreesArray([
            106.0728386461, 29.8704511590,
            106.0728386461, 29.8704351696,
            106.0728465341, 29.8704351696,
            106.0728465341, 29.8704511590
        ]);
        var p3 = oDefault.viewer.entities.add({
            // show: false,
            polygon: {
                hierarchy: {
                    positions: positions
                },
                height: 15.5,
                stRotation: Cesium.Math.toRadians(180),
                material: new Cesium.PolylineTrailLinkMaterialPropertyV(Cesium.Color.WHITE, 1000)
            }
        })
        oDefault.waterFlowArrowArr.push(p3);

        //9
        var positions = Cesium.Cartesian3.fromDegreesArray([
            106.0728126461, 29.8701511590,
            106.0728126461, 29.8701351696,
            106.0728205341, 29.8701351696,
            106.0728205341, 29.8701511590
        ]);
        var p3 = oDefault.viewer.entities.add({
            // show: false,
            polygon: {
                hierarchy: {
                    positions: positions
                },
                height: 15.5,
                stRotation: Cesium.Math.toRadians(180),
                material: new Cesium.PolylineTrailLinkMaterialPropertyV(Cesium.Color.WHITE, 1000)
            }
        })
        oDefault.waterFlowArrowArr.push(p3);
        //10
        var positions = Cesium.Cartesian3.fromDegreesArray([
            106.0728386461, 29.8701511590,
            106.0728386461, 29.8701351696,
            106.0728465341, 29.8701351696,
            106.0728465341, 29.8701511590
        ]);
        var p3 = oDefault.viewer.entities.add({
            // show: false,
            polygon: {
                hierarchy: {
                    positions: positions
                },
                height: 15.5,
                stRotation: Cesium.Math.toRadians(180),
                material: new Cesium.PolylineTrailLinkMaterialPropertyV(Cesium.Color.WHITE, 1000)
            }
        })
        oDefault.waterFlowArrowArr.push(p3);
        //11
        var positions = Cesium.Cartesian3.fromDegreesArray([
            106.0728126461, 29.8698511590,
            106.0728126461, 29.8698351696,
            106.0728205341, 29.8698351696,
            106.0728205341, 29.8698511590
        ]);
        var p3 = oDefault.viewer.entities.add({
            // show: false,
            polygon: {
                hierarchy: {
                    positions: positions
                },
                height: 15.5,
                stRotation: Cesium.Math.toRadians(180),
                material: new Cesium.PolylineTrailLinkMaterialPropertyV(Cesium.Color.WHITE, 1000)
            }
        })
        oDefault.waterFlowArrowArr.push(p3);
        //12
        var positions = Cesium.Cartesian3.fromDegreesArray([
            106.0728386461, 29.8698511590,
            106.0728386461, 29.8698351696,
            106.0728465341, 29.8698351696,
            106.0728465341, 29.8698511590
        ]);
        var p3 = oDefault.viewer.entities.add({
            // show: false,
            polygon: {
                hierarchy: {
                    positions: positions
                },
                height: 15.5,
                stRotation: Cesium.Math.toRadians(180),
                material: new Cesium.PolylineTrailLinkMaterialPropertyV(Cesium.Color.WHITE, 1000)
            }
        })
        oDefault.waterFlowArrowArr.push(p3);

        //13
        var positions = Cesium.Cartesian3.fromDegreesArray([
            106.0729054101, 29.8695832407,
            106.0729054101, 29.8695783193,
            106.0729074467, 29.8695783193,
            106.0729074467, 29.8695832407
        ]);
        var p3 = oDefault.viewer.entities.add({
            // show: false,
            polygon: {
                hierarchy: {
                    positions: positions
                },
                height: 15,
                // outline: true,
                stRotation: Cesium.Math.toRadians(180),
                material: new Cesium.PolylineTrailLinkMaterialPropertyV(Cesium.Color.WHITE, 1000)
            }
        })
        oDefault.waterFlowArrowArr.push(p3);
        //14
        var positions = Cesium.Cartesian3.fromDegreesArray([
            106.0729054101, 29.8694432407,
            106.0729054101, 29.8694383193,
            106.0729084467, 29.8694383193,
            106.0729084467, 29.8694432407
        ]);
        var p3 = oDefault.viewer.entities.add({
            // show: false,
            polygon: {
                hierarchy: {
                    positions: positions
                },
                height: 15,
                // outline:true,
                stRotation: Cesium.Math.toRadians(180),
                material: new Cesium.PolylineTrailLinkMaterialPropertyV(Cesium.Color.WHITE, 1000)
            }
        })
        oDefault.waterFlowArrowArr.push(p3);
        //15
        var positions = Cesium.Cartesian3.fromDegreesArray([
            106.0728884101, 29.8694432407,
            106.0728884101, 29.8694383193,
            106.0728914467, 29.8694383193,
            106.0728914467, 29.8694432407
        ]);
        var p3 = oDefault.viewer.entities.add({
            // show: false,
            polygon: {
                hierarchy: {
                    positions: positions
                },
                height: 15,
                // outline: true,
                stRotation: Cesium.Math.toRadians(180),
                material: new Cesium.PolylineTrailLinkMaterialPropertyV(Cesium.Color.WHITE, 1000)
            }
        })
        oDefault.waterFlowArrowArr.push(p3);
        //16
        var positions = Cesium.Cartesian3.fromDegreesArray([
            106.0728554101, 29.8694432407,
            106.0728554101, 29.8694383193,
            106.0728584467, 29.8694383193,
            106.0728584467, 29.8694432407
        ]);
        var p3 = oDefault.viewer.entities.add({
            // show: false,
            polygon: {
                hierarchy: {
                    positions: positions
                },
                height: 15,
                // outline: true,
                stRotation: Cesium.Math.toRadians(180),
                material: new Cesium.PolylineTrailLinkMaterialPropertyV(Cesium.Color.WHITE, 1000)
            }
        })
        oDefault.waterFlowArrowArr.push(p3);

        //17
        var positions = Cesium.Cartesian3.fromDegreesArray([
            106.0728384101, 29.8694432407,
            106.0728384101, 29.8694383193,
            106.0728414467, 29.8694383193,
            106.0728414467, 29.8694432407
        ]);
        var p3 = oDefault.viewer.entities.add({
            // show: false,
            polygon: {
                hierarchy: {
                    positions: positions
                },
                height: 15,
                // outline: true,
                stRotation: Cesium.Math.toRadians(180),
                material: new Cesium.PolylineTrailLinkMaterialPropertyV(Cesium.Color.WHITE, 1000)
            }
        })
        oDefault.waterFlowArrowArr.push(p3);
        //18
        var positions = Cesium.Cartesian3.fromDegreesArray([
            106.0728174101, 29.8694432407,
            106.0728174101, 29.8694383193,
            106.0728204467, 29.8694383193,
            106.0728204467, 29.8694432407
        ]);
        var p3 = oDefault.viewer.entities.add({
            // show: false,
            polygon: {
                hierarchy: {
                    positions: positions
                },
                height: 15,
                // outline: true,
                stRotation: Cesium.Math.toRadians(180),
                material: new Cesium.PolylineTrailLinkMaterialPropertyV(Cesium.Color.WHITE, 1000)
            }
        })
        oDefault.waterFlowArrowArr.push(p3);
        //19
        var positions = Cesium.Cartesian3.fromDegreesArray([
            106.0728014101, 29.8694432407,
            106.0728014101, 29.8694383193,
            106.0728044467, 29.8694383193,
            106.0728044467, 29.8694432407
        ]);
        var p3 = oDefault.viewer.entities.add({
            // show: false,
            polygon: {
                hierarchy: {
                    positions: positions
                },
                height: 15,
                // outline: true,
                stRotation: Cesium.Math.toRadians(180),
                material: new Cesium.PolylineTrailLinkMaterialPropertyV(Cesium.Color.WHITE, 1000)
            }
        })
        oDefault.waterFlowArrowArr.push(p3);

        //20
        var positions = Cesium.Cartesian3.fromDegreesArray([
            106.0727684101, 29.8694432407,
            106.0727684101, 29.8694383193,
            106.0727714467, 29.8694383193,
            106.0727714467, 29.8694432407
        ]);
        var p3 = oDefault.viewer.entities.add({
            // show: false,
            polygon: {
                hierarchy: {
                    positions: positions
                },
                height: 15,
                // outline: true,
                stRotation: Cesium.Math.toRadians(180),
                material: new Cesium.PolylineTrailLinkMaterialPropertyV(Cesium.Color.WHITE, 1000)
            }
        })
        oDefault.waterFlowArrowArr.push(p3);

        //21
        var positions = Cesium.Cartesian3.fromDegreesArray([
            106.0727524101, 29.8694432407,
            106.0727524101, 29.8694383193,
            106.0727554467, 29.8694383193,
            106.0727554467, 29.8694432407
        ]);
        var p3 = oDefault.viewer.entities.add({
            // show: false,
            polygon: {
                hierarchy: {
                    positions: positions
                },
                height: 15,
                // outline: true,
                stRotation: Cesium.Math.toRadians(180),
                material: new Cesium.PolylineTrailLinkMaterialPropertyV(Cesium.Color.WHITE, 1000)
            }
        })
        oDefault.waterFlowArrowArr.push(p3);


        //22
        var positions = Cesium.Cartesian3.fromDegreesArray([
            106.0728202097, 29.8693742420,
            106.0728202097, 29.8693600511,
            106.0728283094, 29.8693600511,
            106.0728283094, 29.8693742420
        ]);
        var p3 = oDefault.viewer.entities.add({
            // show: false,
            polygon: {
                hierarchy: {
                    positions: positions
                },
                height: 9.5,
                // outline:true,
                stRotation: Cesium.Math.toRadians(180),
                material: new Cesium.PolylineTrailLinkMaterialPropertyV(Cesium.Color.WHITE, 1000)
            }
        })
        oDefault.waterFlowArrowArr.push(p3);
        //23
        var positions = Cesium.Cartesian3.fromDegreesArray([
            106.0725102097, 29.8693742420,
            106.0725102097, 29.8693600511,
            106.0725183094, 29.8693600511,
            106.0725183094, 29.8693742420
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
    },
    createTextLabels: function() {
        if (!oDefault.viewer) {
            return
        }
        var viewer = oDefault.viewer;
        var data = oSediment.textLabelList;
        data.forEach(function(item) {
            var trackPop = undefined;
            var label = document.createElement('div');
            oDefault.textLabelSigns.push(label)
            label.setAttribute('id', item.id);
            label.setAttribute('class', 'label-info');
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
        $('#sediment-01').css('display', 'block');
        $('#sediment-02').css('display', 'block');
        $('#sediment-03').css('display', 'block');
    },
    createDataLabels: function() {
        var viewer = oDefault.viewer;
        if (viewer) {
            var labelData = oSediment.dataLabelList;
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
        oSediment.loadData();
        oSediment.startDataRoll();
    },
    loadData: function() {
        var viewer = oDefault.viewer;
        oSediment.data = oDefault.realTimeData;
        var labelData = oSediment.dataLabelList;
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
            oSediment.startDataRoll();
        }
        controlDiv2.onclick = function() {
                controlDiv2.className = 'data-roll-control-div active';
                controlDiv1.className = 'data-roll-control-div';
                oSediment.stopDataRoll();
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
            oSediment.audio.pause();
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
                    oSediment.removeCameraEvents();
                    oSediment.startFly();
                    oSediment.audio.play();
                } else {

                    oSediment.removeCameraEvents();
                    oSediment.restartFly();
                    oSediment.audio.play();
                }
            } else {
                btnPlay.className = 'system-fly-btn system-play';
                oSediment.pauseFly();
                oSediment.restoreCameraEvents();
                oSediment.audio.pause();
            }
        }

        var btnForward = document.createElement('div');
        systemFlyPanelBtnGroup.appendChild(btnForward);
        btnForward.setAttribute('id', 'btnForward');
        btnForward.className = 'system-fly-btn system-forward';
        btnForward.onclick = function() {
            oSediment.audio.pause();
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
            oSediment.dataLabelList.map(function(item) {
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
        audio.src = "./Audios/sediment.mp3";
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
    showSedimentSystem: function() {
        if (!oDefault.configData) {
            return
        }
        //禁用工具栏
        $('#i-n-menuimg').css('pointer-events', 'none')
        $('#i-n-layers').css('pointer-events', 'none')

        //		
        oDefault.currentSystem = 'Sediment';
        oDefault.layerList.forEach(function(layer) {
                layer.layer.show = false;
            })
            //视角
        var initialPosition = Cesium.Cartesian3.fromDegrees(oSediment.sedimentSystem.cameraPosition[0],
            oSediment.sedimentSystem.cameraPosition[
                1], oSediment.sedimentSystem.cameraPosition[2]);
        var initialOrientation = new Cesium.HeadingPitchRoll.fromDegrees(oSediment.sedimentSystem.cameraHeadingPitchRoll[
                0], oSediment.sedimentSystem
            .cameraHeadingPitchRoll[1], oSediment.sedimentSystem.cameraHeadingPitchRoll[2]);
        oDefault.viewer.scene.camera.setView({
            destination: initialPosition,
            orientation: initialOrientation,
            endTransform: Cesium.Matrix4.IDENTITY
        });

        oDefault.tilesetList.forEach(function(tileset) {
            if (tileset.type == 'tujian') {
                if (tileset.id == 'tujian-03') {
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
                if (tileset.id == 'jidian-03' || tileset.id == 'jidian-04') {
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
            var showList = ['13020008-沉淀系统原水管道', '03020003-沉淀池管道', '04020161-PH投药器输出管道2#到一期沉淀池', '04020162-PH投药器输出管道2#到二期沉淀池',
                '04020163-输碱管道到二期沉淀池', '04020160-输碱管道到沉淀池', '13020037-絮凝沉淀池分割阀', '13020047-沉淀池与滤池间管网'
            ];
            var hideList = ['03010035-沉淀池雨顶2#', '03010009-沉淀池雨顶1#', '03010008-沉淀池柱子2#', '03010046-沉淀池柱子1#',
                '03010011-沉淀池顶钢结构2#', '03010010-沉淀池顶钢结构1#', '03010034-沉淀池水面2#', '03010001-沉淀池水面1#', '03010021-沉淀池网格板4#',
                '03010018-沉淀池网格板1#', '03010019-沉淀池网格板2#', '03010020-沉淀池网格板3#', '03010022-沉淀池网格板5#', '03010039--沉淀池水面5#',
                '03010038-沉淀池水面4#', '03010037-沉淀池水面3#', '03010036-沉淀池栏杆2#'
            ];
            var alphaList = []
            var content = tile.content;
            var featuresLength = content.featuresLength;
            var url = tile.tileset.url;
            if (url.indexOf('tujian/03') >= 0) {
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
            if (url.indexOf('jidian/03') >= 0) {
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
            if (url.indexOf('guanxian') >= 0 || url.indexOf('jidian/04') >= 0) {
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

        oSediment.initSedimentSystem();
    },
    pauseFly: function() {
        //暂停时间
        oSediment.restoreCameraEvents();
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
        oSediment.startFly();
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
        oSediment.startDataRoll();
        //显示水流箭头
        oDefault.waterFlowArrowArr.map(function(item) {
            item.show = true;
        })
        oDefault.waterSurEntityArr.map(function(item) {
                item.entity.show = true;
            })
            //恢复模型位置
        oDefault.tilesetList.map(function(item) {
                if (item.id == 'jidian-03') {
                    item.tilesetList.map(function(tile) {
                        tile.tileset.modelMatrix = tile.matrix;
                    })
                }
            })
            //飞行结束 恢复事件 清除数据及面板
        oSediment.restoreCameraEvents();
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
        oSediment.createFlyPanel();
        oDefault.flyData.pauseData.currentTime = null;
        oDefault.flyData.pauseData.cameraOrientation = [];
        oDefault.flyData.pauseData.cameraPosition = [];
        //设置角度
        var initialPosition = Cesium.Cartesian3.fromDegrees(106.07137443385432, 29.869965888498502, 121.12609031043017);
        var initialOrientation = new Cesium.HeadingPitchRoll.fromDegrees(90.02, -40, 360.00);
        oDefault.viewer.scene.camera.setView({
            destination: initialPosition,
            orientation: initialOrientation,
            endTransform: Cesium.Matrix4.IDENTITY
        });
        oSediment.audio.pause();
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
        oSediment.stopDataRoll();
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
        oSediment.createWaterSur();
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
        if (oSediment.flyPositions.length > 0) {
            for (var i = 0; i < oSediment.flyPositions.length; i++) {
                var x = oSediment.flyPositions[i][0];
                var y = oSediment.flyPositions[i][1];
                var z = oSediment.flyPositions[i][2];
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
                    addStep('distance', 150, 0.15);
                }
                if (i == 2) {
                    addStep('distance', 100, 0.15);
                }
                if (i == 3) {
                    addStep('seconds', 4, 0.15);
                }
                if (i == 4) {
                    addStep('distance', 20, 0.15);
                }
                if (i == 5) {
                    addStep('seconds', 5, 0.15);
                }
                if (i == 6) {
                    addStep('distance', 40, 0.15);
                }
                if (i == 7) {
                    addStep('seconds', 0.5, 0.15);
                }
                if (i == 8) {
                    addStep('distance', 60, 0.15);
                }
                if (i == 9) {
                    addStep('seconds', 2, 0.15);
                }
                if (i == 10) {
                    addStep('distance', 50, 0.15);
                }
                if (i == 11) {
                    addStep('seconds', 2, 0.15);
                }
                if (i == 12) {
                    addStep('distance', 50, 0.15);
                }
                if (i == 13) {
                    addStep('seconds', 3, 0.15);
                }
                if (i == 14) {
                    addStep('distance', 50, 0.15);
                }
                if (i == 15) {
                    addStep('seconds', 2, 0.15);
                }
                if (i == 16) {
                    addStep('distance', 20, 0.15);
                }
            }
            return property;
        }
        var start = Cesium.JulianDate.fromDate(new Date(2018, 3, 15, 16));
        var stop = Cesium.JulianDate.addSeconds(start, 64 * 0.15, new Cesium.JulianDate());
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
        oSediment.waterSurEntityTimerangeArr = [{
                name: 'sediment-watersur-1',
                timeRange: timesArr[2].secondsOfDay
            },
            {
                name: 'sediment-watersur-2',
                timeRange: timesArr[4].secondsOfDay + 0.05
            },
            {
                name: 'sediment-watersur-3',
                timeRange: timesArr[4].secondsOfDay + 0.05
            },
            {
                name: 'sediment-watersur-4',
                timeRange: timesArr[5].secondsOfDay - 0.15
            },
            {
                name: 'sediment-watersur-5',
                timeRange: timesArr[5].secondsOfDay
            },
            {
                name: 'sediment-watersur-6',
                timeRange: timesArr[8].secondsOfDay
            },
            {
                name: 'sediment-watersur-8',
                timeRange: timesArr[10].secondsOfDay
            },
            {
                name: 'sediment-watersur-9',
                timeRange: timesArr[10].secondsOfDay
            }
        ];
        oSediment.orientationArr = [{
                start: timesArr[0].secondsOfDay,
                stop: timesArr[2].secondsOfDay,
                orientation: {
                    heading: 124.57,
                    pitch: -39.79,
                    range: 0.1
                }
            },
            {
                start: timesArr[2].secondsOfDay,
                stop: timesArr[5].secondsOfDay,
                orientation: {
                    heading: 124.57,
                    pitch: -70.79,
                    range: 0.1
                }
            },
            {
                start: timesArr[5].secondsOfDay,
                stop: timesArr[6].secondsOfDay,
                orientation: {
                    heading: 165.57,
                    pitch: -40.79,
                    range: 0.1
                }
            },
            {
                start: timesArr[6].secondsOfDay,
                stop: timesArr[9].secondsOfDay,
                orientation: {
                    heading: 165.57,
                    pitch: -20.79,
                    range: 0.1
                }
            },
            {
                start: timesArr[9].secondsOfDay,
                stop: timesArr[13].secondsOfDay,
                orientation: {
                    heading: 165.57,
                    pitch: -40.79,
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
            viewFrom: new Cesium.Cartesian3(-1.45, 1, 1.45),
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
                oSediment.waterSurEntityTimerangeArr.map(function(arr) {
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
            oSediment.timeInputRange = true;
            oSediment.createWaterSur();
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
                    oSediment.waterSurEntityTimerangeArr.map(function(arr) {
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
                oSediment.timeInputRange = false;
                // 方向			
                var cTime = oDefault.viewer.clockViewModel.currentTime;
                oSediment.orientationArr.forEach(function(item) {
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
                    oSediment.audio.play();
                }
            } else {
                oSediment.startFly();
                oDefault.viewer.clock.shouldAnimate = false;
                var percent = rangeInput.value / 100;
                var addsec = (timeArr[timeArr.length - 1].secondsOfDay - timeArr[0].secondsOfDay) * percent;
                var currentTime = Cesium.JulianDate.addSeconds(start, addsec, new Cesium.JulianDate());
                oDefault.viewer.clockViewModel.currentTime = currentTime;
                oSediment.timeInputRange = false;
                var cTime = oDefault.viewer.clockViewModel.currentTime;
                oSediment.orientationArr.forEach(function(item) {
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
                oSediment.pauseFly();
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
        for (var i = 0; i < oSediment.dataLabelList.length; i++) {
            dataShowMark.push(true);
        }
        //转向标志
        function turn(index, currenttime, timepoint, type, begindeg, beginheading, perdeg) {
            this.flag = {}

            this.swerve = function() {
                if (currenttime >= begin && currenttime <= end && this.flag) {
                    this.flag = false;
                    if (oDefault.viewer.clock.multiplier > 0) {
                        swerve(begindeg, perdeg, beginheading, 10);
                    } else {
                        swerve(begindeg + perdeg * 10, -perdeg, beginheading, 10);
                    }
                } else if (currenttime < begin || currenttime > end) {
                    this.flag = true;
                }
            }

            // var turn=true;
            // var ctime =timepoint;
            // var begin = (ctime).toFixed(2);
            // var end = (ctime+0.05).toFixed(2);
            // if(type=='swerve'){
            // 	if (currenttime >= begin && currenttime <= end && turn) {
            // 		turn = false;
            // 		if (oDefault.viewer.clock.multiplier > 0) {
            // 			swerve(begindeg, perdeg, beginheading, 10);
            // 		} else {
            // 			swerve(begindeg+perdeg*10, -perdeg, beginheading, 10);
            // 		}
            // 	} else if (currenttime < begin || currenttime > end) {
            // 		turn = true;
            // 	}
            // }
            // if(type=='swerveV'){
            // 	if (currenttime >= begin && currenttime <= end && turn) {
            // 		turn = false;
            // 		if (oDefault.viewer.clock.multiplier > 0) {
            // 			swerveV(begindeg, perdeg, beginheading, 10);
            // 		} else {
            // 			swerveV(begindeg, -perdeg, beginheading+perdeg*10, 10);
            // 		}
            // 	} else if (currenttime < begin || currenttime > end) {
            // 		turn = true;
            // 	}
            // }

        }
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
                (-40) * dt,
                gravityScratch
            );
            p.velocity = Cesium.Cartesian3.add(
                p.velocity,
                gravityScratch,
                p.velocity
            );
        }

        function createParticle(position) {
            var ellipsoid = oDefault.viewer.scene.globe.ellipsoid;
            var viewModel4 = {
                emissionRate: 1500.0,
                gravity: -10.0,
                minimumParticleLife: 2.2,
                maximumParticleLife: 2.2,
                minimumSpeed: 2.0,
                maximumSpeed: 3.0,
                startScale: 4.0,
                endScale: 1.0,
                particleSize: 0.5,
            };
            var color = [73, 211, 211, 50];
            var color1 = new Cesium.Color.fromBytes(color[0], color[1], color[2], 50);
            var color2 = new Cesium.Color.fromBytes(color[0], color[1], color[2], 0);
            var position4 = Cesium.Cartesian3.fromDegrees(position[0], position[1], position[2], ellipsoid)
            var particleSystem4 = oDefault.viewer.scene.primitives.add(
                new Cesium.ParticleSystem({
                    image: "./Images/water.png",
                    startColor: color1,
                    endColor: color2,
                    startScale: viewModel4.startScale,
                    endScale: viewModel4.endScale,
                    minimumParticleLife: viewModel4.minimumParticleLife,
                    maximumParticleLife: viewModel4.maximumParticleLife,
                    minimumSpeed: viewModel4.minimumSpeed,
                    maximumSpeed: viewModel4.maximumSpeed,
                    imageSize: new Cesium.Cartesian2(
                        viewModel4.particleSize,
                        viewModel4.particleSize
                    ),
                    emissionRate: viewModel4.emissionRate,
                    lifetime: 16.0,
                    emitter: new Cesium.CircleEmitter(0.08),
                    modelMatrix: new Cesium.Matrix4.fromTranslation(position),
                    updateCallback: applyGravity1,
                })
            );
            var rotationX = Cesium.Matrix4.fromRotationTranslation(Cesium.Matrix3.fromRotationY(Cesium.Math.toRadians(-90)));
            var mat4 = Cesium.Transforms.eastNorthUpToFixedFrame(position4);
            Cesium.Matrix4.multiply(mat4, rotationX, mat4);
            particleSystem4.modelMatrix = mat4;
            return particleSystem4
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
        var i9 = 0;
        var translation1 = Cesium.Matrix4.fromTranslation(new Cesium.Cartesian3(coor[0] / 400, coor[1] /
            400,
            coor[2] / 400))
        var translation2 = Cesium.Matrix4.fromTranslation(new Cesium.Cartesian3(coor[0] / 100, coor[1] /
            100,
            coor[2] / 100))
        var translation3 = Cesium.Matrix4.fromTranslation(new Cesium.Cartesian3(coor[0] / 100, coor[1] /
            100,
            coor[2] / 100))
        var translation4 = Cesium.Matrix4.fromTranslation(new Cesium.Cartesian3(coor[0] / 300, coor[1] /
            300,
            coor[2] / 300))
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
        var translation9 = Cesium.Matrix4.fromTranslation(new Cesium.Cartesian3(coor[0] / 400, coor[1] /
            400,
            coor[2] / 400))
        oDefault.clockTickEvent = function() {
            if (entityFly.position) {
                var currentPosition = entityFly.position.getValue(oDefault.viewer.clock.currentTime);
                var ellipsoid = oDefault.viewer.scene.globe.ellipsoid;
                if (!currentPosition) {
                    //结束飞行
                    oSediment.stopFly();
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
                        oSediment.stopFly();
                    }
                    //进度条和时间更新
                    if (!oSediment.timeInputRange) {
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

                    ctime = timesArr[0].secondsOfDay;
                    begin = (ctime + 0.1).toFixed(2);
                    if (a == begin) {
                        oDefault.waterFlowArrowArr[0].show = true;
                        oDefault.waterFlowArrowArr[1].show = true;
                    }

                    ctime = timesArr[2].secondsOfDay;
                    begin = (ctime).toFixed(2);
                    if (a == begin) {
                        oDefault.waterFlowArrowArr[2].show = true;
                        oDefault.waterFlowArrowArr[3].show = true;
                        oDefault.waterSurEntityArr.map(function(item) {
                            if (item.name == 'sediment-watersur-1') {
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

                        var scene = viewer.scene;
                        var ellipsoid = viewer.scene.globe.ellipsoid;
                        var deg = 90
                        var rotationX = Cesium.Matrix4.fromRotationTranslation(Cesium.Matrix3.fromRotationX(Cesium.Math.toRadians(
                            deg)));
                        //1
                        var viewModel1 = {
                            emissionRate: 2500.0,
                            gravity: -10.0,
                            minimumParticleLife: 2.2,
                            maximumParticleLife: 2.2,
                            minimumSpeed: 2.0,
                            maximumSpeed: 3.0,
                            startScale: 6.0,
                            endScale: 1.0,
                            particleSize: 0.5,
                        };
                        var color = [68, 177, 255, 150];
                        var color1 = new Cesium.Color.fromBytes(color[0], color[1], color[2], 50);
                        var color2 = new Cesium.Color.fromBytes(color[0], color[1], color[2], 0);
                        var position1 = Cesium.Cartesian3.fromDegrees(106.0728304500, 29.8705334255, 13.5, ellipsoid)
                        var particleSystem1 = scene.primitives.add(
                            new Cesium.ParticleSystem({
                                image: "./Images/water.png",
                                startColor: color1,
                                endColor: color2,
                                startScale: viewModel1.startScale,
                                endScale: viewModel1.endScale,
                                minimumParticleLife: viewModel1.minimumParticleLife,
                                maximumParticleLife: viewModel1.maximumParticleLife,
                                minimumSpeed: viewModel1.minimumSpeed,
                                maximumSpeed: viewModel1.maximumSpeed,
                                imageSize: new Cesium.Cartesian2(
                                    viewModel1.particleSize,
                                    viewModel1.particleSize
                                ),
                                emissionRate: viewModel1.emissionRate,
                                lifetime: 16.0,
                                emitter: new Cesium.CircleEmitter(0.5),
                                modelMatrix: new Cesium.Matrix4.fromTranslation(position),
                                updateCallback: applyGravity,
                            })
                        );
                        var mat1 = Cesium.Transforms.eastNorthUpToFixedFrame(position1);
                        Cesium.Matrix4.multiply(mat1, rotationX, mat1);
                        particleSystem1.modelMatrix = mat1;
                        oDefault.waterParticleArr.push({
                            pid: 'tujian-03',
                            entity: particleSystem1,
                            name: 'particle-1'
                        })

                        // //2
                        var viewModel2 = {
                            emissionRate: 1500.0,
                            gravity: -10.0,
                            minimumParticleLife: 2.2,
                            maximumParticleLife: 2.2,
                            minimumSpeed: 2.0,
                            maximumSpeed: 3.0,
                            startScale: 4.0,
                            endScale: 1.0,
                            particleSize: 0.5,
                        };
                        var color = [255, 170, 0, 50];
                        var color1 = new Cesium.Color.fromBytes(color[0], color[1], color[2], 50);
                        var color2 = new Cesium.Color.fromBytes(color[0], color[1], color[2], 0);
                        var position2 = Cesium.Cartesian3.fromDegrees(106.0728210179, 29.8705283135, 16.2, ellipsoid)
                        var particleSystem2 = scene.primitives.add(
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
                                lifetime: 16.0,
                                emitter: new Cesium.CircleEmitter(0.02),
                                modelMatrix: new Cesium.Matrix4.fromTranslation(position),
                                updateCallback: applyGravity,
                            })
                        );
                        var mat2 = Cesium.Transforms.eastNorthUpToFixedFrame(position2);
                        Cesium.Matrix4.multiply(mat2, rotationX, mat2);
                        particleSystem2.modelMatrix = mat2;
                        oDefault.waterParticleArr.push({
                            pid: 'tujian-03',
                            entity: particleSystem2,
                            name: 'particle-2'
                        })

                        // //3
                        var viewModel3 = {
                            emissionRate: 1500.0,
                            gravity: -10.0,
                            minimumParticleLife: 2.2,
                            maximumParticleLife: 2.2,
                            minimumSpeed: 2.0,
                            maximumSpeed: 3.0,
                            startScale: 4.0,
                            endScale: 1.0,
                            particleSize: 0.5,
                        };
                        var color = [73, 211, 211, 50];
                        var color1 = new Cesium.Color.fromBytes(color[0], color[1], color[2], 50);
                        var color2 = new Cesium.Color.fromBytes(color[0], color[1], color[2], 0);
                        var position3 = Cesium.Cartesian3.fromDegrees(106.0728480289, 29.8705253052, 16.1, ellipsoid)
                        var particleSystem3 = scene.primitives.add(
                            new Cesium.ParticleSystem({
                                image: "./Images/water.png",
                                startColor: color1,
                                endColor: color2,
                                startScale: viewModel3.startScale,
                                endScale: viewModel3.endScale,
                                minimumParticleLife: viewModel3.minimumParticleLife,
                                maximumParticleLife: viewModel3.maximumParticleLife,
                                minimumSpeed: viewModel3.minimumSpeed,
                                maximumSpeed: viewModel3.maximumSpeed,
                                imageSize: new Cesium.Cartesian2(
                                    viewModel3.particleSize,
                                    viewModel3.particleSize
                                ),
                                emissionRate: viewModel3.emissionRate,
                                lifetime: 16.0,
                                emitter: new Cesium.CircleEmitter(0.02),
                                modelMatrix: new Cesium.Matrix4.fromTranslation(position),
                                updateCallback: applyGravity,
                            })
                        );
                        var mat3 = Cesium.Transforms.eastNorthUpToFixedFrame(position3);
                        Cesium.Matrix4.multiply(mat3, rotationX, mat3);
                        particleSystem3.modelMatrix = mat3;
                        oDefault.waterParticleArr.push({
                            pid: 'tujian-03',
                            entity: particleSystem3,
                            name: 'particle-3'
                        })

                        //


                        oDefault.tilesetList.map(function(item) {
                            if (item.id == 'jidian-03') {
                                var viewer = oDefault.viewer;
                                var tileset1 = item.tilesetList[2].tileset;
                                var center1 = tileset1.boundingSphere.center;
                                // var center1=Cesium.Cartesian3.fromDegrees(106.0732296667 , 29.8702523343, 12.9) 
                                var mat1 = Cesium.Transforms.eastNorthUpToFixedFrame(center1);
                                var deg1 = 10
                                var clock2 = setInterval(function() {
                                    var rotationX = Cesium.Matrix4.fromRotationTranslation(Cesium.Matrix3.fromRotationZ(Cesium.Math.toRadians(
                                        deg1)));
                                    Cesium.Matrix4.multiply(mat1, rotationX, mat1);
                                    tileset1._root.transform = mat1;
                                }, 50)
                            }
                        })

                        oDefault.tilesetList.map(function(item) {
                            if (item.id == 'jidian-03') {
                                var viewer = oDefault.viewer;
                                var tileset1 = item.tilesetList[4].tileset;
                                var center1 = tileset1.boundingSphere.center;
                                // var center1=Cesium.Cartesian3.fromDegrees(106.0732296667 , 29.8702523343, 12.9) 
                                var mat1 = Cesium.Transforms.eastNorthUpToFixedFrame(center1);
                                var deg1 = 10
                                var clock2 = setInterval(function() {
                                    var rotationX = Cesium.Matrix4.fromRotationTranslation(Cesium.Matrix3.fromRotationZ(Cesium.Math.toRadians(
                                        deg1)));
                                    Cesium.Matrix4.multiply(mat1, rotationX, mat1);
                                    tileset1._root.transform = mat1;
                                }, 50)
                            }
                        })

                        oDefault.tilesetList.map(function(item) {
                            if (item.id == 'jidian-03') {
                                var viewer = oDefault.viewer;
                                var primitive2 = item.tilesetList[3].tileset;
                                var j = 0;
                                var clock2 = setInterval(function() {
                                    if (j > 30) {
                                        clearInterval(clock2);
                                    }
                                    var translation = Cesium.Matrix4.fromTranslation(new Cesium.Cartesian3(coor[0] / 300, coor[1] /
                                        300,
                                        coor[2] / 300))
                                    Cesium.Matrix4.multiply(primitive2.modelMatrix, translation, primitive2.modelMatrix);
                                    j++;
                                }, 100)
                            }
                        })

                        oDefault.tilesetList.map(function(item) {
                            if (item.id == 'jidian-03') {
                                var viewer = oDefault.viewer;
                                var primitive2 = item.tilesetList[5].tileset;
                                var j = 0;
                                var clock2 = setInterval(function() {
                                    if (j > 30) {
                                        clearInterval(clock2);
                                    }
                                    var translation = Cesium.Matrix4.fromTranslation(new Cesium.Cartesian3(coor[0] / 300, coor[1] /
                                        300,
                                        coor[2] / 300))
                                    Cesium.Matrix4.multiply(primitive2.modelMatrix, translation, primitive2.modelMatrix);
                                    j++;
                                }, 100)
                            }
                        })


                    }

                    ctime = timesArr[4].secondsOfDay;
                    begin = (ctime - 0.05).toFixed(2);
                    end = (ctime).toFixed(2);
                    if (a >= begin && a <= end) {

                    }

                    ctime = timesArr[4].secondsOfDay;
                    begin = (ctime + 0.05).toFixed(2);
                    if (a == begin) {
                        oDefault.waterSurEntityArr.map(function(item) {
                            if (item.name == 'sediment-watersur-2') {
                                item.entity.show = true;
                                var clock2 = setInterval(function() {
                                    if (i2 > 40) {
                                        clearInterval(clock2);
                                    }
                                    Cesium.Matrix4.multiply(item.entity.modelMatrix, translation2, item.entity.modelMatrix);
                                    i2++;
                                }, 100)
                            }
                            if (item.name == 'sediment-watersur-3') {
                                item.entity.show = true;
                                var clock3 = setInterval(function() {
                                    if (i3 > 40) {
                                        clearInterval(clock3);
                                    }
                                    Cesium.Matrix4.multiply(item.entity.modelMatrix, translation3, item.entity.modelMatrix);
                                    i3++;
                                }, 100)
                            }
                        })
                        setTimeout(function() {
                            oDefault.waterFlowArrowArr[4].show = true;
                            oDefault.waterFlowArrowArr[5].show = true;
                        }, 2000)
                    }

                    ctime = timesArr[5].secondsOfDay;
                    begin = (ctime - 0.15).toFixed(2);
                    if (a == begin) {
                        oDefault.waterParticleArr.map(function(item) {
                            oDefault.viewer.scene.primitives.remove(item.entity);
                            oDefault.waterParticleArr = [];
                        })
                        oDefault.waterFlowArrowArr[6].show = true;
                        oDefault.waterFlowArrowArr[7].show = true;
                        oDefault.waterSurEntityArr.map(function(item) {
                            if (item.name == 'sediment-watersur-4') {
                                item.entity.show = true;
                                var clock4 = setInterval(function() {
                                    if (i4 > 40) {
                                        clearInterval(clock4);
                                    }
                                    Cesium.Matrix4.multiply(item.entity.modelMatrix, translation4, item.entity.modelMatrix);
                                    i4++;
                                }, 100)
                            }
                        })
                    }

                    ctime = timesArr[5].secondsOfDay;
                    begin = (ctime).toFixed(2);
                    if (a == begin) {
                        oDefault.waterSurEntityArr.map(function(item) {
                            if (item.name == 'sediment-watersur-5') {
                                item.entity.show = true;
                                var clock5 = setInterval(function() {
                                    if (i5 > 40) {
                                        clearInterval(clock5);
                                    }
                                    Cesium.Matrix4.multiply(item.entity.modelMatrix, translation5, item.entity.modelMatrix);
                                    i5++;
                                }, 100)
                            }
                        })
                    }

                    ctime = timesArr[6].secondsOfDay;
                    begin = (ctime).toFixed(2);
                    if (a == begin) {
                        oDefault.waterFlowArrowArr[8].show = true;
                        oDefault.waterFlowArrowArr[9].show = true;
                        oDefault.waterFlowArrowArr[10].show = true;
                        oDefault.waterFlowArrowArr[11].show = true;
                    }

                    ctime = timesArr[8].secondsOfDay;
                    begin = (ctime).toFixed(2);
                    if (a == begin) {
                        oDefault.waterFlowArrowArr[12].show = true;
                        oDefault.waterSurEntityArr.map(function(item) {
                            if (item.name == 'sediment-watersur-6') {
                                item.entity.show = true;
                                var clock6 = setInterval(function() {
                                    if (i6 > 40) {
                                        clearInterval(clock6);
                                    }
                                    Cesium.Matrix4.multiply(item.entity.modelMatrix, translation5, item.entity.modelMatrix);
                                    i6++;
                                }, 100)
                            }
                        })

                        //4					
                        oDefault.waterParticleArr.push({
                                pid: 'tujian-03',
                                entity: createParticle([106.0729090318, 29.8695965843, 15]),
                                name: 'particle-4'
                            })
                            //5
                        oDefault.waterParticleArr.push({
                                pid: 'tujian-03',
                                entity: createParticle([106.0729090318, 29.8695885843, 15]),
                                name: 'particle-5'
                            })
                            //6
                        oDefault.waterParticleArr.push({
                                pid: 'tujian-03',
                                entity: createParticle([106.0729090318, 29.8695810843, 15]),
                                name: 'particle-6'
                            })
                            //7
                        oDefault.waterParticleArr.push({
                                pid: 'tujian-03',
                                entity: createParticle([106.0729090318, 29.8695735843, 15]),
                                name: 'particle-7'
                            })
                            //8
                        oDefault.waterParticleArr.push({
                                pid: 'tujian-03',
                                entity: createParticle([106.0729090318, 29.8695660843, 15]),
                                name: 'particle-8'
                            })
                            //9
                        oDefault.waterParticleArr.push({
                                pid: 'tujian-03',
                                entity: createParticle([106.0729090318, 29.8695585843, 15]),
                                name: 'particle-9'
                            })
                            //10
                        oDefault.waterParticleArr.push({
                                pid: 'tujian-03',
                                entity: createParticle([106.0729090318, 29.8695515843, 15]),
                                name: 'particle-10'
                            })
                            //11
                        oDefault.waterParticleArr.push({
                                pid: 'tujian-03',
                                entity: createParticle([106.0729090318, 29.8695440843, 15]),
                                name: 'particle-11'
                            })
                            //12
                        oDefault.waterParticleArr.push({
                                pid: 'tujian-03',
                                entity: createParticle([106.0729090318, 29.8695368843, 15]),
                                name: 'particle-12'
                            })
                            //13
                        oDefault.waterParticleArr.push({
                                pid: 'tujian-03',
                                entity: createParticle([106.0729090318, 29.8695290843, 15]),
                                name: 'particle-13'
                            })
                            //14
                        oDefault.waterParticleArr.push({
                                pid: 'tujian-03',
                                entity: createParticle([106.0729090318, 29.8695220843, 15]),
                                name: 'particle-14'
                            })
                            //15
                        oDefault.waterParticleArr.push({
                            pid: 'tujian-03',
                            entity: createParticle([106.0729090318, 29.8695140843, 15]),
                            name: 'particle-15'
                        })

                    }

                    ctime = timesArr[9].secondsOfDay;
                    begin = (ctime + 0.1).toFixed(2);
                    if (a == begin) {

                    }

                    ctime = timesArr[9].secondsOfDay;
                    begin = (ctime + 0.15).toFixed(2);
                    if (a == begin) {
                        oDefault.waterParticleArr.map(function(item) {
                                oDefault.viewer.scene.primitives.remove(item.entity);
                                oDefault.waterParticleArr = [];
                            })
                            //16
                        oDefault.waterParticleArr.push({
                                pid: 'tujian-03',
                                entity: createParticle([106.0729090318, 29.8695005843, 15]),
                                name: 'particle-16'
                            })
                            //17
                        oDefault.waterParticleArr.push({
                                pid: 'tujian-03',
                                entity: createParticle([106.0729090318, 29.8694925843, 15]),
                                name: 'particle-17'
                            })
                            //18
                        oDefault.waterParticleArr.push({
                                pid: 'tujian-03',
                                entity: createParticle([106.0729090318, 29.8694855843, 15]),
                                name: 'particle-18'
                            })
                            //19
                        oDefault.waterParticleArr.push({
                                pid: 'tujian-03',
                                entity: createParticle([106.0729090318, 29.8694780843, 15]),
                                name: 'particle-19'
                            })
                            //20
                        oDefault.waterParticleArr.push({
                                pid: 'tujian-03',
                                entity: createParticle([106.0729090318, 29.8694705843, 15]),
                                name: 'particle-20'
                            })
                            //21
                        oDefault.waterParticleArr.push({
                                pid: 'tujian-03',
                                entity: createParticle([106.0729090318, 29.8694630843, 15]),
                                name: 'particle-21'
                            })
                            //22
                        oDefault.waterParticleArr.push({
                                pid: 'tujian-03',
                                entity: createParticle([106.0729090318, 29.8694555843, 15]),
                                name: 'particle-22'
                            })
                            //23
                        oDefault.waterParticleArr.push({
                                pid: 'tujian-03',
                                entity: createParticle([106.0729090318, 29.8694485843, 15]),
                                name: 'particle-23'
                            })
                            //24
                        oDefault.waterParticleArr.push({
                            pid: 'tujian-03',
                            entity: createParticle([106.0729090318, 29.8694415843, 15]),
                            name: 'particle-24'
                        })

                    }

                    ctime = timesArr[10].secondsOfDay;
                    begin = (ctime).toFixed(2);
                    if (a == begin) {
                        oDefault.waterFlowArrowArr[13].show = true;
                        oDefault.waterFlowArrowArr[14].show = true;
                        oDefault.waterFlowArrowArr[15].show = true;
                        oDefault.waterFlowArrowArr[16].show = true;
                        oDefault.waterFlowArrowArr[17].show = true;
                        oDefault.waterFlowArrowArr[18].show = true;
                        oDefault.waterFlowArrowArr[19].show = true;
                        oDefault.waterFlowArrowArr[20].show = true;
                        oDefault.waterFlowArrowArr[21].show = true;
                        oDefault.waterSurEntityArr.map(function(item) {
                            if (item.name == 'sediment-watersur-8') {
                                item.entity.show = true;
                                var clock8 = setInterval(function() {
                                    if (i8 > 40) {
                                        clearInterval(clock8);
                                    }
                                    Cesium.Matrix4.multiply(item.entity.modelMatrix, translation8, item.entity.modelMatrix);
                                    i8++;
                                }, 100)
                            }
                        })
                        oDefault.waterSurEntityArr.map(function(item) {
                            if (item.name == 'sediment-watersur-9') {
                                item.entity.show = true;
                                var clock9 = setInterval(function() {
                                    if (i9 > 40) {
                                        clearInterval(clock9);
                                    }
                                    Cesium.Matrix4.multiply(item.entity.modelMatrix, translation9, item.entity.modelMatrix);
                                    i9++;
                                }, 100)
                            }
                        })
                    }
                    ctime = timesArr[11].secondsOfDay;
                    begin = (ctime).toFixed(2);
                    if (a == begin) {
                        oDefault.waterParticleArr.map(function(item) {
                            oDefault.viewer.scene.primitives.remove(item.entity);
                            oDefault.waterParticleArr = [];
                        })
                    }
                    ctime = timesArr[12].secondsOfDay;
                    begin = (ctime - 0.1).toFixed(2);
                    if (a == begin) {
                        oDefault.waterFlowArrowArr[22].show = true;
                    }
                    //turn1

                    // turn(a, timesArr[2].secondsOfDay, 'swerveV', 125, -40, -3)

                    ctime = timesArr[2].secondsOfDay;
                    begin = (ctime).toFixed(2);
                    end = (ctime).toFixed(2);
                    if (a >= begin && a <= end && turn1) {
                        turn1 = false;
                        if (oDefault.viewer.clock.multiplier > 0) {
                            swerveV(125, -3, -40, 10);
                        } else {
                            swerveV(125, 3, -70, 10);
                        }
                    } else if (a < begin || a > end) {
                        turn1 = true;
                    }

                    //turn2
                    // turn(a, timesArr[5].secondsOfDay - 0.25, 'swerveV', 125, -70, 3)
                    ctime = timesArr[5].secondsOfDay;
                    begin = (ctime - 0.25).toFixed(2);
                    end = (ctime - 0.2).toFixed(2);
                    if (a >= begin && a <= end && turn2) {
                        turn2 = false;
                        if (oDefault.viewer.clock.multiplier > 0) {
                            swerveV(125, 3, -70, 10);
                        } else {
                            swerveV(125, -3, -40, 10);
                        }
                    } else if (a < begin || a > end) {
                        turn2 = true;
                    }

                    //turn3
                    ctime = timesArr[5].secondsOfDay;
                    begin = (ctime - 0.2).toFixed(2);
                    end = (ctime - 0.15).toFixed(2);
                    if (a >= begin && a <= end && turn3) {
                        turn3 = false;
                        if (oDefault.viewer.clock.multiplier > 0) {
                            swerve(125, 4, -40, 10);
                        } else {
                            swerve(165, -4, -40, 10);
                        }
                    } else if (a < begin || a > end) {
                        turn3 = true;
                    }

                    //turn4
                    ctime = timesArr[6].secondsOfDay;
                    begin = (ctime).toFixed(2);
                    end = (ctime + 0.05).toFixed(2);
                    if (a >= begin && a <= end && turn4) {
                        turn4 = false;
                        if (oDefault.viewer.clock.multiplier > 0) {
                            swerveV(165, 2, -40, 10);
                        } else {
                            swerveV(165, -2, -20, 10);
                        }
                    } else if (a < begin || a > end) {
                        turn4 = true;
                    }

                    //turn5
                    ctime = timesArr[8].secondsOfDay;
                    begin = (ctime - 0.1).toFixed(2);
                    end = (ctime - 0.05).toFixed(2);
                    if (a >= begin && a <= end && turn5) {
                        turn5 = false;
                        if (oDefault.viewer.clock.multiplier > 0) {
                            swerveV(165, -3, -20, 10);
                        } else {
                            swerveV(165, 3, -50, 10);
                        }
                    } else if (a < begin || a > end) {
                        turn5 = true;
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
        //1
        var item = {
            "pid": "tujian-03",
            "type": "rectangle",
            "points": [
                106.0728187950, 29.8705326504, 12.7,
                106.0728187950, 29.8705122734, 12.7,
                106.0728402802, 29.8705122734, 12.7,
                106.0728402802, 29.8705326504, 12.7,
            ],
            "color": [68, 177, 255, 150],
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
                name: 'sediment-watersur-1'
            })
        }
        //2 3
        var item = {
            "pid": "tujian-03",
            "type": "rectangle",
            "points": [
                106.0727967950, 29.8705326504, 12.7,
                106.0727967950, 29.8705122734, 12.7,
                106.0728182802, 29.8705122734, 12.7,
                106.0728182802, 29.8705326504, 12.7,
            ],
            "color": [68, 177, 255, 150],
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
                name: 'sediment-watersur-2'
            })
        }
        var item = {
            "pid": "tujian-03",
            "type": "rectangle",
            "points": [
                106.0728427950, 29.8705326504, 12.7,
                106.0728427950, 29.8705122734, 12.7,
                106.0728642802, 29.8705122734, 12.7,
                106.0728642802, 29.8705326504, 12.7,
            ],
            "color": [68, 177, 255, 150],
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
                name: 'sediment-watersur-3'
            })
        }

        //4
        var item = {
            "pid": "tujian-03",
            "type": "rectangle",
            "points": [
                106.0727396198, 29.8705122734, 15,
                106.0727396198, 29.8703564756, 15,
                106.0729246824, 29.8703564756, 15,
                106.0729246824, 29.8705122734, 15,
            ],
            "color": [68, 177, 255, 150],
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
                name: 'sediment-watersur-4'
            })
        }
        //5
        var item = {
            "pid": "tujian-03",
            "type": "rectangle",
            "points": [
                106.0727396198, 29.8703564756, 14.2,
                106.0727396198, 29.8694349163, 14.2,

                // 106.0729046848, 29.8694349163, 14.2,
                // 106.0729046848, 29.8696001645, 14.2,
                // 106.0729083684, 29.8696001645, 14.2,
                // 106.0729083684, 29.8694349163, 14.2,

                106.0729195666, 29.8694349163, 14.2,
                106.0729195666, 29.8703564756, 14.2,
            ],
            "color": [68, 177, 255, 150],
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
                name: 'sediment-watersur-5'
            })
        }
        //6
        var item = {
            "pid": "tujian-03",
            "type": "rectangle",
            "points": [
                106.0729046848, 29.8694349163, 14,
                106.0729046848, 29.8696001645, 14,
                106.0729083684, 29.8696001645, 14,
                106.0729083684, 29.8694349163, 14,
            ],
            "color": [68, 177, 255, 150],
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
            // oDefault.viewer.scene.primitives.add(waterPrimitive);
            oDefault.waterSurEntityArr.push({
                pid: item.pid,
                entity: waterPrimitive,
                name: 'sediment-watersur-6'
            })
        }

        //7
        var item = {
            "pid": "tujian-03",
            "type": "rectangle",
            "points": [
                106.0725493464, 29.8704850833, 14,
                106.0725493464, 29.8704544027, 14,
                106.0724068225, 29.8704544027, 14,
                106.0724068225, 29.8694356636, 14,
                106.0725859028, 29.8694356636, 14,
                106.0725859028, 29.8704850833, 14,
            ],
            "color": [68, 177, 255, 150],
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
                name: 'sediment-watersur-7'
            })
        }

        //8
        var item = {
            "pid": "tujian-03",
            "type": "rectangle",
            "points": [
                106.0727393031, 29.8694352884, 14,
                106.0727393031, 29.8694181755, 14,
                106.0729190092, 29.8694181755, 14,
                106.0729190092, 29.8694352884, 14
            ],
            "color": [68, 177, 255, 150],
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
                name: 'sediment-watersur-8'
            })
        }

        //9
        var item = {
            "pid": "tujian-03",
            "type": "rectangle",
            "points": [
                106.0724123894, 29.8694331813, 14,
                106.0724123894, 29.8694205274, 14,
                106.0725891717, 29.8694205274, 14,
                106.0725891717, 29.8694331813, 14,
            ],
            "color": [68, 177, 255, 150],
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
                name: 'sediment-watersur-9'
            })
        }
    },
    initSedimentSystem: function() {
        oDefault.currentSystem = 'Sediment';
        oSediment.createWaterSur();
        oSediment.createFlowLine();
        oSediment.createTextLabels();
        oSediment.createFlyPanel();
        // oSediment.createDataLabels();
    }
}