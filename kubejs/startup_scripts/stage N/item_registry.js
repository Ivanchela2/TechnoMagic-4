StartupEvents.registry('item', event => {
    const items = {
        // stage 1
        'unforgotten_soul' : 'Незабвенная душа',
        'buffalo_hide_fiber': 'Волокно шкуры бизона',
        'buffalo_hide_rope': 'Веревка из шкуры бизона',
        'baykok_bone': 'Кость Байкока',

        // stage 5
        'creative_honeycomb' : 'Творческая сота',
        'infinity_honeycomb' : 'Сота бесконечности',
        'neutronium_honeycomb' : 'Сота нейтрония',

        // stage 7
        'reinforced_rocket_fin':'§6Reinforced Rocket Fin',
        'reinforced_rocket_nose_cone':'§6Reinforced Rocket Nose Cone',
        'advanced_rocket_fin':'§5Advanced Rocket Fin',
        'advanced_rocket_nose_cone':'§5Advanced Rocket Nose Cone',
        'ultra_rocket_fin':'§cUltra Rocket Fin',
        'ultra_rocket_nose_cone':'§cUltra Rocket Nose Cone',
        'incomplete_reinforced_rocket_fin':'Incomplete Reinforced Rocket Fin',
        'incomplete_advanced_rocket_fin':'Incomplete Advanced Rocket Fin',
        'incomplete_ultra_rocket_fin': 'Incomplete Ultra Rocket Fin',
        'infinity_petal': '§dInfinity Petal',
        'gaia_catalyst': '§7Gaia Catalyst',
        'maximum_catalyst': '§bMaximum Catalyst',
        'gaia_punishment': '§3Gaia Punishment',
        'terrasteel_potency': '§aTerrasteel Potency',
        'elves_endowment':'§dElves Endowment',
        'incomplete_terra_pick':'Incomplete Terra Shatterer',
        'incomplete_terra_axe':'Incomplete Terra Truncator',
        'incomplete_terra_sword':'Incomplete Terra Sword',
        'rune_base':'§dRune Base',
        'rune_suspension':'§dRune Suspension',
        'botany_catalyst':'§dBotany Catalyst',
        'steam_power_generator':'Steam Power Generator',
        'specific_rune_base':'§dSpecific Rune Base',
        'basic_runic_stone':'§9Basic Runic Stone',
        'purple_piece_of_specific_rune':'§dPurple Piece of Specific Rune',
        'blue_piece_of_specific_rune':'§bBlue Piece of Specific Rune'
    };

    for (const [id,dName] of Object.entries(items)) {

        let name;
        if (!id.includes(':')) {
            name = `gribtweaks:${id}`
        } else name = id;
        
        event.create(name).displayName(dName);
    };

    const create = (id, dName) => event.create(id).displayName(dName);

    event.create('gribtweaks:baykok_bone_pickaxe', 'pickaxe')
        .displayName('Кирка из кости Байкока')
        .tier('diamond');

    // create('gribtweaks:watering_can', 'Лейка').maxStackSize(1);
    // create('gribtweaks:advanced_watering_can', 'Улучшенная лейка').maxStackSize(1);
    // create('gribtweaks:ultimate_watering_can', 'Совершенная лейка').maxStackSize(1);

    create('chemlib:terrasteel_element','§aTerrasteel')
        .group('chemlib.elements').tooltip('§bTr (500)').tooltip('§7Transition Metals')
    create('chemlib:gaia_element','§dGaia')
        .group('chemlib.elements').tooltip('§bGi (320)').tooltip('§7Transition Metals')
    create('chemlib:mana_element','§9Mana')
        .group('chemlib.elements').tooltip('§bMa (3000)').tooltip('§7Transition Metals')
    create('chemlib:botany_compound','§5Botany Compound')
        .group('chemlib.compounds').tooltip('§3Ma₂Tr₂Gi')

    // food
    event.create('gribtweaks:quantum_burger').displayName('Квантовый бургер').food(food => {
		food
    		.hunger(14)
    		.saturation(2.5)
      		.effect('speed', 4500, 1, 1)
      		.effect('strength', 4500, 0, 1)
      		.effect('night_vision', 4500, 0, 1)
      		.effect('resistance', 4500, 1, 1)
      		.alwaysEdible()
      		.meat()
	})
    event.create('gribtweaks:astral_burger').displayName('§dАстральный бургер').food(food => {
		food
    		.hunger(10)
    		.saturation(1.5)
      		.effect('haste', 2500, 0, 1)
      		.effect('night_vision', 2500, 0, 1)
      		.effect('water_breathing', 2500, 0, 1)
      		.effect('regeneration', 700, 1, 1)
      		.alwaysEdible()
      		.meat()
	})    
});