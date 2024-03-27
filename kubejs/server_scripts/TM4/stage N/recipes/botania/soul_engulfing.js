ServerEvents.recipes(e => {
    const prefix = 'gribtweaks:botania/soul_engulfing/'
    const recipes = [
        {
            input: {ingredient: {item: 'botania:infinity_petal'},
            multiblock: {pattern: [['BCD','E@F','GHI'], ['AAA','A&A','AAA']], keys:{A: {block: 'botania:enchanted_soil'}, B: {block: 'botania:life_essence_block'}, C: {block: 'botania:terrasteel_block'}, D: {block: 'botania:gaia_pylon'}, E: {block: 'botanicadds:elven_altar'}, F: {block: 'botania:dragonstone_block'}, G: {block: 'botania:elementium_block'}, H: {block: 'botanicadds:gaiasteel_pylon'}, I: {block: 'botanicadds:dreaming_pool'}}}},
            duration: 30,
            destroysStructure: true,
            outputItem: 'botania:gaia_catalyst',
            id: `${prefix}soul_engulfing`
        }
    ]

    recipes.forEach(recipe => {
        e.custom({
            type:"spirit:soul_engulfing",
            input: recipe.input,
            ingredient: recipe.ingredient,
            multiblock: recipe.multiblock,
            pattern: recipe.pattern,
            keys: recipe.keys,
            duration: recipe.duration,
            destroysStructure: recipe.destroysStructure,
            outputItem: recipe.outputItem
        }).id(recipe.id)
    })
})