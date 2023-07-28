ServerEvents.recipes((event) => {
  const prefix = 'gribtweaks:shaped/';
  const recipes = [
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
      output: 'gribtweaks:gold_lodestone',
      pattern: [' S ', 'SMS', ' S '],
      key: {
        M: 'minecraft:lodestone',
        S: '#forge:ingots/gold'
      },
      id: `${prefix}gold_lodestone`
    },
    {
      output: 'gribtweaks:hephaestus_lodestone',
      pattern: [' S ', 'SMS', ' S '],
      key: {
        M: 'minecraft:lodestone',
        S: 'gribtweaks:hephaestus_ingot'
      },
      id: `${prefix}hephaestus_lodestone`
    },
    {
      output: 'gribtweaks:quantum_lodestone',
      pattern: [' S ', 'SMS', ' S '],
      key: {
        M: 'minecraft:lodestone',
        S: 'gribtweaks:quantum_ingot'
      },
      id: `${prefix}quantum_lodestone`
    },
    {
      output: 'gribtweaks:spirit_attuned_lodestone',
      pattern: [' S ', 'SMS', ' S '],
      key: {
        M: 'minecraft:lodestone',
        S: 'gribtweaks:spirit_attuned_ingot'
      },
      id: `${prefix}spirit_attuned_lodestone`
    },
    {
      output: 'gribtweaks:gaiasteel_lodestone',
      pattern: [' S ', 'SMS', ' S '],
      key: {
        M: 'minecraft:lodestone',
        S: 'botanicadds:gaiasteel_ingot'
      },
      id: `${prefix}gaiasteel_lodestone`
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
  ];
  
  recipes.forEach((recipe) => {
      event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
  });
});