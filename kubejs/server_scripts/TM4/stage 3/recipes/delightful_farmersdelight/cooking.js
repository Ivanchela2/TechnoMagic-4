ServerEvents.recipes((event) => {
	const prefix = 'gribtweaks:farmersdelight/cooking/';
	const recipes = [
        {
                type: "farmersdelight:cooking",
                cookingtime: 200,
                experience: 1.0,
                ingredients: [
                  {
                    item: 'rootsclassic:blackcurrant'
                  },
                  {
                    item: 'rootsclassic:nightshade'
                  },
                  {
                    item: 'farmersrespite:rose_hips'
                  }
                ],
                result: {
                  item: 'minecraft:sweet_berries'
                },
           id: `${prefix}sweet_berries`
          }
    ]
    recipes.forEach(recipe => {
        event.custom({
            type: recipe.type,
            cookingtime: recipe.cookingtime,
            experience: recipe.experience,
            ingredients: recipe.ingredients,
            result: recipe.result,
          }).id(recipe.id)
        })
    })