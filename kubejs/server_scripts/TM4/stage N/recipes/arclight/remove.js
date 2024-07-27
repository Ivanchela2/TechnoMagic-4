ServerEvents.recipes((event) => {
    const output = [
        'arclight:armor_forge',
        'arclight:arclight_gem',
        'arclight:moonlight_crystal',
        'arclight:jade_shard',
        'arclight:bloodstone_gem',
        'arclight:cryorium_gem',
        'arclight:arclight_ingot',
        'arclight:moonlight_ingot',
        'arclight:jade_ingot',
        'arclight:bloodstone_ingot',
        'arclight:cryorium_ingot',
        'arclight:sculk_ingot',
        'arclight:arclight_core',
        'arclight:moonlight_core',
        'arclight:sculk_core',
        'arclight:angel_spawn',
        'arclight:scorpion_core',
        'arclight:cryorium_core',
        'arclight:jade_core',
        'arclight:scorpion_scale',
        'arclight:arclight_helmet',
        'arclight:arclight_chestplate',
        'arclight:arclight_leggings',
        'arclight:arclight_boots',
        'arclight:angel_sword'
    ]


    output.forEach(recipe => {
        event.remove({output: recipe})
    })

});