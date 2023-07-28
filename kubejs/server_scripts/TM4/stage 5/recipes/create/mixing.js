ServerEvents.recipes((event) => {
    const prefix = 'tm4:create/mixing/';
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
        },
		{
            inputs: [
                Item.of('ftbic:enderium_ingot', 2),
                Item.of('ftbic:lead_ingot', 2),
                Item.of('ftbic:iridium_alloy', 2),
                Item.of('ftbic:bronze_ingot', 2),
                Item.of('ftbic:iridium_ingot', 2),
                Item.of('ftbic:uranium_ingot', 2),
                Item.of('ftbic:tin_ingot', 2),
                Item.of('ftbic:aluminum_ingot', 2),
                Item.of('ftbic:advanced_alloy', 2)
            ],
            output: Item.of('gribtweaks:quantum_ingot', 1),
			heated: true,
            id: `${prefix}quantum_ingot`
        },
		{
            inputs: [
                'gribtweaks:tained_gold_powder',
                { type: 'forge:nbt', item: "naturesaura:effect_powder", count: 1, nbt: "{effect:\"naturesaura:ore_spawn\"}" },
                { type: 'forge:nbt', item: "naturesaura:effect_powder", count: 1, nbt: "{effect:\"naturesaura:plant_boost\"}" },
                { type: 'forge:nbt', item: "naturesaura:effect_powder", count: 1, nbt: "{effect:\"naturesaura:animal\"}" },
                { type: 'forge:nbt', item: "naturesaura:effect_powder", count: 1, nbt: "{effect:\"naturesaura:cache_recharge\"}" },
                { type: 'forge:nbt', item: "naturesaura:effect_powder", count: 1, nbt: "{effect:\"naturesaura:nether_grass\"}" },
                'create:cinder_flour',
                'create:powdered_obsidian',
                'forbidden_arcanus:corrupti_dust',
                'ae2:fluix_dust',
                'ae2:sky_dust',
                'ae2:ender_dust',
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

