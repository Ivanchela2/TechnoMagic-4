
Ponder.registry(e => {
    e
        .create([
            'naturesaura:rf_converter'
        ])
        .scene('gribtweaks:rf_converter', "Aura generator on potions", 'energy_convertor_natures_aura', (scene, util) => {
            scene.showBasePlate()
            scene.setSceneOffsetY(-2);
            scene.rotateCameraY(30);
            scene.idle(0)
            scene.overlay.showText(60)
                .colored(PonderPalette.INPUT)
                .text("Кузница энергетической Ауры будет генерировать RF при помощи ауры")
                .placeNearTarget();
            scene.idle(60)
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
                .text("Теперь создайте ауру (любым способом)")
                .placeNearTarget();
            scene.idle(60)  
        })
})