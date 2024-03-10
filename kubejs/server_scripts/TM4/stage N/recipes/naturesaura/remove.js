ServerEvents.recipes((event) => {
    event.remove([
        { output: 'naturesaura:bottle_two_the_rebottling' },
        { output: 'naturesaura:gold_powder' },
        { output: 'naturesaura:gold_fiber' },
    ]);
});