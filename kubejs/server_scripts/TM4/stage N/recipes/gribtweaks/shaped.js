ServerEvents.recipes((event) => {
    const prefix = 'gribtweaks:shaped/';
    const recipes = [
          {
            output: 'gribtweaks:baykok_bone_pickaxe',
            pattern: ['AAB', ' CA', 'C A'],
            key: {
              A: 'gribtweaks:baykok_bone',
              B: 'gribtweaks:buffalo_hide_rope',
              C: 'minecraft:stick'
            },
            id: `${prefix}baykok_bone_pickaxe`
          },    
          {
            output: 'gribtweaks:buffalo_hide_rope',
            pattern: ['AAA', 'AAA'],
            key: {
              A: 'gribtweaks:buffalo_hide_fiber'
            },
            id: `${prefix}buffalo_hide_rope`
          },   
          {
            output: 'gribtweaks:stone_stick',
            pattern: [' BA', 'BAB', 'AB '],
            key: {
              A: 'minecraft:stick',
              B: 'minecraft:cobblestone'
            },
            id: `${prefix}stone_stick`
          },
          {
            output: 'gribtweaks:iron_stick',
            pattern: [' BA', 'BAB', 'AB '],
            key: {
              A: 'gribtweaks:stone_stick',
              B: 'minecraft:iron_ingot'
            },
            id: `${prefix}iron_stick`
          },
          {
            output: 'gribtweaks:compressed_ash_block',
            pattern: ['aa','aa','  '],
            key: {
                a: 'gribtweaks:ash_block'
            },
            id: `${prefix}compressed_ash_block`
        },  
    ];
    
    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
  });