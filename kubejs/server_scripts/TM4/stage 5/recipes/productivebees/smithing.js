ServerEvents.recipes(event => {
    const prefix = 'tm4:productivebees/smithing/';
    const recipes = [
        {
            input1: 'minecraft:cauldron',
            input2: 'minecraft:grindstone',
            output: 'productivebees:centrifuge',
            id: `${prefix}centrifuge`
        }
    ];
    recipes.forEach((recipe) => {
        event.smithing(recipe.output, recipe.input1, recipe.input2).id(recipe.id);
    });
});
