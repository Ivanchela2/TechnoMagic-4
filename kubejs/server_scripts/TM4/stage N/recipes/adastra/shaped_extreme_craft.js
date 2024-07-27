ServerEvents.recipes(event => {
    const prefix = 'gribtweaks:ad_astra/shaped_extreme_craft/';
    const recipes = [
        {
            pattern: [
                '  S  ',
                ' SNS ',
                'SSCSS',
                'SS SS',
                'S   S'
            ],
            key: {
                S: Ingredient.of('#forge:storage_blocks/steel'),
                N: Item.of('minecraft:netherite_block'),
                C: Item.of('arclight:sculk_core')
            },
            output: 'ad_astra:rocket_fin',
            id: `${prefix}rocket_fin`
        },
        {
            pattern: [
                '  S  ',
                ' SNS ',
                ' SNS ',
                ' SNS ',
                'SPCPS',
                'SPNPS',
                ' SSS '
            ],
            key: {
                S: Ingredient.of('#forge:storage_blocks/steel'),
                N: Item.of('minecraft:netherite_block'),
                C: Item.of('arclight:sculk_core'),
                P: Item.of('gribtweaks:dense_spectral_plate')
            },
            output: 'ad_astra:rocket_nose_cone',
            id: `${prefix}rocket_nose_cone`
        },
        {
            pattern: [
                '    SSS',
                '   STTS',
                'HSSSTSS',
                ' SLLLS ',
                'SSTSS  ',
                'STTS   ',
                'SSS    '
            ],
            key: {
                S: Ingredient.of('#forge:storage_blocks/steel'),
                H: Item.of('create:copper_valve_handle'),
                L: Item.of('gribtweaks:reinforced_ludicrite_block'),
                T: Item.of('create_sa:large_fueling_tank')
            },
            output: 'ad_astra:steel_tank',
            id: `${prefix}steel_tank`
        },
        {
            pattern: [
                'SISIS',
                'ILSLI',
                'SSISS',
                'ILSLI',
                'SISIS'
            ],
            key: {
                S: Ingredient.of('#forge:storage_blocks/steel'),
                I: Item.of('gribtweaks:photoniy_ingot'),
                L: Item.of('gribtweaks:reinforced_ludicrite_block')
            },
            output: 'ad_astra:engine_frame',
            id: `${prefix}engine_frame`
        },
        {
            pattern: [
                ' SSSSS ',
                'SLSLSLS',
                'SSSLSSS',
                'SSSFSSS',
                ' SSLSS ',
                'SSSLSSS',
                'SRRRRRS'
            ],
            key: {
                S: Ingredient.of('#forge:storage_blocks/steel'),
                F: Item.of('ad_astra:engine_frame'),
                L: Item.of('gribtweaks:reinforced_ludicrite_block'),
                R: Item.of('create_enchantment_industry:experience_rotor')
            },
            output: 'ad_astra:steel_engine',
            id: `${prefix}steel_engine`
        },
        {
            pattern: [
                'IIIIIII',
                'IOSOSOI',
                'ISSFSSI',
                'IOFFFOI',
                'ISSFSSI',
                'IOSOSOI',
                'IIIIIII'
            ],
            key: {
                I: Item.of('gribtweaks:photoniy_ingot'),
                O: Item.of('forbidden_arcanus:dark_rune_block'),
                S: Ingredient.of('#forge:storage_blocks/steel'),
                F: Item.of('twilightforest:fiery_block')
            },
            output: 'ad_astra:launch_pad',
            id: `${prefix}launch_pad`
        },
        {
            pattern: [
                'PPIIIPP',
                'PASASAP',
                'ISPMPSI',
                'IAMRMAI',
                'ISPMPSI',
                'PASASAP',
                'PPIIIPP'
            ],
            key: {
                P: Item.of('gribtweaks:protasteel_block'),
                A: Item.of('gribtweaks:super_alloy'),
                I: Item.of('gribtweaks:iridium_ore'),
                M: Item.of('gribtweaks:magical_steel'),
                R: Item.of('gribtweaks:void_rune'),
                S: Ingredient.of('#forge:storage_blocks/steel')
            },
            output: 'gribtweaks:rocket_covering',
            id: `${prefix}rocket_covering`
        }, 
        {
            pattern: [
                '    F    ',
                ' F SDS F ',
                'DDSSSSSDD',
                'SSVSCSVSS',
                ' SMDTDMS ',
                '  SDSDS  ',
                '  SCRCS  ',
                '   DSD   ',
                '   DSD   '
            ],
            key: {
                C: Item.of('ae2:molecular_assembler'),
                D: Item.of('forbidden_arcanus:deorum_block'),
                F: Item.of('gribtweaks:super_alloy'),
                M: Item.of('arclight:moonlight_core'),
                R: Item.of('naturesaura:rf_converter'),
                S: Ingredient.of('#forge:storage_blocks/steel'),
                T: Item.of('gribtweaks:quadruple_compressed_crafting_table'),
                V: Item.of('gribtweaks:ultimate_upgraded_netherite_eye')
            },
            output: 'ad_astra:nasa_workbench',
            id: `${prefix}nasa_workbench`
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
                D: Ingredient.of('gribtweaks:protasteel_block'),
                E: Ingredient.of('ftbic:advanced_alloy'),
                F: Ingredient.of('botania:terrasteel_ingot'),
                G: Ingredient.of('gribtweaks:rocket_covering'),
                H: Ingredient.of('botania:dragonstone'),
                I: Ingredient.of('create:brass_casing')
            },
            output: 'gribtweaks:reinforced_covering',
            id: `${prefix}reinforced_covering`
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
                F: Ingredient.of('gribtweaks:reinforced_covering'),
                G: Ingredient.of('gribtweaks:gaia_catalyst'),
                H: Ingredient.of('botania:life_essence'),
                I: Ingredient.of('botania:gaia_ingot')
            },
            output: '2x gribtweaks:advanced_covering',
            id: `${prefix}advanced_covering`
        },
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
