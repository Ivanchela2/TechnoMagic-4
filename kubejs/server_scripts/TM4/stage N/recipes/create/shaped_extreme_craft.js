ServerEvents.recipes((event) => {
    const prefix = 'gribtweaks:create/shaped_extreme_craft/';
    const recipes = [
        {
            pattern: [
                ' AAA ',
                'AABAA',
                'ABCBA',
                'AABAA',
                ' AAA '
            ],
            key: {
                A: Item.of('create:andesite_alloy'),
                B: Ingredient.of('#minecraft:planks'),
                C: Ingredient.of('#createbigcannons:stone')
            },
            result: 'create:crushing_wheel',
            id: `${prefix}crushing_wheel`
        }
    ];

    recipes.forEach((recipe) => {
        let constructed_recipe = {
            type: 'avaritia:shaped_extreme_craft',
            pattern: recipe.pattern,
            key: recipe.key,
            result: Item.of(recipe.result).toJson()
        };
        event.custom(constructed_recipe).id(recipe.id);
    });
});
