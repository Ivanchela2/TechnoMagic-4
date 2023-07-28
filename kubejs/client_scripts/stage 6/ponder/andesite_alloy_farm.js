Ponder.registry(event => {
    event
        .create([
            'create:andesite_alloy'
        ])
        .scene('gribtweaks:andesite_alloy', 'Ферма андезитового сплава.', 'kubejs:andesite_alloy_farm', (scene, util) => {
    scene.scaleSceneView(.8);
    scene.setSceneOffsetY(-1);
    scene.world.showSection(util.select.layer(0), Facing.UP)
    scene.idle(20)
    scene.overlay.showText(60)
			.colored(PonderPalette.OUTPUT)
			.text('Давайте построим ферму андезитового сплава!')
			.placeNearTarget();
    scene.idle(80)
    scene.addKeyframe()
    for (let z = 0; z < 6; z++) {
        for (let x = 0; x < 6; x++) {
            if (!(z == 2 && x == 4)) {
                scene.world.showSection([x, 1, z], Facing.DOWN);
            }
        }
        scene.idle(3);
    }
    scene.idle(30)
    scene.addKeyframe()
    for (let z = 0; z < 6; z++) {
        for (let x = 0; x < 6; x++) {
            scene.world.showSection([x, 2, z], Facing.DOWN);
        }
        scene.idle(3);
    }
    scene
        .text(60, 'В фильтре чаши должен быть андезитовый сплав. Для удобства это будет показывать так:', [2.5, 2.8, 1])
        .colored(PonderPalette.WHITE)
        .placeNearTarget()
        .attachKeyFrame()
    scene.idle(65)
    scene
        .showControls(40, [2.5, 2.8, 1], 'left')
        .rightClick()
        .withItem('create:andesite_alloy')
    scene.idle(60)
    scene.rotateCameraY(180);
    scene.idle(30)
    scene.addKeyframe()
    scene
        .showControls(40, [2.5, 2.8, 4], 'left')
        .rightClick()
        .withItem('create:andesite_alloy')
    scene.idle(50)
    scene.rotateCameraY(180);
    scene.idle(30)
    scene.addKeyframe()
    scene.scaleSceneView(1);
    scene.world.showIndependentSection(util.select.position(3,3,2), Facing.DOWN)
    scene
        .showControls(40, [3.5, 3.8, 2], 'left')
        .rightClick()
        .withItem('andesite')
    scene.idle(60)
    scene.world.showIndependentSection(util.select.position(3,3,1), Facing.DOWN)
    scene
        .text(40, 'В фильтре воронки должно быть 16 андезита.', [3.3, 4, 1])
        .colored(PonderPalette.WHITE)
        .placeNearTarget()
        .attachKeyFrame()
    scene.idle(50)
    scene
        .showControls(40, [3.3, 4, 1], 'left')
        .rightClick()
        .withItem('andesite')
    scene.idle(50)
    scene.rotateCameraY(180);
    scene.idle(30)
    scene.world.showIndependentSection(util.select.position(3,3,3), Facing.DOWN)
    scene
        .text(40, 'В фильтре воронки должно быть 16 кусочков железа.', [3.5, 3.8, 3.6])
        .colored(PonderPalette.WHITE)
        .placeNearTarget()
        .attachKeyFrame()
    scene.idle(50)
    scene
        .showControls(40, [3.5, 3.8, 3.6], 'left')
        .rightClick()
        .withItem('iron_nugget')
    scene.idle(50)
    scene.rotateCameraY(180);
    scene.idle(30)
    scene.world.showIndependentSection(util.select.position(2,3,2), Facing.DOWN)
    scene
        .text(120, 'В фильтре воронки должно быть "Фильтр". Нажмите пкм с ним в руке и выберите в белый список: Кусочек Железа, Кремень, Гравий.', [2.8, 3.3, 3])
        .colored(PonderPalette.WHITE)
        .placeNearTarget()
        .attachKeyFrame()
    scene.idle(130)
    scene
        .showControls(40, [2.8, 3.3, 3], 'left')
        .rightClick()
        .withItem('create:filter')
    scene.idle(50)
    scene.addKeyframe()
    for (let z = 0; z < 6; z++) {
        for (let x = 0; x < 6; x++) {
            if (!(x == 2 && z == 2) && !(x == 3 && z == 1) && !(x == 3 && z == 2) && !(x == 3 && z == 3)) {
                scene.world.showSection([x, 3, z], Facing.DOWN);
            }
        }
        scene.idle(3);
    }
    scene.idle(30)
    scene.addKeyframe()
    for (let z = 0; z < 6; z++) {
        for (let x = 0; x < 6; x++) {
            scene.world.showSection([x, 4, z], Facing.DOWN);
        }
        scene.idle(3);
    }
    scene.idle(30)
    scene.addKeyframe()
    for (let z = 0; z < 6; z++) {
        for (let x = 0; x < 6; x++) {
            scene.world.showSection([x, 5, z], Facing.DOWN);
        }
        scene.idle(3);
    }
    scene.idle(30)
    scene.addKeyframe()
    scene.world.showSection([2, 6, 2], Facing.DOWN);
    scene.idle(20)
    scene
        .text(40, 'Фильтр - "64".', [2.8, 5.9, 3.6])
        .colored(PonderPalette.WHITE)
        .placeNearTarget()
        .attachKeyFrame()
    scene.idle(50)
    scene.world.showSection([2, 7, 2], Facing.DOWN);
    scene.idle(20)
    scene
        .text(40, 'Поместите в хранилище булыжник.', [3.5, 7, 3.6])
        .colored(PonderPalette.WHITE)
        .placeNearTarget()
        .attachKeyFrame()
    scene.idle(50)
    scene.rotateCameraY(90);
    scene.idle(20)
    scene
        .text(40, 'Сюда раместите источник лавы.', [4, 1, 3])
        .colored(PonderPalette.WHITE)
        .placeNearTarget()
        .attachKeyFrame()
    scene.idle(50)
    scene.world.showSection([4, 1, 2], Facing.DOWN);
    scene.idle(20)
    scene
        .text(40, 'Запустите завод.', [4, 4.8, 2])
        .colored(PonderPalette.WHITE)
        .placeNearTarget()
        .attachKeyFrame()
    scene.idle(50)
    scene.world.setBlock([5, 5, 1], Block.id('create:shaft').with('axis','x'), false)
    scene.world.setKineticSpeed(util.select.fromTo(0, 1, 0, 5, 6, 5), 32);
    scene.idle(20)
    scene.rotateCameraY(-90);
    scene
        .text(60, 'Забирайте сплав из этого хранилища.', [1, 2.3, 2.5])
        .colored(PonderPalette.WHITE)
        .placeNearTarget()
        .attachKeyFrame()
    scene.idle(20)
    })
})