ServerEvents.recipes(e => {
    const recipes = [
      {
        type: 'ad_astra:nasa_workbench',
        ingredients: [
            {ingredient: {item: 'ad_astra:rocket_nose_cone'}},{ingredient: {item: 'ad_astra:rocket_covering'}},{ingredient: {item: 'ad_astra:rocket_covering'}},{ingredient: {item: 'ad_astra:rocket_covering'}},{ingredient: {item: 'ad_astra:rocket_covering'}},
            {ingredient: {item: 'ad_astra:rocket_covering'}},{ingredient: {item: 'ad_astra:rocket_covering'}},{ingredient: {item: 'ad_astra:rocket_fin'}},{ingredient: {item: 'ad_astra:steel_tank'}},
            {ingredient: {item: 'ad_astra:steel_tank'}},{ingredient: {item: 'ad_astra:rocket_fin'}},{ingredient: {item: 'ad_astra:rocket_fin'}},
            {ingredient: {item: 'ad_astra:steel_engine'}},{ingredient: {item: 'ad_astra:rocket_fin'}}],
        output: 'ad_astra:tier_1_rocket'
      }
    ]

    recipes.forEach(recipe => {
        e.custom({
            type: 'ad_astra:nasa_workbench',
            ingredients: recipe.ingredients,
            ingredient: recipe.ingredient,
            output: recipe.output
        })
    })
})