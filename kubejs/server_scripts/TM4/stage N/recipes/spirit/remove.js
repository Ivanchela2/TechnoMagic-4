ServerEvents.recipes((event) => {
    event.remove([
        { output: 'spirit:soul_powder' },
        { output: 'spirit:soul_slate' },
        { output: 'spirit:soul_glass' },
        { output: 'spirit:soul_crystal_shard' },
        { output: 'spirit:soul_cage' },
        { output: 'spirit:soul_crystal' },
    ]);
});