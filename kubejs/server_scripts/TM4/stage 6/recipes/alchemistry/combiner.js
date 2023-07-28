ServerEvents.recipes((event) => {
    const prefix = 'gribtweaks:chemlib/combiner/';
    event.custom({
        'type': 'alchemistry:combiner',
        'group': 'alchemistry:combiner',
        'input': [
            {
                'ingredient': {
                    'item': 'chemlib:unstable_gribony'
                },
                'count': 4
            },
            {
                'ingredient': {
                    'item': 'minecraft:red_mushroom'
                },
                'count': 64
            },
            {
                'ingredient': {
                    'item': 'chemlib:stabilizing_element'
                },
                'count': 1
            },
            {
                'ingredient': {
                    'item': 'forbidden_arcanus:mundabitur_dust'
                },
                'count': 1
            }
        ],
        'result': {
            'item': 'chemlib:gribony',
            'count': 4
    }
    }).id(`${prefix}gribony`)

    event.custom({
        'type': 'alchemistry:combiner',
        'group': 'alchemistry:combiner',
        'input': [
            {
                'ingredient': {
                    'item': 'enigmaticlegacy:astral_dust'
                },
                'count': 16
            },
            {
                'ingredient': {
                    'item': 'chemlib:stabilizing_element'
                },
                'count': 4
            },
            {
                'ingredient': {
                    'item': 'chemlib:unstable_gribony'
                },
                'count': 8
            },
            {
                'ingredient': {
                    'item': 'forbidden_arcanus:corrupti_dust'
                },
                'count': 1
            }
        ],
        'result': {
            'item': 'chemlib:destabilizing_element',
            'count': 4
    }
    }).id(`${prefix}destabilizing_element`)

    event.custom({
        'type': 'alchemistry:combiner',
        'group': 'alchemistry:combiner',
        'input': [
            {
                'ingredient': {
                    'item': 'chemlib:destabilizing_element'
                },
                'count': 1
            },
            {
                'ingredient': {
                    'item': 'reliquary:destruction_catalyst'
                },
                'count': 1
            },
            {
                'ingredient': {
                    'item': 'chemlib:gribony'
                },
                'count': 4
            },
            {
                'ingredient': {
                    'item': 'chemlib:all_radioactive_element'
                },
                'count': 8
            }
        ],
        'result': {
            'item': 'chemlib:industrial_unstable_gribony',
            'count': 2
    }
    }).id(`${prefix}industrial_unstable_gribony`)

    event.custom({
        'type': 'alchemistry:combiner',
        'group': 'alchemistry:combiner',
        'input': [
            {
                'ingredient': {
                    'item': 'chemlib:cosmic_elements_mixture'
                },
                'count': 2
            },
            {
                'ingredient': {
                    'item': 'botania:ender_air_bottle'
                },
                'count': 16
            },
            {
                'ingredient': {
                    'item': 'chemlib:stabilizing_element'
                },
                'count': 1
            },
            {
                'ingredient': {
                    'item': 'silentcompat:voidmetal_nugget'
                },
                'count': 4
            }
        ],
        'result': {
            'item': 'chemlib:cosmic_mixture',
            'count': 1
    }
    }).id(`${prefix}cosmic_mixture`)
});