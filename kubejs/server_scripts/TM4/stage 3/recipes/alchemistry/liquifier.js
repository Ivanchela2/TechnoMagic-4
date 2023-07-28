ServerEvents.recipes((event) => {
  const prefix = 'tm4:alchemistry/liquifier/';

  const recipes = [
    {
      type: 'alchemistry:liquifier',
      group: 'alchemistry:liquifier',
      input: {
        count: 1,
        ingredient: {
          item: 'twilightforest:focus_element'
        }
      },
      result: {
        amount: '1000',
        fluid: 'tm4:life_liquid_essence'
      },
      id: `${prefix}life_liquid_essence`
    }
  ];

  recipes.forEach(recipe => {
    event.custom({
      type: recipe.type,
      group: recipe.group,
      input: recipe.input,
      result: recipe.result
    }).id(recipe.id);
  });
});
