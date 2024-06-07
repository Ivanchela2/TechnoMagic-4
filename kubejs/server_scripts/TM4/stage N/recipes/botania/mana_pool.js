ServerEvents.recipes(e => {
    const prefix = 'gribtweaks:botania/mana_infusion/';
    const recipes = [
        {
            input: {item: 'ad_astra:desh_ingot'},
            mana: 3000,
            output: {item: "botania:manasteel_ingot"},
            id: `${prefix}manasteel_ingot`
        },
        {
            input: {item: 'ad_astra:desh_block'},
            mana: 27000,
            output: {item: "botania:manasteel_block"},
            id: `${prefix}manasteel_block`
        },
        {
            input: {item: 'forbidden_arcanus:arcane_crystal_dust'},
            mana: 2000,
            output: {item: "botania:mana_powder"},
            id: `${prefix}mana_powder`
        },
        {
            input: {item: 'minecraft:ender_eye'},
            mana: 5000,
            output: {item: 'botania:mana_pearl'},
            id: `${prefix}mana_pearl`
        }
    ]
    recipes.forEach(recipe => {
        e.custom({
            type: "botania:mana_infusion",
            input: recipe.input,
            mana: recipe.mana,
            output: recipe.output
        }).id(recipe.id)
    })
})