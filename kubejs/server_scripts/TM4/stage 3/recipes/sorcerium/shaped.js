ServerEvents.recipes((event) => {
  const prefix = 'tm4:hexerei/shaped/';
  const recipes = [
    {
      output: 'sorcerium:earth_staff', 
      pattern: [
        ' BA', 
        ' CB', 
        'C  '
        ],
      key: {
        A: 'sorcerium:earth_crystal', 
        B: 'twilightforest:naga_scale',
        C: 'minecraft:stick'
      },
      id: `${prefix}earth_staff`
    },
    {
      output: 'sorcerium:howling_aurora_wand', 
      pattern: [
        ' AA', 
        'DBA', 
        'CD '
        ],
      key: {
        A: 'sorcerium:aurora_mutagen', 
        B: 'sorcerium:soul_hunter_staff',
        C: 'twilightforest:twilight_scepter', 
        D: 'sorcerium:refined_mana_crystal'
      },
      id: `${prefix}howling_aurora_wand`
    },
    {
      output: 'sorcerium:soul_hunter_staff', 
      pattern: [
        ' BA', 
        'DCB', 
        'ED '
        ],
      key: {
        A: 'sorcerium:soul_flame', 
        B: 'sorcerium:refined_mana_crystal',
        C: 'twilightforest:fortification_scepter', 
        D: 'minecraft:diamond',
        E: 'sorcerium:demons_eye_wand' 
      },
      id: `${prefix}soul_hunter_staff`
    },
    {
      output: 'sorcerium:demons_eye_wand', 
      pattern: [
        'AEB', 
        'FGF', 
        'CED'
        ],
      key: {
        A: 'sorcerium:frost_wand', 
        B: 'sorcerium:chain_staff',
        C: 'sorcerium:ascent_wand', 
        D: 'sorcerium:molten_trident',
        E: 'twilightforest:naga_scale', 
        F: 'farmersrespite:blazing_chili',
        G: 'sorcerium:starlight_wand'
      },
      id: `${prefix}demons_eye_wand`
    },
    {
      output: 'sorcerium:sorcerers_broom_item', 
      pattern: [
        ' BA', 
        'DCB', 
        'ED '
        ],
      key: {
        A: 'minecraft:stick', 
        B: 'sorcerium:charged_mana_prism',
        C: 'sorcerium:ascent_core', 
        D: 'minecraft:phantom_membrane',
        E: 'minecraft:hay_block'
      },
      id: `${prefix}sorcerers_broom_item`
    },
    {
      output: 'sorcerium:ascent_core', 
      pattern: [
        ' A ', 
        'CBC', 
        'DCD'
        ],
      key: {
        A: 'hexerei:blood_bottle', 
        B: 'sorcerium:mana_pearl',
        C: 'sorcerium:magic_brass_alloy', 
        D: 'minecraft:redstone'
      },
      id: `${prefix}ascent_core`
    },
    {
      output: 'sorcerium:wooden_healing_wand', 
      pattern: [
        ' CA', 
        ' BC', 
        'B  '
        ],
      key: {
        A: 'sorcerium:mana_pearl', 
        B: 'minecraft:stick',
        C: 'forbidden_arcanus:cloth'
      },
      id: `${prefix}wooden_healing_wand`
    },
    {
      output: 'sorcerium:iron_healing_wand', 
      pattern: [
        ' CA', 
        ' BC', 
        'B  '
        ],
      key: {
        A: 'sorcerium:wooden_healing_wand', 
        B: 'minecraft:iron_ingot',
        C: Item.of('naturesaura:aura_bottle', '{stored_type:"naturesaura:overworld"}')
      },
      id: `${prefix}iron_healing_wand`
    },
    {
      output: 'sorcerium:golden_healing_wand', 
      pattern: [
        '  A', 
        ' B ', 
        'B  '
        ],
      key: {
        A: 'sorcerium:iron_healing_wand', 
        B: 'minecraft:gold_ingot'
      },
      id: `${prefix}golden_healing_wand`
    },
    {
      output: 'sorcerium:emerald_healing_wand', 
      pattern: [
        '  A', 
        ' B ', 
        'B  '
        ],
      key: {
        A: 'sorcerium:golden_healing_wand', 
        B: 'minecraft:emerald'
      },
      id: `${prefix}emerald_healing_wand`
    },
    {
      output: 'sorcerium:diamond_healing_wand', 
      pattern: [
        '  A', 
        ' B ', 
        'B  '
        ],
      key: {
        A: 'sorcerium:emerald_healing_wand', 
        B: 'minecraft:diamond'
      },
      id: `${prefix}diamond_healing_wand`
    },
    {
      output: 'sorcerium:mana_pearl', 
      pattern: [
        ' B ', 
        'BAB', 
        ' B '
        ],
      key: {
        A: 'twilightforest:magic_map_focus', 
        B: 'sorcerium:refined_mana_crystal'
      },
      id: `${prefix}mana_pearl`
    },
    {
      output: 'sorcerium:molten_crystal', 
      pattern: [
        'ABC', 
        'BAB', 
        'CBA'
        ],
      key: {
        A: 'minecraft:blaze_powder', 
        B: 'minecraft:blaze_rod',
        C: 'sorcerium:mana_crystal'
      },
      id: `${prefix}mana_pearl`
    }
  ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});