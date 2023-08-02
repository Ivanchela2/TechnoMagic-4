ServerEvents.tags('item', event => {
    event.get('gribtweaks:bee_machine_flower')
    .add([
        'ftbic:macerator',
        'ftbic:centrifuge',
        'ftbic:extruder',
        'ftbic:compressor'
    ])
    event.add('forge:storage_blocks/titanium', 'echoing_expanse:titanium_block')
    event.get('gribtweaks:ametrine_blocks')
    .add([
        'gribtweaks:ametrine_block',
        'gribtweaks:polished_ametrine_block',
        'gribtweaks:ametrine_bricks'
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