ServerEvents.recipes((event) => {  
    event.remove([
        { output:'biggerreactors:reactor_casing' },
        { output:'biggerreactors:reactor_terminal' },
        { output:'biggerreactors:reactor_access_port' },
        { output:'biggerreactors:reactor_control_rod' },
        { output:'biggerreactors:reactor_fuel_rod' },
        { output:'biggerreactors:reactor_coolant_port' },
        { output:'biggerreactors:cyanite_reprocessor' },
        { output:'biggerreactors:reactor_power_tap' },
        { output:'biggerreactors:heat_exchanger_casing' },
        { output:'biggerreactors:heat_exchanger_evaporator_channel' },
        { output:'biggerreactors:turbine_casing' },
        { output:'biggerreactors:turbine_rotor_blade' },
        { output:'biggerreactors:turbine_rotor_shaft' },
        { output:'biggerreactors:ludicrite_block' }
    ]);   
});