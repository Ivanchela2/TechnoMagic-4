ServerEvents.recipes(event => {
    const prefix = 'gribtweaks:shaped_extreme_craft/';
    const recipes = [
        {
            pattern: [
                'ABCBA',
                'BDEDB',
                'CFGFC',
                'BDEDB',
                'ABCBA'
            ],
            key: {
                A: Ingredient.of('botanicadds:gaiasteel_ingot'),
                B: Ingredient.of('botanicadds:gaiasteel_nugget'),
                C: Ingredient.of('botania:red_petal_block'),
                D: Ingredient.of('twilightforest:carminite'),
                E: Ingredient.of('botania:life_essence'),
                F: Ingredient.of('gribtweaks:chunk_of_etherium'),
                G: Ingredient.of('botania:gaia_spreader'),
            },
            output: 'advancedgrib:advanced_spreader',
            id: `${prefix}advanced_spreader`
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
