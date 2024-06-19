ServerEvents.recipes((event) => {
  const prefix = 'gribtweaks:farmersdelight/shaped/';
  const recipes = [
        {
          output: 'farmersdelight:diamond_knife',
          pattern: ['  A', ' B ', 'C  '],
          key: {
            A: 'minecraft:diamond',
            B: 'farmersdelight:iron_knife',
            C: 'rootsclassic:oak_bark'
          },
          id: `${prefix}diamond_knife`
        }, 
        
  ];
  
  recipes.forEach((recipe) => {
      event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
  });
});