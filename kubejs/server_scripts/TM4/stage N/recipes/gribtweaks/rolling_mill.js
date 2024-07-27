ServerEvents.recipes(e => {
    const prefix = 'gribtweaks:rolling/';
    const recipes = [
        {
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
            input: {
                item: 'minecraft:oak_log'
            },
            result: {
                item: 'gribtweaks:wooden_rod',
                count: 1
            },
            id: `${prefix}wooden_rod`
        },
        {
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
            type: 'createaddition:rolling',
            input: recipe.input,
            result: recipe.result,
        }).id(recipe.id);
    });
});