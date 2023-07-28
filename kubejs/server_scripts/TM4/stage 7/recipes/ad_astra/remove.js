ServerEvents.recipes(e => {
    const output = [
        'ad_astra:desh_engine',
        'ad_astra:desh_tank',
        'ad_astra:ostrum_engine',
        'ad_astra:ostrum_tank',
        'ad_astra:calorite_engine',
        'ad_astra:calorite_tank',
        "ad_astra:tier_2_rocket",
        "ad_astra:tier_3_rocket",
        "ad_astra:tier_4_rocket",
        'ad_astra:jet_suit',
        'ad_astra:jet_suit_helmet',
        'ad_astra:jet_suit_pants',
        'ad_astra:jet_suit_boots'
    ]

    output.forEach(recipe => {
        e.remove({output: recipe})
    })
})