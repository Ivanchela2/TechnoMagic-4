Ponder.registry((event) => {
    event
        .create([
            'productivebees:powered_centrifuge',
            '#forge:honeycombs'
        ])
        .scene("sot_farm", "Sot Farm", "sot_farm", (scene, util) => {
                //scene.showStructure()
                scene.scaleSceneView(.7);
                scene.rotateCameraY(-60);
                scene.addKeyframe()
                scene.idle(0)
                scene.world.showSection(util.select.fromTo(8, 0, 0, 0, 0, 8), Facing.DOWN)
                scene.overlay.showText(20)
                    .colored(PonderPalette.RED)
                    .text("One of the options for building a honeycomb farm")
                    .placeNearTarget();
                scene.idle(20)
                scene.addKeyframe()
                scene.world.showSection(util.select.fromTo(3, 1, 8, 8, 1, 0), Facing.DOWN)
                scene.idle(20)
                scene.idle(0)
                scene.overlay.showText(60)
                    .colored(PonderPalette.RED)
                    .text("ATTENTION: CONNECT EVERYTHING AS SHOWN IN THE SCENE FOR CORRECT OPERATION!")
                    .placeNearTarget();
                scene.idle(60)
                scene.addKeyframe()
                scene.idle(0)
                scene.world.showSection(util.select.fromTo(3, 2, 8, 8, 2, 0), Facing.DOWN)
                scene.idle(50)
                scene.addKeyframe()
                scene.idle(0)
                scene.world.showSection(util.select.fromTo(3, 3, 8, 8, 3, 0), Facing.DOWN)
                scene.idle(50)
                scene.addKeyframe()
                scene.idle(0)
                scene.world.showSection(util.select.fromTo(3, 4, 8, 8, 4, 0), Facing.DOWN)
                scene.idle(50)
                scene.addKeyframe()
                scene.idle(0)
                scene.world.showSection(util.select.fromTo(3, 5, 8, 8, 5, 0), Facing.DOWN)
                scene.idle(50)
                scene.addKeyframe()
                scene.idle(0)
                scene.world.showSection(util.select.fromTo(3, 6, 8, 8, 6, 0), Facing.DOWN)
                scene.idle(50)
                scene.addKeyframe()
                scene.idle(0)
                scene.rotateCameraY(-100);
                scene.idle(40)
                scene.addKeyframe()
                scene.idle(0)
                scene.world.showSection(util.select.fromTo(3, 7, 8, 8, 7, 0), Facing.DOWN)
                scene.idle(50)
                scene.addKeyframe()
                scene.idle(0)
                scene.rotateCameraY(-140);
                scene.idle(40)
                scene.addKeyframe()
                scene.idle(0)
                scene.rotateCameraY(-150);
                scene.idle(40)
                scene.addKeyframe()
                scene.idle(0)
                scene
                    .text(40, "Place the honeycomb in the black chest", [5, 7, 4])
                    .colored(PonderPalette.BLACK)
                    .placeNearTarget()
                scene.idle(40)
                scene.idle(0)
                scene
                    .text(40, "There will be honey", [6, 7, 5])
                    .colored(PonderPalette.OUTPUT)
                    .placeNearTarget()
                    .attachKeyFrame()
                scene.idle(40)
                scene.idle(0)
                scene
                    .text(40, "The red box will contain the result", [3, 1, 4])
                    .colored(PonderPalette.RED)
                    .placeNearTarget()
                    .attachKeyFrame()
                scene.idle(40)

            }
        );
})
