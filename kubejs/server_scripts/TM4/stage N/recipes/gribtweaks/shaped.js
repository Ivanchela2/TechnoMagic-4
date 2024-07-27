ServerEvents.recipes((event) => {
    const prefix = 'gribtweaks:shaped/';
    const recipes = [
          {
            output: 'gribtweaks:baykok_bone_pickaxe',
            pattern: ['AAB', ' CA', 'C A'],
            key: {
              A: 'gribtweaks:baykok_bone',
              B: 'gribtweaks:buffalo_hide_rope',
              C: 'minecraft:stick'
            },
            id: `${prefix}baykok_bone_pickaxe`
          },    
          {
            output: 'gribtweaks:buffalo_hide_rope',
            pattern: ['AAA', 'AAA'],
            key: {
              A: 'gribtweaks:buffalo_hide_fiber'
            },
            id: `${prefix}buffalo_hide_rope`
          },   
          {
            output: 'gribtweaks:stone_stick',
            pattern: [' BA', 'BAB', 'AB '],
            key: {
              A: 'minecraft:stick',
              B: 'minecraft:cobblestone'
            },
            id: `${prefix}stone_stick`
          },
          {
            output: 'gribtweaks:iron_stick',
            pattern: [' BA', 'BAB', 'AB '],
            key: {
              A: 'gribtweaks:stone_stick',
              B: 'minecraft:iron_ingot'
            },
            id: `${prefix}iron_stick`
          },
          {
            output: 'gribtweaks:compressed_ash_block',
            pattern: ['AA','AA','  '],
            key: {
                A: 'gribtweaks:ash_block'
            },
            id: `${prefix}compressed_ash_block`
        },  
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
            output: 'ftbic:upgrade_template',
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
        },
        {
            output: 'gribtweaks:spirit_attuned_ingot',
            pattern: ['CAC', 'ABA', 'CAC'],
            key: {
                A: 'occultism:spirit_attuned_gem',
                B: '#forge:ingots/iron',
                C: 'minecraft:amethyst_shard'
            },
            id: `${prefix}spirit_attuned_ingot`
        },
        {
            output: 'gribtweaks:magical_steel',
            pattern: ['BCB', 'CAC', 'BCB'],
            key: {
                A: 'gribtweaks:ametrine_ingot',
                B: 'gribtweaks:witch_ingot',
                C: 'gribtweaks:dry_ingot_combining'
            },
            id: `${prefix}magical_steel`
        },
        {
            output: 'gribtweaks:time_core',
            pattern: ['ABE', 'DCF', 'GHA'],
            key: {
                A: 'gribtweaks:astral_ingot',
                B: 'gribtweaks:sculk_clock',
                C: 'naturesaura:clock_hand',
                D: 'gribtweaks:oak_clock',
                E: 'gribtweaks:sandstone_clock',
                F: 'gribtweaks:andesite_alloy_clock',
                G: 'gribtweaks:spirit_attuned_clock',
                H: 'gribtweaks:tained_gold_clock',
            },
            id: `${prefix}time_core`
        },    
        {
            output: 'tiab:time_in_a_bottle',
            pattern: ['NNN', 'SCS', 'GBG'],
            key: {
                B: 'botania:ender_air_bottle',
                C: 'gribtweaks:time_core',
                G: 'amethyst_upgrade:magic_gem',
                N: 'minecraft:netherite_ingot',
                S: 'ae2:quantum_entangled_singularity'
            },
            id: `${prefix}time_in_a_bottle`
        },
        {
            output: 'gribtweaks:bottle',
            pattern: [' E ', 'G G', ' G '],
            key: {
                E: 'minecraft:echo_shard',
                G: 'minecraft:glass'
            },
            id: `${prefix}bottle`
        },
        {
            output: 'gribtweaks:void_liquid',
            pattern: ['OBO', 'BAB', 'OBO'],
            key: {
                A: 'ftbic:antimatter',
                B: 'gribtweaks:bottle',
                O: 'gribtweaks:void_block'
            },
            id: `${prefix}void_liquid`
        },
        {
            output: 'gribtweaks:oblivion_liquid',
            pattern: ['OBO', 'BAB', 'OBO'],
            key: {
                A: 'gribtweaks:antimatter_l1',
                B: 'gribtweaks:void_liquid',
                O: 'gribtweaks:oblivion_block'
            },
            id: `${prefix}oblivion_liquid`
        },
        {
            output: 'gribtweaks:admiration_liquid',
            pattern: ['OBO', 'BAB', 'OBO'],
            key: {
                A: 'gribtweaks:antimatter_l2',
                B: 'gribtweaks:oblivion_liquid',
                O: 'gribtweaks:admiration_block'
            },
            id: `${prefix}admiration_liquid`
        },
        {
            output: 'gribtweaks:death_liquid',
            pattern: ['OBO', 'BAB', 'OBO'],
            key: {
                A: 'gribtweaks:antimatter_l3',
                B: 'gribtweaks:admiration_liquid',
                O: 'gribtweaks:death_block'
            },
            id: `${prefix}death_liquid`
        },
        {
            output: 'gribtweaks:anxiety_liquid',
            pattern: ['OBO', 'BAB', 'OBO'],
            key: {
                A: 'gribtweaks:antimatter_l4',
                B: 'gribtweaks:death_liquid',
                O: 'gribtweaks:anxiety_block'
            },
            id: `${prefix}anxiety_liquid`
        },
        {
            output: 'gribtweaks:infinity_liquid',
            pattern: ['OBO', 'BAB', 'OBO'],
            key: {
                A: 'gribtweaks:infinity_antimatter',
                B: 'gribtweaks:anxiety_liquid',
                O: 'gribtweaks:true_infinity_block'
            },
            id: `${prefix}infinity_liquid`
        },
        {
            output: 'gribtweaks:sculk_component',
            pattern: ['ES', 'CE'],
            key: {
                C: 'gribtweaks:component_base',
                E: 'minecraft:echo_shard',
                S: 'deeperdarker:soul_crystal'
            },
            id: `${prefix}sculk_component`
        },
        {
            output: 'gribtweaks:sculk_advanced_component',
            pattern: ['RSR', 'SCS', 'RSR'],
            key: {
                C: 'gribtweaks:component_base',
                R: 'deeperdarker:reinforced_echo_shard',
                S: 'gribtweaks:sculk_component'
            },
            id: `${prefix}sculk_advanced_component`
        },
        {
            output: 'gribtweaks:oblivion_component',
            pattern: ['PI', 'SR'],
            key: {
                I: 'gribtweaks:oblivion_ingot',
                P: 'gribtweaks:oblivion_powder',
                R: 'gribtweaks:iridium_shard',
                S: 'gribtweaks:sculk_component'
            },
            id: `${prefix}oblivion_component`
        },
        {
            output: 'gribtweaks:advanced_oblivion_component',
            pattern: ['RIR', 'ICI', 'RIR'],
            key: {
                C: 'gribtweaks:oblivion_component',
                I: 'gribtweaks:oblivion_ingot',
                R: 'gribtweaks:iridium_ore'
            },
            id: `${prefix}advanced_oblivion_component`
        },
        {
            output: 'gribtweaks:antimatter_component',
            pattern: ['AI', 'SP'],
            key: {
                A: 'ftbic:antimatter',
                I: 'gribtweaks:antimatter_ingot',
                P: 'gribtweaks:photoniy',
                S: 'gribtweaks:sculk_component'
            },
            id: `${prefix}antimatter_component`
        },
        {
            output: 'gribtweaks:advanced_antimatter_component',
            pattern: ['PIP', 'NCN', 'PIP'],
            key: {
                C: 'gribtweaks:antimatter_component',
                I: 'gribtweaks:antimatter_ingot',
                N: 'minecraft:nether_star',
                P: 'gribtweaks:proton'
            },
            id: `${prefix}advanced_antimatter_component`
        },
        {
            output: 'gribtweaks:diamond_component',
            pattern: ['DI', 'CD'],
            key: {
                C: 'gribtweaks:sculk_component',
                D: 'minecraft:diamond_block',
                I: 'gribtweaks:dense_diamond_plate'
            },
            id: `${prefix}diamond_component`
        },
        {
            output: 'gribtweaks:death_component',
            pattern: ['RB', 'CH'],
            key: {
                C: 'gribtweaks:oblivion_component',
                B: 'twilightforest:fiery_blood',
                H: 'scalinghealth:heart_crystal',
                R: 'gribtweaks:magma_rune'
            },
            id: `${prefix}death_component`
        },
        {
            output: 'gribtweaks:admiration_component',
            pattern: ['RI', 'CN'],
            key: {
                C: 'gribtweaks:oblivion_component',
                I: 'aquaculture:neptunium_ingot',
                N: 'botania:manasteel_nugget',
                R: 'gribtweaks:water_rune'
            },
            id: `${prefix}admiration_component`
        },
        {
            output: 'gribtweaks:anxiety_component',
            pattern: ['SI', 'CN'],
            key: {
                C: 'gribtweaks:death_component',
                I: 'enigmaticlegacy:evil_ingot',
                N: 'gribtweaks:ametrine_ore_crystal',
                S: 'hexerei:witch_sheet'
            },
            id: `${prefix}anxiety_component`
        },
        {
            output: 'gribtweaks:ultimate_component',
            pattern: ['SI', 'CN'],
            key: {
                C: 'gribtweaks:anxiety_component',
                I: 'gribtweaks:ultimate_ingot',
                N: 'gribtweaks:ultimate_nugget',
                S: 'gribtweaks:maximum_catalyst'
            },
            id: `${prefix}ultimate_component`
        },
        {
            output: 'gribtweaks:advanced_anxiety_component',
            pattern: ['ICI', 'CBC', 'ICI'],
            key: {
                B: 'gribtweaks:component_base',
                C: 'gribtweaks:anxiety_component',
                I: 'gribtweaks:ametrine_block'
            },
            id: `${prefix}advanced_anxiety_component`
        },
        {
            output: 'gribtweaks:advanced_admiration_component',
            pattern: ['ICI', 'CBC', 'ICI'],
            key: {
                B: 'gribtweaks:component_base',
                C: 'gribtweaks:admiration_component',
                I: 'botania:manasteel_block'
            },
            id: `${prefix}advanced_admiration_component`
        },
        {
            output: 'gribtweaks:advanced_death_component',
            pattern: ['ICI', 'CBC', 'ICI'],
            key: {
                B: 'gribtweaks:component_base',
                C: 'gribtweaks:death_component',
                I: 'gribtweaks:compressed_fiery_block'
            },
            id: `${prefix}advanced_death_component`
        },
        {
            output: 'gribtweaks:advanced_diamond_component',
            pattern: ['iCI', 'CBC', 'ICi'],
            key: {
                B: 'gribtweaks:component_base',
                C: 'gribtweaks:diamond_component',
                I: 'avaritia:diamond_lattice',
                i: 'gribtweaks:dense_diamond_plate'
            },
            id: `${prefix}advanced_diamond_component`
        },
        {
            output: 'gribtweaks:advanced_ultimate_component',
            pattern: ['IiI', 'CBC', 'IiI'],
            key: {
                B: 'gribtweaks:component_base',
                C: 'gribtweaks:ultimate_component',
                I: 'avaritia:ultimate_stew',
                i: 'gribtweaks:ultimate_block'
            },
            id: `${prefix}advanced_ultimate_component`
        },
        {
            output: 'gribtweaks:astral_burger',
            pattern: ['BKS', 'KSE', 'CTL'],
            key: {
                B: 'minecraft:bread',
                C: '#forge:salad_ingredients',
                E: 'farmersdelight:cooked_bacon',
                K: 'farmersdelight:beef_patty',
                L: 'farmersdelight:onion',
                S: 'gribtweaks:astral_ingot',
                T: 'farmersdelight:tomato'
            },
            id: `${prefix}astral_burger`
        },
        {
            output: 'gribtweaks:quantum_burger',
            pattern: ['BKS', 'KSE', 'CTL'],
            key: {
                B: 'minecraft:bread',
                C: '#forge:salad_ingredients',
                E: 'farmersdelight:cooked_bacon',
                K: 'farmersdelight:beef_patty',
                L: 'farmersdelight:onion',
                S: 'gribtweaks:quantum_ingot',
                T: 'farmersdelight:tomato'
            },
            id: `${prefix}quantum_burger`
        },
        {
            output: 'gribtweaks:empty_rune',
            pattern: ['CDC', 'DAD', 'CDC'],
            key: {
                A: 'gribtweaks:ametrine_nugget',
                C: 'gribtweaks:component_ingot',
                D: 'forbidden_arcanus:darkstone',
            },
            id: `${prefix}empty_rune`
        },
        {
            output: 'gribtweaks:elemental_fragments_block',
            pattern: ['SC', 'ON'],
            key: {
                C: 'gribtweaks:component_ingot',
                N: 'gribtweaks:ametrine_nugget',
                O: 'occultism:otherstone',
                S: 'gribtweaks:ametrine_shard'
            },
            id: `${prefix}elemental_fragments_block`
        },
        {
            output: 'gribtweaks:sky_ingot',
            pattern: ['FFF', 'FAF', 'FFF'],
            key: {
                A: 'gribtweaks:ametrine_ingot',
                F: 'gribtweaks:air_fragment',
            },
            id: `${prefix}sky_ingot`
        },
        {
            output: 'gribtweaks:forest_ingot',
            pattern: ['FFF', 'FAF', 'FFF'],
            key: {
                A: 'gribtweaks:ametrine_ingot',
                F: 'gribtweaks:earth_fragment',
            },
            id: `${prefix}forest_ingot`
        },
        {
            output: 'gribtweaks:hell_ingot',
            pattern: ['FFF', 'FAF', 'FFF'],
            key: {
                A: 'gribtweaks:ametrine_ingot',
                F: 'gribtweaks:fire_fragment',
            },
            id: `${prefix}hell_ingot`
        },
        {
            output: 'gribtweaks:water_ingot',
            pattern: ['FFF', 'FAF', 'FFF'],
            key: {
                A: 'gribtweaks:ametrine_ingot',
                F: 'gribtweaks:water_fragment',
            },
            id: `${prefix}water_ingot`
        },
        {
            output: 'gribtweaks:void_ingot',
            pattern: ['FFF', 'FAF', 'FFF'],
            key: {
                A: 'gribtweaks:ametrine_ingot',
                F: 'gribtweaks:void_fragment',
            },
            id: `${prefix}void_ingot`
        },
        {
            output: 'gribtweaks:elemental_ingot',
            pattern: ['FFF', 'FAF', 'FFF'],
            key: {
                A: 'gribtweaks:ametrine_ore_crystal',
                F: 'gribtweaks:elemental_fragment',
            },
            id: `${prefix}elemental_ingot`
        },
        {
            output: '4x gribtweaks:polished_ametrine_block',
            pattern: ['AA', 'AA'],
            key: {
                A: 'gribtweaks:ametrine_block'
            },
            id: `${prefix}polished_ametrine_block`
        },
        {
            output: '4x gribtweaks:ametrine_bricks',
            pattern: ['AA', 'AA'],
            key: {
                A: 'gribtweaks:polished_ametrine_block'
            },
            id: `${prefix}ametrine_bricks`
        },
        {
            output: 'gribtweaks:air_rune',
            pattern: ['DCD', 'BAB', 'DCD'],
            key: {
                A: 'gribtweaks:empty_rune',
                B: 'gribtweaks:sky_ingot',
                C: 'gribtweaks:ametrine_nugget',
                D: '#forge:feathers'
            },
            id: `${prefix}air_rune`
        },
        {
            output: 'gribtweaks:water_rune',
            pattern: ['DCD', 'BAB', 'DCD'],
            key: {
                A: 'gribtweaks:empty_rune',
                B: 'gribtweaks:water_ingot',
                C: 'gribtweaks:ametrine_nugget',
                D: 'minecraft:water_bucket'
            },
            id: `${prefix}water_rune`
        },
        {
            output: 'gribtweaks:magma_rune',
            pattern: ['DCD', 'BAB', 'DCD'],
            key: {
                A: 'gribtweaks:empty_rune',
                B: 'gribtweaks:hell_ingot',
                C: 'gribtweaks:ametrine_shard',
                D: 'minecraft:magma_block'
            },
            id: `${prefix}magma_rune`
        },
        {
            output: 'gribtweaks:fire_rune',
            pattern: ['DCD', 'BAB', 'DCD'],
            key: {
                A: 'gribtweaks:empty_rune',
                B: 'gribtweaks:hell_ingot',
                C: 'gribtweaks:ametrine_shard',
                D: 'minecraft:blaze_powder'
            },
            id: `${prefix}fire_rune`
        },
        {
            output: 'gribtweaks:earth_rune',
            pattern: ['ECD', 'BAB', 'DCE'],
            key: {
                A: 'gribtweaks:empty_rune',
                B: 'gribtweaks:forest_ingot',
                C: 'gribtweaks:ametrine_nugget',
                D: '#minecraft:dirt',
                E: 'minecraft:grass_block'
            },
            id: `${prefix}earth_rune`
        },
        {
            output: 'gribtweaks:forest_rune',
            pattern: ['ECD', 'BAB', 'DCE'],
            key: {
                A: 'gribtweaks:empty_rune',
                B: 'gribtweaks:forest_ingot',
                C: 'gribtweaks:ametrine_shard',
                D: '#minecraft:saplings',
                E: '#minecraft:dirt'
            },
            id: `${prefix}forest_rune`
        },
        {
            output: 'gribtweaks:void_rune',
            pattern: ['ECD', 'BAB', 'DCE'],
            key: {
                A: 'gribtweaks:empty_rune',
                B: 'gribtweaks:void_ingot',
                C: 'gribtweaks:ametrine_shard',
                D: 'ftbic:antimatter',
                E: 'botania:ender_air_bottle'
            },
            id: `${prefix}void_rune`
        },
        {
            output: 'gribtweaks:mechanical_ingot',
            pattern: ['EBD', 'BCB', 'ABA'],
            key: {
                A: 'create:cogwheel',
                B: 'create:andesite_alloy',
                C: '#forge:ingots/iron',
                D: 'ftbic:copper_gear',
                E: 'create:andesite_casing'
            },
            id: `${prefix}mechanical_ingot`
        },
        {
            output: '6x gribtweaks:component_ingot',
            pattern: ['ABA', 'DCD', 'ABA'],
            key: {
                A: 'minecraft:black_dye',
                B: 'createbigcannons:cast_iron_ingot',
                C: 'minecraft:iron_block',
                D: 'gribtweaks:component_ingot'
            },
            id: `${prefix}dlg_component_ingot`
        },
        {
            output: 'gribtweaks:blaze_cell',
            pattern: ['IBI', 'MUM', 'IBI'],
            key: {
                B: 'minecraft:blaze_powder',
                I: 'twilightforest:ironwood_block',
                M: 'minecraft:fire_charge',
                U: 'twilightforest:firefly'
            },
            id: `${prefix}blaze_cell`
        },
        {
            output: '6x gribtweaks:energium_dust',
            pattern: ['ABA', 'BAB', 'ABA'],
            key: {
                A: '#forge:dusts/diamond',
                B: 'minecraft:redstone',
            },
            id: `${prefix}energium_dust`
        }
    ];
    
    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
  });