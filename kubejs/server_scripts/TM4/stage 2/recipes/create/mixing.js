ServerEvents.recipes((event) => {
    const id_prefix = 'tm4:expert/create/mixing/';
    const recipes = [
        {
            heated: false,
            inputs: ['#minecraft:leaves', '#minecraft:leaves', '#minecraft:leaves', '#minecraft:leaves',
                     'minecraft:gold_nugget', 'minecraft:gold_nugget', 'minecraft:gold_nugget', 'minecraft:gold_nugget',
                     'minecraft:grass'],
            output: Item.of('naturesaura:gold_fiber', 4),
            id: `${id_prefix}gold_powder`
          
        }       
    ];
    recipes.forEach((recipe) => {
        event.recipes.create.mixing(recipe.output, recipe.inputs).id(recipe.id);
    });
});
