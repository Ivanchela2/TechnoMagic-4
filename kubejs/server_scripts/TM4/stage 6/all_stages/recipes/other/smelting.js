ServerEvents.recipes((event) => {
    event.smelting('gribtweaks:ametrine_ingot', 'gribtweaks:ametrine_geode').xp(0.5)       
    event.blasting('gribtweaks:ametrine_ingot', 'gribtweaks:ametrine_geode').xp(0.5)  

    event.smelting('gribtweaks:ametrine_ingot', 'gribtweaks:ametrine_ore').xp(1.0)       
    event.blasting('gribtweaks:ametrine_ingot', 'gribtweaks:ametrine_ore').xp(1.0)  
});
