ServerEvents.recipes((event) => {
  const prefix = 'gribtweaks:/shaped/';
  const recipes = [
    { // Воронка
      output: 'chipped:carpenters_table', 
      pattern: [
        '  A', 
        'BCB', 
        'TDB'
        ],
      key: {
        A: 'minecraft:iron_ingot', 
        B: '#minecraft:logs',
        C: 'minecraft:crafting_table',
        D: '#minecraft:planks',
        T: '#forge:tools/axes'
      },
      id: `${prefix}carpenters_table`
    },
  ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});