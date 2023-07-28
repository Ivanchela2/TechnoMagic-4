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
                A: Item.of('arclight:arclight_ingot').toJson(),
                B: Item.of('arclight:bloodstone_ingot').toJson(),
                C: Item.of('minecraft:end_crystal').toJson(),
                D: Item.of('gribtweaks:hephaestus_ingot').toJson(),
                F: Item.of('upgradednetherite:feather_upgraded_netherite_ingot').toJson(),
                J: Item.of('arclight:jade_ingot').toJson(),
                M: Item.of('arclight:moonlight_ingot').toJson(),
                N: Item.of('forbidden_arcanus:dark_nether_star').toJson(),
                R: Item.of('arclight:cryorium_ingot').toJson(),
                S: Item.of('arclight:sculk_ingot').toJson()
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
                A: Item.of('minecraft:enchanted_golden_apple').toJson(),
                B: Item.of('gribtweaks:astral_ingot').toJson(),
                C: Item.of('arclight:arclight_core').toJson(),
                G: Item.of('minecraft:golden_carrot').toJson(),
                P: Item.of('reliquary:phoenix_down').toJson(),
                K: Item.of('gribtweaks:compressed_knightmetal_block').toJson(),
                R: Item.of('create_confectionery:ruby_chocolate_candy_3').toJson(),
                S: Item.of('arclight:scorpion_core').toJson(),
                T: Item.of('minecraft:glowstone').toJson(),
                U: Item.of('deeperdarker:soul_crystal').toJson(),
                W: Item.of('minecraft:glistering_melon_slice').toJson()
            },
            output: 'arclight:angel_spawn',
            id: `${prefix}angel_spawn`
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
