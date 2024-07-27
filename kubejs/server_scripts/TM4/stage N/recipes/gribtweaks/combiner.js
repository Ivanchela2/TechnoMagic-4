ServerEvents.recipes((event) => {
    const prefix = 'gribtweaks:combiner/';
    event.custom({
        'type': 'alchemistry:combiner',
        'group': 'alchemistry:combiner',
        'input': [
            {
                'ingredient': {
                    'item': 'chemlib:cellulose'
                },
                'count': 24
            },
            {
                'ingredient': {
                    'item': 'chemlib:iron'
                },
                'count': 48
            },
            {
                'ingredient': {
                    'item': 'chemlib:titanium_oxide'
                },
                'count': 12
            },
            {
                'ingredient': {
                    'item': 'chemlib:graphite'
                },
                'count': 8
            }
        ],
        'result': {
            'item': 'gribtweaks:component_ingot',
            'count': 1
    }
    }).id(`${prefix}component_ingot`)

    event.custom({
        'type': 'alchemistry:combiner',
        'group': 'alchemistry:combiner',
        'input': [
            {
                'ingredient': {
                    'item': 'chemlib:cosmic_element'
                },
                'count': 12
            },
            {
                'ingredient': {
                    'item': 'chemlib:tungsten'
                },
                'count': 32
            },
            {
                'ingredient': {
                    'item': 'chemlib:carbon'
                },
                'count': 32
            }
        ],
        'result': {
            'item': 'gribtweaks:cosmic_scrap',
            'count': 1
    }
    }).id(`${prefix}cosmic_scrap`)

    event.custom({
        'type': 'alchemistry:combiner',
        'group': 'alchemistry:combiner',
        'input': [
            {
                'ingredient': {
                    'item': 'chemlib:gribony'
                },
                'count': 12
            },
            {
                'ingredient': {
                    'item': 'chemlib:tungsten'
                },
                'count': 32
            },
            {
                'ingredient': {
                    'item': 'chemlib:carbon'
                },
                'count': 32
            }
        ],
        'result': {
            'item': 'gribtweaks:gribony_scrap',
            'count': 1
    }
    }).id(`${prefix}gribony_scrap`)
});