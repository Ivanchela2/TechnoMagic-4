ServerEvents.recipes((event) => {
    const prefix = 'gribtweaks:totemic/shaped/';
    const recipes = [
          {
            output: 'totemic:iron_bells', 
            pattern: [
              'CAC', 
              'ABA', 
              'CAC'
              ],
            key: {
              A: 'iron_ingot', 
              B: '#createbigcannons:block_steel',
              C: 'minecraft:iron_nugget'
            },
            id: `${prefix}iron_bells`
          },
    ];
    
    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
  });