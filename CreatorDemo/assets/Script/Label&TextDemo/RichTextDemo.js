cc.Class({
    extends: cc.Component,

    properties: {
        text: cc.RichText,
    },

   

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
    },

    start () {
        this.text.string = '<on click="handler"> click me! </on>'
    },

    // update (dt) {},

    handler () {
        this.text.string = `<color=#ff0000>妈妈</c>再也<size=20>不用担心</size>
        我在 <size=56><outline  width=4 color=#00ff00 click="clickme"><color=red>Creator</c></c></s> 里面
        使用<color=#ff0000>五</c><color=#00ff00>彩</c><color=#00e0ff>缤</c><color=#ffff00>纷</>，
        <size=20>大小</s><size=60>不一</s>
        的<size=33>文字</s>了`
    },

    clickme () {
        this.text.string = `<color=#00ff00>Ri<img src="emoji1" click="handler"/><u>c
        h</u></c><color=#0fffff><size=77>Te</s><img src="emoji2" />x
        t</color><img src="emoji3" />`
    },

});
