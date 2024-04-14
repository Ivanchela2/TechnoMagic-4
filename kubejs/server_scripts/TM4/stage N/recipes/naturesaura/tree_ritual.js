ServerEvents.recipes((event) => {
  const prefix = 'gribtweaks:naturesaura/tree_ritual/'
  const recipes = [
      {
        type: 'naturesaura:tree_ritual',
        ingredients: [
          { item: 'twilightforest:liveroot' },
          { item: 'hexerei:selenite_shard' },
          { item: 'naturesaura:sky_ingot' },
          { item: 'naturesaura:infused_stone' },
          { item: 'minecraft:brewing_stand' },
          { item: 'minecraft:glowstone' },
          { item: 'naturesaura:gold_brick' },
          { item: 'naturesaura:gold_leaf' },
        ],
        output: { item: 'naturesaura:conversion_catalyst' },
        sapling: { item: 'minecraft:jungle_sapling' },
        time: 600,
        id: `${prefix}conversion_catalyst`
      },
      {
        type: 'naturesaura:tree_ritual',
        ingredients: [
          { item: 'minecraft:golden_apple' },
          { 
            type: 'forge:nbt',
            item: 'naturesaura:aura_bottle',
            count: 1,
            nbt: '{stored_type:\"naturesaura:overworld\"}' 
          },
          { item: 'supplementaries:rope' },
          { item: 'minecraft:diamond' },
          { item: 'minecraft:amethyst_block' },
          { item: 'minecraft:lantern' },
          { item: 'naturesaura:gold_leaf' },
          { tag: 'minecraft:tall_flowers' },
        ],
        output: { item: 'naturesaura:token_joy', count: 2},
        sapling: { item: 'minecraft:oak_sapling' },
        time: 100,
        id: `${prefix}token_joy`
      },
  ]

  recipes.forEach(recipe => {
    event.custom({
      type: recipe.type,
      ingredients: recipe.ingredients,
      output: recipe.output,
      sapling: recipe.sapling,
      time: recipe.time
    })
  })
});