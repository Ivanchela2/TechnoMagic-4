ServerEvents.recipes(event => {
    const prefix = 'gribtweaks:avaritia/shaped/';
    const recipes = [
        {
            output: '2x avaritia:diamond_lattice',
            pattern: ['ABA', 'ACA', 'ABA'],
            key: {
                A: 'silentgear:diamond_shard',
                B: 'gribtweaks:basic_runic_stone',
                C: 'minecraft:netherite_scrap'
            },
            id: `${prefix}diamond_lattice`
        },
        {
            output: 'solarflux:sp_avaritia.neutronium',
            pattern: ['123', '456', '789'],
            key: {
                1: 'solarflux:sp_custom_witchery',
                2: 'solarflux:sp_custom_gaia',
                3: 'solarflux:sp_custom_bee',
                4: 'solarflux:sp_custom_nature',
                5: 'avaritia:neutronium_gear',
                6: 'solarflux:sp_custom_occult',
                7: 'solarflux:sp_custom_alchemical',
                8: 'solarflux:sp_custom_mechanical',
                9: 'solarflux:sp_custom_technical'
            },
            id: `${prefix}solar_panel_neutronium`
        },
        {
            output: 'avaritiafurnace:infinity_furnace',
            pattern: ['ABA', 'CDC', 'AEA'],
            key: {
                A: 'avaritia:crystal_matrix_ingot',
                B: 'avaritia:star_fuel',
                C: 'avaritia:infinity_catalyst',
                D: 'avaritiafurnace:triple_compressed_furnace',
                E: 'ftbic:powered_furnace'
            },
            id: `${prefix}infinity_furnace`
        },
        {
            output: Item.of('ftbquests:lootcrate', '{type:"singularity_crate"}'),
            pattern: ['AAA', 'ABA', 'AAA'],
            key: {
                A: '#create:toolboxes',
                B: 'avaritia:infinity_catalyst'
            },
            id: `${prefix}singularity_crate`
        },
        {
            output: 'avaritia:infinity_ingot',
            pattern: ['AAA', 'AAA', 'AAA'],
            key: {
                A: 'avaritia:infinity_nugget'
            },
            id: `${prefix}infinity_ingot`
        }
    ];
recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
    
});