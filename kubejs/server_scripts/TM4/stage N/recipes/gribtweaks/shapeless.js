ServerEvents.recipes(event => {
    const prefix = 'gribtweaks:shapeless/';
    const recipes = [
        {
            output: '3x gribtweaks:buffalo_hide_fiber',
            inputs: [
               'totemic:buffalo_hide',
               '#notreepunching:knives'
            ],
            id: `${prefix}buffalo_hide_fiber_from_hide`
        },
    ]

    recipes.forEach((recipe) => {
        event.shapeless(recipe.output, recipe.inputs)
        .damageIngredient('#notreepunching:knives')
        .id(recipe.id);
    });
})