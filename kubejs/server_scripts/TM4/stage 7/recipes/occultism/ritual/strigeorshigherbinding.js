ServerEvents.recipes(e => {
    const prefix = 'tm4:occultism/ritual/'
    const recipes = [
        {
            activation_item: {item: "occultism:book_of_binding_bound_djinni"},
            duration: 2400,
            ritual_dummy: {item: "occultism:ritual_dummy/custom_ritual"},
            ingredients: [{item: 'botania:terrasteel_ingot'},{item: 'botania:mana_pearl'},{item: 'botania:mana_tablet'},{item: 'botania:mana_tablet'},{tag: 'botania:livingwood_logs'}, {tag: 'botania:livingwood_logs'}, {item: 'botania:terrasteel_ingot'}, {item: 'botania:manasteel_block'}],
            result: {item: 'botania:mana_mirror'},
            id: `${prefix}mana_mirror`
        },
        {
            activation_item: {item: 'minecraft:brewing_stand'},
            duration: 1200,
            ritual_dummy: {item: "occultism:ritual_dummy/custom_ritual"},
            ingredients: [{item: 'botania:livingrock'},{item: 'botania:livingrock'},{item: 'botania:livingrock'},{item: 'botania:livingrock'},{item: 'botania:manasteel_block'}, {item: 'botania:manasteel_block'}, {item: 'botania:rune_mana'}, {item: 'botania:rune_mana'}],
            result: {item: 'botania:brewery'},
            id: `${prefix}brewery`
        },
        {
            activation_item: {item: 'easy_villagers:villager'},
            duration: 1600,
            ritual_dummy: {item: "occultism:ritual_dummy/custom_ritual"},
            ingredients: [{item: 'ae2:charger'},{item: 'minecraft:amethyst_shard'},{item:'minecraft:amethyst_shard'},{item:'occultism:iesnium_ingot'},{item:'occultism:otherstone'}, {item: 'occultism:otherstone'}, {item: 'occultism:otherstone'}],
            result: Item.of('easy_villagers:villager', '{villager:{VillagerData:{level:2,profession:"ae2:fluix_researcher"}}}').toJson(),
            id: `${prefix}villager_fluix_researcher`
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