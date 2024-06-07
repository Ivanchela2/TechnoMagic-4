ServerEvents.recipes(e => {
    const prefix = 'gribtweaks:botania/petal_apothecary/';
    const recipes = [
        {
            ingredients: [{tag: "botania:petals/white",},{tag: "botania:petals/white",},
            {tag: "botania:petals/white"},{tag: "botania:petals/white"}, {item: 'twilightforest:steeleaf_ingot'},{item: 'forbidden_arcanus:arcane_crystal_dust'}],
            output: {item: "botania:pure_daisy"},
            reagent: {tag: "botania:seed_apothecary_reagent"},
            id: `${prefix}pure_daisy`
        },
        {
            ingredients: [{tag: "botania:petals/blue",},{tag: "botania:petals/blue",},
            {tag: "botania:petals/cyan"},{tag: "botania:petals/cyan"}, {item: 'twilightforest:steeleaf_ingot'},{item: 'botania:mana_powder'}],
            output: {item: "botania:hydroangeas"},
            reagent: {tag: "botania:seed_apothecary_reagent"},
            id: `${prefix}hydroangeas`
        },
        {
            ingredients: [{tag: "botania:petals/brown",},{tag: "botania:petals/brown",},
            {tag: "botania:petals/light_gray"},{tag: "botania:petals/red"}, {item: 'twilightforest:steeleaf_ingot'},{item: 'botania:mana_powder'}],
            output: {item: 'botania:endoflame'},
            reagent: {tag: "botania:seed_apothecary_reagent"},
            id: `${prefix}endoflame`
        },
        {
            ingredients: [{tag: "botania:petals/pink",},{tag: "botania:petals/pink",},
            {tag: "botania:petals/purple"},{tag: "botania:petals/purple"}, {tag: "botania:petals/lime"}, {item: 'botania:rune_mana'},{item: 'botania:elementium_block'}, {item: 'minecraft:experience_bottle'}],
            output: {item: 'botania:rosa_arcana'},
            reagent: {tag: "botania:seed_apothecary_reagent"},
            id: `${prefix}rosa_arcana`
        },
        {
            ingredients: [{tag: "botania:petals/light_gray",},{tag: "botania:petals/light_gray",},
            {tag: "botania:petals/yellow"},{tag: "botania:petals/yellow"}, {tag: "botania:petals/red"}, {item: 'botania:rune_fire'},{item: 'botania:rune_fire'}, {tag: 'forge:honeycombs'}, {item: 'createcafe:oreo'}],
            output: {item: 'botania:gourmaryllis'},
            reagent: {tag: "botania:seed_apothecary_reagent"},
            id: `${prefix}gourmaryllis`
        },
        {
            ingredients: [{tag: "botania:petals/light_gray",},{tag: "botania:petals/light_gray",},
            {tag: "botania:petals/red"},{tag: "botania:petals/red"}, {tag: "botania:petals/white"},  {tag: "botania:petals/white"}, {item: 'botania:rune_wrath'},{item: 'botania:rune_fire'}, {item:'reliquary:holy_hand_grenade'}, {item: 'botania:terrasteel_ingot'}],
            output: {item: 'botania:entropinnyum'},
            reagent: {tag: "botania:seed_apothecary_reagent"},
            id: `${prefix}entropinnyum`
        },
        {
            ingredients: [{tag: "botania:petals/green",},{tag: "botania:petals/green",},
            {tag: "botania:petals/green"},{tag: "botania:petals/green"}, {tag: "botania:petals/gray"},  {item: "botania:botany_catalyst"}, {item: 'botania:pixie_dust'},{item: 'botania:elementium_block'}, {item:'botania:redstone_root'}],
            output: {item: 'botania:loonium'},
            reagent: {tag: "botania:seed_apothecary_reagent"},
            id: `${prefix}loonium`
        },
        {
            ingredients: [{tag: "botania:petals/gray",},{tag: "botania:petals/gray",},
            {tag: "botania:petals/light_gray"},{tag: "botania:petals/light_gray"}, {item: "create:brass_funnel"},  {item: "botania:redstone_root"}, {item: 'botania:rune_air'},{item: 'botania:rune_lust'}],
            output: {item: 'botania:hopperhock'},
            reagent: {tag: "botania:seed_apothecary_reagent"},
            id: `${prefix}hopperhock`
        },
        {
            ingredients: [{tag: "botania:petals/light_gray",},{tag: "botania:petals/light_gray",},
            {tag: "botania:petals/cyan"},{tag: "botania:petals/white"},{tag: "botania:petals/white"}, {item: "botania:botany_catalyst"},  {item: "botania:infinity_petal"}, {item: 'pipez:universal_pipe'},{item: 'pipez:universal_pipe'}, {item: 'botania:dragonstone_block'}],
            output: {item: 'botania:spectranthemum'},
            reagent: {tag: "botania:seed_apothecary_reagent"},
            id: `${prefix}spectranthemum`
        },
        {
            ingredients: [{tag: "botania:petals/yellow",},{tag: "botania:petals/brown",},
            {tag: "botania:petals/white"},{tag: "botania:petals/white"}, {item: "botania:rune_air"},  {item: "create:encased_fan"}, {item: "create:encased_fan"},{item: 'botania:redstone_root'}],
            output: {item: 'botania:daffomill'},
            reagent: {tag: "botania:seed_apothecary_reagent"},
            id: `${prefix}daffomill`
        },
        {
            ingredients: [{tag: "botania:petals/lime",},{tag: "botania:petals/lime",},
            {tag: "botania:petals/green"},{tag: "botania:petals/yellow"}, {item: "botania:rune_winter"},  {item: "botania:rune_spring"}, {item: "botania:rune_summer"},{item: "botania:rune_autumn"}, {item: 'botania:fertilizer'}],
            output: {item: 'botania:agricarnation'},
            reagent: {tag: "botania:seed_apothecary_reagent"},
            id: `${prefix}agricarnation`
        },
        {
            ingredients: [{tag: 'botania:petals/orange'},{tag: 'botania:petals/orange'},{tag: 'botania:petals/orange'},{tag: 'botania:petals/orange'},{tag: 'botania:petals/orange'},{tag: 'botania:petals/orange'},{tag: 'botania:petals/orange'},{tag: 'botania:petals/orange'},{tag: 'botania:petals/orange'},{tag: 'botania:petals/orange'},{tag: 'botania:petals/orange'},{tag: 'botania:petals/orange'},{tag: 'botania:petals/orange'},{tag: 'botania:petals/orange'},{tag: 'botania:petals/orange'},{tag: 'botania:petals/orange'}],
            output: Item.of('minecraft:player_head', '{SkullOwner:"Kranie"}').toJson(),
            reagent: {tag: "botania:seed_apothecary_reagent"},
            id: `${prefix}kranie`
        }
    ]

    recipes.forEach(recipe => {
        e.custom({
            type: "botania:petal_apothecary",
            ingredients: recipe.ingredients,
            output: recipe.output,
            reagent: recipe.reagent
        }).id(recipe.id)
    })
})