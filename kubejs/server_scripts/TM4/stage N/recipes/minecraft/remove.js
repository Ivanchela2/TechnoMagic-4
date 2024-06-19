ServerEvents.recipes((event) => {
    event.remove([
        { output: 'minecraft:crafting_table' },
        { output: 'minecraft:furnace' },
        { output: 'minecraft:campfire' },
        { output: 'minecraft:cauldron' },

        { output: 'quark:blackstone_furnace' },
        { output: 'quark:deepslate_furnace' },
        { output: 'nethersdelight:blackstone_furnace' },
    ]);
});