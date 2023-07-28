
Ponder.registry(e => {
    e
        .create([
            'naturesaura:offering_table'
        ])
        .scene('tm4:offering_table', "Offering table", 'offering_table', (scene, util) => {
            scene.showBasePlate()
            scene.idle(0)
            scene.overlay.showText(60)
                .colored(PonderPalette.BLUE)
                .text("In order to start the ritual, you need to build this structure")
                .placeNearTarget();
            scene.idle(60)
            scene.idle(0)
            scene.idle(30)
            scene.addKeyframe()
            scene.idle(0)
            scene.world.showSection(util.select.fromTo(4, 1, 1, 1, 1, 9), Facing.DOWN)
            scene.idle(40)
            scene.idle(0)
            scene.world.showSection(util.select.fromTo(6, 1, 1, 9, 1, 9), Facing.DOWN)
            scene.world.showSection(util.select.fromTo(5, 1, 1, 5, 1, 3), Facing.DOWN)
            scene.world.showSection(util.select.fromTo(5, 1, 7, 5, 1, 9), Facing.DOWN)
            scene.idle(40)
            scene.idle(0)
            scene.addKeyframe()
            scene.overlay.showText(60)
                .colored(PonderPalette.BLUE)
                .text("And place the table itself ")
                .placeNearTarget();
            scene.world.showSection(util.grid.at(5, 1, 5), Facing.DOWN)
            scene.idle(60)
            scene.addKeyframe()
            scene.idle(0)
            scene.overlay.showText(60)
                .colored(PonderPalette.BLUE)
                .text("Place the first item shown in REI on the table")
                .placeNearTarget();
            scene.idle(60)
            scene.addKeyframe()
            scene.idle(0)
            scene
                .showControls(60, [5, 3, 5], "down")
                .withItem('naturesaura:token_anger')
                // .whileRight() - Крашит из-за этой функции вместе с WorldEdit
            scene.idle(60)
            scene.addKeyframe()
            scene.idle(0)
            scene.overlay.showText(60)
                .colored(PonderPalette.BLUE)
                .text("Now put the spirit of the call on the table")
                .placeNearTarget();
            scene.idle(60)
            scene.addKeyframe()
            scene.idle(0)
            var calling_spirit = scene.world.createItemEntity(util.vector.topOf(5, 3, 5), (util.vector.of(0, 0, 0)),'naturesaura:calling_spirit');
            scene.idle(30)
            scene.idle(0)
            scene.overlay.showText(60)
                .colored(PonderPalette.BLUE)
                .text("And the ritual process will start after the particles appear")
                .placeNearTarget();
            scene.idle(60)
            scene.world.removeEntity(calling_spirit);
        })
})