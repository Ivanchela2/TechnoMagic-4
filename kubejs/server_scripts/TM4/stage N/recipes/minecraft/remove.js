ServerEvents.recipes((event) => {
    const output = [
        'minecraft:crafting_table',
        'minecraft:furnace',
        'minecraft:campfire',
        'minecraft:cauldron',
        'minecraft:hopper',

        'quark:blackstone_furnace',
        'quark:deepslate_furnace',
        'nethersdelight:blackstone_furnace'
    ]


    output.forEach(recipe => {
        event.remove({output: recipe})
    })
});