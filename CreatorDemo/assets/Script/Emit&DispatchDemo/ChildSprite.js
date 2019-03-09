cc.Class({
    extends: cc.Component,

    properties: {
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.node.on("child_ui_emit", this.emitCallBack, this)
        this.node.on("child_ui_event", this.eventCallBack, this)
    },

    start () {

    },

    // update (dt) {},


    emitCallBack: function () {
        deLog(` ChildSprite child_ui_emit `)
    },

    eventCallBack: function (event) {
        deLog(` ChildSprite child_ui_event `)
        event.stopPropagation()
    },

});
