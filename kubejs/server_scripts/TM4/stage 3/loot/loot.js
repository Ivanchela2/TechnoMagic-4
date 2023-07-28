LootJS.modifiers((event) => {
    const osmiumWhenFortune = LootEntry.of('twilightforest:raw_osmium')
      .applyOreBonus('minecraft:fortune')
      .when((c) => c.matchMainHand(ItemFilter.hasEnchantment('minecraft:fortune')));
  
    const osmiumWhenSilkTouch = LootEntry.of('twilightforest:osmium_ore')
      .when((c) => c.matchMainHand(ItemFilter.hasEnchantment('minecraft:silk_touch')));
  
    const osmiumDefaultDrop = 'twilightforest:raw_osmium';
  
    event
      .addBlockLootModifier('twilightforest:osmium_ore')
      .removeLoot(Ingredient.all)
      .addAlternativesLoot(osmiumWhenFortune, osmiumWhenSilkTouch, osmiumDefaultDrop);
  
    const witchWhenFortune = LootEntry.of('hexerei:raw_witch_ingot')
      .applyOreBonus('minecraft:fortune')
      .when((c) => c.matchMainHand(ItemFilter.hasEnchantment('minecraft:fortune')));
  
    const witchWhenSilkTouch = LootEntry.of('hexerei:witch_ore')
      .when((c) => c.matchMainHand(ItemFilter.hasEnchantment('minecraft:silk_touch')));
  
    const witchDefaultDrop = 'hexerei:raw_witch_ingot';
  
    event
      .addBlockLootModifier('hexerei:witch_ore')
      .removeLoot(Ingredient.all)
      .addAlternativesLoot(witchWhenFortune, witchWhenSilkTouch, witchDefaultDrop);
  });
  