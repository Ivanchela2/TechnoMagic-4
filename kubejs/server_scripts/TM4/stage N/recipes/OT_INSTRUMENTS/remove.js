ServerEvents.recipes((event) => {
    event.remove([
        { output: 'minecraft:iron_sword' },
        { output: 'minecraft:iron_axe' },
        { output: 'minecraft:iron_pickaxe' },
        { output: 'minecraft:iron_hoe' },
        { output: 'minecraft:iron_shovel' },

        { output: 'minecraft:diamond_sword' },
        { output: 'minecraft:diamond_axe' },
        { output: 'minecraft:diamond_pickaxe' },
        { output: 'minecraft:diamond_hoe' },
        { output: 'minecraft:diamond_shovel' },

        { output: 'ae2:certus_quartz_sword' },
        { output: 'ae2:certus_quartz_axe' },
        { output: 'ae2:certus_quartz_pickaxe' },
        { output: 'ae2:certus_quartz_hoe' },
        { output: 'ae2:certus_quartz_shovel' },

        { output: 'ae2:nether_quartz_sword' },
        { output: 'ae2:nether_quartz_axe' },
        { output: 'ae2:nether_quartz_pickaxe' },
        { output: 'ae2:nether_quartz_hoe' },
        { output: 'ae2:nether_quartz_shovel' },

        { output: 'occultism:iesnium_pickaxe' },
    ]);
});