namespace SpriteKind {
    export const mapCollisions = SpriteKind.create()
    export const mapGroundCollisions = SpriteKind.create()
}
function SetupMap1 () {
    scene.setBackgroundImage(assets.image`Background1`)
    sprites.create(assets.image`Sprite1`, SpriteKind.mapGroundCollisions).setPosition(10, 110)
    sprites.create(assets.image`Sprite1`, SpriteKind.mapGroundCollisions).setPosition(30, 110)
    sprites.create(assets.image`Sprite1`, SpriteKind.mapGroundCollisions).setPosition(50, 110)
    sprites.create(assets.image`Sprite1`, SpriteKind.mapGroundCollisions).setPosition(70, 110)
    sprites.create(assets.image`Sprite1`, SpriteKind.mapGroundCollisions).setPosition(90, 110)
    sprites.create(assets.image`Sprite1`, SpriteKind.mapGroundCollisions).setPosition(110, 110)
    sprites.create(assets.image`Sprite1`, SpriteKind.mapGroundCollisions).setPosition(130, 110)
    sprites.create(assets.image`Sprite1`, SpriteKind.mapGroundCollisions).setPosition(150, 110)
    sprites.create(assets.image`Sprite1`, SpriteKind.mapGroundCollisions).setPosition(150, 93)
    sprites.create(assets.image`Sprite1`, SpriteKind.mapGroundCollisions).setPosition(130, 93)
    sprites.create(assets.image`Sprite1`, SpriteKind.mapGroundCollisions).setPosition(110, 93)
    sprites.create(assets.image`Sprite1`, SpriteKind.mapGroundCollisions).setPosition(90, 93)
    sprites.create(assets.image`Sprite1`, SpriteKind.mapGroundCollisions).setPosition(70, 93)
    sprites.create(assets.image`Sprite1`, SpriteKind.mapGroundCollisions).setPosition(50, 93)
    sprites.create(assets.image`Sprite1`, SpriteKind.mapGroundCollisions).setPosition(30, 93)
    sprites.create(assets.image`Sprite1`, SpriteKind.mapGroundCollisions).setPosition(10, 93)
}
let dy = 0
let dx = 0
let mySprite = sprites.create(img`
    . . . . . . . . . . b 5 b . . . 
    . . . . . . . . . b 5 b . . . . 
    . . . . . . b b b b b b . . . . 
    . . . . . b b 5 5 5 5 5 b . . . 
    . . . . b b 5 d 1 f 5 5 d f . . 
    . . . . b 5 5 1 f f 5 d 4 c . . 
    . . . . b 5 5 d f b d d 4 4 . . 
    . b b b d 5 5 5 5 5 4 4 4 4 4 b 
    b d d d b b d 5 5 4 4 4 4 4 b . 
    b b d 5 5 5 b 5 5 5 5 5 5 b . . 
    c d c 5 5 5 5 d 5 5 5 5 5 5 b . 
    c b d c d 5 5 b 5 5 5 5 5 5 b . 
    . c d d c c b d 5 5 5 5 5 d b . 
    . . c b d d d d d 5 5 5 b b . . 
    . . . c c c c c c c c b b . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
game.onUpdate(function () {
    for (let ground of sprites.allOfKind(SpriteKind.mapGroundCollisions)) {
        if (mySprite.overlapsWith(ground)) {
            dx = mySprite.x - ground.x
            dy = mySprite.y - ground.y
            if (Math.abs(dx) > Math.abs(dy)) {
                // LEFT / RIGHT
                if (dx > 0) {
                    mySprite.left = ground.right
                } else {
                    mySprite.right = ground.left
                }
                mySprite.vx = 0
            } else {
                // TOP / BOTTOM
                if (dy > 0) {
                    mySprite.top = ground.bottom
                } else {
                    mySprite.bottom = ground.top
                }
                mySprite.vy = 0
            }
        }
    }
})
