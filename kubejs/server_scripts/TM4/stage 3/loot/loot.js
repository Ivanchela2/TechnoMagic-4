LootJS.modifiers((event) => {
    const osmiumWhenFortune = LootEntry.of('gribtweaks:raw_osmium')
      .applyOreBonus('minecraft:fortune')
      .when((c) => c.matchMainHand(ItemFilter.hasEnchantment('minecraft:fortune')));
  
    const osmiumWhenSilkTouch = LootEntry.of('gribtweaks:osmium_ore')
      .when((c) => c.matchMainHand(ItemFilter.hasEnchantment('minecraft:silk_touch')));
  
    const osmiumDefaultDrop = 'gribtweaks:raw_osmium';
  
    event
      .addBlockLootModifier('gribtweaks:osmium_ore')
      .removeLoot(Ingredient.all)
      .addAlternativesLoot(osmiumWhenFortune, osmiumWhenSilkTouch, osmiumDefaultDrop);
  
    const witchWhenFortune = LootEntry.of('gribtweaks:raw_witch_ingot')
      .applyOreBonus('minecraft:fortune')
      .when((c) => c.matchMainHand(ItemFilter.hasEnchantment('minecraft:fortune')));
  
    const witchWhenSilkTouch = LootEntry.of('gribtweaks:witch_ore')
      .when((c) => c.matchMainHand(ItemFilter.hasEnchantment('minecraft:silk_touch')));
  
    const witchDefaultDrop = 'gribtweaks:raw_witch_ingot';
  
    event
      .addBlockLootModifier('gribtweaks:witch_ore')
      .removeLoot(Ingredient.all)
      .addAlternativesLoot(witchWhenFortune, witchWhenSilkTouch, witchDefaultDrop);
  });
  