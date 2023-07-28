REIEvents.add('item', e => {
    const adds = [
        {
            i: Item.of('minecraft:player_head', '{SkullOwner:"Ivanchela"}')
        },
        {
            i: Item.of('minecraft:player_head', '{SkullOwner:"Kranie"}')
        }
    ]
    adds.forEach(add => {
        e.add(add.i)
    })
})