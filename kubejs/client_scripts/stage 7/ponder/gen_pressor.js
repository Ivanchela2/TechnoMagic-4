
Ponder.registry((event) => {
    event
        .create('productivebees:gene_bottle'
        )
        .scene("gribtweaks:gen_pressor", "Пчелинные гены", "gen_pressor",
            (scene, util) => {
                //scene.showStructure()
                scene.rotateCameraY(-145);
                scene.idle(0)
                scene.world.showSection(util.select.fromTo(0, 1, 0, 4, 0, 4), Facing.DOWN)
                scene.idle(40)
                scene.idle(0)
                scene
                    .text(60, "Поместите буттылки в Разливочную машину", [2, 1, 1])
                    .colored(PonderPalette.RED)
                    .placeNearTarget()
                scene.idle(40)
                scene.addKeyframe()
                scene.world.showSection(util.select.fromTo(3, 3, 0, 1, 2, 3), Facing.DOWN)
                scene.addKeyframe()
                scene.idle(0)
                const centerBlockPos = util.grid.at(2, 1, 1);
                const centerTop = util.vector.topOf(centerBlockPos);
                const entity = scene.world.createEntity("productivebees:collector_bee", centerTop);
                scene.idle(60)
                scene.idle(0)
                scene
                    .text(40, "Над ней пчелу", [2, 1, 1])
                    .colored(PonderPalette.RED)
                    .placeNearTarget()
                scene.addKeyframe()
                scene.idle(60)
                scene.idle(0)
                scene.rotateCameraY(125);
                scene.idle(0)
                scene
                    .text(60, "Активируйте поршень, чтобы убить пчелу и получить её гены...", [3, 3, 2])
                    .colored(PonderPalette.RED)
                    .placeNearTarget()
                scene.idle(80)
                scene.addKeyframe()

                scene.idle(40)
                scene.world.removeEntity(entity);
                scene.particles.simple(2, "angry_villager", [2,2,1]).scale(1.5).motion([2,1,1]).area([2,2,1]).density(1)
                var gen = scene.world.createItemEntity(util.vector.topOf(2,2,1), (util.vector.of(0, 0, 0)),'productivebees:gene_bottle');
                scene.addKeyframe()
            }
            );
    })