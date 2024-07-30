ServerEvents.recipes(event => {
    const prefix = 'gribtweaks:shapeless/';
    const recipes = [
        // ASH BLOCKS ------------------------------------------------------------------   
        // gt + supplementaries mod
        {
            output: 'gribtweaks:ash_block',
            inputs: [
                '9x supplementaries:ash'
            ],
            id: `${prefix}ash_block_from_dusts`
        },
        {
            output: '9x supplementaries:ash',
            inputs: [ 'gribtweaks:ash_block' ],
            id: `${prefix}ash_of_block`
        },
        {
            output: '9x gribtweaks:ash_block',
            inputs: [ 'gribtweaks:compressed_ash_block' ],
            id: `${prefix}ash_block_of_compressed`
        },


        // OSMIUM ORE ------------------------------------------------------------------
        {
            output: 'gribtweaks:ingot_osmium',
            inputs: [
                '9x gribtweaks:nugget_osmium'
            ],
            id: `${prefix}ingot_osmium_from_nuggets`
        },
        {
            output: 'gribtweaks:block_osmium',
            inputs: [
                '9x gribtweaks:ingot_osmium',
            ],
            id: `${prefix}block_osmium_from_ingots`
        },
        {
            output: '9x gribtweaks:ingot_osmium',
            inputs: [ 'gribtweaks:block_osmium' ],
            id: `${prefix}ingot_osmium_of_block`
        },
        {
            output: '9x gribtweaks:nugget_osmium',
            inputs: [ 'gribtweaks:ingot_osmium' ],
            id: `${prefix}osmium_nugget_of_ingot`
        },
        
        
        // WITCH ORE ------------------------------------------------------------------
        {
            output: 'gribtweaks:witch_ingot',
            inputs: [
                '9x gribtweaks:witch_nugget'
            ],
            id: `${prefix}witch_ingot_from_nuggets`
        },
        {
            output: 'gribtweaks:witch_ingot_block',
            inputs: [
                '9x gribtweaks:witch_ingot'
            ],
            id: `${prefix}witch_block_from_ingots`
        },
        {
            output: '9x gribtweaks:witch_ingot',
            inputs: [ 'gribtweaks:witch_ingot_block' ],
            id: `${prefix}witch_ingot_of_block`
        },
        {
            output: '9x gribtweaks:witch_nugget',
            inputs: [ 'gribtweaks:witch_ingot' ],
            id: `${prefix}witch_nugget_of_ingot`
        },


        // AMETRINE ORE ------------------------------------------------------------------
        {
            output: 'gribtweaks:ametrine_ingot',
            inputs: [
                '9x gribtweaks:ametrine_nugget'
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
                '9x gribtweaks:ametrine_ingot'
            ],
            id: `${prefix}ametrine_block_from_ingots`
        },
        {
            output: '9x gribtweaks:ametrine_ingot',
            inputs: [ 'gribtweaks:ametrine_block' ],
            id: `${prefix}ametrine_ingot_of_block`
        },


        // enigmaticlegacy:etherium ------------------------------------------------------------------
        {
            output: 'enigmaticlegacy:etherium_ingot',
            inputs: [ '9x enigmaticlegacy:etherium_nugget' ],
            id: `${prefix}etherium_ingot_from_nuggets`
        },
        {
            output: '9x enigmaticlegacy:etherium_ingot',
            inputs: [ 'enigmaticlegacy:etherium_block' ],
            id: `${prefix}etherium_ingot_of_block`
        },
    ]

    recipes.forEach((recipe) => {
        event.shapeless(recipe.output, recipe.inputs).id(recipe.id);
    });
})