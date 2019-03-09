cc.Class({
    extends: cc.Component,

    properties: {
        mapNode: cc.TiledMap,
        tiledLayer: cc.TiledLayer
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {
        // var tileGid = this.tiledLayer.getTileGIDAt(0,0)
        //  // 1 blue
        // tileGid = this.tiledLayer.getTileGIDAt(0,1)
        //  // 3 red
        // tileGid = this.tiledLayer.getTileGIDAt(0,2)
        //  // 2 green
        // tileGid = this.tiledLayer.getTileGIDAt(0,3)
        //  // 1 blue

        this.tiledLayer.setTileGIDAt(3,0,0)
        this.tiledLayer.setTileGIDAt(2,0,1)
        this.tiledLayer.setTileGIDAt(1,0,2)
        this.tiledLayer.setTileGIDAt(1,0,3)
    },

    // update (dt) {},
});
