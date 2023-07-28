ServerEvents.recipes(event => {
    const prefix = 'tm4:minecraft/smithing/';
    const recipes = [
        {
            input1: 'create:creative_crate',
            input2: 'upgradednetherite_creative:creative_upgraded_netherite_ingot',
            output: 'ae2:creative_item_cell',
            id: `${prefix}creative_item_cell`
        },
        {
            input1: 'create:creative_fluid_tank',
            input2: 'upgradednetherite_creative:creative_upgraded_netherite_ingot',
            output: 'ae2:creative_fluid_cell',
            id: `${prefix}creative_fluid_cell`
        },
        {
            input1: 'botania:creative_pool',
            input2: 'upgradednetherite_creative:creative_upgraded_netherite_ingot',
            output: 'appbot:creative_mana_cell',
            id: `${prefix}creative_mana_cell`
        }
    ];
    recipes.forEach((recipe) => {
        event.smithing(recipe.output, recipe.input1, recipe.input2).id(recipe.id);
    });
});
