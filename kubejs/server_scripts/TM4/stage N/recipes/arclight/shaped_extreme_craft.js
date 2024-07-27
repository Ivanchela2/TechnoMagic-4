ServerEvents.recipes(event => {
    const prefix = 'gribtweaks:arclight/shaped_extreme_craft/';
    const recipes = [
        {
            pattern: [
                '  JJJ  ',
                ' FMAAF ',
                'SMMCAAB',
                'SMDNDAB',
                'SMMCAAB',
                ' FMMAF ',
                '  RRR  ',
                ],
            key: {
                A: Item.of('arclight:arclight_ingot'),
                B: Item.of('arclight:bloodstone_ingot'),
                C: Item.of('minecraft:end_crystal'),
                D: Item.of('gribtweaks:hephaestus_ingot'),
                F: Item.of('upgradednetherite:feather_upgraded_netherite_ingot'),
                J: Item.of('arclight:jade_ingot'),
                M: Item.of('arclight:moonlight_ingot'),
                N: Item.of('forbidden_arcanus:dark_nether_star'),
                R: Item.of('arclight:cryorium_ingot'),
                S: Item.of('arclight:sculk_ingot')
            },
            output: 'arclight:arclight_core',
            id: `${prefix}arclight_core`
        },
        {
            pattern: [
                ' KCB ',
                'RWSAR',
                'KPUPK',
                'RTSGR',
                ' BCK '
            ],
            key: {
                A: Item.of('minecraft:enchanted_golden_apple'),
                B: Item.of('gribtweaks:astral_ingot'),
                C: Item.of('arclight:arclight_core'),
                G: Item.of('minecraft:golden_carrot'),
                P: Item.of('reliquary:phoenix_down'),
                K: Item.of('gribtweaks:compressed_knightmetal_block'),
                R: Item.of('create_confectionery:ruby_chocolate_candy_3'),
                S: Item.of('arclight:scorpion_core'),
                T: Item.of('minecraft:glowstone'),
                U: Item.of('deeperdarker:soul_crystal'),
                W: Item.of('minecraft:glistering_melon_slice')
            },
            output: 'arclight:angel_spawn',
            id: `${prefix}angel_spawn`
        },
        {
            pattern: [
                '  AB ',
                'BCBD ',
                'EBFBG',
                ' HBCB',
                ' BI  '
            ],
            key: {
                A: Item.of('arclight:arclight_ingot'),
                B: Item.of('minecraft:feather'),
                C: Item.of('forbidden_arcanus:golden_feather'),
                D: Item.of('arclight:cryorium_ingot'),
                E: Item.of('arclight:jade_ingot'),
                F: Item.of('gribtweaks:spirit_attuned_ingot'),
                G: Item.of('arclight:bloodstone_ingot'),
                H: Item.of('arclight:sculk_ingot'),
                I: Item.of('arclight:moonlight_ingot')
            },
            output: 'gribtweaks:angel_ingot',
            id: `${prefix}angel_ingot`
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
