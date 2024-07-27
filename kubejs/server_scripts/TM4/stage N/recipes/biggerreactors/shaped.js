ServerEvents.recipes(event => {
    const prefix = 'gribtweaks:biggerreactors/shaped/';
    const recipes = [
      // РЕАКТОР
      {
        output: '3x biggerreactors:reactor_casing',
        pattern: ['GAL', 'CRC', 'LNG'],
        key: {
          A: 'chemlib:actinium_ingot', 
          C: 'gribtweaks:dense_carbon_plate', 
          G: '#forge:storage_blocks/graphite', 
          L: '#forge:plates/lead',
          N: 'chemlib:niobium_ingot', 
          R: 'alchemistry:reactor_casing'
        },
        id: `${prefix}reactor_casing`
      },
      {
        output: 'biggerreactors:reactor_access_port',
        pattern: ['CPC', ' H ', 'CDC'],
        key: {
          C: 'biggerreactors:reactor_casing', 
          D: 'gribtweaks:dense_spectral_plate', 
          H: 'sophisticatedstorage:netherite_barrel',
          P: 'gribtweaks:photoniy_ingot'
        },
        id: `${prefix}reactor_access_port`
      },
      {
        output: 'biggerreactors:reactor_power_tap',
        pattern: ['CDC', ' M ', 'CDC'],
        key: {
          C: 'biggerreactors:reactor_casing', 
          D: 'gribtweaks:dense_spectral_plate', 
          M: 'ftbic:ev_battery_box'
        },
        id: `${prefix}reactor_power_tap`
      },
      {
        output: 'biggerreactors:reactor_fuel_rod',
        pattern: ['CCC', 'RGR', 'RPR'],
        key: {
          C: 'biggerreactors:reactor_casing', 
          G: '#forge:storage_blocks/graphite',
          P: 'gribtweaks:dense_carbon_plate',
          R: 'biggerreactors:reactor_glass'
        },
        id: `${prefix}reactor_fuel_rod`
      },
      {
        output: 'biggerreactors:reactor_coolant_port',
        pattern: ['CHC', 'CGC', 'CHC'],
        key: {
          C: 'biggerreactors:reactor_casing', 
          G: '#forge:storage_blocks/graphite',
          H: 'ftbic:small_coolant_cell'
        },
        id: `${prefix}reactor_coolant_port`
      },
      {
        output: 'gribtweaks:reinforced_ludicrite_block',
        pattern: ['ABA', 'SLS', 'ABA'],
        key: {
          A: 'gribtweaks:super_alloy',
          B: '#forge:storage_blocks/steel',
          L: 'biggerreactors:ludicrite_block',
          S: 'gribtweaks:dense_carbon_plate',
        },
        id: `${prefix}reinforced_ludicrite_block`
      },
      {
        output: 'gribtweaks:reinforced_ludicrite_block',
        pattern: ['LLL', 'LLL', 'LLL'],
        key: {
          L: 'gribtweaks:reinforced_ludicrite_ingot'
        },
        id: `${prefix}reinforced_ludicrite_block_of_ingots`
      },
      {
        output: '9x gribtweaks:reinforced_ludicrite_ingot',
        pattern: ['L'],
        key: {
          L: 'gribtweaks:reinforced_ludicrite_block'
        },
        id: `${prefix}reinforced_ludicrite_ingot`
      },
      // ТЕПЛООБМЕННИК
      {
        output: 'biggerreactors:heat_exchanger_casing',
        pattern: ['CSC', 'SRS', 'CSC'],
        key: {
          C: '#forge:ingots/copper', 
          R: 'biggerreactors:reactor_casing',
          S: '#forge:ingots/steel'
        },
        id: `${prefix}heat_exchanger_casing`
      },
      {
        output: 'biggerreactors:heat_exchanger_evaporator_channel',
        pattern: ['CGS', 'CGS', 'CGS'],
        key: {
          C: '#forge:ingots/copper', 
          G: 'ftbic:reinforced_glass', 
          S: '#forge:ingots/steel'
        },
        id: `${prefix}heat_exchanger_evaporator_channel`
      },
      // ТУРБИНА
      {
        output: 'biggerreactors:turbine_casing',
        pattern: ['QGQ', 'SRS', 'QGQ'],
        key: {
          G: '#forge:ingots/graphite', 
          Q: '#forge:storage_blocks/quartz', 
          R: 'biggerreactors:reactor_casing',
          S: '#forge:ingots/steel'
        },
        id: `${prefix}turbine_casing`
      },
      {
        output: 'biggerreactors:turbine_rotor_blade',
        pattern: ['BSS'],
        key: {
          B: 'biggerreactors:blutonium_ingot', 
          S: '#forge:ingots/steel'
        },
        id: `${prefix}turbine_rotor_blade`
      },
      {
        output: 'biggerreactors:turbine_rotor_shaft',
        pattern: ['SBS'],
        key: {
          B: 'biggerreactors:blutonium_ingot', 
          S: '#forge:ingots/steel'
        },
        id: `${prefix}turbine_rotor_shaft`
      }
    ];
  
  
    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
  
  });