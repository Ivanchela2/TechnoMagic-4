ServerEvents.recipes((event) => {
  const prefix = 'gribtweaks:delightful/shaped/';
  const recipes = [
    {
      output: 'delightful:leaf_knife', 
      pattern: [' B', 'A '],
      key: {
        A: 'gribtweaks:baykok_bone',
        B: 'rootsclassic:verdant_sprig'
      },
      id: `${prefix}leaf_knife`
    },
    {
      output: 'delightful:copper_knife', 
      pattern: [
        '  A', 
        ' B ', 
        'C  '
        ],
      key: {
        A: 'minecraft:copper_ingot', 
        B: 'farmersdelight:flint_knife',
        C: 'rootsclassic:oak_bark'
      },
      id: `${prefix}copper_knife`
    },
    {
      output: 'farmersdelight:iron_knife', 
      pattern: [
        '  A', 
        ' B ', 
        'C  '
        ],
      key: {
        A: 'minecraft:iron_ingot', 
        B: 'delightful:copper_knife',
        C: 'rootsclassic:oak_bark'
      },
      id: `${prefix}iron_knife`
    },
    {
      output: 'delightful:bronze_knife', 
      pattern: [
        '  A', 
        ' B ', 
        'C  '
        ],
      key: {
        A: 'alloyed:bronze_ingot', 
        B: 'farmersdelight:iron_knife',
        C: 'rootsclassic:growth_powder'
      },
      id: `${prefix}bronze_knife`
    },
    {
      output: 'delightful:refined_glowstone_knife', 
      pattern: [
        '  A', 
        ' B ', 
        'C  '
        ],
      key: {
        A: 'minecraft:glowstone', 
        B: 'delightful:bronze_knife',
        C: 'rootsclassic:growth_powder'
      },
      id: `${prefix}refined_glowstone_knife`
    },
    {
      output: 'delightful:silver_knife', 
      pattern: [
        '  A', 
        ' B ', 
        'C  '
        ],
      key: {
        A: 'occultism:silver_ingot', 
        B: 'delightful:refined_glowstone_knife',
        C: 'hexerei:tallow_bottle'
      },
      id: `${prefix}silver_knife`
    },
    { // Нож из рыцарского металла
      output: 'delightful:knightmetal_knife', 
      pattern: [
        '  A', 
        ' B ', 
        'C  '
        ],
      key: {
        A: 'twilightforest:knightmetal_ingot', 
        B: 'delightful:silver_knife',
        C: 'hexerei:tallow_bottle'
      },
      id: `${prefix}knightmetal_knife`
    },
    { // Нож из незеритового опала
      output: 'delightful:netherite_opal_knife', 
      pattern: [
        ' DA', 
        ' BD', 
        'C  '
        ],
      key: {
        A: 'minecraft:netherite_ingot', 
        B: 'delightful:black_opal_knife',
        C: 'cataclysm:flame_eye',
        D: 'naturesaura:end_city_finder'
      },
      id: `${prefix}netherite_opal_knife`
    },
    { // Драконовский нож
      output: 'delightful:draco_arcanus_knife', 
      pattern: [
        ' DA', 
        ' BD', 
        'C  '
        ],
      key: {
        A: 'delightful:netherite_opal_knife', 
        B: 'forbidden_arcanus:draco_arcanus_staff',
        C: 'forbidden_arcanus:mystical_dagger',
        D: 'forbidden_arcanus:dragon_scale'
      },
      id: `${prefix}draco_arcanus_knife`
    },
    { // Золочённый кварцевый нож
      output: 'delightful:gilded_quartz_knife', 
      pattern: [
        ' DA', 
        ' BD', 
        'C  '
        ],
      key: {
        A: 'create:iron_sheet', 
        B: 'farmersdelight:diamond_knife',
        C: 'create_sa:zinc_handle',
        D: 'create:polished_rose_quartz'
      },
      id: `${prefix}gilded_quartz_knife`
    },
    { // Эндеритовый нож
      output: 'delightful:enderite_knife', 
      pattern: [
        '  A', 
        ' B ', 
        'C  '
        ],
      key: {
        A: 'upgradednetherite:ender_essence', 
        B: 'delightful:gilded_quartz_knife',
        C: 'enigmaticlegacy:ender_rod'
      },
      id: `${prefix}enderite_knife`
    },
    { // Кремниевый нож
      output: 'farmersdelight:flint_knife', 
      pattern: [
        '  A', 
        ' B ', 
        'C  '
        ],
      key: {
        A: 'minecraft:flint',
        B: 'delightful:leaf_knife',
        C: 'sorcerium:earth_crystal'
      },
      id: `${prefix}flint_knife`
    },
    { // Скоровода
      output: 'farmersdelight:skillet', 
      pattern: [
        ' AA', 
        ' AA', 
        'B  '
        ],
      key: {
        A: 'createbigcannons:cast_iron_ingot',
        B: 'minecraft:brick',
      },
      id: `${prefix}skillet`
    },
    {
      output: 'farmersdelight:cooking_pot', 
      pattern: [
        'AGA', 
        'BVB', 
        'BBB'
        ],
      key: {
        A: 'minecraft:brick',
        B: 'createbigcannons:cast_iron_ingot',
        V: 'minecraft:water_bucket',
        G: 'notreepunching:flint_shovel'
      },
      id: `${prefix}cooking_pot`
    },
    { // Кухонная плита
      output: 'farmersdelight:stove', 
      pattern: [
        'AAA', 
        'B B', 
        'BGB'
        ],
      key: {
        A: 'createbigcannons:cast_iron_ingot',
        B: 'minecraft:bricks',
        G: 'minecraft:campfire'
      },
      id: `${prefix}stove`
    },
  ];

  
    recipes.forEach((recipe) => {
        event.shaped(
          recipe.output, 
          recipe.pattern, 
          recipe.key)
          .id(recipe.id);
    });
});