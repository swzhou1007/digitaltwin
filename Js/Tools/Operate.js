oPerate = {
    createOperateEvents: function() {
        var viewer = oDefault.viewer;
        //注册point事件
        var operateEventHandler = new Cesium.ScreenSpaceEventHandler(viewer.scene.canvas);
        operateEventHandler.setInputAction(function(movement) {
            var pickedFeature = viewer.scene.pick(movement.endPosition);
            if ((pickedFeature instanceof Cesium.Cesium3DTileFeature) && pickedFeature.getProperty('name')) {

            }
        }, Cesium.ScreenSpaceEventType.MOUSE_MOVE);

        operateEventHandler.setInputAction(function(movement) {
            var pickedFeature = viewer.scene.pick(movement.position);
            if ((pickedFeature instanceof Cesium.Cesium3DTileFeature) && pickedFeature.getProperty('name')) {
                console.log(pickedFeature);
                console.log(pickedFeature.getProperty('name'))

                var name = pickedFeature.getProperty('name');

                if (name.indexOf('05020085-反冲洗软启动柜1') >= 0) {
                    var ticket = Global.getTicket();
                    var target = window.event.target;
                    var strUrl = "./Operate.html?siteguid=" + '&name=' + name + '&ticket=' + ticket;
                    Global.dialogOpen({
                        id: 'operate',
                        title: name,
                        size: "sm",
                        btn: null,
                        maxmin: true,
                        url: strUrl,
                        callBack: function() {}
                    });
                }

            }
        }, Cesium.ScreenSpaceEventType.LEFT_CLICK);
    },

}
$(function($) {
    oPerate.createOperateEvents();
})