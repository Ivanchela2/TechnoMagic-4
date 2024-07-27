ServerEvents.recipes(event => {
  const prefix = 'gribtweaks:sequencedassembly/';
      event.recipes.createSequencedAssembly(['gribtweaks:component_ingot'], '#forge:plates/iron', [
        event.recipes.create.deploying('gribtweaks:incomplete_component_ingot',['gribtweaks:incomplete_component_ingot','twilightforest:ironwood_ingot']),
        event.recipes.create.deploying('gribtweaks:incomplete_component_ingot',['gribtweaks:incomplete_component_ingot','biggerreactors:graphite_ingot']),
        event.recipes.create.deploying('gribtweaks:incomplete_component_ingot',['gribtweaks:incomplete_component_ingot','minecraft:black_dye']),
        event.recipes.create.pressing('gribtweaks:incomplete_component_ingot', 'gribtweaks:incomplete_component_ingot'),
      ]).transitionalItem('gribtweaks:incomplete_component_ingot').loops(5).id(`${prefix}component_ingot`)

      event.recipes.createSequencedAssembly(['gribtweaks:oak_clock'], 'minecraft:clock', [
        event.recipes.create.deploying('minecraft:clock',['minecraft:clock','minecraft:oak_log']),
        event.recipes.create.deploying('minecraft:clock',['minecraft:clock','create:precision_mechanism']),
        event.recipes.create.deploying('minecraft:clock',['minecraft:clock','minecraft:oak_log']),
        event.recipes.create.deploying('minecraft:clock',['minecraft:clock','minecraft:redstone_block']),
        event.recipes.create.deploying('minecraft:clock',['minecraft:clock','minecraft:oak_log']),
        event.recipes.create.pressing('minecraft:clock', 'minecraft:clock'),
      ]).transitionalItem('minecraft:clock').loops(1).id(`${prefix}oak_clock`)

      event.recipes.createSequencedAssembly(['gribtweaks:sandstone_clock'], 'minecraft:clock', [
        event.recipes.create.deploying('minecraft:clock',['minecraft:clock','minecraft:sandstone']),
        event.recipes.create.deploying('minecraft:clock',['minecraft:clock','create:precision_mechanism']),
        event.recipes.create.deploying('minecraft:clock',['minecraft:clock','minecraft:sandstone']),
        event.recipes.create.deploying('minecraft:clock',['minecraft:clock','minecraft:redstone_block']),
        event.recipes.create.deploying('minecraft:clock',['minecraft:clock','minecraft:sandstone']),
        event.recipes.create.pressing('minecraft:clock', 'minecraft:clock'),
      ]).transitionalItem('minecraft:clock').loops(1).id(`${prefix}sandstone_clock`)

      event.recipes.createSequencedAssembly(['gribtweaks:sculk_clock'], 'minecraft:clock', [
        event.recipes.create.deploying('minecraft:clock',['minecraft:clock','minecraft:echo_shard']),
        event.recipes.create.deploying('minecraft:clock',['minecraft:clock','create:precision_mechanism']),
        event.recipes.create.deploying('minecraft:clock',['minecraft:clock','minecraft:echo_shard']),
        event.recipes.create.deploying('minecraft:clock',['minecraft:clock','minecraft:redstone_block']),
        event.recipes.create.deploying('minecraft:clock',['minecraft:clock','minecraft:echo_shard']),
        event.recipes.create.pressing('minecraft:clock', 'minecraft:clock'),
      ]).transitionalItem('minecraft:clock').loops(1).id(`${prefix}sculk_clock`)

      event.recipes.createSequencedAssembly(['gribtweaks:tained_gold_clock'], 'minecraft:clock', [
        event.recipes.create.deploying('minecraft:clock',['minecraft:clock','naturesaura:tainted_gold']),
        event.recipes.create.deploying('minecraft:clock',['minecraft:clock','create:precision_mechanism']),
        event.recipes.create.deploying('minecraft:clock',['minecraft:clock','naturesaura:tainted_gold']),
        event.recipes.create.deploying('minecraft:clock',['minecraft:clock','minecraft:redstone_block']),
        event.recipes.create.deploying('minecraft:clock',['minecraft:clock','naturesaura:tainted_gold']),
        event.recipes.create.pressing('minecraft:clock', 'minecraft:clock'),
      ]).transitionalItem('minecraft:clock').loops(1).id(`${prefix}tained_gold_clock`)
      
      event.recipes.createSequencedAssembly(['gribtweaks:spirit_attuned_clock'], 'minecraft:clock', [
        event.recipes.create.deploying('minecraft:clock',['minecraft:clock','gribtweaks:spirit_attuned_ingot']),
        event.recipes.create.deploying('minecraft:clock',['minecraft:clock','create:precision_mechanism']),
        event.recipes.create.deploying('minecraft:clock',['minecraft:clock','gribtweaks:spirit_attuned_ingot']),
        event.recipes.create.deploying('minecraft:clock',['minecraft:clock','minecraft:redstone_block']),
        event.recipes.create.deploying('minecraft:clock',['minecraft:clock','gribtweaks:spirit_attuned_ingot']),
        event.recipes.create.pressing('minecraft:clock', 'minecraft:clock'),
      ]).transitionalItem('minecraft:clock').loops(1).id(`${prefix}spirit_attuned_clock`)

      event.recipes.createSequencedAssembly(['gribtweaks:andesite_alloy_clock'], 'minecraft:clock', [
        event.recipes.create.deploying('minecraft:clock',['minecraft:clock','create:andesite_alloy']),
        event.recipes.create.deploying('minecraft:clock',['minecraft:clock','create:precision_mechanism']),
        event.recipes.create.deploying('minecraft:clock',['minecraft:clock','create:andesite_alloy']),
        event.recipes.create.deploying('minecraft:clock',['minecraft:clock','minecraft:redstone_block']),
        event.recipes.create.deploying('minecraft:clock',['minecraft:clock','create:andesite_alloy']),
        event.recipes.create.pressing('minecraft:clock', 'minecraft:clock'),
      ]).transitionalItem('minecraft:clock').loops(1).id(`${prefix}andesite_alloy_clock`)

      event.recipes.createSequencedAssembly(['gribtweaks:red_mushroom_clock'], 'minecraft:clock', [
        event.recipes.create.deploying('minecraft:clock',['minecraft:clock','chemlib:gribony_ingot']),
        event.recipes.create.deploying('minecraft:clock',['minecraft:clock','create:precision_mechanism']),
        event.recipes.create.deploying('minecraft:clock',['minecraft:clock','chemlib:gribony_ingot']),
        event.recipes.create.deploying('minecraft:clock',['minecraft:clock','minecraft:redstone_block']),
        event.recipes.create.deploying('minecraft:clock',['minecraft:clock','chemlib:gribony_ingot']),
        event.recipes.create.pressing('minecraft:clock', 'minecraft:clock'),
      ]).transitionalItem('minecraft:clock').loops(1).id(`${prefix}red_mushroom_clock`)

      event.recipes.createSequencedAssembly(['gribtweaks:reinforced_rocket_fin'], 'ad_astra:rocket_fin', [
        event.recipes.create.deploying('gribtweaks:reinforced_rocket_fin',['gribtweaks:incomplete_reinforced_rocket_fin','ad_astra:desh_plate']),
        event.recipes.create.deploying('gribtweaks:incomplete_reinforced_rocket_fin',['gribtweaks:incomplete_reinforced_rocket_fin','gribtweaks:mechanical_circuit']),
        event.recipes.create.deploying('gribtweaks:incomplete_reinforced_rocket_fin',['gribtweaks:incomplete_reinforced_rocket_fin','botania:terrasteel_ingot']),
        event.recipes.create.deploying('gribtweaks:incomplete_reinforced_rocket_fin',['gribtweaks:incomplete_reinforced_rocket_fin','forbidden_arcanus:deorum_block']),
        event.recipes.create.pressing('gribtweaks:incomplete_reinforced_rocket_fin', 'gribtweaks:incomplete_reinforced_rocket_fin'),
      ]).transitionalItem('gribtweaks:incomplete_reinforced_rocket_fin').loops(5).id(`${prefix}reinforced_rocket_fin`)

      event.recipes.createSequencedAssembly(['gribtweaks:advanced_rocket_fin'], 'gribtweaks:reinforced_rocket_fin', [
        event.recipes.create.deploying('gribtweaks:incomplete_advanced_rocket_fin',['gribtweaks:incomplete_advanced_rocket_fin','botania:life_essence']),
        event.recipes.create.deploying('gribtweaks:incomplete_advanced_rocket_fin',['gribtweaks:incomplete_advanced_rocket_fin','ad_astra:ostrum_block']),
        event.recipes.create.deploying('gribtweaks:incomplete_advanced_rocket_fin',['gribtweaks:incomplete_advanced_rocket_fin','gribtweaks:infinity_petal']),
        event.recipes.create.deploying('gribtweaks:incomplete_advanced_rocket_fin',['gribtweaks:incomplete_advanced_rocket_fin','botania:dragonstone']),
        event.recipes.create.pressing('gribtweaks:incomplete_advanced_rocket_fin', 'gribtweaks:incomplete_advanced_rocket_fin'),
      ]).transitionalItem('gribtweaks:incomplete_advanced_rocket_fin').loops(5).id(`${prefix}advanced_rocket_fin`)

      event.recipes.createSequencedAssembly(['botania:terra_pick'], 'occultism:infused_pickaxe', [
        event.recipes.create.deploying('gribtweaks:incomplete_terra_pick',['gribtweaks:incomplete_terra_pick','botania:terrasteel_ingot']),
        event.recipes.create.deploying('gribtweaks:incomplete_terra_pick',['gribtweaks:incomplete_terra_pick','gribtweaks:oblivion_ingot']),
        event.recipes.create.deploying('gribtweaks:incomplete_terra_pick',['gribtweaks:incomplete_terra_pick','botania:livingwood_twig']),
        event.recipes.create.deploying('gribtweaks:incomplete_terra_pick',['gribtweaks:incomplete_terra_pick','botania:mana_tablet']),
        event.recipes.create.deploying('gribtweaks:incomplete_terra_pick',['gribtweaks:incomplete_terra_pick','botania:rune_earth']),
      ]).transitionalItem('gribtweaks:incomplete_terra_pick').loops(5).id(`${prefix}terra_pick`)

      event.recipes.createSequencedAssembly(['botania:terra_axe'], 'naturesaura:sky_axe', [
        event.recipes.create.deploying('gribtweaks:incomplete_terra_axe',['gribtweaks:incomplete_terra_axe','botania:terrasteel_ingot']),
        event.recipes.create.deploying('gribtweaks:incomplete_terra_axe',['gribtweaks:incomplete_terra_axe','gribtweaks:oblivion_ingot']),
        event.recipes.create.deploying('gribtweaks:incomplete_terra_axe',['gribtweaks:incomplete_terra_axe','botania:livingwood_twig']),
        event.recipes.create.deploying('gribtweaks:incomplete_terra_axe',['gribtweaks:incomplete_terra_axe','botania:mana_tablet']),
        event.recipes.create.deploying('gribtweaks:incomplete_terra_axe',['gribtweaks:incomplete_terra_axe','botania:rune_fire']),
      ]).transitionalItem('gribtweaks:incomplete_terra_axe').loops(5).id(`${prefix}terra_axe`)

      event.recipes.createSequencedAssembly(['botania:terra_sword'], 'rootsclassic:living_sword', [
        event.recipes.create.deploying('gribtweaks:incomplete_terra_sword',['gribtweaks:incomplete_terra_sword','botania:terrasteel_ingot']),
        event.recipes.create.deploying('gribtweaks:incomplete_terra_sword',['gribtweaks:incomplete_terra_axe','gribtweaks:oblivion_ingot']),
        event.recipes.create.deploying('gribtweaks:incomplete_terra_sword',['gribtweaks:incomplete_terra_sword','botania:livingwood_twig']),
        event.recipes.create.deploying('gribtweaks:incomplete_terra_sword',['gribtweaks:incomplete_terra_sword','botania:mana_tablet']),
        event.recipes.create.deploying('gribtweaks:incomplete_terra_sword',['gribtweaks:incomplete_terra_sword','botania:rune_mana']),
      ]).transitionalItem('gribtweaks:incomplete_terra_sword').loops(5).id(`${prefix}terra_sword`)

      event.recipes.createSequencedAssembly(['gribtweaks:blue_piece_of_specific_rune'], 'arclight:moonlight_ingot', [
        event.recipes.create.deploying('arclight:moonlight_ingot',['arclight:moonlight_ingot','botania:manasteel_block']),
        event.recipes.create.deploying('arclight:moonlight_ingot',['arclight:moonlight_ingot','gribtweaks:basic_runic_stone']),
        event.recipes.create.deploying('arclight:moonlight_ingot',['arclight:moonlight_ingot','ad_astra:ice_shard']),
      ]).transitionalItem('arclight:moonlight_ingot').loops(5).id(`${prefix}blue_piece_of_specific_rune`)

      event.recipes.createSequencedAssembly(['gribtweaks:purple_piece_of_specific_rune'], 'arclight:moonlight_ingot', [
        event.recipes.create.deploying('arclight:moonlight_ingot',['arclight:moonlight_ingot','botania:elementium_block']),
        event.recipes.create.deploying('arclight:moonlight_ingot',['arclight:moonlight_ingot','occultism:spirit_attuned_gem']),
        event.recipes.create.deploying('arclight:moonlight_ingot',['arclight:moonlight_ingot','ad_astra:calorite_plate']),
      ]).transitionalItem('arclight:moonlight_ingot').loops(5).id(`${prefix}purple_piece_of_specific_rune`)
})
