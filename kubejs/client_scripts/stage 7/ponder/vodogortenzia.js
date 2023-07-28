Ponder.registry((event) => {
    event
        .create('botania:hydroangeas')
        .scene(
            "vodogortenzia_farm",
            "Mana farm on water hydrangeas",
            "kubejs:vodogortenzia",
            (scene, util, grid) => {
                scene.addKeyframe()
                scene.idle(0)
                scene.rotateCameraY(-55);
                scene.idle(1)
                scene.addKeyframe()
                scene.idle(5)
                scene.world.showSection(util.select.fromTo(0, 0, 0, 8, 0, 8), Facing.DOWN)
                scene.world.replaceBlocks([5, 0, 3, 5, 0, 5], 'minecraft:grass_block', false);
                scene.world.replaceBlocks([5, 0, 6, 3, 0, 5], 'minecraft:grass_block', false);
                scene.world.replaceBlocks([3, 0, 4], 'minecraft:grass_block', false);
                scene.world.replaceBlocks([4, 0, 5, 4, 0, 4], 'minecraft:air', true);
                scene.world.replaceBlocks([4, 0, 3], 'minecraft:air', true);
                scene.idle(15)
                scene
                    .text(25, "Dig the area into 3 blocks", [4, 0, 4])
                    .colored(PonderPalette.RED)
                    .placeNearTarget()
                scene.idle(30)
                scene.addKeyframe()
                scene.idle(5)
                scene.world.showSection(util.select.fromTo(5, 1, 3, 3, 1, 5), Facing.DOWN)
                scene
                    .text(20, "Put the water in", [5, 1, 4])
                    .colored(PonderPalette.BLUE)
                    .placeNearTarget()
                scene.idle(25)
                scene.addKeyframe()
                scene.idle(5)
                scene.world.showSection(util.select.fromTo(6, 1, 2, 2, 1, 2), Facing.DOWN)
                scene.world.showSection(util.select.fromTo(2, 1, 6, 2, 1, 2), Facing.DOWN)
                scene.world.showSection(util.select.fromTo(2, 1, 6, 6, 1, 6), Facing.DOWN)
                scene.world.showSection(util.select.fromTo(6, 1, 6, 6, 1, 2), Facing.DOWN)
                scene
                    .text(25, "Place 20 water hydrangeas around the water", [2, 1, 4])
                    .colored(PonderPalette.BLUE)
                    .placeNearTarget()
                scene.idle(30)
                scene.addKeyframe()
                scene.idle(5)
                scene.world.showSection(util.grid.at(4, 3, 2), Facing.DOWN)
                scene
                    .text(30, "Place the mana distributor", [4, 3, 2])
                    .colored(PonderPalette.BLUE)
                    .placeNearTarget()
                scene.idle(65)
                scene.addKeyframe()
                scene.idle(5)
                scene
                    .text(30, "And connect each flower to a mana distributor", [2, 1, 4])
                    .colored(PonderPalette.BLUE)
                    .placeNearTarget()
                scene
                    .showControls(30, [2, 2, 4], "down")
                    .rightClick()
                    .withItem("botania:twig_wand")
                    .whileSneaking()
                scene.idle(65)
                scene.addKeyframe()
                scene.idle(5)
                scene
                    .showControls(30, [4, 4, 2], "down")
                    .rightClick()
                    .withItem("botania:twig_wand")
                    .whileSneaking()
                scene.idle(25)
                scene.addKeyframe()
                scene.idle(5)
                scene
                    .text(25, "Now you need to connect the mana distributor to the mana pool", [4, 2, 0])
                    .colored(PonderPalette.BLUE)
                    .placeNearTarget()
                scene.idle(30)
                scene.addKeyframe()
                scene.idle(5)
                scene.world.showSection(util.grid.at(4, 1, 0), Facing.DOWN)
                scene.idle(30)
                scene
                    .showControls(30, [4, 4, 2], "down")
                    .rightClick()
                    .withItem("botania:twig_wand")
                    .whileSneaking()
                scene.idle(60)
                scene.addKeyframe()
                scene.idle(5)

                scene
                    .showControls(30, [4, 2, 0], "down")
                    .rightClick()
                    .withItem("botania:twig_wand")
                    .whileSneaking()
                scene.idle(35)
                scene.addKeyframe()
                scene.idle(1)
                scene
                    .text(25, "Unfortunately, over time, water hydrangeas will turn into a dry bush", [2, 2, 4])
                    .colored(PonderPalette.BLUE)
                    .placeNearTarget()
                scene.idle(30)
                scene.world.replaceBlocks([2, 1, 4], 'minecraft:dead_bush', true);
                scene.idle(15)
                scene.addKeyframe()
                scene.idle(1)
                scene
                    .text(25, "If you don't want to do this, you need to replace the regular block of grass with enchanted soil. Here's how to do it:", [2, 2, 4])
                    .colored(PonderPalette.BLUE)
                    .placeNearTarget()
                scene.idle(25)
                scene.addKeyframe()
                scene.idle(1)
                scene
                    .showControls(25, [2, 1, 4], "down")
                    .rightClick()
                    .withItem("botania:overgrowth_seed")
                scene.idle(30)
                scene.idle(1)
                scene.world.replaceBlocks([2, 0, 4], 'botania:enchanted_soil', true);
                scene.world.replaceBlocks([2, 1, 4], 'botania:hydroangeas', true);
                scene.idle(15)
                scene.addKeyframe()
                scene.idle(1)
                scene.world.replaceBlocks(util.select.fromTo(6, 0, 6, 6, 0, 2), 'botania:enchanted_soil', true);
                scene.world.replaceBlocks(util.select.fromTo(2, 0, 6, 6, 0, 6), 'botania:enchanted_soil', true);
                scene.world.replaceBlocks(util.select.fromTo(2, 0, 6, 2, 0, 2), 'botania:enchanted_soil', true);
                scene.world.replaceBlocks(util.select.fromTo(6, 0, 2, 2, 0, 2), 'botania:enchanted_soil', true);
                scene.idle(25)
                scene.addKeyframe()
            })
        })

    