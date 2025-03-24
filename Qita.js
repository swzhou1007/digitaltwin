var oQita = {
    addQita: function() {
        var url = './DataSources/bimdixia/qita/tileset.json';
        var tileset = new Cesium.Cesium3DTileset({
            url: url,
            preferLeaves: true,
        });
        tileset.show = true;
        // tileset.show = true;
        oDefault.viewer.scene.primitives.add(tileset);
        oDefault.tilesetList.push({
            id: 'qita',
            name: "其他",
            type: "qita",
            tileset: tileset,
            matrix: tileset.modelMatrix.clone()
        })

    },
}
$(function($) {
    if (!oDefault.viewer) {
        oDefault.createViewer();
    }
    oQita.addQita();
})