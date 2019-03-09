cc.Class({
    extends: cc.Component,

    properties: {
    },
    // use this for initialization

    show: function (eventTouch) {
        this.node.emit('child_ui_emit')
        this.node.dispatchEvent( new cc.Event.EventCustom('child_ui_event', true) );
    },

});
