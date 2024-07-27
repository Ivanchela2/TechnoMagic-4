ServerEvents.recipes(e => {
    const prefix = 'gribtweaks:botania/tree_ritual/'
    const recipes = [
        {
            ingredients: ['#gribtweaks:petal_blocks', 'botania:manasteel_ingot', 'botania:mana_powder', 'forbidden_arcanus:arcane_bone_meal', 'forbidden_arcanus:arcane_bone_meal', 'botania:rune_earth'],
            sapling: 'occultism:otherworld_sapling',
            output: '2x botania:fertilizer',
            time: 600,
            id: `${prefix}fertilizer`
        },
    ]

    recipes.forEach(recipe => {
        e.custom({
            type: "naturesaura:tree_ritual",
            ingredients: Ingredient.of(recipe.ingredients).toJson(),
            sapling: Ingredient.of(recipe.sapling).toJson(),
            output: Item.of(recipe.output).toJson(),
            time: recipe.time
        }).id(recipe.id)
    })
})