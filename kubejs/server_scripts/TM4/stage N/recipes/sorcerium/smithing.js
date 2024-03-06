ServerEvents.recipes((event) => {
  const prefix = 'gribtweaks:hexerei/smithing/';
  const recipes = [
    { // Целебная палочка из незерита
      addition: {item: 'minecraft:netherite_ingot'},
      base: {item: 'sorcerium:diamond_healing_wand'},
      result: {item: 'sorcerium:netherite_healing_wand'}
    },
  ];

    recipes.forEach(recipe => {
    event.custom({
      type: 'minecraft:smithing',
      addition: recipe.addition,
      base: recipe.base,
      result: recipe.result
    })
  })
});