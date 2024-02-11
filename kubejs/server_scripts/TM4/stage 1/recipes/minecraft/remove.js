ServerEvents.recipes(event => {
    //����
    event.remove([
        { output: 'crafting_on_a_stick:crafting_table' },
        { output: 'quark:blackstone_furnace' },
        { output: 'quark:deepslate_furnace' },
    ])
})