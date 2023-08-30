
ServerEvents.recipes(e => {
  const prefix = 'tm4:create/mechanical_crafting/';
  let {mechanical_crafting} = e.recipes.create
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