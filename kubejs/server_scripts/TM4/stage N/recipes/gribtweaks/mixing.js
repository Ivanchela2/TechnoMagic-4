ServerEvents.recipes((event) => {
    const prefix = 'gribtweaks:mixing/';
    const recipes = [
		{
            inputs: [
                'gribtweaks:tained_gold_powder',
                { type: 'forge:nbt', item: "naturesaura:effect_powder", count: 1, nbt: "{effect:\"naturesaura:animal\"}" },
                'create:cinder_flour',
                'create:powdered_obsidian',
                'forbidden_arcanus:corrupti_dust',
                'ae2:fluix_dust',
                'minecraft:blaze_powder',
                'forbidden_arcanus:arcane_crystal_dust',
                'forbidden_arcanus:mundabitur_dust'
            ],
            output: Item.of('gribtweaks:oblivion_powder', 1),
			heated: true,
            id: `${prefix}oblivion_powder`
        }
	];
	
	recipes.forEach((recipe) => {
        if (recipe.heated)   {
            event.recipes.create.mixing(recipe.output, recipe.inputs).id(recipe.id).heated();
        }
    });
});

