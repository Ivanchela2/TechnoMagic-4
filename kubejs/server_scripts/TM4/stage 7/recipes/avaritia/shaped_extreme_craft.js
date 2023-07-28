ServerEvents.recipes(e => {
    const recipes = [
        {
            pattern: [
                '  ATI  ',
                ' AABII ',
                'AACDCII',
                'AEFGHEI',
                'AACDCII',
                ' AABII ',
                '  ATI  ',
              ], 
              key: {
                A: Ingredient.of('botania:elementium_ingot'),
                B: Ingredient.of('reliquary:frozen_core'),
                C: Ingredient.of('botania:gaia_ingot'),
                D: Ingredient.of('forbidden_arcanus:deorum_ingot'),
                E: Ingredient.of('botania:gaia_pylon'),
                F: Ingredient.of('botania:purple_piece_of_specific_rune'),
                G: Ingredient.of('arclight:arclight_core'),
                H: Ingredient.of('botania:blue_piece_of_specific_rune'),
                T: Ingredient.of('botania:basic_runic_stone'),
                I: Ingredient.of('botania:manasteel_ingot') 
            },
            output: 'botania:specific_rune_base',
            id: 'specific_rune_base'
        },
        {
            pattern: [
                'ABABABA',
                'BCEIECB',
                'ADHFHDA',
                'BIFGFIB',
                'ADHFHDA',
                'BCEIECB',
                'ABABABA'
            ],
            key: {
                A: Ingredient.of('ad_astra:desh_plate'),
                B: Ingredient.of('chemlib:lutetium_ingot'),
                C: Ingredient.of('ftbic:antimatter_crystal'),
                D: Ingredient.of('ad_astra:protasteel_block'),
                E: Ingredient.of('ftbic:advanced_alloy'),
                F: Ingredient.of('botania:terrasteel_ingot'),
                G: Ingredient.of('gribtweaks:advanced_casing'),
                H: Ingredient.of('botania:dragonstone'),
                I: Ingredient.of('create:brass_casing')
            },
            output: '2x ad_astra:reinforced_covering',
            id: 'reinforced_covering'
        },
        {
            pattern: [
                'ABABABA',
                'BEEDEEB',
                'AEHIHEA',
                'BCFGFCB',
                'AEHIHEA',
                'BEEDEEB',
                'ABABABA',
            ],
            key: {
                A: Ingredient.of('ad_astra:ostrum_plate'),
                B: Ingredient.of('chemlib:palladium_ingot'),
                C: Ingredient.of('botanicadds:dreaming_pool'),
                D: Ingredient.of('botania:elven_spreader'),
                E: Ingredient.of('forbidden_arcanus:stellarite_piece'),
                F: Ingredient.of('ad_astra:reinforced_covering'),
                G: Ingredient.of('botania:gaia_catalyst'),
                H: Ingredient.of('botania:life_essence'),
                I: Ingredient.of('botania:gaia_ingot')
            },
            output: '2x ad_astra:advanced_covering',
            id: 'advanced_covering'
        },
        {
            pattern: [
                'ABCBA',
                'BDEDB',
                'CFGFC',
                'BDEDB',
                'ABCBA'
            ],
            key: {
                A: Ingredient.of('botanicadds:gaiasteel_ingot'),
                B: Ingredient.of('botanicadds:gaiasteel_nugget'),
                C: Ingredient.of('botania:red_petal_block'),
                D: Ingredient.of('twilightforest:carminite'),
                E: Ingredient.of('botania:life_essence'),
                F: Ingredient.of('gribtweaks:chunk_of_etherium'),
                G: Ingredient.of('botania:gaia_spreader'),
            },
            output: 'advancedgrib:advanced_spreader',
            id: 'advanced_spreader'
        }
    ]
    

    recipes.forEach(recipe => {
        e.custom({
            type: 'avaritia:shaped_extreme_craft',
            pattern: recipe.pattern,
            key: recipe.key,
            result: Item.of(recipe.output).toJson()
        }).id(`tm4:avaritia/shaped_extreme_craft/${recipe.id}`)
    })
})