ServerEvents.recipes(e => {
    [
        [
            'gribtweaks:baykok_bone_pickaxe',
            ['aab',' ca','c a'],
            {
                a: 'gribtweaks:baykok_bone',
                b: 'gribtweaks:buffalo_hide_rope',
                c: 'stick'
            },
            'baykok_bone_pickaxe'
        ],
        [
            'gribtweaks:buffalo_hide_rope',
            ['aaa','aaa','   '],
            {
                a: 'gribtweaks:buffalo_hide_fiber'
            },
            'buffalo_hide_rope'
        ],
        [
            'rootsclassic:bark_knife',
            [' ab','cba','dc '],
            {
                a: 'seeds:sharp_leaf',
                b: 'diamond',
                c: 'gribtweaks:buffalo_hide_rope',
                d: '#notreepunching:sticks'
            },
            'bark_knife'
        ]
    ].forEach(recipe => {
        e.shaped(recipe[0],recipe[1],recipe[2]).id(`tm4:shaped/${recipe[3]}`)
    })
})