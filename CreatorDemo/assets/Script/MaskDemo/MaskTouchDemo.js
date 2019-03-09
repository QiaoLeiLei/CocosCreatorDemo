cc.Class({
    extends: cc.Component,

    properties: {
        mainLayout: cc.Node,
        topNode: cc.Node,
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.mainLayout.on(cc.Node.EventType.TOUCH_END, this.touchCallBack, this)
        this.topNode.on(cc.Node.EventType.TOUCH_END, this.touchCallBack, this)
    },

    start () {

    },

    // update (dt) {},

    touchCallBack: function (eventTouch) {
        var name = eventTouch.target.name
        deLog(` 点击事件发生在 ${name}`)
    },

})
