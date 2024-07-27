MoreJSEvents.wandererTrades(e => {
    const trades = [
        {
            level: 1,
            input: 'minecraft:emerald',
            output: Item.of('minecraft:player_head', '{SkullOwner:"Kranie"}')
        },
        {
            level: 2,
            input: 'minecraft:emerald',
            output: Item.of('minecraft:player_head', '{SkullOwner:"Kranie"}')
        },
        {
            level: 2,
            input: '20x minecraft:emerald',
            output: 'enigmaticlegacy:enigmatic_amulet'
        }
    ]

    trades.forEach(trade => {
        e.addTrade(trade.level, trade.input, trade.output)
    })
})