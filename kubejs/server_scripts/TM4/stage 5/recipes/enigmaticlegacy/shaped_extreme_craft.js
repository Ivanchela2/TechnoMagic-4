ServerEvents.recipes(event => {
    const prefix = 'tm4:avaritia/shaped_extreme_craft/';
    const recipes = [
        {
            pattern: [
                'ABBCBBA',
                'BDBCBDB',
                'BBEDEBB',
                'CCDFDCC',
                'BBEDEBB',
                'BDBCBDB',
                'ABBCBBA'
            ],
            key: {
                A:  Item.of( 'enigmaticlegacy:golem_heart').toJson(),
                B:  Item.of( 'enigmaticlegacy:etherium_ingot').toJson(),
                C:  Item.of( 'twilightforest:knightmetal_ring').toJson(),
                D:  Item.of( 'enigmaticlegacy:evil_ingot').toJson(),
                E:  Item.of( 'enigmaticlegacy:redemption_potion').toJson(),
                F:  Item.of( 'enigmaticlegacy:eldritch_amulet').toJson()
            },
            result: 'enigmaticlegacy:ascension_amulet',
            id: `${prefix}ascension_amulet`
        },
        {
            pattern: [
                'AAAAA',
                'A   A',
                ' A A ',
	            '  B  '
            ],
            key: {
                A:  Item.of( 'twilightforest:knightmetal_ring').toJson(),
                B:  Item.of( 'enigmaticlegacy:abyssal_heart').toJson()
            },
            result: 'enigmaticlegacy:eldritch_amulet',
            id: `${prefix}eldritch_amulet`
        },
        {
            pattern: [
                'AAABAAA',
                'AABCBAA',
                'ABCDCBA',
                'BCDEDCB',
                'ABCDCBA',
                'AABCBAA',
                'AAABAAA'
                
            ],
            key: {
                A:  Item.of( 'enigmaticlegacy:astral_dust').toJson(),
                B:  Item.of( 'enigmaticlegacy:earth_heart').toJson(),
                C:  Item.of( 'enigmaticlegacy:astral_fruit').toJson(),
                D:  Item.of( 'enigmaticlegacy:mining_charm').toJson(),
                E:  Item.of( 'enigmaticlegacy:twisted_mirror').toJson()
            },
            result: 'enigmaticlegacy:the_cube',
            id: `${prefix}the_cube`
        },
        {
            pattern: [
                'ABABABABA',
                'BCDEDEDCB',
                'ADDFGFDDA',
                'BEFFTFFEB',
                'ACGTYTGCA',
                'BEFFTFFEB',
                'ADDFGFDDA',
                'BCDEDEDCB',
                'ABABABABA'
                
            ],
            key: {
                A:  Item.of( 'ftbic:antimatter_crystal').toJson(),
                B:  Item.of( 'enigmaticlegacy:etherium_ingot').toJson(),
                C:  Item.of( 'enigmaticlegacy:evil_ingot').toJson(),
                D:  Item.of( 'forbidden_arcanus:golden_dragon_scale').toJson(),
                E:  Item.of( 'forbidden_arcanus:purifying_soap').toJson(),
                F:  Item.of( 'enigmaticlegacy:astral_fruit').toJson(),
                G:  Item.of( 'minecraft:ender_chest').toJson(),
                T:  Item.of( 'enigmaticlegacy:astral_potato').toJson(),
                Y:  Item.of( 'deeperdarker:heart_of_the_deep').toJson()
            },
            result: 'enigmaticlegacy:loot_generator',
            id: `${prefix}loot_generator`
        }
    ];

    recipes.forEach((recipe) => {
        let constructed_recipe = {
            type: 'avaritia:shaped_extreme_craft',
            pattern: recipe.pattern,
            key: recipe.key,
            result: Ingredient.of(recipe.result).toJson()
        };
        event.custom(constructed_recipe).id(recipe.id);
    });
});
