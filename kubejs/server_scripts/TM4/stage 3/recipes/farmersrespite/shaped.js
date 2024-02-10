ServerEvents.recipes((event) => {
  const prefix = 'gribtweaks:hexerei/shaped/';
  const recipes = [
    { // Kettle
      output: 'farmersrespite:kettle', 
      pattern: [
        'ACA', 
        'BDB', 
        'EEE'
        ],
      key: {
        A: 'twilightforest:liveroot', 
        B: 'minecraft:copper_ingot',
        C: 'minecraft:leather',
        D: 'hexerei:tallow_bucket',
        E: 'twilightforest:ironwood_ingot',
      },
      id: `${prefix}kettle`
    },
  ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});