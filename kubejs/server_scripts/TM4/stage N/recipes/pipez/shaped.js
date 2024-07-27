ServerEvents.recipes(event => {
    const prefix = 'gribtweaks:pipez/shaped/';
    const recipes = [
        {
            output: '8x pipez:infinity_upgrade',
            pattern: ['ABC', 'BDB', 'EBF'],
            key: {
                A: 'chemlib:all_alkali_metals_element',
                B: 'forbidden_arcanus:dark_rune_block',
                C: 'chemlib:all_alkaline_earth_metals_element',
                D: 'pipez:ultimate_upgrade',
                E: 'chemlib:all_lanthanides_element',
                F: 'chemlib:all_halogens_element'
            },
            id: `${prefix}infinity_upgrade`
        }
        
    ];
recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
    
});