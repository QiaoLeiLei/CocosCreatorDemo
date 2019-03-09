cc.Class({
    extends: cc.Component,

    properties: {
        mainLayout: cc.Node,
        layoutSprite: cc.Node,
        layoutBtn: cc.Button,
        mainSprite: cc.Node,
        topNode: cc.Node,
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.mainLayout.on(cc.Node.EventType.TOUCH_END, this.touchCallBack, this)
        this.layoutSprite.on(cc.Node.EventType.TOUCH_END, this.touchCallBack, this)
        // this.layoutBtn.node.on(cc.Node.EventType.TOUCH_END, this.touchCallBack, this)
        this.mainSprite.on(cc.Node.EventType.TOUCH_END, this.touchCallBack, this)
        // this.topNode.on(cc.Node.EventType.TOUCH_END, this.touchCallBack, this)
    },

    start () {

    },

    // update (dt) {},

    touchCallBack: function (eventTouch) {
        var name = eventTouch.target.name
        deLog(` 点击事件发生在 ${name}`)
    },

    clickCallBack: function (eventTouch) {
        var name = eventTouch.target.name
        deLog(` 点击事件发生在 ${name}`)
    }
})
