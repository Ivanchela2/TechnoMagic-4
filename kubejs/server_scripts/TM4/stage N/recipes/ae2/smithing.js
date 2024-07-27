ServerEvents.recipes(event => {
    const prefix = 'gribtweaks:ae2/smithing/';
    const recipes = [ 
        {
            input1: 'ae2:cell_component_1k',
            input2: 'ae2:item_cell_housing',
            output: 'ae2:item_storage_cell_1k',
            id: `${prefix}item_storage_cell_1k`
        },
        {
            input1: 'ae2:cell_component_1k',
            input2: 'ae2things:disk_housing',
            output: 'ae2things:disk_drive_1k',
            id: `${prefix}disk_drive_1k`
        },
        {
            input1: 'ae2:cell_component_1k',
            input2: 'appbot:mana_cell_housing',
            output: 'appbot:mana_storage_cell_1k' ,
            id: `${prefix}mana_storage_cell_1k`
        },
        {
            input1: 'ae2:cell_component_1k',
            input2: 'ae2:fluid_cell_housing',
            output: 'ae2:fluid_storage_cell_1k',
            id: `${prefix}fluid_storage_cell_1k`
        },
        {
            input1: 'ae2:cell_component_4k',
            input2: 'ae2:item_cell_housing',
            output: 'ae2:item_storage_cell_4k',
            id: `${prefix}item_storage_cell_4k`
        },
        {
            input1: 'ae2:cell_component_4k',
            input2: 'ae2things:disk_housing',
            output: 'ae2things:disk_drive_4k',
            id: `${prefix}disk_drive_4k`
        },
        {
            input1: 'ae2:cell_component_4k',
            input2: 'appbot:mana_cell_housing',
            output: 'appbot:mana_storage_cell_4k' ,
            id: `${prefix}mana_storage_cell_4k`
        },
        {
            input1: 'ae2:cell_component_4k',
            input2: 'ae2:fluid_cell_housing',
            output: 'ae2:fluid_storage_cell_4k',
            id: `${prefix}fluid_storage_cell_4k`
        },
        {
            input1: 'ae2:cell_component_16k',
            input2: 'ae2:item_cell_housing',
            output: 'ae2:item_storage_cell_16k',
            id: `${prefix}item_storage_cell_16k`
        },
        {
            input1: 'ae2:cell_component_16k',
            input2: 'ae2things:disk_housing',
            output: 'ae2things:disk_drive_16k',
            id: `${prefix}disk_drive_16k`
        },
        {
            input1: 'ae2:cell_component_16k',
            input2: 'appbot:mana_cell_housing',
            output: 'appbot:mana_storage_cell_16k' ,
            id: `${prefix}mana_storage_cell_16k`
        },
        {
            input1: 'ae2:cell_component_16k',
            input2: 'ae2:fluid_cell_housing',
            output: 'ae2:fluid_storage_cell_16k',
            id: `${prefix}fluid_storage_cell_16k`
        },
        {
            input1: 'ae2:cell_component_64k',
            input2: 'ae2:item_cell_housing',
            output: 'ae2:item_storage_cell_64k',
            id: `${prefix}item_storage_cell_64k`
        },
        {
            input1: 'ae2:cell_component_64k',
            input2: 'ae2things:disk_housing',
            output: 'ae2things:disk_drive_64k',
            id: `${prefix}disk_drive_64k`
        },
        {
            input1: 'ae2:cell_component_64k',
            input2: 'appbot:mana_cell_housing',
            output: 'appbot:mana_storage_cell_64k' ,
            id: `${prefix}mana_storage_cell_64k`
        },
        {
            input1: 'ae2:cell_component_64k',
            input2: 'ae2:fluid_cell_housing',
            output: 'ae2:fluid_storage_cell_64k',
            id: `${prefix}fluid_storage_cell_64k`
        },
        {
            input1: 'ae2:cell_component_256k',
            input2: 'ae2:item_cell_housing',
            output: 'ae2:item_storage_cell_256k',
            id: `${prefix}item_storage_cell_256k`
        },
        {
            input1: 'ae2:cell_component_256k',
            input2: 'ae2things:disk_housing',
            output: 'ae2things:disk_drive_256k',
            id: `${prefix}disk_drive_256k`
        },
        {
            input1: 'ae2:cell_component_256k',
            input2: 'ae2:fluid_cell_housing',
            output: 'ae2:fluid_storage_cell_256k',
            id: `${prefix}fluid_storage_cell_256k`
        },
        {
            input1: 'megacells:cell_component_1m',
            input2: 'megacells:mega_item_cell_housing',
            output: 'megacells:item_storage_cell_1m',
            id: `${prefix}item_storage_cell_1m`
        },
        {
            input1: 'megacells:cell_component_1m',
            input2: 'megacells:mega_fluid_cell_housing',
            output: 'megacells:fluid_storage_cell_1m',
            id: `${prefix}fluid_storage_cell_1m`
        },
        {
            input1: 'megacells:cell_component_4m',
            input2: 'megacells:mega_item_cell_housing',
            output: 'megacells:item_storage_cell_4m',
            id: `${prefix}item_storage_cell_4m`
        },
        {
            input1: 'megacells:cell_component_4m',
            input2: 'megacells:mega_fluid_cell_housing',
            output: 'megacells:fluid_storage_cell_4m',
            id: `${prefix}fluid_storage_cell_4m`
        },
        {
            input1: 'megacells:cell_component_16m',
            input2: 'megacells:mega_item_cell_housing',
            output: 'megacells:item_storage_cell_16m',
            id: `${prefix}item_storage_cell_16m`
        },
        {
            input1: 'megacells:cell_component_16m',
            input2: 'megacells:mega_fluid_cell_housing',
            output: 'megacells:fluid_storage_cell_16m',
            id: `${prefix}fluid_storage_cell_16m`
        },
        {
            input1: 'megacells:cell_component_64m',
            input2: 'megacells:mega_item_cell_housing',
            output: 'megacells:item_storage_cell_64m',
            id: `${prefix}item_storage_cell_64m`
        },
        {
            input1: 'megacells:cell_component_64m',
            input2: 'megacells:mega_fluid_cell_housing',
            output: 'megacells:fluid_storage_cell_64m',
            id: `${prefix}fluid_storage_cell_64m`
        },
        {
            input1: 'megacells:cell_component_256m',
            input2: 'megacells:mega_item_cell_housing',
            output: 'megacells:item_storage_cell_256m',
            id: `${prefix}item_storage_cell_256m`
        },
        {
            input1: 'megacells:cell_component_256m',
            input2: 'megacells:mega_fluid_cell_housing',
            output: 'megacells:fluid_storage_cell_256m',
            id: `${prefix}fluid_storage_cell_256m`
        }
    ];
    recipes.forEach((recipe) => {
        event.smithing(recipe.output, recipe.input1, recipe.input2).id(recipe.id);
    });
});
