ServerEvents.recipes(e => {
    const prefix = 'gribtweaks:occultism/ritual/'
    const recipes = [
    {
        activation_item: {item: 'occultism:book_of_binding_bound_afrit'},
        duration: 2400,
        ritual_dummy: {item: "occultism:ritual_dummy/custom_ritual"},
        ingredients: [{tag: 'botania:livingwood_logs'},{tag: 'botania:livingwood_logs'},{tag: 'botania:livingwood_logs'},{tag: 'botania:livingwood_logs'},{tag: 'botania:livingwood_logs'},{tag: 'botania:livingwood_logs'}, {item: 'gribtweaks:hephaestus_ingot'}, {tag: 'gribtweaks:petal_blocks'}, {item: 'ad_astra:desh_ingot'}, {tag: 'gribtweaks:petal_blocks'}],
        result: {item: 'botania:mana_spreader'},
        id: `${prefix}mana_spreader`
    },
    {
        activation_item: {item: 'botania:mana_spreader'},
        duration: 3600,
        ritual_dummy: {item: "occultism:ritual_dummy/custom_ritual"},
        ingredients: [{tag: 'botania:dreamwood_logs'},{tag: 'botania:dreamwood_logs'},{tag: 'botania:dreamwood_logs'},{tag: 'botania:dreamwood_logs'},{tag: 'botania:dreamwood_logs'},{tag: 'botania:dreamwood_logs'}, {item: 'botania:elementium_block'}, {tag: 'gribtweaks:petal_blocks'}, {item: 'botania:terrasteel_ingot'}, {tag: 'gribtweaks:petal_blocks'}],
        result: {item: 'botania:elven_spreader'},
        id: `${prefix}elven_spreader`
    },
    {
        activation_item: {item: 'occultism:book_of_binding_bound_afrit'},
        duration: 1200,
        ritual_dummy: {item: "occultism:ritual_dummy/custom_ritual"},
        ingredients: [{item: 'botania:livingrock'},{item: 'botania:livingrock'},{item: 'botania:livingrock'},{item: 'botania:livingrock'},{item: 'botania:livingrock'},{item: 'botania:livingrock'}, {item: 'botania:livingrock'}, {item: 'botania:livingrock'}, {item: 'botania:mana_diamond'}, {item: 'botania:mana_pearl'}],
        result: {item: 'botania:mana_tablet'},
        id: `${prefix}mana_tablet`
    }
  ]


    recipes.forEach(recipe => {
        e.custom({
            type: 'occultism:ritual',
            ritual_type: 'occultism:craft',
            activation_item: recipe.activation_item,
            pentacle_id: 'occultism:craft_afrit',
            duration: recipe.duration,
            ritual_dummy: recipe.ritual_dummy,
            ingredients: recipe.ingredients,
            result: recipe.result
        }).id(recipe.id)
    })
})