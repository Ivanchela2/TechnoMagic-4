Ponder.registry(e => {
    e
        .create([
            'twilightforest:twilight_portal_miniature_structure',
            'minecraft:diamond'
        ])
        .scene('gribtweaks:twilight_portal', "Сумеречный Лес", 'twilight_portal', (scene, util) => {
            scene.setSceneOffsetY(-1);
            scene.showBasePlate()
            scene.idle(0)
            scene.overlay.showText(60)
                .colored(PonderPalette.GREEN)
                .text("Как построить портал в Сумеречный лес:")
            scene.addKeyframe()
            scene.idle(60)
            scene.idle(0)
            scene.overlay.showText(60)
                .colored(PonderPalette.RED)
                .text("Разместите любые цветы вокруг воды")
            scene.idle(60)
            scene.idle(0)
            scene.world.showSection(util.select.layer(1), Facing.UP)
            scene.world.showSection(util.select.layer(2), Facing.UP)
            scene.idle(30)
            scene.addKeyframe()
            scene.idle(0)
            scene.idle(30)
            scene.idle(0)
            scene.idle(30)
            scene.addKeyframe()
            scene.overlay.showText(60)
                .colored(PonderPalette.RED)
                .text("И бросьте алмаз в воду")
            scene.addKeyframe()
            scene.idle(0)
            var diamond = scene.world.createItemEntity(util.vector.topOf(1.5, 2, 1.5), (util.vector.of(0, 0, 0)),'minecraft:diamond');
            scene.idle(20)
            scene.idle(0)
            scene.world.replaceBlocks([2, 1, 1, 1, 1, 2], "twilightforest:twilight_portal", false);
    })
})