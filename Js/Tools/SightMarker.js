oSightMarker = {
    model: "0", //1 远程存储  0本地
    sightArr: [],
    closeList: function() {
        $('#i-n-shuqian').removeClass('active')
        $('#i-n-shuqian').removeClass('shuqian-active')
        $('#markerList').css('display', 'none');
    },
    addSight: function() {
        //计算摄像头位置和角度
        var viewer = oDefault.viewer;
        var heading1 = Cesium.Math.toDegrees(viewer.camera.heading);
        var pitch1 = Cesium.Math.toDegrees(viewer.camera.pitch);
        var roll1 = Cesium.Math.toDegrees(viewer.camera.roll);
        console.log(viewer.scene.camera)
        var position = viewer.scene.camera.positionCartographic;
        var lat1 = Cesium.Math.toDegrees(position.latitude);
        var lon1 = Cesium.Math.toDegrees(position.longitude);
        var height1 = position.height;

        var sightHtml = '';
        var addSightName = $('#sightInput').val().trim()
        var exsited = false;
        oSightMarker.sightArr.forEach(function(item) {
            if (item.name == addSightName) {
                exsited = true;
            }
        })
        if (addSightName == '') {
            Global.dialogAlert({
                msg: '请输入名字！',
                type: 0
            });
            return
        }
        if (exsited) {
            Global.dialogAlert({
                msg: '命名重复，请重新输入！',
                type: 0
            });
            return
        }
        viewer.render();
        var canvas = viewer.scene.canvas;
        var url = canvas.toDataURL('image/png');
        var img = new Image();
        img.src = url;
        var newurl;
        img.onload = function() {
            var doccanvas = document.getElementById('canv');
            var context = doccanvas.getContext('2d');
            doccanvas.width = 200;
            doccanvas.height = 150;
            context.drawImage(img, 0, 0, 200, 150);
            newurl = doccanvas.toDataURL('image/png');

            console.log(newurl);

            if (!window.localStorage) {
                alert("浏览器支持localstorage");
                return false;
            } else {
                var storage = window.localStorage;



                storage.setItem(addSightName, JSON.stringify({
                    type: 'sightmarker',
                    url: newurl,
                    // cameraPosition: JSON.stringify([lon1, lat1, height1]),
                    // cameraOrientation: JSON.stringify([heading1, pitch1, roll1]),
                    cameraPosition: lon1 + '/' + lat1 + '/' + height1,
                    cameraOrientation: heading1 + '/' + pitch1 + '/' + roll1,
                }));
            }

            console.log(lon1 + '/' + lat1 + '/' + height1)
            console.log(heading1 + '/' + pitch1 + '/' + roll1)

            console.log([lon1, lat1, height1])
            console.log([heading1, pitch1, roll1])
            if (oSightMarker.model == '0') {
                var sightHtml = ''
                sightHtml = '<div id="' + addSightName +
                    '" class="sight-list-item" onclick="oSightMarker.backToSight()"><img class="item-img" src="' + newurl +
                    '" /><div class="item-text">' + addSightName +
                    '</div><div class="sight-delete-btn" onclick="oSightMarker.deleteSight()"><i class="fa fa-trash-o" style="color: #fff;font-size: 12px;"></i></div></div>';
                $('#sightListContainer').append(sightHtml);
                oSightMarker.sightArr.push({
                    base: newurl,
                    name: addSightName,
                    cameraPosition: [lon1, lat1, height1],
                    cameraOrientation: [heading1, pitch1, roll1],
                })
            }
            if (oSightMarker.model == '1') {
                var oPostData = {
                    base: newurl,
                    name: addSightName,
                    cameraposition: JSON.stringify([lon1, lat1, height1]),
                    cameraorientation: JSON.stringify([heading1, pitch1, roll1]),
                }
                console.log(oPostData)
                Global.openWaiting('正在保存视角书签...')
                Global.ajaxPost("api/equipmentmanage/equipmentaccount/visualAngle",oPostData, function(oJson) {
                    if (!oJson.Result) {
                        Global.closeWaiting();
                        Global.dialogAlert({
                            msg: oJson.ErrorMessage,
                            type: 0
                        });
                        return;
                    }
                    Global.closeWaiting();
                    oSightMarker.refreshList();
                });
            }
        }
    },

    refreshList: function() {
        var oGetData = {};
        Global.openWaiting('正在更新书签列表...')
        Global.ajaxGet("api/equipmentmanage/equipmentaccount/getVisualAngle", {
            raw: JSON.stringify(oGetData)
        }, function(oJson) {
            if (!oJson.Result) {
                Global.closeWaiting();
                Global.dialogAlert({
                    msg: oJson.ErrorMessage,
                    type: 0
                });
                return;
            }
            Global.closeWaiting();
            var oData = JSON.parse(oJson.KeyValue);
            console.log(oData)
            $('#sightListContainer').html('');
            var sightHtml = ''
            oSightMarker.sightArr = [];
            oData.rows.map(function(item) {
                item.cameraorientation = JSON.parse(item.cameraorientation);
                item.cameraposition = JSON.parse(item.cameraposition);
                oSightMarker.sightArr.push(item)
            })
            oSightMarker.sightArr.map(function(item) {
                sightHtml = '<div id="' + item.name +
                    '" class="sight-list-item" onclick="oSightMarker.backToSight()"><img class="item-img" src="' + item.webimgurl +
                    '" /><div class="item-text">' + item.name +
                    '</div><div class="sight-delete-btn" onclick="oSightMarker.deleteSight()"><i class="fa fa-trash-o" style="color: #fff;font-size: 12px;"></i></div></div>';
                $('#sightListContainer').append(sightHtml);
            })
        });
    },
    backToSight: function() {
        console.log(window.event.target)
        var name = window.event.target.id
        console.log(oSightMarker.sightArr)
        oSightMarker.sightArr.forEach(function(item) {
            if (name == item.name) {
                $("#" + item.name).css('border-color', '#1071e2')
                var initialPosition = Cesium.Cartesian3.fromDegrees(item.cameraPosition[0], item.cameraPosition[1], item.cameraPosition[
                    2]);
                var initialOrientation = new Cesium.HeadingPitchRoll.fromDegrees(item.cameraOrientation[0], item.cameraOrientation[
                    1], item.cameraOrientation[2]);
                oDefault.viewer.scene.camera.flyTo({
                    destination: initialPosition,
                    orientation: initialOrientation,
                    endTransform: Cesium.Matrix4.IDENTITY
                });
            } else {
                $("#" + item.name).css('border-color', '#999999')
            }
        })
    },
    backToSight1: function() {
        console.log(window.event.target)
        var name = window.event.target.id
        console.log(oSightMarker.sightArr)
        oSightMarker.sightArr.forEach(function(item) {
            if (name == item.name) {
                $("#" + item.name).css('border-color', '#1071e2')
                console.log(item)
                var cameraPosition = item.cameraPosition.split('/');
                var cameraOrientation = item.cameraOrientation.split('/');
                var initialPosition = Cesium.Cartesian3.fromDegrees(cameraPosition[0], cameraPosition[1], cameraPosition[
                    2]);
                var initialOrientation = new Cesium.HeadingPitchRoll.fromDegrees(cameraOrientation[0], cameraOrientation[
                    1], cameraOrientation[2]);
                oDefault.viewer.scene.camera.flyTo({
                    destination: initialPosition,
                    orientation: initialOrientation,
                    endTransform: Cesium.Matrix4.IDENTITY
                });
            } else {
                $("#" + item.name).css('border-color', '#999999')
            }
        })
    },
    deleteSight: function() {
        if (oSightMarker.model == '1') {
            var target = window.event.target;
            var id = target.parentNode.parentNode.id;
            console.log(id)
            var oGetData = {
                name: id
            };
            Global.openWaiting('正在删除书签...')
            Global.ajaxGet("api/equipmentmanage/equipmentaccount/deleteVisualAngle", oGetData, function(oJson) {
                if (!oJson.Result) {
                    Global.closeWaiting();
                    Global.dialogAlert({
                        msg: oJson.ErrorMessage,
                        type: 0
                    });
                    return;
                }
                Global.closeWaiting();
                oSightMarker.refreshList();
            });
        }
        if (oSightMarker.model == '0') {
            var deleteTarget = window.event.target.parentNode.parentNode;
            console.log(deleteTarget);
            var name = deleteTarget.id
            deleteTarget.remove();
            var newList = [];
            oSightMarker.sightArr.map(function(item) {
                if (item.name != name) {
                    newList.push(item)
                }
            })
            oSightMarker.sightArr = newList;

            if (!window.localStorage) {
                alert("浏览器支持localstorage");
                return false;
            } else {
                var storage = window.localStorage;
                storage.removeItem(name);

            }

        }
    }
}

