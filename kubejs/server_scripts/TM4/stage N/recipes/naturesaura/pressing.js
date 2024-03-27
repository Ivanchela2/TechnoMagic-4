ServerEvents.recipes((event) => {
    const id_prefix = 'gribtweaks:naturesaura/pressing/';
    const recipes = [
        {
            output: 'naturesaura:aura_bottle',
            inputs: ['naturesaura:bottle_two_the_rebottling'],
            id: `${id_prefix}bottle_two_the_rebottling`
        }
    ];

    recipes.forEach((recipe) => {
        event.recipes.create.pressing(recipe.output, recipe.inputs).id(recipe.id);
    });
});
