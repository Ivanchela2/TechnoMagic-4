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
    ];
    
    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
  });