cc.Class({
    extends: cc.Component,

    properties: {
        mainLabel: cc.Label,
        overflowLabel: cc.Label,
        wrapLable: cc.Label,
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.mainLabel.enableWrapText = true
        var wrapType = cc.Enum ({

        })
    },

    start () {
       this.refreshString()
    },

    // update (dt) {},
   
    changeLabeCallBack: function (eventTouch) {
        this.mainLabel.node.width = 360
        this.mainLabel.node.height = 40
        this.mainLabel.string = ''
        var btnName = eventTouch.target.name
        switch (btnName) {
            case "WrapButton":
                this.mainLabel.enableWrapText = !this.mainLabel.enableWrapText
                if (this.mainLabel.enableWrapText) {
                    this.wrapLable.string = "WrapOK"
                } else {
                    this.wrapLable.string = "WrapNO"
                }
                break;
            case "OverflowButton":
                switch (this.mainLabel.overflow) {
                    case cc.Label.Overflow.NONE:
                        this.mainLabel.overflow = cc.Label.Overflow.CLAMP
                        this.overflowLabel.string = 'CLAMP'
                        break;
                    case cc.Label.Overflow.CLAMP:
                        this.mainLabel.overflow = cc.Label.Overflow.SHRINK
                        this.overflowLabel.string = 'SHRINK'
                        break;
                    case cc.Label.Overflow.SHRINK:
                        this.mainLabel.overflow = cc.Label.Overflow.RESIZE_HEIGHT
                        this.overflowLabel.string = 'RESIZE_HEIGHT'
                        break;
                    case cc.Label.Overflow.RESIZE_HEIGHT:
                        this.mainLabel.overflow = cc.Label.Overflow.NONE
                        this.overflowLabel.string = 'NONE'
                        break;
                    default:
                        break;
                }
                break;
            default:
                break;
        }
        this.refreshString()
    },

    refreshString: function () {
        this.mainLabel.string = "妻子和丈夫吵架之后，妻子要带着儿子回娘家，可是妻子怎么和儿子说，儿子都不和妻子一起走，妻子只好自己走了，妻子走后丈夫看着儿子感动的说：“我儿子就是我儿子，到什么时候也不忘了他爹”，儿子这是说到：“爸爸，你不会做饭，妈妈不在，你就可以带我出去吃大餐了”，爸爸的一句话让儿子后悔万分，爸爸说到：“儿子，对不起，你妈没有给留饭钱啊”。"
    }

});
