LootJS.modifiers(event => {
    event.addBlockLootModifier('gribtweaks:ametrine_ore')
    .removeLoot('gribtweaks:ametrine_ore')
    .addLoot('gribtweaks:ametrine_geode')
    .applyOreBonus('minecraft:fortune')
    .addAlternativesLoot(
        LootEntry.of('gribtweaks:ametrine_ore_crystal').when((c) => c.randomChance(0.03))
    )
    .randomChanceWithEnchantment('minecraft:silk_touch', [0, 1])
    .removeLoot(Ingredient.all)
    .addLoot('gribtweaks:ametrine_ore')

    event.addBlockLootModifier('gribtweaks:elemental_fragments_block')
    .removeLoot('gribtweaks:elemental_fragments_block')
    .addWeightedLoot(
        [1, 6],
    [
        Item.of('gribtweaks:void_fragment').withChance(75), 
        Item.of('gribtweaks:air_fragment').withChance(75), 
        Item.of('gribtweaks:fire_fragment').withChance(75), 
        Item.of('gribtweaks:water_fragment').withChance(75), 
        Item.of('gribtweaks:earth_fragment').withChance(75), 
        Item.of('gribtweaks:elemental_fragment').withChance(20)
    ]
    )
    .randomChanceWithEnchantment('minecraft:silk_touch', [0, 1])
    .removeLoot(Ingredient.all)
    .addLoot('gribtweaks:elemental_fragments_block')

    event.addBlockLootModifier('gribtweaks:blaze_cell')
    .removeLoot('gribtweaks:blaze_cell')
})