cc.game.on(cc.game.EVENT_ENGINE_INITED, () => {
    let collisionManager = cc.director.getCollisionManager()
    collisionManager.enabled = true
    // collisionManager.enabledDebugDraw = true
    // collisionManager.enabledDrawBoundingBox = true
});

