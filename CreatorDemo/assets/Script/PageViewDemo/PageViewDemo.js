cc.Class({
    extends: cc.Component,

    properties: {
        pageViewComp: cc.PageView,
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.pageViewComp.node.on('scroll-ended',this.onScrollEnd,this)
    },

    start () {
        // this.pageViewComp.setCurrentPageIndex(3)
        this.pageViewComp.scrollToPage(1,0)
    },

    // update (dt) {},

    onPageScrolled: function (pageView,eventType,customEventData) {
        var indexCurr = pageView.getCurrentPageIndex()
        switch (eventType) {
            case cc.PageView.EventType.PAGE_TURNING:
                deLog(` pageView Page_Turnung`)
                break;
            default:
                break;
        }
        if (indexCurr == 0) {
            // pageView.setCurrentPageIndex(3)
            this.pageViewComp.scrollToPage(3,0)
        } else if (indexCurr == 4) {
            // pageView.setCurrentPageIndex(1)
            this.pageViewComp.scrollToPage(1,0)
        }
    },

    onScrollEnd: function (pageView) {
        var indexCurr = pageView.getCurrentPageIndex()
    },

});
