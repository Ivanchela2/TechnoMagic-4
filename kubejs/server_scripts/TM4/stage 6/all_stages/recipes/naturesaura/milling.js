ServerEvents.recipes((event) => {
    const id_prefix = 'gribtweaks:naturesaura/milling/';
    const recipes = [
        {
            type: 'create:milling',
            ingredients: [
                {
                    item: 'gribtweaks:tained_gold_leaf'
                }
            ],
            processingTime: 100,
            results: [
                {
                    count: 2,
                    item: 'gribtweaks:tained_gold_powder'
                },
            ]

        }
    ];
    recipes.forEach(recipe => {
        event.custom({
            type: recipe.type,
            ingredients: recipe.ingredients,
            processingTime: recipe.processingTime,
            results: recipe.results
        }).id(recipe.id)
    })
});