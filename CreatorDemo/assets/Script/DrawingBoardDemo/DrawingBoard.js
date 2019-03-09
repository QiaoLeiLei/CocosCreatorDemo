cc.Class({
    extends: cc.Component,

    properties: {
        graphics: cc.Graphics,
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.node.on(cc.Node.EventType.TOUCH_START, this._onTouchBegin, this);
        this.node.on(cc.Node.EventType.TOUCH_MOVE, this._onTouchMoved, this);
        this.node.on(cc.Node.EventType.TOUCH_END, this._onTouchEnd, this);
    },

    start () {

    },

    // update (dt) {},

    _onTouchBegin:function (event) {
        var point = event.touch.getLocation();
        point = this.node.convertToNodeSpaceAR(point);
        this.originPoint = point
    },
 
    _onTouchMoved:function (event) {
        var point = event.touch.getLocation();
        point = this.node.convertToNodeSpaceAR(point);
        this._addLine(point);
    },
 
    _onTouchEnd:function (event) {
        var point = event.touch.getLocation();
        point = this.node.convertToNodeSpaceAR(point);
    },

    _addLine:function (point) {
        this.graphics.moveTo(this.originPoint.x,this.originPoint.y);
        this.graphics.lineTo(point.x,point.y);
        this.graphics.stroke();
        this.graphics.fill();
        this.originPoint = point;
    },

});
