ServerEvents.recipes((event) => {
  const prefix = 'tm4:sorcerium/shaped/';
  const recipes = [
    {
    output: 'sorcerium:mana_pearl', 
    pattern: [
      ' A ', 
      'ABA', 
      ' A '
      ],
    key: {
      A: 'sorcerium:refined_mana_crystal', 
      B: 'naturesaura:natural_ender_pearl',
    },
    id: `${prefix}mana_pearl_alt`
  }
  ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});