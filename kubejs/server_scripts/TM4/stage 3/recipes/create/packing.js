ServerEvents.recipes(e => {
    const prefix = 'tm4:create/compacting/';
    const recipes = [
        {
            type: "create:compacting",
            ingredients: [
              {
                item: 'hexerei:witch_ingot_block'
              },
              {
                item: 'hexerei:witch_ingot_block'
              }
            ],
            results: [
              {
                item: 'hexerei:witch_sheet'
              }
            ],
            id: `${prefix}witch_sheet`
          }
    ]
    recipes.forEach(recipe => {
        e.custom({
            type: recipe.type,
            ingredients: recipe.ingredients,
            results: recipe.results,
        }).id(recipe.id);
    });
});