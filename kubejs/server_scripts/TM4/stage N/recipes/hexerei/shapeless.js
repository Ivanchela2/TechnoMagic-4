ServerEvents.recipes(event => {
    const prefix = 'naturesaura:shapeless/';
    const recipes = [
        {
            output: '2x hexerei:selenite_shard',
            inputs: [
                'hexerei:selenite_shard',
                'minecraft:amethyst_shard',
                'gribtweaks:ametrine_ingot'
            ],
            id: `${prefix}dlg_selenite_shard`
        }
    ]

    recipes.forEach((recipe) => {
        event.shapeless(recipe.output, recipe.inputs).id(recipe.id);
    });
})