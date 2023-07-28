Ponder.registry(e => {
    e
        .create([
            'create:steam_power_generator',
            'create:steam_engine'
        ])
        .scene('tm4:steam_power_generation', "Steam Power Generation", "kubejs:steam_power_generator", (scene, util) => {
    scene.world.modifyBlock([8, 9, 5], (curState) => curState.with("facing", "down"), false);
    scene.world.modifyBlock([4, 5, 6], (curState) => curState.with("facing", "up"), false);
    scene.world.modifyBlock([8, 6, 5], (curState) => curState.with("facing", "down"), false);
    var allstr = util.select.fromTo(9, 1, 0, 1, 11, 8);
    scene.scaleSceneView(.7);
    scene.setSceneOffsetY(-3);
    scene.showBasePlate()
    scene.idle(10)
    scene.world.showSection(allstr, Facing.NORTH)
    scene.world.setKineticSpeed(allstr, 128);
    scene.idle(3)
    scene.addKeyframe()
    scene.idle(20)
    scene
        .text(100, "This is the best kinetic energy generation scheme in Create", [3.0, 5.0, 3])
        .colored(PonderPalette.OUTPUT)
        .placeNearTarget()  
    scene.idle(125)
    scene
        .text(60, "Let's build it!", [3.0, 5.0, 3])
        .colored(PonderPalette.OUTPUT)
        .placeNearTarget()  
    scene.idle(80)
    scene.world.hideSection(allstr, Facing.SOUTH)
    scene.idle(30)
    scene.world.setKineticSpeed(allstr, 0);
    scene.world.showIndependentSection(util.select.fromTo(7,1,3,2,2,6), Facing.DOWN)
    scene.addKeyframe()
    scene.idle(20)
    scene
        .text(60, "You can place any block instead of Brass Casing", [2.0, 2.0, 3])
        .colored(PonderPalette.OUTPUT)
        .placeNearTarget()  
    scene.idle(90)
    scene.addKeyframe()
    scene.rotateCameraY(-180);
    scene.idle(65)
    scene
        .text(60, "Put the Lava Bucket in filter of Funnel", [5.3, 2.3, 6])
        .colored(PonderPalette.RED)
        .placeNearTarget() 

        scene.idle(80)
    scene.addKeyframe()
    scene.world.showSection(util.select.layer(3), Facing.DOWN)
    scene.idle(30)
    scene
        .text(90, "In The Filter Place a Lava Bucket and Click Deny List Then The Check Mark", [7, 3, 3])
        .colored(PonderPalette.RED)
        .placeNearTarget()
    scene.idle(120)
    scene.world.showSection(util.select.layer(4), Facing.DOWN)
    scene.addKeyframe()
    scene.idle(80)
    scene.addKeyframe()
    scene.world.showSection(util.select.fromTo(2, 5, 6, 4, 5, 1), Facing.DOWN)
    scene.world.showSection(util.select.fromTo(4, 6, 1, 4, 9, 1), Facing.DOWN)
    scene.world.showSection(util.select.fromTo(3, 8, 2,3,8,1), Facing.DOWN)
    scene.world.showSection(util.select.fromTo(4, 6, 2, 4, 8, 2), Facing.DOWN)
    scene.world.showSection(util.select.position(3, 6, 2), Facing.DOWN)
    scene.idle(60)
    scene.addKeyframe()
    scene
        .text(50, "Now place fluid tanks", [7, 4, 4])
        .colored(PonderPalette.OUTPUT)
        .placeNearTarget()
    scene.idle(70)
    scene.world.showSection(util.select.fromTo(7,5,4,5,8,6), Facing.DOWN)
    scene.world.showSection(util.select.position(8, 5, 7), Facing.DOWN)
    scene.world.showSection(util.select.position(8, 5, 3), Facing.DOWN)
    var i1 =scene.world.showIndependentSection(util.select.fromTo(8, 5, 4, 8, 5, 6), Facing.DOWN)
    scene.world.showSection(util.select.fromTo(9, 5, 4,9, 5, 6), Facing.DOWN)
    scene.idle(30)
    scene.world.showSection(util.select.fromTo(8,6, 5, 8, 7, 5), Facing.WEST)
    scene.world.showSection(util.select.fromTo(8,6, 4, 8, 6, 2), Facing.WEST)
    scene.idle(30)
    scene.world.showSection(util.select.position(8,8, 7), Facing.WEST)
    scene.world.showSection(util.select.position(8, 8, 3), Facing.WEST)
    var i2 = scene.world.showIndependentSection(util.select.fromTo(8, 8, 4, 8, 8, 6), Facing.WEST)
    scene.world.showSection(util.select.fromTo(9, 8, 4,9, 8, 6), Facing.WEST)
    scene.world.showSection(util.select.fromTo(8,9, 5, 7, 10, 5), Facing.WEST)
    var i3 = scene.world.showIndependentSection(util.select.fromTo(8,9, 4, 8, 10, 4), Facing.WEST)
    scene.world.showSection(util.select.fromTo(8,19, 3, 8, 10, 2), Facing.WEST)
    scene.idle(20)
    scene.world.showSection(util.select.fromTo(8,7, 2, 8, 9, 2), Facing.WEST)
    scene.idle(40)
    scene.rotateCameraY(-140);
    scene.idle(65)
    scene.addKeyframe()
    scene.world.showSection(util.select.position(2, 9, 3), Facing.DOWN)
    scene.world.showSection(util.select.fromTo(2, 6, 3,2, 8, 3), Facing.DOWN)
    scene.world.showSection(util.select.fromTo(2, 9, 2,7, 9, 2), Facing.DOWN)
    scene.idle(40)
    scene
        .text(60, "It's time to place steam engines!", [6, 6, 4])
        .colored(PonderPalette.OUTPUT)
        .placeNearTarget()
        .attachKeyFrame()
    scene.idle(80)
    scene.world.showSection(util.select.fromTo(7, 5, 3,5,8, 3), Facing.DOWN)
    scene.idle(40)
    scene
        .text(60, "Don't forget to connect them with Shafts", [6, 6, 4])
        .colored(PonderPalette.OUTPUT)
        .placeNearTarget()
    scene.idle(80)
    scene.rotateCameraY(-80);
    scene.addKeyframe()
    scene.idle(30)
    var i4 = scene.world.showIndependentSection(util.select.fromTo(2, 6, 6,4,6, 4), Facing.DOWN)
    var i5 = scene.world.showIndependentSection(util.select.fromTo(3, 6, 3,4,6, 3), Facing.DOWN)
    scene.world.setBlocks(util.select.fromTo(2, 7, 6,4,7, 4), "minecraft:cauldron", false)
    var i6 = scene.world.showIndependentSection(util.select.fromTo(2, 7, 6,4,7, 4), Facing.DOWN)
    var i7 = scene.world.showIndependentSection(util.select.fromTo(3, 7, 3,4,7, 3), Facing.DOWN)
    scene.idle(25)
    scene
        .text(80, "Place Fluid Pumps Then Right Click them With Copper Casing", [3, 6, 7])
        .colored(PonderPalette.OUTPUT)
        .placeNearTarget()
        .attachKeyFrame()
    scene.idle(100)
    scene
        .text(60, "Then place stone and dripstone above cauldrons", [3, 8, 7])
        .colored(PonderPalette.OUTPUT)
        .placeNearTarget()
        .attachKeyFrame()
    scene.idle(80)
    scene.world.showSection(util.select.fromTo(2, 8, 6,4,8, 4), Facing.DOWN)
    scene.world.showSection(util.select.fromTo(3, 8, 3,4,8, 3), Facing.DOWN)
    scene.world.showSection(util.select.fromTo(2, 9, 6,4,9, 4), Facing.DOWN)
    scene.world.showSection(util.select.fromTo(3, 9, 3,4,9, 3), Facing.DOWN)
    scene.idle(20)
    scene
        .text(60, "Now we have to make a pool of 11 blocks of lava", [3, 8, 7])
        .colored(PonderPalette.OUTPUT)
        .placeNearTarget()
        .attachKeyFrame()
    scene.idle(80)
    scene.world.showSection(util.select.fromTo(1, 10, 2,5,10, 7), Facing.DOWN)
    scene.idle(40)
    scene
        .text(60, "Now we will set up the Mechanical Arm", [5, 2, 5])
        .colored(PonderPalette.OUTPUT)
        .placeNearTarget()
    scene.idle(70)
    scene.rotateCameraY(40);
    scene.idle(40)
    scene.addKeyframe()
    scene.world.hideSection(util.select.layer(3), Facing.UP)
    scene.world.hideSection(util.select.fromTo(0, 5, 10,10,10, 0), Facing.UP)
    scene.world.hideSection(util.select.fromTo(8, 4, 4,8,4, 6), Facing.UP)
    scene.world.hideSection(util.select.fromTo(4, 4, 3,4,4, 6), Facing.UP)
    scene.world.hideSection(util.select.fromTo(3, 4, 2,3,4, 5), Facing.UP)
    scene.world.hideSection(util.select.position(2,4,3), Facing.UP)
    scene.world.hideIndependentSection(i1, Facing.UP)
    scene.world.hideIndependentSection(i2, Facing.UP)
    scene.world.hideIndependentSection(i3, Facing.UP)
    scene.world.hideIndependentSection(i4, Facing.UP)
    scene.world.hideIndependentSection(i5, Facing.UP)
    scene.world.hideIndependentSection(i6, Facing.UP)
    scene.world.hideIndependentSection(i7, Facing.UP)
    scene.idle(20)
    var output1 = util.vector.blockSurface(util.grid.at(2, 3, 4), Direction.UP);
    var input = util.vector.blockSurface(util.grid.at(7, 2, 4), Direction.UP);
    scene
    .text(100, "Set up Blaze Burners as an Output, left belt as an input, and right belt as an output", [5, 4, 5])
    .colored(PonderPalette.OUTPUT)
    .placeNearTarget()
    scene.idle(30)
    scene.overlay.chaseBoundingBoxOutline(PonderPalette.OUTPUT, output1, util.grid.at(2, 2, 4), 70);
    scene.overlay.chaseBoundingBoxOutline(PonderPalette.INPUT, input, util.grid.at(7, 2, 4), 70);
    scene.overlay.chaseBoundingBoxOutline(PonderPalette.OUTPUT, util.vector.blockSurface(util.grid.at(5, 1, 4), Direction.UP), util.grid.at(5,4,4), 70);
    scene.overlay.chaseBoundingBoxOutline(PonderPalette.OUTPUT, util.vector.blockSurface(util.grid.at(6, 1, 4), Direction.UP), util.grid.at(6,4,4), 70);
    scene.overlay.chaseBoundingBoxOutline(PonderPalette.OUTPUT, util.vector.blockSurface(util.grid.at(7, 1, 4), Direction.UP), util.grid.at(7,4,4), 70);
    scene.overlay.chaseBoundingBoxOutline(PonderPalette.OUTPUT, util.vector.blockSurface(util.grid.at(5, 1, 5), Direction.UP), util.grid.at(5,4,5), 70);
    scene.overlay.chaseBoundingBoxOutline(PonderPalette.OUTPUT, util.vector.blockSurface(util.grid.at(6, 1, 5), Direction.UP), util.grid.at(6,4,5), 70);
    scene.overlay.chaseBoundingBoxOutline(PonderPalette.OUTPUT, util.vector.blockSurface(util.grid.at(7, 1, 5), Direction.UP), util.grid.at(7,4,5), 70);
    scene.overlay.chaseBoundingBoxOutline(PonderPalette.OUTPUT, util.vector.blockSurface(util.grid.at(5, 1, 6), Direction.UP), util.grid.at(5,4,6), 70);
    scene.overlay.chaseBoundingBoxOutline(PonderPalette.OUTPUT, util.vector.blockSurface(util.grid.at(6, 1, 6), Direction.UP), util.grid.at(6,4,6), 70);
    scene.overlay.chaseBoundingBoxOutline(PonderPalette.OUTPUT, util.vector.blockSurface(util.grid.at(7, 1, 6), Direction.UP), util.grid.at(7,4,6), 70);
    scene.idle(105)
    scene.world.showSection(util.select.layer(3), Facing.DOWN)
    scene.world.showSection(util.select.fromTo(0, 5, 10,10,10, 0), Facing.DOWN)
    scene.world.showSection(util.select.fromTo(8, 4, 4,8,4, 6), Facing.DOWN)
    scene.world.showSection(util.select.fromTo(4, 4, 3,4,4, 6), Facing.DOWN)
    scene.world.showSection(util.select.fromTo(3, 4, 2,3,4, 5), Facing.DOWN)
    scene.world.showSection(util.select.position(2,4,3), Facing.DOWN)
    scene.addKeyframe()
    scene.idle(40)
    scene
    .text(80, "Be sure You fill the barrel with 4 buckets or Lava Buckets", [2, 3.5, 6])
    .colored(PonderPalette.OUTPUT)
    .placeNearTarget()
    scene.idle(100)
    scene
    .text(110, "Now we have to power our generator. You can use Windmill. Make sure the speed is 128. Otherwise it will break", [3, 6, 2])
    .colored(PonderPalette.OUTPUT)
    .placeNearTarget()
    .attachKeyFrame()
    scene.idle(130)
    scene.world.setBlocks([2,6,2,1,6,2],Block.id('create:shaft').with('axis', 'x'), true )
    scene.world.setBlocks([0,6,2],Block.id('create:large_cogwheel').with('axis', 'x'), true )
    scene.idle(3)
    scene.world.setKineticSpeed(util.select.everywhere(), 128);
    scene
    .text(80, "When your generator started working you can destroy a kinetic power source", [3, 5, 0])
    .colored(PonderPalette.OUTPUT)
    .placeNearTarget()
    scene.idle(100)
    scene.world.destroyBlock([2,6,2])
    scene.world.destroyBlock([1,6,2])
    scene.world.destroyBlock([0,6,2])
    scene.idle(60)
    })
})