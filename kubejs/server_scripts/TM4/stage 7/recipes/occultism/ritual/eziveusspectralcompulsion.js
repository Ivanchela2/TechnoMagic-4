ServerEvents.recipes(e => {
    const prefix = 'tm4:occultism/ritual/'
    const recipes = [
    {
        activation_item: {item: 'occultism:book_of_binding_bound_foliot'},
        duration: 3600,
        ritual_dummy: {item: "occultism:ritual_dummy/custom_ritual"},
        ingredients: [{item: 'minecraft:lapis_block'},{item: 'minecraft:lapis_block'},{item: 'minecraft:lapis_block'},{item: 'botania:mana_diamond_block'},{item: 'botania:rune_water'}, {item: 'botania:rune_earth'}, {item: 'botania:rune_mana'}, {item: 'botania:rune_air'}, {item: 'botania:rune_fire'}, {item: 'twilightforest:fiery_block'}],
        result: {item: 'botania:terra_plate'},
        id: `${prefix}terra_plate`
    } 
  ]


    recipes.forEach(recipe => {
        e.custom({
            type: 'occultism:ritual',
            ritual_type: 'occultism:craft',
            activation_item: recipe.activation_item,
            pentacle_id: 'occultism:craft_foliot',
            duration: recipe.duration,
            ritual_dummy: recipe.ritual_dummy,
            ingredients: recipe.ingredients,
            result: recipe.result
        }).id(recipe.id)
    })
})