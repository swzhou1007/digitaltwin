oTest = {

    testEndTimeId: {},
    currentTestGuid: '',
    submittedQusetions: [],
    isTesting: false,
    writeCurrentDate: function () {
        var now = new Date();
        var year = now.getFullYear(); //得到年份
        var month = now.getMonth(); //得到月份
        var date = now.getDate(); //得到日期
        var day = now.getDay(); //得到周几
        var hour = now.getHours(); //得到小时
        var minu = now.getMinutes(); //得到分钟
        var sec = now.getSeconds(); //得到秒
        var MS = now.getMilliseconds(); //获取毫秒
        var week;
        month = month + 1;
        if (month < 10) month = "0" + month;
        if (date < 10) date = "0" + date;
        if (hour < 10) hour = "0" + hour;
        if (minu < 10) minu = "0" + minu;
        if (sec < 10) sec = "0" + sec;
        if (MS < 100) MS = "0" + MS;
        var arr_week = new Array("星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六");
        week = arr_week[day];
        var time = "";
        time = year + "" + month + "" + date + "" + "" + hour + "" + minu + "" + sec;
        // time = year + "年" + month + "月" + date + "日" + " " + hour + ":" + minu + ":" + sec;
        return time;
    },
    startTest: function () {
        Global.openWaiting('准备考试中...');
        //  
        var oPostData = {
            questioncount: "20",
            assessmenttitle: '系统管理员-' + oTest.writeCurrentDate() + '',
            inspectiontime: "30",
            assessmentType: "2"
        };
        Global.ajaxPost("api/assessment/startAssessment",oPostData, function (oJson) {
            if (!oJson.Result) {
                Global.closeWaiting();
                Global.dialogAlert({
                    msg: oJson.ErrorMessage,
                    type: 0
                });
                return;
            }
            Global.closeWaiting();
            //
            Global.dialogAlert({
                msg: "现在开始考核！考核时间30分钟！",
                type: 0
            });
            oTest.testEndTimeId = setTimeout(function () {
                oTest.testOver();
            }, 30 * 60 * 1000);
            //

            var assessmentData = JSON.parse(oJson.KeyValue);
            oTrain.questionList = assessmentData.questiondata;
            var questionList = document.getElementById('questionListContent');
            questionList.innerHTML = '';
            oTrain.questionList.map(function (question) {
                $('#questionListContent').append('<li class="active" data-index="' + question.questionIndex + '" title="' + question.questionText + '" data-guid="' + question.questionguid + '"><span class="question-item" onclick="oTrain.setQusetionSteps(' + question.questionIndex + ')"><b>题目' + question.questionIndex + '：</b>' + question.questionText + '</span></li> ');
            })
            oTrain.setQusetionSteps(1);
            oTest.currentTestGuid = assessmentData.assessmentguid;

        });
    },
    clearTest: function () {
        oTrain.resetTrainStep();
        oTest.submittedQusetions = [];
        $('#questionListContent').children().each(function () {
            if ($(this).attr('data-guid') == oTrain.questionList[oTrain.currentQuestionIndex - 1].questionguid) {
                $(this).css('background-color', 'white');
            }
        });
        clearTimeout(oTest.testEndTimeId);
    },
    testOver: function () {
        oTest.clearTest();
        Global.dialogAlert({
            msg: '考核结束！',
            type: 0
        });
        // 
        var oPostData = {
            assessmentGuid: oTest.currentTestGuid
        };
        Global.ajaxPost("api/assessment/submitAssess",oPostData, function (oJson) {
            if (!oJson.Result) {
                Global.closeWaiting();
                Global.dialogAlert({
                    msg: oJson.ErrorMessage,
                    type: 0
                });
                return;
            }
            oTest.isTesting = false;
            document.getElementById('trainContainer').style.display = 'none';
        });
    },
}
$(function ($) {
    $('#i-n-kaohe').click(function () {
        if (oTrain.isTrainning) {
            return
        }
        if (oTest.isTesting) {
            oTest.isTesting = false;
            document.getElementById('trainContainer').style.display = 'none';
            oTest.testOver();
        } else {
            oTest.isTesting = true;
            document.getElementById('trainContainer').style.display = 'block';
            document.getElementById('trainList').style.display = 'none';
            oTest.startTest();

        }
    })
})