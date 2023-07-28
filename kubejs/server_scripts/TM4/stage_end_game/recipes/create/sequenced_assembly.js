ServerEvents.recipes((event) => {
    const prefix = 'tm4:create/sequenced_assembly/';
    const recipes = [
        {
            input: 'megacells:bulk_cell_component',
            outputs: ['create:creative_crate'],
            transitionalItem: 'megacells:bulk_cell_component',
            loops: 1,
            sequence: [
                {
                    type: 'deploying',
                    input: ['megacells:bulk_cell_component', 'createaddition:creative_energy'],
                    output: 'megacells:bulk_cell_component'
                },
                {
                    type: 'deploying',
                    input: ['megacells:bulk_cell_component', 'create:creative_fluid_tank'],
                    output: 'megacells:bulk_cell_component'
                },
                {
                    type: 'deploying',
                    input: ['megacells:bulk_cell_component', 'create:creative_motor'],
                    output: 'megacells:bulk_cell_component'
                },
                {
                    type: 'deploying',
                    input: ['megacells:bulk_cell_component', 'create:creative_blaze_cake'],
                    output: 'megacells:bulk_cell_component'
                },
                {
                    type: 'deploying',
                    input: ['megacells:bulk_cell_component', 'tm4:infinity_heavy_cogwheel'],
                    output: 'megacells:bulk_cell_component'
                }
            ],
            id: `${prefix}creative_crate`
        },
        {
            input: 'create:blaze_cake_base',
            outputs: ['create:creative_blaze_cake'],
            transitionalItem: 'create:blaze_cake_base',
            loops: 1,
            sequence: [
                {
                    type: 'filling',
                    input: ['create:blaze_cake_base', Fluid.of('minecraft:lava', 1000)],
                    output: 'create:blaze_cake_base'
                },
                {
                    type: 'cutting',
                    input: 'create:blaze_cake',
                    output: 'create:blaze_cake',
                    processingTime: 200
                },
                {
                    type: 'deploying',
                    input: ['create:blaze_cake', 'botania:maximum_catalyst'],
                    output: 'create:blaze_cake'
                },
                {
                    type: 'filling',
                    input: ['create:blaze_cake', Fluid.of('chemlib:argon_fluid', 1000)],
                    output: 'create:blaze_cake'
                },
                {
                    type: 'pressing',
                    input: 'create:blaze_cake',
                    output: 'create:blaze_cake'
                }
            ],
            id: `${prefix}creative_blaze_cake`
        },
        {
            input: 'avaritia:infinity_helmet',
            outputs: ['advancedgrib:mushroom_helmet'],
            transitionalItem: 'avaritia:infinity_helmet',
            loops: 1,
            sequence: [
                {
                    type: 'deploying',
                    input: ['avaritia:infinity_helmet', Item.of('ad_astra:space_helmet', '{Damage:0}')],
                    output: 'avaritia:infinity_helmet'
                },
                {
                    type: 'deploying',
                    input: ['avaritia:infinity_helmet', Item.of('ad_astra:jet_suit_helmet', '{Damage:0}')],
                    output: 'avaritia:infinity_helmet'
                },
                {
                    type: 'deploying',
                    input: ['avaritia:infinity_helmet', Item.of('botania:terrasteel_helmet', '{Damage:0}')],
                    output: 'avaritia:infinity_helmet'
                },
                {
                    type: 'deploying',
                    input: ['avaritia:infinity_helmet', Item.of('upgradednetherite_ultimate:ultimate_upgraded_netherite_helmet', '{Damage:0}')],
                    output: 'avaritia:infinity_helmet'
                },
                {
                    type: 'deploying',
                    input: ['avaritia:infinity_helmet', 'chemlib:infinity_gribony_ingot'],
                    output: 'avaritia:infinity_helmet'
                }
            ],
            id: `${prefix}mushroom_helmet`
        },
        {
            input: 'avaritia:infinity_chestplate',
            outputs: ['advancedgrib:mushroom_chestplate'],
            transitionalItem: 'avaritia:infinity_chestplate',
            loops: 1,
            sequence: [
                {
                    type: 'deploying',
                    input: ['avaritia:infinity_chestplate', Item.of('ad_astra:space_suit', '{Damage:0}')],
                    output: 'avaritia:infinity_chestplate'
                },
                {
                    type: 'deploying',
                    input: ['avaritia:infinity_chestplate', Item.of('ad_astra:jet_suit', '{Damage:0}')],
                    output: 'avaritia:infinity_chestplate'
                },
                {
                    type: 'deploying',
                    input: ['avaritia:infinity_chestplate', Item.of('botania:terrasteel_chestplate', '{Damage:0}')],
                    output: 'avaritia:infinity_chestplate'
                },
                {
                    type: 'deploying',
                    input: ['avaritia:infinity_chestplate', Item.of('upgradednetherite_ultimate:ultimate_upgraded_netherite_chestplate', '{Damage:0}')],
                    output: 'avaritia:infinity_chestplate'
                },
                {
                    type: 'deploying',
                    input: ['avaritia:infinity_chestplate', 'chemlib:infinity_gribony_ingot'],
                    output: 'avaritia:infinity_chestplate'
                }
            ],
            id: `${prefix}mushroom_chestplate`
        },
        {
            input: 'avaritia:infinity_pants',
            outputs: ['advancedgrib:mushroom_leggings'],
            transitionalItem: 'avaritia:infinity_pants',
            loops: 1,
            sequence: [
                {
                    type: 'deploying',
                    input: ['avaritia:infinity_pants', Item.of('ad_astra:space_pants', '{Damage:0}')],
                    output: 'avaritia:infinity_pants'
                },
                {
                    type: 'deploying',
                    input: ['avaritia:infinity_pants', Item.of('ad_astra:jet_suit_pants', '{Damage:0}')],
                    output: 'avaritia:infinity_pants'
                },
                {
                    type: 'deploying',
                    input: ['avaritia:infinity_pants', Item.of('botania:terrasteel_leggings', '{Damage:0}')],
                    output: 'avaritia:infinity_pants'
                },
                {
                    type: 'deploying',
                    input: ['avaritia:infinity_pants', Item.of('upgradednetherite_ultimate:ultimate_upgraded_netherite_leggings', '{Damage:0}')],
                    output: 'avaritia:infinity_pants'
                },
                {
                    type: 'deploying',
                    input: ['avaritia:infinity_pants', 'chemlib:infinity_gribony_ingot'],
                    output: 'avaritia:infinity_pants'
                }
            ],
            id: `${prefix}mushroom_leggings`
        },
        {
            input: 'avaritia:infinity_boots',
            outputs: ['advancedgrib:mushroom_boots'],
            transitionalItem: 'avaritia:infinity_boots',
            loops: 1,
            sequence: [
                {
                    type: 'deploying',
                    input: ['avaritia:infinity_boots', Item.of('ad_astra:space_boots', '{Damage:0}')],
                    output: 'avaritia:infinity_boots'
                },
                {
                    type: 'deploying',
                    input: ['avaritia:infinity_boots', Item.of('ad_astra:jet_suit_boots', '{Damage:0}')],
                    output: 'avaritia:infinity_boots'
                },
                {
                    type: 'deploying',
                    input: ['avaritia:infinity_boots', Item.of('botania:terrasteel_boots', '{Damage:0}')],
                    output: 'avaritia:infinity_boots'
                },
                {
                    type: 'deploying',
                    input: ['avaritia:infinity_boots', Item.of('upgradednetherite_ultimate:ultimate_upgraded_netherite_boots', '{Damage:0}')],
                    output: 'avaritia:infinity_boots'
                },
                {
                    type: 'deploying',
                    input: ['avaritia:infinity_boots', 'chemlib:infinity_gribony_ingot'],
                    output: 'avaritia:infinity_boots'
                }
            ],
            id: `${prefix}mushroom_boots`
        }
    ];

    /// Armor Crafting

    let armorTypes = [
        {
            loops: 5,
            armors: [
				{
                    base: 'dreadsteel:dreadsteel_helmet',
                    material: 'avaritia:infinity_ingot',
                    result: 'avaritia:infinity_helmet',
                    id: 'avaritia:infinity_helmet'
                }
            ]
        },
        {
            loops: 8,
            armors: [
				{
                    base: 'dreadsteel:dreadsteel_chestplate',
                    material: 'avaritia:infinity_ingot',
                    result: 'avaritia:infinity_chestplate',
                    id: 'avaritia:infinity_chestplate'
                }
            ]
        },
        {
            loops: 7,
            armors: [
				{
                    base: 'dreadsteel:dreadsteel_leggings',
                    material: 'avaritia:infinity_ingot',
                    result: 'avaritia:infinity_pants',
                    id: 'avaritia:infinity_pants'
                }
            ]
        },
        {
            loops: 4,
            armors: [
				{
                    base: 'dreadsteel:dreadsteel_boots',
                    material: 'avaritia:infinity_ingot',
                    result: 'avaritia:infinity_boots',
                    id: 'avaritia:infinity_boots'
                }
            ]
        }
    ];

    armorTypes.forEach((armorType) => {
        armorType.armors.forEach((armor) => {
            recipes.push({
                input: Ingredient.customNBT(
                    Item.of(armor.base, '{Damage:0}').weakNBT(),
                    (nbt) => !nbt.SequencedAssembly
                ),
                outputs: [armor.result],
                transitionalItem: armor.base,
                loops: armorType.loops,
                sequence: [
                    {
                        type: 'deploying',
                        input: [armor.base, armor.material],
                        output: armor.base
                    },
                    {
                        type: 'pressing',
                        input: armor.base,
                        output: armor.base
                    },
                    {
                        type: 'pressing',
                        input: armor.base,
                        output: armor.base
                    },
                    {
                        type: 'pressing',
                        input: armor.base,
                        output: armor.base
                    }
                ],
                id: armor.id
            });
        });
    });

    recipes.forEach((recipe) => {
        let sequence = [];

        recipe.sequence.forEach((step) => {
            if (step.type == 'deploying') {
                sequence.push(event.recipes.create.deploying(step.output, step.input));
            } else if (step.type == 'cutting') {
                sequence.push(
                    event.recipes.create.cutting(step.output, step.input).processingTime(step.processingTime)
                );
            } else if (step.type == 'filling') {
                sequence.push(event.recipes.create.filling(step.output, step.input));
            } else if (step.type == 'pressing') {
                sequence.push(event.recipes.create.pressing(step.output, step.input));
            }
        });

        event.recipes.create
            .sequenced_assembly(recipe.outputs, recipe.input, sequence)
            .loops(recipe.loops)
            .transitionalItem(recipe.transitionalItem)
            .id(recipe.id);
    });
});