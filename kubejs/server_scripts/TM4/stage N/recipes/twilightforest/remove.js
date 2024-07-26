ServerEvents.recipes((event) => {
    event.remove([
        { output: 'twilightforest:uncrafting_table' },
        { output: 'twilightforest:raw_ironwood' },
    ]);
});