// ServerEvents.recipes(e => {
//     const prefix = 'gribtweaks:villagers/soul_transmutation/'
//     const recipes = [
//         {
//             entityInput: 'minecraft:villager',
//             consumesActivator: true,
//             itemInputs: [
//                 {item: 'create:water_wheel'},
//                 {item: 'create:cogwheel'},
//                 {item: 'create:shaft'},
//                 {item: 'create:electron_tube'},
//                 {item: 'create:mechanical_arm'},
//                 {tag: 'create:toolboxes'},
//                 {item: 'create:shaft'},
//                 {item: 'morevillagers:blueprint_table'}
//             ],
//             entityOutput: 'minecraft:villager',
//             outputNbt: {VillagerData: {profession: 'morevillagers:engineer', level: 2},Invulnerable:1},
//             duration: 120,
//             shouldSummonMob: true,
//             id: `${prefix}engineer`
//         },
//         {
//             entityInput: 'minecraft:villager',
//             consumesActivator: true,
//             itemInputs: [
//                 {item: 'rootsclassic:verdant_sprig'},
//                 {item: 'rootsclassic:verdant_sprig'},
//                 {item: 'toughasnails:purified_water_bottle'},
//                 {item: 'morevillagers:oceanography_table'},
//                 {item: 'minecraft:water_bucket'},
//                 {item: 'minecraft:water_bucket'},
//                 {item: 'create:diving_helmet'},
//                 {item: 'create:diving_boots'}
//             ],
//             entityOutput: 'minecraft:villager',
//             outputNbt: {VillagerData: {profession: 'morevillagers:oceanographer', level: 2},Invulnerable:1},
//             duration: 120,
//             shouldSummonMob: true,
//             id: `${prefix}oceanographer`
//         },
//         {
//             entityInput: 'minecraft:villager',
//             consumesActivator: true,
//             itemInputs: [
//                 {item: 'minecraft:netherite_scrap'},
//                 {item: 'minecraft:netherite_scrap'},
//                 {item: 'minecraft:netherrack'},
//                 {item: 'minecraft:blaze_rod'},
//                 {item: 'morevillagers:decayed_workbench'},
//                 {item: 'minecraft:netherrack'},
//                 {item: 'create:blaze_burner'},
//                 {item: 'minecraft:wither_skeleton_skull'}
//             ],
//             entityOutput: 'minecraft:villager',
//             outputNbt: {VillagerData: {profession: 'morevillagers:netherian', level: 2},Invulnerable:1},
//             duration: 120,
//             shouldSummonMob: true,
//             id: `${prefix}netherian`
//         },
//         {
//             entityInput: 'minecraft:villager',
//             consumesActivator: true,
//             itemInputs: [
//                 {item: 'rootsclassic:old_root'},
//                 {tag: 'minecraft:logs'},
//                 {tag: 'minecraft:logs'},
//                 {item: 'naturesaura:ancient_sapling'},
//                 {tag: 'rootsclassic:barks'},
//                 {item: 'morevillagers:woodworking_table'},
//                 {item: 'rootsclassic:old_root'},
//                 {item: 'rootsclassic:wildwood_plate'}
//             ],
//             entityOutput: 'minecraft:villager',
//             outputNbt: {VillagerData: {profession: 'morevillagers:woodworker', level: 2},Invulnerable:1},
//             duration: 120,
//             shouldSummonMob: true,
//             id: `${prefix}woodworker`
//         },
//         {
//             entityInput: 'minecraft:villager',
//             consumesActivator: true,
//             itemInputs: [
//                 {item: 'minecraft:ender_pearl'},
//                 {item: 'minecraft:end_stone'},
//                 {item: 'minecraft:end_stone'},
//                 {item: 'minecraft:purpur_block'},
//                 {item: 'morevillagers:purpur_altar'},
//                 {item: 'minecraft:ender_pearl'},
//                 {item: 'minecraft:shulker_shell'},
//                 {item: 'minecraft:end_rod'}
//             ],
//             entityOutput: 'minecraft:villager',
//             outputNbt: {VillagerData: {profession: 'morevillagers:enderian', level: 2},Invulnerable:1},
//             duration: 120,
//             shouldSummonMob: true,
//             id: `${prefix}enderian`
//         },
//         {
//             entityInput: 'minecraft:villager',
//             consumesActivator: true,
//             itemInputs: [
//                 {tag: 'minecraft:flowers'},
//                 {tag: 'minecraft:flowers'},
//                 {item: 'morevillagers:gardening_table'},
//                 {item: 'minecraft:beehive'},
//                 {tag: 'minecraft:flowers'},
//                 {item: 'minecraft:bone_meal'},
//                 {item: 'minecraft:bone_meal'},
//                 {item: 'minecraft:sweet_berries'}
//             ],
//             entityOutput: 'minecraft:villager',
//             outputNbt: {VillagerData: {profession: 'morevillagers:florist', level: 2},Invulnerable:1},
//             duration: 120,
//             shouldSummonMob: true,
//             id: `${prefix}florist`
//         },
//         {
//             entityInput: 'minecraft:villager',
//             consumesActivator: true,
//             itemInputs: [
//                 {item: 'minecraft:bow'},
//                 {item: 'minecraft:stone_sword'},
//                 {item: 'minecraft:spider_eye'},
//                 {item: 'minecraft:bone'},
//                 {item: 'minecraft:rotten_flesh'},
//                 {item: 'minecraft:golden_apple'},
//                 {item: 'minecraft:carved_pumpkin'},
//                 {item: 'morevillagers:hunting_post'}
//             ],
//             entityOutput: 'minecraft:villager',
//             outputNbt: {VillagerData: {profession: 'morevillagers:hunter', level: 2},Invulnerable:1},
//             duration: 120,
//             shouldSummonMob: true,
//             id: `${prefix}hunter`
//         },
//         {
//             entityInput: 'minecraft:villager',
//             consumesActivator: true,
//             itemInputs: [
//                 {item: 'minecraft:raw_iron_block'},
//                 {item: 'minecraft:diamond_pickaxe'},
//                 {item: 'create:mechanical_drill'},
//                 {item: 'minecraft:deepslate'},
//                 {item: 'minecraft:deepslate'},
//                 {item: 'create:mechanical_drill'},
//                 {item: 'minecraft:anvil'},
//                 {item: 'morevillagers:mining_bench'}
//             ],
//             entityOutput: 'minecraft:villager',
//             outputNbt: {VillagerData: {profession: 'morevillagers:miner', level: 2},Invulnerable:1},
//             duration: 120,
//             shouldSummonMob: true,
//             id: `${prefix}miner`
//         }
//     ]

//     recipes.forEach(recipe => {
//         e.custom({
//             type: 'spirit:soul_transmutation',
//             entityInput: recipe.entityInput,
//             consumesActivator: recipe.consumesActivator,
//             itemInputs: recipe.itemInputs,
//             entityOutput: recipe.entityOutput,
//             outputNbt: recipe.outputNbt,
//             duration: recipe.duration,
//             shouldSummonMob: recipe.shouldSummonMob,
//             conditions: recipe.conditions
//         }).id(recipe.id)
//     })
// })