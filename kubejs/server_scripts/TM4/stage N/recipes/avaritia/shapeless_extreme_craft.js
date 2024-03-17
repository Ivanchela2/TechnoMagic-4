ServerEvents.recipes(event => {
    const prefix = 'gribtweaks:avaritia/shapeless_extreme_craft/';
    const recipes = [
        // {
        //     inputs: [
        //         '',
        //     ],
        //     output: { item: '', count: 1 },
        //     id: `${prefix}`
        // }
    ];

    recipes.forEach((recipe) => {
            recipe.type = 'avaritia:shapeless_extreme_craft';
            recipe.ingredients = Ingredient.of(recipe.inputs).toJson();
            recipe.result = recipe.output;

            event.custom(recipe).id(recipe.id);
    });
});
