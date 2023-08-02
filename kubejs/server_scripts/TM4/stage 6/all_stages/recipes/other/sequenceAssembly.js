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

      event.recipes.createSequencedAssembly(['gribtweaks:mechanical_ingot'], 'minecraft:iron_ingot', [
        event.recipes.create.deploying('minecraft:iron_ingot',['minecraft:iron_ingot','create:cogwheel']),
        event.recipes.create.deploying('minecraft:iron_ingot',['minecraft:iron_ingot','#forge:stripped_logs']),
        event.recipes.create.deploying('minecraft:iron_ingot',['minecraft:iron_ingot','ftbic:copper_gear']),
        event.recipes.create.deploying('minecraft:iron_ingot',['minecraft:iron_ingot','create:andesite_alloy']),
        event.recipes.create.pressing('minecraft:iron_ingot', 'minecraft:iron_ingot'),
      ]).transitionalItem('minecraft:iron_ingot').loops(4).id(`${prefix}mechanical_ingot`)

      // runes 
      event.recipes.createSequencedAssembly(['gribtweaks:air_rune'], 'gribtweaks:empty_rune', [
        event.recipes.create.deploying('gribtweaks:empty_rune',['gribtweaks:empty_rune','gribtweaks:sky_ingot']),
        event.recipes.create.deploying('gribtweaks:empty_rune',['gribtweaks:empty_rune','gribtweaks:ametrine_nugget']),
        event.recipes.create.filling('gribtweaks:empty_rune',['gribtweaks:empty_rune',{ type: 'forge:nbt', 'fluid':'create:potion', 'amount': 300, 'nbt': '{Potion:"minecraft:strong_regeneration"}' }]),
        event.recipes.create.pressing('gribtweaks:empty_rune', 'gribtweaks:empty_rune'),
      ]).transitionalItem('gribtweaks:empty_rune').loops(1).id(`${prefix}air_rune`)

      event.recipes.createSequencedAssembly(['gribtweaks:earth_rune'], 'gribtweaks:empty_rune', [
        event.recipes.create.deploying('gribtweaks:empty_rune',['gribtweaks:empty_rune','gribtweaks:forest_ingot']),
        event.recipes.create.deploying('gribtweaks:empty_rune',['gribtweaks:empty_rune','gribtweaks:ametrine_nugget']),
        event.recipes.create.filling('gribtweaks:empty_rune',['gribtweaks:empty_rune',{ type: 'forge:nbt', 'fluid':'create:potion', 'amount': 300, 'nbt': '{Potion:"minecraft:long_invisibility"}' }]),
        event.recipes.create.pressing('gribtweaks:empty_rune', 'gribtweaks:empty_rune'),
      ]).transitionalItem('gribtweaks:empty_rune').loops(1).id(`${prefix}earth_rune`)

      event.recipes.createSequencedAssembly(['gribtweaks:fire_rune'], 'gribtweaks:empty_rune', [
        event.recipes.create.deploying('gribtweaks:empty_rune',['gribtweaks:empty_rune','gribtweaks:hell_ingot']),
        event.recipes.create.deploying('gribtweaks:empty_rune',['gribtweaks:empty_rune','gribtweaks:ametrine_nugget']),
        event.recipes.create.filling('gribtweaks:empty_rune',['gribtweaks:empty_rune',{ type: 'forge:nbt', 'fluid':'create:potion', 'amount': 300, 'nbt': '{Potion:"minecraft:long_fire_resistance"}' }]),
        event.recipes.create.pressing('gribtweaks:empty_rune', 'gribtweaks:empty_rune'),
      ]).transitionalItem('gribtweaks:empty_rune').loops(1).id(`${prefix}fire_rune`)

      event.recipes.createSequencedAssembly(['gribtweaks:water_rune'], 'gribtweaks:empty_rune', [
        event.recipes.create.deploying('gribtweaks:empty_rune',['gribtweaks:empty_rune','gribtweaks:water_ingot']),
        event.recipes.create.deploying('gribtweaks:empty_rune',['gribtweaks:empty_rune','gribtweaks:ametrine_nugget']),
        event.recipes.create.filling('gribtweaks:empty_rune',['gribtweaks:empty_rune',{ type: 'forge:nbt', 'fluid':'create:potion', 'amount': 300, 'nbt': '{Potion:"minecraft:long_water_breathing"}' }]),
        event.recipes.create.pressing('gribtweaks:empty_rune', 'gribtweaks:empty_rune'),
      ]).transitionalItem('gribtweaks:empty_rune').loops(1).id(`${prefix}water_rune`)

      event.recipes.createSequencedAssembly(['gribtweaks:magma_rune'], 'gribtweaks:empty_rune', [
        event.recipes.create.deploying('gribtweaks:empty_rune',['gribtweaks:empty_rune','gribtweaks:hell_ingot']),
        event.recipes.create.deploying('gribtweaks:empty_rune',['gribtweaks:empty_rune','gribtweaks:ametrine_shard']),
        event.recipes.create.filling('gribtweaks:empty_rune',['gribtweaks:empty_rune',{ type: 'forge:nbt', 'fluid':'create:potion', 'amount': 300, 'nbt': '{Potion:"minecraft:long_fire_resistance"}' }]),
        event.recipes.create.deploying('gribtweaks:empty_rune',['gribtweaks:empty_rune','#chipped:magma_block']),
        event.recipes.create.filling('gribtweaks:empty_rune',['gribtweaks:empty_rune',{ type: 'forge:nbt', 'fluid':'minecraft:lava', 'amount': 700, 'nbt': '{}' }]),
        event.recipes.create.pressing('gribtweaks:empty_rune', 'gribtweaks:empty_rune'),
      ]).transitionalItem('gribtweaks:empty_rune').loops(1).id(`${prefix}magma_rune`)

      event.recipes.createSequencedAssembly(['gribtweaks:forest_rune'], 'gribtweaks:empty_rune', [
        event.recipes.create.deploying('gribtweaks:empty_rune',['gribtweaks:empty_rune','gribtweaks:forest_ingot']),
        event.recipes.create.deploying('gribtweaks:empty_rune',['gribtweaks:empty_rune','gribtweaks:ametrine_shard']),
        event.recipes.create.filling('gribtweaks:empty_rune',['gribtweaks:empty_rune',{ type: 'forge:nbt', 'fluid':'create:potion', 'amount': 300, 'nbt': '{Potion:"minecraft:long_invisibility"}' }]),
        event.recipes.create.deploying('gribtweaks:empty_rune',['gribtweaks:empty_rune','#minecraft:saplings']),
        event.recipes.create.deploying('gribtweaks:empty_rune',['gribtweaks:empty_rune','minecraft:mud']),
        event.recipes.create.pressing('gribtweaks:empty_rune', 'gribtweaks:empty_rune'),
      ]).transitionalItem('gribtweaks:empty_rune').loops(1).id(`${prefix}forest_rune`)

      event.recipes.createSequencedAssembly(['gribtweaks:void_rune'], 'gribtweaks:empty_rune', [
        event.recipes.create.deploying('gribtweaks:empty_rune',['gribtweaks:empty_rune','gribtweaks:void_ingot']),
        event.recipes.create.deploying('gribtweaks:empty_rune',['gribtweaks:empty_rune','gribtweaks:ametrine_shard']),
        event.recipes.create.deploying('gribtweaks:empty_rune',['gribtweaks:empty_rune','botania:ender_air_bottle']),
        event.recipes.create.deploying('gribtweaks:empty_rune',['gribtweaks:empty_rune','ftbic:antimatter']),
        event.recipes.create.pressing('gribtweaks:empty_rune', 'gribtweaks:empty_rune'),
      ]).transitionalItem('gribtweaks:empty_rune').loops(1).id(`${prefix}void_rune`)
})
