ServerEvents.recipes((event) => {
    const prefix = 'gribtweaks:ftbic/rolling/';
    event.custom({       
      'type': 'ftbic:rolling',
      'inputItems': [
        {
          'ingredient': {
            'item': 'gribtweaks:spectral_ingot'
          },
          'count': 1
        }
      ],
      'outputItems': [
        {
          'item': 'gribtweaks:spectral_plate'
        }
      ]
    }).id(`${prefix}spectral_ingot_to_plate`)

    event.custom({       
      'type': 'ftbic:rolling',
      'inputItems': [
        {
          'ingredient': {
            'item': 'deeperdarker:soul_crystal'
          },
          'count': 1
        }
      ],
      'outputItems': [
        {
          'item': 'gribtweaks:sculk_plate'
        }
      ]
    }).id(`${prefix}soul_crystal_to_plate`)

    event.custom({       
      'type': 'ftbic:rolling',
      'inputItems': [
        {
          'ingredient': {
            'item': 'minecraft:diamond_block'
          },
          'count': 1
        }
      ],
      'outputItems': [
        {
          'item': 'gribtweaks:diamond_plate'
        }
      ]
    }).id(`${prefix}diamond_block_to_plate`)

    event.custom({       
      'type': 'ftbic:rolling',
      'inputItems': [
        {
          'ingredient': {
            'item': 'gribtweaks:oblivion_ingot'
          },
          'count': 1
        }
      ],
      'outputItems': [
        {
          'item': 'gribtweaks:oblivion_plate'
        }
      ]
    }).id(`${prefix}oblivion_ingot_to_plate`)

    event.custom({       
      'type': 'ftbic:rolling',
      'inputItems': [
        {
          'ingredient': {
            'item': 'gribtweaks:antimatter_ingot'
          },
          'count': 1
        }
      ],
      'outputItems': [
        {
          'item': 'gribtweaks:antimatter_plate'
        }
      ]
    }).id(`${prefix}antimatter_ingot_to_plate`)

    event.custom({       
      'type': 'ftbic:rolling',
      'inputItems': [
        {
          'ingredient': {
            'item': 'gribtweaks:component_ingot'
          },
          'count': 1
        }
      ],
      'outputItems': [
        {
          'item': 'gribtweaks:component_base'
        }
      ]
    }).id(`${prefix}component_base`)
});