ServerEvents.recipes(event => {
    const prefix = 'tm4:satge_end_game/shaped/';
    const recipes = [
        {
            output: 'enigmaticlegacy:cosmic_heart',
            pattern: ['A1A', 'CBC', 'A2A'],
            key: {
                A: 'enigmaticlegacy:astral_dust',
                B: 'minecraft:heart_of_the_sea',
                C: 'forbidden_arcanus:mundabitur_dust',
                1: 'cataclysm:mech_eye',
                2: 'cataclysm:flame_eye'
            },
            id: `${prefix}cosmic_heart`
        }
        
    ];
recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
    
});