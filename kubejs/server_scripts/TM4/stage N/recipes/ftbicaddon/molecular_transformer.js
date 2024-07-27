ServerEvents.recipes(e => {
    const prefix = 'gribtweaks:molecular_transformer/';
    const recipes = [
      {
        input: 'minecraft:iron_ingot',
        energy: 9000000,
        count: 1,
        output: 'gribtweaks:iridium_ore',
        id: `${prefix}iridium_ore`
      },
      {
        input: 'gribtweaks:super_alloy',
        energy: 2000000,
        count: 1,
        output: 'gribtweaks:spectral_ingot',
        id: `${prefix}spectral_ingot`
      },
      {
        input: 'gribtweaks:photoniy',
        energy: 10000000,
        count: 2,
        output: 'gribtweaks:proton',
        id: `${prefix}proton`
      },
      {
        input: 'ftbic:antimatter',
        energy: 5000000,
        count: 1,
        output: 'gribtweaks:advanced_antimatter',
        id: `${prefix}advanced_antimatter`
      },
      {
        input: 'gribtweaks:antimatter_ingot',
        energy: 10000000,
        count: 1,
        output: 'gribtweaks:antimatter_l1',
        id: `${prefix}antimatter_l1`
      },
      {
        input: 'gribtweaks:antimatter_l1',
        energy: 20000000,
        count: 1,
        output: 'gribtweaks:antimatter_l2',
        id: `${prefix}antimatter_l2`
      },
      {
        input: 'gribtweaks:antimatter_l2',
        energy: 40000000,
        count: 1,
        output: 'gribtweaks:antimatter_l3',
        id: `${prefix}antimatter_l3`
      },
      {
        input: 'gribtweaks:antimatter_l3',
        energy: 80000000,
        count: 1,
        output: 'gribtweaks:antimatter_l4',
        id: `${prefix}antimatter_l4`
      },
      {
        input: 'minecraft:dark_oak_log',
        energy: 250000,
        count: 1,
        output: 'twilightforest:encased_towerwood',
        id: `${prefix}encased_towerwood`
      }
    ]

    recipes.forEach(recipe => {
        e.custom({
            type: 'gribtweaks:molecular_transformer',
            ingredient: { item: recipe.input },
            energy: recipe.energy,
            output: { count: recipe.count, item: recipe.output }
        }).id(recipe.id)
    })
})