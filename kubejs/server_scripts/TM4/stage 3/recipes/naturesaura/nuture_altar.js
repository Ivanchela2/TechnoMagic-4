ServerEvents.recipes((event) => {
    const prefix = 'tm4:naturesaura/altar/'
    const recipes = [
        {
            type: "naturesaura:altar",
            input: {
                item: 'minecraft:ender_pearl'
            },
            output: {
                item: 'naturesaura:natural_ender_pearl'
            },
            catalyst: {
                item: 'naturesaura:conversion_catalyst'
            },
            aura: 25000,
            time: 200,
            id: `${prefix}natural_ender_pearl`
        }
    ]
  
    recipes.forEach(recipe => {
      event.custom({
        type: recipe.type,
        input: recipe.input,
        output: recipe.output,
        catalyst: recipe.catalyst,
        aura: recipe.aura,
        time: recipe.time
      })
    })
  });