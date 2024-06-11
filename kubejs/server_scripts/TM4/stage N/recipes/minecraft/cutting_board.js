ServerEvents.recipes(event => {
    const prefix = 'gribtweaks:minecraft/cutting/';
    const recipes = [
        {
            type: 'farmersdelight:cutting',
            input: [
                {
                    item: 'minecraft:bone'
                }
            ],
            result: [
                {
                    count: 4,
                    item: 'minecraft:bone_meal'
                }
            ],     
            tool: {
                tag: 'forge:tools/knives'
            },
            id: `${prefix}bone_meal`
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