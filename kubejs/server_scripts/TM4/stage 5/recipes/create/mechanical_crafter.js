ServerEvents.recipes((event) => {
    const prefix = 'tm4:create/ftbic/mechanical_crafting/';
    const recipes = [
        {
            pattern: [
                'ABA',
                'BCB',
                'ABA'
            ],
            key: {
                A: 'enigmaticlegacy:astral_dust',
                B: 'minecraft:enchanted_golden_apple',
                C: 'create:honeyed_apple'
            },
            output: 'enigmaticlegacy:astral_fruit',
            id: `${prefix}astral_fruit`
        },
        {
            pattern: [
                'A       A',
                ' A     A ',
                '  A   A  ',
                '   AAA   ',
                '   A A   ',
                '   AAA   ',
                '  A   A  ',
                ' A     A ',
                'A       A'
                
            ],
            key: {
                A: 'twilightforest:knightmetal_ring'
            },
            output: 'twilightforest:cube_talisman',
            id: `${prefix}cube_talisman`
        },
        {
            pattern: [
                ' 1B1 ',
                'ACDCA',
                'BDEDB',
                'ACFCA',
                ' 1B1 '
            ],
            key: {
                A: 'create:brass_sheet',
                1: 'ftbic:graphene',
                B: 'create:iron_sheet',
                C: 'ftbic:machine_block',
                D: 'ftbic:energy_crystal',
                E: 'createaddition:modular_accumulator',
                F: 'ftbic:advanced_machine_block'
            },
            output: 'ftbic:hv_battery_box',
            id: `${prefix}hv_battery_box`
        },
        {
            pattern: [ 
                ' ABA ',
                'ACDCA',
                'BDEDB',
                'ACFCA',
                ' ABA '
            ],
            key: { 
                A: ['ad_astra:steel_plate', 'alloyed:steel_sheet'],
                B: 'ftbic:iridium_circuit',
                C: 'ftbic:antimatter_crystal',
                D: 'ftbic:advanced_alloy',
                E: 'ftbic:hv_battery_box',
                F: 'ftbic:advanced_machine_block'
            },
            output: 'ftbic:ev_battery_box',
            id: `${prefix}ev_battery_box`
        },
        {
            pattern: [
                ' AAA ',
                'AEBEA',
                'ACDCA',
                'AECEA',
                ' AAA '
            ],
            key: {
                A: 'create:sturdy_sheet',
                B: 'ftbic:electronic_circuit',
                C: 'twilightforest:ironwood_ingot',
                D: 'ftbic:machine_block',
                E: ['ftbic:tin_ingot', 'chemlib:tin_ingot']
            },
            output: 'ftbic:canning_machine',
            id: `${prefix}canning_machine`
        },
        {
            pattern: [ 
                '1221', 
                '2332',
                '2442',
                '1551'
            ],
            key: { 
                1: '#balm:stones',
                2: 'create:iron_sheet',
                3: 'ftbic:electronic_circuit',
                4: 'ftbic:machine_block',
                5: 'create:millstone'
            },
            output: 'ftbic:compressor',
            id: `${prefix}compressor`
        },
        {
            pattern: [ 
                ' AAA ',
                'ABCBA',
                'ADGDA',
                'ABDBA',
                ' AAA '
            ],
            key: { 
                A: ['ad_astra:steel_plate', 'alloyed:steel_sheet'],
                B: 'ftbic:energy_crystal',
                C: 'ftbic:advanced_circuit',
                D: 'ftbic:machine_block',
                G: 'ftbic:mv_transformer'
            },
            output: 'ftbic:hv_transformer',
            id: `${prefix}hv_transformer`
        },
        {
            pattern: [
                ' AAA ',
                'ABCBA',
                'ADEDA',
                'ABDBA',
                ' AAA '
            ],
            key: {
                A: ['ad_astra:steel_plate', 'alloyed:steel_sheet'],
                B: 'ftbic:advanced_alloy',
                C: 'ftbic:iridium_circuit',
                D: 'ftbic:ev_cable',
                E: 'ftbic:hv_transformer'
            },
            output: '2x ftbic:ev_transformer',
            id: `${prefix}ev_transformer`
        },
        {
            pattern: [
                ' A ',
                'B B',
                'BCB'
            ],
            key: {
                A: 'create:cogwheel',
                B: 'create:zinc_ingot',
                C: 'create:zinc_block'
            },
            output: 'create_sa:heat_engine',
            id: `${prefix}heat_engine`
        },
        {
            pattern: [
                'ABA',
                'C C',
                'CDC'
            ],
            key: {
                A: 'minecraft:copper_ingot',
                B: 'create:cogwheel',
                C: 'create:fluid_tank',
                D: 'minecraft:copper_block'
            },
            output: 'create_sa:hydraulic_engine',
            id: `${prefix}hydraulic_engine`
        },
        {
            pattern: [
                'AAA',
                'BBB',
                ' C '
            ],
            key: {
                A: 'create:brass_sheet',
                B: 'create:brass_ingot',
                C: 'create:andesite_casing'
            },
            output: 'create:mechanical_plough',
            id: `${prefix}mechanical_plough`
        },
        {
            pattern: [
                ' A ',
                'B B',
                'BCB'
            ],
            key: {
                A: 'create:cogwheel',
                B: 'create:brass_ingot',
                C: 'create:brass_block'
            },
            output: 'create_sa:steam_engine',
            id: `${prefix}steam_engine`
        },
        {
            pattern: [
                'ACCA',
                'BDDB',
                'BEEB',
                'AFFA'
            ],
            key: {
                A: 'minecraft:piston',
                B: 'ftbic:aluminum_gear',
                C: 'ftbic:iron_gear',
                D: 'ftbic:electronic_circuit',
                E: 'ftbic:machine_block',
                F: 'create:mechanical_press'
            },
            output: 'ftbic:roller',
            id: `${prefix}roller`
        },
        {
            pattern: [
                'ABBA',
                'BDDB',
                'BEEB',
                'AFFA'
            ],
            key: {
                A: '#balm:stones',
                B: 'minecraft:flint',
                D: 'ftbic:electronic_circuit',
                E: 'ftbic:machine_block',
                F: 'create:crushing_wheel'
            },
            output: 'ftbic:macerator',
            id: `${prefix}macerator`
        },
        {
            pattern: [
                'ABBA',
                'BDDB',
                'BEEB',
                'AFFA'
            ],
            key: {
                A: 'ftbic:hv_cable',
                B: 'ftbic:iron_rod',
                D: 'ftbic:electronic_circuit',
                E: 'ftbic:machine_block',
                F: 'createaddition:rolling_mill'
            },
            output: 'ftbic:extruder',
            id: `${prefix}extruder`
        },
        {
            pattern: [
                'ACCA',
                'BDDB',
                'BEEB',
                'AFGA'
            ],
            key: {
                A: 'ftbic:mv_cable',
                B: 'supplementaries:flint_block',
                C: 'ftbic:fluid_cell',
                D: 'ftbic:electronic_circuit',
                E: 'ftbic:machine_block',
                F: 'create:mechanical_saw',
                G: 'create:deployer'
            },
            output: 'ftbic:centrifuge',
            id: `${prefix}centrifuge`
        },
        {
            pattern: [
                'ABBA',
                'BDDB',
                'BEEB',
                'AFFA'
            ],
            key: {
                A: 'twilightforest:ironwood_ingot',
                B: 'ftbic:industrial_grade_metal',
                D: 'ftbic:electronic_circuit',
                E: 'ftbic:compressor',
                F: 'seeds:trash'
            },
            output: 'ftbic:reprocessor',
            id: `${prefix}reprocessor`
        }
    ];

    recipes.forEach((recipe) => {
        event.recipes.create.mechanical_crafting(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
