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
            output: 'gribtweaks:compressed_fiery_block',
            pattern: ['AAA', 'ABA', 'AAA'],
            key: {
                A: 'twilightforest:fiery_ingot',
                B: 'twilightforest:fiery_block'
            },
            id: `${prefix}compressed_fiery_block`
        },
		{
            output: 'gribtweaks:compressed_knightmetal_block',
            pattern: ['AAA', 'ABA', 'AAA'],
            key: {
                A: 'twilightforest:knightmetal_ingot',
                B: 'twilightforest:knightmetal_block'
            },
            id: `${prefix}compressed_knightmetal_block`
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