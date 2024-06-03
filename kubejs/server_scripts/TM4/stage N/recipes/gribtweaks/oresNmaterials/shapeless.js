ServerEvents.recipes(event => {
    const prefix = 'gribtweaks:shapeless/';
    const recipes = [
        // ASH BLOCKS ------------------------------------------------------------------   
        // gt + supplementaries mod
        {
            output: 'gribtweaks:ash_block',
            inputs: [
                'supplementaries:ash',
                'supplementaries:ash',
                'supplementaries:ash',
                'supplementaries:ash',
                'supplementaries:ash',
                'supplementaries:ash',
                'supplementaries:ash',
                'supplementaries:ash',
                'supplementaries:ash'
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
                'gribtweaks:nugget_osmium',
                'gribtweaks:nugget_osmium',
                'gribtweaks:nugget_osmium',
                'gribtweaks:nugget_osmium',
                'gribtweaks:nugget_osmium',
                'gribtweaks:nugget_osmium',
                'gribtweaks:nugget_osmium',
                'gribtweaks:nugget_osmium',
                'gribtweaks:nugget_osmium'
            ],
            id: `${prefix}ingot_osmium_from_nuggets`
        },
        {
            output: 'gribtweaks:block_osmium',
            inputs: [
                'gribtweaks:ingot_osmium',
                'gribtweaks:ingot_osmium',
                'gribtweaks:ingot_osmium',
                'gribtweaks:ingot_osmium',
                'gribtweaks:ingot_osmium',
                'gribtweaks:ingot_osmium',
                'gribtweaks:ingot_osmium',
                'gribtweaks:ingot_osmium',
                'gribtweaks:ingot_osmium'
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
                'gribtweaks:witch_nugget',
                'gribtweaks:witch_nugget',
                'gribtweaks:witch_nugget',
                'gribtweaks:witch_nugget',
                'gribtweaks:witch_nugget',
                'gribtweaks:witch_nugget',
                'gribtweaks:witch_nugget',
                'gribtweaks:witch_nugget',
                'gribtweaks:witch_nugget'
            ],
            id: `${prefix}witch_ingot_from_nuggets`
        },
        {
            output: 'gribtweaks:witch_ingot_block',
            inputs: [
                'gribtweaks:witch_ingot',
                'gribtweaks:witch_ingot',
                'gribtweaks:witch_ingot',
                'gribtweaks:witch_ingot',
                'gribtweaks:witch_ingot',
                'gribtweaks:witch_ingot',
                'gribtweaks:witch_ingot',
                'gribtweaks:witch_ingot',
                'gribtweaks:witch_ingot'
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
        }
    ]

    recipes.forEach((recipe) => {
        event.shapeless(recipe.output, recipe.inputs).id(recipe.id);
    });
})