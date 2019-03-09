cc.Class({
    extends: cc.Component,

    properties: {
        sp:{
            default: null,
            type: cc.Sprite
        },
        tangentSpeed: 5
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
      
    },

    start () { 
        // this.sp.setState(cc.Sprite.State.GRAY) // 精灵置灰
    },

    // update (dt) {},

    onPreSolve: function (contact) {
        contact.setTangentSpeed( this.tangentSpeed );
    },
});
