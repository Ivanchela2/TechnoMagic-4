ServerEvents.recipes(e => {
    const prefix = 'gribtweaks:spirit/soul_engulfing/'
    const recipes = [
        {
            input: {ingredient: {item: 'spirit:crude_soul_crystal'},
            multiblock: {
                pattern: [
                    ['DAD', 'A@A', 'DAD'], 
                    ['CBC','B1B','CBC']
                ], 
            keys:{
                A: {block: 'spirit:soul_steel_block'}, 
                B: {block: 'minecraft:diamond_block'}, 
                C: {block: 'minecraft:amethyst_block'}, 
                D: {block: 'spirit:soul_glass'},

                1: {block: '#minecraft:soul_fire_base_blocks'}
            }}},
            duration: 25,
            destroysStructure: true,
            outputItem: 'spirit:soul_crystal',
            id: `${prefix}soul_crystal`
        },
        {
            input: {ingredient: {item: 'minecraft:tinted_glass'},
            multiblock: {
                pattern: [
                    ['A A', ' @ ', 'A A'], 
                    ['ABA','B1B','ABA']
                ], 
            keys:{
                A: {block: 'minecraft:glass'}, 
                B: {block: 'minecraft:lapis_block'}, 

                1: {block: '#minecraft:soul_fire_base_blocks'}
            }}},
            duration: 0,
            destroysStructure: false,
            outputItem: 'spirit:soul_glass',
            id: `${prefix}soul_glass`
        },
        {
            input: {ingredient: {item: 'minecraft:deepslate'},
            multiblock: {
                pattern: [
                    ['   ', ' @ ', '   '], 
                    ['ABA','B1B','ABA']
                ], 
            keys:{
                A: {block: 'minecraft:gold_block'}, 
                B: {block: 'minecraft:deepslate_tiles'}, 

                1: {block: '#minecraft:soul_fire_base_blocks'}
            }}},
            duration: 0,
            destroysStructure: false,
            outputItem: 'spirit:soul_slate',
            id: `${prefix}soul_slate`
        },
        {
            input: {ingredient: {item: 'spirit:soul_powder'},
            multiblock: {
                pattern: [
                    [' B ', 'B@B', ' B '], 
                    ['CAC','A1A','CAC']
                ], 
            keys:{
                A: {block: '#forge:storage_blocks/quartz'}, 
                B: {block: 'minecraft:copper_block'}, 
                C: {block: 'minecraft:glowstone'}, 

                1: {block: '#minecraft:soul_fire_base_blocks'}
            }}},
            duration: 15,
            destroysStructure: true,
            outputItem: 'spirit:soul_crystal_shard',
            id: `${prefix}soul_crystal_shard`
        },
        {
            input: {ingredient: {item: 'minecraft:glowstone_dust'},
            multiblock: {
                pattern: [
                    ['   ', ' @ ', '   '], 
                    ['BAB','A1A','BAB']
                ], 
            keys:{
                A: {block: 'minecraft:redstone_block'}, 
                B: {block: 'create:andesite_alloy_block'},

                1: {block: '#minecraft:soul_fire_base_blocks'}
            }}},
            duration: 0,
            destroysStructure: false,
            outputItem: 'spirit:soul_powder',
            id: `${prefix}soul_powder`
        },
        {
            input: {ingredient: {item: 'spirit:broken_spawner'},
            multiblock: {
                pattern: [
                    ['BDB', 'D@D', 'BDB'], 
                    ['CAC','A1A','CAC']
                ], 
            keys:{
                A: {block: 'spirit:soul_steel_block'}, 
                B: {block: 'reaper:rune_block_dilato'},
                C: {block: 'gribtweaks:witch_ingot_block'},
                D: {block: 'minecraft:diamond_block'},

                1: {block: '#minecraft:soul_fire_base_blocks'}
            }}},
            duration: 0,
            destroysStructure: true,
            outputItem: 'spirit:soul_cage',
            id: `${prefix}soul_cage`
        }
    ]

    recipes.forEach(recipe => {
        e.custom({
            type:"spirit:soul_engulfing",
            input: recipe.input,
            ingredient: recipe.ingredient,
            multiblock: recipe.multiblock,
            pattern: recipe.pattern,
            keys: recipe.keys,
            duration: recipe.duration,
            destroysStructure: recipe.destroysStructure,
            outputItem: recipe.outputItem
        }).id(recipe.id)
    })
})