ServerEvents.recipes((event) => {
    event.remove([
        { output:'tiab:time_in_a_bottle' },
        { output:'avaritia:extreme_crafting_table' }
    ]);
});