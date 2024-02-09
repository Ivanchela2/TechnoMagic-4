StartupEvents.registry('item', e => {
    const items = {
        'buffalo_hide_fiber': 'Волокно шкуры бизона',
        'buffalo_hide_rope': 'Веревка из шкуры бизона',
        'baykok_bone': 'Кость Байкока',
        'ad_astra:reinforced_rocket_fin':'§6Reinforced Rocket Fin',
        'ad_astra:reinforced_rocket_nose_cone':'§6Reinforced Rocket Nose Cone',
        'ad_astra:advanced_rocket_fin':'§5Advanced Rocket Fin',
        'ad_astra:advanced_rocket_nose_cone':'§5Advanced Rocket Nose Cone',
        'ad_astra:ultra_rocket_fin':'§cUltra Rocket Fin',
        'ad_astra:ultra_rocket_nose_cone':'§cUltra Rocket Nose Cone',
        'ad_astra:incomplete_reinforced_rocket_fin':'Incomplete Reinforced Rocket Fin',
        'ad_astra:incomplete_advanced_rocket_fin':'Incomplete Advanced Rocket Fin',
        'ad_astra:incomplete_ultra_rocket_fin': 'Incomplete Ultra Rocket Fin',
        'botania:infinity_petal': '§dInfinity Petal',
        'botania:gaia_catalyst': '§7Gaia Catalyst',
        'botania:maximum_catalyst': '§bMaximum Catalyst',
        'botania:gaia_punishment': '§3Gaia Punishment',
        'botania:terrasteel_potency': '§aTerrasteel Potency',
        'botania:elves_endowment':'§dElves Endowment',
        'botania:incomplete_terra_pick':'Incomplete Terra Shatterer',
        'botania:incomplete_terra_axe':'Incomplete Terra Truncator',
        'botania:incomplete_terra_sword':'Incomplete Terra Sword',
        'botania:rune_base':'§dRune Base',
        'botania:rune_suspension':'§dRune Suspension',
        'botania:botany_catalyst':'§dBotany Catalyst',
        'create:steam_power_generator':'Steam Power Generator',
        'botania:specific_rune_base':'§dSpecific Rune Base',
        'botania:basic_runic_stone':'§9Basic Runic Stone',
        'botania:purple_piece_of_specific_rune':'§dPurple Piece of Specific Rune',
        'botania:blue_piece_of_specific_rune':'§bBlue Piece of Specific Rune'
    };

    for (const [id,dName] of Object.entries(items)) {

        let name;
        if (!id.includes(':')) {
            name = `gribtweaks:${id}`
        } else name = id;
        
        e.create(name).displayName(dName);
    };

    const create = (id, dName) => e.create(id).displayName(dName);

    e.create('gribtweaks:baykok_bone_pickaxe', 'pickaxe')
        .displayName('Кирка из кости Байкока')
        .tier('diamond');

    create('chemlib:terrasteel_element','§aTerrasteel').group('chemlib.elements').tooltip('§bTr (500)').tooltip('§7Transition Metals')
    create('chemlib:gaia_element','§dGaia').group('chemlib.elements').tooltip('§bGi (320)').tooltip('§7Transition Metals')
    create('chemlib:mana_element','§9Mana').group('chemlib.elements').tooltip('§bMa (3000)').tooltip('§7Transition Metals')
    create('chemlib:botany_compound','§5Botany Compound').group('chemlib.compounds').tooltip('§3Ma₂Tr₂Gi')
});