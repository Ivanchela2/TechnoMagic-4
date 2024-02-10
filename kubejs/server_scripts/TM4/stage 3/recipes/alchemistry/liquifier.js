ServerEvents.recipes((event) => {
  const prefix = 'gribtweaks:alchemistry/liquifier/';

  const recipes = [
    {
      type: 'alchemistry:liquifier',
      group: 'alchemistry:liquifier',
      input: {
        count: 1,
        ingredient: {
          item: 'gribtweaks:focus_element'
        }
      },
      result: {
        amount: '1000',
        fluid: 'hexerei:life_liquid_essence'
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
