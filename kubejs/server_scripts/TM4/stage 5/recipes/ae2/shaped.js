ServerEvents.recipes(event => {
    const prefix = 'tm4:ae2/shaped/';
    const recipes = [
        {
            output: 'ae2:fluid_cell_housing',
            pattern: ['ABA', 'BCB', 'DDD'],
            key: {
                A: 'ae2:quartz_glass',
                B: 'gribtweaks:energium_dust',
                C: 'gribtweaks:quantum_circuit',
                D: 'minecraft:copper_ingot'
            },
            id: `${prefix}fluid_cell_housing`
        },
        {
            output: 'ae2:item_cell_housing',
            pattern: ['ABA', 'BCB', 'DDD'],
            key: {
                A: 'ae2:quartz_glass',
                B: 'gribtweaks:energium_dust',
                C: 'gribtweaks:quantum_circuit',
                D: 'minecraft:iron_ingot'
            },
            id: `${prefix}item_cell_housing`
        },
        {
            output: 'appbot:mana_cell_housing',
            pattern: ['ABA', 'BCB', 'DDD'],
            key: {
                A: 'ae2:quartz_glass',
                B: 'botania:life_essence',
                C: 'gribtweaks:quantum_circuit',
                D: 'botania:manasteel_ingot'
            },
            id: `${prefix}mana_cell_housing`
        },
        {
            output: 'megacells:mega_fluid_cell_housing',
            pattern: ['ABA', 'BCB', 'DDD'],
            key: {
                A: 'ae2:quartz_glass',
                B: 'gribtweaks:oblivion_powder',
                C: 'gribtweaks:quantum_circuit',
                D: 'gribtweaks:hephaestus_ingot'
            },
            id: `${prefix}mega_fluid_cell_housing`
        },
        {
            output: 'megacells:mega_item_cell_housing',
            pattern: ['ABA', 'BCB', 'DDD'],
            key: {
                A: 'ae2:quartz_glass',
                B: 'gribtweaks:oblivion_powder',
                C: 'gribtweaks:quantum_circuit',
                D: 'gribtweaks:astral_ingot'
            },
            id: `${prefix}mega_item_cell_housing`
        },
        {
            output: 'ae2things:disk_housing',
            pattern: ['ABA', 'BCB', 'DFD'],
            key: {
                A: 'ae2:quartz_glass',
                B: 'gribtweaks:energium_dust',
                C: 'gribtweaks:quantum_circuit',
                D: 'minecraft:netherite_ingot',
                F: 'minecraft:amethyst_shard'
            },
            id: `${prefix}disk_housing`
        }
        
    ];
recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
    
});