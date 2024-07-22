
Ponder.registry((event) => {
    event
        .create('forbidden_arcanus:hephaestus_forge'
        )
        .scene("gribtweaks:hephaestus_forge", "Кузница Гефеста", "hephaestus_forge", (scene, util) => {
                scene.addKeyframe()
                scene.idle(0);
                scene.world.showSection(util.select.fromTo(0, 1, 0, 8, 1, 8), Facing.SOUTH)
                scene.idle(30);
                scene.addKeyframe()
                scene.idle(0);
                scene.world.showSection(util.grid.at(4, 2, 4), Facing.SOUTH)
                scene
                    .text(40, "Разместите стол кузнеца", [4, 3, 4])
                    .colored(PonderPalette.RED)
                    .placeNearTarget()
                scene.idle(60);
                scene.addKeyframe()
                scene.idle(0);
                scene
                    .showControls(40, [4, 3, 4], "down")
                    .rightClick()
                    .withItem("forbidden_arcanus:mundabitur_dust")
                    .whileSneaking()
                scene.idle(60);
                scene.idle(0);
                scene.world.replaceBlocks(util.grid.at(4, 2, 4), 'forbidden_arcanus:hephaestus_forge', true);
                scene.idle(40);
                scene.addKeyframe()
                scene.idle(0);
                scene.overlay.showText(40).text("Разместите пьедесталы").independent(20)
                    .colored(PonderPalette.GREEN)
                scene.world.showSection(util.select.fromTo(1, 2, 1, 8, 2, 3), Facing.SOUTH)
                scene.world.showSection(util.select.fromTo(7, 2, 7, 1, 2, 6), Facing.SOUTH)
                scene.idle(60)
                scene.addKeyframe()
                scene.idle(0);
                scene
                    .text(60, "Если Вы хотите создавать мистические кристаллы, постройте это:", [6, 2, 4])
                    .colored(PonderPalette.RED)
                    .placeNearTarget()
                scene.idle(80);
                scene.addKeyframe()
                scene.idle(0);
                scene.world.showSection(util.select.fromTo(7, 2, 4, 7, 4, 4), Facing.SOUTH)
                scene.world.showSection(util.select.fromTo(1, 2, 4, 1, 4, 4), Facing.SOUTH)
                scene.idle(30);
                scene.addKeyframe()
                scene.idle(0);
                scene
                    .showControls(40, [7, 2, 4], "down")
                    .rightClick()
                    .withItem("forbidden_arcanus:mundabitur_dust")
                    .whileSneaking()
                scene.idle(60);
                scene.idle(0);
                scene.world.destroyBlock(util.grid.at(1, 3, 4))
                scene.world.destroyBlock(util.grid.at(1, 4, 4))
                scene.world.destroyBlock(util.grid.at(7, 4, 4))
                scene.world.destroyBlock(util.grid.at(7, 3, 4))
                scene.world.destroyBlock(util.grid.at(7, 2, 4))
                scene.world.destroyBlock(util.grid.at(1, 2, 4))
                scene.world.setBlock([1, 2, 4], 'forbidden_arcanus:arcane_crystal_obelisk', true);
                scene.world.setBlock([7, 2, 4], 'forbidden_arcanus:arcane_crystal_obelisk', true);
                scene.idle(60);
                scene.addKeyframe()
            }
            );
    })