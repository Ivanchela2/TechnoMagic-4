ServerEvents.recipes((event) => {
    event.remove([
        { output: 'naturesaura:conversion_catalyst' },
        { output: 'sorcerium:mana_pearl' }
    ]);
});