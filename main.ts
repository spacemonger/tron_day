enum ActionKind {
    Walking,
    Idle,
    Jumping
}
namespace SpriteKind {
    export const text = SpriteKind.create()
}
function selectCharacter () {
    scene.setBackgroundImage(img`
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        `)
    goose.destroy()
    title.destroy()
    if (controller.A.isPressed()) {
        character = sprites.create(img`
            . . . . f f f f . . . . . 
            . . f f f f f f f f . . . 
            . f f f f f f c f f f . . 
            f f f f f f c c f f f c . 
            f f f c f f f f f f f c . 
            c c c f f f e e f f c c . 
            f f f f f e e f f c c f . 
            f f f b f e e f b f f f . 
            . f 4 1 f 4 4 f 1 4 f . . 
            . f e 4 4 4 4 4 4 e f . . 
            . f f f e e e e f f f . . 
            f e f b 7 7 7 7 b f e f . 
            e 4 f 7 7 7 7 7 7 f 4 e . 
            e e f 6 6 6 6 6 6 f e e . 
            . . . f f f f f f . . . . 
            . . . f f . . f f . . . . 
            `, SpriteKind.Player)
    }
    if (controller.B.isPressed()) {
        character = sprites.create(img`
            . f f f . f f f f . f f f . 
            f f f f f c c c c f f f f f 
            f f f f b c c c c b f f f f 
            f f f c 3 c c c c 3 c f f f 
            . f 3 3 c c c c c c 3 3 f . 
            . f c c c c 4 4 c c c c f . 
            . f f c c 4 4 4 4 c c f f . 
            . f f f b f 4 4 f b f f f . 
            . f f 4 1 f d d f 1 4 f f . 
            . . f f d d d d d d f f . . 
            . . e f e 4 4 4 4 e f e . . 
            . e 4 f b 3 3 3 3 b f 4 e . 
            . 4 d f 3 3 3 3 3 3 c d 4 . 
            . 4 4 f 6 6 6 6 6 6 f 4 4 . 
            . . . . f f f f f f . . . . 
            . . . . f f . . f f . . . . 
            `, SpriteKind.Player)
    }
}
function spawnObstacle () {
    goose = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . b 5 5 b . . . 
        . . . . . . b b b b b b . . . . 
        . . . . . b b 5 5 5 5 5 b . . . 
        . b b b b b 5 5 5 5 5 5 5 b . . 
        . b d 5 b 5 5 5 5 5 5 5 5 b . . 
        . . b 5 5 b 5 d 1 f 5 d 4 f . . 
        . . b d 5 5 b 1 f f 5 4 4 c . . 
        b b d b 5 5 5 d f b 4 4 4 4 b . 
        b d d c d 5 5 b 5 4 4 4 4 4 4 b 
        c d d d c c b 5 5 5 5 5 5 5 b . 
        c b d d d d d 5 5 5 5 5 5 5 b . 
        . c d d d d d d 5 5 5 5 5 d b . 
        . . c b d d d d d 5 5 5 b b . . 
        . . . c c c c c c c c b b . . . 
        `, SpriteKind.Enemy)
    goose.setPosition(randint(0, 160), -10)
    goose.setVelocity(0, 60)
}
function walking (mySprite: Sprite) {
    character = sprites.create(img`
        . . . . f f f f . . . . . 
        . . f f c c c c f f . . . 
        . f f c c c c c c f f . . 
        f f c c c c c c c c f f . 
        f f c c f c c c c c c f . 
        f f f f f c c c f c c f . 
        f f f f c c c f c c f f . 
        f f f f f f f f f f f f . 
        f f f f f f f f f f f f . 
        . f f f f f f f f f f . . 
        . f f f f f f f f f f . . 
        f e f f f f f f f f e f . 
        e 4 f 7 7 7 7 7 7 c 4 e . 
        e e f 6 6 6 6 6 6 f e e . 
        . . . f f f f f f . . . . 
        . . . f f . . f f . . . . 
        `, SpriteKind.Player)
    animation.runImageAnimation(
    goose,
    [img`
        . . . . . . . . . . . . . 
        . . . . . f f f f . . . . 
        . . . f f c c c c f f . . 
        . f f f c c c c c c f f . 
        f f c c c c c c c c c f f 
        f c c c c f c c c c c c f 
        . f f f f c c c c f c c f 
        . f f f f c c f c c c f f 
        . f f f f f f f f f f f f 
        . f f f f f f f f f f f f 
        . . f f f f f f f f f f . 
        . . e f f f f f f f f f . 
        . . e f f f f f f f f e f 
        . . 4 c 7 7 7 7 7 e 4 4 e 
        . . e f f f f f f f e e . 
        . . . f f f . . . . . . . 
        `],
    200,
    false
    )
    animation.runImageAnimation(
    goose,
    [img`
        . . . . . . . . . . . . . 
        . . . . . f f f f . . . . 
        . . . f f c c c c f f . . 
        . . f f c c c c c c f f . 
        . f f f c c c c c c c f f 
        f f f c c c c c c c c c f 
        f f c c c f c c c c c c f 
        . f f f f f c c c f c f f 
        . f f f f c c f f c f f f 
        . . f f f f f f f f f f f 
        . . f f f f f f f f f f . 
        . . f f f f f f f f f e . 
        . f e f f f f f f f f e . 
        . e 4 4 e 7 7 7 7 7 c 4 . 
        . . e e f f f f f f f e . 
        . . . . . . . . f f f . . 
        `],
    200,
    false
    )
}
function titleFrame () {
    scene.setBackgroundImage(img`
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888882888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888222888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888222222888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888882222222222888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888882222222222888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888282222222888822288888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888222222222888822288888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888288888822288222888822288888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888882222888222288222888822288888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888822222888888828222288822288822888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888882222222888888882222288822222222888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888222222228888888888222888882222222888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888222282222288888882888828888888222222888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888822228888888888822228888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888822222888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888822228888888888822228888888882222288888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888222222888888888222222288888882222288888222228888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888882222222888888888222222228888882222288888222222222228888822288888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888882222222888888888222222222288888222288888222222222222228222288888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888222222222288888888888222222888888222288882222222222222222222288888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888822222222222288888888888822228888888822288888222222222222222222888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888222222222222228888828888822288888882222888888822822222222222288888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888222222222222228888888888888888888888888888888822888888822222228888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888222222222222228888222288888888888888888888888888888888822222228888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888222222222222228888222228888888228888888888888888888888882222222888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888222222222222222222222222228888222222288888888888888888888222222288888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888882222222222222222222222222222288882222222288888288888888888882222288888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888882222222222222222222222222222228882222222222822288888888888888822288888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888822222222222222222222222222222228882222222222222888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888822222222222222222222222222222228882222222222228888888888888888888888888822228888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888822222222222222222222222222222222222222222222288888228888822222288888888822222888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888822222222222222222222222222222222222222222222888882228888222222222288888222222888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888822222222222222222222222222222222222222222228888882228882222222222222888222222288888888888888888888888888888888888888888888888888
        8888888888888888888888888888888822222222222222222222222222222222222222222288888882288888822222222222222222222888888828888888888888888888888888888888888888888888
        8888888888888888888888888888888822222222222222222222222222222222222222222888888888888888888222222222222222222288882222888888888888888888888888888888888888888888
        8888888888888888888888888888888822222222222222222222222222222222222222222288888888888888888822222222222222222288822222288888888888888888888888888888888888888888
        8888888888888888888888888888888888882222222222222222222222222222222222222288888888888888888882222222222222222288822222288888888888888888888888888888888888888888
        8888888888888888888888888888888888888222222222222222222222222222222222222288882888888888888888222222222222222288822222888882888888888888888888888888888888888888
        8888888888888888888888888888888888888222222222222222222222222222222222222288888888888828888888222222222222222288822222888822288888888888888888888888888888888888
        8888888888888888888888888888888888888222222222222222222222222222222222222288888888888888888888822222222222222222222222888222222888888888888888888888888888888888
        8888888888888888888888888888888888888222222222222222222222222222222222222288888888888888888888822222222222222222222222882222222288888888888888888888888888888888
        8888888888888888888888888888888888888222222222222222222222222222222222222288888888888888888888822222222222222222222222222222222288888888888888888888888888888888
        8888888888888888888888888888888888888222222222222222222222222222222222222288888888888888888888822222222222222222222228888888888888888888888888888888888888888888
        8888888888888888888888888888888888882222222222222222222222222222222222222288888888888888888888822222222222222222222288888888888888888888888888888888888888888888
        8888888888888888888888888888888888882222222222222222222222222222222222222288888888888888888888222222222222222222222288888888888888888888888888888888888888888888
        8888888888888888888888888888888288822222222222222222222222222222222222222228888888888888888822222222222222222222222888888888888888888888888888888888888888888888
        8888888888888888888888888888888228882222222222222222222222222222222222222222888888888888882222222222222222222222228888888888888888888888888888888888888888888888
        8888888888888888888888888888888822882222222222222222222222222222222222222222888888888888882222222222222222222222228888228888888888888888888888888888888888888888
        8888888888888888888888888888888828882222222222222222222222222222222222222222288888888888882222222222222222222222288882228888888888888888888888888888888888888888
        8888888888888888888888888888282228882222222222222222222222222222222222222222228888888888882222222222222222222222888822228888888888888888888888888888888888888888
        8888888888888888888888888888888888882222222222222222222222222222222222222222228888822228888222222222222222222222882222222228888888888888888888888888888888888888
        8888888888888888888888888888888888882222222222222222222222222222222222222222222222222228888822222222222222222222222222222228888888888888888888888888888888888888
        8888888888888888888888888888888888822222222222222222222222222222222222222222222222222228888822222222222222222222222222222228888888888888888888888888888888888888
        8888888888888888888888888888888888822222222222222222222222222222222222222222222222222222228822222222222222222888882222222288888888888888888888888888888888888888
        8888888888888888888888888888888888822222222222222222222222222222222222222222222222222222222822222222222222222888888222222288888888888888888888888888888888888888
        8888888888888888888888888888888888822222222222222222222222222222222222222222222222222222222222222222222222228888888222228888888888888888888888888888888888888888
        8888888888888888888888888888888888822222222222222222222222222222222222222222222222222222222222222222222222288888888822228888888888888888888888888888888888888888
        8888888888888888888888888888888888882222222222222222222222222222222222222222222222222222222222222222222222288888888822288888888888888888888888888888888888888888
        8888888888888888888888888888888888882222222222222222222222222222222222222222222222222222222222222222222222288888888822888888888888888888888888888888888888888888
        8888888888888888888888888888888228888222222222222222222222222222222222222222222222222222222222222222222222222288888882888888888888888888888888888888888888888888
        8888888888888888888888888888888222288222222222222222222222222222222222222222222222222222222222222222222222222228888888888888888888888888888888888888888888888888
        8888888888888888888888888888888822228222222222222222222222222222222222222222222222222222222222222222222222222228888888888888888888888888888888888888888888888888
        8888888888888888888888888888888822222822222222222222222222222222222222222222222222222222222222222222222222222228888888888888888888888888888888888888888888888888
        8888888888888888888888888888888882222282222222222222222222222222222222222222222222222222222222222222222222222228888888888888888888888888888888888888888888888888
        8888888888888888888888888888888882222282222222222222222222222222222222222222222222222222222222222222222222222228888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888222228882222222222222222222222222222222222222222222222222222222222222222222228888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888822228888888882222222222222222222222222222222222222222222222222222222222222228888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888822228888888888822222222222222222222222222222222222222222222222222222222222228888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888882228888888888888822222222222222222222222222222888222222222222222222222228888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888228888888888888888888222222222222222222222888888882222222222222222222888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888822888888888888882222222222222288888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888222222222888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888882222222228888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888822222222228888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888822222222228888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888822222222288888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888822222222288888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888882222228888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888882222888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888882228888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888882228888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        `)
    goose = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . b 5 5 b . . . 
        . . . . . . b b b b b b . . . . 
        . . . . . b b 5 5 5 5 5 b . . . 
        . b b b b b 5 5 5 5 5 5 5 b . . 
        . b d 5 b 5 5 5 5 5 5 5 5 b . . 
        . . b 5 5 b 5 d 1 f 5 d 4 f . . 
        . . b d 5 5 b 1 f f 5 4 4 c . . 
        b b d b 5 5 5 d f b 4 4 4 4 b . 
        b d d c d 5 5 b 5 4 4 4 4 4 4 b 
        c d d d c c b 5 5 5 5 5 5 5 b . 
        c b d d d d d 5 5 5 5 5 5 5 b . 
        . c d d d d d d 5 5 5 5 5 d b . 
        . . c b d d d d d 5 5 5 b b . . 
        . . . c c c c c c c c b b . . . 
        `, SpriteKind.Enemy)
    animation.setAction(goose, ActionKind.Walking)
    animation.runMovementAnimation(
    goose,
    animation.animationPresets(animation.parachuteRight),
    5000,
    false
    )
    music.playMelody("G B A G C5 B A B ", 120)
    scene.setBackgroundImage(img`
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888882888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888222888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888222222888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888882222222222888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888882222222222888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888282222222888822288888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888222222222888822288888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888288888822288222888822288888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888882222888222288222888822288888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888822222888888828222288822288822888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888882222222888888882222288822222222888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888222222228888888888222888882222222888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888222282222288888882888828888888222222888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888822228888888888822228888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888822222888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888822228888888888822228888888882222288888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888222222888888888222222288888882222288888222228888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888882222222888888888222222228888882222288888222222222228888822288888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888882222222888888888222222222288888222288888222222222222228222288888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888222222222288888888888222222888888222288882222222222222222222288888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888822222222222288888888888822228888888822288888222222222222222222888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888222222222222228888828888822288888882222888888822822222222222288888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888222222222222228888888888888888888888888888888822888888822222228888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888222222222222228888222288888888888888888888888888888888822222228888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888222222222222228888222228888888228888888888888888888888882222222888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888222222222222222222222222228888222222288888888888888888888222222288888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888882222222222222222222222222222288882222222288888288888888888882222288888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888882222222222222222222222222222228882222222222822288888888888888822288888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888822222222222222222222222222222228882222222222222888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888822222222222222222222222222222228882222222222228888888888888888888888888822228888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888822222222222222222222222222222222222222222222288888228888822222288888888822222888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888822222222222222222222222222222222222222222222888882228888222222222288888222222888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888822222222222222222222222222222222222222222228888882228882222222222222888222222288888888888888888888888888888888888888888888888888
        8888888888888888888888888888888822222222222222222222222222222222222222222288888882288888822222222222222222222888888828888888888888888888888888888888888888888888
        8888888888888888888888888888888822222222222222222222222222222222222222222888888888888888888222222222222222222288882222888888888888888888888888888888888888888888
        8888888888888888888888888888888822222222222222222222222222222222222222222288888888888888888822222222222222222288822222288888888888888888888888888888888888888888
        8888888888888888888888888888888888882222222222222222222222222222222222222288888888888888888882222222222222222288822222288888888888888888888888888888888888888888
        8888888888888888888888888888888888888222222222222222222222222222222222222288882888888888888888222222222222222288822222888882888888888888888888888888888888888888
        8888888888888888888888888888888888888222222222222222222222222222222222222288888888888828888888222222222222222288822222888822288888888888888888888888888888888888
        8888888888888888888888888888888888888222222222222222222222222222222222222288888888888888888888822222222222222222222222888222222888888888888888888888888888888888
        8888888888888888888888888888888888888222222222222222222222222222222222222288888888888888888888822222222222222222222222882222222288888888888888888888888888888888
        8888888888888888888888888888888888888222222222222222222222222222222222222288888888888888888888822222222222222222222222222222222288888888888888888888888888888888
        8888888888888888888888888888888888888222222222222222222222222222222222222288888888888888888888822222222222222222222228888888888888888888888888888888888888888888
        8888888888888888888888888888888888882222222222222222222222222222222222222288888888888888888888822222222222222222222288888888888888888888888888888888888888888888
        8888888888888888888888888888888888882222222222222222222222222222222222222288888888888888888888222222222222222222222288888888888888888888888888888888888888888888
        8888888888888888888888888888888288822222222222222222222222222222222222222228888888888888888822222222222222222222222888888888888888888888888888888888888888888888
        8888888888888888888888888888888228882222222222222222222222222222222222222222888888888888882222222222222222222222228888888888888888888888888888888888888888888888
        8888888888888888888888888888888822882222222222222222222222222222222222222222888888888888882222222222222222222222228888228888888888888888888888888888888888888888
        8888888888888888888888888888888828882222222222222222222222222222222222222222288888888888882222222222222222222222288882228888888888888888888888888888888888888888
        8888888888888888888888888888282228882222222222222222222222222222222222222222228888888888882222222222222222222222888822228888888888888888888888888888888888888888
        88888888888888888888888888888888888822222222222222222222222222222222222222222288888ffff8888222222222222222222222882222222228888888888888888888888888888888888888
        8888888888888888888888888888888888882222222222222222222222222222222222222222ffffffff22f8888822222222222222222222222222222228888888888888888888888888888888888888
        8888888888888888888888888888888888822222222222222222222222222222222222222222f222ff2222f8888822222222222222222222222222222228888888888888888888888888888888888888
        8888888888888888888888888888888888822222222222222222222222222222222222222222f2222222222ff88822222222222222222888882222222288888888888888888888888888888888888888
        8888888888888888888888888888888888822222222222222222222222222222222222222222f222222222222ff822222222222222222888888222222288888888888888888888888888888888888888
        8888888888888888888888888888888888822222222222222222222222222222222222222222f22222222222222f22222222222222228888888222228888888888888888888888888888888888888888
        8888888888888888888888888888888888822222222222222222222222222222222222222222f22222222222222f22222222222222288888888822228888888888888888888888888888888888888888
        888888888888888888888888888888888888222222222222222222222222222222222222222ff22222222222222fff222222222222288888888822288888888888888888888888888888888888888888
        888888888888888888888888888888888888222222222222222222222222222222222222222ff2222222222222222f222222222222288888888822888888888888888888888888888888888888888888
        888888888888888888888888888888822888822222222222222222222222222222222222222f22222222222222222f222222222222ffff88888882888888888888888888888888888888888888888888
        88888888888888888888888888888882222882222222222222222222222222222222222222f222222222222222222f2222222222fff22f88888888888888888888888888888888888888888888888888
        8888888888888888888888888888888822228222222222222222222222222222222222222f2222222222222222222ff22222222f222222f8888888888888888888888888888888888888888888888888
        8888888888888888888888888888888822222822222222222222222222222222222222222f22222222222222222222ff2222222ff22222f8888888888888888888888888888888888888888888888888
        8888888888888888888888888888888882222282222222222222222222222222222222222f222222222222222222222ffff2222ff22222f8888888888888888888888888888888888888888888888888
        8888888888888888888888888888888882222282222222222222222222222222222222222f222222222222222222222222ff2fff222222f8888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888222228882222222222222222222222222222222f22222222222222222222222222ff22222222f8888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888822228888888882222222222222222222222222f22222222222222222222222222222222222ff8888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888822228888888888822222222222222222222222f2222222ffff22222222222222222222222ff88888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888882228888888888888822222222222222222222ff222fff8888fff22222222222222222fff8888888888888888888888888888888888888888888888888888
        88888888888888888888888888888888888882288888888888888888882222222222222222fffff88888888ffff22222222222ffff888888888888888888888888888888888888888888888888888888
        88888888888888888888888888888888888888888888888888888888888888888888888888ff88888888888888fffff222222ff888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888f22222ff8888888888888888888888888888888888888888888888888888888888
        888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888ff2ff22f88888888888888888888888888888888888888888888888888888888888
        88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888ff22ff22f88888888888888888888888888888888888888888888888888888888888
        88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888f2222222f88888888888888888888888888888888888888888888888888888888888
        88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888f222222f888888888888888888888888888888888888888888888888888888888888
        88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888ff222fff888888888888888888888888888888888888888888888888888888888888
        888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888f22ff88888888888888888888888888888888888888888888888888888888888888
        888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888f2ff888888888888888888888888888888888888888888888888888888888888888
        888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888fff8888888888888888888888888888888888888888888888888888888888888888
        888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888ff88888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        `)
    title = sprites.create(img`
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ..555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555..
        ..555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555..
        ..555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555..
        ..555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555..
        ..555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555..
        ..555fff555fffffffff555ffffff555fffff5555555ff55555555f555555555ffffffff555555555fff5555555ffff5555555fffff555555555ffff55555555555ffffffffffff555fffffffff555..
        ..555fff555fffffffff555ffffff555fffff5555555ff55555555f555555555ffffffff555555555fff5555555ffff5555555fffff555555555ffff55555555555ffffffffffff555fffffffff555..
        ..555fff555fffffffff555ffffff555fffff5555555ff55555555f555555555ffffffff555555555fff5555555ffff5555555fffff555555555ffff55555555555ffffffffffff555fffffffff555..
        ..555fff555fffffffff555fff555fff555ffff555ffff555ffffff555fff555fffff555fffffffffff555fff555ff555fff555ffff555ffffffffff555ffffffffffffff555ffffff555ffffff555..
        ..555fff555fffffffff555fff555fff555ffff555ffff555ffffff555fff555fffff555fffffffffff555fff555ff555fff555ffff555ffffffffff555ffffffffffffff555ffffff555ffffff555..
        ..555fff555fff555fff555fff555fff555ffff555ffff555555fff555fff555fffff555fffffffffff555fff555ff555fff555ffff55555555fffff555ffffffffffffff555ffffff555ffffff555..
        ..555fff555fff555fff555fff555fff555ffff555ffff555555fff555555555fffff555fff555555ff555fff555ff555fff555ffff55555555fffff55555555ffffffffffffffffff555ffffff555..
        ..555fff555fff555fff555fff555fff555ffff555ffff555555fff555555555fffff555fff555555ff555fff555ff555fff555ffff55555555fffff55555555ffffffffffffffffff555ffffff555..
        ..555fff555fff555fff555fff555555555ffff555ffff555ffffff55555555ffffff555fff555555ff555fff555ff555fff555fffffffff555fffff55555555ffffffffffffffffff555ffffff555..
        ..555fff555fff555fff555fff555555555ffff555ffff555ffffff555ff555ffffff555ffffff555ff555fff555ff555fff555fffffffff555fffff555ffffffffffffff555ffffff555ffffff555..
        ..555fff555fff555fff555fff555555555ffff555ffff555ffffff555ff555ffffff555ffffff555ff555fff555ff555fff555fffffffff555fffff555ffffffffffffff555ffffff555ffffff555..
        ..555ffffff555fff555ffffff555fff555ffff555ffff55555555f555ffff555ffff55555555555ffff5555555ffff5555555ffff555555555fffff55555555555ffffff555ffffff555ffffff555..
        ..555ffffff555fff555ffffff555fff555ffff555ffff55555555f555ffff555fffffff55555555ffff5555555ffff5555555ffff555555555fffff55555555555ffffffffffff555fffffffff555..
        ..555ffffff555fff555ffffff555fff555ffff555ffff55555555f555ffff555fffffff55555555ffff5555555ffff5555555ffff555555555fffff55555555555ffffffffffff555fffffffff555..
        ..555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555fffffffff555..
        ..555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555..
        ..555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555..
        ..555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555..
        ..555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555..
        ..555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555..
        ................................................................................................................................................................
        ................................................................................................................................................................
        `, SpriteKind.text)
    title.setPosition(80, 105)
    controller.startLightAnimation(light.rainbowAnimation, 500)
    music.baDing.play()
}
let title: Sprite = null
let goose: Sprite = null
let character: Sprite = null
let isStarted = false
titleFrame()
pause(2000)
while (!(controller.A.isPressed() || controller.B.isPressed())) {
    pause(100)
}
isStarted = true
selectCharacter()
character.setPosition(75, 105)
controller.moveSprite(character, 100, 0)
character.setFlag(SpriteFlag.StayInScreen, true)
game.onUpdateInterval(1000, function () {
    while (!(isStarted)) {
    	
    }
    spawnObstacle()
})
forever(function () {
    while (!(isStarted)) {
    	
    }
})
