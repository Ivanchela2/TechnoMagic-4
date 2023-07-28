ServerEvents.recipes((event) => {
    const prefix = 'tm4:create/mixing/';
    const recipes = [
		{
            inputs: [
                'gribtweaks:upgrade_base',
                'productivebees:honey_treat',
                { type: "forge:nbt", item: "productivebees:configurable_honeycomb", count: 1, nbt: "{EntityTag:{type:\"productivebees:diamond\"}}" },
                { type: "forge:nbt", item: "productivebees:configurable_honeycomb", count: 1, nbt: "{EntityTag:{type:\"productivebees:emerald\"}}" },
                { type: "forge:nbt", item: "productivebees:configurable_honeycomb", count: 1, nbt: "{EntityTag:{type:\"productivebees:diamond\"}}" },
                { type: "forge:nbt", item: "productivebees:configurable_honeycomb", count: 1, nbt: "{EntityTag:{type:\"productivebees:emerald\"}}" },
                'gribtweaks:carbon_rod',
                'gribtweaks:cable_coil'
            ],
            output: Item.of('productivebees:upgrade_base', 1),
			heated: true,
            id: `${prefix}upgrade_base`
        }
	];
	
	recipes.forEach((recipe) => {
        if (recipe.heated)   {
            event.recipes.create.mixing(recipe.output, recipe.inputs).id(recipe.id).heated();
        }
    });
});

