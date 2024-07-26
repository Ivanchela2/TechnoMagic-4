ServerEvents.recipes(event => {
    const prefix = 'gribtweaks:shapeless/';
    const recipes = [
        {
            output: '2x twilightforest:raw_ironwood',
            inputs: [
                'minecraft:iron_ingot',
                'twilightforest:liveroot',
                '#createbigcannons:stone',
                'minecraft:gold_nugget'
            ],
            id: `${prefix}raw_ironwood`
        },
        {
            output: 'gribtweaks:quantum_ingot',
            inputs: [
                'ftbic:iridium_alloy',
                '#forge:ingots/lead',
                '#forge:ingots/uranium',
                'ftbic:enderium_ingot',
                '#forge:ingots/iridium',
                '#forge:ingots/bronze',
                '#forge:ingots/tin',
                '#forge:ingots/aluminum',
                'ftbic:advanced_alloy'
            ],
            id: `${prefix}quantum_ingot`
        },
    ]

    recipes.forEach((recipe) => {
        event.shapeless(recipe.output, recipe.inputs).id(recipe.id);
    });
})