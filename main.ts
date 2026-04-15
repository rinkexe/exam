namespace SpriteKind {
    export const mapCollisions = SpriteKind.create()
    export const mapGroundCollisions = SpriteKind.create()
}
let overlapY = 0
let overlapX = 0
let halfHeight = 0
let halfWidth = 0
let dy = 0
let dx = 0
scene.setBackgroundImage(assets.image`Background1`)
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
sprites.create(assets.image`Sprite1`, SpriteKind.mapGroundCollisions).setPosition(20, 100)
game.onUpdate(function () {
    for (let ground of sprites.allOfKind(SpriteKind.mapGroundCollisions)) {
        if (mySprite.overlapsWith(ground)) {
            dx = mySprite.x - ground.x
            dy = mySprite.y - ground.y
            halfWidth = (mySprite.width + ground.width) / 2
            halfHeight = (mySprite.height + ground.height) / 2
            overlapX = halfWidth - Math.abs(dx)
            overlapY = halfHeight - Math.abs(dy)
            // Resolve the smaller overlap first
            if (overlapX < overlapY) {
                // LEFT / RIGHT collision
                if (dx > 0) {
                    // Player is on right side → push right
                    mySprite.x += overlapX
                } else {
                    mySprite.x -= overlapX
                }
                mySprite.vx = 0
            } else {
                // TOP / BOTTOM collision
                if (dy > 0) {
                    // Player below ground → push down
                    mySprite.y += overlapY
                    mySprite.vy = 0
                } else {
                    mySprite.y -= overlapY
mySprite.vy = 0
                }
            }
        }
    }
})
