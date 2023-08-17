ServerEvents.recipes(e => {
    const prefix = 'tm4:create/sequencedassembly/';
    let {sequenced_assembly, deploying, pressing} = e.recipes.create
    sequenced_assembly(['ad_astra:reinforced_rocket_fin'], 'ad_astra:rocket_fin', [
        deploying('ad_astra:incomplete_reinforced_rocket_fin',['ad_astra:incomplete_reinforced_rocket_fin','ad_astra:desh_plate']),
        deploying('ad_astra:incomplete_reinforced_rocket_fin',['ad_astra:incomplete_reinforced_rocket_fin','gribtweaks:mechanical_circuit']),
        deploying('ad_astra:incomplete_reinforced_rocket_fin',['ad_astra:incomplete_reinforced_rocket_fin','botania:terrasteel_ingot']),
        deploying('ad_astra:incomplete_reinforced_rocket_fin',['ad_astra:incomplete_reinforced_rocket_fin','forbidden_arcanus:deorum_block']),
        pressing('ad_astra:incomplete_reinforced_rocket_fin', 'ad_astra:incomplete_reinforced_rocket_fin'),
      ]).transitionalItem('ad_astra:incomplete_reinforced_rocket_fin').loops(5).id(`${prefix}reinforced_rocket_fin`)

      sequenced_assembly(['ad_astra:advanced_rocket_fin'], 'ad_astra:reinforced_rocket_fin', [
        deploying('ad_astra:incomplete_advanced_rocket_fin',['ad_astra:incomplete_advanced_rocket_fin','botania:life_essence']),
        deploying('ad_astra:incomplete_advanced_rocket_fin',['ad_astra:incomplete_advanced_rocket_fin','ad_astra:ostrum_block']),
        deploying('ad_astra:incomplete_advanced_rocket_fin',['ad_astra:incomplete_advanced_rocket_fin','botania:infinity_petal']),
        deploying('ad_astra:incomplete_advanced_rocket_fin',['ad_astra:incomplete_advanced_rocket_fin','botania:dragonstone']),
        pressing('ad_astra:incomplete_advanced_rocket_fin', 'ad_astra:incomplete_advanced_rocket_fin'),
      ]).transitionalItem('ad_astra:incomplete_advanced_rocket_fin').loops(5).id(`${prefix}advanced_rocket_fin`)

      sequenced_assembly(['botania:terra_pick'], 'occultism:infused_pickaxe', [
        deploying('botania:incomplete_terra_pick',['botania:incomplete_terra_pick','botania:terrasteel_ingot']),
        deploying('botania:incomplete_terra_pick',['botania:incomplete_terra_pick','gribtweaks:oblivion_ingot']),
        deploying('botania:incomplete_terra_pick',['botania:incomplete_terra_pick','botania:livingwood_twig']),
        deploying('botania:incomplete_terra_pick',['botania:incomplete_terra_pick','botania:mana_tablet']),
        deploying('botania:incomplete_terra_pick',['botania:incomplete_terra_pick','botania:rune_earth']),
      ]).transitionalItem('botania:incomplete_terra_pick').loops(5).id(`${prefix}terra_pick`)

      sequenced_assembly(['botania:terra_axe'], 'naturesaura:sky_axe', [
        deploying('botania:incomplete_terra_axe',['botania:incomplete_terra_axe','botania:terrasteel_ingot']),
        deploying('botania:incomplete_terra_axe',['botania:incomplete_terra_axe','gribtweaks:oblivion_ingot']),
        deploying('botania:incomplete_terra_axe',['botania:incomplete_terra_axe','botania:livingwood_twig']),
        deploying('botania:incomplete_terra_axe',['botania:incomplete_terra_axe','botania:mana_tablet']),
        deploying('botania:incomplete_terra_axe',['botania:incomplete_terra_axe','botania:rune_fire']),
      ]).transitionalItem('botania:incomplete_terra_axe').loops(5).id(`${prefix}terra_axe`)

      sequenced_assembly(['botania:terra_sword'], 'rootsclassic:living_sword', [
        deploying('botania:incomplete_terra_sword',['botania:incomplete_terra_sword','botania:terrasteel_ingot']),
        deploying('botania:incomplete_terra_sword',['botania:incomplete_terra_axe','gribtweaks:oblivion_ingot']),
        deploying('botania:incomplete_terra_sword',['botania:incomplete_terra_sword','botania:livingwood_twig']),
        deploying('botania:incomplete_terra_sword',['botania:incomplete_terra_sword','botania:mana_tablet']),
        deploying('botania:incomplete_terra_sword',['botania:incomplete_terra_sword','botania:rune_mana']),
      ]).transitionalItem('botania:incomplete_terra_sword').loops(5).id(`${prefix}terra_sword`)

      sequenced_assembly([Item.of('easy_villagers:villager', '{villager:{VillagerData:{level:2,profession:"weaponsmith"}}}')], 'easy_villagers:villager', [
        deploying('easy_villagers:villager',['easy_villagers:villager','minecraft:grindstone']),
        deploying('easy_villagers:villager',['easy_villagers:villager','minecraft:iron_sword']),
        deploying('easy_villagers:villager',['easy_villagers:villager','create:brass_hand']),
        deploying('easy_villagers:villager',['easy_villagers:villager','minecraft:iron_ingot']),
      ]).transitionalItem('easy_villagers:villager').loops(3).id(`${prefix}villager_weaponsmith`)

      sequenced_assembly([Item.of('easy_villagers:villager', '{villager:{VillagerData:{level:2,profession:"armorer"}}}')], 'easy_villagers:villager', [
        deploying('easy_villagers:villager',['easy_villagers:villager','minecraft:blast_furnace']),
        deploying('easy_villagers:villager',['easy_villagers:villager','minecraft:iron_chestplate']),
        deploying('easy_villagers:villager',['easy_villagers:villager','minecraft:iron_ingot']),
      ]).transitionalItem('easy_villagers:villager').loops(3).id(`${prefix}villager_armorer`)

      sequenced_assembly([Item.of('easy_villagers:villager', '{villager:{VillagerData:{level:2,profession:"toolsmith"}}}')], 'easy_villagers:villager', [
        deploying('easy_villagers:villager',['easy_villagers:villager','minecraft:smithing_table']),
        deploying('easy_villagers:villager',['easy_villagers:villager','minecraft:iron_pickaxe']),
        deploying('easy_villagers:villager',['easy_villagers:villager','minecraft:iron_axe']),
        deploying('easy_villagers:villager',['easy_villagers:villager','create:brass_hand']),
      ]).transitionalItem('easy_villagers:villager').loops(3).id(`${prefix}villager_toolsmith`)

      sequenced_assembly(['botania:blue_piece_of_specific_rune'], 'arclight:moonlight_ingot', [
        deploying('arclight:moonlight_ingot',['arclight:moonlight_ingot','botania:manasteel_block']),
        deploying('arclight:moonlight_ingot',['arclight:moonlight_ingot','botania:basic_runic_stone']),
        deploying('arclight:moonlight_ingot',['arclight:moonlight_ingot','ad_astra:ice_shard']),
      ]).transitionalItem('arclight:moonlight_ingot').loops(5).id(`${prefix}blue_piece_of_specific_rune`)

      sequenced_assembly(['botania:purple_piece_of_specific_rune'], 'arclight:moonlight_ingot', [
        deploying('arclight:moonlight_ingot',['arclight:moonlight_ingot','botania:elementium_block']),
        deploying('arclight:moonlight_ingot',['arclight:moonlight_ingot','occultism:spirit_attuned_gem']),
        deploying('arclight:moonlight_ingot',['arclight:moonlight_ingot','ad_astra:calorite_plate']),
      ]).transitionalItem('arclight:moonlight_ingot').loops(5).id(`${prefix}purple_piece_of_specific_rune`)
})

