ServerEvents.recipes((event) => {
    event.remove([
        { output: 'seeds:trash' },
        { output: 'seeds:crushing_obsidian' },
        { output: 'seeds:vacuum_cleaner' },
        { output: 'seeds:crushing_stone' }
    ]);
});