ServerEvents.recipes((event) => {
    const prefix = 'tm4:silentgear/compounding/';
    const recipes = [
        {
            inputs: ['upgradednetherite_ultimate:ultimate_upgraded_netherite_ingot', 'chemlib:gribony_ingot', 'enigmaticlegacy:evil_ingot', '#forge:dusts/mundabitur'],
            result: { item: 'dreadsteel:dreadsteel_ingot', count: 1 },
            id: `${prefix}dreadsteel_ingot`
          }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'silentgear:compounding/metal';
        recipe.ingredients = recipe.inputs.map((input) => Ingredient.of(input).toJson());
        recipe.result = recipe.result;
        event.custom(recipe).id(recipe.id);
    });
});
