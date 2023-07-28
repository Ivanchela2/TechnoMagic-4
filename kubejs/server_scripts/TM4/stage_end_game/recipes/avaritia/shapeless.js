ServerEvents.recipes(event => {
    const prefix = 'tm4:avaritia/shapeless/';
    const recipes = [
        {
            output: 'gribtweaks:block_infinity_catalyst',
            inputs: [
                'avaritia:infinity_catalyst', 
                'avaritia:infinity_catalyst', 
                'avaritia:infinity_catalyst', 
                'avaritia:infinity_catalyst', 
                'avaritia:infinity_catalyst', 
                'avaritia:infinity_catalyst', 
                'avaritia:infinity_catalyst', 
                'avaritia:infinity_catalyst', 
                'avaritia:infinity_catalyst'
            ],
            id: `${prefix}block_infinity_catalyst`
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
