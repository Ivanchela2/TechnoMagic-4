WorldgenEvents.add((event) => {
  event.addOre((ore) => {
    ore.id = 'gribtweaks:osmium_ore';
    ore.biomes = /^minecraft:.*/; // <--Вписать сюда биом острова в таком формате "minecraft:biome" (убрав при этом все звездочки, точки и слешы)
    ore.addTarget('#minecraft:stone_ore_replaceables', 'gribtweaks:osmium_ore');
    ore.addTarget('minecraft:deepslate', 'gribtweaks:osmium_ore');
    ore.size(12);
    ore.count(12);
    ore.squared();
    ore.uniformHeight(-32, 0);
  });

  event.addOre((ore) => {
    ore.id = 'gribtweaks:witch_ore';
    ore.biomes = /^minecraft:.*/; // <--Вписать сюда биом острова в таком формате "minecraft:biome" (убрав при этом все звездочки, точки и слешы)
    ore.addTarget('#minecraft:stone_ore_replaceables', 'gribtweaks:witch_ore');
    ore.addTarget('minecraft:deepslate', 'gribtweaks:witch_ore');
    ore.size(4);
    ore.count(4);
    ore.squared();
    ore.uniformHeight(-16, 4);
  });
});
