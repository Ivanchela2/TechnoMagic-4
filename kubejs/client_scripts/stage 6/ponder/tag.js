Ponder.tags(event => {
    event.createTag('tm4:reactors', 'biggerreactors:reactor_terminal', 'TM4: Реакторы', 'Все о реакторах!', [
        'biggerreactors:reactor_casing'
    ]);
    event.createTag('tm4:farms', 'minecraft:diamond', 'TM4: Фермы/Заводы', 'Нужны ресурсы?', [
        'create:andesite_alloy',
        'minecraft:lava_bucket'
    ]);
    event.createTag('tm4:rituals', 'minecraft:oak_sapling', 'TM4: Ритуалы', 'Все для ритуалов!', [
        'rootsclassic:altar',
        'naturesaura:nature_altar',
        'naturesaura:gold_powder'
    ]);
});