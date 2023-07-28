Ponder.registry(e => {
    e
        .create([
            'create:crushing_wheel',
            'create:encased_fan',
            'minecraft:iron_ore'
        ])
        .scene("tm4:ore_processing", "Ore Processing", "kubejs:ore_processing", (scene, util) => {
    var beltpos = util.grid.at(10, 1, 5)
    scene.scaleSceneView(.7);
    scene.setSceneOffsetY(-1);
    scene.world.setBlock([10,1,4], Block.id('create:cogwheel').with("axis", 'z'), false)
    scene.world.showSection(util.select.layer(0), Facing.UP)
    scene.idle(30)
    scene.overlay.showText(50)
			.colored(PonderPalette.BLUE)
			.text("Let's build the Ore Processing Machine")
            .placeNearTarget();
    scene.idle(70)
    scene.addKeyframe()
    scene.world.showSection(util.grid.at(10, 5, 5), Facing.DOWN)
    scene.idle(5)
    scene.world.showSection(util.grid.at(10, 4, 5), Facing.UP)
    scene.idle(7)
    scene.world.showSection(util.select.position(10, 3, 4), Facing.SOUTH)
    scene.world.showSection(util.select.position(10, 3, 6), Facing.NORTH)
    scene.idle(8)
    scene.world.showSection(util.select.fromTo(10, 1, 5, 0,2,5), Facing.DOWN)
    scene.idle(2)
    scene.world.showSection(util.select.position(10, 1, 4), Facing.SOUTH)
    scene.idle(8)
    scene.world.showSection(util.select.fromTo(7, 1, 4, 7,2,0), Facing.DOWN)
    scene.idle(5)
    scene.world.showIndependentSection(util.select.fromTo(9, 1, 4, 8,1,4), Facing.DOWN)
    scene.idle(10)
    scene.world.showIndependentSection(util.select.position(6, 1, 7), Facing.DOWN)
    scene.idle(3)
    scene.world.showIndependentSection(util.select.position(5, 1, 7), Facing.DOWN)
    scene.idle(3)
    scene.world.showIndependentSection(util.select.position(4, 1, 7), Facing.DOWN)
    scene.idle(3)
    scene.world.showIndependentSection(util.select.position(3, 1, 7), Facing.DOWN)
    scene.idle(3)
    scene.world.showIndependentSection(util.select.position(2, 1, 7), Facing.DOWN)
    scene.idle(3)
    scene.world.showIndependentSection(util.select.position(7, 1, 6), Facing.WEST)
    scene.world.showIndependentSection(util.select.position(1, 1, 6), Facing.EAST)
    scene.idle(10)
    scene.world.showIndependentSection(util.select.position(6, 1, 6), Facing.DOWN)
    scene.idle(3)
    scene.world.showIndependentSection(util.select.position(5, 1, 6), Facing.DOWN)
    scene.idle(3)
    scene.world.showIndependentSection(util.select.position(4, 1, 6), Facing.DOWN)
    scene.idle(3)
    scene.world.showIndependentSection(util.select.position(3, 1, 6), Facing.DOWN)
    scene.idle(3)
    scene.world.showIndependentSection(util.select.position(2, 1, 6), Facing.DOWN)
    scene.idle(6)
    scene.world.showIndependentSection(util.select.fromTo(2, 1, 8, 6,1,8), Facing.NORTH)
    scene.idle(8)
    scene.world.showSection(util.select.fromTo(2, 1, 9, 2,1,10), Facing.NORTH)
    scene.idle(15)
    scene.world.setKineticSpeed(util.select.position(10,3,4), 32);
    scene.world.setKineticSpeed(util.select.position(10,3,6), -32);
    scene.idle(3)
    scene.world.setKineticSpeed(util.select.position(10,1,4), 32);
    scene.world.setKineticSpeed(util.select.fromTo(10,3,4,2,1,5), 32);
    scene.world.setKineticSpeed(util.select.position(9,1,4), 32);
    scene.world.setKineticSpeed(util.select.position(8,1,4), -32);
    scene.world.setKineticSpeed(util.select.fromTo(7,1,4,7,1,1), -32);
    scene.idle(3)
    scene.world.setKineticSpeed(util.select.fromTo(6,1,8,2,1,7), -32);
    scene.world.setKineticSpeed(util.select.fromTo(2,1,9,2,1,10), -32);
    scene.idle(20)
    scene
            .showControls(60, [9.3, 6, 5], "left")
            .rightClick()
            .withItem("iron_ore")
    scene.idle(80)
    scene.addKeyframe()
    scene.particles.block(80, 'minecraft:iron_ore', [10.2,3.5,5.5]).scale(1);
    scene.idle(40)
    scene.world.createItemOnBelt(beltpos, Direction.UP, 'create:crushed_iron_ore');
    scene.idle(40)
    scene.world.createItemOnBelt(beltpos, Direction.UP, 'create:experience_nugget');
    scene.world.setKineticSpeed(util.select.position(2,1,7), 0);
    scene.idle(60)
    })
})