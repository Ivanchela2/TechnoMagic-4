ServerEvents.recipes(event => {
    const prefix = 'gribtweaks:avaritia/shaped_extreme_craft/';
    const recipes = [
        {
            pattern: [ 
                '  A   A  ', 
                ' AAA AAA ', 
                'AA AAA AA', 
                ' AAAAAAA ', 
                '  AAAAA  ', 
                ' AAAAAAA ', 
                'AA AAA AA', 
                ' AAA AAA ', 
                '  A   A  '
            ],
            key: {
                A: Item.of('gribtweaks:infinity_catalyst_pile').toJson()
            },
            output: 'avaritia:infinity_catalyst',
            id: `${prefix}infinity_catalyst_of_pile`
        },
        {
            pattern: [ 
                '     I   ', 
                ' CCC1ICC ', 
                ' C8CCI2C ', 
                'IIIIIIIII', 
                ' 7CCCIC3 ', 
                ' CCCCICC ', 
                ' C6CCI4C ', 
                ' CCC5ICC ',
                '     I   ' 
            ],
            key: {
                C: Item.of('gribtweaks:component_base').toJson(),
                I: Item.of('avaritia:infinity_ingot').toJson(),
                1: Item.of('gribtweaks:advanced_ultimate_component').toJson(),
                2: Item.of('gribtweaks:advanced_oblivion_component').toJson(),
                3: Item.of('gribtweaks:advanced_antimatter_component').toJson(),
                4: Item.of('gribtweaks:sculk_advanced_component').toJson(),
                5: Item.of('gribtweaks:advanced_death_component').toJson(),
                6: Item.of('gribtweaks:advanced_anxiety_component').toJson(),
                7: Item.of('gribtweaks:advanced_admiration_component').toJson(),
                8: Item.of('gribtweaks:advanced_diamond_component').toJson()
            },
            output: 'gribtweaks:infinity_component',
            id: `${prefix}infinity_component`
        },
        {
            pattern: [ 
                '     G   ', 
                ' CCCCGCC ', 
                ' CCCCGCC ', 
                'GGGGGGCC ', 
                ' CUGIGUC ', 
                ' CCGGGGGG', 
                ' CCGCCCC ', 
                ' CCGCCCC ', 
                '   G     '
            ],
            key: {
                C: Item.of('gribtweaks:component_base').toJson(),
                G: Item.of('avaritia:infinity_ingot').toJson(),
                I: Item.of('gribtweaks:infinity_component').toJson(),
                U: Item.of('gribtweaks:gribony_component').toJson()
            },
            output: 'gribtweaks:advanced_infinity_component',
            id: `${prefix}advanced_infinity_component`
        },
        {
            pattern: [ 
                '     S   ', 
                ' CCCCGCC ', 
                ' CCCCGCC ', 
                'SGGGGGGGS', 
                ' CCCCGCC ', 
                ' CCCCGCC ', 
                ' CCCCGCC ', 
                ' CCCCGCC ', 
                '     S   '
            ],
            key: {
                C: Item.of('gribtweaks:ultimate_component_base').toJson(),
                G: Item.of('chemlib:gribony_ingot').toJson(),
                S: Item.of('gribtweaks:gribony_scrap').toJson()
            },
            output: 'gribtweaks:gribony_component',
            id: `${prefix}gribony_component`
        },
        {
            pattern: [ 
                '     S   ', 
                ' CCCCGCC ', 
                ' CCCAGCC ', 
                'SGGGGGCC ', 
                ' CUGIGUC ', 
                ' CCGGGGGS', 
                ' CCGACCC ', 
                ' CCGCCCC ', 
                '   S     '
            ],
            key: {
                A: Item.of('gribtweaks:gribony_component').toJson(),
                C: Item.of('gribtweaks:ultimate_component_base').toJson(),
                G: Item.of('chemlib:gribony_ingot').toJson(),
                I: Item.of('gribtweaks:advanced_infinity_component').toJson(),
                U: Item.of('gribtweaks:advanced_ultimate_component').toJson(),
                S: Item.of('gribtweaks:gribony_scrap').toJson()
            },
            output: 'gribtweaks:advanced_gribony_component',
            id: `${prefix}advanced_gribony_component`
        },
        {
            pattern: [ 
                'CBIBC',
                'BIBIB',
                'IBLBI',
                'BIBIB',
                'CBIBC'
            ],
            key: {
                B: Item.of('gribtweaks:block_infinity_catalyst').toJson(),
                C: Item.of('gribtweaks:advanced_infinity_component').toJson(),
                I: Item.of('avaritia:infinity_ingot').toJson(),
                L: Item.of('gribtweaks:infinity_clock').toJson()
            },
            output: 'gribtweaks:true_infinity_block',
            id: `${prefix}true_infinity_block`
        },
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
