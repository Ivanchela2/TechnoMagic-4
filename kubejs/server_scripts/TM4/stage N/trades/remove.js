MoreJSEvents.villagerTrades(e => {
    const removeVanilla = [
        {
            professions: "morevillagers:woodworker",
            level: 2
        },
        {
            professions: "morevillagers:woodworker",
            level: 3
        },
        {
            professions: "morevillagers:enderian",
            level: 5
        },
        {
            professions: "morevillagers:engineer",
            level: 2
        },
        {
            professions: "morevillagers:engineer",
            level: 3
        },
        {
            professions: "morevillagers:engineer",
            level: 4
        },
        {
            professions: "morevillagers:engineer",
            level: 5
        },
        {
            professions: "morevillagers:florist",
            level: 3
        },
        {
            professions: "morevillagers:miner",
            level: 2
        },
        {
            professions: "morevillagers:miner",
            level: 3
        }
        
    ]

    removeVanilla.forEach(trade => {
        e.removeVanillaTrades(trade.professions, trade.level)
    })
})