StartupEvents.registry('block', event => {
    const blocks = [
        { render: 'solid', id: 'gribtweaks:block_infinity_catalyst', alias: '§cBlock Infinity Catalyst', material: 'metal', hardness: 30, light: 1.0 },
        { render: 'solid', id: 'gribtweaks:infinity_heavy_cogwheel', alias: '§dInfinity Heavy Cogwheel', material: 'metal', hardness: 20, light: 0.6 },
        { render: 'solid', id: 'gribtweaks:compressed_knightmetal_block', alias: 'Compressed Knightmetal Block', material: 'metal', hardness: 15, light: 0.1 },
        { render: 'solid', id: 'gribtweaks:compressed_fiery_block', alias: 'Compressed Fiery Block', material: 'metal', hardness: 10, light: 0.1 }
    ];

    blocks.forEach((block) => {
        event.create(block.id)
            .renderType(block.render)
            .displayName(block.alias)
            .soundType(block.material)
            .hardness(block.hardness)
            .lightLevel(block.light)
            .defaultTranslucent();
    });
});
