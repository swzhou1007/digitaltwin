oDosing = {
    data: [],
    waterSurEntityTimerangeArr: [],
    currentSystem: 'jiajian',
    dosingSystem: {
        "name": "Dosing",
        "cameraPosition": [106.07344711979209, 29.87021513655834, 36.834078841460816],
        "cameraHeadingPitchRoll": [270.57, -55.40, 360.00]
    },
    timeInputRange: false,
    systemCameraControler: null,
    orientationArr: [],
    dataLabelList: [{
            "title": "加碱泵1#",
            "state": "",
            "type": "data",
            "data": [{
                    "text": "状态",
                    "value": function() {
                        var value = '--';
                        oDosing.data.map(function(item) {
                            if (item.opcid == '1jjbyxzs') {
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
                        oDosing.data.map(function(item) {
                            if (item.opcid == '1jjbsdld') {
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
                {
                    "text": "中控/自动",
                    "value": function() {
                        var value = '--';
                        oDosing.data.map(function(item) {
                            if (item.opcid == '1jjbzkzd') {
                                if (item.opcvalue == '0') {
                                    value = '中控'
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
                {
                    "text": "频率",
                    "value": function() {
                        var value = '--';
                        oDosing.data.map(function(item) {
                            if (item.opcid == '1jjbpl') {
                                value = parseFloat(item.opcvalue).toFixed(2);
                            }
                        })
                        return value;
                    },
                    "unit": "Hz"
                },
                {
                    "text": "实际冲程",
                    "value": function() {
                        var value = '--';
                        oDosing.data.map(function(item) {
                            if (item.opcid == '1jjbsjcc') {
                                value = parseFloat(item.opcvalue).toFixed(2);
                            }
                        })
                        return value;
                    },
                    "unit": "%"
                },
                {
                    "text": "本次运行时间",
                    "value": function() {
                        var value = '--';
                        var H = '';
                        var M = '';
                        oDosing.data.map(function(item) {
                            if (item.opcid == '1jjbbcyxsjh') {
                                H = parseFloat(item.opcvalue).toFixed(2);
                            }
                            if (item.opcid == '1jjbbcyxsjm') {
                                M = parseFloat(item.opcvalue).toFixed(2);
                            }
                        })
                        return value = H + ":" + M;
                    },
                    "unit": " H:M"
                },
                {
                    "text": "累计运行时间",
                    "value": function() {
                        var value = '--';
                        var H = '';
                        var M = '';
                        oDosing.data.map(function(item) {
                            if (item.opcid == '1jjbljyxsjh') {
                                H = parseFloat(item.opcvalue).toFixed(2);
                            }
                            if (item.opcid == '1jjbljyxsjm') {
                                M = parseFloat(item.opcvalue).toFixed(2);
                            }
                        })
                        return value = H + ":" + M;
                    },
                    "unit": " H:M"
                }
            ],
            "position": [106.0732365483, 29.8702706672, 12.4],
            "orientation": [90, -30, 5],
            "showUpTime": 85.4,
            "showUpCameraDistance": 13,
            "labelID": "Dosing-label-10-1",
            "pid": "04",
            "system": "Dosing-jiajian"
        },
        {
            "title": "加碱泵2#",
            "state": "",
            "type": "data",
            "data": [{
                    "text": "状态",
                    "value": function() {
                        var value = '--';
                        oDosing.data.map(function(item) {
                            if (item.opcid == '2jjbyxzs') {
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
                        oDosing.data.map(function(item) {
                            if (item.opcid == '2jjbsdld') {
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
                {
                    "text": "中控/自动",
                    "value": function() {
                        var value = '--';
                        oDosing.data.map(function(item) {
                            if (item.opcid == '2jjbzkzd') {
                                if (item.opcvalue == '0') {
                                    value = '中控'
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
                {
                    "text": "频率",
                    "value": function() {
                        var value = '--';
                        oDosing.data.map(function(item) {
                            if (item.opcid == '2jjbpl') {
                                value = parseFloat(item.opcvalue).toFixed(2);
                            }
                        })
                        return value;
                    },
                    "unit": "Hz"
                },
                {
                    "text": "实际冲程",
                    "value": function() {
                        var value = '--';
                        oDosing.data.map(function(item) {
                            if (item.opcid == '2jjbsjcc') {
                                value = parseFloat(item.opcvalue).toFixed(2);
                            }
                        })
                        return value;
                    },
                    "unit": "%"
                },
                {
                    "text": "本次运行时间",
                    "value": function() {
                        var value = '--';
                        var H = '';
                        var M = '';
                        oDosing.data.map(function(item) {
                            if (item.opcid == '2jjbbcyxsjh') {
                                H = parseFloat(item.opcvalue).toFixed(2);
                            }
                            if (item.opcid == '2jjbbcyxsjm') {
                                M = parseFloat(item.opcvalue).toFixed(2);
                            }
                        })
                        return value = H + ":" + M;
                    },
                    "unit": " H:M"
                },
                {
                    "text": "累计运行时间",
                    "value": function() {
                        var value = '--';
                        var H = '';
                        var M = '';
                        oDosing.data.map(function(item) {
                            if (item.opcid == '2jjbljyxsjh') {
                                H = parseFloat(item.opcvalue).toFixed(2);
                            }
                            if (item.opcid == '2jjbljyxsjm') {
                                M = parseFloat(item.opcvalue).toFixed(2);
                            }
                        })
                        return value = H + ":" + M;
                    },
                    "unit": " H:M"
                }
            ],
            "position": [106.0732503393, 29.8702706672, 12.4],
            "orientation": [90, -30, 5],
            "showUpTime": 85.4,
            "showUpCameraDistance": 13,
            "labelID": "Dosing-label-10-2",
            "pid": "04",
            "system": "Dosing-jiajian"
        },
        {
            "title": "加碱泵3#",
            "state": "",
            "type": "data",
            "data": [{
                    "text": "状态",
                    "value": function() {
                        var value = '--';
                        oDosing.data.map(function(item) {
                            if (item.opcid == '3jjbyxzs') {
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
                        oDosing.data.map(function(item) {
                            if (item.opcid == '3jjbsdld') {
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
                {
                    "text": "中控/自动",
                    "value": function() {
                        var value = '--';
                        oDosing.data.map(function(item) {
                            if (item.opcid == '3jjbzkzd') {
                                if (item.opcvalue == '0') {
                                    value = '中控'
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
                {
                    "text": "频率",
                    "value": function() {
                        var value = '--';
                        oDosing.data.map(function(item) {
                            if (item.opcid == '3jjbpl') {
                                value = parseFloat(item.opcvalue).toFixed(2);
                            }
                        })
                        return value;
                    },
                    "unit": "Hz"
                },
                {
                    "text": "实际冲程",
                    "value": function() {
                        var value = '--';
                        oDosing.data.map(function(item) {
                            if (item.opcid == '3jjbsjcc') {
                                value = parseFloat(item.opcvalue).toFixed(2);
                            }
                        })
                        return value;
                    },
                    "unit": "%"
                },
                {
                    "text": "本次运行时间",
                    "value": function() {
                        var value = '--';
                        var H = '';
                        var M = '';
                        oDosing.data.map(function(item) {
                            if (item.opcid == '3jjbbcyxsjh') {
                                H = parseFloat(item.opcvalue).toFixed(2);
                            }
                            if (item.opcid == '3jjbbcyxsjm') {
                                M = parseFloat(item.opcvalue).toFixed(2);
                            }
                        })
                        return value = H + ":" + M;
                    },
                    "unit": " H:M"
                },
                {
                    "text": "累计运行时间",
                    "value": function() {
                        var value = '--';
                        var H = '';
                        var M = '';
                        oDosing.data.map(function(item) {
                            if (item.opcid == '3jjbljyxsjh') {
                                H = parseFloat(item.opcvalue).toFixed(2);
                            }
                            if (item.opcid == '3jjbljyxsjm') {
                                M = parseFloat(item.opcvalue).toFixed(2);
                            }
                        })
                        return value = H + ":" + M;
                    },
                    "unit": " H:M"
                }
            ],
            "position": [106.0732621545, 29.8702706672, 12.4],
            "orientation": [90, -30, 5],
            "showUpTime": 85.4,
            "showUpCameraDistance": 13,
            "labelID": "Dosing-label-10-3",
            "pid": "04",
            "system": "Dosing-jiajian"
        },
        {
            "title": "加碱泵4#",
            "state": "",
            "type": "data",
            "data": [{
                    "text": "状态",
                    "value": function() {
                        var value = '--';
                        oDosing.data.map(function(item) {
                            if (item.opcid == '4jjbyxzs') {
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
                        oDosing.data.map(function(item) {
                            if (item.opcid == '4jjbsdld') {
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
                {
                    "text": "中控/自动",
                    "value": function() {
                        var value = '--';
                        oDosing.data.map(function(item) {
                            if (item.opcid == '4jjbzkzd') {
                                if (item.opcvalue == '0') {
                                    value = '中控'
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
                {
                    "text": "频率",
                    "value": function() {
                        var value = '--';
                        oDosing.data.map(function(item) {
                            if (item.opcid == '4jjbpl') {
                                value = parseFloat(item.opcvalue).toFixed(2);
                            }
                        })
                        return value;
                    },
                    "unit": "Hz"
                },
                {
                    "text": "实际冲程",
                    "value": function() {
                        var value = '--';
                        oDosing.data.map(function(item) {
                            if (item.opcid == '4jjbsjcc') {
                                value = parseFloat(item.opcvalue).toFixed(2);
                            }
                        })
                        return value;
                    },
                    "unit": "%"
                },
                {
                    "text": "本次运行时间",
                    "value": function() {
                        var value = '--';
                        var H = '';
                        var M = '';
                        oDosing.data.map(function(item) {
                            if (item.opcid == '4jjbbcyxsjh') {
                                H = parseFloat(item.opcvalue).toFixed(2);
                            }
                            if (item.opcid == '4jjbbcyxsjm') {
                                M = parseFloat(item.opcvalue).toFixed(2);
                            }
                        })
                        return value = H + ":" + M;
                    },
                    "unit": " H:M"
                },
                {
                    "text": "累计运行时间",
                    "value": function() {
                        var value = '--';
                        var H = '';
                        var M = '';
                        oDosing.data.map(function(item) {
                            if (item.opcid == '4jjbljyxsjh') {
                                H = parseFloat(item.opcvalue).toFixed(2);
                            }
                            if (item.opcid == '4jjbljyxsjm') {
                                M = parseFloat(item.opcvalue).toFixed(2);
                            }
                        })
                        return value = H + ":" + M;
                    },
                    "unit": " H:M"
                }
            ],
            "position": [106.0732740455, 29.8702706672, 12.4],
            "orientation": [90, -30, 5],
            "showUpTime": 85.4,
            "showUpCameraDistance": 13,
            "labelID": "Dosing-label-10-4",
            "pid": "04",
            "system": "Dosing-jiajian"
        },

        {
            "title": "加碱储药池1#",
            "state": "",
            "type": "data",
            "data": [{
                    "text": "液位",
                    "value": function() {
                        var value = '--';
                        oDosing.data.map(function(item) {
                            if (item.opcid == 'jjxt1cycyw') {
                                value = parseFloat(item.opcvalue).toFixed(2);
                            }
                        })
                        return value;
                    },
                    "unit": "m"
                }

            ],
            "position": [106.0732635303, 29.87032308348, 12],
            "orientation": [90, -30, 5],
            "showUpTime": 85.4,
            "showUpCameraDistance": 13,
            "labelID": "Dosing-label-1",
            "pid": "04",
            "system": "Dosing-jiajian"
        },
        {
            "title": "加碱储药池2#",

            "type": "data",
            "data": [{
                    "text": "液位",
                    "value": function() {
                        var value = '--';
                        oDosing.data.map(function(item) {
                            if (item.opcid == 'jjxt2cycyw') {
                                value = parseFloat(item.opcvalue).toFixed(2);
                            }
                        })
                        return value;
                    },
                    "unit": "m"
                }

            ],
            "position": [106.0732474657, 29.87032308348, 12],
            "orientation": [90, -30, 5],
            "showUpTime": 85.4,
            "showUpCameraDistance": 13,
            "labelID": "Dosing-label-4",
            "pid": "04",
            "system": "Dosing-jiajian"
        },
        {
            "title": "加碱加药池1#",

            "type": "data",
            "data": [{
                    "text": "液位",
                    "value": function() {
                        var value = '--';
                        oDosing.data.map(function(item) {
                            if (item.opcid == 'jjxt1ycyw') {
                                value = parseFloat(item.opcvalue).toFixed(2);
                            }
                        })
                        return value;
                    },
                    "unit": "m"
                }

            ],
            "position": [106.0732635303, 29.8702961285, 13.5],
            "orientation": [90, -30, 5],
            "showUpTime": 85.4,
            "showUpCameraDistance": 13,
            "labelID": "Dosing-label-2",
            "pid": "04",
            "system": "Dosing-jiajian"
        },
        {
            "title": "加碱加药池2#",

            "type": "data",
            "data": [{
                    "text": "液位",
                    "value": function() {
                        var value = '--';
                        oDosing.data.map(function(item) {
                            if (item.opcid == 'jjxt2ycyw') {
                                value = parseFloat(item.opcvalue).toFixed(2);
                            }
                        })
                        return value;
                    },
                    "unit": "m"
                }

            ],
            "position": [106.0732474657, 29.8702956088, 13.5],
            "orientation": [90, -30, 5],
            "showUpTime": 85.4,
            "showUpCameraDistance": 13,
            "labelID": "Dosing-label-3",
            "pid": "04",
            "system": "Dosing-jiajian"
        },
        {
            "title": "加矾加药池1#",

            "type": "data",
            "data": [{
                    "text": "液位",
                    "value": function() {
                        var value = '--';
                        oDosing.data.map(function(item) {
                            if (item.opcid == 'jfxt1ycyw') {
                                value = parseFloat(item.opcvalue).toFixed(2);
                            }
                        })
                        return value;
                    },
                    "unit": "m"
                }

            ],
            "position": [106.0732748819, 29.8702516562, 13.5],
            "orientation": [90, -30, 5],
            "showUpTime": 85.4,
            "showUpCameraDistance": 13,
            "labelID": "Dosing-label-02-01",
            "pid": "04",
            "system": "Dosing-jiafan"
        },
        {
            "title": "加矾加药池2#",

            "type": "data",
            "data": [{
                    "text": "液位",
                    "value": function() {
                        var value = '--';
                        oDosing.data.map(function(item) {
                            if (item.opcid == 'jfxt2ycyw') {
                                value = parseFloat(item.opcvalue).toFixed(2);
                            }
                        })
                        return value;
                    },
                    "unit": "m"
                }

            ],
            "position": [106.0732489627, 29.8702547482, 13.5],
            "orientation": [90, -30, 5],
            "showUpTime": 85.4,
            "showUpCameraDistance": 13,
            "labelID": "Dosing-label-02-02",
            "pid": "04",
            "system": "Dosing-jiafan"
        },
        {
            "title": "加矾加药池3#",

            "type": "data",
            "data": [{
                    "text": "液位",
                    "value": function() {
                        var value = '--';
                        oDosing.data.map(function(item) {
                            if (item.opcid == 'jfxt3ycyw') {
                                value = parseFloat(item.opcvalue).toFixed(2);
                            }
                        })
                        return value;
                    },
                    "unit": "m"
                }

            ],
            "position": [106.0732319074, 29.8702495264, 13.5],
            "orientation": [90, -30, 5],
            "showUpTime": 85.4,
            "showUpCameraDistance": 13,
            "labelID": "Dosing-label-02-03",
            "pid": "04",
            "system": "Dosing-jiafan"
        },
        {
            "title": "加矾泵1#",
            "state": "",
            "type": "data",
            "data": [{
                    "text": "状态",
                    "value": function() {
                        var value = '--';
                        oDosing.data.map(function(item) {
                            if (item.opcid == '1jfbyxzs') {
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
                        oDosing.data.map(function(item) {
                            if (item.opcid == '1jfbsdld') {
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
                {
                    "text": "中控/自动",
                    "value": function() {
                        var value = '--';
                        oDosing.data.map(function(item) {
                            if (item.opcid == '1jfbzkzd') {
                                if (item.opcvalue == '0') {
                                    value = '中控'
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
                {
                    "text": "频率",
                    "value": function() {
                        var value = '--';
                        oDosing.data.map(function(item) {
                            if (item.opcid == '1jfbpl') {
                                value = parseFloat(item.opcvalue).toFixed(2);
                            }
                        })
                        return value;
                    },
                    "unit": "Hz"
                },
                {
                    "text": "实际冲程",
                    "value": function() {
                        var value = '--';
                        oDosing.data.map(function(item) {
                            if (item.opcid == '1jfbsjcc') {
                                value = parseFloat(item.opcvalue).toFixed(2);
                            }
                        })
                        return value;
                    },
                    "unit": "%"
                },
                {
                    "text": "本次运行时间",
                    "value": function() {
                        var value = '--';
                        var H = '';
                        var M = '';
                        oDosing.data.map(function(item) {
                            if (item.opcid == '1jfbbcyxsjh') {
                                H = parseFloat(item.opcvalue).toFixed(2);
                            }
                            if (item.opcid == '1jfbbcyxsjm') {
                                M = parseFloat(item.opcvalue).toFixed(2);
                            }
                        })
                        return value = H + ":" + M;
                    },
                    "unit": " H:M"
                },
                {
                    "text": "累计运行时间",
                    "value": function() {
                        var value = '--';
                        var H = '';
                        var M = '';
                        oDosing.data.map(function(item) {
                            if (item.opcid == '1jfbljyxsjh') {
                                H = parseFloat(item.opcvalue).toFixed(2);
                            }
                            if (item.opcid == '1jfbljyxsjm') {
                                M = parseFloat(item.opcvalue).toFixed(2);
                            }
                        })
                        return value = H + ":" + M;
                    },
                    "unit": " H:M"
                }
            ],
            "position": [106.0732335481, 29.8702322910, 12.4],
            "orientation": [90, -30, 5],
            "showUpTime": 85.4,
            "showUpCameraDistance": 13,
            "labelID": "Dosing-label-11-1",
            "pid": "04",
            "system": "Dosing-jiafan"
        },
        {
            "title": "加矾泵2#",
            "state": "",
            "type": "data",
            "data": [{
                    "text": "状态",
                    "value": function() {
                        var value = '--';
                        oDosing.data.map(function(item) {
                            if (item.opcid == '2jfbyxzs') {
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
                        oDosing.data.map(function(item) {
                            if (item.opcid == '2jfbsdld') {
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
                {
                    "text": "中控/自动",
                    "value": function() {
                        var value = '--';
                        oDosing.data.map(function(item) {
                            if (item.opcid == '2jfbzkzd') {
                                if (item.opcvalue == '0') {
                                    value = '中控'
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
                {
                    "text": "频率",
                    "value": function() {
                        var value = '--';
                        oDosing.data.map(function(item) {
                            if (item.opcid == '2jfbpl') {
                                value = parseFloat(item.opcvalue).toFixed(2);
                            }
                        })
                        return value;
                    },
                    "unit": "Hz"
                },
                {
                    "text": "实际冲程",
                    "value": function() {
                        var value = '--';
                        oDosing.data.map(function(item) {
                            if (item.opcid == '2jfbsjcc') {
                                value = parseFloat(item.opcvalue).toFixed(2);
                            }
                        })
                        return value;
                    },
                    "unit": "%"
                },
                {
                    "text": "本次运行时间",
                    "value": function() {
                        var value = '--';
                        var H = '';
                        var M = '';
                        oDosing.data.map(function(item) {
                            if (item.opcid == '2jfbbcyxsjh') {
                                H = parseFloat(item.opcvalue).toFixed(2);
                            }
                            if (item.opcid == '2jfbbcyxsjm') {
                                M = parseFloat(item.opcvalue).toFixed(2);
                            }
                        })
                        return value = H + ":" + M;
                    },
                    "unit": " H:M"
                },
                {
                    "text": "累计运行时间",
                    "value": function() {
                        var value = '--';
                        var H = '';
                        var M = '';
                        oDosing.data.map(function(item) {
                            if (item.opcid == '2jfbljyxsjh') {
                                H = parseFloat(item.opcvalue).toFixed(2);
                            }
                            if (item.opcid == '2jfbljyxsjm') {
                                M = parseFloat(item.opcvalue).toFixed(2);
                            }
                        })
                        return value = H + ":" + M;
                    },
                    "unit": " H:M"
                }
            ],
            "position": [106.0732488321, 29.8702322910, 12.4],
            "orientation": [90, -30, 5],
            "showUpTime": 85.4,
            "showUpCameraDistance": 13,
            "labelID": "Dosing-label-11-2",
            "pid": "04",
            "system": "Dosing-jiafan"
        },
        {
            "title": "加矾泵3#",
            "state": "",
            "type": "data",
            "data": [{
                    "text": "状态",
                    "value": function() {
                        var value = '--';
                        oDosing.data.map(function(item) {
                            if (item.opcid == '3jfbyxzs') {
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
                        oDosing.data.map(function(item) {
                            if (item.opcid == '3jfbsdld') {
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
                {
                    "text": "中控/自动",
                    "value": function() {
                        var value = '--';
                        oDosing.data.map(function(item) {
                            if (item.opcid == '3jfbzkzd') {
                                if (item.opcvalue == '0') {
                                    value = '中控'
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
                {
                    "text": "频率",
                    "value": function() {
                        var value = '--';
                        oDosing.data.map(function(item) {
                            if (item.opcid == '3jfbpl') {
                                value = parseFloat(item.opcvalue).toFixed(2);
                            }
                        })
                        return value;
                    },
                    "unit": "Hz"
                },
                {
                    "text": "实际冲程",
                    "value": function() {
                        var value = '--';
                        oDosing.data.map(function(item) {
                            if (item.opcid == '3jfbsjcc') {
                                value = parseFloat(item.opcvalue).toFixed(2);
                            }
                        })
                        return value;
                    },
                    "unit": "%"
                },
                {
                    "text": "本次运行时间",
                    "value": function() {
                        var value = '--';
                        var H = '';
                        var M = '';
                        oDosing.data.map(function(item) {
                            if (item.opcid == '3jfbbcyxsjh') {
                                H = parseFloat(item.opcvalue).toFixed(2);
                            }
                            if (item.opcid == '3jfbbcyxsjm') {
                                M = parseFloat(item.opcvalue).toFixed(2);
                            }
                        })
                        return value = H + ":" + M;
                    },
                    "unit": " H:M"
                },
                {
                    "text": "累计运行时间",
                    "value": function() {
                        var value = '--';
                        var H = '';
                        var M = '';
                        oDosing.data.map(function(item) {
                            if (item.opcid == '3jfbljyxsjh') {
                                H = parseFloat(item.opcvalue).toFixed(2);
                            }
                            if (item.opcid == '3jfbljyxsjm') {
                                M = parseFloat(item.opcvalue).toFixed(2);
                            }
                        })
                        return value = H + ":" + M;
                    },
                    "unit": " H:M"
                }
            ],
            "position": [106.0732613757, 29.8702322910, 12.4],
            "orientation": [90, -30, 5],
            "showUpTime": 85.4,
            "showUpCameraDistance": 13,
            "labelID": "Dosing-label-11-3",
            "pid": "04",
            "system": "Dosing-jiafan"
        },

    ],
    textLabelList: [{
            "name": "加碱储液池",
            "id": "dosing-01",
            "position": [106.0732961496, 29.8701241664, 12]
        },
        {
            "name": "加碱配药池",
            "id": "dosing-02",
            "position": [106.0732507902, 29.8703372456, 12.5]
        },
        {
            "name": "加碱加药池",
            "id": "dosing-03",
            "position": [106.0732507902, 29.8702905444, 14]
        },
        {
            "name": "加矾加药池",
            "id": "dosing-04",
            "position": [106.0732407902, 29.8702513409, 14]
        },
        {
            "name": "PH投药混合器",
            "id": "dosing-05",
            "position": [106.0731874565, 29.8702109167, 13.2]
        },
        {
            "name": "集碱池输送泵1#",
            "id": "dosing-06",
            "position": [106.0732870062, 29.8701714092, 10.2]
        },
        {
            "name": "集碱池输送泵2#",
            "id": "dosing-07",
            "position": [106.0732890062, 29.8701636081, 10.2]
        },
        {
            "name": "去碱池管道",
            "id": "dosing-08",
            "position": [106.0733100181, 29.8701881429, 11]
        },
        {
            "name": "加碱进水管道",
            "id": "dosing-09",
            "position": [106.0732448543, 29.8703573681, 11.5]
        },
        {
            "name": "加碱管道",
            "id": "dosing-10",
            "position": [106.0732838816, 29.8703415561, 11.5]
        },
        {
            "name": "碱配药池搅拌器1#",
            "id": "dosing-11",
            "position": [106.0732607902, 29.8703273620, 12.5]
        },
        {
            "name": "碱配药池搅拌器2#",
            "id": "dosing-12",
            "position": [106.0732361860, 29.8703274803, 12.5]
        },
        {
            "name": "加碱自吸泵2#",
            "id": "dosing-13",
            "position": [106.0732464726, 29.8703078425, 11]
        },
        {
            "name": "加碱自吸泵1#",
            "id": "dosing-14",
            "position": [106.0732575282, 29.8703078425, 11]
        },
        {
            "name": "碱加药池搅拌器1#",
            "id": "dosing-15",
            "position": [106.0732607902, 29.8702905444, 13.7]
        },
        {
            "name": "碱加药池搅拌器2#",
            "id": "dosing-16",
            "position": [106.0732381860, 29.8702905444, 13.7]
        },
        {
            "name": "碱加药池进水管道",
            "id": "dosing-17",
            "position": [106.0732209425, 29.8703000851, 11.8]
        },
        {
            "name": "加碱泵1#",
            "id": "dosing-18",
            "position": [106.0732703659, 29.8702717718, 12.5]
        },
        {
            "name": "加碱泵2#",
            "id": "dosing-19",
            "position": [106.0732593659, 29.8702717718, 12.5]
        },

        {
            "name": "加碱泵3#",
            "id": "dosing-20",
            "position": [106.0732483659, 29.8702717718, 12.5]
        },

        {
            "name": "加碱泵4#",
            "id": "dosing-21",
            "position": [106.0732373659, 29.8702717718, 12.5]
        },
        {
            "name": "加碱去源水管道",
            "id": "dosing-22",
            "position": [106.0732168426, 29.8702788041, 11.9]
        },
        {
            "name": "加矾进水管道",
            "id": "dosing-23",
            "position": [106.0732288542, 29.8702621693, 12.2]
        },

        {
            "name": "加矾搅拌机3#",
            "id": "dosing-24",
            "position": [106.0732305596, 29.8702509957, 13.7]
        },
        {
            "name": "加矾搅拌机2#",
            "id": "dosing-25",
            "position": [106.0732485596, 29.8702509957, 13.7]
        },
        {
            "name": "加矾搅拌机1#",
            "id": "dosing-26",
            "position": [106.0732685596, 29.8702509957, 13.7]
        },
        {
            "name": "加矾泵1#",
            "id": "dosing-27",
            "position": [106.0732632202, 29.8702344094, 12.5]
        },
        {
            "name": "加矾泵2#",
            "id": "dosing-28",
            "position": [106.0732462202, 29.8702344094, 12.5]
        },
        {
            "name": "加矾泵3#",
            "id": "dosing-29",
            "position": [106.0732312202, 29.8702344094, 12.5]
        },
        {
            "name": "加矾去源水管道",
            "id": "dosing-30",
            "position": [106.0732207556, 29.8702333644, 12.1]
        },
    ],
    flyPositions: [
        [106.07344711979209, 29.87021513655834, 36.83407883979695],
        [106.0733488689865, 29.8701761344677, 20.36420724277456],
        [106.0733488689865, 29.8701761344677, 20.36420724277456],
        [106.0733488689865, 29.870284369838738, 20.36420724277456],
        [106.0733488689865, 29.870284369838738, 20.36420724277456],
        [106.0733488689865, 29.870368658655288, 20.36420724277456],
        [106.0733488689865, 29.870368658655288, 20.36420724277456],
        [106.0733488689865, 29.870324369838738, 22.06420724277456],
        [106.0733488689865, 29.870324369838738, 22.06420724277456],
        [106.0733488689865, 29.870244369838738, 22.06420724277456],
        [106.0733488689865, 29.870244369838738, 22.06420724277456],
        [106.0733038179274, 29.870244369838738, 22.06420724277456],
        [106.0733038179274, 29.870244369838738, 22.06420724277456],
    ],
    flyPositions2: [
        [106.07331078388147, 29.870295328567416, 22.16453108401709],
        [106.07331078388147, 29.870295328567416, 22.16453108401709],
        [106.07331036188346, 29.870241009890645, 22.08282665681296],
        [106.07331036188346, 29.870241009890645, 22.08282665681296],
        [106.07331036188346, 29.87020358652616, 22.08282665681296],
        [106.07331036188346, 29.87020358652616, 22.08282665681296],
        [106.07327759412071, 29.87020358652616, 22.08282665681296],
        [106.07327759412071, 29.87020358652616, 22.08282665681296]
    ],
    cameraPositions: [{
            "cameraPosition": [106.07344711979209, 29.87021513655834, 36.834078841460816],
            "cameraHeadingPitchRoll": ["270.57", "-55.40", "360.00"]
        },
        {
            "cameraPosition": [106.0733211345773, 29.870304349711567, 24.1645312311098],
            "cameraHeadingPitchRoll": ["225", "-55", "360.00"]
        },
    ],
    currentSight: {
        "cameraPosition": [106.07344711979209, 29.87021513655834, 36.834078841460816],
        "cameraHeadingPitchRoll": ["270.57", "-55.40", "360.00"]
    },
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
        //polygon
        oDefault.waterFlowArrowArr = [];
        if (oDosing.currentSystem == 'jiajian') {
            //1
            var positions = Cesium.Cartesian3.fromDegreesArray(
                [
                    106.0733106845, 29.8701775829,
                    106.0733106845, 29.8701899225,
                    106.0733065449, 29.8701899225,
                    106.0733065449, 29.8701775829
                ]);
            var p2 = oDefault.viewer.entities.add({
                polygon: {
                    hierarchy: {
                        positions: positions
                    },
                    height: 11,
                    //outline: true,
                    stRotation: Cesium.Math.toRadians(0),
                    material: new Cesium.PolylineTrailLinkMaterialPropertyV(Cesium.Color.WHITE, 1000)
                }
            })
            oDefault.waterFlowArrowArr.push(p2);
            //2
            var positions = Cesium.Cartesian3.fromDegreesArray(
                [
                    106.0733106845, 29.8702575829,
                    106.0733106845, 29.8702699225,
                    106.0733065449, 29.8702699225,
                    106.0733065449, 29.8702575829
                ]);
            var p2 = oDefault.viewer.entities.add({
                polygon: {
                    hierarchy: {
                        positions: positions
                    },
                    height: 11,
                    //outline: true,
                    stRotation: Cesium.Math.toRadians(0),
                    material: new Cesium.PolylineTrailLinkMaterialPropertyV(Cesium.Color.WHITE, 1000)
                }
            })
            oDefault.waterFlowArrowArr.push(p2);
            //3
            var positions = Cesium.Cartesian3.fromDegreesArray(
                [
                    106.0733106845, 29.8703275829,
                    106.0733106845, 29.8703399225,
                    106.0733065449, 29.8703399225,
                    106.0733065449, 29.8703275829
                ]);
            var p2 = oDefault.viewer.entities.add({
                polygon: {
                    hierarchy: {
                        positions: positions
                    },
                    height: 11,
                    //outline: true,
                    stRotation: Cesium.Math.toRadians(0),
                    material: new Cesium.PolylineTrailLinkMaterialPropertyV(Cesium.Color.WHITE, 1000)
                }
            })
            oDefault.waterFlowArrowArr.push(p2);
            //4
            var positions = Cesium.Cartesian3.fromDegreesArray(
                [
                    106.0732881200, 29.8703480257,
                    106.0732782857, 29.8703480257,
                    106.0732782857, 29.8703440327,
                    106.0732881200, 29.8703440327
                ]);
            var p2 = oDefault.viewer.entities.add({
                polygon: {
                    hierarchy: {
                        positions: positions
                    },
                    height: 11.5,
                    //outline: true,
                    stRotation: Cesium.Math.toRadians(-90),
                    material: new Cesium.PolylineTrailLinkMaterialPropertyV(Cesium.Color.WHITE, 1000)
                }
            })
            oDefault.waterFlowArrowArr.push(p2);
            //5
            var positions = Cesium.Cartesian3.fromDegreesArray(
                [
                    106.0732421474, 29.8703601124,
                    106.0732421474, 29.8703502215,
                    106.0732473429, 29.870350215,
                    106.0732473429, 29.8703601124
                ]);
            var p2 = oDefault.viewer.entities.add({
                polygon: {
                    hierarchy: {
                        positions: positions
                    },
                    height: 11.5,
                    //outline: true,
                    stRotation: Cesium.Math.toRadians(180),
                    material: new Cesium.PolylineTrailLinkMaterialPropertyV(Cesium.Color.LIMEGREEN, 1000)
                }
            })
            oDefault.waterFlowArrowArr.push(p2);
            //6
            var positions = Cesium.Cartesian3.fromDegreesArray(
                [
                    106.0732631474, 29.8703441124,
                    106.0732631474, 29.8703392215,
                    106.0732673429, 29.8703392215,
                    106.0732673429, 29.8703441124
                ]);
            var p2 = oDefault.viewer.entities.add({
                polygon: {
                    hierarchy: {
                        positions: positions
                    },
                    height: 12,
                    //outline: true,
                    stRotation: Cesium.Math.toRadians(180),
                    material: new Cesium.PolylineTrailLinkMaterialPropertyV(Cesium.Color.WHITE, 1000)
                }
            })
            oDefault.waterFlowArrowArr.push(p2);
            //7
            var positions = Cesium.Cartesian3.fromDegreesArray(
                [
                    106.0732271474, 29.8703441124,
                    106.0732271474, 29.8703392215,
                    106.0732313429, 29.8703392215,
                    106.0732313429, 29.8703441124
                ]);
            var p2 = oDefault.viewer.entities.add({
                polygon: {
                    hierarchy: {
                        positions: positions
                    },
                    height: 12,
                    // outline: true,
                    stRotation: Cesium.Math.toRadians(180),
                    material: new Cesium.PolylineTrailLinkMaterialPropertyV(Cesium.Color.WHITE, 1000)
                }
            })
            oDefault.waterFlowArrowArr.push(p2);
            //8
            var positions = Cesium.Cartesian3.fromDegreesArray(
                [
                    106.0732671474, 29.8703151124,
                    106.0732671474, 29.8703102215,
                    106.0732713429, 29.8703102215,
                    106.0732713429, 29.8703151124
                ]);
            var p2 = oDefault.viewer.entities.add({
                polygon: {
                    hierarchy: {
                        positions: positions
                    },
                    height: 10.5,
                    // outline: true,
                    stRotation: Cesium.Math.toRadians(180),
                    material: new Cesium.PolylineTrailLinkMaterialPropertyV(Cesium.Color.WHITE, 1000)
                }
            })
            oDefault.waterFlowArrowArr.push(p2);
            //9
            var positions = Cesium.Cartesian3.fromDegreesArray(
                [
                    106.0732341474, 29.8703151124,
                    106.0732341474, 29.8703102215,
                    106.0732383429, 29.8703102215,
                    106.0732383429, 29.8703151124
                ]);
            var p2 = oDefault.viewer.entities.add({
                polygon: {
                    hierarchy: {
                        positions: positions
                    },
                    height: 10.5,
                    //outline: true,
                    stRotation: Cesium.Math.toRadians(180),
                    material: new Cesium.PolylineTrailLinkMaterialPropertyV(Cesium.Color.WHITE, 1000)
                }
            })
            oDefault.waterFlowArrowArr.push(p2);
            //10
            var positions = Cesium.Cartesian3.fromDegreesArrayHeights(
                [
                    106.0732504056, 29.8703047591, 12.5,
                    106.0732538839, 29.8703047591, 12.5
                ]);
            var w3 = oDefault.viewer.entities.add({
                wall: {
                    positions: positions,
                    minimumHeights: [11.5, 11.5],
                    stRotation: Cesium.Math.toRadians(90),
                    material: new Cesium.PolylineTrailLinkMaterialPropertyV(Cesium.Color.WHITE, 1000)
                }
            })
            oDefault.waterFlowArrowArr.push(w3);
            //11
            var positions = Cesium.Cartesian3.fromDegreesArray(
                [
                    106.0732500056, 29.8703051124,
                    106.0732500056, 29.8703002215,
                    106.0732540839, 29.8703002215,
                    106.0732540839, 29.8703051124
                ]);
            var p2 = oDefault.viewer.entities.add({
                polygon: {
                    hierarchy: {
                        positions: positions
                    },
                    height: 13.3,
                    // outline: true,
                    stRotation: Cesium.Math.toRadians(180),
                    material: new Cesium.PolylineTrailLinkMaterialPropertyV(Cesium.Color.WHITE, 1000)
                }
            })
            oDefault.waterFlowArrowArr.push(p2);

            //12
            var positions = Cesium.Cartesian3.fromDegreesArray(
                [
                    106.0732380056, 29.8703021124,
                    106.0732380056, 29.8702972215,
                    106.0732418839, 29.8702972215,
                    106.0732418839, 29.8703021124
                ]);
            var p2 = oDefault.viewer.entities.add({
                polygon: {
                    hierarchy: {
                        positions: positions
                    },
                    height: 13.3,
                    // outline: true,
                    stRotation: Cesium.Math.toRadians(180),
                    material: new Cesium.PolylineTrailLinkMaterialPropertyV(Cesium.Color.LIMEGREEN, 1000)
                }
            })
            oDefault.waterFlowArrowArr.push(p2);
            //13
            var positions = Cesium.Cartesian3.fromDegreesArray(
                [
                    106.0732610056, 29.8703021124,
                    106.0732610056, 29.8702972215,
                    106.0732648839, 29.8702972215,
                    106.0732648839, 29.8703021124
                ]);
            var p2 = oDefault.viewer.entities.add({
                polygon: {
                    hierarchy: {
                        positions: positions
                    },
                    height: 13.3,
                    // outline: true,
                    stRotation: Cesium.Math.toRadians(180),
                    material: new Cesium.PolylineTrailLinkMaterialPropertyV(Cesium.Color.LIMEGREEN, 1000)
                }
            })
            oDefault.waterFlowArrowArr.push(p2);

            //14

            var positions = Cesium.Cartesian3.fromDegreesArray(
                [
                    106.0732152055, 29.8703021710,
                    106.0732209315, 29.8703021710,
                    106.0732209315, 29.8703040583,
                    106.0732152055, 29.8703040583
                ]);
            var p2 = oDefault.viewer.entities.add({
                polygon: {
                    hierarchy: {
                        positions: positions
                    },
                    height: 11.8,
                    // outline: true,
                    stRotation: Cesium.Math.toRadians(90),
                    material: new Cesium.PolylineTrailLinkMaterialPropertyV(Cesium.Color.LIMEGREEN, 1000)
                }
            })
            oDefault.waterFlowArrowArr.push(p2);
            //15
            var positions = Cesium.Cartesian3.fromDegreesArray(
                [
                    106.0732450056, 29.8702821124,
                    106.0732450056, 29.8702772215,
                    106.0732493839, 29.8702772215,
                    106.0732493839, 29.8702821124
                ]);
            var p2 = oDefault.viewer.entities.add({
                polygon: {
                    hierarchy: {
                        positions: positions
                    },
                    height: 13.5,
                    // outline: true,
                    stRotation: Cesium.Math.toRadians(180),
                    material: new Cesium.PolylineTrailLinkMaterialPropertyV(Cesium.Color.WHITE, 1000)
                }
            })
            oDefault.waterFlowArrowArr.push(p2);
            //16
            // var positions = Cesium.Cartesian3.fromDegreesArray(
            // 	[
            // 		106.0732630056, 29.8702821124,
            // 		106.0732630056, 29.8702772215,
            // 		106.0732670839, 29.8702772215,
            // 		106.0732670839, 29.8702821124
            // 	]);
            // var p2 = oDefault.viewer.entities.add({
            // 	polygon: {
            // 		hierarchy: {
            // 			positions: positions
            // 		},
            // 		height: 13.5,
            // 		//outline: true,
            // 		stRotation: Cesium.Math.toRadians(180),
            // 		material: new Cesium.PolylineTrailLinkMaterialPropertyV(Cesium.Color.WHITE, 1000)
            // 	}
            // })
            oDefault.waterFlowArrowArr.push(p2);
            //17
            var positions = Cesium.Cartesian3.fromDegreesArray(
                [
                    106.0732680056, 29.8702821124,
                    106.0732680056, 29.8702772215,
                    106.0732720839, 29.8702772215,
                    106.0732720839, 29.8702821124
                ]);
            var p2 = oDefault.viewer.entities.add({
                polygon: {
                    hierarchy: {
                        positions: positions
                    },
                    height: 13.5,
                    // outline: true,
                    stRotation: Cesium.Math.toRadians(180),
                    material: new Cesium.PolylineTrailLinkMaterialPropertyV(Cesium.Color.WHITE, 1000)
                }
            })
            oDefault.waterFlowArrowArr.push(p2);
            //18
            // var positions = Cesium.Cartesian3.fromDegreesArray(
            // 	[
            // 		106.0732420056, 29.8702821124,
            // 		106.0732420056, 29.8702772215,
            // 		106.0732460839, 29.8702772215,
            // 		106.0732460839, 29.8702821124
            // 	]);
            // var p2 = oDefault.viewer.entities.add({
            // 	polygon: {
            // 		hierarchy: {
            // 			positions: positions
            // 		},
            // 		height: 13.5,
            // 		// outline: true,
            // 		stRotation: Cesium.Math.toRadians(180),
            // 		material: new Cesium.PolylineTrailLinkMaterialPropertyV(Cesium.Color.WHITE, 1000)
            // 	}
            // })
            oDefault.waterFlowArrowArr.push(p2);
            //19
            var positions = Cesium.Cartesian3.fromDegreesArray(
                [
                    106.0732189315, 29.8702791710,
                    106.0732132055, 29.8702791710,
                    106.0732132055, 29.8702810583,
                    106.0732189315, 29.8702810583,
                ]);
            var p2 = oDefault.viewer.entities.add({
                polygon: {
                    hierarchy: {
                        positions: positions
                    },
                    height: 11.8,
                    //outline: true,
                    stRotation: Cesium.Math.toRadians(-90),
                    material: new Cesium.PolylineTrailLinkMaterialPropertyV(Cesium.Color.WHITE, 1000)
                }
            })
            oDefault.waterFlowArrowArr.push(p2);

            //20
            var positions = Cesium.Cartesian3.fromDegreesArray(
                [
                    106.0732140001, 29.8702838350,
                    106.0732140001, 29.8702884478,
                    106.0732107306, 29.8702884478,
                    106.0732107306, 29.8702838350
                ]);
            var p2 = oDefault.viewer.entities.add({
                polygon: {
                    hierarchy: {
                        positions: positions
                    },
                    height: 11.2,
                    //outline: true,
                    stRotation: Cesium.Math.toRadians(0),
                    material: new Cesium.PolylineTrailLinkMaterialPropertyV(Cesium.Color.WHITE, 1000)
                }
            })
            oDefault.waterFlowArrowArr.push(p2);
        }
        if (oDosing.currentSystem == 'jiafan') {
            //1
            var positions = Cesium.Cartesian3.fromDegreesArray(
                [
                    106.0732253680, 29.8702655398,
                    106.0732253680, 29.8702610037,
                    106.0732290283, 29.8702610037,
                    106.0732290283, 29.8702655398
                ]);
            var p2 = oDefault.viewer.entities.add({
                polygon: {
                    hierarchy: {
                        positions: positions
                    },
                    height: 11.8,
                    // outline: true,
                    stRotation: Cesium.Math.toRadians(180),
                    material: new Cesium.PolylineTrailLinkMaterialPropertyV(Cesium.Color.LIMEGREEN, 1000)
                }
            })
            oDefault.waterFlowArrowArr.push(p2);
            //2

            var positions = Cesium.Cartesian3.fromDegreesArray(
                [
                    106.0732303680, 29.8702620037,
                    106.0732303680, 29.8702570037,
                    106.0732335283, 29.8702570037,
                    106.0732335283, 29.8702620037
                ]);
            var p2 = oDefault.viewer.entities.add({
                polygon: {
                    hierarchy: {
                        positions: positions
                    },
                    height: 13.5,
                    //outline: true,
                    stRotation: Cesium.Math.toRadians(180),
                    material: new Cesium.PolylineTrailLinkMaterialPropertyV(Cesium.Color.LIMEGREEN, 1000)
                }
            })
            oDefault.waterFlowArrowArr.push(p2);
            //3
            var positions = Cesium.Cartesian3.fromDegreesArray(
                [
                    106.0732503680, 29.8702620037,
                    106.0732503680, 29.8702570037,
                    106.0732535283, 29.8702570037,
                    106.0732535283, 29.8702620037
                ]);
            var p2 = oDefault.viewer.entities.add({
                polygon: {
                    hierarchy: {
                        positions: positions
                    },
                    height: 13.5,
                    //outline: true,
                    stRotation: Cesium.Math.toRadians(180),
                    material: new Cesium.PolylineTrailLinkMaterialPropertyV(Cesium.Color.LIMEGREEN, 1000)
                }
            })
            oDefault.waterFlowArrowArr.push(p2);
            //4
            var positions = Cesium.Cartesian3.fromDegreesArray(
                [
                    106.0732673680, 29.8702620037,
                    106.0732673680, 29.8702570037,
                    106.0732705283, 29.8702570037,
                    106.0732705283, 29.8702620037
                ]);
            var p2 = oDefault.viewer.entities.add({
                polygon: {
                    hierarchy: {
                        positions: positions
                    },
                    height: 13.5,
                    //outline: true,
                    stRotation: Cesium.Math.toRadians(180),
                    material: new Cesium.PolylineTrailLinkMaterialPropertyV(Cesium.Color.LIMEGREEN, 1000)
                }
            })
            oDefault.waterFlowArrowArr.push(p2);
            //5
            var positions = Cesium.Cartesian3.fromDegreesArray(
                [
                    106.0732353680, 29.8702480037,
                    106.0732353680, 29.8702430037,
                    106.0732385283, 29.8702430037,
                    106.0732385283, 29.8702480037
                ]);
            var p2 = oDefault.viewer.entities.add({
                polygon: {
                    hierarchy: {
                        positions: positions
                    },
                    height: 13.5,
                    //outline: true,
                    stRotation: Cesium.Math.toRadians(180),
                    material: new Cesium.PolylineTrailLinkMaterialPropertyV(Cesium.Color.GOLD, 1000)
                }
            })
            oDefault.waterFlowArrowArr.push(p2);
            //6
            var positions = Cesium.Cartesian3.fromDegreesArray(
                [
                    106.0732503680, 29.8702480037,
                    106.0732503680, 29.8702430037,
                    106.0732535283, 29.8702430037,
                    106.0732535283, 29.8702480037
                ]);
            var p2 = oDefault.viewer.entities.add({
                polygon: {
                    hierarchy: {
                        positions: positions
                    },
                    height: 13.5,
                    //outline: true,
                    stRotation: Cesium.Math.toRadians(180),
                    material: new Cesium.PolylineTrailLinkMaterialPropertyV(Cesium.Color.GOLD, 1000)
                }
            })
            oDefault.waterFlowArrowArr.push(p2);
            //7
            var positions = Cesium.Cartesian3.fromDegreesArray(
                [
                    106.0732673680, 29.8702480037,
                    106.0732673680, 29.8702430037,
                    106.0732705283, 29.8702430037,
                    106.0732705283, 29.8702480037
                ]);
            var p2 = oDefault.viewer.entities.add({
                polygon: {
                    hierarchy: {
                        positions: positions
                    },
                    height: 13.5,
                    //outline: true,
                    stRotation: Cesium.Math.toRadians(180),
                    material: new Cesium.PolylineTrailLinkMaterialPropertyV(Cesium.Color.GOLD, 1000)
                }
            })
            oDefault.waterFlowArrowArr.push(p2);
            //8
            var positions = Cesium.Cartesian3.fromDegreesArray(
                [
                    106.0732303140, 29.8702424359,
                    106.0732251714, 29.8702424359,
                    106.0732251714, 29.8702401638,
                    106.0732303140, 29.8702401638
                ]);
            var p2 = oDefault.viewer.entities.add({
                polygon: {
                    hierarchy: {
                        positions: positions
                    },
                    height: 13,
                    //outline: true,
                    stRotation: Cesium.Math.toRadians(-90),
                    material: new Cesium.PolylineTrailLinkMaterialPropertyV(Cesium.Color.GOLD, 1000)
                }
            })
            oDefault.waterFlowArrowArr.push(p2);
            //9
            var positions = Cesium.Cartesian3.fromDegreesArray(
                [
                    106.0732204042, 29.8702366817,
                    106.0732204042, 29.8702309555,
                    106.0732238089, 29.8702309555,
                    106.0732238089, 29.8702366817
                ]);
            var p2 = oDefault.viewer.entities.add({
                polygon: {
                    hierarchy: {
                        positions: positions
                    },
                    height: 12,
                    //outline: true,
                    stRotation: Cesium.Math.toRadians(180),
                    material: new Cesium.PolylineTrailLinkMaterialPropertyV(Cesium.Color.GOLD, 1000)
                }
            })
            oDefault.waterFlowArrowArr.push(p2);
            //10
            var positions = Cesium.Cartesian3.fromDegreesArray(
                [
                    106.0732253140, 29.8702254359,
                    106.0732201714, 29.8702254359,
                    106.0732201714, 29.8702231638,
                    106.0732253140, 29.8702231638
                ]);
            var p2 = oDefault.viewer.entities.add({
                polygon: {
                    hierarchy: {
                        positions: positions
                    },
                    height: 11.5,
                    //outline: true,
                    stRotation: Cesium.Math.toRadians(-90),
                    material: new Cesium.PolylineTrailLinkMaterialPropertyV(Cesium.Color.GOLD, 1000)
                }
            })
            oDefault.waterFlowArrowArr.push(p2);
            //11
            var positions = Cesium.Cartesian3.fromDegreesArray(
                [
                    106.0732081398, 29.8702345851,
                    106.0732081398, 29.8702428564,
                    106.0732044088, 29.8702428564,
                    106.0732044088, 29.8702345851
                ]);
            var p2 = oDefault.viewer.entities.add({
                polygon: {
                    hierarchy: {
                        positions: positions
                    },
                    height: 11.3,
                    //outline: true,
                    stRotation: Cesium.Math.toRadians(0),
                    material: new Cesium.PolylineTrailLinkMaterialPropertyV(Cesium.Color.GOLD, 1000)
                }
            })
            oDefault.waterFlowArrowArr.push(p2);
        }


        // //32
        // var positions = Cesium.Cartesian3.fromDegreesArray(
        // 	[
        // 		106.0731977728, 29.8702290458,
        // 		106.0732050471, 29.8702290458,
        // 		106.0732050471, 29.8702316229,
        // 		106.0731977728, 29.8702316229
        // 	]);
        // var p2 = oDefault.viewer.entities.add({
        // 	polygon: {
        // 		hierarchy: {
        // 			positions: positions
        // 		},
        // 		height: 11.7,
        // 		//outline: true,
        // 		stRotation: Cesium.Math.toRadians(90),
        // 		material: new Cesium.PolylineTrailLinkMaterialPropertyV(Cesium.Color.CRIMSON, 1000)
        // 	}
        // })
        // oDefault.waterFlowArrowArr.push(p2);
        // //33
        // var positions = Cesium.Cartesian3.fromDegreesArray(
        // 	[
        // 		106.0732081398, 29.8702445851,
        // 		106.0732081398, 29.8702528564,
        // 		106.0732044088, 29.8702528564,
        // 		106.0732044088, 29.8702445851
        // 	]);
        // var p2 = oDefault.viewer.entities.add({
        // 	polygon: {
        // 		hierarchy: {
        // 			positions: positions
        // 		},
        // 		height: 11.3,
        // 		//outline: true,
        // 		stRotation: Cesium.Math.toRadians(0),
        // 		material: new Cesium.PolylineTrailLinkMaterialPropertyV(Cesium.Color.CRIMSON, 1000)
        // 	}
        // })
        // oDefault.waterFlowArrowArr.push(p2);
        // console.log(oDefault.waterFlowArrowArr)

    },
    createTab: function() {
        var tabDiv = document.createElement('div');
        tabDiv.className = 'system-shift-tab';
        tabDiv.setAttribute('id', 'tab')
        var body = document.getElementById('body');
        body.appendChild(tabDiv);

        var tabDivChild1 = document.createElement('div');
        tabDivChild1.className = 'system-shift-tab-child';
        tabDivChild1.innerText = '加矾';
        tabDiv.appendChild(tabDivChild1);

        var tabDivChild2 = document.createElement('div');
        tabDivChild2.className = 'system-shift-tab-child';
        tabDivChild2.innerText = '加碱';
        tabDiv.appendChild(tabDivChild2);

        if (oDosing.currentSystem == 'jiafan') {
            tabDivChild1.className = 'system-shift-tab-child tab-active';
        }
        if (oDosing.currentSystem == 'jiajian') {
            tabDivChild2.className = 'system-shift-tab-child tab-active';
        }

        tabDivChild1.onclick = function() {
            oDefault.clearAll();
            oDosing.currentSystem = 'jiafan';
            oDosing.currentSight = oDosing.cameraPositions[1];
            oDosing.showDosingSystem();
        }
        tabDivChild2.onclick = function() {
            oDefault.clearAll();
            oDosing.currentSystem = 'jiajian';
            oDosing.currentSight = oDosing.cameraPositions[0];
            oDosing.showDosingSystem();
        }
    },
    createTextLabels: function() {
        if (!oDefault.viewer) {
            return
        }
        var viewer = oDefault.viewer;
        var data = oDosing.textLabelList;
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
        if (oDosing.currentSystem == 'jiajian') {
            $('#dosing-01').css('display', 'block');
            $('#dosing-02').css('display', 'block');
            $('#dosing-03').css('display', 'block');
        }
        if (oDosing.currentSystem == 'jiafan') {
            $('#dosing-04').css('display', 'block');
        }
    },
    createDataLabels: function() {
        var viewer = oDefault.viewer;
        if (viewer) {
            var labelData = [];
            if (oDosing.currentSystem == 'jiajian') {
                oDosing.dataLabelList.map(function(item) {
                    if (item.system == 'Dosing-jiajian') {
                        labelData.push(item)
                    }
                })
            }
            if (oDosing.currentSystem == 'jiafan') {
                oDosing.dataLabelList.map(function(item) {
                    if (item.system == 'Dosing-jiafan') {
                        labelData.push(item)
                    }
                })
            }
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
                    sign.show = false;
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
        oDosing.loadData();
        oDosing.startDataRoll();

    },
    loadData: function() {
        var viewer = oDefault.viewer;
        var oGetData = {};
        oDosing.data = oDefault.realTimeData;
        var labelData = [];
        if (oDosing.currentSystem == 'jiajian') {
            oDosing.dataLabelList.map(function(item) {
                if (item.system == 'Dosing-jiajian') {
                    labelData.push(item)
                }
            })
        }
        if (oDosing.currentSystem == 'jiafan') {
            oDosing.dataLabelList.map(function(item) {
                if (item.system == 'Dosing-jiafan') {
                    labelData.push(item)
                }
            })
        }
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
        if (oDosing.currentSystem == 'jiajian') {
            oDefault.pointSigns.map(function(item) {
                if (item.system == 'Dosing-jiajian') {
                    item.sign.show = true;
                }
            })
        }
        if (oDosing.currentSystem == 'jiafan') {
            oDefault.pointSigns.map(function(item) {
                if (item.system == 'Dosing-jiafan') {
                    item.sign.show = true;
                }
            })
        }
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
            oDosing.startDataRoll();
        }
        controlDiv2.onclick = function() {
                controlDiv2.className = 'data-roll-control-div active';
                controlDiv1.className = 'data-roll-control-div';
                oDosing.stopDataRoll();
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
            oDosing.audio.pause();
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
                    oDosing.removeCameraEvents();
                    oDosing.startFly();
                    oDosing.audio.play();
                } else {
                    oDosing.removeCameraEvents();
                    oDosing.restartFly();
                    oDosing.audio.play();
                }
            } else {
                btnPlay.className = 'system-fly-btn system-play';
                oDosing.pauseFly();
                oDosing.restoreCameraEvents();
                oDosing.audio.pause();
            }
        }

        var btnForward = document.createElement('div');
        systemFlyPanelBtnGroup.appendChild(btnForward);
        btnForward.setAttribute('id', 'btnForward');
        btnForward.className = 'system-fly-btn system-forward';
        btnForward.onclick = function() {
            oDosing.audio.pause();
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
            oDosing.dataLabelList.map(function(item) {
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
        if (oDosing.currentSystem == 'jiafan') {
            audio.src = "./Audios/jiafan.mp3";
        }
        if (oDosing.currentSystem == 'jiajian') {
            audio.src = "./Audios/jiajian.mp3";
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
    },
    startDataRoll: function() {
        oDefault.pointSigns.map(function(item) {
            console.log(item)
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
    showDosingSystem: function() {

        $('#dosing-05').css('display', 'block');
        //获取系统数据
        if (!oDefault.configData) {
            return
        }
        //禁用工具栏
        $('#i-n-menuimg').css('pointer-events', 'none')
        $('#i-n-layers').css('pointer-events', 'none')

        //		
        oDefault.currentSystem = 'Dosing';
        oDefault.layerList.forEach(function(layer) {
                layer.layer.show = false;
            })
            //视角
        var initialPosition = Cesium.Cartesian3.fromDegrees(oDosing.currentSight.cameraPosition[0],
            oDosing.currentSight.cameraPosition[1], oDosing.currentSight.cameraPosition[2]);
        var initialOrientation = new Cesium.HeadingPitchRoll.fromDegrees(oDosing.currentSight.cameraHeadingPitchRoll[
            0], oDosing.currentSight.cameraHeadingPitchRoll[1], oDosing.currentSight.cameraHeadingPitchRoll[2]);
        oDefault.viewer.scene.camera.setView({
            destination: initialPosition,
            orientation: initialOrientation,
            endTransform: Cesium.Matrix4.IDENTITY
        });

        oDefault.tilesetList.forEach(function(tileset) {
            if (tileset.type == 'tujian') {
                if (tileset.id == 'tujian-04') {
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
                if (tileset.id == 'jidian-04') {
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
            var hideMoreList = [];
            if (oDosing.currentSystem == 'jiajian') {
                hideMoreList = ['04010015-加药系统-碱溶液池', '04020177-液位计支架3', '04020173-加药加氯间搅拌器架6', '04020173-加药加氯间搅拌器架6',
                    '04020176-液位计支架2', '04020107-加药间液位计3#', '04020006-加药加氯间搅拌器架1', '04020153-加药间溶液池搅拌机叶轮3#',
                    '04020153-加药间搅拌器3#', '04020153-加药间溶液池搅拌机叶轮3#', '04020006-加药加氯间搅拌器架1', '04020175-加矾水管',
                    '04020102-加药池搅拌电机3#', '04020154-加药间溶液池搅拌机叶轮2#', '04020101-加药池搅拌电机2#', '04020067-加药池搅拌电机1#',
                    '04020174-加药加氯间搅拌器架7', '04010001-加药加氯间顶部1#', '04020048-加药间液位计1#', '04020106-加药间液位计2#',
                    '04020154-加药间搅拌器2#', '04020155-加药间溶液池搅拌机叶轮1#', '04020064-PH投药器输出管道', '04020063-输出加矾管道',
                    '04020078-加矾电机底座', '04020097-1号加矾计量泵电机', '04020056-2号加矾计量泵电机', '04020055-3号加矾计量泵电机',
                    '04020155-加药间搅拌器1#', '04020075-加药间波动监测器', '04020112-泄压阀门2#', '04020069-液阀', '04020113-泄压阀门3#',
                    '04020068-泄压阀门1#', '04020179-加矾系统阀门', '04020180-PH系统阀门',
                    '04020024-加药间水荡仪1#', '04020023-加药间压力表7#', '04020036-加药间水荡仪2#', '04020022-加药间压力表6#', '04020025-加药间水荡仪3#',
                    '04020021-加药间压力表5#', '04020124-PH投药器固定环', '04020123-PH投药机药箱', '04020044-PH投药器混合器', '04020070-PAM投加系统',
                    '04020119-PH投药器搅拌泵2#', '04020166-PH投药器输送泵3#', '04020049-PH投药器输送泵1#', '04020052-PH投药器钢支撑', '04020128-PAM就地控制箱',
                    '04020016-PH投药器玻璃管', '04020037-PH投药器钢支撑', '04020050-PH投药器输送泵2#', '04020118-PH投药器搅拌泵1#', '04020122-PH投药器搅拌泵3#',
                    '04020039-PH投药器控制器', '04020043-PH投药器软管', '04020076-PH投药器压力表', '04020077-PH投药器压力表盘', '04020035-PH投药器进水玻璃管',
                    '04020182-矾池反冲洗管道', '04020183-PH输出管道接矾池'
                ]
            }
            if (oDosing.currentSystem == 'jiafan') {
                hideMoreList = ['04020064-PH投药器输出管道', '04020124-PH投药器固定环', '04020123-PH投药机药箱', '04020066-加药间阀门',
                    '04020044-PH投药器混合器', '04020070-PAM投加系统',
                    '04020119-PH投药器搅拌泵2#', '04020166-PH投药器输送泵3#', '04020049-PH投药器输送泵1#', '04020052-PH投药器钢支撑', '04020128-PAM就地控制箱',
                    '04020016-PH投药器玻璃管', '04020037-PH投药器钢支撑', '04020050-PH投药器输送泵2#', '04020118-PH投药器搅拌泵1#', '04020122-PH投药器搅拌泵3#',
                    '04020039-PH投药器控制器', '04020043-PH投药器软管', '04020076-PH投药器压力表', '04020077-PH投药器压力表盘', '04020035-PH投药器进水玻璃管',
                    '04020051-加药计量泵电机2#', '04020059-加碱计量泵1#', '04020054-加碱计量泵2#', '04020011-加碱计量泵3#', '04020009-加碱计量泵4#',
                    '04020062-加药间原水管道', '04020180-PH系统阀门',
                    '04020061-输出碱管道', '04020005- 加药间计量泵石墩', '04020115-泄压阀门5#', '04020114-泄压阀门4#', '04020116-泄压阀门6#',
                    '04020117-泄压阀门7#',
                    '04020057-加碱池壁钢支撑', '04010016-加药系统-矾溶液池', '04020172-加药加氯间搅拌器架5', '04020103-加药池搅拌电机4#',
                    '04020157-加药间溶液池搅拌机叶轮4#',
                    '04020171-加药加氯间搅拌器架4', '04020156-加药间溶液池搅拌机叶轮5#', '04020178-液位计支架4', '04020058-加碱池提升管道', '04020130-加药计量泵电机3#',
                    '04020007-加药计量泵电机4#', '04020109-1号药池液位计', '04020108-2号药池液位计', '04020125-溶液池1#手动闸阀', '04020012-溶液池2#手动闸阀',
                    '04020104-加药池搅拌电机5#', '04020157-加药间搅拌器4#', '04020156-加药间搅拌器5#', '04020019-加药间压力表3#', '04020027-加药间水荡仪5#',
                    '04020018-加药间压力表2#', '04020028-加药间水荡仪6#', '04020017-加药间压力表1#', '04020029-加药间水荡仪7#', '04020026-加药间水荡仪4#',
                    '04020020-加药间压力表4#', '04020105-加药池搅拌电机6#', '04020169-加药加氯间搅拌器架2', '04020159-加药间溶液池搅拌机叶轮6#',
                    '04020170-加药加氯间搅拌器架3', '04020158-加药间溶液池搅拌机叶轮7#', '04020047-液位计支架', '04020065-原液输入管道', '04020100-加药池搅拌电机7#',
                    '04020158-加药间搅拌器7#', '04020159-加药间搅拌器6#', '04020111-1号碱溶药池液位计', '04020111-1号碱溶药池液位计',
                    '04020127-室外碱池液位计2号', '04020126-室外碱池液位计1号', '04010006-储梵池顶', '04010013-储梵池间结构', '04020110-2号碱溶药池液位计',
                    '04020170-加药加氯间搅拌器架3', '04010007-储梵池底板', '04020034-集碱池泵支撑', '04020045-加药计量泵电机1#', '04020181-加矾管输出外管道',
                    '04020183-PH输出管道接矾池',
                    '04020069-液阀'
                ]
            }
            var showList = [];
            var hideList = ['04010017-加药加氯间顶部2#', '04010001-加药加氯间顶部1#', '04010019-加药加氯间梁1#', '04010020-加药加氯间梁2#',
                '04010026-加药加氯间内部墙6#', '04010024-加药加氯间内部墙4#', '04010023-加药加氯间内部墙3#', '04010027-加药加氯间内部墙7#',
                '04010025-加药加氯间内部墙5#', '04010021-加药加氯间内部墙1#', '04010008-加药加氯间铁网格3#', '04010002-加药加氯间底板', '04010039-加药加氯间外墙1#',
                '04010040-加药加氯间外墙2#', '04010041-加药加氯间外墙3#',
                '04010010-加药加氯间蓝墙1#', '04010034-加药加氯间黄墙2#', '04010045-加药加氯间卷闸门3#', '04010018-加药加氯间蓝墙2#', '04010009-加药加氯间黄墙1#',
                '04010046-加药加氯间窗户2#', '04010003-加药加氯间玻璃1#', '04010031-加药加氯柱3#', '04010038-加药加氯间散水', '04010032-加药加氯柱4#',
                '04010029-加药加氯柱2#',
                '04010022-加药加氯间内部墙2#', '04010028-加药加氯柱1#', '04010004-加药加氯间百叶1#', '04010033-加药加氯间百叶2#', '04020008-加药加氯间计量泵就地控制箱',
                '04010012-加药加氯间木门', '04020013-加药加氯间控制箱',
                '04020003-加药加氯间紧急冲洗器', '04010044-加药加氯间卷闸门2#', '04010042-加药加氯间外墙4#', '04010030-加药加氯柱5#', '04010043-加药加氯间卷闸门1#',
                '04020038-加药间机柜', '04020041-加碱流量计', '04020040-加矾流量计', '04020036-抽要泵就地控制器',
                '04010037-加药加氯间黄墙1#', '04010036-加药加氯间黄墙4#', '04010035-加药加氯间黄墙3#', '04010014-加药加氯间字',
                '04010047-加药加氯间黄框',
                '04020088-加药加氯间氯瓶8#', '04020087-加药加氯间氯瓶7#', '04020086-加药加氯间氯瓶6#', '04020085-加药加氯间氯瓶5#', '04020001-加药加氯间氯瓶1#',
                '04020082-加药加氯间氯瓶2#', '04020083-加药加氯间氯瓶3#', '04020084-加药加氯间氯瓶4#', '04020071-加氯间钢支撑', '04020011-加氯管道',
                '04020095-加药加氯间加氯柜1#', '04020096-加药加氯间加氯柜2#', '04020097-加药加氯间加氯柜3#', '04020098-加药加氯间加氯柜4#',
                '04020099-加药加氯间加氯柜5#', '04020073-加氯间仪表', '04020074-加氯间阀门', '04020080-氯气收集装置网格', '04020014-氯气储存罐',
                '04020002-加氯机机柜垫', '04020079-氯气间仪表2#', '04020015-氯气间仪表1#', '04020090-加药加氯间氯罐阀门5#', '04020092-加药加氯间氯罐阀门6#',
                '04020094-加药加氯间氯罐阀门7#', '04020089-加药加氯间氯罐阀门3#', '04020093-加药加氯间氯罐阀门2#', '04020091-加药加氯间氯罐阀门1#',
                '04010005-加药加氯间井盖', '04010051-加矾搅拌池水面', '04010050-加碱搅拌池水面2#', '04010049-加碱搅拌池水面1#', '04010048-储液池原液 ',
                '04020095-漏氯吸收装置', '04010052-加药加氯间铁网格1#', '04020081-1号加氯机', '04020053-2号加氯机', '04020046-3号加氯机',
                '04020010-4号加氯机', '04020008-5号加氯机', '04020137-碱池设备控制箱', '04020098-1号加碱变频柜', '04020060-加药间排污管',
                '04020151-输出加矾管道2#', '04020150-PH投药器输出管道2#', '04020149-输碱管道1#', '04020152-液氯投加系统2#',
                '04020162-PH投药器输出管道2#到二期沉淀池', '04020163-输碱管道到二期沉淀池', '04020161-PH投药器输出管道2#到一期沉淀池',
                '04020160-输碱管道到沉淀池', '04020096-液氯投加系统', '04020145-电子称3#', '04020144-电子称2#', '04020143-电子称1#', '04020146-电子称4#',
                '04020139-加氯间真空调节器2#', '04020140-加氯间真空调节器3#', '04020142-自动压力切换器', '04020141-加氯间真空调节器4#',
                '04020138-加氯间真空调节器1#', '04020014-氯气储加热器1', '04020004-氯气加热器2', '04020079-氯气间压力表2#', '04020168-前加氯氯气体投加系统',
                '04020167-后加氯氯气体投加系统', '04020152-补氯氯气体投加系统', '04020164-加药间原水管道接外部', '04020165-原水到加药间管道',
                '04020079-氯气间压力表2#', '04020010-4号加氯机后加氯', '04020046-加氯机备用', '04020053-二期加氯机前加氯', '04020081-一期加氯机前加氯',
                '04020008-5号加氯机补氯', '04020129-抽药泵就地控制箱', '04020042-加碱加矾牌', '04020038-加药间出水控制箱', '04020147-超声波流量计1#',
                '04020148-超声波流量计2#', '04020133-加药间PLC柜1', '04020134-加药间PLC柜2', '04020131-矾池设备控制柜', '04020132-加矾变频柜',
                '04020136-碱池设备控制柜', '04020099-1号加碱变频柜', '04020135-加药间配电柜', '04020120-PAM变频柜1号', '04020121-PAM变频柜2号',
                '04010053-加药加氯间铁网格2#', '04020137-矾池设备就地控制箱', '04020098-碱池设备就地控制箱', '04010001-加药加氯间顶',
                '04010062-加药加氯间绿砖1#', '04010060-加药加氯间单扇门1#', '04010066-加药加氯间双扇门1#', '04010064-加药加氯间绿砖3#', '04010063-加药加氯间绿砖2#',
                '04010073-加药加氯间蓝墙3#', '04010012-加药加氯间百叶2#', '04010017-加药加氯间百叶3#', '04010019-加药加氯间百叶4#', '04010026-加药加氯间百叶6#',
                '04010020-加药加氯间百叶5#', '04010056-加药加氯间百叶11#', '04010061-加药加氯间单扇门2#', '04010072-加药加氯间蓝墙2#', '04010022-加药加氯间内部墙2#',
                '04010071-加药加氯间双扇门6#', '04010068-加药加氯间双扇门3#', '04010070-加药加氯间双扇门5#', '04010059-加药加氯间百叶14#',
                '04010069-加药加氯间双扇门4#',
                '04010067-加药加氯间双扇门2#', '04020181-加矾管输出外管道', '04010029-加药加氯间百叶7#', '04010031-加药加氯间百叶8#',
                '04010054-加药加氯间百叶9#', '04010055-加药加氯间百叶10#', '04010065-加药加氯间绿砖4#', '04010074-加药加氯间蓝墙4#',
                '04010058-加药加氯间百叶13#', '04010057-加药加氯间百叶12#'
            ];

            var hideList = hideList.concat(hideMoreList);
            var content = tile.content;
            var featuresLength = content.featuresLength;
            var url = tile.tileset.url;
            if (url.indexOf('tujian/04') >= 0) {
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
            if (url.indexOf('jidian/04') >= 0) {
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

        oDosing.initDosingSystem();
    },
    pauseFly: function() {
        //暂停时间
        oDosing.restoreCameraEvents();
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
        oDosing.startFly();
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
        oDosing.startDataRoll();
        oDefault.waterFlowArrowArr.map(function(item) {
            item.show = true;
        })
        oDefault.tilesetList.map(function(item) {
                if (item.id == 'jidian-04') {
                    item.tilesetList.map(function(tile) {
                        tile.tileset.modelMatrix = tile.matrix;
                    })
                }
            })
            //飞行结束 恢复事件 清除数据及面板
        oDosing.restoreCameraEvents();
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
        oDosing.createFlyPanel();
        oDefault.flyData.pauseData.currentTime = null;
        oDefault.flyData.pauseData.cameraOrientation = [];
        oDefault.flyData.pauseData.cameraPosition = [];
        //设置角度
        var initialPosition = Cesium.Cartesian3.fromDegrees(oDosing.currentSight.cameraPosition[0],
            oDosing.currentSight.cameraPosition[1], oDosing.currentSight.cameraPosition[2]);
        var initialOrientation = new Cesium.HeadingPitchRoll.fromDegrees(oDosing.currentSight.cameraHeadingPitchRoll[
            0], oDosing.currentSight.cameraHeadingPitchRoll[1], oDosing.currentSight.cameraHeadingPitchRoll[2]);
        oDefault.viewer.scene.camera.setView({
            destination: initialPosition,
            orientation: initialOrientation,
            endTransform: Cesium.Matrix4.IDENTITY
        });
        oDosing.audio.pause();
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
        oDosing.stopDataRoll();
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
        oDosing.createWaterSur();
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
        if (oDosing.flyPositions.length > 0 && oDosing.currentSystem == 'jiajian') {
            for (var i = 0; i < oDosing.flyPositions.length; i++) {
                var x = oDosing.flyPositions[i][0];
                var y = oDosing.flyPositions[i][1];
                var z = oDosing.flyPositions[i][2];
                position.push({
                    x: x,
                    y: y,
                    z: z
                });
            }
        } else if (oDosing.flyPositions2.length > 0 && oDosing.currentSystem == 'jiafan') {
            for (var i = 0; i < oDosing.flyPositions2.length; i++) {
                var x = oDosing.flyPositions2[i][0];
                var y = oDosing.flyPositions2[i][1];
                var z = oDosing.flyPositions2[i][2];
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
            if (oDosing.currentSystem == 'jiajian') {
                for (var i = 0; i < position.length; i++) {
                    if (i == 0) {
                        var time = Cesium.JulianDate.addSeconds(start, i, new Cesium.JulianDate());
                        var _position = Cesium.Cartesian3.fromDegrees(position[i].x, position[i].y, position[i].z);
                        property.addSample(time, _position);
                    }
                    if (i == 1) {
                        addStep('seconds', 3, 0.15);

                    }
                    if (i == 2) {
                        addStep('seconds', 3, 0.15);

                    }
                    if (i == 3) {
                        addStep('distance', 15, 0.15);

                    }
                    if (i == 4) {
                        addStep('seconds', 0.3, 0.15);

                    }
                    if (i == 5) {
                        addStep('distance', 20, 0.15);

                    }
                    if (i == 6) {
                        addStep('seconds', 5, 0.15);

                    }
                    if (i == 7) {
                        addStep('distance', 20, 0.15);

                    }
                    if (i == 8) {
                        addStep('seconds', 5, 0.15);

                    }
                    if (i == 9) {
                        addStep('distance', 20, 0.15);

                    }
                    if (i == 10) {
                        addStep('seconds', 5, 0.15);

                    }
                    if (i == 11) {
                        addStep('distance', 20, 0.15);

                    }
                    if (i == 12) {
                        addStep('seconds', 5, 0.15);

                    }
                    if (i == 13) {
                        addStep('distance', 20, 0.15);

                    }
                    if (i == 14) {
                        addStep('seconds', 3, 0.15);

                    }
                    if (i == 15) {
                        addStep('distance', 20, 0.15);

                    }
                    if (i == 16) {
                        addStep('seconds', 3, 0.15);

                    }
                    if (i == 17) {
                        addStep('distance', 20, 0.15);

                    }
                    if (i == 18) {
                        addStep('seconds', 3, 0.15);

                    }
                    if (i == 19) {
                        addStep('distance', 20, 0.15);

                    }
                    if (i == 20) {
                        addStep('seconds', 4, 0.15);

                    }
                }

            }
            if (oDosing.currentSystem == 'jiafan') {
                for (var i = 0; i < position.length; i++) {
                    if (i == 0) {
                        var time = Cesium.JulianDate.addSeconds(start, i, new Cesium.JulianDate());
                        var _position = Cesium.Cartesian3.fromDegrees(position[i].x, position[i].y, position[i].z);
                        property.addSample(time, _position);
                    }
                    if (i == 1) {
                        addStep('seconds', 6, 0.15);

                    }
                    if (i == 2) {
                        addStep('seconds', 2, 0.15);

                    }
                    if (i == 3) {
                        addStep('seconds', 0.5, 0.15);

                    }
                    if (i == 4) {
                        addStep('seconds', 2, 0.15);

                    }
                    if (i == 5) {
                        addStep('seconds', 2, 0.15);

                    }
                    if (i == 6) {

                        addStep('seconds', 2, 0.15);
                    }
                    if (i == 7) {
                        addStep('seconds', 3, 0.15);
                    }
                    if (i == 8) {
                        addStep('seconds', 3, 0.15);
                    }
                    if (i == 9) {
                        addStep('seconds', 3, 0.15);
                    }
                    if (i == 10) {
                        addStep('seconds', 3, 0.15);
                    }
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
        oDosing.waterSurEntityTimerangeArr = [{
                name: 'dosing-watersur-1',
                timeRange: timesArr[0].secondsOfDay + 0.5
            },
            {
                name: 'dosing-watersur-2',
                timeRange: timesArr[5].secondsOfDay
            },
            {
                name: 'dosing-watersur-3',
                timeRange: timesArr[7].secondsOfDay
            },
            {
                name: 'dosing-watersur-4',
                timeRange: timesArr[0].secondsOfDay
            }
        ];
        // oDosing.timesArr = timesArr;
        if (oDosing.currentSystem == 'jiajian') {

            oDosing.orientationArr = [{
                    start: timesArr[0].secondsOfDay,
                    stop: timesArr[2].secondsOfDay,
                    orientation: {
                        heading: 268,
                        pitch: -58.77,
                        range: 0.1
                    }
                },
                {
                    start: timesArr[2].secondsOfDay,
                    stop: timesArr[3].secondsOfDay,
                    orientation: {
                        heading: 330,
                        pitch: -40,
                        range: 0.1
                    }
                },
                {
                    start: timesArr[3].secondsOfDay,
                    stop: timesArr[8].secondsOfDay,
                    orientation: {
                        heading: 250,
                        pitch: -40,
                        range: 0.1
                    }
                },
                {
                    start: timesArr[8].secondsOfDay,
                    stop: timesArr[12].secondsOfDay,
                    orientation: {
                        heading: 300,
                        pitch: -40,
                        range: 0.1
                    }
                },
            ];
        }
        if (oDosing.currentSystem == 'jiafan') {
            oDosing.orientationArr = [{
                    start: timesArr[0].secondsOfDay,
                    stop: timesArr[2].secondsOfDay,
                    orientation: {
                        heading: 225,
                        pitch: -54.79,
                        range: 0.1
                    }
                },
                {
                    start: timesArr[2].secondsOfDay,
                    stop: timesArr[7].secondsOfDay,
                    orientation: {
                        heading: 305,
                        pitch: -54.79,
                        range: 0.1
                    }
                },
            ];
        }

        var sight;
        if (oDosing.currentSystem == 'jiajian') {
            sight = new Cesium.Cartesian3(1, 0, 1.5)
        }
        if (oDosing.currentSystem == 'jiafan') {
            sight = new Cesium.Cartesian3(1, 1, 2)
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
                oDosing.waterSurEntityTimerangeArr.map(function(arr) {
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
            oDosing.timeInputRange = true;
            oDosing.createWaterSur();

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
                    oDosing.waterSurEntityTimerangeArr.map(function(arr) {
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
                oDosing.timeInputRange = false;
                // 方向			
                var cTime = oDefault.viewer.clockViewModel.currentTime;
                oDosing.orientationArr.forEach(function(item) {
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
                    oDosing.audio.play();
                }
            } else {
                oDosing.startFly();
                oDefault.viewer.clock.shouldAnimate = false;
                var percent = rangeInput.value / 100;
                var addsec = (timeArr[timeArr.length - 1].secondsOfDay - timeArr[0].secondsOfDay) * percent;
                var currentTime = Cesium.JulianDate.addSeconds(start, addsec, new Cesium.JulianDate());
                oDefault.viewer.clockViewModel.currentTime = currentTime;
                oDosing.timeInputRange = false;
                var cTime = oDefault.viewer.clockViewModel.currentTime;
                oDosing.orientationArr.forEach(function(item) {
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
                oDosing.pauseFly();
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
        for (var i = 0; i < oDosing.dataLabelList.length; i++) {
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

        var vex1 = [106.0732570188, 29.8702436058]
        var vex2 = [106.0732682901, 29.8702535809]
        var minusvex = [vex2[0] - vex1[0], vex2[1] - vex1[1]];
        var startT = oDefault.viewer.clock.startTime.secondsOfDay;
        var multiplier = oDefault.viewer.clock.multiplier;
        var audioPlayer = document.getElementById('audio_player');
        var ctime, begin, end;
        var timeline = document.getElementById('systemFlyTimeLine');
        var ellipsoid = oDefault.viewer.scene.globe.ellipsoid;
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
                    oDosing.stopFly();
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
                        oDosing.stopFly();
                    }
                    //进度条和时间更新
                    if (!oDosing.timeInputRange) {
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

                    if (oDosing.currentSystem == 'jiajian') {
                        ctime = timesArr[0].secondsOfDay;
                        begin = (ctime + 0.5).toFixed(2);
                        if (a == begin) {
                            $('#dosing-08').css('display', 'block');
                            setTimeout(function() {
                                $('#dosing-08').css('display', 'none');
                            }, 5000)
                            $('#dosing-07').css('display', 'block');
                            setTimeout(function() {
                                $('#dosing-07').css('display', 'none');
                            }, 5000)
                            $('#dosing-06').css('display', 'block');
                            setTimeout(function() {
                                $('#dosing-06').css('display', 'none');
                            }, 5000)
                            oDefault.waterFlowArrowArr[0].show = true;

                            oDefault.waterSurEntityArr.map(function(item) {
                                if (item.name == 'dosing-watersur-1') {
                                    item.entity.show = true;
                                    var primitive = item.entity;
                                    primitive.modelMatrix = item.matrix;
                                    var viewer = oDefault.viewer
                                    setTimeout(function() {
                                        var coor2 = Cesium.Cartesian3.fromDegrees(106.0733180897, 29.8692887324, 8)
                                        var coor1 = Cesium.Cartesian3.fromDegrees(106.0733180897, 29.8692887324, 12)
                                        var coor = [coor2.x - coor1.x, coor2.y - coor1.y, coor2.z - coor1.z];
                                        var i = 0;
                                        var clock = setInterval(function() {
                                            if (i > 20) {
                                                clearInterval(clock);
                                            }
                                            var translation = Cesium.Matrix4.fromTranslation(new Cesium.Cartesian3(coor[0] / 700, coor[1] /
                                                700,
                                                coor[2] / 700))
                                            Cesium.Matrix4.multiply(primitive.modelMatrix, translation, primitive.modelMatrix);
                                            i++;
                                        }, 100)
                                    }, 300)
                                }
                            })
                        }

                        ctime = timesArr[2].secondsOfDay;
                        begin = (ctime).toFixed(2);
                        if (a == begin) {
                            oDefault.waterFlowArrowArr[1].show = true;
                            oDefault.waterFlowArrowArr[2].show = true;
                            oDefault.waterFlowArrowArr[3].show = true;
                        }

                        ctime = timesArr[5].secondsOfDay;
                        begin = (ctime).toFixed(2);
                        if (a == begin) {
                            $('#dosing-09').css('display', 'block');
                            setTimeout(function() {
                                $('#dosing-09').css('display', 'none');
                            }, 5000)
                            $('#dosing-10').css('display', 'block');
                            setTimeout(function() {
                                $('#dosing-10').css('display', 'none');
                            }, 5000)
                            $('#dosing-11').css('display', 'block');
                            setTimeout(function() {
                                $('#dosing-11').css('display', 'none');
                            }, 5000)
                            $('#dosing-12').css('display', 'block');
                            setTimeout(function() {
                                $('#dosing-12').css('display', 'none');
                            }, 5000)
                            oDefault.waterFlowArrowArr[4].show = true;
                            oDefault.waterFlowArrowArr[5].show = true;
                            oDefault.waterFlowArrowArr[6].show = true;

                            oDefault.waterSurEntityArr.map(function(item) {
                                if (item.name == 'dosing-watersur-2') {
                                    item.entity.show = true;
                                    var primitive = item.entity;
                                    primitive.modelMatrix = item.matrix;
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
                                            var translation = Cesium.Matrix4.fromTranslation(new Cesium.Cartesian3(coor[0] / 700, coor[1] /
                                                700,
                                                coor[2] / 700))
                                            Cesium.Matrix4.multiply(primitive.modelMatrix, translation, primitive.modelMatrix);
                                            i++;
                                        }, 100)
                                    }, 700)
                                }
                            })

                            oDefault.tilesetList.map(function(item) {
                                if (item.id == 'jidian-04') {
                                    var primitive = item.tilesetList[7].tileset;
                                    var viewer = oDefault.viewer;
                                    var center = primitive.boundingSphere.center;
                                    var mat = Cesium.Transforms.eastNorthUpToFixedFrame(center);
                                    var deg = 10
                                    var clock = setInterval(function() {
                                        var rotationX = Cesium.Matrix4.fromRotationTranslation(Cesium.Matrix3.fromRotationZ(Cesium.Math.toRadians(
                                            deg)));
                                        Cesium.Matrix4.multiply(mat, rotationX, mat);
                                        primitive._root.transform = mat;
                                    }, 100)
                                    setTimeout(function() {
                                        clearInterval(clock)
                                    }, 5000)
                                }
                            })
                        }

                        ctime = timesArr[7].secondsOfDay;
                        begin = (ctime).toFixed(2);
                        if (a == begin) {
                            $('#dosing-13').css('display', 'block');
                            setTimeout(function() {
                                $('#dosing-13').css('display', 'none');
                            }, 5000)
                            $('#dosing-14').css('display', 'block');
                            setTimeout(function() {
                                $('#dosing-14').css('display', 'none');
                            }, 5000)
                            $('#dosing-15').css('display', 'block');
                            setTimeout(function() {
                                $('#dosing-15').css('display', 'none');
                            }, 5000)
                            $('#dosing-16').css('display', 'block');
                            setTimeout(function() {
                                $('#dosing-16').css('display', 'none');
                            }, 5000)
                            $('#dosing-17').css('display', 'block');
                            setTimeout(function() {
                                $('#dosing-17').css('display', 'none');
                            }, 5000)
                            oDefault.waterFlowArrowArr[7].show = true;
                            oDefault.waterFlowArrowArr[8].show = true;
                            oDefault.waterFlowArrowArr[9].show = true;
                            oDefault.waterFlowArrowArr[10].show = true;
                            oDefault.waterFlowArrowArr[11].show = true;
                            oDefault.waterFlowArrowArr[12].show = true;
                            oDefault.waterFlowArrowArr[13].show = true;

                            oDefault.waterSurEntityArr.map(function(item) {
                                if (item.name == 'dosing-watersur-3') {
                                    item.entity.show = true;
                                    var primitive = item.entity;
                                    primitive.modelMatrix = item.matrix;
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
                                            var translation = Cesium.Matrix4.fromTranslation(new Cesium.Cartesian3(coor[0] / 700, coor[1] /
                                                700,
                                                coor[2] / 700))
                                            Cesium.Matrix4.multiply(primitive.modelMatrix, translation, primitive.modelMatrix);
                                            i++;
                                        }, 100)
                                    }, 700)
                                }
                            })

                            oDefault.tilesetList.map(function(item) {
                                if (item.id == 'jidian-04') {
                                    var primitive = item.tilesetList[5].tileset;
                                    var viewer = oDefault.viewer;
                                    var center = primitive.boundingSphere.center;
                                    var mat = Cesium.Transforms.eastNorthUpToFixedFrame(center);
                                    var deg = 10
                                    var clock = setInterval(function() {
                                        var rotationX = Cesium.Matrix4.fromRotationTranslation(Cesium.Matrix3.fromRotationZ(Cesium.Math.toRadians(
                                            deg)));
                                        Cesium.Matrix4.multiply(mat, rotationX, mat);
                                        primitive._root.transform = mat;
                                    }, 100)
                                    setTimeout(function() {
                                        clearInterval(clock)
                                    }, 5000)
                                }
                            })
                        }

                        ctime = timesArr[9].secondsOfDay;
                        begin = (ctime).toFixed(2);
                        if (a == begin) {

                            $('#dosing-18').css('display', 'block');
                            setTimeout(function() {
                                $('#dosing-18').css('display', 'none');
                            }, 5000)
                            $('#dosing-19').css('display', 'block');
                            setTimeout(function() {
                                    $('#dosing-19').css('display', 'none');
                                }, 5000)
                                // $('#dosing-20').css('display', 'block');
                                // setTimeout(function() {
                                // 	$('#dosing-20').css('display', 'none');
                                // }, 5000)
                                // $('#dosing-21').css('display', 'block');
                                // setTimeout(function() {
                                // 	$('#dosing-21').css('display', 'none');
                                // }, 5000)

                            oDefault.waterFlowArrowArr[14].show = true;
                            // oDefault.waterFlowArrowArr[15].show = true;
                            // oDefault.waterFlowArrowArr[16].show = true;
                            // oDefault.waterFlowArrowArr[17].show = true;
                        }
                        ctime = timesArr[11].secondsOfDay;
                        begin = (ctime).toFixed(2);
                        if (a == begin) {
                            $('#dosing-22').css('display', 'block');
                            setTimeout(function() {
                                $('#dosing-22').css('display', 'none');
                            }, 5000)
                            oDefault.waterFlowArrowArr[18].show = true;
                        }


                        ctime = timesArr[9].secondsOfDay;
                        begin = (ctime + 0.15).toFixed(2);
                        if (a == begin) {

                            // 	$('#dosing-18').css('display', 'block');
                            // 	setTimeout(function() {
                            // 		$('#dosing-18').css('display', 'none');
                            // 	}, 5000)
                            // 	$('#dosing-19').css('display', 'block');
                            // 	setTimeout(function() {
                            // 		$('#dosing-19').css('display', 'none');
                            // 	}, 5000)
                            $('#dosing-20').css('display', 'block');
                            setTimeout(function() {
                                $('#dosing-20').css('display', 'none');
                            }, 5000)
                            $('#dosing-21').css('display', 'block');
                            setTimeout(function() {
                                $('#dosing-21').css('display', 'none');
                            }, 5000)

                            // oDefault.waterFlowArrowArr[14].show = true;
                            oDefault.waterFlowArrowArr[15].show = true;
                            oDefault.waterFlowArrowArr[16].show = true;
                            oDefault.waterFlowArrowArr[17].show = true;
                        }
                        ctime = timesArr[11].secondsOfDay;
                        begin = (ctime).toFixed(2);
                        if (a == begin) {
                            $('#dosing-22').css('display', 'block');
                            setTimeout(function() {
                                $('#dosing-22').css('display', 'none');
                            }, 5000)
                            oDefault.waterFlowArrowArr[18].show = true;
                        }



                        //转向
                        // turn1
                        ctime = timesArr[2].secondsOfDay;
                        begin = (ctime - 0.15).toFixed(2);
                        end = (ctime - 0.1).toFixed(2);
                        if (a >= begin && a <= end && turn1) {
                            turn1 = false;
                            if (oDefault.viewer.clock.multiplier > 0) {
                                swerve(-90, 6, -55, 10);
                            } else {
                                swerve(0, -6, -55, 10);
                            }
                        } else if (a < begin || a > end) {
                            turn1 = true;
                        }
                        // turn2
                        ctime = timesArr[2].secondsOfDay;
                        begin = (ctime - 0.05).toFixed(2);
                        end = (ctime).toFixed(2);
                        if (a >= begin && a <= end && turn2) {
                            turn2 = false;
                            if (oDefault.viewer.clock.multiplier > 0) {
                                swerveV(-30, 3, -55, 5);
                            } else {
                                swerveV(-30, -3, -55, 5);
                            }
                        } else if (a < begin || a > end) {
                            turn2 = true;
                        }
                        // turn3
                        ctime = timesArr[3].secondsOfDay;
                        begin = (ctime).toFixed(2);
                        end = (ctime + 0.1).toFixed(2);
                        if (a >= begin && a <= end && turn3) {
                            turn3 = false;
                            if (oDefault.viewer.clock.multiplier > 0) {
                                swerve(-30, -8, -40, 10);
                            } else {
                                swerve(-110, 8, -40, 10);
                            }
                        } else if (a < begin || a > end) {
                            turn3 = true;
                        }
                        //turn4
                        ctime = timesArr[8].secondsOfDay;
                        begin = (ctime).toFixed(2);
                        end = (ctime + 0.1).toFixed(2);
                        if (a >= begin && a <= end && turn4) {
                            turn4 = false;
                            if (oDefault.viewer.clock.multiplier > 0) {
                                swerve(-110, 5, -40, 10);
                            } else {
                                swerve(-60, -5, -40, 10);
                            }
                        } else if (a < begin || a > end) {
                            turn4 = true;
                        }

                    }
                    if (oDosing.currentSystem == 'jiafan') {

                        ctime = timesArr[0].secondsOfDay;
                        begin = (ctime).toFixed(2);
                        if (a == begin) {
                            $('#dosing-23').css('display', 'block');
                            setTimeout(function() {
                                $('#dosing-23').css('display', 'none');
                            }, 15000)
                            $('#dosing-24').css('display', 'block');
                            setTimeout(function() {
                                $('#dosing-24').css('display', 'none');
                            }, 15000)
                            $('#dosing-25').css('display', 'block');
                            setTimeout(function() {
                                $('#dosing-25').css('display', 'none');
                            }, 15000)
                            $('#dosing-26').css('display', 'block');
                            setTimeout(function() {
                                $('#dosing-26').css('display', 'none');
                            }, 15000)
                            oDefault.waterFlowArrowArr[0].show = true;
                            oDefault.waterFlowArrowArr[1].show = true;
                            oDefault.waterFlowArrowArr[2].show = true;
                            oDefault.waterFlowArrowArr[3].show = true;

                            oDefault.waterSurEntityArr.map(function(item) {
                                if (item.name == 'dosing-watersur-4') {
                                    item.entity.show = true;
                                    var primitive = item.entity;
                                    primitive.modelMatrix = item.matrix;
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
                                            var translation = Cesium.Matrix4.fromTranslation(new Cesium.Cartesian3(coor[0] / 400, coor[1] /
                                                400,
                                                coor[2] / 400))
                                            Cesium.Matrix4.multiply(primitive.modelMatrix, translation, primitive.modelMatrix);
                                            i++;
                                        }, 100)
                                    }, 700)
                                }
                            })

                            oDefault.tilesetList.map(function(item) {
                                if (item.id == 'jidian-04') {
                                    var primitive1 = item.tilesetList[3].tileset;
                                    var viewer = oDefault.viewer;
                                    var center1 = primitive1.boundingSphere.center;
                                    var mat1 = Cesium.Transforms.eastNorthUpToFixedFrame(center1);
                                    var deg = 10
                                    var clock1 = setInterval(function() {
                                        var rotationX = Cesium.Matrix4.fromRotationTranslation(Cesium.Matrix3.fromRotationZ(Cesium.Math.toRadians(
                                            deg)));
                                        Cesium.Matrix4.multiply(mat1, rotationX, mat1);
                                        primitive1._root.transform = mat1;
                                    }, 100)
                                    setTimeout(function() {
                                        clearInterval(clock1)
                                    }, 10000)

                                    var primitive2 = item.tilesetList[2].tileset;
                                    var viewer = oDefault.viewer;
                                    var center2 = primitive2.boundingSphere.center;
                                    var mat2 = Cesium.Transforms.eastNorthUpToFixedFrame(center2);
                                    var deg = 10
                                    var clock2 = setInterval(function() {
                                        var rotationX = Cesium.Matrix4.fromRotationTranslation(Cesium.Matrix3.fromRotationZ(Cesium.Math.toRadians(
                                            deg)));
                                        Cesium.Matrix4.multiply(mat2, rotationX, mat2);
                                        primitive2._root.transform = mat2;
                                    }, 100)
                                    setTimeout(function() {
                                        clearInterval(clock2)
                                    }, 10000)
                                }
                            })

                            // oDefault.tilesetList.map(function(item) {
                            // 	if (item.id == 'jidian-04') {
                            // 		var viewer = oDefault.viewer;
                            // 		var tileset1 = item.tilesetList[1].tileset;
                            // 		// var center1 = tileset1.boundingSphere.center;
                            // 		var center1=Cesium.Cartesian3.fromDegrees(106.0732296667 , 29.8702523343, 12.9) 
                            // 		var mat1 = Cesium.Transforms.eastNorthUpToFixedFrame(center1);
                            // 		var deg1 = 2
                            // 		var clock2 = setInterval(function() {
                            // 			var rotationX = Cesium.Matrix4.fromRotationTranslation(Cesium.Matrix3.fromRotationZ(Cesium.Math.toRadians(
                            // 				deg1)));
                            // 			Cesium.Matrix4.multiply(mat1, rotationX, mat1);
                            // 			tileset1._root.transform = mat1;
                            // 		}, 50)
                            // 	}
                            // })
                            // oDefault.tilesetList.map(function(item) {
                            // 	if (item.id == 'jidian-04') {
                            // 		var viewer = oDefault.viewer;
                            // 		var tileset1 = item.tilesetList[3].tileset;
                            // 		var center1 = tileset1.boundingSphere.center;
                            // 		var mat1 = Cesium.Transforms.eastNorthUpToFixedFrame(center1);
                            // 		var deg1 = 1
                            // 		var clock1 = setInterval(function() {
                            // 			var rotationX = Cesium.Matrix4.fromRotationTranslation(Cesium.Matrix3.fromRotationZ(Cesium.Math.toRadians(
                            // 				deg1)));
                            // 			Cesium.Matrix4.multiply(mat1, rotationX, mat1);
                            // 			tileset1._root.transform = mat1;
                            // 		}, 50)
                            // 	}
                            // })
                        }

                        ctime = timesArr[4].secondsOfDay;
                        begin = (ctime).toFixed(2);
                        if (a == begin) {
                            $('#dosing-27').css('display', 'block');
                            setTimeout(function() {
                                $('#dosing-27').css('display', 'none');
                            }, 5000)
                            $('#dosing-28').css('display', 'block');
                            setTimeout(function() {
                                $('#dosing-28').css('display', 'none');
                            }, 5000)
                            $('#dosing-29').css('display', 'block');
                            setTimeout(function() {
                                $('#dosing-29').css('display', 'none');
                            }, 5000)

                            oDefault.waterFlowArrowArr[4].show = true;
                            oDefault.waterFlowArrowArr[5].show = true;
                            oDefault.waterFlowArrowArr[6].show = true;
                            oDefault.waterFlowArrowArr[7].show = true;
                        }

                        ctime = timesArr[6].secondsOfDay;
                        begin = (ctime).toFixed(2);
                        if (a == begin) {
                            oDefault.waterFlowArrowArr[8].show = true;
                            oDefault.waterFlowArrowArr[9].show = true;
                            oDefault.waterFlowArrowArr[10].show = true;
                        }

                        // //turn5

                        //turn6
                        ctime = timesArr[2].secondsOfDay;
                        begin = (ctime).toFixed(2);
                        end = (ctime + 0.05).toFixed(2);
                        if (a >= begin && a <= end && turn6) {
                            turn6 = false;
                            if (oDefault.viewer.clock.multiplier > 0) {
                                swerve(225, 8, -55, 10);
                            } else {
                                swerve(305, -8, -55, 10);
                            }
                        } else if (a < begin || a > end) {
                            turn6 = true;
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
        if (oDosing.currentSystem == 'jiajian') {
            //储药池液面
            var item = {
                "pid": "tujian-04",
                "type": "rectangle",
                "points": [
                    106.0733300829, 29.8700858615, 11,
                    106.0733300829, 29.8701604193, 11,
                    // 106.0733041279, 29.8701604193, 11,
                    // 106.0733041279, 29.8701770146, 11,
                    // 106.0732866181, 29.8701770146, 11,
                    // 106.0732866181, 29.8701604193, 11,
                    106.0732610222, 29.8701604193, 11,
                    106.0732610222, 29.8700858615, 11,
                ],
                "color": [170, 85, 0, 140]
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
                    name: 'dosing-watersur-1',
                    // timeRange: oDosing.timesArr[0].secondsOfDay + 0.5,
                    matrix: Cesium.clone(waterPrimitive.modelMatrix),
                })
            }
            //碱配药池
            var item = {
                "pid": "tujian-04",
                "type": "rectangle",
                "points": [
                    106.073276638, 29.8703166574, 10.8,
                    106.0732762638, 29.8703409668, 10.8,
                    106.0732207187, 29.8703409668, 10.8,
                    106.0732207187, 29.8703166574, 10.8,
                ],
                "color": [170, 85, 0, 140]
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
                    name: 'dosing-watersur-2',
                    // timeRange: oDosing.timesArr[5].secondsOfDay,
                    matrix: Cesium.clone(waterPrimitive.modelMatrix),
                })
            }
            //碱加药池
            var item = {
                "pid": "tujian-04",
                "type": "rectangle",
                "points": [
                    106.073276638, 29.8702806574, 12.3,
                    106.0732762638, 29.8703009668, 12.3,
                    106.0732307187, 29.8703009668, 12.3,
                    106.0732307187, 29.8702806574, 12.3,
                ],
                "color": [170, 85, 0, 140]
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
                    name: 'dosing-watersur-3',
                    // timeRange: oDosing.timesArr[7].secondsOfDay,
                    matrix: Cesium.clone(waterPrimitive.modelMatrix),
                })
            }
        }
        if (oDosing.currentSystem == 'jiafan') {
            //矾加药池
            var item = {
                "pid": "tujian-04",
                "type": "rectangle",
                "points": [
                    106.0732762638, 29.8702446574, 12.3,
                    106.0732762638, 29.8702600668, 12.3,
                    106.0732257187, 29.8702600668, 12.3,
                    106.0732257187, 29.8702446574, 12.3,
                ],
                "color": [0, 255, 255, 70]
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
                    name: 'dosing-watersur-4',
                    // timeRange: oDosing.timesArr[0].secondsOfDay,
                    matrix: Cesium.clone(waterPrimitive.modelMatrix),
                })
            }
        }
    },
    initDosingSystem: function() {
        oDefault.currentSystem = 'Dosing';
        oDosing.createWaterSur();
        oDosing.createFlowLine();
        oDosing.createTextLabels();
        oDosing.createFlyPanel();
        oDosing.createTab();
        // oDosing.createDataLabels();
    }

}