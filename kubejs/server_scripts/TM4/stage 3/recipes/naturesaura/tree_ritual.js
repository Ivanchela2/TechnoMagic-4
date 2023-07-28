ServerEvents.recipes((event) => {
  const prefix = 'tm4:naturesaura/tree_ritual/'
  const recipes = [
      { // Трансмутационный катализатор
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
  ]

  recipes.forEach(recipe => {
    event.custom({
      type:recipe.type,
      ingredients: recipe.ingredients,
      output: recipe.output,
      sapling: recipe.sapling,
      time: recipe.time
    })
  })
});