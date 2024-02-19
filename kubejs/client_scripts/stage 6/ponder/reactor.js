Ponder.registry(event => {
    event
        .create([
            'biggerreactors:reactor_casing',
            'biggerreactors:reactor_terminal'
        ])
        .scene('gribtweaks:reactor', 'Начальный реактор', 'kubejs:efficient_reactor', (scene, util) => {
    scene.scaleSceneView(.8);
    scene.rotateCameraY(-180);
    scene.setSceneOffsetY(0);
    scene.world.showSection(util.select.layer(0), Facing.UP)
    scene.idle(20)
    scene.overlay.showText(60)
			.colored(PonderPalette.OUTPUT)
			.text('Давайте построим эффективный начальный реактор!')
			.placeNearTarget();
    scene.idle(80)
    scene.addKeyframe()
    for (let z = 0; z < 11; z++) {
        for (let x = 0; x < 11; x++) {
            scene.world.showSection([x, 1, z], Facing.DOWN);
        }
        scene.idle(3);
    }
    scene
        .text(60, 'Разместите основание 11 на 11.', [4.5, 1, 4.5])
        .colored(PonderPalette.WHITE)
        .placeNearTarget()
        .attachKeyFrame()
    scene.idle(65)
    for (let z = 0; z < 11; z++) {
        for (let x = 0; x < 11; x++) {
            scene.world.showSection([x, 2, z], Facing.DOWN);
        }
        scene.idle(3);
    }
    scene
        .text(60, 'Далее разместите в центре топливный стержень. По диагонали от него ещё 2.', [4.5, 2, 4.5])
        .colored(PonderPalette.WHITE)
        .placeNearTarget()
        .attachKeyFrame()
    scene.idle(80)
    scene
        .text(60, 'Пустое пространоство заполните хладогентом. В этом случае - алмазный блок.', [6, 2, 5])
        .colored(PonderPalette.WHITE)
        .placeNearTarget()
        .attachKeyFrame()
    scene.idle(80)
    scene
        .text(60, 'Контроллер - мозг реактора. Разместите его на боковой стороне структуры.', [5, 2, 9])
        .colored(PonderPalette.WHITE)
        .placeNearTarget()
        .attachKeyFrame()
    scene.idle(80)
    scene
        .text(120, 'Порты доступа используются для входа/выхода ресурсов. Используйте предметные трубы для взаимодействия с ними. Для работы реактора требуется уран.', [3, 2, 9])
        .colored(PonderPalette.WHITE)
        .placeNearTarget()
        .attachKeyFrame()
    scene.idle(140)
    for (let z = 0; z < 11; z++) {
        for (let x = 0; x < 11; x++) {
            scene.world.showSection([x, 3, z], Facing.DOWN);
        }
        scene.idle(3);
    }
    scene
        .text(60, 'На топливный стержень разместите управляющий стержень.', [4.5, 3, 4.5])
        .colored(PonderPalette.WHITE)
        .placeNearTarget()
        .attachKeyFrame()
    scene.idle(80)
    })
})