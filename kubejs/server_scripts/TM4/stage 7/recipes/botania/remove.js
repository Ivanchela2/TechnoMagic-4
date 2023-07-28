ServerEvents.recipes(e => { 

    const output = [
        'botania:fertilizer',
        /botania:apothecary/,
        'botania:mana_pool',
        'botania:mana_pylon',
        'botania:mana_spreader',
        /botania:rune/,
        'botania:runic_altar',
        'botania:mana_powder',
        'botania:terra_plate',
        'botania:natura_pylon',
        'botania:gaia_pylon',
        'botania:alfheim_portal',
        'botania:mana_distributor',
        'botania:hourglass',
        'botania:orechid',
        'botania:orechid_ignem',
        'botania:rosa_arcana',
        'botania:gourmaryllis',
        'botania:entropinnyum',
        'botania:elven_spreader',
        /botania:\w+_mushroom/,
        'botanicadds:gaiasteel_ingot',
        'botania:flight_tiara',
        'botania:open_crate',
        'botania:mana_mirror',
        'botania:brewery',
        'botania:lens_normal',
        'botania:mana_tablet',
        'botania:loonium',
        'botania:hopperhock',
        'botania:spectranthemum',
        'botania:daffomill',
        'botania:agricarnation',
        'botania:hydroangeas',
        /\w*mana_\w*cell/,
        'botania:mana_ring',
        'botania:aura_ring',
        'botania:pixie_ring',
        'botania:reach_ring'
    ]

    const id = [
        'botania:pure_daisy/livingrock',
        'botania:pure_daisy/livingwood',
        'botania:mana_infusion/manasteel',
        'botania:mana_infusion/manasteel_block',
        'botania:mana_infusion/mana_pearl',
        'botania:petal_apothecary/pure_daisy',
        'botania:petal_apothecary/endoflame',
        'botania:glimmering_livingwood',
        'botania:glimmering_dreamwood',
        'botania:elven_trade/elementium',
        'botania:elven_trade/elementium_block',
        'botania:elven_trade/dragonstone',
        'botania:elven_trade/dragonstone_block',
        'botania:fabulous_pool',
        'botania:terra_pick',
        'botania:terra_axe',
        'botania:terra_sword',
        'supplementaries:soap_clean_botania_mushroom',
        'supplementaries:soap_clean_botania_mystical_flower',
        'productivebees:block_conversion/botania/log_to_livingwood',
        'productivebees:block_conversion/botania/stone_to_livingrock',
        'megacells:cells/mega_mana_cell_housing'
    ]

    output.forEach(recipe => {
        e.remove({output: recipe})
    })

    id.forEach(recipe => {
        e.remove({id: recipe})
    })
})