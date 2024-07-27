ServerEvents.recipes((event) => {
    const prefix = 'gribtweaks:create/crushing/';
    const recipes = [
        {
            outputs: [Item.of('avaritia:infinity_nugget', 6)],
            input: 'avaritia:infinity_ingot',
            id: `${prefix}infinity_nugget`
        }
    ];
    recipes.forEach((recipe) => {
        event.recipes.create.crushing(recipe.outputs, recipe.input).id(recipe.id);
    });
});
