ServerEvents.recipes(e => {
      const prefix = 'gribtweaks:ad_astra/nasa_workbench/' 
      const recipes = [
      {
        ingredients: [
            {ingredient: {item: 'ad_astra:rocket_nose_cone'}},{ingredient: {item: 'gribtweaks:rocket_covering'}},{ingredient: {item: 'gribtweaks:rocket_covering'}},{ingredient: {item: 'gribtweaks:rocket_covering'}},{ingredient: {item: 'gribtweaks:rocket_covering'}},
            {ingredient: {item: 'gribtweaks:rocket_covering'}},{ingredient: {item: 'gribtweaks:rocket_covering'}},{ingredient: {item: 'ad_astra:rocket_fin'}},{ingredient: {item: 'ad_astra:steel_tank'}},
            {ingredient: {item: 'ad_astra:steel_tank'}},{ingredient: {item: 'ad_astra:rocket_fin'}},{ingredient: {item: 'ad_astra:rocket_fin'}},
            {ingredient: {item: 'ad_astra:steel_engine'}},{ingredient: {item: 'ad_astra:rocket_fin'}}],
        output: 'ad_astra:tier_1_rocket',
        id: `${prefix}tier_1_rocket`
      },
      {
        ingredients: [
            {ingredient: {item: 'gribtweaks:reinforced_rocket_nose_cone'}},{ingredient: {item: 'gribtweaks:reinforced_covering'}},{ingredient: {item: 'gribtweaks:reinforced_covering'}},{ingredient: {item: 'gribtweaks:reinforced_covering'}},{ingredient: {item: 'gribtweaks:reinforced_covering'}},
            {ingredient: {item: 'gribtweaks:reinforced_covering'}},{ingredient: {item: 'gribtweaks:reinforced_covering'}},{ingredient: {item: 'gribtweaks:reinforced_rocket_fin'}},{ingredient: {item: 'ad_astra:desh_tank'}},
            {ingredient: {item: 'ad_astra:desh_tank'}},{ingredient: {item: 'gribtweaks:reinforced_rocket_fin'}},{ingredient: {item: 'gribtweaks:reinforced_rocket_fin'}},
            {ingredient: {item: 'ad_astra:desh_engine'}},{ingredient: {item: 'gribtweaks:reinforced_rocket_fin'}}],
        output: 'ad_astra:tier_2_rocket',
        id: `${prefix}tier_2_rocket`
      },
      {
        ingredients: [
            {ingredient: {item: 'gribtweaks:advanced_rocket_nose_cone'}},{ingredient: {item: 'gribtweaks:advanced_covering'}},{ingredient: {item: 'gribtweaks:advanced_covering'}},{ingredient: {item: 'gribtweaks:advanced_covering'}},{ingredient: {item: 'gribtweaks:advanced_covering'}},
            {ingredient: {item: 'gribtweaks:advanced_covering'}},{ingredient: {item: 'gribtweaks:advanced_covering'}},{ingredient: {item: 'gribtweaks:advanced_rocket_fin'}},{ingredient: {item: 'ad_astra:ostrum_tank'}},
            {ingredient: {item: 'ad_astra:ostrum_tank'}},{ingredient: {item: 'gribtweaks:advanced_rocket_fin'}},{ingredient: {item: 'gribtweaks:advanced_rocket_fin'}},
            {ingredient: {item: 'ad_astra:ostrum_engine'}},{ingredient: {item: 'gribtweaks:advanced_rocket_fin'}}],
        output: 'ad_astra:tier_3_rocket',
        id: `${prefix}tier_3_rocket`
      },
      {
        ingredients: [
            {ingredient: {item: 'gribtweaks:ultra_rocket_nose_cone'}},{ingredient: {item: 'gribtweaks:ultra_covering'}},{ingredient: {item: 'gribtweaks:ultra_covering'}},{ingredient: {item: 'gribtweaks:ultra_covering'}},{ingredient: {item: 'gribtweaks:ultra_covering'}},
            {ingredient: {item: 'gribtweaks:ultra_covering'}},{ingredient: {item: 'gribtweaks:ultra_covering'}},{ingredient: {item: 'gribtweaks:ultra_rocket_fin'}},{ingredient: {item: 'ad_astra:calorite_tank'}},
            {ingredient: {item: 'ad_astra:calorite_tank'}},{ingredient: {item: 'gribtweaks:ultra_rocket_fin'}},{ingredient: {item: 'gribtweaks:ultra_rocket_fin'}},
            {ingredient: {item: 'ad_astra:calorite_engine'}},{ingredient: {item: 'gribtweaks:ultra_rocket_fin'}}],
        output: 'ad_astra:tier_4_rocket',
        id: `${prefix}tier_4_rocket`
      }
    ]

    recipes.forEach(recipe => {
      e.custom({
          type: 'ad_astra:nasa_workbench',
          ingredients: recipe.ingredients,
          ingredient: recipe.ingredient,
          output: recipe.output
      }).id(recipe.id)
    })
})