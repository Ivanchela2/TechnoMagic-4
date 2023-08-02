ServerEvents.recipes((event) => {
    const prefix = 'gribtweaks:ftbic/macerating/';
    event.custom({       
        'type': 'ftbic:macerating',
        'inputItems': [
          {
            'ingredient': {
              'item': 'gribtweaks:ametrine_geode'
            },
            'count': 1
          }
        ],
        'outputItems': [
          {
            'item': 'gribtweaks:ametrine_shard',
            'count': 4
          }
        ]
    }).id(`${prefix}ametrine_shard`)
});