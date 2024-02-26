ServerEvents.recipes((event) => {
    const prefix = 'gribtweaks:shaped/';
    const recipes = [
      {
        output: 'gribtweaks:blaze_cell',
        pattern: ['IBI', 'MUM', 'IBI'],
        key: {
          B: 'minecraft:blaze_powder',
          I: 'twilightforest:ironwood_block',
          M: 'minecraft:fire_charge',
          U: 'twilightforest:firefly'
        },
        id: `${prefix}blaze_cell`
      }
    ];
    
    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
  });