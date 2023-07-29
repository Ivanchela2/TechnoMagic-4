ServerEvents.recipes((event) => {
    const prefix = 'tm4:mechanical_crafting/shaped/';
    const recipes = [
        {
            pattern: [ 
                '  4  ', 
                ' 1E3 ',
                '2BDB2',
                ' 1A3 '
            ],
            key: { 
                1: 'create_sa:steam_engine', 
                2: 'create_sa:heat_engine', 
                3: 'create_sa:hydraulic_engine', 
                4: 'gribtweaks:infinity_heavy_cogwheel', 
                A: 'createaddition:electric_motor',
                B: 'ad_astra:cryo_freezer', 
                D: 'avaritia:infinity_nugget', 
                E: 'createaddition:alternator'
            },
            output: 'createaddition:creative_energy',
            acceptMirrored: false,
            id: `${prefix}creative_energy`
        },
        {
            pattern: [ 
                '  3  ', 
                ' 1E1 ',
                '12A21',
                ' 1B1 '
            ],
            key: { 
                1: 'ftbic:iridium_circuit', 
                2: 'create:railway_casing',  
                3: 'gribtweaks:infinity_heavy_cogwheel', 
                A: 'avaritia:infinity_nugget',
                B: 'createaddition:alternator', 
                E: 'createaddition:electric_motor'
            },
            output: 'create:creative_motor',
            acceptMirrored: false,
            id: `${prefix}creative_motor`
        },
        {
            pattern: [ 
                '  4  ', 
                ' 1E1 ',
                '12A31',
                ' 1B1 '
            ],
            key: { 
                1: 'create:smart_fluid_pipe', 
                2: { type: "forge:nbt", "item": 'ftbic:fluid_cell', "count": 1, "nbt": '{Fluid:{Amount:1000,FluidName:"chemlib:propane_fluid"}}' },
                3: { type: "forge:nbt", "item": 'ftbic:fluid_cell', "count": 1, "nbt": '{Fluid:{Amount:1000,FluidName:"chemlib:methane_fluid"}}' },    
                4: 'gribtweaks:infinity_heavy_cogwheel', 
                A: 'avaritia:infinity_nugget',
                B: 'reliquary:emperor_chalice', 
                E: 'create:fluid_tank'
            },
            output: 'create:creative_fluid_tank',
            acceptMirrored: false,
            id: `${prefix}creative_fluid_tank`
        },
        {
            pattern: [ 
                ' LAR     ', 
                'LM TR MUU',
                'C   GIU F',
                'LM KO MUH',
                ' LEO     ',
            ],
            key: { 
                A: 'twilightforest:cube_of_annihilation', 
                C: 'create:creative_motor', 
                E: 'naturesaura:chunk_loader', 
                G: 'createaddition:creative_energy', 
                F: 'create:creative_fluid_tank', 
                H: 'enigmaticlegacy:the_infinitum', 
                I: 'gribtweaks:infinity_heavy_cogwheel', 
                K: 'create:creative_blaze_cake', 
                L: 'biggerreactors:reinforced_ludicrite_block', 
                M: 'chemlib:all_alkali_metals_element',
                O: 'create:copper_casing',
                U: 'biggerreactors:ludicrite_block',
                T: 'botania:astrolabe',
                R: 'create:railway_casing',
            },
            output: 'create:handheld_worldshaper',
            acceptMirrored: false,
            id: `${prefix}handheld_worldshaper`
        },
        {
            pattern: [
                'CCAAPAACC',
                'CDDKKKDDC',
                'ADNUTUNDA',
                'AKUSUSUKA',
                'PKTMBMTKP',
                'AKUSUSUKA',
                'ADNUTUNDA',
                'CDDKKKDDC',
                'CCAAPAACC'
            ],
            key: {
                A: 'gribtweaks:polished_arcane_crystal',
                B: 'gribtweaks:diamond_component',
                C: 'gribtweaks:polished_certus_quartz_crystal',
                D: 'gribtweaks:diamond_plate',
                K: 'gribtweaks:dense_carbon_plate',
                N: 'minecraft:nether_star',
                M: 'gribtweaks:mechanical_eye',
                P: 'gribtweaks:compressed_phantom_membrane',
                S: 'gribtweaks:spirit_attuned_ingot',
                T: 'gribtweaks:quadruple_compressed_crafting_table',
                U: 'avaritia:crystal_matrix_ingot'
            },
            output: 'avaritia:extreme_crafting_table',
            acceptMirrored: true,
            id: `${prefix}extreme_crafting_table`
        }
    ];

    recipes.forEach((recipe) => {
        event.recipes.create.mechanical_crafting(recipe.output, recipe.pattern, recipe.key, recipe.acceptMirrored).id(recipe.id);
    });
});
