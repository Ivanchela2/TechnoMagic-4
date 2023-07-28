ServerEvents.recipes(e => {
    const prefix = 'tm4:botania/elven_trade/';
    const recipes = [
        {
            ingredients: [{item: 'ad_astra:ostrum_ingot'}, {item: 'ad_astra:ostrum_ingot'}],
            output: [{item: 'botania:elementium_ingot'}],
            id: `${prefix}elementium_ingot`
        },
        {
            ingredients: [{item: 'ad_astra:ostrum_block'}, {item: 'ad_astra:ostrum_block'}],
            output: [{item: 'botania:elementium_block'}],
            id: `${prefix}elementium_block`
        },
        {
            ingredients: [{item: 'botania:mana_diamond'}, {item: 'botania:mana_diamond'}],
            output: [{item: 'botania:dragonstone'}],
            id: `${prefix}dragonstone`
        },
        {
            ingredients: [{item: 'botania:mana_diamond_block'}, {item: 'botania:mana_diamond_block'}],
            output: [{item: 'botania:dragonstone_block'}],
            id: `${prefix}dragonstone_block`
        }
    ]

    recipes.forEach(recipe => {
        e.custom({
            type: "botania:elven_trade",
            ingredients: recipe.ingredients,
            output: recipe.output,
        }).id(recipe.id)
    })
})