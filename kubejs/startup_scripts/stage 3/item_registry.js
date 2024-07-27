StartupEvents.registry('item', (e) => {
    e.create('gribtweaks:focus_element').displayName('Фокусирующий элемент');
    e.create('gribtweaks:wet_ingot_combining').displayName('Мокрый комбинированный слиток').tag('forge:ingots').tag('balm:ingots');
    e.create('gribtweaks:dry_ingot_combining').displayName('Комбинированный слиток').tag('forge:ingots').tag('balm:ingots');
    e.create('gribtweaks:piece_of_cloth').displayName('Кусок ткани');
    e.create('gribtweaks:natural_ender_pearl').displayName('Природный жемчуг эндера');
    e.create('gribtweaks:raven_cloth').displayName('Воронья ткань');
    e.create('gribtweaks:wet_raven_cloth').displayName('Мокрая воронья ткань');
    e.create('gribtweaks:mix_of_ingot_combinations').displayName('Комбинированная смесь');
    e.create('gribtweaks:ingot_osmium').displayName('Осмиевый слиток').tag('forge:ingots/osmium').tag('forge:ingots').tag('balm:ingots');
    e.create('gribtweaks:raw_osmium').displayName('Сырой осмий').tag('forge:raw_materials')
    e.create('gribtweaks:nugget_osmium').displayName('Осмиевый самородок').tag('forge:nuggets').tag('balm:nuggets').tag('forge:nuggets/osmium')
    e.create('gribtweaks:witch_ingot').displayName('§5Ведьминский слиток').tag('forge:ingots').tag('balm:ingots');
    e.create('gribtweaks:witch_nugget').displayName('§5Ведьминский самородок').tag('forge:nuggets').tag('balm:nuggets')
    e.create('gribtweaks:raw_witch_ingot').displayName('§5Сырой Ведьминский самородок').tag('forge:raw_materials')
    e.create('gribtweaks:witch_rod').displayName('§5Ведьминский стержень');
    e.create('gribtweaks:witch_sheet').displayName('§5§5Ведьминский лист').tag('forge:plates')
    e.create('gribtweaks:witch_hammer', 'sword').tier('hammer_1').displayName('§5Ведьминский Молот').tooltip('§5Работает как обычный меч');
    e.create('gribtweaks:wooden_rod').displayName('Деревянный стержень');
    e.create('gribtweaks:magical_steel').displayName('§5Магическая сталь').tag('forge:ingots').tag('balm:ingots')
  })
  