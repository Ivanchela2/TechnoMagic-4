
Ponder.registry(e => {
    e
        .create([
            'naturesaura:potion_generator'
        ])
        .scene('gribtweaks:potion_generator', "Potion generator", 'potion_generator', (scene, util) => {
            scene.showBasePlate()
            scene.setSceneOffsetY(-2);
            scene.rotateCameraY(30);
            scene.idle(0)
            scene.overlay.showText(60)
                .colored(PonderPalette.GREEN)
                .text("Затяжной поглотитель генерирует ауру с помощью любых положительных зелий")
                .placeNearTarget();
            scene.idle(60)
            scene.addKeyframe()
            scene.idle(0)
            scene.world.showSection(util.select.fromTo(7, 1, 7, 5, 1, 6), Facing.DOWN)
            scene.world.showSection(util.grid.at(6, 1, 5), Facing.DOWN)
            scene.idle(40)
            scene.idle(0)
            scene.world.showSection(util.select.fromTo(7, 1, 1, 5, 1, 2), Facing.DOWN)
            scene.world.showSection(util.grid.at(6, 1, 3), Facing.DOWN)
            scene.idle(40)
            scene.idle(0)
            scene.world.showSection(util.select.fromTo(1, 1, 1, 2, 1, 3), Facing.DOWN)
            scene.world.showSection(util.grid.at(3, 1, 2), Facing.DOWN)
            scene.idle(40)
            scene.idle(0)
            scene.world.showSection(util.select.fromTo(2, 1, 5, 1, 1, 7), Facing.DOWN)
            scene.world.showSection(util.grid.at(3, 1, 6), Facing.DOWN)
            scene.idle(40)
            scene.idle(0)
            scene.world.showSection(util.select.fromTo(5, 1, 5, 3, 1, 3), Facing.DOWN)
            scene.idle(40)
            scene.idle(0)
            scene.idle(40)
            scene.addKeyframe()
            scene.idle(0)
            scene.world.showSection(util.select.fromTo(7, 2, 1, 7, 4, 1), Facing.DOWN)
            scene.idle(20)
            scene.idle(0)
            scene.world.showSection(util.select.fromTo(1, 2, 1, 1, 4, 1), Facing.DOWN)
            scene.idle(20)
            scene.idle(0)
            scene.world.showSection(util.select.fromTo(1, 2, 7, 1, 4, 7), Facing.DOWN)
            scene.idle(20)
            scene.idle(0)
            scene.world.showSection(util.select.fromTo(7, 2, 7, 7, 4, 7), Facing.DOWN)
            scene.idle(20)
            scene.addKeyframe()
            scene.idle(0)
            scene.world.showSection(util.grid.at(4, 2, 4), Facing.DOWN)
            scene.idle(20)
            scene.addKeyframe()
            scene.idle(0)
            const delta = [1, 0.5, 1];
            const fluidPos = new Vec3(4, 3, 4);
            const potionFluid = Fluid.of("create:potion", { Potion: ('minecraft:lingering_potion', '{Potion:"minecraft:strong_regeneration"}')});
            const TICK_LENGTH = 80;
            scene.idle(0)
            var lingering_potion_reg = scene.world.createItemEntity(util.vector.topOf(4, 4, 4), (util.vector.of(0, 0, 0)), Item.of('minecraft:lingering_potion', '{Potion:"minecraft:strong_regeneration"}'));
            scene.idle(20)
            scene.idle(0)
            scene.world.removeEntity(lingering_potion_reg)
            scene.idle(5)
            scene.particles
                .fluid(TICK_LENGTH, potionFluid, fluidPos.add([0.5, 0.5, 0.5]))
                .delta(delta)
                .collision(true)
                .density(5);
            scene.idle(80)
        })
})