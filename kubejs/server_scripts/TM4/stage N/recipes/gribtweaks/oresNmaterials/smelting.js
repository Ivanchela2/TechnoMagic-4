ServerEvents.recipes(event =>{
    // OSMIUM ORE ------------------------------------------------------------------
    event.smelting('gribtweaks:ingot_osmium', 'gribtweaks:osmium_ore').xp(1.0) 
    event.blasting('gribtweaks:ingot_osmium', 'gribtweaks:osmium_ore').xp(1.0)  
    event.smelting('gribtweaks:ingot_osmium', 'gribtweaks:raw_osmium').xp(0.5)  
    event.blasting('gribtweaks:ingot_osmium', 'gribtweaks:raw_osmium').xp(0.5)  
    event.smelting('gribtweaks:ingot_osmium', 'gribtweaks:deepslate_osmium_ore').xp(1.0) 
    event.blasting('gribtweaks:ingot_osmium', 'gribtweaks:deepslate_osmium_ore').xp(1.0)  

    // WITCH ORE ------------------------------------------------------------------
    event.smelting('gribtweaks:witch_ingot', 'gribtweaks:witch_ore').xp(1.0) 
    event.blasting('gribtweaks:witch_ingot', 'gribtweaks:witch_ore').xp(1.0)  
    event.smelting('gribtweaks:witch_ingot', 'gribtweaks:raw_witch_ingot').xp(0.5)  
    event.blasting('gribtweaks:witch_ingot', 'gribtweaks:raw_witch_ingot').xp(0.5)  
})