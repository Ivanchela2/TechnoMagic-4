ServerEvents.recipes((event) => {
	const prefix = 'gribtweaks:drying_rack/';
	const recipes = [
		{ 
			type: "hexerei:drying_rack",
			ingredients: [
                    {item: 'gribtweaks:wet_ingot_combining'}
            ],
			output: {item: 'gribtweaks:dry_ingot_combining'},
            dryingTimeInTicks: 4000,
			id: `${prefix}dry_ingot_combining`
		},
        { 
			type: "hexerei:drying_rack",
			ingredients: [
                    {item: 'gribtweaks:wet_raven_cloth'}
            ],
			output: {item: 'gribtweaks:raven_cloth'},
            dryingTimeInTicks: 2000,
			id: `${prefix}raven_cloth`
		}
    ]
    recipes.forEach(recipe => {
        event.custom({
            type: recipe.type,
            ingredients: recipe.ingredients,
            output: recipe.output,
            dryingTimeInTicks: recipe.dryingTimeInTicks,
		}).id(recipe.id)
        })
    })