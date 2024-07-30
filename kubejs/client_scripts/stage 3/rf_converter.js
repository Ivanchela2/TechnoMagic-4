
Ponder.registry(e => {
    e
        .create([
            'naturesaura:rf_converter'
        ])
        .scene('gribtweaks:rf_converter', "Генератор Ауры", 'rf_converter', (scene, util) => {
            scene.showBasePlate()
            scene.setSceneOffsetY(-2);
            scene.rotateCameraY(45);
            scene.idle(0)
            scene.overlay.showText(60)
                .colored(PonderPalette.INPUT)
                .text("Кузница энергетической Ауры будет генерировать RF при помощи ауры.")
                .placeNearTarget();
            scene.idle(65)
            scene.addKeyframe()
            scene.idle(0)
            scene.world.showSection(util.grid.at(4, 1, 4), Facing.DOWN)
            scene.idle(20)
            scene.addKeyframe()
            scene.idle(0)
            scene.world.showSection(util.select.fromTo(2, 2, 2, 6, 2, 7), Facing.DOWN)
            scene.idle(20)
            scene.addKeyframe()
            scene.idle(0)
            scene.world.showSection(util.select.fromTo(7, 4, 7, 1, 4, 1), Facing.DOWN)
            scene.idle(20)
            scene.addKeyframe()
            scene.idle(0)
            scene.world.showSection(util.select.fromTo(7, 6, 7, 1, 6, 1), Facing.DOWN)
            scene.idle(20)
            scene.addKeyframe()
            scene.idle(0)
            scene.world.showSection(util.grid.at(4, 7, 4), Facing.DOWN)
            scene.idle(20)
            scene.addKeyframe()
            scene.idle(0)
            scene.overlay.showText(60)
                .colored(PonderPalette.RED)
                .text("Теперь создайте ауру (любым способом).")
                .placeNearTarget();
            scene.idle(65)  
        })
})