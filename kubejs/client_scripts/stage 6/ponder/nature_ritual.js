Ponder.registry(event => {
    event
        .create([
            'naturesaura:gold_powder',
            'naturesaura:wood_stand'
        ])
        .scene('tm4:nature_aura_ritual', 'Natures Aura - Ритуал.', 'kubejs:nature_ritual', (scene, util) => {
    scene.scaleSceneView(.8);
    scene.setSceneOffsetY(0);
    scene.world.showSection(util.select.layer(0), Facing.UP)
    scene.idle(20)
    scene.addKeyframe()
    for (let z = 0; z < 11; z++) {
        for (let x = 0; x < 11; x++) {
            if (!((x >= 3 && x <= 7) && (z >= 3 && z <= 7))) {
                scene.world.showSection([x, 1, z], Facing.DOWN);
            }
        }
        scene.idle(3);
    }
    scene
        .text(60, 'Разместите деревянные подставки таким образом.', [2, 1.5, 2])
        .colored(PonderPalette.WHITE)
        .placeNearTarget()
        .attachKeyFrame()
    scene.idle(65)
    scene.addKeyframe()
    for (let z = 3; z <= 7; z++) {
        for (let x = 3; x <= 7; x++) {
            if (!(x == 5 && z == 5)) {
                scene.world.showSection([x, 1, z], Facing.DOWN);
            }
        }
        scene.idle(3);
    }
    scene
        .text(60, 'Разместите золотой порошок таким образом.', [4, 1.5, 3])
        .colored(PonderPalette.WHITE)
        .placeNearTarget()
        .attachKeyFrame()
    scene.idle(65)
    scene
        .text(60, 'Положите на подставки ритуальные предметы.', [2, 2, 2])
        .colored(PonderPalette.WHITE)
        .placeNearTarget()
        .attachKeyFrame()
    scene.idle(65)
    scene
        .showControls(40, [2, 2, 2], "left")
        .rightClick()
        .withItem('minecraft:gold_ingot')
    scene.idle(50)
    scene.world.createItemEntity(util.vector.topOf(2,1,2), (util.vector.of(0, 0, 0)),'minecraft:gold_ingot');
    scene.idle(15)
    scene.world.createItemEntity(util.vector.topOf(5,1,1), (util.vector.of(0, 0, 0)),'naturesaura:gold_leaf');
    scene.idle(15)
    scene.world.createItemEntity(util.vector.topOf(8,1,2), (util.vector.of(0, 0, 0)),'naturesaura:gold_leaf');
    scene.idle(15)
    scene.world.createItemEntity(util.vector.topOf(1,1,5), (util.vector.of(0, 0, 0)),'minecraft:spider_eye');
    scene.idle(15)
    scene
        .text(60, 'Разместите в центре структуры саженец дуба.', [5, 1.5, 5])
        .colored(PonderPalette.WHITE)
        .placeNearTarget()
        .attachKeyFrame()
    scene.idle(65)
    scene.world.showSection([5, 1, 5], Facing.DOWN);
    scene.world.setBlock([5, 1, 5], 'minecraft:oak_sapling', false);
    scene.idle(30)
    scene
        .text(60, 'Когда саженец вырастет, начнется ритуал.', [5, 1.5, 5])
        .colored(PonderPalette.WHITE)
        .placeNearTarget()
        .attachKeyFrame()
    scene.idle(65)
    scene.world.destroyBlock(util.grid.at(5, 1, 5))
    scene.world.setBlock([5, 1, 5], 'minecraft:oak_log', true);
    scene.world.showIndependentSection(util.select.fromTo(0,2,0,11,5,11), Facing.DOWN)
    })
})