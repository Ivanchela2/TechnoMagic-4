ServerEvents.recipes(event => {
    const prefix = 'gribtweaks:avaritia/shaped/';
    const recipes = [
        {
            output: 'avaritia:diamond_lattice',
            pattern: ['ABA', 'BCB', 'ABA'],
            key: {
                A: 'enigmaticlegacy:etherium_nugget',
                B: 'minecraft:diamond',
                C: 'minecraft:netherite_scrap'
            },
            id: `${prefix}diamond_lattice`
        },
        {
            output: 'avaritia:crystal_matrix_ingot',
            pattern: ['CCC', 'BCB', 'CCC'],
            key: {
                A: 'minecraft:nether_star',
                B: 'avaritia:diamond_lattice',
                C: 'gribtweaks:super_alloy'
            },
            id: `${prefix}crystal_matrix_ingot`
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
    ];
recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
    
});