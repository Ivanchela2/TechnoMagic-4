StartupEvents.registry('item', event => {
    const items = [
        { id: 'gribtweaks:combined_jelly', alias: '§bCombined jelly' },
        { id: 'gribtweaks:neutronium_catalyst', alias: '§0◂ §cNeutronium Catalyst §0▸' },
        { id: 'gribtweaks:upgraded_photovoltaic_cell', alias: 'Upgraded Photovoltaic Cell' },
        { id: 'gribtweaks:energium_dust', alias: 'Energium Dust' }
    ];

    items.forEach((item) => {
        event.create(item.id).displayName(item.alias);
    });
});