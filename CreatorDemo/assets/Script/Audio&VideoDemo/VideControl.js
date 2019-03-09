cc.Class({
    extends: cc.Component,

    properties: {
        player: cc.VideoPlayer,
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {

    },

    // update (dt) {},

    clickCallBack: function (eventTouch,customEventData) {
        var btnName = eventTouch.target.name
        switch (btnName) {
            case "PlayButton":
                this.player.play()
                break;
            case "PauseButton":
                this.player.pause()
                break;
            case "StopButton":
                this.player.stop()
                break;
            default:
                break;
        }

    },
});
