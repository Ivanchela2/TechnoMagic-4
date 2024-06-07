ServerEvents.recipes(e => {
    const prefix = 'gribtweaks:botania/shaped/';
    e.shapeless('botania:life_essence_block', '9x botania:life_essence').id(`${prefix}life_essence_block`)
    e.shapeless('9x botania:life_essence', 'botania:life_essence_block').id(`${prefix}life_essence`)
})