ServerEvents.recipes(e => {
    const prefix = 'gribtweaks:alchemistry/combiner/'
    const recipes = [
        {
            input: [{count: 4, ingredient: {item: 'chemlib:cellulose'}}, {count: 8, ingredient: {item: 'chemlib:calcium'}}, {count: 16, ingredient: {item: 'chemlib:oxygen'}}, {count: 6, ingredient: {item: 'chemlib:nitrogen'}}],
            result: {item: 'botania:white_mystical_flower'},
            id: `${prefix}white_mystical_flower`
        },
        {
            input: [{count: 4, ingredient: {item: 'chemlib:cellulose'}}, {count: 8, ingredient: {item: 'chemlib:potassium'}}, {count: 16, ingredient: {item: 'chemlib:oxygen'}}, {count: 6, ingredient: {item: 'chemlib:nitrogen'}}],
            result: {item: 'botania:orange_mystical_flower'},
            id: `${prefix}orange_mystical_flower`
        },
        {
            input: [{count: 4, ingredient: {item: 'chemlib:cellulose'}}, {count: 8, ingredient: {item: 'chemlib:magnesium'}}, {count: 16, ingredient: {item: 'chemlib:oxygen'}}, {count: 6, ingredient: {item: 'chemlib:nitrogen'}}],
            result: {item: 'botania:magenta_mystical_flower'},
            id: `${prefix}magenta_mystical_flower`
        },
        {
            input: [{count: 4, ingredient: {item: 'chemlib:cellulose'}}, {count: 8, ingredient: {item: 'chemlib:osmium'}}, {count: 16, ingredient: {item: 'chemlib:oxygen'}}, {count: 6, ingredient: {item: 'chemlib:nitrogen'}}],
            result: {item: 'botania:light_blue_mystical_flower'},
            id: `${prefix}light_blue_mystical_flower`
        }, 
        {
            input: [{count: 4, ingredient: {item: 'chemlib:cellulose'}}, {count: 8, ingredient: {item: 'chemlib:scandium'}}, {count: 16, ingredient: {item: 'chemlib:oxygen'}}, {count: 6, ingredient: {item: 'chemlib:nitrogen'}}],
            result: {item: 'botania:yellow_mystical_flower'},
            id: `${prefix}yellow_mystical_flower`
        }, 
        {
            input: [{count: 4, ingredient: {item: 'chemlib:cellulose'}}, {count: 8, ingredient: {item: 'chemlib:roentgenium'}}, {count: 16, ingredient: {item: 'chemlib:oxygen'}}, {count: 6, ingredient: {item: 'chemlib:nitrogen'}}],
            result: {item: 'botania:lime_mystical_flower'},
            id: `${prefix}lime_mystical_flower`
        }, 
        {
            input: [{count: 4, ingredient: {item: 'chemlib:cellulose'}}, {count: 8, ingredient: {item: 'chemlib:yttrium'}}, {count: 16, ingredient: {item: 'chemlib:oxygen'}}, {count: 6, ingredient: {item: 'chemlib:nitrogen'}}],
            result: {item: 'botania:pink_mystical_flower'},
            id: `${prefix}pink_mystical_flower`
        }, 
        {
            input: [{count: 4, ingredient: {item: 'chemlib:cellulose'}}, {count: 8, ingredient: {item: 'chemlib:tungsten'}}, {count: 16, ingredient: {item: 'chemlib:oxygen'}}, {count: 6, ingredient: {item: 'chemlib:nitrogen'}}],
            result: {item: 'botania:gray_mystical_flower'},
            id: `${prefix}gray_mystical_flower`
        }, 
        {
            input: [{count: 4, ingredient: {item: 'chemlib:cellulose'}}, {count: 8, ingredient: {item: 'chemlib:technetium'}}, {count: 16, ingredient: {item: 'chemlib:oxygen'}}, {count: 6, ingredient: {item: 'chemlib:nitrogen'}}],
            result: {item: 'botania:light_gray_mystical_flower'},
            id: `${prefix}light_gray_mystical_flower`
        }, 
        {
            input: [{count: 4, ingredient: {item: 'chemlib:cellulose'}}, {count: 8, ingredient: {item: 'chemlib:gallium'}}, {count: 16, ingredient: {item: 'chemlib:oxygen'}}, {count: 6, ingredient: {item: 'chemlib:nitrogen'}}],
            result: {item: 'botania:cyan_mystical_flower'},
            id: `${prefix}cyan_mystical_flower`
        }, 
        {
            input: [{count: 4, ingredient: {item: 'chemlib:cellulose'}}, {count: 8, ingredient: {item: 'chemlib:iodine'}}, {count: 16, ingredient: {item: 'chemlib:oxygen'}}, {count: 6, ingredient: {item: 'chemlib:nitrogen'}}],
            result: {item: 'botania:purple_mystical_flower'},
            id: `${prefix}purple_mystical_flower`
        }, 
        {
            input: [{count: 4, ingredient: {item: 'chemlib:cellulose'}}, {count: 8, ingredient: {item: 'chemlib:cobalt'}}, {count: 16, ingredient: {item: 'chemlib:oxygen'}}, {count: 6, ingredient: {item: 'chemlib:nitrogen'}}],
            result: {item: 'botania:blue_mystical_flower'},
            id: `${prefix}blue_mystical_flower`
        }, 
        {
            input: [{count: 4, ingredient: {item: 'chemlib:cellulose'}}, {count: 8, ingredient: {item: 'chemlib:ruthenium'}}, {count: 16, ingredient: {item: 'chemlib:oxygen'}}, {count: 6, ingredient: {item: 'chemlib:nitrogen'}}],
            result: {item: 'botania:brown_mystical_flower'},
            id: `${prefix}brown_mystical_flower`
        }, 
        {
            input: [{count: 4, ingredient: {item: 'chemlib:cellulose'}}, {count: 8, ingredient: {item: 'chemlib:thulium'}}, {count: 16, ingredient: {item: 'chemlib:oxygen'}}, {count: 6, ingredient: {item: 'chemlib:nitrogen'}}],
            result: {item: 'botania:green_mystical_flower'},
            id: `${prefix}green_mystical_flower`
        }, 
        {
            input: [{count: 4, ingredient: {item: 'chemlib:cellulose'}}, {count: 8, ingredient: {item: 'chemlib:cadmium'}}, {count: 16, ingredient: {item: 'chemlib:oxygen'}}, {count: 6, ingredient: {item: 'chemlib:nitrogen'}}],
            result: {item: 'botania:red_mystical_flower'},
            id: `${prefix}red_mystical_flower`
        }, 
        {
            input: [{count: 4, ingredient: {item: 'chemlib:cellulose'}}, {count: 64, ingredient: {item: 'chemlib:carbon'}}, {count: 16, ingredient: {item: 'chemlib:oxygen'}}, {count: 6, ingredient: {item: 'chemlib:nitrogen'}}],
            result: {item: 'botania:black_mystical_flower'},
            id: `${prefix}black_mystical_flower`
        }, 
        {
            input: [{count: 64, ingredient: {item: 'chemlib:mana_element'}}, {count: 64, ingredient: {item: 'chemlib:terrasteel_element'}}, {count: 32, ingredient: {item: 'chemlib:gaia_element'}}],
            result: {item: 'chemlib:botany_compound'},
            id: `${prefix}botany_compound`
        },
        {
            input: [{count: 16, ingredient: {item: 'chemlib:mana_element'}}],
            result: {item: 'botania:manasteel_ingot'},
            id: `${prefix}manasteel_ingots`
        },
        {
            input: [{count: 16, ingredient: {item: 'chemlib:terrasteel_element'}}],
            result: {item: 'botania:terrasteel_ingot'},
            id: `${prefix}terrasteel_ingot`
        },
        {
            input: [{count: 16, ingredient: {item: 'chemlib:gaia_element'}}],
            result: {item: 'botania:gaia_ingot'},
            id: `${prefix}gaia_ingot`
        }
    ]

    recipes.forEach(recipe => {
        e.custom({
            type: 'alchemistry:combiner',
            group: 'alchemistry:combiner',
            input: recipe.input,
            result: recipe.result,
            ingredient: recipe.ingredient
        }).id(recipe.id)
    })
})