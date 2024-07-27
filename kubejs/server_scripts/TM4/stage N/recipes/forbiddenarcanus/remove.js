ServerEvents.recipes(event => {
	const output = [
        'forbidden_arcanus:draco_arcanus_helmet',
		'forbidden_arcanus:draco_arcanus_chestplate',
		'forbidden_arcanus:draco_arcanus_leggings',
		'forbidden_arcanus:draco_arcanus_boots',
		'forbidden_arcanus:tyr_helmet',
		'forbidden_arcanus:tyr_chestplate',
		'forbidden_arcanus:tyr_leggings',
		'forbidden_arcanus:tyr_boots',
		'forbidden_arcanus:mortem_helmet',
		'forbidden_arcanus:mortem_chestplate',
		'forbidden_arcanus:mortem_leggings',
		'forbidden_arcanus:mortem_boots',
		'forbidden_arcanus:dark_nether_star',
		'forbidden_arcanus:arcane_crystal_dust'
    ]


    output.forEach(recipe => {
        event.remove({output: recipe})
    })
})