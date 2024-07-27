ServerEvents.recipes(event => {
    const prefix = 'gribtweaks:avaritia/shaped_extreme_craft/';
    const recipes = [
        {
            pattern: [ 
                '   AAA   ', 
                ' AABBBAA ', 
                ' ABBBBBA ', 
                'ABBBCBBBA', 
                'ABBCDCBBA', 
                'ABBBCBBBA',
                ' ABBBBBA ', 
                ' AABBBAA ',
                '   AAA   '
            ],
            key: {
                A: Item.of('minecraft:end_stone_bricks'),
			    B: Item.of('endersdelight:ender_shard'),
			    C: Item.of('avaritia:neutronium_ingot'),
			    D: Item.of('ae2:singularity')
            },
            output: 'avaritia:endest_pearl',
            id: `${prefix}endest_pearl`
        },
        {
            pattern: [ 
                '  A B A  ', 
                ' B     B ', 
                'A  CCC  A', 
                '  D   D  ', 
                'B D E D B', 
                '  D   D  ', 
                'A  CCC  A', 
                ' B     B ', 
                '  A B A  ' 
            ],
            key: {
                A: Item.of('avaritia:neutron_nugget'),
			    B: Item.of('avaritia:neutronium_ingot'),
			    C: Item.of('create:cogwheel'),
			    D: Item.of('create:large_cogwheel'),
			    E: Item.of('forbidden_arcanus:dark_nether_star')
            },
            output: 'avaritia:neutronium_gear',
            id: `${prefix}neutronium_gear`
        },
        {
            pattern: [ 
                'AABBBBBAA', 
                'A BBBBB A', 
                'A  CCC  A', 
                'D CCCCC D', 
                'A CCECC A', 
                'D CCCCC D', 
                'A  CCC  A', 
                'A       A', 
                'AAADADAAA' 
            ],
            key: {
                A: Item.of('botania:corporea_block'),
			    B: Item.of('minecraft:waxed_cut_copper'),
			    C: Item.of('minecraft:amethyst_block'),
			    D: Item.of('avaritia:crystal_matrix_ingot'),
			    E: Item.of('naturesaura:depth_ingot_block')
            },
            output: 'avaritia:neutron_collector',
            id: `${prefix}neutron_collector`
        },
        {
            pattern: [ 
                'AAADEDAAA', 
                'B J   J B', 
                'A J F J A', 
                'B J   J B', 
                'CJJ G JJC', 
                'B J   J B', 
                'A J F J A', 
                'B J   J B', 
                'AAABABAAA' 
            ],
            key: {
                A: Item.of('ad_astra:steel_block'),
			    B: Item.of('avaritia:crystal_matrix_ingot'),
			    C: Item.of('minecraft:amethyst_block'),
			    D: Item.of('ftbic:compressor'),
			    E: Item.of('create:mechanical_press'),
			    F: Item.of('ad_astra:calorite_plate'),
			    G: Item.of('avaritia:neutronium_gear' ),
			    J: Item.of('avaritia:neutronium_ingot')
            },
            output: 'avaritia:neutronium_compressor',
            id: `${prefix}neutronium_compressor`
        },
        {
            pattern: [ 
                'AABBBBBAA', 
                'A BBBBB A', 
                'A  CCC  A', 
                'D CCCCC D', 
                'A CCECC A', 
                'D CCCCC D', 
                'A  CCC  A', 
                'A       A', 
                'AAADADAAA' 
            ],
            key: {
                A: Item.of('twilightforest:carminite_block'),
			    B: Item.of('arclight:bloodstone_block' ),
			    C: Item.of('ad_astra:calorite_block'),
			    D: Item.of('avaritia:crystal_matrix_ingot'),
			    E: Item.of('avaritia:neutron_collector' )
            },
            output: 'avaritia:advanced_neutron_collector',
            id: `${prefix}advanced_neutron_collector`
        },
        {
            pattern: [ 
                ' AAAA    ', 
                'AABBAAA  ', 
                'ABCCBBAA ', 
                'ABCDCCBA ', 
                'ABCDDCBA ', 
                'ABCDDCBAA', 
                'ABCCCCCBA', 
                'AABBBBBAA', 
                ' AAAAAAA ' 
            ],
            key: {
                A: Item.of('ftbic:graphene' ),
			    B: Item.of('minecraft:coal_block' ),
			    C: Item.of('ftbic:carbon_plate'),
			    D: Item.of('createbigcannons:cast_iron_block')
            },
            output: 'avaritia:star_fuel',
            id: `${prefix}star_fuel`
        },
        {
            pattern: [ 
                '1 U 1 I 1', 
                ' O  7  P ', 
                'Q A S D Y', 
                '   FGH   ', 
                '11KLZXC11', 
                '   BNM   ', 
                'W J 2 3 T', 
                ' 4  6  5 ', 
                '1 E 1 R 1' 
            ],
            key: {
                Q: Item.of('naturesaura:token_joy'),
			    W: Item.of('naturesaura:token_fear'),
			    E: Item.of('naturesaura:token_anger'),
			    T: Item.of('naturesaura:token_sorrow'),
			    Y: Item.of('naturesaura:token_euphoria'),
			    U: Item.of('naturesaura:token_terror'),
			    I: Item.of('naturesaura:token_rage'),
			    R: Item.of('naturesaura:token_grief'),
			    F: Item.of('ad_astra:steel_block'),
			    G: Item.of('avaritia:cosmic_meatballs'),
			    H: Item.of('twilightforest:fiery_block'),
			    L: Item.of('avaritia:ultimate_stew'),
			    Z: Item.of('avaritia:endest_pearl'),
			    X: Item.of('avaritia:record_fragment'),
			    B: Item.of('botanicadds:gaiasteel_block'),
			    N: Item.of('avaritia:crystal_matrix_ingot'),
			    M: Item.of('minecraft:amethyst_block'),
			    O: { type: "forge:nbt", item: "avaritia:singularity", count: 1, nbt: "{Id:\"avaritia:amethyst\"}"},
			    P: { type: "forge:nbt", item: "avaritia:singularity", count: 1, nbt: "{Id:\"avaritia:bronze\"}"},
			    A: { type: "forge:nbt", item: 'avaritia:singularity', count: 1, nbt: "{Id:\"avaritia:calorite\"}"},
			    S: { type: "forge:nbt", item: 'avaritia:singularity', count: 1, nbt: "{Id:\"avaritia:dark_matter\"}"},
			    D: { type: "forge:nbt", item: 'avaritia:singularity', count: 1, nbt: "{Id:\"avaritia:depth\"}"},
			    J: { type: "forge:nbt", item: 'avaritia:singularity', count: 1, nbt: "{Id:\"avaritia:etherium\"}"},
			    K: { type: "forge:nbt", item: 'avaritia:singularity', count: 1, nbt: "{Id:\"avaritia:experience\"}"},
			    C: { type: "forge:nbt", item: 'avaritia:singularity', count: 1, nbt: "{Id:\"avaritia:fiery_blood\"}"},
			    1: Item.of('gribtweaks:antimatter_l4'),
			    2: { type: "forge:nbt", item: 'avaritia:singularity', count: 1, nbt: "{Id:\"avaritia:knight_metal\"}"},
			    3: { type: "forge:nbt", item: 'avaritia:singularity', count: 1, nbt: "{Id:\"avaritia:precision_mechanism\"}"},
			    4: { type: "forge:nbt", item: 'avaritia:singularity', count: 1, nbt: "{Id:\"avaritia:soul_steel\"}"},
			    5: { type: "forge:nbt", item: 'avaritia:singularity', count: 1, nbt: "{Id:\"avaritia:rose_quartz\"}"},
			    6: { type: "forge:nbt", item: 'avaritia:singularity', count: 1, nbt: "{Id:\"avaritia:steel\"}"},
			    7: { type: "forge:nbt", item: 'avaritia:singularity', count: 1, nbt: "{Id:\"avaritia:terrasteel\"}"}
            },
            output: 'avaritia:infinity_catalyst',
            id: `${prefix}infinity_catalyst`
        },
        {
            pattern: [ 
                '         ', 
                '         ', 
                '333333333', 
                '3M1M1M1M3', 
                '31M121M13', 
                '3M1M1M1M3', 
                '333333333', 
                '         ', 
                '         ' 
            ],
            key: {
                M: Item.of('avaritia:infinity_catalyst'),
			    1: Item.of('avaritia:crystal_matrix_ingot'),
			    2: Item.of('gribtweaks:maximum_catalyst'),
			    3: Item.of('avaritia:neutronium_ingot')
            },
            output: 'avaritia:infinity_ingot',
            id: `${prefix}infinity_ingot`
        },
        {
            pattern: [ 
                'CCLLLLLCC', 
                'C LLLLL C', 
                'C  RRR  C', 
                'M RRRRR M', 
                'C RRARR C', 
                'M RRRRR M', 
                'C  RRR  C', 
                'C       C', 
                'CCCMCMCCC', 
            ],
            key: {
			    A: Item.of('avaritia:advanced_neutron_collector'),
			    C: Item.of('botania:dragonstone_block'),
			    L: Item.of('biggerreactors:ludicrite_block'),
			    M: Item.of('avaritia:crystal_matrix_ingot'),
			    R: Item.of('forbidden_arcanus:dark_rune_block'),
            },
            output: 'avaritia:absolute_neutron_collector',
            id: `${prefix}absolute_neutron_collector`
        },
        {
            pattern: [ 
                '   A A   ',
                ' AAAAAAA ',
                ' ABFGFCA ',
                'AAF123FAA',
                ' AJ456HA ',
                'AAF789FAA',
                ' ADFIFEA ',
                ' AAAAAAA ',
                '   A A   '
            ],
            key: {
			    A: Item.of('gribtweaks:infinity_honeycomb'),
			    B: Item.of('megacells:mana_storage_cell_256m'),
			    C: Item.of('megacells:fluid_storage_cell_256m'),
			    D: Item.of('megacells:item_storage_cell_256m'),
			    E: Item.of('megacells:bulk_item_cell'),
			    F: Item.of('aquaculture:neptunium_block'),
			    G: { type: "forge:nbt", item: "avaritia:singularity", count: 1, nbt: "{Id:\"avaritia:amethyst\"}"},
			    H: { type: "forge:nbt", item: "avaritia:singularity", count: 1, nbt: "{Id:\"avaritia:precision_mechanism\"}"},
			    I: { type: "forge:nbt", item: "avaritia:singularity", count: 1, nbt: "{Id:\"avaritia:terrasteel\"}"},
			    J: { type: "forge:nbt", item: "avaritia:singularity", count: 1, nbt: "{Id:\"avaritia:tyrian_steel\"}"},
                1: Item.of('chemlib:time_ingot'),
                2: Item.of('botanicadds:gaiasteel_ingot'),
                3: Item.of('twilightforest:fiery_ingot'),
                4: Item.of('avaritia:crystal_matrix_ingot'),
                5: Item.of('upgradednetherite_ultimate:ultimate_upgraded_netherite_ingot'),
                6: Item.of('enigmaticlegacy:etherium_ingot'),
                7: Item.of('gribtweaks:protasteel_ingot'),
                8: Item.of('gribtweaks:reinforced_ludicrite_ingot'),
                9: Item.of('ad_astra:calorite_ingot'),
            },
            output: 'upgradednetherite_creative:creative_upgraded_netherite_ingot',
            id: `${prefix}creative_upgraded_netherite_ingot`
        },
        {
            pattern: [ 
                '    NNN  ',
                '   NNaNN ',
                '   NbcdN ',
                '   N1eNN ',
                ' NNNNNfNN',
                'NNg2NhijN',
                'NklmNNnNN',
                'NNoNNNNN ',
                ' NNN     '
            ],
            key: {
			    N: Item.of('avaritia:neutron_nugget'),
			    a: Item.of('forbidden_arcanus:cooked_tentacle'),
			    b: Item.of('delightful:cooked_venison_chops'),
			    c: Item.of('quark:cooked_crab_leg'),
			    d: Item.of('farmersdelight:cooked_bacon'),
			    e: Item.of('twilightforest:hydra_chop'),
			    f: Item.of('farmersdelight:cooked_cod_slice'),
			    g: Item.of('farmersdelight:fried_egg'),
			    h: Item.of('alexsmobs:cooked_kangaroo_meat'),
			    i: Item.of('alexsmobs:cooked_moose_ribs'),
			    j: Item.of('alexsmobs:cooked_lobster_tail'),
			    k: Item.of('farmersdelight:cooked_mutton_chops'),
			    l: Item.of('aquamirae:cooked_spinefish'),
			    m: Item.of('collectorsreap:baked_portobello_cap'),
			    n: Item.of('farmersdelight:cooked_chicken_cuts'),
			    o: Item.of('alexsmobs:cooked_catfish'),
			    1: Item.of('gribtweaks:quantum_burger'),
			    2: Item.of('gribtweaks:astral_burger'),
            },
            output: 'avaritia:cosmic_meatballs',
            id: `${prefix}cosmic_meatballs`
        },
        {
            pattern: [ 
                ' nnnnnnn ',
                'n       n',
                'Nn     nN',
                'NlnnnnnlN',
                'NallllvbN',
                'NcdllefgN',
                'NhijkmopN',
                ' NqrstuN ',
                'n NNNNN n'
            ],
            key: {
                N: Item.of('avaritia:neutronium_ingot'),
			    n: Item.of('avaritia:neutron_nugget'),
			    l: Item.of('gribtweaks:admiration_liquid'),
                a: Item.of('create:honeyed_apple'),
                b: Item.of('minecraft:glistering_melon_slice'),
                c: Item.of('farmersdelight:apple_pie'),
                d: Item.of('gribtweaks:combined_jelly'),
                e: Item.of('create:sweet_roll'),
                f: Item.of('fastfooddelight:cheeseburger'),
                g: Item.of('minecraft:pumpkin_pie'),
                h: Item.of('farmersdelight:glow_berry_custard'),
                i: Item.of('farmersdelight:dumplings'),
                j: Item.of('supplementaries:pancake'),
                k: Item.of('farmersdelight:barbecue_stick'),
                m: Item.of('nethersdelight:nether_skewer'),
                o: Item.of('farmersdelight:shepherds_pie_block'),
                p: Item.of('farmersdelight:grilled_salmon'),
                q: Item.of('farmersdelight:rice_roll_medley_block'),
                r: Item.of('endersdelight:crawling_sandwich'),
                s: Item.of('endersdelight:pearl_pasta'),
                t: Item.of('endersdelight:ender_paella'),
                u: Item.of('minecraft:rabbit_stew'),
                v: Item.of('minecraft:enchanted_golden_apple')
            },
            output: '8x avaritia:ultimate_stew',
            id: `${prefix}ultimate_stew`
        },
        {
            pattern: [
                '  ATI  ',
                ' AABII ',
                'AACDCII',
                'AEFGHEI',
                'AACDCII',
                ' AABII ',
                '  ATI  ',
              ], 
              key: {
                A: Item.of('botania:elementium_ingot'),
                B: Item.of('reliquary:frozen_core'),
                C: Item.of('botania:gaia_ingot'),
                D: Item.of('forbidden_arcanus:deorum_ingot'),
                E: Item.of('botania:gaia_pylon'),
                F: Item.of('gribtweaks:purple_piece_of_specific_rune'),
                G: Item.of('arclight:arclight_core'),
                H: Item.of('gribtweaks:blue_piece_of_specific_rune'),
                T: Item.of('gribtweaks:basic_runic_stone'),
                I: Item.of('botania:manasteel_ingot') 
            },
            output: 'gribtweaks:specific_rune_base',
            id: `${prefix}specific_rune_base`
        },
        {
            pattern: [ 
                '  A   A  ', 
                ' AAA AAA ', 
                'AA AAA AA', 
                ' AAAAAAA ', 
                '  AAAAA  ', 
                ' AAAAAAA ', 
                'AA AAA AA', 
                ' AAA AAA ', 
                '  A   A  '
            ],
            key: {
                A: Item.of('gribtweaks:infinity_catalyst_pile')
            },
            output: 'avaritia:infinity_catalyst',
            id: `${prefix}infinity_catalyst_of_pile`
        },
    ];

    recipes.forEach((recipe) => {
        let constructed_recipe = {
            type: 'avaritia:shaped_extreme_craft',
            pattern: recipe.pattern,
            key: recipe.key,
            result: Item.of(recipe.output).toJson()
        };
        event.custom(constructed_recipe).id(recipe.id);
    });
});
