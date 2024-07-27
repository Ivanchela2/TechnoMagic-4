const petalblocks = /botania:\w+_petal_block/
const netheritechest = /sophisticatedstorage:\w+_:netherite_chest/

ServerEvents.tags('item', event => {
    event.add('gribtweaks:netherite_chests', netheritechest)
    event
    .get('sophisticatedstorage:netherite_chest')
    .add([
        'sophisticatedstorage:netherite_chest'
    ])
    
    event.add('forge:dust/energium', 'gribtweaks:energium_dust'),
    event.add('forge:storage_blocks/etherium', 'enigmaticlegacy:etherium_block'),
    event.add('forge:ingots/etherium', 'enigmaticlegacy:etherium_ingot')

    
    event.add('gribtweaks:petal_blocks', petalblocks)
    event
    .get('twilightforest:bows')
    .add([
        'twilightforest:triple_bow',
        'twilightforest:seeker_bow',
        'twilightforest:ice_bow',
        'twilightforest:ender_bow'
    ])
    event
    .get('gribtweaks:cooked_food')
    .add([
        'minecraft:cooked_porkchop',
        'minecraft:cooked_beef',
        'minecraft:cooked_salmon',
        'minecraft:cooked_cod',
        'minecraft:cooked_chicken',
        'minecraft:cooked_rabbit'
    ])
    event.add('itemfilters:match_nbt', 'productivebees:bee_cage')
    

    event.add('forge:tallow', 'delightful:animal_fat')
    event.add('forge:feathers', 'totemic:eagle_feather')
    event.add('forge:storage_blocks/titanium', 'echoing_expanse:titanium_block')


    event.get('gribtweaks:bee_machine_flower')
    .add([
        'ftbic:macerator',
        'ftbic:centrifuge',
        'ftbic:extruder',
        'ftbic:compressor'
    ])
    event.get('gribtweaks:ametrine_blocks')
    .add([
        'gribtweaks:ametrine_block',
        'gribtweaks:polished_ametrine_block',
        'gribtweaks:ametrine_bricks'
    ])
    event.get('forge:stripped_logs')
    .add([
        'totemic:stripped_cedar_log',
        'quark:stripped_ancient_log',
        'neapolitan:carved_banana_stalk'
    ])
    event.get('forge:stripped_wood')
    .add([
        'totemic:stripped_cedar_wood',
        'quark:stripped_ancient_wood'
    ])
})


ServerEvents.tags('block', event => {
    event.get('gribtweaks:bee_machine_flower')
    .add([
        'ftbic:macerator',
        'ftbic:centrifuge',
        'ftbic:extruder',
        'ftbic:compressor'
    ])
    event.get('forge:storage_blocks/titanium')
    .add([
        'echoing_expanse:titanium_block',
        'chemlib:titanium_metal_block'
    ])
    event.add('forge:storage_blocks/osmium', 'chemlib:osmium_metal_block')
    event.add('forge:storage_blocks/nickel', 'chemlib:nickel_metal_block')
    event.add('forge:storage_blocks/platinum', 'chemlib:platinum_metal_block')
    event.add('forge:storage_blocks/tungsten', 'chemlib:tungsten_metal_block')
    event.add('forge:storage_blocks/bismuth', 'chemlib:bismuth_metal_block')
    event.add('forge:storage_blocks/cobalt', 'chemlib:cobalt_metal_block')
    event.get('gribtweaks:ametrine_blocks')
    .add([
        'gribtweaks:ametrine_block',
        'gribtweaks:polished_ametrine_block',
        'gribtweaks:ametrine_bricks'
    ])
})