ServerEvents.recipes(event => {
    const output = [
        'tiab:time_in_a_bottle'
    ]


    output.forEach(recipe => {
        event.remove({output: recipe})
    })
})