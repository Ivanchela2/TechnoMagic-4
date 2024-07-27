ServerEvents.recipes((event) => {
    const prefix = 'gribtweaks:ad_astra/shaped/';
    const recipes = [
        {
            output: 'ad_astra:hammer',
            pattern: ['BCD', ' AC', 'A B'],
            key: {
              A: 'gribtweaks:iron_stick',
              B: 'ftbic:aluminum_ingot',
              C: '#createbigcannons:block_steel',
              D: 'minecraft:string'
            },
            id: `${prefix}hammer`
        },
        {
            output: 'ad_astra:fuel_refinery',
            pattern: ['SSS', 'FLF', 'SSS'],
            key: {
              F: 'create_sa:large_fueling_tank',
              L: 'ic2:heat_storage_six',
              S: '#createbigcannons:block_steel',
            },
            id: `${prefix}fuel_refinery`
        },
        {
            output: 'ad_astra_giselle_addon:fuel_loader',
            pattern: ['SSS', 'FPF', 'SSS'],
            key: {
              F: 'ic2:upgrade_import',
              P: 'create:smart_fluid_pipe',
              S: '#createbigcannons:block_steel',
            },
            id: `${prefix}fuel_loader`
        },
        {
            output: 'ad_astra:oxygen_loader',
            pattern: ['SRS', 'TBT', 'SCS'],
            key: {
              B: 'createbigcannons:steel_screw_breech',
              C: 'gribtweaks:advanced_casing',
              R: 'create_enchantment_industry:experience_rotor',
              S: '#createbigcannons:block_steel',
              T: 'create:copper_backtank',
            },
            id: `${prefix}oxygen_loader`
        },
        {
            output: 'ad_astra:space_helmet',
            pattern: ['PHR', 'SGS'],
            key: {
              G: 'forbidden_arcanus:deorum_glass_pane',
              H: 'arclight:angel_helmet',
              P: 'gribtweaks:super_alloy',
              R: 'minecraft:lightning_rod',
              S: '#createbigcannons:block_steel'
            },
            id: `${prefix}space_helmet`
        },
        {
            output: 'ad_astra:space_suit',
            pattern: ['P P', 'BCB', 'SOS'],
            key: {
              B: 'ad_astra_giselle_addon:oxygen_can',
              C: 'arclight:angel_chestplate',
              P: 'gribtweaks:super_alloy',
              O: 'ad_astra:oxygen_gear',
              S: '#createbigcannons:block_steel'
            },
            id: `${prefix}space_suit`
        },
        {
            output: 'ad_astra:space_pants',
            pattern: ['PLP', 'S S', 'C C'],
            key: {
              C: 'gribtweaks:dense_carbon_plate',
              L: 'arclight:angel_leggings',
              P: 'gribtweaks:super_alloy',
              S: '#createbigcannons:block_steel'
            },
            id: `${prefix}space_pants`
        },
        {
            output: 'ad_astra:space_boots',
            pattern: ['PBP', 'S S'],
            key: {
              B: 'arclight:angel_boots',
              P: 'gribtweaks:super_alloy',
              S: '#createbigcannons:block_steel'
            },
            id: `${prefix}space_boots`
        },
        {
            output: 'ad_astra_giselle_addon:oxygen_can',
            pattern: ['KTK', 'KTK', 'III'],
            key: {
              I: '#forge:storage_blocks/iron',
              K: 'twilightforest:knightmetal_ingot',
              T: 'create_sa:large_filling_tank'
            },
            id: 'gribtweaks:ad_astra_giselle_addon/shaped/oxygen_can'
        },
        {
            output: 'ad_astra:oxygen_tank',
            pattern: [' GV', 'SOS', 'SS '],
            key: {
              G: '#forge:dyes/green',
              O: 'ad_astra_giselle_addon:oxygen_can',
              S: '#createbigcannons:block_steel',
              V: 'create:copper_valve_handle'
            },
            id: 'gribtweaks:ad_astra_giselle_addon/shaped/oxygen_tank'
        },
        {
            output: 'ad_astra:oxygen_gear',
            pattern: [' PL', 'TQT', 'S S'],
            key: {
              L: '#forge:plates/steel',
              P: 'create:mechanical_pump',
              Q: 'gribtweaks:polished_antimatter_crystal',
              S: '#createbigcannons:block_steel',
              T: 'ad_astra:oxygen_tank'
            },
            id: 'gribtweaks:ad_astra_giselle_addon/shaped/oxygen_gear'
        },
        {
          output: 'gribtweaks:protasteel_block',
          pattern: ['SBA', 'BRB', 'ABS'],
          key: {
            A: 'gribtweaks:super_alloy',
            B: '#createbigcannons:block_steel',
            R: 'chemlib:protactinium_metal_block',
            S: 'gribtweaks:dense_carbon_plate',
          },
          id: `${prefix}protasteel_block`
        },
        {
          output: 'gribtweaks:protasteel_block',
          pattern: ['LLL', 'LLL', 'LLL'],
          key: {
            L: 'gribtweaks:protasteel_ingot'
          },
          id: `${prefix}protasteel_block_of_ingots`
        },
        {
          output: '9x gribtweaks:protasteel_ingot',
          pattern: ['L'],
          key: {
            L: 'gribtweaks:protasteel_block'
          },
          id: `${prefix}protasteel_ingot`
        },
        {
            output: 'ad_astra:jet_suit',
            pattern: ['ABA','CDC','EFE'],
            key: {
                A: 'botanicadds:gaiasteel_ingot',
                B: 'botania:flight_tiara',
                C: 'ad_astra:calorite_tank',
                D: 'ad_astra:netherite_space_suit',
                E: 'ad_astra:calorite_block',
                F: 'ad_astra:calorite_engine'
            },
            id: `${prefix}jet_suit`
        },
        {
            output: 'ad_astra:jet_suit_helmet',
            pattern: ['ABA','CDC','   '],
            key: {
                A: 'botanicadds:gaiasteel_ingot',
                B: 'ad_astra:netherite_space_helmet',
                C: 'ad_astra:calorite_plate',
                D: '#forge:glass'
            },
            id: `${prefix}jet_suit_helmet`
        },
        {
            output: 'ad_astra:jet_suit_pants',
            pattern: ['ABA','C C','C C'],
            key: {
                A: 'botanicadds:gaiasteel_ingot',
                B: 'ad_astra:netherite_space_pants',
                C: 'ad_astra:calorite_plate'
            },
            id: `${prefix}jet_suit_pants`
        },
        {
            output: 'ad_astra:jet_suit_boots',
            pattern: ['   ','ABA','C C'],
            key: {
                A: 'botanicadds:gaiasteel_ingot',
                B: 'ad_astra:netherite_space_boots',
                C: 'ad_astra:calorite_block'
            },
            id: `${prefix}jet_suit_boots`
        },
        {
            output: 'ad_astra:netherite_space_boots',
            pattern: ['CBC','DAD'],
            key: {
                A: 'twilightforest:ironwood_boots',
                B: 'ad_astra:space_boots',
                C: 'ad_astra:ostrum_plate',
                D: 'gribtweaks:endrium_uranium_iridium_alloy'
            },
            id: `${prefix}netherite_space_boots`
        },
        {
            output: 'ad_astra:netherite_space_helmet',
            pattern: [' A ','DBD','CEC'],
            key: {
                A: 'twilightforest:ironwood_helmet',
                B: 'ad_astra:space_helmet',
                C: 'ad_astra:ostrum_plate',
                D: 'gribtweaks:endrium_uranium_iridium_alloy',
                E: 'biggerreactors:reactor_glass'
            },
            id: `${prefix}netherite_space_helmet`
        },
        {
            output: 'ad_astra:netherite_space_suit',
            pattern: ['CAC','FEF','DBD'],
            key: {
                A: 'twilightforest:ironwood_chestplate',
                B: 'ad_astra:space_suit',
                C: 'ad_astra:ostrum_plate',
                D: 'gribtweaks:endrium_uranium_iridium_alloy',
                E: 'ad_astra:oxygen_gear',
                F: 'ad_astra:ostrum_tank'
            },
            id: `${prefix}netherite_space_suit`
        },
        {
            output: 'ad_astra:netherite_space_pants',
            pattern: ['DBD','CAC','C C'],
            key: {
                A: 'twilightforest:ironwood_leggings',
                B: 'ad_astra:space_pants',
                C: 'ad_astra:ostrum_plate',
                D: 'gribtweaks:endrium_uranium_iridium_alloy'
            },
            id: `${prefix}netherite_space_pants`
        },
        {
            output: '6x ad_astra:steel_cable',
            pattern: ['AAA','CBC','AAA'],
            key: {
                A: '#forge:nuggets/steel',
                B: '#createbigcannons:block_steel',
                C: 'ftbic:hv_cable'
            },
            id: `${prefix}steel_cable`
        },
    ];


    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});