ServerEvents.recipes(e => {
    const prefix = 'gribtweaks:createaddition/rolling/';
    const recipes = [
        {
            type: "createaddition:rolling",
            input: {
                item: 'gribtweaks:witch_sheet'
            },
            result: {
                item: 'gribtweaks:witch_rod',
                count: 1
                
            },
            id: `${prefix}witch_rod`
        }
    ]
    recipes.forEach(recipe => {
        e.custom({
            type: recipe.type,
            input: recipe.input,
            result: recipe.result
        }).id(recipe.id);
    });
});