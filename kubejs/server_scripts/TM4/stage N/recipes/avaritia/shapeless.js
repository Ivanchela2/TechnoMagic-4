ServerEvents.recipes(event => {
    const prefix = 'gribtweaks:avaritia/shapeless/';
    const recipes = [
        {
            output: 'gribtweaks:block_infinity_catalyst',
            inputs: [
                '9x avaritia:infinity_catalyst'
            ],
            id: `${prefix}block_infinity_catalyst`
        },
        {
            output: 'avaritia:infinity_ingot',
            inputs: [
                '9x avaritia:infinity_nugget'
            ],
            id: `${prefix}infinity_ingot_from_nuggets`
        },
        {
            output: '9x avaritia:infinity_catalyst',
            inputs: [ 'gribtweaks:block_infinity_catalyst' ],
            id: `${prefix}infinity_catalyst`
        },
        {
            output: 'gribtweaks:infinity_heavy_cogwheel',
            inputs: ['create:shaft', 'dreadsteel:dreadsteel_ingot'],
            id: `${prefix}infinity_heavy_cogwheel`
        }
    ];

    recipes.forEach((recipe) => {
        event.shapeless(recipe.output, recipe.inputs).id(recipe.id);
    });
});
