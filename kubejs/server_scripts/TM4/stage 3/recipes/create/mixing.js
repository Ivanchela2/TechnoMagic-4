ServerEvents.recipes((event) => {
  const prefix = 'tm4:create/mixing/';
  const recipes = [
    {
      type: "create:mixing",
      heatRequirement: "heated",
      ingredients: [
        { item: 'minecraft:iron_ingot' },
        { item: 'minecraft:coal' },
        { item: 'minecraft:coal' }
      ],
      results: [
        { item: 'createbigcannons:cast_iron_ingot' }
      ],
      id: `${prefix}cast_iron_ingot`
    },
    {
      type: "create:mixing",
      heatRequirement: "superheated",
      ingredients: [
        { item: 'hexerei:witch_ingot' },
        { item: 'hexerei:dry_ingot_combining' },
      ],
      results: [
        { item: 'hexerei:magical_steel' }
      ],
      id: `${prefix}magical_steel`
    }
  ];

  recipes.forEach(recipe => {
    event.custom({
      type: recipe.type,
      heatRequirement: recipe.heatRequirement,
      ingredients: recipe.ingredients,
      results: recipe.results
    }).id(recipe.id);
  });
});
