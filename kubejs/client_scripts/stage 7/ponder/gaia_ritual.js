Ponder.registry(e => {
    e
        .create([
            'botania:life_essence',
            'botania:gaia_pylon',
            'botania:gaia_head',
            'botania:life_essence_block',
            'minecraft:beacon'
        ])
        .scene('tm4:gaia_ritual', 'Gaia Ritual', 'kubejs:gaia_summon', (scene, util) => {
    scene.scaleSceneView(.7);
    scene.setSceneOffsetY(-1);
    scene.world.showSection(util.select.layer(0), Facing.UP)
    scene.idle(30)
    scene.overlay.showText(100)
        .colored(PonderPalette.FAST)
        .text("To make a Gaia summon ritual you have to place an activated beacon in the middle")
        .placeNearTarget()
        .attachKeyFrame()
    scene.idle(120)
    scene.world.showIndependentSection(util.select.fromTo(4,1,4,6,2,6), Facing.DOWN)
    scene.idle(20)
    scene.overlay.showText(80)
        .colored(PonderPalette.FAST)
        .text("And 4 Gaia pylons 1 block above the beacon")
        .placeNearTarget()
        .attachKeyFrame()
    scene.idle(100)
    scene.world.showIndependentSection(util.select.layer(3), Facing.DOWN)
    scene.idle(20)
    scene.overlay.showText(80)
        .colored(PonderPalette.FAST)
        .text("And you must have a huge space around the ritual")
        .placeNearTarget()
        .attachKeyFrame()
    scene.idle(100)
    scene
        .text(100, "Now, when everything is ready you have to click terrasteel ingot on the beacon", [5, 3, 5])
        .colored(PonderPalette.FAST)
        .placeNearTarget()
        .attachKeyFrame()
    scene.idle(120)
    scene
    .showControls(40, [4, 4, 4], "left")
    .rightClick()
    .withItem("botania:terrasteel_ingot")
    scene.idle(60)
    })
})