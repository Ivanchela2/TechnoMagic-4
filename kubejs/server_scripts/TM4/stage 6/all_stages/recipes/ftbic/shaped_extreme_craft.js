ServerEvents.recipes(event => {
    const prefix = 'gribtweaks:shaped_extreme_craft/';
    const recipes = [
        {
            pattern: [ 
                'NWWKKKWWN', 
                'WCPCKCPCW', 
                'WPELaLEPW', 
                'KCLbScLCK', 
                'KKMSHSMKK', 
                'KCLdSeLCK', 
                'WPELfLEPW', 
                'WCPCKCPCW', 
                'NWWKKKWWN'           
            ],
            key: {
                a: Item.of('create:andesite_casing').toJson(),
                b: Item.of('ftbic:advanced_machine_block').toJson(),
                c: Item.of('create:copper_casing').toJson(),
                d: Item.of('create:brass_casing').toJson(),
                e: Item.of('ftbic:machine_block').toJson(),
                f: Item.of('create:railway_casing').toJson(),
                C: Item.of('gribtweaks:cable_coil').toJson(),
                E: Item.of('gribtweaks:ultimate_upgraded_netherite_eye').toJson(),
                H: Item.of('deeperdarker:heart_of_the_deep').toJson(),
                K: Item.of('gribtweaks:dense_carbon_plate').toJson(),
                L: Item.of('gribtweaks:oblivion_liquid').toJson(),
                M: Item.of('gribtweaks:mechanical_eye').toJson(),
                N: Item.of('minecraft:netherite_block').toJson(),
                P: Item.of('gribtweaks:super_alloy_processor').toJson(),
                S: Item.of('gribtweaks:sculk_advanced_component').toJson(),
                W: Item.of('twilightforest:ironwood_block').toJson(),
            },
            output: 'gribtweaks:advanced_casing',
            id: `${prefix}advanced_casing`
        },
        {
            pattern: [ 
                'CPIPC',           
                'PIDIP',           
                'IDPDI',  
                'PIDIP',   
                'CPIPC'        
            ],
            key: {
                C: Item.of('gribtweaks:advanced_oblivion_component').toJson(),
                D: Item.of('gribtweaks:dense_oblivion_plate').toJson(),
                I: Item.of('gribtweaks:oblivion_ingot').toJson(),
                P: Item.of('gribtweaks:oblivion_powder').toJson(),
            },
            output: 'gribtweaks:oblivion_block',
            id: `${prefix}oblivion_block`
        },
        {
            pattern: [ 
                'CPIPC',           
                'PIDIP',           
                'IDPDI',  
                'PIDIP',   
                'CPIPC'        
            ],
            key: {
                C: Item.of('gribtweaks:advanced_antimatter_component').toJson(),
                D: Item.of('gribtweaks:dense_antimatter_plate').toJson(),
                I: Item.of('gribtweaks:antimatter_ingot').toJson(),
                P: Item.of('gribtweaks:polished_antimatter_crystal').toJson(),
            },
            output: 'gribtweaks:void_block',
            id: `${prefix}void_block`
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
