ServerEvents.recipes(event => {
    const prefix = 'gribtweaks:shapeless/';
    const recipes = [
        {
            output: 'gribtweaks:ingot_osmium',
            inputs: [
                'gribtweaks:nugget_osmium',
                'gribtweaks:nugget_osmium',
                'gribtweaks:nugget_osmium',
                'gribtweaks:nugget_osmium',
                'gribtweaks:nugget_osmium',
                'gribtweaks:nugget_osmium',
                'gribtweaks:nugget_osmium',
                'gribtweaks:nugget_osmium',
                'gribtweaks:nugget_osmium'
            ],
            id: `${prefix}ingot_osmium_from_nuggets`
        },
        {
            output: 'gribtweaks:block_osmium',
            inputs: [
                'gribtweaks:ingot_osmium',
                'gribtweaks:ingot_osmium',
                'gribtweaks:ingot_osmium',
                'gribtweaks:ingot_osmium',
                'gribtweaks:ingot_osmium',
                'gribtweaks:ingot_osmium',
                'gribtweaks:ingot_osmium',
                'gribtweaks:ingot_osmium',
                'gribtweaks:ingot_osmium'
            ],
            id: `${prefix}block_osmium_from_ingots`
        },
        {
            output: '9x gribtweaks:ingot_osmium',
            inputs: [ 'gribtweaks:block_osmium' ],
            id: `${prefix}ingot_osmium_of_block`
        },
        {
            output: '9x gribtweaks:nugget_osmium',
            inputs: [ 'gribtweaks:ingot_osmium' ],
            id: `${prefix}osmium_nugget_of_ingot`
        }
    ]

    recipes.forEach((recipe) => {
        event.shapeless(recipe.output, recipe.inputs).id(recipe.id);
    });
})