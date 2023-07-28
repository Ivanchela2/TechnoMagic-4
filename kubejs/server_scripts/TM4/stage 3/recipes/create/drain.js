ServerEvents.recipes((event) => {
	const prefix = 'tm4:create/emptying/';
	const recipes = [
		{ 
			type: "create:emptying",
			ingredients: [
                    {item: 'twilightforest:focus_element'}
            ],
            results: [
                {
                  "amount": 500,
                  "fluid": 'hexerei:life_liquid_essence'
                }
              ],
              id: `${prefix}life_liquid_essence`
		}
    ]
    recipes.forEach(recipe => {
        event.custom({
            type: recipe.type,
            ingredients: recipe.ingredients,
            results: recipe.results
		}).id(recipe.id)
        })
    })