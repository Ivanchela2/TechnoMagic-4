ServerEvents.recipes((event) => {
	const prefix = 'tm4:hexerei/drying_rack/';
	const recipes = [
		{ 
			type: "hexerei:drying_rack",
			ingredients: [
                    {item: 'hexerei:wet_ingot_combining'}
            ],
			output: {item: 'hexerei:dry_ingot_combining'},
            dryingTimeInTicks: 4000,
			id: `${prefix}dry_ingot_combining`
		},
        { 
			type: "hexerei:drying_rack",
			ingredients: [
                    {item: 'sorcerium:wet_tissue_bandage'}
            ],
			output: {item: 'sorcerium:tissue_bandage'},
            dryingTimeInTicks: 1000,
			id: `${prefix}sorcerium:tissue_bandage`
		},
        { 
			type: "hexerei:drying_rack",
			ingredients: [
                    {item: 'hexerei:wet_raven_cloth'}
            ],
			output: {item: 'hexerei:reven_cloth'},
            dryingTimeInTicks: 2000,
			id: `${prefix}reven_cloth`
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