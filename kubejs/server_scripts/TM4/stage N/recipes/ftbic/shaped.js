ServerEvents.recipes(event => {
    const prefix = 'gribtweaks:ftbic/shaped/';
    const recipes = [
        {
            output: 'twilightforest:borer_essence',
            pattern: ['AAA', 'ABA', 'AAA'],
            key: {
                A: 'twilightforest:liveroot',
                B: 'minecraft:wheat_seeds'
            },
            id: `${prefix}borer_essence`
        },
		{
            output: 'ftbic:carbon_helmet',
            pattern: ['ACA', 'ABA'],
            key: {
                A: 'ftbic:carbon_plate',
                B: 'forbidden_arcanus:mortem_helmet',
                C: 'ftbic:energy_crystal'
            },
            id: `${prefix}carbon_helmet`
        },
		{
            output: 'ftbic:carbon_chestplate',
            pattern: ['ABA', 'ACA', 'ADA'],
            key: {
                A: 'ftbic:carbon_plate',
                B: 'enigmaticlegacy:fabulous_scroll',
                C: 'forbidden_arcanus:mortem_chestplate',
                D: 'ftbic:hv_battery'
            },
            id: `${prefix}carbon_chestplate`
        },
		{
            output: 'ftbic:carbon_leggings',
            pattern: ['ACA', 'ABA', 'A A'],
            key: {
                A: 'ftbic:carbon_plate',
                B: 'forbidden_arcanus:mortem_leggings',
                C: 'ftbic:energy_crystal'
            },
            id: `${prefix}carbon_leggings`
        },
		{
            output: 'ftbic:carbon_boots',
            pattern: ['ACA', 'ABA'],
            key: {
                A: 'ftbic:carbon_plate',
                B: 'forbidden_arcanus:mortem_boots',
                C: 'ftbic:energy_crystal'
            },
            id: `${prefix}carbon_boots`
        },
		{
            output: 'ftbic:mechanical_elytra',
            pattern: ['ABA', 'ACA', 'DED'],
            key: {
                A: 'ftbic:carbon_plate',
                B: 'ftbic:mv_battery',
                C: 'ftbic:lv_solar_panel',
                D: 'ftbic:heat_vent',
				E: 'enigmaticlegacy:enigmatic_elytra'
            },
            id: `${prefix}mechanical_elytra`
        },
		{
            output: 'ftbic:powered_furnace',
            pattern: [' A ', 'BCB', ' D '],
            key: {
                A: 'ftbic:electronic_circuit',
                B: 'create:polished_rose_quartz',
                C: 'ftbic:machine_block',
                D: 'ftbic:iron_furnace'
            },
            id: `${prefix}powered_furnace`
        },
		{
            output: 'ftbic:iron_furnace',
            pattern: [' C ', 'CBC', 'CAC'],
            key: {
                A: 'minecraft:furnace',
                B: 'ftbic:copper_gear',
                C: 'ftbic:industrial_grade_metal'
            },
            id: `${prefix}iron_furnace`
        },
        {
            output: 'ftbic:quantum_boots' ,
            pattern: ['   ', 'ABA', 'CDC'],
            key: {
                A: 'gribtweaks:quantum_ingot',
                B: 'enigmaticlegacy:etherium_boots',
                C: 'ftbic:reinforced_stone',
                D: { type: 'forge:nbt', item: 'twilightforest:fiery_boots', count: 1 , nbt :'{Damage:0,Modifier:\'forbidden_arcanus:magnetized\'}'}
            },
            id: `${prefix}quantum_boots`
        },
		{
            output: 'ftbic:quantum_leggings',
            pattern: ['AAA', 'BCB', 'D D'],
            key: {
                A: 'gribtweaks:quantum_ingot',
                B: 'ftbic:advanced_machine_block',
                C: 'enigmaticlegacy:etherium_leggings',
                D: 'gribtweaks:quantum_circuit'
            },
            id: `${prefix}quantum_leggings`
        },
		{
            output: 'ftbic:quantum_chestplate',
            pattern: ['ABA', 'CDC', 'EFE'],
            key: {
                A: 'gribtweaks:quantum_ingot', 
                B: { type: 'forge:nbt', item: 'ftbic:ev_battery', count: 1 , nbt :'{Energy:1.0E7d}'},
                C: 'ftbic:antimatter',
                D: 'enigmaticlegacy:etherium_chestplate',
                E: 'gribtweaks:quantum_circuit',
                F: 'ftbic:mechanical_elytra'
            },
            id: `${prefix}quantum_chestplate`
        },
		{
            output: 'ftbic:quantum_helmet',
            pattern: [' A ', 'BCB', 'CDC'],
            key: {
                A: 'ftbic:reinforced_glass',
                B: 'gribtweaks:quantum_ingot',
                C: 'gribtweaks:quantum_circuit',
                D: 'enigmaticlegacy:etherium_helmet'
            },
            id: `${prefix}quantum_helmet`
        },
		{
            output: 'ftbic:overclocker_upgrade',
            pattern: ['ABA', 'CDC', 'ABA'],
            key: {
                A: Item.of('ftbic:small_coolant_cell', '{Damage:0}'),
                B: 'ftbic:lv_cable',
                C: 'ftbic:electronic_circuit',
                D: 'ftbic:upgrade_template'
            },
            id: `${prefix}overclocker_upgrade`
        },
		{
            output: 'ftbic:energy_storage_upgrade',
            pattern: ['ABA', 'BCB', 'ABA'],
            key: {
                A: '#minecraft:planks',
                B: { type: 'forge:nbt', item: "ftbic:lv_battery", count: 1 , nbt: "{Energy:4000.0d}" },
                C: 'ftbic:upgrade_template'
            },
            id: `${prefix}energy_storage_upgrade`
        },
		{
            output: 'ftbic:ejector_upgrade',
            pattern: ['ABA', 'BCB', 'ABA'],
            key: {
                A: '#forge:ingots/tin',
                B: 'minecraft:piston',
                C: 'ftbic:upgrade_template'
            },
            id: `${prefix}ejector_upgrade`
        },
		{
            output: 'ftbic:transformer_upgrade',
            pattern: ['AAA', 'CDC', 'ABA'],
            key: {
                A: '#forge:glass',
                B: 'ftbic:electronic_circuit',
                C: 'ftbic:mv_cable',
                D: 'ftbic:upgrade_template'
            },
            id: `${prefix}transformer_upgrade`
        },
        {
            output: 'ftbic:machine_block',
            pattern: ['ABA', 'CDC', 'ABA'],
            key: {
                A: 'ftbic:industrial_grade_metal',
                B: 'ftbic:fuse',
                C: 'gribtweaks:iridium_shard',
                D: 'twilightforest:carminite_reactor'
            },
            id: `${prefix}machine_block`
        },
        {
            output: 'ftbic:advanced_machine_block',
            pattern: ['DCB', 'EAE', 'BCD'],
            key: {
                A: 'ftbic:machine_block',
                B: 'gribtweaks:antimatter_ingot',
                C: 'ftbic:advanced_alloy',
                D: 'aquaculture:neptunium_ingot',
                E: 'ftbic:carbon_plate'
            },
            id: `${prefix}advanced_machine_block`
        },
    ];
recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
    
});