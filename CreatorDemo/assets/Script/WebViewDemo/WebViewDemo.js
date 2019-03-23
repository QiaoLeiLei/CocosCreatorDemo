cc.Class({
    extends: cc.Component,

    properties: {
        webViewNode: cc.Node,
        webViewComp: cc.WebView,
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.webViewNode.on('loading', this.loadingCallback, this)
        this.webViewNode.on('loaded', this.loadedCallback, this)
        this.webViewNode.on('error', this.errorCallback, this)
    },

    start () {

    },

    // update (dt) {},

    loadingCallback: function (webview) {
        var url = webview.url
    },

    loadedCallback: function (webview) {
        var url = webview.url
    },

    errorCallback: function (webview) {
        var url = webview.url
    },

    onWebFinished: function (webview,eventType,CustomEventData) {
        var url = webview.url
        switch (eventType) {
            case cc.WebView.EventType.LOADING:
                deLog(`webView loading`)
                break;
            case cc.WebView.EventType.LOADED:
                deLog(`webView loaded`)
                break;
            case cc.WebView.EventType.ERROR:
                deLog(`webView error`)
                break;
            default:
                break;
        }
    },

});
