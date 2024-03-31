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
              A: '#forge:plates/iron', 
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