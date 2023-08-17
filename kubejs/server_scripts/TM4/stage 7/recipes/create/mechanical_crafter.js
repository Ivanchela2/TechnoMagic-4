
ServerEvents.recipes(e => {
  const prefix = 'tm4:create/mechanical_crafting/';
  let {mechanical_crafting} = e.recipes.create
    mechanical_crafting('2x ad_astra:reinforced_covering', [
        'ABABABA',
        'BCEIECB',
        'ADHFHDA',
        'BIFGFIB',
        'ADHFHDA',
        'BCEIECB',
        'ABABABA',
      ], {
        A: 'ad_astra:desh_plate',
        B: 'chemlib:lutetium_ingot',
        C: 'ftbic:antimatter_crystal',
        D: 'ad_astra:protasteel_block',
        E: 'ftbic:advanced_alloy',
        F: 'botania:terrasteel_ingot',
        G: 'ftbic:advanced_machine_block',
        H: 'botania:dragonstone',
        I: 'create:brass_casing'
      }).id(`${prefix}reinforced_covering`)

      mechanical_crafting('2x ad_astra:advanced_covering', [
        'ABABABA',
        'BEEDEEB',
        'AEHIHEA',
        'BCFGFCB',
        'AEHIHEA',
        'BEEDEEB',
        'ABABABA',
      ], {
        A: 'ad_astra:ostrum_plate',
        B: 'chemlib:palladium_ingot',
        C: 'botanicadds:dreaming_pool',
        D: 'botania:elven_spreader',
        E: 'forbidden_arcanus:stellarite_piece',
        F: 'ad_astra:reinforced_covering',
        G: 'botania:gaia_catalyst',
        H: 'botania:life_essence',
        I: 'botania:gaia_ingot'
      }).id(`${prefix}advanced_covering`)

      mechanical_crafting('ad_astra:reinforced_rocket_nose_cone', [
        '   A   ',
        '  ACA  ',
        '  ADA  ',
        '  AFA  ',
        ' AEDGA ',
        ' ABBBA ',
        '  AAA  ',
      ], {
        A: '#forge:storage_blocks/steel',
        B: 'botania:terrasteel_ingot',
        C: 'ad_astra:desh_block',
        D: 'ad_astra:reinforced_covering',
        E: 'botania:rune_winter',
        F: 'ad_astra:rocket_nose_cone',
        G: 'botania:rune_summer'
      }).id(`${prefix}advanced_rocket_nose_cone`)
      mechanical_crafting('botania:specific_rune_base', [
        '  ATI  ',
        ' AABII ',
        'AACDCII',
        'AEFGHEI',
        'AACDCII',
        ' AABII ',
        '  ATI  ',
      ], {
        A: 'botania:elementium_ingot',
        B: 'reliquary:frozen_core',
        C: 'botania:gaia_ingot',
        D: 'forbidden_arcanus:deorum_ingot',
        E: 'botania:gaia_pylon',
        F: 'botania:purple_piece_of_specific_rune',
        G: 'arclight:arclight_core',
        H: 'botania:blue_piece_of_specific_rune',
        T: 'botania:basic_runic_stone',
        I: 'botania:manasteel_ingot'
      }).id(`${prefix}specific_rune_base`)
      mechanical_crafting(Item.of('easy_villagers:villager', '{villager:{VillagerData:{level:2,profession:"butcher"}}}'), [
        'ABA',
        'CDC',
        'ABA',
      ], {
        A: '#tm4:cooked_food',
        B: 'smoker',
        C: 'campfire',
        D: 'easy_villagers:villager'
      }).id(`${prefix}villager_butcher`)

      mechanical_crafting('botanicalmachinery:mechanical_mana_pool', [
        'ABBCBBA',
        'BKKMKKB',
        'BKEIEKB',
        'CJGFNJC',
        'BKHDHKB',
        'BKKLKKB',
        'ABBCBBA',
      ], {
        A: 'botania:elementium_block',
        B: 'botania:elementium_ingot',
        C: 'botania:elf_glass',
        D: 'botania:aura_ring_greater',
        E: 'create_things_and_misc:vibration_mechanism',
        F: 'botania:botany_catalyst',
        G: 'botanicadds:dreaming_pool',
        H: 'botania:terrasteel_block',
        I: 'botania:gaia_ingot',
        J: 'botania:mana_ring_greater',
        K: 'botania:life_essence',
        L: 'botania:terrasteel_potency',
        M: 'botania:elves_endowment',
        N: 'botania:fabulous_pool'
      }).id(`${prefix}mechanical_mana_pool`)
      mechanical_crafting('botanicalmachinery:industrial_agglomeration_factory', [
        'ABBCBBA',
        'BKKMKKB',
        'BKEIEKB',
        'CJGFGJC',
        'BKHDHKB',
        'BKKLKKB',
        'ABBCBBA',
      ], {
        A: 'botania:elementium_block',
        B: 'botania:elementium_ingot',
        C: 'botania:elf_glass',
        D: 'botania:aura_ring_greater',
        E: 'botania:spark',
        F: 'botania:botany_catalyst',
        G: 'botania:terra_plate',
        H: 'botania:terrasteel_block',
        I: 'botania:gaia_ingot',
        J: 'botania:mana_ring_greater',
        K: 'botania:life_essence',
        L: 'botania:terrasteel_potency',
        M: 'botania:elves_endowment'
      }).id(`${prefix}industrial_agglomeration_factory`)
      mechanical_crafting('botanicalmachinery:alfheim_market', [
        'ABBCBBA',
        'BJONOJB',
        'BOEIEOB',
        'CNMFLNC',
        'BOHDHOB',
        'BPOGOPB',
        'ABBCBBA',
      ], {
        A: 'botania:elementium_block',
        B: 'botania:elementium_ingot',
        C: 'botania:elf_glass',
        D: 'botania:aura_ring_greater',
        E: 'botania:dreamwood',
        F: 'botania:botany_catalyst',
        G: 'botania:alfheim_portal',
        H: 'botania:dragonstone_block',
        I: 'botania:gaia_ingot',
        J: 'botania:mana_ring_greater',
        L: 'botania:terrasteel_potency',
        M: 'botania:elves_endowment',
        N: 'botania:glimmering_livingwood',
        O: 'botania:livingwood',
        P: 'botania:natura_pylon'
      }).id(`${prefix}alfheim_market`)
      mechanical_crafting('botanicalmachinery:mechanical_apothecary', [
        'ABBCBBA',
        'BKKMKKB',
        'BKEIEKB',
        'CJGFGJC',
        'BKHDHKB',
        'BKKLKKB',
        'ABBCBBA',
      ], {
        A: 'botania:elementium_block',
        B: 'botania:elementium_ingot',
        C: 'botania:elf_glass',
        D: 'botania:aura_ring_greater',
        E: '#tm4:petal_blocks',
        F: 'botania:botany_catalyst',
        G: 'botania:apothecary_default',
        H: 'botania:mana_diamond_block',
        I: 'botania:gaia_ingot',
        J: 'botania:mana_ring_greater',
        K: 'botania:life_essence',
        L: 'botania:terrasteel_potency',
        M: 'botania:elves_endowment'
      }).id(`${prefix}mechanical_apothecary`)
      mechanical_crafting('botanicalmachinery:mechanical_brewery', [
        'ABBCBBA',
        'BNKMKNB',
        'BKEIEKB',
        'CJGFGJC',
        'BKHDHKB',
        'BNKLKNB',
        'ABBCBBA',
      ], {
        A: 'botania:elementium_block',
        B: 'botania:elementium_ingot',
        C: 'botania:elf_glass',
        D: 'botania:aura_ring_greater',
        E: 'botania:blaze_block',
        F: 'botania:botany_catalyst',
        G: 'farmersdelight:cooking_pot',
        H: 'botania:dragonstone_block',
        I: 'botania:gaia_ingot',
        J: 'botania:mana_ring_greater',
        K: 'botania:flask',
        L: 'botania:terrasteel_potency',
        M: 'botania:elves_endowment',
        N: 'botania:brewery'
      }).id(`${prefix}mechanical_brewery`)
      mechanical_crafting('botanicalmachinery:mechanical_daisy', [
        'BBBBB',
        'B   B',
        'B   B',
        'BDEDB',
        'AACAA'
      ], {
        A: 'botania:elementium_block',
        B: 'botania:elf_glass',
        C: 'botania:aura_ring_greater',
        D: 'botania:floating_pure_daisy',
        E: 'botania:botany_catalyst'
      }).id(`${prefix}mechanical_daisy`)
      mechanical_crafting('botanicalmachinery:mechanical_runic_altar', [
        'ABBCBBA',
        'BNKMKNB',
        'BKHIHKB',
        'CJGFGJC',
        'BKEDEKB',
        'BNKLKNB',
        'ABBCBBA',
      ], {
        A: 'botania:elementium_block',
        B: 'botania:elementium_ingot',
        C: 'botania:elf_glass',
        D: 'botania:aura_ring_greater',
        E: 'botania:dragonstone_block',
        F: 'botania:runic_altar',
        G: 'botanicadds:gaiasteel_pylon',
        H: 'botania:terrasteel_block',
        I: 'botania:gaia_ingot',
        J: 'botania:mana_ring_greater',
        K: 'botania:life_essence',
        L: 'botania:terrasteel_potency',
        M: 'botania:elves_endowment',
        N: 'botania:botany_catalyst'
      }).id(`${prefix}mechanical_runic_altar`)
})