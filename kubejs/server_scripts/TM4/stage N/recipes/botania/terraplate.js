ServerEvents.recipes(e => {
    const prefix = 'gribtweaks:botania/terra_plate/';
    const recipes = [
        {
            ingredients: [{item: 'botania:white_petal_block'},{item: 'botania:orange_petal_block'},{item: 'botania:magenta_petal_block'},{item: 'botania:light_blue_petal_block'},{item: 'botania:yellow_petal_block'},{item: 'botania:lime_petal_block'},{item: 'botania:pink_petal_block'},{item: 'botania:gray_petal_block'},{item: 'botania:light_gray_petal_block'},{item: 'botania:cyan_petal_block'},{item: 'botania:purple_petal_block'},{item: 'botania:blue_petal_block'},{item: 'botania:brown_petal_block'},{item: 'botania:green_petal_block'},{item: 'botania:red_petal_block'},{item: 'botania:black_petal_block'}, {item: 'botania:botany_catalyst'}],
            mana: 250000,
            result: {item: 'botania:infinity_petal'},
            id: `${prefix}infinity_petal`
        },
        {
            ingredients: [{item: 'botania:gaia_ingot'}, {item: 'botania:gaia_spreader'}, {item: 'botanicadds:gaiasteel_ingot'}, {item: 'botanicadds:gaiasteel_pylon'}, {item: 'botania:life_essence_block'}],
            mana: 300000,
            result: {item: 'botania:gaia_punishment'},
            id: `${prefix}gaia_punishment`
        }
    ]

    recipes.forEach(recipe => {
        e.custom({
            type: "botania:terra_plate",
            ingredients: recipe.ingredients,
            mana: recipe.mana,
            result: recipe.result
        }).id(recipe.id)
    })
})