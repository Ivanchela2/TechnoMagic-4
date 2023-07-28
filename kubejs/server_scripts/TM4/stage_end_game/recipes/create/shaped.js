ServerEvents.recipes(event => {
    const prefix = 'tm4:satge_end_game/shaped/';
    const recipes = [
        {
            output: 'create_sa:creative_filling_tank',
            pattern: [' A ', 'CBC', ' D '],
            key: {
                A: 'create_sa:large_fueling_tank',
                B: 'avaritia:infinity_nugget',
                C: 'create:precision_mechanism',
                D: 'create_sa:large_filling_tank'
            },
            id: `${prefix}creative_filling_tank`
        }
        
    ];
recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
    
});