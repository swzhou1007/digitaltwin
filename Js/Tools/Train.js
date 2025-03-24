oTrain = {
    isTrainning: false,
    currentQuestionIndex: 1,
    questionList: [],
    deviceDictionary: [{
            deviceName: ['05020076-反冲洗就地控制柜1', '05020077-反冲洗就地控制柜2', '05020078-反冲洗就地控制柜3', '05020083-反冲洗就地控制柜4', '05020079-反冲洗就地控制柜5', '05020080-反冲洗就地控制柜6', '05020081-反冲洗就地控制柜7', '05020082-反冲洗就地控制柜8'],
            divNum: 'div-1',
        },
        {
            deviceName: ['05020075-反冲洗阀门控制器'],
            divNum: 'div-2',
        },
        {
            deviceName: ['05020073-反冲风机软启动柜2'],
            divNum: 'div-3',
        },
        {
            deviceName: ['05020085-反冲洗软启动柜1'],
            divNum: 'div-4',
        },
        {
            deviceName: ['09020017-平衡池就地控制箱'],
            divNum: 'div-5',
        },
        {
            deviceName: ['09020016-一号污泥浓缩机就地控制箱'],
            divNum: 'div-6',
        },
        {
            deviceName: ['09020015-二号污泥浓缩机就地控制箱'],
            divNum: 'div-7',
        },
        {
            deviceName: ['03020097-搅拌器就地控制箱#1'],
            divNum: 'div-8',
        },
        {
            deviceName: ['03020095-刮吸泥机就地控制箱#1'],
            divNum: 'div-9',
        },
        {
            deviceName: ['03020098-搅拌器就地控制箱#2'],
            divNum: 'div-10',
        },
        {
            deviceName: ['03020096-刮吸泥机就地控制箱#2'],
            divNum: 'div-11',
        },
        {
            deviceName: ['03020099-1号絮凝沉淀池排泥阀控制箱'],
            divNum: 'div-12',
        },
        {
            deviceName: ['03020100-2号絮凝沉淀池排泥阀控制箱'],
            divNum: 'div-13',
        },
        {
            deviceName: ['03020016-排泥阀控制箱'],
            divNum: 'div-14',
        },
        {
            deviceName: ['04020129-抽药泵就地控制箱'],
            divNum: 'div-15',
        },
        {
            deviceName: ['04020098-碱池设备就地控制箱'],
            divNum: 'div-16',
        },
        {
            deviceName: ['07020092-一号送水变频柜'],
            divNum: 'div-17',
        },
        {
            deviceName: ['07020056-二号送水变频柜'],
            divNum: 'div-18',
        },
        {
            deviceName: ['07020073-三号送水变频柜'],
            divNum: 'div-19',
        },
        {
            deviceName: ['07020075-四号送水变频柜'],
            divNum: 'div-20',
        }, {
            deviceName: ['05020066-1号滤水池空压机（含罐和管道）'],
            divNum: 'div-21',
        },
        {
            deviceName: ['05020009-2号滤水池空压机（含罐和管道）'],
            divNum: 'div-22',
        },

        {
            deviceName: ['05020008-1号滤池干燥机'],
            divNum: 'div-23',
        },
        {
            deviceName: ['05020065-2号滤池干燥机'],
            divNum: 'div-24',
        },
        {
            deviceName: ['13020054-管线阀门#2'],
            divNum: 'div-25',
        },
        {
            deviceName: ['13020053-管线阀门#1'],
            divNum: 'div-26',
        },
        {
            deviceName: ['04020125-溶液池1#手动闸阀'],
            divNum: 'div-27',
        },
        {
            deviceName: ['04020012-溶液池2#手动闸阀'],
            divNum: 'div-28',
        },
        {
            deviceName: ['04020189-管线阀门#6', '04020188-管线阀门#5', '04020187-管线阀门#4', '04020186-管线阀门#3'],
            divNum: 'div-29',
        },
        {
            deviceName: ['05020166-厂区自来水管阀门#1'],
            divNum: 'div-30',
        },
        {
            deviceName: ['05020167-厂区自来水管阀门#2'],
            divNum: 'div-47',
        },
        {
            deviceName: ['04020184-管线阀门#1'],
            divNum: 'div-31',
        },
        {
            deviceName: ['04020185-管线阀门#2'],
            divNum: 'div-32',
        },
        {
            deviceName: ['05020159-水冲泵控制柜'],
            divNum: 'div-33',
        },
        {
            deviceName: ['07020131-1号阀门控制箱'],
            divNum: 'div-34',
        },
        {
            deviceName: ['07020086-五号送水泵房就地控制柜'],
            divNum: 'div-35',
        },
        {
            deviceName: ['05020161-阀门#2'],
            divNum: 'div-36',
        },
        {
            deviceName: ['05020160-阀门#1'],
            divNum: 'div-37',
        },

        {
            deviceName: ['05020164-水阀#2'],
            divNum: 'div-38',
        },


        {
            deviceName: ['05020162-阀门#3'],
            divNum: 'div-39',
        },
        {
            deviceName: ['05020163-阀门#4'],
            divNum: 'div-40',
        },
        {
            deviceName: ['05020165-水阀#1'],
            divNum: 'div-41',
        },


        {
            deviceName: ['13020056-管线阀门#1'],
            divNum: 'div-42',
        },
        {
            deviceName: ['13020057-管线阀门#2'],
            divNum: 'div-43',
        },
        {
            deviceName: ['13020058-管线阀门#3'],
            divNum: 'div-44',
        },
        {
            deviceName: ['13020059-管线阀门#4'],
            divNum: 'div-45',
        },
        {
            deviceName: ['13020060-管线阀门#5'],
            divNum: 'div-46',
        },
    ],
    operateStep: [],
    currentState: [],
    showStepTip: function(stepIndex) {
        var questionStep = JSON.parse(oTrain.questionList[oTrain.currentQuestionIndex - 1].questionStep);
        questionStep.map(function(item, index) {
            if (index + 1 == stepIndex) {
                if (item.nextStepTip) {
                    Global.dialogAlert({
                        msg: item.nextStepTipContent,
                        type: 0
                    });
                }
            }
        })
    },
    createoTrainEvents: function() {

        var viewer = oDefault.viewer;
        //注册point事件
        var oTrainEventHandler = new Cesium.ScreenSpaceEventHandler(viewer.scene.canvas);
        oTrainEventHandler.setInputAction(function(movement) {
            var pickedFeature = viewer.scene.pick(movement.endPosition);
            if ((pickedFeature instanceof Cesium.Cesium3DTileFeature) && pickedFeature.getProperty('name')) {

            }
        }, Cesium.ScreenSpaceEventType.MOUSE_MOVE);

        oTrainEventHandler.setInputAction(function(movement) {
            var pickedFeature = viewer.scene.pick(movement.position);
            if ((pickedFeature instanceof Cesium.Cesium3DTileFeature) && pickedFeature.getProperty('name')) {
                console.log(pickedFeature);
                console.log(pickedFeature.getProperty('name'));
                var name = pickedFeature.getProperty('name');
                if (!(oTrain.isTrainning || oTest.isTesting)) {
                    return;
                }
                oTrain.deviceDictionary.map(function(device) {
                    if (device.deviceName.indexOf(name) >= 0) {
                        var ticket = Global.getTicket();
                        var target = window.event.target;
                        var strUrl = "./Train/TrainDialog.html?divNum=" + device.divNum + '&name=' + name + '&ticket=' + ticket;
                        Global.dialogOpen({
                            id: 'oTrain',
                            title: name,
                            size: "sm",
                            btn: null,
                            maxmin: false,
                            url: strUrl,
                            callBack: function() {}
                        });
                    }
                })
            }
        }, Cesium.ScreenSpaceEventType.LEFT_CLICK);
    },
    closeTrain: function() {
        // $('#trainList').hide();
        $('.train-container').hide();
    },
    showTrain: function() {
        $('.train-container').show();
    },
    onBindAllBtnClick: function() {
        $('#i-n-peixun').click(function() {
            if (oTest.isTesting) {
                return
            }
            if (oTrain.isTrainning) {
                oTrain.isTrainning = false;
                document.getElementById('trainContainer').style.display = 'none';
                oTrain.resetTrainStep();

            } else {
                oTrain.isTrainning = true;
                document.getElementById('trainContainer').style.display = 'block';
                document.getElementById('trainList').style.display = 'block';
                oTrain.getQuestions();

                var a = function(tile) {
                    var content = tile.content;
                    var featuresLength = content.featuresLength;
                    for (var i = 0; i < featuresLength; i += 1) {
                        var feature = content.getFeature(i);
                        var num = feature.getProperty('name');
                        if (num == '04010005-加药加氯间井盖' || num == '15010045-棚') {
                            feature.show = false;
                        }
                    }
                };

                oDefault.tilesetList.map(function(item) {
                    if (item.tileset) {
                        item.tileset.tileVisible.addEventListener(a);
                    }
                    if (item.tilesetList) {
                        item.tilesetList.map(function(tile) {
                            tile.tileset.tileVisible.addEventListener(a);
                        })
                    }
                })


            }
            // var display = document.getElementById('trainContainer').style.display;
            // if (display == 'none') {
            //     document.getElementById('trainContainer').style.display = 'block';
            //     oTrain.isTrainning = true;
            // } else {
            //     document.getElementById('trainContainer').style.display = 'none';
            //     oTrain.resetTrainStep();
            //     oTrain.isTrainning = false;
            // }
        });
        $('#questionList').click(function() {
            var display = document.getElementById('allQuestionList').style.display;
            if (display == 'none') {
                document.getElementById('allQuestionList').style.display = 'block';
            } else {
                document.getElementById('allQuestionList').style.display = 'none';
            }
        });
        $('#questionMarker').click(function() {
            var display = document.getElementById('questionMarkerList').style.display;
            if (display == 'none') {
                document.getElementById('questionMarkerList').style.display = 'block';
            } else {
                document.getElementById('questionMarkerList').style.display = 'none';
            }

        });
        $('#closeQuestionList').click(function() {
            var display = document.getElementById('allQuestionList').style.display;
            if (display == 'none') {
                document.getElementById('allQuestionList').style.display = 'block';
            } else {
                document.getElementById('allQuestionList').style.display = 'none';
            }
        });
    },
    resetTrainStep: function() {
        oTrain.currentState = [];
        oTrain.operateStep = [];
        var stepList = document.getElementById('questionStepList');
        stepList.innerHTML = '';
    },
    submitTrainStep: function() {
        console.log(oTrain.operateStep)
        if (oTrain.operateStep.length == 0) {
            Global.dialogMsg({
                msg: '请先操作',
                type: 0
            });
            return;
        }
        var condition = '';
        if (oTrain.isTrainning) {
            condition = 'train';
        }
        if (oTest.isTesting) {
            condition = 'test';
        }
        var currentPoint = oTrain.operateStep;
        // 处理所有步骤数据
        var oPostData = [];

        var examinationQuestionsGuid = Global.createGUID();
        var questionStep = JSON.parse(oTrain.questionList[oTrain.currentQuestionIndex - 1].questionStep);
        // var stepData = JSON.parse(oQuestion.allQuestionData[questionOrder].stepdata);
        for (var j = 0; j < currentPoint.length; j++) {
            var stepguid = ''
            if (j < questionStep.length) {
                stepguid = questionStep[j].stepguid;
            }
            // console.log('步骤', stepData[j])
            var oStepData = {
                examinationquestionsguid: examinationQuestionsGuid,
                assessmentguid: null,
                questionguid: oTrain.questionList[oTrain.currentQuestionIndex - 1].questionguid, //
                questiontype: oTrain.questionList[oTrain.currentQuestionIndex - 1].questiontype, //
                subsystemguid: oTrain.questionList[oTrain.currentQuestionIndex - 1].subsystemguid, //
                stepno: j + 1,
                stepguid: stepguid, //
                assemblyguid: currentPoint[j].assemblyguid, //
                opcid: currentPoint[j].opcid,
                condition: [],
                stepactiontype: '1',
                answertype: condition,
                actiononoff: currentPoint[j].opcvalue, //
                stepnumber: currentPoint[j].opcvalue, //

            };
            oPostData.push(oStepData);
        }
        console.log('本题提交数据：', oPostData);

        Global.openWaiting('正在提交');
        Global.ajaxPost("api/assessment/saveQuestionAnswer",oPostData, function(oJson) {
            if (!oJson.Result) {
                Global.closeWaiting();
                Global.dialogAlert({
                    msg: oJson.ErrorMessage,
                    type: 0
                });
                return;
            }

            if (condition == 'train') {
                var oData = JSON.parse(oJson.KeyValue).rows;
                $('#questionStepList>li').addClass('error-item');
                for (var i = 0; i < oData.length; i++) {
                    if (oData[i].ifcorrect == '1') {
                        $('#questionStepList>li').eq(i).removeClass('error-item').addClass('success-item');
                    }
                }
            } else if (condition == 'test') {
                oTrain.resetTrainStep();
                var questionguid = oTrain.questionList[oTrain.currentQuestionIndex - 1].questionguid;
                if (oTest.submittedQusetions.indexOf(questionguid) >= 0) {
                    Global.dialogAlert({
                        msg: '本题已经提交！',
                        type: 0
                    });
                    return;
                } else {
                    oTest.submittedQusetions.push(questionguid);
                }
                $('#questionListContent').children().each(function() {
                    console.log($(this).attr('data-guid'));
                    console.log(questionguid)
                    if ($(this).attr('data-guid') == questionguid) {
                        $(this).css('background-color', 'rgba(231, 116, 49,0.5)');
                    }
                })
                if (oTest.submittedQusetions.length == oTrain.questionList.length) {
                    oTest.testOver();
                } else {
                    oTrain.setQusetionSteps(oTest.submittedQusetions.length + 1);
                }
            }

            Global.dialogMsg({
                msg: '提交成功！',
                type: 1
            });
            Global.closeWaiting();
        });
    },

    getQuestions: function(type) {
        var oGetData = {
            type: "2"
        };
        if (type == 'test') {
            return;
        };
        Global.ajaxGet("api/questions/getSystemGrid", oGetData, function(oJson) {
            if (!oJson.Result) {
                Global.closeWaiting();
                Global.dialogAlert({
                    msg: oJson.ErrorMessage,
                    type: 0
                });
                return;
            }
            oTrain.questionList = JSON.parse(oJson.KeyValue);
            var questionList = document.getElementById('questionListContent');
            questionList.innerHTML = '';
            oTrain.questionList.map(function(question) {
                $('#questionListContent').append('<li class="active" data-index="' + question.questionIndex + '" title="' + question.questionText + '" data-guid="' + question.questionguid + '"><span class="question-item" onclick="oTrain.setQusetionSteps(' + question.questionIndex + ')"><b>题目' + question.questionIndex + '：</b>' + question.questionText + '</span></li> ');
            })
            oTrain.setQusetionSteps(1);
        });
    },
    setQusetionSteps: function(index) {
        $('#allQuestionList').hide();
        $('#questiontext').text(oTrain.questionList[parseInt(index) - 1].questionIndex + ',' + oTrain.questionList[parseInt(index) - 1].questionText);
        oTrain.currentQuestionIndex = index;
        console.log(oTrain.currentQuestionIndex);
        oTrain.resetTrainStep();
        $('#trainStepBody').html('');
        var questionStep = JSON.parse(oTrain.questionList[parseInt(index) - 1].questionStep);
        questionStep.map(function(step) {
            $('#trainStepBody').append(' <div class="train-list-item" style="min-height: 30px;"><span>' + step.stepContent + '</span></div>');
        });
        $('#questionSightListContainer').html('');
        var sightHtml = '';
        var questionMarkers = JSON.parse(oTrain.questionList[parseInt(index) - 1].questionMarkers);
        questionMarkers.map(function(sight) {
            oLocation.map(function(location) {
                if (location.guid == sight) {
                    sightHtml = '<div id="' + location.name +
                        '" class="sight-list-item" onclick="oTrain.findEquipment(\'' + sight + '\')"><img class="item-img" src="' + location.imgUrl +
                        '" /><div class="item-text">' + location.name +
                        '</div></div>';
                    $('#questionSightListContainer').append(sightHtml);
                }
            });
        });
    },
    findEquipment: function(data) {
        console.log(data)
        oLocation.map(function(sight) {
            if (sight.guid == data) {
                var initialPosition = Cesium.Cartesian3.fromDegrees(sight.cameraPosition[0], sight.cameraPosition[1], sight.cameraPosition[
                    2]);
                var initialOrientation = new Cesium.HeadingPitchRoll.fromDegrees(sight.cameraOrientation[0], sight.cameraOrientation[
                    1], sight.cameraOrientation[2]);
                oDefault.viewer.scene.camera.flyTo({
                    destination: initialPosition,
                    orientation: initialOrientation,
                    endTransform: Cesium.Matrix4.IDENTITY
                });
            }
        })
    }
}
$(function($) {
    oTrain.createoTrainEvents();
    oTrain.onBindAllBtnClick();
})