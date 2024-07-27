ServerEvents.recipes((event) => {
    const output = [
        'naturesaura:bottle_two_the_rebottling',
        'naturesaura:gold_powder',
        'naturesaura:gold_fiber',
        'naturesaura:token_joy',
        'naturesaura:nature_altar',
        'naturesaura:wood_stand',
        'naturesaura:token_anger',
        'naturesaura:crushing_catalyst',
        'naturesaura:conversion_catalyst',
        'naturesaura:generator_limit_remover'
    ]


    output.forEach(recipe => {
        event.remove({output: recipe})
    })
});