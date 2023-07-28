ServerEvents.recipes(event => {
    event.remove([
		{ output: 'ftbic:carbon_helmet' },
		{ output: 'ftbic:carbon_chestplate' },
		{ output: 'ftbic:carbon_leggings' },
		{ output: 'ftbic:carbon_boots' },
		{ output: 'ftbic:canning_machine' },
		{ output: 'ftbic:lv_transformer' },
		{ output: 'ftbic:ev_transformer' },
		{ output: 'ftbic:hv_battery_box' },
		{ output: 'ftbic:ev_battery_box' },
		{ output: 'ftbic:compressor' },
		{ id: 'ftbic:shaped/machine_block' },
		{ id: 'ftbic:shapeless/advanced_machine_block' },
		{ output: 'ftbic:quantum_helmet' },
		{ output: 'ftbic:quantum_chestplate' },
		{ output: 'ftbic:quantum_leggings' },
		{ output: 'ftbic:quantum_boots' },
		{ output: 'ftbic:overclocker_upgrade' },
		{ output: 'ftbic:energy_storage_upgrade' },
		{ output: 'ftbic:transformer_upgrade' },
		{ output: 'ftbic:ejector_upgrade' }
    ])
})