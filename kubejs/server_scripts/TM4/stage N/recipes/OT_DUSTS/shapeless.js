ServerEvents.recipes(event => {
    const prefix = 'gribtweaks:dust/shapeless/';
    const recipes = [
        {
            output: '2x gribtweaks:oblivion_powder',
            inputs: [
                'botania:pixie_dust', 
                'forbidden_arcanus:mundabitur_dust',
                'gribtweaks:oblivion_powder',
                'rootsclassic:growth_powder'
            ],
            id: `${prefix}oblivion_powder`
        },
        {
            output: '32x forbidden_arcanus:arcane_crystal_dust',
            inputs: [
                'gribtweaks:oblivion_powder', 
                'minecraft:glowstone_dust',
                'forbidden_arcanus:arcane_crystal_dust',
                'minecraft:redstone'
            ],
            id: `${prefix}arcane_crystal_dust`
        },
        {
            output: '32x deeperdarker:soul_dust',
            inputs: [
                'gribtweaks:oblivion_powder', 
                'minecraft:glowstone_dust',
                'deeperdarker:soul_dust',
                '#forge:dusts/ender_pearl'
            ],
            id: `${prefix}soul_dust`
        },
    ];

    recipes.forEach((recipe) => {
        event.shapeless(recipe.output, recipe.inputs).id(recipe.id);
    });
});
