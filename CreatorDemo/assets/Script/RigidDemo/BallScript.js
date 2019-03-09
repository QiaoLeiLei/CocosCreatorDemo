cc.Class({
    extends: cc.Component,

    properties: {
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        var joint = this.node.addComponent(cc.MouseJoint)
        joint.mouseRegion = this.node
    },

    start () {

    },

    // update (dt) {},
});
