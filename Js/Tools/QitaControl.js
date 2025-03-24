oQitaControl = {
    add: function() {
        var html = '<li class="layer-item"><div><input class="layer-checkbox" id="qita1" name="tileset" type="checkbox" value="其他" checked="" onclick="oQitaControl.isChecked(this)"><label for="qita1"></label><span onclick="oLayersControl.setView()">其他</span></div><input type="range" id="qita" data-rangeslider="" step="1" style="background: linear-gradient(to right, rgb(16, 113, 226), white 100%, white);"></li>';
        $('#tilesetList').append(html);
    },
    initSliders: function() {

        //模型
        var id = 'qita';
        $('#' + id).RangeSlider({});
        $('#' + id).val(100);
        $('#' + id).css('background', 'linear-gradient(to right, #1071e2, white 100%, white)');
        $('#' + id).on('input', function() {
            var self = this;
            oDefault.tilesetList.map(function(tileset) {
                if (tileset.id == id) {
                    var value = $(self).val() / 100;
                    if (tileset.tileset) {
                        tileset.tileset.style = new Cesium.Cesium3DTileStyle({
                            color: 'rgba(255, 255, 255,' + value + ')'
                        })
                    }
                    if (tileset.tilesetList) {
                        tileset.tilesetList.map(function(tile) {
                            tile.tileset.style = new Cesium.Cesium3DTileStyle({
                                color: 'rgba(255, 255, 255,' + value + ')'
                            })
                        })
                    }
                }
            })

        });
    },
    //选中显示/隐藏
    isChecked: function(data) {
        console.log(data)
        if (data.id == 'qita1') {
            if (data.checked) {
                oDefault.tilesetList.map(function(item) {
                    if (item.id == 'qita') {
                        item.tileset.show = true;
                    }
                })
            } else {
                oDefault.tilesetList.map(function(item) {
                    if (item.id == 'qita') {
                        item.tileset.show = false;
                    }
                })
            }
        }
    },
}
$(function($) {
    oQitaControl.add();
    oQitaControl.initSliders();
})