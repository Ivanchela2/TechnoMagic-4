ServerEvents.recipes(event => {
    const prefix = 'gribtweaks:avaritia/shapeless/';
    const recipes = [
        {
            output: 'gribtweaks:ultimate_ingot',
            inputs: [
                'gribtweaks:ultimate_nugget',
                'gribtweaks:ultimate_nugget',
                'gribtweaks:ultimate_nugget',
                'gribtweaks:ultimate_nugget',
                'gribtweaks:ultimate_nugget',
                'gribtweaks:ultimate_nugget',
                'gribtweaks:ultimate_nugget',
                'gribtweaks:ultimate_nugget',
                'gribtweaks:ultimate_nugget'
            ],
            id: `${prefix}ultimate_ingot`
        },
        {
            output: '9x gribtweaks:ultimate_nugget',
            inputs: [ 'gribtweaks:ultimate_ingot' ],
            id: `${prefix}ultimate_nugget`
        },
        {
            output: 'gribtweaks:ultimate_block',
            inputs: [
                'gribtweaks:ultimate_ingot',
                'gribtweaks:ultimate_ingot',
                'gribtweaks:ultimate_ingot',
                'gribtweaks:ultimate_ingot',
                'gribtweaks:ultimate_ingot',
                'gribtweaks:ultimate_ingot',
                'gribtweaks:ultimate_ingot',
                'gribtweaks:ultimate_ingot',
                'gribtweaks:ultimate_ingot',
            ],
            id: `${prefix}ultimate_block`
        },
        {
            output: '9x gribtweaks:ultimate_ingot',
            inputs: [ 'gribtweaks:ultimate_block' ],
            id: `${prefix}ultimate_ingots_of_block`
        }
    ];

    recipes.forEach((recipe) => {
        event.shapeless(recipe.output, recipe.inputs).id(recipe.id);
    });
});
