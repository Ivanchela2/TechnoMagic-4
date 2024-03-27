ServerEvents.recipes((event) => {
    const prefix = 'gribtweaks:rootsclassic/shaped/';
    const recipes = [  
          {
            output: 'rootsclassic:bark_knife',
            pattern: [' AB', 'CBA', 'DC '],
            key: {
              A: 'seeds:sharp_leaf',
              B: 'minecraft:diamond',
              C: 'gribtweaks:buffalo_hide_rope',
              D: '#notreepunching:sticks'
            },
            id: `${prefix}bark_knife`
          },    
          {
            output: '2x rootsclassic:brazier',
            pattern: ['AEA', 'DCD', 'ABA'],
            key: {
              A: 'minecraft:deepslate_tiles',
              B: 'minecraft:iron_block',
              C: 'minecraft:cauldron',
              D: '#bookshelf:strings',
              E: '#notreepunching:sticks'
            },
            id: `${prefix}brazier`
          },  
          {
            output: 'rootsclassic:altar',
            pattern: ['DEF', 'CBC', 'AAA'],
            key: {
              A: 'minecraft:deepslate_tiles',
              B: 'vc_gliders:reinforced_paper_gold',
              C: 'quark:sturdy_stone',
              D: 'minecraft:hay_block',
              E: 'minecraft:poppy',
              F: 'rootsclassic:verdant_sprig'
            },
            id: `${prefix}altar`
          }, 
          {
            output: 'rootsclassic:pestle',
            pattern: ['  C', 'BA ', 'BB '],
            key: {
              A: 'minecraft:iron_block',
              B: 'create:cut_diorite',
              C: '#notreepunching:sticks',
            },
            id: `${prefix}pestle`
          }, 
          {
            output: 'rootsclassic:verdant_sprig',
            pattern: ['AB', 'CD'],
            key: {
              A: '#minecraft:leaves',
              B: 'farmersdelight:cabbage',
              C: 'minecraft:kelp',
              D: 'minecraft:grass'
            },
            id: `${prefix}verdant_sprig`
          }, 
          {
            output: 'rootsclassic:mortar',
            pattern: ['C C', 'B B', 'ABA'],
            key: {
              A: '#createbigcannons:sheet_steel',
              B: 'minecraft:deepslate_tiles',
              C: 'totemic:eagle_bone'
            },
            id: `${prefix}mortar`
          }, 
          {
            output: '2x rootsclassic:mundane_standing_stone',
            pattern: ['EDE', 'ECE', 'ABA'],
            key: {
              A: 'minecraft:amethyst_block',
              B: '#createbigcannons:block_steel',
              C: 'create:super_glue',
              D: 'minecraft:lapis_block',
              E: 'minecraft:deepslate_tiles',
            },
            id: `${prefix}mundane_standing_stone`
          }, 
    ];
    
    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
  });