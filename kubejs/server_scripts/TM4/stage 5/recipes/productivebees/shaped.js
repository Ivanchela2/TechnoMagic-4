ServerEvents.recipes(event => {
    const prefix = 'tm4:productive_bees/shaped/';
    const recipes = [
		{
            output: 'minecraft:beehive',
            pattern: ['AAA', 'BCB', 'AAA'],
            key: {
                A: '#minecraft:planks',
                B: 'minecraft:honeycomb',
                C: 'aquamirae:ship_graveyard_echo'
            },
            id: `${prefix}beehive`
        },
		{
            output: 'gribtweaks:comb_infinity',
            pattern: ['AAA', 'AAA', 'AAA'],
            key: {
                A: 'gribtweaks:infinity_honeycomb'
            },
            id: `${prefix}comb_infinity`
        },
		{
            output: 'gribtweaks:comb_neutronium',
            pattern: ['AAA', 'AAA', 'AAA'],
            key: {
                A: 'gribtweaks:neutronium_honeycomb'
            },
            id: `${prefix}comb_neutronium`
        }
        
    ];
	recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
    
});