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
                B: Item.of('biggerreactors:cyanite_block').toJson(),
                C: Item.of('biggerreactors:reactor_casing').toJson(),
                E: Item.of('minecraft:redstone_block').toJson(),
                F: Item.of('create:fluid_tank').toJson(),
                H: Item.of('ftbic:antimatter_crystal').toJson(),
                M: Item.of('ftbic:large_coolant_cell').toJson(),
                R: Item.of('biggerreactors:reactor_fuel_rod').toJson(),
                S: Item.of('gribtweaks:super_alloy_processor').toJson(),
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
                A: Item.of('gribtweaks:advanced_casing').toJson(),
                C: Item.of('biggerreactors:reactor_casing').toJson(),
                E: Item.of('enigmaticlegacy:etherium_block').toJson(),
                G: Item.of('biggerreactors:reactor_glass').toJson(),
                M: Item.of('ftbic:nuclear_reactor').toJson(),
                T: Item.of('ftbic:ev_transformer').toJson(),
                U: Item.of('ftbic:transformer_upgrade').toJson(),
            },
            output: 'biggerreactors:reactor_terminal',
            id: `${prefix}reactor_terminal`
        },
        {
            pattern: [
                'CSC',
                'CRC',
                'GRG',
                'CRC',
                'CIC'
            ],
            key: {
                C: Item.of('biggerreactors:reactor_casing').toJson(),
                G: Item.of('biggerreactors:graphite_block').toJson(),
                I: Item.of('gribtweaks:dense_carbon_plate').toJson(),
                R: Item.of('minecraft:redstone_block').toJson(),
                S: Item.of('minecraft:redstone_block').toJson(),
            },
            output: 'biggerreactors:reactor_control_rod',
            id: `${prefix}reactor_control_rod`
        }
    ];

    recipes.forEach((recipe) => {
        let constructed_recipe = {
            type: 'avaritia:shaped_extreme_craft',
            pattern: recipe.pattern,
            key: recipe.key,
            result: Ingredient.of(recipe.output).toJson()
        };
        event.custom(constructed_recipe).id(recipe.id);
    });
});
