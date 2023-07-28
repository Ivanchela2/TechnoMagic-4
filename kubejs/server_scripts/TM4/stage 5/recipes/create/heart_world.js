ServerEvents.recipes((event) => {
    const prefix = 'tm4:create/shaped/';
    event.custom({
        'type': 'create:mechanical_crafting',
        'pattern': [
            'AWTUIOYEA',
            'WZBMwMqXE',
            'YNs3d3ayT',
			'Lr32123tF',
            'Kwj1g1hwG',
            'Jr32123tH',
			'Tio3f3pNY',
            'QVeuwuBCR',
            'AQYPSDTRA'
            
        ],
        'key': {
            'A': {'item': 'enigmaticlegacy:cosmic_heart'},
            'Q': {'item': 'enigmaticlegacy:mining_charm'},
            'W': {'item': 'enigmaticlegacy:angel_blessing'},
            'E': {'item': 'enigmaticlegacy:ocean_stone'},
            'R': {'item': 'enigmaticlegacy:monster_charm'},
            'T': {'item': 'enigmaticlegacy:earth_heart'},
            'Y': {'item': 'enigmaticlegacy:twisted_heart'},
            'U': {'item': 'enigmaticlegacy:magnet_ring'},
            'I': {'item': 'enigmaticlegacy:extradimensional_eye'},
            'O': {'item': 'enigmaticlegacy:super_magnet_ring'},
            'P': {'item': 'enigmaticlegacy:iron_ring'},
            'S': {'item': 'enigmaticlegacy:ender_ring'},
            'D': {'item': 'enigmaticlegacy:golden_ring'},
            'F': {'item': 'enigmaticlegacy:fabulous_scroll'},
            'G': {'item': 'enigmaticlegacy:cursed_scroll'},
            'H': {'item': 'enigmaticlegacy:heaven_scroll'},
            'J': {'item': 'enigmaticlegacy:escape_scroll'},
            'K': {'item': 'enigmaticlegacy:avarice_scroll'},
            'L': {'item': 'enigmaticlegacy:xp_scroll'},
            'Z': {'item': 'enigmaticlegacy:unholy_grail'},
            'X': {'item': 'enigmaticlegacy:mega_sponge'},
            'C': {'item': 'enigmaticlegacy:twisted_mirror'},
            'V': {'item': 'enigmaticlegacy:infernal_shield'},
            'B': {'item': 'enigmaticlegacy:golem_heart'},
            'N': {'item': 'enigmaticlegacy:eye_of_nebula'},
            'M': {'item': 'enigmaticlegacy:infinimeal'},
            'q': {'item': 'enigmaticlegacy:void_pearl'},
            'w': {'item': 'enigmaticlegacy:insignia'},
            'e': {'item': 'enigmaticlegacy:berserk_charm'},
            'r': {'item': 'enigmaticlegacy:cursed_stone'},
            't': {'item': 'enigmaticlegacy:enchanter_pearl'},
            'y': {'item': 'enigmaticlegacy:blazing_core'},
            'u': {'item': 'enigmaticlegacy:enigmatic_elytra'},
            'i': {'item': 'enigmaticlegacy:void_stone'},
            'o': {'item': 'enigmaticlegacy:the_cube'},
            'p': {'item': 'enigmaticlegacy:enigmatic_eye'},
            'a': {'item': 'enigmaticlegacy:the_twist'},
            's': {'item': 'enigmaticlegacy:loot_generator'},
            'd': {'item': 'enigmaticlegacy:eldritch_amulet'},
            'f': {'item': 'enigmaticlegacy:ascension_amulet'},
            'g': {'item': 'enigmaticlegacy:the_infinitum'},
            'h': {'item': 'enigmaticlegacy:cursed_ring'},
            'j': {'item': 'enigmaticlegacy:desolation_ring'},
            '1': {'item': 'enigmaticlegacy:abyssal_heart'},
            '2': {'item': 'enigmaticlegacy:guardian_heart'},
            '3': {'item': 'enigmaticlegacy:forbidden_fruit'}

        },
        'result': {
            'item': 'enigmaticlegacy:enigmatic_item',
            'count': 1
        },
        'acceptMirrored': false
    }).id(`${prefix}enigmatic_item`)

});