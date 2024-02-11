ServerEvents.recipes(e => {
    [
        [
            'stone',
            'cobblestone',
            30,
            'stone'
        ]
    ].forEach(recipe => {
        e.campfireCooking(recipe[0], recipe[1]).cookingTime(recipe[2] * 20).id(`tm4:minecraft/campfire/${recipe[3]}`)
    })
})