ServerEvents.recipes((event) => {
    const output = [
        'ad_astra:hammer',
        'ad_astra:cable_duct',
        'ad_astra:steel_cable', 
        'ad_astra:compressor', 
        'ad_astra:coal_generator', 
        'ad_astra:rocket_fin', 
        'ad_astra:rocket_nose_cone', 
        'ad_astra:steel_tank', 
        'ad_astra:engine_frame', 
        'ad_astra:steel_engine', 
        'ad_astra:nasa_workbench', 
        'ad_astra:fuel_refinery', 
        'ad_astra_giselle_addon:fuel_loader', 
        'ad_astra:launch_pad', 
        'ad_astra:oxygen_loader', 
        'ad_astra:space_helmet', 
        'ad_astra:space_suit', 
        'ad_astra:space_pants', 
        'ad_astra:space_boots', 
        'ad_astra_giselle_addon:oxygen_can', 
        'ad_astra:oxygen_tank', 
        'ad_astra:oxygen_gear',
        'ad_astra:tier_1_rocket',
        'ad_astra:desh_engine',
        'ad_astra:desh_tank',
        'ad_astra:ostrum_engine',
        'ad_astra:ostrum_tank',
        'ad_astra:calorite_engine',
        'ad_astra:calorite_tank',
        'ad_astra:tier_2_rocket',
        'ad_astra:tier_3_rocket',
        'ad_astra:tier_4_rocket',
        'ad_astra:jet_suit',
        'ad_astra:jet_suit_helmet',
        'ad_astra:jet_suit_pants',
        'ad_astra:jet_suit_boots'
    ]

    output.forEach(recipe => {
        event.remove({output: recipe})
    })
});