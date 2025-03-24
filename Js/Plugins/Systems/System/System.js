oSystem = {
	isGettingData:false,
	data: [],
	waterSurEntityTimerangeArr: [],
	timeInputRange: false,
	systemCameraControler: null,
	orientationArr: [],
	dataLabelList: [
		
		{
			"title": "一期源水",
			"state": "",
			"type": "data",
			"data": [{
					"text": "流量",
					"value": function() {
						var value = '--';
						oSystem.data.map(function(item) {
							if (item.opcid == 'yqysll') {
								value = parseFloat(item.opcvalue).toFixed(2);
							}
						})
						return value;
					},
					"unit": "m³/h"
				},
				{
					"text": "PH",
					"value": function() {
						var value = '--';
						oSystem.data.map(function(item) {
							if (item.opcid == 'yqysph') {
								value = parseFloat(item.opcvalue).toFixed(2);
							}
						})
						return value
					},
					"unit": ""
				},
				{
					"text": "浊度",
					"value": function() {
						var value = '--';
						oSystem.data.map(function(item) {
							if (item.opcid == 'yqyszd') {
								value = parseFloat(item.opcvalue).toFixed(2);
							}
						})
						return value
					},
					"unit": "NTU"
				}
			],
			"position": [106.0727889376, 29.8706685109, 12.5],
			"orientation": [90, 0, 10],
			"showUpTime": 5,
			"showUpCameraDistance": 0,
			"labelID": "System-label-0",
			"pid": "",
			"system": ""
		},
		{
			"title": "二期源水",
			"state": "",
			"type": "data",
			"data": [{
					"text": "流量",
					"value": function() {
						var value = '--';
						oSystem.data.map(function(item) {
							if (item.opcid == 'eqysll') {
								value = parseFloat(item.opcvalue).toFixed(2);
							}
						})
						return value
					},
					"unit": "m³/h"
				},
				{
					"text": "PH",
					"value": function() {
						var value = '--';
						oSystem.data.map(function(item) {
							if (item.opcid == 'eqysph') {
								value = parseFloat(item.opcvalue).toFixed(2);
							}
						})
						return value
					},
					"unit": ""
				},
				{
					"text": "浊度",
					"value": function() {
						var value = '--';
						oSystem.data.map(function(item) {
							if (item.opcid == 'eqyszd') {
								value = parseFloat(item.opcvalue).toFixed(2);
							}
						})
						return value
					},
					"unit": "NTU"
				}
			],
			"position": [106.0725427770, 29.8706685109, 12.5],
			"orientation": [90, 0, 10],
			"showUpTime": 5,
			"showUpCameraDistance": 0,
			"labelID": "System-label-1",
			"pid": "",
			"system": ""
		},
		{
			"title": "一期滤前",
			"state": "",
			"type": "data",
			"data": [{
				"text": "待滤浊度",
				"value": function() {
					var value = '--';
					oSystem.data.map(function(item) {
						if (item.opcid == 'yqdlzd') {
							value = parseFloat(item.opcvalue).toFixed(2);
						}
					})
					return value
				},
				"unit": "NTU"
			}],
			"position": [106.0728514090, 29.8694466970, 15],
			"orientation": [90, 0, 10],
			"showUpTime": 19,
			"showUpCameraDistance": 100,
			"labelID": "System-label-4",
			"pid": "03",
			"system": ""
		},
		{
			"title": "二期滤前",
			"state": "",
			"type": "data",
			"data": [{
				"text": "待滤浊度",
				"value": function() {
					var value = '--';
					oSystem.data.map(function(item) {
						if (item.opcid == 'eqdlzd') {
							value = parseFloat(item.opcvalue).toFixed(2);
						}
					})
					return value
				},
				"unit": "NTU"
			}],
			"position": [106.0725044149, 29.8694466970, 15],
			"orientation": [90, 0, 10],
			"showUpTime": 19,
			"showUpCameraDistance": 100,
			"labelID": "System-label-5",
			"pid": "03",
			"system": ""
		},
		{
			"title": "1#滤池",
			"state": "正常过滤",
			"type": "data",
			"data": [{
				"text": "液位",
				"value": function() {
					var value = '--';
					oSystem.data.map(function(item) {
						if (item.opcid == 'yqlc1lcyw') {
							value = parseFloat(item.opcvalue).toFixed(2);
						}
					})
					return value
				},
				"unit": "cm"
			}],
			"position": [106.0728732922, 29.8691698417, 14],
			"orientation": [90, 0, 10],
			"showUpTime": 26,
			"showUpCameraDistance": 50,
			"labelID": "System-label-6",
			"pid": "05",
			"system": ""
		},
		{
			"title": "2#滤池",
			"state": "正常过滤",
			"type": "data",
			"data": [{
				"text": "液位",
				"value": function() {
					var value = '--';
					oSystem.data.map(function(item) {
						if (item.opcid == 'yqlc2lcyw') {
							value = parseFloat(item.opcvalue).toFixed(2);
						}
					})
					return value
				},
				"unit": "cm"
			}],
			"position": [106.0727787019, 29.8691698417, 14],
			"orientation": [90, 0, 10],
			"showUpTime": 26.2,
			"showUpCameraDistance": 50,
			"labelID": "System-label-7",
			"pid": "05",
			"system": ""
		},
		{
			"title": "3#滤池",
			"state": "正常过滤",
			"type": "data",
			"data": [{
				"text": "液位",
				"value": function() {
					var value = '--';
					oSystem.data.map(function(item) {
						if (item.opcid == 'yqlc3lcyw') {
							value = parseFloat(item.opcvalue).toFixed(2);
						}
					})
					return value
				},
				"unit": "cm"
			}],
			"position": [106.0726861776, 29.8691698417, 14],
			"orientation": [90, 0, 10],
			"showUpTime": 26.4,
			"showUpCameraDistance": 50,
			"labelID": "System-label-8",
			"pid": "05",
			"system": ""
		},
		{
			"title": "4#滤池",
			"state": "正常过滤",
			"type": "data",
			"data": [{
				"text": "液位",
				"value": function() {
					var value = '--';
					oSystem.data.map(function(item) {
						if (item.opcid == 'yqlc4lcyw') {
							value = parseFloat(item.opcvalue).toFixed(2);
						}
					})
					return value
				},
				"unit": "cm"
			}],
			"position": [106.0725907130, 29.8691698417, 14],
			"orientation": [90, 0, 10],
			"showUpTime": 26.6,
			"showUpCameraDistance": 50,
			"labelID": "System-label-9",
			"pid": "05",
			"system": ""
		},
		{
			"title": "清水池",
			"state": "",
			"type": "data",
			"data": [{
				"text": "液位#1",
				"value": function() {
					var value = '--';
					oSystem.data.map(function(item) {
						if (item.opcid == 'yqqsc1yw') {
							value = parseFloat(item.opcvalue).toFixed(2);
						}
					})
					return value
				},
				"unit": "m"
			}],
			"position": [106.0720650041, 29.8697921656, 12],
			"orientation": [90, 0, 10],
			"showUpTime": 39,
			"showUpCameraDistance": 100,
			"labelID": "System-label-10",
			"pid": "06",
			"system": ""
		},
		{
			"title": "清水池",
			"state": "",
			"type": "data",
			"data": [{
				"text": "液位#2",
				"value": function() {
					var value = '--';
					oSystem.data.map(function(item) {
						if (item.opcid == 'yqqsc2yw') {
							value = parseFloat(item.opcvalue).toFixed(2);
						}
					})
					return value
				},
				"unit": "m"
			}],
			"position": [106.0718775699, 29.8700405064, 12],
			"orientation": [90, 0, 10],
			"showUpTime": 39.2,
			"showUpCameraDistance": 100,
			"labelID": "System-label-10-2",
			"pid": "06",
			"system": ""
		},
		{
			"title": "清水池",
			"state": "",
			"type": "data",
			"data": [{
				"text": "液位#3",
				"value": function() {
					var value = '--';
					oSystem.data.map(function(item) {
						if (item.opcid == 'eqqsc1yw') {
							value = parseFloat(item.opcvalue).toFixed(2);
						}
					})
					return value
				},
				"unit": "m"
			}],
			"position": [106.0720434669, 29.8703846466, 12],
			"orientation": [90, 0, 10],
			"showUpTime": 39.4,
			"showUpCameraDistance": 100,
			"labelID": "System-label-10-3",
			"pid": "06",
			"system": ""
		},
		{
			"title": "清水池",
			"state": "",
			"type": "data",
			"data": [{
				"text": "液位#4",
				"value": function() {
					var value = '--';
					oSystem.data.map(function(item) {
						if (item.opcid == 'eqqsc2yw') {
							value = parseFloat(item.opcvalue).toFixed(2);
						}
					})
					return value
				},
				"unit": "m"
			}],
			"position": [106.0717847875, 29.8706601393, 12],
			"orientation": [90, 0, 10],
			"showUpTime": 39.6,
			"showUpCameraDistance": 100,
			"labelID": "System-label-10-4",
			"pid": "06",
			"system": ""
		},
		{
			"title": "1#泵",
			"state": "",
			"type": "data",
			"data": [{
					"text": "频率",
					"value": function() {
						var value = '--';
						oSystem.data.map(function(item) {
							if (item.opcid == 'ssxt1ssbpl') {
								value = parseFloat(item.opcvalue).toFixed(2);
							}
						})
						return value
					},
					"unit": "Hz"
				}

			],
			"position": [106.0718863145, 29.8694875012, 9.7],
			"orientation": [90, 0, 10],
			"showUpTime": 87.3,
			"showUpCameraDistance": 13,
			"labelID": "System-label-12",
			"pid": "07",
			"system": ""
		},
		{
			"title": "2#泵",
			"state": "",
			"type": "data",
			"data": [{
				"text": "频率",
				"value": function() {
					var value = '--';
					oSystem.data.map(function(item) {
						if (item.opcid == 'ssxt2ssbpl') {
							value = parseFloat(item.opcvalue).toFixed(2);
						}
					})
					return value
				},
				"unit": "Hz"
			}],
			"position": [106.0719159284, 29.8695127827, 9.7],
			"orientation": [90, 0, 10],
			"showUpTime": 87.6,
			"showUpCameraDistance": 13,
			"labelID": "System-label-13",
			"pid": "07",
			"system": ""
		},
		{
			"title": "3#泵",
			"state": "",
			"type": "data",
			"data": [{
					"text": "频率",
					"value": function() {
						var value = '--';
						oSystem.data.map(function(item) {
							if (item.opcid == 'ssxt3ssbpl') {
								value = parseFloat(item.opcvalue).toFixed(2);
							}
						})
						return value
					},
					"unit": "Hz"
				}

			],
			"position": [106.0719825796, 29.8694875012, 9.7],
			"orientation": [90, 0, 10],
			"showUpTime": 89.9,
			"showUpCameraDistance": 13,
			"labelID": "System-label-14",
			"pid": "07",
			"system": ""
		},
		{
			"title": "4#泵",
			"state": "",
			"type": "data",
			"data": [{
					"text": "频率",
					"value": function() {
						var value = '--';
						oSystem.data.map(function(item) {
							if (item.opcid == 'ssxt4ssbpl') {
								value = parseFloat(item.opcvalue).toFixed(2);
							}
						})
						return value
					},
					"unit": "Hz"
				}

			],
			"position": [106.0720153097, 29.8695127827, 9.7],
			"orientation": [90, 0, 10],
			"showUpTime": 90.2,
			"showUpCameraDistance": 13,
			"labelID": "System-label-15",
			"pid": "07",
			"system": ""
		},
		{
			"title": "5#泵",
			"state": "",
			"type": "data",
			"data": [{
					"text": "频率",
					"value": function() {
						var value = '--';
						oSystem.data.map(function(item) {
							if (item.opcid == 'ssxt5ssbpl') {
								value = parseFloat(item.opcvalue).toFixed(2);
							}
						})
						return value
					},
					"unit": "Hz"
				}

			],
			"position": [106.0718195283, 29.8694875012, 9.7],
			"orientation": [90, 0, 10],
			"showUpTime": 88.5,
			"showUpCameraDistance": 13,
			"labelID": "System-label-16",
			"pid": "07",
			"system": ""
		},
		{
			"title": "6#泵",
			"state": "",
			"type": "data",
			"data": [{
					"text": "频率",
					"value": function() {
						var value = '--';
						oSystem.data.map(function(item) {
							if (item.opcid == 'ssxt6ssbpl') {
								value = parseFloat(item.opcvalue).toFixed(2);
							}
						})
						return value
					},
					"unit": "Hz"
				}

			],
			"position": [106.0718467669, 29.8695127827, 9.7],
			"orientation": [90, 0, 10],
			"showUpTime": 88.8,
			"showUpCameraDistance": 13,
			"labelID": "System-label-17",
			"pid": "07",
			"system": ""
		},
		{
			"title": "7#泵",
			"state": "",
			"type": "data",
			"data": [{
					"text": "频率",
					"value": function() {
						var value = '--';
						oSystem.data.map(function(item) {
							if (item.opcid == 'ssxt7ssbpl') {
								value = parseFloat(item.opcvalue).toFixed(2);
							}
						})
						return value
					},
					"unit": "Hz"
				}

			],
			"position": [106.0720525567, 29.8694875012, 9.7],
			"orientation": [90, 0, 10],
			"showUpTime": 90.5,
			"showUpCameraDistance": 13,
			"labelID": "System-label-18",
			"pid": "07",
			"system": ""
		},
		{
			"title": "8#泵",
			"state": "",
			"type": "data",
			"data": [{
				"text": "频率",
				"value": function() {
					var value = '--';
					oSystem.data.map(function(item) {
						if (item.opcid == 'ssxt8ssbpl') {
							value = parseFloat(item.opcvalue).toFixed(2);
						}
					})
					return value
				},
				"unit": "Hz"
			}],
			"position": [106.0720811843, 29.8695127827, 9.7],
			"orientation": [90, 0, 10],
			"showUpTime": 90.8,
			"showUpCameraDistance": 13,
			"labelID": "System-label-19",
			"pid": "07",
			"system": ""
		},
		{
			"title": "出厂水",
			"state": "",
			"type": "data",
			"data": [
				{
					"text": "压力",
					"value": function() {
						var value = '--';
						oSystem.data.map(function(item) {
							if (item.opcid == 'ccsyl') {
								value = parseFloat(item.opcvalue).toFixed(3);
							}
						})
						return value
					},
					"unit": "Mpa"
				}, 
				{
					"text": "浊度",
					"value": function() {
						var value = '--';
						oSystem.data.map(function(item) {
							if (item.opcid == 'ccszd') {
								value = parseFloat(item.opcvalue).toFixed(3);
							}
						})
						return value
					},
					"unit": "NTU"
				},
				{
					"text": "PH",
					"value": function() {
						var value = '--';
						oSystem.data.map(function(item) {
							if (item.opcid == 'ccsph') {
								value = parseFloat(item.opcvalue).toFixed(3);
							}
						})
						return value
					},
					"unit": ""
				},
				{
					"text": "余氯",
					"value": function() {
						var value = '--';
						oSystem.data.map(function(item) {
							if (item.opcid == 'ccsylv') {
								value = parseFloat(item.opcvalue).toFixed(3);
							}
						})
						return value
					},
					"unit": "ppm"
				},
				{
					"text": "一期流量",
					"value": function() {
						var value = '--';
						oSystem.data.map(function(item) {
							if (item.opcid == '1cksll') {
								value = parseFloat(item.opcvalue).toFixed(2);
							}
						})
						return value
					},
					"unit": "m³/h"
				},
				{
					"text": "二期流量",
					"value": function() {
						var value = '--';
						oSystem.data.map(function(item) {
							if (item.opcid == '2cksll') {
								value = parseFloat(item.opcvalue).toFixed(2);
							}
						})
						return value
					},
					"unit": "m³/h"
				},
			],
			"position": [106.0715657616 , 29.8693835972, 11.7],
			"orientation": [90, 0, 10],
			"showUpTime": 90.8,
			"showUpCameraDistance": 13,
			"labelID": "System-label-21",
			"pid": "00",
			"system": ""
		},
	],
	flyPositions: [
		[106.0726760505, 29.8715684505, 60],
		[106.0726760505, 29.8715684505, 60],
		[106.0726708621, 29.8712518306, 35],
		[106.0726711758, 29.8694794890, 35],
		[106.0728784529, 29.8691088768, 16.5],
		[106.0728732617, 29.8690745186, 13],
		[106.0724443955, 29.8690781776, 13],
		[106.0723043143, 29.8690788521, 35],
		[106.0722986641, 29.8702842302, 35],
		[106.0730527124, 29.8702479083, 35],
		[106.0730459650, 29.8690664052, 35],
		[106.0722981850, 29.8690768151, 35],
		[106.0718910893, 29.8692085688, 13],
		//控制室内
		[106.0718911390, 29.8692283859, 13],
		[106.0717561604, 29.8692283859, 13],
		[106.0718911390, 29.8692283859, 13],

		[106.0718996189, 29.8691666625, 13],
		[106.0715799827, 29.8691712702, 13],
		[106.0715772365, 29.8695085638, 13],
		[106.0720319446, 29.8695030882, 13],
		[106.0715772365, 29.8695085638, 13],
		[106.0705051008, 29.8695021539, 80]

	],
	audio: {
		play: function() {
			var audio = document.getElementById("audio_player");
			var rangeInput = document.getElementById("systemFlyTimeLine");
			var currentT = audio.duration * rangeInput.value / 100;
			audio.currentTime = currentT;
			audio.play()
		},
		pause: function() {
			var audio = document.getElementById("audio_player");
			audio.pause()
		}
	},
	pauseFly: function() {
		// oDefault.pointSigns.map(function(sign) {
		// 	sign.show = true;
		// 	sign.sign.show = true;
		// })
		//暂停时间
		oSystem.restoreCameraEvents();
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
	createFlyPanel: function() {
		oSystem.createWaterSur();
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
			oSystem.startDataRoll();
		}
		controlDiv2.onclick = function() {
			controlDiv2.className = 'data-roll-control-div active';
			controlDiv1.className = 'data-roll-control-div';
			oSystem.stopDataRoll();
		}
		//面板隐藏
		var systemFlyPanelHide = document.createElement('div');
		systemFlyPanelHide.setAttribute('id', 'systemFlyPanelHide');
		systemFlyPanelHide.className = 'system-fly-panel-hide';
		document.getElementById('body').appendChild(systemFlyPanelHide);

		//面板
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
			oSystem.audio.pause();
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
					oSystem.removeCameraEvents();
					oSystem.startFly();
					oSystem.audio.play();
				} else {

					oSystem.removeCameraEvents();
					oSystem.restartFly();
					oSystem.audio.play();
				}
			} else {
				btnPlay.className = 'system-fly-btn system-play';
				oSystem.pauseFly();
				oSystem.restoreCameraEvents();
				oSystem.audio.pause();
			}
		}

		var btnForward = document.createElement('div');
		systemFlyPanelBtnGroup.appendChild(btnForward);
		btnForward.setAttribute('id', 'btnForward');
		btnForward.className = 'system-fly-btn system-forward';
		btnForward.onclick = function() {
			oSystem.audio.pause();
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
			oSystem.dataLabelList.map(function(item) {
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
		audio.src = "./Audios/system.mp3";
		audio.loop = false;
		setTimeout(function() {
			console.log('audio', duration);
			if (audio.readyState) {
				var duration = audio.duration;
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
		// oSystem.createDataLabels();
	},
	createWaterSur: function() {
		if (oDefault.waterSurEntityArr.length > 0) {
			oDefault.waterSurEntityArr.map(function(item) {
				oDefault.viewer.scene.primitives.remove(item.entity);
			})
			oDefault.waterSurEntityArr = [];
		}
		$.getJSON('./Js/Plugins/Systems/System/SystemData.json', function(res) {
			var data = res.waterSurArr;
			var color
			data.map(function(item) {
				color = new Cesium.Color.fromBytes(item.color[0], item.color[1], item.color[2], item.color[3]);
				if (item.type == 'rectangle') {
					var waterPrimitive = new Cesium.Primitive({
						show: true,
						allowPicking: true,
						geometryInstances: new Cesium.GeometryInstance({
							id: item.name,
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
						alpha: item.color[3] / 255,
						name: item.name
					})
				}
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
					var waterPrimitive = new Cesium.Primitive({
						show: true,
						allowPicking: true,
						geometryInstances: new Cesium.GeometryInstance({
							id: item.name,
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
						name: item.name
					})
				}
			})

		})
	},
	createDataLabels: function() {
		var viewer = oDefault.viewer;
		if (viewer) {
			var labelData = oSystem.dataLabelList;
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
					sign.show = true;
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
		oSystem.startDataRoll();
	},
	getData:function(){
		if(oSystem.isGettingData){
			return
		}
		oSystem.isGettingData=true;
		var oGetData = {};
		setInterval(function() {
			//Global.ajaxGet("8f48f08b84498b7b", oGetData, function(oJson) {
			//	if (!oJson.Result) {
			//		Global.closeWaiting();
			//		Global.dialogAlert({
			//			msg: oJson.ErrorMessage,
			//			type: 0
			//		});
			//		return;
			//	}
			//	oDefault.realTimeData = JSON.parse(oJson.KeyValue).rows;
				// oSystem.loadData();
				// oWaterDelivery.loadData();
				// oSediment.loadData();
				// oMud.loadData();
				// oFilter.loadData();
				// oDosing.loadData();
				// oBackFlushing.loadData();
			//})
		}, 10000)
		Global.ajaxGet("api/OPC/getOPCData", oGetData, function(oJson) {
			if (!oJson.Result) {
				Global.closeWaiting();
				Global.dialogAlert({
					msg: oJson.ErrorMessage,
					type: 0
				});
				return;
			}
			oDefault.realTimeData = JSON.parse(oJson.KeyValue).rows;
			console.log(oDefault.realTimeData)
		
			// oSystem.loadData();
			// oWaterDelivery.loadData();
			// oSediment.loadData();
			// oMud.loadData();
			// oFilter.loadData();
			// oDosing.loadData();
			// oBackFlushing.loadData();
		})
	},
	loadData: function() {
		var viewer = oDefault.viewer;
		oSystem.data = oDefault.realTimeData;
		var labelData = oSystem.dataLabelList;
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
	showLabel: function(name) {
		var label;
		var color = new Cesium.Color.fromCssColorString('#1071e2');
		var labelData = oDefault.configData.tilesets.chejian.tujian;
		labelData.forEach(function(data) {
			if (data.name == name) label = data.label;
		})
		label.forEach(function(item) {
			var name = item.name;
			var position = Cesium.Cartesian3.fromDegrees(item.position[0], item.position[1], item.position[2]);
			var label = oDefault.viewer.entities.add({
				name: name,
				position: position,
				label: {
					text: name,
					font: '17px Hei',
					scale: 1,
					style: Cesium.LabelStyle.FILL,
					fillColor: Cesium.Color.WHITE,
					pixelOffset: new Cesium.Cartesian2(0, -5),
					showBackground: true,
					backgroundColor: Cesium.Color.fromAlpha(color, 0.8),
					verticalOrigin: Cesium.VerticalOrigin.BOTTOM,
					horizontalOrigin: Cesium.HorizontalOrigin.CENTER
				},
				point: {
					color: color,
					pixelSize: 7,
					outlineColor: color
				}
			});
			setTimeout(function() {
				oDefault.viewer.entities.remove(label);
			}, 5000)
		})
	},
	showLabels: function() {
		var name = '';
		var position = null;
		var color = new Cesium.Color.fromCssColorString('#26c4b7');
		var addLabel = function(label) {
			label.forEach(function(item) {
				var name = item.name;
				var position = Cesium.Cartesian3.fromDegrees(item.position[0], item.position[1], item.position[2]);
				var label = oDefault.viewer.entities.add({
					name: name,
					position: position,
					label: { //文字标签
						text: name,
						font: '17px Hei', // 15pt monospace
						scale: 1,
						style: Cesium.LabelStyle.FILL,
						fillColor: Cesium.Color.WHITE,
						pixelOffset: new Cesium.Cartesian2(0, -5), //偏移量
						showBackground: true,
						backgroundColor: Cesium.Color.fromAlpha(color, 0.5),
						verticalOrigin: Cesium.VerticalOrigin.BOTTOM, //垂直位置
						horizontalOrigin: Cesium.HorizontalOrigin.CENTER
					},
					point: {
						color: color, //点位颜色
						pixelSize: 7,
						outlineColor: color
					}
				});
				setTimeout(function() {
					oDefault.viewer.entities.remove(label);
				}, 1500)
			})
		}
		var labels = oDefault.configData.tilesets.chejian.tujian;
		var total = labels.length;
		var i = 0;
		var interval = setInterval(function() {
			if (i >= total) {
				clearInterval(interval);
				return;
			}
			var sight = labels[i];
			addLabel(sight.label);
			i++
		}, 1500)
	},
	removeCameraEvents: function() {
		oSystem.systemCameraControler = oDefault.viewer.scene.screenSpaceCameraController;
		oDefault.viewer.cesiumWidget.screenSpaceEventHandler.removeInputAction(Cesium.ScreenSpaceEventType.LEFT_DOUBLE_CLICK);
		if (oSystem.systemCameraControler) {
			oSystem.systemCameraControler.enableZoom = false;
			oSystem.systemCameraControler.enableInputs = false;
			oSystem.systemCameraControler.enableTilt = false;
		}
		if (oDefault.dragCameraEventHandler) {
			oDefault.dragCameraEventHandler.removeInputAction(Cesium.ScreenSpaceEventType.MOUSE_MOVE);
			oDefault.dragCameraEventHandler.removeInputAction(Cesium.ScreenSpaceEventType.LEFT_DOWN);
			oDefault.dragCameraEventHandler.removeInputAction(Cesium.ScreenSpaceEventType.LEFT_UP);
		}

	},
	restoreCameraEvents: function() {
		if (oSystem.systemCameraControler) {
			oSystem.systemCameraControler.enableZoom = true;
			oSystem.systemCameraControler.enableInputs = true;
			oSystem.systemCameraControler.enableTilt = true;
		}
		if (oDefault.dragCameraEventHandler) {
			oDefault.dragCameraEventHandler.setInputAction(oDefault.mouseMoveEvent, Cesium.ScreenSpaceEventType.MOUSE_MOVE);
			oDefault.dragCameraEventHandler.setInputAction(oDefault.mouseLeftDownEvent, Cesium.ScreenSpaceEventType.LEFT_DOWN);
			oDefault.dragCameraEventHandler.setInputAction(oDefault.mouseLeftUpEvent, Cesium.ScreenSpaceEventType.LEFT_UP);
		}
	},
	restartFly: function() {
		//重新开始
		oSystem.startFly();
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
		}, 400)

	},
	stopFly: function() {
		oSystem.startDataRoll();
		
		oDefault.tilesetList.map(function(item) {
			if (item.tileset) {
				item.tileset.tileVisible.removeEventListener(oSystem.hideElementEvent);
			}
			if (item.tilesetList) {
				item.tilesetList.map(function(tile) {
					tile.tileset.tileVisible.removeEventListener(oSystem.hideElementEvent);
				})
			}
		})
		//飞行结束 恢复事件 清除数据及面板
		oSystem.restoreCameraEvents();
		oDefault.clearAll();
		if (document.getElementById('systemFlyPanel')) {
			document.getElementById('systemFlyPanel').remove();
		}
		if (document.getElementById('systemFlyPanelHide')) {
			document.getElementById('systemFlyPanelHide').remove();
		}
		if (document.getElementById('dataRollControl')) {
			document.getElementById('dataRollControl').remove();
		}
		oSystem.createFlyPanel();
		oDefault.flyData.pauseData.currentTime = null;
		oDefault.flyData.pauseData.cameraOrientation = [];
		oDefault.flyData.pauseData.cameraPosition = [];
		//设置角度
		var initialPosition = Cesium.Cartesian3.fromDegrees(106.07267605049998, 29.87157747159136, 60.30000004091949);
		var initialOrientation = new Cesium.HeadingPitchRoll.fromDegrees(180.00, -16.70, 360.00);
		oDefault.viewer.scene.camera.setView({
			destination: initialPosition,
			orientation: initialOrientation,
			endTransform: Cesium.Matrix4.IDENTITY
		});
		oSystem.audio.pause();
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
		oSystem.stopDataRoll();
		oDefault.pointSigns.map(function(item) {
			$('#' + item.id).hide()
		})
		//
		oDefault.tilesetList.map(function(item) {
			if (item.tileset) {
				item.tileset.tileVisible.addEventListener(oSystem.hideElementEvent);
			}
			if (item.tilesetList) {
				item.tilesetList.map(function(tile) {
					tile.tileset.tileVisible.addEventListener(oSystem.hideElementEvent);
				})
			}
		})
		oDefault.flyData.isPaused = false;
		oDefault.pointSigns.map(function(sign) {
			sign.show = false;
			sign.sign.show = false;
		})
		oDefault.flyData.isStarted = true;
		oDefault.flyData.isPaused = false;
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
		if (oSystem.flyPositions.length > 0) {
			for (var i = 0; i < oSystem.flyPositions.length; i++) {
				var x = oSystem.flyPositions[i][0];
				var y = oSystem.flyPositions[i][1];
				var z = oSystem.flyPositions[i][2];
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
		function targetFeatureList(data, targetnameList) {
			var featureList = [];

			function findFeatures(target) {
				if (target.content) {
					if (target.content.featuresLength > 0 && target.content._features) {
						target.content._features.forEach(feature => {
							// if (feature.getProperty('name') == targetname) {
							// 	featureList.push(feature);
							// }
							if (targetnameList.indexOf(feature.getProperty('name')) >= 0) {
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
				// console.log('no root exist');
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
					addStep('seconds', 2, 0.15);
					
				}
				if (i == 2) {
					addStep('distance', 40, 0.15);
				}
				if (i == 3) {
					addStep('distance', 50, 0.15);
				}
				if (i == 4) {
					addStep('distance', 65, 0.15);
				}
				if (i == 5) {
					addStep('distance', 75, 0.15);
				}
				if (i == 6) {
					addStep('distance', 45, 0.15);
				}
				if (i > 6 && i <= 9) {
					addStep('distance', 70, 0.15);
				}
				if (i == 10) {
					addStep('distance', 80, 0.15);
				}
				if (i > 10 && i <= 13) {
					addStep('distance', 100, 0.15);
				}
				if (i > 13 && i <= 15) {
					addStep('distance', 25, 0.15);
				}
				if (i > 15 && i <= 18) {
					addStep('distance', 40, 0.15);
				}
				if (i > 18 && i < 21) {
					addStep('distance', 50, 0.15);
				}
				if (i == 21) {
					addStep('seconds', 2, 0.15);
				}
			}
			return property;
		}
		var start = Cesium.JulianDate.fromDate(new Date(2018, 3, 15, 16));
		var stop = Cesium.JulianDate.addSeconds(start, 124 * 0.15, new Cesium.JulianDate());
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
		oSystem.waterSurEntityTimerangeArr = [{
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
		oSystem.orientationArr = [{
				start: timesArr[0].secondsOfDay,
				stop: timesArr[5].secondsOfDay,
				orientation: {
					heading: 180,
					pitch: -25,
					range: 0.1
				}
			},
			{
				start: timesArr[5].secondsOfDay,
				stop: timesArr[7].secondsOfDay,
				orientation: {
					heading: 270,
					pitch: 0,
					range: 0.1
				}
			},
			{
				start: timesArr[7].secondsOfDay,
				stop: timesArr[8].secondsOfDay,
				orientation: {
					heading: 0,
					pitch: -25,
					range: 0.1
				}
			},
			{
				start: timesArr[8].secondsOfDay,
				stop: timesArr[9].secondsOfDay,
				orientation: {
					heading: 90,
					pitch: -25,
					range: 0.1
				}
			},
			{
				start: timesArr[9].secondsOfDay,
				stop: timesArr[10].secondsOfDay,
				orientation: {
					heading: 180,
					pitch: -25,
					range: 0.1
				}
			},
			{
				start: timesArr[10].secondsOfDay,
				stop: timesArr[12].secondsOfDay,
				orientation: {
					heading: 290,
					pitch: -25,
					range: 0.1
				}
			},
			{
				start: timesArr[12].secondsOfDay,
				stop: timesArr[13].secondsOfDay,
				orientation: {
					heading: 360,
					pitch: 0,
					range: 0.1
				}
			},
			{
				start: timesArr[13].secondsOfDay,
				stop: timesArr[14].secondsOfDay,
				orientation: {
					heading: 270,
					pitch: 10,
					range: 0.1
				}
			},
			{
				start: timesArr[14].secondsOfDay,
				stop: timesArr[15].secondsOfDay,
				orientation: {
					heading: 300,
					pitch: 0,
					range: 0.1
				}
			},
			{
				start: timesArr[15].secondsOfDay,
				stop: timesArr[16].secondsOfDay,
				orientation: {
					heading: 180,
					pitch: 0,
					range: 0.1
				}
			},
			{
				start: timesArr[16].secondsOfDay,
				stop: timesArr[17].secondsOfDay,
				orientation: {
					heading: 270,
					pitch: 0,
					range: 0.1
				}
			},
			{
				start: timesArr[17].secondsOfDay,
				stop: timesArr[18].secondsOfDay,
				orientation: {
					heading: 0,
					pitch: 0,
					range: 0.1
				}
			},
			{
				start: timesArr[18].secondsOfDay,
				stop: timesArr[20].secondsOfDay,
				orientation: {
					heading: 90,
					pitch: 0,
					range: 0.1
				}
			},
			{
				start: timesArr[20].secondsOfDay,
				stop: timesArr[21].secondsOfDay,
				orientation: {
					heading: 90,
					pitch: -20,
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
			viewFrom: new Cesium.Cartesian3(0, 1, 0.3),
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
			oSystem.waterSurEntityTimerangeArr.map(function(arr) {
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
			oSystem.timeInputRange = true;
		}
		rangeInput.onmouseup = function() {
			oDefault.waterSurEntityArr.map(function(item) {
				var percent = rangeInput.value / 100;
				var addsec = (timeArr[timeArr.length - 1].secondsOfDay - timeArr[0].secondsOfDay) * percent;
				var currentTime = Cesium.JulianDate.addSeconds(start, addsec, new Cesium.JulianDate());
				var timeRange
				oSystem.waterSurEntityTimerangeArr.map(function(arr) {
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
				oSystem.timeInputRange = false;
				// 方向			
				var cTime = oDefault.viewer.clockViewModel.currentTime;
				oSystem.orientationArr.forEach(function(item) {
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
					oSystem.audio.play();
				}
			} else {
				oSystem.startFly();
				oDefault.viewer.clock.shouldAnimate = false;
				var percent = rangeInput.value / 100;
				var addsec = (timeArr[timeArr.length - 1].secondsOfDay - timeArr[0].secondsOfDay) * percent;
				var currentTime = Cesium.JulianDate.addSeconds(start, addsec, new Cesium.JulianDate());
				oDefault.viewer.clockViewModel.currentTime = currentTime;
				oSystem.timeInputRange = false;
				var cTime = oDefault.viewer.clockViewModel.currentTime;
				oSystem.orientationArr.forEach(function(item) {
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
				oSystem.pauseFly();
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
		for (var i = 0; i < oSystem.dataLabelList.length; i++) {
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
		//注册clock ontick事件
		oDefault.clockTickEvent = function() {
			if (entityFly.position) {
				var currentPosition = entityFly.position.getValue(oDefault.viewer.clock.currentTime);
				var ellipsoid = oDefault.viewer.scene.globe.ellipsoid;
				if (!currentPosition) {
					//结束飞行
					oSystem.stopFly();
					//模型复原
					oDefault.tilesetList.map(function(item) {
						if (item.tileset) {
							item.tileset.style = new Cesium.Cesium3DTileStyle({
								color: 'rgba(255, 255, 255, 1)'
							})
						}
						if (item.tilesetList) {
							item.tilesetList.map(function(tile) {
								tile.tileset.style = new Cesium.Cesium3DTileStyle({
									color: 'rgba(255, 255, 255, 1)'
								})
							})
						}
					})

				} else {
					//倒退完成结束飞行
					if (oDefault.viewer.clock.multiplier < 0 && oDefault.viewer.clock.currentTime.secondsOfDay == oDefault.viewer.clock
						.startTime.secondsOfDay) {
						oSystem.stopFly();
						//模型复原
						oDefault.tilesetList.map(function(item) {
							if (item.tileset) {
								item.tileset.style = new Cesium.Cesium3DTileStyle({
									color: 'rgba(255, 255, 255, 1)'
								})
							}
							if (item.tilesetList) {
								item.tilesetList.map(function(tile) {
									tile.tileset.style = new Cesium.Cesium3DTileStyle({
										color: 'rgba(255, 255, 255, 1)'
									})
								})
							}
						})
					}
					//进度条和时间更新
					if (!oSystem.timeInputRange) {
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
					//转向
					var a = oDefault.viewer.clock.currentTime.secondsOfDay.toFixed(2);
					//turn1
					ctime = timesArr[5].secondsOfDay;
					begin = (ctime).toFixed(2);
					end = (ctime + 0.1).toFixed(2);
					if (a >= begin && a <= end && turn1) {
						turn1 = false;
						if (oDefault.viewer.clock.multiplier > 0) {
							swerve(180, 10, 0, 9);
						} else {
							swerve(270, -10, -25, 9);
						}
					} else if (a < begin || a > end) {
						turn1 = true;
					}
					//turn2
					ctime = timesArr[7].secondsOfDay;
					begin = (ctime).toFixed(2);
					end = (ctime + 0.1).toFixed(2);
					if (a >= begin && a <= end && turn2) {
						turn2 = false;
						if (oDefault.viewer.clock.multiplier > 0) {
							swerve(270, 10, -25, 9);
						} else {
							swerve(0, -10, 0, 9);
						}
					} else if (a < begin || a > end) {
						turn2 = true;
					}
					//turn3
					ctime = timesArr[8].secondsOfDay;
					begin = (ctime - 0.05).toFixed(2);
					end = (ctime + 0.05).toFixed(2);
					if (a >= begin && a <= end && turn3) {
						turn3 = false;
						if (oDefault.viewer.clock.multiplier > 0) {
							swerve(0, 10, -25, 9);
						} else {
							swerve(90, -10, -25, 9);
						}
					} else if (a < begin || a > end) {
						turn3 = true;
					}
					//turn4
					ctime = timesArr[9].secondsOfDay;
					begin = (ctime - 0.05).toFixed(2);
					end = (ctime + 0.05).toFixed(2);
					if (a >= begin && a <= end && turn4) {
						turn4 = false;
						if (oDefault.viewer.clock.multiplier > 0) {
							swerve(90, 10, -25, 9);
						} else {
							swerve(180, -10, -25, 9);
						}
					} else if (a < begin || a > end) {
						turn4 = true;
					}
					//turn5
					ctime = timesArr[10].secondsOfDay;
					begin = (ctime - 0.05).toFixed(2);
					end = (ctime + 0.05).toFixed(2);
					if (a >= begin && a <= end && turn5) {
						turn5 = false;
						if (oDefault.viewer.clock.multiplier > 0) {
							swerve(180, 10, -25, 11);
						} else {
							swerve(290, -10, -25, 11);
						}
					} else if (a < begin || a > end) {
						turn5 = true;
					}
					// //turn6
					ctime = timesArr[12].secondsOfDay;
					begin = (ctime - 0.05).toFixed(2);
					end = (ctime + 0.05).toFixed(2);
					if (a >= begin && a <= end && turn6) {
						turn6 = false;
						if (oDefault.viewer.clock.multiplier > 0) {
							swerve(290, 10, 0, 7);
						} else {
							swerve(360, -10, -25, 7);
						}
					} else if (a < begin || a > end) {
						turn6 = true;
					}
					// turn7
					ctime = timesArr[13].secondsOfDay;
					begin = (ctime - 0.05).toFixed(2);
					end = (ctime + 0.05).toFixed(2);
					if (a >= begin && a <= end && turn7) {
						turn7 = false;
						if (oDefault.viewer.clock.multiplier > 0) {
							swerve(360, -10, 10, 8);
						} else {
							swerve(280, 10, 0, 8);
						}
					} else if (a < begin || a > end) {
						turn7 = true;
					}
					// turn8
					ctime = timesArr[14].secondsOfDay;
					begin = (ctime - 0.05).toFixed(2);
					end = (ctime + 0.05).toFixed(2);
					if (a >= begin && a <= end && turn8) {
						turn8 = false;
						if (oDefault.viewer.clock.multiplier > 0) {
							swerve(280, 10, 0, 2);
						} else {
							swerve(300, -10, 10, 2);
						}
					} else if (a < begin || a > end) {
						turn8 = true;
					}
					//turn9
					ctime = timesArr[15].secondsOfDay;
					begin = (ctime - 0.05).toFixed(2);
					end = (ctime + 0.05).toFixed(2);
					if (a >= begin && a <= end && turn9) {
						turn9 = false;
						if (oDefault.viewer.clock.multiplier > 0) {
							swerve(300, -10, 0, 12);
						} else {
							swerve(180, 10, 0, 12);
						}
					} else if (a < begin || a > end) {
						turn9 = true;
					}
					//turn10
					ctime = timesArr[16].secondsOfDay;
					begin = (ctime - 0.05).toFixed(2);
					end = (ctime + 0.05).toFixed(2);
					if (a >= begin && a <= end && turn10) {
						turn10 = false;
						if (oDefault.viewer.clock.multiplier > 0) {
							swerve(180, 10, 0, 9);
						} else {
							swerve(270, -10, 0, 9);
						}
					} else if (a < begin || a > end) {
						turn10 = true;
					}
					//turn11
					ctime = timesArr[17].secondsOfDay;
					begin = (ctime - 0.05).toFixed(2);
					end = (ctime + 0.05).toFixed(2);
					if (a >= begin && a <= end && turn11) {
						turn11 = false;
						if (oDefault.viewer.clock.multiplier > 0) {
							swerve(270, 10, 0, 9);
						} else {
							swerve(360, -10, 0, 9);
						}
					} else if (a < begin || a > end) {
						turn11 = true;
					}
					//turn12
					ctime = timesArr[18].secondsOfDay;
					begin = (ctime - 0.05).toFixed(2);
					end = (ctime + 0.05).toFixed(2);
					if (a >= begin && a <= end && turn12) {
						turn12 = false;
						if (oDefault.viewer.clock.multiplier > 0) {
							swerve(0, 10, 0, 9);
						} else {
							swerve(90, -10, 0, 9);
						}
					} else if (a < begin || a > end) {
						turn12 = true;
					}
					//turn13
					ctime = timesArr[20].secondsOfDay;
					begin = (ctime + 0.2).toFixed(2);
					end = (ctime + 0.3).toFixed(2);
					if (a >= begin && a <= end && turn13) {
						turn13 = false;
						if (oDefault.viewer.clock.multiplier > 0) {
							swerveV(90, -2, 0, 10);
						} else {
							swerveV(90, 2, 20, 10);
						}
					} else if (a < begin || a > end) {
						turn13 = true;
					}
					// 沉淀池滤池顶部 及其他需要 隐藏部分

					//反冲洗泵房卷闸门1 送水泵房卷闸门
					var tileset

					var pointPosition = {
						"x": -1532521.83525731,
						"y": 5319140.17923285,
						"z": 3157803.10466657
					}
					var currentPosition = entityFly.position.getValue(oDefault.viewer.clock.currentTime);
					var positionArr = [];
					positionArr.push(currentPosition);
					positionArr.push(pointPosition);
					var distance = oSystem.getSpaceDistance(positionArr) - 0;
					var targetList = [];
					var featureList = [];
					oDefault.tilesetList.forEach(function(item) {
						if (item.id == 'tujian-05') {
							item.tilesetList.map(function(tile) {
								var targetList = targetFeatureList(tile.tileset, '05010005-反冲洗泵房卷闸门');
								if (targetList && targetList.length > 0) {
									featureList = targetList;
								}
							})
						}
					})

					if (distance < 7) {
						featureList.forEach(feature => {
							feature.show = false;
						})
					} else {
						featureList.forEach(feature => {
							feature.show = true;
						})
					}
					//
					var tileset
					var pointPosition = {
						"x": -1532450.51364367,
						"y": 5319135.79807008,
						"z": 3157844.81549749,
					}
					var currentPosition = entityFly.position.getValue(oDefault.viewer.clock.currentTime);
					var positionArr = [];
					positionArr.push(currentPosition);
					positionArr.push(pointPosition);
					var distance = oSystem.getSpaceDistance(positionArr) - 0;
					var targetList = [];
					var featureList = [];
					oDefault.tilesetList.forEach(function(item) {
						if (item.id == 'tujian-07') {
							item.tilesetList.map(function(tile) {
								var targetList = targetFeatureList(tile.tileset, '07010039-送水泵房卷闸门');
								if (targetList && targetList.length > 0) {
									featureList = targetList;
								}
							})
						}
					})
					if (distance < 7) {
						featureList.forEach(feature => {
							feature.show = false;
						})
					} else {
						featureList.forEach(feature => {
							feature.show = true;
						})
					}
					//showlabel						
					var value = timeline.value;
					var showTime;
					//
					showTime = 9; //时间刻度值（最大100）
					if (value == showTime && showMark[0]) {
						showMark[0] = false;
						oSystem.showLabel('进水分配井');
					} else if (value != showTime) {
						showMark[0] = true;
					}
					//
					showTime = 13;
					if (value == showTime && showMark[1]) {
						showMark[1] = false;
						oSystem.showLabel('沉淀池');
					} else if (value != showTime) {
						showMark[1] = true;
					}
					//
					showTime = 26;
					if (value == showTime && showMark[2]) {
						showMark[2] = false;
						oSystem.showLabel('砂滤池');
					} else if (value != showTime) {
						showMark[2] = true;
					}
					//
					showTime = 39;
					if (value == showTime && showMark[3]) {
						showMark[3] = false;
						oSystem.showLabel('清水池');
					} else if (value != showTime) {
						showMark[3] = true;
					}
					//
					showTime = 49;
					if (value == showTime && showMark[4]) {
						showMark[4] = false;
						oSystem.showLabel('加药加氯间');
					} else if (value != showTime) {
						showMark[4] = true;
					}
					//
					showTime = 53;
					if (value == showTime && showMark[5]) {
						showMark[5] = false;
						oSystem.showLabel('脱泥机房');
					} else if (value != showTime) {
						showMark[5] = true;
					}
					//
					showTime = 54;
					if (value == showTime && showMark[6]) {
						showMark[6] = false;
						oSystem.showLabel('污泥浓缩池');
					} else if (value != showTime) {
						showMark[6] = true;
					}
					//
					showTime = 55;
					if (value == showTime && showMark[7]) {
						showMark[7] = false;
						oSystem.showLabel('回流排泥池');
					} else if (value != showTime) {
						showMark[7] = true;
					}
					//
					showTime = 63;
					if (value == showTime && showMark[8]) {
						showMark[8] = false;
						oSystem.showLabel('堆场');
					} else if (value != showTime) {
						showMark[8] = true;
					}
					//
					showTime = 64;
					if (value == showTime && showMark[9]) {
						showMark[9] = false;
						oSystem.showLabel('送水泵房');
					} else if (value != showTime) {
						showMark[9] = true;
					}

					//显示数据
					var dataShowTime //
					dataShowTime = oSystem.dataLabelList[0].showUpTime;
					if (value >= dataShowTime && value <= (dataShowTime + 0.2) && dataShowMark[0]) {
						dataShowMark[0] = false;
						if (document.getElementById(oSystem.dataLabelList[0].labelID)) {
							document.getElementById(oSystem.dataLabelList[0].labelID).style.display = 'block';
							setTimeout(function() {
								document.getElementById(oSystem.dataLabelList[0].labelID).style.display = 'none';
							}, 5000)
						}
					} else if (value > (dataShowTime + 0.2)) {
						dataShowMark[0] = true;
					}
					//
					dataShowTime = oSystem.dataLabelList[1].showUpTime;
					if (value >= dataShowTime && value <= (dataShowTime + 0.2) && dataShowMark[1]) {
						dataShowMark[1] = false;
						if (document.getElementById(oSystem.dataLabelList[1].labelID)) {
							document.getElementById(oSystem.dataLabelList[1].labelID).style.display = 'block';
							setTimeout(function() {
								document.getElementById(oSystem.dataLabelList[1].labelID).style.display = 'none';
							}, 5000)
						}
					} else if (value > (dataShowTime + 0.2)) {
						dataShowMark[1] = true;
					}
					//
					dataShowTime = oSystem.dataLabelList[2].showUpTime;
					if (value >= dataShowTime && value <= (dataShowTime + 0.2) && dataShowMark[2]) {
						dataShowMark[2] = false;
						if (document.getElementById(oSystem.dataLabelList[2].labelID)) {
							document.getElementById(oSystem.dataLabelList[2].labelID).style.display = 'block';
							setTimeout(function() {
								document.getElementById(oSystem.dataLabelList[2].labelID).style.display = 'none';
							}, 5000)
						}
					} else if (value > (dataShowTime + 0.2)) {
						dataShowMark[2] = true;
					}
					//
					dataShowTime = oSystem.dataLabelList[3].showUpTime;
					if (value >= dataShowTime && value <= (dataShowTime + 0.2) && dataShowMark[3]) {
						dataShowMark[3] = false;
						if (document.getElementById(oSystem.dataLabelList[3].labelID)) {
							document.getElementById(oSystem.dataLabelList[3].labelID).style.display = 'block';
							setTimeout(function() {
								document.getElementById(oSystem.dataLabelList[3].labelID).style.display = 'none';
							}, 5000)
						}
					} else if (value > (dataShowTime + 0.2)) {
						dataShowMark[3] = true;
					}
					//
					dataShowTime = oSystem.dataLabelList[4].showUpTime;
					if (value >= dataShowTime && value <= (dataShowTime + 0.2) && dataShowMark[4]) {
						dataShowMark[4] = false;
						if (document.getElementById(oSystem.dataLabelList[4].labelID)) {
							document.getElementById(oSystem.dataLabelList[4].labelID).style.display = 'block';
							setTimeout(function() {
								document.getElementById(oSystem.dataLabelList[4].labelID).style.display = 'none';
							}, 5000)
						}
					} else if (value > (dataShowTime + 0.2)) {
						dataShowMark[4] = true;
					}
					//
					dataShowTime = oSystem.dataLabelList[5].showUpTime;
					if (value >= dataShowTime && value <= (dataShowTime + 0.2) && dataShowMark[5]) {
						dataShowMark[5] = false;
						if (document.getElementById(oSystem.dataLabelList[5].labelID)) {
							document.getElementById(oSystem.dataLabelList[5].labelID).style.display = 'block';
							setTimeout(function() {
								document.getElementById(oSystem.dataLabelList[5].labelID).style.display = 'none';
							}, 5000)
						}
					} else if (value > (dataShowTime + 0.2)) {
						dataShowMark[5] = true;
					}
					//
					dataShowTime = oSystem.dataLabelList[6].showUpTime;
					if (value >= dataShowTime && value <= (dataShowTime + 0.2) && dataShowMark[6]) {
						dataShowMark[6] = false;
						if (document.getElementById(oSystem.dataLabelList[6].labelID)) {
							document.getElementById(oSystem.dataLabelList[6].labelID).style.display = 'block';
							setTimeout(function() {
								document.getElementById(oSystem.dataLabelList[6].labelID).style.display = 'none';
							}, 5000)
						}
					} else if (value > (dataShowTime + 0.2)) {
						dataShowMark[6] = true;
					}
					//
					dataShowTime = oSystem.dataLabelList[7].showUpTime;
					if (value >= dataShowTime && value <= (dataShowTime + 0.2) && dataShowMark[7]) {
						dataShowMark[7] = false;
						if (document.getElementById(oSystem.dataLabelList[7].labelID)) {
							document.getElementById(oSystem.dataLabelList[7].labelID).style.display = 'block';
							setTimeout(function() {
								document.getElementById(oSystem.dataLabelList[7].labelID).style.display = 'none';
							}, 5000)
						}
					} else if (value > (dataShowTime + 0.2)) {
						dataShowMark[7] = true;
					}
					//
					dataShowTime = oSystem.dataLabelList[8].showUpTime;
					if (value >= dataShowTime && value <= (dataShowTime + 0.2) && dataShowMark[8]) {
						dataShowMark[8] = false;
						if (document.getElementById(oSystem.dataLabelList[8].labelID)) {
							document.getElementById(oSystem.dataLabelList[8].labelID).style.display = 'block';
							setTimeout(function() {
								document.getElementById(oSystem.dataLabelList[8].labelID).style.display = 'none';
							}, 5000)
						}
					} else if (value > (dataShowTime + 0.2)) {
						dataShowMark[8] = true;
					}
					//
					dataShowTime = oSystem.dataLabelList[9].showUpTime;
					if (value >= dataShowTime && value <= (dataShowTime + 0.2) && dataShowMark[9]) {
						dataShowMark[9] = false;
						if (document.getElementById(oSystem.dataLabelList[9].labelID)) {
							document.getElementById(oSystem.dataLabelList[9].labelID).style.display = 'block';
							setTimeout(function() {
								document.getElementById(oSystem.dataLabelList[9].labelID).style.display = 'none';
							}, 5000)
						}
					} else if (value > (dataShowTime + 0.2)) {
						dataShowMark[9] = true;
					}
					//
					dataShowTime = oSystem.dataLabelList[10].showUpTime;
					if (value >= dataShowTime && value <= (dataShowTime + 0.2) && dataShowMark[10]) {
						dataShowMark[10] = false;
						if (document.getElementById(oSystem.dataLabelList[10].labelID)) {
							document.getElementById(oSystem.dataLabelList[10].labelID).style.display = 'block';
							setTimeout(function() {
								document.getElementById(oSystem.dataLabelList[10].labelID).style.display = 'none';
							}, 5000)
						}
					} else if (value > (dataShowTime + 0.2)) {
						dataShowMark[10] = true;
					}
					//
					dataShowTime = oSystem.dataLabelList[11].showUpTime;
					if (value >= dataShowTime && value <= (dataShowTime + 0.2) && dataShowMark[11]) {
						dataShowMark[11] = false;
						if (document.getElementById(oSystem.dataLabelList[11].labelID)) {
							document.getElementById(oSystem.dataLabelList[11].labelID).style.display = 'block';
							setTimeout(function() {
								document.getElementById(oSystem.dataLabelList[11].labelID).style.display = 'none';
							}, 5000)
						}
					} else if (value > (dataShowTime + 0.2)) {
						dataShowMark[11] = true;
					}

					// dataShowTime = oSystem.dataLabelList[12].showUpTime;
					// if (value >= dataShowTime &&value <= (dataShowTime+0.2)  && dataShowMark[12]) {
					// 	dataShowMark[12] = false;
					// if(document.getElementById('label-12')){
					// 	document.getElementById('label-12').style.display = 'block';
					// 	setTimeout(function() {
					// 		document.getElementById('label-12').style.display = 'none';
					// 	}, 5000)
					// }	
					// } else if (value > (dataShowTime+0.2)) {
					// 	dataShowMark[12] = true;
					// }

					// dataShowTime = oSystem.dataLabelList[13].showUpTime;
					// if (value >= dataShowTime &&value <= (dataShowTime+0.2)  && dataShowMark[13]) {
					// 	dataShowMark[13] = false;
					// if(document.getElementById('label-13')){
					// 	document.getElementById('label-13').style.display = 'block';
					// 	setTimeout(function() {
					// 		document.getElementById('label-13').style.display = 'none';
					// 	}, 5000)
					// }	
					// } else if (value > (dataShowTime+0.2)) {
					// 	dataShowMark[13] = true;
					// }

					dataShowTime = oSystem.dataLabelList[14].showUpTime;
					if (value >= dataShowTime && value <= (dataShowTime + 0.2) && dataShowMark[14]) {
						dataShowMark[14] = false;
						if (document.getElementById(oSystem.dataLabelList[14].labelID)) {
							document.getElementById(oSystem.dataLabelList[14].labelID).style.display = 'block';
							setTimeout(function() {
								document.getElementById(oSystem.dataLabelList[14].labelID).style.display = 'none';
							}, 5000)
						}
					} else if (value > (dataShowTime + 0.2)) {
						dataShowMark[14] = true;
					}
					//
					dataShowTime = oSystem.dataLabelList[15].showUpTime;
					if (value >= dataShowTime && value <= (dataShowTime + 0.2) && dataShowMark[15]) {
						dataShowMark[15] = false;
						if (document.getElementById(oSystem.dataLabelList[15].labelID)) {
							document.getElementById(oSystem.dataLabelList[15].labelID).style.display = 'block';
							setTimeout(function() {
								document.getElementById(oSystem.dataLabelList[15].labelID).style.display = 'none';
							}, 5000)
						}
					} else if (value > (dataShowTime + 0.2)) {
						dataShowMark[15] = true;
					}
					//
					// dataShowTime = oSystem.dataLabelList[16].showUpTime;
					// if (value >= dataShowTime && value <= (dataShowTime + 0.2) && dataShowMark[16]) {
					// 	dataShowMark[16] = false;
					// 	if (document.getElementById(oSystem.dataLabelList[16].labelID)) {
					// 		document.getElementById(oSystem.dataLabelList[16].labelID).style.display = 'block';
					// 		setTimeout(function() {
					// 			document.getElementById(oSystem.dataLabelList[16].labelID).style.display = 'none';
					// 		}, 5000)
					// 	}
					// } else if (value > (dataShowTime + 0.2)) {
					// 	dataShowMark[16] = true;
					// }
					// //
					// dataShowTime = oSystem.dataLabelList[17].showUpTime;
					// if (value >= dataShowTime && value <= (dataShowTime + 0.2) && dataShowMark[17]) {
					// 	dataShowMark[17] = false;
					// 	if (document.getElementById(oSystem.dataLabelList[17].labelID)) {
					// 		document.getElementById(oSystem.dataLabelList[17].labelID).style.display = 'block';
					// 		setTimeout(function() {
					// 			document.getElementById(oSystem.dataLabelList[17].labelID).style.display = 'none';
					// 		}, 5000)
					// 	}
					// } else if (value > (dataShowTime + 0.2)) {
					// 	dataShowMark[17] = true;
					// }
					//
					dataShowTime = oSystem.dataLabelList[18].showUpTime;
					if (value >= dataShowTime && value <= (dataShowTime + 0.2) && dataShowMark[18]) {
						dataShowMark[18] = false;
						if (document.getElementById(oSystem.dataLabelList[18].labelID)) {
							document.getElementById(oSystem.dataLabelList[18].labelID).style.display = 'block';
							setTimeout(function() {
								document.getElementById(oSystem.dataLabelList[18].labelID).style.display = 'none';
							}, 5000)
						}
					} else if (value > (dataShowTime + 0.2)) {
						dataShowMark[18] = true;
					}
					//
					dataShowTime = oSystem.dataLabelList[19].showUpTime;
					if (value >= dataShowTime && value <= (dataShowTime + 0.2) && dataShowMark[19]) {
						dataShowMark[19] = false;
						if (document.getElementById(oSystem.dataLabelList[19].labelID)) {
							document.getElementById(oSystem.dataLabelList[19].labelID).style.display = 'block';
							setTimeout(function() {
								document.getElementById(oSystem.dataLabelList[19].labelID).style.display = 'none';
							}, 5000)
						}
					} else if (value > (dataShowTime + 0.2)) {
						dataShowMark[19] = true;
					}
				}
			}
		}
		oDefault.viewer.clock.onTick.addEventListener(oDefault.clockTickEvent)
	},
	hideElementEvent: function(tile) {
		var hideList = ['03010009-沉淀池雨顶1#', '03010035-沉淀池雨顶2#', '05010023-反冲洗泵房顶棚2#', '05010019-反冲洗泵房顶棚1#',
			'05010018-反冲刺泵房钢支撑1#', '05010040-反冲刺泵房钢支撑2#', '03010011-沉淀池顶钢结构2#', '03010010-沉淀池顶钢结构1#', '03010008-沉淀池柱子2#',
			'03010046-沉淀池柱子1#'
		];
		var content = tile.content;
		var featuresLength = content.featuresLength;
		var url = tile.tileset.url;
		for (var i = 0; i < featuresLength; i += 1) {
			var feature = content.getFeature(i);
			var name = feature.getProperty('name');
			if (hideList.indexOf(name) >= 0) {
				feature.show = false;
			}
		}
	},
}
