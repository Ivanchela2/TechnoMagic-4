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
          pattern: ['ABA', 'CDC', 'ABA'],
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
          pattern: [' B ', 'CAC', 'BBB'],
          key: {
            A: 'minecraft:white_wool', 
            B: 'create:andesite_alloy',
            C: 'seeds:dry_snowball'
          },
          id: `${prefix}nozzle`
        },
        {
          output: 'create:goggles', 
          pattern: ['DCD', 'BAB'],
          key: {
            A: '#forge:plates/gold', 
            B: 'minecraft:glass',
            C: 'naturesaura:gold_fiber',
            D: '#notreepunching:string'
          },
          id: `${prefix}goggles`
        },
        {
          output: 'create:empty_blaze_burner', 
          pattern: ['DCD', 'BAB', 'DCD'],
          key: {
            A: 'sorcerium:molten_crystal', 
            B: '#forge:plates/iron',
            C: '#forge:ingots/steel',
            D: 'minecraft:netherrack'
          },
          id: `${prefix}empty_blaze_burner`
        },
        {
          output: 'create:basin', 
          pattern: ['B B', 'BAB'],
          key: {
            A: 'twilightforest:ironwood_ingot', 
            B: 'create:andesite_alloy'
          },
          id: `${prefix}basin`
        },
        {
          output: 'create:chute', 
          pattern: [' B ', ' A ', ' B '],
          key: {
            A: 'twilightforest:ironwood_ingot', 
            B: 'ftbic:iron_plate'
          },
          id: `${prefix}chute`
        },
        {
          output: 'create:belt_connector', 
          pattern: ['BAB', 'ABA'],
          key: {
            A: 'hexerei:dried_sage', 
            B: 'minecraft:dried_kelp'
          },
          id: `${prefix}belt_connector`
        },
        {
            output: 'create:precision_mechanism', 
            pattern: [' AD', 'ACE', 'BA '],
            key: {
                A: 'minecraft:gold_ingot', 
                B: 'ftbic:gold_gear',
                C: 'create:cogwheel',
                D: 'create:large_cogwheel',
                E: 'create:andesite_alloy'
            },
            id: `${prefix}precision_mechanism`
        },
        {
          output: 'create_sa:heat_engine',
            pattern: [' A ', 'B B', 'BCB'],
            key: {
                A: 'create:cogwheel',
                B: 'create:zinc_ingot',
                C: 'create:zinc_block'
            },
            id: `${prefix}heat_engine`
        },
        {
          output: 'create_sa:hydraulic_engine',
            pattern: ['ABA', 'C C', 'CDC'],
            key: {
                A: 'minecraft:copper_ingot',
                B: 'create:cogwheel',
                C: 'create:fluid_tank',
                D: 'minecraft:copper_block'
            },
            id: `${prefix}hydraulic_engine`
        },
        {
          output: 'create:mechanical_plough',
            pattern: ['AAA', 'BBB', ' C '],
            key: {
                A: 'create:brass_sheet',
                B: 'create:brass_ingot',
                C: 'create:andesite_casing'
            },
            id: `${prefix}mechanical_plough`
        },
        {
          output: 'create_sa:steam_engine',
            pattern: [' A ', 'B B', 'BCB'],
            key: {
                A: 'create:cogwheel',
                B: 'create:brass_ingot',
                C: 'create:brass_block'
            },
            id: `${prefix}steam_engine`
        },
        {
          output: '2x create:andesite_casing',
            pattern: ['BAB', 'CDC', 'BAB'],
            key: {
                A: 'minecraft:iron_ingot',
                B: 'create:andesite_alloy',
                C: '#forge:ingots/zinc',
                D: '#minecraft:logs'
            },
            id: `${prefix}andesite_casing`
        },
        {
            output: 'create_sa:creative_filling_tank',
            pattern: [' A ', 'CBC', ' D '],
            key: {
                A: 'create_sa:large_fueling_tank',
                B: 'avaritia:infinity_nugget',
                C: 'create:precision_mechanism',
                D: 'create_sa:large_filling_tank'
            },
            id: `${prefix}creative_filling_tank`
        }
  ];
  
  recipes.forEach((recipe) => {
      event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
  });
});