ServerEvents.recipes((event) => {
    const prefix = 'gribtweaks:ftbic/separating/';
    event.custom({       
        'type': 'ftbic:separating',
        'inputItems': [
          {
            'ingredient': {
              'item': 'gribtweaks:proton'
            },
            'count': 1
          }
        ],
        'outputItems': [
          {
            'item': 'gribtweaks:proton_shard',
            'count': 9
          }
        ]
    }).id(`${prefix}proton_shard`)

    event.custom({       
        'type': 'ftbic:separating',
        'inputItems': [
          {
            'ingredient': {
              'item': 'gribtweaks:iridium_ore'
            },
            'count': 1
          }
        ],
        'outputItems': [
          {
            'item': 'gribtweaks:iridium_shard',
            'count': 9
          }
        ]
    }).id(`${prefix}iridium_shard`)
});