ServerEvents.recipes((event) => {
    const prefix = 'tm4:create/sequenced_assembly/';
    const recipes = [
        {
            input: 'productivebees:upgrade_base',
            outputs: ['productivebees:upgrade_time'],
            transitionalItem: 'productivebees:upgrade_base',
            loops: 1,
            sequence: [
                {
                    type: 'deploying',
                    input: ['productivebees:upgrade_base', 'gribtweaks:energium_dust'],
                    output: 'productivebees:upgrade_base'
                },
                {
                    type: 'deploying',
                    input: ['productivebees:upgrade_base', 'create:precision_mechanism'],
                    output: 'productivebees:upgrade_base'
                },
                {
                    type: 'deploying',
                    input: ['productivebees:upgrade_base', 'create:propeller'],
                    output: 'productivebees:upgrade_base'
                },
                {
                    type: 'deploying',
                    input: ['productivebees:upgrade_base', 'spirit:soul_steel_ingot'],
                    output: 'productivebees:upgrade_base'
                },
                {
                    type: 'deploying',
                    input: ['productivebees:upgrade_base', 'gribtweaks:oblivion_powder'],
                    output: 'productivebees:upgrade_base'
                },
                {
                    type: 'deploying',
                    input: ['productivebees:upgrade_base', 'ftbic:overclocker_upgrade'],
                    output: 'productivebees:upgrade_base'
                },
                {
                    type: 'deploying',
                    input: ['productivebees:upgrade_base', 'gribtweaks:super_alloy'],
                    output: 'productivebees:upgrade_base'
                },
                {
                    type: 'deploying',
                    input: ['productivebees:upgrade_base', 'gribtweaks:spectral_circuit'],
                    output: 'productivebees:upgrade_base'
                }
            ],
            id: `${prefix}upgrade_time`
        },
        {
            input: 'productivebees:upgrade_base',
            outputs: ['productivebees:upgrade_anti_teleport'],
            transitionalItem: 'productivebees:upgrade_base',
            loops: 1,
            sequence: [
                {
                    type: 'deploying',
                    input: ['productivebees:upgrade_base', 'minecraft:ender_pearl'],
                    output: 'productivebees:upgrade_base'
                },
                {
                    type: 'deploying',
                    input: ['productivebees:upgrade_base', { type: 'forge:nbt', item: "productivebees:configurable_comb", count: 1, nbt:"{EntityTag:{type:\"productivebees:diamond\"}}"}],
                    output: 'productivebees:upgrade_base'
                },
                {
                    type: 'deploying',
                    input: ['productivebees:upgrade_base', 'minecraft:ender_pearl'],
                    output: 'productivebees:upgrade_base'
                },
                {
                    type: 'deploying',
                    input: ['productivebees:upgrade_base', { type: 'forge:nbt', item: "productivebees:configurable_comb", count: 1, nbt:"{EntityTag:{type:\"productivebees:diamond\"}}"}],
                    output: 'productivebees:upgrade_base'
                },
                {
                    type: 'deploying',
                    input: ['productivebees:upgrade_base', 'gribtweaks:oblivion_powder'],
                    output: 'productivebees:upgrade_base'
                },
                {
                    type: 'deploying',
                    input: ['productivebees:upgrade_base', 'ftbic:overclocker_upgrade'],
                    output: 'productivebees:upgrade_base'
                },
                {
                    type: 'deploying',
                    input: ['productivebees:upgrade_base', 'gribtweaks:super_alloy'],
                    output: 'productivebees:upgrade_base'
                },
                {
                    type: 'deploying',
                    input: ['productivebees:upgrade_base', 'gribtweaks:spectral_circuit'],
                    output: 'productivebees:upgrade_base'
                }
            ],
            id: `${prefix}upgrade_anti_teleport`
        },
        {
            input: 'productivebees:upgrade_base',
            outputs: ['productivebees:upgrade_bee_sampler'],
            transitionalItem: 'productivebees:upgrade_base',
            loops: 1,
            sequence: [
                {
                    type: 'deploying',
                    input: ['productivebees:upgrade_base', { type: 'forge:nbt', item: "productivebees:configurable_comb", count: 1, nbt:"{EntityTag:{type:\"productivebees:diamond\"}}"}],
                    output: 'productivebees:upgrade_base'
                },
                {
                    type: 'deploying',
                    input: ['productivebees:upgrade_base', 'minecraft:honey_bottle'],
                    output: 'productivebees:upgrade_base'
                },
                {
                    type: 'deploying',
                    input: ['productivebees:upgrade_base', 'upgradednetherite:corrupt_upgraded_netherite_sword'],
                    output: 'productivebees:upgrade_base'
                },
                {
                    type: 'deploying',
                    input: ['productivebees:upgrade_base', 'gribtweaks:mechanical_circuit'],
                    output: 'productivebees:upgrade_base'
                },
                {
                    type: 'deploying',
                    input: ['productivebees:upgrade_base', 'gribtweaks:oblivion_powder'],
                    output: 'productivebees:upgrade_base'
                },
                {
                    type: 'deploying',
                    input: ['productivebees:upgrade_base', 'ftbic:overclocker_upgrade'],
                    output: 'productivebees:upgrade_base'
                },
                {
                    type: 'deploying',
                    input: ['productivebees:upgrade_base', 'gribtweaks:super_alloy'],
                    output: 'productivebees:upgrade_base'
                },
                {
                    type: 'deploying',
                    input: ['productivebees:upgrade_base', 'gribtweaks:spectral_circuit'],
                    output: 'productivebees:upgrade_base'
                }
            ],
            id: `${prefix}upgrade_bee_sampler`
        },
        {
            input: 'productivebees:upgrade_base',
            outputs: ['productivebees:upgrade_breeding'],
            transitionalItem: 'productivebees:upgrade_base',
            loops: 1,
            sequence: [
                {
                    type: 'deploying',
                    input: ['productivebees:upgrade_base', { type: 'forge:nbt', item: "productivebees:configurable_comb", count: 1, nbt:"{EntityTag:{type:\"productivebees:diamond\"}}"}],
                    output: 'productivebees:upgrade_base'
                },
                {
                    type: 'deploying',
                    input: ['productivebees:upgrade_base', '#minecraft:flowers'],
                    output: 'productivebees:upgrade_base'
                },
                {
                    type: 'deploying',
                    input: ['productivebees:upgrade_base', 'gribtweaks:astral_ingot'],
                    output: 'productivebees:upgrade_base'
                },
                {
                    type: 'deploying',
                    input: ['productivebees:upgrade_base', 'productivebees:draconic_chunk'],
                    output: 'productivebees:upgrade_base'
                },
                {
                    type: 'deploying',
                    input: ['productivebees:upgrade_base', 'gribtweaks:oblivion_powder'],
                    output: 'productivebees:upgrade_base'
                },
                {
                    type: 'deploying',
                    input: ['productivebees:upgrade_base', 'ftbic:overclocker_upgrade'],
                    output: 'productivebees:upgrade_base'
                },
                {
                    type: 'deploying',
                    input: ['productivebees:upgrade_base', 'gribtweaks:super_alloy'],
                    output: 'productivebees:upgrade_base'
                },
                {
                    type: 'deploying',
                    input: ['productivebees:upgrade_base', 'gribtweaks:spectral_circuit'],
                    output: 'productivebees:upgrade_base'
                }
            ],
            id: `${prefix}upgrade_breeding`
        },
        {
            input: 'productivebees:upgrade_base',
            outputs: ['productivebees:upgrade_comb_block'],
            transitionalItem: 'productivebees:upgrade_base',
            loops: 1,
            sequence: [
                {
                    type: 'deploying',
                    input: ['productivebees:upgrade_base', { type: 'forge:nbt', item: "productivebees:configurable_comb", count: 1, nbt:"{EntityTag:{type:\"productivebees:diamond\"}}"}],
                    output: 'productivebees:upgrade_base'
                },
                {
                    type: 'deploying',
                    input: ['productivebees:upgrade_base', 'minecraft:item_frame'],
                    output: 'productivebees:upgrade_base'
                },
                {
                    type: 'deploying',
                    input: ['productivebees:upgrade_base', 'productivebees:draconic_chunk'],
                    output: 'productivebees:upgrade_base'
                },
                {
                    type: 'deploying',
                    input: ['productivebees:upgrade_base', 'gribtweaks:hephaestus_ingot'],
                    output: 'productivebees:upgrade_base'
                },
                {
                    type: 'deploying',
                    input: ['productivebees:upgrade_base', 'gribtweaks:oblivion_powder'],
                    output: 'productivebees:upgrade_base'
                },
                {
                    type: 'deploying',
                    input: ['productivebees:upgrade_base', 'ftbic:overclocker_upgrade'],
                    output: 'productivebees:upgrade_base'
                },
                {
                    type: 'deploying',
                    input: ['productivebees:upgrade_base', 'gribtweaks:super_alloy'],
                    output: 'productivebees:upgrade_base'
                },
                {
                    type: 'deploying',
                    input: ['productivebees:upgrade_base', 'gribtweaks:spectral_circuit'],
                    output: 'productivebees:upgrade_base'
                }
            ],
            id: `${prefix}upgrade_comb_block`
        },
        {
            input: 'productivebees:upgrade_base',
            outputs: ['productivebees:upgrade_filter'],
            transitionalItem: 'productivebees:upgrade_base',
            loops: 1,
            sequence: [
                {
                    type: 'deploying',
                    input: ['productivebees:upgrade_base', { type: 'forge:nbt', item: "productivebees:configurable_comb", count: 1, nbt:"{EntityTag:{type:\"productivebees:diamond\"}}"}],
                    output: 'productivebees:upgrade_base'
                },
                {
                    type: 'deploying',
                    input: ['productivebees:upgrade_base', 'gribtweaks:quantum_ingot'],
                    output: 'productivebees:upgrade_base'
                },
                {
                    type: 'deploying',
                    input: ['productivebees:upgrade_base', 'productivebees:draconic_chunk'],
                    output: 'productivebees:upgrade_base'
                },
                {
                    type: 'deploying',
                    input: ['productivebees:upgrade_base', 'minecraft:writable_book'],
                    output: 'productivebees:upgrade_base'
                },
                {
                    type: 'deploying',
                    input: ['productivebees:upgrade_base', 'gribtweaks:oblivion_powder'],
                    output: 'productivebees:upgrade_base'
                },
                {
                    type: 'deploying',
                    input: ['productivebees:upgrade_base', 'ftbic:overclocker_upgrade'],
                    output: 'productivebees:upgrade_base'
                },
                {
                    type: 'deploying',
                    input: ['productivebees:upgrade_base', 'gribtweaks:super_alloy'],
                    output: 'productivebees:upgrade_base'
                },
                {
                    type: 'deploying',
                    input: ['productivebees:upgrade_base', 'gribtweaks:spectral_circuit'],
                    output: 'productivebees:upgrade_base'
                }
            ],
            id: `${prefix}upgrade_filte`
        },
        {
            input: 'productivebees:upgrade_base',
            outputs: ['productivebees:upgrade_productivity'],
            transitionalItem: 'productivebees:upgrade_base',
            loops: 1,
            sequence: [
                {
                    type: 'deploying',
                    input: ['productivebees:upgrade_base', { type: 'forge:nbt', item: "productivebees:configurable_comb", count: 1, nbt:"{EntityTag:{type:\"productivebees:diamond\"}}"}],
                    output: 'productivebees:upgrade_base'
                },
                {
                    type: 'deploying',
                    input: ['productivebees:upgrade_base', 'gribtweaks:quantum_ingot'],
                    output: 'productivebees:upgrade_base'
                },
                {
                    type: 'deploying',
                    input: ['productivebees:upgrade_base', 'productivebees:draconic_chunk'],
                    output: 'productivebees:upgrade_base'
                },
                {
                    type: 'deploying',
                    input: ['productivebees:upgrade_base', 'gribtweaks:super_alloy'],
                    output: 'productivebees:upgrade_base'
                },
                {
                    type: 'deploying',
                    input: ['productivebees:upgrade_base', 'gribtweaks:oblivion_powder'],
                    output: 'productivebees:upgrade_base'
                },
                {
                    type: 'deploying',
                    input: ['productivebees:upgrade_base', 'ftbic:overclocker_upgrade'],
                    output: 'productivebees:upgrade_base'
                },
                {
                    type: 'deploying',
                    input: ['productivebees:upgrade_base', 'gribtweaks:photoniy_ingot'],
                    output: 'productivebees:upgrade_base'
                },
                {
                    type: 'deploying',
                    input: ['productivebees:upgrade_base', 'gribtweaks:photoniy_circuit'],
                    output: 'productivebees:upgrade_base'
                }
            ],
            id: `${prefix}upgrade_productivity`
        },
        {
            input: 'productivebees:upgrade_base',
            outputs: ['productivebees:upgrade_range'],
            transitionalItem: 'productivebees:upgrade_base',
            loops: 1,
            sequence: [
                {
                    type: 'deploying',
                    input: ['productivebees:upgrade_base', { type: 'forge:nbt', item: "productivebees:configurable_comb", count: 1, nbt:"{EntityTag:{type:\"productivebees:diamond\"}}"}],
                    output: 'productivebees:upgrade_base'
                },
                {
                    type: 'deploying',
                    input: ['productivebees:upgrade_base', 'minecraft:iron_block'],
                    output: 'productivebees:upgrade_base'
                },
                {
                    type: 'deploying',
                    input: ['productivebees:upgrade_base', 'gribtweaks:astral_ingot'],
                    output: 'productivebees:upgrade_base'
                },
                {
                    type: 'deploying',
                    input: ['productivebees:upgrade_base', 'gribtweaks:energium_dust'],
                    output: 'productivebees:upgrade_base'
                },
                {
                    type: 'deploying',
                    input: ['productivebees:upgrade_base', 'gribtweaks:oblivion_powder'],
                    output: 'productivebees:upgrade_base'
                },
                {
                    type: 'deploying',
                    input: ['productivebees:upgrade_base', 'ftbic:overclocker_upgrade'],
                    output: 'productivebees:upgrade_base'
                },
                {
                    type: 'deploying',
                    input: ['productivebees:upgrade_base', 'gribtweaks:super_alloy'],
                    output: 'productivebees:upgrade_base'
                },
                {
                    type: 'deploying',
                    input: ['productivebees:upgrade_base', 'gribtweaks:spectral_circuit'],
                    output: 'productivebees:upgrade_base'
                }
            ],
            id: `${prefix}upgrade_range`
        },
        {
            input: 'productivebees:upgrade_base',
            outputs: ['productivebees:upgrade_simulator'],
            transitionalItem: 'productivebees:upgrade_base',
            loops: 1,
            sequence: [
                {
                    type: 'deploying',
                    input: ['productivebees:upgrade_base', { type: 'forge:nbt', item: "productivebees:configurable_comb", count: 1, nbt:"{EntityTag:{type:\"productivebees:diamond\"}}"}],
                    output: 'productivebees:upgrade_base'
                },
                {
                    type: 'deploying',
                    input: ['productivebees:upgrade_base', 'minecraft:blaze_rod'],
                    output: 'productivebees:upgrade_base'
                },
                {
                    type: 'deploying',
                    input: ['productivebees:upgrade_base', 'productivebees:draconic_chunk'],
                    output: 'productivebees:upgrade_base'
                },
                {
                    type: 'deploying',
                    input: ['productivebees:upgrade_base', 'gribtweaks:hephaestus_ingot'],
                    output: 'productivebees:upgrade_base'
                },
                {
                    type: 'deploying',
                    input: ['productivebees:upgrade_base', 'gribtweaks:oblivion_powder'],
                    output: 'productivebees:upgrade_base'
                },
                {
                    type: 'deploying',
                    input: ['productivebees:upgrade_base', 'ftbic:overclocker_upgrade'],
                    output: 'productivebees:upgrade_base'
                },
                {
                    type: 'deploying',
                    input: ['productivebees:upgrade_base', 'gribtweaks:super_alloy'],
                    output: 'productivebees:upgrade_base'
                },
                {
                    type: 'deploying',
                    input: ['productivebees:upgrade_base', 'gribtweaks:spectral_circuit'],
                    output: 'productivebees:upgrade_base'
                }
            ],
            id: `${prefix}upgrade_simulator`
        },
        {
            input: 'productivebees:centrifuge',
            outputs: ['productivebees:powered_centrifuge'],
            transitionalItem: 'productivebees:centrifuge',
            loops: 3,
            sequence: [
                {
                    type: 'deploying',
                    input: ['productivebees:centrifuge', 'gribtweaks:advanced_casing'],
                    output: 'productivebees:centrifuge'
                },
                {
                    type: 'deploying',
                    input: ['productivebees:centrifuge', 'minecraft:redstone_block'],
                    output: 'productivebees:centrifuge'
                },
                {
                    type: 'deploying',
                    input: ['productivebees:centrifuge', 'minecraft:redstone_block'],
                    output: 'productivebees:centrifuge'
                },
                {
                    type: 'deploying',
                    input: ['productivebees:centrifuge', 'ftbic:centrifuge'],
                    output: 'productivebees:centrifuge'
                },
                {
                    type: 'deploying',
                    input: ['productivebees:centrifuge', 'ftbic:centrifuge'],
                    output: 'productivebees:centrifuge'
                },
                {
                    type: 'deploying',
                    input: ['productivebees:centrifuge', 'gribtweaks:spectral_ingot'],
                    output: 'productivebees:centrifuge'
                },
                {
                    type: 'deploying',
                    input: ['productivebees:centrifuge', 'gribtweaks:sculk_circuit'],
                    output: 'productivebees:centrifuge'
                },
                {
                    type: 'deploying',
                    input: ['productivebees:centrifuge', 'gribtweaks:dense_sculk_plate'],
                    output: 'productivebees:centrifuge'
                }
            ],
            id: `${prefix}powered_centrifuge`
        },
        {
            input: 'productivebees:powered_centrifuge',
            outputs: ['productivebees:heated_centrifuge'],
            transitionalItem: 'productivebees:powered_centrifuge',
            loops: 3,
            sequence: [
                {
                    type: 'deploying',
                    input: ['productivebees:powered_centrifuge', 'gribtweaks:advanced_casing'],
                    output: 'productivebees:powered_centrifuge'
                },
                {
                    type: 'deploying',
                    input: ['productivebees:powered_centrifuge', 'productivebees:inactive_dragon_egg'],
                    output: 'productivebees:powered_centrifuge'
                },
                {
                    type: 'deploying',
                    input: ['productivebees:powered_centrifuge', 'gribtweaks:super_alloy'],
                    output: 'productivebees:powered_centrifuge'
                },
                {
                    type: 'deploying',
                    input: ['productivebees:powered_centrifuge', 'ftbic:reactor_heat_vent'],
                    output: 'productivebees:powered_centrifuge'
                },
                {
                    type: 'deploying',
                    input: ['productivebees:powered_centrifuge', 'ftbic:reactor_heat_vent'],
                    output: 'productivebees:powered_centrifuge'
                },
                {
                    type: 'deploying',
                    input: ['productivebees:powered_centrifuge', 'gribtweaks:spectral_ingot'],
                    output: 'productivebees:powered_centrifuge'
                },
                {
                    type: 'deploying',
                    input: ['productivebees:powered_centrifuge', 'gribtweaks:sculk_circuit'],
                    output: 'productivebees:powered_centrifuge'
                },
                {
                    type: 'deploying',
                    input: ['productivebees:powered_centrifuge', 'gribtweaks:dense_sculk_plate'],
                    output: 'productivebees:powered_centrifuge'
                }
            ],
            id: `${prefix}heated_centrifuge`
        },
        {
            input: 'productivebees:centrifuge',
            outputs: ['productivebees:honey_generator'],
            transitionalItem: 'productivebees:centrifuge',
            loops: 3,
            sequence: [
                {
                    type: 'deploying',
                    input: ['productivebees:centrifuge', 'gribtweaks:advanced_casing'],
                    output: 'productivebees:centrifuge'
                },
                {
                    type: 'deploying',
                    input: ['productivebees:centrifuge', 'minecraft:furnace'],
                    output: 'productivebees:centrifuge'
                },
                {
                    type: 'deploying',
                    input: ['productivebees:centrifuge', 'gribtweaks:super_alloy'],
                    output: 'productivebees:centrifuge'
                },
                {
                    type: 'deploying',
                    input: ['productivebees:centrifuge', 'minecraft:furnace'],
                    output: 'productivebees:centrifuge'
                },
                {
                    type: 'deploying',
                    input: ['productivebees:centrifuge', 'gribtweaks:oblivion_powder'],
                    output: 'productivebees:centrifuge'
                },
                {
                    type: 'deploying',
                    input: ['productivebees:centrifuge', 'gribtweaks:spectral_ingot'],
                    output: 'productivebees:centrifuge'
                },
                {
                    type: 'deploying',
                    input: ['productivebees:centrifuge', 'gribtweaks:sculk_circuit'],
                    output: 'productivebees:centrifuge'
                },
                {
                    type: 'deploying',
                    input: ['productivebees:centrifuge', 'gribtweaks:dense_sculk_plate'],
                    output: 'productivebees:centrifuge'
                }
            ],
            id: `${prefix}honey_generator`
        },
        {
            input: 'productivebees:centrifuge',
            outputs: ['productivebees:bottler'],
            transitionalItem: 'productivebees:centrifuge',
            loops: 3,
            sequence: [
                {
                    type: 'deploying',
                    input: ['productivebees:centrifuge', 'gribtweaks:advanced_casing'],
                    output: 'productivebees:centrifuge'
                },
                {
                    type: 'deploying',
                    input: ['productivebees:centrifuge', 'gribtweaks:super_alloy'],
                    output: 'productivebees:centrifuge'
                },
                {
                    type: 'deploying',
                    input: ['productivebees:centrifuge', '#forge:glass'],
                    output: 'productivebees:centrifuge'
                },
                {
                    type: 'deploying',
                    input: ['productivebees:centrifuge', '#forge:glass'],
                    output: 'productivebees:centrifuge'
                },
                {
                    type: 'deploying',
                    input: ['productivebees:centrifuge', 'gribtweaks:oblivion_powder'],
                    output: 'productivebees:centrifuge'
                },
                {
                    type: 'deploying',
                    input: ['productivebees:centrifuge', 'gribtweaks:spectral_ingot'],
                    output: 'productivebees:centrifuge'
                },
                {
                    type: 'deploying',
                    input: ['productivebees:centrifuge', 'gribtweaks:sculk_circuit'],
                    output: 'productivebees:centrifuge'
                },
                {
                    type: 'deploying',
                    input: ['productivebees:centrifuge', 'gribtweaks:dense_sculk_plate'],
                    output: 'productivebees:centrifuge'
                }
            ],
            id: `${prefix}bottler`
        },
        {
            input: 'productivebees:centrifuge',
            outputs: ['productivebees:catcher'],
            transitionalItem: 'productivebees:centrifuge',
            loops: 3,
            sequence: [
                {
                    type: 'deploying',
                    input: ['productivebees:centrifuge', 'gribtweaks:advanced_casing'],
                    output: 'productivebees:centrifuge'
                },
                {
                    type: 'deploying',
                    input: ['productivebees:centrifuge', 'minecraft:redstone_block'],
                    output: 'productivebees:centrifuge'
                },
                {
                    type: 'deploying',
                    input: ['productivebees:centrifuge', 'gribtweaks:super_alloy'],
                    output: 'productivebees:centrifuge'
                },
                {
                    type: 'deploying',
                    input: ['productivebees:centrifuge', 'alloyed:steel_shears'],
                    output: 'productivebees:centrifuge'
                },
                {
                    type: 'deploying',
                    input: ['productivebees:centrifuge', 'gribtweaks:oblivion_powder'],
                    output: 'productivebees:centrifuge'
                },
                {
                    type: 'deploying',
                    input: ['productivebees:centrifuge', 'gribtweaks:spectral_ingot'],
                    output: 'productivebees:centrifuge'
                },
                {
                    type: 'deploying',
                    input: ['productivebees:centrifuge', 'gribtweaks:sculk_circuit'],
                    output: 'productivebees:centrifuge'
                },
                {
                    type: 'deploying',
                    input: ['productivebees:centrifuge', 'gribtweaks:dense_sculk_plate'],
                    output: 'productivebees:centrifuge'
                }
            ],
            id: `${prefix}catcher`
        },
        {
            input: 'productivebees:centrifuge',
            outputs: ['productivebees:incubator'],
            transitionalItem: 'productivebees:centrifuge',
            loops: 3,
            sequence: [
                {
                    type: 'deploying',
                    input: ['productivebees:centrifuge', 'gribtweaks:advanced_casing'],
                    output: 'productivebees:centrifuge'
                },
                {
                    type: 'deploying',
                    input: ['productivebees:centrifuge', 'minecraft:campfire'],
                    output: 'productivebees:centrifuge'
                },
                {
                    type: 'deploying',
                    input: ['productivebees:centrifuge', 'gribtweaks:super_alloy'],
                    output: 'productivebees:centrifuge'
                },
                {
                    type: 'deploying',
                    input: ['productivebees:centrifuge', 'alloyed:steel_shears'],
                    output: 'productivebees:centrifuge'
                },
                {
                    type: 'deploying',
                    input: ['productivebees:centrifuge', 'gribtweaks:oblivion_powder'],
                    output: 'productivebees:centrifuge'
                },
                {
                    type: 'deploying',
                    input: ['productivebees:centrifuge', 'gribtweaks:spectral_ingot'],
                    output: 'productivebees:centrifuge'
                },
                {
                    type: 'deploying',
                    input: ['productivebees:centrifuge', 'gribtweaks:sculk_circuit'],
                    output: 'productivebees:centrifuge'
                },
                {
                    type: 'deploying',
                    input: ['productivebees:centrifuge', 'gribtweaks:dense_sculk_plate'],
                    output: 'productivebees:centrifuge'
                }
            ],
            id: `${prefix}incubator`
        },
        {
            input: 'productivebees:centrifuge',
            outputs: ['productivebees:gene_indexer'],
            transitionalItem: 'productivebees:centrifuge',
            loops: 3,
            sequence: [
                {
                    type: 'deploying',
                    input: ['productivebees:centrifuge', 'gribtweaks:advanced_casing'],
                    output: 'productivebees:centrifuge'
                },
                {
                    type: 'deploying',
                    input: ['productivebees:centrifuge', { type: 'forge:nbt', item: "naturesaura:effect_powder", count: 1, nbt: "{effect:\"naturesaura:plant_boost\"}" }],
                    output: 'productivebees:centrifuge'
                },
                {
                    type: 'deploying',
                    input: ['productivebees:centrifuge', 'gribtweaks:super_alloy'],
                    output: 'productivebees:centrifuge'
                },
                {
                    type: 'deploying',
                    input: ['productivebees:centrifuge', { type: "forge:nbt", item: "productivebees:jar_oak", count: 1 , nbt: "{BlockEntityTag:{ForgeCaps:{},id:\"productivebees:jar\",inv:{Items:[{Count:1b,Slot:0,id:\"productivebees:bee_cage\",tag:{Age:0,AngerTime:0,BlueprintTrackedData:[{Boolean:0b,Id:\"savage_and_ravage:invisible_due_to_mask\"}],CanUpdate:1b,ForcedAge:0,ForgeCaps:{\"scalinghealth:difficulty_affected\":{Blight:0b,Difficulty:8.898894f},\"twilightforest:cap_feather_fan_fall\":{featherFanFalling:0b},\"twilightforest:cap_shield\":{permshields:0,tempshields:0},\"twilightforest:cap_thrown\":{throwCooldown:0,yetiThrown:0b},\"twilightforest:giant_pick_mine\":{giantPickMining:0L}},ForgeData:{\"naturesaura:time_alive\":40},HasNectar:0b,HasStung:0b,Health:11.668543f,HivePos:{X:6,Y:125,Z:12},Invulnerable:0b,PersistenceRequired:0b,ad_astra_giselle_addon:{\"ad_astra_giselle_addon:proof\":{}},entity:\"minecraft:bee\",isProductiveBee:0b,mod:\"Minecraft\",name:\"Пчела\"}}],Size:1}},display:{Lore:['\"(+NBT)\"']}}" }],
                    output: 'productivebees:centrifuge'
                },
                {
                    type: 'deploying',
                    input: ['productivebees:centrifuge', { type: "forge:nbt", item: "productivebees:jar_oak", count: 1 , nbt: "{BlockEntityTag:{ForgeCaps:{},id:\"productivebees:jar\",inv:{Items:[{Count:1b,Slot:0,id:\"productivebees:bee_cage\",tag:{Age:0,AngerTime:0,BlueprintTrackedData:[{Boolean:0b,Id:\"savage_and_ravage:invisible_due_to_mask\"}],CanUpdate:1b,ForcedAge:0,ForgeCaps:{\"scalinghealth:difficulty_affected\":{Blight:0b,Difficulty:8.898894f},\"twilightforest:cap_feather_fan_fall\":{featherFanFalling:0b},\"twilightforest:cap_shield\":{permshields:0,tempshields:0},\"twilightforest:cap_thrown\":{throwCooldown:0,yetiThrown:0b},\"twilightforest:giant_pick_mine\":{giantPickMining:0L}},ForgeData:{\"naturesaura:time_alive\":40},HasNectar:0b,HasStung:0b,Health:11.668543f,HivePos:{X:6,Y:125,Z:12},Invulnerable:0b,PersistenceRequired:0b,ad_astra_giselle_addon:{\"ad_astra_giselle_addon:proof\":{}},entity:\"minecraft:bee\",isProductiveBee:0b,mod:\"Minecraft\",name:\"Пчела\"}}],Size:1}},display:{Lore:['\"(+NBT)\"']}}" }],
                    output: 'productivebees:centrifuge'
                },
                {
                    type: 'deploying',
                    input: ['productivebees:centrifuge', 'gribtweaks:spectral_ingot'],
                    output: 'productivebees:centrifuge'
                },
                {
                    type: 'deploying',
                    input: ['productivebees:centrifuge', 'gribtweaks:sculk_circuit'],
                    output: 'productivebees:centrifuge'
                },
                {
                    type: 'deploying',
                    input: ['productivebees:centrifuge', 'gribtweaks:dense_sculk_plate'],
                    output: 'productivebees:centrifuge'
                }
            ],
            id: `${prefix}gene_indexer`
        },
        {
            input: 'productivebees:centrifuge',
            outputs: ['productivebees:breeding_chamber'],
            transitionalItem: 'productivebees:centrifuge',
            loops: 3,
            sequence: [
                {
                    type: 'deploying',
                    input: ['productivebees:centrifuge', 'gribtweaks:advanced_casing'],
                    output: 'productivebees:centrifuge'
                },
                {
                    type: 'deploying',
                    input: ['productivebees:centrifuge', 'gribtweaks:super_alloy'],
                    output: 'productivebees:centrifuge'
                },
                {
                    type: 'deploying',
                    input: ['productivebees:centrifuge', { type: 'forge:nbt', item: "naturesaura:effect_powder", count: 1, nbt: "{effect:\"naturesaura:plant_boost\"}" }],
                    output: 'productivebees:centrifuge'
                },
                {
                    type: 'deploying',
                    input: ['productivebees:centrifuge', { type: "forge:nbt", item: "productivebees:jar_oak", count: 1 , nbt: "{BlockEntityTag:{ForgeCaps:{},id:\"productivebees:jar\",inv:{Items:[{Count:1b,Slot:0,id:\"productivebees:bee_cage\",tag:{Age:0,AngerTime:0,BlueprintTrackedData:[{Boolean:0b,Id:\"savage_and_ravage:invisible_due_to_mask\"}],CanUpdate:1b,ForcedAge:0,ForgeCaps:{\"scalinghealth:difficulty_affected\":{Blight:0b,Difficulty:8.898894f},\"twilightforest:cap_feather_fan_fall\":{featherFanFalling:0b},\"twilightforest:cap_shield\":{permshields:0,tempshields:0},\"twilightforest:cap_thrown\":{throwCooldown:0,yetiThrown:0b},\"twilightforest:giant_pick_mine\":{giantPickMining:0L}},ForgeData:{\"naturesaura:time_alive\":40},HasNectar:0b,HasStung:0b,Health:11.668543f,HivePos:{X:6,Y:125,Z:12},Invulnerable:0b,PersistenceRequired:0b,ad_astra_giselle_addon:{\"ad_astra_giselle_addon:proof\":{}},entity:\"minecraft:bee\",isProductiveBee:0b,mod:\"Minecraft\",name:\"Пчела\"}}],Size:1}},display:{Lore:['\"(+NBT)\"']}}" }],
                    output: 'productivebees:centrifuge'
                },
                {
                    type: 'deploying',
                    input: ['productivebees:centrifuge', { type: "forge:nbt", item: "productivebees:jar_oak", count: 1 , nbt: "{BlockEntityTag:{ForgeCaps:{},id:\"productivebees:jar\",inv:{Items:[{Count:1b,Slot:0,id:\"productivebees:bee_cage\",tag:{Age:0,AngerTime:0,BlueprintTrackedData:[{Boolean:0b,Id:\"savage_and_ravage:invisible_due_to_mask\"}],CanUpdate:1b,ForcedAge:0,ForgeCaps:{\"scalinghealth:difficulty_affected\":{Blight:0b,Difficulty:8.898894f},\"twilightforest:cap_feather_fan_fall\":{featherFanFalling:0b},\"twilightforest:cap_shield\":{permshields:0,tempshields:0},\"twilightforest:cap_thrown\":{throwCooldown:0,yetiThrown:0b},\"twilightforest:giant_pick_mine\":{giantPickMining:0L}},ForgeData:{\"naturesaura:time_alive\":40},HasNectar:0b,HasStung:0b,Health:11.668543f,HivePos:{X:6,Y:125,Z:12},Invulnerable:0b,PersistenceRequired:0b,ad_astra_giselle_addon:{\"ad_astra_giselle_addon:proof\":{}},entity:\"minecraft:bee\",isProductiveBee:0b,mod:\"Minecraft\",name:\"Пчела\"}}],Size:1}},display:{Lore:['\"(+NBT)\"']}}" }],
                    output: 'productivebees:centrifuge'
                },
                {
                    type: 'deploying',
                    input: ['productivebees:centrifuge', 'gribtweaks:spectral_ingot'],
                    output: 'productivebees:centrifuge'
                },
                {
                    type: 'deploying',
                    input: ['productivebees:centrifuge', 'gribtweaks:sculk_circuit'],
                    output: 'productivebees:centrifuge'
                },
                {
                    type: 'deploying',
                    input: ['productivebees:centrifuge', 'gribtweaks:dense_sculk_plate'],
                    output: 'productivebees:centrifuge'
                }
            ],
            id: `${prefix}breeding_chamber`
        }
    ];
    
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
