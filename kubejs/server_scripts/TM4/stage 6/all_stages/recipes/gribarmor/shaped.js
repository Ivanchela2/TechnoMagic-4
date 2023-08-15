ServerEvents.recipes((event) => {
    const prefix = 'gribarmor:shaped/';
    const recipes = [
      {
        output: 'gribarmormod:dirt_helmet',
        pattern: ['MMM', 'M M'],
        key: {
          M: '#chipped:dirt'
        },
        id: `${prefix}dirt_helmet`
      },
      {
        output: 'gribarmormod:dirt_chestplate',
        pattern: ['M M', 'MMM', 'MMM'],
        key: {
          M: '#chipped:dirt'
        },
        id: `${prefix}dirt_chestplate`
      },
      {
        output: 'gribarmormod:dirt_leggings',
        pattern: ['MMM', 'M M', 'M M'],
        key: {
          M: '#chipped:dirt'
        },
        id: `${prefix}dirt_leggings`
      },
      {
        output: 'gribarmormod:dirt_boots',
        pattern: ['M M', 'M M'],
        key: {
          M: '#chipped:dirt'
        },
        id: `${prefix}dirt_boots`
      },
      {
        output: 'gribarmormod:cactus_helmet',
        pattern: ['MMM', 'M M'],
        key: {
          M: 'minecraft:cactus'
        },
        id: `${prefix}cactus_helmet`
      },
      {
        output: 'gribarmormod:cactus_chestplate',
        pattern: ['M M', 'MMM', 'MMM'],
        key: {
          M: 'minecraft:cactus'
        },
        id: `${prefix}cactus_chestplate`
      },
      {
        output: 'gribarmormod:cactus_leggings',
        pattern: ['MMM', 'M M', 'M M'],
        key: {
          M: 'minecraft:cactus'
        },
        id: `${prefix}cactus_leggings`
      },
      {
        output: 'gribarmormod:cactus_boots',
        pattern: ['M M', 'M M'],
        key: {
          M: 'minecraft:cactus'
        },
        id: `${prefix}cactus_boots`
      },
      {
        output: 'gribarmormod:eatable_helmet',
        pattern: ['BHP', 'C M'],
        key: {
          B: 'minecraft:beetroot',
          C: 'minecraft:carrot',
          H: 'minecraft:hay_block',
          M: 'minecraft:melon_slice',
          P: 'minecraft:potato',
        },
        id: `${prefix}eatable_helmet`
      },
      {
        output: 'gribarmormod:eatable_chestplate',
        pattern: ['M P', 'CTA', 'HBH'],
        key: {
          A: 'minecraft:apple',
          B: 'minecraft:beetroot',
          C: 'minecraft:carrot',
          H: 'minecraft:hay_block',
          M: 'minecraft:melon_slice',
          P: 'minecraft:potato',
          T: 'minecraft:pumpkin_pie'
        },
        id: `${prefix}eatable_chestplate`
      },
      {
        output: 'gribarmormod:eatable_leggings',
        pattern: ['MAC', 'P B', 'H H'],
        key: {
          A: 'minecraft:apple',
          B: 'minecraft:beetroot',
          C: 'minecraft:carrot',
          H: 'minecraft:hay_block',
          M: 'minecraft:melon_slice',
          P: 'minecraft:potato'
        },
        id: `${prefix}eatable_leggings`
      },
      {
        output: 'gribarmormod:eatable_boots',
        pattern: ['C M', 'H H'],
        key: {
          C: 'minecraft:carrot',
          H: 'minecraft:hay_block',
          M: 'minecraft:melon_slice'
        },
        id: `${prefix}eatable_boots`
      },
      {
        output: 'gribarmormod:wooden_helmet',
        pattern: ['MMM', 'M M'],
        key: {
          M: '#chipped:oak_log'
        },
        id: `${prefix}wooden_helmet`
      },
      {
        output: 'gribarmormod:wooden_chestplate',
        pattern: ['M M', 'MMM', 'MMM'],
        key: {
          M: '#chipped:oak_log'
        },
        id: `${prefix}wooden_chestplate`
      },
      {
        output: 'gribarmormod:weakness_wooden_nature_chestplate',
        pattern: ['B R', 'VCV', 'GVG'],
        key: {
          B: 'minecraft:brown_mushroom',
          C: 'gribarmormod:wooden_chestplate',
          G: 'gribtweaks:tained_gold_leaf',
          R: 'minecraft:red_mushroom',
          V: 'minecraft:vine'
        },
        id: `${prefix}weakness_wooden_nature_chestplate`
      },
      {
        output: 'gribarmormod:wooden_nature_chestplate',
        pattern: ['S S', 'FCF', 'PVP'],
        key: {
          C: 'gribarmormod:weakness_wooden_nature_chestplate',
          F: '#minecraft:flowers',
          P: { type: 'forge:nbt', 'item':'rootsclassic:spell_powder', 'nbt': '{"rootsclassic:effect":"rootsclassic:peony","rootsclassic:efficiency":0,"rootsclassic:potency":0,"rootsclassic:size":0}' },
          S: '#minecraft:saplings',
          V: 'rootsclassic:verdant_sprig'
        },
        id: `${prefix}wooden_nature_chestplate`
      },
      {
        output: 'gribarmormod:wooden_leggings',
        pattern: ['MMM', 'M M', 'M M'],
        key: {
          M: '#chipped:oak_log'
        },
        id: `${prefix}wooden_leggings`
      },
      {
        output: 'gribarmormod:wooden_boots',
        pattern: ['M M', 'M M'],
        key: {
          M: '#chipped:oak_log'
        },
        id: `${prefix}wooden_boots`
      },
      {
        output: 'gribarmormod:stone_helmet',
        pattern: ['mMM', 'M m'],
        key: {
          M: '#chipped:cobblestone',
          m: '#chipped:stone'
        },
        id: `${prefix}stone_helmet`
      },
      {
        output: 'gribarmormod:stone_chestplate',
        pattern: ['m M', 'mmM', 'MMm'],
        key: {
          M: '#chipped:cobblestone',
          m: '#chipped:stone'
        },
        id: `${prefix}stone_chestplate`
      },
      {
        output: 'gribarmormod:weakness_stone_chestplate',
        pattern: ['I I', 'FCF', 'IGI'],
        key: {
          C:'gribarmormod:stone_chestplate',
          F: '#forge:feathers',
          G: 'minecraft:glowstone_dust',
          I: 'minecraft:iron_nugget'
        },
        id: `${prefix}weakness_stone_chestplate`
      },
      {
        output: 'gribarmormod:ancient_stone_chestplate',
        pattern: ['S S', 'MCM', 'SPS'],
        key: {
          C: 'gribarmormod:weakness_stone_chestplate',
          M: 'minecraft:moss_block',
          P: { type: 'forge:nbt', 'item':'rootsclassic:spell_powder', 'nbt': '{"rootsclassic:effect":"rootsclassic:azure_bluet","rootsclassic:efficiency":0,"rootsclassic:potency":0,"rootsclassic:size":0}' },
          S: '#chipped:mossy_stone_bricks'
        },
        id: `${prefix}ancient_stone_chestplate`
      },
      {
        output: 'gribarmormod:stone_leggings',
        pattern: ['Mmm', 'M m', 'm M'],
        key: {
          M: '#chipped:cobblestone',
          m: '#chipped:stone'
        },
        id: `${prefix}stone_leggings`
      },
      {
        output: 'gribarmormod:stone_boots',
        pattern: ['M m', 'm M'],
        key: {
          M: '#chipped:cobblestone',
          m: '#chipped:stone'
        },
        id: `${prefix}stone_boots`
      },
      {
        output: 'gribarmormod:nature_chestplate',
        pattern: ['M M', 'DCD', 'MIM'],
        key: {
          C: 'gribtweaks:nature_core',
          D: 'minecraft:polished_diorite',
          I: 'gribtweaks:component_ingot',
          M: 'minecraft:moss_block'
        },
        id: `${prefix}nature_chestplate`
      },
      {
        output: 'gribtweaks:nature_core',
        pattern: ['DQM', 'PCP', 'MQD'],
        key: {
          C: 'gribtweaks:hope_catalyst',
          D: '#chipped:diorite',
          M: 'minecraft:moss_block',
          P: 'gribtweaks:compressed_phantom_membrane',
          Q: 'gribtweaks:polished_quartz'
        },
        id: `${prefix}nature_core`
      }
    ];
    
    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
  });