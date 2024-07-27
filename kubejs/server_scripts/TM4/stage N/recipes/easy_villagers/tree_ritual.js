ServerEvents.recipes(e => {
    const prefix = 'gribtweaks:easy_villagers/tree_ritual/'
    const recipes = [
        {
            ingredients: [
                'minecraft:composter', 
                'minecraft:bone_meal', 
                'minecraft:bone_meal', 
                'minecraft:wooden_hoe', 
                'minecraft:wheat', 
                'minecraft:water_bucket',
                'easy_villagers:villager'
            ],
            sapling: 'minecraft:oak_sapling',
            output: Item.of('easy_villagers:villager', '{villager:{VillagerData:{level:2,profession:"farmer"}}}'),
            time: 200,
            id: `${prefix}villager_farmer`
        },
        {
            ingredients: [
                'minecraft:loom', 
                '#minecraft:wool', 
                '#minecraft:wool', 
                '#minecraft:beds', 
                '#minecraft:banners', 
                'easy_villagers:villager',
                'minecraft:string',
                'minecraft:string'
            ],
            sapling: 'minecraft:oak_sapling',
            output: Item.of('easy_villagers:villager', '{villager:{VillagerData:{level:2,profession:"shepherd"}}}'),
            time: 200,
            id: `${prefix}villager_shepherd`
        },
        {
            ingredients: [
                '#forge:bookshelves', 
                '#forge:bookshelves', 
                'minecraft:enchanted_book', 
                'minecraft:lectern', 
                'minecraft:feather', 
                'minecraft:paper',
                'easy_villagers:villager'
            ],
            sapling: 'minecraft:oak_sapling',
            output: Item.of('easy_villagers:villager', '{villager:{VillagerData:{level:2,profession:"librarian"}}}'),
            time: 200,
            id: `${prefix}villager_librarian`
        },
        {
            ingredients: [
                'minecraft:bow', 
                '#minecraft:arrows', 
                '#minecraft:arrows', 
                'minecraft:fletching_table', 
                'minecraft:feather', 
                'minecraft:flint',
                'easy_villagers:villager'
            ],
            sapling: 'minecraft:oak_sapling',
            output: Item.of('easy_villagers:villager', '{villager:{VillagerData:{level:2,profession:"fletcher"}}}'),
            time: 200,
            id: `${prefix}villager_fletcher`
        },
        {
            ingredients: [
                'minecraft:brewing_stand', 
                'minecraft:nether_wart', 
                'minecraft:ender_pearl', 
                '#forge:ingots/brass', 
                'minecraft:splash_potion', 
                '#forge:ingots/brass',
                'minecraft:blaze_powder',
                'easy_villagers:villager'
            ],
            sapling: 'minecraft:oak_sapling',
            output: Item.of('easy_villagers:villager', '{villager:{VillagerData:{level:2,profession:"cleric"}}}'),
            time: 200,
            id: `${prefix}villager_cleric`
        },
        {
            ingredients: [
                'minecraft:map', 
                '#forge:chests', 
                'minecraft:compass', 
                'minecraft:paper', 
                'minecraft:paper', 
                'minecraft:cartography_table',
                '#forge:chests',
                'easy_villagers:villager'
            ],
            sapling: 'minecraft:oak_sapling',
            output: Item.of('easy_villagers:villager', '{villager:{VillagerData:{level:2,profession:"cartographer"}}}'),
            time: 200,
            id: `${prefix}villager_cartographer`
        },
        {
            ingredients: [
                '#minecraft:fishes', 
                '#minecraft:fishes', 
                'minecraft:fishing_rod', 
                'minecraft:barrel', 
                'minecraft:leather_boots', 
                'minecraft:lily_pad',
                'easy_villagers:villager'
            ],
            sapling: 'minecraft:oak_sapling',
            output: Item.of('easy_villagers:villager', '{villager:{VillagerData:{level:2,profession:"fisherman"}}}'),
            time: 200,
            id: `${prefix}villager_fisherman`
        },
        {
            ingredients: [
                'minecraft:cauldron', 
                'minecraft:leather', 
                'minecraft:leather', 
                'hexerei:herb_drying_rack', 
                'minecraft:copper_ingot', 
                'easy_villagers:villager',
                'water_bucket'
            ],
            sapling: 'minecraft:oak_sapling',
            output: Item.of('easy_villagers:villager', '{villager:{VillagerData:{level:2,profession:"leatherworker"}}}'),
            time: 200,
            id: `${prefix}villager_leatherworker`
        },
        {
            ingredients: [
                'minecraft:stonecutter', 
                '#forge:stone', 
                '#forge:stone', 
                'ivanchela:primitive_brush', 
                'minecraft:iron_pickaxe', 
                'ivanchela:sand_stone_pieces',
                'easy_villagers:villager'
            ],
            sapling: 'minecraft:oak_sapling',
            output: Item.of('easy_villagers:villager', '{villager:{VillagerData:{level:2,profession:"mason"}}}'),
            time: 200,
            id: `${prefix}villager_mason`
        },
        {
            ingredients: [
                '#productivebees:solitary_overworld_nests', 
                'minecraft:beehive', 
                'productivebees:honey_treat', 
                'minecraft:honey_block', 
                'minecraft:shears',
                'minecraft:campfire',
                'easy_villagers:villager',
                'minecraft:leather_helmet'
            ],
            sapling: 'minecraft:oak_sapling',
            output: Item.of('easy_villagers:villager', '{villager:{VillagerData:{level:2,profession:"productivebees:beekeeper"}}}'),
            time: 200,
            id: `${prefix}villager_beekeeper`
        }
    ]

    recipes.forEach(recipe => {
        e.custom({
            type: "naturesaura:tree_ritual",
            ingredients: Ingredient.of(recipe.ingredients).toJson(),
            sapling: Ingredient.of(recipe.sapling).toJson(),
            output: Item.of(recipe.output).toJson(),
            time: recipe.time
        }).id(recipe.id)
    })
})