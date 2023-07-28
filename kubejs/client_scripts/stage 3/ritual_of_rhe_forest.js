function fadeInSection(scene, selection, movingOffset, direction, idleTicks) {
    let link = scene.world.showIndependentSection(selection, direction);
    scene.world.moveSection(link, movingOffset, 0);
    scene.idle(idleTicks);
    scene.world.hideIndependentSection(link, direction);
    scene.idle(idleTicks);
}
Ponder.registry(e => {
    e
        .create([
            'naturesaura:wood_stand'
        ])
        .scene('tm4:ritual_of_rhe_forest', "Ritual of the forest", 'ritual_of_rhe_forest', (scene, util) => {
            //scene.showStructure()
            scene.world.setBlocks([5, 1, 6], 'occultism:otherworld_sapling', false);
            scene.world.setBlocks([4, 1, 5], 'minecraft:jungle_sapling', false);
            scene.showBasePlate()
            scene.idle(0)
            scene.world.showSection(util.grid.at(5, 1, 5), Facing.DOWN)
            scene.idle(40)
            scene.idle(0)
            scene.overlay.showText(60)
                .colored(PonderPalette.BLUE)
                .text("To make a forest ritual place these blocks and a tree sapling in the center")
                .placeNearTarget();
            scene.addKeyframe()
            scene.idle(60)
            scene.idle(0)
            scene.world.showSection(util.select.fromTo(2, 1, 2, 1, 1, 8), Facing.DOWN)
            scene.world.showSection(util.select.fromTo(3, 1, 2, 8, 1, 1), Facing.DOWN)
            scene.world.showSection(util.select.fromTo(3, 1, 8, 8, 1, 9), Facing.DOWN)
            scene.world.showSection(util.select.fromTo(8, 1, 4, 9, 1, 8), Facing.DOWN)
            scene.idle(60)
            scene.addKeyframe()
            scene.idle(0)
            scene.overlay.showText(60)
                .colored(PonderPalette.BLUE)
                .text("Spread gold dust around the tree sapling")
                .placeNearTarget();
            scene.idle(60)
            scene.addKeyframe()
            scene.idle(0)
            scene.overlay.showText(60)
                .colored(PonderPalette.BLUE)
                .text("Different recipes use different seedlings!")
                .placeNearTarget();
            scene.idle(60)
            scene.idle(0)
            scene.world.destroyBlock(util.grid.at(5, 1, 5))
            scene.idle(20)
            scene.idle(0)
                fadeInSection(scene, [4, 1, 5], [1, 0, 0], Direction.EAST, 30);
            scene.idle(20)
            scene.idle(0)
                fadeInSection(scene, [5, 1, 6], [0, 0, -1], Direction.NORTH, 30);
            scene.idle(20)
            scene.addKeyframe()
            scene.idle(0)
            scene.world.setBlock([5, 1, 5], 'minecraft:oak_sapling', true   );
            scene.world.showSection(util.select.fromTo(6, 1, 3, 4, 1, 3), Facing.DOWN)
            scene.world.showSection(util.select.fromTo(7, 1, 4, 3, 1, 4), Facing.DOWN)
            scene.world.showSection(util.select.fromTo(7, 1, 5, 6, 1, 7), Facing.DOWN)
            scene.world.showSection(util.select.fromTo(6, 1, 7, 4, 1, 7), Facing.DOWN)
            scene.world.showSection(util.select.fromTo(4, 1, 6, 3, 1, 6), Facing.DOWN)
            scene.world.showSection(util.grid.at(3, 1, 5), Facing.DOWN)
            scene.idle(60)
            scene.idle(0)
            scene.overlay.showText(60)
                .colored(PonderPalette.BLUE)
                .text("To start the ritual, you need to place your recipe on the stand as shown in REI")
                .placeNearTarget();
            scene.idle(60)
            scene.idle(0)
            scene.overlay.showText(60)
                .colored(PonderPalette.BLUE)
                .text("And grow a tree!")
                .placeNearTarget();
            scene.idle(60)
            scene.idle(0)
            scene.addKeyframe()
            scene
                .showControls(60, [5, 2, 5], "down")
                .rightClick()
                .withItem('minecraft:bone_meal')
            scene.idle(60)
            scene.world.showSection(util.select.fromTo(3, 2, 3, 7, 5, 7), Facing.DOWN)
            scene.world.setBlock([5, 1, 5], 'minecraft:oak_log', false);

    })
})