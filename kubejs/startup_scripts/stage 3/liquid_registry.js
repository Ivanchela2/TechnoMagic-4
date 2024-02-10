StartupEvents.registry('fluid', e => {
    e.create('hexerei:life_liquid_essence')
    .displayName('Жидкая жизненная эссенция')
    .thickTexture(0x8fce00)
    .bucketColor(0x8fce00)
    .flowingTexture('minecraft:block/water_flow')
    .stillTexture('minecraft:block/water_still')
})