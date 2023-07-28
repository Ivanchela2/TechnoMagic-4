StartupEvents.registry('block', event => {
    const blocks = [
        { id: 'gribtweaks:block_infinity_catalyst', alias: '§cBlock Infinity Catalyst', material: 'metal', hardness: 30, light: 1.0 },
        { id: 'gribtweaks:infinity_heavy_cogwheel', alias: '§dInfinity Heavy Cogwheel', material: 'metal', hardness: 20, light: 0.6, tag: 'extendedgears:cogwheel', tag: 'extendedgears:metal_cogwheel', tag: 'extendedgears:small_cogwheel' },
        { id: 'gribtweaks:compressed_knightmetal_block', alias: 'Compressed Knightmetal Block', material: 'metal', hardness: 15, light: 0.1 },
        { id: 'gribtweaks:compressed_fiery_block', alias: 'Compressed Fiery Block', material: 'metal', hardness: 10, light: 0.1 }
    ];

    blocks.forEach((block) => {
        event.create(block.id)
            .renderType('solid')
            .displayName(block.alias)
            .material(block.material)
            .hardness(block.hardness)
            .lightLevel(block.light)
            .tagBlock(block.tag);
    });
});
