ServerEvents.recipes((event) => {
  const prefix = 'gribtweaks:supplementaries/shaped/';
  const recipes = [
    {
      output: 'supplementaries:flute', 
      pattern: ['  B', ' A ', 'B  '],
      key: {
        A: 'hexerei:crow_flute', 
        B: 'minecraft:bamboo'
      },
      id: `${prefix}flute`
    },
    {
      output: '4x supplementaries:rope', 
      pattern: ['A','A'],
      key: {
        A: 'farmersdelight:straw'
      },
      id: `${prefix}rope`
    },
    {
      output: 'farmersdelight:safety_net', 
      pattern: ['AA','AA'],
      key: {
        A: 'supplementaries:rope'
      },
      id: `${prefix}safety_net`
    },
  ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});