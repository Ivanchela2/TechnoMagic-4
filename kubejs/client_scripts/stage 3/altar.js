Ponder.registry(e => {
    e
        .create([
            'rootsclassic:altar',
            'rootsclassic:brazier',
            'rootsclassic:attuned_standing_stone'
        ])
        .scene('gribtweaks:altar', "Altar", 'altar', (scene, util) => {
            scene.scaleSceneView(.8);
            scene.setSceneOffsetY(1);
            scene.showBasePlate()
            scene.idle(0)
            scene.overlay.showText(50)
                .colored(PonderPalette.BLACK)
                .text("You can use the altar simply, without any additional structures")
                .placeNearTarget()
                .attachKeyFrame()
            scene.idle(50)
            scene.idle(0)
            scene.world.showSection(util.grid.at(6, 1, 6), Facing.DOWN)
            scene.idle(20)
            scene.idle(0)
            scene.overlay.showText(50)
                .colored(PonderPalette.BLUE)
                .text("In order to make a level 2 altar, you need to place a brazier around it")
                .placeNearTarget()
                .attachKeyFrame()
            scene.idle(50)
            scene.idle(0)
            scene.world.showSection(util.select.fromTo(8, 1, 4, 8, 1, 8), Facing.DOWN)
            scene.world.showSection(util.select.fromTo(4, 1, 8, 6, 1, 8), Facing.DOWN)
            scene.world.showSection(util.select.fromTo(4, 1, 6, 4, 1, 4), Facing.DOWN)
            scene.world.showSection(util.grid.at(6, 1, 4), Facing.DOWN)
            scene.idle(50)
            scene.addKeyframe()
            scene.idle(0)
            scene.overlay.showText(50)
                .colored(PonderPalette.BLUE)
                .text("If you want to make a level 3 altar, place the following blocks:")
                .placeNearTarget()
            scene.idle(50)
            scene.idle(0)
            scene.world.showSection(util.select.fromTo(3, 1, 3, 9, 2, 1), Facing.DOWN)
            scene.world.showSection(util.select.fromTo(1, 2, 6, 3, 1, 9), Facing.DOWN)
            scene.world.showSection(util.select.fromTo(6, 2, 11, 9, 1, 9), Facing.DOWN)
            scene.world.showSection(util.select.fromTo(11, 2, 6, 9, 1, 3), Facing.DOWN)
            scene.idle(50)
        })
})