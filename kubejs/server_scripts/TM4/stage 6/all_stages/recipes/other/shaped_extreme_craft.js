ServerEvents.recipes(event => {
    const prefix = 'gribtweaks:shaped_extreme_craft/';
    const recipes = [
        {
            pattern: [ 
                '       AA', 
                '     AAAA', 
                '   AAAAA ', 
                ' AAAAMAA ', 
                'AAAAMAA  ', 
                'AAAMAAA  ', 
                'AAMAAA   ', 
                'AMAAAA   ', 
                'AAAAA    '
            ],
            key: {
                A: Item.of('gribtweaks:ametrine_shard').toJson(),
                M: Item.of('gribtweaks:antimatter_l4').toJson()
            },
            output: 'gribtweaks:ametrine_ore_crystal',
            id: `${prefix}ametrine_ore_crystal`
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
