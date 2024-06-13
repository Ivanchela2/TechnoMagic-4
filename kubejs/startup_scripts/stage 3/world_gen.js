WorldgenEvents.add((event) => {
  event.addOre((ore) => {
    ore.id = 'gribtweaks:osmium_ore';
    ore.biomes = /^minecraft:.*/; // <--Вписать сюда биом острова в таком формате "minecraft:biome" (убрав при этом все звездочки, точки и слешы)
    ore.addTarget('#minecraft:stone_ore_replaceables', 'gribtweaks:osmium_ore');
    ore.size(6);
    ore.count(6);
    ore.squared();
    ore.uniformHeight(0, 26);
  });

  event.addOre((ore) => {
    ore.id = 'gribtweaks:deepslate_osmium_ore';
    ore.biomes = /^minecraft:.*/;
    ore.addTarget('minecraft:deepslate', 'gribtweaks:deepslate_osmium_ore');
    ore.size(6);
    ore.count(6);
    ore.squared();
    ore.uniformHeight(-56, -8);
  });

  event.addOre((ore) => {
    ore.id = 'gribtweaks:witch_ore';
    ore.biomes = /^minecraft:.*/; // <--Вписать сюда биом острова в таком формате "minecraft:biome" (убрав при этом все звездочки, точки и слешы)
    ore.addTarget('#minecraft:stone_ore_replaceables', 'gribtweaks:witch_ore');
    ore.size(4);
    ore.count(4);
    ore.squared();
    ore.uniformHeight(0, 16);
  });
  
    event.addOre((ore) => {
      ore.id = 'gribtweaks:ametrine_ore';
      ore.biomes = /^minecraft:.*/; // <--Вписать сюда биом острова в таком формате "minecraft:biome" (убрав при этом все звездочки, точки и слешы)
      ore.addTarget('minecraft:deepslate', 'gribtweaks:ametrine_ore');
      ore.size(6);
      ore.count(6);
      ore.squared();
      ore.uniformHeight(-56, -8);
  });
});
