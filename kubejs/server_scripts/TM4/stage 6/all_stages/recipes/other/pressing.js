ServerEvents.recipes((event) => {
    const id_prefix = 'gribtweaks:pressing/';
    const recipes = [
        {
            output: 'gribtweaks:component_base',
            inputs: ['gribtweaks:component_ingot'],
            id: `${id_prefix}component_base`
        }
    ];

    recipes.forEach((recipe) => {
        event.recipes.create.pressing(recipe.output, recipe.inputs).id(recipe.id);
    });
});
