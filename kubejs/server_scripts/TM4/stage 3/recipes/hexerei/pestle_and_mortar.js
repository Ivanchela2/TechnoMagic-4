ServerEvents.recipes((event) => {
	const prefix = 'gribtweaks:hexerei/pestle_and_mortar/';
	const recipes = [
		{ 
            type: "hexerei:pestle_and_mortar",
            ingredients: [
              {item: 'hexerei:dried_sage'},
              {item: 'hexerei:dried_belladonna_flowers'},
              {item: 'hexerei:dried_mugwort_flowers'},
              {item: 'hexerei:dried_yellow_dock_flowers'},
              {item: 'hexerei:dried_yellow_dock_leaves'},
            ],
            output: {
                item: 'gribtweaks:piece_of_cloth',
                count: 2
            },
            grindingTime: 300,
			id: `${prefix}piece_of_cloth`
		},
    ]
    recipes.forEach(recipe => {
        event.custom({
            type: recipe.type,
            ingredients: recipe.ingredients,
            output: recipe.output,
            grindingTime: recipe.grindingTime,
          }).id(recipe.id)
        })
    })