StartupEvents.registry('block', event => {
    // Gribony
    event.create('chemlib:gribony_block')
    .material('metal')
    .hardness(50)
    .displayName('§4§lБлок Грибония') 
    .tagBlock('minecraft:mineable/pickaxe') 
    .tagBlock('minecraft:needs_diamond_tool')
    .tagBlock('minecraft:beacon_base_blocks')
    .tagBlock('forge:storage_blocks')
    .requiresTool(true)
    .lightLevel(0.6)
    .item(itemBuilder => {
        itemBuilder
            .group('chemlib.metals')
            .tooltip('§bGb (21682)')
            .tooltip('§7Переходные Металлы')
    })

    event.create('chemlib:unstable_gribony_block')
    .material('metal')
    .hardness(10)
    .displayName('§e§lБлок Нестабильного Грибония') 
    .tagBlock('minecraft:mineable/pickaxe')
    .tagBlock('minecraft:needs_diamond_tool')
    .tagBlock('forge:storage_blocks') 
    .requiresTool(true)
    .item(itemBuilder => {
        itemBuilder
            .group('chemlib.metals')
            .tooltip('§7Безопасное вещество')
    })

    event.create('chemlib:pre_gribony_block')
    .material('metal')
    .hardness(25)
    .displayName('§5§lБлок Пре-Грибония') 
    .tagBlock('minecraft:mineable/pickaxe')
    .tagBlock('minecraft:needs_diamond_tool')
    .tagBlock('forge:storage_blocks') 
    .requiresTool(true)
    .item(itemBuilder => {
        itemBuilder
            .group('chemlib.metals')
            .tooltip('§bPGb (10841)')
            .tooltip('§7Переходные Металлы')
    })

    // stage 5
    event.create('gribtweaks:advanced_casing')
    .material('metal')
    .hardness(10)
    .displayName('Совершенный супер-корпус') 
    .tagBlock('minecraft:mineable/pickaxe')
    .tagBlock('minecraft:needs_iron_tool')
    .requiresTool(true)
    // stage 6
    event.create('ad_astra:protasteel_block')
    .material('metal')
    .hardness(5)
    .displayName('Прота-Стальной блок') 
    .tagBlock('minecraft:mineable/pickaxe')
    .tagBlock('minecraft:needs_iron_tool')
    .tagBlock('forge:storage_blocks') 
    .requiresTool(true)

    event.create('ad_astra:rocket_covering')
    .material('metal')
    .hardness(5)
    .displayName('Обшивка ракеты') 
    .tagBlock('minecraft:mineable/pickaxe')
    .tagBlock('minecraft:needs_iron_tool')
    .requiresTool(true)

    event.create('biggerreactors:reinforced_ludicrite_block')
    .material('metal')
    .hardness(10)
    .displayName('Усиленный Лудикритовый блок') 
    .tagBlock('minecraft:mineable/pickaxe') 
    .tagBlock('minecraft:needs_diamond_tool')
    .tagBlock('forge:storage_blocks')
    .requiresTool(true)

    // other 
    event.create('gribtweaks:triple_compressed_crafting_table')
    .material('wood')
    .hardness(5)
    .displayName('Трижды сжатый верстак') 
    .tagBlock('minecraft:mineable/axe') 
    
    event.create('gribtweaks:quadruple_compressed_crafting_table')
    .material('wood')
    .hardness(5)
    .displayName('Четырежды сжатый верстак') 
    .tagBlock('minecraft:mineable/axe') 

    event.create('gribtweaks:oblivion_block')
    .material('metal')
    .hardness(10)
    .displayName('§aБлок Забвения') 
    .tagBlock('minecraft:mineable/pickaxe') 
    .tagBlock('minecraft:needs_iron_tool')
    .tagBlock('forge:storage_blocks')
    .requiresTool(true)

    event.create('gribtweaks:void_block')
    .material('metal')
    .hardness(10)
    .displayName('Пустотный блок') 
    .tagBlock('minecraft:mineable/pickaxe') 
    .tagBlock('minecraft:needs_iron_tool')
    .tagBlock('forge:storage_blocks')
    .requiresTool(true)

    event.create('gribtweaks:anxiety_block')
    .material('metal')
    .hardness(10)
    .displayName('Блок Тревоги') 
    .tagBlock('minecraft:mineable/pickaxe') 
    .tagBlock('minecraft:needs_iron_tool')
    .tagBlock('forge:storage_blocks')
    .requiresTool(true)

    event.create('gribtweaks:death_block')
    .material('metal')
    .hardness(10)
    .displayName('Блок Смерти') 
    .tagBlock('minecraft:mineable/pickaxe') 
    .tagBlock('minecraft:needs_iron_tool')
    .tagBlock('forge:storage_blocks')
    .requiresTool(true)

    event.create('gribtweaks:admiration_block')
    .material('metal')
    .hardness(10)
    .displayName('Блок Восхищения') 
    .tagBlock('minecraft:mineable/pickaxe') 
    .tagBlock('minecraft:needs_iron_tool')
    .tagBlock('forge:storage_blocks')
    .requiresTool(true)

    event.create('gribtweaks:ametrine_ore')
    .material('stone')
    .hardness(3)
    .displayName('Аметриновая руда') 
    .tagBlock('minecraft:mineable/pickaxe') 
    .tagBlock('minecraft:needs_diamond_tool')
    .tagBlock('forge:ores')
    .requiresTool(true)

    event.create('gribtweaks:ametrine_block')
    .material('metal')
    .hardness(5)
    .displayName('§dАметриновый блок') 
    .tagBlock('minecraft:mineable/pickaxe') 
    .tagBlock('minecraft:needs_iron_tool')
    .requiresTool(true)

    event.create('gribtweaks:ametrine_bricks')
    .material('metal')
    .hardness(5)
    .displayName('§dАметриновые кирпичи') 
    .tagBlock('minecraft:mineable/pickaxe') 
    .tagBlock('minecraft:needs_iron_tool')
    .tagBlock('forge:storage_blocks')
    .requiresTool(true)

    event.create('gribtweaks:polished_ametrine_block')
    .material('metal')
    .hardness(5)
    .displayName('§dПолированный аметриновый блок') 
    .tagBlock('minecraft:mineable/pickaxe') 
    .tagBlock('minecraft:needs_iron_tool')
    .requiresTool(true)

    event.create('gribtweaks:elemental_fragments_block')
    .material('rock')
    .hardness(0.5)
    .displayName('§bБлок элементальных фрагментов') 

    // end game
    event.create('gribtweaks:ultimate_block')
    .material('metal')
    .hardness(50)
    .displayName('§bМаксимальный блок') 
    .tagBlock('minecraft:mineable/pickaxe') 
    .tagBlock('minecraft:needs_iron_tool')
    .tagBlock('minecraft:beacon_base_blocks')
    .tagBlock('forge:storage_blocks')
    .requiresTool(true)
    .lightLevel(0.6)
    .item(itemBuilder => {
        itemBuilder
            .tooltip('§7Поражает то, что вы можете поднять его')
    })

    event.create('gribtweaks:true_infinity_block')
    .material('metal')
    .hardness(25)
    .displayName('§cИстинный блок Бесконечности') 
    .tagBlock('minecraft:mineable/pickaxe') 
    .tagBlock('minecraft:needs_iron_tool')
    .tagBlock('forge:storage_blocks')
    .requiresTool(true)

    event.create('gribtweaks:compost')
    .material('metal')
    .hardness(5)
    .displayName('test') 
})