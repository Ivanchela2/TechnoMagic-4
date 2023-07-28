ServerEvents.recipes((event) => {
    event.remove([
        { output: 'create:nozzle' },
        { output: 'create:goggles' },
        { output: 'create:empty_blaze_burner' },
        { output: 'create:basin' },
        { output: 'create:chute' },
        { output: 'create:belt_connector' },
        { output: 'create:water_wheel' },
        { output: 'createbigcannons:cast_iron_ingot' }
    ]);
});