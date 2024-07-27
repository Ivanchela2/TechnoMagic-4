ServerEvents.recipes((event) => {
    const prefix = 'gribtweaks:chemlib/mixing/';
    event.custom({     
            "type": "create:mixing",
            "ingredients": [
              {
                'item': 'gribtweaks:maximum_catalyst'
              },
              {
                'item': 'gribtweaks:reinforced_ludicrite_ingot'
              },
              {
                'item': 'gribtweaks:protasteel_ingot'
              },
              {
                'item': 'chemlib:sulfuric_acid'
              },
              {
                'item': 'gribtweaks:creative_honeycomb'
              },
              {
                'item': 'gribtweaks:combined_jelly'
              },
              {
                'fluid': 'minecraft:water',
                'nbt': {},
                'amount': 900
              }
            ],
            "results": [
              {
                'item': 'chemlib:strange_mixture',
                'amount': 1
              }
            ],
            'heatRequirement': 'superheated'
    }).id(`${prefix}strange_mixture`)

    event.custom({     
            "type": "create:mixing",
            "ingredients": [
              {
                'item': 'ad_astra:raw_desh'
              },
              {
                'item': 'ad_astra:raw_ostrum'
              },
              {
                'item': 'ad_astra:raw_calorite'
              },
              {
                'item': 'ad_astra:cheese'
              },
              {
                'fluid': 'ad_astra:cryo_fuel',
                'nbt': {},
                'amount': 600
              }
            ],
            "results": [
              {
                'item': 'chemlib:cosmic_elements_mixture',
                'amount': 1
              }
            ],
            'heatRequirement': 'superheated'
    }).id(`${prefix}cosmic_elements_mixture`)    
});