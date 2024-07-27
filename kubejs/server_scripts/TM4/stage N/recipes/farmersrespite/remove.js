ServerEvents.recipes((event) => {
    const output = [
        'farmersrespite:kettle'
    ]


    output.forEach(recipe => {
        event.remove({output: recipe})
    })
});