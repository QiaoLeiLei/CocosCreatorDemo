cc.Class({
    extends: cc.Component,

    properties: {
    },

    // LIFE-CYCLE CALLBACKS: 2.0.x 不支持native版本，可以用 creator 1.9.x , 1.10 版本，或者 2.1

    // onLoad () {},

    start () {
    },

    // update (dt) {},

    playerEventCallBack: function (target,eventType) {
        switch (eventType) {
            case cc.VideoPlayer.EventType.PLAYING:
                deLog(` VideoPlayer PLAYING `)
                break;
            case cc.VideoPlayer.EventType.PAUSED:
                deLog(` VideoPlayer PAUSED `)
                break;
            case cc.VideoPlayer.EventType.STOPPED:
                deLog(` VideoPlayer STOPPED `)
                break;
            case cc.VideoPlayer.EventType.COMPLETED:
                deLog(` VideoPlayer COMPLETED `)
                break;
            case cc.VideoPlayer.EventType.META_LOADED:
                deLog(` VideoPlayer META_LOADED `)
                break;
            case cc.VideoPlayer.EventType.CLICKED:
                deLog(` VideoPlayer CLICKED `)
                break;
                case cc.VideoPlayer.EventType.READY_TO_PLAY:
                deLog(` VideoPlayer READY_TO_PLAY `)
                break;
            default:
                break;
        }
    },

});
