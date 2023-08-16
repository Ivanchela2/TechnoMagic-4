ServerEvents.recipes(e => {
    let output = [
        /compactmachines:machine/,
        'compactmachines:wall'
    ]


    output.forEach(recipe => {
        e.remove({output: recipe})
    })
})