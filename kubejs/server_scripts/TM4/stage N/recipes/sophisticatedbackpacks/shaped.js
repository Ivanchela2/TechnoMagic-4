ServerEvents.recipes((event) => {
    const prefix = 'gribtweaks:sophisticatedbackpacks/shaped/';
    const recipes = [  
          {
            output: 'sophisticatedbackpacks:backpack',
            pattern: ['CAC', 'CDC', 'ABA'],
            key: {
              A: '#forge:leather',
              B: 'notreepunching:ceramic_small_vessel',
              C: '#forge:string',
              D: '#forge:chests/wooden'
            },
            id: `${prefix}backpack`
          }
    ];
    
    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
  });