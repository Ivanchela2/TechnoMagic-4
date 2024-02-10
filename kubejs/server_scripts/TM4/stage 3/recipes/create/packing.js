ServerEvents.recipes(e => {
    const prefix = 'gribtweaks:create/compacting/';
    const recipes = [
        {
            type: "create:compacting",
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
            type: recipe.type,
            ingredients: recipe.ingredients,
            results: recipe.results,
        }).id(recipe.id);
    });
});