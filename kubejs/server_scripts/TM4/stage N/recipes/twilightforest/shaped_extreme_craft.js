ServerEvents.recipes(event => {
    const prefix = 'gribtweaks:twilightforest/shaped_extreme_craft/';
    const recipes = [
        {
            pattern: [
                'A       A',
                ' A     A ',
                '  A   A  ',
                '   AAA   ',
                '   A A   ',
                '   AAA   ',
                '  A   A  ',
                ' A     A ',
                'A       A'
                
            ],
            key: {
                A: Item.of('twilightforest:knightmetal_ring').toJson()
            },
            result: 'twilightforest:cube_talisman',
            id: `${prefix}cube_talisman`
        },
    ];

    recipes.forEach((recipe) => {
        let constructed_recipe = {
            type: 'avaritia:shaped_extreme_craft',
            pattern: recipe.pattern,
            key: recipe.key,
            result: Ingredient.of(recipe.result).toJson()
        };
        event.custom(constructed_recipe).id(recipe.id);
    });
});
