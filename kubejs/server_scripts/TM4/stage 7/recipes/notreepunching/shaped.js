ServerEvents.recipes(e => {
    e.forEachRecipe({output: /notreepunching:\w+knife/}, r => {
        e.shaped(r.originalRecipeResult, [' a','b ','  '], {a: r.originalRecipeIngredients[0], b: r.originalRecipeIngredients[1]}).id(r.getOrCreateId())
    })
})