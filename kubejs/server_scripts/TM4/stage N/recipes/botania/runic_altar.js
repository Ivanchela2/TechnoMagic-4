ServerEvents.recipes(e => {
    const prefix = 'gribtweaks:botania/runic_altar/';
    const recipes = [
        {
            ingredients: [{tag: "botania:mana_dusts"}, {tag: "botania:manasteel_ingots"}, {item: 'occultism:iesnium_ingot'}, {item: 'aquaculture:diamond_fishing_rod'}, {item: 'gribtweaks:water_rune'}, {item: 'forbidden_arcanus:arcane_bone_meal'}, {item: 'forbidden_arcanus:edelwood_water_bucket'}],
            mana: 10000,
            output: {item: 'botania:rune_water'},
            id: `${prefix}rune_water`
        },
        {
            ingredients: [{tag: "botania:mana_dusts"}, {tag: "botania:manasteel_ingots"}, {tag: 'twilightforest:fiery_vial'}, {item: 'forbidden_arcanus:corrupti_dust'}, {item: 'gribtweaks:fire_rune'}, {item: 'forbidden_arcanus:smelter_prism'}, {item: 'create:blaze_cake'}],
            mana: 10000,
            output: {item: 'botania:rune_fire'},
            id: `${prefix}rune_fire`
        },
        {
            ingredients: [{tag: "botania:mana_dusts"}, {tag: "botania:manasteel_ingots"}, {item: 'naturesaura:gold_leaf'}, {item:'naturesaura:ancient_sapling'}, {item: 'gribtweaks:earth_rune'}, {item: 'rootsclassic:old_root'}, {item: 'twilightforest:liveroot'}],
            mana: 10000,
            output: {item: 'botania:rune_earth'},
            id: `${prefix}rune_earth`
        },
        {
            ingredients: [{tag: "botania:mana_dusts"}, {tag: "botania:manasteel_ingots"}, {item: 'forbidden_arcanus:cloth'}, {item:'naturesaura:sky_ingot'}, {item:'gribtweaks:air_rune'}, {item: 'ad_astra:oxygen_bucket'}, {item: 'twilightforest:magic_map_focus'}],
            mana: 10000,
            output: {item: 'botania:rune_air'},
            id: `${prefix}rune_air`
        },
        {
            ingredients: [{tag: "botania:manasteel_blocks"}, {tag: "botania:manasteel_blocks"}, {tag: "botania:manasteel_blocks"}, {item:'botania:manasteel_ingot'}, {item: 'botania:manasteel_ingot'}, {item: 'botania:mana_pearl'}],
            mana: 15000,
            output: {item: 'botania:rune_mana'},
            id: `${prefix}rune_mana`
        },
        {
            ingredients: [{item: "ad_astra:advanced_covering"}, {item: "ad_astra:advanced_covering"}, {item: "ad_astra:ostrum_block"}, {item: "ad_astra:ostrum_block"}, {tag: "botania:elementium_blocks"}, {item:'botania:gaia_ingot'}, {item: 'botania:life_essence'}, {item: 'ad_astra:reinforced_rocket_nose_cone'}],
            mana: 60000,
            output: {item: 'ad_astra:advanced_rocket_nose_cone'},
            id: `${prefix}advanced_rocket_nose_cone`
        },
        {
            ingredients: [{item: 'ad_astra:desh_block'}, {item: 'ad_astra:steel_engine'},{item: 'ad_astra:desh_block'}, {item: 'botania:terrasteel_ingot'}, {item: 'botania:terrasteel_ingot'}, {item: 'botania:terrasteel_ingot'}, {item: 'botania:terrasteel_ingot'}, {item: 'ad_astra:engine_fan'}, {item: 'ad_astra:engine_frame'}, {item: 'ftbic:iridium_circuit'}],
            mana: 25000,
            output: {item: 'ad_astra:desh_engine'},
            id: `${prefix}desh_engine`
        },
        {
            ingredients: [{item: 'ad_astra:desh_block'}, {item: 'ad_astra:steel_tank'},{item: 'ad_astra:desh_block'}, {item: 'botania:terrasteel_ingot'}, {item: 'botania:terrasteel_ingot'}, {item: 'botania:terrasteel_ingot'}, {item: 'ae2:cell_component_64k'}, {item:'create:hose_pulley'}],
            mana: 20000,
            output: {item: 'ad_astra:desh_tank'},
            id: `${prefix}desh_tank`
        },
        {
            ingredients: [{item: 'ad_astra:ostrum_block'}, {item: 'botania:gaia_catalyst'}, {item: 'botania:gaia_ingot'}, {item: 'botania:life_essence'}, {item: 'botania:life_essence'}, {item: 'botania:life_essence'}, {item: 'botania:elementium_block'}, {item: 'botania:elementium_block'}, {item: 'botania:elementium_block'}, {item: 'botania:dragonstone_block'}, {item: 'ad_astra:desh_engine'}],
            mana: 45000,
            output: {item: 'ad_astra:ostrum_engine'},
            id: `${prefix}ostrum_engine`
        },
        {
            ingredients: [{item: 'ad_astra:ostrum_block'}, {item: 'botania:gaia_catalyst'}, {item: 'botania:gaia_ingot'}, {item: 'botania:life_essence'}, {item: 'botania:life_essence'}, {item: 'botania:life_essence'}, {item:'botania:elementium_block'}, {item: 'botania:elementium_block'}, {item: 'ad_astra:desh_tank'}],
            mana: 40000,
            output: {item: 'ad_astra:ostrum_tank'},
            id: `${prefix}ostrum_tank`
        },
        {
            ingredients: [{item: 'occultism:miner_djinni_ores'}, {item: 'minecraft:diamond_ore'}, {item: 'minecraft:gold_ore'}, {item: 'minecraft:redstone_ore'}, {item: 'botania:terrasteel_block'}, {item:'botania:botany_catalyst'},{tag: 'botania:petals/gray'}, {tag: 'botania:petals/gray'}, {tag: 'botania:petals/yellow'}, {tag: 'botania:petals/green'}, {tag: 'botania:petals/red'} ],
            mana: 40000,
            output: {item: 'botania:orechid'},
            id: `${prefix}orechid`
        },
        {
            ingredients: [{tag: 'forge:netherrack'}, {tag: 'forge:netherrack'}, {item: 'botania:orechid'}, {item: 'botania:rune_fire'}, {item:'botania:rune_fire'}, {item:'botania:rune_fire'}, {item: 'upgradednetherite:fire_essence'},{item: 'upgradednetherite:fire_essence'}, {item:'twilightforest:fiery_ingot'}, {item: 'twilightforest:fiery_ingot'}],
            mana: 20000,
            output: {item: 'botania:orechid_ignem'},
            id: `${prefix}orechid_ignem`
        },
        {
            ingredients: [{item: 'botania:gaia_ingot'}, {item: 'botania:gaia_ingot'}, {item: 'botania:elementium_block'}, {item: 'constructionwand:core_angel'}, {item:'reliquary:rending_gale'}, {item:'botania:botany_catalyst'}, {item: 'botania:ender_air_bottle'},{item: 'botania:dragonstone_block'}, {item:'hexerei:willow_broom'}, {item: 'botania:life_essence'}, {item: 'botania:infinity_petal'}],
            mana: 60000,
            output: {item: 'botania:flight_tiara'},
            id: `${prefix}flight_tiara`
        },
        {
            ingredients: [{item: 'botania:terrasteel_block'}, {item: 'botania:natura_pylon'}, {item: 'botania:terrasteel_chestplate'}, {item: 'botania:mana_ring_greater'}, {item:'botania:terrasteel_block'}, {item:'botania:terra_sword'}],
            mana: 100000,
            output: {item: 'botania:terrasteel_potency'},
            id: `${prefix}terrasteel_potency`
        },
        {
            ingredients: [{item: 'botania:elementium_block'}, {item: 'botania:gaia_pylon'}, {item: 'botania:elementium_chestplate'}, {item: 'botania:reach_ring'}, {item:'botania:dragonstone_block'}, {item:'botania:star_sword'}],
            mana: 100000,
            output: {item: 'botania:elves_endowment'},
            id: `${prefix}elves_endowment`
        },
        {
            ingredients: [{item: 'minecraft:snow_block'}, {item: 'minecraft:snow_block'}, {item: 'twilightforest:aurora_block'}, {item: 'minecraft:cake'}, {item:'botania:rune_water'}, {item:'botania:rune_earth'}, {item: 'twilightforest:arctic_fur'}],
            mana: 15000,
            output: {item: 'botania:rune_winter'},
            id: `${prefix}rune_winter`
        },
        {
            ingredients: [{item: 'forbidden_arcanus:deorum_ingot'}, {item: 'forbidden_arcanus:deorum_ingot'}, {tag: 'minecraft:leaves'}, {tag: 'minecraft:leaves'}, {item:'botania:rune_air'}, {item:'botania:rune_fire'}, {item: 'twilightforest:carminite'}],
            mana: 15000,
            output: {item: 'botania:rune_autumn'},
            id: `${prefix}rune_autumn`
        },
        {
            ingredients: [{item: 'naturesaura:sky_ingot'}, {item: 'minecraft:melon_slice'}, {tag: 'minecraft:sand'}, {tag: 'minecraft:sand'}, {item:'botania:rune_air'}, {item:'botania:rune_earth'}, {tag: 'minecraft:leaves'}],
            mana: 15000,
            output: {item: 'botania:rune_summer'},
            id: `${prefix}rune_summer`
        },
        {
            ingredients: [{item: 'arclight:cryorium_ingot'}, {item: 'occultism:spirit_attuned_crystal'}, {tag: 'minecraft:saplings'}, {tag: 'minecraft:saplings'}, {item:'botania:rune_water'}, {item:'botania:rune_fire'}, {item: 'botania:fertilizer'}],
            mana: 15000,
            output: {item: 'botania:rune_spring'},
            id: `${prefix}rune_spring`
        },  
        {
            ingredients: [{item: 'botania:rune_lust'}, {item: 'botania:rune_gluttony'}, {item: 'botania:rune_greed'}, {item: 'botania:rune_sloth'}, {item:'botania:rune_wrath'}, {item:'botania:rune_envy'}, {item: 'botania:rune_pride'}, {item: 'botanicadds:rune_energy'}, {item:'botanicadds:rune_tp'}, {item:'gribtweaks:rune_sun'}, {item:'gribtweaks:rune_night'}, {item:'gribtweaks:rune_admiration'}],
            mana: 70000,
            output: {item: 'botania:botany_catalyst'},
            id: `${prefix}botany_catalyst`
        },
        {
            ingredients: [{item: 'botanicadds:gaiasteel_ingot'}, {item: 'botanicadds:gaiasteel_ingot'}, {item: 'botania:botany_catalyst'}, {item: 'botania:shimmerrock'}, {item:'botania:shimmerrock'}, {item:'botania:shimmerrock'}, {item: 'enigmaticlegacy:astral_block'}],
            mana: 100000,
            output: {item: 'botania:rune_suspension'},
            id: `${prefix}rune_suspension`
        }
    ]
    recipes.forEach(recipe => {
        e.custom({
            type: 'botania:runic_altar',
            ingredients: recipe.ingredients,
            mana: recipe.mana,
            output: recipe.output
        }).id(recipe.id)
    })

    e.forEachRecipe({output: /botania:rune_(lust|gluttony|greed|sloth|wrath|envy|pride)/}, recipe => {
        let ingredients = recipe.originalRecipeIngredients
        let output = recipe.originalRecipeResult
        e.recipes.botania.runic_altar(output, [ingredients[0], ingredients[2], ingredients[3],'gribtweaks:angel_ingot', 'gribtweaks:angel_ingot'], 20000).id(recipe.getOrCreateId())
    })
})
