ServerEvents.recipes(e => {
    const prefix = 'tm4:ad_astra/shaped/'
    const recipes = [
        {
            output: 'ad_astra:jet_suit',
            pattern: ['ABA','CDC','EFE'],
            key: {
                A: 'botanicadds:gaiasteel_ingot',
                B: 'botania:flight_tiara',
                C: 'ad_astra:calorite_tank',
                D: 'ad_astra:netherite_space_suit',
                E: 'ad_astra:calorite_block',
                F: 'ad_astra:calorite_engine'
            },
            id: `${prefix}jet_suit`
        },
        {
            output: 'ad_astra:jet_suit_helmet',
            pattern: ['ABA','CDC','   '],
            key: {
                A: 'botanicadds:gaiasteel_ingot',
                B: 'ad_astra:netherite_space_helmet',
                C: 'ad_astra:calorite_plate',
                D: '#forge:glass'
            },
            id: `${prefix}jet_suit_helmet`
        },
        {
            output: 'ad_astra:jet_suit_pants',
            pattern: ['ABA','C C','C C'],
            key: {
                A: 'botanicadds:gaiasteel_ingot',
                B: 'ad_astra:netherite_space_pants',
                C: 'ad_astra:calorite_plate'
            },
            id: `${prefix}jet_suit_pants`
        },
        {
            output: 'ad_astra:jet_suit_boots',
            pattern: ['   ','ABA','C C'],
            key: {
                A: 'botanicadds:gaiasteel_ingot',
                B: 'ad_astra:netherite_space_boots',
                C: 'ad_astra:calorite_block'
            },
            id: `${prefix}jet_suit_boots`
        }
    ]

    recipes.forEach(recipe => {
        e.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id)
    })
})