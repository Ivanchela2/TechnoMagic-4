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
        {
          output: 'minecraft:wooden_sword',
          pattern: ['A','A','B'],
          key: {
              A: '#minecraft:planks',
              B: 'gribtweaks:iron_stick'
          },
          id: `${prefix}wooden_sword`
        },
        {
          output: 'minecraft:wooden_hoe',
          pattern: [' AA',' C ',' B '],
          key: {
              A: '#minecraft:planks',
              B: 'gribtweaks:iron_stick',
              C: 'create:andesite_alloy'
          },
          id: `${prefix}wooden_hoe`
        },
        {
          output: 'minecraft:wooden_axe',
          pattern: [' AA',' CA',' B '],
          key: {
              A: '#minecraft:planks',
              B: 'gribtweaks:iron_stick',
              C: 'create:andesite_alloy'
          },
          id: `${prefix}wooden_axe`
        },
        {
          output: 'minecraft:wooden_pickaxe',
          pattern: ['AAA',' C ',' B '],
          key: {
              A: '#minecraft:planks',
              B: 'gribtweaks:iron_stick',
              C: 'create:andesite_alloy'
          },
          id: `${prefix}wooden_pickaxe`
        },
        {
          output: 'minecraft:wooden_shovel',
          pattern: ['A','C','B'],
          key: {
              A: '#minecraft:planks',
              B: 'gribtweaks:iron_stick',
              C: 'create:andesite_alloy'
          },
          id: `${prefix}wooden_shovel`
        },




        {
          output: 'minecraft:iron_sword',
          pattern: ['D','D','A'],
          key: {
              A: 'gribtweaks:iron_stick',
              D: 'minecraft:iron_ingot'
          },
          id: `${prefix}iron_sword`
        },
        {
          output: 'minecraft:iron_hoe',
          pattern: [' CD',' B ',' A '],
          key: {
              A: 'gribtweaks:iron_stick',
              B: '#forge:rods/wooden',
              C: 'minecraft:flint',
              D: 'minecraft:iron_ingot'
          },
          id: `${prefix}iron_hoe`
        },
        {
          output: 'minecraft:iron_axe',
          pattern: [' CD',' BD',' A '],
          key: {
              A: 'gribtweaks:iron_stick',
              B: '#forge:rods/wooden',
              C: 'minecraft:flint',
              D: 'minecraft:iron_ingot'
          },
          id: `${prefix}iron_axe`
        },
        {
          output: 'minecraft:iron_pickaxe',
          pattern: ['DCD',' B ',' A '],
          key: {
              A: 'gribtweaks:iron_stick',
              B: '#forge:rods/wooden',
              C: 'minecraft:flint',
              D: 'minecraft:iron_ingot'
          },
          id: `${prefix}iron_pickaxe`
        },
        {
          output: 'minecraft:iron_shovel',
          pattern: ['D','B','A'],
          key: {
              A: 'gribtweaks:iron_stick',
              B: '#forge:rods/wooden',
              D: 'minecraft:iron_ingot'
          },
          id: `${prefix}iron_shovel`
        },
  ];
  
  recipes.forEach((recipe) => {
      event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
  });
});