ServerEvents.recipes((event) => {
    const prefix = 'gribtweaks:ftbic/shaped_extreme_craft/';
    const recipes = [
        {
            pattern: [
                ' GBG ',
                'ACDCA',
                'BDEDB',
                'ACFCA',
                ' GBG '
            ],
            key: {
                A: Ingredient.of('#forge:plates/bronze'),
                B: Ingredient.of('#forge:plates/iron'),
                C: Item.of('ftbic:machine_block'),
                D: Item.of('ftbic:energy_crystal'),
                E: Item.of('createaddition:modular_accumulator'),
                F: Item.of('ftbic:advanced_machine_block'),
                G: Item.of('ftbic:graphene')
            },
            result: 'ftbic:hv_battery_box',
            id: `${prefix}hv_battery_box`
        },
        {
            pattern: [ 
                'AABAA',
                'ACDCA',
                'BDEDB',
                'ACFCA',
                'AABAA'
            ],
            key: { 
                A: Ingredient.of('#forge:plates/steel'),
                B: Item.of('ftbic:iridium_circuit'),
                C: Item.of('ftbic:antimatter_crystal'),
                D: Item.of('ftbic:advanced_alloy'),
                E: Item.of('ftbic:hv_battery_box'),
                F: Item.of('ftbic:advanced_machine_block')
            },
            result: 'ftbic:ev_battery_box',
            id: `${prefix}ev_battery_box`
        },
        {
            pattern: [
                'FAAAF',
                'AEBEA',
                'ACDCA',
                'AECEA',
                'FAAAF'
            ],
            key: {
                A: Item.of('create:sturdy_sheet'),
                B: Item.of('ftbic:electronic_circuit'),
                C: Item.of('twilightforest:ironwood_ingot'),
                D: Item.of('ftbic:machine_block'),
                E: Ingredient.of('#forge:ingots/tin'),
                F: Ingredient.of('#forge:plates/iron')
            },
            result: 'ftbic:canning_machine',
            id: `${prefix}canning_machine`
        },
        {
            pattern: [ 
                'CCFDD', 
                'CEEED',
                'FBABF',
                'DGHGC',
                'DDFCC'
            ],
            key: { 
                A: Item.of('ftbic:machine_block'),
                B: Item.of('create:mechanical_press'),
                C: Ingredient.of('#forge:plates/iron'),
                D: Ingredient.of('#createbigcannons:stone'),
                E: Item.of('ftbic:electronic_circuit'),
                F: Item.of('ftbic:hv_cable'),
                G: Item.of('ftbic:tin_gear'),
                H: Item.of('ftbic:bronze_gear')
            },
            result: 'ftbic:compressor',
            id: `${prefix}compressor`
        },
        {
            pattern: [ 
                'CCFDD', 
                'CEEED',
                'IBABI',
                'DHGHC',
                'DDFCC'
            ],
            key: { 
                A: Item.of('ftbic:machine_block'),
                B: Item.of('create:mechanical_press'),
                C: Ingredient.of('#forge:plates/iron'),
                D: Ingredient.of('#createbigcannons:stone'),
                E: Item.of('ftbic:electronic_circuit'),
                F: Item.of('ftbic:mv_cable'),
                G: Item.of('ftbic:tin_gear'),
                H: Item.of('ftbic:bronze_gear'),
                I: Item.of('minecraft:piston')
            },
            result: 'ftbic:roller',
            id: `${prefix}roller`
        },
        {
            pattern: [ 
                'CCFDD', 
                'CEEED',
                'FBABF',
                'DHGHC',
                'DDFCC'
            ],
            key: { 
                A: Item.of('ftbic:machine_block'),
                B: Item.of('create:crushing_wheel'),
                C: Ingredient.of('#forge:plates/iron'),
                D: Ingredient.of('#createbigcannons:stone'),
                E: Item.of('ftbic:electronic_circuit'),
                F: Item.of('ftbic:mv_cable'),
                G: Item.of('ftbic:copper_gear'),
                H: Item.of('ftbic:gold_gear')
            },
            result: 'ftbic:macerator',
            id: `${prefix}macerator`
        },
        {
            pattern: [ 
                'CCFDD', 
                'CEEED',
                'FBABF',
                'DHGHC',
                'DDFCC'
            ],
            key: { 
                A: Item.of('ftbic:machine_block'),
                B: Item.of('createaddition:rolling_mill'),
                C: Ingredient.of('#forge:plates/iron'),
                D: Ingredient.of('#createbigcannons:stone'),
                E: Item.of('ftbic:electronic_circuit'),
                F: Item.of('ftbic:lv_cable'),
                G: Item.of('ftbic:gold_gear'),
                H: Ingredient.of('#forge:rods/iron')
            },
            result: 'ftbic:extruder',
            id: `${prefix}extruder`
        },
        {
            pattern: [ 
                'CCJDD', 
                'CEEED',
                'FBAIF',
                'DHGHC',
                'DDJCC'
            ],
            key: { 
                A: Item.of('ftbic:machine_block'),
                B: Item.of('create:mechanical_saw'),
                C: Ingredient.of('#forge:plates/iron'),
                D: Ingredient.of('#createbigcannons:stone'),
                E: Item.of('ftbic:electronic_circuit'),
                F: Item.of('ftbic:mv_cable'),
                G: Item.of('ftbic:copper_gear'),
                H: Item.of('ftbic:fluid_cell'),
                I: Item.of('create:deployer'),
                J: Item.of('supplementaries:flint_block')
            },
            result: 'ftbic:centrifuge',
            id: `${prefix}centrifuge`
        },
        {
            pattern: [
                'ABBA',
                'BDDB',
                'BEEB',
                'AFFA'
            ],
            key: {
                A: Item.of('twilightforest:ironwood_ingot'),
                B: Item.of('ftbic:industrial_grade_metal'),
                D: Item.of('ftbic:electronic_circuit'),
                E: Item.of('ftbic:compressor'),
                F: Item.of('seeds:trash')
            },
            result: 'ftbic:reprocessor',
            id: `${prefix}reprocessor`
        }
    ];

    recipes.forEach((recipe) => {
        let constructed_recipe = {
            type: 'avaritia:shaped_extreme_craft',
            pattern: recipe.pattern,
            key: recipe.key,
            result: Item.of(recipe.result).toJson()
        };
        event.custom(constructed_recipe).id(recipe.id);
    });
});
