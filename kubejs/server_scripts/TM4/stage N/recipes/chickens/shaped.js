ServerEvents.recipes((event) => {
  const prefix = 'gribtweaks:chickens/shaped/';
  const recipes = [
        {
          output: 'chickens:catcher',
          pattern: ['A', 'B', 'C'],
          key: {
            A: 'forbidden_arcanus:edelwood_chicken_bucket',
            B: 'gribtweaks:iron_stick',
            C: 'twilightforest:raven_feather',
          },
          id: `${prefix}catcher`
        }, 
  ];
  
  recipes.forEach((recipe) => {
      event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
  });
});