cc.Class({
    extends: cc.Component,
 
    properties: {
        mask:cc.Mask,
    },
 
    // use this for initialization
    onLoad: function (){
        this.node.on(cc.Node.EventType.TOUCH_START, this._onTouchBegin, this);
        this.node.on(cc.Node.EventType.TOUCH_MOVE, this._onTouchMoved, this);
        this.node.on(cc.Node.EventType.TOUCH_END, this._onTouchEnd, this);
        this.node.on(cc.Node.EventType.TOUCH_CANCEL, this._onTouchCancel, this);
    },
 
    onDestroy:function () {
        this.node.off(cc.Node.EventType.TOUCH_START, this._onTouchBegin, this);
        this.node.off(cc.Node.EventType.TOUCH_MOVE, this._onTouchMoved, this);
        this.node.off(cc.Node.EventType.TOUCH_END, this._onTouchEnd, this);
        this.node.off(cc.Node.EventType.TOUCH_CANCEL, this._onTouchCancel, this);
    },
 
    start:function () {
    },
 
    _onTouchBegin:function (event) {
        cc.log('touchBegin');
        var point = event.touch.getLocation();
        point = this.node.convertToNodeSpaceAR(point);
        this._addCircle(point);
    },
 
    _onTouchMoved:function (event) {
        var point = event.touch.getLocation();
        point = this.node.convertToNodeSpaceAR(point);
        this._addCircle(point);
    },
 
    _onTouchEnd:function (event) {
        var point = event.touch.getLocation();
        point = this.node.convertToNodeSpaceAR(point);
        this._addCircle(point);
    },
 
    _onTouchCancel:function (event) {
    },
 
    _addCircle:function (point) {
        // var stencil = this.mask._clippingStencil;
        // var color = cc.color(255, 255, 255, 0);
        // stencil.drawPoly(this.mask._calculateCircle(point,cc.p(50,50), 64), color, 0, color);
        // if (!CC_JSB) {
        //     cc.renderer.childrenOrderDirty = true;
        // }
        var stencil = this.mask._graphics
        stencil.circle(point.x,point.y,64)
        stencil.fill()
    },
 
 
    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {
 
    // },
});