ServerEvents.recipes((event) => {
  const prefix = 'gribtweaks:dissolver/';   
    event.custom({
        'type': 'alchemistry:dissolver',
        'group': 'alchemistry:dissolver',
        'input': {
          'ingredient': {
            'item': 'gribtweaks:component_ingot'
          },
          'count': 1
        },
        'output': {
          'rolls': 1,
          'weighted': false,
          'groups': [
            {
                'probability': 100.0,
                'results': [
                    {
                        'item': 'chemlib:titanium_oxide',
                        'count': 12
                    },
                    {
                        'item': 'chemlib:cellulose',
                        'count': 24
                    },
                    {
                        'item': 'chemlib:graphite',
                        'count': 8
                    },
                    {
                      'item': 'chemlib:iron',
                      'count': 48
                  },
                ]
            }
          ]    
        }
    }).id(`${prefix}component_ingot_to_elements`)

    event.custom({
      'type': 'alchemistry:dissolver',
      'group': 'alchemistry:dissolver',
      'input': {
        'ingredient': {
          'item': 'gribtweaks:cosmic_scrap'
        },
        'count': 1
      },
      'output': {
        'rolls': 1,
        'weighted': false,
        'groups': [
          {
              'probability': 100.0,
              'results': [
                  {
                      'item': 'chemlib:cosmic_element',
                      'count': 12
                  },
                  {
                      'item': 'chemlib:tungsten',
                      'count': 32
                  },
                  {
                      'item': 'chemlib:carbon',
                      'count': 32
                  },
              ]
          }
        ]    
      }
  }).id(`${prefix}cosmic_scrap_to_elements`)
    
    event.custom({
      'type': 'alchemistry:dissolver',
      'group': 'alchemistry:dissolver',
      'input': {
        'ingredient': {
          'item': 'gribtweaks:gribony_scrap'
        },
        'count': 1
      },
      'output': {
        'rolls': 1,
        'weighted': false,
        'groups': [
          {
              'probability': 100.0,
              'results': [
                  {
                      'item': 'chemlib:gribony',
                      'count': 12
                  },
                  {
                      'item': 'chemlib:tungsten',
                      'count': 32
                  },
                  {
                      'item': 'chemlib:carbon',
                      'count': 32
                  },
              ]
          }
        ]    
      }
  }).id(`${prefix}gribony_scrap_to_elements`)
});