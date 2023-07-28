ServerEvents.recipes(e => {
    const prefix = 'tm4:ad_astra/nasa/'
    const recipes = [
      {
        ingredients: [
            {ingredient: {item: "ad_astra:reinforced_rocket_nose_cone"}},{ingredient: {item: "ad_astra:reinforced_covering"}},{ingredient: {item: "ad_astra:reinforced_covering"}},{ingredient: {item: "ad_astra:reinforced_covering"}},{ingredient: {item: "ad_astra:reinforced_covering"}},
            {ingredient: {item: "ad_astra:reinforced_covering"}},{ingredient: {item: "ad_astra:reinforced_covering"}},{ingredient: {item: "ad_astra:reinforced_rocket_fin"}},{ingredient: {item: "ad_astra:desh_tank"}},
            {ingredient: {item: "ad_astra:desh_tank"}},{ingredient: {item: "ad_astra:reinforced_rocket_fin"}},{ingredient: {item: "ad_astra:reinforced_rocket_fin"}},
            {ingredient: {item: "ad_astra:desh_engine"}},{ingredient: {item: "ad_astra:reinforced_rocket_fin"}}],
        output: "ad_astra:tier_2_rocket",
        id: `${prefix}tier_2_rocket`
      },
      {
        ingredients: [
            {ingredient: {item: "ad_astra:advanced_rocket_nose_cone"}},{ingredient: {item: "ad_astra:advanced_covering"}},{ingredient: {item: "ad_astra:advanced_covering"}},{ingredient: {item: "ad_astra:advanced_covering"}},{ingredient: {item: "ad_astra:advanced_covering"}},
            {ingredient: {item: "ad_astra:advanced_covering"}},{ingredient: {item: "ad_astra:advanced_covering"}},{ingredient: {item: "ad_astra:advanced_rocket_fin"}},{ingredient: {item: "ad_astra:ostrum_tank"}},
            {ingredient: {item: "ad_astra:ostrum_tank"}},{ingredient: {item: "ad_astra:advanced_rocket_fin"}},{ingredient: {item: "ad_astra:advanced_rocket_fin"}},
            {ingredient: {item: "ad_astra:ostrum_engine"}},{ingredient: {item: "ad_astra:advanced_rocket_fin"}}],
        output: "ad_astra:tier_3_rocket",
        id: `${prefix}tier_3_rocket`
      },
      {
        ingredients: [
            {ingredient: {item: "ad_astra:ultra_rocket_nose_cone"}},{ingredient: {item: "ad_astra:ultra_covering"}},{ingredient: {item: "ad_astra:ultra_covering"}},{ingredient: {item: "ad_astra:ultra_covering"}},{ingredient: {item: "ad_astra:ultra_covering"}},
            {ingredient: {item: "ad_astra:ultra_covering"}},{ingredient: {item: "ad_astra:ultra_covering"}},{ingredient: {item: "ad_astra:ultra_rocket_fin"}},{ingredient: {item: "ad_astra:calorite_tank"}},
            {ingredient: {item: "ad_astra:calorite_tank"}},{ingredient: {item: "ad_astra:ultra_rocket_fin"}},{ingredient: {item: "ad_astra:ultra_rocket_fin"}},
            {ingredient: {item: "ad_astra:calorite_engine"}},{ingredient: {item: "ad_astra:ultra_rocket_fin"}}],
        output: "ad_astra:tier_4_rocket",
        id: `${prefix}tier_4_rocket`
      }
    ]

    recipes.forEach(recipe => {
        e.custom({
            type: "ad_astra:nasa_workbench",
            ingredients: recipe.ingredients,
            ingredient: recipe.ingredient,
            output: recipe.output
        }).id(recipe.id)
    })
})