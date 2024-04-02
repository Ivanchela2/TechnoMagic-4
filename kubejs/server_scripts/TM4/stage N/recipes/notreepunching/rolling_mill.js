ServerEvents.recipes(e => {
    const prefix = 'notreepunching:rolling/';
    const recipes = [
        {
            type: "createaddition:rolling",
            input: {
                tag: 'minecraft:leaves'
            },
            result: {
                item: 'notreepunching:plant_string',
                count: 1
            },
            id: `${prefix}plant_string`
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