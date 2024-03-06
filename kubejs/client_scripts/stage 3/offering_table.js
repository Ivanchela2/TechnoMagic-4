
Ponder.registry(e => {
    e
        .create([
            'naturesaura:offering_table'
        ])
        .scene('gribtweaks:offering_table', "Offering table", 'offering_table', (scene, util) => {
            scene.showBasePlate()
            scene.idle(0)
            scene.overlay.showText(60)
                .colored(PonderPalette.BLUE)
                .text("Для того чтобы начать ритуал, вам нужно построить следующую конструкцию...")
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
                .text("И разместите стол в центре")
                .placeNearTarget();
            scene.world.showSection(util.grid.at(5, 1, 5), Facing.DOWN)
            scene.idle(60)
            scene.addKeyframe()
            scene.idle(0)
            scene.overlay.showText(60)
                .colored(PonderPalette.BLUE)
                .text("Разместите первый предмет (см. JEI) на стол")
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
                .text("Сюда же дух призыва")
                .placeNearTarget();
            scene.idle(60)
            scene.addKeyframe()
            scene.idle(0)
            var calling_spirit = scene.world.createItemEntity(util.vector.topOf(5, 3, 5), (util.vector.of(0, 0, 0)),'naturesaura:calling_spirit');
            scene.idle(30)
            scene.idle(0)
            scene.overlay.showText(60)
                .colored(PonderPalette.BLUE)
                .text("И ритуал начнется!")
                .placeNearTarget();
            scene.idle(60)
            scene.world.removeEntity(calling_spirit);
        })
})