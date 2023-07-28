ServerEvents.recipes((event) => {
	const prefix = 'tm4:create/splashing/';
	const recipes = [
        //{
            //type: "create:splashing",
            //ingredients: [
             // {
                //item: 'twilightforest:mayapple'
              //}
           // ],
           // results: [
             // {
              //  item: 'minecraft:brick'
             // },
           // ],
           // id: `${prefix}glow_berries`
       // }	
    ]
    recipes.forEach(recipe => {
        event.custom({
            type: recipe.type,
            ingredients: recipe.ingredients,
            results: recipe.results,
          }).id(recipe.id)
        })
    })