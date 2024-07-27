ServerEvents.recipes((event) => {
    const prefix = 'gribtweaks:macerating/';
    event.custom({
        "type": "ftbic:macerating",
        "inputItems": [
          {
            "count": 1,
            "ingredient": {
              "item": "enigmaticlegacy:etherium_ore"
            }
          }
        ],
        "outputItems": [
          {
            "count": 3,
            "item": "gribtweaks:chunk_of_etherium"
          }
        ]
    }).id(`${prefix}chunk_of_etherium`)
  
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