Ponder.tags(event => {
    event.createTag('tm4:reactors', 'biggerreactors:reactor_terminal', 'TM4: Реакторы', 'Все о реакторах!', [
        'biggerreactors:reactor_casing',
        'alchemistry:fusion_chamber_controller',
        'alchemistry:fission_chamber_controller'
    ]);
    event.createTag('tm4:farms', 'minecraft:diamond', 'TM4: Фермы/Заводы', 'Нужны ресурсы?', [
        'create:andesite_alloy',
        'minecraft:lava_bucket',
        'botania:endoflame',
        'botania:gourmaryllis',
        'botania:hydroangeas',
        'botania:orechid',
        'botania:orechid_ignem',
        'botania:entropinnyum',
        'create:steam_power_generator',
        'minecraft:iron_ore',
        'minecraft:iron_ingot',
        'create:precision_mechanism',
        'minecraft:white_concrete',
        'minecraft:flint'
    ]);
    event.createTag('tm4:rituals', 'minecraft:oak_sapling', 'TM4: Ритуалы', 'Все для ритуалов!', [
        'rootsclassic:altar',
        'naturesaura:nature_altar',
        'naturesaura:gold_powder',
        'occultism:golden_sacrificial_bowl',
        'forbidden_arcanus:hephaestus_forge',
        'botania:gaia_pylon',
        'vitalize:soul_revitalizer'
    ]);
    /*e.createTag("tm4:tech", 'ftbic:electronic_circuit', "TM4: Technologies", "World of Technologies", [
        
    ]);*/
    event.createTag("tm4:magic", 'botania:mana_pylon', "TM4: Magic", "World of Magic", [
        'botania:orechid',
        'botania:orechid_ignem'
    ]);
});