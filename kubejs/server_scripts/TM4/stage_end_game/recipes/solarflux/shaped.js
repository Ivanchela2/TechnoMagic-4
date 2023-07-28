ServerEvents.recipes(event => {
    const prefix = 'tm4:solarflux/shaped/panels/';
    const recipes = [
        {
            output: '2x solarflux:sp_2',
            pattern: ['111', '121', '111'],
            key: {
                1: 'solarflux:sp_1',
                2: 'quark:stone_brick_lamp'
            },
            id: `${prefix}sp_2`
        },
        {
            output: '2x solarflux:sp_3',
            pattern: ['111', '232', '242'],
            key: {
                1: 'solarflux:photovoltaic_cell_1',
                2: 'solarflux:sp_2',
                3: 'ftbic:copper_coil',
                4: 'biggerreactors:graphite_block'
            },
            id: `${prefix}sp_3`
        },
        {
            output: '2x solarflux:sp_4',
            pattern: ['111', '232', '242'],
            key: {
                1: 'solarflux:photovoltaic_cell_2',
                2: 'solarflux:sp_3',
                3: 'ftbic:electronic_circuit',
                4: 'biggerreactors:graphite_block'
            },
            id: `${prefix}sp_4`
        },
        {
            output: '2x solarflux:sp_5',
            pattern: ['111', '232', '242'],
            key: {
                1: 'solarflux:photovoltaic_cell_3',
                2: 'solarflux:sp_4',
                3: 'ftbic:advanced_circuit',
                4: '#forge:storage_blocks/bronze'
            },
            id: `${prefix}sp_5`
        },
        {
            output: '2x solarflux:sp_6',
            pattern: ['111', '232', '242'],
            key: {
                1: 'solarflux:photovoltaic_cell_4',
                2: 'solarflux:sp_5',
                3: 'ftbic:antimatter_crystal',
                4: 'ftbic:advanced_machine_block'
            },
            id: `${prefix}sp_6`
        },
        {
            output: '2x solarflux:sp_7',
            pattern: ['111', '232', '242'],
            key: {
                1: 'solarflux:photovoltaic_cell_5',
                2: ['solarflux:sp_6','solarflux:sp_tf.fiery'],
                3: 'minecraft:dragon_breath',
                4: 'biggerreactors:graphite_block'
            },
            id: `${prefix}sp_7`
        },
        {
            output: '2x solarflux:sp_8',
            pattern: ['111', '232', '232'],
            key: {
                1: 'solarflux:photovoltaic_cell_6',
                2: ['solarflux:sp_7','solarflux:sp_tf.carminite'],
                3: 'productivebees:inactive_dragon_egg'
            },
            id: `${prefix}sp_8`
        },
        {
            output: '2x solarflux:emerald_glass',
            pattern: [' 1 ', ' 2 ', ' 1 '],
            key: {
                1: 'solarflux:mirror',
                2: { type: "forge:nbt", "item":"silentgear:custom_gem", "count": 1, "nbt": "{Material:\"dimerald\"}" }
            },
            id: `${prefix}emerald_glass`
        },
        {
            output: '2x gribtweaks:upgraded_photovoltaic_cell',
            pattern: ['GGG', 'SAS', 'CLC'],
            key: {
                A: 'amethyst_upgrade:amethyst_gemstone_block',
                C: 'solarflux:mirror',
                G: 'solarflux:emerald_glass',
                L: 'create:brass_casing',
                S: '#forge:storage_blocks/steel',
            },
            id: 'gribtweaks:solarflux/shaped/upgraded_photovoltaic_cell'
        },
        {
            output: '2x solarflux:sp_custom_nature',
            pattern: ['CCC', 'SES', 'SRS'],
            key: {
                C: 'gribtweaks:upgraded_photovoltaic_cell',
                E: 'naturesaura:token_rage',
                R: 'naturesaura:token_euphoria',
                S: 'solarflux:sp_3',
            },
            id: `${prefix}nature`
        },
        {
            output: '2x solarflux:sp_custom_bee',
            pattern: ['CCC', 'SKS', 'SIS'],
            key: {
                C: 'gribtweaks:upgraded_photovoltaic_cell',
                I: { type: "forge:nbt", item: 'productivebees:configurable_comb', count: 1, nbt: '{EntityTag:{type:"productivebees:iesnium"}}' },
                K: { type: 'forge:nbt', item: 'productivebees:configurable_comb', count: 1, nbt: '{EntityTag:{type:"productivebees:calorite"}}' },
                S: 'solarflux:sp_tf.carminite',
            },
            id: `${prefix}bee`
        },
        {
            output: '2x solarflux:sp_custom_gaia',
            pattern: ['CCC', 'SGS', 'SGS'],
            key: {
                C: 'gribtweaks:upgraded_photovoltaic_cell',
                G: 'botanicadds:gaiasteel_ingot',
                S:'solarflux:sp_custom_nature',
            },
            id: `${prefix}gaia`
        },
        {
            output: '2x solarflux:sp_custom_occult',
            pattern: ['CCC', 'SDS', 'SBS'],
            key: {
                C: 'gribtweaks:upgraded_photovoltaic_cell',
                B: 'occultism:storage_stabilizer_tier2',
                D: 'occultism:wormhole_frame',
                S: 'solarflux:sp_custom_witchery',
            },
            id: `${prefix}occult`
        },
        {
            output: '2x solarflux:sp_custom_alchemical',
            pattern: ['CCC', 'SMS', 'SNS'],
            key: {
                C: 'gribtweaks:upgraded_photovoltaic_cell',
                M: 'chemlib:all_metalloids_element',
                N: 'chemlib:all_noble_gases_element',
                S: 'solarflux:sp_custom_occult',
            },
            id: `${prefix}alchemical`
        },
        {
            output: '2x solarflux:sp_custom_witchery',
            pattern: ['CCC', 'SGS', 'SIS'],
            key: {
                C: 'gribtweaks:upgraded_photovoltaic_cell',
                I: 'hexerei:infused_fabric',
                G: 'hexerei:gold_rings',
                S: 'solarflux:sp_custom_nature',
            },
            id: `${prefix}witchery`
        },
        {
            output: 'solarflux:sp_custom_mushroom_infinity',
            pattern: ['CCC', 'SIS', 'SGS'],
            key: {
                C: 'gribtweaks:upgraded_photovoltaic_cell',
                I: 'avaritia:infinity_nugget',
                G: 'chemlib:infinity_gribony_ingot',
                S: 'solarflux:sp_avaritia.infinity',
            },
            id: `${prefix}mushroom_infinity`
        },
        {
            output: '2x solarflux:sp_custom_mechanical',
            pattern: ['CCC', 'SWS', 'SVS'],
            key: {
                C: 'gribtweaks:upgraded_photovoltaic_cell',
                V: 'create_things_and_misc:vibration_mechanism',
                S: 'solarflux:sp_6',
                W: 'create:cogwheel',
            },
            id: `${prefix}mechanical`
        },
        {
            output: '2x solarflux:sp_custom_technical',
            pattern: ['CCC', 'SMS', 'SES'],
            key: {
                C: 'gribtweaks:upgraded_photovoltaic_cell',
                E: 'enigmaticlegacy:etherium_ingot',
                M: 'ftbic:ev_battery_box',
                S: 'solarflux:sp_custom_mechanical',
            },
            id: `${prefix}technical`
        },
        {
            output: '2x solarflux:sp_avaritia.infinity',
            pattern: ['CCC', 'SIS', 'SGS'],
            key: {
                C: 'gribtweaks:upgraded_photovoltaic_cell',
                G: 'botanicadds:gaiasteel_block',
                I: 'gribtweaks:infinity_heavy_cogwheel',
                S: 'solarflux:sp_avaritia.neutronium',
            },
            id: `${prefix}avaritia_infinity`
        }
        
    ];
recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
    
});