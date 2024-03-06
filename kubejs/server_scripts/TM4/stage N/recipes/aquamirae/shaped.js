ServerEvents.recipes((event) => {
  const prefix = 'gribtweaks:aquamirae/shaped/';
  const recipes = [
        {
          output: '2x aquamirae:abyssal_amethyst',
          pattern: ['CAC', 'ABA', 'CAC'],
          key: {
            A: 'aquamirae:ship_graveyard_echo',
            B: 'minecraft:amethyst_shard',
            C: 'deeperdarker:reinforced_echo_shard'
          },
          id: `${prefix}abyssal_amethyst`
        }
  ];
  
  recipes.forEach((recipe) => {
      event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
  });
});