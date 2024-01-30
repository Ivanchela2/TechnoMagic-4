Ponder.registry((event) => {
    event
        .create('create:precision_mechanism')
        .scene(
            "Precision_Mechanism_Crafter",
            "The initial way to automate!",
            "kubejs:precision_mechanism_crafter",
            (scene, util) => {
                scene.world.setBlock([2, 2, 1], 'create:water_wheel', false )
                scene.idle(5);
                scene.addKeyframe()
                scene.overlay.showText(20).text("This is the best way to automate early in the game!").independent(20)
                    .colored(PonderPalette.RED)
                scene.idle(20);
                scene.addKeyframe()
                scene.idle(5);
                scene.overlay.showText(10).text("Place 2 chests").independent(20)
                    .colored(PonderPalette.RED)
                scene.showBasePlate();
                scene.idle(25);
                scene.addKeyframe()
                scene.idle(10);
                scene.overlay.showText(10).text("Position the mechanical belt and chute").independent(20)
                    .colored(PonderPalette.RED)
                scene.world.showSection(util.select.fromTo(0, 1, 0, 0, 1, 3), Facing.SOUTH)
                scene.idle(25);
                scene.addKeyframe()
                scene.idle(5);
                scene.world.showSection(util.select.fromTo(1, 2, 0, 1, 2, 2), Facing.SOUTH)
                scene.world.showSection(util.select.fromTo(1, 3, 0, 1, 3, 2), Facing.WEST)
                scene.world.showSection(util.select.fromTo(1, 4, 0, 1, 4, 2), Facing.SOUTH)
                scene.world.showSection(util.select.fromTo(0, 4, 0, 0, 4, 2), Facing.SOUTH)
                scene.idle(15);
                scene.addKeyframe()
                scene
                    .text(20, "Place 3 autonomous activators and funnels", [0, 3, 1])
                    .colored(PonderPalette.RED)
                    .placeNearTarget()
                scene.idle(30);
                scene.addKeyframe()
                scene.idle(10);
                scene.world.showSection(util.select.fromTo(0, 2, 0, 0, 2, 2), Facing.SOUTH)
                scene.world.showSection(util.select.fromTo(0, 3, 0, 0, 3, 2), Facing.SOUTH)
                scene
                    .text(15, "Do not forget to install the gears (can be done without the housing)", [0, 3, 3])
                    .colored(PonderPalette.RED)
                    .placeNearTarget()
                    scene.world.showSection(util.select.position(0, 3, 3), Facing.WEST)
                scene.idle(30);
                scene.addKeyframe()
                scene.idle(5);
                scene.addKeyframe()
                scene.rotateCameraY(-180);
                scene.world.replaceBlocks([1, 2, 3,], 'create:andesite_casing', false);
                scene
                    .text(20, "Don't forget the other gearbox!", [1, 2, 3])
                    .colored(PonderPalette.RED)
                    .placeNearTarget()
                scene.world.showSection(util.select.fromTo(2, 3, 0, 4, 1, 0), Facing.DOWN)
                scene.world.showSection(util.select.position(1, 1, 2), Facing.WEST)
                scene.idle(30);
                scene
                    .text(10, "Position the 2 water wheel", [2, 2, 1])
                    .colored(PonderPalette.RED)
                    .placeNearTarget()
                scene.world.showSection(util.select.position(2, 2, 1), Facing.DOWN)
                scene.world.showSection(util.select.position(2, 2, 2), Facing.DOWN)
                scene.idle(35);
                scene.addKeyframe()
                scene.idle(15);
                scene.world.showSection(util.select.fromTo(4, 3, 1, 4, 1, 3), Facing.DOWN)
                scene.world.showSection(util.select.fromTo(3, 3, 3, 1, 0, 3), Facing.DOWN)
                scene
                    .text(15, "Instead of a stone, you can use any other block",[4, 3, 0])
                    .colored(PonderPalette.RED)
                    .placeNearTarget()
                scene.idle(35);
                scene.addKeyframe()
                scene.rotateCameraY(-280);
                scene.idle(15);
                scene.addKeyframe()
                scene.world.setKineticSpeed(util.select.fromTo(0, 3, 0, 0, 3, 3), 32);
                scene.world.setKineticSpeed(util.select.fromTo(1, 2, 3, 1, 1, 3), 32);
                scene.world.setKineticSpeed(util.grid.at(2, 2, 3), 32);
                scene.world.setKineticSpeed(util.select.fromTo(0, 1, 0, 0, 1, 2), 32);
                scene.idle(25);
                scene.addKeyframe()
                scene.idle(5);
                scene
                    .text(15, "Put the head object here",[0, 1, 0])
                    .colored(PonderPalette.RED)
                    .placeNearTarget()
                scene.idle(23);
                scene.addKeyframe()
                scene.idle(10);
                scene
                    .text(15, "But in the chest, place the items from which your item is created",[0, 4, 0])
                    .colored(PonderPalette.RED)
                    .placeNearTarget()
                scene.idle(25);
                scene.addKeyframe()
            }
        );
})
