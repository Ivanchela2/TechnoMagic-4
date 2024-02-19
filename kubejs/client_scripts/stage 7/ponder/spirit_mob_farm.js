Ponder.registry(e => {
    e
        .create([
            'vitalize:soul_revitalizer',
            'spirit:soul_crystal',
            /vitalize:pylon/
        ])
        .scene('gribtweaks:spirit_mob_farm', 'Spirit Mob Farm', 'kubejs:spirit_mob_farm', (scene, util) => {
    scene.scaleSceneView(.7);
    scene.setSceneOffsetY(-1);
    scene.showBasePlate()
    scene.idle(30)
    scene.overlay.showText(60)
			.colored(PonderPalette.BLUE)
			.text("Let's build a mob farm with Soul Revitalizer")
			.placeNearTarget();
    scene.idle(80)
    scene.world.showSection(util.select.position(5,1,5), Facing.DOWN)
    scene.idle(20)
    scene
        .text(50, "Place a Soul Revitalizer", [5, 2, 5])
        .colored(PonderPalette.BLUE)
        .placeNearTarget()
        .attachKeyFrame()
    scene.idle(70)
    scene.overlay.showText(80)
			.colored(PonderPalette.BLUE)
			.text("Now we have to place 8 pylons around the Soul Revitalizer")
			.placeNearTarget()
            .attachKeyFrame()
    scene.idle(100)
    scene.world.showSection(util.select.position(5,1,1), Facing.DOWN)
    scene.idle(4)
    scene.world.showSection(util.select.position(8,1,2), Facing.DOWN)
    scene.idle(4)
    scene.world.showSection(util.select.position(9,1,5), Facing.DOWN)
    scene.idle(4)
    scene.world.showSection(util.select.position(8,1,8), Facing.DOWN)
    scene.idle(4)
    scene.world.showSection(util.select.position(5,1,9), Facing.DOWN)
    scene.idle(4)
    scene.world.showSection(util.select.position(2,1,8), Facing.DOWN)
    scene.idle(4)
    scene.world.showSection(util.select.position(1,1,5), Facing.DOWN)
    scene.idle(4)
    scene.world.showSection(util.select.position(2,1,2), Facing.DOWN)
    scene.idle(30)
    scene
        .text(80, "Now we must put a soul crystal with 64 souls in it", [5, 2, 5])
        .colored(PonderPalette.BLUE)
        .placeNearTarget()
        .attachKeyFrame()
    scene.idle(100)
    scene
        .showControls(40, [5, 2, 5], "left")
        .rightClick()
        .withItem("spirit:soul_crystal")
    scene.idle(60)
    scene
        .text(60, "Place a storage near the Soul Revitalizer", [5, 2, 5])
        .colored(PonderPalette.BLUE)
        .placeNearTarget()
        .attachKeyFrame()
    scene.idle(80)
    scene.world.showSection(util.select.position(5,1,4), Facing.DOWN)
    scene.idle(30)
    scene
        .text(60, "And an energy source near the Soul Revitalizer", [5, 2, 5])
        .colored(PonderPalette.BLUE)
        .placeNearTarget()
        .attachKeyFrame()
    scene.idle(80)
    scene.world.showSection(util.select.position(4,1,5), Facing.DOWN)
    scene.idle(30)
    scene.overlay.showText(60)
        .colored(PonderPalette.BLUE)
        .text("And a mob farm started working")
        .placeNearTarget()

    scene.idle(90)
    })
})