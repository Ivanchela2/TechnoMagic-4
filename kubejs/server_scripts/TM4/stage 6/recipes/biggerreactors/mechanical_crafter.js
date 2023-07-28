ServerEvents.recipes((event) => {
    const prefix = 'gribtweaks:biggerreactors/mechanical_crafter/';
    event.custom({
        'type': 'create:mechanical_crafting',
        'pattern': [
        '12345',
        '678A9',
        '0BACD',
        'EAFGH',
        'IJKLM'
        ],
        'key': {
            '1': {
                'item': 'minecraft:blue_ice'
            },
            '2': {
                'item': 'lilwings:butternite_block'
            },
            '3': {
                'item': 'silentgear:crimson_steel_block'
            },
            '4': {
                'item': 'ftbic:bronze_block'
            },
            '5': {
                'item': 'minecraft:diamond_block'
            },
            '6': {
                'item': 'occultism:silver_block'
            },
            '7': {
                'item': 'minecraft:gold_block'
            },
            '8': {
                'item': 'forbidden_arcanus:processed_obsidian_block'
            },
            '9': {
                'item': 'ad_astra:steel_block'
            },
            '0': {
                'item': 'chemlib:beryllium_metal_block'
            },
            'A': {
                'item': 'biggerreactors:blutonium_block'
            },
            'B': {
                'item': 'minecraft:iron_block'
            },
            'C': {
                'item': 'minecraft:redstone_block'
            },
            'D': {
                'item': 'naturesaura:depth_ingot_block'
            },
            'E': {
                'item': 'aquaculture:neptunium_block'
            },
            'F': {
                'item': 'enigmaticlegacy:etherium_block'
            },
            'G': {
                'item': 'minecraft:emerald_block'
            },
            'H': {
                'item': 'spirit:soul_steel_block'
            },
            'I': {
                'item': 'chemlib:actinium_metal_block'
            },
            'J': {
                'item': 'ftbic:tin_block'
            },
            'K': {
                'item': 'ftbic:lead_block'
            },
            'L': {
                'item': 'arclight:bloodstone_block'
            },
            'M': {
                'item': 'forbidden_arcanus:deorum_block'
            }
        },
        'result': {
        'item': 'biggerreactors:ludicrite_block',
        'count': 2
        },
        'acceptMirrored': false
    }).id(`${prefix}ludicrite_block`)   
});