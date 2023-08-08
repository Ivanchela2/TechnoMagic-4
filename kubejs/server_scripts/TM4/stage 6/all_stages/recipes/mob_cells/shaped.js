ServerEvents.recipes((event) => {
    const prefix = 'gribtweaks:shaped/';
    const recipes = [
      {
        output: 'gribtweaks:blaze_cell',
        pattern: ['IBI', 'SUN', 'IBI'],
        key: {
          B: 'minecraft:blaze_powder',
          I: 'twilightforest:ironwood_block',
          N: '#chipped:netherrack',
          S: '#minecraft:soul_fire_base_blocks',
          U: 'gribtweaks:unforgotten_soul'
        },
        id: `${prefix}blaze_cell`
      }
    ];
    
    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
  });