ServerEvents.recipes(e => {
    const prefix = 'tm4:botania/pure_daisy/';
    const recipes = [
        {
            input: {type: 'block', block: 'ad_astra:moon_stone'},
            output: {name: "botania:livingrock"},
            id: `${prefix}livingrock`
        },
        {
            input: {type: 'block', block: 'occultism:otherworld_log'},
            output: {name: "botania:livingwood_log"},
            id: `${prefix}livingwood`
        }
    ]
    recipes.forEach(recipe => {
        e.custom({
            type: 'botania:pure_daisy',
            input: recipe.input,
            output: recipe.output
        }).id(recipe.id)
    })
})