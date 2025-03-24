var oTrainDialog = {
    initData: {},
    onBindAllBtnClick: function() {
        // $('.train-page-btn').click(function() {
        //     var stepList = Global.currentIframe().document.getElementById('questionStepList');
        //     var target = window.event.target;
        //     oTrainDialog.initData.map(function(point) {
        //         if (point.opcid == target.id) {
        //             $(stepList).append(' <li title="' + point.opcname + '"><span class="item">' + (stepList.children.length + 1) + ' , ' + point.opcname + '</span></li>');
        //             var clickPoint = JSON.parse(JSON.stringify(point));
        //             clickPoint.opcvalue = '1';
        //             Global.currentIframe().oTrain.operateStep.push(clickPoint);
        //         }
        //     });
        //     console.log(Global.currentIframe().oTrain.operateStep);
        // });
    },

    showDevicePic: function() {
        var url = document.location.toString(); //获取url地址
        var urlParmStr = url.slice(url.indexOf('?') + 1); //获取问号后所有的字符串
        var arr = urlParmStr.split('&'); //通过&符号将字符串分割转成数组
        var divId = arr[0].split("=")[1]; //获取数组中第一个参数
        $('#' + divId).show();
    },
    getInitData: function() {
        Global.openWaiting();
        var guid = '';
        if (Global.currentIframe().oTest.isTesting) {
            guid = Global.currentIframe().oTrain.currentTestGuid;
        }
        var oGetData = {
            assessmentGUID: guid
        };
        Global.ajaxGet("api/questions/getInitData", oGetData, function(oJson) {
            if (!oJson.Result) {
                // Global.closeWaiting();
                Global.dialogAlert({
                    msg: oJson.ErrorMessage,
                    type: 0
                });
                return;
            }
            Global.closeWaiting();
            var oData = JSON.parse(oJson.KeyValue);
            oTrainDialog.initData = oData.rows;
            console.log(oTrainDialog.initData);
            oTrainDialog.setInitState(oTrainDialog.initData);
        });
    },
    setInitState: function(data) {
        data.map(function(point) {
            if (point.opcvalue == '1') {
                $('#' + point.opcid).addClass(point.opcid + '-btn-on');
            }
            if (point.opcvalue == '0') {
                $('#' + point.opcid).addClass(point.opcid + '-btn-off');
            }
        });

        Global.currentIframe().oTrain.currentState.map(function(point) {
            if (point.opcvalue == '1') {
                $('#' + point.opcid).addClass(point.opcid + '-btn-on');
                $('#' + point.opcid).removeClass(point.opcid + '-btn-off');
            }
            if (point.opcvalue == '0') {
                $('#' + point.opcid).addClass(point.opcid + '-btn-off');
                $('#' + point.opcid).removeClass(point.opcid + '-btn-on');
            }
        })
    }
}
$(function($) {
    oTrainDialog.onBindAllBtnClick();
    oTrainDialog.showDevicePic();
    oTrainDialog.getInitData();
})