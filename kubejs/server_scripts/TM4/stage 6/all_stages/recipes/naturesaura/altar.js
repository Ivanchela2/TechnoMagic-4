ServerEvents.recipes((event) => {
    const prefix = 'gribtweaks:naturesaura/altar/';
    event.custom({       
        'type': 'naturesaura:altar',
        'input': {
            'item': 'naturesaura:gold_leaf'
        },
        'output': {
            'item': 'gribtweaks:tained_gold_leaf'
        },
        'aura': 15000,
        'time': 300     
    }).id(`${prefix}tained_gold_leaf`)

    event.custom({       
        'type': 'naturesaura:altar',
        'input': {
            'item': 'gribtweaks:tained_gold_leaf'
        },
        'output': {
            'item': 'gribtweaks:tained_gold_powder',
            'count': 4
        },
        'catalyst': {
            'item': 'naturesaura:crushing_catalyst'
        },
        'aura': 2000,
        'time': 20
    }).id(`${prefix}tained_gold_powder`)
});