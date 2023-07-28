Ponder.registry((event) => {
    event
        .create('alchemistry:fission_chamber_controller')
        .scene(
            "fission_r",
            "Reactors",
            "kubejs:fission_reactor",
            (scene, util) => {
                scene.addKeyframe()
                scene.idle(0);
                scene.rotateCameraY(-180);
                scene.idle(1);
                scene.overlay.showText(15).text("This is how a reactor should be built!").independent(20)
                    .colored(PonderPalette.GREEN)
                scene.addKeyframe()
                scene.idle(15);
                scene.world.showSection(util.select.fromTo(0, 0, 0, 4, 0, 4), Facing.SOUTH)
                scene.idle(15);
                scene.addKeyframe()
                scene
                    .text(15, "The yellow colour indicates the entry of objects into the reactor", [4, 0, 3])
                    .colored(PonderPalette.RED)
                    .placeNearTarget()
                scene.idle(20);
                scene.addKeyframe()
                scene
                    .text(15, "Red colour indicates energy input to the reactor", [4, 0, 2])
                    .colored(PonderPalette.RED)
                    .placeNearTarget()
                scene.idle(20);
                scene.addKeyframe()
                scene
                    .text(15, "Green colour indicates the exit of objects from the reactor", [4, 0, 1])
                    .colored(PonderPalette.RED)
                    .placeNearTarget()
                scene.idle(20);
                scene.world.showSection(util.select.fromTo(0, 1, 0, 4, 1, 4), Facing.SOUTH)
                scene
                    .text(15, "Place the Fission core in the centre of a total of 3 pieces", [2, 2, 2])
                    .colored(PonderPalette.GREEN)
                    .placeNearTarget()
                scene.addKeyframe()
                scene.idle(20);
                scene
                    .text(15, "Place the Fission Chamber in the centre of the structure", [4, 1, 2])
                    .colored(PonderPalette.RED)
                    .placeNearTarget()
                scene.idle(20);
                scene.world.showSection(util.select.fromTo(0, 2, 0, 4, 2, 4), Facing.DOWN)
                scene.addKeyframe()
                scene.idle(5);
                scene.world.showSection(util.select.fromTo(0, 3, 0, 4, 3, 4), Facing.DOWN)
                scene.addKeyframe()
                scene.idle(5);
                scene.world.showSection(util.select.fromTo(0, 4, 0, 4, 4, 4), Facing.DOWN)
                scene.addKeyframe()
                scene.idle(5);
                scene.world.showSection(util.select.fromTo(0, 5, 0, 4, 5, 4), Facing.DOWN)
                scene.addKeyframe()
                scene.idle(5);
                scene.addKeyframe()
                scene.idle(5);
                scene.rotateCameraY(-55);
                scene.idle(5);
                scene.addKeyframe()
            }
        );
})
