ServerEvents.recipes((event) => {
  const prefix = 'tm4:hexerei/shaped/';
  const recipes = [
    { // Флейта
      output: 'supplementaries:flute', 
      pattern: [
        '  B', 
        ' A ', 
        'B  '
        ],
      key: {
        A: 'hexerei:crow_flute', 
        B: 'minecraft:bamboo'
      },
      id: `${prefix}flute`
    },
  ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});