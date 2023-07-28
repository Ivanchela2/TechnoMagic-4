ServerEvents.recipes(e => {
  const prefix = 'tm4:create/mechanical_crafting/';

  e.recipes.create.mechanical_crafting('hexerei:mixing_cauldron', [
    'IAIAI',
    'BBSBB',
    'VVDVV',
    'GGGGG',
  ], {
    A: 'minecraft:glowstone_dust',
    B: 'twilightforest:ironwood_ingot',
    S: 'minecraft:cauldron',
    V: 'naturesaura:infused_iron',
    D: 'hexerei:mahogany_chest',
    G: 'create:andesite_alloy',
    I: 'minecraft:air',
  }).id(`${prefix}mixing_cauldron`);

  e.recipes.create.mechanical_crafting('sorcerium:magic_sphere', [
    'ABA',
    'BSB',
    'ABA',
  ], {
    A: 'sorcerium:charged_mana_prism',
    B: 'sorcerium:black_marble',
    S: 'sorcerium:mana_pearl',
  }).id(`${prefix}magic_sphere`);

  e.recipes.create.mechanical_crafting('hexerei:crow_flute', [
    '  A',
    'BA ',
    'AB ',
  ], {
    A: 'hexerei:mahogany_planks',
    B: 'hexerei:reven_cloth',
  }).id(`${prefix}crow_flute`);

  e.recipes.create.mechanical_crafting('hexerei:warhammer', [
    'AAAAA',
    'ABBBA',
    'AAAAA',
    '  D  ',
    ' CDC ',
    ' CCC ',
  ], {
    A: 'createbigcannons:cast_iron_ingot',
    B: 'hexerei:mix_of_ingot_combinations',
    C: 'hexerei:infused_fabric',
    D: 'hexerei:wooden_rod',
  }).id(`${prefix}warhammer`);

  e.recipes.create.mechanical_crafting('hexerei:witch_hammer', [
    'AAAAA',
    'ABCBA',
    'AAAAA',
    '  D  ',
    '  D  ',
    '  D  ',
  ], {
    A: 'hexerei:magical_steel',
    B: 'hexerei:witch_ingot_block',
    C: 'hexerei:warhammer',
    D: 'hexerei:witch_rod',
  }).id(`${prefix}witch_hammer`);
});
