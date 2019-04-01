cc.Class({
    extends: cc.Component,

    properties: {
        ratateNode : cc.Node,
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.radian = Math.PI/100
    },

    start () {

    },

    update (dt) {
        this.ratateNode.position = this.ratateNode.position.rotateSelf(this.radian)
        var rotation = cc.v2(100,0).signAngle(this.ratateNode.position)
        this.ratateNode.setRotation(-rotation/Math.PI*180)
    },

});
