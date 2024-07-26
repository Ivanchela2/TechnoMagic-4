ServerEvents.recipes((event) => {
  const prefix = 'gribtweaks:twilightforest/shaped/';
  const recipes = [
        {
            output: 'gribtweaks:compressed_fiery_block',
            pattern: ['BAB', 'ABA', 'BAB'],
            key: {
                A: 'twilightforest:fiery_ingot',
                B: 'twilightforest:fiery_block'
            },
            id: `${prefix}compressed_fiery_block`
        },
        {
            output: 'gribtweaks:compressed_knightmetal_block',
            pattern: ['BAB', 'ABA', 'BAB'],
            key: {
                A: 'twilightforest:knightmetal_ingot',
                B: 'twilightforest:knightmetal_block'
            },
            id: `${prefix}compressed_knightmetal_block`
        },
        {
            output: 'twilightforest:liveroot',
            pattern: ['AB', 'CD'],
            key: {
                A: 'minecraft:dirt',
                B: '#minecraft:logs',
                C: 'minecraft:bone_meal',
                D: '#minecraft:leaves'
            },
            id: `${prefix}liveroot`
        },
        {
            output: 'twilightforest:ice_sword',
            pattern: ['C', 'B', 'A'],
            key: {
                A: '#forge:rods/wooden',
                B: 'minecraft:packed_ice',
                C: 'minecraft:ice'
            },
            id: `${prefix}ice_sword`
        },
  ];
  
  recipes.forEach((recipe) => {
      event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
  });
});