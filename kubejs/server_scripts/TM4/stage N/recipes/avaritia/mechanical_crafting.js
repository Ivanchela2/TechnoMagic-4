ServerEvents.recipes((event) => {
    const prefix = 'gribtweaks:avaritia/mechanical_crafting/';
    const recipes = [
        {
            pattern: [
                'CCAAPAACC',
                'CDDKKKDDC',
                'ADNUTUNDA',
                'AKUSUSUKA',
                'PKTMBMTKP',
                'AKUSUSUKA',
                'ADNUTUNDA',
                'CDDKKKDDC',
                'CCAAPAACC'
            ],
            key: {
                A: 'gribtweaks:polished_arcane_crystal',
                B: 'gribtweaks:diamond_component',
                C: 'gribtweaks:polished_certus_quartz_crystal',
                D: 'gribtweaks:diamond_plate',
                K: 'gribtweaks:dense_carbon_plate',
                N: 'forbidden_arcanus:dark_nether_star_block',
                M: 'gribtweaks:mechanical_eye',
                P: 'gribtweaks:compressed_phantom_membrane',
                S: 'gribtweaks:spirit_attuned_ingot',
                T: 'gribtweaks:quadruple_compressed_crafting_table',
                U: 'avaritia:crystal_matrix_ingot'
            },
            output: 'avaritia:extreme_crafting_table',
            acceptMirrored: true,
            id: `${prefix}extreme_crafting_table`
        }
    ];

    recipes.forEach((recipe) => {
        event.recipes.create.mechanical_crafting(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
