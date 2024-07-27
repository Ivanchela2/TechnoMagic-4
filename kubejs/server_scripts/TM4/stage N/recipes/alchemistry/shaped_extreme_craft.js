ServerEvents.recipes(event => {
    const prefix = 'gribtweaks:chemlib/shaped_extreme_craft/';
    const recipes = [
        {
            pattern: [
                'CCBCC',
                'CPSCC',
                'CSDMB',
                'CNSCC',
                'CCBCC'
            ],
            key: {
                B: Item.of('chemlib:beryllium_metal_block').toJson(),
                C: Item.of('alchemistry:reactor_casing').toJson(),
                D: Item.of('alchemistry:dissolver').toJson(),
                M: Item.of('gribtweaks:ultimate_upgraded_netherite_eye').toJson(),
                N: Item.of('alchemistry:combiner').toJson(),
                P: Item.of('alchemistry:compactor').toJson(),
                S: Item.of('gribtweaks:super_alloy_processor').toJson(),
            },
            output: 'alchemistry:fusion_chamber_controller',
            id: 'gribtweaks:alchemistry/mechanical_crafter/fusion_chamber_controller'
        },
        {
            pattern: [
                'CIC',
                'PDP',
                'RLR',
                'PDP',
                'CIC',
            ],
            key: {
                C: Item.of('alchemistry:reactor_casing').toJson(),
                D: Item.of('forbidden_arcanus:deorum_ingot').toJson(),
                I: Item.of('forbidden_arcanus:deorum_nugget').toJson(),
                L: Item.of('forbidden_arcanus:deorum_block').toJson(),
                P: Item.of('gribtweaks:proton_shard').toJson(),
                R: Item.of('chemlib:beryllium_ingot').toJson(),
            },
            output: 'alchemistry:fusion_core',
            id: 'gribtweaks:alchemistry/mechanical_crafter/fusion_core'
        },
        {
            pattern: [ 
                '  B   B  ', 
                ' ASA ASA ', 
                'BC NBN CB', 
                ' AUADAUA ', 
                '  ADIDA  ', 
                ' AUADAUA ', 
                'BC NBN CB', 
                ' ASA ASA ', 
                '  B   B  '
            ],
            key: {
                A: Item.of('gribtweaks:gribony_block').toJson(),
                B: Item.of('gribtweaks:unstable_gribony_block').toJson(),
                C: Item.of('chemlib:cosmic_element').toJson(),
                D: Item.of('chemlib:destabilizing_element').toJson(),
                I: Item.of('chemlib:infinity_element').toJson(),
                N: Item.of('chemlib:neutronium_element').toJson(),
                S: Item.of('chemlib:stabilizing_element').toJson(),
                U: Item.of('chemlib:industrial_unstable_gribony').toJson(),
            },
            output: 'chemlib:gribony_catalyst',
            id: `${prefix}gribony_catalyst`
        },
        {
            pattern: [ 
                '         ', 
                '         ', 
                'DDDDDDDDD', 
                'DGIGIGIGD', 
                'DIGIMIGID', 
                'DGIGIGIGD', 
                'DDDDDDDDD', 
                '         ', 
                '         '
            ],
            key: {
                D: Item.of('chemlib:infinity_neutronium_ingot').toJson(),
                G: Item.of('chemlib:gribony_catalyst').toJson(),
                I: Item.of('avaritia:infinity_ingot').toJson(),
                M: Item.of('gribtweaks:advanced_gribony_component').toJson(),
            },
            output: 'chemlib:infinity_gribony_ingot',
            id: `${prefix}infinity_gribony_ingot`
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
