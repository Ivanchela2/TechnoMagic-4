ClientEvents.lang('ru_ru', e => {
    const translates = {
        'item.minecraft.potion.effect.vigilance': 'Зелье зоркости',
        'item.minecraft.splash_potion.effect.vigilance': 'Взрывное зелье зоркости',
        'item.minecraft.tipped_arrow.effect.vigilance': 'Стрела зоркости',
        'item.minecraft.lingering_potion.effect.vigilance': 'Туманное зелье зоркости'
    };

    for (const [id, rename] of Object.entries(translates)) {
        e.add(id, rename);
    };

    const singularities = {
        'amethyst': 'Аметистовая',
        'calorite': 'Калоритовая',
        'dark_matter': 'Тёмно-материевая',
        'depth': 'Глубинная',
        'etherium': 'Эфириумная',
        'experience': 'Опыт',
        'fiery_blood': 'Огненная',
        'gribony': 'Грибониевая',
        'knight_metal': 'Королевская',
        'neutronium': 'Нейтронивая',
        'precision_mechanism': 'Механическая',
        'rose_quartz': 'Розово-кварцевая',
        'soul_steel': 'Стале-душевая',
        'terra_steel': 'Террастальная'
    };

    for (const [id, rename] of Object.entries(singularities)) {
        e.add(`singularity.avaritia.${id}`, rename);
    };
});