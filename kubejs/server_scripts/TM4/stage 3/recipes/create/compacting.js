ServerEvents.recipes(e => {
    const prefix = 'tm4:createaddition/rolling/';
    const recipes = [
        {
            type: "createaddition:rolling",
            input: {
                item: 'hexerei:witch_sheet'
            },
            result: {
                item: 'hexerei:witch_rod',
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