ServerEvents.recipes(e => {
    const prefix = 'gribtweaks:botania/shaped/';
    e.shaped('botania:mana_pylon', ['DBD','ACA','DBD'], {A: 'forbidden_arcanus:deorum_ingot', B: 'botania:manasteel_block', C: 'botania:mana_diamond', D: 'gribtweaks:polished_mana_quartz'}).id(`${prefix}mana_pylon`)
    e.shaped('botania:apothecary_default', ['ABA','CDC','DDD'], {A: 'occultism:otherstone_slab', B: '#botania:petals', C: 'ad_astra:desh_ingot', D: 'occultism:otherstone'}).id(`${prefix}petal_apothecary_default`)
    e.shaped('botania:natura_pylon', [' A ','ABA',' C '], {A: 'botania:terrasteel_ingot', B: 'botania:mana_pylon', C: 'create:refined_radiance'}).id(`${prefix}natura_pylon`)
    e.shaped('botania:gaia_pylon', [' A ','BCB',' A '], {A: 'botania:pixie_dust', B: 'botania:elementium_block', C: 'botania:natura_pylon'}).id(`${prefix}gaia_pylon`)
    e.shaped('botania:glimmering_livingwood', [' A ','ABA',' C '], {A: 'botania:terrasteel_nugget', B: '#botania:livingwood_logs', C: 'forbidden_arcanus:mundabitur_dust'}).id(`${prefix}glimmering_livingwood`),
    e.shaped('botania:glimmering_dreamwood', [' A ','ABA',' C '], {A: 'botania:elementium_nugget', B: '#botania:dreamwood_logs', C: 'forbidden_arcanus:mundabitur_dust'}).id(`${prefix}glimmering_dreamwood`),
    e.shaped('botania:alfheim_portal', ['ABA','ABA','ABA'], {A: '#botania:livingwood_logs', B: 'botania:terrasteel_ingot'}).id(`${prefix}alfheim_portal`)
    e.shaped('botania:mana_distributor', ['AAA','BCB','AAA'], {A: 'botania:livingrock', B: 'botania:elementium_ingot', C: 'create:brass_tunnel'}).id(`${prefix}mana_distributor`)
    e.shaped('botania:hourglass', ['ABA','CDC','ABA'], {A: 'forbidden_arcanus:deorum_ingot', B: 'botania:mana_glass', C: 'create:redstone_link', D: 'botania:manasteel_ingot'}).id(`${prefix}hourglass`)
    e.shaped('botania:open_crate', ['AAA','ABA','A A'], {A: '#botania:livingwood_logs', B: 'create:smart_chute'}).id(`${prefix}open_crate`)
    e.shaped('botania:mana_ring', ['AB ','BCB',' B '], {A: 'botania:mana_tablet', B: 'botania:manasteel_ingot', C: 'gribtweaks:antimatter_ingot'}).id(`${prefix}mana_ring`)
    e.shaped('botania:aura_ring', ['AB ','BCB',' B '], {A: 'botania:rune_mana', B: 'botania:manasteel_ingot', C: 'gribtweaks:antimatter_ingot'}).id(`${prefix}aura_ring`)
    e.shaped('botania:pixie_ring', ['AB ','BCB',' B '], {A: 'botania:pixie_dust', B: 'botania:elementium_ingot', C: 'gribtweaks:antimatter_ingot'}).id(`${prefix}pixie_ring`)
    e.shaped('botania:reach_ring', ['AB ','BCB',' B '], {A: 'botania:rune_pride', B: 'botania:elementium_ingot', C: 'gribtweaks:antimatter_ingot'}).id(`${prefix}reach_ring`)
})