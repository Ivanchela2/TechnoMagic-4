ServerEvents.recipes(event => {
    const prefix = 'gribtweaks:smithing/';
    
    
    event.smithing(
      'gribtweaks:corrupt_upgraded_netherite_eye',  
      'cataclysm:void_eye', 
      'upgradednetherite:corrupt_essence'
    ).id(`${prefix}corrupt_upgraded_netherite_eye`),

    event.smithing(
      'gribtweaks:fire_upgraded_netherite_eye',  
      'cataclysm:void_eye', 
      'upgradednetherite:fire_essence'   
    ).id(`${prefix}fire_upgraded_netherite_eye`),

    event.smithing(
      'gribtweaks:gold_upgraded_netherite_eye',  
      'cataclysm:void_eye', 
      'upgradednetherite:gold_essence'   
    ).id(`${prefix}gold_upgraded_netherite_eye`),
    
    event.smithing(
      'gribtweaks:feather_upgraded_netherite_eye',  
      'cataclysm:void_eye', 
      'upgradednetherite:feather_essence'   
    ).id(`${prefix}feather_upgraded_netherite_eye`),

    event.smithing(
      'gribtweaks:ender_upgraded_netherite_eye',  
      'cataclysm:void_eye', 
      'upgradednetherite:ender_essence'   
    ).id(`${prefix}ender_upgraded_netherite_eye`),

    event.smithing(
      'gribtweaks:echo_upgraded_netherite_eye',  
      'cataclysm:void_eye', 
      'upgradednetherite:echo_essence'   
    ).id(`${prefix}echo_upgraded_netherite_eye`),

    event.smithing(
      'gribtweaks:water_upgraded_netherite_eye',  
      'cataclysm:void_eye', 
      'upgradednetherite:water_essence'   
    ).id(`${prefix}water_upgraded_netherite_eye`),

    event.smithing(
      'gribtweaks:wither_upgraded_netherite_eye',  
      'cataclysm:void_eye', 
      'upgradednetherite:wither_essence'  
    ).id(`${prefix}wither_upgraded_netherite_eye`),

    event.smithing(
      'gribtweaks:poison_upgraded_netherite_eye',  
      'cataclysm:void_eye', 
      'upgradednetherite:poison_essence'   
    ).id(`${prefix}poison_upgraded_netherite_eye`),

    event.smithing(
      'gribtweaks:phantom_upgraded_netherite_eye',  
      'cataclysm:void_eye', 
      'upgradednetherite:phantom_essence'  
    ).id(`${prefix}phantom_upgraded_netherite_eye`),

    event.smithing(
      'gribtweaks:ultimate_upgraded_netherite_eye',  
      'cataclysm:void_eye', 
      'upgradednetherite_ultimate:ultimate_essence'   
    ).id(`${prefix}ultimate_upgraded_netherite_eye`),

    event.smithing(
      'gribtweaks:electronic_eye',  
      'cataclysm:void_eye', 
      'gribtweaks:quantum_circuit'  
    ).id(`${prefix}electronic_eye`),

    event.smithing(
      'gribtweaks:mechanical_eye',  
      'cataclysm:void_eye', 
      'gribtweaks:mechanical_ingot'   
    ).id(`${prefix}mechanical_eye`)

    event.smithing(
      'gribtweaks:fiery_membrane',  
      'minecraft:phantom_membrane', 
      '#chipped:magma_block'   
    ).id(`${prefix}fiery_membrane`)

    event.smithing(
      'gribtweaks:steel_membrane',  
      'minecraft:phantom_membrane', 
      '#forge:storage_blocks/steel'  
    ).id(`${prefix}steel_membrane`)

    event.smithing(
      'gribtweaks:diamond_membrane',  
      'minecraft:phantom_membrane', 
      'minecraft:diamond_block' 
    ).id(`${prefix}diamond_membrane`)

    event.smithing(
      'gribtweaks:sculk_membrane',  
      'minecraft:phantom_membrane', 
      'minecraft:echo_shard'
    ).id(`${prefix}sculk_membrane`)

    event.smithing(
      'create:creative_crate',  
      'upgradednetherite_creative:creative_upgraded_netherite_ingot', 
      'ae2:creative_item_cell'
    ).id(`${prefix}creative_item_cell`)

    event.smithing(
      'create:creative_fluid_tank',  
      'upgradednetherite_creative:creative_upgraded_netherite_ingot', 
      'ae2:creative_fluid_cell'
    ).id(`${prefix}creative_fluid_cell`)

    event.smithing(
      'botania:creative_pool',  
      'upgradednetherite_creative:creative_upgraded_netherite_ingot', 
      'appbot:creative_mana_cell'
    ).id(`${prefix}creative_mana_cell`)
});