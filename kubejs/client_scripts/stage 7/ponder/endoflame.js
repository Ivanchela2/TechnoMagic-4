Ponder.registry(e => {
    e
        .create([
            'botania:endoflame',
            'botania:floating_endoflame'
        ])
        .scene('tm4:endoflame', "Mana Farm on Endoflames", 'kubejs:endoflame', (scene, util) => {
    scene.scaleSceneView(.8);
    scene.setSceneOffsetY(-1);
    scene.world.showSection(util.select.layer(0), Facing.UP)
    scene.idle(20)
    scene.overlay.showText(60)
			.colored(PonderPalette.OUTPUT)
			.text("Let's build a Mana Farm on Endoflames")
			.placeNearTarget();
    scene.idle(80)
    scene.addKeyframe()
    scene.world.showSection(util.select.position(2,1,5), Facing.DOWN)
    scene.idle(4)
    scene.world.showSection(util.select.position(4,1,5), Facing.DOWN)
    scene.idle(4)
    scene.world.showSection(util.select.position(6,1,5), Facing.DOWN)
    scene.idle(10)
    scene.world.showSection(util.select.position(2,2,5), Facing.DOWN)
    scene.idle(4)
    scene.world.showSection(util.select.position(4,2,5), Facing.DOWN)
    scene.idle(4)
    scene.world.showSection(util.select.position(6,2,5), Facing.DOWN)
    scene.idle(10)
    scene.world.showSection(util.select.position(2,3,5), Facing.DOWN)
    scene.idle(4)
    scene.world.showSection(util.select.position(4,3,5), Facing.DOWN)
    scene.idle(4)
    scene.world.showSection(util.select.position(6,3,5), Facing.DOWN)
    scene.idle(10)
    scene.world.showSection(util.select.position(2,4,5), Facing.DOWN)
    scene.idle(4)
    scene.world.showSection(util.select.position(4,4,5), Facing.DOWN)
    scene.idle(4)
    scene.world.showSection(util.select.position(6,4,5), Facing.DOWN)
    scene.idle(10)
    scene.world.showSection(util.select.position(2,5,5), Facing.DOWN)
    scene.idle(4)
    scene.world.showSection(util.select.position(4,5,5), Facing.DOWN)
    scene.idle(4)
    scene.world.showSection(util.select.position(6,5,5), Facing.DOWN)
    scene.idle(10)
    scene.world.showSection(util.select.position(2,6,5), Facing.DOWN)
    scene.idle(4)
    scene.world.showSection(util.select.position(4,6,5), Facing.DOWN)
    scene.idle(4)
    scene.world.showSection(util.select.position(6,6,5), Facing.DOWN)
    scene.idle(20)
    scene
        .text(60, "Droppers must be directed downwards", [2, 5, 5])
        .colored(PonderPalette.OUTPUT)
        .placeNearTarget()
        .attachKeyFrame()
    scene.idle(80)
    scene.overlay.showText(120)
        .text("Now place a storage where you will put coal blocks and pipes that will load items in the droppers")
        .colored(PonderPalette.OUTPUT)
        .attachKeyFrame()
    scene.idle(140)
    scene.world.showIndependentSection(util.select.position(4,1,3), Facing.DOWN)
    scene.idle(20)
    scene.world.showIndependentSection(util.select.fromTo(3,1,4,5,1,4), Facing.NORTH)
    scene.world.showIndependentSection(util.select.fromTo(3,1,5,3,6,5), Facing.NORTH)
    scene.world.showIndependentSection(util.select.fromTo(5,1,5,5,6,5), Facing.NORTH)
    scene.idle(20)
    scene
        .text(60, "Make this pipe as an output", [4, 2, 4])
        .colored(PonderPalette.OUTPUT)
        .placeNearTarget()
        .attachKeyFrame()
    scene.idle(70)
    scene
        .showControls(40, [4.5, 1.8, 4], "left")
        .rightClick()
        .withItem('pipez:wrench')
        .whileSneaking()
    scene.idle(60)
    scene
        .text(100, "You can also make evenly mod in pipe to load fuel in all droppers", [4, 2, 4])
        .colored(PonderPalette.OUTPUT)
        .placeNearTarget()
    scene.idle(120)
    scene
        .text(60, "Put coal blocks in the chest", [4, 2, 3])
        .colored(PonderPalette.OUTPUT)
        .placeNearTarget()
        .attachKeyFrame()
    scene.idle(80)  
    scene
        .showControls(40, [4, 2, 3], "left")
        .rightClick()
        .withItem('coal_block')
    scene.idle(60)
    scene
        .text(80, "Now place redstone links on all of these droppers", [1.7, 5, 4])
        .colored(PonderPalette.OUTPUT)
        .placeNearTarget()
        .attachKeyFrame()
    scene.idle(100)
    scene.world.showIndependentSection(util.select.fromTo(2,2,4,6,6,4), Facing.SOUTH)
    scene.idle(20)
    scene
        .text(120, "Choose filter in the link (we will use a coal block) and right click on them to make them work", [2, 5, 4])
        .colored(PonderPalette.OUTPUT)
        .placeNearTarget()
    scene.idle(140)
    scene.overlay.showText(60)
			.colored(PonderPalette.OUTPUT)
			.text("Now place a hourglass with 40 red sand in it")
			.placeNearTarget()
            .attachKeyFrame()
    scene.idle(80)
    scene.world.showSection(util.select.position(4,1,1), Facing.DOWN)
    scene.idle(20)
    scene
        .text(80, "And place a redstone link with filter on it to make droppers work", [4, 2, 1])
        .colored(PonderPalette.OUTPUT)
        .placeNearTarget()
        .attachKeyFrame()
    scene.idle(100)
    scene.world.showIndependentSection(util.select.position(4,1,0), Facing.SOUTH)
    scene.idle(20)
    scene.rotateCameraY(-180)
    scene.idle(60)
    scene.addKeyframe()
    scene.world.showSection(util.select.fromTo(6,1,6,2,6,6), Facing.NORTH)
    scene.world.showIndependentSection(util.select.position(4,1,8), Facing.DOWN)
    scene.idle(20)
    scene
        .text(80, "Connect mana spreaders with flowers and with mana pool", [4, 5, 6])
        .colored(PonderPalette.OUTPUT)
        .placeNearTarget()

    scene.idle(60)
    })
})