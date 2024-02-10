const netheritechest = /sophisticatedstorage:\w+_:netherite_chest/
ServerEvents.tags('item', e => {
    e.add('gribtweaks:netherite_chests', netheritechest)
    e.get('sophisticatedstorage:netherite_chest')
     .add(['sophisticatedstorage:netherite_chest'])
})