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
        {
          output: 'naturesaura:generator_limit_remover',
          pattern: ['ABA', 'CDE', 'AFA'],
          key: {
              A: 'naturesaura:item_distributor',
              B: 'naturesaura:token_euphoria',
              C: 'naturesaura:token_terror',
              D: 'forbidden_arcanus:dark_nether_star',
              E: 'naturesaura:token_grief',
              F: 'naturesaura:token_rage'
          },
          id: `${prefix}generator_limit_remover`
      }
  ];
  
  recipes.forEach((recipe) => {
      event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
  });
});