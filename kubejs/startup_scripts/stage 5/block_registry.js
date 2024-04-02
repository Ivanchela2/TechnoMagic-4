StartupEvents.registry('block', event => {
    event.create('gribtweaks:comb_infinity')
    .soundType('metal')
    .hardness(0.6)
    .displayName('Блок Бесконечных сот') 
    .tagBlock('forge:storage_blocks') 
    .tagBlock('forge:storage_blocks/honeycombs')
    .requiresTool(false)
  
    event.create('gribtweaks:comb_neutronium')
    .hardness(0.6)
    .displayName('Блок нейтроных сот') 
    .tagBlock('forge:storage_blocks') 
    .tagBlock('forge:storage_blocks/honeycombs')
    .requiresTool(false)
  
})