ServerEvents.recipes(event => {
    const prefix = 'tm4:runic_altar/';
    const recipes = [
        {
            type: 'botania:runic_altar',
            ingredients: [
                {item: 'botania:rune_earth'},
                 {item: 'botania:rune_summer'},
                  {item: 'botania:mana_diamond'},
                   {item: 'botania:rune_autumn'},
                    {item: 'fastfooddelight:cheese'}
                    ],
            mana: 40000,
            output: {item: 'gribtweaks:rune_night'},
            id: `${prefix}rune_night`
        },
        {
            type: 'botania:runic_altar',
            ingredients: [
                {item: 'botania:rune_water'},
                 {item: 'botania:rune_summer'},
                  {item: 'botania:mana_powder'},
                   {item: 'gribtweaks:astral_ingot'},
                    {item: 'minecraft:sunflower'}
                    ],
            mana: 40000,
            output: {item: 'gribtweaks:rune_sun'},
            id: `${prefix}rune_sun`
        },
        {
            type: 'botania:runic_altar',
            ingredients: [
                {item: 'gribtweaks:oblivion_powder'},
                 {item: 'botania:manasteel_ingot'},
                  {item: 'botania:mana_pearl'},
                   {item: 'botania:rune_autumn'},
                    {item: 'botania:rune_mana'}
                    ],
            mana: 60000,
            output: {item: 'gribtweaks:rune_admiration'},
            id: `${prefix}rune_admiration`
        },
    ]
    recipes.forEach(recipe => {
        event.custom({
            type: 'botania:runic_altar',
            ingredients: recipe.ingredients,
            mana: recipe.mana,
            output: recipe.output
        }).id(recipe.id)
    })
})