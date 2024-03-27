ServerEvents.recipes((event) => {
  const prefix = 'gribtweaks:minecraft/shaped/';
  const recipes = [
        {
          output: 'minecraft:crafting_table',
          pattern: ['AB', 'BC'],
          key: {
            A: '#minecraft:logs',
            B: 'notreepunching:plant_string',
            C: 'minecraft:flint',
          },
          id: `${prefix}crafting_table`
        }, 
        {
          output: 'minecraft:campfire',
          pattern: ['AEB','EDB','CCC'],
          key: {
              A: 'notreepunching:fire_starter',
              B: 'supplementaries:ash_brick',
              C: '#minecraft:logs',
              D: 'minecraft:coal_block',
              E: '#forge:rods/wooden',
          },
          id: `${prefix}campfire`
        },
        {
          output: 'minecraft:shears',
          pattern: [' A','A '],
          key: {
              A: '#forge:plates/iron'
          },
          id: `${prefix}shears`
        },
        {
          output: 'minecraft:furnace',
          pattern: ['BBB','BCB','AAA'],
          key: {
              A: 'minecraft:stone',
              B: 'quark:sturdy_stone',
              C: 'minecraft:campfire'
          },
          id: `${prefix}furnace`
        },
        {
          output: 'minecraft:cauldron',
          pattern: ['B B','BCB','DAD'],
          key: {
              A: '#createbigcannons:block_steel',
              B: 'minecraft:iron_ingot',
              C: 'minecraft:bucket',
              D: 'minecraft:copper_ingot'
          },
          id: `${prefix}cauldron`
        },
  ];
  
  recipes.forEach((recipe) => {
      event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
  });
});