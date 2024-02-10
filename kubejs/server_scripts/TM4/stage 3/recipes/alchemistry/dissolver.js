ServerEvents.recipes(e => {
    const prefix = 'gribtweaks:alchemistry/dissolver/'
    const recipes = [
        {
            type:"alchemistry:dissolver",
            group: "alchemistry:dissolver",
            input: {count: 1, ingredient: {item: 'gribtweaks:nugget_osmium'}},
            output: {groups: [{
                probability: 100.0,
                results: [{count: 1, item: 'chemlib:osmium'}]
            }],
            rolls: 1,
            weighted: false
            },
            id: `${prefix}nugget_osmium` 
        }
    ]

    recipes.forEach(recipe => {
        e.custom({
            type: recipe.type,
            group: recipe.group,
            input: recipe.input,
            output: recipe.output,
            rolls: recipe.rolls,
            weighted: recipe.weighted
        }).id(recipe.id)
    })
})