ServerEvents.recipes((event) => {
  const prefix = 'gribtweaks:alchemistry/shaped/';
  const recipes = [
      // доп. предметы для крафтов:
    {
      output: 'minecraft:bell',
      pattern: ['PFP', 'LRL', 'L L'],
      key: {
        F: 'forbidden_arcanus:golden_feather', 
        P: 'create:brass_sheet',
        L: '#forge:ingots/brass',
        R: 'create:mechanical_press'
      },
      id: 'gribtweaks:minecraft/shaped/bell'
    },
      // мод Alchemistry:
    {
      output: 'alchemistry:combiner',
      pattern: ['SRS', 'CEC', 'SMS'],
      key: {
        C: 'reaper:reaper_generator',
        E: 'gribtweaks:advanced_casing',
        M: 'ftbic:ev_battery_box',
        S: '#forge:storage_blocks/steel',
        R: 'create_enchantment_industry:experience_rotor'
      },
      id: `${prefix}combine`
    },
    {
      output: 'alchemistry:dissolver',
      pattern: ['SRS', 'CEC', 'SMS'],
      key: {
        C: 'reaper:reaper_generator',
        E: 'gribtweaks:advanced_casing',
        M: 'ftbic:ev_battery_box',
        S: '#forge:storage_blocks/steel',
        R: 'create_things_and_misc:vibration_mechanism'
      },
      id: `${prefix}dissolver`
    },
    {
      output: 'alchemistry:compactor',
      pattern: ['SRS', 'CEC', 'PMP'],
      key: {
        C: 'reaper:reaper_generator',
        E: 'gribtweaks:advanced_casing',
        M: 'ftbic:ev_battery_box',
        P: 'gribtweaks:dense_carbon_plate',
        S: '#forge:storage_blocks/steel',
        R: 'minecraft:bell'
      },
      id: `${prefix}compactor`
    },
    {
      output: '3x alchemistry:reactor_casing',
      pattern: ['PIB', 'LWL', 'BIP'],
      key: {
        B: '#forge:ingots/beryllium',
        I: '#forge:storage_blocks/iron',
        L: '#forge:storage_blocks/lead',
        P: 'gribtweaks:proton',
        W: 'ftbic:reinforced_stone',
      },
      id: `${prefix}reactor_casing`
    },
    {
      output: 'alchemistry:reactor_energy',
      pattern: ['PCB', 'SES', 'BCP'],
      key: {
        B: '#forge:ingots/beryllium',
        C: 'alchemistry:reactor_casing',
        S: 'ftbic:energy_storage_upgrade',
        P: 'gribtweaks:proton',
        E: 'ftbic:energy_crystal'
      },
      id: `${prefix}reactor_energy`
    },
    {
      output: 'alchemistry:reactor_input',
      pattern: ['PCB', 'CSC', 'BCP'],
      key: {
        B: '#forge:ingots/beryllium',
        C: 'alchemistry:reactor_casing',
        P: 'gribtweaks:proton',
        S: 'ae2:export_bus'
      },
      id: `${prefix}reactor_input`
    },
    {
      output: 'alchemistry:reactor_output',
      pattern: ['PCB', 'CSC', 'BCP'],
      key: {
        B: '#forge:ingots/beryllium',
        C: 'alchemistry:reactor_casing',
        P: 'gribtweaks:proton',
        S: 'ae2:import_bus'
      },
      id: `${prefix}reactor_output`
    }
  ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});