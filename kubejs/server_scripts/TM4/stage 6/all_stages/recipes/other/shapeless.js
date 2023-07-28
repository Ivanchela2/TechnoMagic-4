ServerEvents.recipes(event => {
    const prefix = 'gribtweaks:shapeless/';
    const recipes = [
        {
            output: 'gribtweaks:compressed_phantom_membrane',
            inputs: [
                'minecraft:phantom_membrane',
                'minecraft:phantom_membrane',
                'minecraft:phantom_membrane',
                'minecraft:phantom_membrane',
                'minecraft:phantom_membrane',
                'minecraft:phantom_membrane',
                'minecraft:phantom_membrane',
                'minecraft:phantom_membrane',
                'minecraft:phantom_membrane'
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
                'avaritia:double_compressed_crafting_table',
                'avaritia:double_compressed_crafting_table',
                'avaritia:double_compressed_crafting_table',
                'avaritia:double_compressed_crafting_table',
                'avaritia:double_compressed_crafting_table',
                'avaritia:double_compressed_crafting_table',
                'avaritia:double_compressed_crafting_table',
                'avaritia:double_compressed_crafting_table',
                'avaritia:double_compressed_crafting_table'
            ],
            id: `${prefix}triple_compressed_crafting_table`
        },
        {
            output: 'gribtweaks:quadruple_compressed_crafting_table',
            inputs: [
                'gribtweaks:triple_compressed_crafting_table',
                'gribtweaks:triple_compressed_crafting_table',
                'gribtweaks:triple_compressed_crafting_table',
                'gribtweaks:triple_compressed_crafting_table',
                'gribtweaks:triple_compressed_crafting_table',
                'gribtweaks:triple_compressed_crafting_table',
                'gribtweaks:triple_compressed_crafting_table',
                'gribtweaks:triple_compressed_crafting_table',
                'gribtweaks:triple_compressed_crafting_table'
            ],
            id: `${prefix}quadruple_compressed_crafting_table`
        },
        {
            output: 'gribtweaks:ametrine_ingot',
            inputs: [
                'gribtweaks:ametrine_nugget',
                'gribtweaks:ametrine_nugget',
                'gribtweaks:ametrine_nugget',
                'gribtweaks:ametrine_nugget',
                'gribtweaks:ametrine_nugget',
                'gribtweaks:ametrine_nugget',
                'gribtweaks:ametrine_nugget',
                'gribtweaks:ametrine_nugget',
                'gribtweaks:ametrine_nugget'
            ],
            id: `${prefix}ametrine_ingot_from_nuggets`
        },
        {
            output: '9x gribtweaks:ametrine_nugget',
            inputs: [ 'gribtweaks:ametrine_ingot' ],
            id: `${prefix}ametrine_nugget_of_ingot`
        },
        {
            output: 'gribtweaks:ametrine_block',
            inputs: [
                'gribtweaks:ametrine_ingot',
                'gribtweaks:ametrine_ingot',
                'gribtweaks:ametrine_ingot',
                'gribtweaks:ametrine_ingot',
                'gribtweaks:ametrine_ingot',
                'gribtweaks:ametrine_ingot',
                'gribtweaks:ametrine_ingot',
                'gribtweaks:ametrine_ingot',
                'gribtweaks:ametrine_ingot'
            ],
            id: `${prefix}ametrine_block_from_ingots`
        },
        {
            output: '9x gribtweaks:ametrine_ingot',
            inputs: [ 'gribtweaks:ametrine_block' ],
            id: `${prefix}ametrine_ingot_of_block`
        },
    ];

    recipes.forEach((recipe) => {
        event.shapeless(recipe.output, recipe.inputs).id(recipe.id);
    });
});
