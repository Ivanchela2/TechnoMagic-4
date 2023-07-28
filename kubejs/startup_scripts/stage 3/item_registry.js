StartupEvents.registry('item', (e) => {
    e.create('twilightforest:focus_element').displayName('Focus element');
    e.create('hexerei:wet_ingot_combining').displayName('Wet ingot combining').tag('forge:ingots').tag('balm:ingots');
    e.create('hexerei:dry_ingot_combining').displayName('Dry ingot combining').tag('forge:ingots').tag('balm:ingots');
    e.create('sorcerium:tissue_bandage').displayName('Tissue bandage');
    e.create('sorcerium:wet_tissue_bandage').displayName('Wet tissue bandage');
    e.create('sorcerium:piece_of_cloth').displayName('Piece of cloth');
    e.create('naturesaura:natural_ender_pearl').displayName('Natural ender pearl');
    e.create('hexerei:reven_cloth').displayName('Reven Cloth');
    e.create('hexerei:wet_raven_cloth').displayName('Wet Raven cloth');
    e.create('hexerei:mix_of_ingot_combinations').displayName('Mix of ingot combinations');
    e.create('twilightforest:ingot_osmium').displayName('Osmium Ingot').tag('forge:ingots/osmium').tag('forge:ingots').tag('balm:ingots');
    e.create('twilightforest:raw_osmium').displayName('Raw Osmium').tag('forge:raw_materials')
    e.create('twilightforest:nugget_osmium').displayName('Osmium nugget').tag('forge:nuggets').tag('balm:nuggets')
    e.create('hexerei:witch_ingot').displayName('§5Witch Ingot').tag('forge:ingots').tag('balm:ingots');
    e.create('hexerei:witch_nugget').displayName('§5Witch Nugget').tag('forge:nuggets').tag('balm:nuggets')
    e.create('hexerei:raw_witch_ingot').displayName('§5Raw Witch ingot').tag('forge:raw_materials')
    e.create('hexerei:witch_rod').displayName('§5Witch Rod');
    e.create('hexerei:witch_sheet').displayName('§5§5Witch Sheet').tag('forge:plates')
    e.create('hexerei:witch_hammer', 'sword').tier('hammer_1').displayName('§5Witch Hammer').tooltip('§5Работает как обычный меч');
    e.create('hexerei:wooden_rod').displayName('Wooden rod');
    e.create('hexerei:magical_steel').displayName('§5Magical steel').tag('forge:ingots').tag('balm:ingots')
  });
  