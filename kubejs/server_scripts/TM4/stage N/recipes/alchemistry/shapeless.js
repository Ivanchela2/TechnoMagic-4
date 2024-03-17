ServerEvents.recipes((event) => {
    const prefix = 'gribtweaks:alchemistry/shaped/';
    //Грибоний
    event.shapeless(
        'chemlib:gribony_block',
        '9x chemlib:gribony_ingot'  
    ).id(`${prefix}gribony_block_of_ingots`)
    event.shapeless(
        '9x chemlib:gribony_ingot',
        'chemlib:gribony_block'  
    ).id(`${prefix}gribony_ingot`)
    
    event.shapeless(
        'chemlib:pre_gribony_block',
        '9x chemlib:pre_gribony_ingot'  
    ).id(`${prefix}pre_gribony_block_of_ingots`)
    event.shapeless(
        '9x chemlib:pre_gribony_ingot',
        'chemlib:pre_gribony_block'  
    ).id(`${prefix}pre_gribony_ingot`)

    event.shapeless(
        'chemlib:unstable_gribony_block',
        '9x chemlib:unstable_gribony_ingot'  
    ).id(`${prefix}unstable_gribony_block_of_ingots`)
    event.shapeless(
        '9x chemlib:unstable_gribony_ingot',
        'chemlib:unstable_gribony_block'  
    ).id(`${prefix}unstable_gribony_ingot`)
  
});
