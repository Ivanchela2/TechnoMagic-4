ServerEvents.recipes(event => {
    const prefix = 'gribtweaks:shapeless/';
    const recipes = [
        {
            output: 'gribtweaks:witch_ingot',
            inputs: [
                'gribtweaks:witch_nugget',
                'gribtweaks:witch_nugget',
                'gribtweaks:witch_nugget',
                'gribtweaks:witch_nugget',
                'gribtweaks:witch_nugget',
                'gribtweaks:witch_nugget',
                'gribtweaks:witch_nugget',
                'gribtweaks:witch_nugget',
                'gribtweaks:witch_nugget'
            ],
            id: `${prefix}witch_ingot_from_nuggets`
        },
        {
            output: 'gribtweaks:witch_ingot_block',
            inputs: [
                'gribtweaks:witch_ingot',
                'gribtweaks:witch_ingot',
                'gribtweaks:witch_ingot',
                'gribtweaks:witch_ingot',
                'gribtweaks:witch_ingot',
                'gribtweaks:witch_ingot',
                'gribtweaks:witch_ingot',
                'gribtweaks:witch_ingot',
                'gribtweaks:witch_ingot'
            ],
            id: `${prefix}witch_block_from_ingots`
        },
        {
            output: '9x gribtweaks:witch_ingot',
            inputs: [ 'gribtweaks:witch_ingot_block' ],
            id: `${prefix}witch_ingot_of_block`
        },
        {
            output: '9x gribtweaks:witch_nugget',
            inputs: [ 'gribtweaks:witch_ingot' ],
            id: `${prefix}witch_nugget_of_ingot`
        }
    ]

    recipes.forEach((recipe) => {
        event.shapeless(recipe.output, recipe.inputs).id(recipe.id);
    });
})