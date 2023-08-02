ServerEvents.recipes((event) => {
    const prefix = 'gribtweaks:chemlib/fusion/';
    event.custom({
        'type': 'alchemistry:fusion',
        'group': 'fusion',
        'input1': {
        'item': 'chemlib:pre_gribony'
        },
        'input2': {
        'item': 'chemlib:pre_gribony'
        },
        'output': {
        'item': 'chemlib:unstable_gribony'
        }  
    }).id(`${prefix}unstable_gribony`)
    
});