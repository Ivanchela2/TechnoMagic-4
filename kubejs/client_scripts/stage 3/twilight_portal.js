Ponder.registry(e => {
    e
        .create([
            'twilightforest:twilight_portal_miniature_structure',
            'naturesaura:infused_iron'
        ])
        .scene('gribtweaks:twilight_portal', "Twilight Portal", 'twilight_portal', (scene, util) => {
            scene.setSceneOffsetY(-2);
            scene.showBasePlate()
            scene.idle(0)
            scene.overlay.showText(60)
                .colored(PonderPalette.GREEN)
                .text("How to build a portal in Twilight Forest:")
            scene.addKeyframe()
            scene.idle(60)
            scene.idle(0)
            scene.overlay.showText(60)
                .colored(PonderPalette.RED)
                .text("Place any flowers around the water")
            scene.idle(60)
            scene.idle(0)
            scene.world.showSection(util.select.fromTo(1, 1, 1, 1, 1, 4), Facing.DOWN)
            scene.world.showSection(util.select.fromTo(2, 1, 1, 4, 1, 1), Facing.DOWN)
            scene.world.showSection(util.select.fromTo(4, 1, 2, 4, 1, 4), Facing.DOWN)
            scene.world.showSection(util.select.fromTo(3, 1, 4, 2, 1, 4), Facing.DOWN)
            scene.idle(30)
            scene.addKeyframe()
            scene.idle(0)
            scene.world.showSection(util.select.fromTo(1, 2, 1, 4, 2, 4), Facing.DOWN)
            scene.idle(30)
            scene.idle(0)
            scene.world.showSection(util.select.fromTo(3, 1, 3, 2, 1, 2), Facing.DOWN)
            scene.idle(30)
            scene.addKeyframe()
            scene.overlay.showText(60)
                .colored(PonderPalette.RED)
                .text("And throw an diamond into the water")
            scene.addKeyframe()
            scene.idle(0)
            var diamond = scene.world.createItemEntity(util.vector.topOf(3, 2, 2), (util.vector.of(0, 0, 0)),'minecraft:diamond');
            scene.idle(20)
            scene.idle(0)
            scene.world.replaceBlocks([3, 1, 2, 2, 1, 3], "twilightforest:twilight_portal", false);
    })
})