ServerEvents.recipes((event) => {
  const prefix = 'tm4:hexerei/shaped/';
  const prefixs = 'tm4:sorcerium/shaped/';
  const recipes = [
    { // Ведьминский котёл
      output: 'hexerei:mixing_cauldron', 
      pattern: [
        'A A', 
        'BDB', 
        'CEC'
        ],
      key: {
        A: 'minecraft:glowstone_dust', 
        B: 'twilightforest:ironwood_ingot',
        C: 'naturesaura:infused_iron',
        D: 'minecraft:cauldron',
        E: 'hexerei:mahogany_chest'
      },
      id: `${prefix}mixing_cauldron`
    },
    { // Шляпа ведьмы
      output: 'hexerei:witch_helmet', 
      pattern: [
        'ABA', 
        'A A', 
        '   '
        ],
      key: {
        A: 'hexerei:infused_fabric', 
        B: 'twilightforest:raven_feather'
      },
      id: `${prefix}witch_helmet`
    },
    { // Мантия ведьмы
      output: 'hexerei:witch_chestplate', 
      pattern: [
        'A A', 
        'ABA', 
        'AAA'
        ],
      key: {
        A: 'hexerei:infused_fabric', 
        B: 'twilightforest:raven_feather'
      },
      id: `${prefix}witch_chestplate`
    },
    {
      output: 'hexerei:witch_boots', 
      pattern: [
        '   ', 
        'A A', 
        'ABA'
        ],
      key: {
        A: 'hexerei:infused_fabric', 
        B: 'twilightforest:raven_feather'
      },
      id: `${prefix}witch_boots`
    },
    { // Лозаходный прут
      output: 'hexerei:dowsing_rod', 
      pattern: [
        ' B ', 
        'BAB', 
        'C C'
        ],
      key: {
        A: 'naturesaura:gold_leaf', 
        B: 'naturesaura:ancient_leaves',
        C: 'naturesaura:ancient_stick'
      },
      id: `${prefix}dowsing_rod`
    },
    { // Villeger Staff
      output: 'sorcerium:villager_staff', 
      pattern: [
        ' BC', 
        ' AB', 
        'A  '
        ],
      key: {
        A: 'minecraft:stick', 
        B: 'sorcerium:tissue_bandage',
        C: 'minecraft:emerald'
      },
      id: `${prefixs}villager_staff`
    },
  ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});