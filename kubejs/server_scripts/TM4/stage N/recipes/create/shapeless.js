ServerEvents.recipes(event => {
    const prefix = 'gribtweaks:create/shapeless/';
    const recipes = [
        {
            output: 'create:cogwheel',
            inputs: [
                'extendedgears:shaftless_cogwheel', 
                'create:shaft'
            ],
            id: `${prefix}cogwheel`
        },
        {
            output: 'create:large_cogwheel',
            inputs: [
                'extendedgears:large_shaftless_cogwheel', 
                'create:shaft'
            ],
            id: `${prefix}large_cogwheel`
        },
        {
            output: 'createbigcannons:cast_iron_ingot',
            inputs: [
                '3x minecraft:coal', 
                '#forge:plates/iron'
            ],
            id: `${prefix}cast_iron_ingot`
        },
    ];

    recipes.forEach((recipe) => {
        event.shapeless(recipe.output, recipe.inputs).id(recipe.id);
    });
});
