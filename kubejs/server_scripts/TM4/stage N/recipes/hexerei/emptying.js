ServerEvents.recipes((event) => {
	const prefix = 'gribtweaks:emptying/';
	const recipes = [
		{ 
			ingredients: [
                    {item: 'gribtweaks:focus_element'}
            ],
            results: [
                {
                  'amount': 500,
                  'fluid': 'hexerei:life_liquid_essence'
                }
              ],
              id: `${prefix}life_liquid_essence`
		}
    ]
    recipes.forEach(recipe => {
        event.custom({
            type: 'create:emptying',
            ingredients: recipe.ingredients,
            results: recipe.results
		}).id(recipe.id)
        })
    })