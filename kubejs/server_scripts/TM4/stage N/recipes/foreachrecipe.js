ServerEvents.recipes(e => {
    e.forEachRecipe({output: /\w+planks/, input: /\w+log/,input: '#minecraft:logs', not: {input: ['#notreepunching:weak_saws', '#notreepunching:saws', '#bookshelf:axes']}}, r => {
        e.shaped(Item.of(r.originalRecipeResult, 2), ['a','b',' '],{a: '#notreepunching:weak_saws', b: r.originalRecipeIngredients}).id(r.getOrCreateId()).damageIngredient('#notreepunching:weak_saws')
        e.shaped(Item.of(r.originalRecipeResult, 4), ['a','b',' '],{a: '#notreepunching:saws', b: r.originalRecipeIngredients}).damageIngredient('#notreepunching:saws')
    })

    e.replaceInput({}, 'create:iron_sheet', 'ftbic:iron_plate');
})
