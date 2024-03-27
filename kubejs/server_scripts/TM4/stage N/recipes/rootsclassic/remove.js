ServerEvents.recipes((event) => {
    event.remove([
        { output: 'rootsclassic:bark_knife' },
        { output: 'rootsclassic:brazier' },
        { output: 'rootsclassic:altar' },
        { output: 'rootsclassic:pestle' },
        { output: 'rootsclassic:mortar' },
        { output: 'rootsclassic:mundane_standing_stone' },
    ]);
});