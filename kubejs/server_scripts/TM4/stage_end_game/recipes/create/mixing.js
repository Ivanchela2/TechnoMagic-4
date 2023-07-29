ServerEvents.recipes(event => {
    const id_prefix = 'tm4:create/mixing/';
    const recipes = [
        {
            heated: true,
            inputs: [
                'collectorsreap:lime_gummy', 
                'collectorsreap:pomegranate_gummy', 
                'collectorsreap:melon_gummy', 
                'collectorsreap:apple_gummy', 
                'collectorsreap:banana_gummy', 
                'collectorsreap:vanilla_gummy', 
                'collectorsreap:chocolate_gummy', 
                'collectorsreap:strawberry_gummy', 
                'collectorsreap:mint_gummy', 
                'collectorsreap:adzuki_gummy', 
                'collectorsreap:green_tea_gummy', 
                'collectorsreap:yellow_tea_gummy', 
                'collectorsreap:black_tea_gummy', 
                'collectorsreap:coffee_gummy', 
                'delightful:salmonberry_gummy'
            ],
            output: Item.of('gribtweaks:combined_jelly', 1),
            id: `${id_prefix}combined_jelly`
        }
    ];

    recipes.forEach((recipe) => {
        const re = event.recipes.create.mixing(recipe.output, recipe.inputs).id(recipe.id);

        if (recipe.heated) {
            re.heated();
        } else if (recipe.superheated) {
            re.superheated();
        } else {
            //unheated
        }
    });
});
