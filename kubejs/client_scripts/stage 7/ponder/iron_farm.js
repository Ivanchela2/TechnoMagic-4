Ponder.registry(e => {
    e
        .create([
            'minecraft:iron_nugget',
            'minecraft:iron_ingot',
            'minecraft:iron_block'
        ])
        .scene("gribtweaks:iron_farm", "Iron Farm", "iron_farm", (scene, util) => {
    scene.world.setBlock([6,2,12], Block.id('create:shaft').with("axis","z"), false)
    scene.scaleSceneView(.6);
    scene.setSceneOffsetY(-1);
    scene.world.showSection(util.select.layer(0), Facing.UP)
    var allstr = scene.world.showIndependentSection(util.select.fromTo(12,1,12,0,5,0), Facing.DOWN)
    scene.idle(30)
    scene.overlay.showText(60)
			.colored(PonderPalette.WHITE)
			.text("This is the Beginner's Iron Farm without villagers")
			.placeNearTarget();
    scene.idle(80)
    scene.overlay.showText(40)
			.colored(PonderPalette.WHITE)
			.text("Let's build this!")
			.placeNearTarget();
    scene.idle(60)
    scene.world.hideIndependentSection(allstr, Facing.UP)
    scene.idle(30)
    scene.addKeyframe()
    scene.world.showSection(util.select.position(6,1,2), Facing.DOWN)
    scene.idle(3)
    scene.world.showSection(util.select.position(6,2,2), Facing.DOWN)
    scene.idle(3)
    scene.world.showSection(util.select.position(6,3,2), Facing.DOWN)
    scene.idle(8)
    scene.world.showSection(util.select.fromTo(5,1,2,1,1,2), Facing.DOWN)
    scene.world.showSection(util.select.fromTo(7,1,2,12,1,2), Facing.DOWN)
    scene.idle(8)
    scene.world.showSection(util.select.fromTo(2,1,3,4,1,3), Facing.DOWN)
    scene.world.showSection(util.select.fromTo(8,1,3,10,1,3), Facing.DOWN)
    scene.idle(10)
    scene.world.showSection(util.select.fromTo(5,1,3,7,3,3), Facing.DOWN)
    scene.idle(10)
    scene.world.showSection(util.select.position(10,2,3), Facing.DOWN)
    scene.world.showSection(util.select.position(2,2,3), Facing.DOWN)
    scene.idle(3)
    scene.world.showSection(util.select.position(2,4,3), Facing.DOWN)
    scene.world.showSection(util.select.position(10,4,3), Facing.DOWN)
    scene.idle(10)
    scene.world.showSection(util.select.position(9,2,3), Facing.DOWN)
    scene.world.showSection(util.select.position(3,2,3), Facing.DOWN)
    scene.idle(4)
    scene.world.showIndependentSection(util.select.position(5,2,2), Facing.DOWN)
    scene.world.showIndependentSection(util.select.position(7,2,2), Facing.DOWN)
    scene.idle(6)
    scene.world.showIndependentSection(util.select.position(4,2,3), Facing.DOWN)
    scene.world.showIndependentSection(util.select.position(8,2,3), Facing.DOWN)
    scene.idle(20)
    scene
        .text(80, "Make sure you placed Iron Nugget in the filters of Brass Funnels", [4, 3.4, 3])
        .colored(PonderPalette.OUTPUT)
        .placeNearTarget()
        .attachKeyFrame()
    scene.idle(100)
    scene.rotateCameraY(-180);
    scene.idle(50)
    scene.world.showSection(util.select.position(4,1,4), Facing.DOWN)
    scene.world.showSection(util.select.position(8,1,4), Facing.DOWN)
    scene.idle(12)
    scene.world.showIndependentSection(util.select.position(5,1,4), Facing.DOWN)
    scene.world.showIndependentSection(util.select.position(7,1,4), Facing.DOWN)
    scene.idle(15)
    scene
        .text(60, "Fill the Mangroves Roots with water", [7, 1, 4])
        .colored(PonderPalette.WHITE)
        .placeNearTarget()
        .attachKeyFrame()
    scene.idle(80)
    scene.world.showIndependentSection(util.select.position(6,1,4), Facing.DOWN)
    scene.idle(15)
    scene
        .text(60, "Place Filter with Gravel in Deny List in the funnel", [6, 1, 4])
        .colored(PonderPalette.OUTPUT)
        .placeNearTarget()
    scene.idle(70)
    scene.world.showSection(util.select.fromTo(5,1,5,5,2,5), Facing.DOWN)
    scene.world.showSection(util.select.fromTo(7,1,5,7,2,5), Facing.DOWN)
    scene.world.showIndependentSection(util.select.position(4,2,4), Facing.DOWN)
    scene.world.showIndependentSection(util.select.position(8,2,4), Facing.DOWN)
    scene.world.showIndependentSection(util.select.position(6,2,4), Facing.DOWN)
    scene.idle(15)
    scene.world.showIndependentSection(util.select.position(7,2,4), Facing.DOWN)
    scene.world.showIndependentSection(util.select.position(5,2,4), Facing.DOWN)
    scene.idle(6)
    scene.world.showIndependentSection(util.select.position(7,3,4), Facing.DOWN)
    scene.world.showIndependentSection(util.select.position(5,3,4), Facing.DOWN)
    scene.idle(20)
    scene
        .text(40, "Put Flint in filter of Funnels", [7, 3, 4])
        .colored(PonderPalette.OUTPUT)
        .placeNearTarget()
    scene.idle(60)
    scene.addKeyframe()
    scene.world.showIndependentSection(util.select.fromTo(7,1,6,11,1,6), Facing.DOWN)
    scene.world.showIndependentSection(util.select.fromTo(5,1,6,1,1,6), Facing.DOWN)
    scene.idle(7)
    scene.world.showIndependentSection(util.select.fromTo(7,1,7,11,1,7), Facing.DOWN)
    scene.world.showIndependentSection(util.select.fromTo(5,1,7,1,1,7), Facing.DOWN)
    scene.idle(7)
    scene.world.showIndependentSection(util.select.fromTo(7,1,8,11,1,8), Facing.DOWN)
    scene.world.showIndependentSection(util.select.fromTo(5,1,8,1,1,8), Facing.DOWN)
    scene.idle(7)
    scene.world.showIndependentSection(util.select.fromTo(7,1,9,11,1,9), Facing.DOWN)
    scene.world.showIndependentSection(util.select.fromTo(5,1,9,1,1,9), Facing.DOWN)
    scene.idle(10)
    scene.world.showSection(util.select.fromTo(10,1,5,11,1,5), Facing.DOWN)
    scene.world.showSection(util.select.fromTo(2,1,5,1,1,5), Facing.DOWN)
    scene.idle(8)
    scene.world.showSection(util.select.fromTo(11,1,4,11,1,3), Facing.DOWN)
    scene.world.showSection(util.select.fromTo(1,1,4,1,1,3), Facing.DOWN)
    scene.world.showSection(util.select.position(2,1,4), Facing.DOWN)
    scene.world.showSection(util.select.position(10,1,4), Facing.DOWN)
    scene.idle(20)
    scene
        .text(60, "Make sure you did NOT place shaft there in belt!", [10.2,1.5,6])
        .colored(PonderPalette.RED)
        .placeNearTarget()
        .attachKeyFrame()
    scene.idle(80)
    scene
        .text(40, "Place shaft here", [9.2,1.5,6])
        .colored(PonderPalette.WHITE)
        .placeNearTarget()
    scene.idle(55)
    scene
        .text(40, "...And here", [3.2,1.5,6])
        .colored(PonderPalette.WHITE)
        .placeNearTarget()
    scene.idle(60)
    scene.world.showSection(util.select.fromTo(3,1,5,3,2,5), Facing.DOWN)
    scene.world.showSection(util.select.fromTo(9,1,5,9,2,5), Facing.DOWN)
    scene.idle(20)
    scene
        .text(60, "Make 1 speed in this Rotational Speed Controller", [9.3,1,5])
        .colored(PonderPalette.OUTPUT)
        .placeNearTarget()
        .attachKeyFrame()
    scene.idle(80)
    scene
        .text(60, "And -1 in this", [3.3,1,5])
        .colored(PonderPalette.OUTPUT)
        .placeNearTarget()
    scene.idle(80)
    scene.addKeyframe()
    scene.world.showSection(util.select.position(9,1,4), Facing.DOWN)
    scene.world.showSection(util.select.position(3,1,4), Facing.DOWN)
    scene.idle(8)
    scene.world.showSection(util.select.position(9,3,4), Facing.DOWN)
    scene.world.showSection(util.select.position(3,3,4), Facing.DOWN)
    scene.idle(8)
    scene.world.showSection(util.select.position(9,4,3), Facing.DOWN)
    scene.world.showSection(util.select.position(3,4,3), Facing.DOWN)
    scene.idle(20)
    scene.world.showSection(util.select.fromTo(6,1,6,6,1,10), Facing.DOWN)
    scene.idle(8)
    scene.world.showSection(util.select.fromTo(7,1,10,7,1,11), Facing.DOWN)
    scene.world.showSection(util.select.fromTo(5,1,10,5,1,11), Facing.DOWN)
    scene.idle(12)
    scene.world.showIndependentSection(util.select.fromTo(6,1,11,6,2,11), Facing.DOWN)
    scene.idle(20)
    scene
        .text(60, "Make 128 speed in this Rotational Speed Controller", [6,1,11])
        .colored(PonderPalette.OUTPUT)
        .placeNearTarget()
    scene.idle(80)
    scene.addKeyframe()
    scene.world.showSection(util.select.position(8,1,10), Facing.DOWN)
    scene.world.showSection(util.select.position(4,1,10), Facing.DOWN)
    scene.idle(8)
    scene.world.showSection(util.select.position(8,2,10), Facing.DOWN)
    scene.world.showSection(util.select.position(4,2,10), Facing.DOWN)
    scene.idle(10)
    scene.world.showSection(util.select.position(8,2,9), Facing.DOWN)
    scene.world.showSection(util.select.position(4,2,9), Facing.DOWN)
    scene.idle(3)
    scene.world.showSection(util.select.position(8,2,8), Facing.DOWN)
    scene.world.showSection(util.select.position(4,2,8), Facing.DOWN)
    scene.idle(3)
    scene.world.showSection(util.select.position(8,2,7), Facing.DOWN)
    scene.world.showSection(util.select.position(4,2,7), Facing.DOWN)
    scene.idle(3)
    scene.world.showSection(util.select.position(8,2,6), Facing.DOWN)
    scene.world.showSection(util.select.position(4,2,6), Facing.DOWN)
    scene.idle(10)
    scene.world.showSection(util.select.position(7,2,9), Facing.DOWN)
    scene.world.showSection(util.select.position(5,2,9), Facing.DOWN)
    scene.world.showSection(util.select.position(3,2,9), Facing.DOWN)
    scene.world.showSection(util.select.position(9,2,9), Facing.DOWN)
    scene.idle(3)
    scene.world.showSection(util.select.position(7,2,8), Facing.DOWN)
    scene.world.showSection(util.select.position(5,2,8), Facing.DOWN)
    scene.world.showSection(util.select.position(3,2,8), Facing.DOWN)
    scene.world.showSection(util.select.position(9,2,8), Facing.DOWN)
    scene.idle(3)
    scene.world.showSection(util.select.position(7,2,7), Facing.DOWN)
    scene.world.showSection(util.select.position(5,2,7), Facing.DOWN)
    scene.world.showSection(util.select.position(3,2,7), Facing.DOWN)
    scene.world.showSection(util.select.position(9,2,7), Facing.DOWN)
    scene.idle(3)
    scene.world.showSection(util.select.position(7,2,6), Facing.DOWN)
    scene.world.showSection(util.select.position(5,2,6), Facing.DOWN)
    scene.world.showSection(util.select.position(3,2,6), Facing.DOWN)
    scene.world.showSection(util.select.position(9,2,6), Facing.DOWN)
    scene.idle(20)
    scene.addKeyframe()
    scene.world.showSection(util.select.fromTo(11,1,10,11,2,10), Facing.DOWN)
    scene.world.showSection(util.select.fromTo(1,1,10,1,2,10), Facing.DOWN)
    scene.idle(20)
    scene
        .text(60, "Make 48 speed in these 2 Rotational Speed Controllers", [11,1,10])
        .colored(PonderPalette.OUTPUT)
        .placeNearTarget()
    scene.idle(80)
    scene.world.showSection(util.select.fromTo(12,2,10,12,2,6), Facing.DOWN)
    scene.world.showSection(util.select.fromTo(0,2,10,0,2,6), Facing.DOWN)
    scene.idle(20)
    scene.world.showSection(util.select.fromTo(11,3,9,11,3,6), Facing.DOWN)
    scene.world.showSection(util.select.fromTo(1,3,9,1,3,6), Facing.DOWN)
    scene.world.showSection(util.select.fromTo(9,3,6,9,3,9), Facing.DOWN)
    scene.world.showSection(util.select.fromTo(3,3,9,3,3,6), Facing.DOWN)
    scene.world.showSection(util.select.fromTo(10,2,10,10,3,10), Facing.DOWN)
    scene.world.showSection(util.select.fromTo(10,3,5,10,2,5), Facing.DOWN)
    scene.world.showSection(util.select.fromTo(2,3,10,2,2,10), Facing.DOWN)
    scene.world.showSection(util.select.fromTo(2,2,5,2,3,5), Facing.DOWN)
    scene.world.showSection(util.select.position(1,2,5), Facing.DOWN)
    scene.world.showSection(util.select.position(11,2,5), Facing.DOWN)
    scene.idle(30)
    scene.world.showIndependentSection(util.select.fromTo(2,3,9,2,2,6), Facing.DOWN)
    scene.world.showIndependentSection(util.select.fromTo(10,3,9,10,2,6), Facing.DOWN)
    scene.world.showSection(util.select.fromTo(1,2,6,1,2,9), Facing.DOWN)
    scene.world.showSection(util.select.fromTo(11,2,6,11,2,9), Facing.DOWN)
    scene.idle(10)
    scene
        .text(60, "You can place water blocks in mechanical drills", [11,2,9])
        .colored(PonderPalette.WHITE)
        .placeNearTarget()
    scene.idle(80)
    scene
        .text(60, "Just need to power our farm", [6,1,11])
        .colored(PonderPalette.OUTPUT)
        .placeNearTarget()
    scene.idle(80)
    scene.world.setKineticSpeed(util.select.position(6,2,12), 48);
    scene.addKeyframe()
    scene.idle(10)
    scene.rotateCameraY(-180);
    scene.idle(40)
    scene.world.showSection(util.select.position(6,2,12), Facing.NORTH)
    scene.idle(12)
    scene.world.setKineticSpeed(util.select.fromTo(11,1,6,7,1,9), 128);
    scene.world.setKineticSpeed(util.select.fromTo(5,1,9,1,1,6), -128);
    scene.world.setKineticSpeed(util.select.fromTo(6,1,6,6,1,10), -128);
    scene.world.setKineticSpeed(util.select.fromTo(7,1,10,7,1,11), -128);
    scene.world.setKineticSpeed(util.select.fromTo(5,1,10,5,1,11), -128);
    scene.world.setKineticSpeed(util.select.position(4,2,10), 128);
    scene.world.setKineticSpeed(util.select.position(8,2,10), 128);
    scene.world.setKineticSpeed(util.select.fromTo(8,2,9,8,2,6), -128);
    scene.world.setKineticSpeed(util.select.fromTo(4,2,9,4,2,6), -128);
    scene.world.setKineticSpeed(util.select.fromTo(11,1,2,7,1,2), 128);
    scene.world.setKineticSpeed(util.select.fromTo(1,1,2,5,1,2), -128);
    scene.world.setKineticSpeed(util.select.fromTo(2,1,3,4,1,3), -128);
    scene.world.setKineticSpeed(util.select.fromTo(10,1,3,8,1,3), 128);
    scene.world.setKineticSpeed(util.select.fromTo(1,1,5,1,1,3), -128);
    scene.world.setKineticSpeed(util.select.fromTo(11,1,3,11,1,5), 128);
    scene.world.setKineticSpeed(util.select.fromTo(10,1,5,10,1,4), -128);
    scene.world.setKineticSpeed(util.select.fromTo(2,1,5,2,1,4), 128);
    scene.world.setKineticSpeed(util.select.fromTo(3,1,4,4,1,4), -1);
    scene.world.setKineticSpeed(util.select.fromTo(9,1,4,8,1,4), 1);
    scene.world.setKineticSpeed(util.select.position(3,2,5), -1);
    scene.world.setKineticSpeed(util.select.position(9,2,5), 1);
    scene.world.setKineticSpeed(util.select.position(3,3,5), 1);
    scene.world.setKineticSpeed(util.select.position(3,3,5), -1);
    scene.world.setKineticSpeed(util.select.position(3,4,3), -1);
    scene.world.setKineticSpeed(util.select.position(9,4,3), 1);
    scene.world.setKineticSpeed(util.select.position(10,4,3), 1);
    scene.world.setKineticSpeed(util.select.position(2,4,3), -1);
    scene.world.setKineticSpeed(util.select.position(6,2,11), 128);
    scene.world.setKineticSpeed(util.select.position(1,2,10), 48);
    scene.world.setKineticSpeed(util.select.position(11,2,10), 48);
    scene.world.setKineticSpeed(util.select.fromTo(12,2,10,12,2,6), 48);
    scene.world.setKineticSpeed(util.select.fromTo(11,2,9,11,2,6), 48);
    scene.world.setKineticSpeed(util.select.fromTo(1,2,9,1,2,6), 48);
    scene.world.setKineticSpeed(util.select.fromTo(0,2,6,0,2,10), 48);
    scene.idle(80)
    })
})