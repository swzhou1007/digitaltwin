var FunItems = null;
var CurrItemData = null;
var currAllViewName = "zlz";

var CurrNodeID = "";
var currFunItemCodes = "";
var LastGetDataTime = new Date();
var urlpath = "";
var points = ['反冲洗用房', '反冲洗水泵', '排泥池', '污泥池', '一期沉淀池1', '一期沉淀池3', '送水泵房1', '送水泵房2', '停车场', '综合楼', '综合楼十字路口', '反冲洗廊房', '反冲洗房路口', '回用水池', '一期1_2号滤池', '一期3_4号滤池', '脱水机房', '脱水机房路口', '一期沉淀池2', '低压配电室', '高压配电室', '送水变频柜', '二期5_6号滤池', '二期7_8号滤池', '加药车间', '加药控制室', '加氯车间', '加药加氯间', '二期沉淀池1', '二期沉淀池2', '二期沉淀池3'];
var pointsurl = ['node10', 'node9', 'node17', 'node24', 'node27', 'node29', 'node18', 'node19', 'node21', 'node30', 'node31', 'node8', 'node7', 'node12', 'node25', 'node26', 'node22', 'node23', 'node28', 'node1', 'node11', 'node20', 'node2', 'node3', 'node14', 'node16', 'node13', 'node15', 'node4', 'node5', 'node6'];

/** 格式化输入字符串**/

//用法: "hello{0}".format('world')；返回'hello world'

String.prototype.format = function() {

    var args = arguments;

    return this.replace(/\{(\d+)\}/g, function(s, i) {

        return args[i];

    });

}
function GetNodeId() {
    IniTabFloor();
    //GetOPCFunName();
}


function IniTabFloor() {

    var html = '';
    for (var i = 0; i < 31; i++) {
        html += '<li value="' + i + '"  ><i class="fa-off" ></i><label style="width:100px;float:left;">' + points[i] + '</label></li>';
    }

    $("#cb_floorList").html(html);
	$('.floorList li').each(function(index){
		if(index==0){
			 $(this).addClass('on');	
		}
	})


}

function closeList(){
	$('#mapleft').hide()
	$('#showFloorList').show()
}
function showList(){
	$('#mapleft').show()
	$('#showFloorList').hide()
}

function bindFloor() {
    $('.floorList li').click(function() {
        if (!$(this).hasClass('on')) {
            var allel = '#' + $(this).parent().attr("id") + ' li';
            var alleli = '#' + $(this).parent().attr("id") + ' li i';
			
            $(allel).removeClass('on');
            $(alleli).removeClass('fa-on');
            $(alleli).addClass('fa-off');
            $(this).find('i').removeClass('fa-off');
            $(this).find('i').addClass('fa-on');
            $(this).addClass('on');			
			console.log($(this).val())
            pano.openUrl('{' + pointsurl[$(this).val()] + '}', '_self')
			var text=$(this).text();
			window.parent.document.getElementById('allViewName').innerText=' ('+text+')';
        }
    });

}
$(function() {
    InitialPage();
    IniTabFloor();
    bindFloor();
});
//初始化页面
function InitialPage() {
    //resize重设布局;
    $(window).resize(function(e) {
        layout();
        e.stopPropagation();
    });
    layout();
}

function layout() {
    heigh = $(document.body).height();
    width = $(document.body).width();
    if (heigh < 850) heigh = 850;
    if (width < 1360) width = 1360;
    var w = 210;

    // $("#container").width((width - w) + "px");

    //   var t = heigh / 2 - 335;

    //   $("#mapmain").width(width + "px");
    //   $("#mapmain").height(heigh + "px");

    $("#mapleft").css("right", "10px");
    $("#mapleft").width(w + "px");
    $(".floorList").width(w + "px");
    $("#mapleft").height((heigh-330) + "px");
    $(".floorList").height((heigh-317) + "px");
	
	
	
	
    //   $("#mapright").css("top", t + "px");
    //$("#maptop").css("left", (width - 350) + "px");
    //   $("#mapleft").css("top", t + "px");
    //   $("#maptop").css("width", width + "px");

    //   $("#mapbottom ").css("top", "0px");
    //   $("#mapbottom ").css("width", width + "px");


    //    $("#mapbottom ").css("top", (heigh - 104) + "px");
    //   $("#mapbottom ").css("width", width + "px");
    //   $("#bimframe").height((heigh-180) + "px");

    //   var tl = width / 2 -138;
    //    $(".top_title").css("left", tl + "px");

    //   $(".top_date").css("margin-left", (width-550) + "px");
}
