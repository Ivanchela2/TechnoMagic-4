ServerEvents.recipes((event) => {
  const prefix = 'gribtweaks:instruments/shaped/';
  const recipes = [
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

//////////////////////////////////////////////////////////////////////////////////

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

//////////////////////////////////////////////////////////////////////////////////

        {
          output: 'minecraft:diamond_sword',
          pattern: ['D','D','A'],
          key: {
              A: 'gribtweaks:iron_stick',
              D: 'minecraft:diamond'
          },
          id: `${prefix}diamond_sword`
        },
        {
          output: 'minecraft:diamond_hoe',
          pattern: [' CD',' A ',' A '],
          key: {
              A: 'gribtweaks:iron_stick',
              C: 'minecraft:flint',
              D: 'minecraft:diamond'
          },
          id: `${prefix}diamond_hoe`
        },
        {
          output: 'minecraft:diamond_axe',
          pattern: [' CD',' AD',' A '],
          key: {
              A: 'gribtweaks:iron_stick',
              C: 'minecraft:flint',
              D: 'minecraft:diamond'
          },
          id: `${prefix}diamond_axe`
        },
        {
          output: 'minecraft:diamond_pickaxe',
          pattern: ['DCD',' A ',' A '],
          key: {
              A: 'gribtweaks:iron_stick',
              C: 'minecraft:flint',
              D: 'minecraft:diamond'
          },
          id: `${prefix}diamond_pickaxe`
        },
        {
          output: 'minecraft:diamond_shovel',
          pattern: ['D','A','A'],
          key: {
              A: 'gribtweaks:iron_stick',
              D: 'minecraft:diamond'
          },
          id: `${prefix}diamond_shovel`
        },

//////////////////////////////////////////////////////////////////////////////////

        {
          output: 'ae2:certus_quartz_sword',
          pattern: ['D','D','A'],
          key: {
              A: 'gribtweaks:iron_stick',
              D: '#forge:gems/certus_quartz'
          },
          id: `${prefix}certus_quartz_sword`
        },
        {
          output: 'ae2:certus_quartz_hoe',
          pattern: [' CD',' B ',' A '],
          key: {
              A: 'gribtweaks:iron_stick',
              B: '#forge:rods/wooden',
              C: 'minecraft:flint',
              D: '#forge:gems/certus_quartz'
          },
          id: `${prefix}certus_quartz_hoe`
        },
        {
          output: 'ae2:certus_quartz_axe',
          pattern: [' CD',' BD',' A '],
          key: {
              A: 'gribtweaks:iron_stick',
              B: '#forge:rods/wooden',
              C: 'minecraft:flint',
              D: '#forge:gems/certus_quartz'
          },
          id: `${prefix}certus_quartz_axe`
        },
        {
          output: 'ae2:certus_quartz_pickaxe',
          pattern: ['DCD',' B ',' A '],
          key: {
              A: 'gribtweaks:iron_stick',
              B: '#forge:rods/wooden',
              C: 'minecraft:flint',
              D: '#forge:gems/certus_quartz'
          },
          id: `${prefix}certus_quartz_pickaxe`
        },
        {
          output: 'ae2:certus_quartz_shovel',
          pattern: ['D','B','A'],
          key: {
              A: 'gribtweaks:iron_stick',
              B: '#forge:rods/wooden',
              D: '#forge:gems/certus_quartz'
          },
          id: `${prefix}certus_quartz_shovel`
        },

//////////////////////////////////////////////////////////////////////////////////

        {
          output: 'ae2:nether_quartz_sword',
          pattern: ['D','D','A'],
          key: {
              A: 'gribtweaks:iron_stick',
              D: 'minecraft:quartz'
          },
          id: `${prefix}nether_quartz_sword`
        },
        {
          output: 'ae2:nether_quartz_hoe',
          pattern: [' CD',' B ',' A '],
          key: {
              A: 'gribtweaks:iron_stick',
              B: '#forge:rods/wooden',
              C: 'minecraft:flint',
              D: 'minecraft:quartz'
          },
          id: `${prefix}nether_quartz_hoe`
        },
        {
          output: 'ae2:nether_quartz_axe',
          pattern: [' CD',' BD',' A '],
          key: {
              A: 'gribtweaks:iron_stick',
              B: '#forge:rods/wooden',
              C: 'minecraft:flint',
              D: 'minecraft:quartz'
          },
          id: `${prefix}nether_quartz_axe`
        },
        {
          output: 'ae2:nether_quartz_pickaxe',
          pattern: ['DCD',' B ',' A '],
          key: {
              A: 'gribtweaks:iron_stick',
              B: '#forge:rods/wooden',
              C: 'minecraft:flint',
              D: 'minecraft:quartz'
          },
          id: `${prefix}nether_quartz_pickaxe`
        },
        {
          output: 'ae2:nether_quartz_shovel',
          pattern: ['D','B','A'],
          key: {
              A: 'gribtweaks:iron_stick',
              B: '#forge:rods/wooden',
              D: 'minecraft:quartz'
          },
          id: `${prefix}nether_quartz_shovel`
        },

//////////////////////////////////////////////////////////////////////////////////

        {
          output: 'occultism:iesnium_pickaxe',
          pattern: ['DCD',' A ',' A '],
          key: {
              A: 'gribtweaks:iron_stick',
              C: 'minecraft:flint',
              D: 'occultism:iesnium_ingot'
          },
          id: `${prefix}iesnium_pickaxe`
        },

//////////////////////////////////////////////////////////////////////////////////
  ];
  
  recipes.forEach((recipe) => {
      event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
  });
});