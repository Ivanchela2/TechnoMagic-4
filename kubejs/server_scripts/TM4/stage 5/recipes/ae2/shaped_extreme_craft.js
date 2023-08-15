ServerEvents.recipes(event => {
    const prefix = 'tm4:avaritia/shaped_extreme_craft/';
    const recipes = [
        {
            pattern: [
                ' ADA ',
                'ABCBA',
                'DCFCD',
                'ABCBA',
                ' ADA '
            ],
            key: {
                A: Item.of( 'minecraft:redstone').toJson(),
                B: Item.of( 'ftbic:advanced_circuit').toJson(),
                C: Ingredient.of( '#ae2:all_certus_quartz').toJson(),
                D: Item.of( 'gribtweaks:tained_gold_powder').toJson(),
                F: Item.of( 'gribtweaks:babbitt_alloy_processor').toJson()
            },
            result: 'ae2:cell_component_1k',
            id: `${prefix}cell_component_1k`
        },
        {
            pattern: [
                ' ADA ',
                'ABEBA',
                'DCFCD',
                'AEBEA',
                ' ADA '
            ],
            key: {
                A: Item.of( 'minecraft:redstone').toJson(),
                B: Item.of( 'ae2:cell_component_1k').toJson(),
                C: Item.of( 'ftbic:iridium_circuit').toJson(),
                D: Item.of( 'gribtweaks:tained_gold_powder').toJson(),
                F: Item.of( 'gribtweaks:babbitt_alloy_processor').toJson(),
                E: Item.of( 'ae2:quartz_glass').toJson()
            },
            result: 'ae2:cell_component_4k',
            id: `${prefix}cell_component_4k`
        },
        {
            pattern: [
                ' ADA ',
                'ABEBA',
                'DCFCD',
                'AEBEA',
                ' ADA '
            ],
            key: {
                A: Item.of( 'minecraft:redstone').toJson(),
                B: Item.of( 'ae2:cell_component_4k').toJson(),
                C: Item.of( 'gribtweaks:quantum_circuit').toJson(),
                D: Item.of( 'gribtweaks:tained_gold_powder').toJson(),
                F: Item.of( 'gribtweaks:nordic_alloy_processor').toJson(),
                E: Item.of( 'ae2:quartz_glass').toJson()
            },
            result: 'ae2:cell_component_16k',
            id: `${prefix}cell_component_16k`
        },
        {
            pattern: [
                ' ADA ',
                'ABEBA',
                'DCFCD',
                'AEBEA',
                ' ADA '
            ],
            key: {
                A: Item.of( 'gribtweaks:tained_gold_powder').toJson(),
                B: Item.of( 'ae2:cell_component_16k').toJson(),
                C: Item.of( 'gribtweaks:quantum_circuit').toJson(),
                D: Item.of( 'gribtweaks:oblivion_powder').toJson(),
                F: Item.of( 'gribtweaks:nordic_alloy_processor').toJson(),
                E: Item.of( 'ae2:quartz_glass').toJson()
            },
            result: 'ae2:cell_component_64k',
            id: `${prefix}cell_component_64k`
        },
        {
            pattern: [
                ' ADA ',
                'ABEBA',
                'DCFCD',
                'AEBEA',
                ' ADA '
            ],
            key: {
                A: Item.of( 'ftbic:antimatter').toJson(),
                B: Item.of( 'ae2:cell_component_64k').toJson(),
                C: Item.of( 'gribtweaks:quantum_circuit').toJson(),
                D: Item.of( 'gribtweaks:oblivion_powder').toJson(),
                F: Item.of( 'gribtweaks:nordic_alloy_processor').toJson(),
                E: Item.of( 'ae2:quartz_glass').toJson()
            },
            result: 'ae2:cell_component_256k',
            id: `${prefix}cell_component_256k`
        },
        {
            pattern: [
                '  121  ',
                ' 24542 ',
                '1486841',
                '2573752',
                '1467641',
                ' 24542 ',
                '  121  '
            ],
            key: {
                1: Item.of( 'gribtweaks:oblivion_powder').toJson(),
                2: Item.of( 'gribtweaks:antimatter_l1').toJson(),
                3: Item.of( 'gribtweaks:nordic_alloy_processor').toJson(),
                4: Ingredient.of( '#ae2:all_certus_quartz').toJson(),
                5: Item.of( 'gribtweaks:energium_dust').toJson(),
                6: Item.of( 'ae2:cell_component_256k').toJson(),
                7: Item.of( 'gribtweaks:spectral_circuit').toJson(),
                8: Item.of( 'gribtweaks:polished_antimatter_crystal').toJson()
            },
            result: 'megacells:cell_component_1m',
            id: `${prefix}cell_component_1m`
        },
        {
            pattern: [
                ' 12421 ',
                '1426241',
                '2285822',
                '4673764',
                '2257522',
                '1426241',
                ' 12421 '
            ],
            key: {
                1: Item.of( 'gribtweaks:antimatter_l2').toJson(),
                2: Item.of( 'gribtweaks:dense_oblivion_plate').toJson(),
                3: Item.of( 'gribtweaks:inadequate_alloy_processor').toJson(),
                4: Ingredient.of( '#ae2:all_certus_quartz').toJson(),
                5: Item.of( 'megacells:cell_component_1m').toJson(),
                6: Item.of( 'gribtweaks:astral_ingot').toJson(),
                7: Item.of( 'gribtweaks:spectral_circuit').toJson(),
                8: Item.of( 'gribtweaks:polished_antimatter_crystal').toJson()
            },
            result: 'megacells:cell_component_4m',
            id: `${prefix}cell_component_4m`
        },
        {
            pattern: [
                ' 12421 ',
                '1426241',
                '2285822',
                '4673764',
                '2257522',
                '1426241',
                ' 12421 '
            ],
            key: {
                1: Item.of( 'gribtweaks:antimatter_l3').toJson(),
                2: Item.of( 'gribtweaks:oblivion_component').toJson(),
                3: Item.of( 'gribtweaks:inadequate_alloy_processor').toJson(),
                4: Ingredient.of( '#ae2:all_certus_quartz').toJson(),
                5: Item.of( 'megacells:cell_component_4m').toJson(),
                6: Item.of( 'gribtweaks:astral_ingot').toJson(),
                7: Item.of( 'gribtweaks:spectral_circuit').toJson(),
                8: Item.of( 'gribtweaks:antimatter_component').toJson()
            },
            result: 'megacells:cell_component_16m',
            id: `${prefix}cell_component_16m`
        },
        {
            pattern: [
                ' 12421 ',
                '1426241',
                '2285822',
                '4673764',
                '2257522',
                '1426241',
                ' 12421 '
            ],
            key: {
                1: Item.of( 'gribtweaks:antimatter_l3').toJson(),
                2: Item.of( 'gribtweaks:advanced_oblivion_component').toJson(),
                3: Item.of( 'gribtweaks:inadequate_alloy_processor').toJson(),
                4: Ingredient.of( '#ae2:all_certus_quartz').toJson(),
                5: Item.of( 'megacells:cell_component_16m').toJson(),
                6: Item.of( 'gribtweaks:hephaestus_ingot').toJson(),
                7: Item.of( 'gribtweaks:photoniy_circuit').toJson(),
                8: Item.of( 'gribtweaks:advanced_antimatter_component').toJson()
            },
            result: 'megacells:cell_component_64m',
            id: `${prefix}cell_component_64m`
        },
        {
            pattern: [
                '  13231  ',
                ' 1948491 ',
                '196535691',
                '345a7a543',
                '283656382',
                '345767543',
                '196535691',
                ' 1948491 ',
                '  13231  '
            ],
            key: {
                1: Item.of( 'gribtweaks:advanced_oblivion_component').toJson(),
                2: Item.of( 'gribtweaks:energium_dust').toJson(),
                3: Ingredient.of( '#ae2:all_certus_quartz').toJson(),
                4: Item.of( 'gribtweaks:photoniy_ingot').toJson(),
                5: Item.of( 'gribtweaks:super_alloy_processor').toJson(),
                6: Item.of( 'gribtweaks:photoniy_circuit').toJson(),
                7: Item.of( 'megacells:cell_component_64m').toJson(),
                8: Item.of( 'enigmaticlegacy:astral_block').toJson(),
                9: Item.of( 'gribtweaks:antimatter_l4').toJson(),
                a: Item.of( 'gribtweaks:advanced_antimatter_component').toJson(),
            },
            result: 'megacells:cell_component_256m',
            id: `${prefix}cell_component_256m`
        }
    ];

    recipes.forEach((recipe) => {
        let constructed_recipe = {
            type: 'avaritia:shaped_extreme_craft',
            pattern: recipe.pattern,
            key: recipe.key,
            result: Ingredient.of(recipe.result).toJson()
        };
        event.custom(constructed_recipe).id(recipe.id);
    });
});
