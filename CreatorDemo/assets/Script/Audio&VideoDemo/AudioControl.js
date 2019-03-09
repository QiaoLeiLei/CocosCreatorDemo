cc.Class({
    extends: cc.Component,

    properties: {
        player: cc.AudioSource,
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.isPause = false
    },

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
                this.isPause = !this.isPause
                if (this.isPause) {
                    this.player.pause()
                } else {
                    this.player.resume()
                }
                break;
            case "StopButton":
                this.player.stop()
                break;
            case "RewindButton":
                this.player.rewind()
                break;
            default:
                break;
        }

    },
});
