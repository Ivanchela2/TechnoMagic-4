ServerEvents.recipes((event) => {
  const prefix = 'gribtweaks:arclight/shaped/';
  const recipes = [
            {
          output: 'arclight:armor_forge',
          pattern: ['AJM', 'DTE', 'BCS'],
          key: {
            A: 'arclight:arclight_gem',
            B: 'arclight:bloodstone_gem',
            C: 'arclight:cryorium_gem',
            D: 'gribtweaks:sculk_circuit',
            E: 'gribtweaks:mechanical_circuit',
            J: 'arclight:jade_gem',
            M: 'arclight:moonlight_crystal',
            S: 'minecraft:echo_shard',  
            T: 'minecraft:smithing_table'  
          },
          id: `${prefix}armor_forge`
        },    
        {
          output: 'arclight:moonlight_core',
          pattern: ['MCJ', 'FSF', 'JCM'],
          key: {
            C: 'minecraft:end_crystal',
            F: 'arclight:angel_feather',
            J: 'gribtweaks:angel_ingot',
            M: 'arclight:moonlight_ingot',
            S: 'arclight:arclight_core' 
          },
          id: `${prefix}moonlight_core`
        },
        {
          output: 'arclight:sculk_core',
          pattern: ['VCJ', 'LSL', 'JCV'],
          key: {
            C: 'arclight:angel_feather',
            J: 'arclight:sculk_ingot',
            L: 'spirit:soul_steel_block',
            S: 'arclight:moonlight_core',
            V: 'gribtweaks:angel_ingot'
          },
          id: `${prefix}sculk_core`
        },
        {
          output: 'arclight:scorpion_core',
          pattern: ['ABN', 'BSB', 'NBA'],
          key: {
            A: 'gribtweaks:angel_ingot',    
            B: 'arclight:bloodstone_ingot',    
            N: 'twilightforest:naga_scale',
            S: 'forbidden_arcanus:dark_nether_star',
          },
          id: `${prefix}scorpion_core`
        },
        {
          output: 'arclight:cryorium_core',
          pattern: ['DCJ', 'FSF', 'JCD'],
          key: {
            D: 'gribtweaks:angel_ingot',
            C: 'minecraft:end_crystal',
            F: 'arclight:angel_feather',
            J: 'arclight:cryorium_ingot',
            S: 'arclight:arclight_core' 
          },
          id: `${prefix}cryorium_core`
        },
        {
          output: 'arclight:jade_core',
          pattern: ['DCJ', 'FSF', 'JCD'],
          key: {
            D: 'gribtweaks:angel_ingot',
            C: 'minecraft:end_crystal',
            F: 'arclight:angel_feather',
            J: 'arclight:jade_ingot',
            S: 'arclight:arclight_core' 
          },
          id: `${prefix}jade_core`
        }
  ];
  
  recipes.forEach((recipe) => {
      event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
  });
});