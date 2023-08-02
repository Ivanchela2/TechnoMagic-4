ServerEvents.recipes((event) => {
    const prefix = 'gribtweaks:create/sandpaper_polishing/';
    event.custom({       
        'type': 'create:sandpaper_polishing',
        'ingredients': [
          {
            'item':'minecraft:amethyst_shard'
          }
        ],
        'results': [
          {
            'item': 'gribtweaks:polished_amethyst_shard'
          }
        ]
    }).id(`${prefix}polished_amethyst_shard`)

    event.custom({       
        'type': 'create:sandpaper_polishing',
        'ingredients': [
          {
            'item':'botania:quartz_mana'
          }
        ],
        'results': [
          {
            'item': 'gribtweaks:polished_mana_quartz'
          }
        ]
    }).id(`${prefix}polished_mana_quartz`)

    event.custom({       
        'type': 'create:sandpaper_polishing',
        'ingredients': [
          {
            'item':'forbidden_arcanus:arcane_crystal'
          }
        ],
        'results': [
          {
            'item': 'gribtweaks:polished_arcane_crystal'
          }
        ]
    }).id(`${prefix}polished_arcane_crystal`)

    event.custom({       
        'type': 'create:sandpaper_polishing',
        'ingredients': [
          {
            'item':'ftbic:antimatter_crystal'
          }
        ],
        'results': [
          {
            'item': 'gribtweaks:polished_antimatter_crystal'
          }
        ]
    }).id(`${prefix}polished_antimatter_crystal`)

    event.custom({       
        'type': 'create:sandpaper_polishing',
        'ingredients': [
          {
            'item':'ae2:certus_quartz_crystal'
          }
        ],
        'results': [
          {
            'item': 'gribtweaks:polished_certus_quartz_crystal'
          }
        ]
    }).id(`${prefix}polished_certus_quartz_crystal`)

    event.custom({       
        'type': 'create:sandpaper_polishing',
        'ingredients': [
          {
            'item':'minecraft:quartz'
          }
        ],
        'results': [
          {
            'item': 'gribtweaks:polished_quartz'
          }
        ]
    }).id(`${prefix}polished_quartz`)
});