ServerEvents.recipes(e => {
    const prefix = 'gribtweaks:rolling/';
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
        },
        {
            type: "createaddition:rolling",
            input: {
                item: 'minecraft:oak_log'
            },
            result: {
                item: 'gribtweaks:wooden_rod',
                count: 1
            },
            id: `${prefix}wooden_rod`
        }
    ]
    recipes.forEach(recipe => {
        e.custom({
            type: recipe.type,
            input: recipe.input,
            result: recipe.result,
        }).id(recipe.id);
    });
});