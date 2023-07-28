ServerEvents.recipes(e => {
    const prefix = 'tm4:alchemistry/dissolver/'
    const recipes = [
        {
            type: "forge:conditional",
            recipes: [{
                conditions: [{type: "forge:not", value: {type: "forge:tag_empty", tag: 'forge:ingots/manasteel'}}],
                recipe: {
                    type:"alchemistry:dissolver",
                    group: "alchemistry:dissolver",
                    input: {count: 1, ingredient: {tag: 'forge:ingots/manasteel'}},
                    output: {groups: [{
                        probability: 100.0,
                        results: [{count: 16, item: 'chemlib:mana_element'}]
                    }],
                rolls: 1,
                weighted: false
                    }
                }
            }],
            id: `${prefix}mana_element`
        },
        {
            type: "forge:conditional",
            recipes: [{
                conditions: [{type: "forge:not", value: {type: "forge:tag_empty", tag: 'forge:ingots/terrasteel'}}],
                recipe: {
                    type:"alchemistry:dissolver",
                    group: "alchemistry:dissolver",
                    input: {count: 1, ingredient: {tag: 'forge:ingots/terrasteel'}},
                    output: {groups: [{
                        probability: 100.0,
                        results: [{count: 16, item: 'chemlib:terrasteel_element'}]
                    }],
                rolls: 1,
                weighted: false
                    }
                }
            }],
            id: `${prefix}terrasteel_element`
        },
        {
            type:"alchemistry:dissolver",
            group: "alchemistry:dissolver",
            input: {count: 1, ingredient: {item: 'botania:gaia_ingot'}},
            output: {groups: [{
                probability: 100.0,
                results: [{count: 16, item: 'chemlib:gaia_element'}]
            }],
            rolls: 1,
            weighted: false
            },
            id: `${prefix}gaia_element`
                
        }]

    recipes.forEach(recipe => {
        e.custom({
            type: recipe.type,
            recipes: recipe.recipes,
            conditions: recipe.conditions,
            type: recipe.type,
            value: recipe.value,
            recipe: recipe.recipe,
            type: recipe.type,
            group: recipe.group,
            input: recipe.input,
            ingredient: recipe.ingredient,
            output: recipe.output,
            groups: recipe.groups,
            results: recipe.results,
            rolls: recipe.rolls,
            weighted: recipe.weighted
        }).id(recipe.id)
    })
})