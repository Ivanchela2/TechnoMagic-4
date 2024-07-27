ServerEvents.recipes(event => {
    const prefix = 'gribtweaks:enigmaticlegacy/shaped_extreme_craft/';
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
        },
        {
            pattern: [
                'AWTUIOYEA',
                'WZBMwMqXE',
                'YNs3d3ayT',
                'Lr32123tF',
                'Kwj1g1hwG',
                'Jr32123tH',
                'Tio3f3pNY',
                'QVeuwuBCR',
                'AQYPSDTRA'
                
            ],
            key: {
                'A': Item.of('enigmaticlegacy:cosmic_heart').toJson(),
                'Q': Item.of('enigmaticlegacy:mining_charm').toJson(),
                'W': Item.of('enigmaticlegacy:angel_blessing').toJson(),
                'E': Item.of('enigmaticlegacy:ocean_stone').toJson(),
                'R': Item.of('enigmaticlegacy:monster_charm').toJson(),
                'T': Item.of('enigmaticlegacy:earth_heart').toJson(),
                'Y': Item.of('enigmaticlegacy:twisted_heart').toJson(),
                'U': Item.of('enigmaticlegacy:magnet_ring').toJson(),
                'I': Item.of('enigmaticlegacy:extradimensional_eye').toJson(),
                'O': Item.of('enigmaticlegacy:super_magnet_ring').toJson(),
                'P': Item.of('enigmaticlegacy:iron_ring').toJson(),
                'S': Item.of('enigmaticlegacy:ender_ring').toJson(),
                'D': Item.of('enigmaticlegacy:golden_ring').toJson(),
                'F': Item.of('enigmaticlegacy:fabulous_scroll').toJson(),
                'G': Item.of('enigmaticlegacy:cursed_scroll').toJson(),
                'H': Item.of('enigmaticlegacy:heaven_scroll').toJson(),
                'J': Item.of('enigmaticlegacy:escape_scroll').toJson(),
                'K': Item.of('enigmaticlegacy:avarice_scroll').toJson(),
                'L': Item.of('enigmaticlegacy:xp_scroll').toJson(),
                'Z': Item.of('enigmaticlegacy:unholy_grail').toJson(),
                'X': Item.of('enigmaticlegacy:mega_sponge').toJson(),
                'C': Item.of('enigmaticlegacy:twisted_mirror').toJson(),
                'V': Item.of('enigmaticlegacy:infernal_shield').toJson(),
                'B': Item.of('enigmaticlegacy:golem_heart').toJson(),
                'N': Item.of('enigmaticlegacy:eye_of_nebula').toJson(),
                'M': Item.of('enigmaticlegacy:infinimeal').toJson(),
                'q': Item.of('enigmaticlegacy:void_pearl').toJson(),
                'w': Item.of('enigmaticlegacy:insignia').toJson(),
                'e': Item.of('enigmaticlegacy:berserk_charm').toJson(),
                'r': Item.of('enigmaticlegacy:cursed_stone').toJson(),
                't': Item.of('enigmaticlegacy:enchanter_pearl').toJson(),
                'y': Item.of('enigmaticlegacy:blazing_core').toJson(),
                'u': Item.of('enigmaticlegacy:enigmatic_elytra').toJson(),
                'i': Item.of('enigmaticlegacy:void_stone').toJson(),
                'o': Item.of('enigmaticlegacy:the_cube').toJson(),
                'p': Item.of('enigmaticlegacy:enigmatic_eye').toJson(),
                'a': Item.of('enigmaticlegacy:the_twist').toJson(),
                's': Item.of('enigmaticlegacy:loot_generator').toJson(),
                'd': Item.of('enigmaticlegacy:eldritch_amulet').toJson(),
                'f': Item.of('enigmaticlegacy:ascension_amulet').toJson(),
                'g': Item.of('enigmaticlegacy:the_infinitum').toJson(),
                'h': Item.of('enigmaticlegacy:cursed_ring').toJson(),
                'j': Item.of('enigmaticlegacy:desolation_ring').toJson(),
                '1': Item.of('enigmaticlegacy:abyssal_heart').toJson(),
                '2': Item.of('enigmaticlegacy:guardian_heart').toJson(),
                '3': Item.of('enigmaticlegacy:forbidden_fruit').toJson()
    
            },
             result: 'enigmaticlegacy:enigmatic_item',
             id: `${prefix}enigmatic_item`
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
