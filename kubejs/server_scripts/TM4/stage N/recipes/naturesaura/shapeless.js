ServerEvents.recipes(event => {
    const prefix = 'naturesaura:shapeless/';
    const recipes = [
        {
            output: 'naturesaura:bottle_two_the_rebottling',
            inputs: [
                'minecraft:glass_bottle',
                'ftbic:rubber',
                'gribtweaks:component_base'
            ],
            id: `${prefix}bottle_two_the_rebottling`
        }
    ]

    recipes.forEach((recipe) => {
        event.shapeless(recipe.output, recipe.inputs).id(recipe.id);
    });
})