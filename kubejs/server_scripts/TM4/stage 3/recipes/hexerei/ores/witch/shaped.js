ServerEvents.recipes((event) => {
    const prefix = 'tm4:hexerei/shaped/';
    const recipes = [
      { 
        output: 'hexerei:witch_ingot_block', 
        pattern: [
          'AAA', 
          'AAA', 
          'AAA'
          ],
        key: {
          A: 'hexerei:witch_ingot', 
        },
        id: `${prefix}witch_ingot_block`
      },
      { 
        output: 'hexerei:witch_ingot', 
        pattern: [
          'AAA', 
          'AAA', 
          'AAA'
          ],
        key: {
          A: 'hexerei:witch_nugget'
        },
        id: `${prefix}witch_ingot`
      },
    ];
  
      recipes.forEach((recipe) => {
          event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
      });
  });