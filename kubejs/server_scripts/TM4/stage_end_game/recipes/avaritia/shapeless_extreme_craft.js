ServerEvents.recipes(event => {
    const prefix = 'tm4:avaritia/shapeless_extreme_craft/';
    const recipes = [
        {
            inputs: [
                'create:honeyed_apple',
                'minecraft:glistering_melon_slice',
                'farmersdelight:apple_pie',
                'tm4:combined_jelly',
                'create:sweet_roll',
                'fastfooddelight:cheeseburger',
                'miners_delight:pumpkin_soup_cup',
                'farmersdelight:glow_berry_custard',
                'farmersdelight:dumplings',
                'miners_delight:improvised_barbecue_stick',
                'farmersdelight:barbecue_stick',
                'nethersdelight:nether_skewer',
                'miners_delight:pasta_with_veggieballs',
                'farmersdelight:shepherds_pie_block',
                'farmersdelight:grilled_salmon',
                'farmersdelight:rice_roll_medley_block',
                'endersdelight:crawling_sandwich',
                'endersdelight:pearl_pasta',
                'endersdelight:ender_paella',
                'minecraft:enchanted_golden_apple',
                'avaritia:neutron_nugget'
            ],
            output: { item: 'avaritia:ultimate_stew', count: 2 },
            id: `${prefix}ultimate_stew`
        },
        {
            inputs: [
                'farmersdelight:cooked_chicken_cuts',
                'farmersdelight:cooked_bacon',
                'farmersdelight:cooked_mutton_chops',
                'quark:cooked_crab_leg',
                'delightful:cooked_venison_chops',
                'forbidden_arcanus:cooked_tentacle',
                'aquamirae:cooked_spinefish',
                'nocubes_better_frogs:cooked_frog_leg',
                'alexsmobs:cooked_catfish',
                'collectorsreap:baked_portobello_cap',
                'alexsmobs:cooked_lobster_tail',
                'alexsmobs:cooked_moose_ribs',
                'farmersdelight:fried_egg',
                'farmersdelight:cooked_cod_slice',
                'alexsmobs:cooked_kangaroo_meat',
                'avaritia:neutron_nugget'
            ],
            output: { item: 'avaritia:cosmic_meatballs', count: 1 },
            id: `${prefix}cosmic_meatballs`
        }
    ];

    recipes.forEach((recipe) => {
            recipe.type = 'avaritia:shapeless_extreme_craft';
            recipe.ingredients = Ingredient.of(recipe.inputs).toJson();
            recipe.result = recipe.output;

            event.custom(recipe).id(recipe.id);
    });
});
