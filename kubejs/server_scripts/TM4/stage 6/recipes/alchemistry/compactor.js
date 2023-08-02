ServerEvents.recipes((event) => {
    const prefix = 'gribtweaks:chemlib/compactor/';
    
    // Грибоний
    event.custom({
        'type': 'alchemistry:compactor',
        'group': 'alchemistry:compactor',
        'input': {
            'ingredient': {
                'item': 'chemlib:gribony'
            },
            'count': 16
        },
        'result': {
            'item': 'chemlib:gribony_dust'
    }
    }).id(`${prefix}gribony_dust`)
    
    event.custom({
        'type': 'alchemistry:compactor',
        'group': 'alchemistry:compactor',
        'input': {
            'ingredient': {
                'item': 'chemlib:pre_gribony'
            },
            'count': 16
        },
        'result': {
            'item': 'chemlib:pre_gribony_dust'
    }
    }).id(`${prefix}pre_gribony_dust`)

    event.custom({
        'type': 'alchemistry:compactor',
        'group': 'alchemistry:compactor',
        'input': {
            'ingredient': {
                'item': 'chemlib:unstable_gribony'
            },
            'count': 16
        },
        'result': {
            'item': 'chemlib:unstable_gribony_dust'
    }
    }).id(`${prefix}unstable_gribony_dust`)
      
});