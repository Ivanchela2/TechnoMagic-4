ServerEvents.recipes((event) => {
  const prefix = 'gribtweaks:naturesaura/tree_ritual/'
  const recipes = [
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
      {
        type: 'naturesaura:tree_ritual',
        ingredients: [
          { item: 'naturesaura:token_joy' },
          { item: 'minecraft:smooth_stone'},
          { item: 'minecraft:smooth_stone'},
          { item: 'minecraft:smooth_stone'},
          { item: 'minecraft:emerald' },
          { item: 'rootsclassic:growth_powder' },
          { item: 'naturesaura:gold_leaf' },
          { item: 'minecraft:diamond_block' }
        ],
        output: { item: 'naturesaura:nature_altar' },
        sapling: { item: 'minecraft:oak_sapling' },
        time: 1000,
        id: `${prefix}nature_altar`
      },
      {
        type: 'naturesaura:tree_ritual',
        ingredients: [
          { item: 'minecraft:coal_block' },
          { item: 'gribtweaks:witch_ingot' },
          { item: 'gribtweaks:tained_gold_leaf' },
          { item: 'minecraft:ender_pearl' },
          { item: 'reliquary:catalyzing_gland' },
          { item: 'gribtweaks:fiery_membrane' },
          { item: 'minecraft:blaze_rod' },
          { 
            type: 'forge:nbt',
            item: 'naturesaura:aura_bottle',
            count: 1,
            nbt: '{stored_type:\"naturesaura:nether\"}' 
          }
        ],
        output: { item: 'naturesaura:token_anger' },
        sapling: { item: 'minecraft:oak_sapling' },
        time: 100,
        id: `${prefix}token_anger`
      },
      {
        type: 'naturesaura:tree_ritual',
        ingredients: [
          { item: 'naturesaura:infused_iron_block' },
          { item: 'naturesaura:infused_stone' },
          { item: 'minecraft:gold_block' },
          { item: 'supplementaries:flint_block' },
          { item: 'gribtweaks:tained_gold_leaf' },
          { item: 'naturesaura:token_anger' },
          { item: 'minecraft:piston' },
          { tag: 'create:upright_on_deployer' }
        ],
        output: { item: 'naturesaura:crushing_catalyst' },
        sapling: { item: 'minecraft:oak_sapling' },
        time: 400,
        id: `${prefix}crushing_catalyst`
      },
      {
        type: 'naturesaura:tree_ritual',
        ingredients: [
          { item: 'twilightforest:liveroot' },
          { item: 'hexerei:selenite_shard' },
          { item: 'naturesaura:sky_ingot_block' },
          { item: 'naturesaura:infused_stone' },
          { item: 'minecraft:brewing_stand' },
          { item: 'minecraft:glowstone' },
          { item: 'naturesaura:gold_brick' },
          { item: 'gribtweaks:tained_gold_leaf' },
        ],
        output: { item: 'naturesaura:conversion_catalyst' },
        sapling: { item: 'minecraft:jungle_sapling' },
        time: 400,
        id: `${prefix}conversion_catalyst`
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