ServerEvents.recipes(event => {
    //����
    event.remove([
        { output: 'minecraft:crafting_table' },
        { output: 'crafting_on_a_stick:crafting_table' }
    ])
})