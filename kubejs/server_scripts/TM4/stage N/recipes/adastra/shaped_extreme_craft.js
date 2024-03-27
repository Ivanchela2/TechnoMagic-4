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
                S: Ingredient.of('#forge:storage_blocks/steel').toJson(),
                N: Item.of('minecraft:netherite_block').toJson(),
                C: Item.of('arclight:sculk_core').toJson()
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
                S: Ingredient.of('#forge:storage_blocks/steel').toJson(),
                N: Item.of('minecraft:netherite_block').toJson(),
                C: Item.of('arclight:sculk_core').toJson(),
                P: Item.of('gribtweaks:dense_spectral_plate').toJson()
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
                S: Ingredient.of('#forge:storage_blocks/steel').toJson(),
                H: Item.of('create:copper_valve_handle').toJson(),
                L: Item.of('biggerreactors:reinforced_ludicrite_block').toJson(),
                T: Item.of('create_sa:large_fueling_tank').toJson()
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
                S: Ingredient.of('#forge:storage_blocks/steel').toJson(),
                I: Item.of('gribtweaks:photoniy_ingot').toJson(),
                L: Item.of('biggerreactors:reinforced_ludicrite_block').toJson()
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
                S: Ingredient.of('#forge:storage_blocks/steel').toJson(),
                F: Item.of('ad_astra:engine_frame').toJson(),
                L: Item.of('biggerreactors:reinforced_ludicrite_block').toJson(),
                R: Item.of('create_enchantment_industry:experience_rotor').toJson()
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
                I: Item.of('gribtweaks:photoniy_ingot').toJson(),
                O: Item.of('forbidden_arcanus:dark_rune_block').toJson(),
                S: Ingredient.of('#forge:storage_blocks/steel').toJson(),
                F: Item.of('twilightforest:fiery_block').toJson()
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
                P: Item.of('ad_astra:protasteel_block').toJson(),
                A: Item.of('gribtweaks:super_alloy').toJson(),
                I: Item.of('gribtweaks:iridium_ore').toJson(),
                M: Item.of('gribtweaks:magical_steel').toJson(),
                R: Item.of('gribtweaks:void_rune').toJson(),
                S: Ingredient.of('#forge:storage_blocks/steel').toJson()
            },
            output: 'ad_astra:rocket_covering',
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
                C: Item.of('ae2:molecular_assembler').toJson(),
                D: Item.of('forbidden_arcanus:deorum_block').toJson(),
                F: Item.of('gribtweaks:super_alloy').toJson(),
                M: Item.of('arclight:moonlight_core').toJson(),
                R: Item.of('naturesaura:rf_converter').toJson(),
                S: Ingredient.of('#forge:storage_blocks/steel').toJson(),
                T: Item.of('gribtweaks:quadruple_compressed_crafting_table').toJson(),
                V: Item.of('gribtweaks:ultimate_upgraded_netherite_eye').toJson()
            },
            output: 'ad_astra:nasa_workbench',
            id: `${prefix}nasa_workbench`
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
