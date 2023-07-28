Ponder.registry(e => {
    e
        .create([
            'gribtweaks:arch_block'
        ])
        .scene('tm4:arhiology_generator', "Arhiology generator", 'kubejs:arhiology_generator', (scene, util) => {
            scene.setSceneOffsetY(-2);
            scene.rotateCameraY(30);
            scene.showBasePlate()
            scene.addKeyframe()
            scene.overlay.showText(60)
                .colored(PonderPalette.GREEN)
                .text("The archaeological reactor will generate archaeological sand with a chance of 80% and the ordinary reactor with a chance of 20%.")
                .placeNearTarget();
            scene.idle(60)
            scene.idle(0)
            scene.world.showSection(util.select.fromTo(1, 1, 1, 5, 1, 5), Facing.DOWN)
            scene.idle(30)
            scene.addKeyframe()
            scene.idle(0)
            scene.world.showSection(util.select.fromTo(1, 2, 1, 5, 2, 5), Facing.DOWN)
            scene.idle(30)
            scene.overlay.showText(60)
                .colored(PonderPalette.BLUE)
                .text("And from this sand you can get a lot of resources!")
                .placeNearTarget();
            scene.addKeyframe()
            scene.idle(0)
            scene.world.showSection(util.select.fromTo(1, 3, 1, 5, 3, 5), Facing.DOWN)
            scene.idle(30)
            scene.addKeyframe()
            scene.idle(0)
            scene.world.showSection(util.select.fromTo(1, 4, 1, 5, 4, 5), Facing.DOWN)
            scene.idle(30)
            scene.addKeyframe()
            scene.overlay.showText(60)
                .colored(PonderPalette.RED)
                .text("ATTENTION! THE ARCHAEOLOGICAL REACTOR WILL NOT WORK WITHOUT THIS STRUCTURE!")
                .placeNearTarget();
    })
})