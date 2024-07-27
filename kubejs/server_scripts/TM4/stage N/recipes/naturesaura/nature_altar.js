ServerEvents.recipes((event) => {
    const prefix = 'gribtweaks:naturesaura/altar/'
    const recipes = [
        {
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
        },
        {
            input: {
                item: 'naturesaura:gold_leaf'
            },
            output: {
                item: 'gribtweaks:tained_gold_leaf'
            },
            catalyst: {
                item: 'naturesaura:conversion_catalyst'
            },
            aura: 15000,
            time: 300,     
            id: `${prefix}tained_gold_leaf`
        }, 
        {
            input: {
                item: 'gribtweaks:tained_gold_leaf'
            },
            output: {
                item: 'gribtweaks:tained_gold_powder',
                'count': 4
            },
            catalyst: {
                item: 'naturesaura:crushing_catalyst'
            },
            aura: 2000,
            time: 20,
            id: `${prefix}tained_gold_powder`
        },
        {
            input: {
                item: 'naturesaura:gold_leaf'
            },
            output: {
                item: 'naturesaura:gold_powder',
                'count': 4
            },
            catalyst: {
                item: 'naturesaura:crushing_catalyst'
            },
            aura: 2000,
            time: 20,
            id: `${prefix}gold_powder`
        },
    ]
  
    recipes.forEach(recipe => {
      event.custom({
        type: 'naturesaura:altar',
        input: recipe.input,
        output: recipe.output,
        catalyst: recipe.catalyst,
        aura: recipe.aura,
        time: recipe.time
      })
    })
  });