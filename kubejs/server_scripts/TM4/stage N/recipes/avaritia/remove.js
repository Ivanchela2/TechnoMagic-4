ServerEvents.recipes(event => {
    const output = [
        'avaritia:neutronium_compressor',
        'avaritia:neutron_collector',
        'avaritia:endest_pearl',
        'avaritia:ultimate_stew',
        'avaritia:cosmic_meatballs',
        'avaritia:extreme_crafting_table',
        'avaritia:infinity_ingot',
        'avaritia:diamond_lattice',
        'avaritiafurnace:infinity_fuel',
        'avaritia:crystal_matrix_ingot'
    ]

    output.forEach(recipe => {
        event.remove({output: recipe})
    })
})