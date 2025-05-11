controller.right.onEvent(ControllerButtonEvent.Released, function () {
    grid.move(mySprite, 0, 0)
})
controller.left.onEvent(ControllerButtonEvent.Released, function () {
    grid.move(mySprite, 0, 0)
})
scene.onOverlapTile(SpriteKind.Enemy, assets.tile`myTile2`, function (sprite, location) {
    mySprite.setImage(img`
        f f f . . . . . 
        f 1 1 f . . . . 
        f 1 d d f . . . 
        . f d d f . . . 
        . . f f b f . . 
        . . . . f e f . 
        . . . . . f e f 
        . . . . . . f f 
        `)
    sprites.destroy(textSprite2)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile6`, function (sprite, location) {
    if (mySprite.image.equals(img`
        f f f . . . . . 
        f d d f . . . . 
        f d d d f . . . 
        . f d d f . . . 
        . . f f b f . . 
        . . . . f e f . 
        . . . . . f e f 
        . . . . . . f f 
        `) && controller.A.isPressed()) {
        tiles.setTileAt(location, assets.tile`myTile17`)
    }
    if (mySprite.image.equals(img`
        f f f . . . . . 
        f 2 2 f . . . . 
        f 2 d d f . . . 
        . f d d f . . . 
        . . f f b f . . 
        . . . . f e f . 
        . . . . . f e f 
        . . . . . . f f 
        `) && controller.A.isPressed()) {
        tiles.setTileAt(location, assets.tile`myTile4`)
    }
    if (mySprite.image.equals(img`
        f f f . . . . . 
        f 4 4 f . . . . 
        f 4 d d f . . . 
        . f d d f . . . 
        . . f f b f . . 
        . . . . f e f . 
        . . . . . f e f 
        . . . . . . f f 
        `) && controller.A.isPressed()) {
        tiles.setTileAt(location, assets.tile`myTile3`)
    }
    if (mySprite.image.equals(img`
        f f f . . . . . 
        f 5 5 f . . . . 
        f 5 d d f . . . 
        . f d d f . . . 
        . . f f b f . . 
        . . . . f e f . 
        . . . . . f e f 
        . . . . . . f f 
        `) && controller.A.isPressed()) {
        tiles.setTileAt(location, assets.tile`myTile5`)
    }
    if (mySprite.image.equals(img`
        f f f . . . . . 
        f 9 9 f . . . . 
        f 9 d d f . . . 
        . f d d f . . . 
        . . f f b f . . 
        . . . . f e f . 
        . . . . . f e f 
        . . . . . . f f 
        `) && controller.A.isPressed()) {
        tiles.setTileAt(location, assets.tile`myTile8`)
    }
    if (mySprite.image.equals(img`
        f f f . . . . . 
        f 6 6 f . . . . 
        f 6 d d f . . . 
        . f d d f . . . 
        . . f f b f . . 
        . . . . f e f . 
        . . . . . f e f 
        . . . . . . f f 
        `) && controller.A.isPressed()) {
        tiles.setTileAt(location, assets.tile`myTile16`)
    }
    if (mySprite.image.equals(img`
        f f f . . . . . 
        f a a f . . . . 
        f a d d f . . . 
        . f d d f . . . 
        . . f f b f . . 
        . . . . f e f . 
        . . . . . f e f 
        . . . . . . f f 
        `) && controller.A.isPressed()) {
        tiles.setTileAt(location, assets.tile`myTile9`)
    }
    if (mySprite.image.equals(img`
        f f f . . . . . 
        f 3 3 f . . . . 
        f 3 d d f . . . 
        . f d d f . . . 
        . . f f b f . . 
        . . . . f e f . 
        . . . . . f e f 
        . . . . . . f f 
        `) && controller.A.isPressed()) {
        tiles.setTileAt(location, assets.tile`myTile10`)
    }
    if (mySprite.image.equals(img`
        f f f . . . . . 
        f e e f . . . . 
        f e d d f . . . 
        . f d d f . . . 
        . . f f b f . . 
        . . . . f e f . 
        . . . . . f e f 
        . . . . . . f f 
        `) && controller.A.isPressed()) {
        tiles.setTileAt(location, assets.tile`myTile11`)
    }
    if (mySprite.image.equals(img`
        f f f . . . . . 
        f 1 1 f . . . . 
        f 1 d d f . . . 
        . f d d f . . . 
        . . f f b f . . 
        . . . . f e f . 
        . . . . . f e f 
        . . . . . . f f 
        `) && controller.A.isPressed()) {
        tiles.setTileAt(location, assets.tile`myTile2`)
    }
    if (mySprite.image.equals(img`
        f f f . . . . . 
        f f f f . . . . 
        f f d d f . . . 
        . f d d f . . . 
        . . f f b f . . 
        . . . . f e f . 
        . . . . . f e f 
        . . . . . . f f 
        `) && controller.A.isPressed()) {
        tiles.setTileAt(location, assets.tile`myTile7`)
    }
    if (mySprite.image.equals(img`
        . . f f . . . . 
        . f 1 d f . . . 
        f 1 1 f 6 f . . 
        f d f f 6 6 f . 
        . f 6 6 9 6 6 f 
        . . f 6 6 9 f . 
        . . . f 6 f . . 
        . . . . f . . . 
        `) && controller.B.isPressed()) {
        tiles.setTileAt(location, assets.tile`myTile`)
        sprites.destroy(textSprite2)
        sprites.destroy(textSprite)
        textSprite2 = textsprite.create("Erase")
        textSprite2.setOutline(1, 15)
        textSprite2.setPosition(14, 115)
        animation.runMovementAnimation(
        textSprite2,
        animation.animationPresets(animation.bobbing),
        2000,
        true
        )
    }
})
scene.onOverlapTile(SpriteKind.Enemy, assets.tile`myTile10`, function (sprite, location) {
    mySprite.setImage(img`
        f f f . . . . . 
        f 3 3 f . . . . 
        f 3 d d f . . . 
        . f d d f . . . 
        . . f f b f . . 
        . . . . f e f . 
        . . . . . f e f 
        . . . . . . f f 
        `)
    sprites.destroy(textSprite2)
})
controller.menu.onEvent(ControllerButtonEvent.Released, function () {
    grid.move(mySprite2, 0, 0)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile`, function (sprite, location) {
    if (mySprite.image.equals(img`
        f f f . . . . . 
        f d d f . . . . 
        f d d d f . . . 
        . f d d f . . . 
        . . f f b f . . 
        . . . . f e f . 
        . . . . . f e f 
        . . . . . . f f 
        `) && controller.A.isPressed()) {
        tiles.setTileAt(location, assets.tile`myTile17`)
    }
    if (mySprite.image.equals(img`
        f f f . . . . . 
        f 2 2 f . . . . 
        f 2 d d f . . . 
        . f d d f . . . 
        . . f f b f . . 
        . . . . f e f . 
        . . . . . f e f 
        . . . . . . f f 
        `) && controller.A.isPressed()) {
        tiles.setTileAt(location, assets.tile`myTile4`)
    }
    if (mySprite.image.equals(img`
        f f f . . . . . 
        f 4 4 f . . . . 
        f 4 d d f . . . 
        . f d d f . . . 
        . . f f b f . . 
        . . . . f e f . 
        . . . . . f e f 
        . . . . . . f f 
        `) && controller.A.isPressed()) {
        tiles.setTileAt(location, assets.tile`myTile3`)
    }
    if (mySprite.image.equals(img`
        f f f . . . . . 
        f 5 5 f . . . . 
        f 5 d d f . . . 
        . f d d f . . . 
        . . f f b f . . 
        . . . . f e f . 
        . . . . . f e f 
        . . . . . . f f 
        `) && controller.A.isPressed()) {
        tiles.setTileAt(location, assets.tile`myTile5`)
    }
    if (mySprite.image.equals(img`
        f f f . . . . . 
        f 7 7 f . . . . 
        f 7 d d f . . . 
        . f d d f . . . 
        . . f f b f . . 
        . . . . f e f . 
        . . . . . f e f 
        . . . . . . f f 
        `) && controller.A.isPressed()) {
        tiles.setTileAt(location, assets.tile`myTile6`)
    }
    if (mySprite.image.equals(img`
        f f f . . . . . 
        f 9 9 f . . . . 
        f 9 d d f . . . 
        . f d d f . . . 
        . . f f b f . . 
        . . . . f e f . 
        . . . . . f e f 
        . . . . . . f f 
        `) && controller.A.isPressed()) {
        tiles.setTileAt(location, assets.tile`myTile8`)
    }
    if (mySprite.image.equals(img`
        f f f . . . . . 
        f 6 6 f . . . . 
        f 6 d d f . . . 
        . f d d f . . . 
        . . f f b f . . 
        . . . . f e f . 
        . . . . . f e f 
        . . . . . . f f 
        `) && controller.A.isPressed()) {
        tiles.setTileAt(location, assets.tile`myTile16`)
    }
    if (mySprite.image.equals(img`
        f f f . . . . . 
        f a a f . . . . 
        f a d d f . . . 
        . f d d f . . . 
        . . f f b f . . 
        . . . . f e f . 
        . . . . . f e f 
        . . . . . . f f 
        `) && controller.A.isPressed()) {
        tiles.setTileAt(location, assets.tile`myTile9`)
    }
    if (mySprite.image.equals(img`
        f f f . . . . . 
        f 3 3 f . . . . 
        f 3 d d f . . . 
        . f d d f . . . 
        . . f f b f . . 
        . . . . f e f . 
        . . . . . f e f 
        . . . . . . f f 
        `) && controller.A.isPressed()) {
        tiles.setTileAt(location, assets.tile`myTile10`)
    }
    if (mySprite.image.equals(img`
        f f f . . . . . 
        f e e f . . . . 
        f e d d f . . . 
        . f d d f . . . 
        . . f f b f . . 
        . . . . f e f . 
        . . . . . f e f 
        . . . . . . f f 
        `) && controller.A.isPressed()) {
        tiles.setTileAt(location, assets.tile`myTile11`)
    }
    if (mySprite.image.equals(img`
        f f f . . . . . 
        f 1 1 f . . . . 
        f 1 d d f . . . 
        . f d d f . . . 
        . . f f b f . . 
        . . . . f e f . 
        . . . . . f e f 
        . . . . . . f f 
        `) && controller.A.isPressed()) {
        tiles.setTileAt(location, assets.tile`myTile2`)
    }
    if (mySprite.image.equals(img`
        f f f . . . . . 
        f f f f . . . . 
        f f d d f . . . 
        . f d d f . . . 
        . . f f b f . . 
        . . . . f e f . 
        . . . . . f e f 
        . . . . . . f f 
        `) && controller.A.isPressed()) {
        tiles.setTileAt(location, assets.tile`myTile7`)
    }
    if (mySprite.image.equals(img`
        . . f f . . . . 
        . f 1 d f . . . 
        f 1 1 f 6 f . . 
        f d f f 6 6 f . 
        . f 6 6 9 6 6 f 
        . . f 6 6 9 f . 
        . . . f 6 f . . 
        . . . . f . . . 
        `)) {
    	
    }
    if (mySprite.image.equals(img`
        . . f f . . . . 
        . f 1 d f . . . 
        f 1 1 f 6 f . . 
        f d f f 6 6 f . 
        . f 6 6 9 6 6 f 
        . . f 6 6 9 f . 
        . . . f 6 f . . 
        . . . . f . . . 
        `) && controller.B.isPressed()) {
        tiles.setTileAt(location, assets.tile`myTile`)
    }
    if (mySprite.image.equals(img`
        . . f f . . . . 
        . f 1 d f . . . 
        f 1 1 f a f . . 
        f d f f a a f . 
        . f a a 5 a a f 
        . . f a a 5 f . 
        . . . f a f . . 
        . . . . f . . . 
        `)) {
    	
    }
    if (mySprite.image.equals(img`
        . . f f . . . . 
        . f 1 d f . . . 
        f 1 1 f a f . . 
        f d f f a a f . 
        . f a a 5 a a f 
        . . f a a 5 f . 
        . . . f a f . . 
        . . . . f . . . 
        `) && controller.A.isPressed()) {
        sprites.destroy(textSprite3)
        sprites.destroy(textSprite2)
        sprites.destroy(textSprite)
        sprites.destroy(textSprite5)
        textSprite4 = textsprite.create("Saved")
        textSprite4.setPosition(80, 104)
        textSprite4.setOutline(1, 15)
        sprites.destroy(textSprite4, effects.spray, 1000)
    }
})
scene.onOverlapTile(SpriteKind.Enemy, assets.tile`myTile15`, function (sprite, location) {
    sprites.destroy(textSprite10)
    sprites.destroy(textSprite5)
    mySprite.setImage(img`
        . . f f . . . . 
        . f 1 d f . . . 
        f 1 1 f 6 f . . 
        f d f f 6 6 f . 
        . f 6 6 9 6 6 f 
        . . f 6 6 9 f . 
        . . . f 6 f . . 
        . . . . f . . . 
        `)
    sprites.destroy(textSprite2)
    sprites.destroy(textSprite)
    textSprite2 = textsprite.create("Erase")
    textSprite2.setOutline(1, 15)
    textSprite2.setPosition(14, 115)
    animation.runMovementAnimation(
    textSprite2,
    animation.animationPresets(animation.bobbing),
    2000,
    true
    )
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile22`, function (sprite, location) {
    grid.place(mySprite, tiles.getTileLocation(2, location.row))
    mySprite.setScale(1, ScaleAnchor.Middle)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile13`, function (sprite, location) {
    grid.place(mySprite, tiles.getTileLocation(17, location.row))
    mySprite.setScale(1, ScaleAnchor.Middle)
})
scene.onOverlapTile(SpriteKind.Enemy, assets.tile`myTile8`, function (sprite, location) {
    mySprite.setImage(img`
        f f f . . . . . 
        f 9 9 f . . . . 
        f 9 d d f . . . 
        . f d d f . . . 
        . . f f b f . . 
        . . . . f e f . 
        . . . . . f e f 
        . . . . . . f f 
        `)
    sprites.destroy(textSprite2)
})
scene.onOverlapTile(SpriteKind.Enemy, assets.tile`myTile17`, function (sprite, location) {
    mySprite.setImage(img`
        f f f . . . . . 
        f d d f . . . . 
        f d d d f . . . 
        . f d d f . . . 
        . . f f b f . . 
        . . . . f e f . 
        . . . . . f e f 
        . . . . . . f f 
        `)
    sprites.destroy(textSprite2)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile7`, function (sprite, location) {
    if (mySprite.image.equals(img`
        f f f . . . . . 
        f d d f . . . . 
        f d d d f . . . 
        . f d d f . . . 
        . . f f b f . . 
        . . . . f e f . 
        . . . . . f e f 
        . . . . . . f f 
        `) && controller.A.isPressed()) {
        tiles.setTileAt(location, assets.tile`myTile17`)
    }
    if (mySprite.image.equals(img`
        f f f . . . . . 
        f 2 2 f . . . . 
        f 2 d d f . . . 
        . f d d f . . . 
        . . f f b f . . 
        . . . . f e f . 
        . . . . . f e f 
        . . . . . . f f 
        `) && controller.A.isPressed()) {
        tiles.setTileAt(location, assets.tile`myTile4`)
    }
    if (mySprite.image.equals(img`
        f f f . . . . . 
        f 4 4 f . . . . 
        f 4 d d f . . . 
        . f d d f . . . 
        . . f f b f . . 
        . . . . f e f . 
        . . . . . f e f 
        . . . . . . f f 
        `) && controller.A.isPressed()) {
        tiles.setTileAt(location, assets.tile`myTile3`)
    }
    if (mySprite.image.equals(img`
        f f f . . . . . 
        f 5 5 f . . . . 
        f 5 d d f . . . 
        . f d d f . . . 
        . . f f b f . . 
        . . . . f e f . 
        . . . . . f e f 
        . . . . . . f f 
        `) && controller.A.isPressed()) {
        tiles.setTileAt(location, assets.tile`myTile5`)
    }
    if (mySprite.image.equals(img`
        f f f . . . . . 
        f 7 7 f . . . . 
        f 7 d d f . . . 
        . f d d f . . . 
        . . f f b f . . 
        . . . . f e f . 
        . . . . . f e f 
        . . . . . . f f 
        `) && controller.A.isPressed()) {
        tiles.setTileAt(location, assets.tile`myTile6`)
    }
    if (mySprite.image.equals(img`
        f f f . . . . . 
        f 9 9 f . . . . 
        f 9 d d f . . . 
        . f d d f . . . 
        . . f f b f . . 
        . . . . f e f . 
        . . . . . f e f 
        . . . . . . f f 
        `) && controller.A.isPressed()) {
        tiles.setTileAt(location, assets.tile`myTile8`)
    }
    if (mySprite.image.equals(img`
        f f f . . . . . 
        f 6 6 f . . . . 
        f 6 d d f . . . 
        . f d d f . . . 
        . . f f b f . . 
        . . . . f e f . 
        . . . . . f e f 
        . . . . . . f f 
        `) && controller.A.isPressed()) {
        tiles.setTileAt(location, assets.tile`myTile16`)
    }
    if (mySprite.image.equals(img`
        f f f . . . . . 
        f a a f . . . . 
        f a d d f . . . 
        . f d d f . . . 
        . . f f b f . . 
        . . . . f e f . 
        . . . . . f e f 
        . . . . . . f f 
        `) && controller.A.isPressed()) {
        tiles.setTileAt(location, assets.tile`myTile9`)
    }
    if (mySprite.image.equals(img`
        f f f . . . . . 
        f 3 3 f . . . . 
        f 3 d d f . . . 
        . f d d f . . . 
        . . f f b f . . 
        . . . . f e f . 
        . . . . . f e f 
        . . . . . . f f 
        `) && controller.A.isPressed()) {
        tiles.setTileAt(location, assets.tile`myTile10`)
    }
    if (mySprite.image.equals(img`
        f f f . . . . . 
        f e e f . . . . 
        f e d d f . . . 
        . f d d f . . . 
        . . f f b f . . 
        . . . . f e f . 
        . . . . . f e f 
        . . . . . . f f 
        `) && controller.A.isPressed()) {
        tiles.setTileAt(location, assets.tile`myTile11`)
    }
    if (mySprite.image.equals(img`
        f f f . . . . . 
        f 1 1 f . . . . 
        f 1 d d f . . . 
        . f d d f . . . 
        . . f f b f . . 
        . . . . f e f . 
        . . . . . f e f 
        . . . . . . f f 
        `) && controller.A.isPressed()) {
        tiles.setTileAt(location, assets.tile`myTile2`)
    }
    if (mySprite.image.equals(img`
        . . f f . . . . 
        . f 1 d f . . . 
        f 1 1 f 6 f . . 
        f d f f 6 6 f . 
        . f 6 6 9 6 6 f 
        . . f 6 6 9 f . 
        . . . f 6 f . . 
        . . . . f . . . 
        `) && controller.B.isPressed()) {
        tiles.setTileAt(location, assets.tile`myTile`)
        sprites.destroy(textSprite2)
        sprites.destroy(textSprite)
        textSprite2 = textsprite.create("Erase")
        textSprite2.setOutline(1, 15)
        textSprite2.setPosition(14, 115)
        animation.runMovementAnimation(
        textSprite2,
        animation.animationPresets(animation.bobbing),
        2000,
        true
        )
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile4`, function (sprite, location) {
    if (mySprite.image.equals(img`
        f f f . . . . . 
        f d d f . . . . 
        f d d d f . . . 
        . f d d f . . . 
        . . f f b f . . 
        . . . . f e f . 
        . . . . . f e f 
        . . . . . . f f 
        `) && controller.A.isPressed()) {
        tiles.setTileAt(location, assets.tile`myTile17`)
    }
    if (mySprite.image.equals(img`
        f f f . . . . . 
        f 4 4 f . . . . 
        f 4 d d f . . . 
        . f d d f . . . 
        . . f f b f . . 
        . . . . f e f . 
        . . . . . f e f 
        . . . . . . f f 
        `) && controller.A.isPressed()) {
        tiles.setTileAt(location, assets.tile`myTile3`)
    }
    if (mySprite.image.equals(img`
        f f f . . . . . 
        f 5 5 f . . . . 
        f 5 d d f . . . 
        . f d d f . . . 
        . . f f b f . . 
        . . . . f e f . 
        . . . . . f e f 
        . . . . . . f f 
        `) && controller.A.isPressed()) {
        tiles.setTileAt(location, assets.tile`myTile5`)
    }
    if (mySprite.image.equals(img`
        f f f . . . . . 
        f 7 7 f . . . . 
        f 7 d d f . . . 
        . f d d f . . . 
        . . f f b f . . 
        . . . . f e f . 
        . . . . . f e f 
        . . . . . . f f 
        `) && controller.A.isPressed()) {
        tiles.setTileAt(location, assets.tile`myTile6`)
    }
    if (mySprite.image.equals(img`
        f f f . . . . . 
        f 9 9 f . . . . 
        f 9 d d f . . . 
        . f d d f . . . 
        . . f f b f . . 
        . . . . f e f . 
        . . . . . f e f 
        . . . . . . f f 
        `) && controller.A.isPressed()) {
        tiles.setTileAt(location, assets.tile`myTile8`)
    }
    if (mySprite.image.equals(img`
        f f f . . . . . 
        f 1 1 f . . . . 
        f 1 d d f . . . 
        . f d d f . . . 
        . . f f b f . . 
        . . . . f e f . 
        . . . . . f e f 
        . . . . . . f f 
        `) && controller.A.isPressed()) {
        tiles.setTileAt(location, assets.tile`myTile2`)
    }
    if (mySprite.image.equals(img`
        f f f . . . . . 
        f f f f . . . . 
        f f d d f . . . 
        . f d d f . . . 
        . . f f b f . . 
        . . . . f e f . 
        . . . . . f e f 
        . . . . . . f f 
        `) && controller.A.isPressed()) {
        tiles.setTileAt(location, assets.tile`myTile7`)
    }
    if (mySprite.image.equals(img`
        . . f f . . . . 
        . f 1 d f . . . 
        f 1 1 f 6 f . . 
        f d f f 6 6 f . 
        . f 6 6 9 6 6 f 
        . . f 6 6 9 f . 
        . . . f 6 f . . 
        . . . . f . . . 
        `) && controller.B.isPressed()) {
        tiles.setTileAt(location, assets.tile`myTile`)
        sprites.destroy(textSprite2)
        sprites.destroy(textSprite)
        textSprite2 = textsprite.create("Erase")
        textSprite2.setOutline(1, 15)
        textSprite2.setPosition(14, 115)
        animation.runMovementAnimation(
        textSprite2,
        animation.animationPresets(animation.bobbing),
        2000,
        true
        )
    }
    if (mySprite.image.equals(img`
        f f f . . . . . 
        f 6 6 f . . . . 
        f 6 d d f . . . 
        . f d d f . . . 
        . . f f b f . . 
        . . . . f e f . 
        . . . . . f e f 
        . . . . . . f f 
        `) && controller.A.isPressed()) {
        tiles.setTileAt(location, assets.tile`myTile16`)
    }
    if (mySprite.image.equals(img`
        f f f . . . . . 
        f a a f . . . . 
        f a d d f . . . 
        . f d d f . . . 
        . . f f b f . . 
        . . . . f e f . 
        . . . . . f e f 
        . . . . . . f f 
        `) && controller.A.isPressed()) {
        tiles.setTileAt(location, assets.tile`myTile9`)
    }
    if (mySprite.image.equals(img`
        f f f . . . . . 
        f 3 3 f . . . . 
        f 3 d d f . . . 
        . f d d f . . . 
        . . f f b f . . 
        . . . . f e f . 
        . . . . . f e f 
        . . . . . . f f 
        `) && controller.A.isPressed()) {
        tiles.setTileAt(location, assets.tile`myTile10`)
    }
    if (mySprite.image.equals(img`
        f f f . . . . . 
        f e e f . . . . 
        f e d d f . . . 
        . f d d f . . . 
        . . f f b f . . 
        . . . . f e f . 
        . . . . . f e f 
        . . . . . . f f 
        `) && controller.A.isPressed()) {
        tiles.setTileAt(location, assets.tile`myTile11`)
    }
})
scene.onOverlapTile(SpriteKind.Enemy, assets.tile`myTile24`, function (sprite, location) {
    sprites.destroy(textSprite11)
    sprites.destroy(textSprite2)
    textSprite11 = textsprite.create("Save and exit")
    textSprite11.setOutline(1, 15)
    textSprite11.setPosition(80, 110)
    mySprite.setImage(img`
        . . f f . . . . 
        . f 1 d f . . . 
        f 1 1 f a f . . 
        f d f f a a f . 
        . f a a 5 a a f 
        . . f a a 5 f . 
        . . . f a f . . 
        . . . . f . . . 
        `)
    if (controller.A.isPressed()) {
        game.reset()
    }
})
scene.onOverlapTile(SpriteKind.Enemy, assets.tile`myTile12`, function (sprite, location) {
    grid.place(mySprite2, tiles.getTileLocation(0, 10))
    sprites.destroy(textSprite2)
    sprites.destroy(textSprite3)
})
scene.onOverlapTile(SpriteKind.Enemy, assets.tile`myTile9`, function (sprite, location) {
    mySprite.setImage(img`
        f f f . . . . . 
        f a a f . . . . 
        f a d d f . . . 
        . f d d f . . . 
        . . f f b f . . 
        . . . . f e f . 
        . . . . . f e f 
        . . . . . . f f 
        `)
    sprites.destroy(textSprite2)
})
scene.onOverlapTile(SpriteKind.Enemy, assets.tile`myTile19`, function (sprite, location) {
    sprites.destroy(textSprite3)
    sprites.destroy(textSprite11)
    sprites.destroy(textSprite2)
    sprites.destroy(textSprite10)
    mySprite.setImage(img`
        . . f f . . . . 
        . f 1 d f . . . 
        f 1 1 f 2 f . . 
        f d f f 2 2 f . 
        . f 2 2 e 2 2 f 
        . . f 2 2 e f . 
        . . . f 2 f . . 
        . . . . f . . . 
        `)
    textSprite10 = textsprite.create("Exit")
    textSprite10.setOutline(1, 15)
    textSprite10.setPosition(80, 110)
    if (controller.A.isPressed()) {
        game.reset()
    }
})
scene.onOverlapTile(SpriteKind.Enemy, assets.tile`myTile11`, function (sprite, location) {
    mySprite.setImage(img`
        f f f . . . . . 
        f e e f . . . . 
        f e d d f . . . 
        . f d d f . . . 
        . . f f b f . . 
        . . . . f e f . 
        . . . . . f e f 
        . . . . . . f f 
        `)
    sprites.destroy(textSprite2)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile9`, function (sprite, location) {
    if (mySprite.image.equals(img`
        f f f . . . . . 
        f d d f . . . . 
        f d d d f . . . 
        . f d d f . . . 
        . . f f b f . . 
        . . . . f e f . 
        . . . . . f e f 
        . . . . . . f f 
        `) && controller.A.isPressed()) {
        tiles.setTileAt(location, assets.tile`myTile17`)
    }
    if (mySprite.image.equals(img`
        f f f . . . . . 
        f 2 2 f . . . . 
        f 2 d d f . . . 
        . f d d f . . . 
        . . f f b f . . 
        . . . . f e f . 
        . . . . . f e f 
        . . . . . . f f 
        `) && controller.A.isPressed()) {
        tiles.setTileAt(location, assets.tile`myTile4`)
    }
    if (mySprite.image.equals(img`
        f f f . . . . . 
        f 4 4 f . . . . 
        f 4 d d f . . . 
        . f d d f . . . 
        . . f f b f . . 
        . . . . f e f . 
        . . . . . f e f 
        . . . . . . f f 
        `) && controller.A.isPressed()) {
        tiles.setTileAt(location, assets.tile`myTile3`)
    }
    if (mySprite.image.equals(img`
        f f f . . . . . 
        f 5 5 f . . . . 
        f 5 d d f . . . 
        . f d d f . . . 
        . . f f b f . . 
        . . . . f e f . 
        . . . . . f e f 
        . . . . . . f f 
        `) && controller.A.isPressed()) {
        tiles.setTileAt(location, assets.tile`myTile5`)
    }
    if (mySprite.image.equals(img`
        f f f . . . . . 
        f 7 7 f . . . . 
        f 7 d d f . . . 
        . f d d f . . . 
        . . f f b f . . 
        . . . . f e f . 
        . . . . . f e f 
        . . . . . . f f 
        `) && controller.A.isPressed()) {
        tiles.setTileAt(location, assets.tile`myTile6`)
    }
    if (mySprite.image.equals(img`
        f f f . . . . . 
        f 9 9 f . . . . 
        f 9 d d f . . . 
        . f d d f . . . 
        . . f f b f . . 
        . . . . f e f . 
        . . . . . f e f 
        . . . . . . f f 
        `) && controller.A.isPressed()) {
        tiles.setTileAt(location, assets.tile`myTile8`)
    }
    if (mySprite.image.equals(img`
        f f f . . . . . 
        f 6 6 f . . . . 
        f 6 d d f . . . 
        . f d d f . . . 
        . . f f b f . . 
        . . . . f e f . 
        . . . . . f e f 
        . . . . . . f f 
        `) && controller.A.isPressed()) {
        tiles.setTileAt(location, assets.tile`myTile16`)
    }
    if (mySprite.image.equals(img`
        f f f . . . . . 
        f 3 3 f . . . . 
        f 3 d d f . . . 
        . f d d f . . . 
        . . f f b f . . 
        . . . . f e f . 
        . . . . . f e f 
        . . . . . . f f 
        `) && controller.A.isPressed()) {
        tiles.setTileAt(location, assets.tile`myTile10`)
    }
    if (mySprite.image.equals(img`
        f f f . . . . . 
        f e e f . . . . 
        f e d d f . . . 
        . f d d f . . . 
        . . f f b f . . 
        . . . . f e f . 
        . . . . . f e f 
        . . . . . . f f 
        `) && controller.A.isPressed()) {
        tiles.setTileAt(location, assets.tile`myTile11`)
    }
    if (mySprite.image.equals(img`
        f f f . . . . . 
        f 1 1 f . . . . 
        f 1 d d f . . . 
        . f d d f . . . 
        . . f f b f . . 
        . . . . f e f . 
        . . . . . f e f 
        . . . . . . f f 
        `) && controller.A.isPressed()) {
        tiles.setTileAt(location, assets.tile`myTile2`)
    }
    if (mySprite.image.equals(img`
        f f f . . . . . 
        f f f f . . . . 
        f f d d f . . . 
        . f d d f . . . 
        . . f f b f . . 
        . . . . f e f . 
        . . . . . f e f 
        . . . . . . f f 
        `) && controller.A.isPressed()) {
        tiles.setTileAt(location, assets.tile`myTile7`)
    }
    if (mySprite.image.equals(img`
        . . f f . . . . 
        . f 1 d f . . . 
        f 1 1 f 6 f . . 
        f d f f 6 6 f . 
        . f 6 6 9 6 6 f 
        . . f 6 6 9 f . 
        . . . f 6 f . . 
        . . . . f . . . 
        `) && controller.B.isPressed()) {
        tiles.setTileAt(location, assets.tile`myTile`)
        sprites.destroy(textSprite2)
        sprites.destroy(textSprite)
        textSprite2 = textsprite.create("Erase")
        textSprite2.setOutline(1, 15)
        textSprite2.setPosition(14, 115)
        animation.runMovementAnimation(
        textSprite2,
        animation.animationPresets(animation.bobbing),
        2000,
        true
        )
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile3`, function (sprite, location) {
    if (mySprite.image.equals(img`
        f f f . . . . . 
        f d d f . . . . 
        f d d d f . . . 
        . f d d f . . . 
        . . f f b f . . 
        . . . . f e f . 
        . . . . . f e f 
        . . . . . . f f 
        `) && controller.A.isPressed()) {
        tiles.setTileAt(location, assets.tile`myTile17`)
    }
    if (mySprite.image.equals(img`
        f f f . . . . . 
        f 2 2 f . . . . 
        f 2 d d f . . . 
        . f d d f . . . 
        . . f f b f . . 
        . . . . f e f . 
        . . . . . f e f 
        . . . . . . f f 
        `) && controller.A.isPressed()) {
        tiles.setTileAt(location, assets.tile`myTile4`)
    }
    if (mySprite.image.equals(img`
        f f f . . . . . 
        f 5 5 f . . . . 
        f 5 d d f . . . 
        . f d d f . . . 
        . . f f b f . . 
        . . . . f e f . 
        . . . . . f e f 
        . . . . . . f f 
        `) && controller.A.isPressed()) {
        tiles.setTileAt(location, assets.tile`myTile5`)
    }
    if (mySprite.image.equals(img`
        f f f . . . . . 
        f 7 7 f . . . . 
        f 7 d d f . . . 
        . f d d f . . . 
        . . f f b f . . 
        . . . . f e f . 
        . . . . . f e f 
        . . . . . . f f 
        `) && controller.A.isPressed()) {
        tiles.setTileAt(location, assets.tile`myTile6`)
    }
    if (mySprite.image.equals(img`
        f f f . . . . . 
        f 9 9 f . . . . 
        f 9 d d f . . . 
        . f d d f . . . 
        . . f f b f . . 
        . . . . f e f . 
        . . . . . f e f 
        . . . . . . f f 
        `) && controller.A.isPressed()) {
        tiles.setTileAt(location, assets.tile`myTile8`)
    }
    if (mySprite.image.equals(img`
        f f f . . . . . 
        f 6 6 f . . . . 
        f 6 d d f . . . 
        . f d d f . . . 
        . . f f b f . . 
        . . . . f e f . 
        . . . . . f e f 
        . . . . . . f f 
        `) && controller.A.isPressed()) {
        tiles.setTileAt(location, assets.tile`myTile16`)
    }
    if (mySprite.image.equals(img`
        f f f . . . . . 
        f a a f . . . . 
        f a d d f . . . 
        . f d d f . . . 
        . . f f b f . . 
        . . . . f e f . 
        . . . . . f e f 
        . . . . . . f f 
        `) && controller.A.isPressed()) {
        tiles.setTileAt(location, assets.tile`myTile9`)
    }
    if (mySprite.image.equals(img`
        f f f . . . . . 
        f 3 3 f . . . . 
        f 3 d d f . . . 
        . f d d f . . . 
        . . f f b f . . 
        . . . . f e f . 
        . . . . . f e f 
        . . . . . . f f 
        `) && controller.A.isPressed()) {
        tiles.setTileAt(location, assets.tile`myTile10`)
    }
    if (mySprite.image.equals(img`
        f f f . . . . . 
        f e e f . . . . 
        f e d d f . . . 
        . f d d f . . . 
        . . f f b f . . 
        . . . . f e f . 
        . . . . . f e f 
        . . . . . . f f 
        `) && controller.A.isPressed()) {
        tiles.setTileAt(location, assets.tile`myTile11`)
    }
    if (mySprite.image.equals(img`
        f f f . . . . . 
        f 1 1 f . . . . 
        f 1 d d f . . . 
        . f d d f . . . 
        . . f f b f . . 
        . . . . f e f . 
        . . . . . f e f 
        . . . . . . f f 
        `) && controller.A.isPressed()) {
        tiles.setTileAt(location, assets.tile`myTile2`)
    }
    if (mySprite.image.equals(img`
        f f f . . . . . 
        f f f f . . . . 
        f f d d f . . . 
        . f d d f . . . 
        . . f f b f . . 
        . . . . f e f . 
        . . . . . f e f 
        . . . . . . f f 
        `) && controller.A.isPressed()) {
        tiles.setTileAt(location, assets.tile`myTile7`)
    }
    if (mySprite.image.equals(img`
        . . f f . . . . 
        . f 1 d f . . . 
        f 1 1 f 6 f . . 
        f d f f 6 6 f . 
        . f 6 6 9 6 6 f 
        . . f 6 6 9 f . 
        . . . f 6 f . . 
        . . . . f . . . 
        `) && controller.B.isPressed()) {
        tiles.setTileAt(location, assets.tile`myTile`)
        sprites.destroy(textSprite2)
        sprites.destroy(textSprite)
        textSprite2 = textsprite.create("Erase")
        textSprite2.setOutline(1, 15)
        textSprite2.setPosition(14, 115)
        animation.runMovementAnimation(
        textSprite2,
        animation.animationPresets(animation.bobbing),
        2000,
        true
        )
    }
})
controller.down.onEvent(ControllerButtonEvent.Repeated, function () {
    grid.move(mySprite, 0, 1)
})
scene.onOverlapTile(SpriteKind.Enemy, assets.tile`miMosaico`, function (sprite, location) {
    sprites.destroy(textSprite11)
    textSprite11 = textsprite.create("Erase all")
    textSprite11.setOutline(1, 15)
    textSprite11.setPosition(80, 110)
    mySprite.setImage(img`
        . . f f . . . . 
        . f 1 d f . . . 
        f 1 1 f 6 f . . 
        f d f f 6 6 f . 
        . f 6 6 9 6 6 f 
        . . f 6 6 9 f . 
        . . . f 6 f . . 
        . . . . f . . . 
        `)
    if (controller.A.isPressed()) {
        tiles.setCurrentTilemap(tileUtil.createSmallMap(tilemap`nivel1`))
    }
})
scene.onOverlapTile(SpriteKind.Enemy, assets.tile`myTile3`, function (sprite, location) {
    mySprite.setImage(img`
        f f f . . . . . 
        f 4 4 f . . . . 
        f 4 d d f . . . 
        . f d d f . . . 
        . . f f b f . . 
        . . . . f e f . 
        . . . . . f e f 
        . . . . . . f f 
        `)
    sprites.destroy(textSprite2)
})
scene.onOverlapTile(SpriteKind.Enemy, assets.tile`myTile5`, function (sprite, location) {
    mySprite.setImage(img`
        f f f . . . . . 
        f 5 5 f . . . . 
        f 5 d d f . . . 
        . f d d f . . . 
        . . f f b f . . 
        . . . . f e f . 
        . . . . . f e f 
        . . . . . . f f 
        `)
    sprites.destroy(textSprite2)
})
scene.onOverlapTile(SpriteKind.Enemy, assets.tile`myTile20`, function (sprite, location) {
    sprites.destroy(textSprite3)
    sprites.destroy(textSprite10)
    sprites.destroy(textSprite11)
    sprites.destroy(textSprite2)
    textSprite11 = textsprite.create("Vol:Yes")
    textSprite11.setOutline(1, 15)
    textSprite11.setPosition(80, 110)
    if (controller.A.isPressed()) {
        music.stopAllSounds()
        music.setVolume(255)
        music.play(music.createSong(hex`00780004080200`), music.PlaybackMode.LoopingInBackground)
        pause(200)
        tiles.setTileAt(location, assets.tile`myTile23`)
        sprites.destroy(textSprite11)
        sprites.destroy(textSprite2)
        textSprite11 = textsprite.create("Vol:No")
        textSprite11.setOutline(1, 15)
        textSprite11.setPosition(80, 110)
    }
})
scene.onOverlapTile(SpriteKind.Enemy, assets.tile`myTile23`, function (sprite, location) {
    sprites.destroy(textSprite3)
    sprites.destroy(textSprite10)
    sprites.destroy(textSprite11)
    sprites.destroy(textSprite2)
    textSprite11 = textsprite.create("Vol:No")
    textSprite11.setOutline(1, 15)
    textSprite11.setPosition(80, 110)
    if (controller.A.isPressed()) {
        music.stopAllSounds()
        music.setVolume(255)
        music.play(music.createSong(hex`0078000408100500001c00010a006400f401640000040000000000000000000000000005000004380114001800011b18001c00019c1c002000011e20002400019c34003800012038003c00011e3c004000019c40004400011954005800011b58005c00019c5c006000011e60006400019c74007800012078007c00011e7c008000019c80008400011b94009800019798009c0001199c00a000019aa000a400011bb400b8000197b800bc000119bc00c000011bc000c400019cd400d800019cd800dc00011bdc00e000011ee000e400019cf000f400019c14011801019c18011c01011b1c012001011e20012401019c34013801012038013c01011e3c014001019c40014401011b50015401011b54015801019758015c0101195c016001019a60016401011b74017801011b78017c0101197c018001011b80018401011e90019401019ca001a401011bb001b4010197c001c401019cd001d401011be001e401019c03001c0001dc00690000045e01000400000000000000000000056400010400034e000001100101a12001300101a140015001012050016001011e60017001019c70018001011b8001900101199001a0010197a001b0010116b001c0010197c001d0010119d001e001011be001f001019c05001c000f0a006400f4010a0000040000000000000000000000000000000002fc0004000800029c200c001000029c2024002800029c202c003000029c2044004800029c204c005000029c2064006800029c206c007000029c2074007800029c207c008000029c2084008800021ea18c009000021ea1a400a800021ea1ac00b000021ea1b800bc00021e22c400c800021ea3cc00d000021ea3e400e800021ea3ec00f000021ea304010801021ea10c011001021ea124012801021ea12c013001021ea134013801021e223c014001021e2244014801021ea34c015001021ea364016801021ea36c017001021ea384018801021ea194019801029c20a401a801021b1eb401b80102191ec401c80102979cd401d801021b1ee001e401029c2007001c00020a006400f401640000040000000000000000000000000000000003ba0000000400019c10001400019720002400019c30003400019740004400019c50005400019760006400019c70007400019a8000840001a190009400019ca000a40001a1b000b400019cc000c40001a3d000d4000197e000e4000120f000f40001970001040101a110011401019c2001240101a130013401019c40014401012050015401019760016401012070017401019780018401011e90019401019ca001a401011bb001b4010197c001c401019cd001d401011be001e401019c09010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c800f1010000010001030c000d0001031000110001081800190001031c001d0001062000210001032400250001062c002d0001033000310001084000410001034c004d0001035000510001085400550001065800590001066000610001036400650001066c006d0001067000710001087400750001067800790001067e007f000106800081000103880089000103900091000108a000a1000103ac00ad000103b000b1000108b400b5000103b800b9000106c000c1000103c400c5000106c800c9000106cc00cd000103d000d1000108d800d9000106e000e1000103ec00ed000103f000f10001080001010101030801090101031001110101081401150101031801190101061c011d0101032001210101032c012d0101033001310101083801390101084001410101034401450101064801490101034c014d0101065001510101085401550101066001610101036401650101066801690101036c016d0101067001710101087401750101068001810101038401850101068801890101068c018d0101069001910101089401950101069801990101069c019d010106a001a1010103a401a5010106a801a9010106ac01ad010106b001b1010108b401b5010106b801b9010106bc01bd010106c001c10103030408c801c90103030408d001d10103030408dc01dd010106e001e10106030405060708`), music.PlaybackMode.LoopingInBackground)
        pause(200)
        tiles.setTileAt(location, assets.tile`myTile20`)
        sprites.destroy(textSprite11)
        sprites.destroy(textSprite2)
        textSprite11 = textsprite.create("Vol:Yes")
        textSprite11.setOutline(1, 15)
        textSprite11.setPosition(80, 110)
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile16`, function (sprite, location) {
    if (mySprite.image.equals(img`
        f f f . . . . . 
        f d d f . . . . 
        f d d d f . . . 
        . f d d f . . . 
        . . f f b f . . 
        . . . . f e f . 
        . . . . . f e f 
        . . . . . . f f 
        `) && controller.A.isPressed()) {
        tiles.setTileAt(location, assets.tile`myTile17`)
    }
    if (mySprite.image.equals(img`
        f f f . . . . . 
        f 2 2 f . . . . 
        f 2 d d f . . . 
        . f d d f . . . 
        . . f f b f . . 
        . . . . f e f . 
        . . . . . f e f 
        . . . . . . f f 
        `) && controller.A.isPressed()) {
        tiles.setTileAt(location, assets.tile`myTile4`)
    }
    if (mySprite.image.equals(img`
        f f f . . . . . 
        f 4 4 f . . . . 
        f 4 d d f . . . 
        . f d d f . . . 
        . . f f b f . . 
        . . . . f e f . 
        . . . . . f e f 
        . . . . . . f f 
        `) && controller.A.isPressed()) {
        tiles.setTileAt(location, assets.tile`myTile3`)
    }
    if (mySprite.image.equals(img`
        f f f . . . . . 
        f 5 5 f . . . . 
        f 5 d d f . . . 
        . f d d f . . . 
        . . f f b f . . 
        . . . . f e f . 
        . . . . . f e f 
        . . . . . . f f 
        `) && controller.A.isPressed()) {
        tiles.setTileAt(location, assets.tile`myTile5`)
    }
    if (mySprite.image.equals(img`
        f f f . . . . . 
        f 7 7 f . . . . 
        f 7 d d f . . . 
        . f d d f . . . 
        . . f f b f . . 
        . . . . f e f . 
        . . . . . f e f 
        . . . . . . f f 
        `) && controller.A.isPressed()) {
        tiles.setTileAt(location, assets.tile`myTile6`)
    }
    if (mySprite.image.equals(img`
        f f f . . . . . 
        f 9 9 f . . . . 
        f 9 d d f . . . 
        . f d d f . . . 
        . . f f b f . . 
        . . . . f e f . 
        . . . . . f e f 
        . . . . . . f f 
        `) && controller.A.isPressed()) {
        tiles.setTileAt(location, assets.tile`myTile8`)
    }
    if (mySprite.image.equals(img`
        f f f . . . . . 
        f a a f . . . . 
        f a d d f . . . 
        . f d d f . . . 
        . . f f b f . . 
        . . . . f e f . 
        . . . . . f e f 
        . . . . . . f f 
        `) && controller.A.isPressed()) {
        tiles.setTileAt(location, assets.tile`myTile9`)
    }
    if (mySprite.image.equals(img`
        f f f . . . . . 
        f 3 3 f . . . . 
        f 3 d d f . . . 
        . f d d f . . . 
        . . f f b f . . 
        . . . . f e f . 
        . . . . . f e f 
        . . . . . . f f 
        `) && controller.A.isPressed()) {
        tiles.setTileAt(location, assets.tile`myTile10`)
    }
    if (mySprite.image.equals(img`
        f f f . . . . . 
        f e e f . . . . 
        f e d d f . . . 
        . f d d f . . . 
        . . f f b f . . 
        . . . . f e f . 
        . . . . . f e f 
        . . . . . . f f 
        `) && controller.A.isPressed()) {
        tiles.setTileAt(location, assets.tile`myTile11`)
    }
    if (mySprite.image.equals(img`
        f f f . . . . . 
        f 1 1 f . . . . 
        f 1 d d f . . . 
        . f d d f . . . 
        . . f f b f . . 
        . . . . f e f . 
        . . . . . f e f 
        . . . . . . f f 
        `) && controller.A.isPressed()) {
        tiles.setTileAt(location, assets.tile`myTile2`)
    }
    if (mySprite.image.equals(img`
        f f f . . . . . 
        f f f f . . . . 
        f f d d f . . . 
        . f d d f . . . 
        . . f f b f . . 
        . . . . f e f . 
        . . . . . f e f 
        . . . . . . f f 
        `) && controller.A.isPressed()) {
        tiles.setTileAt(location, assets.tile`myTile7`)
    }
    if (mySprite.image.equals(img`
        . . f f . . . . 
        . f 1 d f . . . 
        f 1 1 f 6 f . . 
        f d f f 6 6 f . 
        . f 6 6 9 6 6 f 
        . . f 6 6 9 f . 
        . . . f 6 f . . 
        . . . . f . . . 
        `) && controller.B.isPressed()) {
        tiles.setTileAt(location, assets.tile`myTile`)
        sprites.destroy(textSprite2)
        sprites.destroy(textSprite)
        textSprite2 = textsprite.create("Erase")
        textSprite2.setOutline(1, 15)
        textSprite2.setPosition(14, 115)
        animation.runMovementAnimation(
        textSprite2,
        animation.animationPresets(animation.bobbing),
        2000,
        true
        )
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile17`, function (sprite, location) {
    if (mySprite.image.equals(img`
        f f f . . . . . 
        f 2 2 f . . . . 
        f 2 d d f . . . 
        . f d d f . . . 
        . . f f b f . . 
        . . . . f e f . 
        . . . . . f e f 
        . . . . . . f f 
        `) && controller.A.isPressed()) {
        tiles.setTileAt(location, assets.tile`myTile4`)
    }
    if (mySprite.image.equals(img`
        f f f . . . . . 
        f 4 4 f . . . . 
        f 4 d d f . . . 
        . f d d f . . . 
        . . f f b f . . 
        . . . . f e f . 
        . . . . . f e f 
        . . . . . . f f 
        `) && controller.A.isPressed()) {
        tiles.setTileAt(location, assets.tile`myTile3`)
    }
    if (mySprite.image.equals(img`
        f f f . . . . . 
        f 5 5 f . . . . 
        f 5 d d f . . . 
        . f d d f . . . 
        . . f f b f . . 
        . . . . f e f . 
        . . . . . f e f 
        . . . . . . f f 
        `) && controller.A.isPressed()) {
        tiles.setTileAt(location, assets.tile`myTile5`)
    }
    if (mySprite.image.equals(img`
        f f f . . . . . 
        f 7 7 f . . . . 
        f 7 d d f . . . 
        . f d d f . . . 
        . . f f b f . . 
        . . . . f e f . 
        . . . . . f e f 
        . . . . . . f f 
        `) && controller.A.isPressed()) {
        tiles.setTileAt(location, assets.tile`myTile6`)
    }
    if (mySprite.image.equals(img`
        f f f . . . . . 
        f 9 9 f . . . . 
        f 9 d d f . . . 
        . f d d f . . . 
        . . f f b f . . 
        . . . . f e f . 
        . . . . . f e f 
        . . . . . . f f 
        `) && controller.A.isPressed()) {
        tiles.setTileAt(location, assets.tile`myTile8`)
    }
    if (mySprite.image.equals(img`
        f f f . . . . . 
        f 6 6 f . . . . 
        f 6 d d f . . . 
        . f d d f . . . 
        . . f f b f . . 
        . . . . f e f . 
        . . . . . f e f 
        . . . . . . f f 
        `) && controller.A.isPressed()) {
        tiles.setTileAt(location, assets.tile`myTile16`)
    }
    if (mySprite.image.equals(img`
        f f f . . . . . 
        f a a f . . . . 
        f a d d f . . . 
        . f d d f . . . 
        . . f f b f . . 
        . . . . f e f . 
        . . . . . f e f 
        . . . . . . f f 
        `) && controller.A.isPressed()) {
        tiles.setTileAt(location, assets.tile`myTile9`)
    }
    if (mySprite.image.equals(img`
        f f f . . . . . 
        f 3 3 f . . . . 
        f 3 d d f . . . 
        . f d d f . . . 
        . . f f b f . . 
        . . . . f e f . 
        . . . . . f e f 
        . . . . . . f f 
        `) && controller.A.isPressed()) {
        tiles.setTileAt(location, assets.tile`myTile10`)
    }
    if (mySprite.image.equals(img`
        f f f . . . . . 
        f e e f . . . . 
        f e d d f . . . 
        . f d d f . . . 
        . . f f b f . . 
        . . . . f e f . 
        . . . . . f e f 
        . . . . . . f f 
        `) && controller.A.isPressed()) {
        tiles.setTileAt(location, assets.tile`myTile11`)
    }
    if (mySprite.image.equals(img`
        f f f . . . . . 
        f 1 1 f . . . . 
        f 1 d d f . . . 
        . f d d f . . . 
        . . f f b f . . 
        . . . . f e f . 
        . . . . . f e f 
        . . . . . . f f 
        `) && controller.A.isPressed()) {
        tiles.setTileAt(location, assets.tile`myTile2`)
    }
    if (mySprite.image.equals(img`
        f f f . . . . . 
        f f f f . . . . 
        f f d d f . . . 
        . f d d f . . . 
        . . f f b f . . 
        . . . . f e f . 
        . . . . . f e f 
        . . . . . . f f 
        `) && controller.A.isPressed()) {
        tiles.setTileAt(location, assets.tile`myTile7`)
    }
    if (mySprite.image.equals(img`
        . . f f . . . . 
        . f 1 d f . . . 
        f 1 1 f 6 f . . 
        f d f f 6 6 f . 
        . f 6 6 9 6 6 f 
        . . f 6 6 9 f . 
        . . . f 6 f . . 
        . . . . f . . . 
        `) && controller.B.isPressed()) {
        tiles.setTileAt(location, assets.tile`myTile`)
        sprites.destroy(textSprite2)
        sprites.destroy(textSprite)
        textSprite2 = textsprite.create("Erase")
        textSprite2.setOutline(1, 15)
        textSprite2.setPosition(14, 115)
        animation.runMovementAnimation(
        textSprite2,
        animation.animationPresets(animation.bobbing),
        2000,
        true
        )
    }
})
scene.onOverlapTile(SpriteKind.Enemy, assets.tile`miMosaico1`, function (sprite, location) {
    sprites.destroy(textSprite11)
    textSprite11 = textsprite.create("Change scalling")
    textSprite11.setOutline(1, 15)
    textSprite11.setPosition(80, 110)
    if (controller.A.isPressed()) {
        pause(100)
        mySprite.changeScale(2, ScaleAnchor.BottomRight)
    }
})
controller.menu.onEvent(ControllerButtonEvent.Pressed, function () {
    sprites.destroy(textSprite11)
    grid.move(mySprite2, 0, -1)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile8`, function (sprite, location) {
    if (mySprite.image.equals(img`
        f f f . . . . . 
        f d d f . . . . 
        f d d d f . . . 
        . f d d f . . . 
        . . f f b f . . 
        . . . . f e f . 
        . . . . . f e f 
        . . . . . . f f 
        `) && controller.A.isPressed()) {
        tiles.setTileAt(location, assets.tile`myTile17`)
    }
    if (mySprite.image.equals(img`
        f f f . . . . . 
        f 2 2 f . . . . 
        f 2 d d f . . . 
        . f d d f . . . 
        . . f f b f . . 
        . . . . f e f . 
        . . . . . f e f 
        . . . . . . f f 
        `) && controller.A.isPressed()) {
        tiles.setTileAt(location, assets.tile`myTile4`)
    }
    if (mySprite.image.equals(img`
        f f f . . . . . 
        f 4 4 f . . . . 
        f 4 d d f . . . 
        . f d d f . . . 
        . . f f b f . . 
        . . . . f e f . 
        . . . . . f e f 
        . . . . . . f f 
        `) && controller.A.isPressed()) {
        tiles.setTileAt(location, assets.tile`myTile3`)
    }
    if (mySprite.image.equals(img`
        f f f . . . . . 
        f 5 5 f . . . . 
        f 5 d d f . . . 
        . f d d f . . . 
        . . f f b f . . 
        . . . . f e f . 
        . . . . . f e f 
        . . . . . . f f 
        `) && controller.A.isPressed()) {
        tiles.setTileAt(location, assets.tile`myTile5`)
    }
    if (mySprite.image.equals(img`
        f f f . . . . . 
        f 7 7 f . . . . 
        f 7 d d f . . . 
        . f d d f . . . 
        . . f f b f . . 
        . . . . f e f . 
        . . . . . f e f 
        . . . . . . f f 
        `) && controller.A.isPressed()) {
        tiles.setTileAt(location, assets.tile`myTile6`)
    }
    if (mySprite.image.equals(img`
        f f f . . . . . 
        f 6 6 f . . . . 
        f 6 d d f . . . 
        . f d d f . . . 
        . . f f b f . . 
        . . . . f e f . 
        . . . . . f e f 
        . . . . . . f f 
        `) && controller.A.isPressed()) {
        tiles.setTileAt(location, assets.tile`myTile16`)
    }
    if (mySprite.image.equals(img`
        f f f . . . . . 
        f a a f . . . . 
        f a d d f . . . 
        . f d d f . . . 
        . . f f b f . . 
        . . . . f e f . 
        . . . . . f e f 
        . . . . . . f f 
        `) && controller.A.isPressed()) {
        tiles.setTileAt(location, assets.tile`myTile9`)
    }
    if (mySprite.image.equals(img`
        f f f . . . . . 
        f 3 3 f . . . . 
        f 3 d d f . . . 
        . f d d f . . . 
        . . f f b f . . 
        . . . . f e f . 
        . . . . . f e f 
        . . . . . . f f 
        `) && controller.A.isPressed()) {
        tiles.setTileAt(location, assets.tile`myTile10`)
    }
    if (mySprite.image.equals(img`
        f f f . . . . . 
        f e e f . . . . 
        f e d d f . . . 
        . f d d f . . . 
        . . f f b f . . 
        . . . . f e f . 
        . . . . . f e f 
        . . . . . . f f 
        `) && controller.A.isPressed()) {
        tiles.setTileAt(location, assets.tile`myTile11`)
    }
    if (mySprite.image.equals(img`
        f f f . . . . . 
        f 1 1 f . . . . 
        f 1 d d f . . . 
        . f d d f . . . 
        . . f f b f . . 
        . . . . f e f . 
        . . . . . f e f 
        . . . . . . f f 
        `) && controller.A.isPressed()) {
        tiles.setTileAt(location, assets.tile`myTile2`)
    }
    if (mySprite.image.equals(img`
        f f f . . . . . 
        f f f f . . . . 
        f f d d f . . . 
        . f d d f . . . 
        . . f f b f . . 
        . . . . f e f . 
        . . . . . f e f 
        . . . . . . f f 
        `) && controller.A.isPressed()) {
        tiles.setTileAt(location, assets.tile`myTile7`)
    }
    if (mySprite.image.equals(img`
        . . f f . . . . 
        . f 1 d f . . . 
        f 1 1 f 6 f . . 
        f d f f 6 6 f . 
        . f 6 6 9 6 6 f 
        . . f 6 6 9 f . 
        . . . f 6 f . . 
        . . . . f . . . 
        `) && controller.B.isPressed()) {
        tiles.setTileAt(location, assets.tile`myTile`)
        sprites.destroy(textSprite2)
        sprites.destroy(textSprite)
        textSprite2 = textsprite.create("Erase")
        textSprite2.setOutline(1, 15)
        textSprite2.setPosition(14, 115)
        animation.runMovementAnimation(
        textSprite2,
        animation.animationPresets(animation.bobbing),
        2000,
        true
        )
    }
})
scene.onOverlapTile(SpriteKind.Enemy, assets.tile`myTile16`, function (sprite, location) {
    mySprite.setImage(img`
        f f f . . . . . 
        f 6 6 f . . . . 
        f 6 d d f . . . 
        . f d d f . . . 
        . . f f b f . . 
        . . . . f e f . 
        . . . . . f e f 
        . . . . . . f f 
        `)
    sprites.destroy(textSprite2)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile2`, function (sprite, location) {
    if (mySprite.image.equals(img`
        f f f . . . . . 
        f d d f . . . . 
        f d d d f . . . 
        . f d d f . . . 
        . . f f b f . . 
        . . . . f e f . 
        . . . . . f e f 
        . . . . . . f f 
        `) && controller.A.isPressed()) {
        tiles.setTileAt(location, assets.tile`myTile17`)
    }
    if (mySprite.image.equals(img`
        f f f . . . . . 
        f 2 2 f . . . . 
        f 2 d d f . . . 
        . f d d f . . . 
        . . f f b f . . 
        . . . . f e f . 
        . . . . . f e f 
        . . . . . . f f 
        `) && controller.A.isPressed()) {
        tiles.setTileAt(location, assets.tile`myTile4`)
    }
    if (mySprite.image.equals(img`
        f f f . . . . . 
        f 4 4 f . . . . 
        f 4 d d f . . . 
        . f d d f . . . 
        . . f f b f . . 
        . . . . f e f . 
        . . . . . f e f 
        . . . . . . f f 
        `) && controller.A.isPressed()) {
        tiles.setTileAt(location, assets.tile`myTile3`)
    }
    if (mySprite.image.equals(img`
        f f f . . . . . 
        f 5 5 f . . . . 
        f 5 d d f . . . 
        . f d d f . . . 
        . . f f b f . . 
        . . . . f e f . 
        . . . . . f e f 
        . . . . . . f f 
        `) && controller.A.isPressed()) {
        tiles.setTileAt(location, assets.tile`myTile5`)
    }
    if (mySprite.image.equals(img`
        f f f . . . . . 
        f 7 7 f . . . . 
        f 7 d d f . . . 
        . f d d f . . . 
        . . f f b f . . 
        . . . . f e f . 
        . . . . . f e f 
        . . . . . . f f 
        `) && controller.A.isPressed()) {
        tiles.setTileAt(location, assets.tile`myTile6`)
    }
    if (mySprite.image.equals(img`
        f f f . . . . . 
        f 9 9 f . . . . 
        f 9 d d f . . . 
        . f d d f . . . 
        . . f f b f . . 
        . . . . f e f . 
        . . . . . f e f 
        . . . . . . f f 
        `) && controller.A.isPressed()) {
        tiles.setTileAt(location, assets.tile`myTile8`)
    }
    if (mySprite.image.equals(img`
        f f f . . . . . 
        f 6 6 f . . . . 
        f 6 d d f . . . 
        . f d d f . . . 
        . . f f b f . . 
        . . . . f e f . 
        . . . . . f e f 
        . . . . . . f f 
        `) && controller.A.isPressed()) {
        tiles.setTileAt(location, assets.tile`myTile16`)
    }
    if (mySprite.image.equals(img`
        f f f . . . . . 
        f a a f . . . . 
        f a d d f . . . 
        . f d d f . . . 
        . . f f b f . . 
        . . . . f e f . 
        . . . . . f e f 
        . . . . . . f f 
        `) && controller.A.isPressed()) {
        tiles.setTileAt(location, assets.tile`myTile9`)
    }
    if (mySprite.image.equals(img`
        f f f . . . . . 
        f 3 3 f . . . . 
        f 3 d d f . . . 
        . f d d f . . . 
        . . f f b f . . 
        . . . . f e f . 
        . . . . . f e f 
        . . . . . . f f 
        `) && controller.A.isPressed()) {
        tiles.setTileAt(location, assets.tile`myTile10`)
    }
    if (mySprite.image.equals(img`
        f f f . . . . . 
        f e e f . . . . 
        f e d d f . . . 
        . f d d f . . . 
        . . f f b f . . 
        . . . . f e f . 
        . . . . . f e f 
        . . . . . . f f 
        `) && controller.A.isPressed()) {
        tiles.setTileAt(location, assets.tile`myTile11`)
    }
    if (mySprite.image.equals(img`
        f f f . . . . . 
        f f f f . . . . 
        f f d d f . . . 
        . f d d f . . . 
        . . f f b f . . 
        . . . . f e f . 
        . . . . . f e f 
        . . . . . . f f 
        `) && controller.A.isPressed()) {
        tiles.setTileAt(location, assets.tile`myTile7`)
    }
    if (mySprite.image.equals(img`
        . . f f . . . . 
        . f 1 d f . . . 
        f 1 1 f 6 f . . 
        f d f f 6 6 f . 
        . f 6 6 9 6 6 f 
        . . f 6 6 9 f . 
        . . . f 6 f . . 
        . . . . f . . . 
        `) && controller.B.isPressed()) {
        tiles.setTileAt(location, assets.tile`myTile`)
        sprites.destroy(textSprite2)
        sprites.destroy(textSprite)
        textSprite2 = textsprite.create("Erase")
        textSprite2.setOutline(1, 15)
        textSprite2.setPosition(14, 115)
        animation.runMovementAnimation(
        textSprite2,
        animation.animationPresets(animation.bobbing),
        2000,
        true
        )
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile5`, function (sprite, location) {
    if (mySprite.image.equals(img`
        f f f . . . . . 
        f d d f . . . . 
        f d d d f . . . 
        . f d d f . . . 
        . . f f b f . . 
        . . . . f e f . 
        . . . . . f e f 
        . . . . . . f f 
        `) && controller.A.isPressed()) {
        tiles.setTileAt(location, assets.tile`myTile17`)
    }
    if (mySprite.image.equals(img`
        f f f . . . . . 
        f 2 2 f . . . . 
        f 2 d d f . . . 
        . f d d f . . . 
        . . f f b f . . 
        . . . . f e f . 
        . . . . . f e f 
        . . . . . . f f 
        `) && controller.A.isPressed()) {
        tiles.setTileAt(location, assets.tile`myTile4`)
    }
    if (mySprite.image.equals(img`
        f f f . . . . . 
        f 4 4 f . . . . 
        f 4 d d f . . . 
        . f d d f . . . 
        . . f f b f . . 
        . . . . f e f . 
        . . . . . f e f 
        . . . . . . f f 
        `) && controller.A.isPressed()) {
        tiles.setTileAt(location, assets.tile`myTile3`)
    }
    if (mySprite.image.equals(img`
        f f f . . . . . 
        f 7 7 f . . . . 
        f 7 d d f . . . 
        . f d d f . . . 
        . . f f b f . . 
        . . . . f e f . 
        . . . . . f e f 
        . . . . . . f f 
        `) && controller.A.isPressed()) {
        tiles.setTileAt(location, assets.tile`myTile6`)
    }
    if (mySprite.image.equals(img`
        f f f . . . . . 
        f 9 9 f . . . . 
        f 9 d d f . . . 
        . f d d f . . . 
        . . f f b f . . 
        . . . . f e f . 
        . . . . . f e f 
        . . . . . . f f 
        `) && controller.A.isPressed()) {
        tiles.setTileAt(location, assets.tile`myTile8`)
    }
    if (mySprite.image.equals(img`
        f f f . . . . . 
        f 6 6 f . . . . 
        f 6 d d f . . . 
        . f d d f . . . 
        . . f f b f . . 
        . . . . f e f . 
        . . . . . f e f 
        . . . . . . f f 
        `) && controller.A.isPressed()) {
        tiles.setTileAt(location, assets.tile`myTile16`)
    }
    if (mySprite.image.equals(img`
        f f f . . . . . 
        f a a f . . . . 
        f a d d f . . . 
        . f d d f . . . 
        . . f f b f . . 
        . . . . f e f . 
        . . . . . f e f 
        . . . . . . f f 
        `) && controller.A.isPressed()) {
        tiles.setTileAt(location, assets.tile`myTile9`)
    }
    if (mySprite.image.equals(img`
        f f f . . . . . 
        f 3 3 f . . . . 
        f 3 d d f . . . 
        . f d d f . . . 
        . . f f b f . . 
        . . . . f e f . 
        . . . . . f e f 
        . . . . . . f f 
        `) && controller.A.isPressed()) {
        tiles.setTileAt(location, assets.tile`myTile10`)
    }
    if (mySprite.image.equals(img`
        f f f . . . . . 
        f e e f . . . . 
        f e d d f . . . 
        . f d d f . . . 
        . . f f b f . . 
        . . . . f e f . 
        . . . . . f e f 
        . . . . . . f f 
        `) && controller.A.isPressed()) {
        tiles.setTileAt(location, assets.tile`myTile11`)
    }
    if (mySprite.image.equals(img`
        f f f . . . . . 
        f 1 1 f . . . . 
        f 1 d d f . . . 
        . f d d f . . . 
        . . f f b f . . 
        . . . . f e f . 
        . . . . . f e f 
        . . . . . . f f 
        `) && controller.A.isPressed()) {
        tiles.setTileAt(location, assets.tile`myTile2`)
    }
    if (mySprite.image.equals(img`
        f f f . . . . . 
        f f f f . . . . 
        f f d d f . . . 
        . f d d f . . . 
        . . f f b f . . 
        . . . . f e f . 
        . . . . . f e f 
        . . . . . . f f 
        `) && controller.A.isPressed()) {
        tiles.setTileAt(location, assets.tile`myTile7`)
    }
    if (mySprite.image.equals(img`
        . . f f . . . . 
        . f 1 d f . . . 
        f 1 1 f 6 f . . 
        f d f f 6 6 f . 
        . f 6 6 9 6 6 f 
        . . f 6 6 9 f . 
        . . . f 6 f . . 
        . . . . f . . . 
        `) && controller.B.isPressed()) {
        tiles.setTileAt(location, assets.tile`myTile`)
        sprites.destroy(textSprite2)
        sprites.destroy(textSprite)
        textSprite2 = textsprite.create("Erase")
        textSprite2.setOutline(1, 15)
        textSprite2.setPosition(14, 115)
        animation.runMovementAnimation(
        textSprite2,
        animation.animationPresets(animation.bobbing),
        2000,
        true
        )
    }
})
controller.down.onEvent(ControllerButtonEvent.Released, function () {
    grid.move(mySprite, 0, 0)
})
scene.onOverlapTile(SpriteKind.Enemy, assets.tile`myTile6`, function (sprite, location) {
    mySprite.setImage(img`
        f f f . . . . . 
        f 7 7 f . . . . 
        f 7 d d f . . . 
        . f d d f . . . 
        . . f f b f . . 
        . . . . f e f . 
        . . . . . f e f 
        . . . . . . f f 
        `)
    sprites.destroy(textSprite2)
})
controller.right.onEvent(ControllerButtonEvent.Repeated, function () {
    grid.move(mySprite, 1, 0)
})
scene.onOverlapTile(SpriteKind.Enemy, assets.tile`myTile18`, function (sprite, location) {
    sprites.destroy(textSprite11)
    sprites.destroy(textSprite10)
    mySprite.setImage(img`
        . . f f . . . . 
        . f 1 d f . . . 
        f 1 1 f a f . . 
        f d f f a a f . 
        . f a a 5 a a f 
        . . f a a 5 f . 
        . . . f a f . . 
        . . . . f . . . 
        `)
    sprites.destroy(textSprite3)
    sprites.destroy(textSprite2)
    sprites.destroy(textSprite)
    sprites.destroy(textSprite5)
    textSprite3 = textsprite.create("Save")
    textSprite3.setPosition(80, 110)
    textSprite3.setOutline(1, 15)
    if (mySprite.image.equals(img`
        . . f f . . . . 
        . f 1 d f . . . 
        f 1 1 f a f . . 
        f d f f a a f . 
        . f a a 5 a a f 
        . . f a a 5 f . 
        . . . f a f . . 
        . . . . f . . . 
        `) && controller.A.isPressed()) {
        sprites.destroy(textSprite2)
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile10`, function (sprite, location) {
    if (mySprite.image.equals(img`
        f f f . . . . . 
        f d d f . . . . 
        f d d d f . . . 
        . f d d f . . . 
        . . f f b f . . 
        . . . . f e f . 
        . . . . . f e f 
        . . . . . . f f 
        `) && controller.A.isPressed()) {
        tiles.setTileAt(location, assets.tile`myTile17`)
    }
    if (mySprite.image.equals(img`
        f f f . . . . . 
        f 2 2 f . . . . 
        f 2 d d f . . . 
        . f d d f . . . 
        . . f f b f . . 
        . . . . f e f . 
        . . . . . f e f 
        . . . . . . f f 
        `) && controller.A.isPressed()) {
        tiles.setTileAt(location, assets.tile`myTile4`)
    }
    if (mySprite.image.equals(img`
        f f f . . . . . 
        f 4 4 f . . . . 
        f 4 d d f . . . 
        . f d d f . . . 
        . . f f b f . . 
        . . . . f e f . 
        . . . . . f e f 
        . . . . . . f f 
        `) && controller.A.isPressed()) {
        tiles.setTileAt(location, assets.tile`myTile3`)
    }
    if (mySprite.image.equals(img`
        f f f . . . . . 
        f 5 5 f . . . . 
        f 5 d d f . . . 
        . f d d f . . . 
        . . f f b f . . 
        . . . . f e f . 
        . . . . . f e f 
        . . . . . . f f 
        `) && controller.A.isPressed()) {
        tiles.setTileAt(location, assets.tile`myTile5`)
    }
    if (mySprite.image.equals(img`
        f f f . . . . . 
        f 7 7 f . . . . 
        f 7 d d f . . . 
        . f d d f . . . 
        . . f f b f . . 
        . . . . f e f . 
        . . . . . f e f 
        . . . . . . f f 
        `) && controller.A.isPressed()) {
        tiles.setTileAt(location, assets.tile`myTile6`)
    }
    if (mySprite.image.equals(img`
        f f f . . . . . 
        f 9 9 f . . . . 
        f 9 d d f . . . 
        . f d d f . . . 
        . . f f b f . . 
        . . . . f e f . 
        . . . . . f e f 
        . . . . . . f f 
        `) && controller.A.isPressed()) {
        tiles.setTileAt(location, assets.tile`myTile8`)
    }
    if (mySprite.image.equals(img`
        f f f . . . . . 
        f 6 6 f . . . . 
        f 6 d d f . . . 
        . f d d f . . . 
        . . f f b f . . 
        . . . . f e f . 
        . . . . . f e f 
        . . . . . . f f 
        `) && controller.A.isPressed()) {
        tiles.setTileAt(location, assets.tile`myTile16`)
    }
    if (mySprite.image.equals(img`
        f f f . . . . . 
        f a a f . . . . 
        f a d d f . . . 
        . f d d f . . . 
        . . f f b f . . 
        . . . . f e f . 
        . . . . . f e f 
        . . . . . . f f 
        `) && controller.A.isPressed()) {
        tiles.setTileAt(location, assets.tile`myTile9`)
    }
    if (mySprite.image.equals(img`
        f f f . . . . . 
        f e e f . . . . 
        f e d d f . . . 
        . f d d f . . . 
        . . f f b f . . 
        . . . . f e f . 
        . . . . . f e f 
        . . . . . . f f 
        `) && controller.A.isPressed()) {
        tiles.setTileAt(location, assets.tile`myTile11`)
    }
    if (mySprite.image.equals(img`
        f f f . . . . . 
        f 1 1 f . . . . 
        f 1 d d f . . . 
        . f d d f . . . 
        . . f f b f . . 
        . . . . f e f . 
        . . . . . f e f 
        . . . . . . f f 
        `) && controller.A.isPressed()) {
        tiles.setTileAt(location, assets.tile`myTile2`)
    }
    if (mySprite.image.equals(img`
        f f f . . . . . 
        f f f f . . . . 
        f f d d f . . . 
        . f d d f . . . 
        . . f f b f . . 
        . . . . f e f . 
        . . . . . f e f 
        . . . . . . f f 
        `) && controller.A.isPressed()) {
        tiles.setTileAt(location, assets.tile`myTile7`)
    }
    if (mySprite.image.equals(img`
        . . f f . . . . 
        . f 1 d f . . . 
        f 1 1 f 6 f . . 
        f d f f 6 6 f . 
        . f 6 6 9 6 6 f 
        . . f 6 6 9 f . 
        . . . f 6 f . . 
        . . . . f . . . 
        `) && controller.B.isPressed()) {
        tiles.setTileAt(location, assets.tile`myTile`)
        sprites.destroy(textSprite2)
        sprites.destroy(textSprite)
        textSprite2 = textsprite.create("Erase")
        textSprite2.setOutline(1, 15)
        textSprite2.setPosition(14, 115)
        animation.runMovementAnimation(
        textSprite2,
        animation.animationPresets(animation.bobbing),
        2000,
        true
        )
    }
})
controller.up.onEvent(ControllerButtonEvent.Repeated, function () {
    grid.move(mySprite, 0, -1)
})
scene.onOverlapTile(SpriteKind.Enemy, assets.tile`myTile21`, function (sprite, location) {
    grid.place(mySprite2, tiles.getTileLocation(19, 13))
    sprites.destroy(textSprite2)
    sprites.destroy(textSprite3)
})
controller.menu.onEvent(ControllerButtonEvent.Repeated, function () {
    sprites.destroy(textSprite11)
    grid.move(mySprite2, 0, -1)
})
scene.onOverlapTile(SpriteKind.Enemy, assets.tile`miMosaico0`, function (sprite, location) {
    sprites.destroy(textSprite11)
    sprites.destroy(textSprite3)
    sprites.destroy(textSprite2)
    textSprite11 = textsprite.create("Colours")
    textSprite11.setOutline(1, 15)
    textSprite11.setPosition(80, 110)
    if (controller.A.isPressed()) {
        if (Math.percentChance(50)) {
            color.setPalette(
            color.StillLife
            )
        } else if (Math.percentChance(50)) {
            color.setPalette(
            color.Adventure
            )
        } else {
            color.setPalette(
            color.originalPalette
            )
        }
    }
})
scene.onOverlapTile(SpriteKind.Enemy, assets.tile`myTile7`, function (sprite, location) {
    mySprite.setImage(img`
        f f f . . . . . 
        f f f f . . . . 
        f f d d f . . . 
        . f d d f . . . 
        . . f f b f . . 
        . . . . f e f . 
        . . . . . f e f 
        . . . . . . f f 
        `)
    sprites.destroy(textSprite2)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile11`, function (sprite, location) {
    if (mySprite.image.equals(img`
        f f f . . . . . 
        f d d f . . . . 
        f d d d f . . . 
        . f d d f . . . 
        . . f f b f . . 
        . . . . f e f . 
        . . . . . f e f 
        . . . . . . f f 
        `) && controller.A.isPressed()) {
        tiles.setTileAt(location, assets.tile`myTile17`)
    }
    if (mySprite.image.equals(img`
        f f f . . . . . 
        f 2 2 f . . . . 
        f 2 d d f . . . 
        . f d d f . . . 
        . . f f b f . . 
        . . . . f e f . 
        . . . . . f e f 
        . . . . . . f f 
        `) && controller.A.isPressed()) {
        tiles.setTileAt(location, assets.tile`myTile4`)
    }
    if (mySprite.image.equals(img`
        f f f . . . . . 
        f 4 4 f . . . . 
        f 4 d d f . . . 
        . f d d f . . . 
        . . f f b f . . 
        . . . . f e f . 
        . . . . . f e f 
        . . . . . . f f 
        `) && controller.A.isPressed()) {
        tiles.setTileAt(location, assets.tile`myTile3`)
    }
    if (mySprite.image.equals(img`
        f f f . . . . . 
        f 5 5 f . . . . 
        f 5 d d f . . . 
        . f d d f . . . 
        . . f f b f . . 
        . . . . f e f . 
        . . . . . f e f 
        . . . . . . f f 
        `) && controller.A.isPressed()) {
        tiles.setTileAt(location, assets.tile`myTile5`)
    }
    if (mySprite.image.equals(img`
        f f f . . . . . 
        f 7 7 f . . . . 
        f 7 d d f . . . 
        . f d d f . . . 
        . . f f b f . . 
        . . . . f e f . 
        . . . . . f e f 
        . . . . . . f f 
        `) && controller.A.isPressed()) {
        tiles.setTileAt(location, assets.tile`myTile6`)
    }
    if (mySprite.image.equals(img`
        f f f . . . . . 
        f 9 9 f . . . . 
        f 9 d d f . . . 
        . f d d f . . . 
        . . f f b f . . 
        . . . . f e f . 
        . . . . . f e f 
        . . . . . . f f 
        `) && controller.A.isPressed()) {
        tiles.setTileAt(location, assets.tile`myTile8`)
    }
    if (mySprite.image.equals(img`
        f f f . . . . . 
        f 6 6 f . . . . 
        f 6 d d f . . . 
        . f d d f . . . 
        . . f f b f . . 
        . . . . f e f . 
        . . . . . f e f 
        . . . . . . f f 
        `) && controller.A.isPressed()) {
        tiles.setTileAt(location, assets.tile`myTile16`)
    }
    if (mySprite.image.equals(img`
        f f f . . . . . 
        f a a f . . . . 
        f a d d f . . . 
        . f d d f . . . 
        . . f f b f . . 
        . . . . f e f . 
        . . . . . f e f 
        . . . . . . f f 
        `) && controller.A.isPressed()) {
        tiles.setTileAt(location, assets.tile`myTile9`)
    }
    if (mySprite.image.equals(img`
        f f f . . . . . 
        f 3 3 f . . . . 
        f 3 d d f . . . 
        . f d d f . . . 
        . . f f b f . . 
        . . . . f e f . 
        . . . . . f e f 
        . . . . . . f f 
        `) && controller.A.isPressed()) {
        tiles.setTileAt(location, assets.tile`myTile10`)
    }
    if (mySprite.image.equals(img`
        f f f . . . . . 
        f 1 1 f . . . . 
        f 1 d d f . . . 
        . f d d f . . . 
        . . f f b f . . 
        . . . . f e f . 
        . . . . . f e f 
        . . . . . . f f 
        `) && controller.A.isPressed()) {
        tiles.setTileAt(location, assets.tile`myTile2`)
    }
    if (mySprite.image.equals(img`
        f f f . . . . . 
        f f f f . . . . 
        f f d d f . . . 
        . f d d f . . . 
        . . f f b f . . 
        . . . . f e f . 
        . . . . . f e f 
        . . . . . . f f 
        `) && controller.A.isPressed()) {
        tiles.setTileAt(location, assets.tile`myTile7`)
    }
    if (mySprite.image.equals(img`
        . . f f . . . . 
        . f 1 d f . . . 
        f 1 1 f 6 f . . 
        f d f f 6 6 f . 
        . f 6 6 9 6 6 f 
        . . f 6 6 9 f . 
        . . . f 6 f . . 
        . . . . f . . . 
        `) && controller.B.isPressed()) {
        tiles.setTileAt(location, assets.tile`myTile`)
        sprites.destroy(textSprite2)
        sprites.destroy(textSprite)
        textSprite2 = textsprite.create("Erase")
        textSprite2.setOutline(1, 15)
        textSprite2.setPosition(14, 115)
        animation.runMovementAnimation(
        textSprite2,
        animation.animationPresets(animation.bobbing),
        2000,
        true
        )
    }
})
scene.onOverlapTile(SpriteKind.Enemy, assets.tile`myTile4`, function (sprite, location) {
    sprites.destroy(textSprite11)
    sprites.destroy(textSprite3)
    sprites.destroy(textSprite5)
    sprites.destroy(textSprite3)
    mySprite.setImage(img`
        f f f . . . . . 
        f 2 2 f . . . . 
        f 2 d d f . . . 
        . f d d f . . . 
        . . f f b f . . 
        . . . . f e f . 
        . . . . . f e f 
        . . . . . . f f 
        `)
    sprites.destroy(textSprite2)
    textSprite5 = textsprite.create("Paint")
    textSprite5.setOutline(1, 15)
    textSprite5.setPosition(143, 112)
    animation.runMovementAnimation(
    textSprite5,
    animation.animationPresets(animation.bobbing),
    2000,
    true
    )
})
controller.up.onEvent(ControllerButtonEvent.Released, function () {
    grid.move(mySprite, 0, 0)
})
controller.left.onEvent(ControllerButtonEvent.Repeated, function () {
    grid.move(mySprite, -1, 0)
})
let textSprite11: TextSprite = null
let textSprite10: TextSprite = null
let textSprite4: TextSprite = null
let textSprite5: TextSprite = null
let textSprite3: TextSprite = null
let textSprite2: TextSprite = null
let c: TextSprite = null
let textSprite8: TextSprite = null
let mySprite2: Sprite = null
let mySprite: Sprite = null
let textSprite: TextSprite = null
color.startFade(color.Black, color.originalPalette)
scene.setBackgroundImage(img`
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc2cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccecccccccccacccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccaccccccccccccccccccccccccccccccccccccccccccccccccccc9ccccccccccccccccccccccccccccccccccccccc
    ccccccccccccccccccccccccc9ccccccccccc3cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc3cccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccc2ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    ccccccccccccccccccccccccccccccccccccccccccccccccccccc1cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc5cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    ccccacccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc1ccccccccccccccccccccccccccccccc1ccccccccccccccccc5cccccccccccccc
    ccccccccccccccccccccccccccccccccfccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccc7ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfcccccccccccccccccccc
    ccccccccccccccccccccccc1cccccccccccccccccccccccccccccccccccccccccccccccccccccccfccccccccccccccccccccccc9cccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccecccccccccccccccff2fccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccf2222ffccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccff2222222fcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    ccccccccccccccccccccccccccccccccccccc2cccccccccccccccccccccccccccccccccccf2222222222ffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccff2222222222222fccccccccc7ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccf2222222222222222ffcccccccccccccccccccccccccccc5cccccccccccccccccccccccccccccccccccccccccc
    ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccff2222222222222222222fcccccccccccccccccccccccccccccccccccccc1ccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccc9ccccccccccccccf2222222222222222222222ffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    ccccccccccccccfccccccccccccccccccccccccccccccccccccccccccccccccccff2222222222222222222222222fccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccc1cccccccccccccccccccf2222222222222222222222222222ffccccccccccccccccccccccccccccacccccccccccccccccccccccccccccccccccc
    ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccff2222222222222222222222222222222ffccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    ccccaccccccccccccccccccccccccccccccccccccccccccccccccccccccccf222222222222222fffff222222222222222fccccccccccccccccccceccccccccccccccccccccccccccc3cccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccff2222222222222222f111f2222222222222222ffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccf222222222222222222f111f222222222222222222fccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    ccccccccccccccccccccccccccccccccccccccccccccccccccccccccff2222222222222222222f111f2222222222222222222ffcccccccccccccccccccfccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccc3ccccccccccccccccccccf222222222222222222222f111f222222222222222222222fcccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccff2222222222222222222222f111f2222222222222222222222ffcccccccccccccccccccccccccccccccccccccccccccccccccc9ccc
    ccccccccccccccccccc1cccccccccccccccccccccccccccccccff222222222222222222222222f111f222222222222222222222222fccccccccccccccccccccccccccccccccccccccccccccccccccccc
    ccccccccccccccccccccccccccccccccccccccccccccccccccf22222222222222222222222222f111f2222222222222222222222222ffccccccccccccccccccccccccccccccccccccccccccccccccccc
    ccccccccc7ccccccccccccccccccccccccccccccccccccccff222222222222222222222222222f111f222222222222222222222222222fcccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccf22222222222222222222222222222f111f2222222222222222222222222222ffcccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccff222222222222222222222222222222f111f222222222222222222222222222222fcccccccccccccccccccccccc2cccccccccccccccccccccc
    ccccccccccccccccccccccccccccccccccccccccccccf22222222222222222222222222222222f111f2222222222222222222222222222222ffcccccccccccccc9cccccccc2ccccccccccccccccccccc
    ccccccccccccccccccccccccccccccccccccccccccff222222222222222222222222222222222f111f222222222222222222222222222222222fcccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccf22222222222222222222222222222222222f111f2222222222222222222222222222222222ffcccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccff222222222222222222222222222222222222f111f222222222222222222222222222222222222fccccccccccccccccccccccccccccccccccccccccc
    ccccccccccccccccccccccccccccccccccccccf22222222222222222222222222222222222222fffff2222222222222222222222222222222222222ffccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccc5cccccccccccccff22222222222222222222222222222222222222222222222222222222222222222222222222222222222ffccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccf22222222222222222222222222222222222222222fffff22222222222222222222222222222222222222222fcccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccff22222222222222222222222222222222222222222f11111f22222222222222222222222222222222222222222ffcccccccccccccccccccccccccccccccccc
    ccccccccccccccccccccccccccccccccf2222222222222222222222222222222222222222222f11111f2222222222222222222222222222222222222222222fccccccccccccccccccccccccccccccccc
    ccccccccc2ccccccccccccccccccccff22222222222222222222222222222222222222222222f11111f22222222222222222222222222222222222222222222ffccccccccccccccc55cccccccccccccc
    cccccccccccccccccccccccccccccf2222222222222222222222222222222222222222222222f11111f2222222222222222222222222222222222222222222222fcccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccff22222222222222222222222222222222222222222222222f11111f22222222222222222222222222222222222222222222222ffcccccccccccccccccccccccccccc
    ccccccccccccccccccccccccccf22222222222222222222222222222222222222222222222222fffff22222222222222222222222222222222222222222222222222fccccccccccccccccccccccccccc
    ccccccccccccccccccccccccff22222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222ffccccccccccccccccccccccccc
    cccccccccccccccccccccccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc7ccccccccccc
    cccccccccecccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc2ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    ccccccccccccccccccccccccccccccccccccccccccccccc1cccccccccccccccccccccccccccccccccccccccccccc3ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccecc
    ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc9cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc9ccccccccccccccccccccccccccccccccccccccccccc
    ccccccccccccccccccccccccccccccccccc3cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccc5ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc1ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc1ccccccccccccccccccccccccccccccccccccccccccccccccccccccc1ccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfcccccccccccccccccccccccccccccccccccccccccc
    ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc7cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc2cccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc1cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccc9ccccccccccccccccccccccc1ccccccccccccccccccccccccccccccccccccccccccccccccccccecccccccccccccccacccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    ccccccccccccccccccacccccccccccccccccccccccccccccccccccc9ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc3cccccc
    cccccccccccccccccccccccccccccccccccc5ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc2cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccfcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc3ccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc1ccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccacccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc9cccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc7c
    cccccccccccccccccccccccccccccccc9cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc2cccccccccccccccccccccccccccccccccccc
    ccccccceccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc1cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    ccccccccccccccccccccccccccccccccccccccccccccccceccccccccccccccccccccccccccccccccccccccccccccccccccccccc9cccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    ccccccccccccccccc1ccccccccccccccccccc3cccccccccccccccccccccccccccccccccccccccccccacccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccc7ccccccccccccccc3ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccc2ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc2cccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc7cccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc25cccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc1cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccc3ccccccccccccccccccccccccc1ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccacccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccc9ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc5cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    ccccc2ccccccccccccccccccccaccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccceccccccc
    ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc7cccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccc1cccccccccccccccccccccccccccccccccccccccc2cccccccccccccccccccccccccccccccccccccccccccccccccccccccc5ccccccccccccccccc1ccccccccccccccccccccccccccccc
    ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc7ccccccccceccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfc
    ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccaccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccc5ccccccccccccccccccfcccccccccccccc3cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    `)
music.play(music.createSong(hex`00aa000408020600001c00010a006400f4016400000400000000000000000000000000050000041e0000000400011d08000c0001200c001000012010001400011d18001c00012004001c00100500640000041e000004000000000000000000000000000a0400041e0000000400011d08000c0001200c001000012010001400011d18001c00012005001c000f0a006400f4010a00000400000000000000000000000000000000021e0000000400011d08000c0001200c001000012010001400011d18001c00012006001c00010a006400f401640000040000000000000000000000000000000002060020002800011d07001c00020a006400f4016400000400000000000000000000000000000000031e0000000800011108001000011410001800011118002000011420002800011109010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c8006000000001000310000708000900031201080c000d00010810001100031000061800190003120108200021000310000624002500011028002900030002042c002d0004121406083400350004121402043800390004121402043c003d000412140204`), music.PlaybackMode.UntilDone)
game.setDialogCursor(img`
    . . . . . . . . . . . . . . . . 
    . . . . . f f f f f f f f . . . 
    . . . f f 4 4 4 4 4 4 4 e f . . 
    . f f 4 4 9 4 f 4 4 4 4 4 e f . 
    f 4 4 4 7 4 f e f 4 4 4 4 e f . 
    f 4 4 5 4 4 f e f 4 4 4 4 e f . 
    f 4 2 4 4 f f f f f 4 4 4 e f . 
    f 4 4 4 f e 4 4 4 4 f 4 4 e f . 
    f 4 4 4 f e 4 4 f e e e e e f . 
    f 4 4 4 4 4 4 4 e f f f f f . . 
    f e 4 4 4 4 4 4 e f . . . . . . 
    . f e 4 4 4 4 4 e f . . . . . . 
    . . f e e e e e f . . . . . . . 
    . . . f f f f f . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `)
game.setDialogFrame(img`
    . . . . f f f f f f f f f . . . . 
    . . . f d d d d d d d d d f . . . 
    . . f d d d d d d d d d d d f . . 
    . f d d d 1 1 1 1 1 1 1 d d d f . 
    f d d d 1 1 1 1 1 1 1 1 1 d d d f 
    f d d 1 1 1 1 1 1 1 1 1 1 1 d d f 
    f d d 1 1 1 1 1 1 1 1 1 1 1 d d f 
    f d d 1 1 1 1 1 1 1 1 1 1 1 d d f 
    f d d 1 1 1 1 1 1 1 1 1 1 1 d d f 
    f d d 1 1 1 1 1 1 1 1 1 1 1 d d f 
    f d d 1 1 1 1 1 1 1 1 1 1 1 d d f 
    f d d 1 1 1 1 1 1 1 1 1 1 1 d d f 
    f d d d 1 1 1 1 1 1 1 1 1 d d d f 
    . f d d d 1 1 1 1 1 1 1 d d d f . 
    . . f d d d d d d d d d d d f . . 
    . . . f d d d d d d d d d f . . . 
    . . . . f f f f f f f f f . . . . 
    `)
game.showLongText("ATENTION! This game was posted in the kiosk and in the forum. The game have a copyright. DONT COPY!", DialogLayout.Bottom)
color.startFadeFromCurrent(color.Black)
pause(2000)
color.startFade(color.Black, color.originalPalette)
music.stopAllSounds()
music.setVolume(255)
music.play(music.createSong(hex`0078000408080400001c00010a006400f40164000004000000000000000000000000000500000496000400080001140c001000011418001c0001142400280001142c003000011438003c0001144400480001144c005000011458005c0001146400680001146c007000011478007c0001128400880001908c009000019098009c000190a400a8000190ac00b0000190b800bc000190c400c800010fcc00d000010fd800dc00010fe400e8000114ec00f0000114f400f8000195fc000001019503001c0001dc00690000045e0100040000000000000000000005640001040003660008001000012410002000012520003000012030004000011e40004800012048005800019c58006000011b6000700001198800900001249000a0000125a000b0000120b800c000011ec000d0000120d000d800011ed800e000019ce000e800011be800f800011907001c00020a006400f401640000040000000000000000000000000000000003a80000000400010d0c001000010d10001400010820002400010d2c003000010d30003400010838003c00010c40004400010d4c005000010d50005400010860006400010d6c007000010d70007400010878007c00018b8000840001898c0090000189900094000144a000a4000189ac00b0000189b000b4000144b800bc000108c000c4000189cc00d0000189d000d4000144e000e4000189ec00f0000189f000f4000108f800fc00018b09010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c80050010000010001030400050001060600070001050800090001060c000d0001031000110001032000210001032400250001062600270001052800290001062c002d0001033000310001034000410001034400450001064600470001054800490001064c004d0001035000510001036000610001036400650001066600670001056800690001066c006d0001037000710001037400750001067600770001057800790001067c007d0001038000810001038400850001068600870001058800890001068c008d000103900091000103a000a1000103a400a5000106a600a7000105a800a9000106ac00ad000103b000b1000103c000c1000103c400c5000106c600c7000105c800c9000106cc00cd000103d000d1000103e000e1000103e400e5000106e600e7000105e800e9000106ec00ed000103f000f1000103f400f5000106f600f7000105f800f9000106fc00fd000103`), music.PlaybackMode.LoopingInBackground)
pause(100)
scene.setBackgroundImage(img`
    eeeee2222222222222222222222222222222222ee2222ee2222ee2222222eeeee2222222222222222222222222222222222ee22222eeee222ee2eeeee2222222222222222222222222222222222ee222
    222eeeee22222222222222222222222222222eee2222eeee2222ee222222222eeeee22222222222222222222222222222eee2222eeeee222ee22222eeeee22222222222222222222222222222eee2222
    222222eeeeeee222222222222222222222eeee22222eeeeee2222eee2222222222eeeeeee222222222222222222222eeee22222eeee2222ee222222222eeeeeee222222222222222222222eeee22222e
    222222222eeeeeeeeeeeeee2222222eeeee222222eeee22eee2222eeee22222222222eeeeeeeeeeeeee2222222eeeee222223eeee22222eeee22222222222eeeeeeeeeeeeee2222222eeeee222222eee
    e222222222222222222222222222eeee2222222eeee22222eef22222eeeee222222222222222222222222222eeee2333333eeee22222efe2eeeee222222222222222222222222222eeee2222222eeee2
    eeeeeeee22222222222222222222222222222eee2222222eeeefe222222eeeeeeeee22222222222222333333333333322eee2222222efe22222eeeeeeeee22222222222222222222222222222eee2222
    2222eeeeeeeee222222222222222222222eeee2222222eeeeeeeffe222222222eeeeeeeee222223333333333322222eeee2223322effeee222322222eeeeeeeee222222222222222222222eeee222222
    2223322222222222222222222222222eeee2222222eeeeeeee222efffe222222222222222222222222222222222eeee2233332efffe22eeeee233333222222222222222222222222222eeee2222222ee
    2222233332222222222222222222222222222222eeeeeeeee22222eefffe2222222222222222222222222222222233333332efffee22222eeeee2233333333333333333332222222222222222222eeee
    eeee22233333333333333332222222222222eeeeee222222222eeeee22ffffee22222222223333333333333333333332eeffff22eeeee22222eeeeee23333333333333222222222222222222eeeeeeee
    eeeeeeeeee233333333332222222222eeeeeee2222222222eeeee2222ffeefffffffee2222222222223333333332fffffffeeff2222eeeee222222eeeeeeee222222222222222222222eeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee22eeeeeeee2222eee222222ffeeeeeeeeeeffffffffffffffffffffffffeeeeeeeeeeff222222eee2222eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeee22222222222222ee22222222222222222222222222effeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffe22222222222222222222222222ee22222222222222eeeeeeeeeee
    eeeeeeeeee22222222222222222eeee2222222222222222222efffeeeeeeeeeeeeeeeeee2eeeeeeeeeeeeeeeeee2eeeeeeeeeeeeeefffe2222222222222222222eeee22222222222222222eeeeeeeeee
    eeeeeeeeee222222222222222222eeeeeeee222222222eeefffeeeeeeeeeeeeeeeeeeeee222222eeeeeeeeee2222eeeeeeeeeeeeeeeeefffeee222222222eeeeeeee222222222222222222eeeeeeeeee
    eeeeeeeee2222222222222222222eeeeeeeeeeeeeeeeffffeeeeeeeeeeeeeeeeeeeeeeee22222222222222222222ee2eeeeeeeeeeeeeeeeeffffeeeeeeeeeeeeeeee2222222222222222222eeeeeeeee
    eeeeeeeee2222222222222222222ee2222effffffffffffeeeeeeeeeeeeeeeeeeeeeeeee22222222222222222222ee22eeeeeeeeeeeeeeeefffffffffffffe2222ee2222222222222222222eeeeeeeee
    eeeeeeee22e22222222222222222ee2222eeee2efffffffeeeeeeeeeeeeeeeeeeeee22ee22222222222222222222e222eeeeeeeeeeeeeeeeffffffffe2eeee2222ee22222222222222222e22eeeeeeee
    eeeeeeee2222222222222222222ee22222ee22eeffffffeeeeeeeeeeeeeeeeeeeeee22ee22222222222222222222e222eeeeeeeeeeeeeeeeffffffffee22ee22222ee2222222222222222222eeeeeeee
    eeeeeeee2e2222222222222222eee22222ee22efffffffeeeeeeeeeeeeeeeeeeeeee22ee22222222222222222222e222eeeeeeeeeeeeeeeefffffffffe22ee22222eee2222222222222222e2eeeeeeee
    eeeeeee22e2222222222222222ee222222e22eefffffffeeeeeeeeeeeeeeeeeeeeee22ee22222222222222222222e222eeeeeeeeeeeeeeeefffffffffee22e222222ee2222222222222222e22eeeeeee
    eeeeeee22e222222222222222ee222222ee22effffffffeeeeeeeeeeeeeeeeee2eee22ee22222222222222222222e222eeee2eeeeeeeeeeeefffffffffe22ee222222ee222222222222222e22eeeeeee
    eeeeee22e2222222222222222ee222222e22eeffffffffeeeeeeeeeeeeeeeeee2eee22ee22222222222222222222e2222eee2eeeeeeeeeeeefffffffffee22e222222ee2222222222222222e22eeeeee
    eeeeee22e222222222222222ee222222ee2eeeffffffffeeeeeeeeeeeeeeeeee2ee222e222222222222222222222e2222eee2eeeeeeeeeeeefffffffffe3e2ee222222ee222222222222222e22eeeeee
    eeeee22ee222222222222222ee22222ee22eefffffffffeeeeeeeeeeeeeeeeee2ee222e2222222222222222222222e222eee2eeeeeeeeeeeeffffffffffe322ee22222ee222222222222222ee22eeeee
    eeeee22e222222222222222ee222222ee2eeeffffffffeeeeeeeeeeeeeeeeee22ee222e2222222222222222222222e222eee2eeeeeeeeeeeeffffffffffe3e2ee222222ee222222222222222e22eeeee
    eeee22ee222222222222222e222222ee22eefffffffffeeeeeeeeeeeeeeeeee22ee222e2222222222222222222222e222eee22eeeeeeeeeeeeffffffffffe322ee222222e222222222222222ee22eeee
    eeee22ee22e22222222222ee22222ee22eeffffffffffeeeeeeeeeeeeeeeeee22ee222e2222222222222222222222e222eeee2eeeeeeeeeeeefffffffffff3322ee22222ee22222222222e22ee22eeee
    eeee2ee222222222222222e222222ee32eeffffffffffeeeeeeeeeeeeeeeeee22ee222e2222222222222222222222e2222eee2eeeeeeeeeeeefffffffffffe332ee222222e222222222222222ee2eeee
    eee22ee22e22222222222e222222ee32eeffffffeffffeeeeeeeeeeeeeeeeee22ee222e2222222222222222222222e2222eee2eeeeeeeeeeeeffffffffffff3322ee222222e22222222222e22ee22eee
    eee2ee222e22222222222e22222ee23eeeffffffeffffeeeeeeeeeeeeeeeeee22ee222e2222222222222222222222e2222eee2eeeeeeeeeeeeffffffffffffe3322ee22222e22222222222e222ee2eee
    ee22ee22e22222222222e222222ee32eefffffffefffeeeeeeeeeeeeeeeeeee22ee222e2222222222222222222222e2222eee2eeeeeeeeeeeeeffffffffffffe332ee222222e22222222222e22ee22ee
    ee2eee2ee2222222222e222222ee33eeefffffffefffeefeeeeeeeeeeeeeee222ee22ee2222222222222222222222e2222eee22eeeeeeeeeeeeffffffffffffe3322ee222222e2222222222ee2eee2ee
    eeeee22ee2222222222e22222ee33eeeffffffffffffeefeeeeeeeeeeeeeee22eee22ee2222222222222222222222e2222eee22eeeeeeeeeeeefffffffffffffe3322ee22222e2222222222ee22eeeee
    eeeee2ee2222222222222222eee33eeffffffffeffffeefeeeeeeeeeeeeeee22eee22ee2222222222222222222222e2222eee22eeeeeeeeeeeefeffffffffffffe332eee2222222222222222ee2eeeee
    eeee22ee2222222222222222ee33eeeffffffffeffffeefeeeeeeeeeeeeeee22ee222ee2222222222222222222222e2222eee22eeeeeeeeeeeefeffffefffffffe3332ee2222222222222222ee22eeee
    eeee2ee2222222222222222ee33eeefffffffffeffffeefeeeeeeeeeeeeeee22ee222e22222222222222222222222e2222eee22eeeeeeeeeeeeeeffffeffffffffe3322ee2222222222222222ee2eeee
    eeee2ee222222222222222ee333eeffffffffffefffeeeeeeeeeeeeeeeeeee22ee222e22222222222222222222222e2222eee22eeeeeeeeeeeeeeefffefffffffffe3322ee222222222222222ee2eeee
    eee2ee2222222222222222ee33eeeffffffffffefffeeeeeeeeeeeeeeeeeee22ee222e22222222222222222222222e22222ee22eeeeeeeeeeeeeeefffefffffffffee332ee2222222222222222ee2eee
    eee2ee222222222222222ee33eeefffffffffffefffeefeeeeeeeeeeeeeeee22ee222e22222222222222222222222ee2222eee2eeeeeeeeeeeeeeefffeffffffffffe3332ee222222222222222ee2eee
    ee2ee2222222222222222e33eeefffffffffffeefffeefeeeeeeeeeeeeeee222ee222e22222222222222222222222ee2222eee22eeeeeeeeeeeeeeffffeffffffffffe3322e2322222222222222ee2ee
    ee2ee222222222222232e333eeffffffffffffeefffeefeeeeeeeeeeeeeee22eee222e22222222222222222222222ee2222eee22eeeeeeeeeeeeeeefffefffffffffffe3322e322222222222222ee2ee
    e2ee2222222222222322e33eeeffffffffffffeefffeefeeeeeeeeeeeeeee22ee2222e22222222222222222222222ee2222eee22eeeeeeeeeeeeeeefffefffffffffffee332e2322222222222222ee2e
    e2ee222222222222332e33eeefffffffffffffeefffeefeeeeeeeeeeeeeee22ee2222e22222222222222222222222ee2222eee22eeeeeeeeeeeeeeefffeffffffffffffe3322e322222222222222ee2e
    eee222222222222332e33eeeffffffffffffffeeffeeeeeeeeeeeeeeeeeee22ee2222222222222222222222222222ee2222eee22eeeeeeeeeeeeeeefffefffffffffffffe3322e322222222222222eee
    eee222222222222322332eefffffffffffffffefffeefeeeeeeeeeeeeeeee22ee2222222222222222222222222222ee2222eee22eeeeeeeeeeeeeeeeffeefffffffffffffe3322322222222222222eee
    ee222222222222332333eeeffffffffffffffeefffeefeeeeeeeeeeeeeee222ee22222222222222222222222222222e2222eee22eeeeeeeeeeeeeeeeffeefffffffffffffee3223322222222222222ee
    ee22222222222332233eeefffffffffffffffeefffeefeeeeeeeeee2eeee222ee22222222222222222222222222222e2222eee22eeeeeeeeeeeeeeeeffeeffffffffffffffee322322222222222222ee
    e22222222222332233eeeffffffffffffffffeefffeefeeeeeeeeee2eeee22eee22222222222222222222222222222e2222eee22eeeeeeeeeeeeeeeefffefffffffffffffffe3323322222222222222e
    e22222222222332332eefffffffffffffffffeefffeefeeeeeeeeeeeeeee22eee22222222222222222222222222222e2222eeee2eeeeeeeeeeeeeeeefffeefffffffffffffffe322322222222222222e
    22222e22222332232eeefffffffffffffffffeefffeefeeeeeeeee2eeeee22ee222222222222222222222222222222e22222eee22eeeeeeeeeeeeeeeeffeefffffffffffffffeee23322222222e22222
    22222e2222332232eeeffffffffffffffffffeeffeefeeeeeeeeee2eeeee22ee222222222222222222222222222222e22222eee22eeeeeeeeeeeeeeeeffeeffffffffffffffffeee2322222222e22222
    222222222332222eeeffffffffffffffffffeefffeefeeeeeeeeee2eeee222ee222222222222222222222222222222e22222eee22eeeeeeeeeeeeeeeeffeefffffffffffffffffeee332222222222222
    2222e222233222eeefffffffffffffffffffeefffeefeeeeeeeeee2eeee222ee222222222222222222222222222222e22222eee22eeeeeeeeeeeeeeeefffeffffffffffffffffffeee322222222e2222
    2222e222332222eeefffffffffffffffffffeefffeefeeeeeeeeee2eeee222ee222222222222222222222222222222e22222eee22eeeeeeeeeeeeeeeefffeefffffffffffffffffeee332222222e2222
    222e222332222eeeffffffffffffffffffffeefffeefeeeeeeeee22eeee222ee222222222222222222222222222222e22222eee22eeeeeeeeeeeeeeeefffeeffffffffffffffffffeee322222222e222
    222e22232e22eeefffffffffffffffffffffeefffeefeeeeeeeee2eeeee22eee222222222222222222222222222222222222eee22eeeeeeeeeeeeeeeeeffeefffffffffffffffffffee332e22222e222
    222e22222e2eeeffffffffffffffffffffffeefffefeeeeeeeeee2eeeee22ee2222222222222222222222222222222222222eee22eeeeeeeeeeeeeeeeeffeeffffffffffffffffffffee32e22222e222
    22ee2222e2eeeffffffffffffffffffffffeeffffefeeeeeeeeee2eeee222ee2222222222222222222222222222222222222eee22eeeeeeeeeeeeeeeeefffefffffffffffffffffffffee32e2222ee22
    22e22222e2eeeffffffffffffffffffffffeeffffefeeeeeeeee22eeee222ee2222222222222222222222222222222222222eee222eeeeeeeeeeeeeeeefffeeffffffffffffffffffffee32e22222e22
    22e2222eeeeefffffffffffffffffffffffeefffeefeeeeeeeee22eeee222ee2222222222222222222222222222222222222eee222eeeeeeeeeeeeeeeefffeefffffffffffffffffffffeeeee2222e22
    2ee2222eeeeffffffffffffffffffffffffeefffeefeeeeeeeee22eeee222ee2222222222222222222222222222222222222eeee22e2eeeeeeeeeeeeeefffeeffffffffffffffffffffffeeee2222ee2
    2e2222eeeefffffffffffffffffffffffffeefffefeeeeeeeeee2eeeee222ee2222222222222222222222222222222222222eeee22eeeeeeeeeeeeeeeeeffeefffffffffffffffffffffffeeee2222e2
    2e222eee2effffffffffffffffffffffffeeefffefeeeeeeeeee2eeee222eee222e222222222222222222222222222222222eeee22ee2eeeeeeeeeeeeeefffeeffffffffffffffffffffffe2eee222e2
    2e222eee2effffffffffffffffffffffffeeffffefeeeeeeeee22eeee222ee2222e222222222222222222222222222222222eeee22ee2eeeeeeeeeeeeeefffeeffffffffffffffffffffffe2eee222e2
    ee22eeee2effffffffffffffffffffffffeeffffefeeeeeeeee22eeee222ee2222e2222222222222222222222222222e22222eee22ee2eeeeeeeeeeeeeefffeeffffffffffffffffffffffe2eeee22ee
    ee22eee22effffffffffffffffffffffffeeffffefeeeeeeeee22eeee222ee2222e2222222222222222222222222222e22222eee22ee2eeeeeeeeeeeeeefffeeffffffffffffffffffffffe22eee22ee
    eeeeee22eeffffffffffffffffffffffffeeffffeeeeeeeeeee22eeee222ee2222e2222222222222222222222222222e22222eee22ee2eeeeeeeeeeeeeeeffeeffffffffffffffffffffffee22eeeeee
    eeeee222efffffffffffffffffffffffffeeffffeeeeeeeeeee2eeeee222ee2222e2222222222222222222222222222e22222eee222e22eeeeeeeeeeeeeefffeeffffffffffffffffffffffe222eeeee
    2222222eeffffffffffffffffffffffffeeefffeeeeeeeeeee22eeee2222ee2222e2222222222222222222222222222e22222eee222e22eeeeeeeeeeeeeefffeeffffffffffffffffffffffee2222222
    222222eefffffffffffffffffffffffffeeffffeeeeeeeeeee22eeee2222e22222e2222222222222222222222222222e22222eee222ee2eeeeeeeeeeeeeefffeefffffffffffffffffffffffee222222
    22222eeefffffffffffffffffffffffffeeffffeeeeeeeeeee22eeee222ee22222e2222222222222222222222222222e22222eeee22ee2eeeeeeeeeeeeeeeffeefffffffffffffffffffffffeee22222
    222eeeeefffffffffffffffffffffffffeeffffeeeeeeeeeee22eeee222ee22222e2222222222222222222222222222e22222eeee22ee2eeeeeeeeeeeeeeefffeeffffffffffffffffffffffeeeee222
    eeee2eeeeffffffffffffffffffffffffeeffffeeeeeeeeee22eeeee222ee2222ee2222222222222222222222222222e22222eeee22ee2eeeeeeeeeeeeeeefffeefffffffffffffffffffffeeee2eeee
    222e2ee2effffffffffffffffffffffffeeffffeeeeeeeeee22eeee2222ee2222ee2222222222222222222222222222e22222eeee22ee22eeeeeeeeeeeeeefffeefffffffffffffffffffffe2ee2e222
    222e2ee2efffffffffffffffffffffffeeeffffeeeeeeeeee22eeee2222ee2222ee2222222222222222222222222222e22222eeee22ee22eeeeeeeeeeeeeefffeefffffffffffffffffffffe2ee2e222
    222e2ee2efffffffffffffffffffffffeefffffeeeeeeeeee22eeee2222ee2222ee2222222222222222222222222222e22222eeee222e22eeeeeeeeeeeeeeffffeeffffffffffffffffffffe2ee2e222
    222e2ee2efffffffffffffffffffffffeefffffeeeeeeeee22eeeee2222ee2222ee2222222222222222222222222222e22222eeee222e22eeeeeeeeeeeeefffffeeffffffffffffffffffffe2ee2e222
    222e2ee22effffffffffffffffffffffeefffffeeeeeeeee22eeee22222e22222ee2222222222222222222222222222ee2222eeee222ee2eeeeeeeeeeeeeeffffeefffffffffffffffffffe22ee2e222
    222e2ee22effffffffffffffffffffffeeffffeeeeeeeeee22eeee22222e22222ee2222222222222222222222222222ee2222eeeee22ee2eeeeeeeeeeeeeefffffefffffffffffffffffffe22ee2e222
    222e2eee2effffffffffffffffffffffeeffffeeeeeeeeee22eeee22222e22222ee2222222222222222222222222222ee2222eeeee22ee22eeeeeeeeeeeeefffffefffffffffffffffffffe2eee2e222
    222e22ee2eefffffffffffffffffffffefffffeeeeeeeee222eee22222ee22222ee2222222222222222222222222222ee2222eeeee22ee22eeeeeeeeeeeeeffffffffffffffffffffffffee2ee22e222
    222e22ee22efffffffffffffffffffffefffffeeeeeeeee22eeee22222ee22222ee2222222222222222222222222222ee2222eeeee22ee22eeeeeeeeeeeeeefffffffffffffffffffffffe22ee22e222
    222e22ee22efffffffffffffffffffffefffffeeeeeeeee22eeee22222ee22222e22222222222222222222222222222ee2222eeeee22ee22eeeeeeeeeeeeeefffffffffffffffffffffffe22ee22e222
    222e22ee22efffffffffffffffffffffffffffeeeeeeeee22eee222222ee22222e22222222222222222222222222222ee22222eeee222e22eeeeeeeeeeeeeefffffffffffffffffffffffe22ee22e222
    222e22ee222effffffffffffffffffffffffffeeeeeeeee22eee222222ee22222e22222222222222222222222222222ee22222eeee222ee2eeeeeeeeeeeeeeefffffffffffffffffffffe222ee22e222
    222e22eee22effffffffffffffffffffffffffeeeeeeee22eeee222222e222222e22222222222222222222222222222ee22222eeee222ee22eeeeeeeeeeeeeefffffffffffffffffffffe22eee22e222
    222e222ee22effffffffffffffffffffffffffeeeeeeee22eeee222222e222222e22222222222222222222222222222ee22222eeee222ee22eeeeeeeeeeeefffffffffffffffffffffffe22ee222e222
    222e222ee22eeffffffffffffffffffffffffeeeeeeeee22eee2222222e222222ee22222eeee222eeee222eeee22222ee222222eeee22222eeeeeeeeeeeeeffffffffffffffffffffffee22ee222e222
    222e222ee222efffffffbffffffffbbbfffffbbeeeeebeeeeeeee222eebeeeeeeddeeeeeeedeeeeeeeeeeeedeeeeeeeddeeeeeebeee22eeeeeeeebeeeeebbfffffbbbffffffffbfffffe222ee222e222
    222e222ee222ebbfffbbbbbfffffbbbbbbbbbbbbbbbbbbeebbbbeeeeedddeeeedddddeeeddddeeeeddeeeeddddeeedddddeeeedbbbbeeebbbbeebbbbbbbbbbbbbbbbbbfffffbbbbbfffe222ee222e222
    222ee22ee222eebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbee222ee22ee222
    222ee22ee2222ebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbe2222ee22ee222
    2222e222e2222eebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbee2222e222e2222
    2222e222ee2222ebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbe2222ee222e2222
    2222e222ee2222ebbbbbbbbbbbbbbbbbbbbbbbbbbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbe2222ee222e2222
    2222e222ee2222eebbbbbbbbbbbbbbbbbbbbbbbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbbbbbbbbbee2222ee222e2222
    2222e2222e22e22ebbbbbbbbbbbbbbbbbbbbbbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbbbbbbbbe22e22e2222e2222
    222222222e22e22eebbbbbbbbbbbbbbbbbbbbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbbbbbbee22e22e222222222
    222222222e22e222ebbbbbbbbbbbbbbbbbbbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbbbbbe222e22e222222222
    2222222222e22e22eebbbbbbbbbbbbbbbbbbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbbbbee22e22e2222222222
    222222e222e22e222ebbbbbbbbbbbbbbbbbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbbbe222e22e222e222222
    222222e222222e222eebbbbbbbbbbbbbbbbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbbee222e222222e222222
    222222e2222222e222ebbbbbbbbbbbbbbbbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbbe222e2222222e222222
    222222ee222222e222eebbbbbbbbbbbbbbbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbee222e222222ee222222
    2222222e222222e2222ebbbbbbbbbbbbbbbbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbbe2222e222222e2222222
    22222e2e2222222e222eebbbbbbbbbbbbbbbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbee222e2222222e2e22222
    22222e2e2222222e222eebbbbbbbbbbbbbbbbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbbee222e2222222e2e22222
    22222e2e22222222e22ebbbbbbbbbbbbbbbbbbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbbbbe22e22222222e2e22222
    22222e2ee2222222e22ebbbbbbbbbbbbbbbbbbbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbbbbbe22e2222222ee2e22222
    22222e2ee2222222eeeebbbbbbbbbbbbbbbbbbbbbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbbbbbbbeeee2222222ee2e22222
    22222e22e2222222eeebbbbbbbbbbbbbbbbbbbbbbbbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbbbbbbbbbbeee2222222e22e22222
    22222ee2e2222222eebbbbbbbbbbbbbbbbbbbbbbbbbbbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbee2222222e2ee22222
    22222ee2e222222eebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbee222222e2ee22222
    222222e2ee22222ebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbe22222ee2e222222
    222222e22e2222eebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbee2222e22e222222
    222222e22e22eeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeee22e22e222222
    222222e2eeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeee2e222222
    222222e2ebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbe2e222222
    222222eeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeee222222
    `)
let textSprite12 = textsprite.create("6 MONTHS ANIVERSARY!")
textSprite12.setOutline(1, 15)
textSprite12.setPosition(80, 31)
let textSprite6 = textsprite.create("v:1.12.5")
textSprite6.setOutline(1, 15)
textSprite6.setPosition(127, 12)
let mySprite3 = sprites.create(img`
    .................................
    .................................
    ..........................ffff...
    .ffff.........ffff........f99f...
    f2222f.......fddddf....ffff99ffff
    f2ff2f......fd4579df...f99999999f
    f2ff2f......fd2dfddf...ffff99ffff
    f2222f.ffff..fddddf.ffff..f99f...
    f22ff.f4444f..ffff.f7777f.f99f...
    f22f..f4ff4f...ff..f77f7f.f99f...
    f22f..f4f44f..f55f.f77f7f.f99f...
    f22f..f444f4f.f55f.f77f7f.f99f...
    .ff...fffffff..ff...ffff...ff....
    .................................
    .................................
    .................................
    `, SpriteKind.Food)
mySprite3.startEffect(effects.confetti, 500)
mySprite3.setScale(3, ScaleAnchor.Middle)
animation.runMovementAnimation(
mySprite3,
animation.animationPresets(animation.bobbing),
2000,
true
)
let a = textsprite.create("Push A", 0, 1)
a.setOutline(1, 15)
a.setPosition(80, 90)
a.setScale(2, ScaleAnchor.Middle)
let textSprite7 = textsprite.create("By Héctor Ruiz")
textSprite7.setIcon(img`
    f f f f f f f f f f f f f f f f 
    f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f 
    f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f 
    f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f 
    f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
    f 5 4 5 4 5 4 5 5 5 5 5 5 5 5 f 
    f 5 4 4 4 4 4 5 5 5 5 5 5 5 5 f 
    f 5 5 8 2 8 5 5 5 5 5 5 5 5 5 f 
    f 5 5 8 2 8 5 5 5 5 5 5 5 5 5 f 
    f 5 5 8 2 8 5 5 5 5 5 5 5 5 5 f 
    f 5 e e e e e 5 5 5 5 5 5 5 5 f 
    f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
    f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f 
    f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f 
    f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f 
    f f f f f f f f f f f f f f f f 
    `)
textSprite7.setOutline(1, 15)
textSprite7.setPosition(55, 18)
textSprite = textsprite.create("Push B to Credits", 0, 13)
textSprite.setOutline(1, 15)
textSprite.setPosition(81, 104)
let textSprite9 = textsprite.create("CopyRight2025")
textSprite9.setOutline(1, 15)
textSprite9.setPosition(80, 114)
pauseUntil(() => controller.A.isPressed() || controller.B.isPressed())
if (controller.A.isPressed()) {
    color.startFadeFromCurrent(color.originalPalette, 100)
    pause(100)
    music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.UntilDone)
    game.setDialogCursor(img`
        . . . . . . . . . . . . . . . . 
        . . . f f f . . . . . . . . . . 
        . . f 5 5 4 f . . . . . . f f . 
        . f 5 5 1 5 4 f . . . . f 7 6 f 
        . f 5 5 5 1 4 f . . . . f 7 6 f 
        . f 4 5 5 5 4 f f . . f 7 7 6 f 
        . . f 4 4 4 f b c f f 7 7 6 f . 
        . . . f f f b f f . f 7 6 f . . 
        . . . . . f c f . f 7 7 f . . . 
        . f f f f . f . f 7 7 6 f . . . 
        . f 6 7 7 f . . f 7 6 f . . . . 
        . . f 6 7 7 f f 7 6 f . . . . . 
        . . . f 6 7 f 7 7 6 f . . . . . 
        . . . f 6 7 7 7 6 f . . . . . . 
        . . . . f 6 6 6 f . . . . . . . 
        . . . . . f f f f . . . . . . . 
        `)
    game.setDialogFrame(img`
        . . . . f f f f f f f f f . . . . 
        . . . f d d d d d d d d d f . . . 
        . . f d d d d d d d d d d d f . . 
        . f d d d 1 1 1 1 1 1 1 d d d f . 
        f d d d 1 1 1 1 1 1 1 1 1 d d d f 
        f d d 1 1 1 1 1 1 1 1 1 1 1 d d f 
        f d d 1 1 1 1 1 1 1 1 1 1 1 d d f 
        f d d 1 1 1 1 1 1 1 1 1 1 1 d d f 
        f d d 1 1 1 1 1 1 1 1 1 1 1 d d f 
        f d d 1 1 1 1 1 1 1 1 1 1 1 d d f 
        f d d 1 1 1 1 1 1 1 1 1 1 1 d d f 
        f d d 1 1 1 1 1 1 1 1 1 1 1 d d f 
        f d d d 1 1 1 1 1 1 1 1 1 d d d f 
        . f d d d 1 1 1 1 1 1 1 d d d f . 
        . . f d d d d d d d d d d d f . . 
        . . . f d d d d d d d d d f . . . 
        . . . . f f f f f f f f f . . . . 
        `)
    game.showLongText("This is the painting room. You can paint anything you want. Be happy!", DialogLayout.Bottom)
    color.startFadeFromCurrent(color.Black)
    pause(2000)
    color.startFade(color.Black, color.originalPalette)
    music.stopAllSounds()
    sprites.destroy(textSprite12)
    sprites.destroy(textSprite9)
    sprites.destroy(textSprite)
    sprites.destroy(textSprite7)
    sprites.destroy(textSprite6)
    sprites.destroy(a)
    sprites.destroy(mySprite3)
    sprites.destroy(mySprite)
    music.play(music.createSong(hex`0078000408100500001c00010a006400f401640000040000000000000000000000000005000004380114001800011b18001c00019c1c002000011e20002400019c34003800012038003c00011e3c004000019c40004400011954005800011b58005c00019c5c006000011e60006400019c74007800012078007c00011e7c008000019c80008400011b94009800019798009c0001199c00a000019aa000a400011bb400b8000197b800bc000119bc00c000011bc000c400019cd400d800019cd800dc00011bdc00e000011ee000e400019cf000f400019c14011801019c18011c01011b1c012001011e20012401019c34013801012038013c01011e3c014001019c40014401011b50015401011b54015801019758015c0101195c016001019a60016401011b74017801011b78017c0101197c018001011b80018401011e90019401019ca001a401011bb001b4010197c001c401019cd001d401011be001e401019c03001c0001dc00690000045e01000400000000000000000000056400010400034e000001100101a12001300101a140015001012050016001011e60017001019c70018001011b8001900101199001a0010197a001b0010116b001c0010197c001d0010119d001e001011be001f001019c05001c000f0a006400f4010a0000040000000000000000000000000000000002fc0004000800029c200c001000029c2024002800029c202c003000029c2044004800029c204c005000029c2064006800029c206c007000029c2074007800029c207c008000029c2084008800021ea18c009000021ea1a400a800021ea1ac00b000021ea1b800bc00021e22c400c800021ea3cc00d000021ea3e400e800021ea3ec00f000021ea304010801021ea10c011001021ea124012801021ea12c013001021ea134013801021e223c014001021e2244014801021ea34c015001021ea364016801021ea36c017001021ea384018801021ea194019801029c20a401a801021b1eb401b80102191ec401c80102979cd401d801021b1ee001e401029c2007001c00020a006400f401640000040000000000000000000000000000000003ba0000000400019c10001400019720002400019c30003400019740004400019c50005400019760006400019c70007400019a8000840001a190009400019ca000a40001a1b000b400019cc000c40001a3d000d4000197e000e4000120f000f40001970001040101a110011401019c2001240101a130013401019c40014401012050015401019760016401012070017401019780018401011e90019401019ca001a401011bb001b4010197c001c401019cd001d401011be001e401019c09010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c800f1010000010001030c000d0001031000110001081800190001031c001d0001062000210001032400250001062c002d0001033000310001084000410001034c004d0001035000510001085400550001065800590001066000610001036400650001066c006d0001067000710001087400750001067800790001067e007f000106800081000103880089000103900091000108a000a1000103ac00ad000103b000b1000108b400b5000103b800b9000106c000c1000103c400c5000106c800c9000106cc00cd000103d000d1000108d800d9000106e000e1000103ec00ed000103f000f10001080001010101030801090101031001110101081401150101031801190101061c011d0101032001210101032c012d0101033001310101083801390101084001410101034401450101064801490101034c014d0101065001510101085401550101066001610101036401650101066801690101036c016d0101067001710101087401750101068001810101038401850101068801890101068c018d0101069001910101089401950101069801990101069c019d010106a001a1010103a401a5010106a801a9010106ac01ad010106b001b1010108b401b5010106b801b9010106bc01bd010106c001c10103030408c801c90103030408d001d10103030408dc01dd010106e001e10106030405060708`), music.PlaybackMode.LoopingInBackground)
    tiles.setCurrentTilemap(tileUtil.createSmallMap(tilemap`nivel1`))
    mySprite = sprites.create(img`
        f f f . . . . . 
        f d d f . . . . 
        f d d d f . . . 
        . f d d f . . . 
        . . f f b f . . 
        . . . . f e f . 
        . . . . . f e f 
        . . . . . . f f 
        `, SpriteKind.Player)
    mySprite.setStayInScreen(true)
    mySprite.setBounceOnWall(true)
    grid.remove(mySprite)
    grid.moveWithButtons(mySprite)
    grid.place(mySprite, tiles.getTileLocation(10, 7))
    mySprite2 = sprites.create(img`
        1 1 1 1 1 1 1 1 
        1 . . . . . . 1 
        1 . . . . . . 1 
        1 . . . . . . 1 
        1 . . . . . . 1 
        1 . . . . . . 1 
        1 . . . . . . 1 
        1 1 1 1 1 1 1 1 
        `, SpriteKind.Enemy)
    grid.remove(mySprite2)
    grid.place(mySprite2, tiles.getTileLocation(19, 13))
}
if (controller.B.isPressed()) {
    color.startFadeFromCurrent(color.originalPalette, 100)
    pause(100)
    music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.UntilDone)
    game.setDialogCursor(img`
        . . . . . . . . . . . . . . . . 
        . . . f f f . . . . . . . . . . 
        . . f 5 5 4 f . . . . . . f f . 
        . f 5 5 1 5 4 f . . . . f 7 6 f 
        . f 5 5 5 1 4 f . . . . f 7 6 f 
        . f 4 5 5 5 4 f f . . f 7 7 6 f 
        . . f 4 4 4 f b c f f 7 7 6 f . 
        . . . f f f b f f . f 7 6 f . . 
        . . . . . f c f . f 7 7 f . . . 
        . f f f f . f . f 7 7 6 f . . . 
        . f 6 7 7 f . . f 7 6 f . . . . 
        . . f 6 7 7 f f 7 6 f . . . . . 
        . . . f 6 7 f 7 7 6 f . . . . . 
        . . . f 6 7 7 7 6 f . . . . . . 
        . . . . f 6 6 6 f . . . . . . . 
        . . . . . f f f f . . . . . . . 
        `)
    game.setDialogFrame(img`
        . . . . f f f f f f f f f . . . . 
        . . . f d d d d d d d d d f . . . 
        . . f d d d d d d d d d d d f . . 
        . f d d d 1 1 1 1 1 1 1 d d d f . 
        f d d d 1 1 1 1 1 1 1 1 1 d d d f 
        f d d 1 1 1 1 1 1 1 1 1 1 1 d d f 
        f d d 1 1 1 1 1 1 1 1 1 1 1 d d f 
        f d d 1 1 1 1 1 1 1 1 1 1 1 d d f 
        f d d 1 1 1 1 1 1 1 1 1 1 1 d d f 
        f d d 1 1 1 1 1 1 1 1 1 1 1 d d f 
        f d d 1 1 1 1 1 1 1 1 1 1 1 d d f 
        f d d 1 1 1 1 1 1 1 1 1 1 1 d d f 
        f d d d 1 1 1 1 1 1 1 1 1 d d d f 
        . f d d d 1 1 1 1 1 1 1 d d d f . 
        . . f d d d d d d d d d d d f . . 
        . . . f d d d d d d d d d f . . . 
        . . . . f f f f f f f f f . . . . 
        `)
    game.showLongText("This mode are the credits. You can see the people participed in this game.", DialogLayout.Bottom)
    color.startFadeFromCurrent(color.Black)
    pause(2000)
    color.startFade(color.Black, color.originalPalette)
    music.stopAllSounds()
    sprites.destroy(textSprite12)
    sprites.destroy(textSprite9)
    sprites.destroy(textSprite)
    sprites.destroy(textSprite7)
    sprites.destroy(textSprite6)
    sprites.destroy(a)
    sprites.destroy(mySprite3)
    sprites.destroy(mySprite)
    music.play(music.createSong(hex`0078000408040500001c00010a006400f401640000040000000000000000000000000005000004600000000400011608000c00011610001400011618001c00011620002400011628002c00011630003400011638003c00011640004400011648004c00011650005400011658005c00011660006400011668006c00011670007400011678007c00011605001c000f0a006400f4010a0000040000000000000000000000000000000002600000000400012708000c00012710001400012718001c00012720002400012728002c00012730003400012738003c00012740004400012748004c00012750005400012758005c00012760006400012768006c00012770007400012778007c00012707001c00020a006400f401640000040000000000000000000000000000000003600004000800011b08000c00011e14001800011b18001c00011e24002800011b28002c00011e34003800011b38003c00011e44004800012048004c00011e54005800012058005c00011e64006800012068006c00011e70007400011d78007c00019a08001c000e050046006603320000040a002d0000006400140001320002010002300000001000010f10002000011220003000011430004000011640005000019750006000011660007000011470008000018e09010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c800c60000000100020e0306000700010508000900020e080e000f00010510001100020e0314001500010e16001700010518001900020e081e001f00010520002100030e050628002900010e30003100020e0534003500020e0538003900020e053c003d00010540004100020e0346004700010548004900020e084e004f00010550005100020e0354005500010e56005700010558005900020e085e005f00010560006100030e050668006900010e70007100020e0574007500020e0578007900020e057c007d000105`), music.PlaybackMode.LoopingInBackground)
    scene.setBackgroundImage(img`
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddd77ddddddddddddddddddddddddddddddddddddddaaddddddddddddddddddddddddddddddddddddddffdddddddddddddddddddddddddddddddddddddd44dddddddddddddddd
        ddddddddddddddddddddddd7dddddddddddddddddddddddddddddddddddddddadddddddddddddddddddddddddddddddddddddddfddddddddddddddddddddddddddddddddddddddd4dddddddddddddddd
        ddddddddddddddddddddd7777ddddddddddddddddddddddddddddddddddddaaaaddddddddddddddddddddddddddddddddddddffffdddddddddddddddddddddddddddddddddddd4444ddddddddddddddd
        dddddddddddddddddddd77777dddddddddddddddddddddddddddddddddddaaaaadddddddddddddddddddddddddddddddddddfffffddddddddddddddddddddddddddddddddddd44444ddddddddddddddd
        ddddddddddddddddddd7777777dddddddddddddddddddddddddddddddddaaaaaaadddddddddddddddddddddddddddddddddfffffffddddddddddddddddddddddddddddddddd4444444dddddddddddddd
        ddddddddddddddddddd77777d7dddddddddddddddddddddddddddddddddaaaaadadddddddddddddddddddddddddddddddddfffffdfddddddddddddddddddddddddddddddddd44444d4dddddddddddddd
        ddddddddddddbddddddd7777ddddddddddddddddddddddddddddbdddddddaaaaddddddddddddddddddddddddddddbdddddddffffddddddddddddddddddddddddddddbddddddd4444dddddddddddddddd
        ddddddddddddbdddddd7777777ddddddddddddddddddddddddddbddddddaaaaaaaddddddddddddddddddddddddddbddddddfffffffddddddddddddddddddddddddddbdddddd4444444dddddddddddddd
        ddddddddddddbddddd77777777ddddddddddddddddddddddddddbdddddaaaaaaaaddddddddddddddddddddddddddbdddddffffffffddddddddddddddddddddddddddbddddd44444444dddddddddddddd
        ddddddddddddbdddd77777777777ddddddddddddddddddddddddbddddaaaaaaaaaaaddddddddddddddddddddddddbddddfffffffffffddddddddddddddddddddddddbdddd44444444444dddddddddddd
        dd44ddddddddbdd7d7777777777777ddddbddddddd77ddddddddbddadaaaaaaaaaaaaaddddbdddddddaaddddddddbddfdfffffffffffffddddbdddddddffddddddddbdd4d4444444444444ddddbddddd
        d44444ddddddbdd777777777777777ddddbdddddd77777ddddddbddaaaaaaaaaaaaaaaddddbddddddaaaaaddddddbddfffffffffffffffddddbddddddfffffddddddbdd444444444444444ddddbddddd
        44444444ddddbddd77777777777777ddddbddddd77777777ddddbdddaaaaaaaaaaaaaaddddbdddddaaaaaaaaddddbdddffffffffffffffddddbdddddffffffffddddbddd44444444444444ddddbddddd
        444444444ddddbdddd777777777777ddddbddddd777777777ddddbddddaaaaaaaaaaaaddddbdddddaaaaaaaaaddddbddddffffffffffffddddbdddddfffffffffddddbdddd444444444444ddddbddddd
        d44444444dddddbdddd7777777444444dbbdddd3d77777777dddddbddddaaaaaaa444444dbbdddd3daaaaaaaadddddbddddfffffff444444dbbdddd3dffffffffdddddbdddd4444444444444dbbdddd3
        d444444444dddddbb7777777444444444bdddd3dd777777777dddddbbaaaaaaa444444444bdddd3ddaaaaaaaaadddddbbfffffff444444444bdddd3ddfffffffffdddddbb4444444444444444bdddd3d
        44444444ddddddddbb77777777447443bbdddddd77777777ddddddddbbaaaaaaaa44a443bbddddddaaaaaaaaddddddddbbffffffff44f443bbddddddffffffffddddddddbb44444444444443bbdddddd
        444444444dddddd777b777777747774bb3ddddd7777777777ddddddaaabaaaaaaa4aaa4bb3dddddaaaaaaaaaaddddddfffbfffffff4fff4bb3dddddffffffffffdddddd444b444444444444bb3ddddd4
        4444b44dddddd77777777777777777bbdddddd777777b77ddddddaaaaaaaaaaaaaaaaabbddddddaaaaaabaaddddddfffffffffffffffffbbddddddffffffbffdddddd44444444444444444bbdddddd44
        4444b4444ddddd777777777777777bbddddddd777777b7777dddddaaaaaaaaaaaaaaabbdddddddaaaaaabaaaadddddfffffffffffffffbbdddddddffffffbffffddddd444444444444444bbddddddd44
        4444b44b44dddddd7777ddddd777777ddddddd777777b77b77ddddddaaaa44444aaaaaadddddddaaaaaabaabaaddddddffff44444ffffffdddddddffffffbffbffdddddd444444444444444ddddddd44
        4444b44b44ddddd3dddddddddd777777777ddd777777b77b77ddddd34444444444aaaaaaaaadddaaaaaabaabaaddddd34444444444fffffffffdddffffffbffbffddddd34444444444444444444ddd44
        4444b4b444ddddddddddddddd7744477777ddd777777b7b777dddd44444444444aa444aaaaadddaaaaaababaaadddd44444444444ff444fffffdddffffffbfbfffdddd444444444444444444444ddd44
        4444bbb4442d333dddddddddddd3444777ddddd77777bbb7449d3334444444444443444aaadddddaaaaabbba44cd3334444444444443444fffdddddfffffbbbf44ed3334444444444443444444ddddd4
        4444bb244222dddddddddddddddd344477dddd777777bb94499944444444444444443444aaddddaaaaaabbc44ccc44444444444444443444ffddddffffffbbe44eee4444444444444444344444dddd44
        444bb22222ddddddddddddddddddd77777777777777bb999994444444444444444444aaaaaaaaaaaaaabbccccc4444444444444444444ffffffffffffffbbeeeee444444444444444444444444444444
        44bb2222dddddddddddddddd2bb777777777b77777bb999944444444444444449bbaaaaaaaaabaaaaabbcccc4444444444444444cbbfffffffffbfffffbbeeee4444444444444444ebb444444444b444
        44b222242222ddd3dd2dd3dd2bb777447777b77777b9999499994443449443449bbaaa44aaaabaaaaabcccc4cccc444344c44344cbbfff44ffffbfffffbeeee4eeee444344e44344ebb444444444b444
        44b2b222222ddd2dd22ddd222bb777b44777b77777b9b99999944494499444999bbaaab44aaabaaaaabcbcccccc444c44cc444cccbbfffb44fffbfffffbebeeeeee444e44ee444eeebb444b44444b444
        4bb2b222222d222d22222d222bb777b77777b7777bb9b99999949994999994999bbaaabaaaaabaaaabbcbcccccc4ccc4ccccc4cccbbfffbfffffbffffbbebeeeeee4eee4eeeee4eeebb444b44444b444
        4bbbb22222222422244222222bb777b777777b777bbbb99999999499944999999bbaaabaaaaaabaaabbbbcccccccc4ccc44ccccccbbfffbffffffbfffbbbbeeeeeeee4eee44eeeeeebb444b444444b44
        4bbb222222224422442222222bb777b777777b777bbb999999994499449999999bbaaabaaaaaabaaabbbcccccccc44cc44cccccccbbfffbffffffbfffbbbeeeeeeee44ee44eeeeeeebb444b444444b44
        4b222222222242222222b2222bb77b7777777bbb7b999999999949999999b9999bbaabaaaaaaabbbabcccccccccc4cccccccbccccbbffbfffffffbbbfbeeeeeeeeee4eeeeeeebeeeebb44b4444444bbb
        bb222222222222222222b2222bbb7b777777777bbb999999999999999999b9999bbbabaaaaaaaaabbbccccccccccccccccccbccccbbbfbfffffffffbbbeeeeeeeeeeeeeeeeeebeeeebbb4b444444444b
        3b222222222222222222b2222bbbb777777777777b999999999999999999b9999bbbbaaaaaaaaaaaabccccccccccccccccccbccccbbbbffffffffffffbeeeeeeeeeeeeeeeeeebeeeebbbb44444444444
        3b222222222222222222b2222bbbb777444777777b999999999999999999b9999bbbbaaa444aaaaaabccccccccccccccccccbccccbbbbfffdddffffffbeeeeeeeeeeeeeeeeeebeeeebbbb444ddd44444
        3bddd224442222222222b2222bbb7774447777777b444994449999999999b9999bbbaaa444aaaaaaabdddcc444ccccccccccbccccbbbfffdddfffffffbdddeedddeeeeeeeeeebeeeebbb444ddd444444
        dddddd22444222222222b2222bbb77444774444444444499444999999999b9999bbbaa444aadddddddddddcc444cccccccccbccccbbbffdddffdddddddddddeedddeeeeeeeeebeeeebbb44ddd44ddddd
        dddd2222b44422222222b2222bbb77777444444444449999b44499999999b9999bbbaaaaadddddddddddccccb444ccccccccbccccbbbfffffdddddddddddeeeebdddeeeeeeeebeeeebbb44444ddddddd
        ddddddd2b22222222b22b2222bbb77774444444444444449b99999999b99b9999bbbaaaadddddddddddddddcbccccccccbccbccccbbbffffdddddddddddddddebeeeeeeeebeebeeeebbb4444dddddddd
        dddddddddd2222222b22b2222bbbb7444484444444444444449999999b99b9999bbbbaddddbdddddddddddddddcccccccbccbccccbbbbfddddedddddddddddddddeeeeeeebeebeeeebbbb4dddd1ddddd
        ddddd5dddd2222222b22b2222bbb4444b488448444444344449999999b99b9999bbbddddbdbbddbddddddcddddcccccccbccbccccbbbddddbdeeddedddddd3ddddeeeeeeebeebeeeebbbddddbd11dd1d
        5ddd555bb3bb22222b22b2222bbbb444b88448888444333bb3bb99999b99b9999bbbbdddbbbddbbbbdddcccbb3bbcccccbccbccccbbbbdddbeeddeeeeddd333bb3bbeeeeebeebeeeebbbbdddb11dd111
        55bd555bb3b222222bb2bb222bbbb888bb88888888b4333bb3b999999bb9bb999bbbb333bbbbbbbbbbbdcccbb3bccccccbbcbbcccbbbb333bbeeeeeeeebd333bb3beeeeeebbebbeeebbbb333bb111111
        55b5555bbbb2222222bbbb222bbbb888bb88888888b3333bbbb9999999bbbb999bbbb333bbbbbbbbbbbccccbbbbcccccccbbbbcccbbbb333bbeeeeeeeeb3333bbbbeeeeeeebbbbeeebbbb333bb111111
        55b5555bb2222222222bbb222bbbb888bb88888888b3333bb9999999999bbb999bbbb333bbbbbbbbbbbccccbbccccccccccbbbcccbbbb333bbeeeeeeeeb3333bbeeeeeeeeeebbbeeebbbb333bb111111
        55b5555bb22222222222bbb22bbbb888bb88888888b3333bb99999999999bbb99bbbb333bbbbbbbbbbbccccbbcccccccccccbbbccbbbb333bbeeeeeeeeb3333bbeeeeeeeeeeebbbeebbbb333bb111111
        555b555bb22222222222bbb22bbbb888bb888888888b333bb99999999999bbb99bbbb333bbbbbbbbbbbbcccbbcccccccccccbbbccbbbb333bbeeeeeeeeeb333bbeeeeeeeeeeebbbeebbbb333bb111111
        555bb5bbb2222442444224b22bbbb888bb88b888888bb3bbb9999449444994b99bbbb333bbbbbbbbbbbbbcbbbcccc44c444cc4bccbbbb333bbeebeeeeeebb3bbbeeee44e444ee4beebbbb333bb11b111
        555bbbbbb2224444444444442bbbbb88bb88b888888bbbbbb9994444444444449bbbbb33bbbbbbbbbbbbbbbbbccc444444444444cbbbbb33bbeebeeeeeebbbbbbeee444444444444ebbbbb33bb11b111
        5555bbbbb224444444444444bbbbbb8bb88bb8888888bbbbb994444444444444bbbbbb3bbbbbbbbbbbbbbbbbbcc4444444444444bbbbbb3bbeebbeeeeeeebbbbbee4444444444444bbbbbb3bb11bb111
        55555bbbb222443444444424bbbbbb8bb88b888888888bbbb999443444444494bbbbbb3bbbbbbbbbbbbbbbbbbccc4434444444c4bbbbbb3bbeebeeeeeeeeebbbbeee4434444444e4bbbbbb3bb11b1111
        55555bbb2244224444442422bbbbbb8bb8b8888888888bbb9944994444449499bbbbbb3bbbbbbbbbbbbbbbbbcc44cc444444c4ccbbbbbb3bbebeeeeeeeeeebbbee44ee444444e4eebbbbbb3bb1b11111
        55555bbb2222244224422422bbbbbb8bbb88888888888bbb9999944994499499bbbbbb3bbbbbbbbbbbbbbbbbccccc44cc44cc4ccbbbbbb3bbbeeeeeeeeeeebbbeeeee44ee44ee4eebbbbbb3bbb111111
        55555bbb222b2422222222222bbbbbbb8888888888888bbb999b9499999999999bbbbbbbbbbbbbbbbbbbbbbbcccbc4cccccccccccbbbbbbbeeeeeeeeeeeeebbbeeebe4eeeeeeeeeeebbbbbbb11111111
        55555bbb222b2222222222222bbbbbbb8888888888888bbb999b9999999999999bbbbbbbbbbbbbbbbbbbbbbbcccbcccccccccccccbbbbbbbeeeeeeeeeeeeebbbeeebeeeeeeeeeeeeebbbbbbb11111111
        55555bbb222b2b22222222222bbbbbbb8888888888888bbb999b9b99999999999bbbbbbbbbbbbbbbbbbbbbbbcccbcbcccccccccccbbbbbbbeeeeeeeeeeeeebbbeeebebeeeeeeeeeeebbbbbbb11111111
        55555bbb222b2b22222222222bbbbbb88888888888888bbb999b9b99999999999bbbbbbbbbbbbbbbbbbbbbbbcccbcbcccccccccccbbbbbbeeeeeeeeeeeeeebbbeeebebeeeeeeeeeeebbbbbb111111111
        55555bbb222b2b22222222222bbbbb888888888888888bbb999b9b99999999999bbbbbbbbbbbbbbbbbbbbbbbcccbcbcccccccccccbbbbbeeeeeeeeeeeeeeebbbeeebebeeeeeeeeeeebbbbb1111111111
        55555bb2222bbb22222222222bbbbb888888888888888bb9999bbb99999999999bbbbbbbbbbbbbbbbbbbbbbccccbbbcccccccccccbbbbbeeeeeeeeeeeeeeebbeeeebbbeeeeeeeeeeebbbbb1111111111
        55555bb222bbb222222222222bbbbb888888888888888bb999bbb999999999999bbbbbbbbbbbbbbbbbbbbbbcccbbbccccccccccccbbbbbeeeeeeeeeeeeeeebbeeebbbeeeeeeeeeeeebbbbb1111111111
        5555bbb222b222222222dd222bbbbb8d888888888888bbb999b999999999dd999bbbbbbdbbbbbbbbbbbbbbbcccbcccccccccddcccbbbbbedeeeeeeeeeeeebbbeeebeeeeeeeeeddeeebbbbb1d11111111
        5555bbb222b2222222222dd2bbbbbb88dd8888d88888bbb999b9999999999dd9bbbbbbbbddbbbbdbbbbbbbbcccbccccccccccddcbbbbbbeeddeeeedeeeeebbbeeebeeeeeeeeeeddebbbbbb11dd1111d1
        5555bbb2bbb2222222222222bbbbbbb88d888dd88888bbb9bbb9999999999999bbbbbbbbbdbbbddbbbbbbbbcbbbcccccccccccccbbbbbbbeedeeeddeeeeebbbebbbeeeeeeeeeeeeebbbbbbb11d111dd1
        dd55bbbbbb22222222d22222bbbbbbb888888d88dd88bbbbbb99999999d99999bbbbbbbbbbbbbdbbddbbbbbbbbccccccccdcccccbbbbbbbeeeeeedeeddeebbbbbbeeeeeeeedeeeeebbbbbbb111111d11
        3dd5bbbbb22dd2222dd2222dbbbbbbbd888888888dd8bbbbb99dd9999dd9999dbbbbbbbdbbbbbbbbbddbbbbbbccddccccddccccdbbbbbbbdeeeeeeeeeddebbbbbeeddeeeeddeeeedbbbbbbbd11111111
        3dddbbbbb222dd22dd22d2ddbbbbbbbd888d88888dddbbbbb999dd99dd99d9ddbbbbbbbdbbbdbbbbbdddbbbbbcccddccddccdcddbbbbbbbdeeedeeeeedddbbbbbeeeddeeddeededdbbbbbbbd111d1111
        3dddbbb222222222d22dddddbbbbbbbdd8dd88d88dddbbb999999999d99dddddbbbbbbbddbddbbdbbdddbbbcccccccccdccdddddbbbbbbbddeddeedeedddbbbeeeeeeeeedeedddddbbbbbbbdd1dd11d1
        ddddbbbd22222222222dddddbbbbbbbdddd88dddddddbbbd99999999999dddddbbbbbbbddddbbdddddddbbbdcccccccccccdddddbbbbbbbddddeedddddddbbbdeeeeeeeeeeedddddbbbbbbbdddd11ddd
        ddddbbbd222d22ddd22dddddbbbbbbbdddddddddddddbbbd999d99ddd99dddddbbbbbbbdddddddddddddbbbdcccdccdddccdddddbbbbbbbdddddddddddddbbbdeeedeedddeedddddbbbbbbbddddddddd
        ddddbbbd22ddd2dddd2dddddbbbbbbbdddddddddddddbbbd99ddd9dddd9dddddbbbbbbbdddddddddddddbbbdccdddcddddcdddddbbbbbbbdddddddddddddbbbdeedddeddddedddddbbbbbbbddddddddd
        ddddbbbdddddddddddddddddbbbbbbbdddddddddddddbbbdddddddddddddddddbbbbbbbdddddddddddddbbbdddddddddddddddddbbbbbbbdddddddddddddbbbdddddddddddddddddbbbbbbbddddddddd
        ddddbbb3ddddddddddddddddbbbbbbbdddddddddddddbbb3ddddddddddddddddbbbbbbbdddddddddddddbbb3ddddddddddddddddbbbbbbbdddddddddddddbbb3ddddddddddddddddbbbbbbbddddddddd
        ddddbbb3ddddddddddddddddbbbbbbbdddddddddddddbbb3ddddddddddddddddbbbbbbbdddddddddddddbbb3ddddddddddddddddbbbbbbbdddddddddddddbbb3ddddddddddddddddbbbbbbbddddddddd
        ddddbbbbddddddddddddddddbbbbbbbdddddddddddddbbbbddddddddddddddddbbbbbbbdddddddddddddbbbbddddddddddddddddbbbbbbbdddddddddddddbbbbddddddddddddddddbbbbbbbddddddddd
        ddddbbbbddddddddddddddddbbbbbbbdddddddddddddbbbbddddddddddddddddbbbbbbbdddddddddddddbbbbddddddddddddddddbbbbbbbdddddddddddddbbbbddddddddddddddddbbbbbbbddddddddd
        ddddbbbbddddddddddddddddbbbbbbbdddddddddddddbbbbddddddddddddddddbbbbbbbdddddddddddddbbbbddddddddddddddddbbbbbbbdddddddddddddbbbbddddddddddddddddbbbbbbbddddddddd
        ddddbbbb3dddddddddddddddbbbbbbbdddddddddddddbbbb3dddddddddddddddbbbbbbbdddddddddddddbbbb3dddddddddddddddbbbbbbbdddddddddddddbbbb3dddddddddddddddbbbbbbbddddddddd
        ddddbbbbbdddddddddddddddbbbbbbbdddddddddddddbbbbbdddddddddddddddbbbbbbbdddddddddddddbbbbbdddddddddddddddbbbbbbbdddddddddddddbbbbbdddddddddddddddbbbbbbbddddddddd
        ddddbbbbbdddddddddddddddbbbbbbbdddddddddddddbbbbbdddddddddddddddbbbbbbbdddddddddddddbbbbbdddddddddddddddbbbbbbbdddddddddddddbbbbbdddddddddddddddbbbbbbbddddddddd
        ddddbbbbb3ddddddddddddd3bbbbbbb3ddddddddddddbbbbb3ddddddddddddd3bbbbbbb3ddddddddddddbbbbb3ddddddddddddd3bbbbbbb3ddddddddddddbbbbb3ddddddddddddd3bbbbbbb3dddddddd
        ddddbbbbb3dddddddddddddbbbbbbbb3ddddddddddddbbbbb3dddddddddddddbbbbbbbb3ddddddddddddbbbbb3dddddddddddddbbbbbbbb3ddddddddddddbbbbb3dddddddddddddbbbbbbbb3dddddddd
        ddd3bbbbbbdddddddddddddbbbbbbbbbddddddddddd3bbbbbbdddddddddddddbbbbbbbbbddddddddddd3bbbbbbdddddddddddddbbbbbbbbbddddddddddd3bbbbbbdddddddddddddbbbbbbbbbdddddddd
        ddd3bbbbbbdddddddddddd3bbbbbbbbbddddddddddd3bbbbbbdddddddddddd3bbbbbbbbbddddddddddd3bbbbbbdddddddddddd3bbbbbbbbbddddddddddd3bbbbbbdddddddddddd3bbbbbbbbbdddddddd
        443bbbbbbb3dddddddddddbbbbbbbb4444444444443bbbbbbb3dddddddddddbbbbbbbb4444444444443bbbbbbb3dddddddddddbbbbbbbb4444444444443bbbbbbb3dddddddddddbbbbbbbb4444444444
        44444444bbbddddddddd33bbb44444444444444444444444bbbddddddddd33bbb44444444444444444444444bbbddddddddd33bbb44444444444444444444444bbbddddddddd33bbb444444444444444
        444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444ddd4444444444444444444444444
        44444444444444444444444444444444444444444444aaa4444444444444444444444444444444444444444444447774444444444444444444444444444444444444ddd4444444444444444444444444
        44444444444444444444444444444444444444444444aaa4444444444444444444444444444444444444444444447774444444444488844444fff444444444444444ddd4444444444444444444444444
        44444444444444444444444444444444444444444444aaa4444444444444444444444444444ddd444444444444447774444444444488844444fff444444444444444ddd4444444444444444444444444
        4444444444444444444ddd44444444444444444444444444444444444444444444444444444ddd444444444444444444444444444488844444fff4444447774444444444444444444444444444441114
        4444444aaa444444444ddd44444444444444488844444444444444444444444444444444444ddd4444444444444444444444444444444444444444444447774444444444444444444444444444441114
        4444444aaa444444444ddd444444444444444888444444444444444455544444444444444444444444444444444fff444ddd44444444444444444444444777444444444444fff4444444444444441114
        4444444aaa444444444444444444444444444888444444444444444455544444444444444444444aaa444444444fff444ddd44444444444444444444444444444445554444fff4444444444444444444
        4444444444444555444444444444444444444444444444444444444455544444444444444444444aaa444444444fff444ddd44444444444444444444444444444445554444fff4444447774444444444
        4444444444444555444444444444444444444444444444444444444444444422244444444444444aaa444444444444444444444444444444444444444444444444455544444444444447774444444444
        4444444444444555444444444444444444444444444444444444444444444422244444444444444444444444444444444444444445552444444444444444444444444444444444444447774444444444
        4444444444444444444444444444444444444444444444444444444444444422244444444444444444444444444444444444444445552444444444444444444444444444444444444444444444444444
        4444444444444444444444444422244444444444444444444444444444444444444444444444444444444444444444444444444445552444444444aaa444444444444444444444444444444444444444
        4444444444444444444444444422244444444444444444444444ffff44444444444444444444444444444444444444444444444444444444444444aaa444444444444444444444444444444444444444
        4444444444444444444444444422244444444447774444444444ffff44444444444444444448884444444444444444444444444444444444444444aaa444444444444444444444444411144444444444
        4444444444444444444444444444444444444447774444444444ffff44444444444444444448884444444444444444441114444444444444444444444444444444444444444444444411144444444444
        4444444444444444444444444444444444444447774444444444444444411144444444444448884444444444444444441114444444444444444444444444444444444444444444444411144444444444
        4444444444444444444444444444444444444444444444444444444444411144444444444444444444444444444444441114444444444444444444444444444444444444444444444444444448884444
        444444444444444444222444444444444444444444444444444444444441114444444444444444444444444aaa4444444444444444444444444444444444444444444444444444222444444448884444
        444444444444444444222444444441114444444444444444444444444444444444444444444444444444444aaa4444444444444444444444444444444444444444444444444444222444444448884444
        444444444444444444222444444441114444444444444444444444444444444444444444444444444444444aaa4444444444444444444444444444444888444444477744444444222444444444444444
        4444444444444444444444444444411144444444444444444444444444444444444444444444444444444444444444444444444444444444444444444888444444477744444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444888444444444444444444444444444444444444444444444444444444444444888444444477744444444444444444444444444
        444444444444444444444444444444444aaa4444444444444444444444888444444444422244444444444444444444445554444444444444444444444444444444444444444444444444444444444444
        4444444888444444444fff44444444444aaa4444444444444444444444888444444444422244444444444444444444445554444444444444444444444444444444444444444444444444444444444444
        4444444888444444444fff44444444444aaa4444444444444444444444444444444444422244444444444444444444445554444444444444444444444111444444ddd4444444444444444444fff44444
        4444444888444444444fff444444444444444444445554444444444444444444444444444444444444444444444444444444444444444444444444444111444444ddd4444444444444444444fff44444
        4444444444444444444444444444444444444444445554444444444444444444444444444444444444444444444444444444444444444555444444444111444444ddd4444444444444444444fff44444
        4444444444444444444444444444444444444444445554444444444444444444444444444444444444444444444444444444444444444555444444444444444444444444444444444444444444444444
        `)
    scroller.scrollBackgroundWithSpeed(-50, 0)
    textSprite8 = textsprite.create("Created By Héctor Ruiz", 0, 2)
    textSprite8.setPosition(80, 130)
    textSprite8.setVelocity(0, -20)
    textSprite8.setOutline(1, 15)
    textSprite8 = textsprite.create("Sounds: Tagashi-Ondo", 0, 4)
    textSprite8.setPosition(80, 160)
    textSprite8.setVelocity(0, -20)
    textSprite8.setOutline(1, 15)
    textSprite8 = textsprite.create("Idea: Matashi-Katushi", 0, 5)
    textSprite8.setPosition(80, 190)
    textSprite8.setVelocity(0, -20)
    textSprite8.setOutline(1, 15)
    textSprite8 = textsprite.create("Produccion: Gâla Salander", 0, 7)
    textSprite8.setPosition(80, 220)
    textSprite8.setVelocity(0, -20)
    textSprite8.setOutline(1, 15)
    textSprite8 = textsprite.create("AI-Provision:Carol Beng", 0, 9)
    textSprite8.setPosition(80, 250)
    textSprite8.setVelocity(0, -20)
    textSprite8.setOutline(1, 15)
    textSprite8 = textsprite.create("Programers: Kamashita-Ebu ", 0, 10)
    textSprite8.setPosition(80, 280)
    textSprite8.setVelocity(0, -20)
    textSprite8.setOutline(1, 15)
    textSprite8 = textsprite.create("and Mashi-Kanaito", 0, 10)
    textSprite8.setPosition(80, 290)
    textSprite8.setVelocity(0, -20)
    textSprite8.setOutline(1, 15)
    c = textsprite.create("Press B Button to Exit", 0, 3)
    c.setPosition(80, 320)
    c.setOutline(1, 15)
    animation.runMovementAnimation(
    c,
    animation.animationPresets(animation.flyToCenter),
    14000,
    false
    )
    pauseUntil(() => controller.B.isPressed())
}
if (controller.B.isPressed()) {
    game.reset()
}
game.onUpdate(function () {
    if (mySprite.scale > 6) {
        pause(100)
        mySprite.setScale(1, ScaleAnchor.BottomRight)
    }
})
game.onUpdate(function () {
    if (controller.B.isPressed()) {
        grid.place(mySprite2, tiles.getTileLocation(19, 1))
        sprites.destroy(textSprite11)
        sprites.destroy(textSprite6)
        sprites.destroy(textSprite5)
        sprites.destroy(textSprite4)
        sprites.destroy(textSprite2)
        sprites.destroy(textSprite3)
        sprites.destroy(textSprite)
    }
    if (!(mySprite.image.equals(img`
        . . f f . . . . 
        . f 1 d f . . . 
        f 1 1 f 2 f . . 
        f d f f 2 2 f . 
        . f 2 2 e 2 2 f 
        . . f 2 2 e f . 
        . . . f 2 f . . 
        . . . . f . . . 
        `))) {
        sprites.destroy(textSprite10)
    }
})
