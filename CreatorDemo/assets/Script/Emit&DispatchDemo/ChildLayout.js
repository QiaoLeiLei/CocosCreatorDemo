cc.Class({
    extends: cc.Component,

    properties: {
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.node.on("child_layout_emit", this.emitCallBack, this)
        this.node.on("child_layout_event", this.eventCallBack, this)
    },

    start () {
        this.node.emit('child_layout_emit',' this is emit msg')
        var msg =  new cc.Event.EventCustom('child_layout_event', true)
        this.node.dispatchEvent(msg);
    },

    // update (dt) {},

    emitCallBack: function (msg) {
        deLog(` ChildLayout child_layout_emit  ${msg}`)
    },

    eventCallBack: function (event) {
        deLog(` ChildLayout child_layout_event `)
    },

});
