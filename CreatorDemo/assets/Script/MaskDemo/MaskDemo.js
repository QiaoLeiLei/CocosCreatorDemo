cc.Class({
    extends: cc.Component,

    properties: {
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.node.width = 0
        this.node.height = 0
    },

    start () {
        deLog(` this is a test for Mask`)
        this.schedule((dt)=>{
            this.node.width += 1
            this.node.height += 1
        },0.001)
    },

    // update (dt) {},
});