$(function($) {


    $('#i-n-shuqian').click(function() {
        var isshow = document.getElementById('markerList').style.display;
        if (isshow == 'block') {
            document.getElementById('markerList').style.display = 'none';
        } else {
            document.getElementById('markerList').style.display = 'block';
        }
    })

    oSightMarker.model = oConfigData.sightMarkerModel;
    if (oSightMarker.model == '1') {
        var oGetData = {};
        Global.ajaxGet("api/equipmentmanage/equipmentaccount/getVisualAngle", {
            raw: JSON.stringify(oGetData)
        }, function(oJson) {
            if (!oJson.Result) {
                Global.closeWaiting();
                Global.dialogAlert({
                    msg: oJson.ErrorMessage,
                    type: 0
                });
                return;
            }
            var oData = JSON.parse(oJson.KeyValue);
            console.log(oData)
            $('#sightListContainer').html('');
            var sightHtml = ''
            oSightMarker.sightArr = [];
            oData.rows.map(function(item) {
                item.cameraorientation = JSON.parse(item.cameraorientation);
                item.cameraposition = JSON.parse(item.cameraposition);
                oSightMarker.sightArr.push(item)
            })
            oSightMarker.sightArr.map(function(item) {
                sightHtml = '<div id="' + item.name +
                    '" class="sight-list-item" onclick="oSightMarker.backToSight()"><img class="item-img" src="' + item.webimgurl +
                    '" /><div class="item-text">' + item.name +
                    '</div><div class="sight-delete-btn" onclick="oSightMarker.deleteSight()"><i class="fa fa-trash-o" style="color: #fff;font-size: 12px;"></i></div></div>';
                $('#sightListContainer').append(sightHtml);
            })
        });
    } else {

        if (!window.localStorage) {
            alert("浏览器支持localstorage");
            return false;
        } else {
            var storage = window.localStorage;
            var sightHtml = '';
            console.log(storage);
            oSightMarker.sightArr = [];
            for (var name in storage) {
                if (typeof(storage[name]) == 'string') {
                    var obj = JSON.parse(storage[name])
                    if (obj.type && obj.type == 'sightmarker') {
                        sightHtml = '<div id="' + name +
                            '" class="sight-list-item" onclick="oSightMarker.backToSight1()"><img class="item-img" src="' + obj.url +
                            '" /><div class="item-text">' + name +
                            '</div><div class="sight-delete-btn" onclick="oSightMarker.deleteSight()"><i class="fa fa-trash-o" style="color: #fff;font-size: 12px;"></i></div></div>';
                        $('#sightListContainer').append(sightHtml);
                    }
                    oSightMarker.sightArr.push({
                        name: name,
                        cameraPosition: obj.cameraPosition,
                        cameraOrientation: obj.cameraOrientation,
                    })
                }
            }
            console.log(oSightMarker.sightArr)
        }
    }
})