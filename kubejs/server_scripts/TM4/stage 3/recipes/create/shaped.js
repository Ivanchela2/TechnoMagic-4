ServerEvents.recipes((event) => {
  const prefix = 'gribtweaks:hexerei/shaped/';
  const recipes = [
    { // Форсунка
      output: 'create:nozzle', 
      pattern: [
        ' B ', 
        'CAC', 
        'BBB'
        ],
      key: {
        A: 'minecraft:white_wool', 
        B: 'create:andesite_alloy',
        C: 'seeds:dry_snowball'
      },
      id: `${prefix}nozzle`
    },
    { // Инженерные очки
      output: 'create:goggles', 
      pattern: [
        ' C ', 
        'BAB', 
        '   '
        ],
      key: {
        A: 'create:golden_sheet', 
        B: 'minecraft:glass',
        C: 'naturesaura:gold_fiber'
      },
      id: `${prefix}goggles`
    },
    { // Пустая горелка всполоха
      output: 'create:empty_blaze_burner', 
      pattern: [
        'DCD', 
        'BAB', 
        'DCD'
        ],
      key: {
        A: 'sorcerium:molten_crystal', 
        B: 'create:iron_sheet',
        C: 'twilightforest:knightmetal_ingot',
        D: 'minecraft:netherrack'
      },
      id: `${prefix}empty_blaze_burner`
    },
    { // Чаша
      output: 'create:basin', 
      pattern: [
        '   ', 
        'B B', 
        'BAB'
        ],
      key: {
        A: 'twilightforest:ironwood_ingot', 
        B: 'create:andesite_alloy'
      },
      id: `${prefix}basin`
    },
    { // Жёлоб
      output: 'create:chute', 
      pattern: [
        ' B ', 
        ' A ', 
        ' B '
        ],
      key: {
        A: 'twilightforest:ironwood_ingot', 
        B: 'create:iron_sheet'
      },
      id: `${prefix}chute`
    },
    { // Механический ремень
      output: 'create:belt_connector', 
      pattern: [
        'BAB', 
        'ABA', 
        '   '
        ],
      key: {
        A: 'hexerei:dried_sage', 
        B: 'minecraft:dried_kelp'
      },
      id: `${prefix}belt_connector`
    },
    { // Водяное колесо
      output: 'create:water_wheel', 
      pattern: [
        'AAA', 
        'CBC', 
        'AAA'
        ],
      key: {
        A: '#minecraft:wooden_slabs', 
        B: 'create:brass_ingot',
        C: 'create:large_cogwheel'
      },
      id: `${prefix}water_wheel`
    },
  ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});