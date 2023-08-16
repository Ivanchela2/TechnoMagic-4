BlockEvents.rightClicked(event => {
    if(event.block.id == "minecraft:stone" && event.item == "gribtweaks:burner") {
        if(event.player.getMainHandItem() == event.item) {
            event.player.setMainHandItem("air")
        } else {
            event.player.setOffHandItem("air")
        }
        event.block.set("minecraft:lava")
        event.server.runCommandSilent(`particle minecraft:smoke ${event.block.getPos().getX()} ${event.block.getPos().getY() + 1} ${event.block.getPos().getZ()} 0.1 0.1 0.1 0.03 20 normal @a`)
    }
})