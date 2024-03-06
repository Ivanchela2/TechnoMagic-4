ServerEvents.recipes((event) => {
  const prefix = 'gribtweaks:hexerei/shaped/';
  const recipes = [
        {
          output: 'hexerei:mixing_cauldron',
          pattern: ['EFE', 'DCD', 'ABA'],
          key: {
            A: 'naturesaura:infused_iron',
            B: 'gribtweaks:tained_gold_leaf',
            C: 'minecraft:cauldron',
            D: 'occultism:spirit_attuned_gem',
            E: 'rootsclassic:growth_powder',
            F: 'twilightforest:ironwood_ingot'
          },
          id: `${prefix}mixing_cauldron`
        },    
        {
          output: 'hexerei:herb_drying_rack',
          pattern: [' E ', 'CDC', 'ABA'],
          key: {
            A: 'totemic:eagle_bone',
            B: '#minecraft:wooden_slabs',
            C: 'occultism:otherworld_ashes',
            D: 'minecraft:string',
            E: 'gribtweaks:wooden_rod'
          },
          id: `${prefix}herb_drying_rack`
        }, 
        {
          output: 'hexerei:witch_helmet', 
          pattern: [
            'ABA', 
            'A A', 
            '   '
            ],
          key: {
            A: 'hexerei:infused_fabric', 
            B: 'twilightforest:raven_feather'
          },
          id: `${prefix}witch_helmet`
        },
        {
          output: 'hexerei:witch_chestplate', 
          pattern: [
            'A A', 
            'ABA', 
            'AAA'
            ],
          key: {
            A: 'hexerei:infused_fabric', 
            B: 'twilightforest:raven_feather'
          },
          id: `${prefix}witch_chestplate`
        },
        {
          output: 'hexerei:witch_boots', 
          pattern: [
            '   ', 
            'A A', 
            'ABA'
            ],
          key: {
            A: 'hexerei:infused_fabric', 
            B: 'twilightforest:raven_feather'
          },
          id: `${prefix}witch_boots`
        },
        {
          output: 'hexerei:dowsing_rod', 
          pattern: [
            ' B ', 
            'BAB', 
            'C C'
            ],
          key: {
            A: 'naturesaura:gold_leaf', 
            B: 'naturesaura:ancient_leaves',
            C: 'naturesaura:ancient_stick'
          },
          id: `${prefix}dowsing_rod`
        },
        { 
          output: 'hexerei:crow_flute', 
          pattern: [
            '  A',
            'BA ',
            'AB '
            ],
          key: {
            A: 'hexerei:mahogany_planks',
            B: 'gribtweaks:raven_cloth'
          },
          id: `${prefix}crow_flute`
        }
  ];
  
  recipes.forEach((recipe) => {
      event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
  });
});