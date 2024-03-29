ServerEvents.recipes((event) => {
    const id_prefix = 'gribtweaks:naturesaura/milling/';
    const recipes = [
        {
            type: 'create:milling',
            ingredients: [
                {
                    item: 'naturesaura:gold_leaf'
                }
            ],
            processingTime: 100,
            results: [
                {
                    count: 2,
                    item: 'naturesaura:gold_powder'
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
        })
    })
});