ServerEvents.recipes((event) => {
    const prefix = 'gribtweaks:ftbic/mixing/';
    const recipes = [
		{
            inputs: [['alloyed:steel_ingot', 'ad_astra:steel_ingot'], Item.of('gribtweaks:energium_dust', 6), '#forge:ingots/ironwood', '#forge:silicon'],
            output: Item.of('ftbic:energy_crystal', 1),
			heated: true,
            id: `${prefix}energy_crystal`
        },
		{
            inputs: [
                'ftbic:energy_crystal',
                Item.of('gribtweaks:energium_dust', 6),
                '#forge:ingots/ironwood',
                'minecraft:nether_star',
                Item.of('ftbic:antimatter', 6)
            ],
            output: Item.of('ftbic:antimatter_crystal', 1),
			heated: true,
            id: `${prefix}antimatter_crystal`
        }
	];
	
	recipes.forEach((recipe) => {
        if (recipe.heated)   {
            event.recipes.create.mixing(recipe.output, recipe.inputs).id(recipe.id).heated();
        }
    });
});

