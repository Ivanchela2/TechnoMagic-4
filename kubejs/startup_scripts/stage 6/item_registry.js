StartupEvents.registry('item', event => {
    // Gribony
    event.create('chemlib:gribony').displayName('§4§lГрибоний').tooltip('§bGb (21682)').tooltip('§7Переходные Металлы').group('chemlib.elements');
    event.create('chemlib:pre_gribony').displayName('§5§lПре-Грибоний').tooltip('§bPGb (10841)').tooltip('§7Переходные Металлы').group('chemlib.elements');
    event.create('chemlib:unstable_gribony').displayName('§e§lНестабильный Грибоний').tooltip('§7Безопасное вещество').group('chemlib.elements');
    
    event.create('chemlib:gribony_ingot').displayName('§4§lСлиток Грибония').tooltip('§bGb (21682)').tooltip('§7Переходные Металлы').group('chemlib.metals');
    event.create('chemlib:pre_gribony_ingot').displayName('§5§lСлиток Пре-Грибония').tooltip('§bPGb (10841)').tooltip('§7Переходные Металлы').group('chemlib.metals');
    event.create('chemlib:unstable_gribony_ingot').displayName('§e§lСлиток Нестабильного Грибония').tooltip('§7Безопасное вещество').group('chemlib.metals');
    
    event.create('chemlib:gribony_dust').displayName('§4§lГрибониевая пыль').tooltip('§bGb (21682)').tooltip('§7Переходные Металлы').group('chemlib.metals');
    event.create('chemlib:pre_gribony_dust').displayName('§5§lПре-Грибониевая пыль').tooltip('§bPGb (10841)').tooltip('§7Переходные Металлы').group('chemlib.metals');
    event.create('chemlib:unstable_gribony_dust').displayName('§e§lНестабильная Грибониевая пыль').tooltip('§7Безопасное вещество').group('chemlib.metals');
    
    // elements
    event.create('chemlib:industrial_unstable_gribony').displayName('§8§lПромышленный нестабильный Грибоний').tooltip('§7Опасное вещество').group('chemlib.elements');

    event.create('chemlib:strange_mixture').displayName('§lСтранная смесь').tooltip('§7Пахнет слабостью').glow(true);
    event.create('chemlib:stabilizing_element').displayName('§3Стабилизирующий элемент').tooltip('§7Очень сильный стабилизатор').group('chemlib.elements').glow(true);
    event.create('chemlib:destabilizing_element').displayName('§9Дестабилизирующий элемент').tooltip('§7Очень сильный дестабилизатор').group('chemlib.elements').glow(true);
    
    event.create('chemlib:cosmic_elements_mixture').displayName('§lСмесь других планет').glow(true);
    event.create('chemlib:cosmic_mixture').displayName('§eКосмическая смесь').glow(true);
    event.create('chemlib:cosmic_element').displayName('§eКосмический элемент').tooltip('§7Пустота в ваших руках').group('chemlib.elements');
   
    event.create('chemlib:neutronium_element').displayName('§bНейтрониевый элемент').group('chemlib.elements');
    event.create('chemlib:infinity_element').displayName('§cБесконечный элемент').group('chemlib.elements');
    
    event.create('chemlib:all_reactive_non-metals_element').displayName('§oМульти реактивный неметалл')
        .tooltip('§bМульти Хим. номер: (M87)')
        .tooltip('§7Все реактивные неметаллы в одном!')
        .group('chemlib.elements');
    event.create('chemlib:all_alkali_metals_element').displayName('§oМульти щелочной металл')
        .tooltip('§bМульти Хим. номер: (M212)')
        .tooltip('§7Все щелочные металлы в одном!')
        .group('chemlib.elements');
    event.create('chemlib:all_alkaline_earth_metals_element').displayName('§oМульти щелочно-земельный металл')
        .tooltip('§bМульти Хим. номер: (M218)')
        .tooltip('§7Все щелочно-земельные металлы в одном!')
        .group('chemlib.elements');
    event.create('chemlib:all_transition_metals_element').displayName('§oМульти переходной металл')
        .tooltip('§bМульти Хим. номер: (M1094)')
        .tooltip('§7Все переходные металлы в одном!')
        .group('chemlib.elements');
    event.create('chemlib:all_post-transition_metals_element').displayName('§oМульти постпереходной металл')
        .tooltip('§bМульти Хим. номер: (M473)')
        .tooltip('§7Все постпереходные металлы в одном!')
        .group('chemlib.elements');
    event.create('chemlib:all_unknown_properties_element').displayName('§oМульти элемент с неизвестными свойствами')
        .tooltip('§bМульти Хим. номер: (M1135)')
        .tooltip('§7Все элементы с неиз. свойствами в одном!')
        .group('chemlib.elements');
    event.create('chemlib:all_metalloids_element').displayName('§oМульти металоид')
        .tooltip('§bМульти Хим. номер: (M187)')
        .tooltip('§7Все металоиды в одном!')
        .group('chemlib.elements');
    event.create('chemlib:all_halogens_element').displayName('§oМульти галоген')
        .tooltip('§bМульти Хим. номер: (M199)')
        .tooltip('§7Все галогены в одном!')
        .group('chemlib.elements');
    event.create('chemlib:all_noble_gases_element').displayName('§oМульти благородный газ')
        .tooltip('§bМульти Хим. номер: (M206)')
        .tooltip('§7Все благородные газы в одном!')
        .group('chemlib.elements');
    event.create('chemlib:all_lanthanides_element').displayName('§oМульти лантанид')
        .tooltip('§bМульти Хим. номер: (M960)')
        .tooltip('§7Все лантаниды в одном!')
        .group('chemlib.elements');
    event.create('chemlib:all_actinides_element').displayName('§oМульти актинид')
        .tooltip('§bМульти Хим. номер: (M1440)')
        .tooltip('§7Все актиниды в одном!')
        .group('chemlib.elements');
    event.create('chemlib:all_radioactive_element').displayName('§oМульти радиоактивный элемент')
        .tooltip('§bМульти Хим. номер: (M3639)')
        .tooltip('§7Все радиоактивные элементы в одном!')
        .group('chemlib.elements');

    // other - chemlib (for stage 6)
    event.create('chemlib:gribony_catalyst').displayName('§4Грибониевый катализатор');  
    event.create('chemlib:infinity_gribony_ingot').displayName('§4§lБесконечный Грибониевый слиток');  
    event.create('chemlib:time_ingot').displayName('§e§lСлиток Времени');  
    event.create('chemlib:infinity_neutronium_ingot').displayName('§b§lБесконечный нейтрониевый слиток');  

    // biggerreactors + ad_astra
    event.create('gribtweaks:reinforced_ludicrite_ingot').displayName('Усиленный лудикритовый слиток');   
    event.create('gribtweaks:protasteel_ingot').displayName('Прота-стальной слиток');

    // items used throughout the gameplay (stage: 1, 2 ... 7, end game)
    // create
    event.create('gribtweaks:mechanical_ingot').displayName('Механический слиток');  
    event.create('gribtweaks:polished_amethyst_shard').displayName('Полированный аметист');  
    event.create('gribtweaks:polished_antimatter_crystal').displayName('Полированный кристалл антиматерии');  
    event.create('gribtweaks:polished_arcane_crystal').displayName('Полированный мистический кристалл');  
    event.create('gribtweaks:polished_certus_quartz_crystal').displayName('Полированный истинный кварц');  
    event.create('gribtweaks:polished_mana_quartz').displayName('Полированный мана кварц');  
    event.create('gribtweaks:polished_quartz').displayName('Полированный кварц');  
    // other
    event.create('gribtweaks:nature_core').displayName('§aЯдро Природы');  
    event.create('gribtweaks:time_core').displayName('§eЯдро Времени').glow(true);  
    event.create('gribtweaks:oblivion_powder').displayName('Пыль Забвения'); 
    event.create('gribtweaks:compressed_phantom_membrane').displayName('Сжатая мембрана фантома'); 
    event.create('gribtweaks:fiery_membrane').displayName('Огненная мембрана'); 
    event.create('gribtweaks:steel_membrane').displayName('Стальная мембрана'); 
    event.create('gribtweaks:sculk_membrane').displayName('Скалк-мембрана'); 
    event.create('gribtweaks:diamond_membrane').displayName('Алмазная мембрана'); 
    event.create('gribtweaks:corrupt_upgraded_netherite_eye').displayName('§bПорченое незеритовое око'); 
    event.create('gribtweaks:gold_upgraded_netherite_eye').displayName('§bЗолотое незеритовое око'); 
    event.create('gribtweaks:fire_upgraded_netherite_eye').displayName('§bОгненное незеритовое око'); 
    event.create('gribtweaks:feather_upgraded_netherite_eye').displayName('§bПерьевое незеритовое око'); 
    event.create('gribtweaks:ender_upgraded_netherite_eye').displayName('§bЭндер-незеритовое око'); 
    event.create('gribtweaks:echo_upgraded_netherite_eye').displayName('§bСкалк-незеритовое око'); 
    event.create('gribtweaks:water_upgraded_netherite_eye').displayName('§bВодное незеритовое око'); 
    event.create('gribtweaks:wither_upgraded_netherite_eye').displayName('§bВизер-незеритовое око'); 
    event.create('gribtweaks:poison_upgraded_netherite_eye').displayName('§bЯдовитое незеритовое око'); 
    event.create('gribtweaks:phantom_upgraded_netherite_eye').displayName('§bФантомное незеритовое око'); 
    event.create('gribtweaks:ultimate_upgraded_netherite_eye').displayName('§bМаксимальное незеритовое око'); 
    event.create('gribtweaks:mechanical_eye').displayName('§1Механическое око'); 
    event.create('gribtweaks:electronic_eye').displayName('§1Электронное око'); 
    event.create('gribtweaks:tained_gold_clock').displayName('Испороченные золотые часы'); 
    event.create('gribtweaks:spirit_attuned_clock').displayName('Часы Духов'); 
    event.create('gribtweaks:andesite_alloy_clock').displayName('Андезитовые часы'); 
    event.create('gribtweaks:sandstone_clock').displayName('Часы из песчаника'); 
    event.create('gribtweaks:oak_clock').displayName('Дубовые часы'); 
    event.create('gribtweaks:red_mushroom_clock').displayName('§4Грибные часы'); 
    event.create('gribtweaks:sculk_clock').displayName('Скалк-Часы'); 
    event.create('gribtweaks:infinity_clock').displayName('§cБесконечные часы'); 
    event.create('gribtweaks:bottle').displayName('Бутылка'); 
    event.create('gribtweaks:oblivion_ingot').displayName('§aСлиток Забвения'); 
    event.create('gribtweaks:oblivion_liquid').displayName('§aЖидкость Забвения'); 
    event.create('gribtweaks:void_liquid').displayName('Пустотная жидкость'); 
    event.create('gribtweaks:component_ingot').displayName('Компонентный слиток'); 
    event.create('gribtweaks:incomplete_component_ingot','create:sequenced_assembly').displayName('Незаконченный компонентный слиток')
    event.create('gribtweaks:component_base').displayName('Основа для компонента'); 
    event.create('gribtweaks:sculk_component').displayName('Скалк-компонент'); 
    event.create('gribtweaks:sculk_advanced_component').displayName('Продвинутый скалк-компонент'); 
    event.create('gribtweaks:diamond_component').displayName('Алмазный компонент'); 
    event.create('gribtweaks:advanced_diamond_component').displayName('Продвинутый алмазный компонент'); 
    event.create('gribtweaks:antimatter_component').displayName('Компонент из антиматерии'); 
    event.create('gribtweaks:advanced_antimatter_component').displayName('Продвинутый компонент из антиматерии'); 
    event.create('gribtweaks:oblivion_component').displayName('§aКомпонент Забвения'); 
    event.create('gribtweaks:advanced_oblivion_component').displayName('§aПродвинутый компонент Забвения'); 
    event.create('gribtweaks:empty_rune').displayName('§7Пустая Руна'); 
    event.create('gribtweaks:air_rune').displayName('§bРуна Воздуха'); 
    event.create('gribtweaks:earth_rune').displayName('§2Руна Земли'); 
    event.create('gribtweaks:forest_rune').displayName('§aРуна Леса'); 
    event.create('gribtweaks:fire_rune').displayName('§cРуна Огня'); 
    event.create('gribtweaks:magma_rune').displayName('§cМагматическая Руна'); 
    event.create('gribtweaks:void_rune').displayName('§8Руна Пустоты'); 
    event.create('gribtweaks:water_rune').displayName('§9Руна Воды'); 
    event.create('gribtweaks:earth_fragment').displayName('§2Фрагмент Земли').tooltip('§7Можно получить с блока фрагментов'); 
    event.create('gribtweaks:air_fragment').displayName('§bФрагмент Воздуха').tooltip('§7Можно получить с блока фрагментов'); 
    event.create('gribtweaks:fire_fragment').displayName('§cФрагмент Огня').tooltip('§7Можно получить с блока фрагментов'); 
    event.create('gribtweaks:void_fragment').displayName('§8Фрагмент Пустоты').tooltip('§7Можно получить с блока фрагментов'); 
    event.create('gribtweaks:water_fragment').displayName('§9Фрагмент Воды').tooltip('§7Можно получить с блока фрагментов'); 
    event.create('gribtweaks:elemental_fragment').displayName('§eЭлементальный фрагмент').tooltip('§7Можно получить с блока фрагментов'); 
    event.create('gribtweaks:water_ingot').displayName('§9Водный слиток'); 
    event.create('gribtweaks:void_ingot').displayName('§8Пустотный слиток'); 
    event.create('gribtweaks:sky_ingot').displayName('§bВоздушный слиток'); 
    event.create('gribtweaks:hell_ingot').displayName('§cАдский слиток'); 
    event.create('gribtweaks:forest_ingot').displayName('§aЛесной слиток'); 
    event.create('gribtweaks:elemental_ingot').displayName('§eЭлементальный слиток'); 
    event.create('gribtweaks:ametrine_ingot').displayName('§5Аметриновый слиток'); 
    event.create('gribtweaks:ametrine_ore_crystal').displayName('§5Аметриновый рудный кристалл').tooltip('§7Руда хранит в себе тайны'); 
    event.create('gribtweaks:ametrine_geode').displayName('§dАметриновая жеода'); 
    event.create('gribtweaks:ametrine_shard').displayName('§dАметриновый осколок'); 
    event.create('gribtweaks:ametrine_nugget').displayName('§dАметриновый кусочек'); 
    event.create('gribtweaks:admiration_liquid').displayName('Жидкость Восхищения'); 
    event.create('gribtweaks:death_liquid').displayName('Жидкость Смерти'); 
    event.create('gribtweaks:anxiety_liquid').displayName('Жидкость Тревоги'); 
    event.create('gribtweaks:admiration_component').displayName('Компонент Восхищения'); 
    event.create('gribtweaks:advanced_admiration_component').displayName('Продвинутый компонент Восхищения'); 
    event.create('gribtweaks:anxiety_component').displayName('Компонент Тревоги'); 
    event.create('gribtweaks:advanced_anxiety_component').displayName('Продвинутый компонент Тревоги'); 
    event.create('gribtweaks:death_component').displayName('Компонент Смерти'); 
    event.create('gribtweaks:advanced_death_component').displayName('Продвинутый компонент Смерти'); 
    // stage 1
    event.create('gribtweaks:stone_stick').displayName('Каменная палка');  
    event.create('gribtweaks:iron_stick').displayName('Железная палка');  
    // stage 2
    event.create('gribtweaks:tained_gold_leaf').displayName('Испорченный золотой лист');  
    event.create('gribtweaks:tained_gold_powder').displayName('Испорченный золотой порошок');  
    // stage 4
    event.create('gribtweaks:spirit_attuned_ingot').displayName('Слиток Духов');  
    // stage 5
    event.create('gribtweaks:quantum_ingot').displayName('Квантовый слиток');  
    event.create('gribtweaks:quantum_circuit').displayName('Квантовая электросхема');  
    event.create('gribtweaks:cable_coil').displayName('Моток проводов');  
    event.create('gribtweaks:carbon_rod').displayName('Карбоновый стержень');  
    event.create('gribtweaks:hephaestus_ingot').displayName('Слиток Гефеста');  
    event.create('gribtweaks:astral_ingot').displayName('§dАстральный слиток');  
    event.create('gribtweaks:chunk_of_etherium').displayName('Кусочек Эфира');  
    event.create('gribtweaks:tin_lead_bronze_alloy').displayName('Баббит'); 
    event.create('gribtweaks:endrium_uranium_iridium_alloy').displayName('Нео-сплав'); 
    event.create('gribtweaks:copper_aluminium_gold_alloy').displayName('Северное золото'); 
    event.create('gribtweaks:super_alloy').displayName('Супер-сплав'); 
    event.create('gribtweaks:advanced_processor_press').displayName('Улучшенный пресс для высекателя'); 
    event.create('gribtweaks:printed_babbitt_alloy_processor').displayName('Печатная баббитовая схема'); 
    event.create('gribtweaks:printed_super_alloy_processor').displayName('Печатная супер-схема'); 
    event.create('gribtweaks:printed_nordic_alloy_processor').displayName('Печатная схема из северного золота'); 
    event.create('gribtweaks:printed_inadequate_alloy_processor').displayName('Печатная нео-схема'); 
    event.create('gribtweaks:babbitt_alloy_processor').displayName('Баббитовый процессор'); 
    event.create('gribtweaks:super_alloy_processor').displayName('Супер-процессор'); 
    event.create('gribtweaks:nordic_alloy_processor').displayName('Процессор из северного золота'); 
    event.create('gribtweaks:inadequate_alloy_processor').displayName('Нео-процессор'); 
    event.create('gribtweaks:photoniy').displayName('§1● §9Фотон §1●'); 
    event.create('gribtweaks:photoniy_ingot').displayName('§1● §9Фотонный слиток §1●'); 
    event.create('gribtweaks:spectral_circuit').displayName('Спектральная электросхема'); 
    event.create('gribtweaks:photoniy_circuit').displayName('§1● §9Фотонная электросхема §1●'); 
    event.create('gribtweaks:dense_uranium_plate').displayName('Плотная урановая пластина'); 
    event.create('gribtweaks:dense_tin_plate').displayName('Плотная оловянная пластина'); 
    event.create('gribtweaks:dense_lead_plate').displayName('Плотная свинцовая пластина'); 
    event.create('gribtweaks:dense_iron_plate').displayName('Плотная железная пластина'); 
    event.create('gribtweaks:dense_iridium_plate').displayName('Плотная иридиевая пластина'); 
    event.create('gribtweaks:dense_gold_plate').displayName('Плотная золотая пластина'); 
    event.create('gribtweaks:dense_enderium_plate').displayName('Плотная эндериумная пластина'); 
    event.create('gribtweaks:dense_carbon_plate').displayName('Плотная карбоновая пластина'); 
    event.create('gribtweaks:dense_bronze_plate').displayName('Плотная бронзовая пластина'); 
    event.create('gribtweaks:dense_aluminum_plate').displayName('Плотная алюминиевая пластина'); 
    event.create('gribtweaks:proton').displayName('§dПротон'); 
    event.create('gribtweaks:proton_shard').displayName('§dКусочек протона'); 
    event.create('gribtweaks:spectral_ingot').displayName('Спектральный слиток'); 
    event.create('gribtweaks:spectral_plate').displayName('Спектральная пластина'); 
    event.create('gribtweaks:dense_spectral_plate').displayName('Плотная спектральная пластина'); 
    event.create('gribtweaks:mechanical_circuit').displayName('Механическая электросхема'); 
    event.create('gribtweaks:sculk_circuit').displayName('Скалк-электросхема'); 
    event.create('gribtweaks:sculk_plate').displayName('Скалк-пластина'); 
    event.create('gribtweaks:dense_sculk_plate').displayName('Плотная скалк-пластина'); 
    event.create('gribtweaks:diamond_plate').displayName('Алмазная пластина'); 
    event.create('gribtweaks:dense_diamond_plate').displayName('Плотная алмазная пластина'); 
    event.create('gribtweaks:iridium_ore').displayName('§bИридиевая руда'); 
    event.create('gribtweaks:iridium_shard').displayName('§bКусочек иридиевой руды'); 
    event.create('gribtweaks:antimatter_l1').displayName('Антиматерия -L1-'); 
    event.create('gribtweaks:antimatter_l2').displayName('Антиматерия -L2-'); 
    event.create('gribtweaks:antimatter_l3').displayName('Антиматерия -L3-'); 
    event.create('gribtweaks:antimatter_l4').displayName('Антиматерия -L4-'); 
    event.create('gribtweaks:antimatter_ingot').displayName('Слиток антиматерии'); 
    event.create('gribtweaks:antimatter_plate').displayName('Пластина из антиматерии'); 
    event.create('gribtweaks:dense_antimatter_plate').displayName('Плотная пластина из антиматерии'); 
    event.create('gribtweaks:oblivion_plate').displayName('§aПластина Забвения'); 
    event.create('gribtweaks:dense_oblivion_plate').displayName('§aПлотная пластина Забвения'); 
    event.create('gribtweaks:advanced_antimatter').displayName('Продвинутая антиматерия'); 
    // stage 6
    event.create('gribtweaks:angel_ingot').displayName('§bАнгельский слиток');  
    event.create('gribtweaks:cosmic_scrap').displayName('§eКосмический лом');  
    event.create('gribtweaks:gribony_scrap').displayName('§4§lГрибониевый лом');  
    // stage 7
    event.create('gribtweaks:rune_admiration').displayName('Руна восхищения');  
    event.create('gribtweaks:rune_night').displayName('Руна ночи');  
    event.create('gribtweaks:rune_sun').displayName('Руна Солнца');  
    // end game
    event.create('gribtweaks:infinity_catalyst_pile').displayName('§dПылинка катализатора Бесконечности');  
    event.create('gribtweaks:ultimate_ingot').displayName('§bМаксимальный слиток');  
    event.create('gribtweaks:ultimate_nugget').displayName('§bМаксимальный кусочек'); 
    event.create('gribtweaks:infinity_antimatter').displayName('§cБесконечная антиматерия'); 
    event.create('gribtweaks:infinity_liquid').displayName('§cБесконечная жидкость'); 
    event.create('gribtweaks:infinity_component').displayName('§cБесконечный компонент'); 
    event.create('gribtweaks:advanced_infinity_component').displayName('§cПродвинутый Бесконечный компонент'); 
    event.create('gribtweaks:ultimate_component').displayName('§bМаксимальный компонент'); 
    event.create('gribtweaks:advanced_ultimate_component').displayName('§bПродвинутый максимальный компонент'); 
    event.create('gribtweaks:ultimate_component_base').displayName('§bМаксимальная основа для компонента'); 
    event.create('gribtweaks:gribony_component').displayName('§4§lГрибониевый компонент'); 
    event.create('gribtweaks:advanced_gribony_component').displayName('§4§lПродвинутый Грибониевый компонент'); 
    
    event.create('gribtweaks:combined_jelly').displayName('§bКомбинированное желе');
    event.create('gribtweaks:neutronium_catalyst').displayName('§0◂ §cНейтронный катализатор §0▸');
    event.create('gribtweaks:upgraded_photovoltaic_cell').displayName('§bМодифицированный фотоэлектрический элемент');
    event.create('gribtweaks:energium_dust').displayName('Энергетическая пыль');
})  