ServerEvents.recipes((event) => {
  const prefix = 'gribtweaks:deeperdarker/shaped/';
  const recipes = [
        {
          output: 'deeperdarker:reinforced_echo_shard',
          pattern: ['DAB', 'ACA', 'BAD'],
          key: {
            A: 'deeperdarker:warden_carapace',
            B: 'minecraft:phantom_membrane',
            C: 'minecraft:echo_shard',
            D: 'spirit:soul_steel_ingot'
          },
          id: `${prefix}reinforced_echo_shard`
        },
        {
          output: '2x minecraft:echo_shard',
          pattern: ['AA ', 'ABA', ' AA'],
          key: {
            A: 'deeperdarker:soul_dust',
            B: 'minecraft:amethyst_shard'
          },
          id: `${prefix}echo_shard`
        },
        {
          output: 'deeperdarker:warden_carapace',
          pattern: [' CB', 'CBA', 'BA '],
          key: {
            A: 'twilightforest:ironwood_ingot',
            B: 'minecraft:echo_shard',
            C: 'gribtweaks:component_ingot'
          },
          id: `${prefix}warden_carapace`
        },
        {
          output: 'deeperdarker:soul_crystal',
          pattern: ['ABC', 'BDB', 'CBA'],
          key: {
            A: 'deeperdarker:soul_dust',
            B: 'minecraft:echo_shard',
            C: 'deeperdarker:warden_carapace',
            D: 'forbidden_arcanus:arcane_crystal'
          },
          id: `${prefix}soul_crystal`
        },
        {
          output: 'deeperdarker:heart_of_the_deep',
          pattern: ['BCB', 'ADA', 'BCB'],
          key: {
            A: 'deeperdarker:soul_crystal',
            B: 'naturesaura:depth_ingot',
            C: 'deeperdarker:warden_carapace',
            D: 'gribtweaks:sculk_advanced_component'
          },
          id: `${prefix}heart_of_the_deep`
        }
  ];
  
  recipes.forEach((recipe) => {
      event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
  });
});