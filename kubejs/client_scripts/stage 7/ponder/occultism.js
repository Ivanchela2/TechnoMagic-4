Ponder.registry(e => {
    e
        .create([
            'occultism:chalk_white',
            'occultism:golden_sacrificial_bowl',
            'occultism:sacrificial_bowl',
            'occultism:spirit_attuned_crystal',
            'occultism:chalk_gold',
            'occultism:chalk_purple',
            'occultism:chalk_red'
        ])
        .scene("gribtweaks:occultism", "Occultism", "occultism", (scene, util) => {
    scene.scaleSceneView(.7);
    scene.setSceneOffsetY(-1);
    scene.showBasePlate()
    scene.idle(30)
    scene.overlay.showText(60)
			.colored(PonderPalette.BLUE)
			.text("Your first Occultism Ritual, but how to draw it?")
			.placeNearTarget();
    scene.idle(90)
    scene.overlay.showText(90)
			.colored(PonderPalette.BLUE)
			.text("Firstly, let's use a white chalk. Click on the ground and draw your figure")
            .placeNearTarget();
    scene.idle(110)
    scene.addKeyframe()
    scene.world.showSection(util.select.position(4,1,2), Facing.DOWN)
    scene.idle(15)
    scene.overlay.showText(90)
			.colored(PonderPalette.BLUE)
			.text("Now you should pick a ritual to draw in Dictionary of Spirits, we will draw Aviar's Circle.")
            .placeNearTarget();
    scene.idle(40)
    scene.world.hideSection(util.select.position(4,1,2), Facing.UP)
    scene.idle(80)
    scene.addKeyframe()
    scene.world.showIndependentSection(util.select.layer(1), Facing.DOWN)
    scene.idle(20)
    scene
        .text(60, "Every ritual has a Golden Sacrifical Bowl in the middle", [4, 1.8, 4])
        .colored(PonderPalette.BLUE)
        .placeNearTarget() 
    scene.idle(80)
    scene.overlay.showText(70)
			.colored(PonderPalette.BLUE)
			.text("We can summon Sapling Trader on Aviar's Circle, so let's do this")
            .placeNearTarget();
    scene.idle(90)
    scene
        .text(100, "We need to place Oak, Birch, Spruce, Jungle saplings in bowls", [3, 2, 4])
        .colored(PonderPalette.BLUE)
        .placeNearTarget()
        .attachKeyFrame()
    scene.idle(30)
    var oak = scene.world.createItemEntity(util.vector.topOf(3,1,3), (util.vector.of(0, 0, 0)),'minecraft:oak_sapling');
    scene.idle(30)
    var birch = scene.world.createItemEntity(util.vector.topOf(5,1,3), (util.vector.of(0, 0, 0)),'minecraft:birch_sapling');
    scene.idle(20)
    var spruce = scene.world.createItemEntity(util.vector.topOf(5,1,5), (util.vector.of(0, 0, 0)),'minecraft:spruce_sapling');
    scene.idle(20)
    var jungle = scene.world.createItemEntity(util.vector.topOf(3,1,5), (util.vector.of(0, 0, 0)),'minecraft:jungle_sapling');
    scene.idle(20)
    scene
        .text(50, "... And a Bound Book of Binding: Foliot in the middle", [3, 2, 4])
        .colored(PonderPalette.BLUE)
        .placeNearTarget()
    scene.idle(40)
    var book = scene.world.createItemEntity(util.vector.topOf(4,1,4), (util.vector.of(0, 0, 0)),'occultism:book_of_binding_bound_foliot');
    scene.idle(30)
    scene.overlay.showText(60)
			.colored(PonderPalette.BLUE)
			.text("And the ritual is starting...")
            .placeNearTarget()
            .attachKeyFrame()
    scene.particles.simple(210, "portal", [5,2,5]).scale(1).motion([0,-0.3,0]).area([3,2,3]).density(1)
    scene.idle(20)
    scene.world.removeEntity(oak)
    scene.particles.simple(10, "smoke", [3,2.6,2.8]).scale(2);
    scene.idle(40)
    scene.world.removeEntity(birch)
    scene.particles.simple(10, "smoke", [5,2.6,2.8]).scale(2);
    scene.idle(40)
    scene.world.removeEntity(spruce)
    scene.particles.simple(10, "smoke", [5,2.6,4.8]).scale(2);
    scene.idle(40)
    scene.world.removeEntity(jungle)
    scene.particles.simple(10, "smoke", [3,2.6,4.8]).scale(2);
    scene.idle(40)
    scene.world.removeEntity(book)
    scene.particles.simple(10, "smoke", [4,2.3,3.8]).scale(2);
    scene.idle(40)
    scene.world.createEntity("occultism:foliot", [4.3, 1.2, 4.2]);
    scene.addKeyframe()
    scene.idle(60)
    
    })
})