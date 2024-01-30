ServerEvents.recipes(e => {
    const prefix = 'gribtweaks:occultism/ritual/'
    const recipes = [
        {
            type: 'occultism:ritual',
            ritual_type: 'occultism:craft',
            activation_item: {item: 'minecraft:iron_ingot'},
            pentacle_id: "occultism:craft_djinni",
            duration: 400,
            ritual_dummy: {item: "occultism:ritual_dummy/custom_ritual"},
            ingredients: [
                {item: 'occultism:spirit_attuned_gem'},
                {item: 'occultism:spirit_attuned_gem'},
                {item: 'occultism:spirit_attuned_gem'},
                {item: 'occultism:spirit_attuned_gem'}
            ],
            result: {item: 'gribtweaks:spirit_attuned_ingot'},
            id: `${prefix}spirit_attuned_ingot`
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