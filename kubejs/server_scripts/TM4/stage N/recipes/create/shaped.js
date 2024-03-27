ServerEvents.recipes((event) => {
  const prefix = 'gribtweaks:create/shaped/';
  const recipes = [
        {
          output: '2x create:andesite_alloy',
          pattern: ['DBD', 'CAC', 'DBD'],
          key: {
            A: 'rootsclassic:growth_powder',
            B: 'create:zinc_nugget',
            C: 'minecraft:iron_nugget',
            D: 'minecraft:andesite'
          },
          id: `${prefix}andesite_alloy`
        }, 
        {
          output: '8x create:shaft',
          pattern: ['BA', 'AC'],
          key: {
            A: 'create:andesite_alloy',
            B: 'create:zinc_nugget',
            C: '#createbigcannons:sheet_steel'
          },
          id: `${prefix}shaft`
        }, 
  ];
  
  recipes.forEach((recipe) => {
      event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
  });
});