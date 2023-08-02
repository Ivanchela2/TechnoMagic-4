ServerEvents.recipes((event) => {
    const prefix = 'gribtweaks:chemlib/runic_altar/';
    event.custom({
        'type': 'botania:runic_altar',
        'ingredients': [
        {
            'item': 'chemlib:all_transition_metals_element'
        },
        {
            'item': 'chemlib:all_reactive_non-metals_element'
        },
        {
            'item': 'chemlib:all_alkali_metals_element'
        },
        {
            'item': 'chemlib:all_alkaline_earth_metals_element'
        },
        {
            'item': 'chemlib:all_post-transition_metals_element'
        },
        {
            'item': 'chemlib:all_unknown_properties_element'
        },
        {
            'item': 'chemlib:all_metalloids_element'
        },
        {
            'item': 'chemlib:all_halogens_element'
        },
        {
            'item': 'chemlib:all_noble_gases_element'
        },
        {
            'item': 'chemlib:all_lanthanides_element'
        },
        {
            'item': 'chemlib:all_actinides_element'
        },
        {
            'item': 'chemlib:all_radioactive_element'
        },
        {
            'item': 'chemlib:terrasteel_element'
        },
        {
            'item': 'chemlib:gaia_element'
        },
        {
            'item': 'chemlib:mana_element'
        }
        ],
        'mana': 250000,
        'output': {
        'count': 1,
        'item': 'chemlib:pre_gribony'
        }
    }).id(`${prefix}pre_gribony`)

    event.custom({
        'type': 'botania:runic_altar',
        'ingredients': [
        {
            'item': 'dreadsteel:dreadsteel_ingot'
        },
        {
            'item': 'tiab:time_in_a_bottle'
        },
        {
            'item': 'chemlib:destabilizing_element'
        },
        {
            'item': 'botania:hourglass'
        }
        ],
        'mana': 50000,
        'output': {
        'count': 1,
        'item': 'chemlib:time_ingot'
        }
    }).id(`${prefix}time_ingot`)
    
});