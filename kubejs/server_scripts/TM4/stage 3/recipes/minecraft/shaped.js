ServerEvents.recipes((event) => {
  const prefix = 'tm4:hexerei/shaped/';
  const recipes = [
    { // Воронка
      output: 'minecraft:hopper', 
      pattern: [
        'CBC', 
        'CAC', 
        ' C '
        ],
      key: {
        A: '#forge:chests/wooden', 
        B: 'quark:chute',
        C: 'minecraft:iron_ingot'
      },
      id: `${prefix}hopper`
    },
  ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});