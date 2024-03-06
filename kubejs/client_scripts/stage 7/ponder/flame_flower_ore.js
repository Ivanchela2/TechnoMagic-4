Ponder.registry(e => {
    e
        .create([
            'botania:orechid_ignem'
        ])
        .scene("gribtweaks:ore_flame_flower", "Адская руда!", "kubejs:flame_ore_flower", (scene, util) => {
            //scene.showStructure()
            scene.addKeyframe()
            scene.world.showSection(util.select.fromTo(0, 0, 6, 6, 0, 0), Facing.DOWN)
            scene.idle(0)
            scene.rotateCameraY(-145);
            scene.idle(20)
            scene.idle(0)
            scene.overlay.showText(20)
			    .colored(PonderPalette.BLUE)
			    .text("Как работает огненный рудноцвет")
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
                .text("Свяжите огненный рудноцвет с бассейном маны")
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
                .text("Разместите незерак вокруг огненного рудноцвета")
                .placeNearTarget();
            scene.idle(40)
            scene.idle(0)
            scene.world.showSection(util.select.fromTo(2, 1, 2, 2, 1, 4), Facing.DOWN)
            scene.world.showSection(util.select.fromTo(4, 1, 2, 4, 1, 4), Facing.DOWN)
            scene.world.showSection(util.select.position(3,1,2), Facing.DOWN)
            scene.world.showSection(util.select.position(3,1,4), Facing.DOWN)
            scene.idle(20)
            scene.addKeyframe()
            scene.idle(0)
            scene.world.replaceBlocks([4, 1, 4], 'silentgear:crimson_iron_ore', true);
            scene.idle(20)
            scene.idle(0)
            scene.world.replaceBlocks([2, 1, 2], 'minecraft:nether_gold_ore', true);
            scene.idle(20)
            scene.idle(0)
            scene.world.replaceBlocks([4, 1, 3], 'minecraft:nether_quartz_ore', true);
            scene.idle(20)
            scene.idle(0)
            scene.overlay.showText(40)
                .colored(PonderPalette.RED)
                .text("Огненный рудноцвет генерирует руду адского мира, как ванильную, так и из модов")
                .placeNearTarget();
            scene.idle(40)
    })
})