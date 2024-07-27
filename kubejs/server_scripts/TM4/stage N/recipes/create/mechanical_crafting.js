ServerEvents.recipes((event) => {
    const prefix = 'gribtweaks:create/mechanical_crafting/';
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
                L: 'gribtweaks:reinforced_ludicrite_block', 
                M: 'chemlib:all_alkali_metals_element',
                O: 'create:copper_casing',
                U: 'biggerreactors:ludicrite_block',
                T: 'botania:astrolabe',
                R: 'create:railway_casing',
            },
            output: 'create:handheld_worldshaper',
            id: `${prefix}handheld_worldshaper`
        }
    ];

    recipes.forEach((recipe) => {
        event.recipes.create.mechanical_crafting(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
