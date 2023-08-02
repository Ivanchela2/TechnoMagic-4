ServerEvents.recipes((event) => {
  event.remove([
      { output:'alchemistry:combiner' },
      { output:'alchemistry:dissolver' },
      { output:'alchemistry:compactor' },
      { output:'alchemistry:reactor_output' },
      { output:'alchemistry:reactor_input' },
      { output:'alchemistry:reactor_energy' },
      { output:'alchemistry:reactor_casing' },
      { output:'alchemistry:fusion_chamber_controller' },
      { output:'alchemistry:fusion_core' },    
      { output:'alchemistry:fission_chamber_controller' },
      { output:'alchemistry:liquifier' },
      { output:'alchemistry:fission_core' },
      { output:'alchemistry:atomizer' }
  ]);
});