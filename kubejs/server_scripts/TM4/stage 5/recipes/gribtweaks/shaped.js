ServerEvents.recipes(event => {
    const prefix = 'tm4:gribtweaks/shaped/';
    const recipes = [
		{
            output: 'gribtweaks:carbon_rod',
            pattern: ['  A', ' A ', 'A  '],
            key: {
                A: 'ftbic:carbon_plate'
            },
            id: `${prefix}carbon_rod`
        },
        {
            output: 'gribtweaks:cable_coil',
            pattern: ['ABA', 'CBC', 'ABA'],
            key: {
                A: '#minecraft:planks',
                B: 'gribtweaks:carbon_rod',
                C: 'ftbic:copper_wire'
            },
            id: `${prefix}cable_coil`
        },
        {
            output: 'gribtweaks:quantum_circuit',
            pattern: ['ABA', 'CDC', 'ABA'],
            key: {
                A: 'ftbic:advanced_alloy',
                B: 'ftbic:carbon_plate',
                C: 'ftbic:iridium_circuit',
                D: 'gribtweaks:quantum_ingot'
            },
            id: `${prefix}quantum_circuit`
        },
        {
            output: 'gribtweaks:astral_ingot',
            pattern: ['AAA', 'AAA', 'AAA'],
            key: {
                A: 'enigmaticlegacy:astral_dust'
            },
            id: `${prefix}astral_ingot`
        },
        {
            output: 'enigmaticlegacy:astral_block',
            pattern: ['AAA', 'AAA', 'AAA'],
            key: {
                A: 'gribtweaks:astral_ingot'
            },
            id: `${prefix}astral_block`
        },
        {
            output: "ftbic:upgrade_template",
            pattern: ['AAA', 'AAA', 'AAA'],
            key: {
                A: 'ftbic:industrial_grade_metal'
            },
            id: `${prefix}upgrade_template`
        },
        {
            output: 'gribtweaks:spectral_circuit',
            pattern: ['ABA', 'CDC', 'ABA'],
            key: {
                A: 'gribtweaks:quantum_ingot',
                B: 'gribtweaks:spectral_ingot',
                C: 'gribtweaks:quantum_circuit',
                D: 'gribtweaks:tin_lead_bronze_alloy'
            },
            id: `${prefix}spectral_circuit`
        },
        {
            output: 'gribtweaks:photoniy_circuit',
            pattern: ['ABA', 'CDC', 'ABA'],
            key: {
                A: 'gribtweaks:tin_lead_bronze_alloy',
                B: 'gribtweaks:super_alloy',
                C: 'gribtweaks:spectral_circuit',
                D: 'gribtweaks:photoniy_ingot'
            },
            id: `${prefix}photoniy_circuit`
        },
        {
            output: 'gribtweaks:mechanical_circuit',
            pattern: ['ABA', 'CDC', 'ABA'],
            key: {
                A: 'gribtweaks:mechanical_ingot',
                B: 'create:cogwheel',
                C: 'ftbic:advanced_circuit',
                D: 'create:precision_mechanism'
            },
            id: `${prefix}mechanical_circuit`
        },
        {
            output: 'gribtweaks:sculk_circuit',
            pattern: ['ABA', 'CDC', 'ABA'],
            key: {
                A: 'gribtweaks:sculk_membrane',
                B: 'deeperdarker:reinforced_echo_shard',
                C: 'ftbic:advanced_circuit',
                D: 'gribtweaks:dense_sculk_plate'
            },
            id: `${prefix}sculk_circuit`
        }
        
    ];
	recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
    
});