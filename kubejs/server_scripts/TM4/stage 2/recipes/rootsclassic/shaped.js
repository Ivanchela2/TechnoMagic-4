ServerEvents.recipes(event => {
    //������
    event.shaped('rootsclassic:pestle', [
        '  B',
        'BB ',
        'BB '
    ], {
        B: 'minecraft:bone'
    })

    //������ �������
    event.shaped('rootsclassic:verdant_sprig', [
        'LL',
        'LL'
    ], {
        L: 'seeds:sharp_leaf'
    })

    //������� �������� �����
    event.shaped('rootsclassic:mundane_standing_stone', [
        'CSC',
        'SLS',
        'ASA'
    ], {
        C: 'chipped:creeper_andesite_carving',
        S: 'minecraft:stone_bricks',
        L: 'minecraft:lapis_block',
        A: 'chipped:curly_andesite_pillar'

    })
});