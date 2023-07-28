ServerEvents.recipes(event => {
    event.remove([
        { output: 'ftbic:energy_crystal' },
        { output: 'ftbic:antimatter_crystal' },
        { id: 'ftbic:shaped/electric_furnace' },
        { id: 'ftbic:shaped/roller' },
        { id: 'ftbic:shaped/macerator' },
        { id: 'ftbic:shaped/extruder' },
        { id: 'ftbic:shaped/recycler' },
        { id: 'ftbic:shaped/iron_furnace' }
    ])
})