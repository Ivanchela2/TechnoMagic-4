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
                H: Item.of('gribtweaks:fire_fragment').toJson()
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
                W: Item.of('gribtweaks:witch_sheet').toJson()
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
                C: Item.of('gribtweaks:component_base'),
                I: Item.of('avaritia:infinity_ingot'),
                1: Item.of('gribtweaks:advanced_ultimate_component'),
                2: Item.of('gribtweaks:advanced_oblivion_component'),
                3: Item.of('gribtweaks:advanced_antimatter_component'),
                4: Item.of('gribtweaks:sculk_advanced_component'),
                5: Item.of('gribtweaks:advanced_death_component'),
                6: Item.of('gribtweaks:advanced_anxiety_component'),
                7: Item.of('gribtweaks:advanced_admiration_component'),
                8: Item.of('gribtweaks:advanced_diamond_component')
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
                C: Item.of('gribtweaks:component_base'),
                G: Item.of('avaritia:infinity_ingot'),
                I: Item.of('gribtweaks:infinity_component'),
                U: Item.of('gribtweaks:gribony_component')
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
                C: Item.of('gribtweaks:ultimate_component_base'),
                G: Item.of('chemlib:gribony_ingot'),
                S: Item.of('gribtweaks:gribony_scrap')
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
                A: Item.of('gribtweaks:gribony_component'),
                C: Item.of('gribtweaks:ultimate_component_base'),
                G: Item.of('chemlib:gribony_ingot'),
                I: Item.of('gribtweaks:advanced_infinity_component'),
                U: Item.of('gribtweaks:advanced_ultimate_component'),
                S: Item.of('gribtweaks:gribony_scrap')
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
                B: Item.of('gribtweaks:block_infinity_catalyst'),
                C: Item.of('gribtweaks:advanced_infinity_component'),
                I: Item.of('avaritia:infinity_ingot'),
                L: Item.of('avaritia:infinity')
            },
            output: 'gribtweaks:true_infinity_block',
            id: `${prefix}true_infinity_block`
        },
        {
            pattern: [ 
                'AB  C  BA',
                'BABACABAB',
                ' BADADAB ',
                ' ADDADDA ',
                'CCAAAAACC',
                ' ADDADDA ',
                ' BADADAB ',
                'BABACABAB',
                'AB  C  BA'
            ],
            key: {
                A: { type: 'forge:nbt', item: 'avaritia:singularity', count: 1, nbt: '{Id:\"avaritia:neutronium\"}' },
			    B: Item.of('reaper:soul_catalyst'),
			    C: Item.of('avaritia:neutronium_ingot'),
			    D: Item.of('gribtweaks:cosmic_scrap')
            },
            output: 'gribtweaks:neutronium_catalyst',
            id: `${prefix}neutronium_catalyst`
        },
        {
            pattern: [ 
                '   A   ',
                '  ACA  ',
                '  ADA  ',
                '  AFA  ',
                ' AEDGA ',
                ' ABBBA ',
                '  AAA  ',
            ],   
            key: {
                A: Ingredient.of('#forge:storage_blocks/steel'),
			    B: Item.of('botania:terrasteel_ingot'),
			    C: Item.of('ad_astra:desh_block'),
			    D: Item.of('gribtweaks:reinforced_covering'),
			    E: Item.of('botania:rune_winter'),
			    F: Item.of('ad_astra:rocket_nose_cone'),
			    G: Item.of('botania:rune_summer')
            },
            output: 'gribtweaks:reinforced_rocket_nose_cone',
            id: `${prefix}reinforced_rocket_nose_cone`
        },
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
                E: Ingredient.of('#forge:storage_blocks/osmium').toJson(),
                H: Item.of('deeperdarker:heart_of_the_deep').toJson(),
                K: Item.of('gribtweaks:dense_carbon_plate').toJson(),
                L: Item.of('gribtweaks:oblivion_liquid').toJson(),
                M: Item.of('gribtweaks:mechanical_circuit').toJson(),
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
