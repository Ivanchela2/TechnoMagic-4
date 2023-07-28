ServerEvents.recipes(event => {
    const prefix = 'gribtweaks:avaritia/shaped_extreme_craft/';
    const recipes = [
        {
            pattern: [ 
                '  A   A  ', 
                ' AAA AAA ', 
                'AA AAA AA', 
                ' AAAAAAA ', 
                '  AAAAA  ', 
                ' AAAAAAA ', 
                'AA AAA AA', 
                ' AAA AAA ', 
                '  A   A  '
            ],
            key: {
                A: Item.of('gribtweaks:infinity_catalyst_pile').toJson()
            },
            output: 'avaritia:infinity_catalyst',
            id: `${prefix}infinity_catalyst_of_pile`
        }
    ];

    recipes.forEach((recipe) => {
        let constructed_recipe = {
            type: 'avaritia:shaped_extreme_craft',
            pattern: recipe.pattern,
            key: recipe.key,
            result: Ingredient.of(recipe.output).toJson()
        };
        event.custom(constructed_recipe).id(recipe.id);
    });
});
