oBackFlushing = {
    data: [],
    currentSystem: false,
    waterSurEntityTimerangeArr: [],
    backFlushingSystem: {
        "name": "BackFlushing",
        "cameraPosition": [106.07331873001974, 29.869260381205365, 76.0048901782400],
        "cameraHeadingPitchRoll": [208.49, -68.80, 360.00]
    },
    timeInputRange: false,
    systemCameraControler: null,
    orientationArr: [],
    dataLabelList: [{
            "title": "回收池",
            "state": "",
            "type": "data",
            "data": [{
                "text": "液位",
                "value": function() {
                    var value = '--';
                    oBackFlushing.data.map(function(item) {
                        if (item.opcid == 'hsscyw') {
                            value = parseFloat(item.opcvalue).toFixed(2);
                        }
                    })
                    return value;
                },
                "unit": "m"
            }],
            "position": [106.0732218520, 29.8689625292, 12],
            "orientation": [90, -30, 5],
            "showUpTime": 85.4,
            "showUpCameraDistance": 13,
            "labelID": "BackFlushing-label-2",
            "pid": "08",
            "system": "BackFlushing"
        },
        {
            "title": "回收池搅拌机1#",
            "state": "手动",
            "type": "data",
            "data": [{
                    "text": "状态",
                    "value": function() {
                        var value = '--';
                        oBackFlushing.data.map(function(item) {
                            if (item.opcid == 'hsc1jbqyxzs') {
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
                        oBackFlushing.data.map(function(item) {
                            if (item.opcid == 'hsc1jbqsdzd') {
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
            "position": [106.0732900664, 29.8690482672, 8],
            "orientation": [90, -30, 5],
            "showUpTime": 85.4,
            "showUpCameraDistance": 13,
            "labelID": "BackFlushing-label-21",
            "pid": "08",
            "system": "BackFlushing"
        },
        {
            "title": "回收池搅拌机2#",
            "state": "手动",
            "type": "data",
            "data": [{
                    "text": "状态",
                    "value": function() {
                        var value = '--';
                        oBackFlushing.data.map(function(item) {
                            if (item.opcid == 'hsc2jbqyxzs') {
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
                        oBackFlushing.data.map(function(item) {
                            if (item.opcid == 'hsc2jbqsdzd') {
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
            "position": [106.0732900664, 29.8688799843, 8],
            "orientation": [90, -30, 5],
            "showUpTime": 85.4,
            "showUpCameraDistance": 13,
            "labelID": "BackFlushing-label-22",
            "pid": "08",
            "system": "BackFlushing"
        },
        {
            "title": "回收池排污泵1#",
            "state": "中控",
            "type": "data",
            "data": [{
                    "text": "状态",
                    "value": function() {
                        var value = '--';
                        oBackFlushing.data.map(function(item) {
                            if (item.opcid == 'hcs1pwbyxzs') {
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
                        oBackFlushing.data.map(function(item) {
                            if (item.opcid == 'hcs1pwbsdzd') {
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
            "position": [106.0731310026, 29.8689394655, 8],
            "orientation": [-90, -30, 5],
            "showUpTime": 85.4,
            "showUpCameraDistance": 13,
            "labelID": "BackFlushing-label-23",
            "pid": "08",
            "system": "BackFlushing"
        },
        {
            "title": "回收池排污泵2#",
            "state": "中控",
            "type": "data",
            "data": [{
                    "text": "状态",
                    "value": function() {
                        var value = '--';
                        oBackFlushing.data.map(function(item) {
                            if (item.opcid == 'hcs2pwbyxzs') {
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
                        oBackFlushing.data.map(function(item) {
                            if (item.opcid == 'hcs2pwbsdld') {
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
            "position": [106.0731310026, 29.8689528365, 8],
            "orientation": [-90, -30, 5],
            "showUpTime": 85.4,
            "showUpCameraDistance": 13,
            "labelID": "BackFlushing-label-24",
            "pid": "08",
            "system": "BackFlushing"
        },
        {
            "title": "回收池排污泵3#",
            "state": "中控",
            "type": "data",
            "data": [{
                    "text": "状态",
                    "value": function() {
                        var value = '--';
                        oBackFlushing.data.map(function(item) {
                            if (item.opcid == 'hcs3pwbyxzs') {
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
                        oBackFlushing.data.map(function(item) {
                            if (item.opcid == 'hcs3pwbsdld') {
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
            "position": [106.0731310026, 29.8689747923, 8],
            "orientation": [-90, -30, 5],
            "showUpTime": 85.4,
            "showUpCameraDistance": 13,
            "labelID": "BackFlushing-label-25",
            "pid": "08",
            "system": "BackFlushing"
        },
        {
            "title": "回收池排污泵4#",
            "state": "中控",
            "type": "data",
            "data": [{
                    "text": "状态",
                    "value": function() {
                        var value = '--';
                        oBackFlushing.data.map(function(item) {
                            if (item.opcid == 'hcs4pwbyxzs') {
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
                        oBackFlushing.data.map(function(item) {
                            if (item.opcid == 'hcs4pwbsdld') {
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
            "position": [106.0731310026, 29.8689882978, 8],
            "orientation": [-90, -30, 5],
            "showUpTime": 85.4,
            "showUpCameraDistance": 13,
            "labelID": "BackFlushing-label-26",
            "pid": "08",
            "system": "BackFlushing"
        }
    ],
    textLabelList: [{
            "name": "回收池",
            "id": "back-01",
            "position": [106.0732083414, 29.8690030467, 12.98]
        },
        {
            "name": "回收池进水管道",
            "id": "back-02",
            "position": [106.0733560956, 29.8689958322, 11]
        },
        {
            "name": "回收池搅拌机1",
            "id": "back-03",
            "position": [106.0732909730, 29.8690484672, 8]
        },
        {
            "name": "回收池搅拌机2",
            "id": "back-04",
            "position": [106.0732901012, 29.8688794126, 8]
        },
        {
            "name": "去分水井管道",
            "id": "back-05",
            "position": [106.0730801779, 29.8691417314, 10.6]
        },
        {
            "name": "排污泵1",
            "id": "back-06",
            "position": [106.0731315791, 29.8689389681, 7.2]
        },
        {
            "name": "排污泵2",
            "id": "back-07",
            "position": [106.0731326354, 29.8689525992, 7.2]
        },
        {
            "name": "滤池水进入管道",
            "id": "back-08",
            "position": [106.0733560085, 29.8690327053, 10.5],
        },
        {
            "name": "反冲洗水管道",
            "id": "back-09",
            "position": [106.0729651859, 29.8689451440, 12],
        },
        {
            "name": "反冲洗水管道",
            "id": "back-10",
            "position": [106.0729680739, 29.8691941343, 12],
        },

    ],
    flyPositions: [
        [106.07331873001974, 29.869260381205365, 76.0048901782400],
        [106.07334037416929, 29.86900862831201, 21.36156595209831],
        [106.07334037416929, 29.86900862831201, 21.36156595209831],
        [106.0733182932065, 29.8689786532453, 11.854531905786189],
        [106.0733182932065, 29.8689786532453, 11.854531905786189],
        [106.07334037416929, 29.86900862831201, 21.36156595209831],
        [106.07334037416929, 29.86900862831201, 21.36156595209831],

        [106.07325425086424, 29.868899423921384, 9.87163472749526],
        [106.07325425086424, 29.868899423921384, 9.87163472749526],
        [106.07320473745877, 29.868916985099734, 10.792135020751495],
        [106.07320473745877, 29.868916985099734, 21],
        [106.0731693900, 29.8691300845, 21]

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
    createFlowLine: function() {
        if (!oDefault.viewer) {
            return
        }
        oDefault.waterFlowArrowArr = [];
        //polygon
        var positions = Cesium.Cartesian3.fromDegreesArray([
            106.0733758155, 29.8690254907, 106.0733707905, 29.8690254907,
            106.0733707905, 29.8690449055, 106.0733758155, 29.8690449055
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

        var positions = Cesium.Cartesian3.fromDegreesArray(
            [
                106.0733507905, 29.8689754907, 106.0733307905, 29.8689754907,
                106.0733307905, 29.8689809055, 106.0733507905, 29.8689809055
            ]);
        var p4 = oDefault.viewer.entities.add({
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
        oDefault.waterFlowArrowArr.push(p4);


        var positions = Cesium.Cartesian3.fromDegreesArray(
            [
                106.0732207905, 29.8690854907, 106.0732007905, 29.8690854907,
                106.0732007905, 29.8690909055, 106.0732207905, 29.8690909055
            ]);
        var p5 = oDefault.viewer.entities.add({
            // show: false,
            polygon: {
                hierarchy: {
                    positions: positions
                },
                height: 9.5,
                stRotation: Cesium.Math.toRadians(90),
                material: new Cesium.PolylineTrailLinkMaterialPropertyV(Cesium.Color.WHITE, 1000)
            }
        })
        oDefault.waterFlowArrowArr.push(p5);

        var positions = Cesium.Cartesian3.fromDegreesArray(
            [
                106.0732207905, 29.8689854907, 106.0732007905, 29.8689854907,
                106.0732007905, 29.8689909055, 106.0732207905, 29.8689909055
            ]
        );
        var p6 = oDefault.viewer.entities.add({
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
        oDefault.waterFlowArrowArr.push(p6);

        var positions = Cesium.Cartesian3.fromDegreesArray(
            [
                106.0732207905, 29.8689354907, 106.0732007905, 29.8689354907,
                106.0732007905, 29.8689409055, 106.0732207905, 29.8689409055
            ]
        );
        var p7 = oDefault.viewer.entities.add({
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
        oDefault.waterFlowArrowArr.push(p7);


        var positions = Cesium.Cartesian3.fromDegreesArray([106.0730758155, 29.8689514907, 106.0730707905, 29.8689514907,
            106.0730707905, 29.8689709055, 106.0730758155, 29.8689709055
        ]);
        var p1 = oDefault.viewer.entities.add({
            // show: false,
            polygon: {
                hierarchy: {
                    positions: positions
                },
                height: 10.5,
                material: new Cesium.PolylineTrailLinkMaterialPropertyV(Cesium.Color.WHITE, 1000)
            }
        })
        oDefault.waterFlowArrowArr.push(p1);

        var positions = Cesium.Cartesian3.fromDegreesArray([106.0730758155, 29.8690314907, 106.0730707905, 29.8690314907,
            106.0730707905, 29.8690509055, 106.0730758155, 29.8690509055
        ]);
        var p2 = oDefault.viewer.entities.add({
            // show: false,
            polygon: {
                hierarchy: {
                    positions: positions
                },
                height: 10.5,
                material: new Cesium.PolylineTrailLinkMaterialPropertyV(Cesium.Color.WHITE, 1000)
            }
        })
        oDefault.waterFlowArrowArr.push(p2);

        var positions = Cesium.Cartesian3.fromDegreesArray([
            106.0730758155, 29.8691314907, 106.0730707905, 29.8691314907,
            106.0730707905, 29.8691509055, 106.0730758155, 29.8691509055
        ]);
        var p2 = oDefault.viewer.entities.add({
            // show: false,
            polygon: {
                hierarchy: {
                    positions: positions
                },
                height: 10.5,
                material: new Cesium.PolylineTrailLinkMaterialPropertyV(Cesium.Color.WHITE, 1000)
            }
        })
        oDefault.waterFlowArrowArr.push(p2);


        //wall
        var positions = Cesium.Cartesian3.fromDegreesArrayHeights(
            [
                106.0731275612, 29.8689784425, 8.5,
                106.0731275612, 29.8689839406, 8.5
            ]);
        var w1 = oDefault.viewer.entities.add({
            wall: {
                positions: positions,
                minimumHeights: [7, 7],
                stRotation: Cesium.Math.toRadians(90),
                material: new Cesium.PolylineTrailLinkMaterialPropertyV(Cesium.Color.WHITE, 1000)
            }
        })
        oDefault.waterFlowArrowArr.push(w1);


        var positions = Cesium.Cartesian3.fromDegreesArrayHeights(
            [
                106.0731275612, 29.8689434425, 8.5,
                106.0731275612, 29.8689489406, 8.5
            ]);
        var w2 = oDefault.viewer.entities.add({
            wall: {
                positions: positions,
                minimumHeights: [7, 7],
                stRotation: Cesium.Math.toRadians(90),
                material: new Cesium.PolylineTrailLinkMaterialPropertyV(Cesium.Color.WHITE, 1000)
            }
        })
        oDefault.waterFlowArrowArr.push(w2);

        var positions = Cesium.Cartesian3.fromDegreesArray([
            106.0729508155, 29.8689354907, 106.0729207905, 29.8689354907,
            106.0729207905, 29.8689459055, 106.0729508155, 29.8689459055
        ]);
        var p8 = oDefault.viewer.entities.add({
            // show: false,
            polygon: {
                hierarchy: {
                    positions: positions
                },
                height: 10.5,
                stRotation: Cesium.Math.toRadians(90),
                material: new Cesium.PolylineTrailLinkMaterialPropertyV(Cesium.Color.WHITE, 1000)
            }
        })
        oDefault.waterFlowArrowArr.push(p8);
        var positions = Cesium.Cartesian3.fromDegreesArray([
            106.0729508155, 29.8692054907, 106.0729207905, 29.8692054907,
            106.0729207905, 29.8692159055, 106.0729508155, 29.8692159055
        ]);
        var p9 = oDefault.viewer.entities.add({
            // show: false,
            polygon: {
                hierarchy: {
                    positions: positions
                },
                height: 10.5,
                stRotation: Cesium.Math.toRadians(90),
                material: new Cesium.PolylineTrailLinkMaterialPropertyV(Cesium.Color.WHITE, 1000)
            }
        })
        oDefault.waterFlowArrowArr.push(p9);
    },
    createTextLabels: function() {
        if (!oDefault.viewer) {
            return
        }
        var viewer = oDefault.viewer;
        var data = oBackFlushing.textLabelList;
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
    },
    createDataLabels: function() {
        var viewer = oDefault.viewer;
        if (viewer) {
            var labelData = oBackFlushing.dataLabelList;
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
        oBackFlushing.loadData();
        oBackFlushing.startDataRoll();
    },
    loadData: function() {
        var viewer = oDefault.viewer;
        oBackFlushing.data = oDefault.realTimeData;
        var labelData = oBackFlushing.dataLabelList;
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
            oBackFlushing.startDataRoll();
        }
        controlDiv2.onclick = function() {
                controlDiv2.className = 'data-roll-control-div active';
                controlDiv1.className = 'data-roll-control-div';
                oBackFlushing.stopDataRoll();
            }
            //
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
            oBackFlushing.audio.pause();
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
                    oBackFlushing.removeCameraEvents();
                    oBackFlushing.startFly();
                    oBackFlushing.audio.play();
                } else {

                    oBackFlushing.removeCameraEvents();
                    oBackFlushing.restartFly();
                    oBackFlushing.audio.play();
                }
            } else {
                btnPlay.className = 'system-fly-btn system-play';
                oBackFlushing.pauseFly();
                oBackFlushing.restoreCameraEvents();
                oBackFlushing.audio.pause();
            }
        }

        var btnForward = document.createElement('div');
        systemFlyPanelBtnGroup.appendChild(btnForward);
        btnForward.setAttribute('id', 'btnForward');
        btnForward.className = 'system-fly-btn system-forward';
        btnForward.onclick = function() {
            oBackFlushing.audio.pause();
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
            oBackFlushing.dataLabelList.map(function(item) {
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
        audio.src = "./Audios/backflushing.mp3";
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
    showBackFlushingSystem: function() {
        if (!oDefault.configData) {
            return
        }
        //禁用工具栏
        $('#i-n-menuimg').css('pointer-events', 'none')
        $('#i-n-layers').css('pointer-events', 'none')

        //		
        oDefault.currentSystem = 'BackFlushing';
        oDefault.layerList.forEach(function(layer) {
                layer.layer.show = false;
            })
            //视角
        var initialPosition = Cesium.Cartesian3.fromDegrees(oBackFlushing.backFlushingSystem.cameraPosition[0],
            oBackFlushing.backFlushingSystem.cameraPosition[
                1], oBackFlushing.backFlushingSystem.cameraPosition[2]);
        var initialOrientation = new Cesium.HeadingPitchRoll.fromDegrees(oBackFlushing.backFlushingSystem.cameraHeadingPitchRoll[
                0], oBackFlushing.backFlushingSystem
            .cameraHeadingPitchRoll[1], oBackFlushing.backFlushingSystem.cameraHeadingPitchRoll[2]);
        oDefault.viewer.scene.camera.setView({
            destination: initialPosition,
            orientation: initialOrientation,
            endTransform: Cesium.Matrix4.IDENTITY
        });

        oDefault.tilesetList.forEach(function(tileset) {
            if (tileset.type == 'tujian') {
                if (tileset.id == 'tujian-08') {
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
                if (tileset.id == 'jidian-08') {
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
            var showList = ['13020007-反冲洗泵房污水管道', '13020012-回收池输出管道', '14020005-污泥系统水井', '13020012-回用水池输出管道'];
            var hideList = ['08010008-回收池顶', '08010012-回收池井盖1#', '08010013-回收池井盖2#', '08010014-回收池进水池水', '08010004-排泥池结构',
                '08010006-排泥池水面', '08010003-排泥池底板', '08010016-排泥池井盖2#', '08010017-排泥池井盖3#', '08010002-排泥池井盖1#',
                '08010005-排泥池穿孔板3#', '08010001-排泥池穿孔板4#', '08010008-排泥池穿孔板2#', '08010018-排泥池穿孔板1#', '08020001-排泥池控制柜1#',
                '08020015-排泥池控制柜2#', '08020020-排泥池搅拌机2#', '08020002-污泥池方闸2#', '08020021-排泥池方闸1#', '08020022-排泥池搅拌机3#',
                '08020004-排泥池提升泵4#',
                '08020018-排泥池提升泵3#', '08020017-排泥池提升泵2#', '08020019-排泥池搅拌机1#', '08020003-排泥池搅拌机4#', '08020016-排泥池提升泵1#',
                '08010007-回收池水面',
                '08020026-排泥池叶轮3#', '08020027-排泥池叶轮4#', '08020025-排泥池叶轮2#', '08020024-排泥池叶轮1#', '08010019-回收池梁',
                '08010020-排泥池梁', '08020034-排泥池闸门板1#', '08020035-排泥池闸门板2#', '08020036-排泥池闸门轮盘2#', '08020033-排泥池闸门轮盘1#',
                '08020006-3号潜水搅拌器（含控制）',
                '08020021-2号污泥池方闸2#', '08020002-2号污泥池方闸1#', '08020019-4号潜水搅拌器（含控制）', '08020003-1号潜水搅拌器（含控制）',
                '08020005-2号潜水搅拌器（含控制）',
                '08020037-排泥池1#微阻缓闭止回阀', '08020038-排泥池2#微阻缓闭止回阀', '08020039-排泥池3#微阻缓闭止回阀', '08020045-排泥池1#手动伸缩蝶阀',
                '08020040-排泥池4#微阻缓闭止回阀', '08020015-回收水池潜水泵控制柜', '08020048-排泥池4#手动伸缩蝶阀', '08020047-排泥池3#手动伸缩蝶阀',
                '08020026-排泥池液位计#1', '08020027-排泥池液位计#2', '08020046-排泥池2#手动伸缩蝶阀', '08010007-回用水池水面', '08010019-回用水池梁',
                '08010012-回用水池井盖1#', '08010013-回用水池井盖2#', '08020013-回用水池机柜1#', '08020014-回用水池机柜2#'
            ];
            var content = tile.content;
            var featuresLength = content.featuresLength;
            var url = tile.tileset.url;
            if (url.indexOf('tujian/08') >= 0) {
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
            if (url.indexOf('jidian/08') >= 0) {
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

        oBackFlushing.initBackFlushingSystem();
    },
    pauseFly: function() {
        //暂停时间
        oBackFlushing.restoreCameraEvents();
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
        oBackFlushing.startFly();
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
        oBackFlushing.startDataRoll();
        //显示水流箭头
        oDefault.waterFlowArrowArr.map(function(item) {
                item.show = true;
            })
            //恢复模型位置
        oDefault.tilesetList.map(function(item) {
                if (item.id == 'jidian-08') {
                    item.tilesetList.map(function(tile) {
                        tile.tileset.modelMatrix = tile.matrix;
                    })
                }
            })
            //飞行结束 恢复事件 清除数据及面板
        oBackFlushing.restoreCameraEvents();
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
        oBackFlushing.createFlyPanel();
        oDefault.flyData.pauseData.currentTime = null;
        oDefault.flyData.pauseData.cameraOrientation = [];
        oDefault.flyData.pauseData.cameraPosition = [];
        //设置角度
        var initialPosition = Cesium.Cartesian3.fromDegrees(106.07364681635775, 29.868987801728572, 69.91122662084994);
        var initialOrientation = new Cesium.HeadingPitchRoll.fromDegrees(269.71, -55.47, 360.00);
        oDefault.viewer.scene.camera.setView({
            destination: initialPosition,
            orientation: initialOrientation,
            endTransform: Cesium.Matrix4.IDENTITY
        });
        oBackFlushing.audio.pause();
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
        oBackFlushing.stopDataRoll();
        oDefault.pointSigns.map(function(item) {
                $('#' + item.id).hide()
            })
            //
        oDefault.flyData.isPaused = false;
        oDefault.flyData.isStarted = true;
        oDefault.flyData.isPaused = false;
        //隐藏水流方向 水面
        oDefault.waterFlowArrowArr.map(function(item) {
                item.show = false;
            })
            //创建水面
        oBackFlushing.createWaterSur();
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
        if (oBackFlushing.flyPositions.length > 0) {
            for (var i = 0; i < oBackFlushing.flyPositions.length; i++) {
                var x = oBackFlushing.flyPositions[i][0];
                var y = oBackFlushing.flyPositions[i][1];
                var z = oBackFlushing.flyPositions[i][2];
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
                    addStep('distance', 40, 0.15);

                }
                if (i == 2) {
                    addStep('seconds', 1, 0.15);
                }
                if (i == 3) {
                    addStep('distance', 20, 0.15);

                }
                if (i == 4) {
                    addStep('seconds', 3, 0.15);
                }

                if (i == 5) {
                    addStep('distance', 10, 0.15);
                }

                if (i == 6) {
                    addStep('seconds', 3, 0.15);
                }

                if (i == 7) {
                    addStep('distance', 20, 0.15);
                }
                if (i == 8) {
                    addStep('seconds', 4, 0.15);

                }
                if (i == 9) {
                    addStep('distance', 10, 0.15);
                }
                if (i == 10) {
                    addStep('seconds', 5, 0.15);
                }
                if (i == 11) {
                    addStep('distance', 20, 0.15);
                }
                if (i == 12) {
                    addStep('distance', 50, 0.15);
                }
                if (i == 13) {
                    addStep('distance', 50, 0.15);
                }
                if (i > 13 && i <= 15) {
                    addStep('distance', 10, 0.15);
                }
                if (i > 15 && i <= 18) {
                    addStep('distance', 50, 0.15);
                }
                if (i > 18 && i < 21) {
                    addStep('distance', 50, 0.15);
                }
                if (i == 21) {
                    addStep('distance', 55, 0.15);
                }
            }
            return property;
        }
        var start = Cesium.JulianDate.fromDate(new Date(2018, 3, 15, 16));
        var stop = Cesium.JulianDate.addSeconds(start, 350, new Cesium.JulianDate());
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
        oBackFlushing.waterSurEntityTimerangeArr = [{
                name: 'backflushing-watersur-1',
                timeRange: timesArr[1].secondsOfDay
            },
            {
                name: 'backflushing-watersur-2',
                timeRange: timesArr[5].secondsOfDay
            }
        ];
        oBackFlushing.orientationArr = [{
                start: timesArr[0].secondsOfDay,
                stop: timesArr[5].secondsOfDay,
                orientation: {
                    heading: 206.57,
                    pitch: -60.79,
                    range: 0.1
                }
            },
            {
                start: timesArr[5].secondsOfDay,
                stop: timesArr[6].secondsOfDay,
                orientation: {
                    heading: 130,
                    pitch: -35,
                    range: 0.1
                }
            },
            {
                start: timesArr[6].secondsOfDay,
                stop: timesArr[8].secondsOfDay,
                orientation: {
                    heading: 290,
                    pitch: -20,
                    range: 0.1
                }
            },
            {
                start: timesArr[8].secondsOfDay,
                stop: timesArr[9].secondsOfDay,
                orientation: {
                    heading: 290,
                    pitch: -35,
                    range: 0.1
                }
            }

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
            viewFrom: new Cesium.Cartesian3(0.5, 1, 2),
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
                oBackFlushing.waterSurEntityTimerangeArr.map(function(arr) {
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
            oBackFlushing.timeInputRange = true;
            oBackFlushing.createWaterSur();
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
                    oBackFlushing.waterSurEntityTimerangeArr.map(function(arr) {
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
                oBackFlushing.timeInputRange = false;
                // 方向			
                var cTime = oDefault.viewer.clockViewModel.currentTime;
                oBackFlushing.orientationArr.forEach(function(item) {
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
                    oBackFlushing.audio.play();
                }
            } else {
                oBackFlushing.startFly();
                oDefault.viewer.clock.shouldAnimate = false;
                var percent = rangeInput.value / 100;
                var addsec = (timeArr[timeArr.length - 1].secondsOfDay - timeArr[0].secondsOfDay) * percent;
                var currentTime = Cesium.JulianDate.addSeconds(start, addsec, new Cesium.JulianDate());
                oDefault.viewer.clockViewModel.currentTime = currentTime;
                oBackFlushing.timeInputRange = false;
                var cTime = oDefault.viewer.clockViewModel.currentTime;
                oBackFlushing.orientationArr.forEach(function(item) {
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
                oBackFlushing.pauseFly();
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
        for (var i = 0; i < oBackFlushing.dataLabelList.length; i++) {
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
        //注册clock ontick事件
        oDefault.clockTickEvent = function() {
            if (entityFly.position) {
                var currentPosition = entityFly.position.getValue(oDefault.viewer.clock.currentTime);
                var ellipsoid = oDefault.viewer.scene.globe.ellipsoid;
                if (!currentPosition) {
                    //结束飞行
                    oBackFlushing.stopFly();
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
                        oBackFlushing.stopFly();
                    }
                    //进度条和时间更新
                    if (!oBackFlushing.timeInputRange) {
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
                        oDefault.waterFlowArrowArr[2].show = true;
                        oDefault.waterFlowArrowArr[11].show = true;
                        oDefault.waterFlowArrowArr[10].show = true;
                        $('#back-08').css('display', 'block');
                        setTimeout(function() {
                            $('#back-08').css('display', 'none');
                        }, 5000)

                    }

                    ctime = timesArr[7].secondsOfDay;
                    begin = (ctime + 0.3).toFixed(2);
                    if (a == begin) {
                        oDefault.waterFlowArrowArr[3].show = true;
                        oDefault.waterFlowArrowArr[4].show = true;
                        oDefault.waterFlowArrowArr[8].show = true;
                        oDefault.waterFlowArrowArr[9].show = true;

                    }
                    ctime = timesArr[9].secondsOfDay;
                    begin = (ctime + 0.1).toFixed(2);
                    if (a == begin) {
                        oDefault.waterFlowArrowArr[5].show = true;
                        oDefault.waterFlowArrowArr[6].show = true;
                        oDefault.waterFlowArrowArr[7].show = true;
                    }

                    ctime = timesArr[1].secondsOfDay;
                    begin = ctime.toFixed(2);
                    if (a == begin) {
                        oDefault.tilesetList.map(function(item) {
                            if (item.id == 'jidian-08') {
                                var viewer = oDefault.viewer;
                                var coor1 = Cesium.Cartesian3.fromDegrees(106.0733180897, 29.8692887324, 8)
                                var coor2 = Cesium.Cartesian3.fromDegrees(106.0733180897, 29.8692887324, 12)
                                var coor = [coor2.x - coor1.x, coor2.y - coor1.y, coor2.z - coor1.z];

                                var primitive1 = item.tilesetList[8].tileset;
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


                                var primitive2 = item.tilesetList[11].tileset;
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


                                var tileset1 = item.tilesetList[9].tileset;
                                var center1 = tileset1.boundingSphere.center;
                                var mat1 = Cesium.Transforms.eastNorthUpToFixedFrame(center1);
                                var deg1 = 40
                                var clock3 = setInterval(function() {
                                    var rotationX = Cesium.Matrix4.fromRotationTranslation(Cesium.Matrix3.fromRotationZ(Cesium.Math.toRadians(
                                        deg1)));
                                    Cesium.Matrix4.multiply(mat1, rotationX, mat1);
                                    tileset1._root.transform = mat1;
                                }, 10)


                                var tileset2 = item.tilesetList[12].tileset;
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

                    ctime = timesArr[5].secondsOfDay;
                    begin = ctime.toFixed(2);
                    if (a == begin) {
                        oDefault.waterParticleArr.map(function(item) {
                            if (item.name == 'particle-1') {
                                oDefault.viewer.scene.primitives.remove(item.entity);
                            }
                        })
                        oDefault.tilesetList.map(function(item) {
                            if (item.id == 'jidian-08') {
                                oDefault.waterSurEntityArr.map(function(item) {
                                    if (item.name == 'backflushing-watersur-2') {
                                        item.entity.show = true;
                                        var primitive = item.entity;
                                        var viewer = oDefault.viewer
                                        setTimeout(function() {
                                            var coor1 = Cesium.Cartesian3.fromDegrees(106.0733180897, 29.8692887324, 8)
                                            var coor2 = Cesium.Cartesian3.fromDegrees(106.0733180897, 29.8692887324, 12)
                                            var coor = [coor2.x - coor1.x, coor2.y - coor1.y, coor2.z - coor1.z];

                                            var i = 0;
                                            var clock = setInterval(function() {
                                                if (i > 20) {
                                                    clearInterval(clock);
                                                }
                                                var translation = Cesium.Matrix4.fromTranslation(new Cesium.Cartesian3(coor[0] / 300, coor[1] /
                                                    300,
                                                    coor[2] / 300))
                                                Cesium.Matrix4.multiply(primitive.modelMatrix, translation, primitive.modelMatrix);
                                                i++;
                                            }, 100)
                                        }, 1000)
                                    }
                                })
                            }
                        })
                    }

                    //转向
                    // turn4
                    ctime = timesArr[6].secondsOfDay;
                    begin = (ctime).toFixed(2);
                    end = (ctime + 0.3).toFixed(2);
                    if (a >= begin && a <= end && turn4) {
                        turn4 = false;
                        if (oDefault.viewer.clock.multiplier > 0) {
                            swerveV(200, 3, -65, 10);
                        } else {
                            swerveV(200, -3, -35, 10);
                        }
                        $('#back-04').css('display', 'block');
                        setTimeout(function() {
                            $('#back-04').css('display', 'none');
                        }, 10000)
                    } else if (a < begin || a > end) {
                        turn4 = true;
                    }
                    // turn1
                    ctime = timesArr[6].secondsOfDay;
                    begin = (ctime + 0.45).toFixed(2);
                    end = (ctime + 0.55).toFixed(2);
                    if (a >= begin && a <= end && turn1) {
                        turn1 = false;
                        if (oDefault.viewer.clock.multiplier > 0) {
                            swerve(200, -7, -35, 10);
                        } else {
                            swerve(130, 7, -35, 10);
                        }
                    } else if (a < begin || a > end) {
                        turn1 = true;
                    }
                    // turn2
                    ctime = timesArr[8].secondsOfDay;
                    begin = (ctime).toFixed(2);
                    end = (ctime + 0.1).toFixed(2);
                    if (a >= begin && a <= end && turn2) {
                        turn2 = false;
                        if (oDefault.viewer.clock.multiplier > 0) {
                            swerve(130, 10, -20, 16);
                        } else {
                            swerve(290, -10, -20, 16);
                        }
                        $('#back-06').css('display', 'block');
                        $('#back-07').css('display', 'block');
                        setTimeout(function() {
                            $('#back-06').css('display', 'none');
                            $('#back-07').css('display', 'none');
                        }, 5000)
                    } else if (a < begin || a > end) {
                        turn2 = true;
                    }
                    // turn3
                    ctime = timesArr[9].secondsOfDay;
                    begin = (ctime + 0.5).toFixed(2);
                    end = (ctime + 0.6).toFixed(2);
                    if (a >= begin && a <= end && turn3) {
                        turn3 = false;
                        if (oDefault.viewer.clock.multiplier > 0) {
                            swerveV(290, -4, -15, 5);
                        } else {
                            swerveV(290, 4, -35, 5);
                        }
                        setTimeout(function() {
                            $('#back-05').css('display', 'block');
                            // setTimeout(function() {
                            // 	$('#back-05').css('display', 'none');
                            // }, 5000)
                        }, 3000)
                    } else if (a < begin || a > end) {
                        turn3 = true;
                    }

                    //喷水
                    var a = oDefault.viewer.clock.currentTime.secondsOfDay.toFixed(2);
                    ctime = timesArr[1].secondsOfDay;
                    begin = (ctime - 1).toFixed(2);
                    end = (ctime).toFixed(2);
                    if (a >= begin && a <= end && spray) {
                        spray = false;
                        var scene = viewer.scene;
                        var color = [170, 85, 0, 140];
                        var ellipsoid = viewer.scene.globe.ellipsoid;
                        var position = Cesium.Cartesian3.fromDegrees(106.0733230894, 29.8689637454, 9, ellipsoid)

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
                                emitter: new Cesium.CircleEmitter(0.5),
                                modelMatrix: new Cesium.Matrix4.fromTranslation(position),
                                updateCallback: applyGravity,
                            })
                        );
                        var mat = Cesium.Transforms.eastNorthUpToFixedFrame(position);
                        var deg = -90
                        var rotationX = Cesium.Matrix4.fromRotationTranslation(Cesium.Matrix3.fromRotationY(Cesium.Math.toRadians(
                            deg)));
                        Cesium.Matrix4.multiply(mat, rotationX, mat);
                        particleSystem.modelMatrix = mat;
                        oDefault.waterParticleArr.push({
                            pid: 'tujian-08',
                            entity: particleSystem,
                            name: 'particle-1'
                        })
                        setTimeout(function() {
                            //水面
                            oDefault.waterSurEntityArr.map(function(item) {
                                if (item.name == 'backflushing-watersur-1') {
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
                                            var translation = Cesium.Matrix4.fromTranslation(new Cesium.Cartesian3(coor[0] / 150, coor[1] /
                                                150,
                                                coor[2] / 150))
                                            Cesium.Matrix4.multiply(primitive.modelMatrix, translation, primitive.modelMatrix);
                                            i++;
                                        }, 100)
                                    }, 1000)
                                }
                            })
                        }, 1000)
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
        //回收池水面
        var item = {
            "pid": "tujian-08",
            "type": "rectangle",
            "points": [
                106.0733242032, 29.8689409260, 8,
                106.0732960391, 29.8689409260, 8,
                106.0732960391, 29.8689857646, 8,
                106.0733242032, 29.8689857646, 8
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
                name: 'backflushing-watersur-1'
            })
        }
        var item = {
            "pid": "tujian-08",
            "type": "rectangle",
            "points": [
                106.0732950391, 29.8688719147, 8,
                106.0731165379, 29.8688719147, 8,
                106.0731165379, 29.8690549581, 8,
                106.0732950391, 29.8690549581, 8,
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
                name: 'backflushing-watersur-2'
            })
        }
    },
    initBackFlushingSystem: function() {
        oDefault.currentSystem = 'BackFlushing';
        oBackFlushing.createFlowLine();
        oBackFlushing.createTextLabels();
        oBackFlushing.createWaterSur();
        oBackFlushing.createFlyPanel();
        // oBackFlushing.createDataLabels();
    }
}