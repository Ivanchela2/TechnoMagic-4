ServerEvents.recipes(e => {
    const output = [
        'botanicalmachinery:mechanical_mana_pool',
        'botanicalmachinery:industrial_agglomeration_factory',
        'botanicalmachinery:alfheim_market',
        'botanicalmachinery:mechanical_apothecary',
        'botanicalmachinery:mechanical_brewery',
        'botanicalmachinery:mechanical_daisy',
        'botanicalmachinery:mechanical_runic_altar',
        'botanicalmachinery:mana_battery'
    ]


    output.forEach(recipe => {
        e.remove({output: recipe})
    })
})