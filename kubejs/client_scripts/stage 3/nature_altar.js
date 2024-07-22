Ponder.registry(event => {
    event
        .create([
            'naturesaura:nature_altar',
            'naturesaura:gold_brick'
        ])
        .scene('gribtweaks:nature_aura_altar', 'Natures Aura - Природный Алтарь.', 'nature_altar', (scene, util) => {
    scene.scaleSceneView(.8);
    scene.setSceneOffsetY(0);
    scene.world.showSection(util.select.layer(0), Facing.UP)
    scene.idle(20)
    scene
        .text(140, 'Обратите внимание на основание. Глубинный сланец может быть любым блоком, а все остальные должны быть размещены следующим образом:', [4, 1.5, 4])
        .colored(PonderPalette.WHITE)
        .placeNearTarget()
        .attachKeyFrame()
    scene.idle(150)
    scene.addKeyframe()
    for (let z = 0; z < 10; z++) {
        for (let x = 0; x < 10; x++) {
            for (let y = 1; y < 4; y++) {
                scene.world.showSection([x, y, z], Facing.DOWN);
        }
        }
        scene.idle(3);
    }
    scene
        .text(60, 'Если структура построена правильно, то вы увидите зеленые частицы.', [5, 3.5, 1])
        .colored(PonderPalette.WHITE)
        .placeNearTarget()
        .attachKeyFrame()
    scene.idle(70)
    })
})