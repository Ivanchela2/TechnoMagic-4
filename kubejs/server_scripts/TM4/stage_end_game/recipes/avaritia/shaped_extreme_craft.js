ServerEvents.recipes(event => {
    const prefix = 'tm4:avaritia/shaped_extreme_craft/';
    const recipes = [
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
                A: Item.of('avaritia:neutron_nugget').toJson(),
			    B: Item.of('avaritia:neutronium_ingot').toJson(),
			    C: Item.of('extendedgears:steel_cogwheel').toJson(),
			    D: Item.of('extendedgears:large_steel_cogwheel').toJson(),
			    E: Item.of('forbidden_arcanus:dark_nether_star').toJson()
            },
            output: 'avaritia:neutronium_gear',
            id: `${prefix}neutronium_gear`
        },
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
                A: Item.of('minecraft:end_stone_bricks').toJson(),
			    B: Item.of('endersdelight:ender_shard').toJson(),
			    C: Item.of('avaritia:neutronium_ingot').toJson(),
			    D: Item.of('ae2:singularity').toJson()
            },
            output: 'avaritia:endest_pearl',
            id: `${prefix}endest_pearl`
        },
        {
            pattern: [ 
                'AB  C  BA',
                'BABACABAB',
                ' BADADAB ',
                ' ADDADDA ',
                'CCAAAAACC',
                ' ADDADDA ',
                ' BADADAB ',
                'BABACABAB',
                'AB  C  BA'
            ],
            key: {
                A: { type: 'forge:nbt', item: 'avaritia:singularity', count: 1, nbt: '{Id:\"avaritia:neutronium\"}' },
			    B: Item.of('reaper:soul_catalyst').toJson(),
			    C: Item.of('avaritia:neutronium_ingot').toJson(),
			    D: Item.of('silentgear:starmetal_dust').toJson()
            },
            output: 'gribtweaks:neutronium_catalyst',
            id: `${prefix}neutronium_catalyst`
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
                A: Item.of('avaritia:neutron_nugget').toJson(),
			    B: Item.of('avaritia:neutronium_ingot').toJson(),
			    C: Item.of('extendedgears:steel_cogwheel').toJson(),
			    D: Item.of('extendedgears:large_steel_cogwheel').toJson(),
			    E: Item.of('forbidden_arcanus:dark_nether_star').toJson()
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
                A: Item.of('ad_astra:steel_block').toJson(),
			    B: Item.of('minecraft:waxed_cut_copper').toJson(),
			    C: Item.of('amethyst_upgrade:amethyst_gemstone_block').toJson(),
			    D: Item.of('avaritia:crystal_matrix_ingot').toJson(),
			    E: Item.of('avaritia:neutronium_gear' ).toJson()
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
                A: Item.of('ad_astra:steel_block').toJson(),
			    B: Item.of('avaritia:crystal_matrix_ingot').toJson(),
			    C: Item.of('amethyst_upgrade:amethyst_gemstone_block').toJson(),
			    D: Item.of('ftbic:compressor').toJson(),
			    E: Item.of('create:mechanical_press').toJson(),
			    F: Item.of('ad_astra:calorite_plate').toJson(),
			    G: Item.of('avaritia:neutronium_gear' ).toJson(),
			    J: Item.of('avaritia:neutronium_ingot').toJson()
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
                A: Item.of('silentgear:tyrian_steel_block').toJson(),
			    B: Item.of('arclight:bloodstone_block' ).toJson(),
			    C: Item.of('ad_astra:calorite_block').toJson(),
			    D: Item.of('avaritia:crystal_matrix_ingot').toJson(),
			    E: Item.of('avaritia:neutron_collector' ).toJson()
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
                A: { type: "forge:nbt", item: "productivebees:configurable_honeycomb", count: 1, nbt: "{EntityTag:{type:\"productivebees:coal\"}}" },
			    B: Item.of('minecraft:coal_block' ).toJson(),
			    C: Item.of('ftbic:carbon_plate').toJson(),
			    D: Item.of('createbigcannons:cast_iron_block').toJson()
            },
            output: 'avaritia:star_fuel',
            id: `${prefix}star_fuel`
        },
        {
            pattern: [ 
                '  U   I  ', 
                ' O  7  P ', 
                'Q A S D Y', 
                '   FGH   ', 
                ' JKLZXCV ', 
                '   BNM   ', 
                'W 1 2 3 T', 
                ' 4  6  5 ', 
                '  E   R  ' 
            ],
            key: {
                Q: Item.of('naturesaura:token_joy').toJson(),
			    W: Item.of('naturesaura:token_fear').toJson(),
			    E: Item.of('naturesaura:token_anger').toJson(),
			    T: Item.of('naturesaura:token_sorrow').toJson(),
			    Y: Item.of('naturesaura:token_euphoria').toJson(),
			    U: Item.of('naturesaura:token_terror').toJson(),
			    I: Item.of('naturesaura:token_rage').toJson(),
			    R: Item.of('naturesaura:token_grief').toJson(),
			    F: Item.of('ad_astra:steel_block').toJson(),
			    G: Item.of('avaritia:cosmic_meatballs').toJson(),
			    H: Item.of('twilightforest:fiery_block').toJson(),
			    L: Item.of('avaritia:ultimate_stew').toJson(),
			    Z: Item.of('avaritia:endest_pearl').toJson(),
			    X: Item.of('avaritia:record_fragment').toJson(),
			    B: Item.of('botanicadds:gaiasteel_block').toJson(),
			    N: Item.of('avaritia:crystal_matrix_ingot').toJson(),
			    M: Item.of('amethyst_upgrade:amethyst_gemstone_block').toJson(),
			    O: { type: "forge:nbt", item: "avaritia:singularity", count: 1, nbt: "{Id:\"avaritia:amethyst\"}"},
			    P: { type: "forge:nbt", item: "avaritia:singularity", count: 1, nbt: "{Id:\"avaritia:bronze\"}"},
			    A: { type: "forge:nbt", item: 'avaritia:singularity', count: 1, nbt: "{Id:\"avaritia:calorite\"}"},
			    S: { type: "forge:nbt", item: 'avaritia:singularity', count: 1, nbt: "{Id:\"avaritia:dark_matter\"}"},
			    D: { type: "forge:nbt", item: 'avaritia:singularity', count: 1, nbt: "{Id:\"avaritia:depth\"}"},
			    J: { type: "forge:nbt", item: 'avaritia:singularity', count: 1, nbt: "{Id:\"avaritia:etherium\"}"},
			    K: { type: "forge:nbt", item: 'avaritia:singularity', count: 1, nbt: "{Id:\"avaritia:experience\"}"},
			    C: { type: "forge:nbt", item: 'avaritia:singularity', count: 1, nbt: "{Id:\"avaritia:fiery_blood\"}"},
			    V: { type: "forge:nbt", item: 'avaritia:singularity', count: 1, nbt: "{Id:\"avaritia:tyrian_steel\"}"},
			    1: { type: "forge:nbt", item: 'avaritia:singularity', count: 1, nbt: "{Id:\"avaritia:gribony\"}"},
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
                'QWERTYUIO', 
                'PM1M3M3MV', 
                'A1M123M3B', 
                'DM1M1M3MN', 
                'FGHJKLZXS', 
                '         ', 
                '         ' 
            ],
            key: {
                Q: { type: "forge:nbt", item: "productivebees:configurable_honeycomb", count: 1, nbt: "{EntityTag:{type:\"productivebees:titanium\"}}" },
			    W: { type: "forge:nbt", item: "productivebees:configurable_honeycomb", count: 1, nbt: "{EntityTag:{type:\"productivebees:iridium\"}}" },
			    E: { type: "forge:nbt", item: "productivebees:configurable_honeycomb", count: 1, nbt: "{EntityTag:{type:\"productivebees:netherite\"}}" },
			    T: { type: "forge:nbt", item: "productivebees:configurable_honeycomb", count: 1, nbt: "{EntityTag:{type:\"productivebees:obsidian\"}}" },
			    Y: { type: "forge:nbt", item: "productivebees:configurable_honeycomb", count: 1, nbt: "{EntityTag:{type:\"productivebees:fluix\"}}" },
			    U: { type: "forge:nbt", item: "productivebees:configurable_honeycomb", count: 1, nbt: "{EntityTag:{type:\"productivebees:amethyst\"}}" },
			    I: { type: "forge:nbt", item: "productivebees:configurable_honeycomb", count: 1, nbt: "{EntityTag:{type:\"productivebees:withered\"}}" },
			    R: { type: "forge:nbt", item: "productivebees:configurable_honeycomb", count: 1, nbt: "{EntityTag:{type:\"productivebees:ender\"}}" },
			    F: { type: "forge:nbt", item: "productivebees:configurable_honeycomb", count: 1, nbt: "{EntityTag:{type:\"productivebees:draconic\"}}" },
			    G: { type: "forge:nbt", item: "productivebees:configurable_honeycomb", count: 1, nbt: "{EntityTag:{type:\"productivebees:crystalline\"}}" },
			    H: { type: "forge:nbt", item: "productivebees:configurable_honeycomb", count: 1, nbt: "{EntityTag:{type:\"productivebees:brass\"}}" },
			    L: { type: "forge:nbt", item: "productivebees:configurable_honeycomb", count: 1, nbt: "{EntityTag:{type:\"productivebees:bronze\"}}" },
			    Z: { type: "forge:nbt", item: "productivebees:configurable_honeycomb", count: 1, nbt: "{EntityTag:{type:\"productivebees:tea\"}}" },
			    X: { type: "forge:nbt", item: "productivebees:configurable_honeycomb", count: 1, nbt: "{EntityTag:{type:\"productivebees:magmatic\"}}" },
			    B: { type: "forge:nbt", item: "productivebees:configurable_honeycomb", count: 1, nbt: "{EntityTag:{type:\"productivebees:glowing\"}}" },
			    N: { type: "forge:nbt", item: "productivebees:configurable_honeycomb", count: 1, nbt: "{EntityTag:{type:\"productivebees:cobalt\"}}" }, 
			    O: { type: "forge:nbt", item: "productivebees:configurable_honeycomb", count: 1, nbt: "{EntityTag:{type:\"productivebees:iesnium\"}}" },
			    P: { type: "forge:nbt", item: "productivebees:configurable_honeycomb", count: 1, nbt: "{EntityTag:{type:\"productivebees:prismarine\"}}" },
			    A: { type: "forge:nbt", item: "productivebees:configurable_honeycomb", count: 1, nbt: "{EntityTag:{type:\"productivebees:experience\"}}" },
			    S: { type: "forge:nbt", item: "productivebees:configurable_honeycomb", count: 1, nbt: "{EntityTag:{type:\"productivebees:red_shroom\"}}" },
			    D: { type: "forge:nbt", item: "productivebees:configurable_honeycomb", count: 1, nbt: "{EntityTag:{type:\"productivebees:calorite\"}}" },
			    J: { type: "forge:nbt", item: "productivebees:configurable_honeycomb", count: 1, nbt: "{EntityTag:{type:\"productivebees:chocolate\"}}" },
			    K: { type: "forge:nbt", item: "productivebees:configurable_honeycomb", count: 1, nbt: "{EntityTag:{type:\"productivebees:terrasteel\"}}" },
			    V: Item.of('productivebees:honeycomb_ghostly').toJson(),
                M: Item.of('avaritia:infinity_catalyst').toJson(),
			    1: Item.of('avaritia:crystal_matrix_ingot').toJson(),
			    2: Item.of('botania:maximum_catalyst').toJson(),
			    3: Item.of('avaritia:neutronium_ingot').toJson()
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
			    A: Item.of('avaritia:advanced_neutron_collector').toJson(),
			    C: Item.of('silentcompat:capsid_alloy_block').toJson(),
			    L: Item.of('biggerreactors:ludicrite_block').toJson(),
			    M: Item.of('avaritia:crystal_matrix_ingot').toJson(),
			    R: Item.of('forbidden_arcanus:dark_rune_block').toJson(),
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
			    A: Item.of('productivebees:infinity_honeycomb').toJson(),
			    B: Item.of('megacells:mana_storage_cell_256m').toJson(),
			    C: Item.of('megacells:fluid_storage_cell_256m').toJson(),
			    D: Item.of('megacells:item_storage_cell_256m').toJson(),
			    E: Item.of('megacells:bulk_item_cell').toJson(),
			    F: Item.of('aquaculture:neptunium_block').toJson(),
			    G: { type: "forge:nbt", item: "avaritia:singularity", count: 1, nbt: "{Id:\"avaritia:amethyst\"}"},
			    H: { type: "forge:nbt", item: "avaritia:singularity", count: 1, nbt: "{Id:\"avaritia:precision_mechanism\"}"},
			    I: { type: "forge:nbt", item: "avaritia:singularity", count: 1, nbt: "{Id:\"avaritia:terrasteel\"}"},
			    J: { type: "forge:nbt", item: "avaritia:singularity", count: 1, nbt: "{Id:\"avaritia:tyrian_steel\"}"},
                1: Item.of('chemlib:time_ingot').toJson(),
                2: Item.of('botanicadds:gaiasteel_ingot').toJson(),
                3: Item.of('twilightforest:fiery_ingot').toJson(),
                4: Item.of('avaritia:crystal_matrix_ingot').toJson(),
                5: Item.of('upgradednetherite_ultimate:ultimate_upgraded_netherite_ingot').toJson(),
                6: Item.of('enigmaticlegacy:etherium_ingot').toJson(),
                7: Item.of('ad_astra:protasteel_ingot').toJson(),
                8: Item.of('biggerreactors:reinforced_ludicrite_ingot').toJson(),
                9: Item.of('ad_astra:calorite_ingot').toJson(),
            },
            output: 'upgradednetherite_creative:creative_upgraded_netherite_ingot',
            id: `${prefix}creative_upgraded_netherite_ingot`
        }
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
