cc.Class({
    extends: cc.Component,

    properties: {
        jumpDuration: 0,
        jumpHeight: 0,
        cameraNode: cc.Node,
        ball: cc.Node,
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        deLog(`${DE_VISIBLESIZE}`)
        deLog(`${DE_DESIGNRESOLUTIONSIZE}`)
        this.cameraNode.getComponent(cc.Camera).zoomRatio = 0.1
        this.designResolution = cc.director.getScene().getComponentInChildren(cc.Canvas).designResolution
        deLog(`${this.designResolution}`)
    },

    start() {
        // up
        var jumpUp = cc.moveBy(this.jumpDuration, cc.v2(0, this.jumpHeight)).easing(cc.easeCubicActionOut())
        // down
        var jumpDown = cc.moveBy(this.jumpDuration, cc.v2(0, -this.jumpHeight)).easing(cc.easeCubicActionIn())
        var jumAction = cc.repeatForever(cc.sequence(jumpUp, jumpDown))
        // run
        this.node.runAction(jumAction)

        var cameraMatrix = cc.mat4()
        this.cameraNode.getComponent(cc.Camera).getCameraToWorldMatrix(cameraMatrix)
        deLog(` cameraMatrix = ${cameraMatrix}`)

        var worldMatrix = cc.mat4()
        this.cameraNode.getComponent(cc.Camera).getWorldToCameraMatrix(worldMatrix)
        deLog(` worldMatrix = ${worldMatrix}`)
    },

    update(dt) {
        if (this.node.x <= -300 || this.node.x >= 300) {
            this.node.x = -300
            this.ball.y = 0
        }
        this.node.x += (dt * 50)
        this.cameraNode.x = this.node.x

        // 相机缩放
        this.changeZoomRatio(dt)
        // 坐标准换
        var corldPos = this.cameraNode.getComponent(cc.Camera).getCameraToWorldPoint(cc.v2(this.node.x, this.node.y))
    },

    changeZoomRatio: function (dt) {
        if (this.cameraNode.getComponent(cc.Camera).zoomRatio < 1) {
            this.cameraNode.getComponent(cc.Camera).zoomRatio += dt
        } else {
            this.cameraNode.getComponent(cc.Camera).zoomRatio = 1
        }
    },

});
