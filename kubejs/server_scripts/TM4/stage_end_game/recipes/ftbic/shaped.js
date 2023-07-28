ServerEvents.recipes(event => {
    const prefix = 'tm4:ftbic/shaped/';
    const recipes = [
        {
            output: '6x gribtweaks:energium_dust',
            pattern: ['ABA', 'BAB', 'ABA'],
            key: {
                A: ['ftbic:diamond_dust', 'createaddition:diamond_grit'],
                B: 'minecraft:redstone'
            },
            id: `${prefix}energium_dust`
        },
        {
            output: 'ftbic:ultimate_centrifuge',
            pattern: ['ABA', 'CDC', 'EFE'],
            key: {
                A: 'ftbic:fluid_cell',
                B: 'ftbic:advanced_alloy',
                C: 'ftbic:advanced_circuit',
                D: 'ftbic:advanced_machine_block',
                E: 'ftbic:medium_coolant_cell',
                F: 'ftbic:centrifuge'
            },
            id: `${prefix}ultimate_centrifuge`
        },
        {
            output: 'ftbic:ultimate_compressor',
            pattern: ['ABA', 'CDC', 'EFE'],
            key: {
                A: 'create:sturdy_sheet',
                B: 'ftbic:advanced_alloy',
                C: 'ftbic:advanced_circuit',
                D: 'ftbic:advanced_machine_block',
                E: 'extendedgears:large_half_shaft_steel_cogwheel',
                F: 'ftbic:compressor'
            },
            id: `${prefix}ultimate_compressor`
        },
        {
            output: 'ftbic:ultimate_macerator',
            pattern: ['ABA', 'CDC', 'EFE'],
            key: {
                A: 'ftbic:hv_battery',
                B: 'ftbic:advanced_alloy',
                C: 'ftbic:advanced_circuit',
                D: 'ftbic:advanced_machine_block',
                E: 'create:crushing_wheel',
                F: 'ftbic:macerator'
            },
            id: `${prefix}ultimate_macerator`
        },
        {
            output: 'ftbic:ultimate_powered_furnace',
            pattern: ['ABA', 'CDC', 'EFE'],
            key: {
                A: 'ftbic:thick_neutron_reflector',
                B: 'ftbic:advanced_alloy',
                C: 'ftbic:advanced_circuit',
                D: 'ftbic:advanced_machine_block',
                E: 'create_things_and_misc:vibration_mechanism',
                F: 'ftbic:advanced_circuit'
            },
            id: `${prefix}ultimate_powered_furnace`
        },
        {
            output: 'ftbic:ultimate_roller',
            pattern: ['AB1', 'CDC', 'EFE'],
            key: {
                A: 'ftbic:uranium_gear',
                1: 'ftbic:enderium_gear',
                B: 'ftbic:advanced_alloy',
                C: 'ftbic:advanced_circuit',
                D: 'ftbic:advanced_machine_block',
                E: 'extendedgears:large_half_shaft_steel_cogwheel',
                F: 'ftbic:roller'
            },
            id: `${prefix}ultimate_roller`
        }
    ];
    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});