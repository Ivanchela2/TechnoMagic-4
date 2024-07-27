ServerEvents.recipes((event) => {  
    const output = [
        'biggerreactors:reactor_casing',
        'biggerreactors:reactor_terminal',
        'biggerreactors:reactor_access_port',
        'biggerreactors:reactor_control_rod',
        'biggerreactors:reactor_fuel_rod',
        'biggerreactors:reactor_coolant_port',
        'biggerreactors:cyanite_reprocessor',
        'biggerreactors:reactor_power_tap',
        'biggerreactors:heat_exchanger_casing',
        'biggerreactors:heat_exchanger_evaporator_channel',
        'biggerreactors:turbine_casing',
        'biggerreactors:turbine_rotor_blade',
        'biggerreactors:turbine_rotor_shaft',
        'biggerreactors:ludicrite_block'
    ]


    output.forEach(recipe => {
        event.remove({output: recipe})
    })
});