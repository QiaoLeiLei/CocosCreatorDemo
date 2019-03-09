var ChildUISprite = require('ChildUISprite')

cc.Class({
    extends: cc.Component,

    properties: {
        childUI: {
            default: null,
            type: ChildUISprite,
            displayName: 'UISprite脚本组件',
        },
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.node.on(cc.Node.EventType.TOUCH_END, this.touchCallBack, this)
        this.node.on("child_layout_event", this.layoutEventCallBack, this)
        this.node.on("child_ui_event", this.uiEventCallBack, this)
    },

    start () {
    },

    // update (dt) {},

    touchCallBack: function (eventTouch) {
        this.childUI.show()
    },

    uiEventCallBack: function (event) {
        deLog(` ParentLayout child_ui_event `)
    },

    layoutEventCallBack: function (event) {
        deLog(` ParentLayout child_layout_event `)
    },

    
});
