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
  ];
  
  recipes.forEach((recipe) => {
      event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
  });
});