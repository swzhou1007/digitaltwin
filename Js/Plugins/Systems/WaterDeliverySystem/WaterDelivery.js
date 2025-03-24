oWaterDelivery = {
    waterSurEntityTimerangeArr: [],
    equipList: [],
    equipOpenList: [],
    data: [],
    currentSystem: false,
    timeInputRange: false,
    systemCameraControler: null,
    orientationArr: [],
    waterDeliverySystem: {
        "name": "WaterDelivery",
        "cameraPosition": [106.0719388521695, 29.869798166030414, 50.89681060241748],
        "cameraHeadingPitchRoll": [180.00, -55.41, 360.00]
    },
    dataLabelList: [{
            "title": "送水泵1#",
            "state": "中控",
            "type": "data",
            "bimID": "07020146-送水泵电机1",
            "data": [{
                    "text": "频率",
                    "value": function() {
                        var value = '--';
                        oWaterDelivery.data.map(function(item) {
                            if (item.opcid == 'ssxt1ssbpl') {
                                value = parseFloat(item.opcvalue).toFixed(2);
                            }
                        })
                        return value;
                    },
                    "unit": "Hz"
                }

            ],
            "position": [106.0718863145, 29.8694875012, 9.8],
            "orientation": [-90, -30, 5],
            "labelID": "WaterDelivery-label-07-06",
            "labelType": "1",
            "pid": "07",
            "system": "WaterDelivery"
        },
        {
            "title": "送水泵2#",
            "state": "中控",
            "type": "data",
            "bimID": "07020147-送水泵电机2",
            "data": [{
                    "text": "频率",
                    "value": function() {
                        var value = '--';
                        oWaterDelivery.data.map(function(item) {
                            if (item.opcid == 'ssxt2ssbpl') {
                                value = parseFloat(item.opcvalue).toFixed(2);
                            }
                        })
                        return value;
                    },
                    "unit": "Hz"
                }

            ],
            "position": [106.0719159284, 29.8695127827, 9.8],
            "orientation": [-90, -30, 5],
            "labelID": "WaterDelivery-label-07-05",
            "labelType": "1",
            "pid": "07",
            "system": "WaterDelivery"
        },
        {
            "title": "送水泵3#",
            "state": "中控",
            "bimID": "07020054-送水泵电机3",
            "type": "data",
            "data": [{
                    "text": "频率",
                    "value": function() {
                        var value = '--';
                        oWaterDelivery.data.map(function(item) {
                            if (item.opcid == 'ssxt3ssbpl') {
                                value = parseFloat(item.opcvalue).toFixed(2);
                            }
                        })
                        return value;
                    },
                    "unit": "Hz"
                }

            ],
            "position": [106.0719825796, 29.8694875012, 9.8],
            "orientation": [-90, -30, 5],
            "labelID": "WaterDelivery-label-07-04",
            "labelType": "1",
            "pid": "07",
            "system": "WaterDelivery"
        },
        {
            "title": "送水泵4#",
            "state": "中控",
            "bimID": "07020090-送水泵电机4",
            "type": "data",
            "data": [{
                    "text": "频率",
                    "value": function() {
                        var value = '--';
                        oWaterDelivery.data.map(function(item) {
                            if (item.opcid == 'ssxt4ssbpl') {
                                value = parseFloat(item.opcvalue).toFixed(2);
                            }
                        })
                        return value;
                    },
                    "unit": "Hz"
                }

            ],
            "position": [106.0720153097, 29.8695127827, 9.8],
            "orientation": [-90, -30, 5],
            "labelID": "WaterDelivery-label-07-03",
            "labelType": "1",
            "pid": "07",
            "system": "WaterDelivery"
        },
        {
            "title": "送水泵5#",
            "state": "中控",
            "bimID": "07020140-送水泵高压电机5",
            "type": "data",
            "data": [{
                    "text": "频率",
                    "value": function() {
                        var value = '--';
                        oWaterDelivery.data.map(function(item) {
                            if (item.opcid == 'ssxt5ssbpl') {
                                value = parseFloat(item.opcvalue).toFixed(2);
                            }
                        })
                        return value;
                    },
                    "unit": "Hz"
                }

            ],
            "position": [106.0718195283, 29.8694875012, 9.8],
            "orientation": [-90, -30, 5],
            "labelID": "WaterDelivery-label-07-08",
            "labelType": "1",
            "pid": "07",
            "system": "WaterDelivery"
        },
        {
            "title": "送水泵6#",
            "state": "中控",
            "bimID": "07020139-送水泵高压电机6",
            "type": "data",
            "data": [{
                    "text": "频率",
                    "value": function() {
                        var value = '--';
                        oWaterDelivery.data.map(function(item) {
                            if (item.opcid == 'ssxt6ssbpl') {
                                value = parseFloat(item.opcvalue).toFixed(2);
                            }
                        })
                        return value;
                    },
                    "unit": "Hz"
                }

            ],
            "position": [106.0718467669, 29.8695127827, 9.8],
            "orientation": [-90, -30, 5],
            "labelID": "WaterDelivery-label-07-07",
            "labelType": "1",
            "pid": "07",
            "system": "WaterDelivery"
        },
        {
            "title": "送水泵7#",
            "state": "中控",
            "bimID": "07020138-送水泵高压电机7",
            "type": "data",
            "data": [{
                    "text": "频率",
                    "value": function() {
                        var value = '--';
                        oWaterDelivery.data.map(function(item) {
                            if (item.opcid == 'ssxt7ssbpl') {
                                value = parseFloat(item.opcvalue).toFixed(2);
                            }
                        })
                        return value;
                    },
                    "unit": "Hz"
                }

            ],
            "position": [106.0720525567, 29.8694875012, 9.8],
            "orientation": [-90, -30, 5],
            "labelID": "WaterDelivery-label-07-02",
            "labelType": "1",
            "pid": "07",
            "system": "WaterDelivery"
        },
        {
            "title": "送水泵8#",
            "state": "中控",
            "bimID": "07020137-送水泵高压电机8",
            "type": "data",
            "data": [{
                "text": "频率",
                "value": function() {
                    var value = '--';
                    oWaterDelivery.data.map(function(item) {
                        if (item.opcid == 'ssxt8ssbpl') {
                            value = parseFloat(item.opcvalue).toFixed(2);
                        }
                    })
                    return value;
                },
                "unit": "Hz"
            }, ],
            "position": [106.0720811843, 29.8695127827, 9.8],
            "orientation": [-90, -30, 5],
            "labelID": "WaterDelivery-label-07-01",
            "labelType": "1",
            "pid": "07",
            "system": "WaterDelivery"
        },

        {
            "title": "进口阀1#",
            "state": "",
            "bimID": "07020123-1号机组电动蝶阀（进水）",
            "type": "data",
            "data": [{
                    "text": "手动/联动",
                    "value": function() {
                        var value = '--';
                        oWaterDelivery.data.map(function(item) {
                            if (item.opcid == 'ssxt1jsfsdld') {
                                if (item.opcvalue == 0) {
                                    value = "手动"
                                }
                                if (item.opcvalue == 1) {
                                    value = "联动"
                                }
                            }
                        })
                        return value;
                    },
                    "unit": ""
                },
                {
                    "text": "开/关",
                    "value": function() {
                        var value = '--';
                        oWaterDelivery.data.map(function(item) {
                            if (item.opcid == 'ssxt1jsffzs') {
                                if (item.opcvalue == 0) {
                                    value = "关"
                                }
                                if (item.opcvalue == 1) {
                                    value = "开"
                                }
                            }
                        })
                        return value;
                    },
                    "unit": ""
                },
            ],
            "position": [106.0718800195, 29.8695012542, 9.8],
            "orientation": [-90, -30, 5],
            "labelID": "WaterDelivery-label-07-10",
            "labelType": "2",
            "pid": "07",
            "system": "WaterDelivery"
        },
        {
            "title": "进口阀2#",
            "state": "",
            "bimID": "07020076-2号机组电动蝶阀（进水）",
            "type": "data",
            "data": [{
                    "text": "手动/联动",
                    "value": function() {
                        var value = '--';
                        oWaterDelivery.data.map(function(item) {
                            if (item.opcid == 'ssxt2jsfsdld') {
                                if (item.opcvalue == 0) {
                                    value = "手动"
                                }
                                if (item.opcvalue == 1) {
                                    value = "联动"
                                }
                            }
                        })
                        return value;
                    },
                    "unit": ""
                },
                {
                    "text": "开/关",
                    "value": function() {
                        var value = '--';
                        oWaterDelivery.data.map(function(item) {
                            if (item.opcid == 'ssxt2jsffzs') {
                                if (item.opcvalue == 0) {
                                    value = "关"
                                }
                                if (item.opcvalue == 1) {
                                    value = "开"
                                }
                            }
                        })
                        return value;
                    },
                    "unit": ""
                },
            ],
            "position": [106.0719258783, 29.8695315456, 9.8],
            "orientation": [-90, -30, 5],
            "labelID": "WaterDelivery-label-07-11",
            "labelType": "2",
            "pid": "07",
            "system": "WaterDelivery"
        },
        {
            "title": "进口阀3#",
            "state": "",
            "bimID": "07020118-3号机组电动蝶阀（进水）",
            "type": "data",
            "data": [{
                    "text": "手动/联动",
                    "value": function() {
                        var value = '--';
                        oWaterDelivery.data.map(function(item) {
                            if (item.opcid == 'ssxt3jsfsdld') {
                                if (item.opcvalue == 0) {
                                    value = "手动"
                                }
                                if (item.opcvalue == 1) {
                                    value = "联动"
                                }
                            }
                        })
                        return value;
                    },
                    "unit": ""
                },
                {
                    "text": "开/关",
                    "value": function() {
                        var value = '--';
                        oWaterDelivery.data.map(function(item) {
                            if (item.opcid == 'ssxt3jsffzs') {
                                if (item.opcvalue == 0) {
                                    value = "关"
                                }
                                if (item.opcvalue == 1) {
                                    value = "开"
                                }
                            }
                        })
                        return value;
                    },
                    "unit": ""
                },
            ],
            "position": [106.0719725539, 29.8695019768, 9.8],
            "orientation": [-90, -30, 5],
            "labelID": "WaterDelivery-label-07-12",
            "labelType": "2",
            "pid": "07",
            "system": "WaterDelivery"
        },
        {
            "title": "进口阀4#",
            "state": "",
            "bimID": "07020115-4号机组电动蝶阀（进水）",
            "type": "data",
            "data": [{
                    "text": "手动/联动",
                    "value": function() {
                        var value = '--';
                        oWaterDelivery.data.map(function(item) {
                            if (item.opcid == 'ssxt4jsfsdld') {
                                if (item.opcvalue == 0) {
                                    value = "手动"
                                }
                                if (item.opcvalue == 1) {
                                    value = "联动"
                                }
                            }
                        })
                        return value;
                    },
                    "unit": ""
                },
                {
                    "text": "开/关",
                    "value": function() {
                        var value = '--';
                        oWaterDelivery.data.map(function(item) {
                            if (item.opcid == 'ssxt4jsffzs') {
                                if (item.opcvalue == 0) {
                                    value = "关"
                                }
                                if (item.opcvalue == 1) {
                                    value = "开"
                                }
                            }
                        })
                        return value;
                    },
                    "unit": ""
                },
            ],
            "position": [106.0720188379, 29.8695313335, 9.8],
            "orientation": [-90, -30, 5],
            "labelID": "WaterDelivery-label-07-13",
            "labelType": "2",
            "pid": "07",
            "system": "WaterDelivery"
        },
        {
            "title": "进口阀5#",
            "state": "",
            "bimID": "07020113-5号机组电动闸阀（进水）",
            "type": "data",
            "data": [{
                    "text": "手动/联动",
                    "value": function() {
                        var value = '--';
                        oWaterDelivery.data.map(function(item) {
                            if (item.opcid == 'ssxt5jsfsdld') {
                                if (item.opcvalue == 0) {
                                    value = "手动"
                                }
                                if (item.opcvalue == 1) {
                                    value = "联动"
                                }
                            }
                        })
                        return value;
                    },
                    "unit": ""
                },
                {
                    "text": "开/关",
                    "value": function() {
                        var value = '--';
                        oWaterDelivery.data.map(function(item) {
                            if (item.opcid == 'ssxt5jsffzs') {
                                if (item.opcvalue == 0) {
                                    value = "关"
                                }
                                if (item.opcvalue == 1) {
                                    value = "开"
                                }
                            }
                        })
                        return value;
                    },
                    "unit": ""
                },
            ],
            "position": [106.0718135847, 29.8695016560, 9.8],
            "orientation": [-90, -30, 5],
            "labelID": "WaterDelivery-label-07-15",
            "labelType": "2",
            "pid": "07",
            "system": "WaterDelivery"
        },
        {
            "title": "进口阀6#",
            "state": "",
            "bimID": "07020110-6号机组电动闸阀（进水）",
            "type": "data",
            "data": [{
                    "text": "手动/联动",
                    "value": function() {
                        var value = '--';
                        oWaterDelivery.data.map(function(item) {
                            if (item.opcid == 'ssxt6jsfsdld') {
                                if (item.opcvalue == 0) {
                                    value = "手动"
                                }
                                if (item.opcvalue == 1) {
                                    value = "联动"
                                }
                            }
                        })
                        return value;
                    },
                    "unit": ""
                },
                {
                    "text": "开/关",
                    "value": function() {
                        var value = '--';
                        oWaterDelivery.data.map(function(item) {
                            if (item.opcid == 'ssxt6jsffzs') {
                                if (item.opcvalue == 0) {
                                    value = "关"
                                }
                                if (item.opcvalue == 1) {
                                    value = "开"
                                }
                            }
                        })
                        return value;
                    },
                    "unit": ""
                },
            ],
            "position": [106.0718515421, 29.8695286347, 9.8],
            "orientation": [-90, -30, 5],
            "labelID": "WaterDelivery-label-07-16",
            "labelType": "2",
            "pid": "07",
            "system": "WaterDelivery"
        },
        {
            "title": "进口阀7#",
            "state": "",
            "bimID": "07020107-7号机组电动闸阀（进水）",
            "type": "data",
            "data": [{
                    "text": "手动/联动",
                    "value": function() {
                        var value = '--';
                        oWaterDelivery.data.map(function(item) {
                            if (item.opcid == 'ssxt7jsfsdld') {
                                if (item.opcvalue == 0) {
                                    value = "手动"
                                }
                                if (item.opcvalue == 1) {
                                    value = "联动"
                                }
                            }
                        })
                        return value;
                    },
                    "unit": ""
                },
                {
                    "text": "开/关",
                    "value": function() {
                        var value = '--';
                        oWaterDelivery.data.map(function(item) {
                            if (item.opcid == 'ssxt7jsffzs') {
                                if (item.opcvalue == 0) {
                                    value = "关"
                                }
                                if (item.opcvalue == 1) {
                                    value = "开"
                                }
                            }
                        })
                        return value;
                    },
                    "unit": ""
                },
            ],
            "position": [106.0720489382, 29.8695019585, 9.8],
            "orientation": [-90, -30, 5],
            "labelID": "WaterDelivery-label-07-17",
            "labelType": "2",
            "pid": "07",
            "system": "WaterDelivery"
        },
        {
            "title": "进口阀8#",
            "state": "",
            "bimID": "07020104-8号机组电动闸阀（进水）",
            "type": "data",
            "data": [{
                    "text": "手动/联动",
                    "value": function() {
                        var value = '--';
                        oWaterDelivery.data.map(function(item) {
                            if (item.opcid == 'ssxt8jsfsdld') {
                                if (item.opcvalue == 0) {
                                    value = "手动"
                                }
                                if (item.opcvalue == 1) {
                                    value = "联动"
                                }
                            }
                        })
                        return value;
                    },
                    "unit": ""
                },
                {
                    "text": "开/关",
                    "value": function() {
                        var value = '--';
                        oWaterDelivery.data.map(function(item) {
                            if (item.opcid == 'ssxt8jsffzs') {
                                if (item.opcvalue == 0) {
                                    value = "关"
                                }
                                if (item.opcvalue == 1) {
                                    value = "开"
                                }
                            }
                        })
                        return value;
                    },
                    "unit": ""
                },
            ],
            "position": [106.0720954585, 29.8695309987, 9.8],
            "orientation": [-90, -30, 5],
            "labelID": "WaterDelivery-label-07-18",
            "labelType": "2",
            "pid": "07",
            "system": "WaterDelivery"
        },
        {
            "title": "出口阀1#",
            "state": "",
            "bimID": "07020125-1号机组电动蝶阀（出水）",
            "type": "data",
            "data": [{
                    "text": "手动/联动",
                    "value": function() {
                        var value = '--';
                        oWaterDelivery.data.map(function(item) {
                            if (item.opcid == 'ssxt1ckfsdld') {
                                if (item.opcvalue == 0) {
                                    value = "手动"
                                }
                                if (item.opcvalue == 1) {
                                    value = "联动"
                                }
                            }
                        })
                        return value;
                    },
                    "unit": ""
                },
                {
                    "text": "开/关",
                    "value": function() {
                        var value = '--';
                        oWaterDelivery.data.map(function(item) {
                            if (item.opcid == 'ssxt1ckfkzs') {
                                if (item.opcvalue == 0) {
                                    value = "关"
                                }
                                if (item.opcvalue == 1) {
                                    value = "开"
                                }
                            }
                        })
                        return value;
                    },
                    "unit": ""
                },
            ],
            "position": [106.0718811639, 29.8694658860, 9.8],
            "orientation": [-90, -30, 5],
            "labelID": "WaterDelivery-label-07-19",
            "labelType": "2",
            "pid": "07",
            "system": "WaterDelivery"
        },
        {
            "title": "出口阀2#",
            "state": "",
            "bimID": "07020122-2号机组电动蝶阀（出水）",
            "type": "data",
            "data": [{
                    "text": "手动/联动",
                    "value": function() {
                        var value = '--';
                        oWaterDelivery.data.map(function(item) {
                            if (item.opcid == 'ssxt2ckfsdld') {
                                if (item.opcvalue == 0) {
                                    value = "手动"
                                }
                                if (item.opcvalue == 1) {
                                    value = "联动"
                                }
                            }
                        })
                        return value;
                    },
                    "unit": ""
                },
                {
                    "text": "开/关",
                    "value": function() {
                        var value = '--';
                        oWaterDelivery.data.map(function(item) {
                            if (item.opcid == 'ssxt2ckfkzs') {
                                if (item.opcvalue == 0) {
                                    value = "关"
                                }
                                if (item.opcvalue == 1) {
                                    value = "开"
                                }
                            }
                        })
                        return value;
                    },
                    "unit": ""
                },
            ],
            "position": [106.0719234316, 29.8694658860, 9.8],
            "orientation": [-90, -30, 5],
            "labelID": "WaterDelivery-label-07-20",
            "labelType": "2",
            "pid": "07",
            "system": "WaterDelivery"
        },
        {
            "title": "出口阀3#",
            "state": "",
            "bimID": "07020120-3号机组电动蝶阀（出水）",
            "type": "data",
            "data": [{
                    "text": "手动/联动",
                    "value": function() {
                        var value = '--';
                        oWaterDelivery.data.map(function(item) {
                            if (item.opcid == 'ssxt3ckfsdld') {
                                if (item.opcvalue == 0) {
                                    value = "手动"
                                }
                                if (item.opcvalue == 1) {
                                    value = "联动"
                                }
                            }
                        })
                        return value;
                    },
                    "unit": ""
                },
                {
                    "text": "开/关",
                    "value": function() {
                        var value = '--';
                        oWaterDelivery.data.map(function(item) {
                            if (item.opcid == 'ssxt3ckfkzs') {
                                if (item.opcvalue == 0) {
                                    value = "关"
                                }
                                if (item.opcvalue == 1) {
                                    value = "开"
                                }
                            }
                        })
                        return value;
                    },
                    "unit": ""
                },
            ],
            "position": [106.0719732922, 29.8694658860, 9.8],
            "orientation": [-90, -30, 5],
            "labelID": "WaterDelivery-label-07-21",
            "labelType": "2",
            "pid": "07",
            "system": "WaterDelivery"
        },
        {
            "title": "出口阀4#",
            "state": "",
            "bimID": "07020117-4号机组电动蝶阀（出水）",
            "type": "data",
            "data": [{
                    "text": "手动/联动",
                    "value": function() {
                        var value = '--';
                        oWaterDelivery.data.map(function(item) {
                            if (item.opcid == 'ssxt4ckfsdld') {
                                if (item.opcvalue == 0) {
                                    value = "手动"
                                }
                                if (item.opcvalue == 1) {
                                    value = "联动"
                                }
                            }
                        })
                        return value;
                    },
                    "unit": ""
                },
                {
                    "text": "开/关",
                    "value": function() {
                        var value = '--';
                        oWaterDelivery.data.map(function(item) {
                            if (item.opcid == 'ssxt4ckfkzs') {
                                if (item.opcvalue == 0) {
                                    value = "关"
                                }
                                if (item.opcvalue == 1) {
                                    value = "开"
                                }
                            }
                        })
                        return value;
                    },
                    "unit": ""
                },
            ],
            "position": [106.0720188505, 29.8694658860, 9.8],
            "orientation": [-90, -30, 5],
            "labelID": "WaterDelivery-label-07-22",
            "labelType": "2",
            "pid": "07",
            "system": "WaterDelivery"
        },
        {
            "title": "出口阀5#",
            "state": "",
            "bimID": "07020114-5号机组电动闸阀（出水）",
            "type": "data",
            "data": [{
                    "text": "手动/联动",
                    "value": function() {
                        var value = '--';
                        oWaterDelivery.data.map(function(item) {
                            if (item.opcid == 'ssxt5ckfsdld') {
                                if (item.opcvalue == 0) {
                                    value = "手动"
                                }
                                if (item.opcvalue == 1) {
                                    value = "联动"
                                }
                            }
                        })
                        return value;
                    },
                    "unit": ""
                },
                {
                    "text": "开/关",
                    "value": function() {
                        var value = '--';
                        oWaterDelivery.data.map(function(item) {
                            if (item.opcid == 'ssxt5ckfkzs') {
                                if (item.opcvalue == 0) {
                                    value = "关"
                                }
                                if (item.opcvalue == 1) {
                                    value = "开"
                                }
                            }
                        })
                        return value;
                    },
                    "unit": ""
                },
            ],
            "position": [106.0718107480, 29.8694658860, 9.8],
            "orientation": [-90, -30, 5],
            "labelID": "WaterDelivery-label-07-23",
            "labelType": "2",
            "pid": "07",
            "system": "WaterDelivery"
        },
        {
            "title": "出口阀6#",
            "state": "",
            "bimID": "07020111-6号机组电动闸阀（出水）",
            "type": "data",
            "data": [{
                    "text": "手动/联动",
                    "value": function() {
                        var value = '--';
                        oWaterDelivery.data.map(function(item) {
                            if (item.opcid == 'ssxt6ckfsdld') {
                                if (item.opcvalue == 0) {
                                    value = "手动"
                                }
                                if (item.opcvalue == 1) {
                                    value = "联动"
                                }
                            }
                        })
                        return value;
                    },
                    "unit": ""
                },
                {
                    "text": "开/关",
                    "value": function() {
                        var value = '--';
                        oWaterDelivery.data.map(function(item) {
                            if (item.opcid == 'ssxt6ckfkzs') {
                                if (item.opcvalue == 0) {
                                    value = "关"
                                }
                                if (item.opcvalue == 1) {
                                    value = "开"
                                }
                            }
                        })
                        return value;
                    },
                    "unit": ""
                },
            ],
            "position": [106.0718538270, 29.8694658860, 9.8],
            "orientation": [-90, -30, 5],
            "labelID": "WaterDelivery-label-07-24",
            "labelType": "2",
            "pid": "07",
            "system": "WaterDelivery"
        },
        {
            "title": "出口阀7#",
            "state": "",
            "bimID": "07020108-7号机组电动闸阀（出水）",
            "type": "data",
            "data": [{
                    "text": "手动/联动",
                    "value": function() {
                        var value = '--';
                        oWaterDelivery.data.map(function(item) {
                            if (item.opcid == 'ssxt7ckfsdld') {
                                if (item.opcvalue == 0) {
                                    value = "手动"
                                }
                                if (item.opcvalue == 1) {
                                    value = "联动"
                                }
                            }
                        })
                        return value;
                    },
                    "unit": ""
                },
                {
                    "text": "开/关",
                    "value": function() {
                        var value = '--';
                        oWaterDelivery.data.map(function(item) {
                            if (item.opcid == 'ssxt7ckfkzs') {
                                if (item.opcvalue == 0) {
                                    value = "关"
                                }
                                if (item.opcvalue == 1) {
                                    value = "开"
                                }
                            }
                        })
                        return value;
                    },
                    "unit": ""
                },
            ],
            "position": [106.0720450152, 29.8694658860, 9.8],
            "orientation": [-90, -30, 5],
            "labelID": "WaterDelivery-label-07-25",
            "labelType": "2",
            "pid": "07",
            "system": "WaterDelivery"
        },
        {
            "title": "出口阀8#",
            "state": "",
            "bimID": "07020105-8号机组电动闸阀（出水）",
            "type": "data",
            "data": [{
                    "text": "手动/联动",
                    "value": function() {
                        var value = '--';
                        oWaterDelivery.data.map(function(item) {
                            if (item.opcid == 'ssxt8ckfsdld') {
                                if (item.opcvalue == 0) {
                                    value = "手动"
                                }
                                if (item.opcvalue == 1) {
                                    value = "联动"
                                }
                            }
                        })
                        return value;
                    },
                    "unit": ""
                },
                {
                    "text": "开/关",
                    "value": function() {
                        var value = '--';
                        oWaterDelivery.data.map(function(item) {
                            if (item.opcid == 'ssxt8ckfkzs') {
                                if (item.opcvalue == 0) {
                                    value = "关"
                                }
                                if (item.opcvalue == 1) {
                                    value = "开"
                                }
                            }
                        })
                        return value;
                    },
                    "unit": ""
                },
            ],
            "position": [106.0720879625, 29.8694658860, 9.8],
            "orientation": [-90, -30, 5],
            "labelID": "WaterDelivery-label-07-26",
            "labelType": "2",
            "pid": "07",
            "system": "WaterDelivery"
        },
        {
            "title": "出厂水",
            "state": "中控",
            "bimID": "",
            "type": "data",
            "data": [{
                    "text": "压力",
                    "value": function() {
                        var value = '--';
                        oWaterDelivery.data.map(function(item) {
                            if (item.opcid == 'ccsyl') {
                                value = parseFloat(item.opcvalue).toFixed(3);
                            }
                        })
                        return value;
                    },
                    "unit": "Mpa"
                },
                {
                    "text": "余氯",
                    "value": function() {
                        var value = '--';
                        oWaterDelivery.data.map(function(item) {
                            if (item.opcid == 'ccsylv') {
                                value = parseFloat(item.opcvalue).toFixed(3);
                            }
                        })
                        return value;
                    },
                    "unit": "ppm"
                },
                {
                    "text": "PH",
                    "value": function() {
                        var value = '--';
                        oWaterDelivery.data.map(function(item) {
                            if (item.opcid == 'ccsph') {
                                value = parseFloat(item.opcvalue).toFixed(2);
                            }
                        })
                        return value;
                    },
                    "unit": ""
                }

            ],
            "position": [106.0716832300, 29.8694178338, 9.8],
            "orientation": [-90, -30, 5],
            "labelID": "WaterDelivery-label-07-09",
            "labelType": "2",
            "pid": "07",
            "system": "WaterDelivery"
        },

    ],
    textLabelList: [{
            "name": "清水池进水管道1#",
            "id": "waterdelivery-01",
            "position": [106.0720323244, 29.8696361162, 10.7]
        },
        {
            "name": "清水池进水管道2#",
            "id": "waterdelivery-02",
            "position": [106.0718672400, 29.8696315521, 10.7]
        },
        {
            "name": "集水井",
            "id": "waterdelivery-03",
            "position": [106.0719553444, 29.8695881384, 12.98]
        },
        {
            "name": "出厂水管道",
            "id": "waterdelivery-04",
            "position": [106.0717632300, 29.8694003878, 11.8]
        },
    ],
    flyPositions: [
        [106.07193885216948, 29.869789144923022, 49.446810545580355],
        [106.07193885216948, 29.869789144923022, 49.446810545580355],
        [106.07194803729843, 29.86966407403298, 31.312108328509396],
        [106.07195044539841, 29.86952423633287, 31.312108328896294],
        [106.07181245809811, 29.869520370832774, 31.312108329942983]
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
        //1
        var positions = Cesium.Cartesian3.fromDegreesArray([
            106.0718735120, 29.8696429841,
            106.0718735120, 29.8696280900,
            106.0718850069, 29.8696280900,
            106.0718850069, 29.8696429841
        ]);
        var p3 = oDefault.viewer.entities.add({
            // show: false,
            polygon: {
                hierarchy: {
                    positions: positions
                },
                height: 8.5,
                stRotation: Cesium.Math.toRadians(180),
                material: new Cesium.PolylineTrailLinkMaterialPropertyV(Cesium.Color.WHITE, 1000)
            }
        })
        oDefault.waterFlowArrowArr.push(p3);

        //2
        var positions = Cesium.Cartesian3.fromDegreesArray([
            106.0720188965, 29.8696429841,
            106.0720188965, 29.8696280900,
            106.0720283466, 29.8696280900,
            106.0720283466, 29.8696429841
        ]);
        var p3 = oDefault.viewer.entities.add({
            // show: false,
            polygon: {
                hierarchy: {
                    positions: positions
                },
                height: 8.5,
                stRotation: Cesium.Math.toRadians(180),
                material: new Cesium.PolylineTrailLinkMaterialPropertyV(Cesium.Color.WHITE, 1000)
            }
        })
        oDefault.waterFlowArrowArr.push(p3);

        //3
        var positions = Cesium.Cartesian3.fromDegreesArray([
            106.0718940870, 29.8695439170,
            106.0718940870, 29.8695302441,
            106.0719049018, 29.8695302441,
            106.0719049018, 29.8695439170
        ]);
        var p3 = oDefault.viewer.entities.add({
            // show: false,
            polygon: {
                hierarchy: {
                    positions: positions
                },
                height: 8.5,
                stRotation: Cesium.Math.toRadians(180),
                material: new Cesium.PolylineTrailLinkMaterialPropertyV(Cesium.Color.WHITE, 1000)
            }
        })
        oDefault.waterFlowArrowArr.push(p3);

        //4
        var positions = Cesium.Cartesian3.fromDegreesArray([
            106.0719957932, 29.8695439170,
            106.0719957932, 29.8695302441,
            106.0720092514, 29.8695302441,
            106.0720092514, 29.8695439170
        ]);
        var p3 = oDefault.viewer.entities.add({
            // show: false,
            polygon: {
                hierarchy: {
                    positions: positions
                },
                height: 8.5,
                stRotation: Cesium.Math.toRadians(180),
                material: new Cesium.PolylineTrailLinkMaterialPropertyV(Cesium.Color.WHITE, 1000)
            }
        })
        oDefault.waterFlowArrowArr.push(p3);

        //5
        var positions = Cesium.Cartesian3.fromDegreesArray([
            106.0719083770, 29.8694340367,
            106.0718922042, 29.8694340367,
            106.0718922042, 29.8694245801,
            106.0719083770, 29.8694245801
        ]);
        var p3 = oDefault.viewer.entities.add({
            // show: false,
            polygon: {
                hierarchy: {
                    positions: positions
                },
                height: 8.5,
                stRotation: Cesium.Math.toRadians(-90),
                material: new Cesium.PolylineTrailLinkMaterialPropertyV(Cesium.Color.WHITE, 1000)
            }
        })
        oDefault.waterFlowArrowArr.push(p3);
        //6
        var positions = Cesium.Cartesian3.fromDegreesArray([
            106.0719941205, 29.8693847838,
            106.0719721079, 29.8693847838,
            106.0719721079, 29.8693732689,
            106.0719941205, 29.8693732689
        ]);
        var p3 = oDefault.viewer.entities.add({
            // show: false,
            polygon: {
                hierarchy: {
                    positions: positions
                },
                height: 8.5,
                // outline:true,
                stRotation: Cesium.Math.toRadians(-90),
                material: new Cesium.PolylineTrailLinkMaterialPropertyV(Cesium.Color.WHITE, 1000)
            }
        })
        oDefault.waterFlowArrowArr.push(p3);

        //7
        var positions = Cesium.Cartesian3.fromDegreesArray([
            106.0717941205, 29.8693847838,
            106.0717721079, 29.8693847838,
            106.0717721079, 29.8693732689,
            106.0717941205, 29.8693732689
        ]);
        var p3 = oDefault.viewer.entities.add({
            // show: false,
            polygon: {
                hierarchy: {
                    positions: positions
                },
                height: 8.5,
                // outline:true,
                stRotation: Cesium.Math.toRadians(-90),
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
        var data = oWaterDelivery.textLabelList;
        data.forEach(function(item) {
            var trackPop = undefined;
            var label = document.createElement('div');
            oDefault.textLabelSigns.push(label);
            label.setAttribute('id', item.id);
            label.setAttribute('class', 'label-info');
            label.style.display = 'block';
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
            var labelData = oWaterDelivery.dataLabelList;
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
        oWaterDelivery.loadData();
        // $('#WaterDelivery-label-07-09').css('display', 'block');
        oWaterDelivery.startDataRoll();
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
    loadData: function() {
        var viewer = oDefault.viewer;
        oWaterDelivery.data = oDefault.realTimeData;
        var labelData = oWaterDelivery.dataLabelList;
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

        oWaterDelivery.setEquipState();
    },
    setEquipState: function() {
        oWaterDelivery.equipList = [];
        oWaterDelivery.equipOpenList = [];
        oWaterDelivery.dataLabelList.map(function(item) {
            if (item.bimID != '') {
                oWaterDelivery.equipList.push(item.bimID)
                item.data.map(function(data) {
                    if (data.text == '频率' && data.value() > 0) {
                        oWaterDelivery.equipOpenList.push(item.bimID);
                    }
                    if (data.text == '开/关' && data.value() == "开") {
                        oWaterDelivery.equipOpenList.push(item.bimID);
                    }
                })
            }
        })
    },
    createEquipStateEvent: function() {
        oDefault.equipStateEvent = function(tile) {
            var content = tile.content;
            var featuresLength = content.featuresLength;
            var url = tile.tileset.url;
            if (url.indexOf('jidian/07') >= 0) {
                for (var i = 0; i < featuresLength; i += 1) {
                    var feature = content.getFeature(i);
                    var name = feature.getProperty('name');
                    if (oWaterDelivery.equipList.indexOf(name) >= 0) {
                        feature.color = Cesium.Color.fromCssColorString("rgba(66, 129, 169, 1)")
                    }
                    if (oWaterDelivery.equipOpenList.indexOf(name) >= 0) {
                        feature.color = Cesium.Color.fromCssColorString("rgba(179, 88, 70, 1)")
                    }
                }
            }
        }
        oDefault.tilesetList.map(function(item) {
            if (item.id == 'jidian-07') {
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
            oWaterDelivery.startDataRoll();
        }
        controlDiv2.onclick = function() {
            controlDiv2.className = 'data-roll-control-div active';
            controlDiv1.className = 'data-roll-control-div';
            oWaterDelivery.stopDataRoll();
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
            oWaterDelivery.audio.pause();
            if (oDefault.viewer.clock.multiplier > 0) {
                oDefault.viewer.clock.multiplier = -1;
            } else {
                if (oDefault.viewer.clock.multiplier > -4) {
                    oDefault.viewer.clock.multiplier = oDefault.viewer.clock.multiplier * 2;
                } else {
                    oDefault.viewer.clock.multiplier = 1;
                }
            }
            var rate = oDefault.viewer.clock.multiplier / -1;
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
                    oWaterDelivery.removeCameraEvents();
                    oWaterDelivery.startFly();
                    oWaterDelivery.audio.play();
                } else {

                    oWaterDelivery.removeCameraEvents();
                    oWaterDelivery.restartFly();
                    oWaterDelivery.audio.play();
                }
            } else {
                btnPlay.className = 'system-fly-btn system-play';
                oWaterDelivery.pauseFly();
                oWaterDelivery.restoreCameraEvents();
                oWaterDelivery.audio.pause();
            }
        }

        var btnForward = document.createElement('div');
        systemFlyPanelBtnGroup.appendChild(btnForward);
        btnForward.setAttribute('id', 'btnForward');
        btnForward.className = 'system-fly-btn system-forward';
        btnForward.onclick = function() {
            oWaterDelivery.audio.pause();
            if (oDefault.viewer.clock.multiplier < 0) {
                oDefault.viewer.clock.multiplier = 1;
            } else {
                if (oDefault.viewer.clock.multiplier < 4) {
                    oDefault.viewer.clock.multiplier = oDefault.viewer.clock.multiplier * 2;
                } else {
                    oDefault.viewer.clock.multiplier = 1;
                }
            }
            var rate = oDefault.viewer.clock.multiplier / 1;
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
            oWaterDelivery.dataLabelList.map(function(item) {
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
        audio.src = "./Audios/songshui.mp3";
        audio.loop = false;
        setTimeout(function() {
                if (audio.readyState) {
                    var duration = audio.duration;
                    console.log('audio', duration);
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
    showWaterDeliverySystem: function() {
        if (!oDefault.configData) {
            return
        }
        //禁用工具栏
        $('#i-n-menuimg').css('pointer-events', 'none')
        $('#i-n-layers').css('pointer-events', 'none')

        //		
        oDefault.currentSystem = 'WaterDelivery';
        oDefault.layerList.forEach(function(layer) {
                layer.layer.show = false;
            })
            //视角
        var initialPosition = Cesium.Cartesian3.fromDegrees(oWaterDelivery.waterDeliverySystem.cameraPosition[0],
            oWaterDelivery.waterDeliverySystem.cameraPosition[
                1], oWaterDelivery.waterDeliverySystem.cameraPosition[2]);
        var initialOrientation = new Cesium.HeadingPitchRoll.fromDegrees(oWaterDelivery.waterDeliverySystem.cameraHeadingPitchRoll[
                0], oWaterDelivery.waterDeliverySystem
            .cameraHeadingPitchRoll[1], oWaterDelivery.waterDeliverySystem.cameraHeadingPitchRoll[2]);
        oDefault.viewer.scene.camera.setView({
            destination: initialPosition,
            orientation: initialOrientation,
            endTransform: Cesium.Matrix4.IDENTITY
        });

        oDefault.tilesetList.forEach(function(tileset) {
            if (tileset.type == 'tujian') {
                if (tileset.id == 'tujian-07') {
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
                if (tileset.id == 'jidian-07') {
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
            var showList = ['13020042-清水池到送水泵房管道1号', '13020011-送水系统送水管道', '13020036-出厂水隔断阀', '13020005-加药系统原水管道'];
            var hideList = ['07010001-送水泵房屋顶', '07010004-送水泵房钢支撑', '07010118-送水泵房结构24#', '07010014-送水泵房结构1#',
                '07010117-送水泵房结构23#', '07010012-送水泵房结构25#', '07010061-送水泵房黄墙10#', '07010087-送水泵房玻璃7#', '07010030-送水泵房二楼结构',
                '07010063-送水泵房黄墙12#', '07010006-送水泵房玻璃1#', '07010002-送水泵房红字', '07010094-送水泵房窗框5#', '07010093-送水泵房窗框4#',
                '07010019-送水泵房空调1#', '07010096-送水泵房裙摆3#', '07010020-送水泵房空调2#', '07010031-送水泵房背景墙', '07010024-送水泵房大屏',
                '07010027-送水泵房会议桌椅', '07010028-送水泵房办公柜', '07010017-送水泵房地板', '07010029-送水泵房桌', '07010022-送水泵房门禁',
                '07010021-送水泵房大门', '07010116-送水泵房结构22#', '07010114-送水泵房楼梯2#', '07010112-送水泵房结构21#', '07010018-送水泵房内地板',
                '07020013-送水泵房及配电间出厂水监测', '07020098-出厂水浊度分析仪', '07020101-中控系统', '07010025-送水泵房电视', '07010015-送水泵房木门',
                '07010009-送水泵房不锈钢框', '07010023-送水泵房调度控制中心', '07010013-送水泵房栏杆', '07010113-送水泵房楼梯1#', '07010111-送水泵房结构20#',
                '07010110-送水泵房结构19#', '07010026-送水泵房电脑', '07010016-送水泵房百叶', '07010052-送水泵房散水', '07010115-送水泵房缓步台',
                '07020102-机修仓库配电柜', '07020103-机修仓库PLC', '07010062-送水泵房黄墙11#', '07010041-送水泵房监测点水池', '07010042-送水泵房监测点水面',
                '07020100-出厂水PH值', '07020099-出厂水余氯检测仪', '07010050-送水泵房梁1#', '07010043-送水泵房梁2#', '07010003-送水泵房井盖',
                '07010045-送水泵房吸水井水面', '07010088-送水泵房玻璃8#', '07010083-送水泵房玻璃3#', '07010072-送水泵房结构9#', '07010058-送水泵房黄墙7#',
                '07010074-送水泵房结构11#', '07010098-送水泵房裙摆5#', '07010071-送水泵房结构8#', '07010082-送水泵房玻璃2#', '07010060-送水泵房黄墙9#',
                '07010070-送水泵房结构7#', '07010075-送水泵房结构12#', '07010076-送水泵房结构13#', '07010073-送水泵房结构10#', '07010059-送水泵房黄墙8#',
                '07010010-送水泵房黄墙6#', '07010091-送水泵房窗框2#', '07010039-送水泵房卷闸门', '07010066-送水泵房结构3#', '07010064-送水泵房内地板2#',
                '07010068-送水泵房结构5#', '07010069-送水泵房结构6#', '07010065-送水泵房结构2#', '07010051-送水泵房内地板1#', '07010008-送水泵房楼梯',
                '07010097-送水泵房裙摆4#', '07010100-送水泵房裙摆7#', '07010054-送水泵房黄墙2#', '07020038-AH12-1#高压电机', '07020040-AH14高压柜',
                '07020039-AH13高压柜', '07020033-AH6母线隔离柜', '07010099-送水泵房裙摆6#', '07010053-送水泵房结构1#', '07010079-送水泵房结构16#',
                '07010080-送水泵房结构17#', '07010049-送水泵房结构1#', '07010056-送水泵房黄墙4#', '07010089-送水泵房玻璃9#', '07010086-送水泵房玻璃6#',
                '07010084-送水泵房玻璃4#', '07010092-送水泵房窗框3#', '07010007-送水泵房黄墙1#', '07010090-送水泵房窗框1#',
                '07010085-送水泵房玻璃5#', '07010011-送水泵房底座', '07010078-送水泵房结构15#', '07010105-送水泵房裙摆12#', '07010106-送水泵房裙摆13#',
                '07010107-送水泵房裙摆14#', '07010108-送水泵房裙摆15#', '07010109-送水泵房裙摆16#', '07010095-送水泵房裙摆2#', '07010081-送水泵房结构18#',
                '07010055-送水泵房黄墙3#', '07010102-送水泵房裙摆9#', '07010077-送水泵房结构14#', '07010103-送水泵房裙摆10#', '07020035-AH8二回路PT柜',
                '07020053-D13二回路低压进线柜', '07020001-二号变压器', '07020029-AH2一回路PT柜', '07020065-高压软启动柜3', '07020063-高压软启动柜1',
                '07020066-高压软启动柜4', '07020064-高压软启动柜2', '07020058-高压电容柜1号', '07020059-高压电容柜2号', '07020060-高压电容柜3号',
                '07020061-高压电容柜4号', '07020043-D3一回路无功补偿柜', '07020089-一号变压器', '07020041-D1一回路低压进线柜', '07020081-送水泵房PLC柜',
                '07020092-一号送水变频柜', '07020056-二号送水变频柜', '07020073-三号送水变频柜', '07020075-四号送水变频柜', '07020087-五号送水变频柜',
                '07020048-D8低压配电柜', '07020049-D9低压配电柜', '07020050-D10低压配电柜', '07020051-D11二回路无功补偿柜',
                '07020052-D12二回路无功补偿柜', '07020009-AH1一回路进线柜', '07020030-AH3一回路PT柜', '07020031-AH4一回号变压器开关柜',
                '07020032-AH5母线联络柜', '07020005-A11-2#高压电机',
                '07020042-D2一回路无功补偿柜', '07020044-D4低压配电柜', '07020045-D5低压配电柜', '07020046-D6低压配电柜', '07020047-D7低压联络柜',
                '07020057-二期反冲洗泵房PLC柜',
                '07020067-一期反冲洗泵房PLC柜', '07020037-AH10二回路进线柜', '07020036-AH9二回路PT柜', '07020034-AH7二回号边压器开关柜',
                '07010104-送水泵房裙摆11#', '07020004-直流屏', '07020088-蓄电池柜', '07020068-机柜底座 ', '07020062-高压电容柜垫', '07010101-送水泵房裙摆8#',
                '07010067-送水泵房结构4#', '07010005-送水泵房裙摆1#', '07010057-送水泵房黄墙5#', '07020069-排污泵控制箱', '07020072-三号送水泵房就地控制柜',
                '07020055-二号送水泵房就地控制柜', '07020091-一号送水泵房就地控制柜', '07020086-五号送水泵房就地控制柜', '07020074-四号送水泵房就地控制柜',
                '07020066-高压软启动柜8', '07020065-高压软启动柜7', '07020064-高压软启动柜6', '07020063-高压软启动柜5', '07020067-送水配电柜',
                '07020071-配电间排污泵1号', '07020070-配电间排出泵2号', '07020006-送水泵房及配电间管件', '07020085-送水泵房污泥泵控制箱',
                '07020131-1号阀门控制箱', '07020133-2号阀门控制箱', '07020132-2号阀门控制箱', '07020134-3号阀门控制箱', '07020135-4号阀门控制箱',
                '07020130-出厂水浊度分析仪', '07020098-出厂PH仪', '07020129-出厂水液位检测仪', '07020095-出厂水2号流量计', '07020095-出厂水2号流量计',
                '07010121-机房顶', '07010120-送水泵房顶', '07010024-中控室大屏幕', '07010032-送水泵房电脑屏1#', '07010038-送水泵房电脑屏7#',
                '07010036-送水泵房电脑屏5#',
                '07010033-送水泵房电脑屏2#', '07010034-送水泵房电脑屏3#', '07010035-送水泵房电脑屏4#', '07010125-控制中心门3#', '07010124-控制中心门2#',
                '07010126-控制中心门4#',
                '07010127-控制中心栏杆', '07010128-送水泵房百叶2#', '07010016-送水泵房百叶1#', '07010123-控制中心门1#', '07010037-送水泵房电脑屏6#',
                '07010129-送水泵房百叶3#',
                '07010122-机房门', '对象006'
            ];
            var alphaList = []
            var content = tile.content;
            var featuresLength = content.featuresLength;
            var url = tile.tileset.url;
            if (url.indexOf('tujian/07') >= 0) {
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
            if (url.indexOf('jidian/07') >= 0) {
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
        oWaterDelivery.initWaterDeliverySystem();
    },
    pauseFly: function() {
        //暂停时间
        oWaterDelivery.restoreCameraEvents();
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
        oWaterDelivery.startFly();
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
        oWaterDelivery.startDataRoll();
        //显示水流箭头
        oDefault.waterFlowArrowArr.map(function(item) {
                item.show = true;
            })
            //飞行结束 恢复事件 清除数据及面板
        oWaterDelivery.restoreCameraEvents();
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
        oWaterDelivery.createFlyPanel();
        oDefault.flyData.pauseData.currentTime = null;
        oDefault.flyData.pauseData.cameraOrientation = [];
        oDefault.flyData.pauseData.cameraPosition = [];
        //设置角度
        var initialPosition = Cesium.Cartesian3.fromDegrees(106.07193885216948, 29.869789144923022, 49.446810545580355);
        var initialOrientation = new Cesium.HeadingPitchRoll.fromDegrees(180.00, -55.76, 360.00);
        oDefault.viewer.scene.camera.setView({
            destination: initialPosition,
            orientation: initialOrientation,
            endTransform: Cesium.Matrix4.IDENTITY
        });
        oWaterDelivery.audio.pause();
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
        oWaterDelivery.stopDataRoll();
        oDefault.pointSigns.map(function(item) {
                $('#' + item.id).hide()
            })
            //
        oDefault.flyData.isPaused = false;
        oDefault.flyData.isStarted = true;
        oDefault.flyData.isPaused = false;
        //隐藏水流方向
        // oDefault.waterFlowArrowArr.map(function(item) {
        // 	item.show = false;
        // })
        //创建水面
        oWaterDelivery.createWaterSur();
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
        if (oWaterDelivery.flyPositions.length > 0) {
            for (var i = 0; i < oWaterDelivery.flyPositions.length; i++) {
                var x = oWaterDelivery.flyPositions[i][0];
                var y = oWaterDelivery.flyPositions[i][1];
                var z = oWaterDelivery.flyPositions[i][2];
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
                    addStep('seconds', 4, 1);

                }
                if (i == 2) {
                    addStep('seconds', 4, 1);
                }
                if (i == 3) {
                    addStep('seconds', 6, 1);
                }
                if (i == 4) {
                    addStep('seconds', 6, 1);
                }

                if (i == 5) {
                    addStep('distance', 20, 0.15);
                }

                if (i == 6) {
                    addStep('distance', 20, 0.15);
                }

            }
            return property;
        }
        var start = Cesium.JulianDate.fromDate(new Date(2018, 3, 15, 16));
        var stop = Cesium.JulianDate.addSeconds(start, 75.5, new Cesium.JulianDate());
        oDefault.viewer.clock.startTime = start.clone();
        oDefault.viewer.clock.stopTime = stop.clone();
        if (oDefault.flyData.pauseData.currentTime) {
            oDefault.viewer.clock.currentTime = oDefault.flyData.pauseData.currentTime;
        } else {
            oDefault.viewer.clock.currentTime = start.clone();
        }
        oDefault.viewer.clock.clockRange = Cesium.ClockRange.CLAMPED;
        oDefault.viewer.clock.multiplier = 1;
        oDefault.viewer.clock.canAnimate = false;
        oDefault.viewer.clock.shouldAnimate = true;
        var _position = computeCirclularFlight();
        //设置每段位置的朝向
        var timesArr = _position._property._times;
        oWaterDelivery.waterSurEntityTimerangeArr = [];
        oWaterDelivery.orientationArr = [];
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
            viewFrom: new Cesium.Cartesian3(0, 1, 1.45),
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
                oWaterDelivery.waterSurEntityTimerangeArr.map(function(arr) {
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
            oWaterDelivery.timeInputRange = true;
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
                    oWaterDelivery.waterSurEntityTimerangeArr.map(function(arr) {
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
                oWaterDelivery.timeInputRange = false;
                // 方向			
                var cTime = oDefault.viewer.clockViewModel.currentTime;
                oWaterDelivery.orientationArr.forEach(function(item) {
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
                if (oDefault.viewer.clock.multiplier == 1) {
                    oWaterDelivery.audio.play();
                }
            } else {
                oWaterDelivery.startFly();
                oDefault.viewer.clock.shouldAnimate = false;
                var percent = rangeInput.value / 100;
                var addsec = (timeArr[timeArr.length - 1].secondsOfDay - timeArr[0].secondsOfDay) * percent;
                var currentTime = Cesium.JulianDate.addSeconds(start, addsec, new Cesium.JulianDate());
                oDefault.viewer.clockViewModel.currentTime = currentTime;
                oWaterDelivery.timeInputRange = false;
                var cTime = oDefault.viewer.clockViewModel.currentTime;
                oWaterDelivery.orientationArr.forEach(function(item) {
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
                oWaterDelivery.pauseFly();
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
        for (var i = 0; i < oWaterDelivery.dataLabelList.length; i++) {
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
                (-40) * dt,
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
        oDefault.clockTickEvent = function() {
            if (entityFly.position) {
                var currentPosition = entityFly.position.getValue(oDefault.viewer.clock.currentTime);
                var ellipsoid = oDefault.viewer.scene.globe.ellipsoid;
                if (!currentPosition) {
                    //结束飞行
                    oWaterDelivery.stopFly();
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
                        oWaterDelivery.stopFly();
                    }
                    //进度条和时间更新
                    if (!oWaterDelivery.timeInputRange) {
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

                    // ctime = timesArr[0].secondsOfDay;
                    // begin = (ctime + 0.1).toFixed(2);
                    // if (a == begin) {
                    // 	oDefault.waterFlowArrowArr[0].show = true;
                    // 	oDefault.waterFlowArrowArr[1].show = true;
                    // }

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
                106.0721097249, 29.8696183671, 10,
                106.0717909491, 29.8696183671, 10,
                106.0717909491, 29.8695906617, 10,
                106.0721097249, 29.8695906617, 10,
            ],
            "color": [68, 177, 255, 150],
        }
        var color = new Cesium.Color.fromBytes(item.color[0], item.color[1], item.color[2], item.color[3]);
        if (item.type == 'rectangle') {
            var waterPrimitive = new Cesium.Primitive({
                // show: false,
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
                name: 'waterDelivery-watersur-1'
            })
        }
    },
    createTuli: function() {
        var html =
            '<div class="tuli"><div style="height: 30px;line-height: 29px;width: 100%;font-size: 16px;padding-left: 10px;border-bottom: 1px solid rgba(255,255,255,0.15);">图例</div><div style="height: 60px;width: 100%;display: flex;flex-direction: row;"><div style="width: 45%;height: 59px;line-height: 60px;font-size: 16px;padding-left: 10px;border-right: 1px solid rgba(255,255,255,0.15);">泵</div><div style="width: 55%;height: 60px;"><div style="width: 100%;height: 30px;display: flex;flex-direction: row;justify-content: space-around;"><div style="width: 40%;height: 30px;line-height: 29px;font-size: 14px;">停止</div><div style="width: 40%;height: 20px;margin-top:5px ;background-color: #4281a9;"></div></div><div style="width: 100%;height: 30px;display: flex;flex-direction: row;justify-content: space-around;"><div style="width: 40%;height: 30px;line-height: 29px;font-size: 14px;">运行</div><div style="width: 40%;height: 20px;margin-top:5px ;background-color: #B35846;"></div></div></div></div><div style="height: 60px;width: 100%;display: flex;flex-direction: row;"><div style="width: 45%;height: 59px;line-height: 60px;font-size: 16px;padding-left: 10px;border-right: 1px solid rgba(255,255,255,0.15);">阀门</div><div style="width: 55%;height: 60px;"><div style="width: 100%;height: 30px;display: flex;flex-direction: row;justify-content: space-around;"><div style="width: 40%;height: 30px;line-height: 29px;font-size: 14px;">关闭</div><div style="width: 40%;height: 20px;margin-top:5px ;background-color: #4281a9;"></div></div><div style="width: 100%;height: 30px;display: flex;flex-direction: row;justify-content: space-around;"><div style="width: 40%;height: 30px;line-height: 29px;font-size: 14px;">打开</div><div style="width: 40%;height: 20px;margin-top:5px ;background-color: #B35846;"></div></div></div>'
        $('#body').append(html)
    },
    initWaterDeliverySystem: function() {
        oDefault.currentSystem = 'WaterDelivery';
        oWaterDelivery.createFlowLine();
        oWaterDelivery.createTextLabels();
        oWaterDelivery.createWaterSur();
        oWaterDelivery.createFlyPanel();
        oWaterDelivery.createTuli();
        // oWaterDelivery.createDataLabels();
        oWaterDelivery.createEquipStateEvent();

    }
}