ServerEvents.recipes(event => {
    const prefix = 'gribtweaks:shapeless/';
    const recipes = [
        {
            output: '2x twilightforest:liveroot_block',
            inputs: [
                'minecraft:mud',
                'minecraft:oak_leaves',
                'minecraft:mangrove_roots'
            ],
            id: `${prefix}liveroot_block`
        },
    ];

    recipes.forEach((recipe) => {
        event.shapeless(recipe.output, recipe.inputs).id(recipe.id);
    });
});
