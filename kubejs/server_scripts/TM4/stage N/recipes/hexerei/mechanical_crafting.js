ServerEvents.recipes((event) => {
  const prefix = 'gribtweaks:mechanical_crafter/';  
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
});