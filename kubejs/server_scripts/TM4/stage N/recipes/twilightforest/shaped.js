ServerEvents.recipes((event) => {
  const prefix = 'gribtweaks:twilightforest/shaped/';
  const recipes = [
        {
          output: 'twilightforest:uncrafting_table',
          pattern: ['AEA', 'DCD', 'ABA'],
          key: {
            A: 'gribtweaks:quadruple_compressed_crafting_table',
            B: 'gribtweaks:combined_jelly',
            C: 'gribtweaks:advanced_antimatter_component',
            D: 'gribtweaks:hephaestus_ingot',
            E: 'gribtweaks:elemental_ingot'
          },
          id: `${prefix}uncrafting_table`
        }
  ];
  
  recipes.forEach((recipe) => {
      event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
  });
});