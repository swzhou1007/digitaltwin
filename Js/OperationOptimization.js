/**
 * Created by ZhouJianBing on 2019/04/18. qq:986278051
 */

!function () {
    var operationOptimization = function () {
        this.groundHeightAtCameraPosition = 0;
        this.undergroundMode = false;//是否开启地下模式 暂时用不到
        this.undergroundSurfaceHeight = -500;//地下模式下的最低限制   不用地下模式暂时用不到
    }

    Object.defineProperties(operationOptimization.prototype, {
        HeightAboveGround: {
            get: function () {
                return this.viewer.camera.positionCartographic.height - this.groundHeightAtCameraPosition;
            }
        }
    });

    operationOptimization.prototype.init = function (viewer) {
        this.viewer = viewer;
        this.viewer.scene.preRender.addEventListener(this.onPreFrame, this);
    }

    operationOptimization.prototype.onPreFrame = function (scene, time) {
        if (this.viewer.scene.mode == Cesium.SceneMode.MORPHING)
            return; // during morphing the camera.heading is undefined

        var groundHeightAtCameraPosition = scene.globe.getHeight(this.viewer.camera.positionCartographic);
        //console.log("groundHeightAtCameraPosition = " + groundHeightAtCameraPosition)
        //console.log("this.viewer.camera.positionCartographic.height = " + this.viewer.camera.positionCartographic.height)
        this.groundHeightAtCameraPosition = groundHeightAtCameraPosition || this.groundHeightAtCameraPosition;

        this.handleHitGround();
        this.enforceZeroRoll();

    }

    operationOptimization.prototype.handleHitGround = function () {
        //console.log("handleHitGround");
        var hitTheGround;
        var adjustedHeight;

        if (this.undergroundMode) {
            hitTheGround = this.viewer.camera.positionCartographic.height < this.undergroundSurfaceHeight;
            adjustedHeight = this.undergroundSurfaceHeight + 10;
        }
        else {
            hitTheGround = this.HeightAboveGround < 0;
            adjustedHeight = this.groundHeightAtCameraPosition + 10;
        }

        if (hitTheGround) {
            this.viewer.camera.setView({
                destination: Cesium.Cartesian3.fromRadians(this.viewer.camera.positionCartographic.longitude, this.viewer.camera.positionCartographic.latitude, adjustedHeight),
                orientation: {
                    heading: this.viewer.camera.heading,
                    pitch: this.viewer.camera.pitch,
                    roll: 0.0
                }
            });
            //this.stop(); 不用地下模式暂时用不到
        }
    }

    operationOptimization.prototype.enforceZeroRoll = function () {
        if (this.viewer.camera.roll != 0) {
            this.viewer.camera.setView({
                orientation: {
                    heading: this.viewer.camera.heading,
                    pitch: this.viewer.camera.pitch,
                    roll: 0.0
                }
            });
        }
    }

    operationOptimization.prototype.stop = function () {
        console.log("stop");
        console.log(this.viewer.scene.tweens.length);
        //this.viewer.scene.tweens.removeAll();    // This does not seems intuitive but for now the only way I have found to stop camera.flyTo (for example).
        if (this.viewer.trackedEntity != undefined);
        this.viewer.trackedEntity = undefined;
    }

    operationOptimization.prototype.cancelOptimize = function () {
        this.viewer.scene.preRender.removeEventListener(this.onPreFrame, this);
    }

    window.operationOptimization = new operationOptimization();
}();

