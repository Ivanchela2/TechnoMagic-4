ServerEvents.recipes(event => {
    const prefix = 'gribtweaks:botania/shaped_extreme_craft/';
    const recipes = [
        {
            pattern: [ 
                'ABBCBBA',
                'BKKMKKB',
                'BKEIEKB',
                'CJGFNJC',
                'BKHDHKB',
                'BKKLKKB',
                'ABBCBBA',
            ],   
            key: {
                A: Item.of('botania:elementium_block'),
                B: Item.of('botania:elementium_ingot'),
                C: Item.of('botania:elf_glass'),
                D: Item.of('botania:aura_ring_greater'),
                E: Item.of('create_things_and_misc:vibration_mechanism'),
                F: Item.of('gribtweaks:botany_catalyst'),
                G: Item.of('botanicadds:dreaming_pool'),
                H: Item.of('botania:terrasteel_block'),
                I: Item.of('botania:gaia_ingot'),
                J: Item.of('botania:mana_ring_greater'),
                K: Item.of('botania:life_essence'),
                L: Item.of('gribtweaks:terrasteel_potency'),
                M: Item.of('gribtweaks:elves_endowment'),
                N: Item.of('botania:fabulous_pool')
            },
            output: 'botanicalmachinery:mechanical_mana_pool',
            id: `${prefix}mechanical_mana_pool`
        },                       
        {
            pattern: [ 
                'ABBCBBA',
                'BKKMKKB',
                'BKEIEKB',
                'CJGFGJC',
                'BKHDHKB',
                'BKKLKKB',
                'ABBCBBA',
            ],   
            key: {
                A: Item.of('botania:elementium_block'),
                B: Item.of('botania:elementium_ingot'),
                C: Item.of('botania:elf_glass'),
                D: Item.of('botania:aura_ring_greater'),
                E: Item.of('botania:spark'),
                F: Item.of('gribtweaks:botany_catalyst'),
                G: Item.of('botania:terra_plate'),
                H: Item.of('botania:terrasteel_block'),
                I: Item.of('botania:gaia_ingot'),
                J: Item.of('botania:mana_ring_greater'),
                K: Item.of('botania:life_essence'),
                L: Item.of('gribtweaks:terrasteel_potency'),
                M: Item.of('gribtweaks:elves_endowment')
            },
            output: 'botanicalmachinery:industrial_agglomeration_factory',
            id: `${prefix}alfheim_market`
        },
        {
            pattern: [ 
                'ABBCBBA',
                'BJONOJB',
                'BOEIEOB',
                'CNMFLNC',
                'BOHDHOB',
                'BPOGOPB',
                'ABBCBBA',
            ],   
            key: {
                A: Item.of('botania:elementium_block'),
                B: Item.of('botania:elementium_ingot'),
                C: Item.of('botania:elf_glass'),
                D: Item.of('botania:aura_ring_greater'),
                E: Item.of('botania:dreamwood'),
                F: Item.of('gribtweaks:botany_catalyst'),
                G: Item.of('botania:alfheim_portal'),
                H: Item.of('botania:dragonstone_block'),
                I: Item.of('botania:gaia_ingot'),
                J: Item.of('botania:mana_ring_greater'),
                L: Item.of('gribtweaks:terrasteel_potency'),
                M: Item.of('gribtweaks:elves_endowment'),
                N: Item.of('botania:glimmering_livingwood'),
                O: Item.of('botania:livingwood'),
                P: Item.of('botania:natura_pylon')
            },
            output: 'botanicalmachinery:alfheim_market',
            id: `${prefix}alfheim_market`
        },
        {
            pattern: [ 
                'ABBCBBA',
                'BKKMKKB',
                'BKEIEKB',
                'CJGFGJC',
                'BKHDHKB',
                'BKKLKKB',
                'ABBCBBA',
            ],   
            key: {
                A: Item.of('botania:elementium_block'),
                B: Item.of('botania:elementium_ingot'),
                C: Item.of('botania:elf_glass'),
                D: Item.of('botania:aura_ring_greater'),
                E: Ingredient.of('#gribtweaks:petal_blocks'),
                F: Item.of('gribtweaks:botany_catalyst'),
                G: Item.of('botania:apothecary_default'),
                H: Item.of('botania:mana_diamond_block'),
                I: Item.of('botania:gaia_ingot'),
                J: Item.of('botania:mana_ring_greater'),
                K: Item.of('botania:life_essence'),
                L: Item.of('gribtweaks:terrasteel_potency'),
                M: Item.of('gribtweaks:elves_endowment')
            },
            output: 'botanicalmachinery:mechanical_apothecary',
            id: `${prefix}alfheim_market`
        },
        {
            pattern: [ 
                'ABBCBBA',
                'BNKMKNB',
                'BKEIEKB',
                'CJGFGJC',
                'BKHDHKB',
                'BNKLKNB',
                'ABBCBBA',
            ],   
            key: {
                A: Item.of('botania:elementium_block'),
                B: Item.of('botania:elementium_ingot'),
                C: Item.of('botania:elf_glass'),
                D: Item.of('botania:aura_ring_greater'),
                E: Item.of('botania:blaze_block'),
                F: Item.of('gribtweaks:botany_catalyst'),
                G: Item.of('farmersdelight:cooking_pot'),
                H: Item.of('botania:dragonstone_block'),
                I: Item.of('botania:gaia_ingot'),
                J: Item.of('botania:mana_ring_greater'),
                K: Item.of('botania:flask'),
                L: Item.of('gribtweaks:terrasteel_potency'),
                M: Item.of('gribtweaks:elves_endowment'),
                N: Item.of('botania:brewery')
            },
            output: 'botanicalmachinery:mechanical_brewery',
            id: `${prefix}alfheim_market`
        },
        {
            pattern: [ 
                'BBBBB',
                'B   B',
                'B   B',
                'BDEDB',
                'AACAA'
            ],   
            key: {
                A: Item.of('botania:elementium_block'),
                B: Item.of('botania:elf_glass'),
                C: Item.of('botania:aura_ring_greater'),
                D: Item.of('botania:floating_pure_daisy'),
                E: Item.of('gribtweaks:botany_catalyst')
            },
            output: 'botanicalmachinery:mechanical_daisy',
            id: `${prefix}alfheim_market`
        },
        {
            pattern: [ 
                'ABBCBBA',
                'BNKMKNB',
                'BKHIHKB',
                'CJGFGJC',
                'BKEDEKB',
                'BNKLKNB',
                'ABBCBBA',
            ],   
            key: {
                A: Item.of('botania:elementium_block'),
                B: Item.of('botania:elementium_ingot'),
                C: Item.of('botania:elf_glass'),
                D: Item.of('botania:aura_ring_greater'),
                E: Item.of('botania:dragonstone_block'),
                F: Item.of('botania:runic_altar'),
                G: Item.of('botanicadds:gaiasteel_pylon'),
                H: Item.of('botania:terrasteel_block'),
                I: Item.of('botania:gaia_ingot'),
                J: Item.of('botania:mana_ring_greater'),
                K: Item.of('botania:life_essence'),
                L: Item.of('gribtweaks:terrasteel_potency'),
                M: Item.of('gribtweaks:elves_endowment'),
                N: Item.of('gribtweaks:botany_catalyst')
            },
            output: 'botanicalmachinery:mechanical_runic_altar',
            id: `${prefix}alfheim_market`
        },
    ];

    recipes.forEach((recipe) => {
        let constructed_recipe = {
            type: 'avaritia:shaped_extreme_craft',
            pattern: recipe.pattern,
            key: recipe.key,
            result: Ingredient.of(recipe.output).toJson()
        };
        event.custom(constructed_recipe).id(recipe.id);
    });
});
