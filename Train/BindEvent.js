$(function($) {

    $('#lvchiyuanchengjiudi').click(function() {
        var stepList = Global.currentIframe().document.getElementById('questionStepList');
        var classname = document.getElementById('lvchiyuanchengjiudi').className;
        if (classname.indexOf('lvchiyuanchengjiudi-btn-off') >= 0) {
            $('#lvchiyuanchengjiudi').addClass('lvchiyuanchengjiudi-btn-on');
            $('#lvchiyuanchengjiudi').removeClass('lvchiyuanchengjiudi-btn-off');
            $(stepList).append(' <li title="滤池设置为远程"><span class="item">' + (stepList.children.length + 1) + ' ,滤池设置为远程</span></li>');
            Global.currentIframe().oTrain.operateStep.push({
                "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
                "numbertype": "0",
                "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
                "opcid": "lvchiyuanchengjiudi",
                "opcname": "滤池就地/远程",
                "opcvalue": "1",
                "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
            });
            Global.currentIframe().oTrain.currentState.push({
                "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
                "numbertype": "0",
                "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
                "opcid": "lvchiyuanchengjiudi",
                "opcname": "滤池就地/远程",
                "opcvalue": "1",
                "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
            });
        } else {
            $('#lvchiyuanchengjiudi').addClass('lvchiyuanchengjiudi-btn-off');
            $('#lvchiyuanchengjiudi').removeClass('lvchiyuanchengjiudi-btn-on');
            $(stepList).append(' <li title="滤池设置为就地"><span class="item">' + (stepList.children.length + 1) + ' ,滤池设置为就地</span></li>');
            Global.currentIframe().oTrain.operateStep.push({
                "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
                "numbertype": "0",
                "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
                "opcid": "lvchiyuanchengjiudi",
                "opcname": "滤池就地/远程",
                "opcvalue": "0",
                "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
            });
            Global.currentIframe().oTrain.currentState.push({
                "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
                "numbertype": "0",
                "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
                "opcid": "lvchiyuanchengjiudi",
                "opcname": "滤池就地/远程",
                "opcvalue": "0",
                "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
            });
        }
        console.log(Global.currentIframe().oTrain.operateStep);
        Global.currentIframe().oTrain.showStepTip(stepList.children.length);
    });

    //div-1
    $('#lvchiyuancheng').click(function() {
        $('#lvchiyuancheng').removeClass('lvchiyuancheng-btn-off');
        $('#lvchiyuancheng').addClass('lvchiyuancheng-btn-on');
        $('#lvchijiudi').removeClass('lvchijiudi-btn-on');
        $('#lvchijiudi').addClass('lvchijiudi-btn-off');
        //
        var stepList = Global.currentIframe().document.getElementById('questionStepList');
        $(stepList).append(' <li title="滤池设置为远程"><span class="item">' + (stepList.children.length + 1) + ' ,滤池设置为远程</span></li>');
        Global.currentIframe().oTrain.operateStep.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "lvchiyuancheng",
            "opcname": "滤池远程",
            "opcvalue": "1",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        Global.currentIframe().oTrain.currentState.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "lvchiyuancheng",
            "opcname": "滤池远程",
            "opcvalue": "1",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        Global.currentIframe().oTrain.currentState.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "lvchijiudi",
            "opcname": "滤池就地",
            "opcvalue": "0",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        console.log(Global.currentIframe().oTrain.operateStep);
        Global.currentIframe().oTrain.showStepTip(stepList.children.length);
    });
    $('#lvchijiudi').click(function() {
        $('#lvchijiudi').removeClass('lvchijiudi-btn-off');
        $('#lvchijiudi').addClass('lvchijiudi-btn-on');
        $('#lvchiyuancheng').removeClass('lvchiyuancheng-btn-on');
        $('#lvchiyuancheng').addClass('lvchiyuancheng-btn-off');
        //
        var stepList = Global.currentIframe().document.getElementById('questionStepList');
        $(stepList).append(' <li title="滤池设置为就地"><span class="item">' + (stepList.children.length + 1) + ' ,滤池设置为就地</span></li>');
        Global.currentIframe().oTrain.operateStep.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "lvchijiudi",
            "opcname": "滤池就地",
            "opcvalue": "1",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        Global.currentIframe().oTrain.currentState.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "lvchiyuancheng",
            "opcname": "滤池远程",
            "opcvalue": "0",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        Global.currentIframe().oTrain.currentState.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "lvchijiudi",
            "opcname": "滤池就地",
            "opcvalue": "1",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        console.log(Global.currentIframe().oTrain.operateStep);
        Global.currentIframe().oTrain.showStepTip(stepList.children.length);
    });
    $('#lvchijinshuifakai').click(function() {
        $('#lvchijinshuifakai').removeClass('lvchijinshuifakai-btn-off');
        $('#lvchijinshuifakai').addClass('lvchijinshuifakai-btn-on');
        $('#lvchijinshuifabanguan').removeClass('lvchijinshuifabanguan-btn-on');
        $('#lvchijinshuifabanguan').addClass('lvchijinshuifabanguan-btn-off');
        $('#lvchijinshuifaguan').removeClass('lvchijinshuifaguan-btn-on');
        $('#lvchijinshuifaguan').addClass('lvchijinshuifaguan-btn-off');
        //
        var stepList = Global.currentIframe().document.getElementById('questionStepList');
        $(stepList).append(' <li title="打开滤池进水阀"><span class="item">' + (stepList.children.length + 1) + ' ,打开滤池进水阀</span></li>');
        Global.currentIframe().oTrain.operateStep.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "lvchijinshuifakai",
            "opcname": "滤池进水阀开",
            "opcvalue": "1",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        Global.currentIframe().oTrain.currentState.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "lvchijinshuifakai",
            "opcname": "滤池进水阀开",
            "opcvalue": "1",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        Global.currentIframe().oTrain.currentState.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "lvchijinshuifabanguan",
            "opcname": "滤池进水阀半关",
            "opcvalue": "0",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        Global.currentIframe().oTrain.currentState.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "lvchijinshuifaguan",
            "opcname": "滤池进水阀关",
            "opcvalue": "0",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        console.log(Global.currentIframe().oTrain.operateStep);
        Global.currentIframe().oTrain.showStepTip(stepList.children.length);
    });
    $('#lvchijinshuifabanguan').click(function() {
        $('#lvchijinshuifabanguan').removeClass('lvchijinshuifabanguan-btn-off');
        $('#lvchijinshuifabanguan').addClass('lvchijinshuifabanguan-btn-on');
        $('#lvchijinshuifakai').removeClass('lvchijinshuifakai-btn-on');
        $('#lvchijinshuifakai').addClass('lvchijinshuifakai-btn-off');
        $('#lvchijinshuifaguan').removeClass('lvchijinshuifaguan-btn-on');
        $('#lvchijinshuifaguan').addClass('lvchijinshuifaguan-btn-off');
        //
        var stepList = Global.currentIframe().document.getElementById('questionStepList');
        $(stepList).append(' <li title="半关闭滤池进水阀"><span class="item">' + (stepList.children.length + 1) + ' ,半关闭滤池进水阀</span></li>');
        Global.currentIframe().oTrain.operateStep.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "lvchijinshuifabanguan",
            "opcname": "滤池进水阀半关",
            "opcvalue": "1",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        Global.currentIframe().oTrain.currentState.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "lvchijinshuifakai",
            "opcname": "滤池进水阀开",
            "opcvalue": "0",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        Global.currentIframe().oTrain.currentState.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "lvchijinshuifabanguan",
            "opcname": "滤池进水阀半关",
            "opcvalue": "1",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        Global.currentIframe().oTrain.currentState.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "lvchijinshuifaguan",
            "opcname": "滤池进水阀关",
            "opcvalue": "0",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        console.log(Global.currentIframe().oTrain.operateStep);
        Global.currentIframe().oTrain.showStepTip(stepList.children.length);
    });
    $('#lvchijinshuifaguan').click(function() {
        $('#lvchijinshuifaguan').removeClass('lvchijinshuifaguan-btn-off');
        $('#lvchijinshuifaguan').addClass('lvchijinshuifaguan-btn-on');
        $('#lvchijinshuifakai').removeClass('lvchijinshuifakai-btn-on');
        $('#lvchijinshuifakai').addClass('lvchijinshuifakai-btn-off');
        $('#lvchijinshuifabanguan').removeClass('lvchijinshuifabanguan-btn-on');
        $('#lvchijinshuifabanguan').addClass('lvchijinshuifabanguan-btn-off');
        //
        var stepList = Global.currentIframe().document.getElementById('questionStepList');
        $(stepList).append(' <li title="关闭滤池进水阀"><span class="item">' + (stepList.children.length + 1) + ' ,关闭滤池进水阀</span></li>');
        Global.currentIframe().oTrain.operateStep.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "lvchijinshuifaguan",
            "opcname": "滤池进水阀关",
            "opcvalue": "1",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        Global.currentIframe().oTrain.currentState.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "lvchijinshuifakai",
            "opcname": "滤池进水阀开",
            "opcvalue": "0",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        Global.currentIframe().oTrain.currentState.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "lvchijinshuifabanguan",
            "opcname": "滤池进水阀半关",
            "opcvalue": "0",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        Global.currentIframe().oTrain.currentState.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "lvchijinshuifaguan",
            "opcname": "滤池进水阀关",
            "opcvalue": "1",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        console.log(Global.currentIframe().oTrain.operateStep);
        Global.currentIframe().oTrain.showStepTip(stepList.children.length);
    });
    $('#lvchipaishuifakai').click(function() {
        $('#lvchipaishuifakai').removeClass('lvchipaishuifakai-btn-off');
        $('#lvchipaishuifakai').addClass('lvchipaishuifakai-btn-on');
        $('#lvchipaishuifaguan').removeClass('lvchipaishuifaguan-btn-on');
        $('#lvchipaishuifaguan').addClass('lvchipaishuifaguan-btn-off');
        //
        var stepList = Global.currentIframe().document.getElementById('questionStepList');
        $(stepList).append(' <li title="打开滤池排水阀"><span class="item">' + (stepList.children.length + 1) + ' ,打开滤池排水阀</span></li>');
        Global.currentIframe().oTrain.operateStep.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "lvchipaishuifakai",
            "opcname": "滤池排水阀开",
            "opcvalue": "1",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        Global.currentIframe().oTrain.currentState.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "lvchipaishuifakai",
            "opcname": "滤池排水阀开",
            "opcvalue": "1",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        Global.currentIframe().oTrain.currentState.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "lvchipaishuifaguan",
            "opcname": "滤池排水阀关",
            "opcvalue": "0",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        console.log(Global.currentIframe().oTrain.operateStep);
        Global.currentIframe().oTrain.showStepTip(stepList.children.length);
    });
    $('#lvchipaishuifaguan').click(function() {
        $('#lvchipaishuifaguan').removeClass('lvchipaishuifaguan-btn-off');
        $('#lvchipaishuifaguan').addClass('lvchipaishuifaguan-btn-on');
        $('#lvchipaishuifakai').removeClass('lvchipaishuifakai-btn-on');
        $('#lvchipaishuifakai').addClass('lvchipaishuifakai-btn-off');
        //
        var stepList = Global.currentIframe().document.getElementById('questionStepList');
        $(stepList).append(' <li title="关闭滤池排水阀"><span class="item">' + (stepList.children.length + 1) + ' ,关闭滤池排水阀</span></li>');
        Global.currentIframe().oTrain.operateStep.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "lvchipaishuifaguan",
            "opcname": "滤池排水阀关",
            "opcvalue": "1",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        Global.currentIframe().oTrain.currentState.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "lvchipaishuifakai",
            "opcname": "滤池排水阀开",
            "opcvalue": "0",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        Global.currentIframe().oTrain.currentState.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "lvchipaishuifaguan",
            "opcname": "滤池排水阀关",
            "opcvalue": "1",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        console.log(Global.currentIframe().oTrain.operateStep);
        Global.currentIframe().oTrain.showStepTip(stepList.children.length);
    });
    $('#lvchiqixifakai').click(function() {
        $('#lvchiqixifakai').removeClass('lvchiqixifakai-btn-off');
        $('#lvchiqixifakai').addClass('lvchiqixifakai-btn-on');
        $('#lvchiqixifaguan').removeClass('lvchiqixifaguan-btn-on');
        $('#lvchiqixifaguan').addClass('lvchiqixifaguan-btn-off');
        //
        var stepList = Global.currentIframe().document.getElementById('questionStepList');
        $(stepList).append(' <li title="打开滤池气洗阀"><span class="item">' + (stepList.children.length + 1) + ' ,打开滤池气洗阀</span></li>');
        Global.currentIframe().oTrain.operateStep.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "lvchiqixifakai",
            "opcname": "滤池气洗阀开",
            "opcvalue": "1",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        Global.currentIframe().oTrain.currentState.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "lvchiqixifakai",
            "opcname": "滤池气洗阀开",
            "opcvalue": "1",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        Global.currentIframe().oTrain.currentState.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "lvchiqixifaguan",
            "opcname": "滤池气洗阀关",
            "opcvalue": "0",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        console.log(Global.currentIframe().oTrain.operateStep);
        Global.currentIframe().oTrain.showStepTip(stepList.children.length);
    });
    $('#lvchiqixifaguan').click(function() {
        $('#lvchiqixifaguan').removeClass('lvchiqixifaguan-btn-off');
        $('#lvchiqixifaguan').addClass('lvchiqixifaguan-btn-on');
        $('#lvchiqixifakai').removeClass('lvchiqixifakai-btn-on');
        $('#lvchiqixifakai').addClass('lvchiqixifakai-btn-off');
        //
        var stepList = Global.currentIframe().document.getElementById('questionStepList');
        $(stepList).append(' <li title="关闭滤池气洗阀"><span class="item">' + (stepList.children.length + 1) + ' ,关闭滤池气洗阀</span></li>');
        Global.currentIframe().oTrain.operateStep.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "lvchiqixifaguan",
            "opcname": "滤池气洗阀关",
            "opcvalue": "1",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        Global.currentIframe().oTrain.currentState.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "lvchiqixifakai",
            "opcname": "滤池气洗阀开",
            "opcvalue": "0",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        Global.currentIframe().oTrain.currentState.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "lvchiqixifaguan",
            "opcname": "滤池气洗阀关",
            "opcvalue": "1",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        console.log(Global.currentIframe().oTrain.operateStep);
        Global.currentIframe().oTrain.showStepTip(stepList.children.length);
    });
    $('#lvchishuixifakai').click(function() {
        $('#lvchishuixifakai').removeClass('lvchishuixifakai-btn-off');
        $('#lvchishuixifakai').addClass('lvchishuixifakai-btn-on');
        $('#lvchishuixifaguan').removeClass('lvchishuixifaguan-btn-on');
        $('#lvchishuixifaguan').addClass('lvchishuixifaguan-btn-off');
        //
        var stepList = Global.currentIframe().document.getElementById('questionStepList');
        $(stepList).append(' <li title="打开滤池水洗阀"><span class="item">' + (stepList.children.length + 1) + ' ,打开滤池水洗阀</span></li>');
        Global.currentIframe().oTrain.operateStep.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "lvchishuixifakai",
            "opcname": "滤池水洗阀开",
            "opcvalue": "1",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        Global.currentIframe().oTrain.currentState.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "lvchishuixifakai",
            "opcname": "滤池水洗阀开",
            "opcvalue": "1",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        Global.currentIframe().oTrain.currentState.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "lvchishuixifaguan",
            "opcname": "滤池水洗阀关",
            "opcvalue": "0",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        console.log(Global.currentIframe().oTrain.operateStep);
        Global.currentIframe().oTrain.showStepTip(stepList.children.length);
    });
    $('#lvchishuixifaguan').click(function() {
        $('#lvchishuixifaguan').removeClass('lvchishuixifaguan-btn-off');
        $('#lvchishuixifaguan').addClass('lvchishuixifaguan-btn-on');
        $('#lvchishuixifakai').removeClass('lvchishuixifakai-btn-on');
        $('#lvchishuixifakai').addClass('lvchishuixifakai-btn-off');
        //
        var stepList = Global.currentIframe().document.getElementById('questionStepList');
        $(stepList).append(' <li title="关闭滤池水洗阀"><span class="item">' + (stepList.children.length + 1) + ' ,关闭滤池水洗阀</span></li>');
        Global.currentIframe().oTrain.operateStep.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "lvchishuixifaguan",
            "opcname": "滤池水洗阀关",
            "opcvalue": "1",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        Global.currentIframe().oTrain.currentState.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "lvchishuixifakai",
            "opcname": "滤池水洗阀开",
            "opcvalue": "0",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        Global.currentIframe().oTrain.currentState.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "lvchishuixifaguan",
            "opcname": "滤池水洗阀关",
            "opcvalue": "1",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        console.log(Global.currentIframe().oTrain.operateStep);
        Global.currentIframe().oTrain.showStepTip(stepList.children.length);
    });
    $('#lvchipaiqifakai').click(function() {
        $('#lvchipaiqifakai').removeClass('lvchipaiqifakai-btn-off');
        $('#lvchipaiqifakai').addClass('lvchipaiqifakai-btn-on');
        $('#lvchipaiqifaguan').removeClass('lvchipaiqifaguan-btn-on');
        $('#lvchipaiqifaguan').addClass('lvchipaiqifaguan-btn-off');
        //
        var stepList = Global.currentIframe().document.getElementById('questionStepList');
        $(stepList).append(' <li title="打开滤池排气阀"><span class="item">' + (stepList.children.length + 1) + ' ,打开滤池排气阀</span></li>');
        Global.currentIframe().oTrain.operateStep.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "lvchipaiqifakai",
            "opcname": "滤池排气阀开",
            "opcvalue": "1",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        Global.currentIframe().oTrain.currentState.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "lvchipaiqifakai",
            "opcname": "滤池排气阀开",
            "opcvalue": "1",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        Global.currentIframe().oTrain.currentState.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "lvchipaiqifaguan",
            "opcname": "滤池排气阀关",
            "opcvalue": "0",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        console.log(Global.currentIframe().oTrain.operateStep);
        Global.currentIframe().oTrain.showStepTip(stepList.children.length);
    });
    $('#lvchipaiqifaguan').click(function() {
        $('#lvchipaiqifaguan').removeClass('lvchipaiqifaguan-btn-off');
        $('#lvchipaiqifaguan').addClass('lvchipaiqifaguan-btn-on');
        $('#lvchipaiqifakai').removeClass('lvchipaiqifakai-btn-on');
        $('#lvchipaiqifakai').addClass('lvchipaiqifakai-btn-off');
        //
        var stepList = Global.currentIframe().document.getElementById('questionStepList');
        $(stepList).append(' <li title="关闭滤池排气阀"><span class="item">' + (stepList.children.length + 1) + ' ,关闭滤池排气阀</span></li>');
        Global.currentIframe().oTrain.operateStep.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "lvchipaiqifaguan",
            "opcname": "滤池排气阀关",
            "opcvalue": "1",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        Global.currentIframe().oTrain.currentState.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "lvchipaiqifakai",
            "opcname": "滤池排气阀开",
            "opcvalue": "0",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        Global.currentIframe().oTrain.currentState.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "lvchipaiqifaguan",
            "opcname": "滤池排气阀关",
            "opcvalue": "1",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        console.log(Global.currentIframe().oTrain.operateStep);
        Global.currentIframe().oTrain.showStepTip(stepList.children.length);
    });
    $('#lvchishoudong').click(function() {
        $('#lvchishoudong').removeClass('lvchishoudong-btn-off');
        $('#lvchishoudong').addClass('lvchishoudong-btn-on');
        $('#lvchizidong').removeClass('lvchizidong-btn-on');
        $('#lvchizidong').addClass('lvchizidong-btn-off');
        //
        var stepList = Global.currentIframe().document.getElementById('questionStepList');
        $(stepList).append(' <li title="滤池设置为手动"><span class="item">' + (stepList.children.length + 1) + ' ,滤池设置为手动</span></li>');
        Global.currentIframe().oTrain.operateStep.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "lvchishoudong",
            "opcname": "滤池手动",
            "opcvalue": "1",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        Global.currentIframe().oTrain.currentState.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "lvchishoudong",
            "opcname": "滤池手动",
            "opcvalue": "1",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        Global.currentIframe().oTrain.currentState.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "lvchizidong",
            "opcname": "滤池自动",
            "opcvalue": "0",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        console.log(Global.currentIframe().oTrain.operateStep);
        Global.currentIframe().oTrain.showStepTip(stepList.children.length);
    });
    $('#lvchizidong').click(function() {
        $('#lvchizidong').removeClass('lvchizidong-btn-off');
        $('#lvchizidong').addClass('lvchizidong-btn-on');
        $('#lvchishoudong').removeClass('lvchishoudong-btn-on');
        $('#lvchishoudong').addClass('lvchishoudong-btn-off');
        //
        var stepList = Global.currentIframe().document.getElementById('questionStepList');
        $(stepList).append(' <li title="滤池设置为自动"><span class="item">' + (stepList.children.length + 1) + ' ,滤池设置为自动</span></li>');
        Global.currentIframe().oTrain.operateStep.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "lvchizidong",
            "opcname": "滤池自动",
            "opcvalue": "1",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        Global.currentIframe().oTrain.currentState.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "lvchishoudong",
            "opcname": "滤池手动",
            "opcvalue": "0",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        Global.currentIframe().oTrain.currentState.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "lvchizidong",
            "opcname": "滤池自动",
            "opcvalue": "1",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        console.log(Global.currentIframe().oTrain.operateStep);
        Global.currentIframe().oTrain.showStepTip(stepList.children.length);
    });


    $('#lvchikongzhixiangfengjifaxianchangyaokong1').click(function() {
        var stepList = Global.currentIframe().document.getElementById('questionStepList');
        var classname = document.getElementById('lvchikongzhixiangfengjifaxianchangyaokong1').className;
        if (classname.indexOf('lvchikongzhixiangfengjifaxianchangyaokong1-btn-off') >= 0) {
            $('#lvchikongzhixiangfengjifaxianchangyaokong1').addClass('lvchikongzhixiangfengjifaxianchangyaokong1-btn-on');
            $('#lvchikongzhixiangfengjifaxianchangyaokong1').removeClass('lvchikongzhixiangfengjifaxianchangyaokong1-btn-off');
            $(stepList).append(' <li title="风机阀1设置为遥控"><span class="item">' + (stepList.children.length + 1) + ' ,风机阀1设置为遥控</span></li>');
            Global.currentIframe().oTrain.operateStep.push({
                "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
                "numbertype": "0",
                "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
                "opcid": "lvchikongzhixiangfengjifaxianchangyaokong1",
                "opcname": "滤池风机阀1遥控/现场",
                "opcvalue": "1",
                "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
            });
            Global.currentIframe().oTrain.currentState.push({
                "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
                "numbertype": "0",
                "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
                "opcid": "lvchikongzhixiangfengjifaxianchangyaokong1",
                "opcname": "滤池风机阀1遥控/现场",
                "opcvalue": "1",
                "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
            });
        } else {
            $('#lvchikongzhixiangfengjifaxianchangyaokong1').addClass('lvchikongzhixiangfengjifaxianchangyaokong1-btn-off');
            $('#lvchikongzhixiangfengjifaxianchangyaokong1').removeClass('lvchikongzhixiangfengjifaxianchangyaokong1-btn-on');
            $(stepList).append(' <li title="风机阀1设置为现场"><span class="item">' + (stepList.children.length + 1) + ' ,风机阀1设置为现场</span></li>');
            Global.currentIframe().oTrain.operateStep.push({
                "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
                "numbertype": "0",
                "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
                "opcid": "lvchikongzhixiangfengjifaxianchangyaokong1",
                "opcname": "滤池风机阀1遥控/现场",
                "opcvalue": "0",
                "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
            });
            Global.currentIframe().oTrain.currentState.push({
                "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
                "numbertype": "0",
                "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
                "opcid": "lvchikongzhixiangfengjifaxianchangyaokong1",
                "opcname": "滤池风机阀1遥控/现场",
                "opcvalue": "0",
                "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
            });
        }
        console.log(Global.currentIframe().oTrain.operateStep);
        Global.currentIframe().oTrain.showStepTip(stepList.children.length);
    });

    $('#lvchikongzhixiangfengjifaxianchangyaokong2').click(function() {
        var stepList = Global.currentIframe().document.getElementById('questionStepList');
        var classname = document.getElementById('lvchikongzhixiangfengjifaxianchangyaokong2').className;
        if (classname.indexOf('lvchikongzhixiangfengjifaxianchangyaokong2-btn-off') >= 0) {
            $('#lvchikongzhixiangfengjifaxianchangyaokong2').addClass('lvchikongzhixiangfengjifaxianchangyaokong2-btn-on');
            $('#lvchikongzhixiangfengjifaxianchangyaokong2').removeClass('lvchikongzhixiangfengjifaxianchangyaokong2-btn-off');
            $(stepList).append(' <li title="风机阀2设置为遥控"><span class="item">' + (stepList.children.length + 1) + ' ,风机阀2设置为遥控</span></li>');
            Global.currentIframe().oTrain.operateStep.push({
                "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
                "numbertype": "0",
                "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
                "opcid": "lvchikongzhixiangfengjifaxianchangyaokong2",
                "opcname": "滤池风机阀2遥控/现场",
                "opcvalue": "1",
                "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
            });
            Global.currentIframe().oTrain.currentState.push({
                "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
                "numbertype": "0",
                "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
                "opcid": "lvchikongzhixiangfengjifaxianchangyaokong2",
                "opcname": "滤池风机阀2遥控/现场",
                "opcvalue": "1",
                "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
            });
        } else {
            $('#lvchikongzhixiangfengjifaxianchangyaokong2').addClass('lvchikongzhixiangfengjifaxianchangyaokong2-btn-off');
            $('#lvchikongzhixiangfengjifaxianchangyaokong2').removeClass('lvchikongzhixiangfengjifaxianchangyaokong2-btn-on');
            $(stepList).append(' <li title="风机阀2设置为现场"><span class="item">' + (stepList.children.length + 1) + ' ,风机阀2设置为现场</span></li>');
            Global.currentIframe().oTrain.operateStep.push({
                "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
                "numbertype": "0",
                "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
                "opcid": "lvchikongzhixiangfengjifaxianchangyaokong2",
                "opcname": "滤池风机阀2遥控/现场",
                "opcvalue": "0",
                "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
            });
            Global.currentIframe().oTrain.currentState.push({
                "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
                "numbertype": "0",
                "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
                "opcid": "lvchikongzhixiangfengjifaxianchangyaokong2",
                "opcname": "滤池风机阀2遥控/现场",
                "opcvalue": "0",
                "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
            });
        }
        console.log(Global.currentIframe().oTrain.operateStep);
        Global.currentIframe().oTrain.showStepTip(stepList.children.length);
    });



    //

    $('#lvchikongzhixiangfengjifakai1').click(function() {
        $('#lvchikongzhixiangfengjifakai1').removeClass('lvchikongzhixiangfengjifakai1-btn-off');
        $('#lvchikongzhixiangfengjifakai1').addClass('lvchikongzhixiangfengjifakai1-btn-on');
        $('#lvchikongzhixiangfengjifaguan1').removeClass('lvchikongzhixiangfengjifaguan1-btn-on');
        $('#lvchikongzhixiangfengjifaguan1').addClass('lvchikongzhixiangfengjifaguan1-btn-off');
        //
        var stepList = Global.currentIframe().document.getElementById('questionStepList');
        $(stepList).append(' <li title="风机阀1开"><span class="item">' + (stepList.children.length + 1) + ' ,风机阀1开</span></li>');
        Global.currentIframe().oTrain.operateStep.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "lvchikongzhixiangfengjifakai1",
            "opcname": "滤池风机阀1开",
            "opcvalue": "1",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        Global.currentIframe().oTrain.currentState.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "lvchikongzhixiangfengjifakai1",
            "opcname": "滤池风机阀1开",
            "opcvalue": "1",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        Global.currentIframe().oTrain.currentState.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "lvchikongzhixiangfengjifaguan1",
            "opcname": "滤池风机阀1关",
            "opcvalue": "0",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        console.log(Global.currentIframe().oTrain.operateStep);
        Global.currentIframe().oTrain.showStepTip(stepList.children.length);
    });

    $('#lvchikongzhixiangfengjifaguan1').click(function() {
        $('#lvchikongzhixiangfengjifakai1').addClass('lvchikongzhixiangfengjifakai1-btn-off');
        $('#lvchikongzhixiangfengjifakai1').removeClass('lvchikongzhixiangfengjifakai1-btn-on');
        $('#lvchikongzhixiangfengjifaguan1').addClass('lvchikongzhixiangfengjifaguan1-btn-on');
        $('#lvchikongzhixiangfengjifaguan1').removeClass('lvchikongzhixiangfengjifaguan1-btn-off');
        //
        var stepList = Global.currentIframe().document.getElementById('questionStepList');
        $(stepList).append(' <li title="风机阀1关"><span class="item">' + (stepList.children.length + 1) + ' ,风机阀1关</span></li>');
        Global.currentIframe().oTrain.operateStep.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "lvchikongzhixiangfengjifaguan1",
            "opcname": "滤池风机阀1关",
            "opcvalue": "1",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        Global.currentIframe().oTrain.currentState.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "lvchikongzhixiangfengjifakai1",
            "opcname": "滤池风机阀1开",
            "opcvalue": "0",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        Global.currentIframe().oTrain.currentState.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "lvchikongzhixiangfengjifaguan1",
            "opcname": "滤池风机阀1关",
            "opcvalue": "1",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        console.log(Global.currentIframe().oTrain.operateStep);
        Global.currentIframe().oTrain.showStepTip(stepList.children.length);
    });

    $('#lvchikongzhixiangfengjifakai2').click(function() {
        $('#lvchikongzhixiangfengjifakai2').removeClass('lvchikongzhixiangfengjifakai2-btn-off');
        $('#lvchikongzhixiangfengjifakai2').addClass('lvchikongzhixiangfengjifakai2-btn-on');
        $('#lvchikongzhixiangfengjifaguan2').removeClass('lvchikongzhixiangfengjifaguan2-btn-on');
        $('#lvchikongzhixiangfengjifaguan2').addClass('lvchikongzhixiangfengjifaguan2-btn-off');
        //
        var stepList = Global.currentIframe().document.getElementById('questionStepList');
        $(stepList).append(' <li title="风机阀2开"><span class="item">' + (stepList.children.length + 1) + ' ,风机阀2开</span></li>');
        Global.currentIframe().oTrain.operateStep.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "lvchikongzhixiangfengjifakai2",
            "opcname": "滤池风机阀2开",
            "opcvalue": "1",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        Global.currentIframe().oTrain.currentState.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "lvchikongzhixiangfengjifakai2",
            "opcname": "滤池风机阀2开",
            "opcvalue": "1",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        Global.currentIframe().oTrain.currentState.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "lvchikongzhixiangfengjifaguan2",
            "opcname": "滤池风机阀2关",
            "opcvalue": "0",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        console.log(Global.currentIframe().oTrain.operateStep);
        Global.currentIframe().oTrain.showStepTip(stepList.children.length);
    });

    $('#lvchikongzhixiangfengjifaguan2').click(function() {
        $('#lvchikongzhixiangfengjifakai2').addClass('lvchikongzhixiangfengjifakai2-btn-off');
        $('#lvchikongzhixiangfengjifakai2').removeClass('lvchikongzhixiangfengjifakai2-btn-on');
        $('#lvchikongzhixiangfengjifaguan2').addClass('lvchikongzhixiangfengjifaguan2-btn-on');
        $('#lvchikongzhixiangfengjifaguan2').removeClass('lvchikongzhixiangfengjifaguan2-btn-off');
        //
        var stepList = Global.currentIframe().document.getElementById('questionStepList');
        $(stepList).append(' <li title="风机阀2关"><span class="item">' + (stepList.children.length + 1) + ' ,风机阀2关</span></li>');
        Global.currentIframe().oTrain.operateStep.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "lvchikongzhixiangfengjifaguan2",
            "opcname": "滤池风机阀2关",
            "opcvalue": "1",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        Global.currentIframe().oTrain.currentState.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "lvchikongzhixiangfengjifakai2",
            "opcname": "滤池风机阀2开",
            "opcvalue": "0",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        Global.currentIframe().oTrain.currentState.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "lvchikongzhixiangfengjifaguan2",
            "opcname": "滤池风机阀2关",
            "opcvalue": "1",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        console.log(Global.currentIframe().oTrain.operateStep);
        Global.currentIframe().oTrain.showStepTip(stepList.children.length);
    });


    $('#lvchikongzhixiangshuibengfaxianchangyaokong1').click(function() {
        var stepList = Global.currentIframe().document.getElementById('questionStepList');
        var classname = document.getElementById('lvchikongzhixiangshuibengfaxianchangyaokong1').className;
        if (classname.indexOf('lvchikongzhixiangshuibengfaxianchangyaokong1-btn-off') >= 0) {
            $('#lvchikongzhixiangshuibengfaxianchangyaokong1').addClass('lvchikongzhixiangshuibengfaxianchangyaokong1-btn-on');
            $('#lvchikongzhixiangshuibengfaxianchangyaokong1').removeClass('lvchikongzhixiangshuibengfaxianchangyaokong1-btn-off');
            $(stepList).append(' <li title="水泵阀1设置为遥控"><span class="item">' + (stepList.children.length + 1) + ' ,水泵阀1设置为遥控</span></li>');
            Global.currentIframe().oTrain.operateStep.push({
                "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
                "numbertype": "0",
                "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
                "opcid": "lvchikongzhixiangshuibengfaxianchangyaokong1",
                "opcname": "滤池水泵阀1遥控/现场",
                "opcvalue": "1",
                "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
            });
            Global.currentIframe().oTrain.currentState.push({
                "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
                "numbertype": "0",
                "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
                "opcid": "lvchikongzhixiangshuibengfaxianchangyaokong1",
                "opcname": "滤池水泵阀1遥控/现场",
                "opcvalue": "1",
                "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
            });
        } else {
            $('#lvchikongzhixiangshuibengfaxianchangyaokong1').addClass('lvchikongzhixiangshuibengfaxianchangyaokong1-btn-off');
            $('#lvchikongzhixiangshuibengfaxianchangyaokong1').removeClass('lvchikongzhixiangshuibengfaxianchangyaokong1-btn-on');
            $(stepList).append(' <li title="水泵阀1设置为现场"><span class="item">' + (stepList.children.length + 1) + ' ,水泵阀1设置为现场</span></li>');
            Global.currentIframe().oTrain.operateStep.push({
                "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
                "numbertype": "0",
                "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
                "opcid": "lvchikongzhixiangshuibengfaxianchangyaokong1",
                "opcname": "滤池水泵阀1遥控/现场",
                "opcvalue": "0",
                "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
            });
            Global.currentIframe().oTrain.currentState.push({
                "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
                "numbertype": "0",
                "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
                "opcid": "lvchikongzhixiangshuibengfaxianchangyaokong1",
                "opcname": "滤池水泵阀1遥控/现场",
                "opcvalue": "0",
                "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
            });
        }
        console.log(Global.currentIframe().oTrain.operateStep);
        Global.currentIframe().oTrain.showStepTip(stepList.children.length);
    });


    $('#lvchikongzhixiangshuibengfaxianchangyaokong2').click(function() {
        var stepList = Global.currentIframe().document.getElementById('questionStepList');
        var classname = document.getElementById('lvchikongzhixiangshuibengfaxianchangyaokong2').className;
        if (classname.indexOf('lvchikongzhixiangshuibengfaxianchangyaokong2-btn-off') >= 0) {
            $('#lvchikongzhixiangshuibengfaxianchangyaokong2').addClass('lvchikongzhixiangshuibengfaxianchangyaokong2-btn-on');
            $('#lvchikongzhixiangshuibengfaxianchangyaokong2').removeClass('lvchikongzhixiangshuibengfaxianchangyaokong2-btn-off');
            $(stepList).append(' <li title="水泵阀2设置为遥控"><span class="item">' + (stepList.children.length + 1) + ' ,水泵阀2设置为遥控</span></li>');
            Global.currentIframe().oTrain.operateStep.push({
                "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
                "numbertype": "0",
                "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
                "opcid": "lvchikongzhixiangshuibengfaxianchangyaokong2",
                "opcname": "滤池水泵阀2遥控/现场",
                "opcvalue": "1",
                "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
            });
            Global.currentIframe().oTrain.currentState.push({
                "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
                "numbertype": "0",
                "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
                "opcid": "lvchikongzhixiangshuibengfaxianchangyaokong2",
                "opcname": "滤池水泵阀2遥控/现场",
                "opcvalue": "1",
                "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
            });
        } else {
            $('#lvchikongzhixiangshuibengfaxianchangyaokong2').addClass('lvchikongzhixiangshuibengfaxianchangyaokong2-btn-off');
            $('#lvchikongzhixiangshuibengfaxianchangyaokong2').removeClass('lvchikongzhixiangshuibengfaxianchangyaokong2-btn-on');
            $(stepList).append(' <li title="水泵阀2设置为现场"><span class="item">' + (stepList.children.length + 1) + ' ,水泵阀2设置为现场</span></li>');
            Global.currentIframe().oTrain.operateStep.push({
                "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
                "numbertype": "0",
                "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
                "opcid": "lvchikongzhixiangshuibengfaxianchangyaokong2",
                "opcname": "滤池水泵阀2遥控/现场",
                "opcvalue": "0",
                "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
            });
            Global.currentIframe().oTrain.currentState.push({
                "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
                "numbertype": "0",
                "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
                "opcid": "lvchikongzhixiangshuibengfaxianchangyaokong2",
                "opcname": "滤池水泵阀2遥控/现场",
                "opcvalue": "0",
                "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
            });
        }
        console.log(Global.currentIframe().oTrain.operateStep);
        Global.currentIframe().oTrain.showStepTip(stepList.children.length);
    });


    $('#lvchikongzhixiangshuibengfaxianchangyaokong3').click(function() {
        var stepList = Global.currentIframe().document.getElementById('questionStepList');
        var classname = document.getElementById('lvchikongzhixiangshuibengfaxianchangyaokong3').className;
        if (classname.indexOf('lvchikongzhixiangshuibengfaxianchangyaokong3-btn-off') >= 0) {
            $('#lvchikongzhixiangshuibengfaxianchangyaokong3').addClass('lvchikongzhixiangshuibengfaxianchangyaokong3-btn-on');
            $('#lvchikongzhixiangshuibengfaxianchangyaokong3').removeClass('lvchikongzhixiangshuibengfaxianchangyaokong3-btn-off');
            $(stepList).append(' <li title="水泵阀3设置为遥控"><span class="item">' + (stepList.children.length + 1) + ' ,水泵阀3设置为遥控</span></li>');
            Global.currentIframe().oTrain.operateStep.push({
                "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
                "numbertype": "0",
                "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
                "opcid": "lvchikongzhixiangshuibengfaxianchangyaokong3",
                "opcname": "滤池水泵阀3遥控/现场",
                "opcvalue": "1",
                "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
            });
            Global.currentIframe().oTrain.currentState.push({
                "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
                "numbertype": "0",
                "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
                "opcid": "lvchikongzhixiangshuibengfaxianchangyaokong3",
                "opcname": "滤池水泵阀3遥控/现场",
                "opcvalue": "1",
                "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
            });
        } else {
            $('#lvchikongzhixiangshuibengfaxianchangyaokong3').addClass('lvchikongzhixiangshuibengfaxianchangyaokong3-btn-off');
            $('#lvchikongzhixiangshuibengfaxianchangyaokong3').removeClass('lvchikongzhixiangshuibengfaxianchangyaokong3-btn-on');
            $(stepList).append(' <li title="水泵阀3设置为现场"><span class="item">' + (stepList.children.length + 1) + ' ,水泵阀3设置为现场</span></li>');
            Global.currentIframe().oTrain.operateStep.push({
                "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
                "numbertype": "0",
                "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
                "opcid": "lvchikongzhixiangshuibengfaxianchangyaokong3",
                "opcname": "滤池水泵阀3遥控/现场",
                "opcvalue": "0",
                "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
            });
            Global.currentIframe().oTrain.currentState.push({
                "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
                "numbertype": "0",
                "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
                "opcid": "lvchikongzhixiangshuibengfaxianchangyaokong3",
                "opcname": "滤池水泵阀3遥控/现场",
                "opcvalue": "0",
                "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
            });
        }
        console.log(Global.currentIframe().oTrain.operateStep);
        Global.currentIframe().oTrain.showStepTip(stepList.children.length);
    });



    $('#lvchikongzhixiangshuibengfakai1').click(function() {
        $('#lvchikongzhixiangshuibengfakai1').removeClass('lvchikongzhixiangshuibengfakai1-btn-off');
        $('#lvchikongzhixiangshuibengfakai1').addClass('lvchikongzhixiangshuibengfakai1-btn-on');
        $('#lvchikongzhixiangshuibengfaguan1').removeClass('lvchikongzhixiangshuibengfaguan1-btn-on');
        $('#lvchikongzhixiangshuibengfaguan1').addClass('lvchikongzhixiangshuibengfaguan1-btn-off');
        //
        var stepList = Global.currentIframe().document.getElementById('questionStepList');
        $(stepList).append(' <li title="水泵阀1开"><span class="item">' + (stepList.children.length + 1) + ' ,水泵阀1开</span></li>');
        Global.currentIframe().oTrain.operateStep.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "lvchikongzhixiangshuibengfakai1",
            "opcname": "滤池水泵阀1开",
            "opcvalue": "1",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        Global.currentIframe().oTrain.currentState.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "lvchikongzhixiangshuibengfakai1",
            "opcname": "滤池水泵阀1开",
            "opcvalue": "1",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        Global.currentIframe().oTrain.currentState.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "lvchikongzhixiangshuibengfaguan1",
            "opcname": "滤池水泵阀1关",
            "opcvalue": "0",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        console.log(Global.currentIframe().oTrain.operateStep);
        Global.currentIframe().oTrain.showStepTip(stepList.children.length);
    });

    $('#lvchikongzhixiangshuibengfaguan1').click(function() {
        $('#lvchikongzhixiangshuibengfaguan1').removeClass('lvchikongzhixiangshuibengfaguan1-btn-off');
        $('#lvchikongzhixiangshuibengfaguan1').addClass('lvchikongzhixiangshuibengfaguan1-btn-on');
        $('#lvchikongzhixiangshuibengfakai1').removeClass('lvchikongzhixiangshuibengfakai1-btn-on');
        $('#lvchikongzhixiangshuibengfakai1').addClass('lvchikongzhixiangshuibengfakai1-btn-off');
        //
        var stepList = Global.currentIframe().document.getElementById('questionStepList');
        $(stepList).append(' <li title="水泵阀1关"><span class="item">' + (stepList.children.length + 1) + ' ,水泵阀1关</span></li>');
        Global.currentIframe().oTrain.operateStep.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "lvchikongzhixiangshuibengfaguan1",
            "opcname": "滤池水泵阀1关",
            "opcvalue": "1",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        Global.currentIframe().oTrain.currentState.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "lvchikongzhixiangshuibengfakai1",
            "opcname": "滤池水泵阀1开",
            "opcvalue": "0",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        Global.currentIframe().oTrain.currentState.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "lvchikongzhixiangshuibengfaguan1",
            "opcname": "滤池水泵阀1关",
            "opcvalue": "1",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        console.log(Global.currentIframe().oTrain.operateStep);
        Global.currentIframe().oTrain.showStepTip(stepList.children.length);
    });

    $('#lvchikongzhixiangshuibengfakai2').click(function() {
        $('#lvchikongzhixiangshuibengfakai2').removeClass('lvchikongzhixiangshuibengfakai2-btn-off');
        $('#lvchikongzhixiangshuibengfakai2').addClass('lvchikongzhixiangshuibengfakai2-btn-on');
        $('#lvchikongzhixiangshuibengfaguan2').removeClass('lvchikongzhixiangshuibengfaguan2-btn-on');
        $('#lvchikongzhixiangshuibengfaguan2').addClass('lvchikongzhixiangshuibengfaguan2-btn-off');
        //
        var stepList = Global.currentIframe().document.getElementById('questionStepList');
        $(stepList).append(' <li title="水泵阀2开"><span class="item">' + (stepList.children.length + 1) + ' ,水泵阀2开</span></li>');
        Global.currentIframe().oTrain.operateStep.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "lvchikongzhixiangshuibengfakai2",
            "opcname": "滤池水泵阀2开",
            "opcvalue": "1",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        Global.currentIframe().oTrain.currentState.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "lvchikongzhixiangshuibengfakai2",
            "opcname": "滤池水泵阀2开",
            "opcvalue": "1",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        Global.currentIframe().oTrain.currentState.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "lvchikongzhixiangshuibengfaguan2",
            "opcname": "滤池水泵阀2关",
            "opcvalue": "0",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        console.log(Global.currentIframe().oTrain.operateStep);
        Global.currentIframe().oTrain.showStepTip(stepList.children.length);
    });

    $('#lvchikongzhixiangshuibengfaguan2').click(function() {
        $('#lvchikongzhixiangshuibengfaguan2').removeClass('lvchikongzhixiangshuibengfaguan2-btn-off');
        $('#lvchikongzhixiangshuibengfaguan2').addClass('lvchikongzhixiangshuibengfaguan2-btn-on');
        $('#lvchikongzhixiangshuibengfakai2').removeClass('lvchikongzhixiangshuibengfakai2-btn-on');
        $('#lvchikongzhixiangshuibengfakai2').addClass('lvchikongzhixiangshuibengfakai2-btn-off');
        //
        var stepList = Global.currentIframe().document.getElementById('questionStepList');
        $(stepList).append(' <li title="水泵阀2关"><span class="item">' + (stepList.children.length + 1) + ' ,水泵阀2关</span></li>');
        Global.currentIframe().oTrain.operateStep.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "lvchikongzhixiangshuibengfaguan2",
            "opcname": "滤池水泵阀2关",
            "opcvalue": "1",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        Global.currentIframe().oTrain.currentState.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "lvchikongzhixiangshuibengfakai2",
            "opcname": "滤池水泵阀2开",
            "opcvalue": "0",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        Global.currentIframe().oTrain.currentState.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "lvchikongzhixiangshuibengfaguan2",
            "opcname": "滤池水泵阀2关",
            "opcvalue": "1",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        console.log(Global.currentIframe().oTrain.operateStep);
        Global.currentIframe().oTrain.showStepTip(stepList.children.length);
    });

    $('#lvchikongzhixiangshuibengfakai3').click(function() {
        $('#lvchikongzhixiangshuibengfakai3').removeClass('lvchikongzhixiangshuibengfakai3-btn-off');
        $('#lvchikongzhixiangshuibengfakai3').addClass('lvchikongzhixiangshuibengfakai3-btn-on');
        $('#lvchikongzhixiangshuibengfaguan3').removeClass('lvchikongzhixiangshuibengfaguan3-btn-on');
        $('#lvchikongzhixiangshuibengfaguan3').addClass('lvchikongzhixiangshuibengfaguan3-btn-off');
        //
        var stepList = Global.currentIframe().document.getElementById('questionStepList');
        $(stepList).append(' <li title="水泵阀3开"><span class="item">' + (stepList.children.length + 1) + ' ,水泵阀3开</span></li>');
        Global.currentIframe().oTrain.operateStep.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "lvchikongzhixiangshuibengfakai3",
            "opcname": "滤池水泵阀3开",
            "opcvalue": "1",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        Global.currentIframe().oTrain.currentState.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "lvchikongzhixiangshuibengfakai3",
            "opcname": "滤池水泵阀3开",
            "opcvalue": "1",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        Global.currentIframe().oTrain.currentState.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "lvchikongzhixiangshuibengfaguan3",
            "opcname": "滤池水泵阀3关",
            "opcvalue": "0",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        console.log(Global.currentIframe().oTrain.operateStep);
        Global.currentIframe().oTrain.showStepTip(stepList.children.length);
    });

    $('#lvchikongzhixiangshuibengfaguan3').click(function() {
        $('#lvchikongzhixiangshuibengfaguan3').removeClass('lvchikongzhixiangshuibengfaguan3-btn-off');
        $('#lvchikongzhixiangshuibengfaguan3').addClass('lvchikongzhixiangshuibengfaguan3-btn-on');
        $('#lvchikongzhixiangshuibengfakai3').removeClass('lvchikongzhixiangshuibengfakai3-btn-on');
        $('#lvchikongzhixiangshuibengfakai3').addClass('lvchikongzhixiangshuibengfakai3-btn-off');
        //
        var stepList = Global.currentIframe().document.getElementById('questionStepList');
        $(stepList).append(' <li title="水泵阀3关"><span class="item">' + (stepList.children.length + 1) + ' ,水泵阀3关</span></li>');
        Global.currentIframe().oTrain.operateStep.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "lvchikongzhixiangshuibengfaguan3",
            "opcname": "滤池水泵阀3关",
            "opcvalue": "1",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        Global.currentIframe().oTrain.currentState.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "lvchikongzhixiangshuibengfakai3",
            "opcname": "滤池水泵阀3开",
            "opcvalue": "0",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        Global.currentIframe().oTrain.currentState.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "lvchikongzhixiangshuibengfaguan3",
            "opcname": "滤池水泵阀3关",
            "opcvalue": "1",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        console.log(Global.currentIframe().oTrain.operateStep);
        Global.currentIframe().oTrain.showStepTip(stepList.children.length);
    });


    $('#fanchongxifengjixianchangyaokong1').click(function() {
        var stepList = Global.currentIframe().document.getElementById('questionStepList');
        var classname = document.getElementById('fanchongxifengjixianchangyaokong1').className;
        if (classname.indexOf('fanchongxifengjixianchangyaokong1-btn-off') >= 0) {
            $('#fanchongxifengjixianchangyaokong1').addClass('fanchongxifengjixianchangyaokong1-btn-on');
            $('#fanchongxifengjixianchangyaokong1').removeClass('fanchongxifengjixianchangyaokong1-btn-off');
            $(stepList).append(' <li title="风机1设置为遥控"><span class="item">' + (stepList.children.length + 1) + ' ,风机1设置为遥控</span></li>');
            Global.currentIframe().oTrain.operateStep.push({
                "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
                "numbertype": "0",
                "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
                "opcid": "fanchongxifengjixianchangyaokong1",
                "opcname": "风机1遥控/现场",
                "opcvalue": "1",
                "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
            });
            Global.currentIframe().oTrain.currentState.push({
                "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
                "numbertype": "0",
                "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
                "opcid": "fanchongxifengjixianchangyaokong1",
                "opcname": "风机1遥控/现场",
                "opcvalue": "1",
                "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
            });
        } else {
            $('#fanchongxifengjixianchangyaokong1').addClass('fanchongxifengjixianchangyaokong1-btn-off');
            $('#fanchongxifengjixianchangyaokong1').removeClass('fanchongxifengjixianchangyaokong1-btn-on');
            $(stepList).append(' <li title="风机1设置为现场"><span class="item">' + (stepList.children.length + 1) + ' ,风机1设置为现场</span></li>');
            Global.currentIframe().oTrain.operateStep.push({
                "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
                "numbertype": "0",
                "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
                "opcid": "fanchongxifengjixianchangyaokong1",
                "opcname": "风机1遥控/现场",
                "opcvalue": "0",
                "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
            });
            Global.currentIframe().oTrain.currentState.push({
                "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
                "numbertype": "0",
                "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
                "opcid": "fanchongxifengjixianchangyaokong1",
                "opcname": "风机1遥控/现场",
                "opcvalue": "0",
                "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
            });
        }
        console.log(Global.currentIframe().oTrain.operateStep);
        Global.currentIframe().oTrain.showStepTip(stepList.children.length);
    });


    $('#fanchongxifengjixianchangyaokong2').click(function() {
        var stepList = Global.currentIframe().document.getElementById('questionStepList');
        var classname = document.getElementById('fanchongxifengjixianchangyaokong2').className;
        if (classname.indexOf('fanchongxifengjixianchangyaokong2-btn-off') >= 0) {
            $('#fanchongxifengjixianchangyaokong2').addClass('fanchongxifengjixianchangyaokong2-btn-on');
            $('#fanchongxifengjixianchangyaokong2').removeClass('fanchongxifengjixianchangyaokong2-btn-off');
            $(stepList).append(' <li title="风机2设置为遥控"><span class="item">' + (stepList.children.length + 1) + ' ,风机2设置为遥控</span></li>');
            Global.currentIframe().oTrain.operateStep.push({
                "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
                "numbertype": "0",
                "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
                "opcid": "fanchongxifengjixianchangyaokong2",
                "opcname": "风机2遥控/现场",
                "opcvalue": "1",
                "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
            });
            Global.currentIframe().oTrain.currentState.push({
                "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
                "numbertype": "0",
                "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
                "opcid": "fanchongxifengjixianchangyaokong2",
                "opcname": "风机2遥控/现场",
                "opcvalue": "1",
                "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
            });
        } else {
            $('#fanchongxifengjixianchangyaokong2').addClass('fanchongxifengjixianchangyaokong2-btn-off');
            $('#fanchongxifengjixianchangyaokong2').removeClass('fanchongxifengjixianchangyaokong2-btn-on');
            $(stepList).append(' <li title="风机2设置为现场"><span class="item">' + (stepList.children.length + 1) + ' ,风机2设置为现场</span></li>');
            Global.currentIframe().oTrain.operateStep.push({
                "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
                "numbertype": "0",
                "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
                "opcid": "fanchongxifengjixianchangyaokong2",
                "opcname": "风机2遥控/现场",
                "opcvalue": "0",
                "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
            });
            Global.currentIframe().oTrain.currentState.push({
                "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
                "numbertype": "0",
                "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
                "opcid": "fanchongxifengjixianchangyaokong2",
                "opcname": "风机2遥控/现场",
                "opcvalue": "0",
                "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
            });
        }
        console.log(Global.currentIframe().oTrain.operateStep);
        Global.currentIframe().oTrain.showStepTip(stepList.children.length);
    });


    $('#fanchongxishuibengxianchangyaokong1').click(function() {
        var stepList = Global.currentIframe().document.getElementById('questionStepList');
        var classname = document.getElementById('fanchongxishuibengxianchangyaokong1').className;
        if (classname.indexOf('fanchongxishuibengxianchangyaokong1-btn-off') >= 0) {
            $('#fanchongxishuibengxianchangyaokong1').addClass('fanchongxishuibengxianchangyaokong1-btn-on');
            $('#fanchongxishuibengxianchangyaokong1').removeClass('fanchongxishuibengxianchangyaokong1-btn-off');
            $(stepList).append(' <li title="水泵1设置为遥控"><span class="item">' + (stepList.children.length + 1) + ' ,水泵1设置为遥控</span></li>');
            Global.currentIframe().oTrain.operateStep.push({
                "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
                "numbertype": "0",
                "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
                "opcid": "fanchongxishuibengxianchangyaokong1",
                "opcname": "水泵1遥控/现场",
                "opcvalue": "1",
                "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
            });
            Global.currentIframe().oTrain.currentState.push({
                "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
                "numbertype": "0",
                "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
                "opcid": "fanchongxishuibengxianchangyaokong1",
                "opcname": "水泵1遥控/现场",
                "opcvalue": "1",
                "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
            });
        } else {
            $('#fanchongxishuibengxianchangyaokong1').addClass('fanchongxishuibengxianchangyaokong1-btn-off');
            $('#fanchongxishuibengxianchangyaokong1').removeClass('fanchongxishuibengxianchangyaokong1-btn-on');
            $(stepList).append(' <li title="水泵1设置为现场"><span class="item">' + (stepList.children.length + 1) + ' ,水泵1设置为现场</span></li>');
            Global.currentIframe().oTrain.operateStep.push({
                "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
                "numbertype": "0",
                "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
                "opcid": "fanchongxishuibengxianchangyaokong1",
                "opcname": "水泵1遥控/现场",
                "opcvalue": "0",
                "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
            });
            Global.currentIframe().oTrain.currentState.push({
                "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
                "numbertype": "0",
                "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
                "opcid": "fanchongxishuibengxianchangyaokong1",
                "opcname": "水泵1遥控/现场",
                "opcvalue": "0",
                "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
            });
        }
        console.log(Global.currentIframe().oTrain.operateStep);
        Global.currentIframe().oTrain.showStepTip(stepList.children.length);
    });

    $('#fanchongxishuibengxianchangyaokong2').click(function() {
        var stepList = Global.currentIframe().document.getElementById('questionStepList');
        var classname = document.getElementById('fanchongxishuibengxianchangyaokong2').className;
        if (classname.indexOf('fanchongxishuibengxianchangyaokong2-btn-off') >= 0) {
            $('#fanchongxishuibengxianchangyaokong2').addClass('fanchongxishuibengxianchangyaokong2-btn-on');
            $('#fanchongxishuibengxianchangyaokong2').removeClass('fanchongxishuibengxianchangyaokong2-btn-off');
            $(stepList).append(' <li title="水泵2设置为遥控"><span class="item">' + (stepList.children.length + 1) + ' ,水泵2设置为遥控</span></li>');
            Global.currentIframe().oTrain.operateStep.push({
                "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
                "numbertype": "0",
                "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
                "opcid": "fanchongxishuibengxianchangyaokong2",
                "opcname": "水泵2遥控/现场",
                "opcvalue": "1",
                "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
            });
            Global.currentIframe().oTrain.currentState.push({
                "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
                "numbertype": "0",
                "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
                "opcid": "fanchongxishuibengxianchangyaokong2",
                "opcname": "水泵2遥控/现场",
                "opcvalue": "1",
                "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
            });
        } else {
            $('#fanchongxishuibengxianchangyaokong2').addClass('fanchongxishuibengxianchangyaokong2-btn-off');
            $('#fanchongxishuibengxianchangyaokong2').removeClass('fanchongxishuibengxianchangyaokong2-btn-on');
            $(stepList).append(' <li title="水泵2设置为现场"><span class="item">' + (stepList.children.length + 1) + ' ,水泵2设置为现场</span></li>');
            Global.currentIframe().oTrain.operateStep.push({
                "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
                "numbertype": "0",
                "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
                "opcid": "fanchongxishuibengxianchangyaokong2",
                "opcname": "水泵2遥控/现场",
                "opcvalue": "0",
                "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
            });
            Global.currentIframe().oTrain.currentState.push({
                "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
                "numbertype": "0",
                "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
                "opcid": "fanchongxishuibengxianchangyaokong2",
                "opcname": "水泵2遥控/现场",
                "opcvalue": "0",
                "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
            });
        }
        console.log(Global.currentIframe().oTrain.operateStep);
        Global.currentIframe().oTrain.showStepTip(stepList.children.length);
    });

    $('#fanchongxishuibengxianchangyaokong3').click(function() {
        var stepList = Global.currentIframe().document.getElementById('questionStepList');
        var classname = document.getElementById('fanchongxishuibengxianchangyaokong3').className;
        if (classname.indexOf('fanchongxishuibengxianchangyaokong3-btn-off') >= 0) {
            $('#fanchongxishuibengxianchangyaokong3').addClass('fanchongxishuibengxianchangyaokong3-btn-on');
            $('#fanchongxishuibengxianchangyaokong3').removeClass('fanchongxishuibengxianchangyaokong3-btn-off');
            $(stepList).append(' <li title="水泵3设置为遥控"><span class="item">' + (stepList.children.length + 1) + ' ,水泵3设置为遥控</span></li>');
            Global.currentIframe().oTrain.operateStep.push({
                "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
                "numbertype": "0",
                "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
                "opcid": "fanchongxishuibengxianchangyaokong3",
                "opcname": "水泵3遥控/现场",
                "opcvalue": "1",
                "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
            });
            Global.currentIframe().oTrain.currentState.push({
                "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
                "numbertype": "0",
                "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
                "opcid": "fanchongxishuibengxianchangyaokong3",
                "opcname": "水泵3遥控/现场",
                "opcvalue": "1",
                "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
            });
        } else {
            $('#fanchongxishuibengxianchangyaokong3').addClass('fanchongxishuibengxianchangyaokong3-btn-off');
            $('#fanchongxishuibengxianchangyaokong3').removeClass('fanchongxishuibengxianchangyaokong3-btn-on');
            $(stepList).append(' <li title="水泵3设置为现场"><span class="item">' + (stepList.children.length + 1) + ' ,水泵3设置为现场</span></li>');
            Global.currentIframe().oTrain.operateStep.push({
                "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
                "numbertype": "0",
                "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
                "opcid": "fanchongxishuibengxianchangyaokong3",
                "opcname": "水泵3遥控/现场",
                "opcvalue": "0",
                "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
            });
            Global.currentIframe().oTrain.currentState.push({
                "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
                "numbertype": "0",
                "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
                "opcid": "fanchongxishuibengxianchangyaokong3",
                "opcname": "水泵3遥控/现场",
                "opcvalue": "0",
                "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
            });
        }
        console.log(Global.currentIframe().oTrain.operateStep);
        Global.currentIframe().oTrain.showStepTip(stepList.children.length);
    });



    $('#wuninongsuochijiaobanqishoudongzidong').click(function() {
        var stepList = Global.currentIframe().document.getElementById('questionStepList');
        var classname = document.getElementById('wuninongsuochijiaobanqishoudongzidong').className;
        if (classname.indexOf('wuninongsuochijiaobanqishoudongzidong-btn-off') >= 0) {
            $('#wuninongsuochijiaobanqishoudongzidong').addClass('wuninongsuochijiaobanqishoudongzidong-btn-on');
            $('#wuninongsuochijiaobanqishoudongzidong').removeClass('wuninongsuochijiaobanqishoudongzidong-btn-off');
            $(stepList).append(' <li title="污泥浓缩池搅拌器设置为手动"><span class="item">' + (stepList.children.length + 1) + ' ,污泥浓缩池搅拌器设置为手动</span></li>');
            Global.currentIframe().oTrain.operateStep.push({
                "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
                "numbertype": "0",
                "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
                "opcid": "wuninongsuochijiaobanqishoudongzidong",
                "opcname": "污泥浓缩池搅拌器手动/自动",
                "opcvalue": "1",
                "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
            });
            Global.currentIframe().oTrain.currentState.push({
                "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
                "numbertype": "0",
                "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
                "opcid": "wuninongsuochijiaobanqishoudongzidong",
                "opcname": "污泥浓缩池搅拌器手动/自动",
                "opcvalue": "1",
                "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
            });
        } else {
            $('#wuninongsuochijiaobanqishoudongzidong').addClass('wuninongsuochijiaobanqishoudongzidong-btn-off');
            $('#wuninongsuochijiaobanqishoudongzidong').removeClass('wuninongsuochijiaobanqishoudongzidong-btn-on');
            $(stepList).append(' <li title="污泥浓缩池搅拌器设置为自动"><span class="item">' + (stepList.children.length + 1) + ' ,污泥浓缩池搅拌器设置为自动</span></li>');
            Global.currentIframe().oTrain.operateStep.push({
                "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
                "numbertype": "0",
                "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
                "opcid": "wuninongsuochijiaobanqishoudongzidong",
                "opcname": "污泥浓缩池搅拌器手动/自动",
                "opcvalue": "0",
                "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
            });
            Global.currentIframe().oTrain.currentState.push({
                "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
                "numbertype": "0",
                "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
                "opcid": "wuninongsuochijiaobanqishoudongzidong",
                "opcname": "污泥浓缩池搅拌器手动/自动",
                "opcvalue": "0",
                "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
            });
        }
        console.log(Global.currentIframe().oTrain.operateStep);
        Global.currentIframe().oTrain.showStepTip(stepList.children.length);
    });





    $('#wuninongsuochijiaobanqiqidong').click(function() {
        $('#wuninongsuochijiaobanqiyunxing').addClass('wuninongsuochijiaobanqiyunxing-btn-on');
        $('#wuninongsuochijiaobanqiyunxing').removeClass('wuninongsuochijiaobanqiyunxing-btn-off');
        //
        var stepList = Global.currentIframe().document.getElementById('questionStepList');
        $(stepList).append(' <li title="启动污泥浓缩池搅拌器"><span class="item">' + (stepList.children.length + 1) + ' ,启动污泥浓缩池搅拌器</span></li>');
        Global.currentIframe().oTrain.operateStep.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "wuninongsuochijiaobanqiqidong",
            "opcname": "污泥浓缩池搅拌器启动",
            "opcvalue": "1",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        Global.currentIframe().oTrain.currentState.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "wuninongsuochijiaobanqiyunxing",
            "opcname": "污泥浓缩池搅拌器运行",
            "opcvalue": "1",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });

        console.log(Global.currentIframe().oTrain.operateStep);
        Global.currentIframe().oTrain.showStepTip(stepList.children.length);
    });

    $('#wuninongsuochijiaobanqitingzhi').click(function() {
        $('#wuninongsuochijiaobanqiyunxing').removeClass('wuninongsuochijiaobanqiyunxing-btn-on');
        $('#wuninongsuochijiaobanqiyunxing').addClass('wuninongsuochijiaobanqiyunxing-btn-off');
        //
        var stepList = Global.currentIframe().document.getElementById('questionStepList');
        $(stepList).append(' <li title="停止污泥浓缩池搅拌器"><span class="item">' + (stepList.children.length + 1) + ' ,停止污泥浓缩池搅拌器</span></li>');
        Global.currentIframe().oTrain.operateStep.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "wuninongsuochijiaobanqitingzhi",
            "opcname": "污泥浓缩池搅拌器停止",
            "opcvalue": "1",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        Global.currentIframe().oTrain.currentState.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "wuninongsuochijiaobanqiyunxing",
            "opcname": "污泥浓缩池搅拌器运行",
            "opcvalue": "0",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });

        console.log(Global.currentIframe().oTrain.operateStep);
        Global.currentIframe().oTrain.showStepTip(stepList.children.length);
    });


    $('#wuninongsuoji1tingzhi').click(function() {
        $('#wuninongsuoji1yunxing').removeClass('wuninongsuoji1yunxing-btn-on');
        $('#wuninongsuoji1yunxing').addClass('wuninongsuoji1yunxing-btn-off');
        //
        var stepList = Global.currentIframe().document.getElementById('questionStepList');
        $(stepList).append(' <li title="停止污泥浓缩机1"><span class="item">' + (stepList.children.length + 1) + ' ,停止污泥浓缩机1</span></li>');
        Global.currentIframe().oTrain.operateStep.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "wuninongsuoji1tingzhi",
            "opcname": "污泥浓缩机1停止",
            "opcvalue": "1",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        Global.currentIframe().oTrain.currentState.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "wuninongsuoji1yunxing",
            "opcname": "污泥浓缩机1运行",
            "opcvalue": "0",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });

        console.log(Global.currentIframe().oTrain.operateStep);
        Global.currentIframe().oTrain.showStepTip(stepList.children.length);
    });
    $('#wuninongsuoji1qidong').click(function() {
        $('#wuninongsuoji1yunxing').removeClass('wuninongsuoji1yunxing-btn-off');
        $('#wuninongsuoji1yunxing').addClass('wuninongsuoji1yunxing-btn-on');
        //
        var stepList = Global.currentIframe().document.getElementById('questionStepList');
        $(stepList).append(' <li title="启动污泥浓缩机1"><span class="item">' + (stepList.children.length + 1) + ' ,启动污泥浓缩机1</span></li>');
        Global.currentIframe().oTrain.operateStep.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "wuninongsuoji1qidong",
            "opcname": "污泥浓缩机1启动",
            "opcvalue": "1",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        Global.currentIframe().oTrain.currentState.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "wuninongsuoji1yunxing",
            "opcname": "污泥浓缩机1运行",
            "opcvalue": "1",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });

        console.log(Global.currentIframe().oTrain.operateStep);
        Global.currentIframe().oTrain.showStepTip(stepList.children.length);
    });


    $('#wuninongsuoji1shoudongzidong').click(function() {
        var stepList = Global.currentIframe().document.getElementById('questionStepList');
        var classname = document.getElementById('wuninongsuoji1shoudongzidong').className;
        if (classname.indexOf('wuninongsuoji1shoudongzidong-btn-off') >= 0) {
            $('#wuninongsuoji1shoudongzidong').addClass('wuninongsuoji1shoudongzidong-btn-on');
            $('#wuninongsuoji1shoudongzidong').removeClass('wuninongsuoji1shoudongzidong-btn-off');
            $(stepList).append(' <li title="污泥浓缩机1设置为手动"><span class="item">' + (stepList.children.length + 1) + ' ,污泥浓缩机1设置为手动</span></li>');
            Global.currentIframe().oTrain.operateStep.push({
                "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
                "numbertype": "0",
                "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
                "opcid": "wuninongsuoji1shoudongzidong",
                "opcname": "污泥浓缩机1手动/自动",
                "opcvalue": "1",
                "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
            });
            Global.currentIframe().oTrain.currentState.push({
                "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
                "numbertype": "0",
                "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
                "opcid": "wuninongsuoji1shoudongzidong",
                "opcname": "污泥浓缩机1手动/自动",
                "opcvalue": "1",
                "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
            });
        } else {
            $('#wuninongsuoji1shoudongzidong').addClass('wuninongsuoji1shoudongzidong-btn-off');
            $('#wuninongsuoji1shoudongzidong').removeClass('wuninongsuoji1shoudongzidong-btn-on');
            $(stepList).append(' <li title="污泥浓缩机1设置为远程"><span class="item">' + (stepList.children.length + 1) + ' ,污泥浓缩机1设置为远程</span></li>');
            Global.currentIframe().oTrain.operateStep.push({
                "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
                "numbertype": "0",
                "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
                "opcid": "wuninongsuoji1shoudongzidong",
                "opcname": "污泥浓缩机1手动/自动",
                "opcvalue": "0",
                "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
            });
            Global.currentIframe().oTrain.currentState.push({
                "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
                "numbertype": "0",
                "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
                "opcid": "wuninongsuoji1shoudongzidong",
                "opcname": "污泥浓缩机1手动/自动",
                "opcvalue": "0",
                "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
            });
        }
        console.log(Global.currentIframe().oTrain.operateStep);
        Global.currentIframe().oTrain.showStepTip(stepList.children.length);
    });




    ///
    $('#wuninongsuoji2tingzhi').click(function() {
        $('#wuninongsuoji2yunxing').removeClass('wuninongsuoji2yunxing-btn-on');
        $('#wuninongsuoji2yunxing').addClass('wuninongsuoji2yunxing-btn-off');
        //
        var stepList = Global.currentIframe().document.getElementById('questionStepList');
        $(stepList).append(' <li title="停止污泥浓缩机2"><span class="item">' + (stepList.children.length + 1) + ' ,停止污泥浓缩机2</span></li>');
        Global.currentIframe().oTrain.operateStep.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "wuninongsuoji2tingzhi",
            "opcname": "污泥浓缩机2停止",
            "opcvalue": "1",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        Global.currentIframe().oTrain.currentState.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "wuninongsuoji2yunxing",
            "opcname": "污泥浓缩机2运行",
            "opcvalue": "0",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });

        console.log(Global.currentIframe().oTrain.operateStep);
        Global.currentIframe().oTrain.showStepTip(stepList.children.length);
    });
    $('#wuninongsuoji2qidong').click(function() {
        $('#wuninongsuoji2yunxing').removeClass('wuninongsuoji2yunxing-btn-off');
        $('#wuninongsuoji2yunxing').addClass('wuninongsuoji2yunxing-btn-on');
        //
        var stepList = Global.currentIframe().document.getElementById('questionStepList');
        $(stepList).append(' <li title="启动污泥浓缩机2"><span class="item">' + (stepList.children.length + 1) + ' ,启动污泥浓缩机2</span></li>');
        Global.currentIframe().oTrain.operateStep.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "wuninongsuoji2qidong",
            "opcname": "污泥浓缩机2启动",
            "opcvalue": "1",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        Global.currentIframe().oTrain.currentState.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "wuninongsuoji2yunxing",
            "opcname": "污泥浓缩机2运行",
            "opcvalue": "1",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });

        console.log(Global.currentIframe().oTrain.operateStep);
        Global.currentIframe().oTrain.showStepTip(stepList.children.length);
    });

    $('#wuninongsuoji2shoudongzidong').click(function() {
        var stepList = Global.currentIframe().document.getElementById('questionStepList');
        var classname = document.getElementById('wuninongsuoji2shoudongzidong').className;
        if (classname.indexOf('wuninongsuoji2shoudongzidong-btn-off') >= 0) {
            $('#wuninongsuoji2shoudongzidong').addClass('wuninongsuoji2shoudongzidong-btn-on');
            $('#wuninongsuoji2shoudongzidong').removeClass('wuninongsuoji2shoudongzidong-btn-off');
            $(stepList).append(' <li title="污泥浓缩机2设置为手动"><span class="item">' + (stepList.children.length + 1) + ' ,污泥浓缩机2设置为手动</span></li>');
            Global.currentIframe().oTrain.operateStep.push({
                "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
                "numbertype": "0",
                "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
                "opcid": "wuninongsuoji2shoudongzidong",
                "opcname": "污泥浓缩机2手动/自动",
                "opcvalue": "1",
                "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
            });
            Global.currentIframe().oTrain.currentState.push({
                "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
                "numbertype": "0",
                "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
                "opcid": "wuninongsuoji2shoudongzidong",
                "opcname": "污泥浓缩机2手动/自动",
                "opcvalue": "1",
                "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
            });
        } else {
            $('#wuninongsuoji2shoudongzidong').addClass('wuninongsuoji2shoudongzidong-btn-off');
            $('#wuninongsuoji2shoudongzidong').removeClass('wuninongsuoji2shoudongzidong-btn-on');
            $(stepList).append(' <li title="污泥浓缩机2设置为远程"><span class="item">' + (stepList.children.length + 1) + ' ,污泥浓缩机2设置为远程</span></li>');
            Global.currentIframe().oTrain.operateStep.push({
                "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
                "numbertype": "0",
                "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
                "opcid": "wuninongsuoji2shoudongzidong",
                "opcname": "污泥浓缩机2手动/自动",
                "opcvalue": "0",
                "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
            });
            Global.currentIframe().oTrain.currentState.push({
                "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
                "numbertype": "0",
                "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
                "opcid": "wuninongsuoji2shoudongzidong",
                "opcname": "污泥浓缩机2手动/自动",
                "opcvalue": "0",
                "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
            });
        }
        console.log(Global.currentIframe().oTrain.operateStep);
        Global.currentIframe().oTrain.showStepTip(stepList.children.length);
    });

    $('#chendianchi1jiaobanqishoudongzidong').click(function() {
        var stepList = Global.currentIframe().document.getElementById('questionStepList');
        var classname = document.getElementById('chendianchi1jiaobanqishoudongzidong').className;
        if (classname.indexOf('chendianchi1jiaobanqishoudongzidong-btn-off') >= 0) {
            $('#chendianchi1jiaobanqishoudongzidong').addClass('chendianchi1jiaobanqishoudongzidong-btn-on');
            $('#chendianchi1jiaobanqishoudongzidong').removeClass('chendianchi1jiaobanqishoudongzidong-btn-off');
            $(stepList).append(' <li title="沉淀池1搅拌器设置为远程"><span class="item">' + (stepList.children.length + 1) + ' ,沉淀池1搅拌器设置为远程</span></li>');
            Global.currentIframe().oTrain.operateStep.push({
                "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
                "numbertype": "0",
                "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
                "opcid": "chendianchi1jiaobanqishoudongzidong",
                "opcname": "沉淀池1搅拌器本地/远程",
                "opcvalue": "1",
                "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
            });
            Global.currentIframe().oTrain.currentState.push({
                "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
                "numbertype": "0",
                "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
                "opcid": "chendianchi1jiaobanqishoudongzidong",
                "opcname": "沉淀池1搅拌器本地/远程",
                "opcvalue": "1",
                "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
            });
        } else {
            $('#chendianchi1jiaobanqishoudongzidong').addClass('chendianchi1jiaobanqishoudongzidong-btn-off');
            $('#chendianchi1jiaobanqishoudongzidong').removeClass('chendianchi1jiaobanqishoudongzidong-btn-on');
            $(stepList).append(' <li title="沉淀池1搅拌器设置为本地"><span class="item">' + (stepList.children.length + 1) + ' ,沉淀池1搅拌器设置为本地</span></li>');
            Global.currentIframe().oTrain.operateStep.push({
                "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
                "numbertype": "0",
                "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
                "opcid": "chendianchi1jiaobanqishoudongzidong",
                "opcname": "沉淀池1搅拌器本地/远程",
                "opcvalue": "0",
                "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
            });
            Global.currentIframe().oTrain.currentState.push({
                "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
                "numbertype": "0",
                "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
                "opcid": "chendianchi1jiaobanqishoudongzidong",
                "opcname": "沉淀池1搅拌器本地/远程",
                "opcvalue": "0",
                "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
            });
        }
        console.log(Global.currentIframe().oTrain.operateStep);
        Global.currentIframe().oTrain.showStepTip(stepList.children.length);
    });

    $('#chendianchi1jiaobanqi1qidong').click(function() {
        $('#chendianchi1jiaobanqi1tingzhi').addClass('chendianchi1jiaobanqi1tingzhi-btn-off');
        $('#chendianchi1jiaobanqi1tingzhi').removeClass('chendianchi1jiaobanqi1tingzhi-btn-on');
        $('#chendianchi1jiaobanqi1qidong').addClass('chendianchi1jiaobanqi1qidong-btn-on');
        $('#chendianchi1jiaobanqi1qidong').removeClass('chendianchi1jiaobanqi1qidong-btn-off');
        //
        var stepList = Global.currentIframe().document.getElementById('questionStepList');
        $(stepList).append(' <li title="沉淀池1搅拌器1启动"><span class="item">' + (stepList.children.length + 1) + ' ,沉淀池1搅拌器1启动</span></li>');
        Global.currentIframe().oTrain.operateStep.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "chendianchi1jiaobanqi1qidong",
            "opcname": "沉淀池1搅拌器1启动",
            "opcvalue": "1",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        Global.currentIframe().oTrain.currentState.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "chendianchi1jiaobanqi1qidong",
            "opcname": "沉淀池1搅拌器1启动",
            "opcvalue": "1",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        Global.currentIframe().oTrain.currentState.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "chendianchi1jiaobanqi1tingzhi",
            "opcname": "沉淀池1搅拌器1停止",
            "opcvalue": "0",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        console.log(Global.currentIframe().oTrain.operateStep);
        Global.currentIframe().oTrain.showStepTip(stepList.children.length);
    });
    $('#chendianchi1jiaobanqi1tingzhi').click(function() {
        $('#chendianchi1jiaobanqi1qidong').addClass('chendianchi1jiaobanqi1qidong-btn-off');
        $('#chendianchi1jiaobanqi1qidong').removeClass('chendianchi1jiaobanqi1qidong-btn-on');
        $('#chendianchi1jiaobanqi1tingzhi').addClass('chendianchi1jiaobanqi1tingzhi-btn-on');
        $('#chendianchi1jiaobanqi1tingzhi').removeClass('chendianchi1jiaobanqi1tingzhi-btn-off');
        //
        var stepList = Global.currentIframe().document.getElementById('questionStepList');
        $(stepList).append(' <li title="沉淀池1搅拌器1停止"><span class="item">' + (stepList.children.length + 1) + ' ,沉淀池1搅拌器1停止</span></li>');
        Global.currentIframe().oTrain.operateStep.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "chendianchi1jiaobanqi1tingzhi",
            "opcname": "沉淀池1搅拌器1停止",
            "opcvalue": "1",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        Global.currentIframe().oTrain.currentState.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "chendianchi1jiaobanqi1qidong",
            "opcname": "沉淀池1搅拌器1启动",
            "opcvalue": "0",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        Global.currentIframe().oTrain.currentState.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "chendianchi1jiaobanqi1tingzhi",
            "opcname": "沉淀池1搅拌器1停止",
            "opcvalue": "1",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        console.log(Global.currentIframe().oTrain.operateStep);
        Global.currentIframe().oTrain.showStepTip(stepList.children.length);
    });

    $('#chendianchi1jiaobanqi2qidong').click(function() {
        $('#chendianchi1jiaobanqi2tingzhi').addClass('chendianchi1jiaobanqi2tingzhi-btn-off');
        $('#chendianchi1jiaobanqi2tingzhi').removeClass('chendianchi1jiaobanqi2tingzhi-btn-on');
        $('#chendianchi1jiaobanqi2qidong').addClass('chendianchi1jiaobanqi2qidong-btn-on');
        $('#chendianchi1jiaobanqi2qidong').removeClass('chendianchi1jiaobanqi2qidong-btn-off');
        //
        var stepList = Global.currentIframe().document.getElementById('questionStepList');
        $(stepList).append(' <li title="沉淀池1搅拌器2启动"><span class="item">' + (stepList.children.length + 1) + ' ,沉淀池1搅拌器2启动</span></li>');
        Global.currentIframe().oTrain.operateStep.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "chendianchi1jiaobanqi2qidong",
            "opcname": "沉淀池1搅拌器2启动",
            "opcvalue": "1",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        Global.currentIframe().oTrain.currentState.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "chendianchi1jiaobanqi2qidong",
            "opcname": "沉淀池1搅拌器2启动",
            "opcvalue": "1",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        Global.currentIframe().oTrain.currentState.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "chendianchi1jiaobanqi2tingzhi",
            "opcname": "沉淀池1搅拌器2停止",
            "opcvalue": "0",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        console.log(Global.currentIframe().oTrain.operateStep);
        Global.currentIframe().oTrain.showStepTip(stepList.children.length);
    });

    $('#chendianchi1jiaobanqi2tingzhi').click(function() {
        $('#chendianchi1jiaobanqi2qidong').addClass('chendianchi1jiaobanqi2qidong-btn-off');
        $('#chendianchi1jiaobanqi2qidong').removeClass('chendianchi1jiaobanqi2qidong-btn-on');
        $('#chendianchi1jiaobanqi2tingzhi').addClass('chendianchi1jiaobanqi2tingzhi-btn-on');
        $('#chendianchi1jiaobanqi2tingzhi').removeClass('chendianchi1jiaobanqi2tingzhi-btn-off');
        //
        var stepList = Global.currentIframe().document.getElementById('questionStepList');
        $(stepList).append(' <li title="沉淀池1搅拌器2停止"><span class="item">' + (stepList.children.length + 1) + ' ,沉淀池1搅拌器2停止</span></li>');
        Global.currentIframe().oTrain.operateStep.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "chendianchi1jiaobanqi2tingzhi",
            "opcname": "沉淀池1搅拌器2停止",
            "opcvalue": "1",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        Global.currentIframe().oTrain.currentState.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "chendianchi1jiaobanqi2qidong",
            "opcname": "沉淀池1搅拌器2启动",
            "opcvalue": "0",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        Global.currentIframe().oTrain.currentState.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "chendianchi1jiaobanqi2tingzhi",
            "opcname": "沉淀池1搅拌器2停止",
            "opcvalue": "1",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        console.log(Global.currentIframe().oTrain.operateStep);
        Global.currentIframe().oTrain.showStepTip(stepList.children.length);
    });

    $('#chendianchi2jiaobanqishoudongzidong').click(function() {
        var stepList = Global.currentIframe().document.getElementById('questionStepList');
        var classname = document.getElementById('chendianchi2jiaobanqishoudongzidong').className;
        if (classname.indexOf('chendianchi2jiaobanqishoudongzidong-btn-off') >= 0) {
            $('#chendianchi2jiaobanqishoudongzidong').addClass('chendianchi2jiaobanqishoudongzidong-btn-on');
            $('#chendianchi2jiaobanqishoudongzidong').removeClass('chendianchi2jiaobanqishoudongzidong-btn-off');
            $(stepList).append(' <li title="沉淀池2搅拌器设置为手动"><span class="item">' + (stepList.children.length + 1) + ' ,沉淀池2搅拌器设置为手动</span></li>');
            Global.currentIframe().oTrain.operateStep.push({
                "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
                "numbertype": "0",
                "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
                "opcid": "chendianchi2jiaobanqishoudongzidong",
                "opcname": "沉淀池2搅拌器手动/自动",
                "opcvalue": "1",
                "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
            });
            Global.currentIframe().oTrain.currentState.push({
                "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
                "numbertype": "0",
                "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
                "opcid": "chendianchi2jiaobanqishoudongzidong",
                "opcname": "沉淀池2搅拌器手动/自动",
                "opcvalue": "1",
                "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
            });
        } else {
            $('#chendianchi2jiaobanqishoudongzidong').addClass('chendianchi2jiaobanqishoudongzidong-btn-off');
            $('#chendianchi2jiaobanqishoudongzidong').removeClass('chendianchi2jiaobanqishoudongzidong-btn-on');
            $(stepList).append(' <li title="沉淀池2搅拌器设置为自动"><span class="item">' + (stepList.children.length + 1) + ' ,沉淀池2搅拌器设置为自动</span></li>');
            Global.currentIframe().oTrain.operateStep.push({
                "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
                "numbertype": "0",
                "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
                "opcid": "chendianchi2jiaobanqishoudongzidong",
                "opcname": "沉淀池2搅拌器手动/自动",
                "opcvalue": "0",
                "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
            });
            Global.currentIframe().oTrain.currentState.push({
                "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
                "numbertype": "0",
                "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
                "opcid": "chendianchi2jiaobanqishoudongzidong",
                "opcname": "沉淀池2搅拌器手动/自动",
                "opcvalue": "0",
                "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
            });
        }
        console.log(Global.currentIframe().oTrain.operateStep);
        Global.currentIframe().oTrain.showStepTip(stepList.children.length);
    });



    $('#chendianchi2jiaobanqiqidong').click(function() {
        $('#chendianchi2jiaobanqiyunxing').addClass('chendianchi2jiaobanqiyunxing-btn-on');
        $('#chendianchi2jiaobanqiyunxing').removeClass('chendianchi2jiaobanqiyunxing-btn-off');
        //
        var stepList = Global.currentIframe().document.getElementById('questionStepList');
        $(stepList).append(' <li title="沉淀池2搅拌器启动"><span class="item">' + (stepList.children.length + 1) + ' ,沉淀池2搅拌器启动</span></li>');
        Global.currentIframe().oTrain.operateStep.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "chendianchi2jiaobanqiqidong",
            "opcname": "沉淀池2搅拌器启动",
            "opcvalue": "1",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        Global.currentIframe().oTrain.currentState.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "chendianchi2jiaobanqiyunxing",
            "opcname": "沉淀池2搅拌器运行",
            "opcvalue": "1",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });

        console.log(Global.currentIframe().oTrain.operateStep);
        Global.currentIframe().oTrain.showStepTip(stepList.children.length);
    });

    $('#chendianchi2jiaobanqitingzhi').click(function() {
        $('#chendianchi2jiaobanqiyunxing').addClass('chendianchi2jiaobanqiyunxing-btn-off');
        $('#chendianchi2jiaobanqiyunxing').removeClass('chendianchi2jiaobanqiyunxing-btn-on');
        //
        var stepList = Global.currentIframe().document.getElementById('questionStepList');
        $(stepList).append(' <li title="沉淀池2搅拌器停止"><span class="item">' + (stepList.children.length + 1) + ' ,沉淀池2搅拌器停止</span></li>');
        Global.currentIframe().oTrain.operateStep.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "chendianchi2jiaobanqitingzhi",
            "opcname": "沉淀池2搅拌器停止",
            "opcvalue": "1",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        Global.currentIframe().oTrain.currentState.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "chendianchi2jiaobanqiyunxing",
            "opcname": "沉淀池2搅拌器运行",
            "opcvalue": "0",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });

        console.log(Global.currentIframe().oTrain.operateStep);
        Global.currentIframe().oTrain.showStepTip(stepList.children.length);
    });


    $('#chendianchi1painicheshoudongzidong').click(function() {
        var stepList = Global.currentIframe().document.getElementById('questionStepList');
        var classname = document.getElementById('chendianchi1painicheshoudongzidong').className;
        if (classname.indexOf('chendianchi1painicheshoudongzidong-btn-off') >= 0) {
            $('#chendianchi1painicheshoudongzidong').addClass('chendianchi1painicheshoudongzidong-btn-on');
            $('#chendianchi1painicheshoudongzidong').removeClass('chendianchi1painicheshoudongzidong-btn-off');
            $(stepList).append(' <li title="沉淀池1排泥车设置为手动"><span class="item">' + (stepList.children.length + 1) + ' ,沉淀池1排泥车设置为手动</span></li>');
            Global.currentIframe().oTrain.operateStep.push({
                "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
                "numbertype": "0",
                "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
                "opcid": "chendianchi1painicheshoudongzidong",
                "opcname": "沉淀池1排泥车手动/自动",
                "opcvalue": "1",
                "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
            });
            Global.currentIframe().oTrain.currentState.push({
                "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
                "numbertype": "0",
                "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
                "opcid": "chendianchi1painicheshoudongzidong",
                "opcname": "沉淀池1排泥车手动/自动",
                "opcvalue": "1",
                "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
            });
        } else {
            $('#chendianchi1painicheshoudongzidong').addClass('chendianchi1painicheshoudongzidong-btn-off');
            $('#chendianchi1painicheshoudongzidong').removeClass('chendianchi1painicheshoudongzidong-btn-on');
            $(stepList).append(' <li title="沉淀池1排泥车设置为自动"><span class="item">' + (stepList.children.length + 1) + ' ,沉淀池1排泥车设置为自动</span></li>');
            Global.currentIframe().oTrain.operateStep.push({
                "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
                "numbertype": "0",
                "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
                "opcid": "chendianchi1painicheshoudongzidong",
                "opcname": "沉淀池1排泥车手动/自动",
                "opcvalue": "0",
                "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
            });
            Global.currentIframe().oTrain.currentState.push({
                "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
                "numbertype": "0",
                "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
                "opcid": "chendianchi1painicheshoudongzidong",
                "opcname": "沉淀池1排泥车手动/自动",
                "opcvalue": "0",
                "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
            });
        }
        console.log(Global.currentIframe().oTrain.operateStep);
        Global.currentIframe().oTrain.showStepTip(stepList.children.length);
    });

    $('#chendianchi1painicheqianjin').click(function() {
        $('#chendianchi1painicheqianjin').removeClass('chendianchi1painicheqianjin-btn-off');
        $('#chendianchi1painicheqianjin').addClass('chendianchi1painicheqianjin-btn-on');
        $('#chendianchi1painichehoutui').removeClass('chendianchi1painichehoutui-btn-on');
        $('#chendianchi1painichehoutui').addClass('chendianchi1painichehoutui-btn-off');
        $('#chendianchi1painichetingzhi').removeClass('chendianchi1painichetingzhi-btn-on');
        $('#chendianchi1painichetingzhi').addClass('chendianchi1painichetingzhi-btn-off');
        //
        var stepList = Global.currentIframe().document.getElementById('questionStepList');
        $(stepList).append(' <li title="沉淀池1排泥车前进"><span class="item">' + (stepList.children.length + 1) + ' ,沉淀池1排泥车前进</span></li>');
        Global.currentIframe().oTrain.operateStep.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "chendianchi1painicheqianjin",
            "opcname": "沉淀池1排泥车前进",
            "opcvalue": "1",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        Global.currentIframe().oTrain.currentState.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "chendianchi1painicheqianjin",
            "opcname": "沉淀池1排泥车前进",
            "opcvalue": "1",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        Global.currentIframe().oTrain.currentState.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "chendianchi1painichehoutui",
            "opcname": "沉淀池1排泥车后退",
            "opcvalue": "0",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        Global.currentIframe().oTrain.currentState.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "chendianchi1painichetingzhi",
            "opcname": "沉淀池1排泥车停止",
            "opcvalue": "0",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        console.log(Global.currentIframe().oTrain.operateStep);
        Global.currentIframe().oTrain.showStepTip(stepList.children.length);
    });


    $('#chendianchi1painichehoutui').click(function() {
        $('#chendianchi1painichehoutui').removeClass('chendianchi1painichehoutui-btn-off');
        $('#chendianchi1painichehoutui').addClass('chendianchi1painichehoutui-btn-on');
        $('#chendianchi1painicheqianjin').removeClass('chendianchi1painicheqianjin-btn-on');
        $('#chendianchi1painicheqianjin').addClass('chendianchi1painicheqianjin-btn-off');
        $('#chendianchi1painichetingzhi').removeClass('chendianchi1painichetingzhi-btn-on');
        $('#chendianchi1painichetingzhi').addClass('chendianchi1painichetingzhi-btn-off');
        //
        var stepList = Global.currentIframe().document.getElementById('questionStepList');
        $(stepList).append(' <li title="沉淀池1排泥车后退"><span class="item">' + (stepList.children.length + 1) + ' ,沉淀池1排泥车后退</span></li>');
        Global.currentIframe().oTrain.operateStep.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "chendianchi1painichehoutui",
            "opcname": "沉淀池1排泥车后退",
            "opcvalue": "1",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        Global.currentIframe().oTrain.currentState.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "chendianchi1painicheqianjin",
            "opcname": "沉淀池1排泥车前进",
            "opcvalue": "0",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        Global.currentIframe().oTrain.currentState.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "chendianchi1painichehoutui",
            "opcname": "沉淀池1排泥车后退",
            "opcvalue": "1",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        Global.currentIframe().oTrain.currentState.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "chendianchi1painichetingzhi",
            "opcname": "沉淀池1排泥车停止",
            "opcvalue": "0",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        console.log(Global.currentIframe().oTrain.operateStep);
        Global.currentIframe().oTrain.showStepTip(stepList.children.length);
    });

    $('#chendianchi1painichetingzhi').click(function() {
        $('#chendianchi1painichetingzhi').removeClass('chendianchi1painichetingzhi-btn-off');
        $('#chendianchi1painichetingzhi').addClass('chendianchi1painichetingzhi-btn-on');
        $('#chendianchi1painicheqianjin').removeClass('chendianchi1painicheqianjin-btn-on');
        $('#chendianchi1painicheqianjin').addClass('chendianchi1painicheqianjin-btn-off');
        $('#chendianchi1painichehoutui').removeClass('chendianchi1painichehoutui-btn-on');
        $('#chendianchi1painichehoutui').addClass('chendianchi1painichehoutui-btn-off');
        //
        var stepList = Global.currentIframe().document.getElementById('questionStepList');
        $(stepList).append(' <li title="沉淀池1排泥车停止"><span class="item">' + (stepList.children.length + 1) + ' ,沉淀池1排泥车停止</span></li>');
        Global.currentIframe().oTrain.operateStep.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "chendianchi1painichetingzhi",
            "opcname": "沉淀池1排泥车停止",
            "opcvalue": "1",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        Global.currentIframe().oTrain.currentState.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "chendianchi1painicheqianjin",
            "opcname": "沉淀池1排泥车前进",
            "opcvalue": "0",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        Global.currentIframe().oTrain.currentState.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "chendianchi1painichehoutui",
            "opcname": "沉淀池1排泥车后退",
            "opcvalue": "0",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        Global.currentIframe().oTrain.currentState.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "chendianchi1painichetingzhi",
            "opcname": "沉淀池1排泥车停止",
            "opcvalue": "1",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        console.log(Global.currentIframe().oTrain.operateStep);
        Global.currentIframe().oTrain.showStepTip(stepList.children.length);
    });


    $('#chendianchi1painichedianchifakai').click(function() {
        $('#chendianchi1painichedianchifakai').removeClass('chendianchi1painichedianchifakai-btn-off');
        $('#chendianchi1painichedianchifakai').addClass('chendianchi1painichedianchifakai-btn-on');
        $('#chendianchi1painichedianchifaguan').removeClass('chendianchi1painichedianchifaguan-btn-on');
        $('#chendianchi1painichedianchifaguan').addClass('chendianchi1painichedianchifaguan-btn-off');
        //
        var stepList = Global.currentIframe().document.getElementById('questionStepList');
        $(stepList).append(' <li title="沉淀池1排泥车电磁阀开"><span class="item">' + (stepList.children.length + 1) + ' ,沉淀池1排泥车电磁阀开</span></li>');
        Global.currentIframe().oTrain.operateStep.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "chendianchi1painichedianchifakai",
            "opcname": "沉淀池1排泥车电磁阀开",
            "opcvalue": "1",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        Global.currentIframe().oTrain.currentState.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "chendianchi1painichedianchifakai",
            "opcname": "沉淀池1排泥车电磁阀开",
            "opcvalue": "1",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        Global.currentIframe().oTrain.currentState.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "chendianchi1painichedianchifaguan",
            "opcname": "沉淀池1排泥车电磁阀关",
            "opcvalue": "0",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });

        console.log(Global.currentIframe().oTrain.operateStep);
        Global.currentIframe().oTrain.showStepTip(stepList.children.length);
    });


    $('#chendianchi1painichedianchifaguan').click(function() {
        $('#chendianchi1painichedianchifaguan').removeClass('chendianchi1painichedianchifaguan-btn-off');
        $('#chendianchi1painichedianchifaguan').addClass('chendianchi1painichedianchifaguan-btn-on');
        $('#chendianchi1painichedianchifakai').removeClass('chendianchi1painichedianchifakai-btn-on');
        $('#chendianchi1painichedianchifakai').addClass('chendianchi1painichedianchifakai-btn-off');
        //
        var stepList = Global.currentIframe().document.getElementById('questionStepList');
        $(stepList).append(' <li title="沉淀池1排泥车电磁阀关"><span class="item">' + (stepList.children.length + 1) + ' ,沉淀池1排泥车电磁阀关</span></li>');
        Global.currentIframe().oTrain.operateStep.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "chendianchi1painichedianchifaguan",
            "opcname": "沉淀池1排泥车电磁阀关",
            "opcvalue": "1",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        Global.currentIframe().oTrain.currentState.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "chendianchi1painichedianchifakai",
            "opcname": "沉淀池1排泥车电磁阀开",
            "opcvalue": "0",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        Global.currentIframe().oTrain.currentState.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "chendianchi1painichedianchifaguan",
            "opcname": "沉淀池1排泥车电磁阀关",
            "opcvalue": "1",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });

        console.log(Global.currentIframe().oTrain.operateStep);
        Global.currentIframe().oTrain.showStepTip(stepList.children.length);
    });


    $('#chendianchi1painicheqianshuibengkai').click(function() {
        $('#chendianchi1painicheqianshuibengkai').removeClass('chendianchi1painicheqianshuibengkai-btn-off');
        $('#chendianchi1painicheqianshuibengkai').addClass('chendianchi1painicheqianshuibengkai-btn-on');
        $('#chendianchi1painicheqianshuibengguan').removeClass('chendianchi1painicheqianshuibengguan-btn-on');
        $('#chendianchi1painicheqianshuibengguan').addClass('chendianchi1painicheqianshuibengguan-btn-off');
        //
        var stepList = Global.currentIframe().document.getElementById('questionStepList');
        $(stepList).append(' <li title="沉淀池1排泥车潜水泵开"><span class="item">' + (stepList.children.length + 1) + ' ,沉淀池1排泥车潜水泵开</span></li>');
        Global.currentIframe().oTrain.operateStep.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "chendianchi1painicheqianshuibengkai",
            "opcname": "沉淀池1排泥车潜水泵开",
            "opcvalue": "1",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        Global.currentIframe().oTrain.currentState.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "chendianchi1painicheqianshuibengkai",
            "opcname": "沉淀池1排泥车潜水泵开",
            "opcvalue": "1",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        Global.currentIframe().oTrain.currentState.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "chendianchi1painicheqianshuibengguan",
            "opcname": "沉淀池1排泥车潜水泵关",
            "opcvalue": "0",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });

        console.log(Global.currentIframe().oTrain.operateStep);
        Global.currentIframe().oTrain.showStepTip(stepList.children.length);
    });

    $('#chendianchi1painicheqianshuibengguan').click(function() {
        $('#chendianchi1painicheqianshuibengguan').removeClass('chendianchi1painicheqianshuibengguan-btn-off');
        $('#chendianchi1painicheqianshuibengguan').addClass('chendianchi1painicheqianshuibengguan-btn-on');
        $('#chendianchi1painicheqianshuibengkai').removeClass('chendianchi1painicheqianshuibengkai-btn-on');
        $('#chendianchi1painicheqianshuibengkai').addClass('chendianchi1painicheqianshuibengkai-btn-off');
        //
        var stepList = Global.currentIframe().document.getElementById('questionStepList');
        $(stepList).append(' <li title="沉淀池1排泥车潜水泵关"><span class="item">' + (stepList.children.length + 1) + ' ,沉淀池1排泥车潜水泵关</span></li>');
        Global.currentIframe().oTrain.operateStep.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "chendianchi1painicheqianshuibengguan",
            "opcname": "沉淀池1排泥车潜水泵关",
            "opcvalue": "1",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        Global.currentIframe().oTrain.currentState.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "chendianchi1painicheqianshuibengkai",
            "opcname": "沉淀池1排泥车潜水泵开",
            "opcvalue": "0",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        Global.currentIframe().oTrain.currentState.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "chendianchi1painicheqianshuibengguan",
            "opcname": "沉淀池1排泥车潜水泵关",
            "opcvalue": "1",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });

        console.log(Global.currentIframe().oTrain.operateStep);
        Global.currentIframe().oTrain.showStepTip(stepList.children.length);
    });



    $('#chendianchi2painichejiudiyuancheng').click(function() {
        var stepList = Global.currentIframe().document.getElementById('questionStepList');
        var classname = document.getElementById('chendianchi2painichejiudiyuancheng').className;
        if (classname.indexOf('chendianchi2painichejiudiyuancheng-btn-off') >= 0) {
            $('#chendianchi2painichejiudiyuancheng').addClass('chendianchi2painichejiudiyuancheng-btn-on');
            $('#chendianchi2painichejiudiyuancheng').removeClass('chendianchi2painichejiudiyuancheng-btn-off');
            $(stepList).append(' <li title="沉淀池2刮泥机设置为就地"><span class="item">' + (stepList.children.length + 1) + ' ,沉淀池2刮泥机设置为就地</span></li>');
            Global.currentIframe().oTrain.operateStep.push({
                "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
                "numbertype": "0",
                "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
                "opcid": "chendianchi2painichejiudiyuancheng",
                "opcname": "沉淀池2刮泥机就地/远程",
                "opcvalue": "1",
                "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
            });
            Global.currentIframe().oTrain.currentState.push({
                "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
                "numbertype": "0",
                "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
                "opcid": "chendianchi2painichejiudiyuancheng",
                "opcname": "沉淀池2刮泥机就地/远程",
                "opcvalue": "1",
                "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
            });
        } else {
            $('#chendianchi2painichejiudiyuancheng').addClass('chendianchi2painichejiudiyuancheng-btn-off');
            $('#chendianchi2painichejiudiyuancheng').removeClass('chendianchi2painichejiudiyuancheng-btn-on');
            $(stepList).append(' <li title="沉淀池2刮泥机设置为远程"><span class="item">' + (stepList.children.length + 1) + ' ,沉淀池2刮泥机设置为远程</span></li>');
            Global.currentIframe().oTrain.operateStep.push({
                "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
                "numbertype": "0",
                "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
                "opcid": "chendianchi2painichejiudiyuancheng",
                "opcname": "沉淀池2刮泥机就地/远程",
                "opcvalue": "0",
                "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
            });
            Global.currentIframe().oTrain.currentState.push({
                "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
                "numbertype": "0",
                "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
                "opcid": "chendianchi2painichejiudiyuancheng",
                "opcname": "沉淀池2刮泥机就地/远程",
                "opcvalue": "0",
                "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
            });
        }
        console.log(Global.currentIframe().oTrain.operateStep);
        Global.currentIframe().oTrain.showStepTip(stepList.children.length);
    });

    $('#chendianchi2painicheshoudongzidong').click(function() {
        var stepList = Global.currentIframe().document.getElementById('questionStepList');
        var classname = document.getElementById('chendianchi2painicheshoudongzidong').className;
        if (classname.indexOf('chendianchi2painicheshoudongzidong-btn-off') >= 0) {
            $('#chendianchi2painicheshoudongzidong').addClass('chendianchi2painicheshoudongzidong-btn-on');
            $('#chendianchi2painicheshoudongzidong').removeClass('chendianchi2painicheshoudongzidong-btn-off');
            $(stepList).append(' <li title="沉淀池2刮泥机设置为手动"><span class="item">' + (stepList.children.length + 1) + ' ,沉淀池2刮泥机设置为手动</span></li>');
            Global.currentIframe().oTrain.operateStep.push({
                "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
                "numbertype": "0",
                "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
                "opcid": "chendianchi2painicheshoudongzidong",
                "opcname": "沉淀池2刮泥机手动/自动",
                "opcvalue": "1",
                "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
            });
            Global.currentIframe().oTrain.currentState.push({
                "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
                "numbertype": "0",
                "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
                "opcid": "chendianchi2painicheshoudongzidong",
                "opcname": "沉淀池2刮泥机手动/自动",
                "opcvalue": "1",
                "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
            });
        } else {
            $('#chendianchi2painicheshoudongzidong').addClass('chendianchi2painicheshoudongzidong-btn-off');
            $('#chendianchi2painicheshoudongzidong').removeClass('chendianchi2painicheshoudongzidong-btn-on');
            $(stepList).append(' <li title="沉淀池2刮泥机设置为自动"><span class="item">' + (stepList.children.length + 1) + ' ,沉淀池2刮泥机设置为自动</span></li>');
            Global.currentIframe().oTrain.operateStep.push({
                "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
                "numbertype": "0",
                "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
                "opcid": "chendianchi2painicheshoudongzidong",
                "opcname": "沉淀池2刮泥机手动/自动",
                "opcvalue": "0",
                "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
            });
            Global.currentIframe().oTrain.currentState.push({
                "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
                "numbertype": "0",
                "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
                "opcid": "chendianchi2painicheshoudongzidong",
                "opcname": "沉淀池2刮泥机手动/自动",
                "opcvalue": "0",
                "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
            });
        }
        console.log(Global.currentIframe().oTrain.operateStep);
        Global.currentIframe().oTrain.showStepTip(stepList.children.length);
    });


    $('#chendianchi2painichezhengzou').click(function() {
        $('#chendianchi2painichezhengzouyunxing').removeClass('chendianchi2painichezhengzouyunxing-btn-off');
        $('#chendianchi2painichezhengzouyunxing').addClass('chendianchi2painichezhengzouyunxing-btn-on');
        $('#chendianchi2painichefanzouyunxing').removeClass('chendianchi2painichefanzouyunxing-btn-on');
        $('#chendianchi2painichefanzouyunxing').addClass('chendianchi2painichefanzouyunxing-btn-off');
        //
        var stepList = Global.currentIframe().document.getElementById('questionStepList');
        $(stepList).append(' <li title="沉淀池2刮泥机正走"><span class="item">' + (stepList.children.length + 1) + ' ,沉淀池2刮泥机正走</span></li>');
        Global.currentIframe().oTrain.operateStep.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "chendianchi2painichezhengzou",
            "opcname": "沉淀池2刮泥机正走",
            "opcvalue": "1",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        Global.currentIframe().oTrain.currentState.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "chendianchi2painichefanzouyunxing",
            "opcname": "沉淀池2刮泥机反走指示灯",
            "opcvalue": "0",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        Global.currentIframe().oTrain.currentState.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "chendianchi2painichezhengzouyunxing",
            "opcname": "沉淀池2刮泥机正走指示灯",
            "opcvalue": "1",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });

        console.log(Global.currentIframe().oTrain.operateStep);
        Global.currentIframe().oTrain.showStepTip(stepList.children.length);
    });

    $('#chendianchi2painichefanzou').click(function() {
        $('#chendianchi2painichezhengzouyunxing').addClass('chendianchi2painichezhengzouyunxing-btn-off');
        $('#chendianchi2painichezhengzouyunxing').removeClass('chendianchi2painichezhengzouyunxing-btn-on');
        $('#chendianchi2painichefanzouyunxing').addClass('chendianchi2painichefanzouyunxing-btn-on');
        $('#chendianchi2painichefanzouyunxing').removeClass('chendianchi2painichefanzouyunxing-btn-off');
        //
        var stepList = Global.currentIframe().document.getElementById('questionStepList');
        $(stepList).append(' <li title="沉淀池2刮泥机反走"><span class="item">' + (stepList.children.length + 1) + ' ,沉淀池2刮泥机反走</span></li>');
        Global.currentIframe().oTrain.operateStep.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "chendianchi2painichefanzou",
            "opcname": "沉淀池2刮泥机反走",
            "opcvalue": "1",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        Global.currentIframe().oTrain.currentState.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "chendianchi2painichefanzouyunxing",
            "opcname": "沉淀池2刮泥机反走指示灯",
            "opcvalue": "1",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        Global.currentIframe().oTrain.currentState.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "chendianchi2painichezhengzouyunxing",
            "opcname": "沉淀池2刮泥机正走指示灯",
            "opcvalue": "0",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });

        console.log(Global.currentIframe().oTrain.operateStep);
        Global.currentIframe().oTrain.showStepTip(stepList.children.length);
    });

    $('#chendianchi2painichetingzhi').click(function() {
        $('#chendianchi2painichezhengzouyunxing').addClass('chendianchi2painichezhengzouyunxing-btn-off');
        $('#chendianchi2painichezhengzouyunxing').removeClass('chendianchi2painichezhengzouyunxing-btn-on');
        $('#chendianchi2painichefanzouyunxing').removeClass('chendianchi2painichefanzouyunxing-btn-on');
        $('#chendianchi2painichefanzouyunxing').addClass('chendianchi2painichefanzouyunxing-btn-off');
        //
        var stepList = Global.currentIframe().document.getElementById('questionStepList');
        $(stepList).append(' <li title="沉淀池2刮泥机停止"><span class="item">' + (stepList.children.length + 1) + ' ,沉淀池2刮泥机停止</span></li>');
        Global.currentIframe().oTrain.operateStep.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "chendianchi2painichetingzhi",
            "opcname": "沉淀池2刮泥机停止",
            "opcvalue": "1",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        Global.currentIframe().oTrain.currentState.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "chendianchi2painichefanzouyunxing",
            "opcname": "沉淀池2刮泥机反走指示灯",
            "opcvalue": "0",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        Global.currentIframe().oTrain.currentState.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "chendianchi2painichezhengzouyunxing",
            "opcname": "沉淀池2刮泥机正走指示灯",
            "opcvalue": "0",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });

        console.log(Global.currentIframe().oTrain.operateStep);
        Global.currentIframe().oTrain.showStepTip(stepList.children.length);
    });


    $('#chendianchi2painichezhenkongbengqidong1').click(function() {
        $('#chendianchi2painichezhenkongbeng1yunxing').addClass('chendianchi2painichezhenkongbeng1yunxing-btn-on');
        $('#chendianchi2painichezhenkongbeng1yunxing').removeClass('chendianchi2painichezhenkongbeng1yunxing-btn-off');
        //
        var stepList = Global.currentIframe().document.getElementById('questionStepList');
        $(stepList).append(' <li title="沉淀池2真空泵1启动"><span class="item">' + (stepList.children.length + 1) + ' ,沉淀池2真空泵1启动</span></li>');
        Global.currentIframe().oTrain.operateStep.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "chendianchi2painichezhenkongbengqidong1",
            "opcname": "沉淀池2刮泥机真空泵1启动",
            "opcvalue": "1",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        Global.currentIframe().oTrain.currentState.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "chendianchi2painichezhenkongbeng1yunxing",
            "opcname": "沉淀池2刮泥机真空泵1运行",
            "opcvalue": "1",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        console.log(Global.currentIframe().oTrain.operateStep);
        Global.currentIframe().oTrain.showStepTip(stepList.children.length);
    });



    $('#chendianchi2painichezhenkongbengqidong2').click(function() {
        $('#chendianchi2painichezhenkongbeng2yunxing').addClass('chendianchi2painichezhenkongbeng2yunxing-btn-on');
        $('#chendianchi2painichezhenkongbeng2yunxing').removeClass('chendianchi2painichezhenkongbeng2yunxing-btn-off');
        //
        var stepList = Global.currentIframe().document.getElementById('questionStepList');
        $(stepList).append(' <li title="沉淀池2真空泵2启动"><span class="item">' + (stepList.children.length + 1) + ' ,沉淀池2真空泵2启动</span></li>');
        Global.currentIframe().oTrain.operateStep.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "chendianchi2painichezhenkongbengqidong2",
            "opcname": "沉淀池2刮泥机真空泵2启动",
            "opcvalue": "0",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        Global.currentIframe().oTrain.currentState.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "chendianchi2painichezhenkongbeng2yunxing",
            "opcname": "沉淀池2刮泥机真空泵2运行",
            "opcvalue": "1",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        console.log(Global.currentIframe().oTrain.operateStep);
        Global.currentIframe().oTrain.showStepTip(stepList.children.length);
    });

    $('#chendianchi2painichezhenkongbengtingzhi2').click(function() {
        $('#chendianchi2painichezhenkongbeng2yunxing').addClass('chendianchi2painichezhenkongbeng2yunxing-btn-off');
        $('#chendianchi2painichezhenkongbeng2yunxing').removeClass('chendianchi2painichezhenkongbeng2yunxing-btn-on');
        //
        var stepList = Global.currentIframe().document.getElementById('questionStepList');
        $(stepList).append(' <li title="沉淀池2真空泵2停止"><span class="item">' + (stepList.children.length + 1) + ' ,沉淀池2真空泵2停止</span></li>');
        Global.currentIframe().oTrain.operateStep.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "chendianchi2painichezhenkongbengtingzhi2",
            "opcname": "沉淀池2刮泥机真空泵2停止",
            "opcvalue": "0",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        Global.currentIframe().oTrain.currentState.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "chendianchi2painichezhenkongbeng2yunxing",
            "opcname": "沉淀池2刮泥机真空泵2运行",
            "opcvalue": "0",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        console.log(Global.currentIframe().oTrain.operateStep);
        Global.currentIframe().oTrain.showStepTip(stepList.children.length);
    });
    $('#chendianchi2painichezhenkongbengtingzhi1').click(function() {
        $('#chendianchi2painichezhenkongbeng1yunxing').addClass('chendianchi2painichezhenkongbeng1yunxing-btn-off');
        $('#chendianchi2painichezhenkongbeng1yunxing').removeClass('chendianchi2painichezhenkongbeng1yunxing-btn-on');
        //
        var stepList = Global.currentIframe().document.getElementById('questionStepList');
        $(stepList).append(' <li title="沉淀池2真空泵1停止"><span class="item">' + (stepList.children.length + 1) + ' ,沉淀池2真空泵1停止</span></li>');
        Global.currentIframe().oTrain.operateStep.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "chendianchi2painichezhenkongbengtingzhi1",
            "opcname": "沉淀池2刮泥机真空泵1停止",
            "opcvalue": "0",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        Global.currentIframe().oTrain.currentState.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "chendianchi2painichezhenkongbeng1yunxing",
            "opcname": "沉淀池2刮泥机真空泵1运行",
            "opcvalue": "0",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        console.log(Global.currentIframe().oTrain.operateStep);
        Global.currentIframe().oTrain.showStepTip(stepList.children.length);
    });


    $('#chendianchi2painichezhenkongfaqidong1').click(function() {
        $('#chendianchi2painichezhenkongfa1yunxing').addClass('chendianchi2painichezhenkongfa1yunxing-btn-on');
        $('#chendianchi2painichezhenkongfa1yunxing').removeClass('chendianchi2painichezhenkongfa1yunxing-btn-off');
        //
        var stepList = Global.currentIframe().document.getElementById('questionStepList');
        $(stepList).append(' <li title="沉淀池2破坏真空阀1启动"><span class="item">' + (stepList.children.length + 1) + ' ,沉淀池2破坏真空阀1启动</span></li>');
        Global.currentIframe().oTrain.operateStep.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "chendianchi2painichezhenkongfaqidong1",
            "opcname": "沉淀池2刮泥机破坏真空阀1启动",
            "opcvalue": "0",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        Global.currentIframe().oTrain.currentState.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "chendianchi2painichezhenkongfa1yunxing",
            "opcname": "沉淀池2刮泥机破坏真空阀1运行",
            "opcvalue": "1",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        console.log(Global.currentIframe().oTrain.operateStep);
        Global.currentIframe().oTrain.showStepTip(stepList.children.length);
    });
    $('#chendianchi2painichezhenkongfaqidong2').click(function() {
        $('#chendianchi2painichezhenkongfa2yunxing').addClass('chendianchi2painichezhenkongfa2yunxing-btn-on');
        $('#chendianchi2painichezhenkongfa2yunxing').removeClass('chendianchi2painichezhenkongfa2yunxing-btn-off');
        //
        var stepList = Global.currentIframe().document.getElementById('questionStepList');
        $(stepList).append(' <li title="沉淀池2破坏真空阀2启动"><span class="item">' + (stepList.children.length + 1) + ' ,沉淀池2破坏真空阀2启动</span></li>');
        Global.currentIframe().oTrain.operateStep.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "chendianchi2painichezhenkongfaqidong2",
            "opcname": "沉淀池2刮泥机破坏真空阀2启动",
            "opcvalue": "0",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        Global.currentIframe().oTrain.currentState.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "chendianchi2painichezhenkongfa2yunxing",
            "opcname": "沉淀池2刮泥机破坏真空阀2运行",
            "opcvalue": "1",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        console.log(Global.currentIframe().oTrain.operateStep);
        Global.currentIframe().oTrain.showStepTip(stepList.children.length);
    });

    $('#chendianchi2painichezhenkongfatingzhi1').click(function() {
        $('#chendianchi2painichezhenkongfa1yunxing').addClass('chendianchi2painichezhenkongfa1yunxing-btn-off');
        $('#chendianchi2painichezhenkongfa1yunxing').removeClass('chendianchi2painichezhenkongfa1yunxing-btn-on');
        //
        var stepList = Global.currentIframe().document.getElementById('questionStepList');
        $(stepList).append(' <li title="沉淀池2破坏真空阀1停止"><span class="item">' + (stepList.children.length + 1) + ' ,沉淀池2破坏真空阀1停止</span></li>');
        Global.currentIframe().oTrain.operateStep.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "chendianchi2painichezhenkongfatingzhi1",
            "opcname": "沉淀池2刮泥机破坏真空阀1停止",
            "opcvalue": "0",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        Global.currentIframe().oTrain.currentState.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "chendianchi2painichezhenkongfa1yunxing",
            "opcname": "沉淀池2刮泥机破坏真空阀1运行",
            "opcvalue": "0",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        console.log(Global.currentIframe().oTrain.operateStep);
        Global.currentIframe().oTrain.showStepTip(stepList.children.length);
    });

    $('#chendianchi2painichezhenkongfatingzhi2').click(function() {
        $('#chendianchi2painichezhenkongfa2yunxing').addClass('chendianchi2painichezhenkongfa2yunxing-btn-off');
        $('#chendianchi2painichezhenkongfa2yunxing').removeClass('chendianchi2painichezhenkongfa2yunxing-btn-on');
        //
        var stepList = Global.currentIframe().document.getElementById('questionStepList');
        $(stepList).append(' <li title="沉淀池2破坏真空阀2停止"><span class="item">' + (stepList.children.length + 1) + ' ,沉淀池2破坏真空阀2停止</span></li>');
        Global.currentIframe().oTrain.operateStep.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "chendianchi2painichezhenkongfatingzhi2",
            "opcname": "沉淀池2刮泥机破坏真空阀2停止",
            "opcvalue": "0",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        Global.currentIframe().oTrain.currentState.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "chendianchi2painichezhenkongfa2yunxing",
            "opcname": "沉淀池2刮泥机破坏真空阀2运行",
            "opcvalue": "0",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        console.log(Global.currentIframe().oTrain.operateStep);
        Global.currentIframe().oTrain.showStepTip(stepList.children.length);
    });


    $('#yihaopainifakongzhixiangshoudongyaokong').click(function() {
        var stepList = Global.currentIframe().document.getElementById('questionStepList');
        var classname = document.getElementById('yihaopainifakongzhixiangshoudongyaokong').className;
        if (classname.indexOf('yihaopainifakongzhixiangshoudongyaokong-btn-off') >= 0) {
            $('#yihaopainifakongzhixiangshoudongyaokong').addClass('yihaopainifakongzhixiangshoudongyaokong-btn-on');
            $('#yihaopainifakongzhixiangshoudongyaokong').removeClass('yihaopainifakongzhixiangshoudongyaokong-btn-off');
            $(stepList).append(' <li title="一号排泥阀设置为手动"><span class="item">' + (stepList.children.length + 1) + ' ,一号排泥阀设置为手动</span></li>');
            Global.currentIframe().oTrain.operateStep.push({
                "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
                "numbertype": "0",
                "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
                "opcid": "yihaopainifakongzhixiangshoudongyaokong",
                "opcname": "一号排泥阀手动/遥控",
                "opcvalue": "1",
                "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
            });
            Global.currentIframe().oTrain.currentState.push({
                "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
                "numbertype": "0",
                "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
                "opcid": "lvchikongzhixiangshuibengfaxianchangyaokong3",
                "opcname": "一号排泥阀手动/遥控",
                "opcvalue": "1",
                "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
            });
        } else {
            $('#yihaopainifakongzhixiangshoudongyaokong').addClass('yihaopainifakongzhixiangshoudongyaokong-btn-off');
            $('#yihaopainifakongzhixiangshoudongyaokong').removeClass('yihaopainifakongzhixiangshoudongyaokong-btn-on');
            $(stepList).append(' <li title="一号排泥阀设置为遥控"><span class="item">' + (stepList.children.length + 1) + ' ,一号排泥阀设置为遥控</span></li>');
            Global.currentIframe().oTrain.operateStep.push({
                "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
                "numbertype": "0",
                "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
                "opcid": "yihaopainifakongzhixiangshoudongyaokong",
                "opcname": "一号排泥阀手动/遥控",
                "opcvalue": "0",
                "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
            });
            Global.currentIframe().oTrain.currentState.push({
                "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
                "numbertype": "0",
                "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
                "opcid": "yihaopainifakongzhixiangshoudongyaokong",
                "opcname": "一号排泥阀手动/遥控",
                "opcvalue": "0",
                "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
            });
        }
        console.log(Global.currentIframe().oTrain.operateStep);
        Global.currentIframe().oTrain.showStepTip(stepList.children.length);
    });


    $('#yihaopainifakongzhixiangpainifa1kai').click(function() {
        $('#yihaopainifakongzhixiangpainifa1kai').addClass('yihaopainifakongzhixiangpainifa1kai-btn-on');
        $('#yihaopainifakongzhixiangpainifa1kai').removeClass('yihaopainifakongzhixiangpainifa1kai-btn-off');
        $('#yihaopainifakongzhixiangpainifa1guan').addClass('yihaopainifakongzhixiangpainifa1guan-btn-off');
        $('#yihaopainifakongzhixiangpainifa1guan').removeClass('yihaopainifakongzhixiangpainifa1guan-btn-on');
        //
        var stepList = Global.currentIframe().document.getElementById('questionStepList');
        $(stepList).append(' <li title="一号排泥阀1打开"><span class="item">' + (stepList.children.length + 1) + ' ,一号排泥阀1打开</span></li>');
        Global.currentIframe().oTrain.operateStep.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "yihaopainifakongzhixiangpainifa1kai",
            "opcname": "一号排泥阀1开",
            "opcvalue": "1",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        Global.currentIframe().oTrain.currentState.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "yihaopainifakongzhixiangpainifa1kai",
            "opcname": "一号排泥阀1开",
            "opcvalue": "1",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        Global.currentIframe().oTrain.currentState.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "yihaopainifakongzhixiangpainifa1guan",
            "opcname": "一号排泥阀1关",
            "opcvalue": "0",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        console.log(Global.currentIframe().oTrain.operateStep);
        Global.currentIframe().oTrain.showStepTip(stepList.children.length);
    });
    $('#yihaopainifakongzhixiangpainifa1guan').click(function() {
        $('#yihaopainifakongzhixiangpainifa1guan').addClass('yihaopainifakongzhixiangpainifa1guan-btn-on');
        $('#yihaopainifakongzhixiangpainifa1guan').removeClass('yihaopainifakongzhixiangpainifa1guan-btn-off');
        $('#yihaopainifakongzhixiangpainifa1kai').addClass('yihaopainifakongzhixiangpainifa1kai-btn-off');
        $('#yihaopainifakongzhixiangpainifa1kai').removeClass('yihaopainifakongzhixiangpainifa1kai-btn-on');
        //
        var stepList = Global.currentIframe().document.getElementById('questionStepList');
        $(stepList).append(' <li title="一号排泥阀1关闭"><span class="item">' + (stepList.children.length + 1) + ' ,一号排泥阀1关闭</span></li>');
        Global.currentIframe().oTrain.operateStep.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "yihaopainifakongzhixiangpainifa1guan",
            "opcname": "一号排泥阀1关",
            "opcvalue": "1",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        Global.currentIframe().oTrain.currentState.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "yihaopainifakongzhixiangpainifa1kai",
            "opcname": "一号排泥阀1开",
            "opcvalue": "0",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        Global.currentIframe().oTrain.currentState.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "yihaopainifakongzhixiangpainifa1guan",
            "opcname": "一号排泥阀1关",
            "opcvalue": "1",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        console.log(Global.currentIframe().oTrain.operateStep);
        Global.currentIframe().oTrain.showStepTip(stepList.children.length);
    });


    $('#yihaopainifakongzhixiangpainifa2kai').click(function() {
        $('#yihaopainifakongzhixiangpainifa2kai').addClass('yihaopainifakongzhixiangpainifa2kai-btn-on');
        $('#yihaopainifakongzhixiangpainifa2kai').removeClass('yihaopainifakongzhixiangpainifa2kai-btn-off');
        $('#yihaopainifakongzhixiangpainifa2guan').addClass('yihaopainifakongzhixiangpainifa2guan-btn-off');
        $('#yihaopainifakongzhixiangpainifa2guan').removeClass('yihaopainifakongzhixiangpainifa2guan-btn-on');
        //
        var stepList = Global.currentIframe().document.getElementById('questionStepList');
        $(stepList).append(' <li title="一号排泥阀2打开"><span class="item">' + (stepList.children.length + 1) + ' ,一号排泥阀2打开</span></li>');
        Global.currentIframe().oTrain.operateStep.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "yihaopainifakongzhixiangpainifa2kai",
            "opcname": "一号排泥阀2开",
            "opcvalue": "1",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        Global.currentIframe().oTrain.currentState.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "yihaopainifakongzhixiangpainifa2kai",
            "opcname": "一号排泥阀2开",
            "opcvalue": "1",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        Global.currentIframe().oTrain.currentState.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "yihaopainifakongzhixiangpainifa2guan",
            "opcname": "一号排泥阀2关",
            "opcvalue": "0",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        console.log(Global.currentIframe().oTrain.operateStep);
        Global.currentIframe().oTrain.showStepTip(stepList.children.length);
    });
    $('#yihaopainifakongzhixiangpainifa2guan').click(function() {
        $('#yihaopainifakongzhixiangpainifa2guan').addClass('yihaopainifakongzhixiangpainifa2guan-btn-on');
        $('#yihaopainifakongzhixiangpainifa2guan').removeClass('yihaopainifakongzhixiangpainifa2guan-btn-off');
        $('#yihaopainifakongzhixiangpainifa2kai').addClass('yihaopainifakongzhixiangpainifa2kai-btn-off');
        $('#yihaopainifakongzhixiangpainifa2kai').removeClass('yihaopainifakongzhixiangpainifa2kai-btn-on');
        //
        var stepList = Global.currentIframe().document.getElementById('questionStepList');
        $(stepList).append(' <li title="一号排泥阀2关闭"><span class="item">' + (stepList.children.length + 1) + ' ,一号排泥阀2关闭</span></li>');
        Global.currentIframe().oTrain.operateStep.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "yihaopainifakongzhixiangpainifa2guan",
            "opcname": "一号排泥阀2关",
            "opcvalue": "1",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        Global.currentIframe().oTrain.currentState.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "yihaopainifakongzhixiangpainifa2kai",
            "opcname": "一号排泥阀2开",
            "opcvalue": "0",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        Global.currentIframe().oTrain.currentState.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "yihaopainifakongzhixiangpainifa2guan",
            "opcname": "一号排泥阀2关",
            "opcvalue": "1",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        console.log(Global.currentIframe().oTrain.operateStep);
        Global.currentIframe().oTrain.showStepTip(stepList.children.length);
    });


    $('#yihaopainifakongzhixiangpainifa3kai').click(function() {
        $('#yihaopainifakongzhixiangpainifa3kai').addClass('yihaopainifakongzhixiangpainifa3kai-btn-on');
        $('#yihaopainifakongzhixiangpainifa3kai').removeClass('yihaopainifakongzhixiangpainifa3kai-btn-off');
        $('#yihaopainifakongzhixiangpainifa3guan').addClass('yihaopainifakongzhixiangpainifa3guan-btn-off');
        $('#yihaopainifakongzhixiangpainifa3guan').removeClass('yihaopainifakongzhixiangpainifa3guan-btn-on');
        //
        var stepList = Global.currentIframe().document.getElementById('questionStepList');
        $(stepList).append(' <li title="一号排泥阀3打开"><span class="item">' + (stepList.children.length + 1) + ' ,一号排泥阀3打开</span></li>');
        Global.currentIframe().oTrain.operateStep.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "yihaopainifakongzhixiangpainifa3kai",
            "opcname": "一号排泥阀3开",
            "opcvalue": "1",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        Global.currentIframe().oTrain.currentState.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "yihaopainifakongzhixiangpainifa3kai",
            "opcname": "一号排泥阀3开",
            "opcvalue": "1",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        Global.currentIframe().oTrain.currentState.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "yihaopainifakongzhixiangpainifa3guan",
            "opcname": "一号排泥阀3关",
            "opcvalue": "0",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        console.log(Global.currentIframe().oTrain.operateStep);
        Global.currentIframe().oTrain.showStepTip(stepList.children.length);
    });
    $('#yihaopainifakongzhixiangpainifa3guan').click(function() {
        $('#yihaopainifakongzhixiangpainifa3guan').addClass('yihaopainifakongzhixiangpainifa3guan-btn-on');
        $('#yihaopainifakongzhixiangpainifa3guan').removeClass('yihaopainifakongzhixiangpainifa3guan-btn-off');
        $('#yihaopainifakongzhixiangpainifa3kai').addClass('yihaopainifakongzhixiangpainifa3kai-btn-off');
        $('#yihaopainifakongzhixiangpainifa3kai').removeClass('yihaopainifakongzhixiangpainifa3kai-btn-on');
        //
        var stepList = Global.currentIframe().document.getElementById('questionStepList');
        $(stepList).append(' <li title="一号排泥阀3关闭"><span class="item">' + (stepList.children.length + 1) + ' ,一号排泥阀3关闭</span></li>');
        Global.currentIframe().oTrain.operateStep.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "yihaopainifakongzhixiangpainifa3guan",
            "opcname": "一号排泥阀3关",
            "opcvalue": "1",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        Global.currentIframe().oTrain.currentState.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "yihaopainifakongzhixiangpainifa3kai",
            "opcname": "一号排泥阀3开",
            "opcvalue": "0",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        Global.currentIframe().oTrain.currentState.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "yihaopainifakongzhixiangpainifa3guan",
            "opcname": "一号排泥阀3关",
            "opcvalue": "1",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        console.log(Global.currentIframe().oTrain.operateStep);
        Global.currentIframe().oTrain.showStepTip(stepList.children.length);
    });



    $('#yihaopainifakongzhixiangpainifa4kai').click(function() {
        $('#yihaopainifakongzhixiangpainifa4kai').addClass('yihaopainifakongzhixiangpainifa4kai-btn-on');
        $('#yihaopainifakongzhixiangpainifa4kai').removeClass('yihaopainifakongzhixiangpainifa4kai-btn-off');
        $('#yihaopainifakongzhixiangpainifa4guan').addClass('yihaopainifakongzhixiangpainifa4guan-btn-off');
        $('#yihaopainifakongzhixiangpainifa4guan').removeClass('yihaopainifakongzhixiangpainifa4guan-btn-on');
        //
        var stepList = Global.currentIframe().document.getElementById('questionStepList');
        $(stepList).append(' <li title="一号排泥阀4打开"><span class="item">' + (stepList.children.length + 1) + ' ,一号排泥阀4打开</span></li>');
        Global.currentIframe().oTrain.operateStep.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "yihaopainifakongzhixiangpainifa4kai",
            "opcname": "一号排泥阀4开",
            "opcvalue": "1",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        Global.currentIframe().oTrain.currentState.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "yihaopainifakongzhixiangpainifa4kai",
            "opcname": "一号排泥阀4开",
            "opcvalue": "1",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        Global.currentIframe().oTrain.currentState.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "yihaopainifakongzhixiangpainifa4guan",
            "opcname": "一号排泥阀4关",
            "opcvalue": "0",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        console.log(Global.currentIframe().oTrain.operateStep);
        Global.currentIframe().oTrain.showStepTip(stepList.children.length);
    });
    $('#yihaopainifakongzhixiangpainifa4guan').click(function() {
        $('#yihaopainifakongzhixiangpainifa4guan').addClass('yihaopainifakongzhixiangpainifa4guan-btn-on');
        $('#yihaopainifakongzhixiangpainifa4guan').removeClass('yihaopainifakongzhixiangpainifa4guan-btn-off');
        $('#yihaopainifakongzhixiangpainifa4kai').addClass('yihaopainifakongzhixiangpainifa4kai-btn-off');
        $('#yihaopainifakongzhixiangpainifa4kai').removeClass('yihaopainifakongzhixiangpainifa4kai-btn-on');
        //
        var stepList = Global.currentIframe().document.getElementById('questionStepList');
        $(stepList).append(' <li title="一号排泥阀4关闭"><span class="item">' + (stepList.children.length + 1) + ' ,一号排泥阀4关闭</span></li>');
        Global.currentIframe().oTrain.operateStep.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "yihaopainifakongzhixiangpainifa4guan",
            "opcname": "一号排泥阀4关",
            "opcvalue": "1",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        Global.currentIframe().oTrain.currentState.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "yihaopainifakongzhixiangpainifa4kai",
            "opcname": "一号排泥阀4开",
            "opcvalue": "0",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        Global.currentIframe().oTrain.currentState.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "yihaopainifakongzhixiangpainifa4guan",
            "opcname": "一号排泥阀4关",
            "opcvalue": "1",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        console.log(Global.currentIframe().oTrain.operateStep);
        Global.currentIframe().oTrain.showStepTip(stepList.children.length);
    });

    $('#yihaopainifakongzhixiangpainifa5kai').click(function() {
        $('#yihaopainifakongzhixiangpainifa5kai').addClass('yihaopainifakongzhixiangpainifa5kai-btn-on');
        $('#yihaopainifakongzhixiangpainifa5kai').removeClass('yihaopainifakongzhixiangpainifa5kai-btn-off');
        $('#yihaopainifakongzhixiangpainifa5guan').addClass('yihaopainifakongzhixiangpainifa5guan-btn-off');
        $('#yihaopainifakongzhixiangpainifa5guan').removeClass('yihaopainifakongzhixiangpainifa5guan-btn-on');
        //
        var stepList = Global.currentIframe().document.getElementById('questionStepList');
        $(stepList).append(' <li title="一号排泥阀5打开"><span class="item">' + (stepList.children.length + 1) + ' ,一号排泥阀5打开</span></li>');
        Global.currentIframe().oTrain.operateStep.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "yihaopainifakongzhixiangpainifa5kai",
            "opcname": "一号排泥阀5开",
            "opcvalue": "1",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        Global.currentIframe().oTrain.currentState.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "yihaopainifakongzhixiangpainifa5kai",
            "opcname": "一号排泥阀5开",
            "opcvalue": "1",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        Global.currentIframe().oTrain.currentState.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "yihaopainifakongzhixiangpainifa5guan",
            "opcname": "一号排泥阀5关",
            "opcvalue": "0",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        console.log(Global.currentIframe().oTrain.operateStep);
        Global.currentIframe().oTrain.showStepTip(stepList.children.length);
    });
    $('#yihaopainifakongzhixiangpainifa5guan').click(function() {
        $('#yihaopainifakongzhixiangpainifa5guan').addClass('yihaopainifakongzhixiangpainifa5guan-btn-on');
        $('#yihaopainifakongzhixiangpainifa5guan').removeClass('yihaopainifakongzhixiangpainifa5guan-btn-off');
        $('#yihaopainifakongzhixiangpainifa5kai').addClass('yihaopainifakongzhixiangpainifa5kai-btn-off');
        $('#yihaopainifakongzhixiangpainifa5kai').removeClass('yihaopainifakongzhixiangpainifa5kai-btn-on');
        //
        var stepList = Global.currentIframe().document.getElementById('questionStepList');
        $(stepList).append(' <li title="一号排泥阀5关闭"><span class="item">' + (stepList.children.length + 1) + ' ,一号排泥阀5关闭</span></li>');
        Global.currentIframe().oTrain.operateStep.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "yihaopainifakongzhixiangpainifa5guan",
            "opcname": "一号排泥阀5关",
            "opcvalue": "1",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        Global.currentIframe().oTrain.currentState.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "yihaopainifakongzhixiangpainifa5kai",
            "opcname": "一号排泥阀5开",
            "opcvalue": "0",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        Global.currentIframe().oTrain.currentState.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "yihaopainifakongzhixiangpainifa5guan",
            "opcname": "一号排泥阀5关",
            "opcvalue": "1",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        console.log(Global.currentIframe().oTrain.operateStep);
        Global.currentIframe().oTrain.showStepTip(stepList.children.length);
    });


    $('#yihaopainifakongzhixiangpainifa6kai').click(function() {
        $('#yihaopainifakongzhixiangpainifa6kai').addClass('yihaopainifakongzhixiangpainifa6kai-btn-on');
        $('#yihaopainifakongzhixiangpainifa6kai').removeClass('yihaopainifakongzhixiangpainifa6kai-btn-off');
        $('#yihaopainifakongzhixiangpainifa6guan').addClass('yihaopainifakongzhixiangpainifa6guan-btn-off');
        $('#yihaopainifakongzhixiangpainifa6guan').removeClass('yihaopainifakongzhixiangpainifa6guan-btn-on');
        //
        var stepList = Global.currentIframe().document.getElementById('questionStepList');
        $(stepList).append(' <li title="一号排泥阀6打开"><span class="item">' + (stepList.children.length + 1) + ' ,一号排泥阀6打开</span></li>');
        Global.currentIframe().oTrain.operateStep.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "yihaopainifakongzhixiangpainifa6kai",
            "opcname": "一号排泥阀6开",
            "opcvalue": "1",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        Global.currentIframe().oTrain.currentState.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "yihaopainifakongzhixiangpainifa6kai",
            "opcname": "一号排泥阀6开",
            "opcvalue": "1",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        Global.currentIframe().oTrain.currentState.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "yihaopainifakongzhixiangpainifa6guan",
            "opcname": "一号排泥阀6关",
            "opcvalue": "0",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        console.log(Global.currentIframe().oTrain.operateStep);
        Global.currentIframe().oTrain.showStepTip(stepList.children.length);
    });
    $('#yihaopainifakongzhixiangpainifa6guan').click(function() {
        $('#yihaopainifakongzhixiangpainifa6guan').addClass('yihaopainifakongzhixiangpainifa6guan-btn-on');
        $('#yihaopainifakongzhixiangpainifa6guan').removeClass('yihaopainifakongzhixiangpainifa6guan-btn-off');
        $('#yihaopainifakongzhixiangpainifa6kai').addClass('yihaopainifakongzhixiangpainifa6kai-btn-off');
        $('#yihaopainifakongzhixiangpainifa6kai').removeClass('yihaopainifakongzhixiangpainifa6kai-btn-on');
        //
        var stepList = Global.currentIframe().document.getElementById('questionStepList');
        $(stepList).append(' <li title="一号排泥阀6关闭"><span class="item">' + (stepList.children.length + 1) + ' ,一号排泥阀6关闭</span></li>');
        Global.currentIframe().oTrain.operateStep.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "yihaopainifakongzhixiangpainifa6guan",
            "opcname": "一号排泥阀6关",
            "opcvalue": "1",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        Global.currentIframe().oTrain.currentState.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "yihaopainifakongzhixiangpainifa6kai",
            "opcname": "一号排泥阀6开",
            "opcvalue": "0",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        Global.currentIframe().oTrain.currentState.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "yihaopainifakongzhixiangpainifa6guan",
            "opcname": "一号排泥阀6关",
            "opcvalue": "1",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        console.log(Global.currentIframe().oTrain.operateStep);
        Global.currentIframe().oTrain.showStepTip(stepList.children.length);
    });


    $('#erhaopainifakongzhixiangshoudongyaokong').click(function() {
        var stepList = Global.currentIframe().document.getElementById('questionStepList');
        var classname = document.getElementById('erhaopainifakongzhixiangshoudongyaokong').className;
        if (classname.indexOf('erhaopainifakongzhixiangshoudongyaokong-btn-off') >= 0) {
            $('#erhaopainifakongzhixiangshoudongyaokong').addClass('erhaopainifakongzhixiangshoudongyaokong-btn-on');
            $('#erhaopainifakongzhixiangshoudongyaokong').removeClass('erhaopainifakongzhixiangshoudongyaokong-btn-off');
            $(stepList).append(' <li title="二号排泥阀设置为手动"><span class="item">' + (stepList.children.length + 1) + ' ,二号排泥阀设置为手动</span></li>');
            Global.currentIframe().oTrain.operateStep.push({
                "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
                "numbertype": "0",
                "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
                "opcid": "erhaopainifakongzhixiangshoudongyaokong",
                "opcname": "二号排泥阀手动/遥控",
                "opcvalue": "1",
                "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
            });
            Global.currentIframe().oTrain.currentState.push({
                "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
                "numbertype": "0",
                "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
                "opcid": "lvchikongzhixiangshuibengfaxianchangyaokong3",
                "opcname": "二号排泥阀手动/遥控",
                "opcvalue": "1",
                "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
            });
        } else {
            $('#erhaopainifakongzhixiangshoudongyaokong').addClass('erhaopainifakongzhixiangshoudongyaokong-btn-off');
            $('#erhaopainifakongzhixiangshoudongyaokong').removeClass('erhaopainifakongzhixiangshoudongyaokong-btn-on');
            $(stepList).append(' <li title="二号排泥阀设置为遥控"><span class="item">' + (stepList.children.length + 1) + ' ,二号排泥阀设置为遥控</span></li>');
            Global.currentIframe().oTrain.operateStep.push({
                "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
                "numbertype": "0",
                "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
                "opcid": "erhaopainifakongzhixiangshoudongyaokong",
                "opcname": "二号排泥阀手动/遥控",
                "opcvalue": "0",
                "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
            });
            Global.currentIframe().oTrain.currentState.push({
                "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
                "numbertype": "0",
                "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
                "opcid": "erhaopainifakongzhixiangshoudongyaokong",
                "opcname": "二号排泥阀手动/遥控",
                "opcvalue": "0",
                "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
            });
        }
        console.log(Global.currentIframe().oTrain.operateStep);
        Global.currentIframe().oTrain.showStepTip(stepList.children.length);
    });


    $('#erhaopainifakongzhixiangpainifa1kai').click(function() {
        $('#erhaopainifakongzhixiangpainifa1kai').addClass('erhaopainifakongzhixiangpainifa1kai-btn-on');
        $('#erhaopainifakongzhixiangpainifa1kai').removeClass('erhaopainifakongzhixiangpainifa1kai-btn-off');
        $('#erhaopainifakongzhixiangpainifa1guan').addClass('erhaopainifakongzhixiangpainifa1guan-btn-off');
        $('#erhaopainifakongzhixiangpainifa1guan').removeClass('erhaopainifakongzhixiangpainifa1guan-btn-on');
        //
        var stepList = Global.currentIframe().document.getElementById('questionStepList');
        $(stepList).append(' <li title="二号排泥阀1打开"><span class="item">' + (stepList.children.length + 1) + ' ,二号排泥阀1打开</span></li>');
        Global.currentIframe().oTrain.operateStep.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "erhaopainifakongzhixiangpainifa1kai",
            "opcname": "二号排泥阀1开",
            "opcvalue": "1",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        Global.currentIframe().oTrain.currentState.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "erhaopainifakongzhixiangpainifa1kai",
            "opcname": "二号排泥阀1开",
            "opcvalue": "1",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        Global.currentIframe().oTrain.currentState.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "erhaopainifakongzhixiangpainifa1guan",
            "opcname": "二号排泥阀1关",
            "opcvalue": "0",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        console.log(Global.currentIframe().oTrain.operateStep);
        Global.currentIframe().oTrain.showStepTip(stepList.children.length);
    });
    $('#erhaopainifakongzhixiangpainifa1guan').click(function() {
        $('#erhaopainifakongzhixiangpainifa1guan').addClass('erhaopainifakongzhixiangpainifa1guan-btn-on');
        $('#erhaopainifakongzhixiangpainifa1guan').removeClass('erhaopainifakongzhixiangpainifa1guan-btn-off');
        $('#erhaopainifakongzhixiangpainifa1kai').addClass('erhaopainifakongzhixiangpainifa1kai-btn-off');
        $('#erhaopainifakongzhixiangpainifa1kai').removeClass('erhaopainifakongzhixiangpainifa1kai-btn-on');
        //
        var stepList = Global.currentIframe().document.getElementById('questionStepList');
        $(stepList).append(' <li title="二号排泥阀1关闭"><span class="item">' + (stepList.children.length + 1) + ' ,二号排泥阀1关闭</span></li>');
        Global.currentIframe().oTrain.operateStep.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "erhaopainifakongzhixiangpainifa1guan",
            "opcname": "二号排泥阀1关",
            "opcvalue": "1",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        Global.currentIframe().oTrain.currentState.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "erhaopainifakongzhixiangpainifa1kai",
            "opcname": "二号排泥阀1开",
            "opcvalue": "0",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        Global.currentIframe().oTrain.currentState.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "erhaopainifakongzhixiangpainifa1guan",
            "opcname": "二号排泥阀1关",
            "opcvalue": "1",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        console.log(Global.currentIframe().oTrain.operateStep);
        Global.currentIframe().oTrain.showStepTip(stepList.children.length);
    });


    $('#erhaopainifakongzhixiangpainifa2kai').click(function() {
        $('#erhaopainifakongzhixiangpainifa2kai').addClass('erhaopainifakongzhixiangpainifa2kai-btn-on');
        $('#erhaopainifakongzhixiangpainifa2kai').removeClass('erhaopainifakongzhixiangpainifa2kai-btn-off');
        $('#erhaopainifakongzhixiangpainifa2guan').addClass('erhaopainifakongzhixiangpainifa2guan-btn-off');
        $('#erhaopainifakongzhixiangpainifa2guan').removeClass('erhaopainifakongzhixiangpainifa2guan-btn-on');
        //
        var stepList = Global.currentIframe().document.getElementById('questionStepList');
        $(stepList).append(' <li title="二号排泥阀2打开"><span class="item">' + (stepList.children.length + 1) + ' ,二号排泥阀2打开</span></li>');
        Global.currentIframe().oTrain.operateStep.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "erhaopainifakongzhixiangpainifa2kai",
            "opcname": "二号排泥阀2开",
            "opcvalue": "1",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        Global.currentIframe().oTrain.currentState.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "erhaopainifakongzhixiangpainifa2kai",
            "opcname": "二号排泥阀2开",
            "opcvalue": "1",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        Global.currentIframe().oTrain.currentState.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "erhaopainifakongzhixiangpainifa2guan",
            "opcname": "二号排泥阀2关",
            "opcvalue": "0",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        console.log(Global.currentIframe().oTrain.operateStep);
        Global.currentIframe().oTrain.showStepTip(stepList.children.length);
    });
    $('#erhaopainifakongzhixiangpainifa2guan').click(function() {
        $('#erhaopainifakongzhixiangpainifa2guan').addClass('erhaopainifakongzhixiangpainifa2guan-btn-on');
        $('#erhaopainifakongzhixiangpainifa2guan').removeClass('erhaopainifakongzhixiangpainifa2guan-btn-off');
        $('#erhaopainifakongzhixiangpainifa2kai').addClass('erhaopainifakongzhixiangpainifa2kai-btn-off');
        $('#erhaopainifakongzhixiangpainifa2kai').removeClass('erhaopainifakongzhixiangpainifa2kai-btn-on');
        //
        var stepList = Global.currentIframe().document.getElementById('questionStepList');
        $(stepList).append(' <li title="二号排泥阀2关闭"><span class="item">' + (stepList.children.length + 1) + ' ,二号排泥阀2关闭</span></li>');
        Global.currentIframe().oTrain.operateStep.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "erhaopainifakongzhixiangpainifa2guan",
            "opcname": "二号排泥阀2关",
            "opcvalue": "1",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        Global.currentIframe().oTrain.currentState.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "erhaopainifakongzhixiangpainifa2kai",
            "opcname": "二号排泥阀2开",
            "opcvalue": "0",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        Global.currentIframe().oTrain.currentState.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "erhaopainifakongzhixiangpainifa2guan",
            "opcname": "二号排泥阀2关",
            "opcvalue": "1",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        console.log(Global.currentIframe().oTrain.operateStep);
        Global.currentIframe().oTrain.showStepTip(stepList.children.length);
    });


    $('#erhaopainifakongzhixiangpainifa3kai').click(function() {
        $('#erhaopainifakongzhixiangpainifa3kai').addClass('erhaopainifakongzhixiangpainifa3kai-btn-on');
        $('#erhaopainifakongzhixiangpainifa3kai').removeClass('erhaopainifakongzhixiangpainifa3kai-btn-off');
        $('#erhaopainifakongzhixiangpainifa3guan').addClass('erhaopainifakongzhixiangpainifa3guan-btn-off');
        $('#erhaopainifakongzhixiangpainifa3guan').removeClass('erhaopainifakongzhixiangpainifa3guan-btn-on');
        //
        var stepList = Global.currentIframe().document.getElementById('questionStepList');
        $(stepList).append(' <li title="二号排泥阀3打开"><span class="item">' + (stepList.children.length + 1) + ' ,二号排泥阀3打开</span></li>');
        Global.currentIframe().oTrain.operateStep.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "erhaopainifakongzhixiangpainifa3kai",
            "opcname": "二号排泥阀3开",
            "opcvalue": "1",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        Global.currentIframe().oTrain.currentState.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "erhaopainifakongzhixiangpainifa3kai",
            "opcname": "二号排泥阀3开",
            "opcvalue": "1",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        Global.currentIframe().oTrain.currentState.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "erhaopainifakongzhixiangpainifa3guan",
            "opcname": "二号排泥阀3关",
            "opcvalue": "0",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        console.log(Global.currentIframe().oTrain.operateStep);
        Global.currentIframe().oTrain.showStepTip(stepList.children.length);
    });
    $('#erhaopainifakongzhixiangpainifa3guan').click(function() {
        $('#erhaopainifakongzhixiangpainifa3guan').addClass('erhaopainifakongzhixiangpainifa3guan-btn-on');
        $('#erhaopainifakongzhixiangpainifa3guan').removeClass('erhaopainifakongzhixiangpainifa3guan-btn-off');
        $('#erhaopainifakongzhixiangpainifa3kai').addClass('erhaopainifakongzhixiangpainifa3kai-btn-off');
        $('#erhaopainifakongzhixiangpainifa3kai').removeClass('erhaopainifakongzhixiangpainifa3kai-btn-on');
        //
        var stepList = Global.currentIframe().document.getElementById('questionStepList');
        $(stepList).append(' <li title="二号排泥阀3关闭"><span class="item">' + (stepList.children.length + 1) + ' ,二号排泥阀3关闭</span></li>');
        Global.currentIframe().oTrain.operateStep.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "erhaopainifakongzhixiangpainifa3guan",
            "opcname": "二号排泥阀3关",
            "opcvalue": "1",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        Global.currentIframe().oTrain.currentState.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "erhaopainifakongzhixiangpainifa3kai",
            "opcname": "二号排泥阀3开",
            "opcvalue": "0",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        Global.currentIframe().oTrain.currentState.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "erhaopainifakongzhixiangpainifa3guan",
            "opcname": "二号排泥阀3关",
            "opcvalue": "1",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        console.log(Global.currentIframe().oTrain.operateStep);
        Global.currentIframe().oTrain.showStepTip(stepList.children.length);
    });



    $('#erhaopainifakongzhixiangpainifa4kai').click(function() {
        $('#erhaopainifakongzhixiangpainifa4kai').addClass('erhaopainifakongzhixiangpainifa4kai-btn-on');
        $('#erhaopainifakongzhixiangpainifa4kai').removeClass('erhaopainifakongzhixiangpainifa4kai-btn-off');
        $('#erhaopainifakongzhixiangpainifa4guan').addClass('erhaopainifakongzhixiangpainifa4guan-btn-off');
        $('#erhaopainifakongzhixiangpainifa4guan').removeClass('erhaopainifakongzhixiangpainifa4guan-btn-on');
        //
        var stepList = Global.currentIframe().document.getElementById('questionStepList');
        $(stepList).append(' <li title="二号排泥阀4打开"><span class="item">' + (stepList.children.length + 1) + ' ,二号排泥阀4打开</span></li>');
        Global.currentIframe().oTrain.operateStep.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "erhaopainifakongzhixiangpainifa4kai",
            "opcname": "二号排泥阀4开",
            "opcvalue": "1",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        Global.currentIframe().oTrain.currentState.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "erhaopainifakongzhixiangpainifa4kai",
            "opcname": "二号排泥阀4开",
            "opcvalue": "1",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        Global.currentIframe().oTrain.currentState.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "erhaopainifakongzhixiangpainifa4guan",
            "opcname": "二号排泥阀4关",
            "opcvalue": "0",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        console.log(Global.currentIframe().oTrain.operateStep);
        Global.currentIframe().oTrain.showStepTip(stepList.children.length);
    });
    $('#erhaopainifakongzhixiangpainifa4guan').click(function() {
        $('#erhaopainifakongzhixiangpainifa4guan').addClass('erhaopainifakongzhixiangpainifa4guan-btn-on');
        $('#erhaopainifakongzhixiangpainifa4guan').removeClass('erhaopainifakongzhixiangpainifa4guan-btn-off');
        $('#erhaopainifakongzhixiangpainifa4kai').addClass('erhaopainifakongzhixiangpainifa4kai-btn-off');
        $('#erhaopainifakongzhixiangpainifa4kai').removeClass('erhaopainifakongzhixiangpainifa4kai-btn-on');
        //
        var stepList = Global.currentIframe().document.getElementById('questionStepList');
        $(stepList).append(' <li title="二号排泥阀4关闭"><span class="item">' + (stepList.children.length + 1) + ' ,二号排泥阀4关闭</span></li>');
        Global.currentIframe().oTrain.operateStep.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "erhaopainifakongzhixiangpainifa4guan",
            "opcname": "二号排泥阀4关",
            "opcvalue": "1",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        Global.currentIframe().oTrain.currentState.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "erhaopainifakongzhixiangpainifa4kai",
            "opcname": "二号排泥阀4开",
            "opcvalue": "0",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        Global.currentIframe().oTrain.currentState.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "erhaopainifakongzhixiangpainifa4guan",
            "opcname": "二号排泥阀4关",
            "opcvalue": "1",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        console.log(Global.currentIframe().oTrain.operateStep);
        Global.currentIframe().oTrain.showStepTip(stepList.children.length);
    });

    $('#erhaopainifakongzhixiangpainifa5kai').click(function() {
        $('#erhaopainifakongzhixiangpainifa5kai').addClass('erhaopainifakongzhixiangpainifa5kai-btn-on');
        $('#erhaopainifakongzhixiangpainifa5kai').removeClass('erhaopainifakongzhixiangpainifa5kai-btn-off');
        $('#erhaopainifakongzhixiangpainifa5guan').addClass('erhaopainifakongzhixiangpainifa5guan-btn-off');
        $('#erhaopainifakongzhixiangpainifa5guan').removeClass('erhaopainifakongzhixiangpainifa5guan-btn-on');
        //
        var stepList = Global.currentIframe().document.getElementById('questionStepList');
        $(stepList).append(' <li title="二号排泥阀5打开"><span class="item">' + (stepList.children.length + 1) + ' ,二号排泥阀5打开</span></li>');
        Global.currentIframe().oTrain.operateStep.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "erhaopainifakongzhixiangpainifa5kai",
            "opcname": "二号排泥阀5开",
            "opcvalue": "1",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        Global.currentIframe().oTrain.currentState.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "erhaopainifakongzhixiangpainifa5kai",
            "opcname": "二号排泥阀5开",
            "opcvalue": "1",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        Global.currentIframe().oTrain.currentState.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "erhaopainifakongzhixiangpainifa5guan",
            "opcname": "二号排泥阀5关",
            "opcvalue": "0",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        console.log(Global.currentIframe().oTrain.operateStep);
        Global.currentIframe().oTrain.showStepTip(stepList.children.length);
    });
    $('#erhaopainifakongzhixiangpainifa5guan').click(function() {
        $('#erhaopainifakongzhixiangpainifa5guan').addClass('erhaopainifakongzhixiangpainifa5guan-btn-on');
        $('#erhaopainifakongzhixiangpainifa5guan').removeClass('erhaopainifakongzhixiangpainifa5guan-btn-off');
        $('#erhaopainifakongzhixiangpainifa5kai').addClass('erhaopainifakongzhixiangpainifa5kai-btn-off');
        $('#erhaopainifakongzhixiangpainifa5kai').removeClass('erhaopainifakongzhixiangpainifa5kai-btn-on');
        //
        var stepList = Global.currentIframe().document.getElementById('questionStepList');
        $(stepList).append(' <li title="二号排泥阀5关闭"><span class="item">' + (stepList.children.length + 1) + ' ,二号排泥阀5关闭</span></li>');
        Global.currentIframe().oTrain.operateStep.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "erhaopainifakongzhixiangpainifa5guan",
            "opcname": "二号排泥阀5关",
            "opcvalue": "1",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        Global.currentIframe().oTrain.currentState.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "erhaopainifakongzhixiangpainifa5kai",
            "opcname": "二号排泥阀5开",
            "opcvalue": "0",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        Global.currentIframe().oTrain.currentState.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "erhaopainifakongzhixiangpainifa5guan",
            "opcname": "二号排泥阀5关",
            "opcvalue": "1",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        console.log(Global.currentIframe().oTrain.operateStep);
        Global.currentIframe().oTrain.showStepTip(stepList.children.length);
    });


    $('#erhaopainifakongzhixiangpainifa6kai').click(function() {
        $('#erhaopainifakongzhixiangpainifa6kai').addClass('erhaopainifakongzhixiangpainifa6kai-btn-on');
        $('#erhaopainifakongzhixiangpainifa6kai').removeClass('erhaopainifakongzhixiangpainifa6kai-btn-off');
        $('#erhaopainifakongzhixiangpainifa6guan').addClass('erhaopainifakongzhixiangpainifa6guan-btn-off');
        $('#erhaopainifakongzhixiangpainifa6guan').removeClass('erhaopainifakongzhixiangpainifa6guan-btn-on');
        //
        var stepList = Global.currentIframe().document.getElementById('questionStepList');
        $(stepList).append(' <li title="二号排泥阀6打开"><span class="item">' + (stepList.children.length + 1) + ' ,二号排泥阀6打开</span></li>');
        Global.currentIframe().oTrain.operateStep.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "erhaopainifakongzhixiangpainifa6kai",
            "opcname": "二号排泥阀6开",
            "opcvalue": "1",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        Global.currentIframe().oTrain.currentState.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "erhaopainifakongzhixiangpainifa6kai",
            "opcname": "二号排泥阀6开",
            "opcvalue": "1",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        Global.currentIframe().oTrain.currentState.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "erhaopainifakongzhixiangpainifa6guan",
            "opcname": "二号排泥阀6关",
            "opcvalue": "0",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        console.log(Global.currentIframe().oTrain.operateStep);
        Global.currentIframe().oTrain.showStepTip(stepList.children.length);
    });
    $('#erhaopainifakongzhixiangpainifa6guan').click(function() {
        $('#erhaopainifakongzhixiangpainifa6guan').addClass('erhaopainifakongzhixiangpainifa6guan-btn-on');
        $('#erhaopainifakongzhixiangpainifa6guan').removeClass('erhaopainifakongzhixiangpainifa6guan-btn-off');
        $('#erhaopainifakongzhixiangpainifa6kai').addClass('erhaopainifakongzhixiangpainifa6kai-btn-off');
        $('#erhaopainifakongzhixiangpainifa6kai').removeClass('erhaopainifakongzhixiangpainifa6kai-btn-on');
        //
        var stepList = Global.currentIframe().document.getElementById('questionStepList');
        $(stepList).append(' <li title="二号排泥阀6关闭"><span class="item">' + (stepList.children.length + 1) + ' ,二号排泥阀6关闭</span></li>');
        Global.currentIframe().oTrain.operateStep.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "erhaopainifakongzhixiangpainifa6guan",
            "opcname": "二号排泥阀6关",
            "opcvalue": "1",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        Global.currentIframe().oTrain.currentState.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "erhaopainifakongzhixiangpainifa6kai",
            "opcname": "二号排泥阀6开",
            "opcvalue": "0",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        Global.currentIframe().oTrain.currentState.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "erhaopainifakongzhixiangpainifa6guan",
            "opcname": "二号排泥阀6关",
            "opcvalue": "1",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        console.log(Global.currentIframe().oTrain.operateStep);
        Global.currentIframe().oTrain.showStepTip(stepList.children.length);
    });


    $('#sanhaopainifakongzhixiangshoudongyaokong1').click(function() {
        var stepList = Global.currentIframe().document.getElementById('questionStepList');
        var classname = document.getElementById('sanhaopainifakongzhixiangshoudongyaokong1').className;
        if (classname.indexOf('sanhaopainifakongzhixiangshoudongyaokong1-btn-off') >= 0) {
            $('#sanhaopainifakongzhixiangshoudongyaokong1').addClass('sanhaopainifakongzhixiangshoudongyaokong1-btn-on');
            $('#sanhaopainifakongzhixiangshoudongyaokong1').removeClass('sanhaopainifakongzhixiangshoudongyaokong1-btn-off');
            $(stepList).append(' <li title="三号排泥阀1设置为手动"><span class="item">' + (stepList.children.length + 1) + ' ,三号排泥阀1设置为手动</span></li>');
            Global.currentIframe().oTrain.operateStep.push({
                "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
                "numbertype": "0",
                "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
                "opcid": "sanhaopainifakongzhixiangshoudongyaokong1",
                "opcname": "三号排泥阀1手动/遥控",
                "opcvalue": "1",
                "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
            });
            Global.currentIframe().oTrain.currentState.push({
                "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
                "numbertype": "0",
                "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
                "opcid": "sanhaopainifakongzhixiangshoudongyaokong1",
                "opcname": "三号排泥阀1手动/遥控",
                "opcvalue": "1",
                "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
            });
        } else {
            $('#sanhaopainifakongzhixiangshoudongyaokong1').addClass('sanhaopainifakongzhixiangshoudongyaokong1-btn-off');
            $('#sanhaopainifakongzhixiangshoudongyaokong1').removeClass('sanhaopainifakongzhixiangshoudongyaokong1-btn-on');
            $(stepList).append(' <li title="三号排泥阀1设置为遥控"><span class="item">' + (stepList.children.length + 1) + ' ,三号排泥阀1设置为遥控</span></li>');
            Global.currentIframe().oTrain.operateStep.push({
                "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
                "numbertype": "0",
                "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
                "opcid": "sanhaopainifakongzhixiangshoudongyaokong1",
                "opcname": "三号排泥阀1手动/遥控",
                "opcvalue": "0",
                "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
            });
            Global.currentIframe().oTrain.currentState.push({
                "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
                "numbertype": "0",
                "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
                "opcid": "sanhaopainifakongzhixiangshoudongyaokong1",
                "opcname": "三号排泥阀1手动/遥控",
                "opcvalue": "0",
                "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
            });
        }
        console.log(Global.currentIframe().oTrain.operateStep);
        Global.currentIframe().oTrain.showStepTip(stepList.children.length);
    });

    $('#sanhaopainifakongzhixiangshoudongyaokong2').click(function() {
        var stepList = Global.currentIframe().document.getElementById('questionStepList');
        var classname = document.getElementById('sanhaopainifakongzhixiangshoudongyaokong2').className;
        if (classname.indexOf('sanhaopainifakongzhixiangshoudongyaokong2-btn-off') >= 0) {
            $('#sanhaopainifakongzhixiangshoudongyaokong2').addClass('sanhaopainifakongzhixiangshoudongyaokong2-btn-on');
            $('#sanhaopainifakongzhixiangshoudongyaokong2').removeClass('sanhaopainifakongzhixiangshoudongyaokong2-btn-off');
            $(stepList).append(' <li title="三号排泥阀2设置为手动"><span class="item">' + (stepList.children.length + 1) + ' ,三号排泥阀2设置为手动</span></li>');
            Global.currentIframe().oTrain.operateStep.push({
                "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
                "numbertype": "0",
                "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
                "opcid": "sanhaopainifakongzhixiangshoudongyaokong2",
                "opcname": "三号排泥阀2手动/遥控",
                "opcvalue": "1",
                "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
            });
            Global.currentIframe().oTrain.currentState.push({
                "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
                "numbertype": "0",
                "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
                "opcid": "sanhaopainifakongzhixiangshoudongyaokong2",
                "opcname": "三号排泥阀2手动/遥控",
                "opcvalue": "1",
                "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
            });
        } else {
            $('#sanhaopainifakongzhixiangshoudongyaokong2').addClass('sanhaopainifakongzhixiangshoudongyaokong2-btn-off');
            $('#sanhaopainifakongzhixiangshoudongyaokong2').removeClass('sanhaopainifakongzhixiangshoudongyaokong2-btn-on');
            $(stepList).append(' <li title="三号排泥阀2设置为遥控"><span class="item">' + (stepList.children.length + 1) + ' ,三号排泥阀2设置为遥控</span></li>');
            Global.currentIframe().oTrain.operateStep.push({
                "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
                "numbertype": "0",
                "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
                "opcid": "sanhaopainifakongzhixiangshoudongyaokong2",
                "opcname": "三号排泥阀2手动/遥控",
                "opcvalue": "0",
                "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
            });
            Global.currentIframe().oTrain.currentState.push({
                "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
                "numbertype": "0",
                "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
                "opcid": "sanhaopainifakongzhixiangshoudongyaokong2",
                "opcname": "三号排泥阀2手动/遥控",
                "opcvalue": "0",
                "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
            });
        }
        console.log(Global.currentIframe().oTrain.operateStep);
        Global.currentIframe().oTrain.showStepTip(stepList.children.length);
    });

    $('#sanhaopainifakongzhixiangshoudongyaokong3').click(function() {
        var stepList = Global.currentIframe().document.getElementById('questionStepList');
        var classname = document.getElementById('sanhaopainifakongzhixiangshoudongyaokong3').className;
        if (classname.indexOf('sanhaopainifakongzhixiangshoudongyaokong3-btn-off') >= 0) {
            $('#sanhaopainifakongzhixiangshoudongyaokong3').addClass('sanhaopainifakongzhixiangshoudongyaokong3-btn-on');
            $('#sanhaopainifakongzhixiangshoudongyaokong3').removeClass('sanhaopainifakongzhixiangshoudongyaokong3-btn-off');
            $(stepList).append(' <li title="三号排泥阀3设置为手动"><span class="item">' + (stepList.children.length + 1) + ' ,三号排泥阀3设置为手动</span></li>');
            Global.currentIframe().oTrain.operateStep.push({
                "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
                "numbertype": "0",
                "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
                "opcid": "sanhaopainifakongzhixiangshoudongyaokong3",
                "opcname": "三号排泥阀3手动/遥控",
                "opcvalue": "1",
                "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
            });
            Global.currentIframe().oTrain.currentState.push({
                "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
                "numbertype": "0",
                "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
                "opcid": "sanhaopainifakongzhixiangshoudongyaokong3",
                "opcname": "三号排泥阀3手动/遥控",
                "opcvalue": "1",
                "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
            });
        } else {
            $('#sanhaopainifakongzhixiangshoudongyaokong3').addClass('sanhaopainifakongzhixiangshoudongyaokong3-btn-off');
            $('#sanhaopainifakongzhixiangshoudongyaokong3').removeClass('sanhaopainifakongzhixiangshoudongyaokong3-btn-on');
            $(stepList).append(' <li title="三号排泥阀3设置为遥控"><span class="item">' + (stepList.children.length + 1) + ' ,三号排泥阀3设置为遥控</span></li>');
            Global.currentIframe().oTrain.operateStep.push({
                "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
                "numbertype": "0",
                "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
                "opcid": "sanhaopainifakongzhixiangshoudongyaokong3",
                "opcname": "三号排泥阀3手动/遥控",
                "opcvalue": "0",
                "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
            });
            Global.currentIframe().oTrain.currentState.push({
                "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
                "numbertype": "0",
                "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
                "opcid": "sanhaopainifakongzhixiangshoudongyaokong3",
                "opcname": "三号排泥阀3手动/遥控",
                "opcvalue": "0",
                "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
            });
        }
        console.log(Global.currentIframe().oTrain.operateStep);
        Global.currentIframe().oTrain.showStepTip(stepList.children.length);
    });


    $('#sanhaopainifakongzhixiangshoudongyaokong4').click(function() {
        var stepList = Global.currentIframe().document.getElementById('questionStepList');
        var classname = document.getElementById('sanhaopainifakongzhixiangshoudongyaokong4').className;
        if (classname.indexOf('sanhaopainifakongzhixiangshoudongyaokong4-btn-off') >= 0) {
            $('#sanhaopainifakongzhixiangshoudongyaokong4').addClass('sanhaopainifakongzhixiangshoudongyaokong4-btn-on');
            $('#sanhaopainifakongzhixiangshoudongyaokong4').removeClass('sanhaopainifakongzhixiangshoudongyaokong4-btn-off');
            $(stepList).append(' <li title="三号排泥阀4设置为手动"><span class="item">' + (stepList.children.length + 1) + ' ,三号排泥阀4设置为手动</span></li>');
            Global.currentIframe().oTrain.operateStep.push({
                "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
                "numbertype": "0",
                "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
                "opcid": "sanhaopainifakongzhixiangshoudongyaokong4",
                "opcname": "三号排泥阀4手动/遥控",
                "opcvalue": "1",
                "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
            });
            Global.currentIframe().oTrain.currentState.push({
                "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
                "numbertype": "0",
                "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
                "opcid": "sanhaopainifakongzhixiangshoudongyaokong4",
                "opcname": "三号排泥阀4手动/遥控",
                "opcvalue": "1",
                "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
            });
        } else {
            $('#sanhaopainifakongzhixiangshoudongyaokong4').addClass('sanhaopainifakongzhixiangshoudongyaokong4-btn-off');
            $('#sanhaopainifakongzhixiangshoudongyaokong4').removeClass('sanhaopainifakongzhixiangshoudongyaokong4-btn-on');
            $(stepList).append(' <li title="三号排泥阀4设置为遥控"><span class="item">' + (stepList.children.length + 1) + ' ,三号排泥阀4设置为遥控</span></li>');
            Global.currentIframe().oTrain.operateStep.push({
                "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
                "numbertype": "0",
                "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
                "opcid": "sanhaopainifakongzhixiangshoudongyaokong4",
                "opcname": "三号排泥阀4手动/遥控",
                "opcvalue": "0",
                "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
            });
            Global.currentIframe().oTrain.currentState.push({
                "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
                "numbertype": "0",
                "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
                "opcid": "sanhaopainifakongzhixiangshoudongyaokong4",
                "opcname": "三号排泥阀4手动/遥控",
                "opcvalue": "0",
                "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
            });
        }
        console.log(Global.currentIframe().oTrain.operateStep);
        Global.currentIframe().oTrain.showStepTip(stepList.children.length);
    });


    $('#sanhaopainifakongzhixiangshoudongyaokong5').click(function() {
        var stepList = Global.currentIframe().document.getElementById('questionStepList');
        var classname = document.getElementById('sanhaopainifakongzhixiangshoudongyaokong5').className;
        if (classname.indexOf('sanhaopainifakongzhixiangshoudongyaokong5-btn-off') >= 0) {
            $('#sanhaopainifakongzhixiangshoudongyaokong5').addClass('sanhaopainifakongzhixiangshoudongyaokong5-btn-on');
            $('#sanhaopainifakongzhixiangshoudongyaokong5').removeClass('sanhaopainifakongzhixiangshoudongyaokong5-btn-off');
            $(stepList).append(' <li title="三号排泥阀5设置为手动"><span class="item">' + (stepList.children.length + 1) + ' ,三号排泥阀5设置为手动</span></li>');
            Global.currentIframe().oTrain.operateStep.push({
                "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
                "numbertype": "0",
                "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
                "opcid": "sanhaopainifakongzhixiangshoudongyaokong5",
                "opcname": "三号排泥阀5手动/遥控",
                "opcvalue": "1",
                "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
            });
            Global.currentIframe().oTrain.currentState.push({
                "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
                "numbertype": "0",
                "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
                "opcid": "sanhaopainifakongzhixiangshoudongyaokong5",
                "opcname": "三号排泥阀5手动/遥控",
                "opcvalue": "1",
                "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
            });
        } else {
            $('#sanhaopainifakongzhixiangshoudongyaokong5').addClass('sanhaopainifakongzhixiangshoudongyaokong5-btn-off');
            $('#sanhaopainifakongzhixiangshoudongyaokong5').removeClass('sanhaopainifakongzhixiangshoudongyaokong5-btn-on');
            $(stepList).append(' <li title="三号排泥阀5设置为遥控"><span class="item">' + (stepList.children.length + 1) + ' ,三号排泥阀5设置为遥控</span></li>');
            Global.currentIframe().oTrain.operateStep.push({
                "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
                "numbertype": "0",
                "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
                "opcid": "sanhaopainifakongzhixiangshoudongyaokong5",
                "opcname": "三号排泥阀5手动/遥控",
                "opcvalue": "0",
                "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
            });
            Global.currentIframe().oTrain.currentState.push({
                "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
                "numbertype": "0",
                "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
                "opcid": "sanhaopainifakongzhixiangshoudongyaokong5",
                "opcname": "三号排泥阀5手动/遥控",
                "opcvalue": "0",
                "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
            });
        }
        console.log(Global.currentIframe().oTrain.operateStep);
        Global.currentIframe().oTrain.showStepTip(stepList.children.length);
    });


    $('#sanhaopainifakongzhixiangshoudongyaokong6').click(function() {
        var stepList = Global.currentIframe().document.getElementById('questionStepList');
        var classname = document.getElementById('sanhaopainifakongzhixiangshoudongyaokong6').className;
        if (classname.indexOf('sanhaopainifakongzhixiangshoudongyaokong6-btn-off') >= 0) {
            $('#sanhaopainifakongzhixiangshoudongyaokong6').addClass('sanhaopainifakongzhixiangshoudongyaokong6-btn-on');
            $('#sanhaopainifakongzhixiangshoudongyaokong6').removeClass('sanhaopainifakongzhixiangshoudongyaokong6-btn-off');
            $(stepList).append(' <li title="三号排泥阀6设置为手动"><span class="item">' + (stepList.children.length + 1) + ' ,三号排泥阀6设置为手动</span></li>');
            Global.currentIframe().oTrain.operateStep.push({
                "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
                "numbertype": "0",
                "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
                "opcid": "sanhaopainifakongzhixiangshoudongyaokong6",
                "opcname": "三号排泥阀6手动/遥控",
                "opcvalue": "1",
                "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
            });
            Global.currentIframe().oTrain.currentState.push({
                "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
                "numbertype": "0",
                "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
                "opcid": "sanhaopainifakongzhixiangshoudongyaokong6",
                "opcname": "三号排泥阀6手动/遥控",
                "opcvalue": "1",
                "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
            });
        } else {
            $('#sanhaopainifakongzhixiangshoudongyaokong6').addClass('sanhaopainifakongzhixiangshoudongyaokong6-btn-off');
            $('#sanhaopainifakongzhixiangshoudongyaokong6').removeClass('sanhaopainifakongzhixiangshoudongyaokong6-btn-on');
            $(stepList).append(' <li title="三号排泥阀6设置为遥控"><span class="item">' + (stepList.children.length + 1) + ' ,三号排泥阀6设置为遥控</span></li>');
            Global.currentIframe().oTrain.operateStep.push({
                "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
                "numbertype": "0",
                "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
                "opcid": "sanhaopainifakongzhixiangshoudongyaokong6",
                "opcname": "三号排泥阀6手动/遥控",
                "opcvalue": "0",
                "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
            });
            Global.currentIframe().oTrain.currentState.push({
                "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
                "numbertype": "0",
                "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
                "opcid": "sanhaopainifakongzhixiangshoudongyaokong6",
                "opcname": "三号排泥阀6手动/遥控",
                "opcvalue": "0",
                "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
            });
        }
        console.log(Global.currentIframe().oTrain.operateStep);
        Global.currentIframe().oTrain.showStepTip(stepList.children.length);
    });

    $('#sanhaopainifakongzhixiangshoudongyaokong8').click(function() {
        var stepList = Global.currentIframe().document.getElementById('questionStepList');
        var classname = document.getElementById('sanhaopainifakongzhixiangshoudongyaokong8').className;
        if (classname.indexOf('sanhaopainifakongzhixiangshoudongyaokong8-btn-off') >= 0) {
            $('#sanhaopainifakongzhixiangshoudongyaokong8').addClass('sanhaopainifakongzhixiangshoudongyaokong8-btn-on');
            $('#sanhaopainifakongzhixiangshoudongyaokong8').removeClass('sanhaopainifakongzhixiangshoudongyaokong8-btn-off');
            $(stepList).append(' <li title="三号排泥阀8设置为手动"><span class="item">' + (stepList.children.length + 1) + ' ,三号排泥阀8设置为手动</span></li>');
            Global.currentIframe().oTrain.operateStep.push({
                "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
                "numbertype": "0",
                "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
                "opcid": "sanhaopainifakongzhixiangshoudongyaokong8",
                "opcname": "三号排泥阀8手动/遥控",
                "opcvalue": "1",
                "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
            });
            Global.currentIframe().oTrain.currentState.push({
                "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
                "numbertype": "0",
                "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
                "opcid": "sanhaopainifakongzhixiangshoudongyaokong8",
                "opcname": "三号排泥阀8手动/遥控",
                "opcvalue": "1",
                "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
            });
        } else {
            $('#sanhaopainifakongzhixiangshoudongyaokong8').addClass('sanhaopainifakongzhixiangshoudongyaokong8-btn-off');
            $('#sanhaopainifakongzhixiangshoudongyaokong8').removeClass('sanhaopainifakongzhixiangshoudongyaokong8-btn-on');
            $(stepList).append(' <li title="三号排泥阀8设置为遥控"><span class="item">' + (stepList.children.length + 1) + ' ,三号排泥阀8设置为遥控</span></li>');
            Global.currentIframe().oTrain.operateStep.push({
                "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
                "numbertype": "0",
                "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
                "opcid": "sanhaopainifakongzhixiangshoudongyaokong8",
                "opcname": "三号排泥阀8手动/遥控",
                "opcvalue": "0",
                "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
            });
            Global.currentIframe().oTrain.currentState.push({
                "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
                "numbertype": "0",
                "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
                "opcid": "sanhaopainifakongzhixiangshoudongyaokong8",
                "opcname": "三号排泥阀8手动/遥控",
                "opcvalue": "0",
                "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
            });
        }
        console.log(Global.currentIframe().oTrain.operateStep);
        Global.currentIframe().oTrain.showStepTip(stepList.children.length);
    });

    $('#sanhaopainifakongzhixiangshoudongyaokong7').click(function() {
        var stepList = Global.currentIframe().document.getElementById('questionStepList');
        var classname = document.getElementById('sanhaopainifakongzhixiangshoudongyaokong7').className;
        if (classname.indexOf('sanhaopainifakongzhixiangshoudongyaokong7-btn-off') >= 0) {
            $('#sanhaopainifakongzhixiangshoudongyaokong7').addClass('sanhaopainifakongzhixiangshoudongyaokong7-btn-on');
            $('#sanhaopainifakongzhixiangshoudongyaokong7').removeClass('sanhaopainifakongzhixiangshoudongyaokong7-btn-off');
            $(stepList).append(' <li title="三号排泥阀7设置为手动"><span class="item">' + (stepList.children.length + 1) + ' ,三号排泥阀7设置为手动</span></li>');
            Global.currentIframe().oTrain.operateStep.push({
                "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
                "numbertype": "0",
                "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
                "opcid": "sanhaopainifakongzhixiangshoudongyaokong7",
                "opcname": "三号排泥阀7手动/遥控",
                "opcvalue": "1",
                "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
            });
            Global.currentIframe().oTrain.currentState.push({
                "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
                "numbertype": "0",
                "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
                "opcid": "sanhaopainifakongzhixiangshoudongyaokong7",
                "opcname": "三号排泥阀7手动/遥控",
                "opcvalue": "1",
                "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
            });
        } else {
            $('#sanhaopainifakongzhixiangshoudongyaokong7').addClass('sanhaopainifakongzhixiangshoudongyaokong7-btn-off');
            $('#sanhaopainifakongzhixiangshoudongyaokong7').removeClass('sanhaopainifakongzhixiangshoudongyaokong7-btn-on');
            $(stepList).append(' <li title="三号排泥阀7设置为遥控"><span class="item">' + (stepList.children.length + 1) + ' ,三号排泥阀7设置为遥控</span></li>');
            Global.currentIframe().oTrain.operateStep.push({
                "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
                "numbertype": "0",
                "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
                "opcid": "sanhaopainifakongzhixiangshoudongyaokong7",
                "opcname": "三号排泥阀7手动/遥控",
                "opcvalue": "0",
                "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
            });
            Global.currentIframe().oTrain.currentState.push({
                "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
                "numbertype": "0",
                "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
                "opcid": "sanhaopainifakongzhixiangshoudongyaokong7",
                "opcname": "三号排泥阀7手动/遥控",
                "opcvalue": "0",
                "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
            });
        }
        console.log(Global.currentIframe().oTrain.operateStep);
        Global.currentIframe().oTrain.showStepTip(stepList.children.length);
    });


    $('#sanhaopainifakongzhixiangshoudongyaokong9').click(function() {
        var stepList = Global.currentIframe().document.getElementById('questionStepList');
        var classname = document.getElementById('sanhaopainifakongzhixiangshoudongyaokong9').className;
        if (classname.indexOf('sanhaopainifakongzhixiangshoudongyaokong9-btn-off') >= 0) {
            $('#sanhaopainifakongzhixiangshoudongyaokong9').addClass('sanhaopainifakongzhixiangshoudongyaokong9-btn-on');
            $('#sanhaopainifakongzhixiangshoudongyaokong9').removeClass('sanhaopainifakongzhixiangshoudongyaokong9-btn-off');
            $(stepList).append(' <li title="三号排泥阀9设置为手动"><span class="item">' + (stepList.children.length + 1) + ' ,三号排泥阀9设置为手动</span></li>');
            Global.currentIframe().oTrain.operateStep.push({
                "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
                "numbertype": "0",
                "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
                "opcid": "sanhaopainifakongzhixiangshoudongyaokong9",
                "opcname": "三号排泥阀9手动/遥控",
                "opcvalue": "1",
                "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
            });
            Global.currentIframe().oTrain.currentState.push({
                "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
                "numbertype": "0",
                "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
                "opcid": "sanhaopainifakongzhixiangshoudongyaokong9",
                "opcname": "三号排泥阀9手动/遥控",
                "opcvalue": "1",
                "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
            });
        } else {
            $('#sanhaopainifakongzhixiangshoudongyaokong9').addClass('sanhaopainifakongzhixiangshoudongyaokong9-btn-off');
            $('#sanhaopainifakongzhixiangshoudongyaokong9').removeClass('sanhaopainifakongzhixiangshoudongyaokong9-btn-on');
            $(stepList).append(' <li title="三号排泥阀9设置为遥控"><span class="item">' + (stepList.children.length + 1) + ' ,三号排泥阀9设置为遥控</span></li>');
            Global.currentIframe().oTrain.operateStep.push({
                "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
                "numbertype": "0",
                "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
                "opcid": "sanhaopainifakongzhixiangshoudongyaokong9",
                "opcname": "三号排泥阀9手动/遥控",
                "opcvalue": "0",
                "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
            });
            Global.currentIframe().oTrain.currentState.push({
                "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
                "numbertype": "0",
                "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
                "opcid": "sanhaopainifakongzhixiangshoudongyaokong9",
                "opcname": "三号排泥阀9手动/遥控",
                "opcvalue": "0",
                "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
            });
        }
        console.log(Global.currentIframe().oTrain.operateStep);
        Global.currentIframe().oTrain.showStepTip(stepList.children.length);
    });


    $('#sanhaopainifakongzhixiangshoudongyaokong10').click(function() {
        var stepList = Global.currentIframe().document.getElementById('questionStepList');
        var classname = document.getElementById('sanhaopainifakongzhixiangshoudongyaokong10').className;
        if (classname.indexOf('sanhaopainifakongzhixiangshoudongyaokong10-btn-off') >= 0) {
            $('#sanhaopainifakongzhixiangshoudongyaokong10').addClass('sanhaopainifakongzhixiangshoudongyaokong10-btn-on');
            $('#sanhaopainifakongzhixiangshoudongyaokong10').removeClass('sanhaopainifakongzhixiangshoudongyaokong10-btn-off');
            $(stepList).append(' <li title="三号排泥阀10设置为手动"><span class="item">' + (stepList.children.length + 1) + ' ,三号排泥阀10设置为手动</span></li>');
            Global.currentIframe().oTrain.operateStep.push({
                "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
                "numbertype": "0",
                "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
                "opcid": "sanhaopainifakongzhixiangshoudongyaokong10",
                "opcname": "三号排泥阀10手动/遥控",
                "opcvalue": "1",
                "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
            });
            Global.currentIframe().oTrain.currentState.push({
                "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
                "numbertype": "0",
                "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
                "opcid": "sanhaopainifakongzhixiangshoudongyaokong10",
                "opcname": "三号排泥阀10手动/遥控",
                "opcvalue": "1",
                "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
            });
        } else {
            $('#sanhaopainifakongzhixiangshoudongyaokong10').addClass('sanhaopainifakongzhixiangshoudongyaokong10-btn-off');
            $('#sanhaopainifakongzhixiangshoudongyaokong10').removeClass('sanhaopainifakongzhixiangshoudongyaokong10-btn-on');
            $(stepList).append(' <li title="三号排泥阀10设置为遥控"><span class="item">' + (stepList.children.length + 1) + ' ,三号排泥阀10设置为遥控</span></li>');
            Global.currentIframe().oTrain.operateStep.push({
                "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
                "numbertype": "0",
                "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
                "opcid": "sanhaopainifakongzhixiangshoudongyaokong10",
                "opcname": "三号排泥阀10手动/遥控",
                "opcvalue": "0",
                "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
            });
            Global.currentIframe().oTrain.currentState.push({
                "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
                "numbertype": "0",
                "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
                "opcid": "sanhaopainifakongzhixiangshoudongyaokong10",
                "opcname": "三号排泥阀10手动/遥控",
                "opcvalue": "0",
                "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
            });
        }
        console.log(Global.currentIframe().oTrain.operateStep);
        Global.currentIframe().oTrain.showStepTip(stepList.children.length);
    });


    //
    $('#sanhaopainifakongzhixiangshoudongyaokong11').click(function() {
        var stepList = Global.currentIframe().document.getElementById('questionStepList');
        var classname = document.getElementById('sanhaopainifakongzhixiangshoudongyaokong11').className;
        if (classname.indexOf('sanhaopainifakongzhixiangshoudongyaokong11-btn-off') >= 0) {
            $('#sanhaopainifakongzhixiangshoudongyaokong11').addClass('sanhaopainifakongzhixiangshoudongyaokong11-btn-on');
            $('#sanhaopainifakongzhixiangshoudongyaokong11').removeClass('sanhaopainifakongzhixiangshoudongyaokong11-btn-off');
            $(stepList).append(' <li title="三号排泥阀11设置为手动"><span class="item">' + (stepList.children.length + 1) + ' ,三号排泥阀11设置为手动</span></li>');
            Global.currentIframe().oTrain.operateStep.push({
                "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
                "numbertype": "0",
                "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
                "opcid": "sanhaopainifakongzhixiangshoudongyaokong11",
                "opcname": "三号排泥阀11手动/遥控",
                "opcvalue": "1",
                "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
            });
            Global.currentIframe().oTrain.currentState.push({
                "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
                "numbertype": "0",
                "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
                "opcid": "sanhaopainifakongzhixiangshoudongyaokong11",
                "opcname": "三号排泥阀11手动/遥控",
                "opcvalue": "1",
                "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
            });
        } else {
            $('#sanhaopainifakongzhixiangshoudongyaokong11').addClass('sanhaopainifakongzhixiangshoudongyaokong11-btn-off');
            $('#sanhaopainifakongzhixiangshoudongyaokong11').removeClass('sanhaopainifakongzhixiangshoudongyaokong11-btn-on');
            $(stepList).append(' <li title="三号排泥阀11设置为遥控"><span class="item">' + (stepList.children.length + 1) + ' ,三号排泥阀11设置为遥控</span></li>');
            Global.currentIframe().oTrain.operateStep.push({
                "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
                "numbertype": "0",
                "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
                "opcid": "sanhaopainifakongzhixiangshoudongyaokong11",
                "opcname": "三号排泥阀11手动/遥控",
                "opcvalue": "0",
                "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
            });
            Global.currentIframe().oTrain.currentState.push({
                "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
                "numbertype": "0",
                "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
                "opcid": "sanhaopainifakongzhixiangshoudongyaokong11",
                "opcname": "三号排泥阀11手动/遥控",
                "opcvalue": "0",
                "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
            });
        }
        console.log(Global.currentIframe().oTrain.operateStep);
        Global.currentIframe().oTrain.showStepTip(stepList.children.length);
    });

    $('#sanhaopainifakongzhixiangshoudongyaokong12').click(function() {
        var stepList = Global.currentIframe().document.getElementById('questionStepList');
        var classname = document.getElementById('sanhaopainifakongzhixiangshoudongyaokong12').className;
        if (classname.indexOf('sanhaopainifakongzhixiangshoudongyaokong12-btn-off') >= 0) {
            $('#sanhaopainifakongzhixiangshoudongyaokong12').addClass('sanhaopainifakongzhixiangshoudongyaokong12-btn-on');
            $('#sanhaopainifakongzhixiangshoudongyaokong12').removeClass('sanhaopainifakongzhixiangshoudongyaokong12-btn-off');
            $(stepList).append(' <li title="三号排泥阀12设置为手动"><span class="item">' + (stepList.children.length + 1) + ' ,三号排泥阀12设置为手动</span></li>');
            Global.currentIframe().oTrain.operateStep.push({
                "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
                "numbertype": "0",
                "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
                "opcid": "sanhaopainifakongzhixiangshoudongyaokong12",
                "opcname": "三号排泥阀12手动/遥控",
                "opcvalue": "1",
                "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
            });
            Global.currentIframe().oTrain.currentState.push({
                "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
                "numbertype": "0",
                "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
                "opcid": "sanhaopainifakongzhixiangshoudongyaokong12",
                "opcname": "三号排泥阀12手动/遥控",
                "opcvalue": "1",
                "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
            });
        } else {
            $('#sanhaopainifakongzhixiangshoudongyaokong12').addClass('sanhaopainifakongzhixiangshoudongyaokong12-btn-off');
            $('#sanhaopainifakongzhixiangshoudongyaokong12').removeClass('sanhaopainifakongzhixiangshoudongyaokong12-btn-on');
            $(stepList).append(' <li title="三号排泥阀12设置为遥控"><span class="item">' + (stepList.children.length + 1) + ' ,三号排泥阀12设置为遥控</span></li>');
            Global.currentIframe().oTrain.operateStep.push({
                "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
                "numbertype": "0",
                "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
                "opcid": "sanhaopainifakongzhixiangshoudongyaokong12",
                "opcname": "三号排泥阀12手动/遥控",
                "opcvalue": "0",
                "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
            });
            Global.currentIframe().oTrain.currentState.push({
                "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
                "numbertype": "0",
                "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
                "opcid": "sanhaopainifakongzhixiangshoudongyaokong12",
                "opcname": "三号排泥阀12手动/遥控",
                "opcvalue": "0",
                "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
            });
        }
        console.log(Global.currentIframe().oTrain.operateStep);
        Global.currentIframe().oTrain.showStepTip(stepList.children.length);
    });

    $('#sanhaopainifakongzhixiangshoudongyaokong13').click(function() {
        var stepList = Global.currentIframe().document.getElementById('questionStepList');
        var classname = document.getElementById('sanhaopainifakongzhixiangshoudongyaokong13').className;
        if (classname.indexOf('sanhaopainifakongzhixiangshoudongyaokong13-btn-off') >= 0) {
            $('#sanhaopainifakongzhixiangshoudongyaokong13').addClass('sanhaopainifakongzhixiangshoudongyaokong13-btn-on');
            $('#sanhaopainifakongzhixiangshoudongyaokong13').removeClass('sanhaopainifakongzhixiangshoudongyaokong13-btn-off');
            $(stepList).append(' <li title="三号排泥阀13设置为手动"><span class="item">' + (stepList.children.length + 1) + ' ,三号排泥阀13设置为手动</span></li>');
            Global.currentIframe().oTrain.operateStep.push({
                "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
                "numbertype": "0",
                "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
                "opcid": "sanhaopainifakongzhixiangshoudongyaokong13",
                "opcname": "三号排泥阀13手动/遥控",
                "opcvalue": "1",
                "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
            });
            Global.currentIframe().oTrain.currentState.push({
                "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
                "numbertype": "0",
                "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
                "opcid": "sanhaopainifakongzhixiangshoudongyaokong13",
                "opcname": "三号排泥阀13手动/遥控",
                "opcvalue": "1",
                "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
            });
        } else {
            $('#sanhaopainifakongzhixiangshoudongyaokong13').addClass('sanhaopainifakongzhixiangshoudongyaokong13-btn-off');
            $('#sanhaopainifakongzhixiangshoudongyaokong13').removeClass('sanhaopainifakongzhixiangshoudongyaokong13-btn-on');
            $(stepList).append(' <li title="三号排泥阀13设置为遥控"><span class="item">' + (stepList.children.length + 1) + ' ,三号排泥阀13设置为遥控</span></li>');
            Global.currentIframe().oTrain.operateStep.push({
                "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
                "numbertype": "0",
                "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
                "opcid": "sanhaopainifakongzhixiangshoudongyaokong13",
                "opcname": "三号排泥阀13手动/遥控",
                "opcvalue": "0",
                "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
            });
            Global.currentIframe().oTrain.currentState.push({
                "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
                "numbertype": "0",
                "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
                "opcid": "sanhaopainifakongzhixiangshoudongyaokong13",
                "opcname": "三号排泥阀13手动/遥控",
                "opcvalue": "0",
                "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
            });
        }
        console.log(Global.currentIframe().oTrain.operateStep);
        Global.currentIframe().oTrain.showStepTip(stepList.children.length);
    });


    $('#sanhaopainifakongzhixiangshoudongyaokong14').click(function() {
        var stepList = Global.currentIframe().document.getElementById('questionStepList');
        var classname = document.getElementById('sanhaopainifakongzhixiangshoudongyaokong14').className;
        if (classname.indexOf('sanhaopainifakongzhixiangshoudongyaokong14-btn-off') >= 0) {
            $('#sanhaopainifakongzhixiangshoudongyaokong14').addClass('sanhaopainifakongzhixiangshoudongyaokong14-btn-on');
            $('#sanhaopainifakongzhixiangshoudongyaokong14').removeClass('sanhaopainifakongzhixiangshoudongyaokong14-btn-off');
            $(stepList).append(' <li title="三号排泥阀14设置为手动"><span class="item">' + (stepList.children.length + 1) + ' ,三号排泥阀14设置为手动</span></li>');
            Global.currentIframe().oTrain.operateStep.push({
                "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
                "numbertype": "0",
                "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
                "opcid": "sanhaopainifakongzhixiangshoudongyaokong14",
                "opcname": "三号排泥阀14手动/遥控",
                "opcvalue": "1",
                "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
            });
            Global.currentIframe().oTrain.currentState.push({
                "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
                "numbertype": "0",
                "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
                "opcid": "sanhaopainifakongzhixiangshoudongyaokong14",
                "opcname": "三号排泥阀14手动/遥控",
                "opcvalue": "1",
                "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
            });
        } else {
            $('#sanhaopainifakongzhixiangshoudongyaokong14').addClass('sanhaopainifakongzhixiangshoudongyaokong14-btn-off');
            $('#sanhaopainifakongzhixiangshoudongyaokong14').removeClass('sanhaopainifakongzhixiangshoudongyaokong14-btn-on');
            $(stepList).append(' <li title="三号排泥阀14设置为遥控"><span class="item">' + (stepList.children.length + 1) + ' ,三号排泥阀14设置为遥控</span></li>');
            Global.currentIframe().oTrain.operateStep.push({
                "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
                "numbertype": "0",
                "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
                "opcid": "sanhaopainifakongzhixiangshoudongyaokong14",
                "opcname": "三号排泥阀14手动/遥控",
                "opcvalue": "0",
                "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
            });
            Global.currentIframe().oTrain.currentState.push({
                "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
                "numbertype": "0",
                "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
                "opcid": "sanhaopainifakongzhixiangshoudongyaokong14",
                "opcname": "三号排泥阀14手动/遥控",
                "opcvalue": "0",
                "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
            });
        }
        console.log(Global.currentIframe().oTrain.operateStep);
        Global.currentIframe().oTrain.showStepTip(stepList.children.length);
    });


    $('#sanhaopainifakongzhixiangshoudongyaokong15').click(function() {
        var stepList = Global.currentIframe().document.getElementById('questionStepList');
        var classname = document.getElementById('sanhaopainifakongzhixiangshoudongyaokong15').className;
        if (classname.indexOf('sanhaopainifakongzhixiangshoudongyaokong15-btn-off') >= 0) {
            $('#sanhaopainifakongzhixiangshoudongyaokong15').addClass('sanhaopainifakongzhixiangshoudongyaokong15-btn-on');
            $('#sanhaopainifakongzhixiangshoudongyaokong15').removeClass('sanhaopainifakongzhixiangshoudongyaokong15-btn-off');
            $(stepList).append(' <li title="三号排泥阀15设置为手动"><span class="item">' + (stepList.children.length + 1) + ' ,三号排泥阀15设置为手动</span></li>');
            Global.currentIframe().oTrain.operateStep.push({
                "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
                "numbertype": "0",
                "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
                "opcid": "sanhaopainifakongzhixiangshoudongyaokong15",
                "opcname": "三号排泥阀15手动/遥控",
                "opcvalue": "1",
                "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
            });
            Global.currentIframe().oTrain.currentState.push({
                "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
                "numbertype": "0",
                "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
                "opcid": "sanhaopainifakongzhixiangshoudongyaokong15",
                "opcname": "三号排泥阀15手动/遥控",
                "opcvalue": "1",
                "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
            });
        } else {
            $('#sanhaopainifakongzhixiangshoudongyaokong15').addClass('sanhaopainifakongzhixiangshoudongyaokong15-btn-off');
            $('#sanhaopainifakongzhixiangshoudongyaokong15').removeClass('sanhaopainifakongzhixiangshoudongyaokong15-btn-on');
            $(stepList).append(' <li title="三号排泥阀15设置为遥控"><span class="item">' + (stepList.children.length + 1) + ' ,三号排泥阀15设置为遥控</span></li>');
            Global.currentIframe().oTrain.operateStep.push({
                "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
                "numbertype": "0",
                "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
                "opcid": "sanhaopainifakongzhixiangshoudongyaokong15",
                "opcname": "三号排泥阀15手动/遥控",
                "opcvalue": "0",
                "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
            });
            Global.currentIframe().oTrain.currentState.push({
                "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
                "numbertype": "0",
                "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
                "opcid": "sanhaopainifakongzhixiangshoudongyaokong15",
                "opcname": "三号排泥阀15手动/遥控",
                "opcvalue": "0",
                "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
            });
        }
        console.log(Global.currentIframe().oTrain.operateStep);
        Global.currentIframe().oTrain.showStepTip(stepList.children.length);
    });


    $('#sanhaopainifakongzhixiangshoudongyaokong16').click(function() {
        var stepList = Global.currentIframe().document.getElementById('questionStepList');
        var classname = document.getElementById('sanhaopainifakongzhixiangshoudongyaokong16').className;
        if (classname.indexOf('sanhaopainifakongzhixiangshoudongyaokong16-btn-off') >= 0) {
            $('#sanhaopainifakongzhixiangshoudongyaokong16').addClass('sanhaopainifakongzhixiangshoudongyaokong16-btn-on');
            $('#sanhaopainifakongzhixiangshoudongyaokong16').removeClass('sanhaopainifakongzhixiangshoudongyaokong16-btn-off');
            $(stepList).append(' <li title="三号排泥阀16设置为手动"><span class="item">' + (stepList.children.length + 1) + ' ,三号排泥阀16设置为手动</span></li>');
            Global.currentIframe().oTrain.operateStep.push({
                "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
                "numbertype": "0",
                "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
                "opcid": "sanhaopainifakongzhixiangshoudongyaokong16",
                "opcname": "三号排泥阀16手动/遥控",
                "opcvalue": "1",
                "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
            });
            Global.currentIframe().oTrain.currentState.push({
                "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
                "numbertype": "0",
                "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
                "opcid": "sanhaopainifakongzhixiangshoudongyaokong16",
                "opcname": "三号排泥阀16手动/遥控",
                "opcvalue": "1",
                "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
            });
        } else {
            $('#sanhaopainifakongzhixiangshoudongyaokong16').addClass('sanhaopainifakongzhixiangshoudongyaokong16-btn-off');
            $('#sanhaopainifakongzhixiangshoudongyaokong16').removeClass('sanhaopainifakongzhixiangshoudongyaokong16-btn-on');
            $(stepList).append(' <li title="三号排泥阀16设置为遥控"><span class="item">' + (stepList.children.length + 1) + ' ,三号排泥阀16设置为遥控</span></li>');
            Global.currentIframe().oTrain.operateStep.push({
                "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
                "numbertype": "0",
                "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
                "opcid": "sanhaopainifakongzhixiangshoudongyaokong16",
                "opcname": "三号排泥阀16手动/遥控",
                "opcvalue": "0",
                "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
            });
            Global.currentIframe().oTrain.currentState.push({
                "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
                "numbertype": "0",
                "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
                "opcid": "sanhaopainifakongzhixiangshoudongyaokong16",
                "opcname": "三号排泥阀16手动/遥控",
                "opcvalue": "0",
                "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
            });
        }
        console.log(Global.currentIframe().oTrain.operateStep);
        Global.currentIframe().oTrain.showStepTip(stepList.children.length);
    });

    $('#sanhaopainifakongzhixiangshoudongyaokong18').click(function() {
        var stepList = Global.currentIframe().document.getElementById('questionStepList');
        var classname = document.getElementById('sanhaopainifakongzhixiangshoudongyaokong18').className;
        if (classname.indexOf('sanhaopainifakongzhixiangshoudongyaokong18-btn-off') >= 0) {
            $('#sanhaopainifakongzhixiangshoudongyaokong18').addClass('sanhaopainifakongzhixiangshoudongyaokong18-btn-on');
            $('#sanhaopainifakongzhixiangshoudongyaokong18').removeClass('sanhaopainifakongzhixiangshoudongyaokong18-btn-off');
            $(stepList).append(' <li title="三号排泥阀18设置为手动"><span class="item">' + (stepList.children.length + 1) + ' ,三号排泥阀18设置为手动</span></li>');
            Global.currentIframe().oTrain.operateStep.push({
                "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
                "numbertype": "0",
                "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
                "opcid": "sanhaopainifakongzhixiangshoudongyaokong18",
                "opcname": "三号排泥阀18手动/遥控",
                "opcvalue": "1",
                "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
            });
            Global.currentIframe().oTrain.currentState.push({
                "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
                "numbertype": "0",
                "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
                "opcid": "sanhaopainifakongzhixiangshoudongyaokong18",
                "opcname": "三号排泥阀18手动/遥控",
                "opcvalue": "1",
                "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
            });
        } else {
            $('#sanhaopainifakongzhixiangshoudongyaokong18').addClass('sanhaopainifakongzhixiangshoudongyaokong18-btn-off');
            $('#sanhaopainifakongzhixiangshoudongyaokong18').removeClass('sanhaopainifakongzhixiangshoudongyaokong18-btn-on');
            $(stepList).append(' <li title="三号排泥阀18设置为遥控"><span class="item">' + (stepList.children.length + 1) + ' ,三号排泥阀18设置为遥控</span></li>');
            Global.currentIframe().oTrain.operateStep.push({
                "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
                "numbertype": "0",
                "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
                "opcid": "sanhaopainifakongzhixiangshoudongyaokong18",
                "opcname": "三号排泥阀18手动/遥控",
                "opcvalue": "0",
                "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
            });
            Global.currentIframe().oTrain.currentState.push({
                "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
                "numbertype": "0",
                "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
                "opcid": "sanhaopainifakongzhixiangshoudongyaokong18",
                "opcname": "三号排泥阀18手动/遥控",
                "opcvalue": "0",
                "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
            });
        }
        console.log(Global.currentIframe().oTrain.operateStep);
        Global.currentIframe().oTrain.showStepTip(stepList.children.length);
    });

    $('#sanhaopainifakongzhixiangshoudongyaokong17').click(function() {
        var stepList = Global.currentIframe().document.getElementById('questionStepList');
        var classname = document.getElementById('sanhaopainifakongzhixiangshoudongyaokong17').className;
        if (classname.indexOf('sanhaopainifakongzhixiangshoudongyaokong17-btn-off') >= 0) {
            $('#sanhaopainifakongzhixiangshoudongyaokong17').addClass('sanhaopainifakongzhixiangshoudongyaokong17-btn-on');
            $('#sanhaopainifakongzhixiangshoudongyaokong17').removeClass('sanhaopainifakongzhixiangshoudongyaokong17-btn-off');
            $(stepList).append(' <li title="三号排泥阀17设置为手动"><span class="item">' + (stepList.children.length + 1) + ' ,三号排泥阀17设置为手动</span></li>');
            Global.currentIframe().oTrain.operateStep.push({
                "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
                "numbertype": "0",
                "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
                "opcid": "sanhaopainifakongzhixiangshoudongyaokong17",
                "opcname": "三号排泥阀17手动/遥控",
                "opcvalue": "1",
                "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
            });
            Global.currentIframe().oTrain.currentState.push({
                "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
                "numbertype": "0",
                "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
                "opcid": "sanhaopainifakongzhixiangshoudongyaokong17",
                "opcname": "三号排泥阀17手动/遥控",
                "opcvalue": "1",
                "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
            });
        } else {
            $('#sanhaopainifakongzhixiangshoudongyaokong17').addClass('sanhaopainifakongzhixiangshoudongyaokong17-btn-off');
            $('#sanhaopainifakongzhixiangshoudongyaokong17').removeClass('sanhaopainifakongzhixiangshoudongyaokong17-btn-on');
            $(stepList).append(' <li title="三号排泥阀17设置为遥控"><span class="item">' + (stepList.children.length + 1) + ' ,三号排泥阀17设置为遥控</span></li>');
            Global.currentIframe().oTrain.operateStep.push({
                "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
                "numbertype": "0",
                "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
                "opcid": "sanhaopainifakongzhixiangshoudongyaokong17",
                "opcname": "三号排泥阀17手动/遥控",
                "opcvalue": "0",
                "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
            });
            Global.currentIframe().oTrain.currentState.push({
                "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
                "numbertype": "0",
                "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
                "opcid": "sanhaopainifakongzhixiangshoudongyaokong17",
                "opcname": "三号排泥阀17手动/遥控",
                "opcvalue": "0",
                "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
            });
        }
        console.log(Global.currentIframe().oTrain.operateStep);
        Global.currentIframe().oTrain.showStepTip(stepList.children.length);
    });


    $('#sanhaopainifakongzhixiangshoudongyaokong19').click(function() {
        var stepList = Global.currentIframe().document.getElementById('questionStepList');
        var classname = document.getElementById('sanhaopainifakongzhixiangshoudongyaokong19').className;
        if (classname.indexOf('sanhaopainifakongzhixiangshoudongyaokong19-btn-off') >= 0) {
            $('#sanhaopainifakongzhixiangshoudongyaokong19').addClass('sanhaopainifakongzhixiangshoudongyaokong19-btn-on');
            $('#sanhaopainifakongzhixiangshoudongyaokong19').removeClass('sanhaopainifakongzhixiangshoudongyaokong19-btn-off');
            $(stepList).append(' <li title="三号排泥阀19设置为手动"><span class="item">' + (stepList.children.length + 1) + ' ,三号排泥阀19设置为手动</span></li>');
            Global.currentIframe().oTrain.operateStep.push({
                "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
                "numbertype": "0",
                "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
                "opcid": "sanhaopainifakongzhixiangshoudongyaokong19",
                "opcname": "三号排泥阀19手动/遥控",
                "opcvalue": "1",
                "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
            });
            Global.currentIframe().oTrain.currentState.push({
                "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
                "numbertype": "0",
                "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
                "opcid": "sanhaopainifakongzhixiangshoudongyaokong19",
                "opcname": "三号排泥阀19手动/遥控",
                "opcvalue": "1",
                "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
            });
        } else {
            $('#sanhaopainifakongzhixiangshoudongyaokong19').addClass('sanhaopainifakongzhixiangshoudongyaokong19-btn-off');
            $('#sanhaopainifakongzhixiangshoudongyaokong19').removeClass('sanhaopainifakongzhixiangshoudongyaokong19-btn-on');
            $(stepList).append(' <li title="三号排泥阀19设置为遥控"><span class="item">' + (stepList.children.length + 1) + ' ,三号排泥阀19设置为遥控</span></li>');
            Global.currentIframe().oTrain.operateStep.push({
                "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
                "numbertype": "0",
                "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
                "opcid": "sanhaopainifakongzhixiangshoudongyaokong19",
                "opcname": "三号排泥阀19手动/遥控",
                "opcvalue": "0",
                "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
            });
            Global.currentIframe().oTrain.currentState.push({
                "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
                "numbertype": "0",
                "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
                "opcid": "sanhaopainifakongzhixiangshoudongyaokong19",
                "opcname": "三号排泥阀19手动/遥控",
                "opcvalue": "0",
                "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
            });
        }
        console.log(Global.currentIframe().oTrain.operateStep);
        Global.currentIframe().oTrain.showStepTip(stepList.children.length);
    });


    $('#sanhaopainifakongzhixiangshoudongyaokong20').click(function() {
        var stepList = Global.currentIframe().document.getElementById('questionStepList');
        var classname = document.getElementById('sanhaopainifakongzhixiangshoudongyaokong20').className;
        if (classname.indexOf('sanhaopainifakongzhixiangshoudongyaokong20-btn-off') >= 0) {
            $('#sanhaopainifakongzhixiangshoudongyaokong20').addClass('sanhaopainifakongzhixiangshoudongyaokong20-btn-on');
            $('#sanhaopainifakongzhixiangshoudongyaokong20').removeClass('sanhaopainifakongzhixiangshoudongyaokong20-btn-off');
            $(stepList).append(' <li title="三号排泥阀20设置为手动"><span class="item">' + (stepList.children.length + 1) + ' ,三号排泥阀20设置为手动</span></li>');
            Global.currentIframe().oTrain.operateStep.push({
                "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
                "numbertype": "0",
                "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
                "opcid": "sanhaopainifakongzhixiangshoudongyaokong20",
                "opcname": "三号排泥阀20手动/遥控",
                "opcvalue": "1",
                "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
            });
            Global.currentIframe().oTrain.currentState.push({
                "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
                "numbertype": "0",
                "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
                "opcid": "sanhaopainifakongzhixiangshoudongyaokong20",
                "opcname": "三号排泥阀20手动/遥控",
                "opcvalue": "1",
                "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
            });
        } else {
            $('#sanhaopainifakongzhixiangshoudongyaokong20').addClass('sanhaopainifakongzhixiangshoudongyaokong20-btn-off');
            $('#sanhaopainifakongzhixiangshoudongyaokong20').removeClass('sanhaopainifakongzhixiangshoudongyaokong20-btn-on');
            $(stepList).append(' <li title="三号排泥阀20设置为遥控"><span class="item">' + (stepList.children.length + 1) + ' ,三号排泥阀20设置为遥控</span></li>');
            Global.currentIframe().oTrain.operateStep.push({
                "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
                "numbertype": "0",
                "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
                "opcid": "sanhaopainifakongzhixiangshoudongyaokong20",
                "opcname": "三号排泥阀20手动/遥控",
                "opcvalue": "0",
                "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
            });
            Global.currentIframe().oTrain.currentState.push({
                "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
                "numbertype": "0",
                "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
                "opcid": "sanhaopainifakongzhixiangshoudongyaokong20",
                "opcname": "三号排泥阀20手动/遥控",
                "opcvalue": "0",
                "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
            });
        }
        console.log(Global.currentIframe().oTrain.operateStep);
        Global.currentIframe().oTrain.showStepTip(stepList.children.length);
    });

    $('#sanhaopainifakongzhixiangkai1').click(function() {
        $('#sanhaopainifakongzhixiangkai1').removeClass('sanhaopainifakongzhixiangkai1-btn-off');
        $('#sanhaopainifakongzhixiangkai1').addClass('sanhaopainifakongzhixiangkai1-btn-on');
        $('#sanhaopainifakongzhixiangguan1').removeClass('sanhaopainifakongzhixiangguan1-btn-on');
        $('#sanhaopainifakongzhixiangguan1').addClass('sanhaopainifakongzhixiangguan1-btn-off');
        //
        var stepList = Global.currentIframe().document.getElementById('questionStepList');
        $(stepList).append(' <li title="三号排泥阀1开"><span class="item">' + (stepList.children.length + 1) + ' ,三号排泥阀1开</span></li>');
        Global.currentIframe().oTrain.operateStep.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "sanhaopainifakongzhixiangkai1",
            "opcname": "三号排泥阀1开",
            "opcvalue": "1",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        Global.currentIframe().oTrain.currentState.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "sanhaopainifakongzhixiangkai1",
            "opcname": "三号排泥阀1开",
            "opcvalue": "1",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        Global.currentIframe().oTrain.currentState.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "sanhaopainifakongzhixiangguan1",
            "opcname": "三号排泥阀1关",
            "opcvalue": "0",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });

        console.log(Global.currentIframe().oTrain.operateStep);
        Global.currentIframe().oTrain.showStepTip(stepList.children.length);
    });

    $('#sanhaopainifakongzhixiangguan1').click(function() {
        $('#sanhaopainifakongzhixiangguan1').removeClass('sanhaopainifakongzhixiangguan1-btn-off');
        $('#sanhaopainifakongzhixiangguan1').addClass('sanhaopainifakongzhixiangguan1-btn-on');
        $('#sanhaopainifakongzhixiangkai1').removeClass('sanhaopainifakongzhixiangkai1-btn-on');
        $('#sanhaopainifakongzhixiangkai1').addClass('sanhaopainifakongzhixiangkai1-btn-off');
        //
        var stepList = Global.currentIframe().document.getElementById('questionStepList');
        $(stepList).append(' <li title="三号排泥阀1关"><span class="item">' + (stepList.children.length + 1) + ' ,三号排泥阀1关</span></li>');
        Global.currentIframe().oTrain.operateStep.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "sanhaopainifakongzhixiangguan1",
            "opcname": "三号排泥阀1关",
            "opcvalue": "1",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        Global.currentIframe().oTrain.currentState.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "sanhaopainifakongzhixiangkai1",
            "opcname": "三号排泥阀1开",
            "opcvalue": "0",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        Global.currentIframe().oTrain.currentState.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "sanhaopainifakongzhixiangguan1",
            "opcname": "三号排泥阀1关",
            "opcvalue": "1",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });

        console.log(Global.currentIframe().oTrain.operateStep);
        Global.currentIframe().oTrain.showStepTip(stepList.children.length);
    });


    $('#sanhaopainifakongzhixiangkai2').click(function() {
        $('#sanhaopainifakongzhixiangkai2').removeClass('sanhaopainifakongzhixiangkai2-btn-off');
        $('#sanhaopainifakongzhixiangkai2').addClass('sanhaopainifakongzhixiangkai2-btn-on');
        $('#sanhaopainifakongzhixiangguan2').removeClass('sanhaopainifakongzhixiangguan2-btn-on');
        $('#sanhaopainifakongzhixiangguan2').addClass('sanhaopainifakongzhixiangguan2-btn-off');
        //
        var stepList = Global.currentIframe().document.getElementById('questionStepList');
        $(stepList).append(' <li title="三号排泥阀2开"><span class="item">' + (stepList.children.length + 1) + ' ,三号排泥阀2开</span></li>');
        Global.currentIframe().oTrain.operateStep.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "sanhaopainifakongzhixiangkai2",
            "opcname": "三号排泥阀2开",
            "opcvalue": "1",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        Global.currentIframe().oTrain.currentState.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "sanhaopainifakongzhixiangkai2",
            "opcname": "三号排泥阀2开",
            "opcvalue": "1",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        Global.currentIframe().oTrain.currentState.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "sanhaopainifakongzhixiangguan2",
            "opcname": "三号排泥阀2关",
            "opcvalue": "0",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });

        console.log(Global.currentIframe().oTrain.operateStep);
        Global.currentIframe().oTrain.showStepTip(stepList.children.length);
    });

    $('#sanhaopainifakongzhixiangguan2').click(function() {
        $('#sanhaopainifakongzhixiangguan2').removeClass('sanhaopainifakongzhixiangguan2-btn-off');
        $('#sanhaopainifakongzhixiangguan2').addClass('sanhaopainifakongzhixiangguan2-btn-on');
        $('#sanhaopainifakongzhixiangkai2').removeClass('sanhaopainifakongzhixiangkai2-btn-on');
        $('#sanhaopainifakongzhixiangkai2').addClass('sanhaopainifakongzhixiangkai2-btn-off');
        //
        var stepList = Global.currentIframe().document.getElementById('questionStepList');
        $(stepList).append(' <li title="三号排泥阀2关"><span class="item">' + (stepList.children.length + 1) + ' ,三号排泥阀2关</span></li>');
        Global.currentIframe().oTrain.operateStep.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "sanhaopainifakongzhixiangguan2",
            "opcname": "三号排泥阀2关",
            "opcvalue": "1",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        Global.currentIframe().oTrain.currentState.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "sanhaopainifakongzhixiangkai2",
            "opcname": "三号排泥阀2开",
            "opcvalue": "0",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        Global.currentIframe().oTrain.currentState.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "sanhaopainifakongzhixiangguan2",
            "opcname": "三号排泥阀2关",
            "opcvalue": "1",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });

        console.log(Global.currentIframe().oTrain.operateStep);
        Global.currentIframe().oTrain.showStepTip(stepList.children.length);
    });


    $('#sanhaopainifakongzhixiangkai3').click(function() {
        $('#sanhaopainifakongzhixiangkai3').removeClass('sanhaopainifakongzhixiangkai3-btn-off');
        $('#sanhaopainifakongzhixiangkai3').addClass('sanhaopainifakongzhixiangkai3-btn-on');
        $('#sanhaopainifakongzhixiangguan3').removeClass('sanhaopainifakongzhixiangguan3-btn-on');
        $('#sanhaopainifakongzhixiangguan3').addClass('sanhaopainifakongzhixiangguan3-btn-off');
        //
        var stepList = Global.currentIframe().document.getElementById('questionStepList');
        $(stepList).append(' <li title="三号排泥阀3开"><span class="item">' + (stepList.children.length + 1) + ' ,三号排泥阀3开</span></li>');
        Global.currentIframe().oTrain.operateStep.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "sanhaopainifakongzhixiangkai3",
            "opcname": "三号排泥阀3开",
            "opcvalue": "1",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        Global.currentIframe().oTrain.currentState.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "sanhaopainifakongzhixiangkai3",
            "opcname": "三号排泥阀3开",
            "opcvalue": "1",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        Global.currentIframe().oTrain.currentState.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "sanhaopainifakongzhixiangguan3",
            "opcname": "三号排泥阀3关",
            "opcvalue": "0",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });

        console.log(Global.currentIframe().oTrain.operateStep);
        Global.currentIframe().oTrain.showStepTip(stepList.children.length);
    });

    $('#sanhaopainifakongzhixiangguan3').click(function() {
        $('#sanhaopainifakongzhixiangguan3').removeClass('sanhaopainifakongzhixiangguan3-btn-off');
        $('#sanhaopainifakongzhixiangguan3').addClass('sanhaopainifakongzhixiangguan3-btn-on');
        $('#sanhaopainifakongzhixiangkai3').removeClass('sanhaopainifakongzhixiangkai3-btn-on');
        $('#sanhaopainifakongzhixiangkai3').addClass('sanhaopainifakongzhixiangkai3-btn-off');
        //
        var stepList = Global.currentIframe().document.getElementById('questionStepList');
        $(stepList).append(' <li title="三号排泥阀3关"><span class="item">' + (stepList.children.length + 1) + ' ,三号排泥阀3关</span></li>');
        Global.currentIframe().oTrain.operateStep.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "sanhaopainifakongzhixiangguan3",
            "opcname": "三号排泥阀3关",
            "opcvalue": "1",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        Global.currentIframe().oTrain.currentState.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "sanhaopainifakongzhixiangkai3",
            "opcname": "三号排泥阀3开",
            "opcvalue": "0",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        Global.currentIframe().oTrain.currentState.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "sanhaopainifakongzhixiangguan3",
            "opcname": "三号排泥阀3关",
            "opcvalue": "1",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });

        console.log(Global.currentIframe().oTrain.operateStep);
        Global.currentIframe().oTrain.showStepTip(stepList.children.length);
    });



    $('#sanhaopainifakongzhixiangkai4').click(function() {
        $('#sanhaopainifakongzhixiangkai4').removeClass('sanhaopainifakongzhixiangkai4-btn-off');
        $('#sanhaopainifakongzhixiangkai4').addClass('sanhaopainifakongzhixiangkai4-btn-on');
        $('#sanhaopainifakongzhixiangguan4').removeClass('sanhaopainifakongzhixiangguan4-btn-on');
        $('#sanhaopainifakongzhixiangguan4').addClass('sanhaopainifakongzhixiangguan4-btn-off');
        //
        var stepList = Global.currentIframe().document.getElementById('questionStepList');
        $(stepList).append(' <li title="三号排泥阀4开"><span class="item">' + (stepList.children.length + 1) + ' ,三号排泥阀4开</span></li>');
        Global.currentIframe().oTrain.operateStep.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "sanhaopainifakongzhixiangkai4",
            "opcname": "三号排泥阀4开",
            "opcvalue": "1",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        Global.currentIframe().oTrain.currentState.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "sanhaopainifakongzhixiangkai4",
            "opcname": "三号排泥阀4开",
            "opcvalue": "1",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        Global.currentIframe().oTrain.currentState.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "sanhaopainifakongzhixiangguan4",
            "opcname": "三号排泥阀4关",
            "opcvalue": "0",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });

        console.log(Global.currentIframe().oTrain.operateStep);
        Global.currentIframe().oTrain.showStepTip(stepList.children.length);
    });

    $('#sanhaopainifakongzhixiangguan4').click(function() {
        $('#sanhaopainifakongzhixiangguan4').removeClass('sanhaopainifakongzhixiangguan4-btn-off');
        $('#sanhaopainifakongzhixiangguan4').addClass('sanhaopainifakongzhixiangguan4-btn-on');
        $('#sanhaopainifakongzhixiangkai4').removeClass('sanhaopainifakongzhixiangkai4-btn-on');
        $('#sanhaopainifakongzhixiangkai4').addClass('sanhaopainifakongzhixiangkai4-btn-off');
        //
        var stepList = Global.currentIframe().document.getElementById('questionStepList');
        $(stepList).append(' <li title="三号排泥阀4关"><span class="item">' + (stepList.children.length + 1) + ' ,三号排泥阀4关</span></li>');
        Global.currentIframe().oTrain.operateStep.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "sanhaopainifakongzhixiangguan4",
            "opcname": "三号排泥阀4关",
            "opcvalue": "1",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        Global.currentIframe().oTrain.currentState.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "sanhaopainifakongzhixiangkai4",
            "opcname": "三号排泥阀4开",
            "opcvalue": "0",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        Global.currentIframe().oTrain.currentState.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "sanhaopainifakongzhixiangguan4",
            "opcname": "三号排泥阀4关",
            "opcvalue": "1",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });

        console.log(Global.currentIframe().oTrain.operateStep);
        Global.currentIframe().oTrain.showStepTip(stepList.children.length);
    });



    $('#sanhaopainifakongzhixiangkai5').click(function() {
        $('#sanhaopainifakongzhixiangkai5').removeClass('sanhaopainifakongzhixiangkai5-btn-off');
        $('#sanhaopainifakongzhixiangkai5').addClass('sanhaopainifakongzhixiangkai5-btn-on');
        $('#sanhaopainifakongzhixiangguan5').removeClass('sanhaopainifakongzhixiangguan5-btn-on');
        $('#sanhaopainifakongzhixiangguan5').addClass('sanhaopainifakongzhixiangguan5-btn-off');
        //
        var stepList = Global.currentIframe().document.getElementById('questionStepList');
        $(stepList).append(' <li title="三号排泥阀5开"><span class="item">' + (stepList.children.length + 1) + ' ,三号排泥阀5开</span></li>');
        Global.currentIframe().oTrain.operateStep.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "sanhaopainifakongzhixiangkai5",
            "opcname": "三号排泥阀5开",
            "opcvalue": "1",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        Global.currentIframe().oTrain.currentState.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "sanhaopainifakongzhixiangkai5",
            "opcname": "三号排泥阀5开",
            "opcvalue": "1",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        Global.currentIframe().oTrain.currentState.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "sanhaopainifakongzhixiangguan5",
            "opcname": "三号排泥阀5关",
            "opcvalue": "0",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });

        console.log(Global.currentIframe().oTrain.operateStep);
        Global.currentIframe().oTrain.showStepTip(stepList.children.length);
    });

    $('#sanhaopainifakongzhixiangguan5').click(function() {
        $('#sanhaopainifakongzhixiangguan5').removeClass('sanhaopainifakongzhixiangguan5-btn-off');
        $('#sanhaopainifakongzhixiangguan5').addClass('sanhaopainifakongzhixiangguan5-btn-on');
        $('#sanhaopainifakongzhixiangkai5').removeClass('sanhaopainifakongzhixiangkai5-btn-on');
        $('#sanhaopainifakongzhixiangkai5').addClass('sanhaopainifakongzhixiangkai5-btn-off');
        //
        var stepList = Global.currentIframe().document.getElementById('questionStepList');
        $(stepList).append(' <li title="三号排泥阀5关"><span class="item">' + (stepList.children.length + 1) + ' ,三号排泥阀5关</span></li>');
        Global.currentIframe().oTrain.operateStep.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "sanhaopainifakongzhixiangguan5",
            "opcname": "三号排泥阀5关",
            "opcvalue": "1",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        Global.currentIframe().oTrain.currentState.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "sanhaopainifakongzhixiangkai5",
            "opcname": "三号排泥阀5开",
            "opcvalue": "0",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        Global.currentIframe().oTrain.currentState.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "sanhaopainifakongzhixiangguan5",
            "opcname": "三号排泥阀5关",
            "opcvalue": "1",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });

        console.log(Global.currentIframe().oTrain.operateStep);
        Global.currentIframe().oTrain.showStepTip(stepList.children.length);
    });


    $('#sanhaopainifakongzhixiangkai6').click(function() {
        $('#sanhaopainifakongzhixiangkai6').removeClass('sanhaopainifakongzhixiangkai6-btn-off');
        $('#sanhaopainifakongzhixiangkai6').addClass('sanhaopainifakongzhixiangkai6-btn-on');
        $('#sanhaopainifakongzhixiangguan6').removeClass('sanhaopainifakongzhixiangguan6-btn-on');
        $('#sanhaopainifakongzhixiangguan6').addClass('sanhaopainifakongzhixiangguan6-btn-off');
        //
        var stepList = Global.currentIframe().document.getElementById('questionStepList');
        $(stepList).append(' <li title="三号排泥阀6开"><span class="item">' + (stepList.children.length + 1) + ' ,三号排泥阀6开</span></li>');
        Global.currentIframe().oTrain.operateStep.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "sanhaopainifakongzhixiangkai6",
            "opcname": "三号排泥阀6开",
            "opcvalue": "1",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        Global.currentIframe().oTrain.currentState.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "sanhaopainifakongzhixiangkai6",
            "opcname": "三号排泥阀6开",
            "opcvalue": "1",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        Global.currentIframe().oTrain.currentState.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "sanhaopainifakongzhixiangguan6",
            "opcname": "三号排泥阀6关",
            "opcvalue": "0",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });

        console.log(Global.currentIframe().oTrain.operateStep);
        Global.currentIframe().oTrain.showStepTip(stepList.children.length);
    });

    $('#sanhaopainifakongzhixiangguan6').click(function() {
        $('#sanhaopainifakongzhixiangguan6').removeClass('sanhaopainifakongzhixiangguan6-btn-off');
        $('#sanhaopainifakongzhixiangguan6').addClass('sanhaopainifakongzhixiangguan6-btn-on');
        $('#sanhaopainifakongzhixiangkai6').removeClass('sanhaopainifakongzhixiangkai6-btn-on');
        $('#sanhaopainifakongzhixiangkai6').addClass('sanhaopainifakongzhixiangkai6-btn-off');
        //
        var stepList = Global.currentIframe().document.getElementById('questionStepList');
        $(stepList).append(' <li title="三号排泥阀6关"><span class="item">' + (stepList.children.length + 1) + ' ,三号排泥阀6关</span></li>');
        Global.currentIframe().oTrain.operateStep.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "sanhaopainifakongzhixiangguan6",
            "opcname": "三号排泥阀6关",
            "opcvalue": "1",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        Global.currentIframe().oTrain.currentState.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "sanhaopainifakongzhixiangkai6",
            "opcname": "三号排泥阀6开",
            "opcvalue": "0",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        Global.currentIframe().oTrain.currentState.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "sanhaopainifakongzhixiangguan6",
            "opcname": "三号排泥阀6关",
            "opcvalue": "1",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });

        console.log(Global.currentIframe().oTrain.operateStep);
        Global.currentIframe().oTrain.showStepTip(stepList.children.length);
    });


    $('#sanhaopainifakongzhixiangkai7').click(function() {
        $('#sanhaopainifakongzhixiangkai7').removeClass('sanhaopainifakongzhixiangkai7-btn-off');
        $('#sanhaopainifakongzhixiangkai7').addClass('sanhaopainifakongzhixiangkai7-btn-on');
        $('#sanhaopainifakongzhixiangguan7').removeClass('sanhaopainifakongzhixiangguan7-btn-on');
        $('#sanhaopainifakongzhixiangguan7').addClass('sanhaopainifakongzhixiangguan7-btn-off');
        //
        var stepList = Global.currentIframe().document.getElementById('questionStepList');
        $(stepList).append(' <li title="三号排泥阀7开"><span class="item">' + (stepList.children.length + 1) + ' ,三号排泥阀7开</span></li>');
        Global.currentIframe().oTrain.operateStep.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "sanhaopainifakongzhixiangkai7",
            "opcname": "三号排泥阀7开",
            "opcvalue": "1",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        Global.currentIframe().oTrain.currentState.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "sanhaopainifakongzhixiangkai7",
            "opcname": "三号排泥阀7开",
            "opcvalue": "1",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        Global.currentIframe().oTrain.currentState.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "sanhaopainifakongzhixiangguan7",
            "opcname": "三号排泥阀7关",
            "opcvalue": "0",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });

        console.log(Global.currentIframe().oTrain.operateStep);
        Global.currentIframe().oTrain.showStepTip(stepList.children.length);
    });

    $('#sanhaopainifakongzhixiangguan7').click(function() {
        $('#sanhaopainifakongzhixiangguan7').removeClass('sanhaopainifakongzhixiangguan7-btn-off');
        $('#sanhaopainifakongzhixiangguan7').addClass('sanhaopainifakongzhixiangguan7-btn-on');
        $('#sanhaopainifakongzhixiangkai7').removeClass('sanhaopainifakongzhixiangkai7-btn-on');
        $('#sanhaopainifakongzhixiangkai7').addClass('sanhaopainifakongzhixiangkai7-btn-off');
        //
        var stepList = Global.currentIframe().document.getElementById('questionStepList');
        $(stepList).append(' <li title="三号排泥阀7关"><span class="item">' + (stepList.children.length + 1) + ' ,三号排泥阀7关</span></li>');
        Global.currentIframe().oTrain.operateStep.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "sanhaopainifakongzhixiangguan7",
            "opcname": "三号排泥阀7关",
            "opcvalue": "1",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        Global.currentIframe().oTrain.currentState.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "sanhaopainifakongzhixiangkai7",
            "opcname": "三号排泥阀7开",
            "opcvalue": "0",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        Global.currentIframe().oTrain.currentState.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "sanhaopainifakongzhixiangguan7",
            "opcname": "三号排泥阀7关",
            "opcvalue": "1",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });

        console.log(Global.currentIframe().oTrain.operateStep);
        Global.currentIframe().oTrain.showStepTip(stepList.children.length);
    });

    $('#sanhaopainifakongzhixiangkai8').click(function() {
        $('#sanhaopainifakongzhixiangkai8').removeClass('sanhaopainifakongzhixiangkai8-btn-off');
        $('#sanhaopainifakongzhixiangkai8').addClass('sanhaopainifakongzhixiangkai8-btn-on');
        $('#sanhaopainifakongzhixiangguan8').removeClass('sanhaopainifakongzhixiangguan8-btn-on');
        $('#sanhaopainifakongzhixiangguan8').addClass('sanhaopainifakongzhixiangguan8-btn-off');
        //
        var stepList = Global.currentIframe().document.getElementById('questionStepList');
        $(stepList).append(' <li title="三号排泥阀8开"><span class="item">' + (stepList.children.length + 1) + ' ,三号排泥阀8开</span></li>');
        Global.currentIframe().oTrain.operateStep.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "sanhaopainifakongzhixiangkai8",
            "opcname": "三号排泥阀8开",
            "opcvalue": "1",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        Global.currentIframe().oTrain.currentState.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "sanhaopainifakongzhixiangkai8",
            "opcname": "三号排泥阀8开",
            "opcvalue": "1",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        Global.currentIframe().oTrain.currentState.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "sanhaopainifakongzhixiangguan8",
            "opcname": "三号排泥阀8关",
            "opcvalue": "0",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });

        console.log(Global.currentIframe().oTrain.operateStep);
        Global.currentIframe().oTrain.showStepTip(stepList.children.length);
    });

    $('#sanhaopainifakongzhixiangguan8').click(function() {
        $('#sanhaopainifakongzhixiangguan8').removeClass('sanhaopainifakongzhixiangguan8-btn-off');
        $('#sanhaopainifakongzhixiangguan8').addClass('sanhaopainifakongzhixiangguan8-btn-on');
        $('#sanhaopainifakongzhixiangkai8').removeClass('sanhaopainifakongzhixiangkai8-btn-on');
        $('#sanhaopainifakongzhixiangkai8').addClass('sanhaopainifakongzhixiangkai8-btn-off');
        //
        var stepList = Global.currentIframe().document.getElementById('questionStepList');
        $(stepList).append(' <li title="三号排泥阀8关"><span class="item">' + (stepList.children.length + 1) + ' ,三号排泥阀8关</span></li>');
        Global.currentIframe().oTrain.operateStep.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "sanhaopainifakongzhixiangguan8",
            "opcname": "三号排泥阀8关",
            "opcvalue": "1",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        Global.currentIframe().oTrain.currentState.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "sanhaopainifakongzhixiangkai8",
            "opcname": "三号排泥阀8开",
            "opcvalue": "0",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        Global.currentIframe().oTrain.currentState.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "sanhaopainifakongzhixiangguan8",
            "opcname": "三号排泥阀8关",
            "opcvalue": "1",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });

        console.log(Global.currentIframe().oTrain.operateStep);
        Global.currentIframe().oTrain.showStepTip(stepList.children.length);
    });


    $('#sanhaopainifakongzhixiangkai9').click(function() {
        $('#sanhaopainifakongzhixiangkai9').removeClass('sanhaopainifakongzhixiangkai9-btn-off');
        $('#sanhaopainifakongzhixiangkai9').addClass('sanhaopainifakongzhixiangkai9-btn-on');
        $('#sanhaopainifakongzhixiangguan9').removeClass('sanhaopainifakongzhixiangguan9-btn-on');
        $('#sanhaopainifakongzhixiangguan9').addClass('sanhaopainifakongzhixiangguan9-btn-off');
        //
        var stepList = Global.currentIframe().document.getElementById('questionStepList');
        $(stepList).append(' <li title="三号排泥阀9开"><span class="item">' + (stepList.children.length + 1) + ' ,三号排泥阀9开</span></li>');
        Global.currentIframe().oTrain.operateStep.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "sanhaopainifakongzhixiangkai9",
            "opcname": "三号排泥阀9开",
            "opcvalue": "1",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        Global.currentIframe().oTrain.currentState.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "sanhaopainifakongzhixiangkai9",
            "opcname": "三号排泥阀9开",
            "opcvalue": "1",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        Global.currentIframe().oTrain.currentState.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "sanhaopainifakongzhixiangguan9",
            "opcname": "三号排泥阀9关",
            "opcvalue": "0",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });

        console.log(Global.currentIframe().oTrain.operateStep);
        Global.currentIframe().oTrain.showStepTip(stepList.children.length);
    });

    $('#sanhaopainifakongzhixiangguan9').click(function() {
        $('#sanhaopainifakongzhixiangguan9').removeClass('sanhaopainifakongzhixiangguan9-btn-off');
        $('#sanhaopainifakongzhixiangguan9').addClass('sanhaopainifakongzhixiangguan9-btn-on');
        $('#sanhaopainifakongzhixiangkai9').removeClass('sanhaopainifakongzhixiangkai9-btn-on');
        $('#sanhaopainifakongzhixiangkai9').addClass('sanhaopainifakongzhixiangkai9-btn-off');
        //
        var stepList = Global.currentIframe().document.getElementById('questionStepList');
        $(stepList).append(' <li title="三号排泥阀9关"><span class="item">' + (stepList.children.length + 1) + ' ,三号排泥阀9关</span></li>');
        Global.currentIframe().oTrain.operateStep.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "sanhaopainifakongzhixiangguan9",
            "opcname": "三号排泥阀9关",
            "opcvalue": "1",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        Global.currentIframe().oTrain.currentState.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "sanhaopainifakongzhixiangkai9",
            "opcname": "三号排泥阀9开",
            "opcvalue": "0",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        Global.currentIframe().oTrain.currentState.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "sanhaopainifakongzhixiangguan9",
            "opcname": "三号排泥阀9关",
            "opcvalue": "1",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });

        console.log(Global.currentIframe().oTrain.operateStep);
        Global.currentIframe().oTrain.showStepTip(stepList.children.length);
    });


    $('#sanhaopainifakongzhixiangkai10').click(function() {
        $('#sanhaopainifakongzhixiangkai10').removeClass('sanhaopainifakongzhixiangkai10-btn-off');
        $('#sanhaopainifakongzhixiangkai10').addClass('sanhaopainifakongzhixiangkai10-btn-on');
        $('#sanhaopainifakongzhixiangguan10').removeClass('sanhaopainifakongzhixiangguan10-btn-on');
        $('#sanhaopainifakongzhixiangguan10').addClass('sanhaopainifakongzhixiangguan10-btn-off');
        //
        var stepList = Global.currentIframe().document.getElementById('questionStepList');
        $(stepList).append(' <li title="三号排泥阀10开"><span class="item">' + (stepList.children.length + 1) + ' ,三号排泥阀10开</span></li>');
        Global.currentIframe().oTrain.operateStep.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "sanhaopainifakongzhixiangkai10",
            "opcname": "三号排泥阀10开",
            "opcvalue": "1",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        Global.currentIframe().oTrain.currentState.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "sanhaopainifakongzhixiangkai10",
            "opcname": "三号排泥阀10开",
            "opcvalue": "1",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        Global.currentIframe().oTrain.currentState.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "sanhaopainifakongzhixiangguan10",
            "opcname": "三号排泥阀10关",
            "opcvalue": "0",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });

        console.log(Global.currentIframe().oTrain.operateStep);
        Global.currentIframe().oTrain.showStepTip(stepList.children.length);
    });

    $('#sanhaopainifakongzhixiangguan10').click(function() {
        $('#sanhaopainifakongzhixiangguan10').removeClass('sanhaopainifakongzhixiangguan10-btn-off');
        $('#sanhaopainifakongzhixiangguan10').addClass('sanhaopainifakongzhixiangguan10-btn-on');
        $('#sanhaopainifakongzhixiangkai10').removeClass('sanhaopainifakongzhixiangkai10-btn-on');
        $('#sanhaopainifakongzhixiangkai10').addClass('sanhaopainifakongzhixiangkai10-btn-off');
        //
        var stepList = Global.currentIframe().document.getElementById('questionStepList');
        $(stepList).append(' <li title="三号排泥阀10关"><span class="item">' + (stepList.children.length + 1) + ' ,三号排泥阀10关</span></li>');
        Global.currentIframe().oTrain.operateStep.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "sanhaopainifakongzhixiangguan10",
            "opcname": "三号排泥阀10关",
            "opcvalue": "1",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        Global.currentIframe().oTrain.currentState.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "sanhaopainifakongzhixiangkai10",
            "opcname": "三号排泥阀10开",
            "opcvalue": "0",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        Global.currentIframe().oTrain.currentState.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "sanhaopainifakongzhixiangguan10",
            "opcname": "三号排泥阀10关",
            "opcvalue": "1",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });

        console.log(Global.currentIframe().oTrain.operateStep);
        Global.currentIframe().oTrain.showStepTip(stepList.children.length);
    });



    $('#sanhaopainifakongzhixiangkai11').click(function() {
        $('#sanhaopainifakongzhixiangkai11').removeClass('sanhaopainifakongzhixiangkai11-btn-off');
        $('#sanhaopainifakongzhixiangkai11').addClass('sanhaopainifakongzhixiangkai11-btn-on');
        $('#sanhaopainifakongzhixiangguan11').removeClass('sanhaopainifakongzhixiangguan11-btn-on');
        $('#sanhaopainifakongzhixiangguan11').addClass('sanhaopainifakongzhixiangguan11-btn-off');
        //
        var stepList = Global.currentIframe().document.getElementById('questionStepList');
        $(stepList).append(' <li title="三号排泥阀11开"><span class="item">' + (stepList.children.length + 1) + ' ,三号排泥阀11开</span></li>');
        Global.currentIframe().oTrain.operateStep.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "sanhaopainifakongzhixiangkai11",
            "opcname": "三号排泥阀11开",
            "opcvalue": "1",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        Global.currentIframe().oTrain.currentState.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "sanhaopainifakongzhixiangkai11",
            "opcname": "三号排泥阀11开",
            "opcvalue": "1",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        Global.currentIframe().oTrain.currentState.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "sanhaopainifakongzhixiangguan11",
            "opcname": "三号排泥阀11关",
            "opcvalue": "0",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });

        console.log(Global.currentIframe().oTrain.operateStep);
        Global.currentIframe().oTrain.showStepTip(stepList.children.length);
    });

    $('#sanhaopainifakongzhixiangguan11').click(function() {
        $('#sanhaopainifakongzhixiangguan11').removeClass('sanhaopainifakongzhixiangguan11-btn-off');
        $('#sanhaopainifakongzhixiangguan11').addClass('sanhaopainifakongzhixiangguan11-btn-on');
        $('#sanhaopainifakongzhixiangkai11').removeClass('sanhaopainifakongzhixiangkai11-btn-on');
        $('#sanhaopainifakongzhixiangkai11').addClass('sanhaopainifakongzhixiangkai11-btn-off');
        //
        var stepList = Global.currentIframe().document.getElementById('questionStepList');
        $(stepList).append(' <li title="三号排泥阀11关"><span class="item">' + (stepList.children.length + 1) + ' ,三号排泥阀11关</span></li>');
        Global.currentIframe().oTrain.operateStep.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "sanhaopainifakongzhixiangguan11",
            "opcname": "三号排泥阀11关",
            "opcvalue": "1",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        Global.currentIframe().oTrain.currentState.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "sanhaopainifakongzhixiangkai11",
            "opcname": "三号排泥阀11开",
            "opcvalue": "0",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        Global.currentIframe().oTrain.currentState.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "sanhaopainifakongzhixiangguan11",
            "opcname": "三号排泥阀11关",
            "opcvalue": "1",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });

        console.log(Global.currentIframe().oTrain.operateStep);
        Global.currentIframe().oTrain.showStepTip(stepList.children.length);
    });


    $('#sanhaopainifakongzhixiangkai12').click(function() {
        $('#sanhaopainifakongzhixiangkai12').removeClass('sanhaopainifakongzhixiangkai12-btn-off');
        $('#sanhaopainifakongzhixiangkai12').addClass('sanhaopainifakongzhixiangkai12-btn-on');
        $('#sanhaopainifakongzhixiangguan12').removeClass('sanhaopainifakongzhixiangguan12-btn-on');
        $('#sanhaopainifakongzhixiangguan12').addClass('sanhaopainifakongzhixiangguan12-btn-off');
        //
        var stepList = Global.currentIframe().document.getElementById('questionStepList');
        $(stepList).append(' <li title="三号排泥阀12开"><span class="item">' + (stepList.children.length + 1) + ' ,三号排泥阀12开</span></li>');
        Global.currentIframe().oTrain.operateStep.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "sanhaopainifakongzhixiangkai12",
            "opcname": "三号排泥阀12开",
            "opcvalue": "1",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        Global.currentIframe().oTrain.currentState.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "sanhaopainifakongzhixiangkai12",
            "opcname": "三号排泥阀12开",
            "opcvalue": "1",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        Global.currentIframe().oTrain.currentState.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "sanhaopainifakongzhixiangguan12",
            "opcname": "三号排泥阀12关",
            "opcvalue": "0",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });

        console.log(Global.currentIframe().oTrain.operateStep);
        Global.currentIframe().oTrain.showStepTip(stepList.children.length);
    });

    $('#sanhaopainifakongzhixiangguan12').click(function() {
        $('#sanhaopainifakongzhixiangguan12').removeClass('sanhaopainifakongzhixiangguan12-btn-off');
        $('#sanhaopainifakongzhixiangguan12').addClass('sanhaopainifakongzhixiangguan12-btn-on');
        $('#sanhaopainifakongzhixiangkai12').removeClass('sanhaopainifakongzhixiangkai12-btn-on');
        $('#sanhaopainifakongzhixiangkai12').addClass('sanhaopainifakongzhixiangkai12-btn-off');
        //
        var stepList = Global.currentIframe().document.getElementById('questionStepList');
        $(stepList).append(' <li title="三号排泥阀12关"><span class="item">' + (stepList.children.length + 1) + ' ,三号排泥阀12关</span></li>');
        Global.currentIframe().oTrain.operateStep.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "sanhaopainifakongzhixiangguan12",
            "opcname": "三号排泥阀12关",
            "opcvalue": "1",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        Global.currentIframe().oTrain.currentState.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "sanhaopainifakongzhixiangkai12",
            "opcname": "三号排泥阀12开",
            "opcvalue": "0",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        Global.currentIframe().oTrain.currentState.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "sanhaopainifakongzhixiangguan12",
            "opcname": "三号排泥阀12关",
            "opcvalue": "1",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });

        console.log(Global.currentIframe().oTrain.operateStep);
        Global.currentIframe().oTrain.showStepTip(stepList.children.length);
    });


    $('#sanhaopainifakongzhixiangkai13').click(function() {
        $('#sanhaopainifakongzhixiangkai13').removeClass('sanhaopainifakongzhixiangkai13-btn-off');
        $('#sanhaopainifakongzhixiangkai13').addClass('sanhaopainifakongzhixiangkai13-btn-on');
        $('#sanhaopainifakongzhixiangguan13').removeClass('sanhaopainifakongzhixiangguan13-btn-on');
        $('#sanhaopainifakongzhixiangguan13').addClass('sanhaopainifakongzhixiangguan13-btn-off');
        //
        var stepList = Global.currentIframe().document.getElementById('questionStepList');
        $(stepList).append(' <li title="三号排泥阀13开"><span class="item">' + (stepList.children.length + 1) + ' ,三号排泥阀13开</span></li>');
        Global.currentIframe().oTrain.operateStep.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "sanhaopainifakongzhixiangkai13",
            "opcname": "三号排泥阀13开",
            "opcvalue": "1",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        Global.currentIframe().oTrain.currentState.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "sanhaopainifakongzhixiangkai13",
            "opcname": "三号排泥阀13开",
            "opcvalue": "1",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        Global.currentIframe().oTrain.currentState.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "sanhaopainifakongzhixiangguan13",
            "opcname": "三号排泥阀13关",
            "opcvalue": "0",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });

        console.log(Global.currentIframe().oTrain.operateStep);
        Global.currentIframe().oTrain.showStepTip(stepList.children.length);
    });

    $('#sanhaopainifakongzhixiangguan13').click(function() {
        $('#sanhaopainifakongzhixiangguan13').removeClass('sanhaopainifakongzhixiangguan13-btn-off');
        $('#sanhaopainifakongzhixiangguan13').addClass('sanhaopainifakongzhixiangguan13-btn-on');
        $('#sanhaopainifakongzhixiangkai13').removeClass('sanhaopainifakongzhixiangkai13-btn-on');
        $('#sanhaopainifakongzhixiangkai13').addClass('sanhaopainifakongzhixiangkai13-btn-off');
        //
        var stepList = Global.currentIframe().document.getElementById('questionStepList');
        $(stepList).append(' <li title="三号排泥阀13关"><span class="item">' + (stepList.children.length + 1) + ' ,三号排泥阀13关</span></li>');
        Global.currentIframe().oTrain.operateStep.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "sanhaopainifakongzhixiangguan13",
            "opcname": "三号排泥阀13关",
            "opcvalue": "1",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        Global.currentIframe().oTrain.currentState.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "sanhaopainifakongzhixiangkai13",
            "opcname": "三号排泥阀13开",
            "opcvalue": "0",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        Global.currentIframe().oTrain.currentState.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "sanhaopainifakongzhixiangguan13",
            "opcname": "三号排泥阀13关",
            "opcvalue": "1",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });

        console.log(Global.currentIframe().oTrain.operateStep);
        Global.currentIframe().oTrain.showStepTip(stepList.children.length);
    });


    $('#sanhaopainifakongzhixiangkai14').click(function() {
        $('#sanhaopainifakongzhixiangkai14').removeClass('sanhaopainifakongzhixiangkai14-btn-off');
        $('#sanhaopainifakongzhixiangkai14').addClass('sanhaopainifakongzhixiangkai14-btn-on');
        $('#sanhaopainifakongzhixiangguan14').removeClass('sanhaopainifakongzhixiangguan14-btn-on');
        $('#sanhaopainifakongzhixiangguan14').addClass('sanhaopainifakongzhixiangguan14-btn-off');
        //
        var stepList = Global.currentIframe().document.getElementById('questionStepList');
        $(stepList).append(' <li title="三号排泥阀14开"><span class="item">' + (stepList.children.length + 1) + ' ,三号排泥阀14开</span></li>');
        Global.currentIframe().oTrain.operateStep.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "sanhaopainifakongzhixiangkai14",
            "opcname": "三号排泥阀14开",
            "opcvalue": "1",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        Global.currentIframe().oTrain.currentState.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "sanhaopainifakongzhixiangkai14",
            "opcname": "三号排泥阀14开",
            "opcvalue": "1",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        Global.currentIframe().oTrain.currentState.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "sanhaopainifakongzhixiangguan14",
            "opcname": "三号排泥阀14关",
            "opcvalue": "0",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });

        console.log(Global.currentIframe().oTrain.operateStep);
        Global.currentIframe().oTrain.showStepTip(stepList.children.length);
    });

    $('#sanhaopainifakongzhixiangguan14').click(function() {
        $('#sanhaopainifakongzhixiangguan14').removeClass('sanhaopainifakongzhixiangguan14-btn-off');
        $('#sanhaopainifakongzhixiangguan14').addClass('sanhaopainifakongzhixiangguan14-btn-on');
        $('#sanhaopainifakongzhixiangkai14').removeClass('sanhaopainifakongzhixiangkai14-btn-on');
        $('#sanhaopainifakongzhixiangkai14').addClass('sanhaopainifakongzhixiangkai14-btn-off');
        //
        var stepList = Global.currentIframe().document.getElementById('questionStepList');
        $(stepList).append(' <li title="三号排泥阀14关"><span class="item">' + (stepList.children.length + 1) + ' ,三号排泥阀14关</span></li>');
        Global.currentIframe().oTrain.operateStep.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "sanhaopainifakongzhixiangguan14",
            "opcname": "三号排泥阀14关",
            "opcvalue": "1",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        Global.currentIframe().oTrain.currentState.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "sanhaopainifakongzhixiangkai14",
            "opcname": "三号排泥阀14开",
            "opcvalue": "0",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        Global.currentIframe().oTrain.currentState.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "sanhaopainifakongzhixiangguan14",
            "opcname": "三号排泥阀14关",
            "opcvalue": "1",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });

        console.log(Global.currentIframe().oTrain.operateStep);
        Global.currentIframe().oTrain.showStepTip(stepList.children.length);
    });


    $('#sanhaopainifakongzhixiangkai15').click(function() {
        $('#sanhaopainifakongzhixiangkai15').removeClass('sanhaopainifakongzhixiangkai15-btn-off');
        $('#sanhaopainifakongzhixiangkai15').addClass('sanhaopainifakongzhixiangkai15-btn-on');
        $('#sanhaopainifakongzhixiangguan15').removeClass('sanhaopainifakongzhixiangguan15-btn-on');
        $('#sanhaopainifakongzhixiangguan15').addClass('sanhaopainifakongzhixiangguan15-btn-off');
        //
        var stepList = Global.currentIframe().document.getElementById('questionStepList');
        $(stepList).append(' <li title="三号排泥阀15开"><span class="item">' + (stepList.children.length + 1) + ' ,三号排泥阀15开</span></li>');
        Global.currentIframe().oTrain.operateStep.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "sanhaopainifakongzhixiangkai15",
            "opcname": "三号排泥阀15开",
            "opcvalue": "1",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        Global.currentIframe().oTrain.currentState.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "sanhaopainifakongzhixiangkai15",
            "opcname": "三号排泥阀15开",
            "opcvalue": "1",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        Global.currentIframe().oTrain.currentState.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "sanhaopainifakongzhixiangguan15",
            "opcname": "三号排泥阀15关",
            "opcvalue": "0",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });

        console.log(Global.currentIframe().oTrain.operateStep);
        Global.currentIframe().oTrain.showStepTip(stepList.children.length);
    });

    $('#sanhaopainifakongzhixiangguan15').click(function() {
        $('#sanhaopainifakongzhixiangguan15').removeClass('sanhaopainifakongzhixiangguan15-btn-off');
        $('#sanhaopainifakongzhixiangguan15').addClass('sanhaopainifakongzhixiangguan15-btn-on');
        $('#sanhaopainifakongzhixiangkai15').removeClass('sanhaopainifakongzhixiangkai15-btn-on');
        $('#sanhaopainifakongzhixiangkai15').addClass('sanhaopainifakongzhixiangkai15-btn-off');
        //
        var stepList = Global.currentIframe().document.getElementById('questionStepList');
        $(stepList).append(' <li title="三号排泥阀15关"><span class="item">' + (stepList.children.length + 1) + ' ,三号排泥阀15关</span></li>');
        Global.currentIframe().oTrain.operateStep.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "sanhaopainifakongzhixiangguan15",
            "opcname": "三号排泥阀15关",
            "opcvalue": "1",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        Global.currentIframe().oTrain.currentState.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "sanhaopainifakongzhixiangkai15",
            "opcname": "三号排泥阀15开",
            "opcvalue": "0",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        Global.currentIframe().oTrain.currentState.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "sanhaopainifakongzhixiangguan15",
            "opcname": "三号排泥阀15关",
            "opcvalue": "1",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });

        console.log(Global.currentIframe().oTrain.operateStep);
        Global.currentIframe().oTrain.showStepTip(stepList.children.length);
    });


    $('#sanhaopainifakongzhixiangkai16').click(function() {
        $('#sanhaopainifakongzhixiangkai16').removeClass('sanhaopainifakongzhixiangkai16-btn-off');
        $('#sanhaopainifakongzhixiangkai16').addClass('sanhaopainifakongzhixiangkai16-btn-on');
        $('#sanhaopainifakongzhixiangguan16').removeClass('sanhaopainifakongzhixiangguan16-btn-on');
        $('#sanhaopainifakongzhixiangguan16').addClass('sanhaopainifakongzhixiangguan16-btn-off');
        //
        var stepList = Global.currentIframe().document.getElementById('questionStepList');
        $(stepList).append(' <li title="三号排泥阀16开"><span class="item">' + (stepList.children.length + 1) + ' ,三号排泥阀16开</span></li>');
        Global.currentIframe().oTrain.operateStep.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "sanhaopainifakongzhixiangkai16",
            "opcname": "三号排泥阀16开",
            "opcvalue": "1",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        Global.currentIframe().oTrain.currentState.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "sanhaopainifakongzhixiangkai16",
            "opcname": "三号排泥阀16开",
            "opcvalue": "1",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        Global.currentIframe().oTrain.currentState.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "sanhaopainifakongzhixiangguan16",
            "opcname": "三号排泥阀16关",
            "opcvalue": "0",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });

        console.log(Global.currentIframe().oTrain.operateStep);
        Global.currentIframe().oTrain.showStepTip(stepList.children.length);
    });

    $('#sanhaopainifakongzhixiangguan16').click(function() {
        $('#sanhaopainifakongzhixiangguan16').removeClass('sanhaopainifakongzhixiangguan16-btn-off');
        $('#sanhaopainifakongzhixiangguan16').addClass('sanhaopainifakongzhixiangguan16-btn-on');
        $('#sanhaopainifakongzhixiangkai16').removeClass('sanhaopainifakongzhixiangkai16-btn-on');
        $('#sanhaopainifakongzhixiangkai16').addClass('sanhaopainifakongzhixiangkai16-btn-off');
        //
        var stepList = Global.currentIframe().document.getElementById('questionStepList');
        $(stepList).append(' <li title="三号排泥阀16关"><span class="item">' + (stepList.children.length + 1) + ' ,三号排泥阀16关</span></li>');
        Global.currentIframe().oTrain.operateStep.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "sanhaopainifakongzhixiangguan16",
            "opcname": "三号排泥阀16关",
            "opcvalue": "1",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        Global.currentIframe().oTrain.currentState.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "sanhaopainifakongzhixiangkai16",
            "opcname": "三号排泥阀16开",
            "opcvalue": "0",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        Global.currentIframe().oTrain.currentState.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "sanhaopainifakongzhixiangguan16",
            "opcname": "三号排泥阀16关",
            "opcvalue": "1",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });

        console.log(Global.currentIframe().oTrain.operateStep);
        Global.currentIframe().oTrain.showStepTip(stepList.children.length);
    });


    $('#sanhaopainifakongzhixiangkai17').click(function() {
        $('#sanhaopainifakongzhixiangkai17').removeClass('sanhaopainifakongzhixiangkai17-btn-off');
        $('#sanhaopainifakongzhixiangkai17').addClass('sanhaopainifakongzhixiangkai17-btn-on');
        $('#sanhaopainifakongzhixiangguan17').removeClass('sanhaopainifakongzhixiangguan17-btn-on');
        $('#sanhaopainifakongzhixiangguan17').addClass('sanhaopainifakongzhixiangguan17-btn-off');
        //
        var stepList = Global.currentIframe().document.getElementById('questionStepList');
        $(stepList).append(' <li title="三号排泥阀17开"><span class="item">' + (stepList.children.length + 1) + ' ,三号排泥阀17开</span></li>');
        Global.currentIframe().oTrain.operateStep.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "sanhaopainifakongzhixiangkai17",
            "opcname": "三号排泥阀17开",
            "opcvalue": "1",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        Global.currentIframe().oTrain.currentState.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "sanhaopainifakongzhixiangkai17",
            "opcname": "三号排泥阀17开",
            "opcvalue": "1",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        Global.currentIframe().oTrain.currentState.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "sanhaopainifakongzhixiangguan17",
            "opcname": "三号排泥阀17关",
            "opcvalue": "0",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });

        console.log(Global.currentIframe().oTrain.operateStep);
        Global.currentIframe().oTrain.showStepTip(stepList.children.length);
    });

    $('#sanhaopainifakongzhixiangguan17').click(function() {
        $('#sanhaopainifakongzhixiangguan17').removeClass('sanhaopainifakongzhixiangguan17-btn-off');
        $('#sanhaopainifakongzhixiangguan17').addClass('sanhaopainifakongzhixiangguan17-btn-on');
        $('#sanhaopainifakongzhixiangkai17').removeClass('sanhaopainifakongzhixiangkai17-btn-on');
        $('#sanhaopainifakongzhixiangkai17').addClass('sanhaopainifakongzhixiangkai17-btn-off');
        //
        var stepList = Global.currentIframe().document.getElementById('questionStepList');
        $(stepList).append(' <li title="三号排泥阀17关"><span class="item">' + (stepList.children.length + 1) + ' ,三号排泥阀17关</span></li>');
        Global.currentIframe().oTrain.operateStep.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "sanhaopainifakongzhixiangguan17",
            "opcname": "三号排泥阀17关",
            "opcvalue": "1",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        Global.currentIframe().oTrain.currentState.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "sanhaopainifakongzhixiangkai17",
            "opcname": "三号排泥阀17开",
            "opcvalue": "0",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        Global.currentIframe().oTrain.currentState.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "sanhaopainifakongzhixiangguan17",
            "opcname": "三号排泥阀17关",
            "opcvalue": "1",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });

        console.log(Global.currentIframe().oTrain.operateStep);
        Global.currentIframe().oTrain.showStepTip(stepList.children.length);
    });


    $('#sanhaopainifakongzhixiangkai18').click(function() {
        $('#sanhaopainifakongzhixiangkai18').removeClass('sanhaopainifakongzhixiangkai18-btn-off');
        $('#sanhaopainifakongzhixiangkai18').addClass('sanhaopainifakongzhixiangkai18-btn-on');
        $('#sanhaopainifakongzhixiangguan18').removeClass('sanhaopainifakongzhixiangguan18-btn-on');
        $('#sanhaopainifakongzhixiangguan18').addClass('sanhaopainifakongzhixiangguan18-btn-off');
        //
        var stepList = Global.currentIframe().document.getElementById('questionStepList');
        $(stepList).append(' <li title="三号排泥阀18开"><span class="item">' + (stepList.children.length + 1) + ' ,三号排泥阀18开</span></li>');
        Global.currentIframe().oTrain.operateStep.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "sanhaopainifakongzhixiangkai18",
            "opcname": "三号排泥阀18开",
            "opcvalue": "1",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        Global.currentIframe().oTrain.currentState.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "sanhaopainifakongzhixiangkai18",
            "opcname": "三号排泥阀18开",
            "opcvalue": "1",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        Global.currentIframe().oTrain.currentState.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "sanhaopainifakongzhixiangguan18",
            "opcname": "三号排泥阀18关",
            "opcvalue": "0",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });

        console.log(Global.currentIframe().oTrain.operateStep);
        Global.currentIframe().oTrain.showStepTip(stepList.children.length);
    });

    $('#sanhaopainifakongzhixiangguan18').click(function() {
        $('#sanhaopainifakongzhixiangguan18').removeClass('sanhaopainifakongzhixiangguan18-btn-off');
        $('#sanhaopainifakongzhixiangguan18').addClass('sanhaopainifakongzhixiangguan18-btn-on');
        $('#sanhaopainifakongzhixiangkai18').removeClass('sanhaopainifakongzhixiangkai18-btn-on');
        $('#sanhaopainifakongzhixiangkai18').addClass('sanhaopainifakongzhixiangkai18-btn-off');
        //
        var stepList = Global.currentIframe().document.getElementById('questionStepList');
        $(stepList).append(' <li title="三号排泥阀18关"><span class="item">' + (stepList.children.length + 1) + ' ,三号排泥阀18关</span></li>');
        Global.currentIframe().oTrain.operateStep.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "sanhaopainifakongzhixiangguan18",
            "opcname": "三号排泥阀18关",
            "opcvalue": "1",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        Global.currentIframe().oTrain.currentState.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "sanhaopainifakongzhixiangkai18",
            "opcname": "三号排泥阀18开",
            "opcvalue": "0",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        Global.currentIframe().oTrain.currentState.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "sanhaopainifakongzhixiangguan18",
            "opcname": "三号排泥阀18关",
            "opcvalue": "1",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });

        console.log(Global.currentIframe().oTrain.operateStep);
        Global.currentIframe().oTrain.showStepTip(stepList.children.length);
    });


    $('#sanhaopainifakongzhixiangkai19').click(function() {
        $('#sanhaopainifakongzhixiangkai19').removeClass('sanhaopainifakongzhixiangkai19-btn-off');
        $('#sanhaopainifakongzhixiangkai19').addClass('sanhaopainifakongzhixiangkai19-btn-on');
        $('#sanhaopainifakongzhixiangguan19').removeClass('sanhaopainifakongzhixiangguan19-btn-on');
        $('#sanhaopainifakongzhixiangguan19').addClass('sanhaopainifakongzhixiangguan19-btn-off');
        //
        var stepList = Global.currentIframe().document.getElementById('questionStepList');
        $(stepList).append(' <li title="三号排泥阀19开"><span class="item">' + (stepList.children.length + 1) + ' ,三号排泥阀19开</span></li>');
        Global.currentIframe().oTrain.operateStep.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "sanhaopainifakongzhixiangkai19",
            "opcname": "三号排泥阀19开",
            "opcvalue": "1",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        Global.currentIframe().oTrain.currentState.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "sanhaopainifakongzhixiangkai19",
            "opcname": "三号排泥阀19开",
            "opcvalue": "1",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        Global.currentIframe().oTrain.currentState.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "sanhaopainifakongzhixiangguan19",
            "opcname": "三号排泥阀19关",
            "opcvalue": "0",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });

        console.log(Global.currentIframe().oTrain.operateStep);
        Global.currentIframe().oTrain.showStepTip(stepList.children.length);
    });

    $('#sanhaopainifakongzhixiangguan19').click(function() {
        $('#sanhaopainifakongzhixiangguan19').removeClass('sanhaopainifakongzhixiangguan19-btn-off');
        $('#sanhaopainifakongzhixiangguan19').addClass('sanhaopainifakongzhixiangguan19-btn-on');
        $('#sanhaopainifakongzhixiangkai19').removeClass('sanhaopainifakongzhixiangkai19-btn-on');
        $('#sanhaopainifakongzhixiangkai19').addClass('sanhaopainifakongzhixiangkai19-btn-off');
        //
        var stepList = Global.currentIframe().document.getElementById('questionStepList');
        $(stepList).append(' <li title="三号排泥阀19关"><span class="item">' + (stepList.children.length + 1) + ' ,三号排泥阀19关</span></li>');
        Global.currentIframe().oTrain.operateStep.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "sanhaopainifakongzhixiangguan19",
            "opcname": "三号排泥阀19关",
            "opcvalue": "1",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        Global.currentIframe().oTrain.currentState.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "sanhaopainifakongzhixiangkai19",
            "opcname": "三号排泥阀19开",
            "opcvalue": "0",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        Global.currentIframe().oTrain.currentState.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "sanhaopainifakongzhixiangguan19",
            "opcname": "三号排泥阀19关",
            "opcvalue": "1",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });

        console.log(Global.currentIframe().oTrain.operateStep);
        Global.currentIframe().oTrain.showStepTip(stepList.children.length);
    });


    $('#sanhaopainifakongzhixiangkai20').click(function() {
        $('#sanhaopainifakongzhixiangkai20').removeClass('sanhaopainifakongzhixiangkai20-btn-off');
        $('#sanhaopainifakongzhixiangkai20').addClass('sanhaopainifakongzhixiangkai20-btn-on');
        $('#sanhaopainifakongzhixiangguan20').removeClass('sanhaopainifakongzhixiangguan20-btn-on');
        $('#sanhaopainifakongzhixiangguan20').addClass('sanhaopainifakongzhixiangguan20-btn-off');
        //
        var stepList = Global.currentIframe().document.getElementById('questionStepList');
        $(stepList).append(' <li title="三号排泥阀20开"><span class="item">' + (stepList.children.length + 1) + ' ,三号排泥阀20开</span></li>');
        Global.currentIframe().oTrain.operateStep.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "sanhaopainifakongzhixiangkai20",
            "opcname": "三号排泥阀20开",
            "opcvalue": "1",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        Global.currentIframe().oTrain.currentState.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "sanhaopainifakongzhixiangkai20",
            "opcname": "三号排泥阀20开",
            "opcvalue": "1",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        Global.currentIframe().oTrain.currentState.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "sanhaopainifakongzhixiangguan20",
            "opcname": "三号排泥阀20关",
            "opcvalue": "0",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });

        console.log(Global.currentIframe().oTrain.operateStep);
        Global.currentIframe().oTrain.showStepTip(stepList.children.length);
    });

    $('#sanhaopainifakongzhixiangguan20').click(function() {
        $('#sanhaopainifakongzhixiangguan20').removeClass('sanhaopainifakongzhixiangguan20-btn-off');
        $('#sanhaopainifakongzhixiangguan20').addClass('sanhaopainifakongzhixiangguan20-btn-on');
        $('#sanhaopainifakongzhixiangkai20').removeClass('sanhaopainifakongzhixiangkai20-btn-on');
        $('#sanhaopainifakongzhixiangkai20').addClass('sanhaopainifakongzhixiangkai20-btn-off');
        //
        var stepList = Global.currentIframe().document.getElementById('questionStepList');
        $(stepList).append(' <li title="三号排泥阀20关"><span class="item">' + (stepList.children.length + 1) + ' ,三号排泥阀20关</span></li>');
        Global.currentIframe().oTrain.operateStep.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "sanhaopainifakongzhixiangguan20",
            "opcname": "三号排泥阀20关",
            "opcvalue": "1",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        Global.currentIframe().oTrain.currentState.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "sanhaopainifakongzhixiangkai20",
            "opcname": "三号排泥阀20开",
            "opcvalue": "0",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        Global.currentIframe().oTrain.currentState.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "sanhaopainifakongzhixiangguan20",
            "opcname": "三号排泥阀20关",
            "opcvalue": "1",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });

        console.log(Global.currentIframe().oTrain.operateStep);
        Global.currentIframe().oTrain.showStepTip(stepList.children.length);
    });



    $('#chouyaobengkongzhixiangshoudongzidong').click(function() {
        var stepList = Global.currentIframe().document.getElementById('questionStepList');
        var classname = document.getElementById('chouyaobengkongzhixiangshoudongzidong').className;
        if (classname.indexOf('chouyaobengkongzhixiangshoudongzidong-btn-off') >= 0) {
            $('#chouyaobengkongzhixiangshoudongzidong').addClass('chouyaobengkongzhixiangshoudongzidong-btn-on');
            $('#chouyaobengkongzhixiangshoudongzidong').removeClass('chouyaobengkongzhixiangshoudongzidong-btn-off');
            $(stepList).append(' <li title="抽药泵控制箱设置为手动"><span class="item">' + (stepList.children.length + 1) + ' ,抽药泵控制箱设置为手动</span></li>');
            Global.currentIframe().oTrain.operateStep.push({
                "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
                "numbertype": "0",
                "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
                "opcid": "chouyaobengkongzhixiangshoudongzidong",
                "opcname": "抽药泵控制箱手动/自动",
                "opcvalue": "1",
                "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
            });
            Global.currentIframe().oTrain.currentState.push({
                "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
                "numbertype": "0",
                "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
                "opcid": "chouyaobengkongzhixiangshoudongzidong",
                "opcname": "抽药泵控制箱手动/自动",
                "opcvalue": "1",
                "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
            });
        } else {
            $('#chouyaobengkongzhixiangshoudongzidong').addClass('chouyaobengkongzhixiangshoudongzidong-btn-off');
            $('#chouyaobengkongzhixiangshoudongzidong').removeClass('chouyaobengkongzhixiangshoudongzidong-btn-on');
            $(stepList).append(' <li title="抽药泵控制箱设置为自动"><span class="item">' + (stepList.children.length + 1) + ' ,抽药泵控制箱设置为自动</span></li>');
            Global.currentIframe().oTrain.operateStep.push({
                "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
                "numbertype": "0",
                "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
                "opcid": "chouyaobengkongzhixiangshoudongzidong",
                "opcname": "抽药泵控制箱手动/自动",
                "opcvalue": "0",
                "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
            });
            Global.currentIframe().oTrain.currentState.push({
                "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
                "numbertype": "0",
                "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
                "opcid": "chouyaobengkongzhixiangshoudongzidong",
                "opcname": "抽药泵控制箱手动/自动",
                "opcvalue": "0",
                "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
            });
        }
        console.log(Global.currentIframe().oTrain.operateStep);
        Global.currentIframe().oTrain.showStepTip(stepList.children.length);
    });


    $('#chouyaobengkongzhixiangqiehuan').click(function() {
        var stepList = Global.currentIframe().document.getElementById('questionStepList');
        var classname = document.getElementById('chouyaobengkongzhixiangqiehuan').className;
        if (classname.indexOf('chouyaobengkongzhixiangqiehuan-btn-off') >= 0) {
            $('#chouyaobengkongzhixiangqiehuan').addClass('chouyaobengkongzhixiangqiehuan-btn-on');
            $('#chouyaobengkongzhixiangqiehuan').removeClass('chouyaobengkongzhixiangqiehuan-btn-off');
            $(stepList).append(' <li title="抽药泵切换到1号泵"><span class="item">' + (stepList.children.length + 1) + ' ,抽药泵切换到1号泵</span></li>');
            Global.currentIframe().oTrain.operateStep.push({
                "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
                "numbertype": "0",
                "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
                "opcid": "chouyaobengkongzhixiangqiehuan",
                "opcname": "抽药泵控制箱泵切换",
                "opcvalue": "1",
                "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
            });
            Global.currentIframe().oTrain.currentState.push({
                "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
                "numbertype": "0",
                "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
                "opcid": "chouyaobengkongzhixiangqiehuan",
                "opcname": "抽药泵控制箱泵切换",
                "opcvalue": "1",
                "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
            });
        } else {
            $('#chouyaobengkongzhixiangqiehuan').addClass('chouyaobengkongzhixiangqiehuan-btn-off');
            $('#chouyaobengkongzhixiangqiehuan').removeClass('chouyaobengkongzhixiangqiehuan-btn-on');
            $(stepList).append(' <li title="抽药泵切换到2号泵"><span class="item">' + (stepList.children.length + 1) + ' ,抽药泵切换到2号泵</span></li>');
            Global.currentIframe().oTrain.operateStep.push({
                "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
                "numbertype": "0",
                "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
                "opcid": "chouyaobengkongzhixiangqiehuan",
                "opcname": "抽药泵控制箱泵切换",
                "opcvalue": "0",
                "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
            });
            Global.currentIframe().oTrain.currentState.push({
                "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
                "numbertype": "0",
                "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
                "opcid": "chouyaobengkongzhixiangqiehuan",
                "opcname": "抽药泵控制箱泵切换",
                "opcvalue": "0",
                "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
            });
        }
        console.log(Global.currentIframe().oTrain.operateStep);
        Global.currentIframe().oTrain.showStepTip(stepList.children.length);
    });




    $('#chouyaobengkongzhixiangqidong1').click(function() {
        $('#chouyaobengkongzhixiangyunxing1').removeClass('chouyaobengkongzhixiangyunxing1-btn-off');
        $('#chouyaobengkongzhixiangyunxing1').addClass('chouyaobengkongzhixiangyunxing1-btn-on');
        //
        var stepList = Global.currentIframe().document.getElementById('questionStepList');
        $(stepList).append(' <li title="抽药泵控制箱泵1启动"><span class="item">' + (stepList.children.length + 1) + ' ,抽药泵控制箱泵1启动</span></li>');
        Global.currentIframe().oTrain.operateStep.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "chouyaobengkongzhixiangqidong1",
            "opcname": "抽药泵控制箱泵1启动",
            "opcvalue": "1",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        Global.currentIframe().oTrain.currentState.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "chouyaobengkongzhixiangyunxing1",
            "opcname": "抽药泵控制箱泵1运行",
            "opcvalue": "1",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        console.log(Global.currentIframe().oTrain.operateStep);
        Global.currentIframe().oTrain.showStepTip(stepList.children.length);
    });
    $('#chouyaobengkongzhixiangtingzhi1').click(function() {
        $('#chouyaobengkongzhixiangyunxing1').addClass('chouyaobengkongzhixiangyunxing1-btn-off');
        $('#chouyaobengkongzhixiangyunxing1').removeClass('chouyaobengkongzhixiangyunxing1-btn-on');
        //
        var stepList = Global.currentIframe().document.getElementById('questionStepList');
        $(stepList).append(' <li title="抽药泵控制箱泵1停止"><span class="item">' + (stepList.children.length + 1) + ' ,抽药泵控制箱泵1停止</span></li>');
        Global.currentIframe().oTrain.operateStep.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "chouyaobengkongzhixiangtingzhi1",
            "opcname": "抽药泵控制箱泵1停止",
            "opcvalue": "1",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        Global.currentIframe().oTrain.currentState.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "chouyaobengkongzhixiangyunxing1",
            "opcname": "抽药泵控制箱泵1运行",
            "opcvalue": "0",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        console.log(Global.currentIframe().oTrain.operateStep);
        Global.currentIframe().oTrain.showStepTip(stepList.children.length);
    });


    $('#chouyaobengkongzhixiangqidong2').click(function() {
        $('#chouyaobengkongzhixiangyunxing2').removeClass('chouyaobengkongzhixiangyunxing2-btn-off');
        $('#chouyaobengkongzhixiangyunxing2').addClass('chouyaobengkongzhixiangyunxing2-btn-on');
        //
        var stepList = Global.currentIframe().document.getElementById('questionStepList');
        $(stepList).append(' <li title="抽药泵控制箱泵2启动"><span class="item">' + (stepList.children.length + 1) + ' ,抽药泵控制箱泵2启动</span></li>');
        Global.currentIframe().oTrain.operateStep.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "chouyaobengkongzhixiangqidong2",
            "opcname": "抽药泵控制箱泵2启动",
            "opcvalue": "1",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        Global.currentIframe().oTrain.currentState.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "chouyaobengkongzhixiangyunxing2",
            "opcname": "抽药泵控制箱泵2运行",
            "opcvalue": "1",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        console.log(Global.currentIframe().oTrain.operateStep);
        Global.currentIframe().oTrain.showStepTip(stepList.children.length);
    });
    $('#chouyaobengkongzhixiangtingzhi2').click(function() {
        $('#chouyaobengkongzhixiangyunxing2').addClass('chouyaobengkongzhixiangyunxing2-btn-off');
        $('#chouyaobengkongzhixiangyunxing2').removeClass('chouyaobengkongzhixiangyunxing2-btn-on');
        //
        var stepList = Global.currentIframe().document.getElementById('questionStepList');
        $(stepList).append(' <li title="抽药泵控制箱泵2停止"><span class="item">' + (stepList.children.length + 1) + ' ,抽药泵控制箱泵2停止</span></li>');
        Global.currentIframe().oTrain.operateStep.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "chouyaobengkongzhixiangtingzhi2",
            "opcname": "抽药泵控制箱泵2停止",
            "opcvalue": "1",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        Global.currentIframe().oTrain.currentState.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "chouyaobengkongzhixiangyunxing2",
            "opcname": "抽药泵控制箱泵2运行",
            "opcvalue": "0",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        console.log(Global.currentIframe().oTrain.operateStep);
        Global.currentIframe().oTrain.showStepTip(stepList.children.length);
    });



    $('#jiayaojiankongzhixiangdiandongqiufabendiyuancheng1').click(function() {
        var stepList = Global.currentIframe().document.getElementById('questionStepList');
        var classname = document.getElementById('jiayaojiankongzhixiangdiandongqiufabendiyuancheng1').className;
        if (classname.indexOf('jiayaojiankongzhixiangdiandongqiufabendiyuancheng1-btn-off') >= 0) {
            $('#jiayaojiankongzhixiangdiandongqiufabendiyuancheng1').addClass('jiayaojiankongzhixiangdiandongqiufabendiyuancheng1-btn-on');
            $('#jiayaojiankongzhixiangdiandongqiufabendiyuancheng1').removeClass('jiayaojiankongzhixiangdiandongqiufabendiyuancheng1-btn-off');
            $(stepList).append(' <li title="加药间电动球阀1设置为本地"><span class="item">' + (stepList.children.length + 1) + ' ,加药间电动球阀1设置为本地</span></li>');
            Global.currentIframe().oTrain.operateStep.push({
                "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
                "numbertype": "0",
                "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
                "opcid": "jiayaojiankongzhixiangdiandongqiufabendiyuancheng1",
                "opcname": "加药间电动球阀1本地/远程",
                "opcvalue": "0",
                "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
            });
            Global.currentIframe().oTrain.currentState.push({
                "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
                "numbertype": "0",
                "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
                "opcid": "jiayaojiankongzhixiangdiandongqiufabendiyuancheng1",
                "opcname": "加药间电动球阀1本地/远程",
                "opcvalue": "0",
                "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
            });
        } else {
            $('#jiayaojiankongzhixiangdiandongqiufabendiyuancheng1').addClass('jiayaojiankongzhixiangdiandongqiufabendiyuancheng1-btn-off');
            $('#jiayaojiankongzhixiangdiandongqiufabendiyuancheng1').removeClass('jiayaojiankongzhixiangdiandongqiufabendiyuancheng1-btn-on');
            $(stepList).append(' <li title="加药间电动球阀1设置为远程"><span class="item">' + (stepList.children.length + 1) + ' ,加药间电动球阀1设置为远程</span></li>');
            Global.currentIframe().oTrain.operateStep.push({
                "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
                "numbertype": "0",
                "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
                "opcid": "jiayaojiankongzhixiangdiandongqiufabendiyuancheng1",
                "opcname": "加药间电动球阀1本地/远程",
                "opcvalue": "1",
                "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
            });
            Global.currentIframe().oTrain.currentState.push({
                "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
                "numbertype": "0",
                "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
                "opcid": "jiayaojiankongzhixiangdiandongqiufabendiyuancheng1",
                "opcname": "加药间电动球阀1本地/远程",
                "opcvalue": "1",
                "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
            });
        }
        console.log(Global.currentIframe().oTrain.operateStep);
        Global.currentIframe().oTrain.showStepTip(stepList.children.length);
    });
    $('#jiayaojiankongzhixiangdiandongqiufakai1').click(function() {
        $('#jiayaojiankongzhixiangdiandongqiufakai1').addClass('jiayaojiankongzhixiangdiandongqiufakai1-btn-on');
        $('#jiayaojiankongzhixiangdiandongqiufakai1').removeClass('jiayaojiankongzhixiangdiandongqiufakai1-btn-off');
        $('#jiayaojiankongzhixiangdiandongqiufaguan1').addClass('jiayaojiankongzhixiangdiandongqiufaguan1-btn-off');
        $('#jiayaojiankongzhixiangdiandongqiufaguan1').removeClass('jiayaojiankongzhixiangdiandongqiufaguan1-btn-on');
        //
        var stepList = Global.currentIframe().document.getElementById('questionStepList');
        $(stepList).append(' <li title="加药间电动球阀1打开"><span class="item">' + (stepList.children.length + 1) + ' ,加药间电动球阀1打开</span></li>');
        Global.currentIframe().oTrain.operateStep.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "jiayaojiankongzhixiangdiandongqiufakai1",
            "opcname": "加药间电动球阀1打开",
            "opcvalue": "1",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        Global.currentIframe().oTrain.currentState.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "jiayaojiankongzhixiangdiandongqiufakai1",
            "opcname": "加药间电动球阀1打开",
            "opcvalue": "1",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        Global.currentIframe().oTrain.currentState.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "jiayaojiankongzhixiangdiandongqiuguan1",
            "opcname": "加药间电动球阀1关闭",
            "opcvalue": "0",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        console.log(Global.currentIframe().oTrain.operateStep);
        Global.currentIframe().oTrain.showStepTip(stepList.children.length);
    });

    $('#jiayaojiankongzhixiangdiandongqiufaguan1').click(function() {
        $('#jiayaojiankongzhixiangdiandongqiufaguan1').addClass('jiayaojiankongzhixiangdiandongqiufaguan1-btn-on');
        $('#jiayaojiankongzhixiangdiandongqiufaguan1').removeClass('jiayaojiankongzhixiangdiandongqiufaguan1-btn-off');
        $('#jiayaojiankongzhixiangdiandongqiufakai1').addClass('jiayaojiankongzhixiangdiandongqiufakai1-btn-off');
        $('#jiayaojiankongzhixiangdiandongqiufakai1').removeClass('jiayaojiankongzhixiangdiandongqiufakai1-btn-on');
        //
        var stepList = Global.currentIframe().document.getElementById('questionStepList');
        $(stepList).append(' <li title="加药间电动球阀1关闭"><span class="item">' + (stepList.children.length + 1) + ' ,加药间电动球阀1关闭</span></li>');
        Global.currentIframe().oTrain.operateStep.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "jiayaojiankongzhixiangdiandongqiuguan1",
            "opcname": "加药间电动球阀1关闭",
            "opcvalue": "1",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        Global.currentIframe().oTrain.currentState.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "jiayaojiankongzhixiangdiandongqiufakai1",
            "opcname": "加药间电动球阀1打开",
            "opcvalue": "0",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        Global.currentIframe().oTrain.currentState.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "jiayaojiankongzhixiangdiandongqiuguan1",
            "opcname": "加药间电动球阀1关闭",
            "opcvalue": "1",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        console.log(Global.currentIframe().oTrain.operateStep);
        Global.currentIframe().oTrain.showStepTip(stepList.children.length);
    });

    $('#jiayaojiankongzhixiangdiandongqiufabendiyuancheng2').click(function() {
        var stepList = Global.currentIframe().document.getElementById('questionStepList');
        var classname = document.getElementById('jiayaojiankongzhixiangdiandongqiufabendiyuancheng2').className;
        if (classname.indexOf('jiayaojiankongzhixiangdiandongqiufabendiyuancheng2-btn-off') >= 0) {
            $('#jiayaojiankongzhixiangdiandongqiufabendiyuancheng2').addClass('jiayaojiankongzhixiangdiandongqiufabendiyuancheng2-btn-on');
            $('#jiayaojiankongzhixiangdiandongqiufabendiyuancheng2').removeClass('jiayaojiankongzhixiangdiandongqiufabendiyuancheng2-btn-off');
            $(stepList).append(' <li title="加药间电动球阀2设置为本地"><span class="item">' + (stepList.children.length + 2) + ' ,加药间电动球阀2设置为本地</span></li>');
            Global.currentIframe().oTrain.operateStep.push({
                "assemblyguid": "08852642-254a-4ecf-a5de-203f292462b2",
                "numbertype": "0",
                "opcdwguid": "6c242a39-ee93-49d2-8e73-e4260d832bb7",
                "opcid": "jiayaojiankongzhixiangdiandongqiufabendiyuancheng2",
                "opcname": "加药间电动球阀2本地/远程",
                "opcvalue": "0",
                "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd22cc3"
            });
            Global.currentIframe().oTrain.currentState.push({
                "assemblyguid": "08852642-254a-4ecf-a5de-203f292462b2",
                "numbertype": "0",
                "opcdwguid": "6c242a39-ee93-49d2-8e73-e4260d832bb7",
                "opcid": "jiayaojiankongzhixiangdiandongqiufabendiyuancheng2",
                "opcname": "加药间电动球阀2本地/远程",
                "opcvalue": "0",
                "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd22cc3"
            });
        } else {
            $('#jiayaojiankongzhixiangdiandongqiufabendiyuancheng2').addClass('jiayaojiankongzhixiangdiandongqiufabendiyuancheng2-btn-off');
            $('#jiayaojiankongzhixiangdiandongqiufabendiyuancheng2').removeClass('jiayaojiankongzhixiangdiandongqiufabendiyuancheng2-btn-on');
            $(stepList).append(' <li title="加药间电动球阀2设置为远程"><span class="item">' + (stepList.children.length + 2) + ' ,加药间电动球阀2设置为远程</span></li>');
            Global.currentIframe().oTrain.operateStep.push({
                "assemblyguid": "08852642-254a-4ecf-a5de-203f292462b2",
                "numbertype": "0",
                "opcdwguid": "6c242a39-ee93-49d2-8e73-e4260d832bb7",
                "opcid": "jiayaojiankongzhixiangdiandongqiufabendiyuancheng2",
                "opcname": "加药间电动球阀2本地/远程",
                "opcvalue": "1",
                "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd22cc3"
            });
            Global.currentIframe().oTrain.currentState.push({
                "assemblyguid": "08852642-254a-4ecf-a5de-203f292462b2",
                "numbertype": "0",
                "opcdwguid": "6c242a39-ee93-49d2-8e73-e4260d832bb7",
                "opcid": "jiayaojiankongzhixiangdiandongqiufabendiyuancheng2",
                "opcname": "加药间电动球阀2本地/远程",
                "opcvalue": "1",
                "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd22cc3"
            });
        }
        console.log(Global.currentIframe().oTrain.operateStep);
        Global.currentIframe().oTrain.showStepTip(stepList.children.length);
    });
    $('#jiayaojiankongzhixiangdiandongqiufakai2').click(function() {
        $('#jiayaojiankongzhixiangdiandongqiufakai2').addClass('jiayaojiankongzhixiangdiandongqiufakai2-btn-on');
        $('#jiayaojiankongzhixiangdiandongqiufakai2').removeClass('jiayaojiankongzhixiangdiandongqiufakai2-btn-off');
        $('#jiayaojiankongzhixiangdiandongqiufaguan2').addClass('jiayaojiankongzhixiangdiandongqiufaguan2-btn-off');
        $('#jiayaojiankongzhixiangdiandongqiufaguan2').removeClass('jiayaojiankongzhixiangdiandongqiufaguan2-btn-on');
        //
        var stepList = Global.currentIframe().document.getElementById('questionStepList');
        $(stepList).append(' <li title="加药间电动球阀2打开"><span class="item">' + (stepList.children.length + 2) + ' ,加药间电动球阀2打开</span></li>');
        Global.currentIframe().oTrain.operateStep.push({
            "assemblyguid": "08852642-254a-4ecf-a5de-203f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4260d832bb7",
            "opcid": "jiayaojiankongzhixiangdiandongqiufakai2",
            "opcname": "加药间电动球阀2打开",
            "opcvalue": "1",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd22cc3"
        });
        Global.currentIframe().oTrain.currentState.push({
            "assemblyguid": "08852642-254a-4ecf-a5de-203f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4260d832bb7",
            "opcid": "jiayaojiankongzhixiangdiandongqiufakai2",
            "opcname": "加药间电动球阀2打开",
            "opcvalue": "1",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd22cc3"
        });
        Global.currentIframe().oTrain.currentState.push({
            "assemblyguid": "08852642-254a-4ecf-a5de-203f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4260d832bb7",
            "opcid": "jiayaojiankongzhixiangdiandongqiuguan2",
            "opcname": "加药间电动球阀2关闭",
            "opcvalue": "0",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd22cc3"
        });
        console.log(Global.currentIframe().oTrain.operateStep);
        Global.currentIframe().oTrain.showStepTip(stepList.children.length);
    });

    $('#jiayaojiankongzhixiangdiandongqiufaguan2').click(function() {
        $('#jiayaojiankongzhixiangdiandongqiufaguan2').addClass('jiayaojiankongzhixiangdiandongqiufaguan2-btn-on');
        $('#jiayaojiankongzhixiangdiandongqiufaguan2').removeClass('jiayaojiankongzhixiangdiandongqiufaguan2-btn-off');
        $('#jiayaojiankongzhixiangdiandongqiufakai2').addClass('jiayaojiankongzhixiangdiandongqiufakai2-btn-off');
        $('#jiayaojiankongzhixiangdiandongqiufakai2').removeClass('jiayaojiankongzhixiangdiandongqiufakai2-btn-on');
        //
        var stepList = Global.currentIframe().document.getElementById('questionStepList');
        $(stepList).append(' <li title="加药间电动球阀2关闭"><span class="item">' + (stepList.children.length + 2) + ' ,加药间电动球阀2关闭</span></li>');
        Global.currentIframe().oTrain.operateStep.push({
            "assemblyguid": "08852642-254a-4ecf-a5de-203f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4260d832bb7",
            "opcid": "jiayaojiankongzhixiangdiandongqiuguan2",
            "opcname": "加药间电动球阀2关闭",
            "opcvalue": "1",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd22cc3"
        });
        Global.currentIframe().oTrain.currentState.push({
            "assemblyguid": "08852642-254a-4ecf-a5de-203f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4260d832bb7",
            "opcid": "jiayaojiankongzhixiangdiandongqiufakai2",
            "opcname": "加药间电动球阀2打开",
            "opcvalue": "0",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd22cc3"
        });
        Global.currentIframe().oTrain.currentState.push({
            "assemblyguid": "08852642-254a-4ecf-a5de-203f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4260d832bb7",
            "opcid": "jiayaojiankongzhixiangdiandongqiuguan2",
            "opcname": "加药间电动球阀2关闭",
            "opcvalue": "1",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd22cc3"
        });
        console.log(Global.currentIframe().oTrain.operateStep);
        Global.currentIframe().oTrain.showStepTip(stepList.children.length);
    });

    $('#jiayaojiankongzhixiangdiandongqiufabendiyuancheng3').click(function() {
        var stepList = Global.currentIframe().document.getElementById('questionStepList');
        var classname = document.getElementById('jiayaojiankongzhixiangdiandongqiufabendiyuancheng3').className;
        if (classname.indexOf('jiayaojiankongzhixiangdiandongqiufabendiyuancheng3-btn-off') >= 0) {
            $('#jiayaojiankongzhixiangdiandongqiufabendiyuancheng3').addClass('jiayaojiankongzhixiangdiandongqiufabendiyuancheng3-btn-on');
            $('#jiayaojiankongzhixiangdiandongqiufabendiyuancheng3').removeClass('jiayaojiankongzhixiangdiandongqiufabendiyuancheng3-btn-off');
            $(stepList).append(' <li title="加药间电动球阀3设置为本地"><span class="item">' + (stepList.children.length + 3) + ' ,加药间电动球阀3设置为本地</span></li>');
            Global.currentIframe().oTrain.operateStep.push({
                "assemblyguid": "08853643-354a-4ecf-a5de-303f393463b3",
                "numbertype": "0",
                "opcdwguid": "6c343a39-ee93-49d3-8e73-e4360d833bb7",
                "opcid": "jiayaojiankongzhixiangdiandongqiufabendiyuancheng3",
                "opcname": "加药间电动球阀3本地/远程",
                "opcvalue": "0",
                "subsystemguid": "d695383f-33f8-4f43-8036-bc507cd33cc3"
            });
            Global.currentIframe().oTrain.currentState.push({
                "assemblyguid": "08853643-354a-4ecf-a5de-303f393463b3",
                "numbertype": "0",
                "opcdwguid": "6c343a39-ee93-49d3-8e73-e4360d833bb7",
                "opcid": "jiayaojiankongzhixiangdiandongqiufabendiyuancheng3",
                "opcname": "加药间电动球阀3本地/远程",
                "opcvalue": "0",
                "subsystemguid": "d695383f-33f8-4f43-8036-bc507cd33cc3"
            });
        } else {
            $('#jiayaojiankongzhixiangdiandongqiufabendiyuancheng3').addClass('jiayaojiankongzhixiangdiandongqiufabendiyuancheng3-btn-off');
            $('#jiayaojiankongzhixiangdiandongqiufabendiyuancheng3').removeClass('jiayaojiankongzhixiangdiandongqiufabendiyuancheng3-btn-on');
            $(stepList).append(' <li title="加药间电动球阀3设置为远程"><span class="item">' + (stepList.children.length + 3) + ' ,加药间电动球阀3设置为远程</span></li>');
            Global.currentIframe().oTrain.operateStep.push({
                "assemblyguid": "08853643-354a-4ecf-a5de-303f393463b3",
                "numbertype": "0",
                "opcdwguid": "6c343a39-ee93-49d3-8e73-e4360d833bb7",
                "opcid": "jiayaojiankongzhixiangdiandongqiufabendiyuancheng3",
                "opcname": "加药间电动球阀3本地/远程",
                "opcvalue": "1",
                "subsystemguid": "d695383f-33f8-4f43-8036-bc507cd33cc3"
            });
            Global.currentIframe().oTrain.currentState.push({
                "assemblyguid": "08853643-354a-4ecf-a5de-303f393463b3",
                "numbertype": "0",
                "opcdwguid": "6c343a39-ee93-49d3-8e73-e4360d833bb7",
                "opcid": "jiayaojiankongzhixiangdiandongqiufabendiyuancheng3",
                "opcname": "加药间电动球阀3本地/远程",
                "opcvalue": "1",
                "subsystemguid": "d695383f-33f8-4f43-8036-bc507cd33cc3"
            });
        }
        console.log(Global.currentIframe().oTrain.operateStep);
        Global.currentIframe().oTrain.showStepTip(stepList.children.length);
    });
    $('#jiayaojiankongzhixiangdiandongqiufakai3').click(function() {
        $('#jiayaojiankongzhixiangdiandongqiufakai3').addClass('jiayaojiankongzhixiangdiandongqiufakai3-btn-on');
        $('#jiayaojiankongzhixiangdiandongqiufakai3').removeClass('jiayaojiankongzhixiangdiandongqiufakai3-btn-off');
        $('#jiayaojiankongzhixiangdiandongqiufaguan3').addClass('jiayaojiankongzhixiangdiandongqiufaguan3-btn-off');
        $('#jiayaojiankongzhixiangdiandongqiufaguan3').removeClass('jiayaojiankongzhixiangdiandongqiufaguan3-btn-on');
        //
        var stepList = Global.currentIframe().document.getElementById('questionStepList');
        $(stepList).append(' <li title="加药间电动球阀3打开"><span class="item">' + (stepList.children.length + 3) + ' ,加药间电动球阀3打开</span></li>');
        Global.currentIframe().oTrain.operateStep.push({
            "assemblyguid": "08853643-354a-4ecf-a5de-303f393463b3",
            "numbertype": "0",
            "opcdwguid": "6c343a39-ee93-49d3-8e73-e4360d833bb7",
            "opcid": "jiayaojiankongzhixiangdiandongqiufakai3",
            "opcname": "加药间电动球阀3打开",
            "opcvalue": "1",
            "subsystemguid": "d695383f-33f8-4f43-8036-bc507cd33cc3"
        });
        Global.currentIframe().oTrain.currentState.push({
            "assemblyguid": "08853643-354a-4ecf-a5de-303f393463b3",
            "numbertype": "0",
            "opcdwguid": "6c343a39-ee93-49d3-8e73-e4360d833bb7",
            "opcid": "jiayaojiankongzhixiangdiandongqiufakai3",
            "opcname": "加药间电动球阀3打开",
            "opcvalue": "1",
            "subsystemguid": "d695383f-33f8-4f43-8036-bc507cd33cc3"
        });
        Global.currentIframe().oTrain.currentState.push({
            "assemblyguid": "08853643-354a-4ecf-a5de-303f393463b3",
            "numbertype": "0",
            "opcdwguid": "6c343a39-ee93-49d3-8e73-e4360d833bb7",
            "opcid": "jiayaojiankongzhixiangdiandongqiuguan3",
            "opcname": "加药间电动球阀3关闭",
            "opcvalue": "0",
            "subsystemguid": "d695383f-33f8-4f43-8036-bc507cd33cc3"
        });
        console.log(Global.currentIframe().oTrain.operateStep);
        Global.currentIframe().oTrain.showStepTip(stepList.children.length);
    });

    $('#jiayaojiankongzhixiangdiandongqiufaguan3').click(function() {
        $('#jiayaojiankongzhixiangdiandongqiufaguan3').addClass('jiayaojiankongzhixiangdiandongqiufaguan3-btn-on');
        $('#jiayaojiankongzhixiangdiandongqiufaguan3').removeClass('jiayaojiankongzhixiangdiandongqiufaguan3-btn-off');
        $('#jiayaojiankongzhixiangdiandongqiufakai3').addClass('jiayaojiankongzhixiangdiandongqiufakai3-btn-off');
        $('#jiayaojiankongzhixiangdiandongqiufakai3').removeClass('jiayaojiankongzhixiangdiandongqiufakai3-btn-on');
        //
        var stepList = Global.currentIframe().document.getElementById('questionStepList');
        $(stepList).append(' <li title="加药间电动球阀3关闭"><span class="item">' + (stepList.children.length + 3) + ' ,加药间电动球阀3关闭</span></li>');
        Global.currentIframe().oTrain.operateStep.push({
            "assemblyguid": "08853643-354a-4ecf-a5de-303f393463b3",
            "numbertype": "0",
            "opcdwguid": "6c343a39-ee93-49d3-8e73-e4360d833bb7",
            "opcid": "jiayaojiankongzhixiangdiandongqiuguan3",
            "opcname": "加药间电动球阀3关闭",
            "opcvalue": "1",
            "subsystemguid": "d695383f-33f8-4f43-8036-bc507cd33cc3"
        });
        Global.currentIframe().oTrain.currentState.push({
            "assemblyguid": "08853643-354a-4ecf-a5de-303f393463b3",
            "numbertype": "0",
            "opcdwguid": "6c343a39-ee93-49d3-8e73-e4360d833bb7",
            "opcid": "jiayaojiankongzhixiangdiandongqiufakai3",
            "opcname": "加药间电动球阀3打开",
            "opcvalue": "0",
            "subsystemguid": "d695383f-33f8-4f43-8036-bc507cd33cc3"
        });
        Global.currentIframe().oTrain.currentState.push({
            "assemblyguid": "08853643-354a-4ecf-a5de-303f393463b3",
            "numbertype": "0",
            "opcdwguid": "6c343a39-ee93-49d3-8e73-e4360d833bb7",
            "opcid": "jiayaojiankongzhixiangdiandongqiuguan3",
            "opcname": "加药间电动球阀3关闭",
            "opcvalue": "1",
            "subsystemguid": "d695383f-33f8-4f43-8036-bc507cd33cc3"
        });
        console.log(Global.currentIframe().oTrain.operateStep);
        Global.currentIframe().oTrain.showStepTip(stepList.children.length);
    });
    $('#jiayaojiankongzhixiangdiandongqiufabendiyuancheng4').click(function() {
        var stepList = Global.currentIframe().document.getElementById('questionStepList');
        var classname = document.getElementById('jiayaojiankongzhixiangdiandongqiufabendiyuancheng4').className;
        if (classname.indexOf('jiayaojiankongzhixiangdiandongqiufabendiyuancheng4-btn-off') >= 0) {
            $('#jiayaojiankongzhixiangdiandongqiufabendiyuancheng4').addClass('jiayaojiankongzhixiangdiandongqiufabendiyuancheng4-btn-on');
            $('#jiayaojiankongzhixiangdiandongqiufabendiyuancheng4').removeClass('jiayaojiankongzhixiangdiandongqiufabendiyuancheng4-btn-off');
            $(stepList).append(' <li title="加药间电动球阀4设置为本地"><span class="item">' + (stepList.children.length + 4) + ' ,加药间电动球阀4设置为本地</span></li>');
            Global.currentIframe().oTrain.operateStep.push({
                "assemblyguid": "08854644-454a-4ecf-a5de-404f494464b4",
                "numbertype": "0",
                "opcdwguid": "6c444a49-ee94-49d4-8e74-e4460d844bb7",
                "opcid": "jiayaojiankongzhixiangdiandongqiufabendiyuancheng4",
                "opcname": "加药间电动球阀4本地/远程",
                "opcvalue": "0",
                "subsystemguid": "d695484f-44f8-4f44-8046-bc507cd44cc4"
            });
            Global.currentIframe().oTrain.currentState.push({
                "assemblyguid": "08854644-454a-4ecf-a5de-404f494464b4",
                "numbertype": "0",
                "opcdwguid": "6c444a49-ee94-49d4-8e74-e4460d844bb7",
                "opcid": "jiayaojiankongzhixiangdiandongqiufabendiyuancheng4",
                "opcname": "加药间电动球阀4本地/远程",
                "opcvalue": "0",
                "subsystemguid": "d695484f-44f8-4f44-8046-bc507cd44cc4"
            });
        } else {
            $('#jiayaojiankongzhixiangdiandongqiufabendiyuancheng4').addClass('jiayaojiankongzhixiangdiandongqiufabendiyuancheng4-btn-off');
            $('#jiayaojiankongzhixiangdiandongqiufabendiyuancheng4').removeClass('jiayaojiankongzhixiangdiandongqiufabendiyuancheng4-btn-on');
            $(stepList).append(' <li title="加药间电动球阀4设置为远程"><span class="item">' + (stepList.children.length + 4) + ' ,加药间电动球阀4设置为远程</span></li>');
            Global.currentIframe().oTrain.operateStep.push({
                "assemblyguid": "08854644-454a-4ecf-a5de-404f494464b4",
                "numbertype": "0",
                "opcdwguid": "6c444a49-ee94-49d4-8e74-e4460d844bb7",
                "opcid": "jiayaojiankongzhixiangdiandongqiufabendiyuancheng4",
                "opcname": "加药间电动球阀4本地/远程",
                "opcvalue": "1",
                "subsystemguid": "d695484f-44f8-4f44-8046-bc507cd44cc4"
            });
            Global.currentIframe().oTrain.currentState.push({
                "assemblyguid": "08854644-454a-4ecf-a5de-404f494464b4",
                "numbertype": "0",
                "opcdwguid": "6c444a49-ee94-49d4-8e74-e4460d844bb7",
                "opcid": "jiayaojiankongzhixiangdiandongqiufabendiyuancheng4",
                "opcname": "加药间电动球阀4本地/远程",
                "opcvalue": "1",
                "subsystemguid": "d695484f-44f8-4f44-8046-bc507cd44cc4"
            });
        }
        console.log(Global.currentIframe().oTrain.operateStep);
        Global.currentIframe().oTrain.showStepTip(stepList.children.length);
    });
    $('#jiayaojiankongzhixiangdiandongqiufakai4').click(function() {
        $('#jiayaojiankongzhixiangdiandongqiufakai4').addClass('jiayaojiankongzhixiangdiandongqiufakai4-btn-on');
        $('#jiayaojiankongzhixiangdiandongqiufakai4').removeClass('jiayaojiankongzhixiangdiandongqiufakai4-btn-off');
        $('#jiayaojiankongzhixiangdiandongqiufaguan4').addClass('jiayaojiankongzhixiangdiandongqiufaguan4-btn-off');
        $('#jiayaojiankongzhixiangdiandongqiufaguan4').removeClass('jiayaojiankongzhixiangdiandongqiufaguan4-btn-on');
        //
        var stepList = Global.currentIframe().document.getElementById('questionStepList');
        $(stepList).append(' <li title="加药间电动球阀4打开"><span class="item">' + (stepList.children.length + 4) + ' ,加药间电动球阀4打开</span></li>');
        Global.currentIframe().oTrain.operateStep.push({
            "assemblyguid": "08854644-454a-4ecf-a5de-404f494464b4",
            "numbertype": "0",
            "opcdwguid": "6c444a49-ee94-49d4-8e74-e4460d844bb7",
            "opcid": "jiayaojiankongzhixiangdiandongqiufakai4",
            "opcname": "加药间电动球阀4打开",
            "opcvalue": "1",
            "subsystemguid": "d695484f-44f8-4f44-8046-bc507cd44cc4"
        });
        Global.currentIframe().oTrain.currentState.push({
            "assemblyguid": "08854644-454a-4ecf-a5de-404f494464b4",
            "numbertype": "0",
            "opcdwguid": "6c444a49-ee94-49d4-8e74-e4460d844bb7",
            "opcid": "jiayaojiankongzhixiangdiandongqiufakai4",
            "opcname": "加药间电动球阀4打开",
            "opcvalue": "1",
            "subsystemguid": "d695484f-44f8-4f44-8046-bc507cd44cc4"
        });
        Global.currentIframe().oTrain.currentState.push({
            "assemblyguid": "08854644-454a-4ecf-a5de-404f494464b4",
            "numbertype": "0",
            "opcdwguid": "6c444a49-ee94-49d4-8e74-e4460d844bb7",
            "opcid": "jiayaojiankongzhixiangdiandongqiuguan4",
            "opcname": "加药间电动球阀4关闭",
            "opcvalue": "0",
            "subsystemguid": "d695484f-44f8-4f44-8046-bc507cd44cc4"
        });
        console.log(Global.currentIframe().oTrain.operateStep);
        Global.currentIframe().oTrain.showStepTip(stepList.children.length);
    });

    $('#jiayaojiankongzhixiangdiandongqiufaguan4').click(function() {
        $('#jiayaojiankongzhixiangdiandongqiufaguan4').addClass('jiayaojiankongzhixiangdiandongqiufaguan4-btn-on');
        $('#jiayaojiankongzhixiangdiandongqiufaguan4').removeClass('jiayaojiankongzhixiangdiandongqiufaguan4-btn-off');
        $('#jiayaojiankongzhixiangdiandongqiufakai4').addClass('jiayaojiankongzhixiangdiandongqiufakai4-btn-off');
        $('#jiayaojiankongzhixiangdiandongqiufakai4').removeClass('jiayaojiankongzhixiangdiandongqiufakai4-btn-on');
        //
        var stepList = Global.currentIframe().document.getElementById('questionStepList');
        $(stepList).append(' <li title="加药间电动球阀4关闭"><span class="item">' + (stepList.children.length + 4) + ' ,加药间电动球阀4关闭</span></li>');
        Global.currentIframe().oTrain.operateStep.push({
            "assemblyguid": "08854644-454a-4ecf-a5de-404f494464b4",
            "numbertype": "0",
            "opcdwguid": "6c444a49-ee94-49d4-8e74-e4460d844bb7",
            "opcid": "jiayaojiankongzhixiangdiandongqiuguan4",
            "opcname": "加药间电动球阀4关闭",
            "opcvalue": "1",
            "subsystemguid": "d695484f-44f8-4f44-8046-bc507cd44cc4"
        });
        Global.currentIframe().oTrain.currentState.push({
            "assemblyguid": "08854644-454a-4ecf-a5de-404f494464b4",
            "numbertype": "0",
            "opcdwguid": "6c444a49-ee94-49d4-8e74-e4460d844bb7",
            "opcid": "jiayaojiankongzhixiangdiandongqiufakai4",
            "opcname": "加药间电动球阀4打开",
            "opcvalue": "0",
            "subsystemguid": "d695484f-44f8-4f44-8046-bc507cd44cc4"
        });
        Global.currentIframe().oTrain.currentState.push({
            "assemblyguid": "08854644-454a-4ecf-a5de-404f494464b4",
            "numbertype": "0",
            "opcdwguid": "6c444a49-ee94-49d4-8e74-e4460d844bb7",
            "opcid": "jiayaojiankongzhixiangdiandongqiuguan4",
            "opcname": "加药间电动球阀4关闭",
            "opcvalue": "1",
            "subsystemguid": "d695484f-44f8-4f44-8046-bc507cd44cc4"
        });
        console.log(Global.currentIframe().oTrain.operateStep);
        Global.currentIframe().oTrain.showStepTip(stepList.children.length);
    });
    $('#jiayaojiankongzhixiangdiandongqiufabendiyuancheng5').click(function() {
        var stepList = Global.currentIframe().document.getElementById('questionStepList');
        var classname = document.getElementById('jiayaojiankongzhixiangdiandongqiufabendiyuancheng5').className;
        if (classname.indexOf('jiayaojiankongzhixiangdiandongqiufabendiyuancheng5-btn-off') >= 0) {
            $('#jiayaojiankongzhixiangdiandongqiufabendiyuancheng5').addClass('jiayaojiankongzhixiangdiandongqiufabendiyuancheng5-btn-on');
            $('#jiayaojiankongzhixiangdiandongqiufabendiyuancheng5').removeClass('jiayaojiankongzhixiangdiandongqiufabendiyuancheng5-btn-off');
            $(stepList).append(' <li title="加药间电动球阀5设置为本地"><span class="item">' + (stepList.children.length + 5) + ' ,加药间电动球阀5设置为本地</span></li>');
            Global.currentIframe().oTrain.operateStep.push({
                "assemblyguid": "08855655-555a-5ecf-a5de-505f595565b5",
                "numbertype": "0",
                "opcdwguid": "6c555a59-ee95-59d5-8e75-e5560d855bb7",
                "opcid": "jiayaojiankongzhixiangdiandongqiufabendiyuancheng5",
                "opcname": "加药间电动球阀5本地/远程",
                "opcvalue": "0",
                "subsystemguid": "d695585f-55f8-5f55-8056-bc507cd55cc5"
            });
            Global.currentIframe().oTrain.currentState.push({
                "assemblyguid": "08855655-555a-5ecf-a5de-505f595565b5",
                "numbertype": "0",
                "opcdwguid": "6c555a59-ee95-59d5-8e75-e5560d855bb7",
                "opcid": "jiayaojiankongzhixiangdiandongqiufabendiyuancheng5",
                "opcname": "加药间电动球阀5本地/远程",
                "opcvalue": "0",
                "subsystemguid": "d695585f-55f8-5f55-8056-bc507cd55cc5"
            });
        } else {
            $('#jiayaojiankongzhixiangdiandongqiufabendiyuancheng5').addClass('jiayaojiankongzhixiangdiandongqiufabendiyuancheng5-btn-off');
            $('#jiayaojiankongzhixiangdiandongqiufabendiyuancheng5').removeClass('jiayaojiankongzhixiangdiandongqiufabendiyuancheng5-btn-on');
            $(stepList).append(' <li title="加药间电动球阀5设置为远程"><span class="item">' + (stepList.children.length + 5) + ' ,加药间电动球阀5设置为远程</span></li>');
            Global.currentIframe().oTrain.operateStep.push({
                "assemblyguid": "08855655-555a-5ecf-a5de-505f595565b5",
                "numbertype": "0",
                "opcdwguid": "6c555a59-ee95-59d5-8e75-e5560d855bb7",
                "opcid": "jiayaojiankongzhixiangdiandongqiufabendiyuancheng5",
                "opcname": "加药间电动球阀5本地/远程",
                "opcvalue": "1",
                "subsystemguid": "d695585f-55f8-5f55-8056-bc507cd55cc5"
            });
            Global.currentIframe().oTrain.currentState.push({
                "assemblyguid": "08855655-555a-5ecf-a5de-505f595565b5",
                "numbertype": "0",
                "opcdwguid": "6c555a59-ee95-59d5-8e75-e5560d855bb7",
                "opcid": "jiayaojiankongzhixiangdiandongqiufabendiyuancheng5",
                "opcname": "加药间电动球阀5本地/远程",
                "opcvalue": "1",
                "subsystemguid": "d695585f-55f8-5f55-8056-bc507cd55cc5"
            });
        }
        console.log(Global.currentIframe().oTrain.operateStep);
        Global.currentIframe().oTrain.showStepTip(stepList.children.length);
    });
    $('#jiayaojiankongzhixiangdiandongqiufakai5').click(function() {
        $('#jiayaojiankongzhixiangdiandongqiufakai5').addClass('jiayaojiankongzhixiangdiandongqiufakai5-btn-on');
        $('#jiayaojiankongzhixiangdiandongqiufakai5').removeClass('jiayaojiankongzhixiangdiandongqiufakai5-btn-off');
        $('#jiayaojiankongzhixiangdiandongqiufaguan5').addClass('jiayaojiankongzhixiangdiandongqiufaguan5-btn-off');
        $('#jiayaojiankongzhixiangdiandongqiufaguan5').removeClass('jiayaojiankongzhixiangdiandongqiufaguan5-btn-on');
        //
        var stepList = Global.currentIframe().document.getElementById('questionStepList');
        $(stepList).append(' <li title="加药间电动球阀5打开"><span class="item">' + (stepList.children.length + 5) + ' ,加药间电动球阀5打开</span></li>');
        Global.currentIframe().oTrain.operateStep.push({
            "assemblyguid": "08855655-555a-5ecf-a5de-505f595565b5",
            "numbertype": "0",
            "opcdwguid": "6c555a59-ee95-59d5-8e75-e5560d855bb7",
            "opcid": "jiayaojiankongzhixiangdiandongqiufakai5",
            "opcname": "加药间电动球阀5打开",
            "opcvalue": "1",
            "subsystemguid": "d695585f-55f8-5f55-8056-bc507cd55cc5"
        });
        Global.currentIframe().oTrain.currentState.push({
            "assemblyguid": "08855655-555a-5ecf-a5de-505f595565b5",
            "numbertype": "0",
            "opcdwguid": "6c555a59-ee95-59d5-8e75-e5560d855bb7",
            "opcid": "jiayaojiankongzhixiangdiandongqiufakai5",
            "opcname": "加药间电动球阀5打开",
            "opcvalue": "1",
            "subsystemguid": "d695585f-55f8-5f55-8056-bc507cd55cc5"
        });
        Global.currentIframe().oTrain.currentState.push({
            "assemblyguid": "08855655-555a-5ecf-a5de-505f595565b5",
            "numbertype": "0",
            "opcdwguid": "6c555a59-ee95-59d5-8e75-e5560d855bb7",
            "opcid": "jiayaojiankongzhixiangdiandongqiuguan5",
            "opcname": "加药间电动球阀5关闭",
            "opcvalue": "0",
            "subsystemguid": "d695585f-55f8-5f55-8056-bc507cd55cc5"
        });
        console.log(Global.currentIframe().oTrain.operateStep);
        Global.currentIframe().oTrain.showStepTip(stepList.children.length);
    });

    $('#jiayaojiankongzhixiangdiandongqiufaguan5').click(function() {
        $('#jiayaojiankongzhixiangdiandongqiufaguan5').addClass('jiayaojiankongzhixiangdiandongqiufaguan5-btn-on');
        $('#jiayaojiankongzhixiangdiandongqiufaguan5').removeClass('jiayaojiankongzhixiangdiandongqiufaguan5-btn-off');
        $('#jiayaojiankongzhixiangdiandongqiufakai5').addClass('jiayaojiankongzhixiangdiandongqiufakai5-btn-off');
        $('#jiayaojiankongzhixiangdiandongqiufakai5').removeClass('jiayaojiankongzhixiangdiandongqiufakai5-btn-on');
        //
        var stepList = Global.currentIframe().document.getElementById('questionStepList');
        $(stepList).append(' <li title="加药间电动球阀5关闭"><span class="item">' + (stepList.children.length + 5) + ' ,加药间电动球阀5关闭</span></li>');
        Global.currentIframe().oTrain.operateStep.push({
            "assemblyguid": "08855655-555a-5ecf-a5de-505f595565b5",
            "numbertype": "0",
            "opcdwguid": "6c555a59-ee95-59d5-8e75-e5560d855bb7",
            "opcid": "jiayaojiankongzhixiangdiandongqiuguan5",
            "opcname": "加药间电动球阀5关闭",
            "opcvalue": "1",
            "subsystemguid": "d695585f-55f8-5f55-8056-bc507cd55cc5"
        });
        Global.currentIframe().oTrain.currentState.push({
            "assemblyguid": "08855655-555a-5ecf-a5de-505f595565b5",
            "numbertype": "0",
            "opcdwguid": "6c555a59-ee95-59d5-8e75-e5560d855bb7",
            "opcid": "jiayaojiankongzhixiangdiandongqiufakai5",
            "opcname": "加药间电动球阀5打开",
            "opcvalue": "0",
            "subsystemguid": "d695585f-55f8-5f55-8056-bc507cd55cc5"
        });
        Global.currentIframe().oTrain.currentState.push({
            "assemblyguid": "08855655-555a-5ecf-a5de-505f595565b5",
            "numbertype": "0",
            "opcdwguid": "6c555a59-ee95-59d5-8e75-e5560d855bb7",
            "opcid": "jiayaojiankongzhixiangdiandongqiuguan5",
            "opcname": "加药间电动球阀5关闭",
            "opcvalue": "1",
            "subsystemguid": "d695585f-55f8-5f55-8056-bc507cd55cc5"
        });
        console.log(Global.currentIframe().oTrain.operateStep);
        Global.currentIframe().oTrain.showStepTip(stepList.children.length);
    });



    $('#jiayaojiankongzhixiangdiandongqiufabendiyuancheng6').click(function() {
        var stepList = Global.currentIframe().document.getElementById('questionStepList');
        var classname = document.getElementById('jiayaojiankongzhixiangdiandongqiufabendiyuancheng6').className;
        if (classname.indexOf('jiayaojiankongzhixiangdiandongqiufabendiyuancheng6-btn-off') >= 0) {
            $('#jiayaojiankongzhixiangdiandongqiufabendiyuancheng6').addClass('jiayaojiankongzhixiangdiandongqiufabendiyuancheng6-btn-on');
            $('#jiayaojiankongzhixiangdiandongqiufabendiyuancheng6').removeClass('jiayaojiankongzhixiangdiandongqiufabendiyuancheng6-btn-off');
            $(stepList).append(' <li title="加药间电动球阀6设置为本地"><span class="item">' + (stepList.children.length + 6) + ' ,加药间电动球阀6设置为本地</span></li>');
            Global.currentIframe().oTrain.operateStep.push({
                "assemblyguid": "08866666-666a-6ecf-a6de-606f696666b6",
                "numbertype": "0",
                "opcdwguid": "6c666a69-ee96-69d6-8e76-e6660d866bb7",
                "opcid": "jiayaojiankongzhixiangdiandongqiufabendiyuancheng6",
                "opcname": "加药间电动球阀6本地/远程",
                "opcvalue": "0",
                "subsystemguid": "d696686f-66f8-6f66-8066-bc607cd66cc6"
            });
            Global.currentIframe().oTrain.currentState.push({
                "assemblyguid": "08866666-666a-6ecf-a6de-606f696666b6",
                "numbertype": "0",
                "opcdwguid": "6c666a69-ee96-69d6-8e76-e6660d866bb7",
                "opcid": "jiayaojiankongzhixiangdiandongqiufabendiyuancheng6",
                "opcname": "加药间电动球阀6本地/远程",
                "opcvalue": "0",
                "subsystemguid": "d696686f-66f8-6f66-8066-bc607cd66cc6"
            });
        } else {
            $('#jiayaojiankongzhixiangdiandongqiufabendiyuancheng6').addClass('jiayaojiankongzhixiangdiandongqiufabendiyuancheng6-btn-off');
            $('#jiayaojiankongzhixiangdiandongqiufabendiyuancheng6').removeClass('jiayaojiankongzhixiangdiandongqiufabendiyuancheng6-btn-on');
            $(stepList).append(' <li title="加药间电动球阀6设置为远程"><span class="item">' + (stepList.children.length + 6) + ' ,加药间电动球阀6设置为远程</span></li>');
            Global.currentIframe().oTrain.operateStep.push({
                "assemblyguid": "08866666-666a-6ecf-a6de-606f696666b6",
                "numbertype": "0",
                "opcdwguid": "6c666a69-ee96-69d6-8e76-e6660d866bb7",
                "opcid": "jiayaojiankongzhixiangdiandongqiufabendiyuancheng6",
                "opcname": "加药间电动球阀6本地/远程",
                "opcvalue": "1",
                "subsystemguid": "d696686f-66f8-6f66-8066-bc607cd66cc6"
            });
            Global.currentIframe().oTrain.currentState.push({
                "assemblyguid": "08866666-666a-6ecf-a6de-606f696666b6",
                "numbertype": "0",
                "opcdwguid": "6c666a69-ee96-69d6-8e76-e6660d866bb7",
                "opcid": "jiayaojiankongzhixiangdiandongqiufabendiyuancheng6",
                "opcname": "加药间电动球阀6本地/远程",
                "opcvalue": "1",
                "subsystemguid": "d696686f-66f8-6f66-8066-bc607cd66cc6"
            });
        }
        console.log(Global.currentIframe().oTrain.operateStep);
        Global.currentIframe().oTrain.showStepTip(stepList.children.length);
    });
    $('#jiayaojiankongzhixiangdiandongqiufakai6').click(function() {
        $('#jiayaojiankongzhixiangdiandongqiufakai6').addClass('jiayaojiankongzhixiangdiandongqiufakai6-btn-on');
        $('#jiayaojiankongzhixiangdiandongqiufakai6').removeClass('jiayaojiankongzhixiangdiandongqiufakai6-btn-off');
        $('#jiayaojiankongzhixiangdiandongqiufaguan6').addClass('jiayaojiankongzhixiangdiandongqiufaguan6-btn-off');
        $('#jiayaojiankongzhixiangdiandongqiufaguan6').removeClass('jiayaojiankongzhixiangdiandongqiufaguan6-btn-on');
        //
        var stepList = Global.currentIframe().document.getElementById('questionStepList');
        $(stepList).append(' <li title="加药间电动球阀6打开"><span class="item">' + (stepList.children.length + 6) + ' ,加药间电动球阀6打开</span></li>');
        Global.currentIframe().oTrain.operateStep.push({
            "assemblyguid": "08866666-666a-6ecf-a6de-606f696666b6",
            "numbertype": "0",
            "opcdwguid": "6c666a69-ee96-69d6-8e76-e6660d866bb7",
            "opcid": "jiayaojiankongzhixiangdiandongqiufakai6",
            "opcname": "加药间电动球阀6打开",
            "opcvalue": "1",
            "subsystemguid": "d696686f-66f8-6f66-8066-bc607cd66cc6"
        });
        Global.currentIframe().oTrain.currentState.push({
            "assemblyguid": "08866666-666a-6ecf-a6de-606f696666b6",
            "numbertype": "0",
            "opcdwguid": "6c666a69-ee96-69d6-8e76-e6660d866bb7",
            "opcid": "jiayaojiankongzhixiangdiandongqiufakai6",
            "opcname": "加药间电动球阀6打开",
            "opcvalue": "1",
            "subsystemguid": "d696686f-66f8-6f66-8066-bc607cd66cc6"
        });
        Global.currentIframe().oTrain.currentState.push({
            "assemblyguid": "08866666-666a-6ecf-a6de-606f696666b6",
            "numbertype": "0",
            "opcdwguid": "6c666a69-ee96-69d6-8e76-e6660d866bb7",
            "opcid": "jiayaojiankongzhixiangdiandongqiuguan6",
            "opcname": "加药间电动球阀6关闭",
            "opcvalue": "0",
            "subsystemguid": "d696686f-66f8-6f66-8066-bc607cd66cc6"
        });
        console.log(Global.currentIframe().oTrain.operateStep);
        Global.currentIframe().oTrain.showStepTip(stepList.children.length);
    });

    $('#jiayaojiankongzhixiangdiandongqiufaguan6').click(function() {
        $('#jiayaojiankongzhixiangdiandongqiufaguan6').addClass('jiayaojiankongzhixiangdiandongqiufaguan6-btn-on');
        $('#jiayaojiankongzhixiangdiandongqiufaguan6').removeClass('jiayaojiankongzhixiangdiandongqiufaguan6-btn-off');
        $('#jiayaojiankongzhixiangdiandongqiufakai6').addClass('jiayaojiankongzhixiangdiandongqiufakai6-btn-off');
        $('#jiayaojiankongzhixiangdiandongqiufakai6').removeClass('jiayaojiankongzhixiangdiandongqiufakai6-btn-on');
        //
        var stepList = Global.currentIframe().document.getElementById('questionStepList');
        $(stepList).append(' <li title="加药间电动球阀6关闭"><span class="item">' + (stepList.children.length + 6) + ' ,加药间电动球阀6关闭</span></li>');
        Global.currentIframe().oTrain.operateStep.push({
            "assemblyguid": "08866666-666a-6ecf-a6de-606f696666b6",
            "numbertype": "0",
            "opcdwguid": "6c666a69-ee96-69d6-8e76-e6660d866bb7",
            "opcid": "jiayaojiankongzhixiangdiandongqiuguan6",
            "opcname": "加药间电动球阀6关闭",
            "opcvalue": "1",
            "subsystemguid": "d696686f-66f8-6f66-8066-bc607cd66cc6"
        });
        Global.currentIframe().oTrain.currentState.push({
            "assemblyguid": "08866666-666a-6ecf-a6de-606f696666b6",
            "numbertype": "0",
            "opcdwguid": "6c666a69-ee96-69d6-8e76-e6660d866bb7",
            "opcid": "jiayaojiankongzhixiangdiandongqiufakai6",
            "opcname": "加药间电动球阀6打开",
            "opcvalue": "0",
            "subsystemguid": "d696686f-66f8-6f66-8066-bc607cd66cc6"
        });
        Global.currentIframe().oTrain.currentState.push({
            "assemblyguid": "08866666-666a-6ecf-a6de-606f696666b6",
            "numbertype": "0",
            "opcdwguid": "6c666a69-ee96-69d6-8e76-e6660d866bb7",
            "opcid": "jiayaojiankongzhixiangdiandongqiuguan6",
            "opcname": "加药间电动球阀6关闭",
            "opcvalue": "1",
            "subsystemguid": "d696686f-66f8-6f66-8066-bc607cd66cc6"
        });
        console.log(Global.currentIframe().oTrain.operateStep);
        Global.currentIframe().oTrain.showStepTip(stepList.children.length);
    });

    $('#jiayaojiankongzhixiangdiandongqiufabendiyuancheng7').click(function() {
        var stepList = Global.currentIframe().document.getElementById('questionStepList');
        var classname = document.getElementById('jiayaojiankongzhixiangdiandongqiufabendiyuancheng7').className;
        if (classname.indexOf('jiayaojiankongzhixiangdiandongqiufabendiyuancheng7-btn-off') >= 0) {
            $('#jiayaojiankongzhixiangdiandongqiufabendiyuancheng7').addClass('jiayaojiankongzhixiangdiandongqiufabendiyuancheng7-btn-on');
            $('#jiayaojiankongzhixiangdiandongqiufabendiyuancheng7').removeClass('jiayaojiankongzhixiangdiandongqiufabendiyuancheng7-btn-off');
            $(stepList).append(' <li title="加药间电动球阀7设置为本地"><span class="item">' + (stepList.children.length + 7) + ' ,加药间电动球阀7设置为本地</span></li>');
            Global.currentIframe().oTrain.operateStep.push({
                "assemblyguid": "08877777-777a-7ecf-a7de-707f797777b7",
                "numbertype": "0",
                "opcdwguid": "7c777a79-ee97-79d7-8e77-e7770d877bb7",
                "opcid": "jiayaojiankongzhixiangdiandongqiufabendiyuancheng7",
                "opcname": "加药间电动球阀7本地/远程",
                "opcvalue": "0",
                "subsystemguid": "d797787f-77f8-7f77-8077-bc707cd77cc7"
            });
            Global.currentIframe().oTrain.currentState.push({
                "assemblyguid": "08877777-777a-7ecf-a7de-707f797777b7",
                "numbertype": "0",
                "opcdwguid": "7c777a79-ee97-79d7-8e77-e7770d877bb7",
                "opcid": "jiayaojiankongzhixiangdiandongqiufabendiyuancheng7",
                "opcname": "加药间电动球阀7本地/远程",
                "opcvalue": "0",
                "subsystemguid": "d797787f-77f8-7f77-8077-bc707cd77cc7"
            });
        } else {
            $('#jiayaojiankongzhixiangdiandongqiufabendiyuancheng7').addClass('jiayaojiankongzhixiangdiandongqiufabendiyuancheng7-btn-off');
            $('#jiayaojiankongzhixiangdiandongqiufabendiyuancheng7').removeClass('jiayaojiankongzhixiangdiandongqiufabendiyuancheng7-btn-on');
            $(stepList).append(' <li title="加药间电动球阀7设置为远程"><span class="item">' + (stepList.children.length + 7) + ' ,加药间电动球阀7设置为远程</span></li>');
            Global.currentIframe().oTrain.operateStep.push({
                "assemblyguid": "08877777-777a-7ecf-a7de-707f797777b7",
                "numbertype": "0",
                "opcdwguid": "7c777a79-ee97-79d7-8e77-e7770d877bb7",
                "opcid": "jiayaojiankongzhixiangdiandongqiufabendiyuancheng7",
                "opcname": "加药间电动球阀7本地/远程",
                "opcvalue": "1",
                "subsystemguid": "d797787f-77f8-7f77-8077-bc707cd77cc7"
            });
            Global.currentIframe().oTrain.currentState.push({
                "assemblyguid": "08877777-777a-7ecf-a7de-707f797777b7",
                "numbertype": "0",
                "opcdwguid": "7c777a79-ee97-79d7-8e77-e7770d877bb7",
                "opcid": "jiayaojiankongzhixiangdiandongqiufabendiyuancheng7",
                "opcname": "加药间电动球阀7本地/远程",
                "opcvalue": "1",
                "subsystemguid": "d797787f-77f8-7f77-8077-bc707cd77cc7"
            });
        }
        console.log(Global.currentIframe().oTrain.operateStep);
        Global.currentIframe().oTrain.showStepTip(stepList.children.length);
    });
    $('#jiayaojiankongzhixiangdiandongqiufakai7').click(function() {
        $('#jiayaojiankongzhixiangdiandongqiufakai7').addClass('jiayaojiankongzhixiangdiandongqiufakai7-btn-on');
        $('#jiayaojiankongzhixiangdiandongqiufakai7').removeClass('jiayaojiankongzhixiangdiandongqiufakai7-btn-off');
        $('#jiayaojiankongzhixiangdiandongqiufaguan7').addClass('jiayaojiankongzhixiangdiandongqiufaguan7-btn-off');
        $('#jiayaojiankongzhixiangdiandongqiufaguan7').removeClass('jiayaojiankongzhixiangdiandongqiufaguan7-btn-on');
        //
        var stepList = Global.currentIframe().document.getElementById('questionStepList');
        $(stepList).append(' <li title="加药间电动球阀7打开"><span class="item">' + (stepList.children.length + 7) + ' ,加药间电动球阀7打开</span></li>');
        Global.currentIframe().oTrain.operateStep.push({
            "assemblyguid": "08877777-777a-7ecf-a7de-707f797777b7",
            "numbertype": "0",
            "opcdwguid": "7c777a79-ee97-79d7-8e77-e7770d877bb7",
            "opcid": "jiayaojiankongzhixiangdiandongqiufakai7",
            "opcname": "加药间电动球阀7打开",
            "opcvalue": "1",
            "subsystemguid": "d797787f-77f8-7f77-8077-bc707cd77cc7"
        });
        Global.currentIframe().oTrain.currentState.push({
            "assemblyguid": "08877777-777a-7ecf-a7de-707f797777b7",
            "numbertype": "0",
            "opcdwguid": "7c777a79-ee97-79d7-8e77-e7770d877bb7",
            "opcid": "jiayaojiankongzhixiangdiandongqiufakai7",
            "opcname": "加药间电动球阀7打开",
            "opcvalue": "1",
            "subsystemguid": "d797787f-77f8-7f77-8077-bc707cd77cc7"
        });
        Global.currentIframe().oTrain.currentState.push({
            "assemblyguid": "08877777-777a-7ecf-a7de-707f797777b7",
            "numbertype": "0",
            "opcdwguid": "7c777a79-ee97-79d7-8e77-e7770d877bb7",
            "opcid": "jiayaojiankongzhixiangdiandongqiuguan7",
            "opcname": "加药间电动球阀7关闭",
            "opcvalue": "0",
            "subsystemguid": "d797787f-77f8-7f77-8077-bc707cd77cc7"
        });
        console.log(Global.currentIframe().oTrain.operateStep);
        Global.currentIframe().oTrain.showStepTip(stepList.children.length);
    });

    $('#jiayaojiankongzhixiangdiandongqiufaguan7').click(function() {
        $('#jiayaojiankongzhixiangdiandongqiufaguan7').addClass('jiayaojiankongzhixiangdiandongqiufaguan7-btn-on');
        $('#jiayaojiankongzhixiangdiandongqiufaguan7').removeClass('jiayaojiankongzhixiangdiandongqiufaguan7-btn-off');
        $('#jiayaojiankongzhixiangdiandongqiufakai7').addClass('jiayaojiankongzhixiangdiandongqiufakai7-btn-off');
        $('#jiayaojiankongzhixiangdiandongqiufakai7').removeClass('jiayaojiankongzhixiangdiandongqiufakai7-btn-on');
        //
        var stepList = Global.currentIframe().document.getElementById('questionStepList');
        $(stepList).append(' <li title="加药间电动球阀7关闭"><span class="item">' + (stepList.children.length + 7) + ' ,加药间电动球阀7关闭</span></li>');
        Global.currentIframe().oTrain.operateStep.push({
            "assemblyguid": "08877777-777a-7ecf-a7de-707f797777b7",
            "numbertype": "0",
            "opcdwguid": "7c777a79-ee97-79d7-8e77-e7770d877bb7",
            "opcid": "jiayaojiankongzhixiangdiandongqiuguan7",
            "opcname": "加药间电动球阀7关闭",
            "opcvalue": "1",
            "subsystemguid": "d797787f-77f8-7f77-8077-bc707cd77cc7"
        });
        Global.currentIframe().oTrain.currentState.push({
            "assemblyguid": "08877777-777a-7ecf-a7de-707f797777b7",
            "numbertype": "0",
            "opcdwguid": "7c777a79-ee97-79d7-8e77-e7770d877bb7",
            "opcid": "jiayaojiankongzhixiangdiandongqiufakai7",
            "opcname": "加药间电动球阀7打开",
            "opcvalue": "0",
            "subsystemguid": "d797787f-77f8-7f77-8077-bc707cd77cc7"
        });
        Global.currentIframe().oTrain.currentState.push({
            "assemblyguid": "08877777-777a-7ecf-a7de-707f797777b7",
            "numbertype": "0",
            "opcdwguid": "7c777a79-ee97-79d7-8e77-e7770d877bb7",
            "opcid": "jiayaojiankongzhixiangdiandongqiuguan7",
            "opcname": "加药间电动球阀7关闭",
            "opcvalue": "1",
            "subsystemguid": "d797787f-77f8-7f77-8077-bc707cd77cc7"
        });
        console.log(Global.currentIframe().oTrain.operateStep);
        Global.currentIframe().oTrain.showStepTip(stepList.children.length);
    });


    $('#jiayaojiankongzhixiangdiandongqiufabendiyuancheng8').click(function() {
        var stepList = Global.currentIframe().document.getElementById('questionStepList');
        var classname = document.getElementById('jiayaojiankongzhixiangdiandongqiufabendiyuancheng8').className;
        if (classname.indexOf('jiayaojiankongzhixiangdiandongqiufabendiyuancheng8-btn-off') >= 0) {
            $('#jiayaojiankongzhixiangdiandongqiufabendiyuancheng8').addClass('jiayaojiankongzhixiangdiandongqiufabendiyuancheng8-btn-on');
            $('#jiayaojiankongzhixiangdiandongqiufabendiyuancheng8').removeClass('jiayaojiankongzhixiangdiandongqiufabendiyuancheng8-btn-off');
            $(stepList).append(' <li title="加药间电动球阀8设置为本地"><span class="item">' + (stepList.children.length + 8) + ' ,加药间电动球阀8设置为本地</span></li>');
            Global.currentIframe().oTrain.operateStep.push({
                "assemblyguid": "08888888-888a-8ecf-a8de-808f898888b8",
                "numbertype": "0",
                "opcdwguid": "8c888a89-ee98-89d8-8e88-e8880d888bb8",
                "opcid": "jiayaojiankongzhixiangdiandongqiufabendiyuancheng8",
                "opcname": "加药间电动球阀8本地/远程",
                "opcvalue": "0",
                "subsystemguid": "d898888f-88f8-8f88-8088-bc808cd88cc8"
            });
            Global.currentIframe().oTrain.currentState.push({
                "assemblyguid": "08888888-888a-8ecf-a8de-808f898888b8",
                "numbertype": "0",
                "opcdwguid": "8c888a89-ee98-89d8-8e88-e8880d888bb8",
                "opcid": "jiayaojiankongzhixiangdiandongqiufabendiyuancheng8",
                "opcname": "加药间电动球阀8本地/远程",
                "opcvalue": "0",
                "subsystemguid": "d898888f-88f8-8f88-8088-bc808cd88cc8"
            });
        } else {
            $('#jiayaojiankongzhixiangdiandongqiufabendiyuancheng8').addClass('jiayaojiankongzhixiangdiandongqiufabendiyuancheng8-btn-off');
            $('#jiayaojiankongzhixiangdiandongqiufabendiyuancheng8').removeClass('jiayaojiankongzhixiangdiandongqiufabendiyuancheng8-btn-on');
            $(stepList).append(' <li title="加药间电动球阀8设置为远程"><span class="item">' + (stepList.children.length + 8) + ' ,加药间电动球阀8设置为远程</span></li>');
            Global.currentIframe().oTrain.operateStep.push({
                "assemblyguid": "08888888-888a-8ecf-a8de-808f898888b8",
                "numbertype": "0",
                "opcdwguid": "8c888a89-ee98-89d8-8e88-e8880d888bb8",
                "opcid": "jiayaojiankongzhixiangdiandongqiufabendiyuancheng8",
                "opcname": "加药间电动球阀8本地/远程",
                "opcvalue": "1",
                "subsystemguid": "d898888f-88f8-8f88-8088-bc808cd88cc8"
            });
            Global.currentIframe().oTrain.currentState.push({
                "assemblyguid": "08888888-888a-8ecf-a8de-808f898888b8",
                "numbertype": "0",
                "opcdwguid": "8c888a89-ee98-89d8-8e88-e8880d888bb8",
                "opcid": "jiayaojiankongzhixiangdiandongqiufabendiyuancheng8",
                "opcname": "加药间电动球阀8本地/远程",
                "opcvalue": "1",
                "subsystemguid": "d898888f-88f8-8f88-8088-bc808cd88cc8"
            });
        }
        console.log(Global.currentIframe().oTrain.operateStep);
        Global.currentIframe().oTrain.showStepTip(stepList.children.length);
    });
    $('#jiayaojiankongzhixiangdiandongqiufakai8').click(function() {
        $('#jiayaojiankongzhixiangdiandongqiufakai8').addClass('jiayaojiankongzhixiangdiandongqiufakai8-btn-on');
        $('#jiayaojiankongzhixiangdiandongqiufakai8').removeClass('jiayaojiankongzhixiangdiandongqiufakai8-btn-off');
        $('#jiayaojiankongzhixiangdiandongqiufaguan8').addClass('jiayaojiankongzhixiangdiandongqiufaguan8-btn-off');
        $('#jiayaojiankongzhixiangdiandongqiufaguan8').removeClass('jiayaojiankongzhixiangdiandongqiufaguan8-btn-on');
        //
        var stepList = Global.currentIframe().document.getElementById('questionStepList');
        $(stepList).append(' <li title="加药间电动球阀8打开"><span class="item">' + (stepList.children.length + 8) + ' ,加药间电动球阀8打开</span></li>');
        Global.currentIframe().oTrain.operateStep.push({
            "assemblyguid": "08888888-888a-8ecf-a8de-808f898888b8",
            "numbertype": "0",
            "opcdwguid": "8c888a89-ee98-89d8-8e88-e8880d888bb8",
            "opcid": "jiayaojiankongzhixiangdiandongqiufakai8",
            "opcname": "加药间电动球阀8打开",
            "opcvalue": "1",
            "subsystemguid": "d898888f-88f8-8f88-8088-bc808cd88cc8"
        });
        Global.currentIframe().oTrain.currentState.push({
            "assemblyguid": "08888888-888a-8ecf-a8de-808f898888b8",
            "numbertype": "0",
            "opcdwguid": "8c888a89-ee98-89d8-8e88-e8880d888bb8",
            "opcid": "jiayaojiankongzhixiangdiandongqiufakai8",
            "opcname": "加药间电动球阀8打开",
            "opcvalue": "1",
            "subsystemguid": "d898888f-88f8-8f88-8088-bc808cd88cc8"
        });
        Global.currentIframe().oTrain.currentState.push({
            "assemblyguid": "08888888-888a-8ecf-a8de-808f898888b8",
            "numbertype": "0",
            "opcdwguid": "8c888a89-ee98-89d8-8e88-e8880d888bb8",
            "opcid": "jiayaojiankongzhixiangdiandongqiuguan8",
            "opcname": "加药间电动球阀8关闭",
            "opcvalue": "0",
            "subsystemguid": "d898888f-88f8-8f88-8088-bc808cd88cc8"
        });
        console.log(Global.currentIframe().oTrain.operateStep);
        Global.currentIframe().oTrain.showStepTip(stepList.children.length);
    });

    $('#jiayaojiankongzhixiangdiandongqiufaguan8').click(function() {
        $('#jiayaojiankongzhixiangdiandongqiufaguan8').addClass('jiayaojiankongzhixiangdiandongqiufaguan8-btn-on');
        $('#jiayaojiankongzhixiangdiandongqiufaguan8').removeClass('jiayaojiankongzhixiangdiandongqiufaguan8-btn-off');
        $('#jiayaojiankongzhixiangdiandongqiufakai8').addClass('jiayaojiankongzhixiangdiandongqiufakai8-btn-off');
        $('#jiayaojiankongzhixiangdiandongqiufakai8').removeClass('jiayaojiankongzhixiangdiandongqiufakai8-btn-on');
        //
        var stepList = Global.currentIframe().document.getElementById('questionStepList');
        $(stepList).append(' <li title="加药间电动球阀8关闭"><span class="item">' + (stepList.children.length + 8) + ' ,加药间电动球阀8关闭</span></li>');
        Global.currentIframe().oTrain.operateStep.push({
            "assemblyguid": "08888888-888a-8ecf-a8de-808f898888b8",
            "numbertype": "0",
            "opcdwguid": "8c888a89-ee98-89d8-8e88-e8880d888bb8",
            "opcid": "jiayaojiankongzhixiangdiandongqiuguan8",
            "opcname": "加药间电动球阀8关闭",
            "opcvalue": "1",
            "subsystemguid": "d898888f-88f8-8f88-8088-bc808cd88cc8"
        });
        Global.currentIframe().oTrain.currentState.push({
            "assemblyguid": "08888888-888a-8ecf-a8de-808f898888b8",
            "numbertype": "0",
            "opcdwguid": "8c888a89-ee98-89d8-8e88-e8880d888bb8",
            "opcid": "jiayaojiankongzhixiangdiandongqiufakai8",
            "opcname": "加药间电动球阀8打开",
            "opcvalue": "0",
            "subsystemguid": "d898888f-88f8-8f88-8088-bc808cd88cc8"
        });
        Global.currentIframe().oTrain.currentState.push({
            "assemblyguid": "08888888-888a-8ecf-a8de-808f898888b8",
            "numbertype": "0",
            "opcdwguid": "8c888a89-ee98-89d8-8e88-e8880d888bb8",
            "opcid": "jiayaojiankongzhixiangdiandongqiuguan8",
            "opcname": "加药间电动球阀8关闭",
            "opcvalue": "1",
            "subsystemguid": "d898888f-88f8-8f88-8088-bc808cd88cc8"
        });
        console.log(Global.currentIframe().oTrain.operateStep);
        Global.currentIframe().oTrain.showStepTip(stepList.children.length);
    });

    $('#jiayaojiankongzhixiangdiandongqiufabendiyuancheng9').click(function() {
        var stepList = Global.currentIframe().document.getElementById('questionStepList');
        var classname = document.getElementById('jiayaojiankongzhixiangdiandongqiufabendiyuancheng9').className;
        if (classname.indexOf('jiayaojiankongzhixiangdiandongqiufabendiyuancheng9-btn-off') >= 0) {
            $('#jiayaojiankongzhixiangdiandongqiufabendiyuancheng9').addClass('jiayaojiankongzhixiangdiandongqiufabendiyuancheng9-btn-on');
            $('#jiayaojiankongzhixiangdiandongqiufabendiyuancheng9').removeClass('jiayaojiankongzhixiangdiandongqiufabendiyuancheng9-btn-off');
            $(stepList).append(' <li title="加药间电动球阀9设置为本地"><span class="item">' + (stepList.children.length + 9) + ' ,加药间电动球阀9设置为本地</span></li>');
            Global.currentIframe().oTrain.operateStep.push({
                "assemblyguid": "09999999-999a-9ecf-a9de-909f999999b9",
                "numbertype": "0",
                "opcdwguid": "9c999a99-ee99-99d9-9e99-e9990d999bb9",
                "opcid": "jiayaojiankongzhixiangdiandongqiufabendiyuancheng9",
                "opcname": "加药间电动球阀9本地/远程",
                "opcvalue": "0",
                "subsystemguid": "d999999f-99f9-9f99-9099-bc909cd99cc9"
            });
            Global.currentIframe().oTrain.currentState.push({
                "assemblyguid": "09999999-999a-9ecf-a9de-909f999999b9",
                "numbertype": "0",
                "opcdwguid": "9c999a99-ee99-99d9-9e99-e9990d999bb9",
                "opcid": "jiayaojiankongzhixiangdiandongqiufabendiyuancheng9",
                "opcname": "加药间电动球阀9本地/远程",
                "opcvalue": "0",
                "subsystemguid": "d999999f-99f9-9f99-9099-bc909cd99cc9"
            });
        } else {
            $('#jiayaojiankongzhixiangdiandongqiufabendiyuancheng9').addClass('jiayaojiankongzhixiangdiandongqiufabendiyuancheng9-btn-off');
            $('#jiayaojiankongzhixiangdiandongqiufabendiyuancheng9').removeClass('jiayaojiankongzhixiangdiandongqiufabendiyuancheng9-btn-on');
            $(stepList).append(' <li title="加药间电动球阀9设置为远程"><span class="item">' + (stepList.children.length + 9) + ' ,加药间电动球阀9设置为远程</span></li>');
            Global.currentIframe().oTrain.operateStep.push({
                "assemblyguid": "09999999-999a-9ecf-a9de-909f999999b9",
                "numbertype": "0",
                "opcdwguid": "9c999a99-ee99-99d9-9e99-e9990d999bb9",
                "opcid": "jiayaojiankongzhixiangdiandongqiufabendiyuancheng9",
                "opcname": "加药间电动球阀9本地/远程",
                "opcvalue": "1",
                "subsystemguid": "d999999f-99f9-9f99-9099-bc909cd99cc9"
            });
            Global.currentIframe().oTrain.currentState.push({
                "assemblyguid": "09999999-999a-9ecf-a9de-909f999999b9",
                "numbertype": "0",
                "opcdwguid": "9c999a99-ee99-99d9-9e99-e9990d999bb9",
                "opcid": "jiayaojiankongzhixiangdiandongqiufabendiyuancheng9",
                "opcname": "加药间电动球阀9本地/远程",
                "opcvalue": "1",
                "subsystemguid": "d999999f-99f9-9f99-9099-bc909cd99cc9"
            });
        }
        console.log(Global.currentIframe().oTrain.operateStep);
        Global.currentIframe().oTrain.showStepTip(stepList.children.length);
    });
    $('#jiayaojiankongzhixiangdiandongqiufakai9').click(function() {
        $('#jiayaojiankongzhixiangdiandongqiufakai9').addClass('jiayaojiankongzhixiangdiandongqiufakai9-btn-on');
        $('#jiayaojiankongzhixiangdiandongqiufakai9').removeClass('jiayaojiankongzhixiangdiandongqiufakai9-btn-off');
        $('#jiayaojiankongzhixiangdiandongqiufaguan9').addClass('jiayaojiankongzhixiangdiandongqiufaguan9-btn-off');
        $('#jiayaojiankongzhixiangdiandongqiufaguan9').removeClass('jiayaojiankongzhixiangdiandongqiufaguan9-btn-on');
        //
        var stepList = Global.currentIframe().document.getElementById('questionStepList');
        $(stepList).append(' <li title="加药间电动球阀9打开"><span class="item">' + (stepList.children.length + 9) + ' ,加药间电动球阀9打开</span></li>');
        Global.currentIframe().oTrain.operateStep.push({
            "assemblyguid": "09999999-999a-9ecf-a9de-909f999999b9",
            "numbertype": "0",
            "opcdwguid": "9c999a99-ee99-99d9-9e99-e9990d999bb9",
            "opcid": "jiayaojiankongzhixiangdiandongqiufakai9",
            "opcname": "加药间电动球阀9打开",
            "opcvalue": "1",
            "subsystemguid": "d999999f-99f9-9f99-9099-bc909cd99cc9"
        });
        Global.currentIframe().oTrain.currentState.push({
            "assemblyguid": "09999999-999a-9ecf-a9de-909f999999b9",
            "numbertype": "0",
            "opcdwguid": "9c999a99-ee99-99d9-9e99-e9990d999bb9",
            "opcid": "jiayaojiankongzhixiangdiandongqiufakai9",
            "opcname": "加药间电动球阀9打开",
            "opcvalue": "1",
            "subsystemguid": "d999999f-99f9-9f99-9099-bc909cd99cc9"
        });
        Global.currentIframe().oTrain.currentState.push({
            "assemblyguid": "09999999-999a-9ecf-a9de-909f999999b9",
            "numbertype": "0",
            "opcdwguid": "9c999a99-ee99-99d9-9e99-e9990d999bb9",
            "opcid": "jiayaojiankongzhixiangdiandongqiuguan9",
            "opcname": "加药间电动球阀9关闭",
            "opcvalue": "0",
            "subsystemguid": "d999999f-99f9-9f99-9099-bc909cd99cc9"
        });
        console.log(Global.currentIframe().oTrain.operateStep);
        Global.currentIframe().oTrain.showStepTip(stepList.children.length);
    });

    $('#jiayaojiankongzhixiangdiandongqiufaguan9').click(function() {
        $('#jiayaojiankongzhixiangdiandongqiufaguan9').addClass('jiayaojiankongzhixiangdiandongqiufaguan9-btn-on');
        $('#jiayaojiankongzhixiangdiandongqiufaguan9').removeClass('jiayaojiankongzhixiangdiandongqiufaguan9-btn-off');
        $('#jiayaojiankongzhixiangdiandongqiufakai9').addClass('jiayaojiankongzhixiangdiandongqiufakai9-btn-off');
        $('#jiayaojiankongzhixiangdiandongqiufakai9').removeClass('jiayaojiankongzhixiangdiandongqiufakai9-btn-on');
        //
        var stepList = Global.currentIframe().document.getElementById('questionStepList');
        $(stepList).append(' <li title="加药间电动球阀9关闭"><span class="item">' + (stepList.children.length + 9) + ' ,加药间电动球阀9关闭</span></li>');
        Global.currentIframe().oTrain.operateStep.push({
            "assemblyguid": "09999999-999a-9ecf-a9de-909f999999b9",
            "numbertype": "0",
            "opcdwguid": "9c999a99-ee99-99d9-9e99-e9990d999bb9",
            "opcid": "jiayaojiankongzhixiangdiandongqiuguan9",
            "opcname": "加药间电动球阀9关闭",
            "opcvalue": "1",
            "subsystemguid": "d999999f-99f9-9f99-9099-bc909cd99cc9"
        });
        Global.currentIframe().oTrain.currentState.push({
            "assemblyguid": "09999999-999a-9ecf-a9de-909f999999b9",
            "numbertype": "0",
            "opcdwguid": "9c999a99-ee99-99d9-9e99-e9990d999bb9",
            "opcid": "jiayaojiankongzhixiangdiandongqiufakai9",
            "opcname": "加药间电动球阀9打开",
            "opcvalue": "0",
            "subsystemguid": "d999999f-99f9-9f99-9099-bc909cd99cc9"
        });
        Global.currentIframe().oTrain.currentState.push({
            "assemblyguid": "09999999-999a-9ecf-a9de-909f999999b9",
            "numbertype": "0",
            "opcdwguid": "9c999a99-ee99-99d9-9e99-e9990d999bb9",
            "opcid": "jiayaojiankongzhixiangdiandongqiuguan9",
            "opcname": "加药间电动球阀9关闭",
            "opcvalue": "1",
            "subsystemguid": "d999999f-99f9-9f99-9099-bc909cd99cc9"
        });
        console.log(Global.currentIframe().oTrain.operateStep);
        Global.currentIframe().oTrain.showStepTip(stepList.children.length);
    });

    $('#jiayaojiankongzhixiangdiandongqiufabendiyuancheng10').click(function() {
        var stepList = Global.currentIframe().document.getElementById('questionStepList');
        var classname = document.getElementById('jiayaojiankongzhixiangdiandongqiufabendiyuancheng10').className;
        if (classname.indexOf('jiayaojiankongzhixiangdiandongqiufabendiyuancheng10-btn-off') >= 0) {
            $('#jiayaojiankongzhixiangdiandongqiufabendiyuancheng10').addClass('jiayaojiankongzhixiangdiandongqiufabendiyuancheng10-btn-on');
            $('#jiayaojiankongzhixiangdiandongqiufabendiyuancheng10').removeClass('jiayaojiankongzhixiangdiandongqiufabendiyuancheng10-btn-off');
            $(stepList).append(' <li title="加药间电动球阀10设置为本地"><span class="item">' + (stepList.children.length + 10) + ' ,加药间电动球阀10设置为本地</span></li>');
            Global.currentIframe().oTrain.operateStep.push({
                "assemblyguid": "010101010101010-101010a-10ecf-a10de-10010f101010101010b10",
                "numbertype": "0",
                "opcdwguid": "10c101010a1010-ee1010-1010d10-10e1010-e1010100d101010bb10",
                "opcid": "jiayaojiankongzhixiangdiandongqiufabendiyuancheng10",
                "opcname": "加药间电动球阀10本地/远程",
                "opcvalue": "0",
                "subsystemguid": "d101010101010f-1010f10-10f1010-1001010-bc10010cd1010cc10"
            });
            Global.currentIframe().oTrain.currentState.push({
                "assemblyguid": "010101010101010-101010a-10ecf-a10de-10010f101010101010b10",
                "numbertype": "0",
                "opcdwguid": "10c101010a1010-ee1010-1010d10-10e1010-e1010100d101010bb10",
                "opcid": "jiayaojiankongzhixiangdiandongqiufabendiyuancheng10",
                "opcname": "加药间电动球阀10本地/远程",
                "opcvalue": "0",
                "subsystemguid": "d101010101010f-1010f10-10f1010-1001010-bc10010cd1010cc10"
            });
        } else {
            $('#jiayaojiankongzhixiangdiandongqiufabendiyuancheng10').addClass('jiayaojiankongzhixiangdiandongqiufabendiyuancheng10-btn-off');
            $('#jiayaojiankongzhixiangdiandongqiufabendiyuancheng10').removeClass('jiayaojiankongzhixiangdiandongqiufabendiyuancheng10-btn-on');
            $(stepList).append(' <li title="加药间电动球阀10设置为远程"><span class="item">' + (stepList.children.length + 10) + ' ,加药间电动球阀10设置为远程</span></li>');
            Global.currentIframe().oTrain.operateStep.push({
                "assemblyguid": "010101010101010-101010a-10ecf-a10de-10010f101010101010b10",
                "numbertype": "0",
                "opcdwguid": "10c101010a1010-ee1010-1010d10-10e1010-e1010100d101010bb10",
                "opcid": "jiayaojiankongzhixiangdiandongqiufabendiyuancheng10",
                "opcname": "加药间电动球阀10本地/远程",
                "opcvalue": "1",
                "subsystemguid": "d101010101010f-1010f10-10f1010-1001010-bc10010cd1010cc10"
            });
            Global.currentIframe().oTrain.currentState.push({
                "assemblyguid": "010101010101010-101010a-10ecf-a10de-10010f101010101010b10",
                "numbertype": "0",
                "opcdwguid": "10c101010a1010-ee1010-1010d10-10e1010-e1010100d101010bb10",
                "opcid": "jiayaojiankongzhixiangdiandongqiufabendiyuancheng10",
                "opcname": "加药间电动球阀10本地/远程",
                "opcvalue": "1",
                "subsystemguid": "d101010101010f-1010f10-10f1010-1001010-bc10010cd1010cc10"
            });
        }
        console.log(Global.currentIframe().oTrain.operateStep);
        Global.currentIframe().oTrain.showStepTip(stepList.children.length);
    });
    $('#jiayaojiankongzhixiangdiandongqiufakai10').click(function() {
        $('#jiayaojiankongzhixiangdiandongqiufakai10').addClass('jiayaojiankongzhixiangdiandongqiufakai10-btn-on');
        $('#jiayaojiankongzhixiangdiandongqiufakai10').removeClass('jiayaojiankongzhixiangdiandongqiufakai10-btn-off');
        $('#jiayaojiankongzhixiangdiandongqiufaguan10').addClass('jiayaojiankongzhixiangdiandongqiufaguan10-btn-off');
        $('#jiayaojiankongzhixiangdiandongqiufaguan10').removeClass('jiayaojiankongzhixiangdiandongqiufaguan10-btn-on');
        //
        var stepList = Global.currentIframe().document.getElementById('questionStepList');
        $(stepList).append(' <li title="加药间电动球阀10打开"><span class="item">' + (stepList.children.length + 10) + ' ,加药间电动球阀10打开</span></li>');
        Global.currentIframe().oTrain.operateStep.push({
            "assemblyguid": "010101010101010-101010a-10ecf-a10de-10010f101010101010b10",
            "numbertype": "0",
            "opcdwguid": "10c101010a1010-ee1010-1010d10-10e1010-e1010100d101010bb10",
            "opcid": "jiayaojiankongzhixiangdiandongqiufakai10",
            "opcname": "加药间电动球阀10打开",
            "opcvalue": "1",
            "subsystemguid": "d101010101010f-1010f10-10f1010-1001010-bc10010cd1010cc10"
        });
        Global.currentIframe().oTrain.currentState.push({
            "assemblyguid": "010101010101010-101010a-10ecf-a10de-10010f101010101010b10",
            "numbertype": "0",
            "opcdwguid": "10c101010a1010-ee1010-1010d10-10e1010-e1010100d101010bb10",
            "opcid": "jiayaojiankongzhixiangdiandongqiufakai10",
            "opcname": "加药间电动球阀10打开",
            "opcvalue": "1",
            "subsystemguid": "d101010101010f-1010f10-10f1010-1001010-bc10010cd1010cc10"
        });
        Global.currentIframe().oTrain.currentState.push({
            "assemblyguid": "010101010101010-101010a-10ecf-a10de-10010f101010101010b10",
            "numbertype": "0",
            "opcdwguid": "10c101010a1010-ee1010-1010d10-10e1010-e1010100d101010bb10",
            "opcid": "jiayaojiankongzhixiangdiandongqiuguan10",
            "opcname": "加药间电动球阀10关闭",
            "opcvalue": "0",
            "subsystemguid": "d101010101010f-1010f10-10f1010-1001010-bc10010cd1010cc10"
        });
        console.log(Global.currentIframe().oTrain.operateStep);
        Global.currentIframe().oTrain.showStepTip(stepList.children.length);
    });

    $('#jiayaojiankongzhixiangdiandongqiufaguan10').click(function() {
        $('#jiayaojiankongzhixiangdiandongqiufaguan10').addClass('jiayaojiankongzhixiangdiandongqiufaguan10-btn-on');
        $('#jiayaojiankongzhixiangdiandongqiufaguan10').removeClass('jiayaojiankongzhixiangdiandongqiufaguan10-btn-off');
        $('#jiayaojiankongzhixiangdiandongqiufakai10').addClass('jiayaojiankongzhixiangdiandongqiufakai10-btn-off');
        $('#jiayaojiankongzhixiangdiandongqiufakai10').removeClass('jiayaojiankongzhixiangdiandongqiufakai10-btn-on');
        //
        var stepList = Global.currentIframe().document.getElementById('questionStepList');
        $(stepList).append(' <li title="加药间电动球阀10关闭"><span class="item">' + (stepList.children.length + 10) + ' ,加药间电动球阀10关闭</span></li>');
        Global.currentIframe().oTrain.operateStep.push({
            "assemblyguid": "010101010101010-101010a-10ecf-a10de-10010f101010101010b10",
            "numbertype": "0",
            "opcdwguid": "10c101010a1010-ee1010-1010d10-10e1010-e1010100d101010bb10",
            "opcid": "jiayaojiankongzhixiangdiandongqiuguan10",
            "opcname": "加药间电动球阀10关闭",
            "opcvalue": "1",
            "subsystemguid": "d101010101010f-1010f10-10f1010-1001010-bc10010cd1010cc10"
        });
        Global.currentIframe().oTrain.currentState.push({
            "assemblyguid": "010101010101010-101010a-10ecf-a10de-10010f101010101010b10",
            "numbertype": "0",
            "opcdwguid": "10c101010a1010-ee1010-1010d10-10e1010-e1010100d101010bb10",
            "opcid": "jiayaojiankongzhixiangdiandongqiufakai10",
            "opcname": "加药间电动球阀10打开",
            "opcvalue": "0",
            "subsystemguid": "d101010101010f-1010f10-10f1010-1001010-bc10010cd1010cc10"
        });
        Global.currentIframe().oTrain.currentState.push({
            "assemblyguid": "010101010101010-101010a-10ecf-a10de-10010f101010101010b10",
            "numbertype": "0",
            "opcdwguid": "10c101010a1010-ee1010-1010d10-10e1010-e1010100d101010bb10",
            "opcid": "jiayaojiankongzhixiangdiandongqiuguan10",
            "opcname": "加药间电动球阀10关闭",
            "opcvalue": "1",
            "subsystemguid": "d101010101010f-1010f10-10f1010-1001010-bc10010cd1010cc10"
        });
        console.log(Global.currentIframe().oTrain.operateStep);
        Global.currentIframe().oTrain.showStepTip(stepList.children.length);
    });

    $('#jiayaojiankongzhixiangdiandongqiufabendiyuancheng11').click(function() {
        var stepList = Global.currentIframe().document.getElementById('questionStepList');
        var classname = document.getElementById('jiayaojiankongzhixiangdiandongqiufabendiyuancheng11').className;
        if (classname.indexOf('jiayaojiankongzhixiangdiandongqiufabendiyuancheng11-btn-off') >= 0) {
            $('#jiayaojiankongzhixiangdiandongqiufabendiyuancheng11').addClass('jiayaojiankongzhixiangdiandongqiufabendiyuancheng11-btn-on');
            $('#jiayaojiankongzhixiangdiandongqiufabendiyuancheng11').removeClass('jiayaojiankongzhixiangdiandongqiufabendiyuancheng11-btn-off');
            $(stepList).append(' <li title="加药间电动球阀11设置为本地"><span class="item">' + (stepList.children.length + 11) + ' ,加药间电动球阀11设置为本地</span></li>');
            Global.currentIframe().oTrain.operateStep.push({
                "assemblyguid": "011111111111111-111111a-11ecf-a11de-11011f111111111111b11",
                "numbertype": "0",
                "opcdwguid": "11c111111a1111-ee1111-1111d11-11e1111-e1111110d111111bb11",
                "opcid": "jiayaojiankongzhixiangdiandongqiufabendiyuancheng11",
                "opcname": "加药间电动球阀11本地/远程",
                "opcvalue": "0",
                "subsystemguid": "d111111111111f-1111f11-11f1111-1101111-bc11011cd1111cc11"
            });
            Global.currentIframe().oTrain.currentState.push({
                "assemblyguid": "011111111111111-111111a-11ecf-a11de-11011f111111111111b11",
                "numbertype": "0",
                "opcdwguid": "11c111111a1111-ee1111-1111d11-11e1111-e1111110d111111bb11",
                "opcid": "jiayaojiankongzhixiangdiandongqiufabendiyuancheng11",
                "opcname": "加药间电动球阀11本地/远程",
                "opcvalue": "0",
                "subsystemguid": "d111111111111f-1111f11-11f1111-1101111-bc11011cd1111cc11"
            });
        } else {
            $('#jiayaojiankongzhixiangdiandongqiufabendiyuancheng11').addClass('jiayaojiankongzhixiangdiandongqiufabendiyuancheng11-btn-off');
            $('#jiayaojiankongzhixiangdiandongqiufabendiyuancheng11').removeClass('jiayaojiankongzhixiangdiandongqiufabendiyuancheng11-btn-on');
            $(stepList).append(' <li title="加药间电动球阀11设置为远程"><span class="item">' + (stepList.children.length + 11) + ' ,加药间电动球阀11设置为远程</span></li>');
            Global.currentIframe().oTrain.operateStep.push({
                "assemblyguid": "011111111111111-111111a-11ecf-a11de-11011f111111111111b11",
                "numbertype": "0",
                "opcdwguid": "11c111111a1111-ee1111-1111d11-11e1111-e1111110d111111bb11",
                "opcid": "jiayaojiankongzhixiangdiandongqiufabendiyuancheng11",
                "opcname": "加药间电动球阀11本地/远程",
                "opcvalue": "1",
                "subsystemguid": "d111111111111f-1111f11-11f1111-1101111-bc11011cd1111cc11"
            });
            Global.currentIframe().oTrain.currentState.push({
                "assemblyguid": "011111111111111-111111a-11ecf-a11de-11011f111111111111b11",
                "numbertype": "0",
                "opcdwguid": "11c111111a1111-ee1111-1111d11-11e1111-e1111110d111111bb11",
                "opcid": "jiayaojiankongzhixiangdiandongqiufabendiyuancheng11",
                "opcname": "加药间电动球阀11本地/远程",
                "opcvalue": "1",
                "subsystemguid": "d111111111111f-1111f11-11f1111-1101111-bc11011cd1111cc11"
            });
        }
        console.log(Global.currentIframe().oTrain.operateStep);
        Global.currentIframe().oTrain.showStepTip(stepList.children.length);
    });
    $('#jiayaojiankongzhixiangdiandongqiufakai11').click(function() {
        $('#jiayaojiankongzhixiangdiandongqiufakai11').addClass('jiayaojiankongzhixiangdiandongqiufakai11-btn-on');
        $('#jiayaojiankongzhixiangdiandongqiufakai11').removeClass('jiayaojiankongzhixiangdiandongqiufakai11-btn-off');
        $('#jiayaojiankongzhixiangdiandongqiufaguan11').addClass('jiayaojiankongzhixiangdiandongqiufaguan11-btn-off');
        $('#jiayaojiankongzhixiangdiandongqiufaguan11').removeClass('jiayaojiankongzhixiangdiandongqiufaguan11-btn-on');
        //
        var stepList = Global.currentIframe().document.getElementById('questionStepList');
        $(stepList).append(' <li title="加药间电动球阀11打开"><span class="item">' + (stepList.children.length + 11) + ' ,加药间电动球阀11打开</span></li>');
        Global.currentIframe().oTrain.operateStep.push({
            "assemblyguid": "011111111111111-111111a-11ecf-a11de-11011f111111111111b11",
            "numbertype": "0",
            "opcdwguid": "11c111111a1111-ee1111-1111d11-11e1111-e1111110d111111bb11",
            "opcid": "jiayaojiankongzhixiangdiandongqiufakai11",
            "opcname": "加药间电动球阀11打开",
            "opcvalue": "1",
            "subsystemguid": "d111111111111f-1111f11-11f1111-1101111-bc11011cd1111cc11"
        });
        Global.currentIframe().oTrain.currentState.push({
            "assemblyguid": "011111111111111-111111a-11ecf-a11de-11011f111111111111b11",
            "numbertype": "0",
            "opcdwguid": "11c111111a1111-ee1111-1111d11-11e1111-e1111110d111111bb11",
            "opcid": "jiayaojiankongzhixiangdiandongqiufakai11",
            "opcname": "加药间电动球阀11打开",
            "opcvalue": "1",
            "subsystemguid": "d111111111111f-1111f11-11f1111-1101111-bc11011cd1111cc11"
        });
        Global.currentIframe().oTrain.currentState.push({
            "assemblyguid": "011111111111111-111111a-11ecf-a11de-11011f111111111111b11",
            "numbertype": "0",
            "opcdwguid": "11c111111a1111-ee1111-1111d11-11e1111-e1111110d111111bb11",
            "opcid": "jiayaojiankongzhixiangdiandongqiuguan11",
            "opcname": "加药间电动球阀11关闭",
            "opcvalue": "0",
            "subsystemguid": "d111111111111f-1111f11-11f1111-1101111-bc11011cd1111cc11"
        });
        console.log(Global.currentIframe().oTrain.operateStep);
        Global.currentIframe().oTrain.showStepTip(stepList.children.length);
    });

    $('#jiayaojiankongzhixiangdiandongqiufaguan11').click(function() {
        $('#jiayaojiankongzhixiangdiandongqiufaguan11').addClass('jiayaojiankongzhixiangdiandongqiufaguan11-btn-on');
        $('#jiayaojiankongzhixiangdiandongqiufaguan11').removeClass('jiayaojiankongzhixiangdiandongqiufaguan11-btn-off');
        $('#jiayaojiankongzhixiangdiandongqiufakai11').addClass('jiayaojiankongzhixiangdiandongqiufakai11-btn-off');
        $('#jiayaojiankongzhixiangdiandongqiufakai11').removeClass('jiayaojiankongzhixiangdiandongqiufakai11-btn-on');
        //
        var stepList = Global.currentIframe().document.getElementById('questionStepList');
        $(stepList).append(' <li title="加药间电动球阀11关闭"><span class="item">' + (stepList.children.length + 11) + ' ,加药间电动球阀11关闭</span></li>');
        Global.currentIframe().oTrain.operateStep.push({
            "assemblyguid": "011111111111111-111111a-11ecf-a11de-11011f111111111111b11",
            "numbertype": "0",
            "opcdwguid": "11c111111a1111-ee1111-1111d11-11e1111-e1111110d111111bb11",
            "opcid": "jiayaojiankongzhixiangdiandongqiuguan11",
            "opcname": "加药间电动球阀11关闭",
            "opcvalue": "1",
            "subsystemguid": "d111111111111f-1111f11-11f1111-1101111-bc11011cd1111cc11"
        });
        Global.currentIframe().oTrain.currentState.push({
            "assemblyguid": "011111111111111-111111a-11ecf-a11de-11011f111111111111b11",
            "numbertype": "0",
            "opcdwguid": "11c111111a1111-ee1111-1111d11-11e1111-e1111110d111111bb11",
            "opcid": "jiayaojiankongzhixiangdiandongqiufakai11",
            "opcname": "加药间电动球阀11打开",
            "opcvalue": "0",
            "subsystemguid": "d111111111111f-1111f11-11f1111-1101111-bc11011cd1111cc11"
        });
        Global.currentIframe().oTrain.currentState.push({
            "assemblyguid": "011111111111111-111111a-11ecf-a11de-11011f111111111111b11",
            "numbertype": "0",
            "opcdwguid": "11c111111a1111-ee1111-1111d11-11e1111-e1111110d111111bb11",
            "opcid": "jiayaojiankongzhixiangdiandongqiuguan11",
            "opcname": "加药间电动球阀11关闭",
            "opcvalue": "1",
            "subsystemguid": "d111111111111f-1111f11-11f1111-1101111-bc11011cd1111cc11"
        });
        console.log(Global.currentIframe().oTrain.operateStep);
        Global.currentIframe().oTrain.showStepTip(stepList.children.length);
    });

    $('#jiayaojiankongzhixiangdiandongqiufabendiyuancheng12').click(function() {
        var stepList = Global.currentIframe().document.getElementById('questionStepList');
        var classname = document.getElementById('jiayaojiankongzhixiangdiandongqiufabendiyuancheng12').className;
        if (classname.indexOf('jiayaojiankongzhixiangdiandongqiufabendiyuancheng12-btn-off') >= 0) {
            $('#jiayaojiankongzhixiangdiandongqiufabendiyuancheng12').addClass('jiayaojiankongzhixiangdiandongqiufabendiyuancheng12-btn-on');
            $('#jiayaojiankongzhixiangdiandongqiufabendiyuancheng12').removeClass('jiayaojiankongzhixiangdiandongqiufabendiyuancheng12-btn-off');
            $(stepList).append(' <li title="加药间电动球阀12设置为本地"><span class="item">' + (stepList.children.length + 12) + ' ,加药间电动球阀12设置为本地</span></li>');
            Global.currentIframe().oTrain.operateStep.push({
                "assemblyguid": "012121212121212-121212a-12ecf-a12de-12012f121212121212b12",
                "numbertype": "0",
                "opcdwguid": "12c121212a1212-ee1212-1212d12-12e1212-e1212120d121212bb12",
                "opcid": "jiayaojiankongzhixiangdiandongqiufabendiyuancheng12",
                "opcname": "加药间电动球阀12本地/远程",
                "opcvalue": "0",
                "subsystemguid": "d121212121212f-1212f12-12f1212-1201212-bc12012cd1212cc12"
            });
            Global.currentIframe().oTrain.currentState.push({
                "assemblyguid": "012121212121212-121212a-12ecf-a12de-12012f121212121212b12",
                "numbertype": "0",
                "opcdwguid": "12c121212a1212-ee1212-1212d12-12e1212-e1212120d121212bb12",
                "opcid": "jiayaojiankongzhixiangdiandongqiufabendiyuancheng12",
                "opcname": "加药间电动球阀12本地/远程",
                "opcvalue": "0",
                "subsystemguid": "d121212121212f-1212f12-12f1212-1201212-bc12012cd1212cc12"
            });
        } else {
            $('#jiayaojiankongzhixiangdiandongqiufabendiyuancheng12').addClass('jiayaojiankongzhixiangdiandongqiufabendiyuancheng12-btn-off');
            $('#jiayaojiankongzhixiangdiandongqiufabendiyuancheng12').removeClass('jiayaojiankongzhixiangdiandongqiufabendiyuancheng12-btn-on');
            $(stepList).append(' <li title="加药间电动球阀12设置为远程"><span class="item">' + (stepList.children.length + 12) + ' ,加药间电动球阀12设置为远程</span></li>');
            Global.currentIframe().oTrain.operateStep.push({
                "assemblyguid": "012121212121212-121212a-12ecf-a12de-12012f121212121212b12",
                "numbertype": "0",
                "opcdwguid": "12c121212a1212-ee1212-1212d12-12e1212-e1212120d121212bb12",
                "opcid": "jiayaojiankongzhixiangdiandongqiufabendiyuancheng12",
                "opcname": "加药间电动球阀12本地/远程",
                "opcvalue": "1",
                "subsystemguid": "d121212121212f-1212f12-12f1212-1201212-bc12012cd1212cc12"
            });
            Global.currentIframe().oTrain.currentState.push({
                "assemblyguid": "012121212121212-121212a-12ecf-a12de-12012f121212121212b12",
                "numbertype": "0",
                "opcdwguid": "12c121212a1212-ee1212-1212d12-12e1212-e1212120d121212bb12",
                "opcid": "jiayaojiankongzhixiangdiandongqiufabendiyuancheng12",
                "opcname": "加药间电动球阀12本地/远程",
                "opcvalue": "1",
                "subsystemguid": "d121212121212f-1212f12-12f1212-1201212-bc12012cd1212cc12"
            });
        }
        console.log(Global.currentIframe().oTrain.operateStep);
        Global.currentIframe().oTrain.showStepTip(stepList.children.length);
    });
    $('#jiayaojiankongzhixiangdiandongqiufakai12').click(function() {
        $('#jiayaojiankongzhixiangdiandongqiufakai12').addClass('jiayaojiankongzhixiangdiandongqiufakai12-btn-on');
        $('#jiayaojiankongzhixiangdiandongqiufakai12').removeClass('jiayaojiankongzhixiangdiandongqiufakai12-btn-off');
        $('#jiayaojiankongzhixiangdiandongqiufaguan12').addClass('jiayaojiankongzhixiangdiandongqiufaguan12-btn-off');
        $('#jiayaojiankongzhixiangdiandongqiufaguan12').removeClass('jiayaojiankongzhixiangdiandongqiufaguan12-btn-on');
        //
        var stepList = Global.currentIframe().document.getElementById('questionStepList');
        $(stepList).append(' <li title="加药间电动球阀12打开"><span class="item">' + (stepList.children.length + 12) + ' ,加药间电动球阀12打开</span></li>');
        Global.currentIframe().oTrain.operateStep.push({
            "assemblyguid": "012121212121212-121212a-12ecf-a12de-12012f121212121212b12",
            "numbertype": "0",
            "opcdwguid": "12c121212a1212-ee1212-1212d12-12e1212-e1212120d121212bb12",
            "opcid": "jiayaojiankongzhixiangdiandongqiufakai12",
            "opcname": "加药间电动球阀12打开",
            "opcvalue": "1",
            "subsystemguid": "d121212121212f-1212f12-12f1212-1201212-bc12012cd1212cc12"
        });
        Global.currentIframe().oTrain.currentState.push({
            "assemblyguid": "012121212121212-121212a-12ecf-a12de-12012f121212121212b12",
            "numbertype": "0",
            "opcdwguid": "12c121212a1212-ee1212-1212d12-12e1212-e1212120d121212bb12",
            "opcid": "jiayaojiankongzhixiangdiandongqiufakai12",
            "opcname": "加药间电动球阀12打开",
            "opcvalue": "1",
            "subsystemguid": "d121212121212f-1212f12-12f1212-1201212-bc12012cd1212cc12"
        });
        Global.currentIframe().oTrain.currentState.push({
            "assemblyguid": "012121212121212-121212a-12ecf-a12de-12012f121212121212b12",
            "numbertype": "0",
            "opcdwguid": "12c121212a1212-ee1212-1212d12-12e1212-e1212120d121212bb12",
            "opcid": "jiayaojiankongzhixiangdiandongqiuguan12",
            "opcname": "加药间电动球阀12关闭",
            "opcvalue": "0",
            "subsystemguid": "d121212121212f-1212f12-12f1212-1201212-bc12012cd1212cc12"
        });
        console.log(Global.currentIframe().oTrain.operateStep);
        Global.currentIframe().oTrain.showStepTip(stepList.children.length);
    });

    $('#jiayaojiankongzhixiangdiandongqiufaguan12').click(function() {
        $('#jiayaojiankongzhixiangdiandongqiufaguan12').addClass('jiayaojiankongzhixiangdiandongqiufaguan12-btn-on');
        $('#jiayaojiankongzhixiangdiandongqiufaguan12').removeClass('jiayaojiankongzhixiangdiandongqiufaguan12-btn-off');
        $('#jiayaojiankongzhixiangdiandongqiufakai12').addClass('jiayaojiankongzhixiangdiandongqiufakai12-btn-off');
        $('#jiayaojiankongzhixiangdiandongqiufakai12').removeClass('jiayaojiankongzhixiangdiandongqiufakai12-btn-on');
        //
        var stepList = Global.currentIframe().document.getElementById('questionStepList');
        $(stepList).append(' <li title="加药间电动球阀12关闭"><span class="item">' + (stepList.children.length + 12) + ' ,加药间电动球阀12关闭</span></li>');
        Global.currentIframe().oTrain.operateStep.push({
            "assemblyguid": "012121212121212-121212a-12ecf-a12de-12012f121212121212b12",
            "numbertype": "0",
            "opcdwguid": "12c121212a1212-ee1212-1212d12-12e1212-e1212120d121212bb12",
            "opcid": "jiayaojiankongzhixiangdiandongqiuguan12",
            "opcname": "加药间电动球阀12关闭",
            "opcvalue": "1",
            "subsystemguid": "d121212121212f-1212f12-12f1212-1201212-bc12012cd1212cc12"
        });
        Global.currentIframe().oTrain.currentState.push({
            "assemblyguid": "012121212121212-121212a-12ecf-a12de-12012f121212121212b12",
            "numbertype": "0",
            "opcdwguid": "12c121212a1212-ee1212-1212d12-12e1212-e1212120d121212bb12",
            "opcid": "jiayaojiankongzhixiangdiandongqiufakai12",
            "opcname": "加药间电动球阀12打开",
            "opcvalue": "0",
            "subsystemguid": "d121212121212f-1212f12-12f1212-1201212-bc12012cd1212cc12"
        });
        Global.currentIframe().oTrain.currentState.push({
            "assemblyguid": "012121212121212-121212a-12ecf-a12de-12012f121212121212b12",
            "numbertype": "0",
            "opcdwguid": "12c121212a1212-ee1212-1212d12-12e1212-e1212120d121212bb12",
            "opcid": "jiayaojiankongzhixiangdiandongqiuguan12",
            "opcname": "加药间电动球阀12关闭",
            "opcvalue": "1",
            "subsystemguid": "d121212121212f-1212f12-12f1212-1201212-bc12012cd1212cc12"
        });
        console.log(Global.currentIframe().oTrain.operateStep);
        Global.currentIframe().oTrain.showStepTip(stepList.children.length);
    });

    $('#jiayaojiankongzhixiangjiliangbengbendiyuancheng3').click(function() {
        var stepList = Global.currentIframe().document.getElementById('questionStepList');
        var classname = document.getElementById('jiayaojiankongzhixiangjiliangbengbendiyuancheng3').className;
        if (classname.indexOf('jiayaojiankongzhixiangjiliangbengbendiyuancheng3-btn-off') >= 0) {
            $('#jiayaojiankongzhixiangjiliangbengbendiyuancheng3').addClass('jiayaojiankongzhixiangjiliangbengbendiyuancheng3-btn-on');
            $('#jiayaojiankongzhixiangjiliangbengbendiyuancheng3').removeClass('jiayaojiankongzhixiangjiliangbengbendiyuancheng3-btn-off');
            $(stepList).append(' <li title="加药间计量泵3设置为本地"><span class="item">' + (stepList.children.length + 12) + ' ,加药间计量泵3设置为本地</span></li>');
            Global.currentIframe().oTrain.operateStep.push({
                "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
                "numbertype": "0",
                "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
                "opcid": "jiayaojiankongzhixiangjiliangbengbendiyuancheng3",
                "opcname": "加药间计量泵3本地/远程",
                "opcvalue": "1",
                "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
            });
            Global.currentIframe().oTrain.currentState.push({
                "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
                "numbertype": "0",
                "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
                "opcid": "jiayaojiankongzhixiangjiliangbengbendiyuancheng3",
                "opcname": "加药间计量泵3本地/远程",
                "opcvalue": "1",
                "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
            });
        } else {
            $('#jiayaojiankongzhixiangjiliangbengbendiyuancheng3').addClass('jiayaojiankongzhixiangjiliangbengbendiyuancheng3-btn-off');
            $('#jiayaojiankongzhixiangjiliangbengbendiyuancheng3').removeClass('jiayaojiankongzhixiangjiliangbengbendiyuancheng3-btn-on');
            $(stepList).append(' <li title="加药间计量泵3设置为远程"><span class="item">' + (stepList.children.length + 12) + ' ,加药间计量泵3设置为远程</span></li>');
            Global.currentIframe().oTrain.operateStep.push({
                "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
                "numbertype": "0",
                "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
                "opcid": "jiayaojiankongzhixiangjiliangbengbendiyuancheng3",
                "opcname": "加药间计量泵3本地/远程",
                "opcvalue": "0",
                "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
            });
            Global.currentIframe().oTrain.currentState.push({
                "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
                "numbertype": "0",
                "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
                "opcid": "jiayaojiankongzhixiangjiliangbengbendiyuancheng3",
                "opcname": "加药间计量泵3本地/远程",
                "opcvalue": "0",
                "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
            });
        }
        console.log(Global.currentIframe().oTrain.operateStep);
        Global.currentIframe().oTrain.showStepTip(stepList.children.length);
    });

    $('#jiayaojiankongzhixiangjiliangbengbendiyuancheng4').click(function() {
        var stepList = Global.currentIframe().document.getElementById('questionStepList');
        var classname = document.getElementById('jiayaojiankongzhixiangjiliangbengbendiyuancheng4').className;
        if (classname.indexOf('jiayaojiankongzhixiangjiliangbengbendiyuancheng4-btn-off') >= 0) {
            $('#jiayaojiankongzhixiangjiliangbengbendiyuancheng4').addClass('jiayaojiankongzhixiangjiliangbengbendiyuancheng4-btn-on');
            $('#jiayaojiankongzhixiangjiliangbengbendiyuancheng4').removeClass('jiayaojiankongzhixiangjiliangbengbendiyuancheng4-btn-off');
            $(stepList).append(' <li title="加药间计量泵4设置为本地"><span class="item">' + (stepList.children.length + 12) + ' ,加药间计量泵4设置为本地</span></li>');
            Global.currentIframe().oTrain.operateStep.push({
                "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
                "numbertype": "0",
                "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
                "opcid": "jiayaojiankongzhixiangjiliangbengbendiyuancheng4",
                "opcname": "加药间计量泵4本地/远程",
                "opcvalue": "1",
                "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
            });
            Global.currentIframe().oTrain.currentState.push({
                "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
                "numbertype": "0",
                "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
                "opcid": "jiayaojiankongzhixiangjiliangbengbendiyuancheng4",
                "opcname": "加药间计量泵4本地/远程",
                "opcvalue": "1",
                "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
            });
        } else {
            $('#jiayaojiankongzhixiangjiliangbengbendiyuancheng4').addClass('jiayaojiankongzhixiangjiliangbengbendiyuancheng4-btn-off');
            $('#jiayaojiankongzhixiangjiliangbengbendiyuancheng4').removeClass('jiayaojiankongzhixiangjiliangbengbendiyuancheng4-btn-on');
            $(stepList).append(' <li title="加药间计量泵4设置为远程"><span class="item">' + (stepList.children.length + 12) + ' ,加药间计量泵4设置为远程</span></li>');
            Global.currentIframe().oTrain.operateStep.push({
                "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
                "numbertype": "0",
                "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
                "opcid": "jiayaojiankongzhixiangjiliangbengbendiyuancheng4",
                "opcname": "加药间计量泵4本地/远程",
                "opcvalue": "0",
                "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
            });
            Global.currentIframe().oTrain.currentState.push({
                "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
                "numbertype": "0",
                "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
                "opcid": "jiayaojiankongzhixiangjiliangbengbendiyuancheng4",
                "opcname": "加药间计量泵4本地/远程",
                "opcvalue": "0",
                "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
            });
        }
        console.log(Global.currentIframe().oTrain.operateStep);
        Global.currentIframe().oTrain.showStepTip(stepList.children.length);
    });

    $('#jiayaojiankongzhixiangjiliangbengkai3').click(function() {
        $('#jiayaojiankongzhixiangjiliangbengkai3').addClass('jiayaojiankongzhixiangjiliangbengkai3-btn-on');
        $('#jiayaojiankongzhixiangjiliangbengkai3').removeClass('jiayaojiankongzhixiangjiliangbengkai3-btn-off');
        $('#jiayaojiankongzhixiangjiliangbengguan3').addClass('jiayaojiankongzhixiangjiliangbengguan3-btn-off');
        $('#jiayaojiankongzhixiangjiliangbengguan3').removeClass('jiayaojiankongzhixiangjiliangbengguan3-btn-on');
        //
        var stepList = Global.currentIframe().document.getElementById('questionStepList');
        $(stepList).append(' <li title="加药间计量泵3打开"><span class="item">' + (stepList.children.length + 12) + ' ,加药间计量泵3打开</span></li>');
        Global.currentIframe().oTrain.operateStep.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "jiayaojiankongzhixiangjiliangbengkai3",
            "opcname": "加药间计量泵3打开",
            "opcvalue": "1",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        Global.currentIframe().oTrain.currentState.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "jiayaojiankongzhixiangjiliangbengkai3",
            "opcname": "加药间计量泵3打开",
            "opcvalue": "1",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        Global.currentIframe().oTrain.currentState.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "jiayaojiankongzhixiangjiliangbengguan3",
            "opcname": "加药间计量泵3关闭",
            "opcvalue": "0",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        console.log(Global.currentIframe().oTrain.operateStep);
        Global.currentIframe().oTrain.showStepTip(stepList.children.length);
    });

    $('#jiayaojiankongzhixiangjiliangbengguan3').click(function() {
        $('#jiayaojiankongzhixiangjiliangbengguan3').addClass('jiayaojiankongzhixiangjiliangbengguan3-btn-on');
        $('#jiayaojiankongzhixiangjiliangbengguan3').removeClass('jiayaojiankongzhixiangjiliangbengguan3-btn-off');
        $('#jiayaojiankongzhixiangjiliangbengkai3').addClass('jiayaojiankongzhixiangjiliangbengkai3-btn-off');
        $('#jiayaojiankongzhixiangjiliangbengkai3').removeClass('jiayaojiankongzhixiangjiliangbengkai3-btn-on');
        //
        var stepList = Global.currentIframe().document.getElementById('questionStepList');
        $(stepList).append(' <li title="加药间计量泵3打开"><span class="item">' + (stepList.children.length + 12) + ' ,加药间计量泵3打开</span></li>');
        Global.currentIframe().oTrain.operateStep.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "jiayaojiankongzhixiangjiliangbengguan3",
            "opcname": "加药间计量泵3关闭",
            "opcvalue": "1",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        Global.currentIframe().oTrain.currentState.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "jiayaojiankongzhixiangjiliangbengkai3",
            "opcname": "加药间计量泵3打开",
            "opcvalue": "0",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        Global.currentIframe().oTrain.currentState.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "jiayaojiankongzhixiangjiliangbengguan3",
            "opcname": "加药间计量泵3关闭",
            "opcvalue": "1",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        console.log(Global.currentIframe().oTrain.operateStep);
        Global.currentIframe().oTrain.showStepTip(stepList.children.length);
    });

    $('#jiayaojiankongzhixiangjiliangbengkai4').click(function() {
        $('#jiayaojiankongzhixiangjiliangbengkai4').addClass('jiayaojiankongzhixiangjiliangbengkai4-btn-on');
        $('#jiayaojiankongzhixiangjiliangbengkai4').removeClass('jiayaojiankongzhixiangjiliangbengkai4-btn-off');
        $('#jiayaojiankongzhixiangjiliangbengguan4').addClass('jiayaojiankongzhixiangjiliangbengguan4-btn-off');
        $('#jiayaojiankongzhixiangjiliangbengguan4').removeClass('jiayaojiankongzhixiangjiliangbengguan4-btn-on');
        //
        var stepList = Global.currentIframe().document.getElementById('questionStepList');
        $(stepList).append(' <li title="加药间计量泵4打开"><span class="item">' + (stepList.children.length + 12) + ' ,加药间计量泵4打开</span></li>');
        Global.currentIframe().oTrain.operateStep.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-104f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a49-ee94-49d2-8e74-e4160d841bb7",
            "opcid": "jiayaojiankongzhixiangjiliangbengkai4",
            "opcname": "加药间计量泵4打开",
            "opcvalue": "1",
            "subsystemguid": "d695482f-22f8-4f44-8046-bc507cd12cc4"
        });
        Global.currentIframe().oTrain.currentState.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-104f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a49-ee94-49d2-8e74-e4160d841bb7",
            "opcid": "jiayaojiankongzhixiangjiliangbengkai4",
            "opcname": "加药间计量泵4打开",
            "opcvalue": "1",
            "subsystemguid": "d695482f-22f8-4f44-8046-bc507cd12cc4"
        });
        Global.currentIframe().oTrain.currentState.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-104f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a49-ee94-49d2-8e74-e4160d841bb7",
            "opcid": "jiayaojiankongzhixiangjiliangbengguan4",
            "opcname": "加药间计量泵4关闭",
            "opcvalue": "0",
            "subsystemguid": "d695482f-22f8-4f44-8046-bc507cd12cc4"
        });
        console.log(Global.currentIframe().oTrain.operateStep);
        Global.currentIframe().oTrain.showStepTip(stepList.children.length);
    });

    $('#jiayaojiankongzhixiangjiliangbengguan4').click(function() {
        $('#jiayaojiankongzhixiangjiliangbengguan4').addClass('jiayaojiankongzhixiangjiliangbengguan4-btn-on');
        $('#jiayaojiankongzhixiangjiliangbengguan4').removeClass('jiayaojiankongzhixiangjiliangbengguan4-btn-off');
        $('#jiayaojiankongzhixiangjiliangbengkai4').addClass('jiayaojiankongzhixiangjiliangbengkai4-btn-off');
        $('#jiayaojiankongzhixiangjiliangbengkai4').removeClass('jiayaojiankongzhixiangjiliangbengkai4-btn-on');
        //
        var stepList = Global.currentIframe().document.getElementById('questionStepList');
        $(stepList).append(' <li title="加药间计量泵4打开"><span class="item">' + (stepList.children.length + 12) + ' ,加药间计量泵4打开</span></li>');
        Global.currentIframe().oTrain.operateStep.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-104f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a49-ee94-49d2-8e74-e4160d841bb7",
            "opcid": "jiayaojiankongzhixiangjiliangbengguan4",
            "opcname": "加药间计量泵4关闭",
            "opcvalue": "1",
            "subsystemguid": "d695482f-22f8-4f44-8046-bc507cd12cc4"
        });
        Global.currentIframe().oTrain.currentState.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-104f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a49-ee94-49d2-8e74-e4160d841bb7",
            "opcid": "jiayaojiankongzhixiangjiliangbengkai4",
            "opcname": "加药间计量泵4打开",
            "opcvalue": "0",
            "subsystemguid": "d695482f-22f8-4f44-8046-bc507cd12cc4"
        });
        Global.currentIframe().oTrain.currentState.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-104f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a49-ee94-49d2-8e74-e4160d841bb7",
            "opcid": "jiayaojiankongzhixiangjiliangbengguan4",
            "opcname": "加药间计量泵4关闭",
            "opcvalue": "1",
            "subsystemguid": "d695482f-22f8-4f44-8046-bc507cd12cc4"
        });
        console.log(Global.currentIframe().oTrain.operateStep);
        Global.currentIframe().oTrain.showStepTip(stepList.children.length);
    });


    $('#jiayaojiankongzhixiangbianpinqidakaiguanbi1').click(function() {
        var stepList = Global.currentIframe().document.getElementById('questionStepList');
        var classname = document.getElementById('jiayaojiankongzhixiangbianpinqidakaiguanbi1').className;
        if (classname.indexOf('jiayaojiankongzhixiangbianpinqidakaiguanbi1-btn-off') >= 0) {
            $('#jiayaojiankongzhixiangbianpinqidakaiguanbi1').addClass('jiayaojiankongzhixiangbianpinqidakaiguanbi1-btn-on');
            $('#jiayaojiankongzhixiangbianpinqidakaiguanbi1').removeClass('jiayaojiankongzhixiangbianpinqidakaiguanbi1-btn-off');


            $('#jiayaojiankongzhixiangbianpinqiyunxing1').addClass('jiayaojiankongzhixiangbianpinqiyunxing1-btn-on');
            $('#jiayaojiankongzhixiangbianpinqiyunxing1').removeClass('jiayaojiankongzhixiangbianpinqiyunxing1-btn-off');

            $(stepList).append(' <li title="加药间变频器1打开"><span class="item">' + (stepList.children.length + 12) + ' ,加药间变频器1打开</span></li>');
            Global.currentIframe().oTrain.operateStep.push({
                "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
                "numbertype": "0",
                "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
                "opcid": "jiayaojiankongzhixiangbianpinqidakaiguanbi1",
                "opcname": "加药间变频器1打开/关闭",
                "opcvalue": "0",
                "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
            });
            Global.currentIframe().oTrain.currentState.push({
                "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
                "numbertype": "0",
                "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
                "opcid": "jiayaojiankongzhixiangbianpinqidakaiguanbi1",
                "opcname": "加药间变频器1打开/关闭",
                "opcvalue": "0",
                "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
            });
        } else {
            $('#jiayaojiankongzhixiangbianpinqidakaiguanbi1').addClass('jiayaojiankongzhixiangbianpinqidakaiguanbi1-btn-off');
            $('#jiayaojiankongzhixiangbianpinqidakaiguanbi1').removeClass('jiayaojiankongzhixiangbianpinqidakaiguanbi1-btn-on');
            $('#jiayaojiankongzhixiangbianpinqiyunxing1').removeClass('jiayaojiankongzhixiangbianpinqiyunxing1-btn-on');
            $('#jiayaojiankongzhixiangbianpinqiyunxing1').addClass('jiayaojiankongzhixiangbianpinqiyunxing1-btn-off');
            $(stepList).append(' <li title="加药间变频器1关闭"><span class="item">' + (stepList.children.length + 12) + ' ,加药间变频器1关闭</span></li>');
            Global.currentIframe().oTrain.operateStep.push({
                "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
                "numbertype": "0",
                "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
                "opcid": "jiayaojiankongzhixiangbianpinqidakaiguanbi1",
                "opcname": "加药间变频器1打开/关闭",
                "opcvalue": "1",
                "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
            });
            Global.currentIframe().oTrain.currentState.push({
                "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
                "numbertype": "0",
                "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
                "opcid": "jiayaojiankongzhixiangbianpinqidakaiguanbi1",
                "opcname": "加药间变频器1打开/关闭",
                "opcvalue": "1",
                "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
            });
        }
        console.log(Global.currentIframe().oTrain.operateStep);
        Global.currentIframe().oTrain.showStepTip(stepList.children.length);
    });
    $('#jiayaojiankongzhixiangbianpinqidakaiguanbi2').click(function() {
        var stepList = Global.currentIframe().document.getElementById('questionStepList');
        var classname = document.getElementById('jiayaojiankongzhixiangbianpinqidakaiguanbi2').className;
        if (classname.indexOf('jiayaojiankongzhixiangbianpinqidakaiguanbi2-btn-off') >= 0) {
            $('#jiayaojiankongzhixiangbianpinqidakaiguanbi2').addClass('jiayaojiankongzhixiangbianpinqidakaiguanbi2-btn-on');
            $('#jiayaojiankongzhixiangbianpinqidakaiguanbi2').removeClass('jiayaojiankongzhixiangbianpinqidakaiguanbi2-btn-off');
            $('#jiayaojiankongzhixiangbianpinqiyunxing2').addClass('jiayaojiankongzhixiangbianpinqiyunxing2-btn-on');
            $('#jiayaojiankongzhixiangbianpinqiyunxing2').removeClass('jiayaojiankongzhixiangbianpinqiyunxing2-btn-off');

            $(stepList).append(' <li title="加药间变频器2打开"><span class="item">' + (stepList.children.length + 22) + ' ,加药间变频器2打开</span></li>');
            Global.currentIframe().oTrain.operateStep.push({
                "assemblyguid": "08852642-254a-4ecf-a5de-203f292462b2",
                "numbertype": "0",
                "opcdwguid": "6c242a39-ee93-49d2-8e73-e4260d832bb7",
                "opcid": "jiayaojiankongzhixiangbianpinqidakaiguanbi2",
                "opcname": "加药间变频器2打开/关闭",
                "opcvalue": "0",
                "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd22cc3"
            });
            Global.currentIframe().oTrain.currentState.push({
                "assemblyguid": "08852642-254a-4ecf-a5de-203f292462b2",
                "numbertype": "0",
                "opcdwguid": "6c242a39-ee93-49d2-8e73-e4260d832bb7",
                "opcid": "jiayaojiankongzhixiangbianpinqidakaiguanbi2",
                "opcname": "加药间变频器2打开/关闭",
                "opcvalue": "0",
                "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd22cc3"
            });
        } else {
            $('#jiayaojiankongzhixiangbianpinqidakaiguanbi2').addClass('jiayaojiankongzhixiangbianpinqidakaiguanbi2-btn-off');
            $('#jiayaojiankongzhixiangbianpinqidakaiguanbi2').removeClass('jiayaojiankongzhixiangbianpinqidakaiguanbi2-btn-on');
            $('#jiayaojiankongzhixiangbianpinqiyunxing2').removeClass('jiayaojiankongzhixiangbianpinqiyunxing2-btn-on');
            $('#jiayaojiankongzhixiangbianpinqiyunxing2').addClass('jiayaojiankongzhixiangbianpinqiyunxing2-btn-off');
            $(stepList).append(' <li title="加药间变频器2关闭"><span class="item">' + (stepList.children.length + 22) + ' ,加药间变频器2关闭</span></li>');
            Global.currentIframe().oTrain.operateStep.push({
                "assemblyguid": "08852642-254a-4ecf-a5de-203f292462b2",
                "numbertype": "0",
                "opcdwguid": "6c242a39-ee93-49d2-8e73-e4260d832bb7",
                "opcid": "jiayaojiankongzhixiangbianpinqidakaiguanbi2",
                "opcname": "加药间变频器2打开/关闭",
                "opcvalue": "1",
                "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd22cc3"
            });
            Global.currentIframe().oTrain.currentState.push({
                "assemblyguid": "08852642-254a-4ecf-a5de-203f292462b2",
                "numbertype": "0",
                "opcdwguid": "6c242a39-ee93-49d2-8e73-e4260d832bb7",
                "opcid": "jiayaojiankongzhixiangbianpinqidakaiguanbi2",
                "opcname": "加药间变频器2打开/关闭",
                "opcvalue": "1",
                "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd22cc3"
            });
        }
        console.log(Global.currentIframe().oTrain.operateStep);
        Global.currentIframe().oTrain.showStepTip(stepList.children.length);
    });
    $('#jiayaojiankongzhixiangzixibengbendiyuancheng1').click(function() {
        var stepList = Global.currentIframe().document.getElementById('questionStepList');
        var classname = document.getElementById('jiayaojiankongzhixiangzixibengbendiyuancheng1').className;
        if (classname.indexOf('jiayaojiankongzhixiangzixibengbendiyuancheng1-btn-off') >= 0) {
            $('#jiayaojiankongzhixiangzixibengbendiyuancheng1').addClass('jiayaojiankongzhixiangzixibengbendiyuancheng1-btn-on');
            $('#jiayaojiankongzhixiangzixibengbendiyuancheng1').removeClass('jiayaojiankongzhixiangzixibengbendiyuancheng1-btn-off');
            $(stepList).append(' <li title="加药间自吸泵1设置为本地"><span class="item">' + (stepList.children.length + 12) + ' ,加药间自吸泵1设置为本地</span></li>');
            Global.currentIframe().oTrain.operateStep.push({
                "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
                "numbertype": "0",
                "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
                "opcid": "jiayaojiankongzhixiangzixibengbendiyuancheng1",
                "opcname": "加药间自吸泵1本地/远程",
                "opcvalue": "0",
                "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
            });
            Global.currentIframe().oTrain.currentState.push({
                "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
                "numbertype": "0",
                "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
                "opcid": "jiayaojiankongzhixiangzixibengbendiyuancheng1",
                "opcname": "加药间自吸泵1本地/远程",
                "opcvalue": "0",
                "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
            });
        } else {
            $('#jiayaojiankongzhixiangzixibengbendiyuancheng1').addClass('jiayaojiankongzhixiangzixibengbendiyuancheng1-btn-off');
            $('#jiayaojiankongzhixiangzixibengbendiyuancheng1').removeClass('jiayaojiankongzhixiangzixibengbendiyuancheng1-btn-on');
            $(stepList).append(' <li title="加药间自吸泵1设置为远程"><span class="item">' + (stepList.children.length + 12) + ' ,加药间自吸泵1设置为远程</span></li>');
            Global.currentIframe().oTrain.operateStep.push({
                "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
                "numbertype": "0",
                "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
                "opcid": "jiayaojiankongzhixiangzixibengbendiyuancheng1",
                "opcname": "加药间自吸泵1本地/远程",
                "opcvalue": "1",
                "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
            });
            Global.currentIframe().oTrain.currentState.push({
                "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
                "numbertype": "0",
                "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
                "opcid": "jiayaojiankongzhixiangzixibengbendiyuancheng1",
                "opcname": "加药间自吸泵1本地/远程",
                "opcvalue": "1",
                "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
            });
        }
        console.log(Global.currentIframe().oTrain.operateStep);
        Global.currentIframe().oTrain.showStepTip(stepList.children.length);
    });
    $('#jiayaojiankongzhixiangzixibengbendiyuancheng2').click(function() {
        var stepList = Global.currentIframe().document.getElementById('questionStepList');
        var classname = document.getElementById('jiayaojiankongzhixiangzixibengbendiyuancheng2').className;
        if (classname.indexOf('jiayaojiankongzhixiangzixibengbendiyuancheng2-btn-off') >= 0) {
            $('#jiayaojiankongzhixiangzixibengbendiyuancheng2').addClass('jiayaojiankongzhixiangzixibengbendiyuancheng2-btn-on');
            $('#jiayaojiankongzhixiangzixibengbendiyuancheng2').removeClass('jiayaojiankongzhixiangzixibengbendiyuancheng2-btn-off');
            $(stepList).append(' <li title="加药间自吸泵2设置为本地"><span class="item">' + (stepList.children.length + 22) + ' ,加药间自吸泵2设置为本地</span></li>');
            Global.currentIframe().oTrain.operateStep.push({
                "assemblyguid": "08852642-254a-4ecf-a5de-203f292462b2",
                "numbertype": "0",
                "opcdwguid": "6c242a39-ee93-49d2-8e73-e4260d832bb7",
                "opcid": "jiayaojiankongzhixiangzixibengbendiyuancheng2",
                "opcname": "加药间自吸泵2本地/远程",
                "opcvalue": "0",
                "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd22cc3"
            });
            Global.currentIframe().oTrain.currentState.push({
                "assemblyguid": "08852642-254a-4ecf-a5de-203f292462b2",
                "numbertype": "0",
                "opcdwguid": "6c242a39-ee93-49d2-8e73-e4260d832bb7",
                "opcid": "jiayaojiankongzhixiangzixibengbendiyuancheng2",
                "opcname": "加药间自吸泵2本地/远程",
                "opcvalue": "0",
                "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd22cc3"
            });
        } else {
            $('#jiayaojiankongzhixiangzixibengbendiyuancheng2').addClass('jiayaojiankongzhixiangzixibengbendiyuancheng2-btn-off');
            $('#jiayaojiankongzhixiangzixibengbendiyuancheng2').removeClass('jiayaojiankongzhixiangzixibengbendiyuancheng2-btn-on');
            $(stepList).append(' <li title="加药间自吸泵2设置为远程"><span class="item">' + (stepList.children.length + 22) + ' ,加药间自吸泵2设置为远程</span></li>');
            Global.currentIframe().oTrain.operateStep.push({
                "assemblyguid": "08852642-254a-4ecf-a5de-203f292462b2",
                "numbertype": "0",
                "opcdwguid": "6c242a39-ee93-49d2-8e73-e4260d832bb7",
                "opcid": "jiayaojiankongzhixiangzixibengbendiyuancheng2",
                "opcname": "加药间自吸泵2本地/远程",
                "opcvalue": "1",
                "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd22cc3"
            });
            Global.currentIframe().oTrain.currentState.push({
                "assemblyguid": "08852642-254a-4ecf-a5de-203f292462b2",
                "numbertype": "0",
                "opcdwguid": "6c242a39-ee93-49d2-8e73-e4260d832bb7",
                "opcid": "jiayaojiankongzhixiangzixibengbendiyuancheng2",
                "opcname": "加药间自吸泵2本地/远程",
                "opcvalue": "1",
                "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd22cc3"
            });
        }
        console.log(Global.currentIframe().oTrain.operateStep);
        Global.currentIframe().oTrain.showStepTip(stepList.children.length);
    });

    $('#jiayaojiankongzhixiangzixibengkai1').click(function() {
        $('#jiayaojiankongzhixiangzixibengkai1').addClass('jiayaojiankongzhixiangzixibengkai1-btn-on');
        $('#jiayaojiankongzhixiangzixibengkai1').removeClass('jiayaojiankongzhixiangzixibengkai1-btn-off');
        $('#jiayaojiankongzhixiangzixibengguan1').addClass('jiayaojiankongzhixiangzixibengguan1-btn-off');
        $('#jiayaojiankongzhixiangzixibengguan1').removeClass('jiayaojiankongzhixiangzixibengguan1-btn-on');
        //
        var stepList = Global.currentIframe().document.getElementById('questionStepList');
        $(stepList).append(' <li title="加药间自吸泵1打开"><span class="item">' + (stepList.children.length + 12) + ' ,加药间自吸泵1打开</span></li>');
        Global.currentIframe().oTrain.operateStep.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "jiayaojiankongzhixiangzixibengkai1",
            "opcname": "加药间自吸泵1打开",
            "opcvalue": "1",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        Global.currentIframe().oTrain.currentState.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "jiayaojiankongzhixiangzixibengkai1",
            "opcname": "加药间自吸泵1打开",
            "opcvalue": "1",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        Global.currentIframe().oTrain.currentState.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "jiayaojiankongzhixiangzixibengguan1",
            "opcname": "加药间自吸泵1关闭",
            "opcvalue": "0",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        console.log(Global.currentIframe().oTrain.operateStep);
        Global.currentIframe().oTrain.showStepTip(stepList.children.length);
    });

    $('#jiayaojiankongzhixiangzixibengguan1').click(function() {
        $('#jiayaojiankongzhixiangzixibengguan1').addClass('jiayaojiankongzhixiangzixibengguan1-btn-on');
        $('#jiayaojiankongzhixiangzixibengguan1').removeClass('jiayaojiankongzhixiangzixibengguan1-btn-off');
        $('#jiayaojiankongzhixiangzixibengkai1').addClass('jiayaojiankongzhixiangzixibengkai1-btn-off');
        $('#jiayaojiankongzhixiangzixibengkai1').removeClass('jiayaojiankongzhixiangzixibengkai1-btn-on');
        //
        var stepList = Global.currentIframe().document.getElementById('questionStepList');
        $(stepList).append(' <li title="加药间自吸泵1关闭"><span class="item">' + (stepList.children.length + 12) + ' ,加药间自吸泵1关闭</span></li>');
        Global.currentIframe().oTrain.operateStep.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "jiayaojiankongzhixiangzixibengguan1",
            "opcname": "加药间自吸泵1关闭",
            "opcvalue": "1",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        Global.currentIframe().oTrain.currentState.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "jiayaojiankongzhixiangzixibengkai1",
            "opcname": "加药间自吸泵1打开",
            "opcvalue": "0",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        Global.currentIframe().oTrain.currentState.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "jiayaojiankongzhixiangzixibengguan1",
            "opcname": "加药间自吸泵1关闭",
            "opcvalue": "1",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        console.log(Global.currentIframe().oTrain.operateStep);
        Global.currentIframe().oTrain.showStepTip(stepList.children.length);
    });
    $('#jiayaojiankongzhixiangzixibengkai2').click(function() {
        $('#jiayaojiankongzhixiangzixibengkai2').addClass('jiayaojiankongzhixiangzixibengkai2-btn-on');
        $('#jiayaojiankongzhixiangzixibengkai2').removeClass('jiayaojiankongzhixiangzixibengkai2-btn-off');
        $('#jiayaojiankongzhixiangzixibengguan2').addClass('jiayaojiankongzhixiangzixibengguan2-btn-off');
        $('#jiayaojiankongzhixiangzixibengguan2').removeClass('jiayaojiankongzhixiangzixibengguan2-btn-on');
        //
        var stepList = Global.currentIframe().document.getElementById('questionStepList');
        $(stepList).append(' <li title="加药间自吸泵2打开"><span class="item">' + (stepList.children.length + 22) + ' ,加药间自吸泵2打开</span></li>');
        Global.currentIframe().oTrain.operateStep.push({
            "assemblyguid": "08852642-254a-4ecf-a5de-203f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4260d832bb7",
            "opcid": "jiayaojiankongzhixiangzixibengkai2",
            "opcname": "加药间自吸泵2打开",
            "opcvalue": "1",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd22cc3"
        });
        Global.currentIframe().oTrain.currentState.push({
            "assemblyguid": "08852642-254a-4ecf-a5de-203f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4260d832bb7",
            "opcid": "jiayaojiankongzhixiangzixibengkai2",
            "opcname": "加药间自吸泵2打开",
            "opcvalue": "1",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd22cc3"
        });
        Global.currentIframe().oTrain.currentState.push({
            "assemblyguid": "08852642-254a-4ecf-a5de-203f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4260d832bb7",
            "opcid": "jiayaojiankongzhixiangzixibengguan2",
            "opcname": "加药间自吸泵2关闭",
            "opcvalue": "0",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd22cc3"
        });
        console.log(Global.currentIframe().oTrain.operateStep);
        Global.currentIframe().oTrain.showStepTip(stepList.children.length);
    });

    $('#jiayaojiankongzhixiangzixibengguan2').click(function() {
        $('#jiayaojiankongzhixiangzixibengguan2').addClass('jiayaojiankongzhixiangzixibengguan2-btn-on');
        $('#jiayaojiankongzhixiangzixibengguan2').removeClass('jiayaojiankongzhixiangzixibengguan2-btn-off');
        $('#jiayaojiankongzhixiangzixibengkai2').addClass('jiayaojiankongzhixiangzixibengkai2-btn-off');
        $('#jiayaojiankongzhixiangzixibengkai2').removeClass('jiayaojiankongzhixiangzixibengkai2-btn-on');
        //
        var stepList = Global.currentIframe().document.getElementById('questionStepList');
        $(stepList).append(' <li title="加药间自吸泵2关闭"><span class="item">' + (stepList.children.length + 22) + ' ,加药间自吸泵2关闭</span></li>');
        Global.currentIframe().oTrain.operateStep.push({
            "assemblyguid": "08852642-254a-4ecf-a5de-203f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4260d832bb7",
            "opcid": "jiayaojiankongzhixiangzixibengguan2",
            "opcname": "加药间自吸泵2关闭",
            "opcvalue": "1",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd22cc3"
        });
        Global.currentIframe().oTrain.currentState.push({
            "assemblyguid": "08852642-254a-4ecf-a5de-203f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4260d832bb7",
            "opcid": "jiayaojiankongzhixiangzixibengkai2",
            "opcname": "加药间自吸泵2打开",
            "opcvalue": "0",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd22cc3"
        });
        Global.currentIframe().oTrain.currentState.push({
            "assemblyguid": "08852642-254a-4ecf-a5de-203f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4260d832bb7",
            "opcid": "jiayaojiankongzhixiangzixibengguan2",
            "opcname": "加药间自吸泵2关闭",
            "opcvalue": "1",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd22cc3"
        });
        console.log(Global.currentIframe().oTrain.operateStep);
        Global.currentIframe().oTrain.showStepTip(stepList.children.length);
    });


    $('#yihaosongshuibianpinguixianchangyaokong').click(function() {
        var stepList = Global.currentIframe().document.getElementById('questionStepList');
        var classname = document.getElementById('yihaosongshuibianpinguixianchangyaokong').className;
        if (classname.indexOf('yihaosongshuibianpinguixianchangyaokong-btn-off') >= 0) {
            $('#yihaosongshuibianpinguixianchangyaokong').addClass('yihaosongshuibianpinguixianchangyaokong-btn-on');
            $('#yihaosongshuibianpinguixianchangyaokong').removeClass('yihaosongshuibianpinguixianchangyaokong-btn-off');
            $(stepList).append(' <li title="一号送水变频器设置为现场"><span class="item">' + (stepList.children.length + 4) + ' ,一号送水变频器设置为现场</span></li>');
            Global.currentIframe().oTrain.operateStep.push({
                "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
                "numbertype": "0",
                "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
                "opcid": "yihaosongshuibianpinguixianchangyaokong",
                "opcname": "一号送水变频器现场/遥控",
                "opcvalue": "1",
                "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
            });
            Global.currentIframe().oTrain.currentState.push({
                "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
                "numbertype": "0",
                "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
                "opcid": "yihaosongshuibianpinguixianchangyaokong",
                "opcname": "一号送水变频器现场/遥控",
                "opcvalue": "1",
                "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
            });
        } else {
            $('#yihaosongshuibianpinguixianchangyaokong').addClass('yihaosongshuibianpinguixianchangyaokong-btn-off');
            $('#yihaosongshuibianpinguixianchangyaokong').removeClass('yihaosongshuibianpinguixianchangyaokong-btn-on');
            $(stepList).append(' <li title="一号送水变频器设置为遥控"><span class="item">' + (stepList.children.length + 4) + ' ,一号送水变频器设置为遥控</span></li>');
            Global.currentIframe().oTrain.operateStep.push({
                "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
                "numbertype": "0",
                "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
                "opcid": "yihaosongshuibianpinguixianchangyaokong",
                "opcname": "一号送水变频器现场/遥控",
                "opcvalue": "0",
                "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
            });
            Global.currentIframe().oTrain.currentState.push({
                "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
                "numbertype": "0",
                "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
                "opcid": "yihaosongshuibianpinguixianchangyaokong",
                "opcname": "一号送水变频器现场/遥控",
                "opcvalue": "0",
                "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
            });
        }
        console.log(Global.currentIframe().oTrain.operateStep);
        Global.currentIframe().oTrain.showStepTip(stepList.children.length);
    });

    $('#yihaosongshuibianpinguikai').click(function() {
        $('#yihaosongshuibianpinguiyunxing').addClass('yihaosongshuibianpinguiyunxing-btn-on');
        $('#yihaosongshuibianpinguiyunxing').removeClass('yihaosongshuibianpinguiyunxing-btn-off');

        //
        var stepList = Global.currentIframe().document.getElementById('questionStepList');
        $(stepList).append(' <li title="一号送水变频器打开"><span class="item">' + (stepList.children.length + 22) + ' ,一号送水变频器打开</span></li>');
        Global.currentIframe().oTrain.operateStep.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "yihaosongshuibianpinguikai",
            "opcname": "一号送水变频器打开",
            "opcvalue": "1",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        Global.currentIframe().oTrain.currentState.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "yihaosongshuibianpinguiyunxing",
            "opcname": "一号送水变频器运行",
            "opcvalue": "1",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        console.log(Global.currentIframe().oTrain.operateStep);
        Global.currentIframe().oTrain.showStepTip(stepList.children.length);
    });

    $('#yihaosongshuibianpinguiguan').click(function() {
        $('#yihaosongshuibianpinguiyunxing').addClass('yihaosongshuibianpinguiyunxing-btn-off');
        $('#yihaosongshuibianpinguiyunxing').removeClass('yihaosongshuibianpinguiyunxing-btn-on');

        //
        var stepList = Global.currentIframe().document.getElementById('questionStepList');
        $(stepList).append(' <li title="一号送水变频器关闭"><span class="item">' + (stepList.children.length + 22) + ' ,一号送水变频器关闭</span></li>');
        Global.currentIframe().oTrain.operateStep.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "yihaosongshuibianpinguiguan",
            "opcname": "一号送水变频器关闭",
            "opcvalue": "1",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        Global.currentIframe().oTrain.currentState.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "yihaosongshuibianpinguiyunxing",
            "opcname": "一号送水变频器运行",
            "opcvalue": "0",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        console.log(Global.currentIframe().oTrain.operateStep);
        Global.currentIframe().oTrain.showStepTip(stepList.children.length);
    });

    $('#erhaosongshuibianpinguixianchangyaokong').click(function() {
        var stepList = Global.currentIframe().document.getElementById('questionStepList');
        var classname = document.getElementById('erhaosongshuibianpinguixianchangyaokong').className;
        if (classname.indexOf('erhaosongshuibianpinguixianchangyaokong-btn-off') >= 0) {
            $('#erhaosongshuibianpinguixianchangyaokong').addClass('erhaosongshuibianpinguixianchangyaokong-btn-on');
            $('#erhaosongshuibianpinguixianchangyaokong').removeClass('erhaosongshuibianpinguixianchangyaokong-btn-off');
            $(stepList).append(' <li title="二号送水变频器设置为现场"><span class="item">' + (stepList.children.length + 4) + ' ,二号送水变频器设置为现场</span></li>');
            Global.currentIframe().oTrain.operateStep.push({
                "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
                "numbertype": "0",
                "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
                "opcid": "erhaosongshuibianpinguixianchangyaokong",
                "opcname": "二号送水变频器现场/遥控",
                "opcvalue": "1",
                "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
            });
            Global.currentIframe().oTrain.currentState.push({
                "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
                "numbertype": "0",
                "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
                "opcid": "erhaosongshuibianpinguixianchangyaokong",
                "opcname": "二号送水变频器现场/遥控",
                "opcvalue": "1",
                "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
            });
        } else {
            $('#erhaosongshuibianpinguixianchangyaokong').addClass('erhaosongshuibianpinguixianchangyaokong-btn-off');
            $('#erhaosongshuibianpinguixianchangyaokong').removeClass('erhaosongshuibianpinguixianchangyaokong-btn-on');
            $(stepList).append(' <li title="二号送水变频器设置为遥控"><span class="item">' + (stepList.children.length + 4) + ' ,二号送水变频器设置为遥控</span></li>');
            Global.currentIframe().oTrain.operateStep.push({
                "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
                "numbertype": "0",
                "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
                "opcid": "erhaosongshuibianpinguixianchangyaokong",
                "opcname": "二号送水变频器现场/遥控",
                "opcvalue": "0",
                "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
            });
            Global.currentIframe().oTrain.currentState.push({
                "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
                "numbertype": "0",
                "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
                "opcid": "erhaosongshuibianpinguixianchangyaokong",
                "opcname": "二号送水变频器现场/遥控",
                "opcvalue": "0",
                "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
            });
        }
        console.log(Global.currentIframe().oTrain.operateStep);
        Global.currentIframe().oTrain.showStepTip(stepList.children.length);
    });

    $('#erhaosongshuibianpinguikai').click(function() {
        $('#erhaosongshuibianpinguiyunxing').addClass('erhaosongshuibianpinguiyunxing-btn-on');
        $('#erhaosongshuibianpinguiyunxing').removeClass('erhaosongshuibianpinguiyunxing-btn-off');

        //
        var stepList = Global.currentIframe().document.getElementById('questionStepList');
        $(stepList).append(' <li title="二号送水变频器打开"><span class="item">' + (stepList.children.length + 22) + ' ,二号送水变频器打开</span></li>');
        Global.currentIframe().oTrain.operateStep.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "erhaosongshuibianpinguikai",
            "opcname": "二号送水变频器打开",
            "opcvalue": "1",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        Global.currentIframe().oTrain.currentState.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "erhaosongshuibianpinguiyunxing",
            "opcname": "二号送水变频器运行",
            "opcvalue": "1",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        console.log(Global.currentIframe().oTrain.operateStep);
        Global.currentIframe().oTrain.showStepTip(stepList.children.length);
    });

    $('#erhaosongshuibianpinguiguan').click(function() {
        $('#erhaosongshuibianpinguiyunxing').addClass('erhaosongshuibianpinguiyunxing-btn-off');
        $('#erhaosongshuibianpinguiyunxing').removeClass('erhaosongshuibianpinguiyunxing-btn-on');

        //
        var stepList = Global.currentIframe().document.getElementById('questionStepList');
        $(stepList).append(' <li title="二号送水变频器关闭"><span class="item">' + (stepList.children.length + 22) + ' ,二号送水变频器关闭</span></li>');
        Global.currentIframe().oTrain.operateStep.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "erhaosongshuibianpinguiguan",
            "opcname": "二号送水变频器关闭",
            "opcvalue": "1",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        Global.currentIframe().oTrain.currentState.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "erhaosongshuibianpinguiyunxing",
            "opcname": "二号送水变频器运行",
            "opcvalue": "0",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        console.log(Global.currentIframe().oTrain.operateStep);
        Global.currentIframe().oTrain.showStepTip(stepList.children.length);
    });

    $('#sanhaosongshuibianpinguixianchangyaokong').click(function() {
        var stepList = Global.currentIframe().document.getElementById('questionStepList');
        var classname = document.getElementById('sanhaosongshuibianpinguixianchangyaokong').className;
        if (classname.indexOf('sanhaosongshuibianpinguixianchangyaokong-btn-off') >= 0) {
            $('#sanhaosongshuibianpinguixianchangyaokong').addClass('sanhaosongshuibianpinguixianchangyaokong-btn-on');
            $('#sanhaosongshuibianpinguixianchangyaokong').removeClass('sanhaosongshuibianpinguixianchangyaokong-btn-off');
            $(stepList).append(' <li title="三号送水变频器设置为现场"><span class="item">' + (stepList.children.length + 4) + ' ,三号送水变频器设置为现场</span></li>');
            Global.currentIframe().oTrain.operateStep.push({
                "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
                "numbertype": "0",
                "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
                "opcid": "sanhaosongshuibianpinguixianchangyaokong",
                "opcname": "三号送水变频器现场/遥控",
                "opcvalue": "1",
                "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
            });
            Global.currentIframe().oTrain.currentState.push({
                "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
                "numbertype": "0",
                "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
                "opcid": "sanhaosongshuibianpinguixianchangyaokong",
                "opcname": "三号送水变频器现场/遥控",
                "opcvalue": "1",
                "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
            });
        } else {
            $('#sanhaosongshuibianpinguixianchangyaokong').addClass('sanhaosongshuibianpinguixianchangyaokong-btn-off');
            $('#sanhaosongshuibianpinguixianchangyaokong').removeClass('sanhaosongshuibianpinguixianchangyaokong-btn-on');
            $(stepList).append(' <li title="三号送水变频器设置为遥控"><span class="item">' + (stepList.children.length + 4) + ' ,三号送水变频器设置为遥控</span></li>');
            Global.currentIframe().oTrain.operateStep.push({
                "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
                "numbertype": "0",
                "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
                "opcid": "sanhaosongshuibianpinguixianchangyaokong",
                "opcname": "三号送水变频器现场/遥控",
                "opcvalue": "0",
                "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
            });
            Global.currentIframe().oTrain.currentState.push({
                "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
                "numbertype": "0",
                "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
                "opcid": "sanhaosongshuibianpinguixianchangyaokong",
                "opcname": "三号送水变频器现场/遥控",
                "opcvalue": "0",
                "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
            });
        }
        console.log(Global.currentIframe().oTrain.operateStep);
        Global.currentIframe().oTrain.showStepTip(stepList.children.length);
    });

    $('#sanhaosongshuibianpinguikai').click(function() {
        $('#sanhaosongshuibianpinguiyunxing').addClass('sanhaosongshuibianpinguiyunxing-btn-on');
        $('#sanhaosongshuibianpinguiyunxing').removeClass('sanhaosongshuibianpinguiyunxing-btn-off');

        //
        var stepList = Global.currentIframe().document.getElementById('questionStepList');
        $(stepList).append(' <li title="三号送水变频器打开"><span class="item">' + (stepList.children.length + 22) + ' ,三号送水变频器打开</span></li>');
        Global.currentIframe().oTrain.operateStep.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "sanhaosongshuibianpinguikai",
            "opcname": "三号送水变频器打开",
            "opcvalue": "1",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        Global.currentIframe().oTrain.currentState.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "sanhaosongshuibianpinguiyunxing",
            "opcname": "三号送水变频器运行",
            "opcvalue": "1",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        console.log(Global.currentIframe().oTrain.operateStep);
        Global.currentIframe().oTrain.showStepTip(stepList.children.length);
    });

    $('#sanhaosongshuibianpinguiguan').click(function() {
        $('#sanhaosongshuibianpinguiyunxing').addClass('sanhaosongshuibianpinguiyunxing-btn-off');
        $('#sanhaosongshuibianpinguiyunxing').removeClass('sanhaosongshuibianpinguiyunxing-btn-on');

        //
        var stepList = Global.currentIframe().document.getElementById('questionStepList');
        $(stepList).append(' <li title="三号送水变频器关闭"><span class="item">' + (stepList.children.length + 22) + ' ,三号送水变频器关闭</span></li>');
        Global.currentIframe().oTrain.operateStep.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "sanhaosongshuibianpinguiguan",
            "opcname": "三号送水变频器关闭",
            "opcvalue": "1",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        Global.currentIframe().oTrain.currentState.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "sanhaosongshuibianpinguiyunxing",
            "opcname": "三号送水变频器运行",
            "opcvalue": "0",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        console.log(Global.currentIframe().oTrain.operateStep);
        Global.currentIframe().oTrain.showStepTip(stepList.children.length);
    });

    $('#sihaosongshuibianpinguixianchangyaokong').click(function() {
        var stepList = Global.currentIframe().document.getElementById('questionStepList');
        var classname = document.getElementById('sihaosongshuibianpinguixianchangyaokong').className;
        if (classname.indexOf('sihaosongshuibianpinguixianchangyaokong-btn-off') >= 0) {
            $('#sihaosongshuibianpinguixianchangyaokong').addClass('sihaosongshuibianpinguixianchangyaokong-btn-on');
            $('#sihaosongshuibianpinguixianchangyaokong').removeClass('sihaosongshuibianpinguixianchangyaokong-btn-off');
            $(stepList).append(' <li title="四号送水变频器设置为现场"><span class="item">' + (stepList.children.length + 4) + ' ,四号送水变频器设置为现场</span></li>');
            Global.currentIframe().oTrain.operateStep.push({
                "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
                "numbertype": "0",
                "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
                "opcid": "sihaosongshuibianpinguixianchangyaokong",
                "opcname": "四号送水变频器现场/遥控",
                "opcvalue": "1",
                "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
            });
            Global.currentIframe().oTrain.currentState.push({
                "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
                "numbertype": "0",
                "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
                "opcid": "sihaosongshuibianpinguixianchangyaokong",
                "opcname": "四号送水变频器现场/遥控",
                "opcvalue": "1",
                "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
            });
        } else {
            $('#sihaosongshuibianpinguixianchangyaokong').addClass('sihaosongshuibianpinguixianchangyaokong-btn-off');
            $('#sihaosongshuibianpinguixianchangyaokong').removeClass('sihaosongshuibianpinguixianchangyaokong-btn-on');
            $(stepList).append(' <li title="四号送水变频器设置为遥控"><span class="item">' + (stepList.children.length + 4) + ' ,四号送水变频器设置为遥控</span></li>');
            Global.currentIframe().oTrain.operateStep.push({
                "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
                "numbertype": "0",
                "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
                "opcid": "sihaosongshuibianpinguixianchangyaokong",
                "opcname": "四号送水变频器现场/遥控",
                "opcvalue": "0",
                "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
            });
            Global.currentIframe().oTrain.currentState.push({
                "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
                "numbertype": "0",
                "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
                "opcid": "sihaosongshuibianpinguixianchangyaokong",
                "opcname": "四号送水变频器现场/遥控",
                "opcvalue": "0",
                "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
            });
        }
        console.log(Global.currentIframe().oTrain.operateStep);
        Global.currentIframe().oTrain.showStepTip(stepList.children.length);
    });

    $('#sihaosongshuibianpinguikai').click(function() {
        $('#sihaosongshuibianpinguiyunxing').addClass('sihaosongshuibianpinguiyunxing-btn-on');
        $('#sihaosongshuibianpinguiyunxing').removeClass('sihaosongshuibianpinguiyunxing-btn-off');

        //
        var stepList = Global.currentIframe().document.getElementById('questionStepList');
        $(stepList).append(' <li title="四号送水变频器打开"><span class="item">' + (stepList.children.length + 22) + ' ,四号送水变频器打开</span></li>');
        Global.currentIframe().oTrain.operateStep.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "sihaosongshuibianpinguikai",
            "opcname": "四号送水变频器打开",
            "opcvalue": "1",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        Global.currentIframe().oTrain.currentState.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "sihaosongshuibianpinguiyunxing",
            "opcname": "四号送水变频器运行",
            "opcvalue": "1",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        console.log(Global.currentIframe().oTrain.operateStep);
        Global.currentIframe().oTrain.showStepTip(stepList.children.length);
    });

    $('#sihaosongshuibianpinguiguan').click(function() {
        $('#sihaosongshuibianpinguiyunxing').addClass('sihaosongshuibianpinguiyunxing-btn-off');
        $('#sihaosongshuibianpinguiyunxing').removeClass('sihaosongshuibianpinguiyunxing-btn-on');

        //
        var stepList = Global.currentIframe().document.getElementById('questionStepList');
        $(stepList).append(' <li title="四号送水变频器关闭"><span class="item">' + (stepList.children.length + 22) + ' ,四号送水变频器关闭</span></li>');
        Global.currentIframe().oTrain.operateStep.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "sihaosongshuibianpinguiguan",
            "opcname": "四号送水变频器关闭",
            "opcvalue": "1",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        Global.currentIframe().oTrain.currentState.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "sihaosongshuibianpinguiyunxing",
            "opcname": "四号送水变频器运行",
            "opcvalue": "0",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        console.log(Global.currentIframe().oTrain.operateStep);
        Global.currentIframe().oTrain.showStepTip(stepList.children.length);
    });

    $('#lvchiqiehuanji1kai').click(function() {

        //
        var stepList = Global.currentIframe().document.getElementById('questionStepList');
        $(stepList).append(' <li title="滤池切换机1打开"><span class="item">' + (stepList.children.length + 22) + ' ,滤池切换机1打开</span></li>');
        Global.currentIframe().oTrain.operateStep.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "lvchiqiehuanji1kai",
            "opcname": "滤池切换机1开",
            "opcvalue": "1",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });

        console.log(Global.currentIframe().oTrain.operateStep);
        Global.currentIframe().oTrain.showStepTip(stepList.children.length);
    });
    $('#lvchiqiehuanji1guan').click(function() {
        //
        var stepList = Global.currentIframe().document.getElementById('questionStepList');
        $(stepList).append(' <li title="滤池切换机1关闭"><span class="item">' + (stepList.children.length + 22) + ' ,滤池切换机1关闭</span></li>');
        Global.currentIframe().oTrain.operateStep.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "lvchiqiehuanji1guan",
            "opcname": "滤池切换机1关",
            "opcvalue": "1",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });

        console.log(Global.currentIframe().oTrain.operateStep);
        Global.currentIframe().oTrain.showStepTip(stepList.children.length);
    });

    $('#lvchiqiehuanji2kai').click(function() {
        //
        var stepList = Global.currentIframe().document.getElementById('questionStepList');
        $(stepList).append(' <li title="滤池切换机2打开"><span class="item">' + (stepList.children.length + 22) + ' ,滤池切换机2打开</span></li>');
        Global.currentIframe().oTrain.operateStep.push({
            "assemblyguid": "08852642-254a-4ecf-a5de-203f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4260d832bb7",
            "opcid": "lvchiqiehuanji2kai",
            "opcname": "滤池切换机2开",
            "opcvalue": "1",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd22cc3"
        });

        console.log(Global.currentIframe().oTrain.operateStep);
        Global.currentIframe().oTrain.showStepTip(stepList.children.length);
    });
    $('#lvchiqiehuanji2guan').click(function() {
        //
        var stepList = Global.currentIframe().document.getElementById('questionStepList');
        $(stepList).append(' <li title="滤池切换机2关闭"><span class="item">' + (stepList.children.length + 22) + ' ,滤池切换机2关闭</span></li>');
        Global.currentIframe().oTrain.operateStep.push({
            "assemblyguid": "08852642-254a-4ecf-a5de-203f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4260d832bb7",
            "opcid": "lvchiqiehuanji2guan",
            "opcname": "滤池切换机2关",
            "opcvalue": "1",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd22cc3"
        });

        console.log(Global.currentIframe().oTrain.operateStep);
        Global.currentIframe().oTrain.showStepTip(stepList.children.length);
    });


    $('#lvchiganzaoji1kai').click(function() {
        $('#lvchiganzaoji1kaiguan').addClass('lvchiganzaoji1kaiguan-btn-on');
        $('#lvchiganzaoji1kaiguan').removeClass('lvchiganzaoji1kaiguan-btn-off');
        //
        var stepList = Global.currentIframe().document.getElementById('questionStepList');
        $(stepList).append(' <li title="滤池干燥机1打开"><span class="item">' + (stepList.children.length + 22) + ' ,滤池干燥机1打开</span></li>');
        Global.currentIframe().oTrain.operateStep.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "lvchiganzaoji1kaiguan",
            "opcname": "滤池干燥机1开/关",
            "opcvalue": "1",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        Global.currentIframe().oTrain.currentState.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "lvchiganzaoji1kaiguan",
            "opcname": "滤池干燥机1开/关",
            "opcvalue": "1",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        console.log(Global.currentIframe().oTrain.operateStep);
        Global.currentIframe().oTrain.showStepTip(stepList.children.length);
    });
    $('#lvchiganzaoji1guan').click(function() {
        $('#lvchiganzaoji1kaiguan').removeClass('lvchiganzaoji1kaiguan-btn-on');
        $('#lvchiganzaoji1kaiguan').addClass('lvchiganzaoji1kaiguan-btn-off');
        //
        var stepList = Global.currentIframe().document.getElementById('questionStepList');
        $(stepList).append(' <li title="滤池干燥机1关闭"><span class="item">' + (stepList.children.length + 22) + ' ,滤池干燥机1关闭</span></li>');
        Global.currentIframe().oTrain.operateStep.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "lvchiganzaoji1kaiguan",
            "opcname": "滤池干燥机1开/关",
            "opcvalue": "0",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        Global.currentIframe().oTrain.currentState.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "lvchiganzaoji1kaiguan",
            "opcname": "滤池干燥机1开/关",
            "opcvalue": "0",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        console.log(Global.currentIframe().oTrain.operateStep);
        Global.currentIframe().oTrain.showStepTip(stepList.children.length);
    });



    $('#lvchiganzaoji2kai').click(function() {
        $('#lvchiganzaoji2kaiguan').addClass('lvchiganzaoji2kaiguan-btn-on');
        $('#lvchiganzaoji2kaiguan').removeClass('lvchiganzaoji2kaiguan-btn-off');
        //
        var stepList = Global.currentIframe().document.getElementById('questionStepList');
        $(stepList).append(' <li title="滤池干燥机2打开"><span class="item">' + (stepList.children.length + 22) + ' ,滤池干燥机2打开</span></li>');
        Global.currentIframe().oTrain.operateStep.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "lvchiganzaoji2kaiguan",
            "opcname": "滤池干燥机2开/关",
            "opcvalue": "1",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        Global.currentIframe().oTrain.currentState.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "lvchiganzaoji2kaiguan",
            "opcname": "滤池干燥机2开/关",
            "opcvalue": "1",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        console.log(Global.currentIframe().oTrain.operateStep);
        Global.currentIframe().oTrain.showStepTip(stepList.children.length);
    });
    $('#lvchiganzaoji2guan').click(function() {
        $('#lvchiganzaoji2kaiguan').removeClass('lvchiganzaoji2kaiguan-btn-on');
        $('#lvchiganzaoji2kaiguan').addClass('lvchiganzaoji2kaiguan-btn-off');
        //
        var stepList = Global.currentIframe().document.getElementById('questionStepList');
        $(stepList).append(' <li title="滤池干燥机2关闭"><span class="item">' + (stepList.children.length + 22) + ' ,滤池干燥机2关闭</span></li>');
        Global.currentIframe().oTrain.operateStep.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "lvchiganzaoji2kaiguan",
            "opcname": "滤池干燥机2开/关",
            "opcvalue": "0",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        Global.currentIframe().oTrain.currentState.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "lvchiganzaoji2kaiguan",
            "opcname": "滤池干燥机2开/关",
            "opcvalue": "0",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        console.log(Global.currentIframe().oTrain.operateStep);
        Global.currentIframe().oTrain.showStepTip(stepList.children.length);
    });


    $('#qingshuichijialvfamenkai').click(function() {
        $('#qingshuichijialvfamenkaiguan').addClass('qingshuichijialvfamenkaiguan-btn-on');
        $('#qingshuichijialvfamenkaiguan').removeClass('qingshuichijialvfamenkaiguan-btn-off');
        //
        var stepList = Global.currentIframe().document.getElementById('questionStepList');
        $(stepList).append(' <li title="清水池自身水加氯阀门打开"><span class="item">' + (stepList.children.length + 22) + ' ,清水池自身水加氯阀门打开</span></li>');
        Global.currentIframe().oTrain.operateStep.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "qingshuichijialvfamenkaiguan",
            "opcname": "清水池自身水加氯阀门开/关",
            "opcvalue": "1",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        Global.currentIframe().oTrain.currentState.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "qingshuichijialvfamenkaiguan",
            "opcname": "清水池自身水加氯阀门开/关",
            "opcvalue": "1",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        console.log(Global.currentIframe().oTrain.operateStep);
        Global.currentIframe().oTrain.showStepTip(stepList.children.length);
    });
    $('#qingshuichijialvfamenguan').click(function() {
        $('#qingshuichijialvfamenkaiguan').addClass('qingshuichijialvfamenkaiguan-btn-off');
        $('#qingshuichijialvfamenkaiguan').removeClass('qingshuichijialvfamenkaiguan-btn-on');
        //
        var stepList = Global.currentIframe().document.getElementById('questionStepList');
        $(stepList).append(' <li title="清水池自身水加氯阀门关闭"><span class="item">' + (stepList.children.length + 22) + ' ,清水池自身水加氯阀门关闭</span></li>');
        Global.currentIframe().oTrain.operateStep.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "qingshuichijialvfamenkaiguan",
            "opcname": "清水池自身水加氯阀门开/关",
            "opcvalue": "0",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        Global.currentIframe().oTrain.currentState.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "qingshuichijialvfamenkaiguan",
            "opcname": "清水池自身水加氯阀门开/关",
            "opcvalue": "0",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        console.log(Global.currentIframe().oTrain.operateStep);
        Global.currentIframe().oTrain.showStepTip(stepList.children.length);
    });

    $('#jiayaojianzixibengfamen1kai').click(function() {
        $('#jiayaojianzixibengfamen1kaiguan').addClass('jiayaojianzixibengfamen1kaiguan-btn-on');
        $('#jiayaojianzixibengfamen1kaiguan').removeClass('jiayaojianzixibengfamen1kaiguan-btn-off');
        //
        var stepList = Global.currentIframe().document.getElementById('questionStepList');
        $(stepList).append(' <li title="加药间自吸泵阀门1打开"><span class="item">' + (stepList.children.length + 22) + ' ,加药间自吸泵阀门1打开</span></li>');
        Global.currentIframe().oTrain.operateStep.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "jiayaojianzixibengfamen1kaiguan",
            "opcname": "加药间自吸泵阀门1开/关",
            "opcvalue": "1",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        Global.currentIframe().oTrain.currentState.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "jiayaojianzixibengfamen1kaiguan",
            "opcname": "加药间自吸泵阀门1开/关",
            "opcvalue": "1",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        console.log(Global.currentIframe().oTrain.operateStep);
        Global.currentIframe().oTrain.showStepTip(stepList.children.length);
    });
    $('#jiayaojianzixibengfamen1guan').click(function() {
        $('#jiayaojianzixibengfamen1kaiguan').addClass('jiayaojianzixibengfamen1kaiguan-btn-off');
        $('#jiayaojianzixibengfamen1kaiguan').removeClass('jiayaojianzixibengfamen1kaiguan-btn-on');
        //
        var stepList = Global.currentIframe().document.getElementById('questionStepList');
        $(stepList).append(' <li title="加药间自吸泵阀门1关闭"><span class="item">' + (stepList.children.length + 22) + ' ,加药间自吸泵阀门1关闭</span></li>');
        Global.currentIframe().oTrain.operateStep.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "jiayaojianzixibengfamen1kaiguan",
            "opcname": "加药间自吸泵阀门1开/关",
            "opcvalue": "0",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        Global.currentIframe().oTrain.currentState.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "jiayaojianzixibengfamen1kaiguan",
            "opcname": "加药间自吸泵阀门1开/关",
            "opcvalue": "0",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        console.log(Global.currentIframe().oTrain.operateStep);
        Global.currentIframe().oTrain.showStepTip(stepList.children.length);
    });



    $('#jiayaojianzixibengfamen2kai').click(function() {
        $('#jiayaojianzixibengfamen2kaiguan').addClass('jiayaojianzixibengfamen2kaiguan-btn-on');
        $('#jiayaojianzixibengfamen2kaiguan').removeClass('jiayaojianzixibengfamen2kaiguan-btn-off');
        //
        var stepList = Global.currentIframe().document.getElementById('questionStepList');
        $(stepList).append(' <li title="加药间自吸泵阀门2打开"><span class="item">' + (stepList.children.length + 22) + ' ,加药间自吸泵阀门2打开</span></li>');
        Global.currentIframe().oTrain.operateStep.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "jiayaojianzixibengfamen2kaiguan",
            "opcname": "加药间自吸泵阀门2开/关",
            "opcvalue": "1",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        Global.currentIframe().oTrain.currentState.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "jiayaojianzixibengfamen2kaiguan",
            "opcname": "加药间自吸泵阀门2开/关",
            "opcvalue": "1",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        console.log(Global.currentIframe().oTrain.operateStep);
        Global.currentIframe().oTrain.showStepTip(stepList.children.length);
    });
    $('#jiayaojianzixibengfamen2guan').click(function() {
        $('#jiayaojianzixibengfamen2kaiguan').addClass('jiayaojianzixibengfamen2kaiguan-btn-off');
        $('#jiayaojianzixibengfamen2kaiguan').removeClass('jiayaojianzixibengfamen2kaiguan-btn-on');
        //
        var stepList = Global.currentIframe().document.getElementById('questionStepList');
        $(stepList).append(' <li title="加药间自吸泵阀门2关闭"><span class="item">' + (stepList.children.length + 22) + ' ,加药间自吸泵阀门2关闭</span></li>');
        Global.currentIframe().oTrain.operateStep.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "jiayaojianzixibengfamen2kaiguan",
            "opcname": "加药间自吸泵阀门2开/关",
            "opcvalue": "0",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        Global.currentIframe().oTrain.currentState.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "jiayaojianzixibengfamen2kaiguan",
            "opcname": "加药间自吸泵阀门2开/关",
            "opcvalue": "0",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        console.log(Global.currentIframe().oTrain.operateStep);
        Global.currentIframe().oTrain.showStepTip(stepList.children.length);
    });

    $('#jiayabengfamenkai').click(function() {
        $('#jiayabengfamenkaiguan').addClass('jiayabengfamenkaiguan-btn-on');
        $('#jiayabengfamenkaiguan').removeClass('jiayabengfamenkaiguan-btn-off');
        //
        var stepList = Global.currentIframe().document.getElementById('questionStepList');
        $(stepList).append(' <li title="加压泵阀门打开"><span class="item">' + (stepList.children.length + 22) + ' ,加压泵阀门打开</span></li>');
        Global.currentIframe().oTrain.operateStep.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "jiayabengfamenkaiguan",
            "opcname": "加压泵阀门开/关",
            "opcvalue": "1",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        Global.currentIframe().oTrain.currentState.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "jiayabengfamenkaiguan",
            "opcname": "加压泵阀门开/关",
            "opcvalue": "1",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        console.log(Global.currentIframe().oTrain.operateStep);
        Global.currentIframe().oTrain.showStepTip(stepList.children.length);
    });
    $('#jiayabengfamenguan').click(function() {
        $('#jiayabengfamenkaiguan').addClass('jiayabengfamenkaiguan-btn-off');
        $('#jiayabengfamenkaiguan').removeClass('jiayabengfamenkaiguan-btn-on');
        //
        var stepList = Global.currentIframe().document.getElementById('questionStepList');
        $(stepList).append(' <li title="加压泵阀门关闭"><span class="item">' + (stepList.children.length + 22) + ' ,加压泵阀门关闭</span></li>');
        Global.currentIframe().oTrain.operateStep.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "jiayabengfamenkaiguan",
            "opcname": "加压泵阀门开/关",
            "opcvalue": "0",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        Global.currentIframe().oTrain.currentState.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "jiayabengfamenkaiguan",
            "opcname": "加压泵阀门开/关",
            "opcvalue": "0",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        console.log(Global.currentIframe().oTrain.operateStep);
        Global.currentIframe().oTrain.showStepTip(stepList.children.length);
    });


    $('#jiayaojianpaiqifakai').click(function() {
        $('#jiayaojianpaiqifakaiguan').addClass('jiayaojianpaiqifakaiguan-btn-on');
        $('#jiayaojianpaiqifakaiguan').removeClass('jiayaojianpaiqifakaiguan-btn-off');
        //
        var stepList = Global.currentIframe().document.getElementById('questionStepList');
        $(stepList).append(' <li title="加药间排气阀打开"><span class="item">' + (stepList.children.length + 22) + ' ,加药间排气阀打开</span></li>');
        Global.currentIframe().oTrain.operateStep.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "jiayaojianpaiqifakaiguan",
            "opcname": "加药间排气阀开/关",
            "opcvalue": "1",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        Global.currentIframe().oTrain.currentState.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "jiayaojianpaiqifakaiguan",
            "opcname": "加药间排气阀开/关",
            "opcvalue": "1",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        console.log(Global.currentIframe().oTrain.operateStep);
        Global.currentIframe().oTrain.showStepTip(stepList.children.length);
    });
    $('#jiayaojianpaiqifaguan').click(function() {
        $('#jiayaojianpaiqifakaiguan').addClass('jiayaojianpaiqifakaiguan-btn-off');
        $('#jiayaojianpaiqifakaiguan').removeClass('jiayaojianpaiqifakaiguan-btn-on');
        //
        var stepList = Global.currentIframe().document.getElementById('questionStepList');
        $(stepList).append(' <li title="加药间排气阀关闭"><span class="item">' + (stepList.children.length + 22) + ' ,加药间排气阀关闭</span></li>');
        Global.currentIframe().oTrain.operateStep.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "jiayaojianpaiqifakaiguan",
            "opcname": "加药间排气阀开/关",
            "opcvalue": "0",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        Global.currentIframe().oTrain.currentState.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "jiayaojianpaiqifakaiguan",
            "opcname": "加药间排气阀开/关",
            "opcvalue": "0",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        console.log(Global.currentIframe().oTrain.operateStep);
        Global.currentIframe().oTrain.showStepTip(stepList.children.length);
    });

    $('#shuibenglianjiefakai').click(function() {
        $('#shuibenglianjiefakaiguan').addClass('shuibenglianjiefakaiguan-btn-on');
        $('#shuibenglianjiefakaiguan').removeClass('shuibenglianjiefakaiguan-btn-off');
        //
        var stepList = Global.currentIframe().document.getElementById('questionStepList');
        $(stepList).append(' <li title="水泵连接阀打开"><span class="item">' + (stepList.children.length + 22) + ' ,水泵连接阀打开</span></li>');
        Global.currentIframe().oTrain.operateStep.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "shuibenglianjiefakaiguan",
            "opcname": "水泵连接阀开/关",
            "opcvalue": "1",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        Global.currentIframe().oTrain.currentState.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "shuibenglianjiefakaiguan",
            "opcname": "水泵连接阀开/关",
            "opcvalue": "1",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        console.log(Global.currentIframe().oTrain.operateStep);
        Global.currentIframe().oTrain.showStepTip(stepList.children.length);
    });
    $('#shuibenglianjiefaguan').click(function() {
        $('#shuibenglianjiefakaiguan').addClass('shuibenglianjiefakaiguan-btn-off');
        $('#shuibenglianjiefakaiguan').removeClass('shuibenglianjiefakaiguan-btn-on');
        //
        var stepList = Global.currentIframe().document.getElementById('questionStepList');
        $(stepList).append(' <li title="水泵连接阀关闭"><span class="item">' + (stepList.children.length + 22) + ' ,水泵连接阀关闭</span></li>');
        Global.currentIframe().oTrain.operateStep.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "shuibenglianjiefakaiguan",
            "opcname": "水泵连接阀开/关",
            "opcvalue": "0",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        Global.currentIframe().oTrain.currentState.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "shuibenglianjiefakaiguan",
            "opcname": "水泵连接阀开/关",
            "opcvalue": "0",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        console.log(Global.currentIframe().oTrain.operateStep);
        Global.currentIframe().oTrain.showStepTip(stepList.children.length);
    });


    $('#shuibenglianjiefa2kai').click(function() {
        $('#shuibenglianjiefa2kaiguan').addClass('shuibenglianjiefa2kaiguan-btn-on');
        $('#shuibenglianjiefa2kaiguan').removeClass('shuibenglianjiefa2kaiguan-btn-off');
        //
        var stepList = Global.currentIframe().document.getElementById('questionStepList');
        $(stepList).append(' <li title="水泵连接阀2打开"><span class="item">' + (stepList.children.length + 22) + ' ,水泵连接阀2打开</span></li>');
        Global.currentIframe().oTrain.operateStep.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "shuibenglianjiefa2kaiguan",
            "opcname": "水泵连接阀2开/关",
            "opcvalue": "1",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        Global.currentIframe().oTrain.currentState.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "shuibenglianjiefa2kaiguan",
            "opcname": "水泵连接阀2开/关",
            "opcvalue": "1",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        console.log(Global.currentIframe().oTrain.operateStep);
        Global.currentIframe().oTrain.showStepTip(stepList.children.length);
    });
    $('#shuibenglianjiefa2guan').click(function() {
        $('#shuibenglianjiefa2kaiguan').addClass('shuibenglianjiefa2kaiguan-btn-off');
        $('#shuibenglianjiefa2kaiguan').removeClass('shuibenglianjiefa2kaiguan-btn-on');
        //
        var stepList = Global.currentIframe().document.getElementById('questionStepList');
        $(stepList).append(' <li title="水泵连接阀2关闭"><span class="item">' + (stepList.children.length + 22) + ' ,水泵连接阀2关闭</span></li>');
        Global.currentIframe().oTrain.operateStep.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "shuibenglianjiefa2kaiguan",
            "opcname": "水泵连接阀2开/关",
            "opcvalue": "0",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        Global.currentIframe().oTrain.currentState.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "shuibenglianjiefa2kaiguan",
            "opcname": "水泵连接阀2开/关",
            "opcvalue": "0",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        console.log(Global.currentIframe().oTrain.operateStep);
        Global.currentIframe().oTrain.showStepTip(stepList.children.length);
    });

    $('#jiayaobengfamen1kai').click(function() {
        $('#jiayaobengfamen1kaiguan').addClass('jiayaobengfamen1kaiguan-btn-on');
        $('#jiayaobengfamen1kaiguan').removeClass('jiayaobengfamen1kaiguan-btn-off');
        //
        var stepList = Global.currentIframe().document.getElementById('questionStepList');
        $(stepList).append(' <li title="加药泵阀门1打开"><span class="item">' + (stepList.children.length + 22) + ' ,加药泵阀门1打开</span></li>');
        Global.currentIframe().oTrain.operateStep.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "jiayaobengfamen1kaiguan",
            "opcname": "加药泵阀门1开/关",
            "opcvalue": "1",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        Global.currentIframe().oTrain.currentState.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "jiayaobengfamen1kaiguan",
            "opcname": "加药泵阀门1开/关",
            "opcvalue": "1",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        console.log(Global.currentIframe().oTrain.operateStep);
        Global.currentIframe().oTrain.showStepTip(stepList.children.length);
    });

    $('#jiayaobengfamen1guan').click(function() {
        $('#jiayaobengfamen1kaiguan').addClass('jiayaobengfamen1kaiguan-btn-off');
        $('#jiayaobengfamen1kaiguan').removeClass('jiayaobengfamen1kaiguan-btn-on');
        //
        var stepList = Global.currentIframe().document.getElementById('questionStepList');
        $(stepList).append(' <li title="加药泵阀门1关闭"><span class="item">' + (stepList.children.length + 22) + ' ,加药泵阀门1关闭</span></li>');
        Global.currentIframe().oTrain.operateStep.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "jiayaobengfamen1kaiguan",
            "opcname": "加药泵阀门1开/关",
            "opcvalue": "0",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        Global.currentIframe().oTrain.currentState.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "jiayaobengfamen1kaiguan",
            "opcname": "加药泵阀门1开/关",
            "opcvalue": "0",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        console.log(Global.currentIframe().oTrain.operateStep);
        Global.currentIframe().oTrain.showStepTip(stepList.children.length);
    });


    $('#jiayaobengfamen2kai').click(function() {
        $('#jiayaobengfamen2kaiguan').addClass('jiayaobengfamen2kaiguan-btn-on');
        $('#jiayaobengfamen2kaiguan').removeClass('jiayaobengfamen2kaiguan-btn-off');
        //
        var stepList = Global.currentIframe().document.getElementById('questionStepList');
        $(stepList).append(' <li title="加药泵阀门2打开"><span class="item">' + (stepList.children.length + 22) + ' ,加药泵阀门2打开</span></li>');
        Global.currentIframe().oTrain.operateStep.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "jiayaobengfamen2kaiguan",
            "opcname": "加药泵阀门2开/关",
            "opcvalue": "1",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        Global.currentIframe().oTrain.currentState.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "jiayaobengfamen2kaiguan",
            "opcname": "加药泵阀门2开/关",
            "opcvalue": "1",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        console.log(Global.currentIframe().oTrain.operateStep);
        Global.currentIframe().oTrain.showStepTip(stepList.children.length);
    });

    $('#jiayaobengfamen2guan').click(function() {
        $('#jiayaobengfamen2kaiguan').addClass('jiayaobengfamen2kaiguan-btn-off');
        $('#jiayaobengfamen2kaiguan').removeClass('jiayaobengfamen2kaiguan-btn-on');
        //
        var stepList = Global.currentIframe().document.getElementById('questionStepList');
        $(stepList).append(' <li title="加药泵阀门2关闭"><span class="item">' + (stepList.children.length + 22) + ' ,加药泵阀门2关闭</span></li>');
        Global.currentIframe().oTrain.operateStep.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "jiayaobengfamen2kaiguan",
            "opcname": "加药泵阀门2开/关",
            "opcvalue": "0",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        Global.currentIframe().oTrain.currentState.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "jiayaobengfamen2kaiguan",
            "opcname": "加药泵阀门2开/关",
            "opcvalue": "0",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        console.log(Global.currentIframe().oTrain.operateStep);
        Global.currentIframe().oTrain.showStepTip(stepList.children.length);
    });

    $('#shuichongbeng1kai').click(function() {
        $('#shuichongbeng1kai').addClass('shuichongbeng1kai-btn-on');

        $('#shuichongbeng1kai').removeClass('shuichongbeng1kai-btn-off');
        //
        var stepList = Global.currentIframe().document.getElementById('questionStepList');
        $(stepList).append(' <li title="水冲泵1打开"><span class="item">' + (stepList.children.length + 22) + ' ,加药泵阀门2关闭</span></li>');
        Global.currentIframe().oTrain.operateStep.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "shuichongbeng1kai",
            "opcname": "水冲泵1开",
            "opcvalue": "1",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        Global.currentIframe().oTrain.currentState.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "shuichongbeng1kai",
            "opcname": "水冲泵1开",
            "opcvalue": "1",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        console.log(Global.currentIframe().oTrain.operateStep);
        Global.currentIframe().oTrain.showStepTip(stepList.children.length);
    });
    $('#shuichongbeng1guan').click(function() {
        $('#shuichongbeng1kai').addClass('shuichongbeng1kai-btn-off');
        $('#shuichongbeng1kai').removeClass('shuichongbeng1kai-btn-on');
        //
        var stepList = Global.currentIframe().document.getElementById('questionStepList');
        $(stepList).append(' <li title="水冲泵1guan"><span class="item">' + (stepList.children.length + 22) + ' ,加药泵阀门2关闭</span></li>');
        Global.currentIframe().oTrain.operateStep.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "shuichongbeng1guan",
            "opcname": "水冲泵1关",
            "opcvalue": "1",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        Global.currentIframe().oTrain.currentState.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "shuichongbeng1kai",
            "opcname": "水冲泵1开",
            "opcvalue": "0",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });

        console.log(Global.currentIframe().oTrain.operateStep);
        Global.currentIframe().oTrain.showStepTip(stepList.children.length);
    });



    $('#shuichongbeng2kai').click(function() {
        $('#shuichongbeng2kai').addClass('shuichongbeng2kai-btn-on');

        $('#shuichongbeng2kai').removeClass('shuichongbeng2kai-btn-off');
        //
        var stepList = Global.currentIframe().document.getElementById('questionStepList');
        $(stepList).append(' <li title="水冲泵2打开"><span class="item">' + (stepList.children.length + 22) + ' ,加药泵阀门2关闭</span></li>');
        Global.currentIframe().oTrain.operateStep.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "shuichongbeng2kai",
            "opcname": "水冲泵2开",
            "opcvalue": "1",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        Global.currentIframe().oTrain.currentState.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "shuichongbeng2kai",
            "opcname": "水冲泵2开",
            "opcvalue": "1",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        console.log(Global.currentIframe().oTrain.operateStep);
        Global.currentIframe().oTrain.showStepTip(stepList.children.length);
    });

    $('#shuichongbeng2guan').click(function() {
        $('#shuichongbeng2kai').addClass('shuichongbeng2kai-btn-off');
        $('#shuichongbeng2kai').removeClass('shuichongbeng2kai-btn-on');
        //
        var stepList = Global.currentIframe().document.getElementById('questionStepList');
        $(stepList).append(' <li title="水冲泵2guan"><span class="item">' + (stepList.children.length + 22) + ' ,加药泵阀门2关闭</span></li>');
        Global.currentIframe().oTrain.operateStep.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "shuichongbeng2guan",
            "opcname": "水冲泵2关",
            "opcvalue": "1",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        Global.currentIframe().oTrain.currentState.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "shuichongbeng2kai",
            "opcname": "水冲泵2开",
            "opcvalue": "0",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });

        console.log(Global.currentIframe().oTrain.operateStep);
        Global.currentIframe().oTrain.showStepTip(stepList.children.length);
    });


    $('#gaoyasongshuibengkai').click(function() {
        $('#gaoyasongshuibengyunxing').addClass('gaoyasongshuibengyunxing-btn-on');
        $('#gaoyasongshuibengyunxing').removeClass('gaoyasongshuibengyunxing-btn-off');
        $('#gaoyasongshuibengtingzhi').addClass('gaoyasongshuibengtingzhi-btn-off');
        $('#gaoyasongshuibengtingzhi').removeClass('gaoyasongshuibengtingzhi-btn-on');
        //
        var stepList = Global.currentIframe().document.getElementById('questionStepList');
        $(stepList).append(' <li title="高压送水泵打开"><span class="item">' + (stepList.children.length + 22) + ' ,高压送水泵打开</span></li>');
        Global.currentIframe().oTrain.operateStep.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "gaoyasongshuibengkai",
            "opcname": "高压送水泵开",
            "opcvalue": "0",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });

        console.log(Global.currentIframe().oTrain.operateStep);
        Global.currentIframe().oTrain.showStepTip(stepList.children.length);
    });

    $('#gaoyasongshuibengguan').click(function() {
        $('#gaoyasongshuibengyunxing').removeClass('gaoyasongshuibengyunxing-btn-on');
        $('#gaoyasongshuibengyunxing').addClass('gaoyasongshuibengyunxing-btn-off');
        $('#gaoyasongshuibengtingzhi').removeClass('gaoyasongshuibengtingzhi-btn-off');
        $('#gaoyasongshuibengtingzhi').addClass('gaoyasongshuibengtingzhi-btn-on');
        //
        var stepList = Global.currentIframe().document.getElementById('questionStepList');
        $(stepList).append(' <li title="高压送水泵关闭"><span class="item">' + (stepList.children.length + 22) + ' ,高压送水泵关闭</span></li>');
        Global.currentIframe().oTrain.operateStep.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "gaoyasongshuibengguan",
            "opcname": "高压送水泵关",
            "opcvalue": "0",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });

        console.log(Global.currentIframe().oTrain.operateStep);
        Global.currentIframe().oTrain.showStepTip(stepList.children.length);
    });


    $('#gaoyasongshuibengxianchangjiudi').click(function() {
        var stepList = Global.currentIframe().document.getElementById('questionStepList');
        var classname = document.getElementById('gaoyasongshuibengxianchangjiudi').className;
        if (classname.indexOf('gaoyasongshuibengxianchangjiudi-btn-off') >= 0) {
            $('#gaoyasongshuibengxianchangjiudi').addClass('gaoyasongshuibengxianchangjiudi-btn-on');
            $('#gaoyasongshuibengxianchangjiudi').removeClass('gaoyasongshuibengxianchangjiudi-btn-off');
            $(stepList).append(' <li title="高压送水泵设置为就地"><span class="item">' + (stepList.children.length + 1) + ' ,高压送水泵设置为就地</span></li>');
            Global.currentIframe().oTrain.operateStep.push({
                "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
                "numbertype": "0",
                "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
                "opcid": "gaoyasongshuibengxianchangjiudi",
                "opcname": "高压送水泵现场/就地",
                "opcvalue": "1",
                "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
            });
            Global.currentIframe().oTrain.currentState.push({
                "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
                "numbertype": "0",
                "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
                "opcid": "gaoyasongshuibengxianchangjiudi",
                "opcname": "高压送水泵现场/就地",
                "opcvalue": "1",
                "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
            });
        } else {
            $('#gaoyasongshuibengxianchangjiudi').addClass('gaoyasongshuibengxianchangjiudi-btn-off');
            $('#gaoyasongshuibengxianchangjiudi').removeClass('gaoyasongshuibengxianchangjiudi-btn-on');
            $(stepList).append(' <li title="高压送水泵设置为现场"><span class="item">' + (stepList.children.length + 1) + ' ,高压送水泵设置为现场</span></li>');
            Global.currentIframe().oTrain.operateStep.push({
                "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
                "numbertype": "0",
                "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
                "opcid": "gaoyasongshuibengxianchangjiudi",
                "opcname": "高压送水泵现场/就地",
                "opcvalue": "0",
                "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
            });
            Global.currentIframe().oTrain.currentState.push({
                "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
                "numbertype": "0",
                "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
                "opcid": "gaoyasongshuibengxianchangjiudi",
                "opcname": "高压送水泵现场/就地",
                "opcvalue": "0",
                "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
            });
        }
        console.log(Global.currentIframe().oTrain.operateStep);
        Global.currentIframe().oTrain.showStepTip(stepList.children.length);
    });


    $('#gaoyasongshuibengfamenkai').click(function() {
        $('#gaoyasongshuibengfamenyunxing').addClass('gaoyasongshuibengfamenyunxing-btn-on');
        $('#gaoyasongshuibengfamenyunxing').removeClass('gaoyasongshuibengfamenyunxing-btn-off');
        $('#gaoyasongshuibengfamentingzhi').addClass('gaoyasongshuibengfamentingzhi-btn-off');
        $('#gaoyasongshuibengfamentingzhi').removeClass('gaoyasongshuibengfamentingzhi-btn-on');
        //
        var stepList = Global.currentIframe().document.getElementById('questionStepList');
        $(stepList).append(' <li title="高压送水泵阀门打开"><span class="item">' + (stepList.children.length + 22) + ' ,高压送水泵阀门打开</span></li>');
        Global.currentIframe().oTrain.operateStep.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "gaoyasongshuibengfamenkai",
            "opcname": "高压送水泵阀门开",
            "opcvalue": "0",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });

        console.log(Global.currentIframe().oTrain.operateStep);
        Global.currentIframe().oTrain.showStepTip(stepList.children.length);
    });

    $('#gaoyasongshuibengfamenguan').click(function() {
        $('#gaoyasongshuibengfamenyunxing').removeClass('gaoyasongshuibengfamenyunxing-btn-on');
        $('#gaoyasongshuibengfamenyunxing').addClass('gaoyasongshuibengfamenyunxing-btn-off');
        $('#gaoyasongshuibengfamentingzhi').removeClass('gaoyasongshuibengfamentingzhi-btn-off');
        $('#gaoyasongshuibengfamentingzhi').addClass('gaoyasongshuibengfamentingzhi-btn-on');
        //
        var stepList = Global.currentIframe().document.getElementById('questionStepList');
        $(stepList).append(' <li title="高压送水泵阀门关闭"><span class="item">' + (stepList.children.length + 22) + ' ,高压送水泵阀门关闭</span></li>');
        Global.currentIframe().oTrain.operateStep.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "gaoyasongshuibengfamenguan",
            "opcname": "高压送水泵阀门关",
            "opcvalue": "0",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });

        console.log(Global.currentIframe().oTrain.operateStep);
        Global.currentIframe().oTrain.showStepTip(stepList.children.length);
    });


    $('#gaoyasongshuibengfamenxianchangjiudi').click(function() {
        var stepList = Global.currentIframe().document.getElementById('questionStepList');
        var classname = document.getElementById('gaoyasongshuibengfamenxianchangjiudi').className;
        if (classname.indexOf('gaoyasongshuibengfamenxianchangjiudi-btn-off') >= 0) {
            $('#gaoyasongshuibengfamenxianchangjiudi').addClass('gaoyasongshuibengfamenxianchangjiudi-btn-on');
            $('#gaoyasongshuibengfamenxianchangjiudi').removeClass('gaoyasongshuibengfamenxianchangjiudi-btn-off');
            $(stepList).append(' <li title="高压送水泵阀门设置为远程"><span class="item">' + (stepList.children.length + 1) + ' ,高压送水泵阀门设置为远程</span></li>');
            Global.currentIframe().oTrain.operateStep.push({
                "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
                "numbertype": "0",
                "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
                "opcid": "gaoyasongshuibengfamenxianchangjiudi",
                "opcname": "高压送水泵阀门就地/远程",
                "opcvalue": "1",
                "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
            });
            Global.currentIframe().oTrain.currentState.push({
                "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
                "numbertype": "0",
                "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
                "opcid": "gaoyasongshuibengfamenxianchangjiudi",
                "opcname": "高压送水泵阀门就地/远程",
                "opcvalue": "1",
                "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
            });
        } else {
            $('#gaoyasongshuibengfamenxianchangjiudi').addClass('gaoyasongshuibengfamenxianchangjiudi-btn-off');
            $('#gaoyasongshuibengfamenxianchangjiudi').removeClass('gaoyasongshuibengfamenxianchangjiudi-btn-on');
            $(stepList).append(' <li title="高压送水泵阀门设置为就地"><span class="item">' + (stepList.children.length + 1) + ' ,高压送水泵阀门设置为就地</span></li>');
            Global.currentIframe().oTrain.operateStep.push({
                "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
                "numbertype": "0",
                "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
                "opcid": "gaoyasongshuibengfamenxianchangjiudi",
                "opcname": "高压送水泵阀门就地/远程",
                "opcvalue": "0",
                "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
            });
            Global.currentIframe().oTrain.currentState.push({
                "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
                "numbertype": "0",
                "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
                "opcid": "gaoyasongshuibengfamenxianchangjiudi",
                "opcname": "高压送水泵阀门就地/远程",
                "opcvalue": "0",
                "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
            });
        }
        console.log(Global.currentIframe().oTrain.operateStep);
        Global.currentIframe().oTrain.showStepTip(stepList.children.length);
    });



    $('#ganzaoji2famen1kai').click(function() {
        $('#ganzaoji2famen1kaiguan').addClass('ganzaoji2famen1kaiguan-btn-on');
        $('#ganzaoji2famen1kaiguan').removeClass('ganzaoji2famen1kaiguan-btn-off');
        //
        var stepList = Global.currentIframe().document.getElementById('questionStepList');
        $(stepList).append(' <li title="干燥机2阀门1打开"><span class="item">' + (stepList.children.length + 22) + ' ,干燥机2阀门1打开</span></li>');
        Global.currentIframe().oTrain.operateStep.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "ganzaoji2famen1kaiguan",
            "opcname": "干燥机2阀门1开/关",
            "opcvalue": "1",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        Global.currentIframe().oTrain.currentState.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "ganzaoji2famen1kaiguan",
            "opcname": "干燥机2阀门1开/关",
            "opcvalue": "1",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        console.log(Global.currentIframe().oTrain.operateStep);
        Global.currentIframe().oTrain.showStepTip(stepList.children.length);
    });

    $('#ganzaoji2famen1guan').click(function() {
        $('#ganzaoji2famen1kaiguan').addClass('ganzaoji2famen1kaiguan-btn-off');
        $('#ganzaoji2famen1kaiguan').removeClass('ganzaoji2famen1kaiguan-btn-on');
        //
        var stepList = Global.currentIframe().document.getElementById('questionStepList');
        $(stepList).append(' <li title="干燥机2阀门1关闭"><span class="item">' + (stepList.children.length + 22) + ' ,干燥机2阀门1关闭</span></li>');
        Global.currentIframe().oTrain.operateStep.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "ganzaoji2famen1kaiguan",
            "opcname": "干燥机2阀门1开/关",
            "opcvalue": "0",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        Global.currentIframe().oTrain.currentState.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "ganzaoji2famen1kaiguan",
            "opcname": "干燥机2阀门1开/关",
            "opcvalue": "0",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        console.log(Global.currentIframe().oTrain.operateStep);
        Global.currentIframe().oTrain.showStepTip(stepList.children.length);
    });



    $('#ganzaoji2paiqikai').click(function() {
        $('#ganzaoji2paiqikaiguan').addClass('ganzaoji2paiqikaiguan-btn-on');
        $('#ganzaoji2paiqikaiguan').removeClass('ganzaoji2paiqikaiguan-btn-off');
        //
        var stepList = Global.currentIframe().document.getElementById('questionStepList');
        $(stepList).append(' <li title="干燥机2排气装置打开"><span class="item">' + (stepList.children.length + 22) + ' ,干燥机2排气装置打开</span></li>');
        Global.currentIframe().oTrain.operateStep.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "ganzaoji2paiqikaiguan",
            "opcname": "干燥机2排气装置开/关",
            "opcvalue": "1",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        Global.currentIframe().oTrain.currentState.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "ganzaoji2paiqikaiguan",
            "opcname": "干燥机2排气装置开/关",
            "opcvalue": "1",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        console.log(Global.currentIframe().oTrain.operateStep);
        Global.currentIframe().oTrain.showStepTip(stepList.children.length);
    });

    $('#ganzaoji2paiqiguan').click(function() {
        $('#ganzaoji2paiqikaiguan').addClass('ganzaoji2paiqikaiguan-btn-off');
        $('#ganzaoji2paiqikaiguan').removeClass('ganzaoji2paiqikaiguan-btn-on');
        //
        var stepList = Global.currentIframe().document.getElementById('questionStepList');
        $(stepList).append(' <li title="干燥机2排气装置关闭"><span class="item">' + (stepList.children.length + 22) + ' ,干燥机2排气装置关闭</span></li>');
        Global.currentIframe().oTrain.operateStep.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "ganzaoji2paiqikaiguan",
            "opcname": "干燥机2排气装置开/关",
            "opcvalue": "0",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        Global.currentIframe().oTrain.currentState.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "ganzaoji2paiqikaiguan",
            "opcname": "干燥机2排气装置开/关",
            "opcvalue": "0",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        console.log(Global.currentIframe().oTrain.operateStep);
        Global.currentIframe().oTrain.showStepTip(stepList.children.length);
    });



    $('#ganzaoji2famen2kai').click(function() {
        $('#ganzaoji2famen2kaiguan').addClass('ganzaoji2famen2kaiguan-btn-on');
        $('#ganzaoji2famen2kaiguan').removeClass('ganzaoji2famen2kaiguan-btn-off');
        //
        var stepList = Global.currentIframe().document.getElementById('questionStepList');
        $(stepList).append(' <li title="干燥机2阀门2打开"><span class="item">' + (stepList.children.length + 22) + ' ,干燥机2阀门2打开</span></li>');
        Global.currentIframe().oTrain.operateStep.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "ganzaoji2famen2kaiguan",
            "opcname": "干燥机2阀门2开/关",
            "opcvalue": "1",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        Global.currentIframe().oTrain.currentState.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "ganzaoji2famen2kaiguan",
            "opcname": "干燥机2阀门2开/关",
            "opcvalue": "1",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        console.log(Global.currentIframe().oTrain.operateStep);
        Global.currentIframe().oTrain.showStepTip(stepList.children.length);
    });

    $('#ganzaoji2famen2guan').click(function() {
        $('#ganzaoji2famen2kaiguan').addClass('ganzaoji2famen2kaiguan-btn-off');
        $('#ganzaoji2famen2kaiguan').removeClass('ganzaoji2famen2kaiguan-btn-on');
        //
        var stepList = Global.currentIframe().document.getElementById('questionStepList');
        $(stepList).append(' <li title="干燥机2阀门2关闭"><span class="item">' + (stepList.children.length + 22) + ' ,干燥机2阀门2关闭</span></li>');
        Global.currentIframe().oTrain.operateStep.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "ganzaoji2famen2kaiguan",
            "opcname": "干燥机2阀门2开/关",
            "opcvalue": "0",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        Global.currentIframe().oTrain.currentState.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "ganzaoji2famen2kaiguan",
            "opcname": "干燥机2阀门2开/关",
            "opcvalue": "0",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        console.log(Global.currentIframe().oTrain.operateStep);
        Global.currentIframe().oTrain.showStepTip(stepList.children.length);
    });

    $('#ganzaoji1famen1kai').click(function() {
        $('#ganzaoji1famen1kaiguan').addClass('ganzaoji1famen1kaiguan-btn-on');
        $('#ganzaoji1famen1kaiguan').removeClass('ganzaoji1famen1kaiguan-btn-off');
        //
        var stepList = Global.currentIframe().document.getElementById('questionStepList');
        $(stepList).append(' <li title="干燥机1阀门1打开"><span class="item">' + (stepList.children.length + 22) + ' ,干燥机1阀门1打开</span></li>');
        Global.currentIframe().oTrain.operateStep.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "ganzaoji1famen1kaiguan",
            "opcname": "干燥机1阀门1开/关",
            "opcvalue": "1",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        Global.currentIframe().oTrain.currentState.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "ganzaoji1famen1kaiguan",
            "opcname": "干燥机1阀门1开/关",
            "opcvalue": "1",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        console.log(Global.currentIframe().oTrain.operateStep);
        Global.currentIframe().oTrain.showStepTip(stepList.children.length);
    });

    $('#ganzaoji1famen1guan').click(function() {
        $('#ganzaoji1famen1kaiguan').addClass('ganzaoji1famen1kaiguan-btn-off');
        $('#ganzaoji1famen1kaiguan').removeClass('ganzaoji1famen1kaiguan-btn-on');
        //
        var stepList = Global.currentIframe().document.getElementById('questionStepList');
        $(stepList).append(' <li title="干燥机1阀门1关闭"><span class="item">' + (stepList.children.length + 22) + ' ,干燥机1阀门1关闭</span></li>');
        Global.currentIframe().oTrain.operateStep.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "ganzaoji1famen1kaiguan",
            "opcname": "干燥机1阀门1开/关",
            "opcvalue": "0",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        Global.currentIframe().oTrain.currentState.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "ganzaoji1famen1kaiguan",
            "opcname": "干燥机1阀门1开/关",
            "opcvalue": "0",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        console.log(Global.currentIframe().oTrain.operateStep);
        Global.currentIframe().oTrain.showStepTip(stepList.children.length);
    });



    $('#houjialvfamen1kai').click(function() {
        $('#houjialvfamen1kaiguan').addClass('houjialvfamen1kaiguan-btn-on');
        $('#houjialvfamen1kaiguan').removeClass('houjialvfamen1kaiguan-btn-off');
        //
        var stepList = Global.currentIframe().document.getElementById('questionStepList');
        $(stepList).append(' <li title="后加氯阀门1打开"><span class="item">' + (stepList.children.length + 22) + ' ,后加氯阀门1打开</span></li>');
        Global.currentIframe().oTrain.operateStep.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "houjialvfamen1kaiguan",
            "opcname": "后加氯阀门1开/关",
            "opcvalue": "1",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        Global.currentIframe().oTrain.currentState.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "houjialvfamen1kaiguan",
            "opcname": "后加氯阀门1开/关",
            "opcvalue": "1",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        console.log(Global.currentIframe().oTrain.operateStep);
        Global.currentIframe().oTrain.showStepTip(stepList.children.length);
    });

    $('#houjialvfamen1guan').click(function() {
        $('#houjialvfamen1kaiguan').addClass('houjialvfamen1kaiguan-btn-off');
        $('#houjialvfamen1kaiguan').removeClass('houjialvfamen1kaiguan-btn-on');
        //
        var stepList = Global.currentIframe().document.getElementById('questionStepList');
        $(stepList).append(' <li title="后加氯阀门1关闭"><span class="item">' + (stepList.children.length + 22) + ' ,后加氯阀门1关闭</span></li>');
        Global.currentIframe().oTrain.operateStep.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "houjialvfamen1kaiguan",
            "opcname": "后加氯阀门1开/关",
            "opcvalue": "0",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        Global.currentIframe().oTrain.currentState.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "houjialvfamen1kaiguan",
            "opcname": "后加氯阀门1开/关",
            "opcvalue": "0",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        console.log(Global.currentIframe().oTrain.operateStep);
        Global.currentIframe().oTrain.showStepTip(stepList.children.length);
    });


    $('#houjialvfamen2kai').click(function() {
        $('#houjialvfamen2kaiguan').addClass('houjialvfamen2kaiguan-btn-on');
        $('#houjialvfamen2kaiguan').removeClass('houjialvfamen2kaiguan-btn-off');
        //
        var stepList = Global.currentIframe().document.getElementById('questionStepList');
        $(stepList).append(' <li title="后加氯阀门2打开"><span class="item">' + (stepList.children.length + 22) + ' ,后加氯阀门2打开</span></li>');
        Global.currentIframe().oTrain.operateStep.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "houjialvfamen2kaiguan",
            "opcname": "后加氯阀门2开/关",
            "opcvalue": "1",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        Global.currentIframe().oTrain.currentState.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "houjialvfamen2kaiguan",
            "opcname": "后加氯阀门2开/关",
            "opcvalue": "1",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        console.log(Global.currentIframe().oTrain.operateStep);
        Global.currentIframe().oTrain.showStepTip(stepList.children.length);
    });

    $('#houjialvfamen2guan').click(function() {
        $('#houjialvfamen2kaiguan').addClass('houjialvfamen2kaiguan-btn-off');
        $('#houjialvfamen2kaiguan').removeClass('houjialvfamen2kaiguan-btn-on');
        //
        var stepList = Global.currentIframe().document.getElementById('questionStepList');
        $(stepList).append(' <li title="后加氯阀门2关闭"><span class="item">' + (stepList.children.length + 22) + ' ,后加氯阀门2关闭</span></li>');
        Global.currentIframe().oTrain.operateStep.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "houjialvfamen2kaiguan",
            "opcname": "后加氯阀门2开/关",
            "opcvalue": "0",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        Global.currentIframe().oTrain.currentState.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "houjialvfamen2kaiguan",
            "opcname": "后加氯阀门2开/关",
            "opcvalue": "0",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        console.log(Global.currentIframe().oTrain.operateStep);
        Global.currentIframe().oTrain.showStepTip(stepList.children.length);
    });


    $('#houjialvfamen3kai').click(function() {
        $('#houjialvfamen3kaiguan').addClass('houjialvfamen3kaiguan-btn-on');
        $('#houjialvfamen3kaiguan').removeClass('houjialvfamen3kaiguan-btn-off');
        //
        var stepList = Global.currentIframe().document.getElementById('questionStepList');
        $(stepList).append(' <li title="后加氯阀门3打开"><span class="item">' + (stepList.children.length + 22) + ' ,后加氯阀门3打开</span></li>');
        Global.currentIframe().oTrain.operateStep.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "houjialvfamen3kaiguan",
            "opcname": "后加氯阀门3开/关",
            "opcvalue": "1",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        Global.currentIframe().oTrain.currentState.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "houjialvfamen3kaiguan",
            "opcname": "后加氯阀门3开/关",
            "opcvalue": "1",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        console.log(Global.currentIframe().oTrain.operateStep);
        Global.currentIframe().oTrain.showStepTip(stepList.children.length);
    });

    $('#houjialvfamen3guan').click(function() {
        $('#houjialvfamen3kaiguan').addClass('houjialvfamen3kaiguan-btn-off');
        $('#houjialvfamen3kaiguan').removeClass('houjialvfamen3kaiguan-btn-on');
        //
        var stepList = Global.currentIframe().document.getElementById('questionStepList');
        $(stepList).append(' <li title="后加氯阀门3关闭"><span class="item">' + (stepList.children.length + 22) + ' ,后加氯阀门3关闭</span></li>');
        Global.currentIframe().oTrain.operateStep.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "houjialvfamen3kaiguan",
            "opcname": "后加氯阀门3开/关",
            "opcvalue": "0",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        Global.currentIframe().oTrain.currentState.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "houjialvfamen3kaiguan",
            "opcname": "后加氯阀门3开/关",
            "opcvalue": "0",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        console.log(Global.currentIframe().oTrain.operateStep);
        Global.currentIframe().oTrain.showStepTip(stepList.children.length);
    });


    $('#houjialvfamen4kai').click(function() {
        $('#houjialvfamen4kaiguan').addClass('houjialvfamen4kaiguan-btn-on');
        $('#houjialvfamen4kaiguan').removeClass('houjialvfamen4kaiguan-btn-off');
        //
        var stepList = Global.currentIframe().document.getElementById('questionStepList');
        $(stepList).append(' <li title="后加氯阀门4打开"><span class="item">' + (stepList.children.length + 22) + ' ,后加氯阀门4打开</span></li>');
        Global.currentIframe().oTrain.operateStep.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "houjialvfamen4kaiguan",
            "opcname": "后加氯阀门4开/关",
            "opcvalue": "1",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        Global.currentIframe().oTrain.currentState.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "houjialvfamen4kaiguan",
            "opcname": "后加氯阀门4开/关",
            "opcvalue": "1",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        console.log(Global.currentIframe().oTrain.operateStep);
        Global.currentIframe().oTrain.showStepTip(stepList.children.length);
    });

    $('#houjialvfamen4guan').click(function() {
        $('#houjialvfamen4kaiguan').addClass('houjialvfamen4kaiguan-btn-off');
        $('#houjialvfamen4kaiguan').removeClass('houjialvfamen4kaiguan-btn-on');
        //
        var stepList = Global.currentIframe().document.getElementById('questionStepList');
        $(stepList).append(' <li title="后加氯阀门4关闭"><span class="item">' + (stepList.children.length + 22) + ' ,后加氯阀门4关闭</span></li>');
        Global.currentIframe().oTrain.operateStep.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "houjialvfamen4kaiguan",
            "opcname": "后加氯阀门4开/关",
            "opcvalue": "0",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        Global.currentIframe().oTrain.currentState.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "houjialvfamen4kaiguan",
            "opcname": "后加氯阀门4开/关",
            "opcvalue": "0",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        console.log(Global.currentIframe().oTrain.operateStep);
        Global.currentIframe().oTrain.showStepTip(stepList.children.length);
    });


    $('#houjialvfamen5kai').click(function() {
        $('#houjialvfamen5kaiguan').addClass('houjialvfamen5kaiguan-btn-on');
        $('#houjialvfamen5kaiguan').removeClass('houjialvfamen5kaiguan-btn-off');
        //
        var stepList = Global.currentIframe().document.getElementById('questionStepList');
        $(stepList).append(' <li title="后加氯阀门5打开"><span class="item">' + (stepList.children.length + 22) + ' ,后加氯阀门5打开</span></li>');
        Global.currentIframe().oTrain.operateStep.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "houjialvfamen5kaiguan",
            "opcname": "后加氯阀门5开/关",
            "opcvalue": "1",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        Global.currentIframe().oTrain.currentState.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "houjialvfamen5kaiguan",
            "opcname": "后加氯阀门5开/关",
            "opcvalue": "1",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        console.log(Global.currentIframe().oTrain.operateStep);
        Global.currentIframe().oTrain.showStepTip(stepList.children.length);
    });

    $('#houjialvfamen5guan').click(function() {
        $('#houjialvfamen5kaiguan').addClass('houjialvfamen5kaiguan-btn-off');
        $('#houjialvfamen5kaiguan').removeClass('houjialvfamen5kaiguan-btn-on');
        //
        var stepList = Global.currentIframe().document.getElementById('questionStepList');
        $(stepList).append(' <li title="后加氯阀门5关闭"><span class="item">' + (stepList.children.length + 22) + ' ,后加氯阀门5关闭</span></li>');
        Global.currentIframe().oTrain.operateStep.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "houjialvfamen5kaiguan",
            "opcname": "后加氯阀门5开/关",
            "opcvalue": "0",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        Global.currentIframe().oTrain.currentState.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "houjialvfamen5kaiguan",
            "opcname": "后加氯阀门5开/关",
            "opcvalue": "0",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        console.log(Global.currentIframe().oTrain.operateStep);
        Global.currentIframe().oTrain.showStepTip(stepList.children.length);
    });

    $('#ganzaoji1famen2kai').click(function() {
        $('#ganzaoji1famen2kaiguan').addClass('ganzaoji1famen2kaiguan-btn-on');
        $('#ganzaoji1famen2kaiguan').removeClass('ganzaoji1famen2kaiguan-btn-off');
        //
        var stepList = Global.currentIframe().document.getElementById('questionStepList');
        $(stepList).append(' <li title="干燥机1阀门2打开"><span class="item">' + (stepList.children.length + 22) + ' ,干燥机1阀门2打开</span></li>');
        Global.currentIframe().oTrain.operateStep.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "ganzaoji1famen2kaiguan",
            "opcname": "干燥机1阀门2开/关",
            "opcvalue": "1",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        Global.currentIframe().oTrain.currentState.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "ganzaoji1famen2kaiguan",
            "opcname": "干燥机1阀门2开/关",
            "opcvalue": "1",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        console.log(Global.currentIframe().oTrain.operateStep);
        Global.currentIframe().oTrain.showStepTip(stepList.children.length);
    });

    $('#ganzaoji1famen2guan').click(function() {
        $('#ganzaoji1famen2kaiguan').addClass('ganzaoji1famen2kaiguan-btn-off');
        $('#ganzaoji1famen2kaiguan').removeClass('ganzaoji1famen2kaiguan-btn-on');
        //
        var stepList = Global.currentIframe().document.getElementById('questionStepList');
        $(stepList).append(' <li title="干燥机1阀门2关闭"><span class="item">' + (stepList.children.length + 22) + ' ,干燥机1阀门2关闭</span></li>');
        Global.currentIframe().oTrain.operateStep.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "ganzaoji1famen2kaiguan",
            "opcname": "干燥机1阀门2开/关",
            "opcvalue": "0",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        Global.currentIframe().oTrain.currentState.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "ganzaoji1famen2kaiguan",
            "opcname": "干燥机1阀门2开/关",
            "opcvalue": "0",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        console.log(Global.currentIframe().oTrain.operateStep);
        Global.currentIframe().oTrain.showStepTip(stepList.children.length);
    });

    $('#ganzaoji1paiqikai').click(function() {
        $('#ganzaoji1paiqikaiguan').addClass('ganzaoji1paiqikaiguan-btn-on');
        $('#ganzaoji1paiqikaiguan').removeClass('ganzaoji1paiqikaiguan-btn-off');
        //
        var stepList = Global.currentIframe().document.getElementById('questionStepList');
        $(stepList).append(' <li title="干燥机1排气打开"><span class="item">' + (stepList.children.length + 22) + ' ,干燥机1排气打开</span></li>');
        Global.currentIframe().oTrain.operateStep.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "ganzaoji1paiqikaiguan",
            "opcname": "干燥机1排气开/关",
            "opcvalue": "1",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        Global.currentIframe().oTrain.currentState.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "ganzaoji1paiqikaiguan",
            "opcname": "干燥机1排气开/关",
            "opcvalue": "1",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        console.log(Global.currentIframe().oTrain.operateStep);
        Global.currentIframe().oTrain.showStepTip(stepList.children.length);
    });

    $('#ganzaoji1paiqiguan').click(function() {
        $('#ganzaoji1paiqikaiguan').addClass('ganzaoji1paiqikaiguan-btn-off');
        $('#ganzaoji1paiqikaiguan').removeClass('ganzaoji1paiqikaiguan-btn-on');
        //
        var stepList = Global.currentIframe().document.getElementById('questionStepList');
        $(stepList).append(' <li title="干燥机1排气关闭"><span class="item">' + (stepList.children.length + 22) + ' ,干燥机1排气关闭</span></li>');
        Global.currentIframe().oTrain.operateStep.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "ganzaoji1paiqikaiguan",
            "opcname": "干燥机1排气开/关",
            "opcvalue": "0",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        Global.currentIframe().oTrain.currentState.push({
            "assemblyguid": "08852641-254a-4ecf-a5de-103f292462b2",
            "numbertype": "0",
            "opcdwguid": "6c242a39-ee93-49d2-8e73-e4160d831bb7",
            "opcid": "ganzaoji1paiqikaiguan",
            "opcname": "干燥机1排气开/关",
            "opcvalue": "0",
            "subsystemguid": "d695382f-22f8-4f43-8036-bc507cd12cc3"
        });
        console.log(Global.currentIframe().oTrain.operateStep);
        Global.currentIframe().oTrain.showStepTip(stepList.children.length);
    });

})