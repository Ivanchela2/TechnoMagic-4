Ponder.registry(event => {
    event
        .create([
            'rootsclassic:altar',
            'rootsclassic:brazier'
        ])
        .scene('gribtweaks:roots_ritual', 'Roots - Ритуал.', 'roots_ritual', (scene, util) => {
    scene.scaleSceneView(.8);
    scene.setSceneOffsetY(0);
    scene.world.showSection(util.select.layer(0), Facing.UP)
    scene.idle(20)
    scene.addKeyframe()
    for (let z = 0; z < 11; z++) {
        for (let x = 0; x < 11; x++) {
        for (let y = 1; y < 3; y++) {
            scene.world.showSection([x, y, z], Facing.DOWN);
        }
        }
        scene.idle(3);
    }
    scene
        .text(60, 'Для проведения ритуалов требуется данная структура:', [5, 2, 5])
        .colored(PonderPalette.WHITE)
        .placeNearTarget()
        .attachKeyFrame()
    scene.idle(70)
    scene
        .text(60, 'Поместите ритуальные предметы в жаровни и зажгите их:', [5, 2, 3])
        .colored(PonderPalette.WHITE)
        .placeNearTarget()
        .attachKeyFrame()
    scene.idle(70)
    scene
        .showControls(40, [5, 2, 3], 'left')
        .rightClick()
        .withItem('minecraft:porkchop')
    scene.idle(50)
    scene
        .showControls(40, [5, 2, 3], 'left')
        .rightClick()
        .withItem('minecraft:flint_and_steel')
    scene.idle(50)
    scene
        .showControls(110, [5, 2.5, 5], 'down')
        .rightClick()
    scene
        .text(100, 'Поместите ритуальные предметы на алтарь, убедитесь, что все сделали правильно, и нажмите Shift + ПКМ:', [5, 2, 5])
        .colored(PonderPalette.WHITE)
        .placeNearTarget()
        .attachKeyFrame()
    scene.idle(110)
    scene
        .text(60, 'Если вы все сделали правильно, то появятся белые частицы.', [5, 2, 5])
        .colored(PonderPalette.WHITE)
        .placeNearTarget()
        .attachKeyFrame()
    scene.idle(70)
    })
})