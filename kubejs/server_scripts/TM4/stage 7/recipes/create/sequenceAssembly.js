ServerEvents.recipes(e => {
  const prefix = 'tm4:create/sequencedassembly/';
    e.recipes.createSequencedAssembly(['ad_astra:reinforced_rocket_fin'], 'ad_astra:rocket_fin', [
        e.recipes.create.deploying('ad_astra:incomplete_reinforced_rocket_fin',['ad_astra:incomplete_reinforced_rocket_fin','ad_astra:desh_plate']),
        e.recipes.create.deploying('ad_astra:incomplete_reinforced_rocket_fin',['ad_astra:incomplete_reinforced_rocket_fin','gribtweaks:mechanical_circuit']),
        e.recipes.create.deploying('ad_astra:incomplete_reinforced_rocket_fin',['ad_astra:incomplete_reinforced_rocket_fin','botania:terrasteel_ingot']),
        e.recipes.create.deploying('ad_astra:incomplete_reinforced_rocket_fin',['ad_astra:incomplete_reinforced_rocket_fin','forbidden_arcanus:deorum_block']),
        e.recipes.create.pressing('ad_astra:incomplete_reinforced_rocket_fin', 'ad_astra:incomplete_reinforced_rocket_fin'),
      ]).transitionalItem('ad_astra:incomplete_reinforced_rocket_fin').loops(5).id(`${prefix}reinforced_rocket_fin`)

      e.recipes.createSequencedAssembly(['ad_astra:advanced_rocket_fin'], 'ad_astra:reinforced_rocket_fin', [
        e.recipes.create.deploying('ad_astra:incomplete_advanced_rocket_fin',['ad_astra:incomplete_advanced_rocket_fin','botania:life_essence']),
        e.recipes.create.deploying('ad_astra:incomplete_advanced_rocket_fin',['ad_astra:incomplete_advanced_rocket_fin','ad_astra:ostrum_block']),
        e.recipes.create.deploying('ad_astra:incomplete_advanced_rocket_fin',['ad_astra:incomplete_advanced_rocket_fin','botania:infinity_petal']),
        e.recipes.create.deploying('ad_astra:incomplete_advanced_rocket_fin',['ad_astra:incomplete_advanced_rocket_fin','botania:dragonstone']),
        e.recipes.create.pressing('ad_astra:incomplete_advanced_rocket_fin', 'ad_astra:incomplete_advanced_rocket_fin'),
      ]).transitionalItem('ad_astra:incomplete_advanced_rocket_fin').loops(5).id(`${prefix}advanced_rocket_fin`)

      e.recipes.createSequencedAssembly(['botania:terra_pick'], 'occultism:infused_pickaxe', [
        e.recipes.create.deploying('botania:incomplete_terra_pick',['botania:incomplete_terra_pick','botania:terrasteel_ingot']),
        e.recipes.create.deploying('botania:incomplete_terra_pick',['botania:incomplete_terra_pick','gribtweaks:oblivion_ingot']),
        e.recipes.create.deploying('botania:incomplete_terra_pick',['botania:incomplete_terra_pick','botania:livingwood_twig']),
        e.recipes.create.deploying('botania:incomplete_terra_pick',['botania:incomplete_terra_pick','botania:mana_tablet']),
        e.recipes.create.deploying('botania:incomplete_terra_pick',['botania:incomplete_terra_pick','botania:rune_earth']),
      ]).transitionalItem('botania:incomplete_terra_pick').loops(5).id(`${prefix}terra_pick`)

      e.recipes.createSequencedAssembly(['botania:terra_axe'], 'naturesaura:sky_axe', [
        e.recipes.create.deploying('botania:incomplete_terra_axe',['botania:incomplete_terra_axe','botania:terrasteel_ingot']),
        e.recipes.create.deploying('botania:incomplete_terra_axe',['botania:incomplete_terra_axe','gribtweaks:oblivion_ingot']),
        e.recipes.create.deploying('botania:incomplete_terra_axe',['botania:incomplete_terra_axe','botania:livingwood_twig']),
        e.recipes.create.deploying('botania:incomplete_terra_axe',['botania:incomplete_terra_axe','botania:mana_tablet']),
        e.recipes.create.deploying('botania:incomplete_terra_axe',['botania:incomplete_terra_axe','botania:rune_fire']),
      ]).transitionalItem('botania:incomplete_terra_axe').loops(5).id(`${prefix}terra_axe`)

      e.recipes.createSequencedAssembly(['botania:terra_sword'], 'rootsclassic:living_sword', [
        e.recipes.create.deploying('botania:incomplete_terra_sword',['botania:incomplete_terra_sword','botania:terrasteel_ingot']),
        e.recipes.create.deploying('botania:incomplete_terra_sword',['botania:incomplete_terra_axe','gribtweaks:oblivion_ingot']),
        e.recipes.create.deploying('botania:incomplete_terra_sword',['botania:incomplete_terra_sword','botania:livingwood_twig']),
        e.recipes.create.deploying('botania:incomplete_terra_sword',['botania:incomplete_terra_sword','botania:mana_tablet']),
        e.recipes.create.deploying('botania:incomplete_terra_sword',['botania:incomplete_terra_sword','botania:rune_mana']),
      ]).transitionalItem('botania:incomplete_terra_sword').loops(5).id(`${prefix}terra_sword`)

      e.recipes.createSequencedAssembly([Item.of('easy_villagers:villager', '{villager:{VillagerData:{level:2,profession:"weaponsmith"}}}')], 'easy_villagers:villager', [
        e.recipes.create.deploying('easy_villagers:villager',['easy_villagers:villager','minecraft:grindstone']),
        e.recipes.create.deploying('easy_villagers:villager',['easy_villagers:villager','minecraft:iron_sword']),
        e.recipes.create.deploying('easy_villagers:villager',['easy_villagers:villager','create:brass_hand']),
        e.recipes.create.deploying('easy_villagers:villager',['easy_villagers:villager','minecraft:iron_ingot']),
      ]).transitionalItem('easy_villagers:villager').loops(3).id(`${prefix}villager_weaponsmith`)

      e.recipes.createSequencedAssembly([Item.of('easy_villagers:villager', '{villager:{VillagerData:{level:2,profession:"armorer"}}}')], 'easy_villagers:villager', [
        e.recipes.create.deploying('easy_villagers:villager',['easy_villagers:villager','minecraft:blast_furnace']),
        e.recipes.create.deploying('easy_villagers:villager',['easy_villagers:villager','minecraft:iron_chestplate']),
        e.recipes.create.deploying('easy_villagers:villager',['easy_villagers:villager','minecraft:iron_ingot']),
      ]).transitionalItem('easy_villagers:villager').loops(3).id(`${prefix}villager_armorer`)

      e.recipes.createSequencedAssembly([Item.of('easy_villagers:villager', '{villager:{VillagerData:{level:2,profession:"toolsmith"}}}')], 'easy_villagers:villager', [
        e.recipes.create.deploying('easy_villagers:villager',['easy_villagers:villager','minecraft:smithing_table']),
        e.recipes.create.deploying('easy_villagers:villager',['easy_villagers:villager','minecraft:iron_pickaxe']),
        e.recipes.create.deploying('easy_villagers:villager',['easy_villagers:villager','minecraft:iron_axe']),
        e.recipes.create.deploying('easy_villagers:villager',['easy_villagers:villager','create:brass_hand']),
      ]).transitionalItem('easy_villagers:villager').loops(3).id(`${prefix}villager_toolsmith`)

      e.recipes.createSequencedAssembly(['botania:blue_piece_of_specific_rune'], 'arclight:moonlight_ingot', [
        e.recipes.create.deploying('arclight:moonlight_ingot',['arclight:moonlight_ingot','botania:manasteel_block']),
        e.recipes.create.deploying('arclight:moonlight_ingot',['arclight:moonlight_ingot','botania:basic_runic_stone']),
        e.recipes.create.deploying('arclight:moonlight_ingot',['arclight:moonlight_ingot','ad_astra:ice_shard']),
      ]).transitionalItem('arclight:moonlight_ingot').loops(5).id(`${prefix}blue_piece_of_specific_rune`)

      e.recipes.createSequencedAssembly(['botania:purple_piece_of_specific_rune'], 'arclight:moonlight_ingot', [
        e.recipes.create.deploying('arclight:moonlight_ingot',['arclight:moonlight_ingot','botania:elementium_block']),
        e.recipes.create.deploying('arclight:moonlight_ingot',['arclight:moonlight_ingot','occultism:spirit_attuned_gem']),
        e.recipes.create.deploying('arclight:moonlight_ingot',['arclight:moonlight_ingot','ad_astra:calorite_plate']),
      ]).transitionalItem('arclight:moonlight_ingot').loops(5).id(`${prefix}purple_piece_of_specific_rune`)
})

