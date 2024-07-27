ServerEvents.recipes(event => {
    const prefix = 'gribtweaks:biggerreactors/shaped_extreme_craft/';
    const recipes = [
        {
            pattern: [
                'CCSCC',
                'CFRBC',
                'EFMBE',
                'CFRBC',
                'CCHCC'
            ],
            key: {
                B: Item.of('biggerreactors:cyanite_block'),
                C: Item.of('biggerreactors:reactor_casing'),
                E: Item.of('minecraft:redstone_block'),
                F: Item.of('create:fluid_tank'),
                H: Item.of('ftbic:antimatter_crystal'),
                M: Item.of('ftbic:large_coolant_cell'),
                R: Item.of('biggerreactors:reactor_fuel_rod'),
                S: Item.of('gribtweaks:super_alloy_processor'),
            },
            output: 'biggerreactors:cyanite_reprocessor',
            id: `${prefix}cyanite_reprocessor`
        },
        {
            pattern: [
                'CCUCC',
                'CTMEC',
                'UGAGU',
                'CEMTC',
                'CCUCC'
            ],
            key: {
                A: Item.of('gribtweaks:advanced_casing'),
                C: Item.of('biggerreactors:reactor_casing'),
                E: Item.of('enigmaticlegacy:etherium_block'),
                G: Item.of('biggerreactors:reactor_glass'),
                M: Item.of('ftbic:nuclear_reactor'),
                T: Item.of('ftbic:ev_battery_box'),
                U: Item.of('ftbic:transformer_upgrade'),
            },
            output: 'biggerreactors:reactor_terminal',
            id: `${prefix}reactor_terminal`
        },
        {
            pattern: [
                'CRC',
                'CRC',
                'GRG',
                'CRC',
                'CIC'
            ],
            key: {
                C: Item.of('biggerreactors:reactor_casing'),
                G: Item.of('biggerreactors:graphite_block'),
                I: Item.of('gribtweaks:dense_carbon_plate'),
                R: Item.of('minecraft:redstone_block')
            },
            output: 'biggerreactors:reactor_control_rod',
            id: `${prefix}reactor_control_rod`
        },
        {
            pattern: [
                'ABCBA',
                'BDEDB',
                'FEGEF',
                'BDEDB',
                'ABCBA'
            ],
            key: {
                A: Ingredient.of('forbidden_arcanus:deorum_block'),
                B: Ingredient.of('minecraft:diamond_block'),
                C: Ingredient.of('chemlib:beryllium_metal_block'),
                D: Ingredient.of('spirit:soul_steel_block'),
                E: Ingredient.of('biggerreactors:blutonium_block'),
                F: Ingredient.of('arclight:bloodstone_block'),
                G: Ingredient.of('forbidden_arcanus:dark_nether_star')
            },
            output: '2x biggerreactors:ludicrite_block',
            id: `${prefix}ludicrite_block`
        }
    ];

    recipes.forEach((recipe) => {
        let constructed_recipe = {
            type: 'avaritia:shaped_extreme_craft',
            pattern: recipe.pattern,
            key: recipe.key,
            result: Item.of(recipe.output).toJson()
        };
        event.custom(constructed_recipe).id(recipe.id);
    });
});
