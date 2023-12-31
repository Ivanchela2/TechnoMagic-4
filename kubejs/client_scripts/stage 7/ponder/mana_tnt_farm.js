Ponder.registry(e => {
    e
        .create([
            'botania:entropinnyum'
        ])
        .scene("tm4:mana_tnt_farm", "Best mana Farm!", "kubejs:mana_tnt_farm", (scene, util) => {
            //scene.showStructure()
            scene.addKeyframe()
            scene.idle(0)
            scene.scaleSceneView(.6);
            scene.rotateCameraY(50);
            scene.world.showSection(util.select.fromTo(0, 0, 0, 10, 0, 9), Facing.DOWN)
            scene.idle(0)
            scene.addKeyframe()
            scene.idle(0)
            scene.world.showSection(util.grid.at(5, 1, 1), Facing.DOWN)
            scene.idle(30)
            scene.addKeyframe()
            scene.idle(0)
            scene
                .text(30, "Place 9 endopentiums (can be floating and in larger quantities)", [5, 1, 4])
                .colored(PonderPalette.RED)
                .placeNearTarget()
            scene.idle(30)
            scene.idle(0)
            scene.world.showSection(util.select.fromTo(6, 1, 3, 4, 1, 5), Facing.DOWN)
            scene.idle(30)
            scene.idle(0)
            scene.world.showSection(util.grid.at(5, 3, 2), Facing.DOWN)
            scene.idle(20)
            scene
                .showControls(40, [5, 3, 2], "down")
                .rightClick()
                .withItem("botania:twig_wand")
                .whileSneaking()
            scene.overlay.showText(40)
			    .colored(PonderPalette.BLUE)
			    .text("Connect the flowers to the mana dispenser and the mana dispenser to the mana pool")
                .placeNearTarget();
            scene.idle(50)
            scene.addKeyframe()
            scene.idle(0)
            scene.overlay.showText(40)
                .text("And let's build the main part of the farm!")
                .colored(PonderPalette.RED)
                .placeNearTarget()
            scene.idle(30)
            scene.idle(0)
            scene.world.showSection(util.select.fromTo(6, 1, 6, 4, 3, 9), Facing.DOWN)
            scene.idle(10)
            scene.idle(0)
            scene.world.showSection(util.select.fromTo(6, 4, 6, 4, 6, 9), Facing.DOWN)
            scene.idle(10)
            scene.idle(0)
            scene.world.showSection(util.select.fromTo(6, 7, 6, 4, 9, 9), Facing.DOWN)
            scene.idle(10)
            scene.addKeyframe()
            scene.idle(0)
            scene
                .text(30, "Here you need to place a block that passes the redstone signal", [6, 9, 7])
                .colored(PonderPalette.RED)
                .placeNearTarget()
            scene.idle(30)
            scene.addKeyframe()
            scene.idle(0)
            scene.world.showSection(util.select.fromTo(6, 10, 7, 5, 10, 7), Facing.DOWN)
            scene.idle(30)
            scene.idle(0)
            scene.rotateCameraY(-50);
            scene.idle(20)
            scene.idle(0)
            scene
                .showControls(40, [6, 10, 7], "down")
                .rightClick()
                .withItem('minecraft:sand')
            scene.idle(40)
            scene.idle(0)
            scene.overlay.showText(40)
                .text("Place 1 sand in the clock (must be YELLOW)")
                .colored(PonderPalette.RED)
                .placeNearTarget()
            scene.idle(40)
            scene.idle(0)
            scene
                .text(30, "Now use your favorite method to upload to the TNT distributor ", [6, 9, 7])
                .colored(PonderPalette.RED)
                .placeNearTarget()
            scene.idle(30)
    })
})