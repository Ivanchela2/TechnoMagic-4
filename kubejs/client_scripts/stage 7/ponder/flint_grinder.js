Ponder.registry(e => {
    e
        .create([
            'minecraft:flint'
        ])
        .scene('gribtweaks:flint_grinder', "Flint Grinder", 'flint_grinder', (scene, util) => {
            //scene.showStructure()
            scene.addKeyframe()
            scene.idle(0)
            scene.world.showSection(util.select.fromTo(0,0,0,8,0,8), Facing.DOWN)
            scene.idle(0)
            scene.idle(0)
            scene.overlay.showText(40)
                .colored(PonderPalette.RED)
                .text("Flint Grinder")
                .placeNearTarget();
            scene.idle(40)
            scene.idle(0)
            scene.rotateCameraY(35);
            scene.idle(20)
            scene.idle(0)
            scene.world.showSection(util.select.fromTo(4,2,4,3,1,7), Facing.DOWN)
            scene.world.showSection(util.select.position(4, 0, 4), Facing.DOWN)
            scene.idle(20)
            scene.idle(0)
            scene.rotateCameraY(90);
            scene.idle(20)
            scene.addKeyframe()
            scene.idle(0)
            scene.world.showSection(util.select.fromTo(2,1,3,3,1,3), Facing.DOWN)
            scene.idle(20)
            scene.idle(0)
            scene
                .text(20, "Set the maximum delay on the redstone repeater", [3,1,3])
                .colored(PonderPalette.RED)
                .placeNearTarget()
            scene.idle(20)
            scene.idle(0)
            scene.rotateCameraY(180);
            scene.idle(20)
            scene.addKeyframe()
            scene.idle(0)
            scene.world.showSection(util.select.fromTo(4,1,2,6,1,3), Facing.DOWN)
            scene.idle(20)
            scene.idle(0)
            scene.world.showSection(util.select.fromTo(3,1,1,4,2,1), Facing.DOWN)
            scene.world.showSection(util.select.position(4, 2, 2), Facing.DOWN)
            scene.idle(20)
            scene.rotateCameraY(-260);
            scene.addKeyframe()
            scene.idle(0)
            scene.world.showSection(util.select.fromTo(5,2,3,3,3,3), Facing.DOWN)
            scene.idle(20)
            scene.idle(0)
            scene
                .text(40, "Place the grit in the dispenser and start the machine!", [4,2,4])
                .colored(PonderPalette.RED)
                .placeNearTarget()
            scene.idle(40)
            scene.idle(0)
            scene
                .showControls(60, [4, 2, 4], "down")
                .rightClick()
                .withItem("minecraft:gravel")
                .whileCTRL();
            scene.idle(60)
    })
})