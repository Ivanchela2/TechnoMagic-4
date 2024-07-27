Ponder.tags(event => {
    event.createTag('gribtweaks:reactors', 'biggerreactors:reactor_terminal', 'TM4: Реакторы', 'Все о реакторах!', [
        'biggerreactors:reactor_casing'
        // 'alchemistry:fusion_chamber_controller',
        // 'alchemistry:fission_chamber_controller'
    ]);
    event.createTag('gribtweaks:farms', 'minecraft:diamond', 'TM4: Фермы/Заводы', 'Нужны ресурсы?', [
        'create:andesite_alloy',
        'minecraft:oak_log',
        'minecraft:lava_bucket',
        'botania:endoflame',
        'botania:gourmaryllis',
        'botania:hydroangeas',
        'botania:orechid',
        'botania:orechid_ignem',
        'botania:entropinnyum',
        'gribtweaks:steam_power_generator',
        'minecraft:iron_ore',
        'minecraft:iron_ingot',
        'create:precision_mechanism',
        'minecraft:white_concrete'
    ]);
    event.createTag('gribtweaks:rituals', 'minecraft:oak_sapling', 'TM4: Ритуалы', 'Все для ритуалов!', [
        'naturesaura:nature_altar',
        'naturesaura:animal_spawner',
        'naturesaura:offering_table',
        'naturesaura:rf_converter',
        'naturesaura:potion_generator',
        'naturesaura:gold_powder',
        'occultism:golden_sacrificial_bowl',
        'forbidden_arcanus:hephaestus_forge',
        'botania:gaia_pylon',
        'vitalize:soul_revitalizer'
    ]);
    /*e.createTag("gribtweaks:tech", 'ftbic:electronic_circuit', "TM4: Technologies", "World of Technologies", [
        
    ]);*/
    event.createTag("gribtweaks:magic", 'botania:mana_pylon', "TM4: Магия", "Мир магии!", [
        'botania:orechid',
        'botania:orechid_ignem'
    ]);
});