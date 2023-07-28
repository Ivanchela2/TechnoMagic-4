ServerEvents.recipes(event => {
    const prefix = 'tm4:enigmatic_legacy/shaped/';
    const recipes = [
        {
            output: 'enigmaticlegacy:the_acknowledgment',
            pattern: [' A ', 'SFS', ' A '],
            key: {
                S: 'twilightforest:carminite',
                A: 'twilightforest:fiery_tears',
                F: 'minecraft:book'
            },
            id: `${prefix}the_acknowledgment`
        },
		{
            output: 'enigmaticlegacy:etherium_helmet',
            pattern: ['AAA', 'ABA', '   '],
            key: {
                A: 'enigmaticlegacy:etherium_ingot',
                B: 'ftbic:carbon_helmet'
            },
            id: `${prefix}etherium_helmet`
        },
		{
            output: 'enigmaticlegacy:etherium_chestplate',
            pattern: ['A A', 'ABA', 'AAA'],
            key: {
                A: 'enigmaticlegacy:etherium_ingot',
                B: 'ftbic:carbon_chestplate'
            },
            id: `${prefix}etherium_chestplate`
        },
		{
            output: 'enigmaticlegacy:etherium_leggings',
            pattern: ['AAA', 'ABA', 'A A'],
            key: {
                A: 'enigmaticlegacy:etherium_ingot',
                B: 'ftbic:carbon_leggings'
            },
            id: `${prefix}etherium_leggings`
        },
		{
            output: 'enigmaticlegacy:etherium_boots',
            pattern: ['   ', 'A A', 'ABA'],
            key: {
                A: 'enigmaticlegacy:etherium_ingot',
                B: 'ftbic:carbon_boots'
            },
            id: `${prefix}etherium_boots`
        },
		{
            output: 'enigmaticlegacy:forbidden_axe',
            pattern: ['ABA', 'CDC', ' E '],
            key: {
                A: 'enigmaticlegacy:evil_ingot',
                B: 'minecraft:wither_skeleton_skull',
				C: 'minecraft:blaze_powder',
				D: 'twilightforest:diamond_minotaur_axe',
				E: 'minecraft:blaze_rod'
            },
            id: `${prefix}forbidden_axe`
        },
		{
            output: 'enigmaticlegacy:mega_sponge',
            pattern: ['ABA', 'DCD', 'AEA'],
            key: {
                A: 'minecraft:sponge',
                B: 'enigmaticlegacy:ocean_stone',
				D: 'minecraft:nautilus_shell',
				C: 'minecraft:heart_of_the_sea',
				E: 'minecraft:ghast_tear'
            },
            id: `${prefix}mega_sponge`
        },
		{
            output: 'enigmaticlegacy:monster_charm',
            pattern: [' A ', 'CBC', 'EDE'],
            key: {
                A: 'minecraft:soul_lantern',
                B: 'minecraft:wither_skeleton_skull',
				D: 'enigmaticlegacy:blazing_core',
				C: 'minecraft:blaze_powder',
				E: 'minecraft:experience_bottle'
            },
            id: `${prefix}monster_charm`
        },
		{
            output: 'enigmaticlegacy:extradimensional_eye',
            pattern: [' A ', 'CBC', 'EDE'],
            key: {
                A: 'minecraft:phantom_membrane',
                B: 'minecraft:ender_eye',
				D: 'enigmaticlegacy:golem_heart',
				C: 'minecraft:gold_ingot',
				E: 'minecraft:gold_nugget'
            },
            id: `${prefix}extradimensional_eye`
        },
		{
            output: 'enigmaticlegacy:etherium_ingot',
            pattern: ['AAA', 'AAA', 'AAA'],
            key: {
                A: 'enigmaticlegacy:etherium_nugget'
            },
            id: `${prefix}etherium_ingot`
        }
        
    ];
recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
    
});