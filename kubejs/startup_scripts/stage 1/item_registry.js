StartupEvents.registry('item', event => {
    const items = [
        // { id: 'gribtweaks:sandstein', alias: 'Песчаная жеода' },
        // { id: 'gribtweaks:raw_copper_fragment', alias: 'Сырой фрагмент меди' },
        // { id: 'gribtweaks:primitive_brush', alias: 'Примитивная щётка' },
        // { id: 'gribtweaks:raw_copper_nugget', alias: 'Сырой кусочек меди' },
        // { id: 'gribtweaks:raw_zinc_fragment', alias: 'Сырой фрагмент цинка' },
        // { id: 'gribtweaks:sandstone_pieces', alias: 'Песчаные кусочки' },
        // { id: 'gribtweaks:sandstone_cup', alias: 'Песчаная кружка' },
        // { id: 'gribtweaks:sandstone_cup_filled', alias: 'Песчаная кружка с водой' },
        // { id: 'gribtweaks:sandstone_knife', alias: 'Песчаный нож' },
        { id: 'gribtweaks:wooden_knife', alias: 'Деревянный нож' },
        // { id: 'gribtweaks:raw_gold_fragment', alias: 'Сырой фрагмент золота' },
        // { id: 'gribtweaks:raw_gold_nugget', alias: 'Сырой кусочек золота' },
        // { id: 'gribtweaks:raw_iron_fragment', alias: 'Сырой фрагмент железа' },
        // { id: 'gribtweaks:raw_iron_nugget', alias: 'Сырой кусочек железа' },
        // { id: 'gribtweaks:raw_lapis_fragment', alias: 'Сырой фрагмент лазурита' },
        // { id: 'gribtweaks:raw_redstone_fragment', alias: 'Сырой фрагмент редстоуна' },
        // { id: 'gribtweaks:raw_zinc_nugget', alias: 'Сырой кусочек цинка' },
        // { id: 'gribtweaks:raw_andesite_nugget', alias: 'Сырой кусочек андезита' },
        { id: 'gribtweaks:sand_redstone_nugget', alias: 'Сырой кусочек редстоуна' },
        { id: 'gribtweaks:raw_lapis', alias: 'Рудный лазурит' },
        { id: 'gribtweaks:raw_zinc', alias: 'Рудный цинк' },
        { id: 'gribtweaks:unforgotten_soul', alias: 'Незабвенная душа' },
        { id: 'gribtweaks:raw_andesite_nugget', alias: 'Кусочек андезита' },
        { id: 'gribtweaks:sand_lapis_nugget', alias: 'Сырой кусочек лазурита' }
    ];

    items.forEach((item) => {
        event.create(item.id).displayName(item.alias);
    });
});