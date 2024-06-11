ServerEvents.recipes(event => {
    const prefix = 'gribtweaks:cutting/';
    const recipes = [
        {
            type: 'farmersdelight:cutting',
            input: [
                {
                    item: 'totemic:buffalo_hide'
                }
            ],
            result: [
                {
                    count: 3,
                    item: 'gribtweaks:buffalo_hide_fiber'
                }
            ],     
            tool: {
                tag: 'forge:tools/knives'
            },
            id: `${prefix}buffalo_hide_fiber`
        },
    ]
    recipes.forEach(recipe => {
        event.custom({
            type: recipe.type,
            ingredients: recipe.input,
            result: recipe.result,
            tool: recipe.tool,
        }).id(recipe.id);
    });
});