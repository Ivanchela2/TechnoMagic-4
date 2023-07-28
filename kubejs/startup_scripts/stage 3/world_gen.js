WorldgenEvents.add((event) => {
  event.addOre((ore) => {
    ore.id = 'twilightforest:osmium_ore';
    ore.biomes = /^twilightforest:.*/; // <--Вписать сюда биом острова в таком формате "minecraft:biome" (убрав при этом все звездочки, точки и слешы)
    ore.addTarget('minecraft:stone', 'twilightforest:osmium_ore');
    ore.addTarget('minecraft:deepslate', 'twilightforest:osmium_ore');
    ore.size(12);
    ore.count(12);
    ore.squared();
    ore.uniformHeight(-32, 0);
  });

  event.addOre((ore) => {
    ore.id = 'hexerei:witch_ore';
    ore.biomes = /^twilightforest:.*/; // <--Вписать сюда биом острова в таком формате "minecraft:biome" (убрав при этом все звездочки, точки и слешы)
    ore.addTarget('minecraft:stone', 'hexerei:witch_ore');
    ore.addTarget('minecraft:deepslate', 'hexerei:witch_ore');
    ore.size(4);
    ore.count(4);
    ore.squared();
    ore.uniformHeight(-16, 4);
  });
});
