ServerEvents.recipes((event) => {
    const prefix = 'gribtweaks:ad_astra/mechanical_crafter/';   
    event.custom({
        'type': 'create:mechanical_crafting',
        'pattern': [
        '  S  ',
        ' SNS ',
        'SSCSS',
        'SS SS',
        'S   S'
        ],
        'key': {
            'C': {
                'item': 'arclight:sculk_core'
            },
            'N': {
                'item': 'minecraft:netherite_block'
            },
            'S': {
                'tag': 'forge:storage_blocks/steel'
            }
        },
        'result': {
        'item': 'ad_astra:rocket_fin',
        'count': 2
        },
        'acceptMirrored': true
    }).id(`${prefix}rocket_fin`)

    event.custom({
        'type': 'create:mechanical_crafting',
        'pattern': [
        '  S  ',
        ' SNS ',
        ' SNS ',
        ' SNS ',
        'SPCPS',
        'SPNPS',
        ' SSS ',
        ],
        'key': {
            'C': {
                'item': 'arclight:sculk_core'
            },
            'N': {
                'item': 'minecraft:netherite_block'
            },
            'P': {
                'item': 'gribtweaks:dense_spectral_plate'
            },
            'S': {
                'tag': 'forge:storage_blocks/steel'
            }
        },
        'result': {
        'item': 'ad_astra:rocket_nose_cone',
        'count': 1
        },
        'acceptMirrored': true
    }).id(`${prefix}rocket_nose_cone`)
       
    event.custom({
        'type': 'create:mechanical_crafting',
        'pattern': [
        '    SSS',
        '   STTS',
        'HSSSTSS',
        ' SLLLS ',
        'SSTSS  ',
        'STTS   ',
        'SSS    '
        ],
        'key': {
            'H': {
                'item': 'create:copper_valve_handle'
            },
            'L': {
                'item': 'biggerreactors:reinforced_ludicrite_block'
            },
            'S': {
                'tag': 'forge:storage_blocks/steel'
            },
            'T': {
                'item': 'create_sa:large_fueling_tank'
            }
        },
        'result': {
        'item': 'ad_astra:steel_tank',
        'count': 2
        },
        'acceptMirrored': false
    }).id(`${prefix}steel_tank`)

    event.custom({
        'type': 'create:mechanical_crafting',
        'pattern': [
        'SISIS',
        'ILSLI',
        'SSISS',
        'ILSLI',
        'SISIS'
        ],
        'key': {
            'I': {
                'item': 'gribtweaks:photoniy_ingot'
            },
            'L': {
                'item': 'biggerreactors:reinforced_ludicrite_block'
            },
            'S': {
                'tag': 'forge:storage_blocks/steel'
            }
        },
        'result': {
        'item': 'ad_astra:engine_frame',
        'count': 1
        },
        'acceptMirrored': true
    }).id(`${prefix}engine_frame`)

    event.custom({
        'type': 'create:mechanical_crafting',
        'pattern': [
        ' SSSSS ',
        'SLSLSLS',
        'SSSLSSS',
        'SSSFSSS',
        ' SSLSS ',
        'SSSLSSS',
        'SRRRRRS'
        ],
        'key': {
            'F': {
                'item': 'ad_astra:engine_frame'
            },
            'L': {
                'item': 'biggerreactors:reinforced_ludicrite_block'
            },
            'R': {
                'item': 'create_enchantment_industry:experience_rotor'
            },
            'S': {
                'tag': 'forge:storage_blocks/steel'
            }
        },
        'result': {
        'item': 'ad_astra:steel_engine',
        'count': 1
        },
        'acceptMirrored': true
    }).id(`${prefix}steel_engine`)

    event.custom({
        'type': 'create:mechanical_crafting',
        'pattern': [
        'IIIIIII',
        'IOSOSOI',
        'ISSFSSI',
        'IOFFFOI',
        'ISSFSSI',
        'IOSOSOI',
        'IIIIIII'
        ],
        'key': {
            'F': {
                'item': 'twilightforest:fiery_block'
            },
            'I': {
                'item': 'gribtweaks:photoniy_ingot'
            },
            'O': {
                'item': 'create_things_and_misc:powdered_obsidian_block'
            },
            'S': {
                'tag': 'forge:storage_blocks/steel'
            }
        },
        'result': {
        'item': 'ad_astra:launch_pad',
        'count': 1
        },
        'acceptMirrored': true
    }).id(`${prefix}launch_pad`)

    event.custom({
        'type': 'create:mechanical_crafting',
        'pattern': [
        'PPIIIPP',
        'PASASAP',
        'ISPMPSI',
        'IAMRMAI',
        'ISPMPSI',
        'PASASAP',
        'PPIIIPP'
        ],
        'key': {
            'A': {
                'item': 'gribtweaks:super_alloy'
            },
            'I': {
                'item': 'gribtweaks:iridium_ore'
            },
            'M': {
                'item': 'hexerei:magical_steel'
            },
            'P': {
                'item': 'ad_astra:protasteel_block'
            },
            'R': {
                'item': 'gribtweaks:void_rune'
            },
            'S': {
                'tag': 'forge:storage_blocks/steel'
            }
        },
        'result': {
        'item': 'ad_astra:rocket_covering',
        'count': 1
        },
        'acceptMirrored': true
    }).id(`${prefix}rocket_covering`)
});