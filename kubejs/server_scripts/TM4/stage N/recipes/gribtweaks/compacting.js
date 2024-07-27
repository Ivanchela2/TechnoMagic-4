ServerEvents.recipes(e => {
    const prefix = 'gribtweaks:compacting/';
    const recipes = [
        {
            ingredients: [
              {
                item: 'gribtweaks:witch_ingot_block'
              },
              {
                item: 'gribtweaks:witch_ingot_block'
              }
            ],
            results: [
              {
                item: 'gribtweaks:witch_sheet'
              }
            ],
            id: `${prefix}witch_sheet`
          }
    ]
    recipes.forEach(recipe => {
        e.custom({
            type: 'create:compacting',
            ingredients: recipe.ingredients,
            results: recipe.results,
        }).id(recipe.id);
    });
});