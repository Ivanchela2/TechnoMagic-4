ServerEvents.recipes(event => {
    const prefix = 'gribtweaks:minecraft/cutting/';
    const recipes = [
        {
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
        {
            input: [
                {
                    item: 'hexerei:selenite_block'
                }
            ],
            result: [
                {
                    count: 4,
                    item: 'hexerei:selenite_shard'
                }
            ],     
            tool: {
                tag: 'forge:tools/pickaxes'
            },
            id: `${prefix}selenite_shard`
        },
    ]
    recipes.forEach(recipe => {
        event.custom({
            type: 'farmersdelight:cutting',
            ingredients: recipe.input,
            result: recipe.result,
            tool: recipe.tool,
        }).id(recipe.id);
    });
});