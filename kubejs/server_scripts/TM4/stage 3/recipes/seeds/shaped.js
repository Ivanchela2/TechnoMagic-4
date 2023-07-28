ServerEvents.recipes((event) => {
  const prefix = 'tm4:hexerei/shaped/';
  const recipes = [
    { // Trash
      output: 'seeds:trash', 
      pattern: [
        '   ', 
        'AB ', 
        '   '
        ],
      key: {
        A: 'minecraft:composter', 
        B: 'chemlib:thorium_ingot'
      },
      id: `${prefix}trash`
    },
    { // Vacuum Cleaner
      output: 'seeds:vacuum_cleaner', 
      pattern: [
        'EBE', 
        'BAB', 
        'DCD'
        ],
      key: {
        A: 'minecraft:ender_pearl', 
        B: 'hexerei:selenite_shard',
        C: 'seeds:carbon_dioxide_tank',
        D: Item.of('silentgear:custom_ingot', '{Material:"high_carbon_steel"}'),
        E: 'minecraft:iron_ingot',
      },
      id: `${prefix}vacuum_cleaner`
    }
  ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});