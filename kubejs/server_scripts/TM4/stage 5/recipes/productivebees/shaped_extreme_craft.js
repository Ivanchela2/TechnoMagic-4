ServerEvents.recipes(event => {
    const prefix = 'tm4:avaritia/shaped_extreme_craft/';
    const recipes = [
        {
            pattern: [ 
                'AAAAAAAAA',
                'ABBBBBBBA',
                'ABCCCCCBA',
                'ABCFFFCBA',
                'ABCEEECBA',
                'ABCDDDCBA',
                'ABCCCCCBA',
                'ABBBBBBBA',
                'AAAAAAAAA'
             ],
            key: {
                A: Item.of( 'minecraft:oak_planks').toJson(),
			    B: Item.of( 'gribtweaks:polished_quartz').toJson(),
			    C: { type: "forge:nbt", item: "productivebees:configurable_honeycomb", count: 1, nbt: "{EntityTag:{type:\"productivebees:zombie\"}}" },
			    D: Item.of( 'minecraft:soul_campfire').toJson(),
				E: Item.of( 'alloyed:steel_shears').toJson(),
				F: Item.of( 'minecraft:beehive').toJson()
            },
            result:  'productivebees:advanced_oak_beehive',
            id: `${prefix}advanced_oak_beehive`
        },
        {
            pattern: [ 
                'AAAAAAAAA',
                'ABBBBBBBA',
                'ABCCCCCBA',
                'ABCFFFCBA',
                'ABCEEECBA',
                'ABCDDDCBA',
                'ABCCCCCBA',
                'ABBBBBBBA',
                'AAAAAAAAA'
             ],
            key: {
                A: Item.of( 'minecraft:spruce_planks').toJson(),
			    B: Item.of( 'gribtweaks:polished_quartz').toJson(),
                C: { type: "forge:nbt", item: "productivebees:configurable_honeycomb", count: 1, nbt: "{EntityTag:{type:\"productivebees:zombie\"}}" },
                D: Item.of( 'minecraft:soul_campfire').toJson(),
				E: Item.of( 'alloyed:steel_shears').toJson(),
				F: Item.of( 'minecraft:beehive').toJson()
            },
            result: 'productivebees:advanced_spruce_beehive',
            id: `${prefix}advanced_spruce_beehive`
        },
        {
            pattern: [ 
                'AAAAAAAAA',
                'ABBBBBBBA',
                'ABCCCCCBA',
                'ABCFFFCBA',
                'ABCEEECBA',
                'ABCDDDCBA',
                'ABCCCCCBA',
                'ABBBBBBBA',
                'AAAAAAAAA'
             ],
            key: {
                A: Item.of( 'minecraft:birch_planks').toJson(),
			    B: Item.of( 'gribtweaks:polished_quartz').toJson(),
                C: { type: "forge:nbt", item: "productivebees:configurable_honeycomb", count: 1, nbt: "{EntityTag:{type:\"productivebees:zombie\"}}" },
			    D: Item.of( 'minecraft:soul_campfire').toJson(),
				E: Item.of( 'alloyed:steel_shears').toJson(),
				F: Item.of( 'minecraft:beehive').toJson()
            },
            result: 'productivebees:advanced_birch_beehive',
            id: `${prefix}advanced_birch_beehive`
        },
        {
            pattern: [ 
                'AAAAAAAAA',
                'ABBBBBBBA',
                'ABCCCCCBA',
                'ABCFFFCBA',
                'ABCEEECBA',
                'ABCDDDCBA',
                'ABCCCCCBA',
                'ABBBBBBBA',
                'AAAAAAAAA'
             ],
            key: {
                A: Item.of( 'minecraft:acacia_planks').toJson(),
			    B: Item.of( 'gribtweaks:polished_quartz').toJson(),
                C: { type: "forge:nbt", item: "productivebees:configurable_honeycomb", count: 1, nbt: "{EntityTag:{type:\"productivebees:zombie\"}}" },
			    D: Item.of( 'minecraft:soul_campfire').toJson(),
				E: Item.of( 'alloyed:steel_shears').toJson(),
				F: Item.of( 'minecraft:beehive').toJson()
            },
            result: 'productivebees:advanced_acacia_beehive',
            id: `${prefix}advanced_acacia_beehive`
        },
        {
            pattern: [ 
                'AAAAAAAAA',
                'ABBBBBBBA',
                'ABCCCCCBA',
                'ABCFFFCBA',
                'ABCEEECBA',
                'ABCDDDCBA',
                'ABCCCCCBA',
                'ABBBBBBBA',
                'AAAAAAAAA'
             ],
            key: {
                A: Item.of( 'minecraft:dark_oak_planks').toJson(),
			    B: Item.of( 'gribtweaks:polished_quartz').toJson(),
                C: { type: "forge:nbt", item: "productivebees:configurable_honeycomb", count: 1, nbt: "{EntityTag:{type:\"productivebees:zombie\"}}" },
			    D: Item.of( 'minecraft:soul_campfire').toJson(),
				E: Item.of( 'alloyed:steel_shears').toJson(),
				F: Item.of( 'minecraft:beehive').toJson()
            },
            result: 'productivebees:advanced_dark_oak_beehive',
            id: `${prefix}advanced_dark_oak_beehive`
        },
        {
            pattern: [ 
                'AAAAAAAAA',
                'ABBBBBBBA',
                'ABCCCCCBA',
                'ABCFFFCBA',
                'ABCEEECBA',
                'ABCDDDCBA',
                'ABCCCCCBA',
                'ABBBBBBBA',
                'AAAAAAAAA'
             ],
            key: {
                A: Item.of( 'minecraft:jungle_planks').toJson(),
			    B: Item.of( 'gribtweaks:polished_quartz').toJson(),
                C: { type: "forge:nbt", item: "productivebees:configurable_honeycomb", count: 1, nbt: "{EntityTag:{type:\"productivebees:zombie\"}}" },
			    D: Item.of( 'minecraft:soul_campfire').toJson(),
				E: Item.of( 'alloyed:steel_shears').toJson(),
				F: Item.of( 'minecraft:beehive').toJson()
            },
            result: 'productivebees:advanced_jungle_beehive',
            id: `${prefix}advanced_jungle_beehive`
        },
        {
            pattern: [ 
                'AAAAAAAAA',
                'ABBBBBBBA',
                'ABCCCCCBA',
                'ABCFFFCBA',
                'ABCEEECBA',
                'ABCDDDCBA',
                'ABCCCCCBA',
                'ABBBBBBBA',
                'AAAAAAAAA'
             ],
            key: {
                A: Item.of( 'minecraft:crimson_planks').toJson(),
			    B: Item.of( 'gribtweaks:polished_quartz').toJson(),
                C: { type: "forge:nbt", item: "productivebees:configurable_honeycomb", count: 1, nbt: "{EntityTag:{type:\"productivebees:zombie\"}}" },
			    D: Item.of( 'minecraft:soul_campfire').toJson(),
				E: Item.of( 'alloyed:steel_shears').toJson(),
				F: Item.of( 'minecraft:beehive').toJson()
            },
            result: 'productivebees:advanced_crimson_beehive',
            id: `${prefix}advanced_crimson_beehive`
        },
        {
            pattern: [ 
                'AAAAAAAAA',
                'ABBBBBBBA',
                'ABCCCCCBA',
                'ABCFFFCBA',
                'ABCEEECBA',
                'ABCDDDCBA',
                'ABCCCCCBA',
                'ABBBBBBBA',
                'AAAAAAAAA'
             ],
            key: {
                A: Item.of( 'minecraft:warped_planks').toJson(),
			    B: Item.of( 'gribtweaks:polished_quartz').toJson(),
                C: { type: "forge:nbt", item: "productivebees:configurable_honeycomb", count: 1, nbt: "{EntityTag:{type:\"productivebees:zombie\"}}" },
			    D: Item.of( 'minecraft:soul_campfire').toJson(),
				E: Item.of( 'alloyed:steel_shears').toJson(),
				F: Item.of( 'minecraft:beehive').toJson()
            },
            result: 'productivebees:advanced_warped_beehive',
            id: `${prefix}advanced_warped_beehive`
        },
        {
            pattern: [ 
                'AAAAAAAAA',
                'ABBBBBBBA',
                'ABCCCCCBA',
                'ABCFFFCBA',
                'ABCEEECBA',
                'ABCDDDCBA',
                'ABCCCCCBA',
                'ABBBBBBBA',
                'AAAAAAAAA'
             ],
            key: {
                A: Item.of( 'minecraft:dark_prismarine').toJson(),
			    B: Item.of( 'gribtweaks:polished_quartz').toJson(),
                C: { type: "forge:nbt", item: "productivebees:configurable_honeycomb", count: 1, nbt: "{EntityTag:{type:\"productivebees:zombie\"}}" },
			    D: Item.of( 'minecraft:soul_campfire').toJson(),
				E: Item.of( 'alloyed:steel_shears').toJson(),
				F: Item.of( 'minecraft:beehive').toJson()
            },
            result: 'productivebees:advanced_snake_block_beehive',
            id: `${prefix}advanced_snake_block_beehive`
        },
        {
            pattern: [ 
                'AAB1BAA',
                'A2CDC4A',
                'BC3EFCB',
                '5DFHFD6',
                'BCFE7CB',
                'A8CDC9A',
                'AAB0BAA'
             ],
            key: {
                A: Item.of( 'minecraft:oak_planks').toJson(),
			    B: Item.of( 'gribtweaks:polished_antimatter_crystal').toJson(),
                C: Item.of( 'gribtweaks:angel_ingot').toJson(),
			    D: Item.of( 'productivebees:upgrade_base').toJson(),
				E: Item.of( 'gribtweaks:photoniy_circuit').toJson(),
				F: Item.of( 'gribtweaks:proton').toJson(),
                H: Item.of( 'gribtweaks:advanced_casing').toJson(),
                0: Item.of( 'gribtweaks:phantom_upgraded_netherite_eye').toJson(),
                1: Item.of( 'gribtweaks:echo_upgraded_netherite_eye').toJson(),
                2: Item.of( 'gribtweaks:gold_upgraded_netherite_eye').toJson(),
                3: Item.of( 'gribtweaks:water_upgraded_netherite_eye').toJson(),
                4: Item.of( 'gribtweaks:wither_upgraded_netherite_eye').toJson(),
                5: Item.of( 'gribtweaks:ender_upgraded_netherite_eye').toJson(),
                6: Item.of( 'gribtweaks:poison_upgraded_netherite_eye').toJson(),
                7: Item.of( 'gribtweaks:fire_upgraded_netherite_eye').toJson(),
                8: Item.of( 'gribtweaks:corrupt_upgraded_netherite_eye').toJson(),
                9: Item.of( 'gribtweaks:feather_upgraded_netherite_eye').toJson()
            },
            result: 'productivebees:expansion_box_oak',
            id: `${prefix}expansion_box_oak`
        },
        {
            pattern: [ 
                'AAB1BAA',
                'A2CDC4A',
                'BC3EFCB',
                '5DFHFD6',
                'BCFE7CB',
                'A8CDC9A',
                'AAB0BAA'
             ],
            key: {
                A: Item.of( 'minecraft:spruce_planks').toJson(),
			    B: Item.of( 'gribtweaks:polished_antimatter_crystal').toJson(),
                C: Item.of( 'gribtweaks:angel_ingot').toJson(),
			    D: Item.of( 'productivebees:upgrade_base').toJson(),
				E: Item.of( 'gribtweaks:photoniy_circuit').toJson(),
				F: Item.of( 'gribtweaks:proton').toJson(),
                H: Item.of( 'gribtweaks:advanced_casing').toJson(),
                0: Item.of( 'gribtweaks:phantom_upgraded_netherite_eye').toJson(),
                1: Item.of( 'gribtweaks:echo_upgraded_netherite_eye').toJson(),
                2: Item.of( 'gribtweaks:gold_upgraded_netherite_eye').toJson(),
                3: Item.of( 'gribtweaks:water_upgraded_netherite_eye').toJson(),
                4: Item.of( 'gribtweaks:wither_upgraded_netherite_eye').toJson(),
                5: Item.of( 'gribtweaks:ender_upgraded_netherite_eye').toJson(),
                6: Item.of( 'gribtweaks:poison_upgraded_netherite_eye').toJson(),
                7: Item.of( 'gribtweaks:fire_upgraded_netherite_eye').toJson(),
                8: Item.of( 'gribtweaks:corrupt_upgraded_netherite_eye').toJson(),
                9: Item.of( 'gribtweaks:feather_upgraded_netherite_eye').toJson()
            },
            result: 'productivebees:expansion_box_spruce',
            id: `${prefix}expansion_box_spruce`
        },
        {
            pattern: [ 
                'AAB1BAA',
                'A2CDC4A',
                'BC3EFCB',
                '5DFHFD6',
                'BCFE7CB',
                'A8CDC9A',
                'AAB0BAA'
             ],
            key: {
                A: Item.of( 'minecraft:birch_planks').toJson(),
			    B: Item.of( 'gribtweaks:polished_antimatter_crystal').toJson(),
                C: Item.of( 'gribtweaks:angel_ingot').toJson(),
			    D: Item.of( 'productivebees:upgrade_base').toJson(),
				E: Item.of( 'gribtweaks:photoniy_circuit').toJson(),
				F: Item.of( 'gribtweaks:proton').toJson(),
                H: Item.of( 'gribtweaks:advanced_casing').toJson(),
                0: Item.of( 'gribtweaks:phantom_upgraded_netherite_eye').toJson(),
                1: Item.of( 'gribtweaks:echo_upgraded_netherite_eye').toJson(),
                2: Item.of( 'gribtweaks:gold_upgraded_netherite_eye').toJson(),
                3: Item.of( 'gribtweaks:water_upgraded_netherite_eye').toJson(),
                4: Item.of( 'gribtweaks:wither_upgraded_netherite_eye').toJson(),
                5: Item.of( 'gribtweaks:ender_upgraded_netherite_eye').toJson(),
                6: Item.of( 'gribtweaks:poison_upgraded_netherite_eye').toJson(),
                7: Item.of( 'gribtweaks:fire_upgraded_netherite_eye').toJson(),
                8: Item.of( 'gribtweaks:corrupt_upgraded_netherite_eye').toJson(),
                9: Item.of( 'gribtweaks:feather_upgraded_netherite_eye').toJson()
            },
            result: 'productivebees:expansion_box_birch',
            id: `${prefix}expansion_box_birch`
        },
        {
            pattern: [ 
                'AAB1BAA',
                'A2CDC4A',
                'BC3EFCB',
                '5DFHFD6',
                'BCFE7CB',
                'A8CDC9A',
                'AAB0BAA'
             ],
            key: {
                A: Item.of( 'minecraft:jungle_planks').toJson(),
			    B: Item.of( 'gribtweaks:polished_antimatter_crystal').toJson(),
                C: Item.of( 'gribtweaks:angel_ingot').toJson(),
			    D: Item.of( 'productivebees:upgrade_base').toJson(),
				E: Item.of( 'gribtweaks:photoniy_circuit').toJson(),
				F: Item.of( 'gribtweaks:proton').toJson(),
                H: Item.of( 'gribtweaks:advanced_casing').toJson(),
                0: Item.of( 'gribtweaks:phantom_upgraded_netherite_eye').toJson(),
                1: Item.of( 'gribtweaks:echo_upgraded_netherite_eye').toJson(),
                2: Item.of( 'gribtweaks:gold_upgraded_netherite_eye').toJson(),
                3: Item.of( 'gribtweaks:water_upgraded_netherite_eye').toJson(),
                4: Item.of( 'gribtweaks:wither_upgraded_netherite_eye').toJson(),
                5: Item.of( 'gribtweaks:ender_upgraded_netherite_eye').toJson(),
                6: Item.of( 'gribtweaks:poison_upgraded_netherite_eye').toJson(),
                7: Item.of( 'gribtweaks:fire_upgraded_netherite_eye').toJson(),
                8: Item.of( 'gribtweaks:corrupt_upgraded_netherite_eye').toJson(),
                9: Item.of( 'gribtweaks:feather_upgraded_netherite_eye').toJson()
            },
            result: 'productivebees:expansion_box_jungle',
            id: `${prefix}expansion_box_jungle`
        },
        {
            pattern: [ 
                'AAB1BAA',
                'A2CDC4A',
                'BC3EFCB',
                '5DFHFD6',
                'BCFE7CB',
                'A8CDC9A',
                'AAB0BAA'
             ],
            key: {
                A: Item.of( 'minecraft:acacia_planks').toJson(),
			    B: Item.of( 'gribtweaks:polished_antimatter_crystal').toJson(),
                C: Item.of( 'gribtweaks:angel_ingot').toJson(),
			    D: Item.of( 'productivebees:upgrade_base').toJson(),
				E: Item.of( 'gribtweaks:photoniy_circuit').toJson(),
				F: Item.of( 'gribtweaks:proton').toJson(),
                H: Item.of( 'gribtweaks:advanced_casing').toJson(),
                0: Item.of( 'gribtweaks:phantom_upgraded_netherite_eye').toJson(),
                1: Item.of( 'gribtweaks:echo_upgraded_netherite_eye').toJson(),
                2: Item.of( 'gribtweaks:gold_upgraded_netherite_eye').toJson(),
                3: Item.of( 'gribtweaks:water_upgraded_netherite_eye').toJson(),
                4: Item.of( 'gribtweaks:wither_upgraded_netherite_eye').toJson(),
                5: Item.of( 'gribtweaks:ender_upgraded_netherite_eye').toJson(),
                6: Item.of( 'gribtweaks:poison_upgraded_netherite_eye').toJson(),
                7: Item.of( 'gribtweaks:fire_upgraded_netherite_eye').toJson(),
                8: Item.of( 'gribtweaks:corrupt_upgraded_netherite_eye').toJson(),
                9: Item.of( 'gribtweaks:feather_upgraded_netherite_eye').toJson()
            },
            result: 'productivebees:expansion_box_acacia',
            id: `${prefix}expansion_box_acacia`
        },
        {
            pattern: [ 
                'AAB1BAA',
                'A2CDC4A',
                'BC3EFCB',
                '5DFHFD6',
                'BCFE7CB',
                'A8CDC9A',
                'AAB0BAA'
             ],
            key: {
                A: Item.of( 'minecraft:crimson_planks').toJson(),
			    B: Item.of( 'gribtweaks:polished_antimatter_crystal').toJson(),
                C: Item.of( 'gribtweaks:angel_ingot').toJson(),
			    D: Item.of( 'productivebees:upgrade_base').toJson(),
				E: Item.of( 'gribtweaks:photoniy_circuit').toJson(),
				F: Item.of( 'gribtweaks:proton').toJson(),
                H: Item.of( 'gribtweaks:advanced_casing').toJson(),
                0: Item.of( 'gribtweaks:phantom_upgraded_netherite_eye').toJson(),
                1: Item.of( 'gribtweaks:echo_upgraded_netherite_eye').toJson(),
                2: Item.of( 'gribtweaks:gold_upgraded_netherite_eye').toJson(),
                3: Item.of( 'gribtweaks:water_upgraded_netherite_eye').toJson(),
                4: Item.of( 'gribtweaks:wither_upgraded_netherite_eye').toJson(),
                5: Item.of( 'gribtweaks:ender_upgraded_netherite_eye').toJson(),
                6: Item.of( 'gribtweaks:poison_upgraded_netherite_eye').toJson(),
                7: Item.of( 'gribtweaks:fire_upgraded_netherite_eye').toJson(),
                8: Item.of( 'gribtweaks:corrupt_upgraded_netherite_eye').toJson(),
                9: Item.of( 'gribtweaks:feather_upgraded_netherite_eye').toJson()
            },
            result: 'productivebees:expansion_box_crimson',
            id: `${prefix}expansion_box_crimson`
        },
        {
            pattern: [ 
                'AAB1BAA',
                'A2CDC4A',
                'BC3EFCB',
                '5DFHFD6',
                'BCFE7CB',
                'A8CDC9A',
                'AAB0BAA'
             ],
            key: {
                A: Item.of( 'minecraft:dark_oak_planks').toJson(),
			    B: Item.of( 'gribtweaks:polished_antimatter_crystal').toJson(),
                C: Item.of( 'gribtweaks:angel_ingot').toJson(),
			    D: Item.of( 'productivebees:upgrade_base').toJson(),
				E: Item.of( 'gribtweaks:photoniy_circuit').toJson(),
				F: Item.of( 'gribtweaks:proton').toJson(),
                H: Item.of( 'gribtweaks:advanced_casing').toJson(),
                0: Item.of( 'gribtweaks:phantom_upgraded_netherite_eye').toJson(),
                1: Item.of( 'gribtweaks:echo_upgraded_netherite_eye').toJson(),
                2: Item.of( 'gribtweaks:gold_upgraded_netherite_eye').toJson(),
                3: Item.of( 'gribtweaks:water_upgraded_netherite_eye').toJson(),
                4: Item.of( 'gribtweaks:wither_upgraded_netherite_eye').toJson(),
                5: Item.of( 'gribtweaks:ender_upgraded_netherite_eye').toJson(),
                6: Item.of( 'gribtweaks:poison_upgraded_netherite_eye').toJson(),
                7: Item.of( 'gribtweaks:fire_upgraded_netherite_eye').toJson(),
                8: Item.of( 'gribtweaks:corrupt_upgraded_netherite_eye').toJson(),
                9: Item.of( 'gribtweaks:feather_upgraded_netherite_eye').toJson()
            },
            result: 'productivebees:expansion_box_dark_oak',
            id: `${prefix}expansion_box_dark_oak`
        },
        {
            pattern: [ 
                'AAB1BAA',
                'A2CDC4A',
                'BC3EFCB',
                '5DFHFD6',
                'BCFE7CB',
                'A8CDC9A',
                'AAB0BAA'
             ],
            key: {
                A: Item.of( 'minecraft:warped_planks').toJson(),
			    B: Item.of( 'gribtweaks:polished_antimatter_crystal').toJson(),
                C: Item.of( 'gribtweaks:angel_ingot').toJson(),
			    D: Item.of( 'productivebees:upgrade_base').toJson(),
				E: Item.of( 'gribtweaks:photoniy_circuit').toJson(),
				F: Item.of( 'gribtweaks:proton').toJson(),
                H: Item.of( 'gribtweaks:advanced_casing').toJson(),
                0: Item.of( 'gribtweaks:phantom_upgraded_netherite_eye').toJson(),
                1: Item.of( 'gribtweaks:echo_upgraded_netherite_eye').toJson(),
                2: Item.of( 'gribtweaks:gold_upgraded_netherite_eye').toJson(),
                3: Item.of( 'gribtweaks:water_upgraded_netherite_eye').toJson(),
                4: Item.of( 'gribtweaks:wither_upgraded_netherite_eye').toJson(),
                5: Item.of( 'gribtweaks:ender_upgraded_netherite_eye').toJson(),
                6: Item.of( 'gribtweaks:poison_upgraded_netherite_eye').toJson(),
                7: Item.of( 'gribtweaks:fire_upgraded_netherite_eye').toJson(),
                8: Item.of( 'gribtweaks:corrupt_upgraded_netherite_eye').toJson(),
                9: Item.of( 'gribtweaks:feather_upgraded_netherite_eye').toJson()
            },
            result: 'productivebees:expansion_box_warped',
            id: `${prefix}expansion_box_warped`
        },
        {
            pattern: [ 
                'AAB1BAA',
                'A2CDC4A',
                'BC3EFCB',
                '5DFHFD6',
                'BCFE7CB',
                'A8CDC9A',
                'AAB0BAA'
             ],
            key: {
                A: Item.of( 'minecraft:dark_prismarine').toJson(),
			    B: Item.of( 'gribtweaks:polished_antimatter_crystal').toJson(),
                C: Item.of( 'gribtweaks:angel_ingot').toJson(),
			    D: Item.of( 'productivebees:upgrade_base').toJson(),
				E: Item.of( 'gribtweaks:photoniy_circuit').toJson(),
				F: Item.of( 'gribtweaks:proton').toJson(),
                H: Item.of( 'gribtweaks:advanced_casing').toJson(),
                0: Item.of( 'gribtweaks:phantom_upgraded_netherite_eye').toJson(),
                1: Item.of( 'gribtweaks:echo_upgraded_netherite_eye').toJson(),
                2: Item.of( 'gribtweaks:gold_upgraded_netherite_eye').toJson(),
                3: Item.of( 'gribtweaks:water_upgraded_netherite_eye').toJson(),
                4: Item.of( 'gribtweaks:wither_upgraded_netherite_eye').toJson(),
                5: Item.of( 'gribtweaks:ender_upgraded_netherite_eye').toJson(),
                6: Item.of( 'gribtweaks:poison_upgraded_netherite_eye').toJson(),
                7: Item.of( 'gribtweaks:fire_upgraded_netherite_eye').toJson(),
                8: Item.of( 'gribtweaks:corrupt_upgraded_netherite_eye').toJson(),
                9: Item.of( 'gribtweaks:feather_upgraded_netherite_eye').toJson()
            },
            result: 'productivebees:expansion_box_snake_block',
            id: `${prefix}expansion_box_snake_block`
        }
    ];

    recipes.forEach((recipe) => {
        let constructed_recipe = {
            type: 'avaritia:shaped_extreme_craft',
            pattern: recipe.pattern,
            key: recipe.key,
            result: Ingredient.of(recipe.result).toJson()
        };
        event.custom(constructed_recipe).id(recipe.id);
    });
});
