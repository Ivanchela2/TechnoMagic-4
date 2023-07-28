ServerEvents.recipes(e => {
    const prefix = 'gribtweaks:occultism/ritual/'
    const recipes = [
        {
            type: 'occultism:ritual',
            ritual_type: 'occultism:craft',
            activation_item: {item: 'gribtweaks:spirit_attuned_ingot'},
            pentacle_id: "occultism:craft_djinni",
            duration: 2400,
            ritual_dummy: {item: "occultism:ritual_dummy/custom_ritual"},
            ingredients: [{item: 'arclight:sculk_ingot'},{item: 'arclight:cryorium_ingot'},{item: 'arclight:bloodstone_ingot'},{item: 'arclight:moonlight_ingot'},{item: 'arclight:jade_ingot'}, {item: 'arclight:arclight_ingot'}],
            result: {item: 'gribtweaks:angel_ingot'},
            id: `${prefix}angel_ingot`
        }
    ]
    
    
        recipes.forEach(recipe => {
            e.custom({
                type: 'occultism:ritual',
                ritual_type: 'occultism:craft',
                activation_item: recipe.activation_item,
                pentacle_id: "occultism:craft_djinni",
                duration: recipe.duration,
                ritual_dummy: recipe.ritual_dummy,
                ingredients: recipe.ingredients,
                result: recipe.result
            }).id(recipe.id)
        })
    })