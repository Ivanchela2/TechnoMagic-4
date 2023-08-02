ServerEvents.recipes(event => {
    const prefix = 'gribtweaks:shaped_extreme_craft/';
    const recipes = [
        {
            pattern: [ 
                '       AA', 
                '     AAAA', 
                '   AAAAA ', 
                ' AAAAMAA ', 
                'AAAAMAA  ', 
                'AAAMAAA  ', 
                'AAMAAA   ', 
                'AMAAAA   ', 
                'AAAAA    '
            ],
            key: {
                A: Item.of('gribtweaks:ametrine_shard').toJson(),
                M: Item.of('gribtweaks:antimatter_l4').toJson()
            },
            output: 'gribtweaks:ametrine_ore_crystal',
            id: `${prefix}ametrine_ore_crystal`
        },
        {
            pattern: [ 
                '  CMMMC  ', 
                ' MAPAPAM ', 
                'CA1aFb2AC', 
                'MDFS3SFDM', 
                'MPc4d5ePM', 
                'MDSF6FSDM', 
                'CA7fSg8AC', 
                ' MAPAPAM ', 
                '  CMMMC  '
            ],
            key: {
                A: Item.of('gribtweaks:polished_amethyst_shard').toJson(),
                C: Item.of('avaritia:infinity_catalyst').toJson(),
                D: Item.of('gribtweaks:diamond_membrane').toJson(),
                F: Item.of('gribtweaks:fiery_membrane').toJson(),
                M: Item.of('avaritia:crystal_matrix').toJson(),
                P: Item.of('gribtweaks:compressed_phantom_membrane').toJson(),
                S: Item.of('gribtweaks:steel_membrane').toJson(),
                1: Item.of('gribtweaks:dense_tin_plate').toJson(),
                2: Item.of('gribtweaks:dense_lead_plate').toJson(),
                3: Item.of('ftbic:dense_copper_plate').toJson(),
                4: Item.of('gribtweaks:dense_gold_plate').toJson(),
                5: Item.of('gribtweaks:dense_uranium_plate').toJson(),
                6: Item.of('gribtweaks:dense_aluminum_plate').toJson(),
                7: Item.of('gribtweaks:dense_iron_plate').toJson(),
                8: Item.of('gribtweaks:dense_bronze_plate').toJson(),
                a: Item.of('gribtweaks:spirit_attuned_clock').toJson(),
                b: Item.of('gribtweaks:sculk_clock').toJson(),
                c: Item.of('gribtweaks:sandstone_clock').toJson(),
                d: Item.of('gribtweaks:red_mushroom_clock').toJson(),
                e: Item.of('gribtweaks:oak_clock').toJson(),
                f: Item.of('gribtweaks:andesite_alloy_clock').toJson(),
                g: Item.of('gribtweaks:tained_gold_clock').toJson()
            },
            output: 'gribtweaks:infinity_clock',
            id: `${prefix}infinity_clock`
        },
        {
            pattern: [ 
                'ACBCA', 
                'CBHBC', 
                'BHEHB', 
                'CBHBC', 
                'ACBCA'
            ],
            key: {
                A: Item.of('gribtweaks:advanced_death_component').toJson(),
                B: Item.of('twilightforest:fiery_blood').toJson(),
                C: Item.of('gribtweaks:compressed_fiery_block').toJson(),
                E: Item.of('gribtweaks:ultimate_upgraded_netherite_eye').toJson(),
                H: Item.of('scalinghealth:heart_crystal').toJson()
            },
            output: 'gribtweaks:death_block',
            id: `${prefix}death_block`
        },
        {
            pattern: [ 
                'AWBWA', 
                'WWOWW', 
                'BOHOB', 
                'WWOWW', 
                'AWBWA'
            ],
            key: {
                A: Item.of('gribtweaks:advanced_anxiety_component').toJson(),
                B: Item.of('gribtweaks:ametrine_block').toJson(),
                H: Item.of('enigmaticlegacy:abyssal_heart').toJson(),
                O: Item.of('gribtweaks:ametrine_ore_crystal').toJson(),
                W: Item.of('hexerei:witch_sheet').toJson()
            },
            output: 'gribtweaks:anxiety_block',
            id: `${prefix}anxiety_block`
        },
        {
            pattern: [ 
                'AWBWA', 
                'WBNBW', 
                'BNCNB', 
                'WBNNW', 
                'AWBWA'
            ],
            key: {
                A: Item.of('gribtweaks:advanced_admiration_component').toJson(),
                B: Item.of('botania:manasteel_block').toJson(),
                C: Item.of('chemlib:cobalt_metal_block').toJson(),
                N: Item.of('aquaculture:neptunium_block').toJson(),
                W: Item.of('gribtweaks:water_ingot').toJson()
            },
            output: 'gribtweaks:admiration_block',
            id: `${prefix}admiration_block`
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
