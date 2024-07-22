Ponder.registry(event => {
    event
        .create([
            'minecraft:oak_log',
            'create:mechanical_saw'
        ])
        .scene('kubejs:wood', 'Простая ферма дерева.', 'wood_farm', (scene, util) => {
    scene.scaleSceneView(.8);
    scene.setSceneOffsetY(0);
    scene.world.showSection(util.select.layer(0), Facing.UP)

    scene.idle(20)
    scene.overlay.showText(60)
			.colored(PonderPalette.OUTPUT)
			.text('Давайте построим простую ферму дерева!')
			.placeNearTarget();
    scene.idle(80)

    scene
        .text(60, 'Разместите источник кинетической энергии:', [6.5, 1, 6.5])
        .colored(PonderPalette.WHITE)
        .placeNearTarget()
        .attachKeyFrame()
    scene.idle(80)

    scene.world.showSection(util.select.layer(1), Facing.UP)
    scene
        .text(60, 'На источник кинетической энергии разместите Механический вращатель:', [6.5, 2, 6.5])
        .colored(PonderPalette.WHITE)
        .placeNearTarget()
        .attachKeyFrame()
    scene.idle(80)

    scene.world.showSection(util.select.fromTo(6,2,6,6,2,13), Facing.DOWN);
    scene
        .text(60, 'Далее линию из Второчного линейного шасси:', [6.5, 2, 8.5])
        .colored(PonderPalette.WHITE)
        .placeNearTarget()
        .attachKeyFrame()
    scene.idle(80)

    scene
        .text(60, 'С помощью Суперклея, склейте линию с Механическим вращателем:', [6.5, 2, 8.5])
        .colored(PonderPalette.WHITE)
        .placeNearTarget()
        .attachKeyFrame()
    scene.idle(80)
    scene
        .showControls(40, [6.5, 2, 8.5], "right")
        .rightClick()
        .withItem('create:super_glue')
    scene.idle(60)

    scene.world.showSection(util.select.fromTo(5,2,6,5,2,13), Facing.DOWN);
    scene
        .text(60, 'Следом на линию разместите пилы:', [5.5, 2, 8.5])
        .colored(PonderPalette.WHITE)
        .placeNearTarget()
        .attachKeyFrame()
    scene.idle(80)

    scene.world.showSection(util.select.fromTo(6,3,6,6,4,13), Facing.DOWN);
    scene
        .text(60, 'Разместите шасси и бочки таким образом:', [6.5, 3, 8.5])
        .colored(PonderPalette.WHITE)
        .placeNearTarget()
        .attachKeyFrame()
    scene.idle(80)

    scene.world.showSection(util.select.fromTo(5,4,6,5,4,13), Facing.DOWN);
    scene
        .text(60, 'Под конец линию из Автономных активаторов:', [5.5, 4, 8.5])
        .colored(PonderPalette.WHITE)
        .placeNearTarget()
        .attachKeyFrame()
    scene.idle(80)

    scene
        .text(60, 'В фильтр каждого из них добавте нужный саженец:', [5.5, 4.5, 7])
        .colored(PonderPalette.WHITE)
        .placeNearTarget()
        .attachKeyFrame()
    scene.idle(80)
    scene
        .showControls(40, [5.5, 4.5, 7], "right")
        .rightClick()
        .withItem('minecraft:oak_sapling')
    scene.idle(60)

    scene
        .text(60, 'С помощью Суперклея, склейте всю конструкцию с нижней линией шасси:', [5.5, 4, 8.5])
        .colored(PonderPalette.WHITE)
        .placeNearTarget()
        .attachKeyFrame()
    scene.idle(80)
    scene
        .showControls(40, [5.5, 4, 8.5], "right")
        .rightClick()
        .withItem('create:super_glue')
    scene.idle(60)

    scene
        .text(70, 'Поместите саженцы в любую из бочек и запускайте ферму! (ПКМ по Вращателю):', [6.5, 3, 8.5])
        .colored(PonderPalette.WHITE)
        .placeNearTarget()
        .attachKeyFrame()
    scene.idle(90)

    scene.world.setKineticSpeed(util.select.fromTo(0,0,0,13,4,13), 8);
    })
})