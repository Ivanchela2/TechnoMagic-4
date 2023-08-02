ServerEvents.recipes((event) => {
    const prefix = 'gribtweaks:arclight/combiner/';
    event.custom({
        type: 'alchemistry:combiner',
        group: 'alchemistry:combiner',
        input: [
            {
                'ingredient': {
                    'item': 'chemlib:silicon_dioxide'
                },
                'count': 16
            },
            {
                'ingredient': {
                    'item': 'chemlib:calcium'
                },
                'count': 32
            },
            {
                'ingredient': {
                    'item': 'occultism:spirit_attuned_gem'
                },
                'count': 1
            },
            {
                'ingredient': {
                    'item': 'minecraft:yellow_dye'
                },
                'count': 6
            }
        ],
        'result': {
            'item': 'arclight:arclight_gem'
    }
  }).id(`${prefix}arclight_gem`),
      
    event.custom({
        type: 'alchemistry:combiner',
        group: 'alchemistry:combiner',
        input: [
            {
                'ingredient': {
                    'item': 'chemlib:silicon_dioxide'
                },
                'count': 16
            },
            {
                'ingredient': {
                    'item': 'chemlib:calcium'
                },
                'count': 32
            },
            {
                'ingredient': {
                    'item': 'occultism:spirit_attuned_gem'
                },
                'count': 1
            },
            {
                'ingredient': {
                    'item': 'minecraft:red_dye'
                },
                'count': 6
            }
        ],
        'result': {
            'item': 'arclight:bloodstone_gem'
    }
  }).id(`${prefix}bloodstone_gem`)
      
    event.custom({
        type: 'alchemistry:combiner',
        group: 'alchemistry:combiner',
        input: [
            {
                'ingredient': {
                    'item': 'chemlib:silicon_dioxide'
                },
                'count': 16
            },
            {
                'ingredient': {
                    'item': 'chemlib:calcium'
                },
                'count': 32
            },
            {
                'ingredient': {
                    'item': 'occultism:spirit_attuned_gem'
                },
                'count': 1
            },
            {
                'ingredient': {
                    'item': 'minecraft:green_dye'
                },
                'count': 6
            }
        ],
        'result': {
            'item': 'arclight:jade_gem'
    }
  }).id(`${prefix}jade_gem`),
      
    event.custom({
        type: 'alchemistry:combiner',
        group: 'alchemistry:combiner',
        input: [
            {
                'ingredient': {
                    'item': 'chemlib:silicon_dioxide'
                },
                'count': 16
            },
            {
                'ingredient': {
                    'item': 'chemlib:calcium'
                },
                'count': 32
            },
            {
                'ingredient': {
                    'item': 'occultism:spirit_attuned_gem'
                },
                'count': 1
            },
            {
                'ingredient': {
                    'item': 'minecraft:blue_dye'
                },
                'count': 6
            }
        ],
        'result': {
            'item': 'arclight:moonlight_crystal'
    }
  }).id(`${prefix}moonlight_crystal`),

  event.custom({
        type: 'alchemistry:combiner',
        group: 'alchemistry:combiner',
        input: [
            {
                'ingredient': {
                    'item': 'chemlib:silicon_dioxide'
                },
                'count': 16
            },
            {
                'ingredient': {
                    'item': 'chemlib:calcium'
                },
                'count': 32
            },
            {
                'ingredient': {
                    'item': 'occultism:spirit_attuned_gem'
                },
                'count': 1
            },
            {
                'ingredient': {
                    'item': 'minecraft:white_dye'
                },
                'count': 6
            }
        ],
        'result': {
            'item': 'arclight:cryorium_gem'
    }
  }).id(`${prefix}cryorium_gem`)
});