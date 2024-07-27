ServerEvents.recipes(event => {
    const prefix = 'gribtweaks:shapeless/';
    const recipes = [
        {
            output: 'gribtweaks:quantum_ingot',
            inputs: [
                'ftbic:iridium_alloy',
                '#forge:ingots/lead',
                '#forge:ingots/uranium',
                'ftbic:enderium_ingot',
                '#forge:ingots/iridium',
                '#forge:ingots/bronze',
                '#forge:ingots/tin',
                '#forge:ingots/aluminum',
                'ftbic:advanced_alloy'
            ],
            id: `${prefix}quantum_ingot`
        },
        {
            output: 'gribtweaks:compressed_phantom_membrane',
            inputs: [
                '9x minecraft:phantom_membrane'
            ],
            id: `${prefix}compressed_phantom_membrane`
        },
        {
            output: '9x minecraft:phantom_membrane',
            inputs: [ 'gribtweaks:compressed_phantom_membrane' ],
            id: `${prefix}phantom_membrane_of_compressed_verison`
        },
        {
            output: 'gribtweaks:triple_compressed_crafting_table',
            inputs: [
                '9x avaritia:double_compressed_crafting_table'
            ],
            id: `${prefix}triple_compressed_crafting_table`
        },
        {
            output: 'gribtweaks:quadruple_compressed_crafting_table',
            inputs: [
                '9x gribtweaks:triple_compressed_crafting_table'
            ],
            id: `${prefix}quadruple_compressed_crafting_table`
        },
        {
            output: 'gribtweaks:ultimate_ingot',
            inputs: [
                '9x gribtweaks:ultimate_nugget'
            ],
            id: `${prefix}ultimate_ingot`
        },
        {
            output: '9x gribtweaks:ultimate_nugget',
            inputs: [ 'gribtweaks:ultimate_ingot' ],
            id: `${prefix}ultimate_nugget`
        },
        {
            output: 'gribtweaks:ultimate_block',
            inputs: [
                '9x gribtweaks:ultimate_ingot'
            ],
            id: `${prefix}ultimate_block`
        },
        {
            output: '9x gribtweaks:ultimate_ingot',
            inputs: [ 'gribtweaks:ultimate_block' ],
            id: `${prefix}ultimate_ingots_of_block`
        }
    ]

    recipes.forEach((recipe) => {
        event.shapeless(recipe.output, recipe.inputs).id(recipe.id);
    });
})