ServerEvents.recipes(event => {
    const output = [
        'create:andesite_alloy',
        'create:shaft',
        'create:water_wheel',
        'create:nozzle',
        'create:goggles',
        'create:empty_blaze_burner',
        'create:basin',
        'create:chute',
        'create:belt_connector',
        'create:precision_mechanism',
        'createbigcannons:cast_iron_ingot',
    ]


    output.forEach(recipe => {
        event.remove({output: recipe})
    })
    
    const id = [
        'create:crafting/kinetics/cogwheel',
        'create:crafting/kinetics/lagre_cogwheelfrom_little',
        'create:crafting/kinetics/lagre_cogwheel',
        'extendedgears:crafting/crafting/from_small/common/large_shaftless_spruce_cogwheel',
        'extendedgears:crafting/crafting/from_small/common/large_shaftless_dark_oak_cogwheel',
        'extendedgears:crafting/crafting/from_small/common/large_shaftless_oak_cogwheel',
        'extendedgears:crafting/crafting/from_small/common/large_shaftless_birch_cogwheel',
        'extendedgears:crafting/crafting/from_small/common/large_shaftless_jungle_cogwheel',
        'extendedgears:crafting/crafting/from_small/common/large_shaftless_acacia_cogwheel',
        'extendedgears:crafting/crafting/from_small/common/large_shaftless_warped_cogwheel',
        'extendedgears:crafting/crafting/from_small/common/large_shaftless_crimson_cogwheel',
        'extendedgears:crafting/crafting/from_small/common/large_shaftless_mangrove_cogwheel',
        'extendedgears:crafting/cogwheel',
        'extendedgears:crafting/large_cogwheel'
    ]


    id.forEach(recipe => {
        event.remove({output: recipe})
    })
})