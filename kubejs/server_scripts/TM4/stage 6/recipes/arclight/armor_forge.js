ServerEvents.recipes(event => {
    const prefix = 'gribtweaks:arclight/armor_forging/';
    event.custom({
            type: 'arclight:armor_forging',
            input: {
              item: 'arclight:arclight_gem'
            },          
            addition1: {
              item: 'aquaculture:neptunium_ingot'
            },
            addition2: {
              item: 'forbidden_arcanus:deorum_ingot'
            },
            output: { item: 'arclight:arclight_ingot' }
    }).id(`${prefix}arclight_ingot`),

    event.custom({
            type: 'arclight:armor_forging',
            input: {
              item: 'arclight:jade_gem'
            },          
            addition1: {
              item: 'aquaculture:neptunium_ingot'
            },
            addition2: {
              item: 'forbidden_arcanus:deorum_ingot'
            },
            output: { item: 'arclight:jade_ingot' }
    }).id(`${prefix}jade_ingot`),

    event.custom({
            type: 'arclight:armor_forging',
            input: {
              item: 'arclight:moonlight_crystal'
            },          
            addition1: {
              item: 'aquaculture:neptunium_ingot'
            },
            addition2: {
              item: 'forbidden_arcanus:deorum_ingot'
            },
            output: { item: 'arclight:moonlight_ingot' }
    }).id(`${prefix}moonlight_ingot`),

    event.custom({
            type: 'arclight:armor_forging',
            input: {
              item: 'arclight:bloodstone_gem'
            },          
            addition1: {
              item: 'aquaculture:neptunium_ingot'
            },
            addition2: {
              item: 'forbidden_arcanus:deorum_ingot'
            },
            output: { item: 'arclight:bloodstone_ingot' }
    }).id(`${prefix}bloodstone_ingot`),

    event.custom({
            type: 'arclight:armor_forging',
            input: {
              item: 'minecraft:echo_shard'
            },          
            addition1: {
              item: 'aquaculture:neptunium_ingot'
            },
            addition2: {
              item: 'forbidden_arcanus:deorum_ingot'
            },
            output: { item: 'arclight:sculk_ingot' }
    }).id(`${prefix}sculk_ingot`),

    event.custom({
            type: 'arclight:armor_forging',
            input: {
              item: 'arclight:cryorium_gem'
            },          
            addition1: {
              item: 'aquaculture:neptunium_ingot'
            },
            addition2: {
              item: 'forbidden_arcanus:deorum_ingot'
            },
            output: { item: 'arclight:cryorium_ingot' }
    }).id(`${prefix}cryorium_ingot`),

    event.custom({
            type: 'arclight:armor_forging',
            input: {
              item: 'ftbic:quantum_helmet'
            },          
            addition1: {
              item: 'arclight:arclight_core'
            },
            addition2: {
              item: 'gribtweaks:angel_ingot'
            },
            output: { item: 'arclight:arclight_helmet' }
    }).id(`${prefix}arclight_helmet`),

    event.custom({
            type: 'arclight:armor_forging',
            input: {
              item: 'ftbic:quantum_chestplate'
            },          
            addition1: {
              item: 'arclight:arclight_core'
            },
            addition2: {
              item: 'gribtweaks:angel_ingot'
            },
            output: { item: 'arclight:arclight_chestplate' }
    }).id(`${prefix}arclight_chestplate`),

    event.custom({
            type: 'arclight:armor_forging',
            input: {
              item: 'ftbic:quantum_leggings'
            },          
            addition1: {
              item: 'arclight:arclight_core'
            },
            addition2: {
              item: 'gribtweaks:angel_ingot'
            },
            output: { item: 'arclight:arclight_leggings' }
    }).id(`${prefix}arclight_leggings`),
    
    event.custom({
            type: 'arclight:armor_forging',
            input: {
              item: 'ftbic:quantum_boots'
            },          
            addition1: {
              item: 'arclight:arclight_core'
            },
            addition2: {
              item: 'gribtweaks:angel_ingot'
            },
            output: { item: 'arclight:arclight_boots' }
    }).id(`${prefix}arclight_boots`)
});