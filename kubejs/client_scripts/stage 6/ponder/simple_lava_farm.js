Ponder.registry(event => {
    event
        .create([
            'minecraft:pointed_dripstone',
            'minecraft:lava_bucket'
        ])
        .scene('tm4:lava', 'Простая ферма лавы.', 'kubejs:simple_lava_farm', (scene, util) => {
    scene.scaleSceneView(.8);
    scene.setSceneOffsetY(0);
    scene.world.showSection(util.select.layer(0), Facing.UP)
    scene.idle(20)
    scene.overlay.showText(60)
			.colored(PonderPalette.OUTPUT)
			.text('Давайте построим простую ферму лавы!')
			.placeNearTarget();
    scene.idle(80)
    scene.addKeyframe()
    for (let z = 0; z < 7; z++) {
        for (let x = 0; x < 5; x++) {
            scene.world.showSection([x, 1, z], Facing.DOWN);
        }
        scene.idle(3);
    }
    scene
        .text(60, 'Разместите котёл на жидкостную трубу.', [2.5, 1, 3])
        .colored(PonderPalette.WHITE)
        .placeNearTarget()
        .attachKeyFrame()
    scene.idle(65)
    for (let z = 0; z < 7; z++) {
        for (let x = 0; x < 5; x++) {
            scene.world.showSection([x, 2, z], Facing.DOWN);
        }
        scene.idle(3);
    }
    scene
        .text(60, 'Над котлом должны находиться капельники, разместите их на любой блок.', [2.5, 2, 3])
        .colored(PonderPalette.WHITE)
        .placeNearTarget()
        .attachKeyFrame()
    scene.idle(65)
    for (let z = 0; z < 7; z++) {
        for (let x = 0; x < 5; x++) {
            for (let y = 3; y < 5; y++) {
                scene.world.showSection([x, y, z], Facing.DOWN);
            }
        }
        scene.idle(3);
    }
    scene
        .text(60, 'На блоке, под которым находится капельник, должна быть лава.', [2.5, 4, 3])
        .colored(PonderPalette.WHITE)
        .placeNearTarget()
        .attachKeyFrame()
    scene.idle(65)
    for (let z = 0; z < 7; z++) {
        for (let x = 0; x < 5; x++) {
            scene.world.showSection([x, 5, z], Facing.DOWN);
        }
        scene.idle(3);
    }
    scene
        .text(70, 'Данную структуру можно расширять до бесконечности, тем самым повышая эффективность.', [1.5, 3, 3])
        .colored(PonderPalette.WHITE)
        .placeNearTarget()
        .attachKeyFrame()
    scene.idle(80)
    scene
        .text(40, 'Запустите помпу и ферма готова!', [1.5, 1, 5])
        .colored(PonderPalette.WHITE)
        .placeNearTarget()
        .attachKeyFrame()
    scene.idle(50)
    scene.world.setBlock([0,1,4], Block.id('create:cogwheel').with("axis","z"), false)
    scene.world.setBlock([0,1,5], Block.id('create:shaft').with("axis","z"), false)
    scene.world.setBlock([0,1,6], Block.id('create:shaft').with("axis","z"), false)
    scene.world.setBlock([0,1,7], Block.id('create:shaft').with("axis","z"), false)
    scene.world.setBlock([0,1,8], Block.id('create:shaft').with("axis","z"), false)
    scene.world.setKineticSpeed(util.select.position(1,1,4), 8);
    scene.world.setKineticSpeed(util.select.fromTo(0,1,4,0,1,7), 8);
    })
})