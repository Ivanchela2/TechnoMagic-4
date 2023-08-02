ServerEvents.recipes((event) => {
    //Грибоний
    event.smelting('chemlib:gribony_ingot', 'chemlib:gribony_dust').xp(2.0)       
    event.blasting('chemlib:gribony_ingot', 'chemlib:gribony_dust').xp(2.0)  

    event.smelting('chemlib:pre_gribony_ingot', 'chemlib:pre_gribony_dust').xp(2.0)  
    event.blasting('chemlib:pre_gribony_ingot', 'chemlib:pre_gribony_dust').xp(2.0)  

    event.smelting('chemlib:unstable_gribony_ingot', 'chemlib:unstable_gribony_dust').xp(2.0)  
    event.blasting('chemlib:unstable_gribony_ingot', 'chemlib:unstable_gribony_dust').xp(2.0)  
});
