ServerEvents.recipes((event) => {
    const prefix = 'gribtweaks:haunting/';
    event.custom({
        'type': 'create:haunting',
        'ingredients': [
          {
            'item': 'gribtweaks:oblivion_powder'
          }
        ],
        'results': [
          {
            'item': 'gribtweaks:oblivion_ingot'
          }
        ]          
    }).id(`${prefix}oblivion_ingot`)
});