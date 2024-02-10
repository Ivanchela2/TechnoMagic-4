ServerEvents.recipes((event) => {
  const prefix = 'gribtweaks:/mechanical_crafter/';  
  event.custom({
    'type': 'create:mechanical_crafting',
    'pattern': [
      'AAAAA',
      'ABBBA',
      'AAAAA',
      '  D  ',
      ' CDC ',
      ' CCC '
    ],
    'key': {
        'A': {
            'item': 'createbigcannons:cast_iron_ingot'
        },
        'B': {
            'item': 'gribtweaks:mix_of_ingot_combinations'
        },
        'C': {
            'item': 'hexerei:infused_fabric'
        },
        'D': {
            'item': 'gribtweaks:wooden_rod'
        }
    },
    'result': {
    'item': 'hexerei:warhammer',
    'count': 1
    },
    'acceptMirrored': true
}).id(`${prefix}warhammer`)
  
  event.custom({
    'type': 'create:mechanical_crafting',
    'pattern': [
      'AAAAA',
      'ABBBA',
      'AAAAA',
      '  D  ',
      ' CDC ',
      ' CCC '
    ],
    'key': {
        'A': {
            'item': 'createbigcannons:cast_iron_ingot'
        },
        'B': {
            'item': 'gribtweaks:mix_of_ingot_combinations'
        },
        'C': {
            'item': 'hexerei:infused_fabric'
        },
        'D': {
            'item': 'gribtweaks:wooden_rod'
        }
    },
    'result': {
    'item': 'hexerei:warhammer',
    'count': 1
    },
    'acceptMirrored': true
}).id(`${prefix}warhammer`)

  event.custom({
      'type': 'create:mechanical_crafting',
      'pattern': [
      'AAAAA',
      'ABCBA',
      'AAAAA',
      '  D  ',
      '  D  ',
      '  D  '
      ],
      'key': {
          'A': {
              'item': 'gribtweaks:magical_steel'
          },
          'B': {
              'item': 'gribtweaks:witch_ingot_block'
          },
          'C': {
              'item': 'hexerei:warhammer'
          },
          'D': {
              'item': 'gribtweaks:witch_rod'
          }
      },
      'result': {
      'item': 'gribtweaks:witch_hammer',
      'count': 1
      },
      'acceptMirrored': true
  }).id(`${prefix}witch_hammer`)
});