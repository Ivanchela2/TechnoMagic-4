ServerEvents.recipes(event => {
    const prefix = 'gribtweaks:twilightforest/shapeless/';
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
            output: '2x twilightforest:liveroot_block',
            inputs: [
                'minecraft:mud',
                'minecraft:oak_leaves',
                'minecraft:mangrove_roots'
            ],
            id: `${prefix}liveroot_block`
        },
        {
            output: 'twilightforest:liveroot',
            inputs: [
                'minecraft:dirt',
                '#minecraft:logs',
                'minecraft:bone_meal',
                '#minecraft:leaves'
            ],
            id: `${prefix}liveroot`
        },
    ]

    recipes.forEach((recipe) => {
        event.shapeless(recipe.output, recipe.inputs).id(recipe.id);
    });
})