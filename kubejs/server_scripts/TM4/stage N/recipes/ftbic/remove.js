ServerEvents.recipes(event => {
    const output = [
		'ftbic:carbon_helmet',
		'ftbic:carbon_chestplate',
		'ftbic:carbon_leggings',
		'ftbic:carbon_boots',
		'ftbic:canning_machine',
		'ftbic:hv_battery_box',
		'ftbic:ev_battery_box',
		'ftbic:compressor',
		'ftbic:quantum_helmet',
		'ftbic:quantum_chestplate',
		'ftbic:quantum_leggings',
		'ftbic:quantum_boots',
		'ftbic:overclocker_upgrade',
		'ftbic:energy_storage_upgrade',
		'ftbic:transformer_upgrade',
		'ftbic:ejector_upgrade',
		'ftbic:industrial_grade_metal',
		'ftbic:energy_crystal',
        'ftbic:antimatter_crystal',
		'ftbic:machine_block',
		'ftbic:advanced_machine_block',
        'ftbic:electric_furnace',
        'ftbic:roller',
        'ftbic:macerator',
        'ftbic:extruder',
        'ftbic:recycler',
        'ftbic:iron_furnace',
		'ftbic:centrifuge'
    ]


    output.forEach(recipe => {
        event.remove({output: recipe})
    })
})