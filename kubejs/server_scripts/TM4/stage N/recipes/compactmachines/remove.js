ServerEvents.recipes(event => {
    let output = [
        /compactmachines:machine/,
        'compactmachines:wall'
    ]


    output.forEach(recipe => {
        event.remove({output: recipe})
    })
})