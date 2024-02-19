Ponder.registry(e => {
    e
        .create([
            'botania:orechid'
        ])
        .scene("gribtweaks:ore_flower", "Inffinity ores", "kubejs:ore_flower", (scene, util) => {
            //scene.showStructure()
            scene.addKeyframe()
            scene.world.showSection(util.select.fromTo(0, 0, 6, 6, 0, 0), Facing.DOWN)
            scene.idle(0)
            scene.rotateCameraY(-145);
            scene.idle(20)
            scene.idle(0)
            scene.overlay.showText(20)
			    .colored(PonderPalette.BLUE)
			    .text("How the orechid works")
                .placeNearTarget();
            scene.idle(20)
            scene.addKeyframe()
            scene.idle(0)
            scene.world.showSection(util.select.position(3,1,3), Facing.DOWN)
            scene.world.showSection(util.select.position(3,1,6), Facing.DOWN)
            scene.idle(20)
            scene.idle(0)
            scene.overlay.showText(20)
                .colored(PonderPalette.RED)
                .text("Connect orechid to mana pool")
                .placeNearTarget();
            scene.idle(20)
            scene.idle(0)
            scene
                .showControls(15, [3, 2, 6], "down")
                .rightClick()
                .withItem("botania:twig_wand")
                .whileSneaking()
            scene.idle(15)
            scene.idle(0)
            scene
                .showControls(20, [3, 1, 3], "down")
                .rightClick()
                .withItem("botania:twig_wand")
                .whileSneaking()
            scene.idle(20)
            scene.addKeyframe()
            scene.idle(0)
            scene.overlay.showText(20)
                .colored(PonderPalette.BLUE)
                .text("Place a stone around the orechid")
                .placeNearTarget();
            scene.idle(20)
            scene.idle(0)
            scene.world.showSection(util.select.fromTo(2, 1, 2, 2, 1, 4), Facing.DOWN)
            scene.world.showSection(util.select.fromTo(4, 1, 2, 4, 1, 4), Facing.DOWN)
            scene.world.showSection(util.select.position(3,1,2), Facing.DOWN)
            scene.world.showSection(util.select.position(3,1,4), Facing.DOWN)
            scene.idle(20)
            scene.addKeyframe()
            scene.idle(0)
            scene.world.replaceBlocks([4, 1, 4], 'minecraft:iron_ore', true);
            scene.idle(20)
            scene.idle(0)
            scene.world.replaceBlocks([2, 1, 2], 'minecraft:gold_ore', true);
            scene.idle(20)
            scene.idle(0)
            scene.world.replaceBlocks([4, 1, 3], 'indreb:tin_ore', true);
            scene.idle(20)
            scene.idle(0)
            scene.world.replaceBlocks([3, 1, 4], 'minecraft:diamond_ore', true);
            scene.idle(20)
            scene.idle(0)
            scene.overlay.showText(40)
                .colored(PonderPalette.RED)
                .text("Orechid will generate all ores from the upper world and other mods")
                .placeNearTarget();
            scene.idle(40)
    })
})