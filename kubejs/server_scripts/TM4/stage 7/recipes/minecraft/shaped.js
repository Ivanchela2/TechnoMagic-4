ServerEvents.recipes(e => {
    [
        [
            'furnace',
            ['aaa','aba','ccc'],
            {
                c: 'stone',
                b: 'campfire',
                a: 'cobblestone'
            },
            'furnace'
        ],
        [
            'shears',
            [' a','a ','  '],
            {
                a: '#forge:plates/iron'
            },
            'shears'
        ]
    ].forEach(recipe => {
        e.shaped(recipe[0],recipe[1],recipe[2]).id(`tm4:minecraft/shaped/${recipe[3]}`)
    })
})