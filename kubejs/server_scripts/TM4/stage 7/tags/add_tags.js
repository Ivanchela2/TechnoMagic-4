const petalblocks = /botania:\w+_petal_block/
ServerEvents.tags('item', e => {
    e.add('tm4:petal_blocks', petalblocks)
    e
    .get('twilightforest:bows')
    .add([
        'twilightforest:triple_bow',
        'twilightforest:seeker_bow',
        'twilightforest:ice_bow',
        'twilightforest:ender_bow'
    ])
    e
    .get('tm4:cooked_food')
    .add([
        'minecraft:cooked_porkchop',
        'minecraft:cooked_beef',
        'minecraft:cooked_salmon',
        'minecraft:cooked_cod',
        'minecraft:cooked_chicken',
        'minecraft:cooked_rabbit'
    ])
    e.add('itemfilters:match_nbt', 'productivebees:bee_cage')
})