ServerEvents.recipes(event => {
    const prefix = 'tm4:biggerreactors/shaped/';
    const recipes = [
      {
          output: 'biggerreactors:uranium_block',
          pattern: ['AAA', 'AAA', 'AAA'],
          key: {
              A: ['biggerreactors:uranium_ingot', 'indreb:uranium_ingot', 'chemlib:uranium_ingot']
          },
          id: `${prefix}uranium_block`
      }
  ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
