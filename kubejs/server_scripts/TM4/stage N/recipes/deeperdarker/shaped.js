ServerEvents.recipes((event) => {
  const prefix = 'gribtweaks:deeperdarker/shaped/';
  const recipes = [
        {
          output: 'deeperdarker:reinforced_echo_shard',
          pattern: ['DAB', 'ACA', 'BAD'],
          key: {
            A: 'deeperdarker:warden_carapace',
            B: 'minecraft:phantom_membrane',
            C: 'minecraft:echo_shard',
            D: 'spirit:soul_steel_ingot'
          },
          id: `${prefix}reinforced_echo_shard`
        }
  ];
  
  recipes.forEach((recipe) => {
      event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
  });
});