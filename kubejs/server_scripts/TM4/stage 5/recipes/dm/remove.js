ServerEvents.recipes(event => {
    event.remove([
        { output: 'dimstorage:dim_core' },
		{ output: 'dimstorage:dim_wall' },
        { output: 'dimstorage:solid_dim_core' },
        { output: 'dimstorage:dimensional_chest' },
        { output: 'dimstorage:dimensional_tank' }
    ])
})