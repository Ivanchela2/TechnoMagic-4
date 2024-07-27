LootJS.modifiers(e => {
    const LootTable = (path) => e.addEntityLootModifier(path);

    LootTable('totemic:baykok')
        .removeLoot('bone')
        .addLoot(Item.of('gribtweaks:baykok_bone', 4));
});