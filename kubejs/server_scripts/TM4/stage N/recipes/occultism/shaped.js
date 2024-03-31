ServerEvents.recipes((event) => {
  const prefix = 'gribtweaks:occultism/shaped/';
  const recipes = [
        {
          output: 'occultism:butcher_knife',
          pattern: [' CD', 'BA ', 'A  '],
          key: {
            A: 'gribtweaks:iron_stick',
            B: 'ftbic:aluminum_ingot',
            C: '#createbigcannons:block_steel',
            D: 'minecraft:string'
          },
          id: `${prefix}butcher_knife`
        }, 
  ];
  
  recipes.forEach((recipe) => {
      event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
  });
});