ServerEvents.recipes((event) => {
  const prefix = 'gribtweaks:naturesaura/shaped/';
  const recipes = [
        {
          output: 'naturesaura:wood_stand',
          pattern: ['DED', 'BCB', 'AAA'],
          key: {
            A: '#forge:stripped_logs',
            B: 'gribtweaks:buffalo_hide_rope',
            C: 'create:shaft',
            D: 'minecraft:gold_ingot',
            E: 'naturesaura:gold_powder'
          },
          id: `${prefix}wood_stand`
        }, 
  ];
  
  recipes.forEach((recipe) => {
      event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
  });
});