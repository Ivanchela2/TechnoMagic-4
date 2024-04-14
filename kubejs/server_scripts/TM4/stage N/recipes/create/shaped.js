ServerEvents.recipes((event) => {
  const prefix = 'gribtweaks:create/shaped/';
  const recipes = [
            {
          output: '2x create:andesite_alloy',
          pattern: ['DBD', 'CAC', 'DBD'],
          key: {
            A: 'rootsclassic:growth_powder',
            B: 'create:zinc_nugget',
            C: 'minecraft:iron_nugget',
            D: 'minecraft:andesite'
          },
          id: `${prefix}andesite_alloy`
        }, 
        {
          output: '8x create:shaft',
          pattern: ['BA', 'AC'],
          key: {
            A: 'create:andesite_alloy',
            B: 'create:zinc_nugget',
            C: '#createbigcannons:sheet_steel'
          },
          id: `${prefix}shaft`
        }, 
        {
          output: 'create:water_wheel', 
          pattern: [
            'ABA', 
            'CDC', 
            'ABA'
            ],
          key: {
            A: 'create:andesite_alloy', 
            B: 'create:shaft',
            C: 'create:large_cogwheel',
            D: '#createbigcannons:block_steel'
          },
          id: `${prefix}water_wheel`
        },
        {
          output: 'create:nozzle', 
          pattern: [
            ' B ', 
            'CAC', 
            'BBB'
            ],
          key: {
            A: 'minecraft:white_wool', 
            B: 'create:andesite_alloy',
            C: 'seeds:dry_snowball'
          },
          id: `${prefix}nozzle`
        },
        {
          output: 'create:goggles', 
          pattern: [
            ' C ', 
            'BAB', 
            '   '
            ],
          key: {
            A: 'create:golden_sheet', 
            B: 'minecraft:glass',
            C: 'naturesaura:gold_fiber'
          },
          id: `${prefix}goggles`
        },
        {
          output: 'create:empty_blaze_burner', 
          pattern: [
            'DCD', 
            'BAB', 
            'DCD'
            ],
          key: {
            A: 'sorcerium:molten_crystal', 
            B: 'create:iron_sheet',
            C: 'twilightforest:knightmetal_ingot',
            D: 'minecraft:netherrack'
          },
          id: `${prefix}empty_blaze_burner`
        },
        {
          output: 'create:basin', 
          pattern: [
            '   ', 
            'B B', 
            'BAB'
            ],
          key: {
            A: 'twilightforest:ironwood_ingot', 
            B: 'create:andesite_alloy'
          },
          id: `${prefix}basin`
        },
        {
          output: 'create:chute', 
          pattern: [
            ' B ', 
            ' A ', 
            ' B '
            ],
          key: {
            A: 'twilightforest:ironwood_ingot', 
            B: 'create:iron_sheet'
          },
          id: `${prefix}chute`
        },
        {
          output: 'create:belt_connector', 
          pattern: [
            'BAB', 
            'ABA', 
            '   '
            ],
          key: {
            A: 'hexerei:dried_sage', 
            B: 'minecraft:dried_kelp'
          },
          id: `${prefix}belt_connector`
        },
  ];
  
  recipes.forEach((recipe) => {
      event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
  });
});