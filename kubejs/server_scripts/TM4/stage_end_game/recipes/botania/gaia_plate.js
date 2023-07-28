ServerEvents.recipes(event => {
    const prefix = 'tm4:botanicadds/gaia_plate/';
    const recipes = [
        {
            input: [ 
                'tm4:neutronium_catalyst', 
                '#forge:gems/elven_lapis', 
                'botania:infinity_petal', 
                'botania:pixie_dust', 
                'botanicadds:dreaming_pool', 
                '#forge:gems/dragonstone', 
                'botanicadds:mana_ring_gaia', 
                '#forge:ingots/elementium'
            ],
            output: 'botania:creative_pool',
            mana: 2000000,
            id: `${prefix}creative_bool`
        },
        {
            input: [ 
                'tm4:neutronium_catalyst', 
                '#forge:ingots/gaiasteel', 
                'naturesaura:depth_ingot_block', 
                '#forge:ingots/gaiasteel', 
                'forbidden_arcanus:dark_rune_block', 
                '#forge:ingots/gaiasteel', 
                'naturesaura:depth_ingot_block', 
                '#forge:ingots/gaiasteel'
            ],
            output: '64x botania:infrangible_platform',
            mana: 2000000,
            id: `${prefix}infrangible_platform`
        }
    ]

    recipes.forEach((recipe) => {
            recipe.type = "botanicadds:gaia_plate";
            recipe.ingredients = Ingredient.of(recipe.input).toJson();
            recipe.result = Item.of(recipe.output).toJson();
            recipe.mana = recipe.mana;
        event.custom(recipe).id(recipe.id);
    });
});
