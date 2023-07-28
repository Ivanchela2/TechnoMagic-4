ServerEvents.recipes(event => {
    const prefix = 'gribtweaks:ad_astra/shaped_extreme_craft/';
    const recipes = [
        {
            pattern: [
                '    F    ',
                ' F SDS F ',
                'DDSSSSSDD',
                'SSVSCSVSS',
                ' SMDTDMS ',
                '  SDSDS  ',
                '  SCRCS  ',
                '   DSD   ',
                '   DSD   '
            ],
            key: {
                C: Item.of('ae2:molecular_assembler').toJson(),
                D: Item.of('forbidden_arcanus:deorum_block').toJson(),
                F: Item.of('gribtweaks:super_alloy').toJson(),
                M: Item.of('arclight:moonlight_core').toJson(),
                R: Item.of('naturesaura:rf_converter').toJson(),
                S: Item.of('ad_astra:steel_block').toJson(),
                T: Item.of('gribtweaks:quadruple_compressed_crafting_table').toJson(),
                V: Item.of('gribtweaks:ultimate_upgraded_netherite_eye').toJson()
            },
            output: 'ad_astra:nasa_workbench',
            id: `${prefix}nasa_workbench`
        }
    ];

    recipes.forEach((recipe) => {
        let constructed_recipe = {
            type: 'avaritia:shaped_extreme_craft',
            pattern: recipe.pattern,
            key: recipe.key,
            result: Ingredient.of(recipe.output).toJson()
        };
        event.custom(constructed_recipe).id(recipe.id);
    });
});
