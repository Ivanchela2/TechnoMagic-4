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
          pattern: [' A ','EDE','CBC'],
          key: {
              A: 'notreepunching:fire_starter',
              B: 'gribtweaks:compressed_ash_block',
              C: '#minecraft:logs',
              D: 'minecraft:coal_block',
              E: '#forge:rods/wooden',
          },
          id: `${prefix}campfire`
        },
        {
          output: 'minecraft:furnace',
          pattern: ['BBB','BCB','AAA'],
          key: {
              A: 'minecraft:stone',
              B: 'cobblestone',
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
        {
          output: 'minecraft:hopper', 
          pattern: ['CBC', 'CAC', ' C '],
          key: {
              A: '#forge:chests/wooden', 
              B: 'quark:chute',
              C: 'minecraft:iron_ingot'
          },
          id: `${prefix}hopper`
        },
  ];
  
  recipes.forEach((recipe) => {
      event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
  });
});