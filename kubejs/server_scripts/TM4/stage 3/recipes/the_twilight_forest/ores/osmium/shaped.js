ServerEvents.recipes((event) => {
    const prefix = 'tm4:thetwilightforest/shaped/';
    const recipes = [
      { 
        output: 'twilightforest:block_osmium', 
        pattern: [
          'AAA', 
          'AAA', 
          'AAA'
          ],
        key: {
          A: 'twilightforest:ingot_osmium', 
        },
        id: `${prefix}block_osmium`
      },
      { 
        output: 'twilightforest:ingot_osmium', 
        pattern: [
          'AAA', 
          'AAA', 
          'AAA'
          ],
        key: {
          A: 'twilightforest:nugget_osmium'
        },
        id: `${prefix}nugget_osmium`
      },
    ];
  
      recipes.forEach((recipe) => {
          event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
      });
  });