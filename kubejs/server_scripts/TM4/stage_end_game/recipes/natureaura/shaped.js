ServerEvents.recipes(event => {
    const prefix = 'tm4:naturesaura/shaped/';
    const recipes = [
        {
            output: 'naturesaura:generator_limit_remover',
            pattern: ['ABA', 'CDE', 'AFA'],
            key: {
                A: 'naturesaura:item_distributor',
                B: 'naturesaura:token_euphoria',
                C: 'naturesaura:token_terror',
                D: 'forbidden_arcanus:dark_nether_star',
                E: 'naturesaura:token_grief',
                F: 'naturesaura:token_rage'
            },
            id: `${prefix}generator_limit_remover`
        }
        
    ];
recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
    
});