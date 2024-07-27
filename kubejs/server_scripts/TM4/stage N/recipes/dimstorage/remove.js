ServerEvents.recipes(event => {
    const output = [
        'dimstorage:dim_core',
		'dimstorage:dim_wall',
        'dimstorage:solid_dim_core',
        'dimstorage:dimensional_chest',
        'dimstorage:dimensional_tank'
    ]


    output.forEach(recipe => {
        event.remove({output: recipe})
    })
})