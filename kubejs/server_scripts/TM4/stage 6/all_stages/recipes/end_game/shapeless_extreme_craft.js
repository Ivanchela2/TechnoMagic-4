ServerEvents.recipes(event => {
    const prefix = 'gribtweaks:avaritia/shapeless_extreme_craft/';
    const recipes = [
        {
            inputs: [
                '#forge:ingots/iron',
                '#forge:ingots/copper',
                '#forge:ingots/gold',
                '#forge:ingots/netherite',
                'biggerreactors:reinforced_ludicrite_ingot',
                'ad_astra:protasteel_ingot',
                '#forge:ingots/tin',
                '#forge:ingots/lead',
                '#forge:ingots/uranium', // 9
                '#forge:ingots/iridium',
                '#forge:ingots/aluminum',
                '#forge:ingots/enderium',
                '#forge:ingots/manasteel',
                '#forge:ingots/elementium',
                'botania:gaia_ingot',
                'naturesaura:sky_ingot',
                'createbigcannons:cast_iron_ingot',
                'createbigcannons:nethersteel_ingot', // 18
                'chemlib:pre_gribony_ingot',
                'chemlib:unstable_gribony_ingot',
                '#forge:ingots/silver',
                '#forge:ingots/iesnium',
                'ad_astra:desh_ingot',
                'ad_astra:ostrum_ingot',
                'botanicadds:gaiasteel_ingot',
                'twilightforest:ironwood_ingot',
                'avaritia:crystal_matrix_ingot', // 27
                'forbidden_arcanus:obsidian_ingot',
                'cataclysm:witherite_ingot',
                'cataclysm:ignitium_ingot',
                'enigmaticlegacy:evil_ingot',
                '#forge:ingots/zinc',
                'create:brass_ingot',
                'biggerreactors:ludicrite_ingot',
                'forbidden_arcanus:deorum_ingot',
                'naturesaura:tainted_gold', // 36
                'gnumus:vintage_alloy_ingot',
                '#forge:ingots/titanium',
                'hexerei:dry_ingot_combining',
                'aquaculture:neptunium_ingot',
                'biggerreactors:blutonium_ingot',
                'biggerreactors:cyanite_ingot',
                'biggerreactors:graphite_ingot',
                'upgradednetherite_ultimate:ultimate_upgraded_netherite_ingot',
                'gribtweaks:antimatter_ingot', // 45
                'gribtweaks:super_alloy',
                'gribtweaks:spectral_ingot',
                'gribtweaks:component_ingot',
                '#forge:ingots/calcium',
                '#forge:ingots/scandium',
                '#forge:ingots/vanadium',
                '#forge:ingots/chromium',
                '#forge:ingots/manganese',
                '#forge:ingots/cobalt', // 54
                '#forge:ingots/nickel',
                '#forge:ingots/zinc',
                '#forge:ingots/rubidium',
                '#forge:ingots/strontium',
                '#forge:ingots/yttrium',
                '#forge:ingots/zirconium',
                '#forge:ingots/niobium',
                '#forge:ingots/ruthenium',
                '#forge:ingots/rhodium', // 63
                '#forge:ingots/palladium',
                'chemlib:thorium_ingot',
                '#forge:ingots/cadmium',
                '#forge:ingots/indium',
                '#forge:ingots/cesium',
                '#forge:ingots/barium',
                '#forge:ingots/lanthanum',
                '#forge:ingots/cerium',
                '#forge:ingots/praseodymium', // 72
                '#forge:ingots/samarium',
                '#forge:ingots/europium',
                '#forge:ingots/actinium',
                'gribtweaks:mechanical_ingot',
                'gribtweaks:spirit_attuned_ingot',
                'gribtweaks:quantum_ingot',
                'gribtweaks:hephaestus_ingot',
                'gribtweaks:astral_ingot',
                'gribtweaks:angel_ingot' // 81
            ],
            output: { item: 'gribtweaks:ultimate_ingot', count: 1 },
            id: `${prefix}ultimate_ingot`
        }
    ];

    recipes.forEach((recipe) => {
            recipe.type = 'avaritia:shapeless_extreme_craft';
            recipe.ingredients = Ingredient.of(recipe.inputs).toJson();
            recipe.result = recipe.output;

            event.custom(recipe).id(recipe.id);
    });
});
