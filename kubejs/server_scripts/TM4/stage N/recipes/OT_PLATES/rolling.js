ServerEvents.recipes((event) => {
    const prefix = 'gribtweaks:plates/rolling/';
    const recipes = [
              {
            input: 'gribtweaks:spectral_ingot',
            result: 'gribtweaks:spectral_plate',     
            id: `${prefix}spectral_plate`
        },     
        {
            input: 'deeperdarker:soul_crystal',
            result: 'gribtweaks:sculk_plate',     
            id: `${prefix}sculk_plate`
        },     
        {
            input: 'minecraft:diamond_block',
            result: 'gribtweaks:diamond_plate',     
            id: `${prefix}diamond_plate`
        },     
        {
            input: 'gribtweaks:oblivion_ingot',
            result: 'gribtweaks:oblivion_plate',     
            id: `${prefix}oblivion_plate`
        },   
        {
            input: 'gribtweaks:antimatter_ingot',
            result: 'gribtweaks:antimatter_plate',     
            id: `${prefix}antimatter_plate`
        },   
        {
            input: 'gribtweaks:component_ingot',
            result: 'gribtweaks:component_base',     
            id: `${prefix}component_base`
        },  
        {
            input: 'gribtweaks:ultimate_ingot',
            result: 'gribtweaks:ultimate_component_base',     
            id: `${prefix}ultimate_component_base`
        },
        {
            input: 'ftbic:obsidian_dust',
            result: 'create:sturdy_sheet',     
            id: `${prefix}sturdy_sheet`
        },
        {
            input: 'gribtweaks:rune_suspension',
            result: 'gribtweaks:rune_base',     
            id: `${prefix}rune_base`
        },
    ]

    recipes.forEach(recipe => {
      event.custom({
          type: 'ftbic:rolling',
          inputItems: [
              {
                  ingredient: {
                      item: recipe.input,
                  },
                  count: 1
              }
          ],
          outputItems: [
              {
                  item: recipe.result
              }
          ]
      }).id(recipe.id);
  });
});