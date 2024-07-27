ServerEvents.recipes(e => {
    const prefix = 'gribtweaks:botanicadds/gaia_plate/';
    const recipes = [
        {
            ingredients: [{item: 'gribtweaks:advanced_rocket_nose_cone'}, {item: 'gribtweaks:maximum_catalyst'}, {item: 'botanicadds:gaiasteel_ingot'}, {item: 'ad_astra:calorite_block'}],
            result: {item: 'gribtweaks:ultra_rocket_nose_cone'},
            mana: 500000,
            id: `${prefix}ultra_rocket_nose_cone`
        },
        {
            ingredients: [{item: 'ad_astra:ostrum_tank'}, {item: 'gribtweaks:maximum_catalyst'}, {item: 'botanicadds:gaiasteel_ingot'}, {item: 'botanicadds:gaiasteel_ingot'}, {item: 'ad_astra:calorite_block'}],
            result: {item: 'ad_astra:calorite_tank'},
            mana: 1000000,
            id: `${prefix}calorite_tank`
        },
        {
            ingredients: [{item: 'ad_astra:ostrum_engine'}, {item: 'gribtweaks:maximum_catalyst'}, {item: 'botanicadds:gaiasteel_ingot'}, {item: 'botanicadds:gaiasteel_ingot'}, {item: 'ad_astra:calorite_block'}],
            result: {item: 'ad_astra:calorite_engine'},
            mana: 1000000,
            id: `${prefix}calorite_engine`
        },
        {
            ingredients: [{item: 'gribtweaks:advanced_covering'}, {item: 'gribtweaks:advanced_covering'}, {item: 'gribtweaks:maximum_catalyst'}, {item: 'botanicadds:gaiasteel_ingot'}, {item: 'botanicadds:gaiasteel_ingot'}, {item: 'ad_astra:calorite_block'}],
            result: {item: 'gribtweaks:ultra_covering', count: 2},
            mana: 750000,
            id: `${prefix}ultra_covering`
        },
        {
            ingredients: [{item: 'gribtweaks:advanced_rocket_fin'}, {item: 'gribtweaks:ultra_covering'}, {item: 'gribtweaks:maximum_catalyst'}, {item: 'botanicadds:gaiasteel_ingot'}, {item: 'botanicadds:gaiasteel_ingot'}, {item: 'ad_astra:calorite_block'}],
            result: {item: 'gribtweaks:ultra_rocket_fin'},
            mana: 500000,
            id: `${prefix}ultra_rocket_fin`
        },
        {
            ingredients: [{item: 'botania:white_petal_block'},{item: 'botania:orange_petal_block'},{item: 'botania:magenta_petal_block'},{item: 'botania:light_blue_petal_block'},{item: 'botania:yellow_petal_block'},{item: 'botania:lime_petal_block'},{item: 'botania:pink_petal_block'},{item: 'botania:gray_petal_block'},{item: 'botania:light_gray_petal_block'},{item: 'botania:cyan_petal_block'},{item: 'botania:purple_petal_block'},{item: 'botania:blue_petal_block'},{item: 'botania:brown_petal_block'},{item: 'botania:green_petal_block'},{item: 'botania:red_petal_block'},{item: 'botania:black_petal_block'}, {item: 'gribtweaks:botany_catalyst'}],
            result: {item: 'gribtweaks:infinity_petal'},
            mana: 200000,
            id: `${prefix}infinity_petal`
        },
        {
            ingredients: [{item: 'gribtweaks:rune_base'},{item: 'gribtweaks:infinity_petal'}, {item: 'gribtweaks:gaia_catalyst'}, {item: 'gribtweaks:botany_catalyst'}, {item: 'gribtweaks:gaia_punishment'}, {item: 'gribtweaks:terrasteel_potency'}, {item: 'gribtweaks:elves_endowment'}, {item: 'chemlib:botany_compound'}, {item: 'botania:dice'}],
            result: {item: 'gribtweaks:maximum_catalyst'},
            mana: 500000,
            id: `${prefix}maximum_catalyst`
        },
        {
            ingredients: [{item: 'botania:gaia_ingot'}, {item: 'botania:gaia_spreader'}, {item: 'botanicadds:gaiasteel_ingot'}, {item: 'botanicadds:gaiasteel_pylon'}, {item: 'gribtweaks:life_essence_block'}],
            result: {item: 'gribtweaks:gaia_punishment'},
            mana: 250000,
            id: `${prefix}gaia_punishment`
        },
        {
            ingredients: [{item: 'botanicadds:gaiasteel_ingot'}, {item: 'botanicadds:gaiasteel_ingot'}, {item: 'botanicalmachinery:mana_emerald_block'}, {item: 'botanicadds:gaiasteel_pylon'}, {item: 'ftbic:ev_battery_box'}, {item: 'botania:mana_ring_greater'}, {item:'gribtweaks:gaia_catalyst'}],
            result: {item: 'botanicalmachinery:mana_battery'},
            mana: 750000,
            id: `${prefix}mana_battery`
        },
        {
            ingredients: [{item: 'appbot:mana_cell_housing'},{item: 'ae2:cell_component_1k'}],
            result: {item: 'appbot:mana_storage_cell_1k'},
            mana: 80000,
            id: `${prefix}mana_storage_cell_1k`
        },
        {
            ingredients: [{item: 'appbot:mana_storage_cell_1k'},{item: 'ae2:cell_component_4k'}],
            result: {item: 'appbot:mana_storage_cell_4k'},
            mana: 160000,
            id: `${prefix}mana_storage_cell_4k`
        },
        {
            ingredients: [{item: 'appbot:mana_storage_cell_4k'},{item: 'ae2:cell_component_16k'}],
            result: {item: 'appbot:mana_storage_cell_16k'},
            mana: 320000,
            id: `${prefix}mana_storage_cell_16k`
        },
        {
            ingredients: [{item: 'appbot:mana_storage_cell_16k'},{item: 'ae2:cell_component_64k'}, {item: 'gribtweaks:specific_rune_base'}],
            result: {item: 'appbot:mana_storage_cell_64k'},
            mana: 640000,
            id: `${prefix}mana_storage_cell_64k`
        },
        {
            ingredients: [{item: 'appbot:mana_storage_cell_64k'},{item: 'ae2:cell_component_256k'}, {item: 'gribtweaks:specific_rune_base'}],
            result: {item: 'appbot:mana_storage_cell_256k'},
            mana: 800000,
            id: `${prefix}mana_storage_cell_256k`
        },
        {
            ingredients: [{item: 'ae2:chest'}, {item: 'ae2:cell_component_1k'}, {item: 'ae2:energy_cell'}, {item: 'appbot:mana_cell_housing'}],
            result: {item: 'appbot:portable_mana_storage_cell_1k'},
            mana: 100000,
            id: `${prefix}portable_mana_storage_cell_1k`
        },
        {
            ingredients: [{item: 'appbot:portable_mana_storage_cell_1k'}, {item: 'ae2:chest'}, {item: 'ae2:cell_component_4k'}, {item: 'ae2:energy_cell'}],
            result: {item: 'appbot:portable_mana_storage_cell_4k'},
            mana: 160000,
            id: `${prefix}portable_mana_storage_cell_4k`
        },
        {
            ingredients: [{item: 'appbot:portable_mana_storage_cell_4k'}, {item: 'ae2:chest'}, {item: 'ae2:cell_component_16k'}, {item: 'ae2:energy_cell'}],
            result: {item: 'appbot:portable_mana_storage_cell_16k'},
            mana: 320000,
            id: `${prefix}portable_mana_storage_cell_16k`
        },
        {
            ingredients: [{item: 'appbot:portable_mana_storage_cell_16k'}, {item: 'ae2:chest'}, {item: 'ae2:cell_component_64k'}, {item: 'ae2:energy_cell'}, {item: 'gribtweaks:specific_rune_base'}],
            result: {item: 'appbot:portable_mana_storage_cell_64k'},
            mana: 640000,
            id: `${prefix}portable_mana_storage_cell_64k`
        },
        {
            ingredients: [{item: 'appbot:portable_mana_storage_cell_64k'}, {item: 'ae2:chest'}, {item: 'ae2:cell_component_256k'}, {item: 'ae2:energy_cell'}, {item: 'gribtweaks:specific_rune_base'}],
            result: {item: 'appbot:portable_mana_storage_cell_256k'},
            mana: 800000,
            id: `${prefix}portable_mana_storage_cell_256k`
        },
        {
            ingredients: [{item: 'appbot:mana_cell_housing'}, {item: 'gribtweaks:terrasteel_potency'}, {item: 'gribtweaks:terrasteel_potency'}, {item: 'botania:gaia_ingot'}, {item: 'gribtweaks:infinity_petal'}],
            result: {item: 'megacells:mega_mana_cell_housing'},
            mana: 500000,
            id: `${prefix}mega_mana_cell_housing`
        },
        {
            ingredients: [{item: 'appbot:mana_storage_cell_256k'}, {item: 'megacells:mega_mana_cell_housing'},{item: 'megacells:cell_component_1m'}, {item: 'gribtweaks:specific_rune_base'}],
            result: {item: 'megacells:mana_storage_cell_1m'},
            mana: 100000,
            id: `${prefix}mana_storage_cell_1m`
        },
        {
            ingredients: [{item: 'megacells:mana_storage_cell_1m'},{item: 'megacells:cell_component_4m'}, {item: 'gribtweaks:specific_rune_base'}],
            result: {item: 'megacells:mana_storage_cell_4m'},
            mana: 160000,
            id: `${prefix}mana_storage_cell_4m`
        },
        {
            ingredients: [{item: 'megacells:mana_storage_cell_4m'},{item: 'megacells:cell_component_16m'}, {item: 'gribtweaks:specific_rune_base'}],
            result: {item: 'megacells:mana_storage_cell_16m'},
            mana: 320000,
            id: `${prefix}mana_storage_cell_16m`
        },
        {
            ingredients: [{item: 'megacells:mana_storage_cell_16m'},{item: 'megacells:cell_component_64m'}, {item: 'gribtweaks:specific_rune_base'}],
            result: {item: 'megacells:mana_storage_cell_64m'},
            mana: 640000,
            id: `${prefix}mana_storage_cell_64m`
        },
        {
            ingredients: [{item: 'megacells:mana_storage_cell_64m'},{item: 'megacells:cell_component_256m'}, {item: 'gribtweaks:specific_rune_base'}],
            result: {item: 'megacells:mana_storage_cell_256m'},
            mana: 800000,
            id: `${prefix}mana_storage_cell_256m`
        },
        {
            ingredients: [{item: 'appbot:portable_mana_storage_cell_256k'}, {item: 'ae2:chest'}, {item: 'megacells:cell_component_1m'}, {item: 'ae2:energy_cell'}, {item: 'megacells:mega_mana_cell_housing'}, {item: 'gribtweaks:specific_rune_base'}],
            result: {item: 'megacells:portable_mana_cell_1m'},
            mana: 80000,
            id: `${prefix}portable_mana_storage_cell_1m`
        },
        {
            ingredients: [{item: 'megacells:portable_mana_cell_1m'}, {item: 'ae2:chest'}, {item: 'megacells:cell_component_4m'}, {item: 'ae2:energy_cell'}, {item: 'gribtweaks:specific_rune_base'}],
            result: {item: 'megacells:portable_mana_cell_4m'},
            mana: 160000,
            id: `${prefix}portable_mana_storage_cell_4m`
        },
        {
            ingredients: [{item: 'megacells:portable_mana_cell_4m'}, {item: 'ae2:chest'}, {item: 'megacells:cell_component_16m'}, {item: 'ae2:energy_cell'}, {item: 'gribtweaks:specific_rune_base'}],
            result: {item: 'megacells:portable_mana_cell_16m'},
            mana: 320000,
            id: `${prefix}portable_mana_storage_cell_16m`
        },
        {
            ingredients: [{item: 'megacells:portable_mana_cell_16m'}, {item: 'ae2:chest'}, {item: 'megacells:cell_component_64m'}, {item: 'ae2:energy_cell'}, {item: 'gribtweaks:specific_rune_base'}],
            result: {item: 'megacells:portable_mana_cell_64m'},
            mana: 640000,
            id: `${prefix}portable_mana_storage_cell_64m`
        },
        {
            ingredients: [{item: 'megacells:portable_mana_cell_64m'},{item: 'ae2:chest'},{item: 'megacells:cell_component_256m'},{item: 'ae2:energy_cell'},{item: 'gribtweaks:specific_rune_base'}],
            result: {item: 'megacells:portable_mana_cell_256m'},
            mana: 800000,
            id: `${prefix}portable_mana_storage_cell_256m`
        },
        {
            ingredients: [ {item: 'gribtweaks:neutronium_catalyst'}, {item: '#forge:gems/elven_lapis'}, {item: 'gribtweaks:infinity_petal'}, {item: 'botania:pixie_dust'}, {item: 'botanicadds:dreaming_pool'}, {item: '#forge:gems/dragonstone'}, {item: 'botanicadds:mana_ring_gaia'}, {item: '#forge:ingots/elementium'}],
            result: {item: 'botania:creative_pool'},
            mana: 2000000,
            id: `${prefix}creative_bool`
        },
    ]

    recipes.forEach(recipe => {
        e.custom({
            type: "botanicadds:gaia_plate",
            ingredients: recipe.ingredients,
            result: recipe.result,
            mana: recipe.mana
        }).id(recipe.id)
    })
})