MoreJSEvents.villagerTrades(e => {
    const complextrades = [
        {
            profession: "morevillagers:oceanographer",
            level: 4,
            input: ['20x emerald', 'minecraft:water_bucket'],
            output: 'sorcerium:water_staff'
        },
        {
            profession: "morevillagers:oceanographer",
            level: 4,
            input: '12x emerald',
            output: 'aquaculture:neptunium_ingot'
        },
        {
            profession: "morevillagers:oceanographer",
            level: 3,
            input: '8x emerald',
            output: 'aquaculture:diamond_fishing_rod'
        },
        // netherian
        {
            profession: "morevillagers:netherian",
            level: 5,
            input: ['12x emerald', '4x minecraft:netherrack'],
            output: '2x netherite_scrap'
        },
        {
            profession: "morevillagers:netherian",
            level: 4,
            input: ['16x create:blaze_cake', 'twilightforest:triple_bow'],
            output: 'sorcerium:fire_staff'
        },
        {
            profession: "morevillagers:netherian",
            level: 3,
            input: ['emerald', '6x minecraft:netherrack'],
            output: '2x nether_wart'
        },
        {
            profession: "morevillagers:netherian",
            level: 5,
            input: ['12x emerald', '8x minecraft:gold_block'],
            output: 'piglinproliferation:piglin_head'
        },
        {
            profession: "morevillagers:netherian",
            level: 5,
            input: ['20x emerald', Item.of('minecraft:potion', '{Potion:"minecraft:long_fire_resistance"}')],
            output: 'enigmaticlegacy:blazing_core'
        },
        {
            profession: "morevillagers:netherian",
            level: 4,
            input: '8x nether_wart',
            output: 'emerald'
        },
        // woodwprker
        {
            profession: "morevillagers:woodworker",
            level: 2,
            input: '2x emerald',
            output: '6x minecraft:oak_log'
        },
        {
            profession: "morevillagers:woodworker",
            level: 2,
            input: '3x emerald',
            output: '2x rootsclassic:old_root'
        },
        {
            profession: "morevillagers:woodworker",
            level: 2,
            input: '2x emerald',
            output: '6x minecraft:acacia_log'
        },
        {
            profession: "morevillagers:woodworker",
            level: 2,
            input: '2x emerald',
            output: '6x minecraft:birch_log'
        },
        {
            profession: "morevillagers:woodworker",
            level: 2,
            input: '2x emerald',
            output: '6x minecraft:dark_oak_log'
        },
        {
            profession: "morevillagers:woodworker",
            level: 2,
            input: '6x emerald',
            output: 'minecraft:jungle_sapling'
        },
        {
            profession: "morevillagers:woodworker",
            level: 2,
            input: '4x emerald',
            output: 'minecraft:oak_sapling'
        },
        {
            profession: "morevillagers:woodworker",
            level: 2,
            input: '16x minecraft:oak_log',
            output: 'minecraft:emerald'
        },
        {
            profession: "morevillagers:woodworker",
            level: 3,
            input: ['8x naturesaura:ancient_log', '2x naturesaura:gold_leaf'],
            output: 'minecraft:emerald'
        },
        {
            profession: "morevillagers:woodworker",
            level: 3,
            input: '3x emerald',
            output: 'naturesaura:gold_leaf'
        },
        {
            profession: "morevillagers:woodworker",
            level: 3,
            input: ['5x emerald', '2x naturesaura:gold_leaf'],
            output: 'naturesaura:ancient_sapling'
        },
        {
            profession: "morevillagers:woodworker",
            level: 4,
            input: ['1x emerald', '1x ftbic:advanced_circuit'],
            output: '12x ftbic:nuke_arrow'
        },
        // enderian
        {
            profession: "morevillagers:enderian",
            level: 5,
            input: ['15x emerald', '2x minecraft:end_rod'],
            output: '2x botania:ender_air_bottle'
        },
        {
            profession: "morevillagers:enderian",
            level: 5,
            input: ['40x emerald', '2x forbidden_arcanus:dragon_scale'],
            output: 'minecraft:dragon_head'
        },
        {
            profession: "morevillagers:enderian",
            level: 4,
            input: '15x emerald',
            output: 'minecraft:shulker_shell'
        },
        {
            profession: "morevillagers:enderian",
            level: 5,
            input: ['32x minecraft:end_stone', '40x minecraft:emerald'],
            output: 'enigmaticlegacy:etherium_ore'
        },
        {
            profession: "morevillagers:enderian",
            level: 5,
            input: ['12x forbidden_arcanus:dark_matter', '10x minecraft:emerald'],
            output: 'enigmaticlegacy:evil_essence'
        },
        // engineer
        {
            profession: "morevillagers:engineer",
            level: 2,
            input: ['2x emerald', '3x create:shaft'],
            output: '6x create:cogwheel'
        },
        {
            profession: "morevillagers:engineer",
            level: 2,
            input: ['2x emerald', 'create:andesite_alloy'],
            output: '8x create:shaft'
        },
        {
            profession: "morevillagers:engineer",
            level: 2,
            input: ['4x emerald', '2x hexerei:dried_sage'],
            output: 'create:belt_connector'
        },
        {
            profession: "morevillagers:engineer",
            level: 3,
            input: ['4x emerald', '2x create:polished_rose_quartz'],
            output: 'create:electron_tube'
        },
        {
            profession: "morevillagers:engineer",
            level: 3,
            input: ['6x emerald', '2x create:brass_casing'],
            output: '2x create:mechanical_crafter'
        },
        {
            profession: "morevillagers:engineer",
            level: 3,
            input: ['4x emerald', '8x create:brass_ingot'],
            output: 'create:goggles'
        },
        {
            profession: "morevillagers:engineer",
            level: 4,
            input: ['2x create:brass_block', '8x create:large_cogwheel'],
            output: 'create:precision_mechanism'
        },
        {
            profession: "morevillagers:engineer",
            level: 4,
            input: ['2x create:precision_mechanism', '4x create:electron_tube'],
            output: 'create:mechanical_arm'
        },
        {
            profession: "morevillagers:engineer",
            level: 4,
            input: ['12x emerald','3x create:precision_mechanism'],
            output: 'create:extendo_grip'
        },
        {
            profession: "morevillagers:engineer",
            level: 5,
            input: ['6x ftbic:lv_cable', '3x create:electron_tube'],
            output: '2x ftbic:electronic_circuit'
        },
        {
            profession: "morevillagers:engineer",
            level: 5,
            input: ['ftbic:electronic_circuit', '3x ftbic:tin_ingot'],
            output: 'ftbic:lv_battery'
        },
        // florist
        {
            profession: "morevillagers:florist",
            level: 3,
            input: '3x emerald',
            output: 'twilightforest:steeleaf_ingot'
        },   
        {
            profession: "morevillagers:florist",
            level: 3,
            input: '2x emerald',
            output: '4x poppy'
        },
        {
            profession: "morevillagers:florist",
            level: 4,
            input: ['4x minecraft:lily_of_the_valley', 'enigmaticlegacy:astral_dust'],
            output: 'botania:white_mystical_flower'
        },
        // // miner
        // {
        //     profession: "morevillagers:miner",
        //     level: 2,
        //     input: '2x emerald',
        //     output: '3x minecraft:raw_iron'
        // },
        // {
        //     profession: "morevillagers:miner",
        //     level: 2,
        //     input: '15x minecraft:raw_iron',
        //     output: '2x emerald'
        // },
        // {
        //     profession: "morevillagers:miner",
        //     level: 2,
        //     input: '20x deepslate',
        //     output: 'emerald'
        // },
        // {
        //     profession: "morevillagers:miner",
        //     level: 3,
        //     input: '8x emerald',
        //     output: 'create:mechanical_drill'
        // },
        // {
        //     profession: "morevillagers:miner",
        //     level: 3,
        //     input: '2x emerald',
        //     output: 'diamond'
        // },
        // {
        //     profession: "morevillagers:miner",
        //     level: 3,
        //     input: '6x emerald',
        //     output: 'iron_pickaxe'
        // },
        // {
        //     profession: "morevillagers:miner",
        //     level: 3,
        //     input: '14x raw_gold',
        //     output: 'emerald'
        // },
        // {
        //     profession: "morevillagers:miner",
        //     level: 4,
        //     input: ['emerald', '2x raw_iron'],
        //     output: '4x create:crushed_raw_iron'
        // },
        // {
        //     profession: "morevillagers:miner",
        //     level: 5,
        //     input: ['8x minecraft:honeycomb_block', 'ftbic:nuclear_reactor_chamber'],
        //     output: 'productivebees:spawn_egg_quarry_bee'
        // },
        // {
        //     profession: "morevillagers:miner",
        //     level: 4,
        //     input: ['20x emerald', 'enigmaticlegacy:earth_heart'],
        //     output: 'enigmaticlegacy:mining_charm'
        // },
        // cleric
        {
            profession: "cleric",
            level: 5,
            input: ['32x forbidden_arcanus:mundabitur_dust', '32x forbidden_arcanus:corrupti_dust'],
            output: 'enigmaticlegacy:astral_dust'
        },
        {
            profession: "cleric",
            level: 5,
            input: ['8x enigmaticlegacy:astral_dust', '2x minecraft:enchanted_golden_apple'],
            output: 'enigmaticlegacy:astral_fruit'
        },
        {
            profession: "cleric",
            level: 4,
            input: ['2x enigmaticlegacy:astral_dust', '4x spirit:soul_steel_block'],
            output: 'enigmaticlegacy:insignia'
        },
        {
            profession: "cleric",
            level: 5,
            input: ['2x emerald', '6x enigmaticlegacy:evil_essence'],
            output: 'enigmaticlegacy:evil_ingot'
        },
        {
            profession: "cleric",
            level: 5,
            input: ['8x botania:manasteel_block', '2x botania:life_essence_block'],
            output: 'appbot:mana_cell_housing'
        },
        {
            profession: "cleric",
            level: 2,
            input: '4x emerald',
            output: 'enigmaticlegacy:iron_ring'
        },
        // hunter
        {
            profession: "morevillagers:hunter",
            level: 4,
            input: '20x emerald',
            output: 'twilightforest:twilight_portal_miniature_structure'
        },
        {
            profession: "morevillagers:hunter",
            level: 5,
            input: '25x emerald',
            output: 'twilightforest:naga_courtyard_miniature_structure'
        },
        {
            profession: "morevillagers:hunter",
            level: 5,
            input: '25x emerald',
            output: 'twilightforest:lich_tower_miniature_structure'
        },
        {
            profession: "morevillagers:hunter",
            level: 3,
            input: '10x emerald',
            output: Item.of('minecraft:player_head', '{SkullOwner:"Ivanchela"}')
        },
        {
            profession: "morevillagers:hunter",
            level: 4,
            input: '12x emerald',
            output: 'spirit:soul_crystal'
        },
    ]
// MoreJSEvents.villagerTrades(e => {
//     const complextrades = [
//         {
//             profession: "morevillagers:oceanographer",
//             level: 4,
//             input: ['20x emerald', 'minecraft:water_bucket'],
//             output: 'sorcerium:water_staff'
//         },
//         {
//             profession: "morevillagers:oceanographer",
//             level: 4,
//             input: '12x emerald',
//             output: 'aquaculture:neptunium_ingot'
//         },
//         {
//             profession: "morevillagers:oceanographer",
//             level: 3,
//             input: '8x emerald',
//             output: 'aquaculture:diamond_fishing_rod'
//         },
//         // netherian
//         {
//             profession: "morevillagers:netherian",
//             level: 5,
//             input: ['12x emerald', '4x minecraft:netherrack'],
//             output: '2x netherite_scrap'
//         },
//         {
//             profession: "morevillagers:netherian",
//             level: 4,
//             input: ['16x create:blaze_cake', 'twilightforest:triple_bow'],
//             output: 'sorcerium:fire_staff'
//         },
//         {
//             profession: "morevillagers:netherian",
//             level: 3,
//             input: ['emerald', '6x minecraft:netherrack'],
//             output: '2x nether_wart'
//         },
//         {
//             profession: "morevillagers:netherian",
//             level: 5,
//             input: ['12x emerald', '8x minecraft:gold_block'],
//             output: 'piglinproliferation:piglin_head'
//         },
//         {
//             profession: "morevillagers:netherian",
//             level: 5,
//             input: ['20x emerald', Item.of('minecraft:potion', '{Potion:"minecraft:long_fire_resistance"}')],
//             output: 'enigmaticlegacy:blazing_core'
//         },
//         {
//             profession: "morevillagers:netherian",
//             level: 4,
//             input: '8x nether_wart',
//             output: 'emerald'
//         },
//         // woodwprker
//         {
//             profession: "morevillagers:woodworker",
//             level: 2,
//             input: '2x emerald',
//             output: '6x minecraft:oak_log'
//         },
//         {
//             profession: "morevillagers:woodworker",
//             level: 2,
//             input: '3x emerald',
//             output: '2x rootsclassic:old_root'
//         },
//         {
//             profession: "morevillagers:woodworker",
//             level: 2,
//             input: '2x emerald',
//             output: '6x minecraft:acacia_log'
//         },
//         {
//             profession: "morevillagers:woodworker",
//             level: 2,
//             input: '2x emerald',
//             output: '6x minecraft:birch_log'
//         },
//         {
//             profession: "morevillagers:woodworker",
//             level: 2,
//             input: '2x emerald',
//             output: '6x minecraft:dark_oak_log'
//         },
//         {
//             profession: "morevillagers:woodworker",
//             level: 2,
//             input: '6x emerald',
//             output: 'minecraft:jungle_sapling'
//         },
//         {
//             profession: "morevillagers:woodworker",
//             level: 2,
//             input: '4x emerald',
//             output: 'minecraft:oak_sapling'
//         },
//         {
//             profession: "morevillagers:woodworker",
//             level: 2,
//             input: '16x minecraft:oak_log',
//             output: 'minecraft:emerald'
//         },
//         {
//             profession: "morevillagers:woodworker",
//             level: 3,
//             input: ['8x naturesaura:ancient_log', '2x naturesaura:gold_leaf'],
//             output: 'minecraft:emerald'
//         },
//         {
//             profession: "morevillagers:woodworker",
//             level: 3,
//             input: '3x emerald',
//             output: 'naturesaura:gold_leaf'
//         },
//         {
//             profession: "morevillagers:woodworker",
//             level: 3,
//             input: ['5x emerald', '2x naturesaura:gold_leaf'],
//             output: 'naturesaura:ancient_sapling'
//         },
//         {
//             profession: "morevillagers:woodworker",
//             level: 4,
//             input: ['1x emerald', '1x ftbic:advanced_circuit'],
//             output: '12x ftbic:nuke_arrow'
//         },
//         // enderian
//         {
//             profession: "morevillagers:enderian",
//             level: 5,
//             input: ['15x emerald', '2x minecraft:end_rod'],
//             output: '2x botania:ender_air_bottle'
//         },
//         {
//             profession: "morevillagers:enderian",
//             level: 5,
//             input: ['40x emerald', '2x forbidden_arcanus:dragon_scale'],
//             output: 'minecraft:dragon_head'
//         },
//         {
//             profession: "morevillagers:enderian",
//             level: 4,
//             input: '15x emerald',
//             output: 'minecraft:shulker_shell'
//         },
//         {
//             profession: "morevillagers:enderian",
//             level: 5,
//             input: ['32x minecraft:end_stone', '40x minecraft:emerald'],
//             output: 'enigmaticlegacy:etherium_ore'
//         },
//         {
//             profession: "morevillagers:enderian",
//             level: 5,
//             input: ['12x forbidden_arcanus:dark_matter', '10x minecraft:emerald'],
//             output: 'enigmaticlegacy:evil_essence'
//         },
//         // engineer
//         {
//             profession: "morevillagers:engineer",
//             level: 2,
//             input: ['2x emerald', '3x create:shaft'],
//             output: '6x create:cogwheel'
//         },
//         {
//             profession: "morevillagers:engineer",
//             level: 2,
//             input: ['2x emerald', 'create:andesite_alloy'],
//             output: '8x create:shaft'
//         },
//         {
//             profession: "morevillagers:engineer",
//             level: 2,
//             input: ['4x emerald', '2x hexerei:dried_sage'],
//             output: 'create:belt_connector'
//         },
//         {
//             profession: "morevillagers:engineer",
//             level: 3,
//             input: ['4x emerald', '2x create:polished_rose_quartz'],
//             output: 'create:electron_tube'
//         },
//         {
//             profession: "morevillagers:engineer",
//             level: 3,
//             input: ['6x emerald', '2x create:brass_casing'],
//             output: '2x create:mechanical_crafter'
//         },
//         {
//             profession: "morevillagers:engineer",
//             level: 3,
//             input: ['4x emerald', '8x create:brass_ingot'],
//             output: 'create:goggles'
//         },
//         {
//             profession: "morevillagers:engineer",
//             level: 4,
//             input: ['2x create:brass_block', '8x create:large_cogwheel'],
//             output: 'create:precision_mechanism'
//         },
//         {
//             profession: "morevillagers:engineer",
//             level: 4,
//             input: ['2x create:precision_mechanism', '4x create:electron_tube'],
//             output: 'create:mechanical_arm'
//         },
//         {
//             profession: "morevillagers:engineer",
//             level: 4,
//             input: ['12x emerald','3x create:precision_mechanism'],
//             output: 'create:extendo_grip'
//         },
//         {
//             profession: "morevillagers:engineer",
//             level: 5,
//             input: ['6x ftbic:lv_cable', '3x create:electron_tube'],
//             output: '2x ftbic:electronic_circuit'
//         },
//         {
//             profession: "morevillagers:engineer",
//             level: 5,
//             input: ['ftbic:electronic_circuit', '3x ftbic:tin_ingot'],
//             output: 'ftbic:lv_battery'
//         },
//         // florist
//         {
//             profession: "morevillagers:florist",
//             level: 3,
//             input: '3x emerald',
//             output: 'twilightforest:steeleaf_ingot'
//         },   
//         {
//             profession: "morevillagers:florist",
//             level: 3,
//             input: '2x emerald',
//             output: '4x poppy'
//         },
//         {
//             profession: "morevillagers:florist",
//             level: 4,
//             input: ['4x minecraft:lily_of_the_valley', 'enigmaticlegacy:astral_dust'],
//             output: 'botania:white_mystical_flower'
//         },
//         // // miner
//         // {
//         //     profession: "morevillagers:miner",
//         //     level: 2,
//         //     input: '2x emerald',
//         //     output: '3x minecraft:raw_iron'
//         // },
//         // {
//         //     profession: "morevillagers:miner",
//         //     level: 2,
//         //     input: '15x minecraft:raw_iron',
//         //     output: '2x emerald'
//         // },
//         // {
//         //     profession: "morevillagers:miner",
//         //     level: 2,
//         //     input: '20x deepslate',
//         //     output: 'emerald'
//         // },
//         // {
//         //     profession: "morevillagers:miner",
//         //     level: 3,
//         //     input: '8x emerald',
//         //     output: 'create:mechanical_drill'
//         // },
//         // {
//         //     profession: "morevillagers:miner",
//         //     level: 3,
//         //     input: '2x emerald',
//         //     output: 'diamond'
//         // },
//         // {
//         //     profession: "morevillagers:miner",
//         //     level: 3,
//         //     input: '6x emerald',
//         //     output: 'iron_pickaxe'
//         // },
//         // {
//         //     profession: "morevillagers:miner",
//         //     level: 3,
//         //     input: '14x raw_gold',
//         //     output: 'emerald'
//         // },
//         // {
//         //     profession: "morevillagers:miner",
//         //     level: 4,
//         //     input: ['emerald', '2x raw_iron'],
//         //     output: '4x create:crushed_raw_iron'
//         // },
//         // {
//         //     profession: "morevillagers:miner",
//         //     level: 5,
//         //     input: ['8x minecraft:honeycomb_block', 'ftbic:nuclear_reactor_chamber'],
//         //     output: 'productivebees:spawn_egg_quarry_bee'
//         // },
//         // {
//         //     profession: "morevillagers:miner",
//         //     level: 4,
//         //     input: ['20x emerald', 'enigmaticlegacy:earth_heart'],
//         //     output: 'enigmaticlegacy:mining_charm'
//         // },
//         // cleric
//         {
//             profession: "cleric",
//             level: 5,
//             input: ['32x forbidden_arcanus:mundabitur_dust', '32x forbidden_arcanus:corrupti_dust'],
//             output: 'enigmaticlegacy:astral_dust'
//         },
//         {
//             profession: "cleric",
//             level: 5,
//             input: ['8x enigmaticlegacy:astral_dust', '2x minecraft:enchanted_golden_apple'],
//             output: 'enigmaticlegacy:astral_fruit'
//         },
//         {
//             profession: "cleric",
//             level: 4,
//             input: ['2x enigmaticlegacy:astral_dust', '4x spirit:soul_steel_block'],
//             output: 'enigmaticlegacy:insignia'
//         },
//         {
//             profession: "cleric",
//             level: 5,
//             input: ['2x emerald', '6x enigmaticlegacy:evil_essence'],
//             output: 'enigmaticlegacy:evil_ingot'
//         },
//         {
//             profession: "cleric",
//             level: 5,
//             input: ['8x botania:manasteel_block', '2x botania:life_essence_block'],
//             output: 'appbot:mana_cell_housing'
//         },
//         {
//             profession: "cleric",
//             level: 2,
//             input: '4x emerald',
//             output: 'enigmaticlegacy:iron_ring'
//         },
//         // hunter
//         {
//             profession: "morevillagers:hunter",
//             level: 4,
//             input: '20x emerald',
//             output: 'twilightforest:twilight_portal_miniature_structure'
//         },
//         {
//             profession: "morevillagers:hunter",
//             level: 5,
//             input: '25x emerald',
//             output: 'twilightforest:naga_courtyard_miniature_structure'
//         },
//         {
//             profession: "morevillagers:hunter",
//             level: 5,
//             input: '25x emerald',
//             output: 'twilightforest:lich_tower_miniature_structure'
//         },
//         {
//             profession: "morevillagers:hunter",
//             level: 3,
//             input: '10x emerald',
//             output: Item.of('minecraft:player_head', '{SkullOwner:"Ivanchela"}')
//         },
//         {
//             profession: "morevillagers:hunter",
//             level: 4,
//             input: '12x emerald',
//             output: 'spirit:soul_crystal'
//         },
//     ]
})

//     complextrades.forEach(trade => {
//         e.addTrade(trade.profession, trade.level, [trade.input], trade.output)
//     })
// })