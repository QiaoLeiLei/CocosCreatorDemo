cc.Class({
    extends: cc.Component,

    properties: {
        childLayout: cc.Node,
        newNode: cc.Node,
        nodeRotation: {
            default: 0,
            displayName: '旋转角度',
        },
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {
        var rotationDt = this.nodeRotation // 角度
        var angle = rotationDt/180 * Math.PI //弧度
        deLog(`angle ${angle}`)

        var children = this.childLayout.children
        for (const key in children) {
            if (children.hasOwnProperty(key)) {
                const element = children[key]
                var nodePos = element.getPosition()
                var newPos = this.node.convertToNodeSpaceAR(this.childLayout.convertToWorldSpaceAR(nodePos))
                newPos.rotateSelf(angle)
                var endPos = this.childLayout.convertToNodeSpaceAR(this.node.convertToWorldSpaceAR(newPos))
                var item = cc.instantiate(this.newNode)
                item.position = endPos
                item.parent = this.childLayout
            }
        }
    },

    // update (dt) {},

});
